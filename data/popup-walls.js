/**
 * Pop-up wall quote.
 * Print costs are Print.com sales prices for sku popup-wall, sampled 17 Oct 2026.
 * salesPrice already includes the 8% membership discount. No back bars.
 * Customer price = print cost × POPUP_WALL_MARKUP, plus Ireland delivery at the carrier rate.
 * Prices are ex VAT.
 *
 * Photos in public/images/banners/popup-walls/ are example prints, not the customer's artwork.
 */

export const POPUP_WALL_ID = 'pop-up-walls-ireland';
export const POPUP_WALL_PATH = '/pop-up-walls-ireland';
export const POPUP_WALL_MARKUP = 1.45;

export const POPUP_WALL_PHOTOS = {
  straight: {
    src: '/images/banners/popup-walls/popup-wall-straight.jpg',
    alt: 'Straight pop-up display stand with a printed fabric graphic',
  },
  curved: {
    src: '/images/banners/popup-walls/popup-wall-curved.jpg',
    alt: 'Curved pop-up display stand with a printed fabric graphic',
  },
  fabric: {
    src: '/images/banners/popup-walls/popup-wall-fabric.jpg',
    alt: 'Printed pop-up wall fabric, folded, without the frame',
  },
  led: {
    src: '/images/banners/popup-walls/popup-wall-led.jpg',
    alt: 'LED pop-up display stand, lit through the fabric',
  },
  frame: {
    src: '/images/banners/popup-walls/popup-wall-frame.jpg',
    alt: 'Folding aluminium frame of a pop-up wall, with the graphic on the front',
  },
};

export const POPUP_WALL_GALLERY = [
  POPUP_WALL_PHOTOS.straight,
  {
    src: '/images/banners/popup-walls/popup-wall-straight-angle.jpg',
    alt: 'Straight pop-up display stand, seen from the side',
  },
  {
    src: '/images/banners/popup-walls/popup-wall-straight-front.jpg',
    alt: 'Straight pop-up wall with a full printed graphic',
  },
  POPUP_WALL_PHOTOS.curved,
  POPUP_WALL_PHOTOS.led,
  {
    src: '/images/banners/popup-walls/popup-wall-side.jpg',
    alt: 'Pop-up wall graphic wrapping the side of the frame',
  },
  POPUP_WALL_PHOTOS.frame,
  POPUP_WALL_PHOTOS.fabric,
];

export const POPUP_WALL_SIZES = [
  { id: 'impr23s', shape: 'straight', label: '151 × 224 cm', depthCm: 36, delivery: 7.95 },
  { id: 'impr33s', shape: 'straight', label: '224 × 224 cm', depthCm: 36, delivery: 8.2 },
  { id: 'impr43s', shape: 'straight', label: '298 × 224 cm', depthCm: 36, delivery: 7.95 },
  { id: 'impr44s', shape: 'straight', label: '298 × 298 cm', depthCm: 36, delivery: 8.2 },
  { id: 'impr53s', shape: 'straight', label: '371 × 224 cm', depthCm: 36, delivery: 8.2 },
  { id: 'impr54s', shape: 'straight', label: '371 × 298 cm', depthCm: 36, delivery: 8.2 },
  { id: 'impr63s', shape: 'straight', label: '445 × 224 cm', depthCm: 36, delivery: 8.2 },
  { id: 'impr33c', shape: 'curved', label: '233 × 224 cm', depthCm: 57, delivery: 7.95 },
];

const FOOT_COST = {
  none: 0,
  silver: 13.98,
  white: 12.25,
  black: 12.25,
};

/** Print.com cost for one wall, before the foot plate. Key: size|kit|print|light|blockout */
const PRINT_COST = {
  'impr23s|set|40|none|0': 347.38,
  'impr23s|set|40|none|1': 433.02,
  'impr23s|set|40|led|0': 968.28,
  'impr23s|set|44|none|0': 464.67,
  'impr23s|set|44|led|0': 1067.11,
  'impr23s|fabric|40|none|0': 144.24,
  'impr23s|fabric|40|none|1': 229.87,
  'impr23s|fabric|40|led|0': 765.14,
  'impr23s|fabric|44|none|0': 261.53,
  'impr23s|fabric|44|led|0': 863.96,
  'impr33s|set|40|none|0': 486.39,
  'impr33s|set|40|none|1': 619.73,
  'impr33s|set|40|led|0': 1468.43,
  'impr33s|set|44|none|0': 658.7,
  'impr33s|set|44|led|0': 1619.03,
  'impr33s|fabric|40|none|0': 194.27,
  'impr33s|fabric|40|none|1': 327.61,
  'impr33s|fabric|40|led|0': 1176.31,
  'impr33s|fabric|44|none|0': 366.58,
  'impr33s|fabric|44|led|0': 1326.91,
  'impr43s|set|40|none|0': 562.05,
  'impr43s|set|40|none|1': 739.92,
  'impr43s|set|40|led|0': 1810.38,
  'impr43s|set|44|none|0': 782.4,
  'impr43s|set|44|led|0': 1952.64,
  'impr43s|fabric|40|none|0': 231.65,
  'impr43s|fabric|40|none|1': 409.52,
  'impr43s|fabric|40|led|0': 1479.98,
  'impr43s|fabric|44|none|0': 452,
  'impr43s|fabric|44|led|0': 1622.25,
  'impr44s|set|40|none|0': 649.51,
  'impr44s|set|40|none|1': 870.48,
  'impr44s|set|40|led|0': 2190.29,
  'impr44s|set|44|none|0': 915.13,
  'impr44s|set|44|led|0': 2377.66,
  'impr44s|fabric|40|none|0': 280.49,
  'impr44s|fabric|40|none|1': 501.46,
  'impr44s|fabric|40|led|0': 1821.27,
  'impr44s|fabric|44|none|0': 546.11,
  'impr44s|fabric|44|led|0': 2008.64,
  'impr53s|set|40|none|0': 632.54,
  'impr53s|set|40|none|1': 848.4,
  'impr53s|set|40|led|0': 2103.76,
  'impr53s|set|44|none|0': 877.97,
  'impr53s|set|44|led|0': 2282.24,
  'impr53s|fabric|40|none|0': 251.29,
  'impr53s|fabric|40|none|1': 467.15,
  'impr53s|fabric|40|led|0': 1722.52,
  'impr53s|fabric|44|none|0': 496.72,
  'impr53s|fabric|44|led|0': 1901,
  'impr54s|set|40|none|0': 750.99,
  'impr54s|set|40|none|1': 1027.21,
  'impr54s|set|40|led|0': 2669.28,
  'impr54s|set|44|none|0': 1072.83,
  'impr54s|set|44|led|0': 2883.02,
  'impr54s|fabric|40|none|0': 324.56,
  'impr54s|fabric|40|none|1': 600.78,
  'impr54s|fabric|40|led|0': 2242.85,
  'impr54s|fabric|44|none|0': 646.4,
  'impr54s|fabric|44|led|0': 2456.59,
  'impr63s|set|40|none|0': 660.5,
  'impr63s|set|40|none|1': 924,
  'impr63s|set|40|led|0': 2971.84,
  'impr63s|set|44|none|0': 961.15,
  'impr63s|set|44|led|0': 3180.52,
  'impr63s|fabric|40|none|0': 265.64,
  'impr63s|fabric|40|none|1': 529.14,
  'impr63s|fabric|40|led|0': 2576.98,
  'impr63s|fabric|44|none|0': 566.29,
  'impr63s|fabric|44|led|0': 2785.66,
  'impr33c|set|40|none|0': 553.76,
  'impr33c|set|40|none|1': 715.93,
  'impr33c|set|40|led|0': 1475.89,
  'impr33c|fabric|40|none|0': 240.19,
  'impr33c|fabric|40|none|1': 402.36,
  'impr33c|fabric|40|led|0': 1162.33,
};

function money(value) {
  return Math.round(Number(value) * 100) / 100;
}

export function popupWallSize(sizeId) {
  return POPUP_WALL_SIZES.find((size) => size.id === sizeId) || null;
}

export function normalizePopupWall(input = {}) {
  const shape = input.shape === 'curved' ? 'curved' : 'straight';
  const sizes = POPUP_WALL_SIZES.filter((size) => size.shape === shape);
  const sizeId = sizes.some((size) => size.id === input.sizeId)
    ? input.sizeId
    : (shape === 'curved' ? 'impr33c' : 'impr33s');
  const kit = input.kit === 'fabric' ? 'fabric' : 'set';
  let print = input.print === 'both' ? 'both' : 'front';
  if (shape === 'curved') print = 'front';
  const light = input.light === 'led' ? 'led' : 'none';
  let blockout = input.blockout === 'yes' ? 'yes' : 'no';
  if (light === 'led' || print === 'both') blockout = 'no';
  const foot = kit === 'set' && FOOT_COST[input.foot] != null && input.foot !== 'none'
    ? input.foot
    : 'none';
  const qty = Math.max(1, Math.round(Number(input.qty) || 1));
  return { shape, sizeId, kit, print, light, blockout, foot, qty };
}

export function pricePopupWall(input) {
  const selection = normalizePopupWall(input);
  const size = popupWallSize(selection.sizeId);
  const kit = selection.kit === 'fabric' ? 'fabric' : 'set';
  const print = selection.print === 'both' ? '44' : '40';
  const light = selection.light === 'led' ? 'led' : 'none';
  const blockout = selection.blockout === 'yes' ? '1' : '0';
  const printCost = PRINT_COST[`${size.id}|${kit}|${print}|${light}|${blockout}`];
  if (printCost == null) return null;
  const footCost = kit === 'set' ? FOOT_COST[selection.foot] || 0 : 0;
  const unitCost = money(printCost + footCost);
  const delivery = size.delivery;
  const unitPrice = money(unitCost * POPUP_WALL_MARKUP + delivery);
  const lineTotal = money(unitPrice * selection.qty);
  return {
    ...selection,
    size,
    unitCost,
    delivery,
    unitPrice,
    lineTotal,
    summary: popupWallSummary(selection, size),
  };
}

const KIT_LABEL = { set: 'Full stand', fabric: 'Fabric only' };
const PRINT_LABEL = { front: 'Front only', both: 'Front and back' };
const LIGHT_LABEL = { none: 'No lighting', led: 'LED' };
const FOOT_LABEL = { silver: 'Silver foot plate', white: 'White foot plate', black: 'Black foot plate' };

export function popupWallSummary(selection, size) {
  const parts = [
    `${size.label} ${selection.shape}`,
    KIT_LABEL[selection.kit],
    PRINT_LABEL[selection.print],
    LIGHT_LABEL[selection.light],
  ];
  if (selection.blockout === 'yes') parts.push('Blockout cloth');
  if (selection.foot !== 'none') parts.push(FOOT_LABEL[selection.foot]);
  return parts.join(' · ');
}

export function popupWallPreview(input) {
  const selection = normalizePopupWall(input);
  if (selection.kit === 'fabric') return POPUP_WALL_PHOTOS.fabric;
  if (selection.shape === 'curved') return POPUP_WALL_PHOTOS.curved;
  if (selection.light === 'led') return POPUP_WALL_PHOTOS.led;
  return POPUP_WALL_PHOTOS.straight;
}

export function popupWallFromPrice() {
  return pricePopupWall({
    shape: 'straight',
    sizeId: 'impr23s',
    kit: 'set',
    print: 'front',
    light: 'none',
    qty: 1,
  }).unitPrice;
}

export function buildPopupWallQuoteLine(catalogItem, raw) {
  const priced = pricePopupWall(raw);
  if (!priced) return null;
  const preview = popupWallPreview(priced);
  const images = POPUP_WALL_GALLERY.map((item) => item.src);
  return {
    moduleId: 'popup-walls',
    productId: catalogItem?.id || POPUP_WALL_ID,
    name: catalogItem?.name || 'Pop-up Display Stand',
    href: catalogItem?.href || POPUP_WALL_PATH,
    image: preview.src,
    images,
    qty: priced.qty,
    unitPrice: priced.unitPrice,
    lineTotal: priced.lineTotal,
    summary: priced.summary,
    options: {
      shape: priced.shape,
      sizeId: priced.sizeId,
      kit: priced.kit,
      print: priced.print,
      light: priced.light,
      blockout: priced.blockout,
      foot: priced.foot,
      qty: priced.qty,
    },
    fingerprint: [
      'popup-walls',
      priced.sizeId,
      priced.kit,
      priced.print,
      priced.light,
      priced.blockout,
      priced.foot,
    ].join('|'),
  };
}
