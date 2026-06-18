/**
 * Compact plain packaging reference for invoice AI prompts.
 */

export const PLAIN_CASE_QTY_GUIDE = `
PLAIN PACKAGING CASE QUANTITIES (from plain_products DB):
- "Qty / case" like 4x50 means 4 inner packs × 50 units = 200 sellable units per case.
- 3x50 = 150 units/case. 100 = 100 units/case. 8x50 = 400 units/case.
- Tier prices are PER CASE (ex-VAT). Unit cost = pricePerCase ÷ unitsPerCase.
- Example: 120092 (#10 Clamshell) 4×50=200/case, tier1 €38.47/case → €0.192/unit.
- Always use searchPlain or plain_product_id — results include units_per_case and unit_price_ex.
- For printed jobs: plain unit cost = case price ÷ units per case, then + ink + labour.
`;

export function formatPlainProductForAi(p) {
  const tier1 = p.caseTiers?.[0] || p.case_tiers?.[0];
  const priceCase = tier1?.pricePerCase ?? p.price_per_case_tier1;
  const parts = [
    `${p.id}`,
    p.name,
    `[${p.category}]`,
    p.case_label || p.qty_per_case || p.qtyPerCase,
    `${p.units_per_case ?? p.unitsPerCase} units/case`,
  ];
  if (priceCase != null) {
    parts.push(`€${Number(priceCase).toFixed(2)}/case`);
    if (p.unit_price_ex != null) parts.push(`€${Number(p.unit_price_ex).toFixed(4)}/unit`);
  }
  return parts.join(' · ');
}

export function buildCategorySamples(products, maxPerCategory = 2) {
  const byCat = new Map();
  for (const p of products) {
    if (!byCat.has(p.category)) byCat.set(p.category, []);
    const arr = byCat.get(p.category);
    if (arr.length < maxPerCategory) arr.push(p);
  }
  const lines = ['Sample plain products by category:'];
  for (const [cat, items] of [...byCat.entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
    lines.push(`\n${cat}:`);
    for (const it of items) lines.push(`  - ${formatPlainProductForAi(it)}`);
  }
  return lines.join('\n');
}
