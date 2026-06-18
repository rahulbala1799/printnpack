/**
 * Plain product pricing — tier selection from plain_products DB shape.
 */

import { parseCaseQty, caseUnitPrice, attachCasePricing } from './case-qty.js';

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

export function mapPlainProductRow(r) {
  if (!r) return null;
  const caseTiers = r.case_tiers || r.caseTiers || [];
  const tier1 = caseTiers[0];
  const parsed = r.case_pack_detail || parseCaseQty(r.qty_per_case ?? r.qtyPerCase);
  const unitsPerCase = r.units_per_case ?? parsed.unitsPerCase;
  const pricePerCase = tier1 ? Number(tier1.pricePerCase) : null;

  return {
    id: r.id,
    name: r.name,
    category: r.category,
    description: r.description,
    qtyPerCase: r.qty_per_case ?? r.qtyPerCase,
    qty_per_case: r.qty_per_case ?? r.qtyPerCase,
    units_per_case: unitsPerCase,
    unitsPerCase,
    case_pack_detail: parsed,
    case_label: parsed.displayLabel,
    caseTiers,
    case_tiers: caseTiers,
    price_per_case_tier1: pricePerCase,
    unit_price_ex: pricePerCase != null ? caseUnitPrice(pricePerCase, unitsPerCase) : null,
    tier1_label: tier1?.casesLabel || null,
  };
}

export function pricePlainProduct(product, numCases, { applySiteDiscount = false } = {}) {
  const tiers = product.caseTiers || product.case_tiers || [];
  const tier = getTierForCases(tiers, numCases);
  if (!tier) throw new Error(`No tier for ${numCases} cases`);

  const discount = applySiteDiscount ? 0.95 : 1;
  const pricePerCase = Math.round(tier.pricePerCase * discount * 100) / 100;
  const caseInfo = attachCasePricing(product, { numCases });

  return {
    product_id: product.id,
    name: product.name,
    category: product.category,
    num_cases: numCases,
    pack_size: product.qtyPerCase || product.qty_per_case,
    units_per_case: caseInfo.unitsPerCase,
    case_label: caseInfo.displayLabel,
    tier_label: tier.casesLabel,
    unit_price: pricePerCase,
    unit_price_per_item: caseUnitPrice(pricePerCase, caseInfo.unitsPerCase),
    line_total: Math.round(pricePerCase * numCases * 100) / 100,
    unit_label: 'per case',
  };
}

export async function searchPlainProducts(getRows, { search, category, limit = 20 } = {}) {
  let sql = `
    SELECT id, name, category, qty_per_case, units_per_case, case_pack_detail, case_tiers, description
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
  return rows.map(mapPlainProductRow);
}

export async function getPlainProductById(getRow, id) {
  const row = await getRow(
    `SELECT id, name, category, qty_per_case, units_per_case, case_pack_detail, case_tiers, description
     FROM plain_products WHERE id = $1 AND is_active = true`,
    [id]
  );
  return mapPlainProductRow(row);
}
