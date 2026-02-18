# Pricelist Builder – UI Code Reference (Staff)

This document contains the **UI code** for the Pricelist section in the staff area. It is for reference only.

---

## 1. Staff layout – Pricelist nav item

**File:** `components/staff/StaffLayout.js`

Add to `navItems`:

```js
{ href: '/staff/pricelist-builder', label: 'Pricelist', icon: 'pricelist' },
```

Add to `icons`:

```js
pricelist: (
  <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <line x1="10" y1="9" x2="8" y2="9" />
  </svg>
),
```

---

## 2. Staff dashboard – Pricelist card (Operations grid)

**File:** `pages/staff/index.js`

Card in the operations grid (e.g. after Products, before Plain Pack):

```jsx
<Link href="/staff/pricelist-builder" className="staff-op g">
  <div className="staff-op-top">
    <div className="staff-op-icon g">
      <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="var(--g)" strokeWidth="1.8">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <line x1="10" y1="9" x2="8" y2="9" />
      </svg>
    </div>
    <span className="staff-op-count g">Prices</span>
  </div>
  <div>
    <div className="staff-op-title">Pricelist</div>
    <div className="staff-op-sub">Customer price lists</div>
  </div>
</Link>
```

Ensure `.staff-op.g`, `.staff-op-icon.g`, `.staff-op-count.g` exist in `styles/staff-dashboard.css` (green theme).

---

## 3. Pricelist Builder landing page

**File:** `pages/staff/pricelist-builder/index.js`

- **Route:** `/staff/pricelist-builder`
- **Behaviour:** Auth check → two main actions: “View price lists” (link to list) and “Create new pricelist” (link to new).
- **Layout:** `StaffLayout` with title “Pricelist Builder”. Two cards: one for list (clipboard icon + “View price lists” / “See all pricelists, open detail and edit”), one primary CTA for new (green, “Create new pricelist” / “New customer and add products with negotiated prices”).

Full file: see repo `pages/staff/pricelist-builder/index.js`.

---

## 4. Price lists list page

**File:** `pages/staff/pricelist-builder/list.js`

- **Route:** `/staff/pricelist-builder/list`
- **Behaviour:** Fetch `/api/staff/pricelists` (optional `?status=draft|active|archived`). Filter chips: All, draft, active, archived. List of pricelists: customer name, item count, updated date, status badge. Each row links to `/staff/pricelist-builder/[id]`. “← Back to Pricelist Builder” link.
- **Helpers:** `formatDate(d)`, `statusBadge(status)` (draft=amber, active=green, archived=gray).

Full file: see repo `pages/staff/pricelist-builder/list.js`.

---

## 5. New pricelist page

**File:** `pages/staff/pricelist-builder/new.js`

- **Route:** `/staff/pricelist-builder/new`
- **Behaviour:**
  - **Customer *:** Select via `CustomerPicker` (search or “Add new customer”). Shows selected name + “Change” or “Select customer…”.
  - **Notes (optional):** Textarea.
  - **Products & prices:** “+ Add product” opens `PricelistProductPicker`. List of lines: product name, unit (locked), price input, remove. Unit from product (read-only).
  - **Actions:** “Save as draft” (POST `/api/staff/pricelists` with `customer_id`, `customer_name`, `notes`, `status: 'draft'`, `items`), “Cancel” (link back to builder).
- **State:** `customer` (selected `{ id, name }`), `notes`, `items` (array of `{ id, product_type, product_id, product_name, unit_label, price }`), `showProductPicker`, `showCustomerPicker`.

Full file: see repo `pages/staff/pricelist-builder/new.js`.

---

## 6. Pricelist detail / edit page

**File:** `pages/staff/pricelist-builder/[id].js`

- **Route:** `/staff/pricelist-builder/[id]`
- **Behaviour:**
  - **View mode:** Customer name, notes, status badge, valid from/to, items list (name, unit, price). Buttons: “Edit pricelist”, “Duplicate pricelist”, “Delete pricelist”. “← Back to list”.
  - **Edit mode:** Customer (from form, “Change” opens `CustomerPicker`), Notes, Status (select), Valid from/to (date inputs), Items (same as new: add via `PricelistProductPicker`, unit locked, price editable, remove). Save (PATCH), Cancel.
- **APIs:** GET `/api/staff/pricelists/[id]`, PATCH (update), DELETE, POST `/api/staff/pricelists` with `duplicate_from_id` for duplicate.
- **One active per customer:** Handled in API when setting status to `active`.

Full file: see repo `pages/staff/pricelist-builder/[id].js`.

---

## 7. Product picker component

**File:** `components/staff/PricelistProductPicker.js`

- **Props:** `onSelect(product)`, `onClose()`.
- **Behaviour:** Full-screen overlay. Search input (debounced 280 ms), tabs “plain” / “printed”. Fetches `/api/staff/plain-products?search=` or `/api/staff/printed-products?search=`. List of products: name, category, unit_label. On click, calls `onSelect({ product_type, product_id, product_name, unit_label })` and `onClose()`.
- **Plain:** Requires search (no full list). **Printed:** Can load without search.

Full file: see repo `components/staff/PricelistProductPicker.js`.

---

## 8. Customer picker component

**File:** `components/staff/CustomerPicker.js`

- **Props:** `onSelect({ id, name })`, `onClose()`.
- **Behaviour:** Full-screen overlay. Search input (debounced 280 ms). Fetches `/api/staff/customers?search=`. List of customers: name, contact/phone/email. “+ Add new customer” toggles form: Name * (required), Contact name, Phone, Email. “Create & select” POSTs `/api/staff/customers`, then calls `onSelect(customer)` and closes.
- **State:** `search`, `debouncedSearch`, `customers`, `loading`, `showNewForm`, `newName`, `newContact`, `newPhone`, `newEmail`, `creating`.

Full file: see repo `components/staff/CustomerPicker.js`.

---

## 9. Summary

| Piece | File | Purpose |
|-------|------|--------|
| Nav item | `StaffLayout.js` | Pricelist link + icon in bottom nav |
| Dashboard card | `pages/staff/index.js` | Pricelist card in Operations grid (green) |
| Landing | `pages/staff/pricelist-builder/index.js` | View lists / Create new |
| List | `pages/staff/pricelist-builder/list.js` | Filter + list of pricelists → detail |
| New | `pages/staff/pricelist-builder/new.js` | Customer picker + products + prices, save draft |
| Detail/Edit | `pages/staff/pricelist-builder/[id].js` | View or edit, duplicate, delete |
| Product picker | `components/staff/PricelistProductPicker.js` | Search plain/printed, select product (unit locked) |
| Customer picker | `components/staff/CustomerPicker.js` | Search customers or add new |

Styles use staff design tokens: `var(--canvas)`, `var(--g)`, `var(--g-dim)`, `var(--g-text)`, `var(--line)`, `var(--ink)`, `var(--ink-2)`, `var(--ink-3)`, `var(--white)`, `var(--r)`, etc. See `styles/staff-dashboard.css`.
