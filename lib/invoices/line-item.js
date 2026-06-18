/**
 * Standard invoice line item helpers — naming, Qty/Size column, totals.
 */

export const PRINTED_CATEGORIES = [
  'Banner', 'Vinyl', 'Roll Up', 'Pizza Box', 'Burger Box', 'Paper Bag',
  'SOS Bag', 'Napkin', 'Correx', 'Foamex', 'Poster', 'Sticker', 'Leaflet',
  'Clothing', 'Rubber Stamp',
];

export function buildMatchKey(line) {
  if (line.product_type === 'plain' && line.product_id) {
    return `plain:${line.product_id}`;
  }
  const cat = (line.category || 'generic').toLowerCase().replace(/\s+/g, '_');
  const size = line.size_spec
    ? line.size_spec.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '')
    : 'generic';
  return `printed:${cat}:${size}`;
}

export function formatQtySize(line) {
  const qty = Number(line.quantity) || 0;
  const unit = line.unit || 'units';
  const size = line.size_spec?.trim();

  if (unit === 'cases') {
    const pack = line.pack_size;
    if (pack) return `${qty} case${qty === 1 ? '' : 's'} (${pack})`;
    return `${qty} case${qty === 1 ? '' : 's'}`;
  }

  const unitLabel = qty === 1 && unit === 'units' ? 'unit' : unit;
  const base = `${qty.toLocaleString('en-IE')} ${unitLabel}`;
  if (size) return `${base} · ${size}`;
  return base;
}

export function buildPlainLineItem({ product, numCases, tier, unitPrice, applySiteDiscount = false }) {
  const discount = applySiteDiscount ? 0.95 : 1;
  const price = Math.round((tier.pricePerCase * discount) * 100) / 100;
  const finalPrice = unitPrice != null ? unitPrice : price;
  return {
    id: `line_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    product_type: 'plain',
    product_id: product.id,
    name: product.name,
    category: product.category || 'Plain Packaging',
    quantity: numCases,
    unit: 'cases',
    size_spec: null,
    pack_size: product.qtyPerCase || null,
    unit_label: 'per case',
    unit_price: finalPrice,
    line_total: Math.round(finalPrice * numCases * 100) / 100,
    pricing_breakdown: { tier_used: tier.casesLabel, price_per_case: tier.pricePerCase },
  };
}

export function buildPrintedLineItem({
  name,
  category,
  quantity = 1,
  unit = 'units',
  size_spec = null,
  unit_price = 0,
  unit_label = 'per unit',
  pricing_family = null,
  pricing_breakdown = null,
}) {
  const q = Number(quantity) || 1;
  const price = Number(unit_price) || 0;
  return {
    id: `line_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    product_type: 'printed',
    product_id: null,
    name: name || category || 'Printed product',
    category: category || 'Printed',
    quantity: q,
    unit,
    size_spec,
    pack_size: null,
    unit_label,
    unit_price: price,
    line_total: Math.round(price * q * 100) / 100,
    pricing_family,
    pricing_breakdown,
  };
}

export function recalcLineTotal(line) {
  const q = Number(line.quantity) || 0;
  const p = Number(line.unit_price) || 0;
  return { ...line, line_total: Math.round(q * p * 100) / 100 };
}

export function calcQuoteTotals(items, documentType = 'vat', vatRate = 0.23) {
  const subtotal = items.reduce((s, l) => s + (Number(l.line_total) || 0), 0);
  const roundedSub = Math.round(subtotal * 100) / 100;
  if (documentType === 'cash') {
    return { subtotal: roundedSub, vat_rate: 0, vat_amount: 0, total: roundedSub };
  }
  const vat_amount = Math.round(roundedSub * vatRate * 100) / 100;
  return {
    subtotal: roundedSub,
    vat_rate: vatRate,
    vat_amount,
    total: Math.round((roundedSub + vat_amount) * 100) / 100,
  };
}

export function validateLineItem(line) {
  if (!line.name?.trim()) return 'Line name is required';
  if (!line.category?.trim()) return 'Line category is required';
  if (line.product_type === 'plain' && !line.product_id) return 'Plain line requires product_id';
  if ((Number(line.quantity) || 0) <= 0) return 'Quantity must be positive';
  return null;
}
