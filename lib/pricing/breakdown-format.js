/**
 * Format pricing breakdown for chat + quote preview.
 */

function eur(n) {
  return `€${Number(n || 0).toFixed(2)}`;
}

export function formatVinylBannerBreakdown(result, params = {}) {
  const b = result.breakdown || {};
  const qty = Number(params.quantity) || 1;
  const w = Number(params.width_m) || 1;
  const h = Number(params.height_m) || 1;
  const eyelets = Number(params.eyelets) || 8;
  const markupPct = Math.round(((b.markup || 1.3) - 1) * 100);

  const lines = [
    `━━━ PRICE BREAKDOWN ━━━`,
    `${result.suggested_name || 'Vinyl banner'} — ${w}m × ${h}m (${b.sqm} sqm) × ${qty}`,
    ``,
    `MATERIALS`,
    `  Vinyl: ${b.vinylSqmUsed} sqm @ ${eur(b.vinylCostPerSqm)}/sqm (${b.vinylRollNote}) = ${eur(b.materialVinyl)}`,
    `  CMYK ink: ${b.mlUsed}ml total (${b.inkNote}) = ${eur(b.inkCost)}`,
    `  Eyelets: ${eyelets} @ ${eur(b.eyeletUnitCost)} each = ${eur(b.eyeletCost)}`,
    ``,
    `LABOUR (@ ${eur(b.labourRate)}/hr)`,
    `  Printing: ${b.printMetres}m @ ${b.printSpeedMhr}m/hr = ${b.printMins} min → ${eur(b.printLabour)}`,
    `  Finishing: ${b.finishMins} min → ${eur(b.finishLabour)}`,
    `  Labour subtotal: ${eur(b.labour)}`,
    ``,
    `COST BEFORE MARKUP: ${eur(b.unitCost)}`,
    `Markup ${markupPct}%: ${eur(b.markupAmount)}`,
    `SELL PRICE (ex VAT): ${eur(result.unit_price)} per unit`,
  ];

  if (qty > 1) {
    lines.push(
      ``,
      `ORDER TOTAL (×${qty} banners)`,
      `  Materials: ${eur(b.materialVinyl)} + ${eur(b.inkCost)} + ${eur(b.eyeletCost)} = ${eur(b.materialVinyl + b.inkCost + b.eyeletCost)} per unit`,
      `  → ${eur((b.materialVinyl + b.inkCost + b.eyeletCost) * qty)} total materials`,
      `  Labour: ${eur(b.labour)} per unit → ${eur(b.labour * qty)} total labour`,
      `  Cost before markup: ${eur(b.unitCost)} × ${qty} = ${eur(b.unitCost * qty)}`,
      `  Markup ${markupPct}% on order: ${eur(b.markupAmount * qty)}`,
      `  LINE TOTAL (ex VAT): ${eur(result.line_total)}`
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
