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

export function formatPizzaBoxBreakdown(result, params = {}) {
  const b = result.breakdown || {};
  const qty = Number(params.quantity) || 1;
  const docType = b.document_type || params.document_type || 'vat';

  const lines = [
    `━━━ PRICE BREAKDOWN ━━━`,
    b.cost_mode || '',
    `${result.suggested_name || 'Printed pizza box'} — ${result.size_spec || ''} × ${qty} boxes`,
    ``,
    `PLAIN BOX (from cost list)`,
  ];

  if (b.plain_product_name) {
    lines.push(`  Product: ${b.plain_product_id} — ${b.plain_product_name}`);
    lines.push(`  Tier: ${b.plain_tier || '1-3 cases'} (${b.plain_qty_per_case || 100} per case)`);
  } else {
    lines.push(`  ⚠ No plain box matched — link a product id or specify size (e.g. 12 inch)`);
  }

  lines.push(
    materialLine('Plain unit (ex-VAT)', b.plain_unit_cost_ex, goodsLineInc(b.plain_unit_cost_ex, docType), docType),
    b.plain_price_per_case_ex != null
      ? `  Case: ${eur(b.plain_price_per_case_ex)}/case (${b.plain_case_label || b.plain_units_per_case + ' units'})`
      : null,
    materialLine('CMYK ink per box', b.inkPerBoxEx, goodsLineInc(b.inkPerBoxEx, docType), docType),
    `  Materials per box: ${eur(b.materialsEx)} ex-VAT → ${eur(b.materials)} true cost`,
    ``,
    `LABOUR (@ ${eur(b.labourRate)}/hr, ${b.boxesPerHour} boxes/hr, ${b.operators} operator)`,
    `  Labour per box: ${eur(b.labourPerBox)}`,
    ``,
    `COST PER BOX: ${eur(b.unitCost)}`,
    `Pricing: ${b.pricing_mode || 'default markup'}`,
    b.sell_price_label || sellPriceLabel(docType),
    `  ${eur(result.unit_price)} per box`,
    ``,
    `ORDER TOTAL (×${qty}): ${eur(result.line_total)}${isCashDocument(docType) ? ' cash' : ' ex VAT'}`
  );

  return lines.join('\n');
}

function goodsLineInc(ex, documentType) {
  if (!isCashDocument(documentType)) return ex;
  return Math.round(Number(ex) * 1.23 * 100) / 100;
}

export function formatPlainPackagingBreakdown(result, params = {}) {
  const b = result.breakdown || {};
  const qty = Number(params.quantity) || 1;
  const docType = b.document_type || params.document_type || 'vat';

  return [
    `━━━ PRICE BREAKDOWN ━━━`,
    b.cost_mode || '',
    `${result.suggested_name || 'Printed packaging'} — × ${qty}`,
    ``,
    `PLAIN PACKAGING (from cost list)`,
    b.plain_product_name
      ? `  Product: ${b.plain_product_id} — ${b.plain_product_name} (${b.plain_tier || 'tier 1'})`
      : `  ⚠ No plain product matched — specify product or size`,
    materialLine('Plain unit (ex-VAT)', b.plain_unit_cost_ex, goodsLineInc(b.plain_unit_cost_ex, docType), docType),
    b.plain_price_per_case_ex != null
      ? `  Case: ${eur(b.plain_price_per_case_ex)}/case (${b.plain_case_label || b.plain_units_per_case + ' units'})`
      : null,
    materialLine('Ink per unit', b.inkPerUnitEx, goodsLineInc(b.inkPerUnitEx, docType), docType),
    `  Materials per unit: ${eur(b.materialsEx)} ex-VAT → ${eur(b.materials)} true cost`,
    ``,
    `LABOUR: ${b.unitsPerHour}/hr, ${b.operators} operators → ${eur(b.labourPerUnit)}/unit`,
    `COST PER UNIT: ${eur(b.unitCost)}`,
    `Pricing: ${b.pricing_mode || 'default markup'}`,
    `SELL: ${eur(result.unit_price)}/unit — ORDER ${eur(result.line_total)}`,
  ].join('\n');
}

export function formatBoardBreakdown(result, params = {}) {
  const b = result.breakdown || {};
  const qty = Number(params.quantity) || 1;
  const docType = b.document_type || params.document_type || 'vat';

  return [
    `━━━ PRICE BREAKDOWN ━━━`,
    b.cost_mode || '',
    `${result.suggested_name || 'Board sign'} — ${result.size_spec || ''} × ${qty}`,
    ``,
    `MATERIALS (full sheet ${b.sheet_size_cm} = ${b.sheet_sqm} sqm, prices ex-VAT)`,
    `  Board sheet ${params.thickness_mm || ''}mm: ${eur(b.board_sheet_cost_ex)}/sheet → ${eur(b.board_cost_per_sqm_ex)}/sqm`,
    `  Piece area: ${b.piece_sqm} sqm → board ${eur(b.board_cost_per_piece_ex)}/piece`,
    `  Vinyl: ${eur(b.vinyl_cost_per_sqm_ex)}/sqm → ${eur(b.vinyl_cost_per_piece_ex)}/piece`,
    b.laminate_cost_per_piece_ex
      ? `  Laminate: ${eur(b.laminate_cost_per_piece_ex)}/piece`
      : null,
    `  Materials/piece: ${eur(b.materials_ex_per_piece)} ex-VAT → ${eur(b.materials_per_piece)} true cost`,
    ``,
    `LABOUR/piece: ${b.printMinsPerPiece}+${b.lamMinsPerPiece}+${b.applyMinsPerPiece} min @ ${eur(b.labourRate)}/hr = ${eur(b.labourPerPiece)}`,
    `COST PER PIECE: ${eur(b.unitCost)}`,
    `Pricing: ${b.pricing_mode || 'default markup'}`,
    b.sell_price_label || sellPriceLabel(docType),
    `  ${eur(result.unit_price)}/piece`,
    ``,
    `ORDER TOTAL (×${qty}): ${eur(result.line_total)}${isCashDocument(docType) ? ' cash' : ' ex VAT'}`,
  ]
    .filter(Boolean)
    .join('\n');
}

export function formatBreakdownForFamily(family, result, params = {}) {
  if (family === 'vinyl_banner') return formatVinylBannerBreakdown(result, params);
  if (family === 'pizza_box_printed') return formatPizzaBoxBreakdown(result, params);
  if (
    family === 'bagasse_meal_box_printed' ||
    family === 'burger_boxes_printed' ||
    family === 'paper_bags_printed' ||
    family === 'sos_grab_bags_printed'
  ) {
    return formatPlainPackagingBreakdown(result, params);
  }
  if (family === 'foamex_boards' || family === 'correx_boards') {
    return formatBoardBreakdown(result, params);
  }
  const b = result.breakdown || {};
  return [
    `━━━ PRICE BREAKDOWN ━━━`,
    b.cost_mode || '',
    `${result.suggested_name || family} — ${result.size_spec || ''}`,
    `Cost before markup: ${eur(b.unitCost ?? b.totalCost)}`,
    `Sell price: ${eur(result.unit_price)}`,
  ].join('\n');
}

export function collectBreakdownsFromSteps(steps = []) {
  const blocks = [];
  for (const step of steps) {
    for (const tr of step.toolResults || []) {
      const out = tr.output ?? tr.result;
      if (out?.breakdown_text) blocks.push(out.breakdown_text);
    }
  }
  return blocks;
}
