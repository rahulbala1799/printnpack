/**
 * Session quoted-items ledger — priced products awaiting invoice insertion.
 */

import { calculateCustomProduct, getRulesForFamily } from '../pricing/custom-print.js';
import { resolvePlainMaterial } from '../pricing/plain-material.js';
import { PLAIN_PRINTED_FAMILIES } from './pricing-families.js';
import { structuredBreakdownForFamily } from '../pricing/breakdown-structured.js';
import { formatBreakdownForFamily } from '../pricing/breakdown-format.js';
import { resolveSellPrice } from '../pricing/sell-price.js';
import { buildPrintedLineItem, recalcLineTotal } from './line-item.js';

export async function loadQuotedItems(getRow, sessionId) {
  try {
    const session = await getRow(`SELECT quoted_items FROM invoice_sessions WHERE id = $1`, [sessionId]);
    const items = session?.quoted_items;
    return Array.isArray(items) ? items : [];
  } catch {
    return [];
  }
}

export async function saveQuotedItems(query, sessionId, items) {
  const indexed = items.map((it, i) => ({ ...it, index: i + 1 }));
  try {
    await query(`UPDATE invoice_sessions SET quoted_items = $1, updated_at = now() WHERE id = $2`, [
      JSON.stringify(indexed),
      sessionId,
    ]);
  } catch (e) {
    console.warn('quoted_items column missing — run migration 011', e.message);
  }
  return indexed;
}

export function createQuotedItem({ family, merged, result, line, plainProduct }) {
  const structured = structuredBreakdownForFamily(family, result, merged);
  return {
    id: `qi_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    label: line.name || result.suggested_name,
    subtitle: result.size_spec || null,
    family,
    quantity: line.quantity,
    price_per: merged.price_per || 'unit',
    unit_label: merged.price_per === 'case' ? 'per case' : line.unit_label || 'per unit',
    line,
    pricing_params: line.pricing_params,
    breakdown: result.breakdown,
    breakdown_structured: structured,
    plain_product: plainProduct || null,
    margin_percent: merged.margin_percent ?? null,
    markup_percent: merged.markup_percent ?? null,
    unit_cost: result.breakdown?.unitCost ?? null,
    unit_sell: result.unit_price,
    line_total: result.line_total,
    created_at: new Date().toISOString(),
  };
}

export function upsertQuotedItem(items, entry) {
  const key = `${entry.family}:${entry.label}:${entry.subtitle || ''}`;
  const idx = items.findIndex(
    (it) => `${it.family}:${it.label}:${it.subtitle || ''}` === key
  );
  if (idx >= 0) {
    const next = [...items];
    next[idx] = { ...next[idx], ...entry, id: next[idx].id };
    return next;
  }
  return [...items, entry];
}

export function summarizeQuotedItems(items) {
  return items.map((it) => ({
    id: it.id,
    index: it.index,
    label: it.label,
    subtitle: it.subtitle,
    quantity: it.quantity,
    unit_label: it.unit_label,
    unit_cost: it.unit_cost,
    unit_sell: it.unit_sell,
    line_total: it.line_total,
    margin_percent: it.margin_percent,
    markup_percent: it.markup_percent,
  }));
}

export function buildLineFromQuotedItem(quoted, selection = {}) {
  const qty = selection.quantity ?? quoted.quantity ?? 1;
  let unitPrice = quoted.unit_sell;

  if (selection.unit_price != null) {
    unitPrice = Number(selection.unit_price);
  } else if (selection.margin_percent != null && quoted.unit_cost != null) {
    unitPrice = resolveSellPrice(quoted.unit_cost, { margin_percent: selection.margin_percent });
  } else if (selection.markup_percent != null && quoted.unit_cost != null) {
    unitPrice = resolveSellPrice(quoted.unit_cost, { markup_percent: selection.markup_percent });
  } else if (selection.margin_percent != null || selection.markup_percent != null) {
    unitPrice = resolveSellPrice(quoted.unit_cost || unitPrice, {
      margin_percent: selection.margin_percent,
      markup_percent: selection.markup_percent,
    });
  }

  const line = {
    ...quoted.line,
    id: `line_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
    quantity: qty,
    unit_price: Math.round(unitPrice * 100) / 100,
    unit_label: quoted.unit_label,
  };
  return recalcLineTotal(line);
}

export function buildLinesFromSelections(quotedItems, selections) {
  const lines = [];
  for (const sel of selections) {
    const quoted = quotedItems.find((it) => it.id === sel.quoted_id || it.index === sel.index);
    if (!quoted) continue;
    lines.push(buildLineFromQuotedItem(quoted, sel));
  }
  return lines;
}

export async function repricedQuotedItem(getRows, quoted, overrides = {}) {
  const params = { ...quoted.pricing_params, ...overrides };
  const rules = await getRulesForFamily(getRows, quoted.family);
  const globalRules = await getRulesForFamily(getRows, 'global');
  let plainMaterial = null;
  if (PLAIN_PRINTED_FAMILIES.has(quoted.family)) {
    plainMaterial = await resolvePlainMaterial(getRows, quoted.family, params);
  }
  const result = calculateCustomProduct(quoted.family, params, rules, plainMaterial, globalRules);
  const line = buildPrintedLineItem({
    name: params.name || result.suggested_name,
    category: result.category,
    quantity: params.quantity || quoted.quantity,
    size_spec: result.size_spec,
    unit_price: result.unit_price,
    pricing_family: quoted.family,
    pricing_breakdown: result.breakdown,
    pricing_params: params,
  });
  return createQuotedItem({
    family: quoted.family,
    merged: params,
    result,
    line,
    plainProduct: plainMaterial?.product
      ? { id: plainMaterial.product.id, name: plainMaterial.product.name }
      : quoted.plain_product,
  });
}

export function collectStructuredBreakdownsFromSteps(steps = []) {
  const blocks = [];
  for (const step of steps) {
    for (const tr of step.toolResults || []) {
      const out = tr.output ?? tr.result;
      if (out?.breakdown_structured) blocks.push(out.breakdown_structured);
    }
  }
  return blocks;
}

export function attachBreakdownText(output, family, result, merged) {
  return {
    ...output,
    breakdown_text: formatBreakdownForFamily(family, result, merged),
    breakdown_structured: structuredBreakdownForFamily(family, result, merged),
  };
}
