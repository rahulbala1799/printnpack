/**
 * Beach flag quote. Print.com sku beachflags, sampled 18 Oct 2026.
 * salesPrice already includes the membership discount.
 * Customer price = print cost × BEACH_FLAG_MARKUP, plus one Ireland delivery.
 * Flag-only delivery is €7.54. A pole, with or without the bag, is €22.95.
 * Both rates are once per order, confirmed for 1 and 2 copies. Flag-only is also confirmed at 5 copies.
 * Shape does not change the price inside a size. 110 gsm and 115 gsm longlife are the same price.
 * Quantities 1 to 9 use the one-flag price. Quantity 10 uses the sampled ten-flag price.
 * Sleeve finish is white, on the left. That choice does not change the price.
 *
 * Prices are ex VAT. Photos are not on the page yet.
 */

export const BEACH_FLAG_ID = 'beach-flags-ireland';
export const BEACH_FLAG_PATH = '/beach-flags-ireland';
export const BEACH_FLAG_MARKUP = 1.3;
export const BEACH_FLAG_EXAMPLE_CAPTION = 'Example print. Your own artwork goes on the flag.';

export const BEACH_SHAPES = [
  { id: 'straight', label: 'Straight', family: 'feather', api: 'beach_flag_straight' },
  { id: 'slanted', label: 'Slanted', family: 'feather', api: 'beach_flag_slantwise' },
  { id: 'hollow', label: 'Hollow', family: 'feather', api: 'beach_flag_half_moon' },
  { id: 'round', label: 'Round', family: 'feather', api: 'beach_flag_round' },
  { id: 'square', label: 'Square', family: 'square', api: 'square_flag' },
  { id: 'drop', label: 'Drop', family: 'drop', api: 'drop_flag' },
];

export const BEACH_SIZES = [
  { id: 'feather-s', family: 'feather', label: 'S · 67 × 210 cm', api: 'beach_flag_small' },
  { id: 'feather-m', family: 'feather', label: 'M · 68 × 315 cm', api: 'beach_flag_medium' },
  { id: 'feather-l', family: 'feather', label: 'L · 75 × 440 cm', api: 'beach_flag_large' },
  { id: 'square-s', family: 'square', label: 'S · 75 × 184 cm', api: 'beach_flag_square_small' },
  { id: 'square-m', family: 'square', label: 'M · 75 × 270 cm', api: 'beach_flag_square_medium' },
  { id: 'square-l', family: 'square', label: 'L · 75 × 370 cm', api: 'beach_flag_square_large' },
  { id: 'drop-s', family: 'drop', label: 'S · 71 × 196 cm', api: 'drop_flag_small' },
  { id: 'drop-m', family: 'drop', label: 'M · 87 × 308.5 cm', api: 'drop_flag_medium' },
];

export const BEACH_KITS = [
  { id: 'flag', label: 'Flag only', api: 'beachflag', delivery: 7.54 },
  { id: 'pole', label: 'Flag and pole', api: 'beachflag_pole', delivery: 22.95 },
  { id: 'bag', label: 'Flag, pole and bag', api: 'beachflag_pole_bag', delivery: 22.95 },
];

export const BEACH_MATERIALS = [
  { id: 'flag', label: '110 gsm flag cloth', api: '110gr_flag' },
  { id: 'longlife', label: '115 gsm longlife', api: '115gr_longlife' },
];

/** Print.com salesPrice for one flag. Key: size api | kit api */
const PRINT_COST = {
  'beach_flag_small|beachflag': 14.04,
  'beach_flag_small|beachflag_pole': 19.84,
  'beach_flag_small|beachflag_pole_bag': 24.22,
  'beach_flag_medium|beachflag': 20.14,
  'beach_flag_medium|beachflag_pole': 31.14,
  'beach_flag_medium|beachflag_pole_bag': 35.53,
  'beach_flag_large|beachflag': 28.7,
  'beach_flag_large|beachflag_pole': 41.44,
  'beach_flag_large|beachflag_pole_bag': 45.83,
  'beach_flag_square_small|beachflag': 13.37,
  'beach_flag_square_small|beachflag_pole': 24.97,
  'beach_flag_square_small|beachflag_pole_bag': 29.36,
  'beach_flag_square_medium|beachflag': 18.62,
  'beach_flag_square_medium|beachflag_pole': 31.91,
  'beach_flag_square_medium|beachflag_pole_bag': 36.3,
  'beach_flag_square_large|beachflag': 24.5,
  'beach_flag_square_large|beachflag_pole': 45.95,
  'beach_flag_square_large|beachflag_pole_bag': 50.34,
  'drop_flag_small|beachflag': 13.65,
  'drop_flag_small|beachflag_pole': 21.37,
  'drop_flag_small|beachflag_pole_bag': 25.76,
  'drop_flag_medium|beachflag': 22.61,
  'drop_flag_medium|beachflag_pole': 31.13,
  'drop_flag_medium|beachflag_pole_bag': 35.52,
};

/** Print.com salesPrice for 10 flags. Same key as PRINT_COST. */
const PRINT_COST_10 = {
  'beach_flag_small|beachflag': 138,
  'beach_flag_small|beachflag_pole': 195.87,
  'beach_flag_small|beachflag_pole_bag': 239.78,
  'beach_flag_medium|beachflag': 198.2,
  'beach_flag_medium|beachflag_pole': 308.27,
  'beach_flag_medium|beachflag_pole_bag': 352.19,
  'beach_flag_large|beachflag': 277.67,
  'beach_flag_large|beachflag_pole': 404.98,
  'beach_flag_large|beachflag_pole_bag': 448.9,
  'beach_flag_square_small|beachflag': 131.45,
  'beach_flag_square_small|beachflag_pole': 247.53,
  'beach_flag_square_small|beachflag_pole_bag': 291.44,
  'beach_flag_square_medium|beachflag': 183.27,
  'beach_flag_square_medium|beachflag_pole': 316.19,
  'beach_flag_square_medium|beachflag_pole_bag': 360.12,
  'beach_flag_square_large|beachflag': 237.1,
  'beach_flag_square_large|beachflag_pole': 451.63,
  'beach_flag_square_large|beachflag_pole_bag': 495.54,
  'drop_flag_small|beachflag': 134.34,
  'drop_flag_small|beachflag_pole': 211.46,
  'drop_flag_small|beachflag_pole_bag': 255.38,
  'drop_flag_medium|beachflag': 218.79,
  'drop_flag_medium|beachflag_pole': 303.99,
  'drop_flag_medium|beachflag_pole_bag': 347.9,
};

function money(value) {
  return Math.round(Number(value) * 100) / 100;
}

function allowed(list, id, fallback) {
  return list.some((item) => item.id === id) ? id : fallback;
}

export function normalizeBeachFlag(input = {}) {
  const shape = BEACH_SHAPES.find((item) => item.id === input.shapeId) || BEACH_SHAPES[0];
  const familySizes = BEACH_SIZES.filter((item) => item.family === shape.family);
  const size = familySizes.some((item) => item.id === input.sizeId) ? input.sizeId : familySizes[0].id;
  const qty = Math.round(Number(input.qty) || 1);
  return {
    shapeId: shape.id,
    sizeId: size,
    kitId: allowed(BEACH_KITS, input.kitId, 'flag'),
    materialId: allowed(BEACH_MATERIALS, input.materialId, 'flag'),
    qty: Math.min(10, Math.max(1, qty)),
  };
}

export function priceBeachFlag(input) {
  const selection = normalizeBeachFlag(input);
  const shape = BEACH_SHAPES.find((item) => item.id === selection.shapeId);
  const size = BEACH_SIZES.find((item) => item.id === selection.sizeId);
  const kit = BEACH_KITS.find((item) => item.id === selection.kitId);
  const material = BEACH_MATERIALS.find((item) => item.id === selection.materialId);
  const key = `${size.api}|${kit.api}`;
  const unitCost = PRINT_COST[key];
  const tenCost = PRINT_COST_10[key];
  if (unitCost == null || tenCost == null) return null;
  const printCost = selection.qty === 10 ? tenCost : unitCost * selection.qty;
  const lineTotal = money(printCost * BEACH_FLAG_MARKUP + kit.delivery);
  return {
    ...selection,
    shape,
    size,
    kit,
    material,
    unitCost,
    printCost,
    delivery: kit.delivery,
    unitPrice: money(lineTotal / selection.qty),
    lineTotal,
    summary: beachFlagSummary(selection, shape, size, kit, material),
  };
}

export function beachFlagSummary(selection, shape, size, kit, material) {
  const flags = selection.qty === 1 ? '1 flag' : `${selection.qty} flags`;
  return [shape.label, size.label, kit.label, material.label, flags].join(' · ');
}

export function beachFlagFromPrice() {
  return priceBeachFlag({ shapeId: 'square', sizeId: 'square-s', kitId: 'flag', qty: 1 }).lineTotal;
}

export function buildBeachFlagQuoteLine(catalogItem, raw) {
  const priced = priceBeachFlag(raw);
  if (!priced) return null;
  return {
    moduleId: 'beach-flags',
    productId: catalogItem?.id || BEACH_FLAG_ID,
    name: catalogItem?.name || 'Beach Flags',
    href: catalogItem?.href || BEACH_FLAG_PATH,
    image: catalogItem?.image || null,
    images: catalogItem?.images || [],
    qty: priced.qty,
    unitPrice: priced.unitPrice,
    lineTotal: priced.lineTotal,
    summary: priced.summary,
    options: {
      shapeId: priced.shapeId,
      sizeId: priced.sizeId,
      kitId: priced.kitId,
      materialId: priced.materialId,
      qty: priced.qty,
    },
    fingerprint: ['beach-flags', priced.shapeId, priced.sizeId, priced.kitId, priced.materialId].join('|'),
  };
}
