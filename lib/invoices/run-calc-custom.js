/**
 * Server-side printed product pricing — shared by chat tools and quote-actions.
 */

import { getRulesForFamily, calculateCustomProduct } from '../pricing/custom-print.js';
import { resolvePlainMaterial } from '../pricing/plain-material.js';
import { resolvePricingFamily, PLAIN_PRINTED_FAMILIES } from './pricing-families.js';
import { buildPrintedLineItem } from './line-item.js';
import { createQuotedItem, upsertQuotedItem } from './quoted-items.js';

function buildPricingParams(family, merged, plainMaterial) {
  return {
    family,
    width_m: merged.width_m,
    height_m: merged.height_m,
    quantity: merged.quantity || 1,
    eyelets: merged.eyelets,
    name: merged.name,
    thickness_mm: merged.thickness_mm,
    piece_width_cm: merged.piece_width_cm,
    piece_height_cm: merged.piece_height_cm,
    paper_size: merged.paper_size,
    size_spec: merged.size_spec,
    laminated: merged.laminated,
    pizza_size_inches: merged.pizza_size_inches,
    plain_product_id: plainMaterial?.product?.id || merged.plain_product_id,
    margin_percent: merged.margin_percent,
    markup_percent: merged.markup_percent,
    ink_per_unit: merged.ink_per_unit,
    labour_rate: merged.labour_rate,
  };
}

function applyPerCasePricing(merged, plainMaterial, result, line) {
  const unitsPerCase = plainMaterial?.unitsPerCase ?? plainMaterial?.qtyPerCase;
  if (merged.price_per !== 'case' || !unitsPerCase) {
    return { merged, result, line };
  }
  const numCases = merged.num_cases || 1;
  const caseLabel = plainMaterial?.caseLabel || `${unitsPerCase} units/case`;
  return {
    merged,
    result: {
      ...result,
      unit_price: result.line_total,
      line_total: Math.round(result.line_total * numCases * 100) / 100,
    },
    line: {
      ...line,
      quantity: numCases,
      unit_price: Math.round(result.line_total * 100) / 100,
      unit_label: 'per case',
      line_total: Math.round(result.line_total * numCases * 100) / 100,
      size_spec: line.size_spec ? `${line.size_spec} · ${caseLabel}` : caseLabel,
    },
  };
}

export async function runCalcCustom(getRows, getRow, args, ctx = {}) {
  const family = resolvePricingFamily(args);
  const documentType = ctx.document_type || 'vat';
  const purchaseVatRate = ctx.purchase_vat_rate ?? 0.23;

  const merged = {
    quantity: 1,
    eyelets: 8,
    document_type: documentType,
    purchase_vat_rate: purchaseVatRate,
    ...ctx.jobHints,
    ...args,
    family,
  };

  const rules = await getRulesForFamily(getRows, family);
  const globalRules = await getRulesForFamily(getRows, 'global');

  let plainMaterial = null;
  if (PLAIN_PRINTED_FAMILIES.has(family)) {
    plainMaterial = await resolvePlainMaterial(getRows, getRow, family, merged);
    if (!plainMaterial?.unitCost && family === 'pizza_box_printed') {
      return {
        error:
          'Could not find plain pizza box in catalog — specify pizza_size_inches (e.g. 12) or plain_product_id (e.g. 120762)',
        family,
      };
    }
    if (merged.price_per === 'case' && plainMaterial?.unitsPerCase) {
      merged.quantity = plainMaterial.unitsPerCase;
    }
  }

  let result = calculateCustomProduct(family, merged, rules, plainMaterial, globalRules);
  const pricingParams = buildPricingParams(family, merged, plainMaterial);
  let line = buildPrintedLineItem({
    name: merged.name || result.suggested_name,
    category: result.category,
    quantity: merged.num_cases || merged.quantity || 1,
    size_spec: result.size_spec,
    unit_price: result.unit_price,
    pricing_family: family,
    pricing_breakdown: result.breakdown,
    pricing_params: pricingParams,
  });

  ({ result, line } = applyPerCasePricing(merged, plainMaterial, result, line));

  const entry = createQuotedItem({
    family,
    merged,
    result,
    line,
    plainProduct: plainMaterial?.product
      ? { id: plainMaterial.product.id, name: plainMaterial.product.name }
      : null,
  });

  return {
    family,
    merged,
    result,
    line,
    entry,
    plainMaterial,
  };
}

export function applyQuotedToLedger(quotedItems, entry, pendingId = null) {
  let next = upsertQuotedItem(quotedItems, entry);
  if (pendingId) {
    next = next.filter((it) => it.id !== pendingId);
  }
  return next;
}
