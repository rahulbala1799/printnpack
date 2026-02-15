# Leads Pipeline

All website forms that capture contact or quote requests **send an email to Gmail** (via the contact API) **and are saved as leads** in the database so you can manage them in a single pipeline in the admin.

---

## Flow

1. **User submits a form** on the site (Contact, Quote, Plain Packaging, product quote forms, lead-gen popup, etc.).
2. **Frontend** sends a `POST` to `/api/contact` with the form payload (name, email, phone, message, and form-specific fields).
3. **`/api/contact`**:
   - Sends an email to Gmail (e.g. info@printnpack.ie) using existing nodemailer/Gmail config.
   - **Saves a lead** in the `leads` table with a **source** (which form), **pipeline stage** (e.g. New), and the full payload for reference.
4. **Admin** – Leads section shows all leads in a pipeline view (New → Contacted → Qualified → Quote Sent → Won / Lost). You can change stage, add notes, and view full details.

---

## Form types (sources)

Every submission is tagged with a **source** so you can filter and report. The source is derived from the request body as below.

| Source (saved in DB) | Page / component | Main fields sent to `/api/contact` | Notes |
|----------------------|------------------|------------------------------------|--------|
| **Contact** | `/contact` | name, email, phone, message, productInterest | General contact form; productInterest is a dropdown. |
| **Quote Request** | `/quote` | name, email, phone, productType, quantity, specifications, message, productInterest: "Quote Request" | Generic quote page; message built from product type, qty, specs. |
| **Plain Packaging Quote Builder** | `/plain-packaging` (quote drawer) | name, company, email, phone, subject, message, **source: "Plain Packaging Quote Builder"** | Multi-line quote with cart items, totals, VAT. Message contains full quote text. |
| **Pizza Box Quote Form** | Custom Pizza Boxes page (modal) | name, email, phone, subject, message, **source: "Pizza Box Quote Form"** | subject = "Custom Pizza Boxes Quote - {businessName}"; message has sizes, quantities, etc. |
| **Lead Generation Popup** | Site-wide popup (LeadgenPopup) | name, email, phone, company, productsInterested, message, productInterest: "Lead Generation Popup" | Popup form; message is a short summary. |
| **Bagasse Burger Boxes Quote Request** | Eco bagasse page | name, email, phone, company, message, productInterest: "Bagasse Burger Boxes Quote Request" | Product-specific quote. |
| **Foamex Boards Quote Request** | Foamex boards page | name, email, phone, company, message, productInterest: "{productType} Quote Request" | productType e.g. Foamex Boards. |
| **Correx Boards Quote Request** | Correx boards page | name, email, phone, company, message, productInterest: "{productType} Quote Request" | Same pattern as Foamex. |
| **Roll Up Banners Quote Request** | Roll-up banners page | name, email, phone, company, message, productInterest: "{productType} Quote Request" | Same pattern. |
| **Vinyl Stickers Quote Request** | Vinyl stickers page | name, email, phone, company, message, productInterest: "{productType} Quote Request" | Same pattern. |
| **Rubber Stamps Quote Request** | Rubber stamps page | name, email, phone, company, message, productInterest: "{stampType} Quote Request" | stampType e.g. Rubber Stamps. |
| **Clothing Quote Request** | Clothing page | name, email, phone, company, message, productInterest: "{productType} Quote Request" | Same pattern. |

**How source is set in the API**

- If the body has **`source`** (e.g. "Plain Packaging Quote Builder", "Pizza Box Quote Form"), that value is used.
- Otherwise the API uses **`productInterest`** (e.g. "Quote Request", "Lead Generation Popup", "Bagasse Burger Boxes Quote Request") as the source.
- If neither is present, source is **"Contact"**.

---

## Database: `leads` table

| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key. |
| source | TEXT | Form type (see table above). |
| name | TEXT | Contact name. |
| email | TEXT | Email. |
| phone | TEXT | Phone (optional). |
| company | TEXT | Company (optional). |
| subject | TEXT | Subject line if provided (e.g. quote subject). |
| message | TEXT | Main message / quote body. |
| payload | JSONB | Full request body for form-specific fields (productType, quantity, specifications, quote lines, etc.). |
| status | TEXT | Pipeline stage: `new`, `contacted`, `qualified`, `quote_sent`, `won`, `lost`. |
| notes | TEXT | Admin-only notes. |
| created_at | TIMESTAMPTZ | When the lead was created. |
| updated_at | TIMESTAMPTZ | Last update. |

Indexes: `source`, `status`, `created_at` for filtering and pipeline views.

---

## Pipeline stages

| Stage | Meaning |
|-------|--------|
| **new** | Just came in; not yet contacted. |
| **contacted** | Someone from the team has reached out. |
| **qualified** | Lead is qualified (budget/timing fit). |
| **quote_sent** | Quote has been sent. |
| **won** | Converted to a sale. |
| **lost** | Not pursuing (e.g. went elsewhere, no reply). |

Admin can move leads between stages and add notes.

---

## API

- **POST /api/contact** – Unchanged from the site’s perspective. Still sends email; **additionally** inserts a row into `leads` (source from body, status `new`).
- **GET /api/leads** – List leads (admin). Query params: `status`, `source`, limit/offset if needed.
- **GET /api/leads/[id]** – Single lead (admin).
- **PATCH /api/leads/[id]** – Update lead (admin): `status`, `notes`.

---

## Admin: Leads section

- **Sidebar** – “Leads” link to `/admin/leads`.
- **Pipeline view** – Columns (or tabs) by stage: New, Contacted, Qualified, Quote Sent, Won, Lost. Each lead card shows name, email, source, date; click for detail.
- **Detail** – Full message, payload (form-specific data), and fields to edit status and notes.

---

## Summary

| Question | Answer |
|----------|--------|
| Do forms still send email? | **Yes.** Gmail is unchanged; same credentials and behaviour. |
| Where are leads stored? | In the **`leads`** table in Neon Postgres. |
| How are form types distinguished? | By **source** (from `source` or `productInterest` in the request). |
| Can we see all leads in one place? | **Yes.** Admin Leads section with pipeline stages. |
| Can we change stage or add notes? | **Yes.** Via PATCH and the admin UI. |

**Adding a new form:** Use `POST /api/contact` and send either `source: "Your Form Name"` or `productInterest: "Your Form Name"` so the lead is tagged correctly in the pipeline.
