/**
 * Freestanding LED frame quote.
 * Print costs are Print.com sales prices for sku free-standing-led-frames, sampled 17 Oct 2026.
 * salesPrice already includes the membership discount. The frame is unprinted.
 * Customer price = print cost × LED_FRAME_MARKUP, plus Ireland delivery at the carrier rate.
 * Prices are ex VAT. Delivery is €69.28 per frame (DHG Europlus to IE A84 KV57).
 *
 * Photos are example prints. The frame itself is supplied unprinted.
 * Size, colour, and base photos turn those choices into picture cards.
 */

export const LED_FRAME_ID = 'freestanding-led-frames-ireland';
export const LED_FRAME_PATH = '/freestanding-led-frames-ireland';
export const LED_FRAME_MARKUP = 1.3;
export const LED_FRAME_DELIVERY = 69.28;
export const LED_FRAME_EXAMPLE_CAPTION = 'Example print. The frame is supplied unprinted.';

const photo = (file, alt) => ({ src: `/images/banners/led-frames/${file}`, alt });

export const LED_FRAME_PHOTOS = {
  '80x200': photo('led-frame-80x200.jpg', 'Freestanding LED frame, 80 × 200 cm, aluminium, flat feet. Example print.'),
  '150x200': photo('led-frame-150x200.jpg', 'Freestanding LED frame, 150 × 200 cm, aluminium, flat feet. Example print.'),
  '200x200': photo('led-frame-200x200.jpg', 'Freestanding LED frame, 200 × 200 cm, aluminium, flat feet. Example print.'),
  black: photo('led-frame-black.jpg', 'Freestanding LED frame with a black frame. Example print.'),
  white: photo('led-frame-white.jpg', 'Freestanding LED frame with a white frame. Example print.'),
  flat: photo('led-frame-flat-feet.jpg', 'Flat metal feet on a freestanding LED frame.'),
  wheel: photo('led-frame-wheels.jpg', 'Wheeled base on a freestanding LED frame.'),
  double: photo('led-frame-double-sided.jpg', 'Double-sided freestanding LED frame, with a graphic on each face. Example print.'),
};

export const LED_FRAME_GALLERY = [
  LED_FRAME_PHOTOS['80x200'],
  LED_FRAME_PHOTOS['150x200'],
  LED_FRAME_PHOTOS['200x200'],
  LED_FRAME_PHOTOS.black,
  LED_FRAME_PHOTOS.white,
  LED_FRAME_PHOTOS.flat,
  LED_FRAME_PHOTOS.wheel,
  LED_FRAME_PHOTOS.double,
];

export const LED_FRAME_SIZES = [
  { id: '80x200', label: '80 × 200 cm', photo: '80x200' },
  { id: '150x200', label: '150 × 200 cm', photo: '150x200' },
  { id: '200x200', label: '200 × 200 cm', photo: '200x200' },
];

export const LED_FRAME_DEPTHS = [
  { id: '120', label: '120 mm' },
  { id: '160', label: '160 mm' },
];

export const LED_FRAME_COLORS = [
  { id: 'aluminum', label: 'Aluminium', photo: 'aluminum' },
  { id: 'black', label: 'Black', photo: 'black' },
  { id: 'white', label: 'White', photo: 'white' },
];

export const LED_FRAME_BASES = [
  { id: 'flat', label: 'Flat feet', photo: 'flat' },
  { id: 'wheel', label: 'Wheels', photo: 'wheel' },
];

/** Print.com salesPrice for one frame. Key: size|depth|color|base */
const PRINT_COST = {
  '80x200|120|aluminum|flat': 791.74,
  '80x200|120|aluminum|wheel': 885.44,
  '80x200|120|black|flat': 797.47,
  '80x200|120|black|wheel': 886.96,
  '80x200|120|white|flat': 797.47,
  '80x200|120|white|wheel': 890.13,
  '80x200|160|aluminum|flat': 830.37,
  '80x200|160|aluminum|wheel': 924.08,
  '80x200|160|black|flat': 859.79,
  '80x200|160|black|wheel': 949.28,
  '80x200|160|white|flat': 859.79,
  '80x200|160|white|wheel': 952.45,
  '150x200|120|aluminum|flat': 837.76,
  '150x200|120|aluminum|wheel': 931.46,
  '150x200|120|black|flat': 843.87,
  '150x200|120|black|wheel': 933.37,
  '150x200|120|white|flat': 843.87,
  '150x200|120|white|wheel': 936.53,
  '150x200|160|aluminum|flat': 886.07,
  '150x200|160|aluminum|wheel': 979.77,
  '150x200|160|black|flat': 921.78,
  '150x200|160|black|wheel': 1011.27,
  '150x200|160|white|flat': 921.78,
  '150x200|160|white|wheel': 1014.44,
  '200x200|120|aluminum|flat': 870.64,
  '200x200|120|aluminum|wheel': 964.34,
  '200x200|120|black|flat': 877.02,
  '200x200|120|black|wheel': 966.52,
  '200x200|120|white|flat': 877.02,
  '200x200|120|white|wheel': 969.68,
  '200x200|160|aluminum|flat': 925.84,
  '200x200|160|aluminum|wheel': 1019.54,
  '200x200|160|black|flat': 966.06,
  '200x200|160|black|wheel': 1055.55,
  '200x200|160|white|flat': 966.06,
  '200x200|160|white|wheel': 1058.72,
};

function money(value) {
  return Math.round(Number(value) * 100) / 100;
}

function allowed(list, id, fallback) {
  return list.some((item) => item.id === id) ? id : fallback;
}

export function normalizeLedFrame(input = {}) {
  return {
    sizeId: allowed(LED_FRAME_SIZES, input.sizeId, '80x200'),
    depth: allowed(LED_FRAME_DEPTHS, input.depth, '120'),
    color: allowed(LED_FRAME_COLORS, input.color, 'aluminum'),
    base: allowed(LED_FRAME_BASES, input.base, 'flat'),
    qty: Math.max(1, Math.round(Number(input.qty) || 1)),
  };
}

export function priceLedFrame(input) {
  const selection = normalizeLedFrame(input);
  const size = LED_FRAME_SIZES.find((item) => item.id === selection.sizeId);
  const printCost = PRINT_COST[`${selection.sizeId}|${selection.depth}|${selection.color}|${selection.base}`];
  if (printCost == null || !size) return null;
  const unitPrice = money(printCost * LED_FRAME_MARKUP + LED_FRAME_DELIVERY);
  const lineTotal = money(unitPrice * selection.qty);
  return {
    ...selection,
    size,
    unitCost: printCost,
    delivery: LED_FRAME_DELIVERY,
    unitPrice,
    lineTotal,
    summary: ledFrameSummary(selection, size),
  };
}

const COLOR_LABEL = { aluminum: 'Aluminium', black: 'Black', white: 'White' };
const BASE_LABEL = { flat: 'Flat feet', wheel: 'Wheels' };

export function ledFrameSummary(selection, size) {
  return [
    size.label,
    `${selection.depth} mm`,
    COLOR_LABEL[selection.color],
    BASE_LABEL[selection.base],
  ].join(' · ');
}

export function ledFramePreview(input = {}) {
  const selection = normalizeLedFrame(input);
  const sizePhoto = LED_FRAME_PHOTOS[selection.sizeId];
  const colorPhoto = selection.color === 'aluminum' ? sizePhoto : LED_FRAME_PHOTOS[selection.color];
  const basePhoto = LED_FRAME_PHOTOS[selection.base];
  if (input.focus === 'size') return sizePhoto || colorPhoto || basePhoto || null;
  if (input.focus === 'color') return colorPhoto || sizePhoto || basePhoto || null;
  if (input.focus === 'base') return basePhoto || colorPhoto || sizePhoto || null;
  if (selection.color !== 'aluminum' && colorPhoto) return colorPhoto;
  if (selection.base === 'wheel' && basePhoto) return basePhoto;
  return sizePhoto || colorPhoto || basePhoto || null;
}

export function ledFrameFromPrice() {
  return priceLedFrame({}).unitPrice;
}

export function buildLedFrameQuoteLine(catalogItem, raw) {
  const priced = priceLedFrame(raw);
  if (!priced) return null;
  const preview = ledFramePreview({ ...priced, focus: raw?.focus });
  const images = LED_FRAME_GALLERY.map((item) => item.src);
  return {
    moduleId: 'led-frames',
    productId: catalogItem?.id || LED_FRAME_ID,
    name: catalogItem?.name || 'Freestanding LED Frame',
    href: catalogItem?.href || LED_FRAME_PATH,
    image: preview?.src || images[0] || null,
    images,
    qty: priced.qty,
    unitPrice: priced.unitPrice,
    lineTotal: priced.lineTotal,
    summary: priced.summary,
    options: {
      sizeId: priced.sizeId,
      depth: priced.depth,
      color: priced.color,
      base: priced.base,
      focus: raw?.focus || null,
      qty: priced.qty,
    },
    fingerprint: ['led-frames', priced.sizeId, priced.depth, priced.color, priced.base].join('|'),
  };
}
