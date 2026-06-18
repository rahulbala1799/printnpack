/** Resolve sell price from cost using markup multiplier, markup %, margin %, or target sell. */

export function resolveSellPrice(unitCost, params = {}, defaultMarkup = 1.3) {
  const cost = Number(unitCost) || 0;

  if (params.target_sell_price != null && params.target_sell_price !== '') {
    return Math.round(Number(params.target_sell_price) * 100) / 100;
  }

  if (params.margin_percent != null && params.margin_percent !== '') {
    const m = Number(params.margin_percent) / 100;
    if (m >= 1) throw new Error('margin_percent must be below 100');
    if (m <= 0) return Math.round(cost * 100) / 100;
    return Math.round((cost / (1 - m)) * 100) / 100;
  }

  if (params.markup_percent != null && params.markup_percent !== '') {
    const pct = Number(params.markup_percent) / 100;
    return Math.round(cost * (1 + pct) * 100) / 100;
  }

  const mult = params.markup ?? defaultMarkup;
  return Math.round(cost * mult * 100) / 100;
}

export function pricingModeLabel(params = {}) {
  if (params.target_sell_price != null) return `Target sell €${params.target_sell_price}`;
  if (params.margin_percent != null) return `${params.margin_percent}% margin`;
  if (params.markup_percent != null) return `${params.markup_percent}% markup`;
  const pct = Math.round(((params.markup ?? 1.3) - 1) * 100);
  return `Default ${pct}% markup`;
}
