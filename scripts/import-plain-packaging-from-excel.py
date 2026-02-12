#!/usr/bin/env python3
"""
Import Plain Packaging products from Tiered_Pricing_Quote_With_SEO.xlsx into a JS module.

Usage:
  pip install openpyxl   # if not already installed
  python scripts/import-plain-packaging-from-excel.py [path/to/Tiered_Pricing_Quote_With_SEO.xlsx]

Output:
  data/plain-products-tiered.js  (exports TIERED_PLAIN_PRODUCTS and TIERED_CATEGORIES)

These can be merged with existing PLAIN_PRODUCTS in the app. Product detail page template
is at pages/plain-packaging/[slug].js — it may need to support caseTiers (price per case
by case range) for these products in addition to qtyBreaks (unit-based) for existing ones.
"""

import re
import sys
from pathlib import Path

try:
    import openpyxl
except ImportError:
    print("Install openpyxl: pip install openpyxl")
    sys.exit(1)


def slugify(text):
    if text is None:
        return "product"
    s = str(text).strip().lower()
    s = re.sub(r"[^\w\s-]", "", s)
    s = re.sub(r"[-\s]+", "-", s)
    return s[:80] or "product"


def main():
    repo_root = Path(__file__).resolve().parent.parent
    default_xlsx = repo_root / "Tiered_Pricing_Quote_With_SEO.xlsx"
    # Common alternative: user's Downloads
    if not default_xlsx.exists():
        downloads = Path.home() / "Downloads" / "Tiered_Pricing_Quote_With_SEO.xlsx"
        if downloads.exists():
            default_xlsx = downloads

    xlsx_path = Path(sys.argv[1]) if len(sys.argv) > 1 else default_xlsx
    if not xlsx_path.exists():
        print(f"Excel file not found: {xlsx_path}")
        print("Usage: python scripts/import-plain-packaging-from-excel.py [path/to/Tiered_Pricing_Quote_With_SEO.xlsx]")
        sys.exit(1)

    wb = openpyxl.load_workbook(xlsx_path, read_only=True, data_only=True)
    ws = wb["Tiered Pricing"]
    rows = list(ws.iter_rows(values_only=True))
    wb.close()

    header = rows[0]
    # Code, Product Group Description, Name, Qty Per Case, SEO Description, Price Status, Current Price, Cost Price, 3 cases, 6 cases, 9 cases, 12+ cases
    products = []
    seen_ids = set()

    for r in rows[1:]:
        if not r or not r[1]:
            continue
        code = r[0]
        category = (r[1] or "").strip()
        name = (r[2] or "").strip()
        qty_per_case = r[3]
        seo_desc = (r[4] or "").strip() if len(r) > 4 else ""
        # r[5]=Price Status, r[6]=Current Price, r[7]=Cost Price
        p3 = r[8] if len(r) > 8 and r[8] is not None else None
        p6 = r[9] if len(r) > 9 and r[9] is not None else None
        p9 = r[10] if len(r) > 10 and r[10] is not None else None
        p12 = r[11] if len(r) > 11 and r[11] is not None else None

        if not name:
            continue

        # Unique id: prefer code-based slug, else name-based
        if code is not None and str(code).strip():
            base_slug = slugify(str(code))
        else:
            base_slug = slugify(name)[:60]
        uid = base_slug
        counter = 0
        while uid in seen_ids:
            counter += 1
            uid = f"{base_slug}-{counter}"
        seen_ids.add(uid)

        case_tiers = []
        if p3 is not None and (isinstance(p3, (int, float)) or (isinstance(p3, str) and p3.replace(".", "").replace("-", "").isdigit())):
            case_tiers.append({"casesLabel": "1-3 cases", "pricePerCase": float(p3) if isinstance(p3, (int, float)) else float(p3)})
        if p6 is not None and (isinstance(p6, (int, float)) or (isinstance(p6, str) and p6.replace(".", "").replace("-", "").isdigit())):
            case_tiers.append({"casesLabel": "4-6 cases", "pricePerCase": float(p6) if isinstance(p6, (int, float)) else float(p6)})
        if p9 is not None and (isinstance(p9, (int, float)) or (isinstance(p9, str) and p9.replace(".", "").replace("-", "").isdigit())):
            case_tiers.append({"casesLabel": "7-9 cases", "pricePerCase": float(p9) if isinstance(p9, (int, float)) else float(p9)})
        if p12 is not None and (isinstance(p12, (int, float)) or (isinstance(p12, str) and p12.replace(".", "").replace("-", "").isdigit())):
            case_tiers.append({"casesLabel": "10+ cases", "pricePerCase": float(p12) if isinstance(p12, (int, float)) else float(p12)})

        description = (seo_desc or name) + (" | Bulk wholesale Ireland" if "Ireland" not in (seo_desc or "") else "")

        products.append({
            "id": uid,
            "code": str(code).strip() if code is not None else "",
            "name": name,
            "category": category or "Other",
            "qtyPerCase": str(qty_per_case).strip() if qty_per_case is not None else "",
            "description": description[:500] if description else name,
            "caseTiers": case_tiers,
            "imageSrc": "/images/ifa/heroh/logos/logo.png",
            "images": ["/images/ifa/heroh/logos/logo.png"],
        })

    categories = sorted({p["category"] for p in products if p["category"]})

    out_path = repo_root / "data" / "plain-products-tiered.js"
    out_path.parent.mkdir(parents=True, exist_ok=True)

    with open(out_path, "w", encoding="utf-8") as f:
        f.write("// Auto-generated by scripts/import-plain-packaging-from-excel.py\n")
        f.write("// Do not edit by hand. Re-run the script after Excel updates.\n\n")
        f.write("export const TIERED_PLAIN_PRODUCTS = [\n")
        for p in products:
            ct = ", ".join(
                f'{{ casesLabel: "{t["casesLabel"]}", pricePerCase: {t["pricePerCase"]} }}'
                for t in p["caseTiers"]
            )
            f.write("  {\n")
            f.write(f'    id: "{p["id"]}",\n')
            f.write(f'    code: "{p["code"].replace(chr(92), chr(92)+chr(92)).replace('"', '\\"')}",\n')
            f.write(f'    name: "{p["name"].replace(chr(92), chr(92)+chr(92)).replace('"', '\\"')}",\n')
            f.write(f'    category: "{p["category"].replace('"', '\\"')}",\n')
            f.write(f'    qtyPerCase: "{str(p["qtyPerCase"]).replace('"', '\\"')}",\n')
            f.write(f'    description: "{p["description"].replace(chr(92), chr(92)+chr(92)).replace('"', '\\"')[:400]}",\n')
            f.write(f"    caseTiers: [{ct}],\n")
            f.write(f'    imageSrc: "{p["imageSrc"]}",\n')
            f.write(f'    images: {repr(p["images"])},\n')
            f.write("  },\n")
        f.write("];\n\n")
        f.write("export const TIERED_CATEGORIES = ")
        f.write(repr(categories))
        f.write(";\n")

    print(f"Wrote {len(products)} products and {len(categories)} categories to {out_path}")
    print("Next: merge TIERED_PLAIN_PRODUCTS with PLAIN_PRODUCTS in the app and ensure the detail page supports caseTiers.")


if __name__ == "__main__":
    main()
