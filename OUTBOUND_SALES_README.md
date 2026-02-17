# Outbound Sales Session – Shop Visits and Lead Pipeline

This document describes the **outbound sales session** feature: staff visiting multiple shops, logging each visit (shop, location, contact outcome, materials dropped), and feeding that data into the **lead pipeline** in the Admin dashboard. **Location is captured using the OpenStreetMap (OSM) / Nominatim API** (open, free maps).

---

## Summary

| Topic | Detail |
|-------|--------|
| **Who** | **Staff** (logged in at `/staff`). Mobile-first; staff are in the field. |
| **What** | Staff go on an **outbound sales session** visiting many shops and log each visit. |
| **Per visit** | Shop name, **location** (OSM), met owner/KDM?, interested? or leaflet dropped?, optional **products interested** (Plain + Printed). |
| **Location** | **OpenStreetMap / Nominatim API** for geocoding and optional map display. |
| **Lead pipeline** | Each logged visit creates or updates a **lead** visible in **Admin → Leads** with source **"Outbound Sales Visit"**. |
| **Device** | **Mobile-first** (same as Staff portal). Quick capture, GPS/address, minimal typing. |
| **Staff on lead** | Every lead from a visit must show **which staff member** made the visit (for follow-up and performance). |
| **Same shop** | **One lead per shop**; on repeat visit staff is asked **“Is this the same shop?”** before appending (no brittle exact match). |
| **Poor connectivity** | Form allows **manually typed address** if Nominatim fails; **queue failed submits** and retry when back online. Not a full offline webapp. |
| **Double submit** | **Idempotency key** or **debounce** on submit to prevent two leads from one double-tap. |

---

## 1. Outbound sales session – concept

- A staff member is **out on a sales session** visiting multiple shops (e.g. restaurants, takeaways, retailers).
- For **each shop visited**, the staff member logs:
  - **Which shop** (name and/or address).
  - **Location** (coordinates and/or address) – see §4 (OpenStreetMap).
  - **Contact outcome:**
    - Did they **meet the owner or key decision maker?**
      - **If yes:** Are they **interested?** (e.g. Yes / No / Follow-up later).
      - **If no:** Was any **leaflet or marketing material dropped?** (e.g. Yes / No).
  - **When** the visit occurred (date/time; can default to “now”).
- Once submitted, this **visit record** is used to create or update a **lead** in the system so it appears in the **Admin dashboard → Leads** pipeline.

---

## 2. Data to log per shop visit

| Field | Required | Description |
|-------|----------|-------------|
| **Shop name** | Yes | Name of the business/shop visited (e.g. “Joe’s Pizza”, “Main St Café”). |
| **Location** | Yes | Address and/or coordinates. Captured via OpenStreetMap (see §4). |
| **Met owner / key decision maker?** | Yes | Yes or No. |
| **If Yes – Interested?** | Conditional | Only when “Met owner/KDM” = Yes. e.g. **Yes** / **No** / **Follow-up later**. |
| **If No – Leaflet or marketing material dropped?** | Conditional | Only when “Met owner/KDM” = No. Yes or No. |
| **Visit date/time** | Yes | When the visit happened. Default: current date/time; staff can adjust. |
| **Notes** | Optional | Free text (e.g. “Owner said to call next week”, “Left menu samples”). |
| **Products interested in (Plain)** | Optional | Plain Packaging products the shop is interested in. Not compulsory; see §2.1. |
| **Products interested in (Printed)** | Optional | Printed/main catalogue products the shop is interested in. Not compulsory; see §2.1. |
| **Staff (set by server)** | Yes | Which staff member made the visit. Not sent in the request body; the server sets `staffId` and `staffName` from the authenticated session and stores them on the lead and in the visit payload. |

**Implementation note:** The form should show/hide fields based on “Met owner/KDM”: show “Interested?” when Yes, show “Leaflet/material dropped?” when No.

### 2.1 Products interested in (optional)

Two optional fields allow staff to record **which products the shop is interested in**:

- **Products interested in (Plain)** – Plain Packaging product list.
- **Products interested in (Printed)** – Main/printed product catalogue.

**Behaviour:** When the staff member taps either field, a **modal opens** with a **filtered list of products** (search/filter by name or category) and **checkboxes**. The staff member selects one or more products by ticking the checkboxes, then confirms (e.g. “Done” or “Apply”). The selected product IDs (and optionally names) are stored with the visit and included in the lead payload. This step is **not compulsory** — the fields may be left empty.

**Data stored:** Store the selected product identifiers (e.g. `plainProductIds`, `printedProductIds` or `productsInterestedPlain`, `productsInterestedPrinted`) in the visit payload and in the lead so the Admin can see which products were of interest when viewing the lead.

---

## 3. Flow into the lead pipeline (Admin dashboard)

- When a staff member **submits** a shop visit:
  1. The system **finds or creates a lead** for that shop (see **Same shop, multiple visits** below).
  2. The lead appears in **Admin → Leads** with:
     - **Source:** `Outbound Sales Visit` (so admins can filter and report on field visits).
     - **Name / Company:** From shop name (and/or contact name if captured later).
     - **Staff:** **Which staff member made the visit** must be stored and shown (e.g. `staff_id`, `staff_name`). The server sets these from the authenticated session; they are required so admins can track performance and follow up with the right person.
     - **Message / Payload:** Full visit details (shop name, location, met KDM?, interested?, leaflet dropped?, date/time, notes, staff). Store in `message` or `payload` (JSONB) for the pipeline detail view.
  3. **Status:** New leads from outbound visits typically start as **`new`**. Admin can then move them through: Contacted → Qualified → Quote Sent → Won / Lost.

### Same shop, multiple visits (recommended behaviour)

**One lead per shop; repeat visits append to that lead.** Do **not** create a new lead per visit — otherwise the pipeline fills with duplicate entries (e.g. three separate “Joe’s Pizza” leads), which is confusing when qualifying or assigning.

**Do not rely on exact match.** Matching “by shop name + location” is **fragile in practice**: shop names typed by different staff (or the same staff on different days) will vary (“Joe’s Pizza” vs “Joes Pizza” vs “Joe’s Pizzeria”), and GPS coordinates are never exactly identical across two visits. A naive exact match on name and coordinates will fail to deduplicate reliably in the field.

**Recommended approach: “Is this the same shop?” confirmation.** When the staff member submits a visit, the system may look up **possible** existing leads (e.g. by nearby location — coordinates within a radius — and/or similar shop name) and, if one or more candidates are found, **show the staff member a confirmation step**: “We have an existing lead that might be this shop: [shop name, address]. Is this the same shop?” If they confirm **Yes**, append this visit to that lead. If **No** (or no candidates found), create a new lead with this visit as the first entry. This keeps deduplication reliable without depending on brittle exact matching. Implement this explicitly so the developer does not default to an exact match on name + coordinates.

---

## 4. Location – OpenStreetMap (Open Maps) API

Location must be captured for each visit. Use **OpenStreetMap**-based services (open, free, no API key required for basic use).

### 4.1 Recommended: Nominatim (geocoding and search)

- **Nominatim** is the geocoding/search service for OpenStreetMap.
  - **Search (address → coordinates):** `GET https://nominatim.openstreetmap.org/search?q={address}&format=json`
  - **Reverse geocoding (coordinates → address):** `GET https://nominatim.openstreetmap.org/reverse?lat={lat}&lon={lon}&format=json`
- **Usage:** Staff can type an address or shop name; the app calls Nominatim to get coordinates and a display name. Or use device **GPS** (browser geolocation) to get lat/lon, then reverse-geocode to get the address.
- **Nominatim is search, not true autocomplete:** It returns results for a full (or partial) query, but it is not a typeahead API. For autocomplete-style address search, **debounce** user input (e.g. 300–500 ms) and then call Nominatim search to avoid hammering the API and to improve UX. Alternatively use **Photon** (OSM-based, open, free), which is designed for geocoding/autocomplete: [Photon](https://photon.komoot.io/). Do not assume “instant” typeahead from a single Nominatim call per keystroke.
- **Policies:** Use a proper **User-Agent** and respect Nominatim’s **usage policy** (e.g. max 1 request per second). See: [Nominatim Usage Policy](https://operations.osmfoundation.org/policies/nominatim/).

### 4.2 What to store for each visit

- **Latitude** and **longitude** (when available; see §5.1 for poor connectivity).
- **Display address** (from Nominatim or **manually typed** if geocoding is unavailable) for quick reading in the pipeline.
- Optional: raw Nominatim response in `payload` for debugging or richer display.

### 4.3 Optional: Map display

- For a map preview when logging a visit (or in Admin when viewing the lead), use **Leaflet** with **OpenStreetMap** tiles (e.g. `https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`). No API key needed.
- Leaflet + OSM is a common, open stack that fits “open maps” and works well on mobile.

### 4.4 Summary – Open Maps

| Need | Solution |
|------|----------|
| Address → coordinates | **Nominatim** search API. |
| Coordinates → address | **Nominatim** reverse API. |
| Map display | **Leaflet** + **OpenStreetMap** tiles. |
| API key | Not required for Nominatim/OSM (respect rate limits and User-Agent). |

---

## 5. Staff UX (mobile-first)

- **Entry:** From the Staff dashboard, e.g. “Outbound sales” or “Log shop visit” (or “Start sales session” then “Log visit” for each shop).
- **Form:** One screen per visit: shop name, location (search or “Use my location” or **manual address** — see §5.1), Met owner/KDM?, then conditional fields (Interested? or Leaflet dropped?), date/time, notes. Large touch targets; minimal typing; prefill “now” for date/time.
- **Location:** Either type address (debounced Nominatim search or Photon for autocomplete-style UX — see §4.1), or tap “Use my location” (browser geolocation → reverse geocode with Nominatim), or **type address manually** when geocoding is unreachable.
- **Submit:** One tap to submit; then option to “Log another visit” or return to dashboard. **Duplicate submit protection:** Use an **idempotency key** (e.g. client-generated UUID sent with the request; server ignores duplicate keys) or **debounce/disable** the submit button for 2–3 seconds after tap. Double-tap on mobile is very common; without this you will get two identical leads.
- **“Is this the same shop?”:** If the app finds possible existing leads (e.g. nearby location / similar name), show the staff a confirmation step before creating a new lead: “We have an existing lead that might be this shop: [name, address]. Is this the same shop?” If Yes, submit with “append to this lead”; if No, submit as a new lead. See §3.

### 5.1 Poor connectivity (no full offline webapp)

Staff are in the field — restaurant districts, industrial estates, or rural areas often have **patchy signal**. The app does **not** need to be a full offline-capable webapp, but it must handle failure gracefully:

- **Location when Nominatim is unreachable:** The form **must** allow submission with a **manually typed address** only (no coordinates). If Nominatim fails or times out, let the staff member enter or keep the address as text; store it as `displayAddress` and allow `latitude`/`longitude` to be null for that visit. The lead can still be created and shown in the pipeline; the admin sees the address text.
- **Failed POST to backend:** When the submit request fails (network error, 5xx), **queue the visit locally** (e.g. in `localStorage` or IndexedDB) and **retry when connectivity returns** (e.g. on next focus, or a “Retry pending” button, or when the app detects online again). Show the staff member a clear message: “Visit saved locally; we’ll sync when you’re back online.” Once the server confirms success, remove from the queue. This avoids losing visits when the staff member is in a dead zone.
- **Scope:** Full offline app (service worker, sync conflicts, etc.) is out of scope; the above is the minimum to avoid lost data and stuck forms.

---

## 6. API and data shape (suggested)

- **POST /api/staff/outbound-visit** (staff-only, authenticated).
  - **Body:** `shopName`, `latitude` (optional if manual address only), `longitude` (optional), `displayAddress`, `metOwnerOrKdm` (boolean), `interested` (optional: yes/no/follow-up), `leafletOrMaterialDropped` (optional: boolean), `visitAt` (ISO date-time), `notes` (optional), **`productsInterestedPlain`** (optional: array of product ids from Plain Packaging), **`productsInterestedPrinted`** (optional: array of product ids from main/printed catalogue), **`idempotencyKey`** (client-generated UUID; server deduplicates by this key so a retry or double-tap does not create a second lead).
  - **Server:** From the auth token/session, set **`staffId`** and **`staffName`** (or equivalent) on the lead and in the visit payload — do not rely on the client to send them. Validate, then apply **same-shop logic** (see §3): if the client indicates “append to lead [id]” (after staff confirmed “Is this the same shop?”), append this visit to that lead; otherwise create a new lead. Store all visit fields and **staff identity** in `payload` and a short summary in `message`. If `idempotencyKey` was already processed, return 200 and the existing lead/visit (idempotent).
  - **Poor connectivity:** Accept requests where `latitude`/`longitude` are null but `displayAddress` is present; the visit is still valid.
- **GET /api/staff/outbound-visits** (optional): list today’s (or current session’s) visits for the staff member – useful for “Log another visit” and to avoid duplicate submits.

---

## 7. Admin dashboard – Leads pipeline

- **Leads** from outbound visits appear in the same pipeline as other leads (**Admin → Leads**).
- **Filter by source:** “Outbound Sales Visit” so admins can see only field visits.
- **Lead detail:** Show **which staff member** made each visit (and all visits if it’s one lead per shop with appended visits). Show shop name, address/location (and optional small map via Leaflet when coordinates exist), “Met KDM?”, “Interested?” or “Leaflet dropped?”, visit date/time, notes, and **products interested** (Plain and Printed) when present. All of this can be in `payload` and rendered in the existing lead detail view.
- **Stages:** Same as existing pipeline (New → Contacted → Qualified → Quote Sent → Won / Lost).

---

## 8. Quick reference

| Question | Answer |
|----------|--------|
| Who logs visits? | **Staff** (mobile-first). |
| What is logged per shop? | Shop name, **location** (OSM or manual address), met owner/KDM?, interested? or leaflet dropped?, date/time, notes. |
| Who made the visit? | **Staff identity** (staffId, staffName) is set by the server from auth and stored on the lead; Admin sees it on each visit. |
| How is location done? | **OpenStreetMap / Nominatim** (debounced search or Photon for typeahead). Manual address allowed when Nominatim is unreachable. |
| Where do visits go? | Into the **lead pipeline** in **Admin → Leads** with source **"Outbound Sales Visit"**. |
| Same shop visited again? | **One lead per shop**; staff is shown **“Is this the same shop?”** for possible matches — confirm then append (do not use exact match on name + coordinates). |
| What if connectivity is poor? | **Manual address** allowed; **queue failed POSTs** and retry when back online. Not a full offline webapp. |
| Double-tap submit? | **Idempotency key** or **debounce** on submit button to prevent duplicate leads. |
| Pipeline stages? | Same as existing leads (new → contacted → … → won/lost). |

---

*This README defines the outbound sales session: staff log each shop visit (shop, location via OpenStreetMap/Nominatim or manual address, contact outcome, materials dropped). Staff identity is stored on each visit; one lead per shop with visits appended; poor connectivity handled with manual address and queued retries; duplicate submit prevented with idempotency or debounce. English only.*
