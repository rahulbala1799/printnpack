# Pricelist – Current Functionality & Connections

This document describes the **current** Pricelist feature: what it does, which pages and APIs exist, and what it is connected to (auth, database, customers, products, staff UI).

---

## 1. What the Pricelist does

| Purpose | Sales staff create and manage **customer-specific price lists**: one pricelist per customer, with product lines and negotiated prices. Mobile-friendly for use on the road. |
| Entry | Staff Dashboard → **Pricelist** card (green, “Prices” / “Customer price lists”), or StaffLayout nav → **Pricelist**. |
| Scope | Each pricelist belongs to the **logged-in staff user**. Products are chosen from **Printed** and **Plain Pack** catalogues; **unit** comes from the product (read-only); staff only edits **price** per line. |

---

## 2. User flows (current)

### 2.1 Landing (`/staff/pricelist-builder`)

- **Route:** `pages/staff/pricelist-builder/index.js`
- **Auth:** Requires staff or admin (redirect to `/staff/login` if not).
- **UI:** Hero (“Customer Price Lists”), stats (Active / Draft / Total from API), two action cards:
  - **Create new pricelist** → `/staff/pricelist-builder/new`
  - **View all price lists** → `/staff/pricelist-builder/list`
- **API:** `GET /api/staff/pricelists` (to compute Active/Draft/Total counts).

### 2.2 List (`/staff/pricelist-builder/list`)

- **Route:** `pages/staff/pricelist-builder/list.js`
- **API:** `GET /api/staff/pricelists` with optional `?status=draft|active|archived`.
- **UI:** Topbar (Back, “All Pricelists”, New), filter chips (All / Active / Draft / Archived), list of pricelist cards (customer name, “Updated …”, status badge, product count). Tapping a card → `/staff/pricelist-builder/[id]`. Empty state when no pricelists.

### 2.3 New pricelist (`/staff/pricelist-builder/new`)

- **Route:** `pages/staff/pricelist-builder/new.js`
- **API:** `POST /api/staff/pricelists` with body: `customer_id?`, `customer_name`, `notes?`, `status` (default draft), `valid_from?`, `valid_to?`, `items` (array of `{ id, product_type, product_id, product_name, unit_label, price }`).
- **UI:** Topbar (Cancel, “New Pricelist”), form: **Customer** (required, via CustomerPicker), **Notes**, **Valid period** (From/To dates), **Products & Prices** (product lines with unit badge + price input, “Add product” opens PricelistProductPicker). Bottom bar: Cancel, “Save as draft”. On success → redirect to `/staff/pricelist-builder/[id]`.

### 2.4 Detail & Edit (`/staff/pricelist-builder/[id]`)

- **Route:** `pages/staff/pricelist-builder/[id].js`
- **APIs:**
  - **GET** `/api/staff/pricelists/[id]` — load one pricelist.
  - **PATCH** `/api/staff/pricelists/[id]` — update (customer, notes, status, valid_from, valid_to, items). When status is set to `active`, any other active pricelist for the same customer is auto-archived.
  - **DELETE** `/api/staff/pricelists/[id]` — delete.
  - **POST** `/api/staff/pricelists` with `duplicate_from_id` — duplicate (new draft with copied items).
- **View mode:** Hero (customer avatar/initials, name, ref/updated), status badge, valid-period chip, product count, notes (if any), list of items (name, unit, price). Bottom bar: Delete, Duplicate, Edit.
- **Edit mode:** Same form pattern as New (customer selector, notes, status select, valid From/To, product lines, Add product). Bottom bar: Cancel, Save. CustomerPicker and PricelistProductPicker used when changing customer or adding products.

---

## 3. Components

| Component | Role |
|-----------|------|
| **PricelistProductPicker** | Bottom-sheet overlay: search, tabs “Printed” / “Plain Pack”, list of products (name, category, unit). Calls `onSelect(product)` and `onClose()`. Prop `open` controls visibility. Fetches from `/api/staff/printed-products` and `/api/staff/plain-products` (debounced search). |
| **CustomerPicker** | Bottom-sheet overlay: search customers, list with avatar initial; “+ Add new customer” shows inline form (name*, contact, phone, email → POST `/api/staff/customers`). Calls `onSelect({ id, name })` and `onClose()`. Renders only when `open` is true. |

Shared UI is in `styles/pricelist-builder.css` (pl-* classes, DM Serif/Sans, cream/green/amber tokens).

---

## 4. APIs (current)

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/staff/pricelists` | GET | List pricelists for current user. Query: `?status=draft|active|archived`. |
| `/api/staff/pricelists` | POST | Create pricelist (customer_id, customer_name, notes, status, valid_from, valid_to, items). Or duplicate: body `{ duplicate_from_id }` → new draft with copied items. |
| `/api/staff/pricelists/[id]` | GET | Get one pricelist (must belong to current user). |
| `/api/staff/pricelists/[id]` | PATCH | Update pricelist. On status → active: auto-archive other active for same customer. |
| `/api/staff/pricelists/[id]` | DELETE | Delete pricelist (must belong to current user). |
| `/api/staff/customers` | GET | List customers. Query: `?search=…` (name, contact, phone, email). |
| `/api/staff/customers` | POST | Create customer. Body: `{ name, contact_name?, phone?, email?, address?, notes? }`. |
| `/api/staff/printed-products` | GET | Products for Printed tab. Query: `?search=…`. Returns id, name, category, unit_label. Source: `data/products.js`. |
| `/api/staff/plain-products` | GET | Products for Plain Pack tab. Query: `?search=…`. Returns id, name, category, unit_label: `'per case'`. Source: DB table `plain_products`. |

All staff APIs use `withAuth(..., { roles: ['staff', 'admin'] })` and scope data by `req.user.id` where applicable.

---

## 5. Database (current)

| Table | Role |
|-------|------|
| **customer_pricelists** | One row per pricelist: id (UUID), staff_id (UUID → users.id), customer_id (UUID → customers.id, nullable), customer_name (TEXT), notes, status (draft\|active\|archived), valid_from, valid_to (dates), items (JSONB array of lines), created_at, updated_at. Each line in items: id, product_type (plain\|printed), product_id, product_name, unit_label, price. |
| **customers** | B2B/shop customers: id (UUID), name, contact_name, phone, email, address, notes, created_at, updated_at. |
| **users** | Staff (and admin) accounts; staff_id in customer_pricelists references users.id. |
| **plain_products** | Read by `/api/staff/plain-products` for Plain Pack picker (no cost sent to staff). |

Migrations: `007_customer_pricelists.js`, `008_pricelist_status_dates.js`, `009_customers_table.js`.

---

## 6. What the Pricelist is connected to

| Connection | How |
|------------|-----|
| **Auth** | Every pricelist page checks `/api/auth/me`; role must be `staff` or `admin`. All staff APIs use `lib/withAuth.js` (JWT from cookie, role check). |
| **Staff Dashboard** | `pages/staff/index.js`: “Pricelist” card (green, staff-op g) links to `/staff/pricelist-builder`. |
| **StaffLayout** | `components/staff/StaffLayout.js`: nav item “Pricelist” with icon, href `/staff/pricelist-builder`. |
| **Customers** | Pricelist stores optional `customer_id` (FK to `customers`) and always `customer_name`. New/Edit use **CustomerPicker** → GET/POST `/api/staff/customers`. Creating a customer from the picker returns the new customer; selecting one sets customer_id + customer_name on the pricelist. |
| **Printed products** | **PricelistProductPicker** “Printed” tab → GET `/api/staff/printed-products` → `data/products.js`. Used only for id, name, category, unit_label (no pricing from catalogue). |
| **Plain packaging** | **PricelistProductPicker** “Plain Pack” tab → GET `/api/staff/plain-products` → DB `plain_products`. Same idea: product ref + unit_label (“per case”); staff sets price on the line. |
| **Database** | Pricelists: `customer_pricelists`. Customers: `customers`. Access via `lib/database.js` (getRow, getRows, query). |

---

## 7. File map (quick reference)

| Area | Files |
|------|--------|
| **Pages** | `pages/staff/pricelist-builder/index.js`, `list.js`, `new.js`, `[id].js` |
| **Components** | `components/staff/PricelistProductPicker.js`, `components/staff/CustomerPicker.js` |
| **Styles** | `styles/pricelist-builder.css` |
| **APIs** | `pages/api/staff/pricelists/index.js`, `pages/api/staff/pricelists/[id].js`, `pages/api/staff/customers/index.js`, `pages/api/staff/printed-products.js`, `pages/api/staff/plain-products.js` |
| **Auth** | `lib/withAuth.js`, `lib/auth.js`; pages use `/api/auth/me` |
| **DB** | `lib/database.js`; migrations `007`, `008`, `009` |
| **Staff entry** | `pages/staff/index.js` (dashboard card), `components/staff/StaffLayout.js` (nav) |

---

## 8. Behaviour summary

- **One pricelist = one customer** (name + optional customer_id). **One active per customer:** setting a pricelist to active auto-archives any other active pricelist for that customer.
- **Items:** product_type (plain | printed), product_id, product_name, unit_label (from product, read-only in UI), price (staff-editable). Stored in `customer_pricelists.items` (JSONB).
- **Status:** draft → active → archived. **Valid period:** optional valid_from, valid_to.
- **Duplicate:** creates a new draft with the same items (and optional new customer name); customer_id copied from source when duplicating.

This README reflects the implementation as of the last update; for product-picker and UI details see `PRICELIST_BUILDER_UI_README.md`, and for design/requirements see `PRICELIST_BUILDER_README.md`.
