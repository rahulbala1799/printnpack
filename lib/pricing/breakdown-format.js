/**
 * Format pricing breakdown for chat + quote preview.
 */

import { isCashDocument, sellPriceLabel } from './cost-mode.js';

function eur(n) {
  return `€${Number(n || 0).toFixed(2)}`;
}

function materialLine(label, ex, inc, documentType) {
  if (isCashDocument(documentType) && ex !== inc) {
    return `  ${label}: ${eur(ex)} ex-VAT → ${eur(inc)} inc-VAT`;
  }
  return `  ${label}: ${eur(inc ?? ex)} ex-VAT`;
}

export function formatVinylBannerBreakdown(result, params = {}) {
  const b = result.breakdown || {};
  const qty = Number(params.quantity) || 1;
  const w = Number(params.width_m) || 1;
  const h = Number(params.height_m) || 1;
  const eyelets = Number(params.eyelets) || 8;
  const markupPct = Math.round(((b.markup || 1.3) - 1) * 100);
  const docType = b.document_type || params.document_type || 'vat';

  const lines = [
    `━━━ PRICE BREAKDOWN ━━━`,
    b.cost_mode || (isCashDocument(docType) ? 'Cash sale' : 'VAT invoice'),
    `${result.suggested_name || 'Vinyl banner'} — ${w}m × ${h}m (${b.sqm} sqm) × ${qty}`,
    ``,
    `MATERIALS (supplier prices ex-VAT${isCashDocument(docType) ? ', +23% purchase VAT for cash costing' : ''})`,
    materialLine(`Vinyl (${b.vinylSqmUsed} sqm)`, b.materialVinylEx, b.materialVinyl, docType),
    materialLine(`CMYK ink (${b.mlUsed}ml)`, b.inkCostEx, b.inkCost, docType),
    materialLine(`Eyelets (${eyelets})`, b.eyeletCostEx, b.eyeletCost, docType),
    `  Materials subtotal: ${eur(b.materialsExVat)} ex-VAT → ${eur(b.materialsCost)} true cost`,
  ];

  if (isCashDocument(docType) && b.materialsVatAmount > 0) {
    lines.push(`  Purchase VAT on goods: ${eur(b.materialsVatAmount)}`);
  }

  lines.push(
    ``,
    `LABOUR (@ ${eur(b.labourRate)}/hr, no VAT adjustment)`,
    `  Printing: ${b.printMetres}m @ ${b.printSpeedMhr}m/hr = ${b.printMins} min → ${eur(b.printLabour)}`,
    `  Finishing: ${b.finishMins} min → ${eur(b.finishLabour)}`,
    `  Labour subtotal: ${eur(b.labour)}`,
    ``,
    `COST BEFORE MARKUP: ${eur(b.unitCost)} per unit`,
    `Markup ${markupPct}%: ${eur(b.markupAmount)}`,
    b.sell_price_label || sellPriceLabel(docType),
    `  ${eur(result.unit_price)} per unit`
  );

  if (qty > 1) {
    lines.push(
      ``,
      `ORDER TOTAL (×${qty})`,
      `  Materials true cost: ${eur(b.materialsCost * qty)}`,
      `  Labour: ${eur(b.labour * qty)}`,
      `  Cost before markup: ${eur(b.unitCost * qty)}`,
      `  LINE TOTAL: ${eur(result.line_total)}${isCashDocument(docType) ? ' (cash — no VAT added)' : ' (ex VAT)'}`
    );
  }

  if (b.minimumApplied) {
    lines.push(``, `⚠ Minimum charge applied: ${eur(b.minimumSell)}`);
  }

  return lines.join('\n');
}

export function formatBreakdownForFamily(family, result, params = {}) {
  if (family === 'vinyl_banner') return formatVinylBannerBreakdown(result, params);
  const b = result.breakdown || {};
  return [
    `━━━ PRICE BREAKDOWN ━━━`,
    b.cost_mode || '',
    `${result.suggested_name || family} — ${result.size_spec || ''}`,
    `Cost before markup: ${eur(b.unitCost)}`,
    `Sell price: ${eur(result.unit_price)}`,
  ].join('\n');
}

export function collectBreakdownsFromSteps(steps = []) {
  const blocks = [];
  for (const step of steps) {
    for (const tr of step.toolResults || []) {
      if (tr.output?.breakdown_text) blocks.push(tr.output.breakdown_text);
    }
  }
  return blocks;
}
