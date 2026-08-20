export const FLAG_SIZES = [
  { id: 'xs', label: 'Extra Small', dimensions: '100 x 70' },
  { id: 'sm', label: 'Small', dimensions: '100 x 90' },
  { id: 'standard', label: 'Standard', dimensions: '150 x 90' },
  { id: 'large', label: 'Large', dimensions: '150 x 100', default: true },
  { id: 'xl', label: 'Extra Large', dimensions: '200 x 100' },
];

export const FLAG_MATERIALS = [
  {
    id: 'rpet',
    name: 'Recycled Polyester',
    gsm: '110 gsm',
    recommended: true,
    eco: true,
    image: null,
  },
  {
    id: 'longlife',
    name: 'Mesh Polyester (Longlife)',
    gsm: '115 gsm',
    image: null,
  },
];

export const FLAG_FINISHING = [
  { id: 'cord-loop', name: 'Cord and Loop' },
  { id: 'white-hooks', name: 'White hooks', recommended: true },
  { id: 'black-hooks', name: 'Black hooks' },
  { id: 'tunnel-white', name: 'Tunnel with white band + hooks' },
  { id: 'tunnel-black', name: 'Tunnel with black band + hooks' },
  { id: 'no-reinforcement', name: 'Without reinforced edges or rings' },
  { id: 'rings-30cm', name: 'Rings every 30cm, with reinforcement' },
  { id: 'corner-rings', name: 'Hemmed with rings in each corner' },
];

export const DEFAULT_FLAG_CONFIG = {
  sizeId: 'large',
  quantity: 1,
  materialId: 'rpet',
  finishingId: 'white-hooks',
  customSizeNote: '',
};

export function getFlagSize(id) {
  return FLAG_SIZES.find((s) => s.id === id);
}

export function getFlagMaterial(id) {
  return FLAG_MATERIALS.find((m) => m.id === id);
}

export function getFlagFinishing(id) {
  return FLAG_FINISHING.find((f) => f.id === id);
}

export function formatFlagQuoteSummary(config) {
  const size = getFlagSize(config.sizeId);
  const material = getFlagMaterial(config.materialId);
  const finishing = getFlagFinishing(config.finishingId);
  const quantity = Math.max(1, Number(config.quantity) || 1);

  const lines = [
    'Custom Printed Flag Quote Request',
    '',
    '── Flag configuration ──',
    `Size: ${size?.label || config.sizeId} (${size?.dimensions || 'N/A'})`,
    `Quantity: ${quantity} unit${quantity !== 1 ? 's' : ''}`,
    `Material: ${material?.name || config.materialId}${material?.gsm ? ` — ${material.gsm}` : ''}`,
    `Finishing: ${finishing?.name || config.finishingId}`,
  ];

  if (config.customSizeNote?.trim()) {
    lines.push(`Custom size note: ${config.customSizeNote.trim()}`);
  }

  return lines.join('\n');
}
