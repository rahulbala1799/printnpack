export const NCR_PAD_NAME = 'NCR Pads';
export const NCR_PAD_PAGE_PATH = '/ncr-pads-ireland';

export const NCR_PAD_IMAGES = [
  { src: '/images/products/ncr-pads/ncr-pads-ireland-triplicate-book.webp', alt: 'Printed triplicate NCR invoice book with white, blue and pink copy sheets' },
  { src: '/images/products/ncr-pads/ncr-pads-ireland-duplicate-pad-desk.webp', alt: 'Printed duplicate NCR pad with yellow copy sheet on a desk' },
  { src: '/images/products/ncr-pads/ncr-pads-ireland-invoice-book.webp', alt: 'Printed NCR invoice book with a pen on a desk' },
];

export const NCR_PAD_SIZES = [
  { id: 'a6', label: 'A6 Portrait', detail: '105 x 148 mm', short: 'A6 Portrait (105 x 148 mm)' },
  { id: 'a5', label: 'A5 Portrait', detail: '148 x 210 mm', short: 'A5 Portrait (148 x 210 mm)', recommended: false },
  { id: 'a4', label: 'A4 Portrait', detail: '210 x 297 mm', short: 'A4 Portrait (210 x 297 mm)', recommended: true },
  { id: 'other', label: 'Other size', detail: "Tell us what you need", short: 'Other size (to be discussed)' },
];

/** `pms` = the option is Pantone (spot colour) printing, which is the only one that allows numbering. */
export const NCR_PAD_PRINT_OPTIONS = [
  { id: 'cmyk-front', label: 'Full colour on front, unprinted on back', short: 'Full colour front, unprinted back', pms: false, recommended: true },
  { id: 'cmyk-front-black-back', label: 'Full colour on the front and black on back', short: 'Full colour front, black back', pms: false },
  { id: 'pms-1', label: '1 colour PMS on front, unprinted on back', short: '1 colour PMS front, unprinted back', pms: true },
  { id: 'pms-2', label: '2 colours PMS on front, unprinted on back', short: '2 colours PMS front, unprinted back', pms: true },
  { id: 'pms-3', label: '3 colours PMS on front, unprinted on back', short: '3 colours PMS front, unprinted back', pms: true },
  { id: 'other', label: 'Something else / not sure', short: 'Other print option (to be discussed)', pms: false },
];

/** `sheets` are the colours of the copy sheets, in order, behind the top (original) sheet. */
export const NCR_PAD_COLOURS = [
  { id: '2-yellow', parts: 2, label: '2-part: Yellow copy sheet', sheets: ['yellow'], recommended: true },
  { id: '2-blue', parts: 2, label: '2-part: Blue copy sheet', sheets: ['blue'] },
  { id: '2-pink', parts: 2, label: '2-part: Pink copy sheet', sheets: ['pink'] },
  { id: '2-green', parts: 2, label: '2-part: Green copy sheet', sheets: ['green'] },
  { id: '2-white', parts: 2, label: '2-part: White copy sheet', sheets: ['white'] },
  { id: '3-yellow-pink', parts: 3, label: '3-part: Yellow and pink copy sheet', sheets: ['yellow', 'pink'] },
  { id: '3-yellow-blue', parts: 3, label: '3-part: Yellow and blue copy sheet', sheets: ['yellow', 'blue'] },
  { id: '3-blue-pink', parts: 3, label: '3-part: Blue and pink copy sheet', sheets: ['blue', 'pink'] },
];

export const NCR_SHEET_HEX = {
  white: '#ffffff',
  yellow: '#fde68a',
  blue: '#bae6fd',
  pink: '#fbcfe8',
  green: '#bbf7d0',
};

export const NCR_PAD_BUNDLES = [
  { id: '25', label: '25 sets per pad', sets: 25 },
  { id: '50', label: '50 sets per pad', sets: 50, recommended: true },
  { id: '100', label: '100 sets per pad', sets: 100 },
];

export const NCR_PAD_BINDS = [
  { id: 'upper', label: 'Upper bound', recommended: true },
  { id: 'left', label: 'Left bound' },
];

export const NCR_PAD_NUMBERING = [
  { id: 'none', label: 'No numbering' },
  { id: 'numbered', label: 'Numbered' },
];

export const DEFAULT_NCR_PAD_CONFIG = {
  sizeId: 'a4',
  printId: 'cmyk-front',
  colourId: '2-yellow',
  bundleId: '50',
  bindId: 'upper',
  numberingId: 'none',
};

function find(list, id) {
  return list.find((item) => item.id === id) || list[0];
}

export const getNcrSize = (id) => find(NCR_PAD_SIZES, id);
export const getNcrPrint = (id) => find(NCR_PAD_PRINT_OPTIONS, id);
export const getNcrColour = (id) => find(NCR_PAD_COLOURS, id);
export const getNcrBundle = (id) => find(NCR_PAD_BUNDLES, id);
export const getNcrBind = (id) => find(NCR_PAD_BINDS, id);
export const getNcrNumbering = (id) => find(NCR_PAD_NUMBERING, id);

/** Numbering is only possible with PMS printing. */
export function numberingAllowed(printId) {
  return Boolean(getNcrPrint(printId).pms);
}

/** Apply a change and keep the config valid (numbering resets when print option is not PMS). */
export function updateNcrConfig(config, patch) {
  const next = { ...config, ...patch };
  if (!numberingAllowed(next.printId)) next.numberingId = 'none';
  return next;
}

export function formatNcrPadSummary(config) {
  const lines = [
    `Product: ${NCR_PAD_NAME}`,
    `Size: ${getNcrSize(config.sizeId).short}`,
    `Printing: ${getNcrPrint(config.printId).label}`,
    `Colour: ${getNcrColour(config.colourId).label}`,
    `Bundle: ${getNcrBundle(config.bundleId).label}`,
    `Bind: ${getNcrBind(config.bindId).label}`,
    `Numbering: ${getNcrNumbering(config.numberingId).label}`,
  ];
  return lines.join('\n');
}
