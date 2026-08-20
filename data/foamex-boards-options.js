const IMG = '/ifa/product/foamex';

export const FOAMEX_SIZE = {
  minMm: 100,
  maxLongMm: 2440,
  maxShortMm: 1220,
};

export const FOAMEX_THICKNESSES = [
  {
    id: '3mm',
    name: '3mm Foamex',
    subtitle: 'Lightweight',
    image: `${IMG}/3mm-Printed-Foamex-Boards-XL-Displays.avif`,
    previewAlt: '3mm printed foamex boards Ireland — lightweight PVC foam signage',
  },
  {
    id: '5mm',
    name: '5mm Foamex',
    subtitle: 'Most popular',
    recommended: true,
    image: `${IMG}/foam-board-printing-1000x1000.webp`,
    previewAlt: '5mm foamex board printing Ireland — exhibition and retail PVC foam signage',
  },
  {
    id: '5.5mm',
    name: '5.5mm Foamex',
    subtitle: 'Enhanced rigidity',
    image: `${IMG}/foam-board-photo-prints-1000x1000.webp`,
    previewAlt: '5.5mm foamex photo print boards Ireland',
  },
  {
    id: '10mm',
    name: '10mm Foamex',
    subtitle: 'Maximum rigidity',
    image: `${IMG}/sign-boards-1000x1000.webp`,
    previewAlt: '10mm foamex sign boards Ireland — freestanding PVC foam displays',
  },
];

export const FOAMEX_STANDARD_SIZES = [
  { id: 'a2', label: 'A2', width: 420, height: 594 },
  { id: 'a1', label: 'A1', width: 594, height: 841, recommended: true },
  { id: 'a0', label: 'A0', width: 841, height: 1189 },
  { id: '60x90', label: '60 × 90 cm', width: 600, height: 900 },
  { id: '70x100', label: '70 × 100 cm', width: 700, height: 1000 },
  { id: 'full', label: '8 × 4 ft sheet', width: 2440, height: 1220 },
];

export const FOAMEX_FINISHING = [
  { id: 'unlaminated', name: 'Unlaminated' },
  { id: 'laminated', name: 'Laminated' },
];

export const DEFAULT_FOAMEX_CONFIG = {
  thicknessId: '5mm',
  widthMm: 594,
  heightMm: 841,
  finishingId: 'unlaminated',
  quantity: 1,
};

export const FOAMEX_QUOTE_META = {
  title: 'Request a foamex board quote',
  productInterest: 'Foamex Boards Quote Request',
  source: 'Foamex Board Quote Builder',
  submittedFrom: 'the Foamex Boards quote builder',
};

export function getFoamexThickness(id) {
  return FOAMEX_THICKNESSES.find((t) => t.id === id);
}

export function getFoamexFinishing(id) {
  return FOAMEX_FINISHING.find((f) => f.id === id);
}

export function formatFoamexQuoteSummary(config) {
  const thickness = getFoamexThickness(config.thicknessId);
  const finishing = getFoamexFinishing(config.finishingId);
  const quantity = Math.max(1, Number(config.quantity) || 1);

  return [
    'Foamex Boards Quote Request',
    '',
    '── Board configuration ──',
    `Thickness: ${thickness?.name || config.thicknessId}`,
    `Size: ${config.widthMm} × ${config.heightMm} mm`,
    `Max sheet: ${FOAMEX_SIZE.maxLongMm} × ${FOAMEX_SIZE.maxShortMm} mm (8ft × 4ft)`,
    `Laminate: ${finishing?.name || config.finishingId}`,
    `Quantity: ${quantity}`,
  ].join('\n');
}
