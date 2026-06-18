import { getRulesForFamily, calculateCustomProduct } from '../pricing/custom-print.js';
import { resolvePlainMaterial } from '../pricing/plain-material.js';
import { PLAIN_PRINTED_FAMILIES } from './pricing-families.js';
import { buildPrintedLineItem, recalcLineTotal } from './line-item.js';

/**
 * Re-price printed lines when document type (VAT vs cash) changes.
 */
export async function recalcPrintedLinesForDocument(items, documentType, getRows, vatRate = 0.23) {
  if (!items?.length) return items || [];

  const globalRules = await getRulesForFamily(getRows, 'global');
  const rulesCache = new Map();

  const next = [];
  for (const line of items) {
    if (!line.pricing_family || !line.pricing_params) {
      next.push(line);
      continue;
    }

    let rules = rulesCache.get(line.pricing_family);
    if (!rules) {
      rules = await getRulesForFamily(getRows, line.pricing_family);
      rulesCache.set(line.pricing_family, rules);
    }

    const stored = { ...(line.pricing_params || {}) };
    delete stored.document_type;
    delete stored.purchase_vat_rate;

    const params = {
      ...stored,
      quantity: stored.quantity ?? line.quantity ?? 1,
      document_type: documentType,
      purchase_vat_rate: vatRate,
    };

    let plainMaterial = null;
    if (PLAIN_PRINTED_FAMILIES.has(line.pricing_family)) {
      plainMaterial = await resolvePlainMaterial(getRows, line.pricing_family, params);
    }

    const result = calculateCustomProduct(line.pricing_family, params, rules, plainMaterial, globalRules);
    const rebuilt = buildPrintedLineItem({
      id: line.id,
      name: line.name || result.suggested_name,
      category: result.category,
      quantity: line.quantity ?? params.quantity,
      size_spec: result.size_spec || line.size_spec,
      unit_price: result.unit_price,
      pricing_family: line.pricing_family,
      pricing_breakdown: result.breakdown,
      pricing_params: stored,
    });
    next.push(recalcLineTotal(rebuilt));
  }
  return next;
}
