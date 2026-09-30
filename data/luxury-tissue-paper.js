/** Plain luxury colour tissue. Prices are ex VAT. One case = 480 sheets. */

export const LUXURY_TISSUE_ID = 'luxury-tissue-paper';
export const LUXURY_TISSUE_HREF = '/luxury-tissue-paper-ireland';
export const LUXURY_TISSUE_CASE_PRICE = 29.99;
export const LUXURY_TISSUE_SHEETS = 480;
export const LUXURY_TISSUE_SHEET_SIZE = '500 × 750 mm';

export const LUXURY_TISSUE_IMAGES = [
  {
    src: '/images/products/luxury-tissue-paper/luxury-tissue-paper-ireland-blue.jpg',
    alt: 'Luxury tissue paper Ireland — pale blue, mid blue and navy colour tissue sheets with a wrapped gift, 500 by 750 mm',
  },
  {
    src: '/images/products/luxury-tissue-paper/luxury-tissue-paper-ireland-green.jpg',
    alt: 'Luxury tissue paper Ireland — mint, sage and bottle green colour tissue sheets with a wrapped gift',
  },
  {
    src: '/images/products/luxury-tissue-paper/luxury-tissue-paper-ireland-pink.jpg',
    alt: 'Luxury tissue paper Ireland — blush and coral colour tissue sheets with a pink wrapped gift',
  },
];

/** Stock colours from the plain luxury tissue range. */
export const LUXURY_TISSUE_COLOURS = [
  { id: 'white', name: 'White', hex: '#F7F7F5' },
  { id: 'black', name: 'Black', hex: '#161616' },
  { id: 'baby-pink', name: 'Baby Pink', hex: '#F6C9D4' },
  { id: 'cerise', name: 'Cerise', hex: '#DE3163' },
  { id: 'red', name: 'Red', hex: '#C8102E' },
  { id: 'orange', name: 'Orange', hex: '#F15A22' },
  { id: 'yellow', name: 'Yellow', hex: '#F5D000' },
  { id: 'lime-green', name: 'Lime Green', hex: '#8DC63F' },
  { id: 'bottle-green', name: 'Bottle Green', hex: '#1A4A38' },
  { id: 'pacific-blue', name: 'Pacific Blue', hex: '#5BA4D4' },
  { id: 'royal-blue', name: 'Royal Blue', hex: '#1A4FA0' },
  { id: 'lavender', name: 'Lavender', hex: '#C4A7E0' },
  { id: 'purple-violet', name: 'Purple (Violet)', hex: '#6B3FA0' },
  { id: 'chocolate-brown', name: 'Chocolate Brown', hex: '#4A301C' },
  { id: 'wine', name: 'Wine', hex: '#722F37' },
];

export function tissueDiscountRate(cases) {
  const n = Number(cases) || 0;
  if (n >= 10) return 0.2;
  if (n >= 5) return 0.1;
  return 0;
}

export function tissueDiscountLabel(cases) {
  const rate = tissueDiscountRate(cases);
  if (rate === 0.2) return '20% off';
  if (rate === 0.1) return '10% off';
  return null;
}

export function tissueCasePrice(cases) {
  const rate = tissueDiscountRate(cases);
  return Math.round(LUXURY_TISSUE_CASE_PRICE * (1 - rate) * 100) / 100;
}

export function tissueLineTotal(cases) {
  const n = Math.max(1, Math.floor(Number(cases) || 1));
  return Math.round(tissueCasePrice(n) * n * 100) / 100;
}

export function buildTissueQuoteLine(overrides = {}) {
  const colour = overrides.colour || LUXURY_TISSUE_COLOURS[0];
  const qty = Math.max(1, Math.floor(Number(overrides.qty) || 1));
  const unitPrice = tissueCasePrice(qty);
  const discount = tissueDiscountLabel(qty);

  return {
    moduleId: 'luxury-tissue',
    productId: LUXURY_TISSUE_ID,
    name: 'Luxury Tissue Paper',
    href: LUXURY_TISSUE_HREF,
    image: LUXURY_TISSUE_IMAGES[0].src,
    images: LUXURY_TISSUE_IMAGES.map((image) => image.src),
    qty,
    unitPrice,
    lineTotal: tissueLineTotal(qty),
    summary: [
      colour?.name,
      `${LUXURY_TISSUE_SHEETS} sheets per case`,
      discount,
    ].filter(Boolean).join(' · '),
    options: {
      colour: colour?.name || null,
      colourId: colour?.id || null,
      sheetsPerCase: LUXURY_TISSUE_SHEETS,
      sheetSize: LUXURY_TISSUE_SHEET_SIZE,
      discount,
    },
    fingerprint: `luxury-tissue|${LUXURY_TISSUE_ID}|${colour?.id || 'none'}`,
  };
}

export function repriceTissueLine(line, qty) {
  const colour = LUXURY_TISSUE_COLOURS.find((item) => item.id === line.options?.colourId)
    || (line.options?.colour ? { id: line.options.colourId, name: line.options.colour } : LUXURY_TISSUE_COLOURS[0]);
  return buildTissueQuoteLine({ colour, qty });
}
