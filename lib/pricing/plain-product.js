/**
 * Plain product pricing — tier selection from plain_products DB shape.
 */

export function getTierForCases(tiers, numCases) {
  if (!tiers?.length) return null;
  for (const t of tiers) {
    const L = t.casesLabel;
    const plus = L.match(/^(\d+)\+/);
    if (plus) {
      if (numCases >= parseInt(plus[1], 10)) return t;
      continue;
    }
    const range = L.match(/^(\d+)-(\d+)/);
    if (range) {
      const min = parseInt(range[1], 10);
      const max = parseInt(range[2], 10);
      if (numCases >= min && numCases <= max) return t;
    }
  }
  return tiers[tiers.length - 1];
}

export function pricePlainProduct(product, numCases, { applySiteDiscount = false } = {}) {
  const tiers = product.caseTiers || product.case_tiers || [];
  const tier = getTierForCases(tiers, numCases);
  if (!tier) throw new Error(`No tier for ${numCases} cases`);

  const discount = applySiteDiscount ? 0.95 : 1;
  const pricePerCase = Math.round(tier.pricePerCase * discount * 100) / 100;

  return {
    product_id: product.id,
    name: product.name,
    category: product.category,
    num_cases: numCases,
    pack_size: product.qtyPerCase || product.qty_per_case,
    tier_label: tier.casesLabel,
    unit_price: pricePerCase,
    line_total: Math.round(pricePerCase * numCases * 100) / 100,
    unit_label: 'per case',
  };
}

export async function searchPlainProducts(getRows, { search, category, limit = 20 } = {}) {
  let sql = `
    SELECT id, name, category, qty_per_case, case_tiers, description
    FROM plain_products
    WHERE is_active = true
  `;
  const params = [];
  if (category) {
    params.push(category);
    sql += ` AND category = $${params.length}`;
  }
  if (search?.trim()) {
    params.push(`%${search.trim()}%`);
    sql += ` AND (name ILIKE $${params.length} OR id ILIKE $${params.length} OR category ILIKE $${params.length})`;
  }
  params.push(limit);
  sql += ` ORDER BY sort_order, name LIMIT $${params.length}`;
  const rows = await getRows(sql, params);
  return rows.map((r) => ({
    id: r.id,
    name: r.name,
    category: r.category,
    qtyPerCase: r.qty_per_case,
    caseTiers: r.case_tiers,
    description: r.description,
  }));
}
