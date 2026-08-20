const IMG = '/images/products/greaseproof-sheets';

export const GREASEPROOF_PRODUCT = {
  id: 'white-greaseproof',
  name: 'White Greaseproof Paper',
  gsm: '45 gsm',
  image: `${IMG}/greaseproof-sheets-ireland-branded-burger-wrap.jpg`,
  previewAlt: 'Custom printed greaseproof sheets Ireland — branded white greaseproof paper wrapping a burger with food safe logo print',
};

export const GREASEPROOF_SHEET_SIZES = [
  { id: '14x14', label: '14 × 14 cm', dimensions: '14 × 14 cm', width: 140, height: 140, recommended: true },
  { id: '15x30', label: '15 × 30 cm', dimensions: '15 × 30 cm', width: 150, height: 300 },
  { id: '21.5x31.5', label: '21.5 × 31.5 cm', dimensions: '21.5 × 31.5 cm', width: 215, height: 315 },
  { id: '30x45', label: '30 × 45 cm', dimensions: '30 × 45 cm', width: 300, height: 450 },
  { id: '35x45', label: '35 × 45 cm', dimensions: '35 × 45 cm', width: 350, height: 450 },
  { id: '43x31.5', label: '43 × 31.5 cm', dimensions: '43 × 31.5 cm', width: 430, height: 315 },
];

export const GREASEPROOF_PRINTING = [
  { id: 'full-colour', name: 'Full colour digital' },
  { id: '1-colour', name: '1 colour PMS' },
  { id: '2-colour', name: '2 colour PMS' },
];

export const GREASEPROOF_MIN_QUANTITY = 500;

export const DEFAULT_GREASEPROOF_CONFIG = {
  sizeId: '14x14',
  printingId: '1-colour',
  quantity: GREASEPROOF_MIN_QUANTITY,
};

export function getGreaseproofSize(id) {
  return GREASEPROOF_SHEET_SIZES.find((s) => s.id === id);
}

export function getGreaseproofPrinting(id) {
  return GREASEPROOF_PRINTING.find((p) => p.id === id);
}

export function formatGreaseproofMaterialLabel() {
  return `${GREASEPROOF_PRODUCT.gsm} ${GREASEPROOF_PRODUCT.name}`;
}

export function formatGreaseproofQuoteSummary(config) {
  const size = getGreaseproofSize(config.sizeId);
  const printing = getGreaseproofPrinting(config.printingId);
  const quantity = Math.max(GREASEPROOF_MIN_QUANTITY, Number(config.quantity) || GREASEPROOF_MIN_QUANTITY);

  const lines = [
    'Greaseproof Sheets Quote Request',
    '',
    '── Sheet configuration ──',
    `Material: ${formatGreaseproofMaterialLabel()}`,
    `Size: ${size?.label || config.sizeId} (${size?.dimensions || 'N/A'})`,
    `Printing: ${printing?.name || config.printingId}`,
    `Quantity: ${quantity}`,
  ];

  return lines.join('\n');
}
