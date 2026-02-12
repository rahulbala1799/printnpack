# Plain Packaging – Tiered Pricing & Product Catalog

This document describes the **tiered case pricing** and **product catalog** sourced from `Tiered_Pricing_Quote_With_SEO.xlsx`. These products will be shown on the **Plain Packaging** page, grouped by category. **Placeholder:** The Printnpack logo (`/images/ifa/heroh/logos/logo.png`) is used as the placeholder image for all products until you provide product images.

---

## Product detail page template (existing)

The **product detail page** for each plain packaging product already exists:

- **Route:** `/plain-packaging/[slug]`
- **File:** `pages/plain-packaging/[slug].js`
- **Data:** Products are read from `data/plain-products.js` (and, after import, from the generated tiered data).

The template includes: breadcrumb, hero image, pricing/quote block, features, specifications, related products, and a “Get Quote” form. For the **800+ Excel-sourced products**, the template may need to support **case-based pricing** (`caseTiers`: price per case for 1–3, 4–6, 7–9, 10+ cases) in addition to the existing **unit-based** `qtyBreaks` used by the current handful of manual products.

---

## Adding the 800+ products (import script)

There is **no hand-entry** of the 800+ products. A **script** generates them from the Excel file.

| What | Where |
|------|--------|
| **Script** | `scripts/import-plain-packaging-from-excel.py` |
| **Input** | `Tiered_Pricing_Quote_With_SEO.xlsx` (sheet: **Tiered Pricing**) |
| **Output** | `data/plain-products-tiered.js` (exports `TIERED_PLAIN_PRODUCTS` and `TIERED_CATEGORIES`) |

### How to run

1. **Install dependency (once):**
   ```bash
   pip install openpyxl
   ```

2. **Run the script:**
   ```bash
   # From repo root. Uses ./Tiered_Pricing_Quote_With_SEO.xlsx if present,
   # otherwise ~/Downloads/Tiered_Pricing_Quote_With_SEO.xlsx
   python scripts/import-plain-packaging-from-excel.py

   # Or pass the Excel path explicitly:
   python scripts/import-plain-packaging-from-excel.py /path/to/Tiered_Pricing_Quote_With_SEO.xlsx
   ```

3. **Use the generated data in the app:**  
   In `data/plain-products.js` (or your listing/detail imports), merge or concatenate the existing `PLAIN_PRODUCTS` with `TIERED_PLAIN_PRODUCTS` from `data/plain-products-tiered.js` so the Plain Packaging listing and `/plain-packaging/[slug]` pages can show all products. Ensure the detail page supports **caseTiers** (price per case by case range) for tiered products; existing manual products can keep using **qtyBreaks** (unit-based).

4. **Re-run after Excel updates:**  
   Whenever the tiered pricing or product list in the Excel file changes, run the script again and commit the updated `plain-products-tiered.js`.

---

## 1. Tiered pricing (per case)

Prices are **per case** and depend on how many cases the customer selects:

| Cases ordered | Price column used | Meaning |
|---------------|-------------------|--------|
| **1–3 cases** | 3 cases           | This price per case applies |
| **4–6 cases** | 6 cases           | This price per case applies |
| **7–9 cases** | 9 cases           | This price per case applies |
| **10+ cases** | 12+ cases         | This price per case applies |

**Example:** If the customer selects **4 cases**, use the **“6 cases”** tier price as the **price per case** (so total = 4 × that price).

**Source columns in Excel:** `3 cases`, `6 cases`, `9 cases`, `12+ cases`.

---

## 2. Product row fields (from Excel)

| Column                    | Use |
|---------------------------|-----|
| **Code**                  | Product code / SKU (numeric or string, e.g. `160003`, `CLSB1300`) |
| **Product Group Description** | Category name (used to group products on the Plain Packaging page) |
| **Name**                  | Product display name |
| **Qty Per Case**          | Pack size per case (e.g. `10 x 500s`, `20x25`, `100`) |
| **SEO Description**      | Full SEO copy (product name \| qty \| category \| Bulk wholesale Ireland) |
| **Price Status**         | e.g. `NEW PRICE`, `NO CHANGE` |
| **Current Price**        | List/reference price (optional for display) |
| **Cost Price**           | Internal (do not show to customer) |
| **3 cases**              | Price per case for 1–3 cases |
| **6 cases**              | Price per case for 4–6 cases |
| **9 cases**              | Price per case for 7–9 cases |
| **12+ cases**            | Price per case for 10+ cases |

---

## 3. Categories (57) – for Plain Packaging page

Products should be **grouped by category** on the Plain Packaging page. Use the list below as the order or as section headings. Images are to be added later; placeholders can be used until then.

| # | Category | Product count |
|---|----------|---------------|
| 1 | Amenities | 6 |
| 2 | Bagasse Meal Box | 8 |
| 3 | Bags | 2 |
| 4 | Bakery Packaging | 20 |
| 5 | Biobox | 9 |
| 6 | Candles & Chafing | 1 |
| 7 | Catering Equipment | 3 |
| 8 | Chemicals | 16 |
| 9 | Clearance | 1 |
| 10 | Cold Cups & Lids | 66 |
| 11 | Condiments | 10 |
| 12 | Containersandtaway | 10 |
| 13 | Corrugated Meal Box | 8 |
| 14 | Custom Products | 2 |
| 15 | Cutlery & Stirrers | 22 |
| 16 | Fish & Chip Boxes | 3 |
| 17 | Flat Kraft Food Bags | 7 |
| 18 | Foil Bags | 3 |
| 19 | Foil Containers | 18 |
| 20 | Foil,Film, Parchment | 12 |
| 21 | Food & Freezer Bags | 3 |
| 22 | Food Cones | 1 |
| 23 | Food Trays | 7 |
| 24 | Food Wrap | 16 |
| 25 | Gloves | 54 |
| 26 | Greaseproof Food Bag | 7 |
| 27 | Handled Carrier Bags | 8 |
| 28 | Hot Cup Extras | 4 |
| 29 | Hot Cups & Lids | 96 |
| 30 | Ice Cream Cups | 10 |
| 31 | Kids Meal Boxes | 1 |
| 32 | MG Kraft Food Bags | 2 |
| 33 | Microwave Meal Boxes | 26 |
| 34 | Miscellaneous | 3 |
| 35 | Mops, Buckets, Brush | 11 |
| 36 | Napkins & Tableware | 66 |
| 37 | Nested Boxes | 3 |
| 38 | Noodle Containers | 2 |
| 39 | PPE | 6 |
| 40 | Paper Hygiene | 48 |
| 41 | Paper Meal Container | 1 |
| 42 | Personal Protective Equipment | 1 |
| 43 | Pizza Boxes | 13 |
| 44 | Plates & Bowls | 23 |
| 45 | Platters & Lids | 13 |
| 46 | Popcorn Buckets | 3 |
| 47 | Portion Pots | 26 |
| 48 | Refuse Sack | 21 |
| 49 | Round Kraft Bowls | 15 |
| 50 | SOS Bags | 5 |
| 51 | Salad Container | 31 |
| 52 | Sandwich & Wraps | 15 |
| 53 | Snackbox | 8 |
| 54 | Soup Containers | 28 |
| 55 | Straws | 6 |
| 56 | Tamper Proof | 13 |
| 57 | Wipes, Cloths, Pads | 18 |

**Total products:** 800+ (exact count from sheet).

---

## 4. Implementation notes

- **Plain Packaging page:** Use the categories above to separate products into sections (e.g. “Napkins & Tableware”, “Hot Cups & Lids”, “Pizza Boxes”).
- **Quote/selector:** When the customer chooses **number of cases**, determine the tier (1–3, 4–6, 7–9, 10+) and use the corresponding price **per case**; total = cases × price per case.
- **Slug/URL:** Product detail pages under `/plain-packaging/[slug]` can use a URL-friendly version of the product **name** or **code** (e.g. `logic8-30cm-1ply-4fold-napkins` or code `160003`).
- **SEO:** Use the **SEO Description** field for meta description and product copy where appropriate.
- **Images:** Not in the spreadsheet. The Printnpack logo is used as the placeholder for all tiered products until you provide product images.

---

## 5. Source file

- **File:** `Tiered_Pricing_Quote_With_SEO.xlsx`  
- **Sheet:** `Tiered Pricing`  
- **Location:** User’s Downloads (reference only; data should be imported into the app or `data/plain-products.js`).

---

*Last updated from Tiered_Pricing_Quote_With_SEO.xlsx. Placeholder: Printnpack logo; replace with product images when available.*
