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
    price: 27.62,
    recommended: true,
    eco: true,
    image: null,
  },
  {
    id: 'longlife',
    name: 'Mesh Polyester (Longlife)',
    gsm: '115 gsm',
    price: 25.87,
    image: null,
  },
];

export const FLAG_FINISHING = [
  { id: 'cord-loop', name: 'Cord and Loop', addon: 0 },
  { id: 'white-hooks', name: 'White hooks', addon: 0, recommended: true },
  { id: 'black-hooks', name: 'Black hooks', addon: 0 },
  { id: 'tunnel-white', name: 'Tunnel with white band + hooks', addon: 0 },
  { id: 'tunnel-black', name: 'Tunnel with black band + hooks', addon: 0 },
  { id: 'no-reinforcement', name: 'Without reinforced edges or rings', addon: 1.62 },
  { id: 'rings-30cm', name: 'Rings every 30cm, with reinforcement', addon: 4.73 },
  { id: 'corner-rings', name: 'Hemmed with rings in each corner', addon: 1.62 },
];

export const DEFAULT_FLAG_CONFIG = {
  sizeId: 'large',
  quantity: 1,
  materialId: 'rpet',
  finishingId: 'white-hooks',
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

export function calculateFlagPrice({ materialId, finishingId, quantity }) {
  const material = getFlagMaterial(materialId);
  const finishing = getFlagFinishing(finishingId);
  const units = Math.max(1, Number(quantity) || 1);
  const unitPrice = (material?.price ?? 0) + (finishing?.addon ?? 0);
  return {
    unitPrice,
    total: Math.round(unitPrice * units * 100) / 100,
    units,
  };
}
