/**
 * Resolve plain packaging unit cost for printed jobs (pizza boxes, bagasse, etc.).
 */

import { searchPlainProducts } from './plain-product.js';
import { getTierForCases } from './plain-product.js';
import { parsePizzaSizeInches } from './paper-sizes.js';

const FAMILY_PLAIN = {
  pizza_box_printed: { category: 'Pizza Boxes', sizeFromInches: true },
  bagasse_meal_box_printed: { category: 'Bagasse Meal Box', sizeFromInches: false },
  burger_boxes_printed: { category: 'Bagasse Meal Box', searchTerms: ['burger'] },
  paper_bags_printed: { category: 'Flat Kraft Food Bags' },
  sos_grab_bags_printed: { category: 'SOS Bags' },
};

function qtyPerCaseInt(product) {
  const raw = product.qtyPerCase ?? product.qty_per_case ?? '1';
  const m = String(raw).match(/(\d+)/);
  return m ? parseInt(m[1], 10) : 1;
}

/** Per-unit ex-VAT cost using tier-1 case price (reference cost for printing quotes). */
export function plainCostPerUnit(product, { numCases = 1 } = {}) {
  const tiers = product.caseTiers || product.case_tiers || [];
  const tier = getTierForCases(tiers, numCases) || tiers[0];
  if (!tier) return { unitCost: 0, tierLabel: null, casesUsed: numCases };

  const perCase = Number(tier.pricePerCase) || 0;
  const perUnit = Math.round((perCase / qtyPerCaseInt(product)) * 10000) / 10000;
  return {
    unitCost: perUnit,
    tierLabel: tier.casesLabel,
    pricePerCase: perCase,
    qtyPerCase: qtyPerCaseInt(product),
    casesUsed: numCases,
  };
}

function scoreProduct(product, { inches, terms = [] }) {
  const name = (product.name || '').toLowerCase();
  let score = 0;
  if (inches != null) {
    if (name.includes(`${inches}"`) || name.includes(`${inches} inch`)) score += 10;
    if (name.includes(`${inches} `)) score += 5;
  }
  for (const term of terms) {
    if (name.includes(term.toLowerCase())) score += 3;
  }
  return score;
}

export async function resolvePlainMaterial(getRows, family, params = {}) {
  const config = FAMILY_PLAIN[family];
  if (!config) return null;

  if (params.plain_product_id) {
    const rows = await getRows(`SELECT * FROM plain_products WHERE id = $1 AND is_active = true`, [
      params.plain_product_id,
    ]);
    const row = rows[0];
    if (row) {
      const product = {
        id: row.id,
        name: row.name,
        category: row.category,
        qtyPerCase: row.qty_per_case,
        caseTiers: row.case_tiers,
      };
      const cost = plainCostPerUnit(product);
      return { product, ...cost, source: 'plain_product_id' };
    }
  }

  const inches =
    params.pizza_size_inches ??
    params.size_inches ??
    parsePizzaSizeInches(params.name || params.size_spec || '');

  const searchParts = [];
  if (inches != null) searchParts.push(`${inches}`);
  if (params.plain_search) searchParts.push(params.plain_search);
  if (config.searchTerms) searchParts.push(...config.searchTerms);

  const search = searchParts.join(' ').trim() || undefined;
  const products = await searchPlainProducts(getRows, {
    search,
    category: config.category,
    limit: 15,
  });

  if (!products.length) return null;

  const ranked = products
    .map((p) => ({ p, score: scoreProduct(p, { inches, terms: config.searchTerms || [] }) }))
    .sort((a, b) => b.score - a.score);

  const best = ranked[0]?.p;
  if (!best) return null;

  const cost = plainCostPerUnit(best);
  return { product: best, ...cost, source: 'search', pizza_size_inches: inches };
}
