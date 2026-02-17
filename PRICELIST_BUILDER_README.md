# Pricelist Builder – Staff Section

This document describes the **Pricelist Builder** feature in the staff section: a mobile-friendly tool for sales staff to create and manage customer-specific price lists while on the road.

---

## Summary

| Topic | Detail |
|-------|--------|
| **Purpose** | Let sales staff create and save negotiated prices per product, per customer, when visiting shops. |
| **Location** | Staff section → **Pricelist Builder** (dedicated section). |
| **Product sources** | Products can be picked from **Plain Packaging** and **Printed Packaging** catalogues. |
| **Data scope** | Prices are saved **per customer**: each pricelist is tied to one customer and contains product lines with agreed prices. |
| **Lifecycle** | Pricelist **status**: draft / active / archived; **effective dates**: valid_from, optional valid_to (§8). **One active per customer:** when activating, auto-archive previous active (Option A). |
| **Unit & price** | **Unit** comes from product (read-only); staff edits **price** only (§8.3). **Duplicate pricelist** on detail view (§8.4). |
| **UI** | Mobile-first, touch-friendly; suitable for use on the road. |

---

## 1. Who uses it

- **Sales staff** (and optionally admins) use the Pricelist Builder when:
  - Visiting a customer and negotiating prices.
  - Creating a new customer-specific price list.
  - Viewing or editing an existing customer pricelist.

Staff access it from the Staff Dashboard or the staff bottom navigation.

---

## 2. Entry point and main choices

When a staff member opens **Pricelist Builder** they see two main options:

1. **View price lists**  
   Opens a list of existing pricelists. Each can be opened for a **detail view** where they can see all products and prices and **edit** the pricelist (customer name, notes, add/remove products, change prices).

2. **Create new pricelist**  
   Starts a new pricelist for a **new customer**. They enter the customer name, then add products (from Plain Packaging and/or Printed Packaging) and set prices for each. The pricelist is saved for that customer.

---

## 3. Data model (conceptual)

- **Pricelist**  
  - Belongs to one **staff user** (creator).  
  - Has a **customer name** (and optional notes).  
  - Has a **status**: `draft` | `active` | `archived` (see §10.1).  
  - Has **effective dates**: `valid_from` (date), optional `valid_to` (see §10.2).  
  - Contains a list of **lines** (items).

- **Pricelist item (line)**  
  - One product reference: either from **Plain Packaging** or **Printed Packaging**.  
  - Stored: product type (plain/printed), product id, product name (for display), **unit label from product (read-only)**, and **agreed price** (staff-editable). See §10.3.  
  - Prices are the negotiated values for that customer only.

So: **one pricelist = one customer; many lines = many products with saved prices for that customer.** Status and effective dates give a lightweight lifecycle (draft → active → archived; optional valid_from / valid_to).

---

## 4. Product sources

- **Plain Packaging**  
  Products from the plain packaging list (e.g. tiered by case quantity). Staff picks the product; the agreed price is stored on the pricelist line (e.g. price per case or per tier as negotiated).

- **Printed Packaging**  
  Products from the main printed packaging / catalogue list. Same idea: pick product, set and save the negotiated price for that customer.

The UI should let staff **pick from both** when building or editing a pricelist (e.g. tabs or sections for “Plain” and “Printed”). Picking must be **search-first**, not scroll-only — see §7.

---

## 5. UI behaviour (mobile-friendly)

- **Landing**  
  Two clear actions: “View price lists” and “Create new pricelist”.

- **List view**  
  All pricelists (for that staff user) shown as a list. Each row shows customer name and optionally last updated. Tapping opens **detail view**.

- **Detail view**  
  - Customer name (editable).  
  - Optional notes (editable).  
  - **Status** (draft | active | archived) and **effective dates** (valid_from, optional valid_to); see §10.  
  - List of lines: product name, **unit (read-only, from product)**, price (editable).  
  - Actions: **Edit** (change name, notes, status, dates, add/remove lines, change prices), **Duplicate pricelist** (creates new draft with copied lines; see §10.4), and optionally delete pricelist.

- **Create / Edit flow**  
  - Customer name (required for new).  
  - Add product: choose “Plain” or “Printed”, **then search by name** in the product picker (see §7). Select product; **unit is pulled from the product and locked (read-only)**; staff enters **price only** (see §10.3).  
  - Remove line or change price as needed.  
  - Save: pricelist is stored (with status and optional valid_from / valid_to).

Design should follow the rest of the staff section: large touch targets, readable text, safe-area aware, and works well on small screens.

---

## 6. Customers table (required)

**The application does not currently have a dedicated customers table.** For the Pricelist Builder (and for a consistent notion of “customer” across visits, quotes, and orders), we will need to **create a customers table**.

- **Purpose**  
  Store B2B/shop customers (the businesses that staff visit and for whom they build pricelists). This is separate from the `users` table (which holds site accounts, including role `customer` for end users).

- **Planned use**  
  - Pricelists can optionally reference a customer by id (e.g. `customer_id` on `customer_pricelists`) instead of or in addition to a free-text customer name.  
  - The same customer record can be reused for outbound visits (leads), quotes, and orders.  
  - Staff can search/select an existing customer when creating a pricelist, or create a new customer when needed.

- **Suggested fields (to be finalised in implementation)**  
  - id (e.g. UUID or serial), name, contact name, phone, email, address (or address lines), optional notes, created_at, updated_at.  
  - Optionally: which staff user “owns” or last contacted the customer.

Implementation will add a migration to create the `customers` table and, when ready, link `customer_pricelists` (and other features) to it.

---

## 7. Product picker: search (must-have for mobile)

With catalogue sizes that are large and growing, **scrolling through long lists will kill usability** on mobile. Browsing alone is not acceptable.

The product picker **must** be built around **search-first** behaviour:

| Requirement | Detail |
|-------------|--------|
| **Search by name** | **Must-have.** Staff type (e.g. product name or keyword) and see matching products. No reliance on scroll-only lists. |
| **Fast results** | Results must return quickly. Back the picker with a search-capable API (e.g. server-side search or fast client filter on a reasonable dataset). |
| **Mobile keyboard friendly** | Input must work well with the on-screen keyboard: focus management, no viewport jumps, and “done”/“search” actions that make sense on mobile. |
| **Debounce** | **Ideally use debounce** on the search input (e.g. 200–300 ms) to avoid firing a request on every keystroke and to keep the UI responsive. |

In short: the product picker **must support search by name**, with **fast results** and a **mobile-friendly** experience; **ideally debounce** the search input. Do not ship a picker that relies on scrolling long catalogues on small screens.

---

## 8. Remaining practical gaps (real-world)

These are the things that will actually bite PrintnPack in the field. Build them in from the start or plan them as the next iteration.

### 8.1 Pricelist status (single biggest missing field)

Right now every pricelist is just editable forever. In reality reps will: **create during visit** → **tweak later** → **replace next quarter** → **keep history**. Without status the list becomes messy fast.

**Add to pricelist:**

| Value | Meaning |
|-------|--------|
| `draft` | Work in progress; created during or after visit, not yet in use. |
| `active` | In use for this customer; current pricing. |
| `archived` | Replaced or no longer in use; kept for history. |

**Option A (strict — preferred):** Only **one active pricelist per customer**. When a pricelist is set to `active` for a given customer, **automatically archive** any other pricelist that is currently `active` for that same customer. This keeps “current pricing” unambiguous and avoids confusion in the field.

**Why this matters:** Sales flow is relationship-based and negotiated. Shops will have **old pricing**, **new pricing**, **trial pricing**. You need a lightweight lifecycle. **This is the single biggest missing field.**

---

### 8.2 Effective date (small but high value)

You don’t yet capture **when** the pricing applies. Real scenarios reps will hit: *“Use this price from next month.”* or *“Promo price until end of summer.”*

**Minimum addition (at pricelist level):**

- **valid_from** (date) — from when this pricelist applies.
- **valid_to** (date, optional) — until when (e.g. end of promo).

This costs almost nothing now and saves pain later.

---

### 8.3 Unit must NOT be staff-editable (important)

The spec previously said: *enter price (and unit if needed)*. **This is risky for PrintnPack.** The biggest real-world failure mode is **per case vs per unit** and **per 1000 vs per piece** confusion → margin destruction.

**Strong recommendation:**

- When a product is selected: **pull the unit from the product** (e.g. “per case”, “per 1000”).
- **Lock it (read-only)** in the UI.
- Staff **edits price only**.

Example:

| Product      | Unit (locked) | Price (editable) |
|-------------|----------------|-------------------|
| Pizza Box 12" | per case      | 4.20              |

This prevents costly mistakes in the field.

---

### 8.4 Duplicate pricelist (high ROI usability)

Not strictly required — but extremely practical. Real PrintnPack workflow: *“Same pricing as Centra, just tweak 2 items.”* Without duplicate → painful.

**Add one action (very cheap win):**

- On **detail view**: button or action **“Duplicate pricelist”**.
- Behaviour: creates a **new pricelist** in **draft** status with **copied lines** (same products and prices). Staff can then change customer name and tweak items.

This is a high ROI usability feature; reps will ask for it.

---

## 9. Technical notes (for implementation)

- **Database**  
  A dedicated table (e.g. `customer_pricelists`) stores: id, staff_id, customer_name, notes, **status** (e.g. `draft` | `active` | `archived`), **valid_from** (date), **valid_to** (date, optional), items (e.g. JSONB array of lines), created_at, updated_at. Run the relevant migration before using the feature. When the **customers** table exists, consider adding an optional `customer_id` foreign key. Each line in `items` stores **unit from product** (read-only in UI); staff only edits **price**.

- **APIs**  
  - List pricelists for current user (optionally filter by status).  
  - Create pricelist (customer name, optional notes, status, valid_from, valid_to, optional initial items).  
  - Get one pricelist (for detail/edit).  
  - Update pricelist (name, notes, status, valid_from, valid_to, full or partial items). When setting status to `active`, **automatically archive** any other pricelist that is `active` for the same customer (Option A: one active per customer).  
  - **Duplicate pricelist** (e.g. POST that creates a new draft with copied items from an existing pricelist).  
  - Delete pricelist (optional).  
  All endpoints are staff- (or admin-) only and scoped to the authenticated user’s pricelists.

- **Products for picker**  
  - Plain: use existing staff plain-products API (no cost).  
  - Printed: use main product catalogue or a staff-facing list (id, name, category) for the picker.  
  - **Search:** Picker must be search-first; see §7. Expose search/filter by name (and optionally category); support debounced requests and fast results.

---

## 10. Summary table

| Question | Answer |
|----------|--------|
| Where is it? | Staff section → **Pricelist Builder**. |
| What does it do? | Create and manage **customer-specific** price lists using Plain and Printed products. |
| First screen? | Choose **View price lists** (list + detail/edit) or **Create new pricelist**. |
| How are prices stored? | Per product, per customer, on the pricelist (each line has product ref + price). |
| Mobile? | Yes; UI is mobile-friendly for use on the road. |
| Customers table? | **No** — we will need to **create a customers table** for B2B/shop customers; see §6. |
| Product picker? | **Search-first, must-have:** search by name, fast results, mobile keyboard friendly, ideally debounce; no long scroll-only lists; see §7. |
| Status & dates? | **Status** draft / active / archived; **valid_from** (date), optional **valid_to**; see §8.1–8.2. **One active per customer:** when activating, auto-archive previous active (Option A). |
| Unit editable? | **No.** Unit pulled from product and **locked (read-only)**; staff edits **price only**; see §8.3. |
| Duplicate? | **Yes.** Detail view has “Duplicate pricelist” → new draft with copied lines; see §8.4. |

---

*This README describes the Pricelist Builder: purpose, entry options (view list vs create new), data model, product sources, UI behaviour, and remaining practical gaps (status, effective dates, unit locked, duplicate). Implementation details (migration, API routes, pages) should follow this spec.*
