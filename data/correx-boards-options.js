const IMG = '/ifa/product/corriboard';

export const CORREX_SIZE = {
  minMm: 100,
  maxLongMm: 2440,
  maxShortMm: 1220,
};

export const CORREX_THICKNESSES = [
  {
    id: '2mm',
    name: '2mm Correx',
    subtitle: 'Lightweight',
    image: `${IMG}/corrugated-plastic-signs.jpg`,
    previewAlt: '2mm correx corrugated plastic signs Ireland',
  },
  {
    id: '3mm',
    name: '3mm Correx',
    subtitle: 'Lightweight',
    image: `${IMG}/corrugated-plastic-signs-3.jpg`,
    previewAlt: '3mm corriboard signs Ireland',
  },
  {
    id: '4mm',
    name: '4mm Correx',
    subtitle: 'Most popular',
    recommended: true,
    image: `${IMG}/4-x-8-corrugated-plastic-sheets.jpg`,
    previewAlt: '4mm correx boards Ireland — 4x8 corrugated plastic sheets',
  },
  {
    id: '5mm',
    name: '5mm Correx',
    subtitle: 'Heavy-duty',
    image: `${IMG}/coroplast-yard-signs.jpg`,
    previewAlt: '5mm correx yard signs Ireland',
  },
  {
    id: '8mm',
    name: '8mm Correx',
    subtitle: 'Maximum durability',
    image: `${IMG}/4-x-8-corrugated-plastic-sheets-1.jpg`,
    previewAlt: '8mm correx corrugated plastic sheets Ireland',
  },
];

export const CORREX_STANDARD_SIZES = [
  { id: 'a2', label: 'A2', width: 420, height: 594 },
  { id: '600x450', label: '600 × 450 mm', width: 600, height: 450, recommended: true },
  { id: 'a1', label: 'A1', width: 594, height: 841 },
  { id: '800x600', label: '800 × 600 mm', width: 800, height: 600 },
  { id: '1220x813', label: '1220 × 813 mm', width: 1220, height: 813 },
  { id: 'full', label: '8 × 4 ft sheet', width: 2440, height: 1220 },
];

export const CORREX_FINISHING = [
  { id: 'unlaminated', name: 'Unlaminated' },
  { id: 'laminated', name: 'Laminated' },
];

export const DEFAULT_CORREX_CONFIG = {
  thicknessId: '4mm',
  widthMm: 600,
  heightMm: 450,
  finishingId: 'unlaminated',
  quantity: 1,
};

export const CORREX_QUOTE_META = {
  title: 'Request a correx / corriboard quote',
  productInterest: 'Correx Boards Quote Request',
  source: 'Correx Board Quote Builder',
  submittedFrom: 'the Correx Boards quote builder',
};

export function getCorrexThickness(id) {
  return CORREX_THICKNESSES.find((t) => t.id === id);
}

export function getCorrexFinishing(id) {
  return CORREX_FINISHING.find((f) => f.id === id);
}

export function formatCorrexQuoteSummary(config) {
  const thickness = getCorrexThickness(config.thicknessId);
  const finishing = getCorrexFinishing(config.finishingId);
  const quantity = Math.max(1, Number(config.quantity) || 1);

  return [
    'Correx / Corriboard Sheets Quote Request',
    '',
    '── Board configuration ──',
    `Thickness: ${thickness?.name || config.thicknessId}`,
    `Size: ${config.widthMm} × ${config.heightMm} mm`,
    `Max sheet: ${CORREX_SIZE.maxLongMm} × ${CORREX_SIZE.maxShortMm} mm (8ft × 4ft)`,
    `Laminate: ${finishing?.name || config.finishingId}`,
    `Quantity: ${quantity}`,
  ].join('\n');
}
