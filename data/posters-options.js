const IMG = '/ifa/product/Poster';

export const POSTER_SIZE = {
  minMm: 100,
  maxMm: 1500,
  help: 'Enter width and height in millimetres. Min 100 mm. Custom sizes up to 1.5 m (1500 mm) on each side.',
  error: 'Size must be between 100 mm and 1500 mm (1.5 m) on each side.',
};

export const POSTER_PAPERS = [
  {
    id: '170gsm',
    name: '170gsm premium satin',
    subtitle: 'Standard',
    recommended: true,
    image: `${IMG}/single_poster.jpg`,
    previewAlt: 'Custom posters Ireland — 170gsm premium satin poster printing',
  },
  {
    id: '200gsm',
    name: '200gsm premium satin',
    subtitle: 'Extra thickness',
    image: `${IMG}/PosterPrinting-4.jpg`,
    previewAlt: 'Custom posters Ireland — 200gsm premium satin poster printing',
  },
];

export const POSTER_STANDARD_SIZES = [
  { id: 'a4', label: 'A4', width: 210, height: 297 },
  { id: 'a3', label: 'A3', width: 297, height: 420, recommended: true },
  { id: 'a2', label: 'A2', width: 420, height: 594 },
  { id: 'a1', label: 'A1', width: 594, height: 841 },
  { id: 'a0', label: 'A0', width: 841, height: 1189 },
  { id: '40x60', label: '40 × 60 cm', width: 400, height: 600 },
  { id: '50x70', label: '50 × 70 cm', width: 500, height: 700 },
  { id: '60x90', label: '60 × 90 cm', width: 600, height: 900 },
  { id: '70x100', label: '70 × 100 cm', width: 700, height: 1000 },
];

export const POSTER_FINISHING = [
  { id: 'unlaminated', name: 'Unlaminated' },
  { id: 'laminated', name: 'Laminated' },
];

export const DEFAULT_POSTER_CONFIG = {
  paperId: '170gsm',
  widthMm: 297,
  heightMm: 420,
  finishingId: 'unlaminated',
  quantity: 1,
};

export const POSTER_QUOTE_META = {
  title: 'Request a poster quote',
  productInterest: 'Custom Posters Quote Request',
  source: 'Posters Quote Builder',
  submittedFrom: 'the Custom Posters quote builder',
};

export function getPosterPaper(id) {
  return POSTER_PAPERS.find((p) => p.id === id);
}

export function getPosterFinishing(id) {
  return POSTER_FINISHING.find((f) => f.id === id);
}

export function formatPosterQuoteSummary(config) {
  const paper = getPosterPaper(config.paperId);
  const finishing = getPosterFinishing(config.finishingId);
  const quantity = Math.max(1, Number(config.quantity) || 1);

  return [
    'Custom Posters Quote Request',
    '',
    '── Poster configuration ──',
    `Paper: ${paper?.name || config.paperId}`,
    `Size: ${config.widthMm} × ${config.heightMm} mm`,
    `Max size: ${POSTER_SIZE.maxMm} × ${POSTER_SIZE.maxMm} mm (1.5 m)`,
    `Laminate: ${finishing?.name || config.finishingId}`,
    `Quantity: ${quantity}`,
  ].join('\n');
}
