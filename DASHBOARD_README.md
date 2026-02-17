# Dashboard – Overview and Requirements

This document describes the **dashboards** (Admin and Staff): who uses them, how they are designed, and what content and rules apply. The **Staff portal is mobile-first** because staff will mainly log in from mobile devices. Both product lists (main products and Plain Packaging) are shown on the Staff dashboard; for **Plain Packaging**, **cost price must not be shown** to staff.

---

## Summary

| Topic | Detail |
|-------|--------|
| **Dashboards** | **Admin** (`/admin`) and **Staff** (`/staff`). Different entry points and permissions. |
| **Staff portal** | **Mobile-first.** Staff mainly use the dashboard from mobile; layout and UX must prioritise small screens. |
| **Staff dashboard content** | Shows **product lists**: main products and Plain Packaging. |
| **Plain Packaging on staff** | **Do not show cost price** to staff. Show product names, descriptions, and other non-cost fields only. |
| **Admin dashboard** | Desktop-oriented; full access to settings, staff management, and cost data as needed. |

---

## 1. Dashboard types

### Admin dashboard (`/admin`)

- **Who:** Admins only. Login at `/login` (email + password).
- **Use case:** Full back-office: products, plain packaging (with cost), leads, email config, staff management, settings.
- **Device:** Typically used on desktop. No requirement for mobile-first.

### Staff dashboard (`/staff`)

- **Who:** Staff only. Login at `/staff/login` (User ID + password). See `STAFF_SECTION_README.md` for access and security.
- **Use case:** Day-to-day tasks: view product lists (main + Plain Packaging), orders, quotes. Used mainly **on mobile**.
- **Device:** **Mobile-first.** Layout, touch targets, navigation, and content must work well on phones first; then scale up for tablet/desktop.

---

## 2. Mobile-first Staff portal

The Staff portal will be **logged in mainly from mobile**. Therefore:

- **Design and build** the Staff dashboard and its screens (product lists, orders, quotes, etc.) **mobile-first**:
  - Layout and navigation optimised for small screens (e.g. single column, bottom or top nav, large tap targets).
  - Readable text and spacing without zooming.
  - Forms and lists usable with touch (no hover-only actions).
- **Breakpoints:** Start from the smallest viewport (e.g. 320px width), then add tablet/desktop enhancements (e.g. `md:` / `lg:`) where it helps.
- **Performance:** Keep payloads and interactions light so the staff experience is fast on mobile networks.
- **No assumption** that staff will primarily use desktop; avoid desktop-only patterns (e.g. dense tables with many columns that don’t collapse well).

Admin dashboard can remain desktop-oriented; mobile-first applies to the **Staff** portal.

---

## 3. Product lists on the Staff dashboard

The Staff dashboard must show **both**:

1. **Main product list** – The same product catalogue the site uses (e.g. from `data/products` or equivalent). Staff can view product names, descriptions, and any other fields that are appropriate for staff (e.g. prices shown to customers, categories). Cost/margin fields may be hidden from staff if desired; this README only mandates hiding cost for Plain Packaging (see below).

2. **Plain Packaging product list** – Products from the Plain Packaging data (e.g. database-driven). Staff can browse and use these for orders/quotes. **Important:** For Plain Packaging, **do not show the cost price** of products to staff (see §4).

Implementation should provide clear entry points from the Staff dashboard (e.g. “Products” and “Plain Packaging” or similar) so staff can open each list. Lists should be usable on mobile (e.g. card layout or responsive tables, search/filter if needed).

---

## 4. Plain Packaging: do not show cost price to staff

For **Plain Packaging** products shown in the Staff dashboard (or any staff-only view):

- **Do not display the cost price** (cost price, cost per unit, internal cost, or any field that represents what the business pays for the product).
- Staff may see: product name, description, customer-facing price (if applicable), dimensions, SKU, image, stock or availability, and any other **non-cost** fields that help them serve customers.
- **Rationale:** Cost is sensitive; staff should not see internal cost data. Only admins (or roles with explicit cost access) should see cost in the Admin panel.

**Implementation:**

- APIs that return Plain Packaging products **for staff** must **exclude** cost-related fields (e.g. `cost`, `cost_price`, `cost_per_unit`, or whatever the schema uses). Either omit these fields in the response or have a “staff” view that strips them.
- The Staff UI must not render cost even if it were ever returned; the API must remain the single source of truth and not send cost to staff.

Admin dashboard can continue to show cost for Plain Packaging where needed.

---

## 5. Quick reference

| Item | Requirement |
|------|-------------|
| Staff portal device priority | **Mobile-first** (staff mainly on mobile). |
| Staff dashboard: product lists | Show **main products** and **Plain Packaging** lists. |
| Plain Packaging for staff | **Do not show cost price.** Only non-cost fields. |
| Admin dashboard | Desktop-oriented; can show cost and full settings. |
| Staff login | `/staff/login` (User ID + password). See `STAFF_SECTION_README.md`. |

---

*This README defines dashboard scope, mobile-first Staff portal, product lists on Staff dashboard, and the rule that Plain Packaging cost price is not shown to staff. English only.*
