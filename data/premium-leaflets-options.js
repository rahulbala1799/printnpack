const IMG = '/images/products/premium-leaflets';

export const PREMIUM_LEAFLET_MATERIALS = [
  {
    id: 'metallic-gold',
    name: 'Metallic Gold',
    gsm: '300 gsm',
    subtitle: 'Sirio Metallic Gold',
    variant: 'metallic-gold',
    image: `${IMG}/premium-leaflets-ireland-metallic-gold.jpg`,
    previewAlt: 'Metallic gold premium leaflet — gold foil finish on special material flyer stock',
  },
  {
    id: 'metallic-silver',
    name: 'Metallic Silver',
    gsm: '300 gsm',
    subtitle: 'Sirio Metallic Silver',
    variant: 'metallic-silver',
    image: `${IMG}/premium-leaflets-ireland-metallic-silver.jpg`,
    previewAlt: 'Metallic silver premium leaflet — shimmering silver special material flyer',
  },
  {
    id: 'metallic-white',
    name: 'Metallic white',
    gsm: '300 gsm',
    subtitle: 'Sirio Metallic white',
    variant: 'metallic-white',
    image: `${IMG}/premium-leaflets-ireland-metallic-white.jpg`,
    previewAlt: 'Metallic white premium leaflet — pearlescent white special material flyer',
  },
  {
    id: 'pearl-marble',
    name: 'Pearl Marble',
    gsm: '290 gsm',
    variant: 'pearl-marble',
    previewAlt: 'Pearl marble premium leaflet finish',
  },
  {
    id: 'sulfate-cardboard',
    name: 'Sulfate Cardboard',
    gsm: '290 gsm',
    variant: 'sulfate-cardboard',
    image: `${IMG}/premium-leaflets-ireland-sulfate-cardboard.jpg`,
    previewAlt: 'Sulfate cardboard premium leaflet — sturdy smoothed cardboard flyer stock',
  },
  {
    id: 'pvc-158',
    name: 'PVC paper',
    gsm: '158 gsm',
    variant: 'pvc',
  },
  {
    id: 'pvc-234',
    name: 'PVC paper',
    gsm: '234 gsm',
    variant: 'pvc',
  },
  {
    id: 'pvc-276',
    name: 'PVC paper',
    gsm: '276 gsm',
    variant: 'pvc',
  },
];

export const PREMIUM_LEAFLET_SIZES = [
  { id: 'a6', label: 'A6', dimensions: '105 x 148 mm', width: 105, height: 148 },
  { id: 'a5', label: 'A5', dimensions: '148 x 210 mm', width: 148, height: 210, recommended: true },
  { id: 'a4', label: 'A4', dimensions: '210 x 297 mm', width: 210, height: 297 },
  { id: 'dl', label: 'DL | US', dimensions: '210 x 99 mm', width: 210, height: 99 },
  { id: 'medium-square', label: 'Medium Square', dimensions: '148 x 148 mm', width: 148, height: 148 },
  { id: 'a7', label: 'A7', dimensions: '74 x 105 mm', width: 74, height: 105 },
];

export const PREMIUM_LEAFLET_PRINTING = [
  { id: 'single-sided', name: 'Single-sided printing' },
  { id: 'double-sided', name: 'Double-sided printing' },
];

export const DEFAULT_PREMIUM_LEAFLET_CONFIG = {
  materialId: 'metallic-gold',
  sizeId: 'a5',
  printingId: 'double-sided',
  quantity: 100,
};

export function getPremiumLeafletMaterial(id) {
  return PREMIUM_LEAFLET_MATERIALS.find((m) => m.id === id);
}

export function getPremiumLeafletSize(id) {
  return PREMIUM_LEAFLET_SIZES.find((s) => s.id === id);
}

export function getPremiumLeafletPrinting(id) {
  return PREMIUM_LEAFLET_PRINTING.find((p) => p.id === id);
}

export function formatPremiumLeafletMaterialLabel(material) {
  if (!material) return '';
  if (material.subtitle) return `${material.gsm} ${material.subtitle}`;
  return `${material.name} ${material.gsm}`;
}

export function formatPremiumLeafletQuoteSummary(config) {
  const material = getPremiumLeafletMaterial(config.materialId);
  const size = getPremiumLeafletSize(config.sizeId);
  const printing = getPremiumLeafletPrinting(config.printingId);
  const quantity = Math.max(1, Number(config.quantity) || 1);

  const lines = [
    'Premium Leaflets Quote Request',
    '',
    '── Leaflet configuration ──',
    `Material: ${formatPremiumLeafletMaterialLabel(material) || config.materialId}`,
    `Size: ${size?.label || config.sizeId} (${size?.dimensions || 'N/A'})`,
    `Printing: ${printing?.name || config.printingId}`,
    `Quantity: ${quantity}`,
  ];

  return lines.join('\n');
}
