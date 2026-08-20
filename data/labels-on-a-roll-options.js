export const LABEL_SHAPES = [
  { id: 'round', name: 'Round' },
  { id: 'square', name: 'Square' },
  { id: 'rectangle', name: 'Rectangle' },
  { id: 'oval', name: 'Oval' },
];

export const LABEL_SIZES_MM = [10, 20, 30, 40, 50, 60, 70, 75, 80, 100];

export const LABEL_APPEARANCES = [
  { id: 'white-film', name: 'White film', subtitle: 'Recommended', recommended: true, swatch: 'white-film' },
  { id: 'transparent', name: 'Transparent', subtitle: 'Clear film', swatch: 'transparent' },
  { id: 'paper', name: 'Paper', subtitle: 'Paper face', swatch: 'paper' },
  { id: 'special', name: 'Special', subtitle: 'Specialty film', swatch: 'special' },
];

export const LABEL_MATERIALS = [
  {
    id: 'glossy-pp',
    name: 'Glossy PP',
    subtitle: 'Gloss polypropylene · eco-friendly alternative',
    recommended: true,
  },
  {
    id: 'matt-pp',
    name: 'Matt polypropylene',
    subtitle: 'Subtle look',
  },
  {
    id: 'natureflex',
    name: 'NatureFlex White',
    subtitle: 'Biodegradable',
  },
];

export const LABEL_PRINTING = [
  { id: 'full-colour', name: 'Full colour', recommended: true },
];

export const LABEL_DISPENSERS = [
  { id: 'none', name: 'No dispenser' },
  { id: 'per-roll', name: 'Dispenser per roll', recommended: true },
];

export const LABEL_WINDINGS = [
  { id: '180', name: 'Rollwinding 1', angle: '180°' },
  { id: '0', name: 'Rollwinding 2', angle: '0°', recommended: true },
  { id: '90', name: 'Rollwinding 3', angle: '90°' },
  { id: '270', name: 'Rollwinding 4', angle: '270°' },
];

export const LABEL_CORES = [
  { id: '40', name: '40 mm core', recommended: true },
  { id: '76', name: '76 mm core' },
];

export const DEFAULT_LABEL_ROLL_CONFIG = {
  shapeId: 'round',
  widthMm: 50,
  heightMm: 50,
  appearanceId: 'white-film',
  materialId: 'glossy-pp',
  printingId: 'full-colour',
  dispenserId: 'per-roll',
  windingId: '0',
  coreId: '40',
  quantity: 1,
};

export const LABEL_ROLL_QUOTE_META = {
  title: 'Request a labels on a roll quote',
  productInterest: 'Labels on a Roll Quote Request',
  source: 'Labels on a Roll Quote Builder',
  submittedFrom: 'the Labels on a Roll quote builder',
};

export function needsTwoAxes(shapeId) {
  return shapeId === 'rectangle' || shapeId === 'oval';
}

export function getLabelShape(id) {
  return LABEL_SHAPES.find((s) => s.id === id);
}

export function getLabelAppearance(id) {
  return LABEL_APPEARANCES.find((a) => a.id === id);
}

export function getLabelMaterial(id) {
  return LABEL_MATERIALS.find((m) => m.id === id);
}

export function getLabelPrinting(id) {
  return LABEL_PRINTING.find((p) => p.id === id);
}

export function getLabelDispenser(id) {
  return LABEL_DISPENSERS.find((d) => d.id === id);
}

export function getLabelWinding(id) {
  return LABEL_WINDINGS.find((w) => w.id === id);
}

export function getLabelCore(id) {
  return LABEL_CORES.find((c) => c.id === id);
}

export function formatLabelSize(config) {
  if (needsTwoAxes(config.shapeId)) {
    return `${config.widthMm} × ${config.heightMm} mm`;
  }
  if (config.shapeId === 'round') {
    return `Ø ${config.widthMm} mm`;
  }
  return `${config.widthMm} mm`;
}

export function formatLabelRollQuoteSummary(config) {
  const shape = getLabelShape(config.shapeId);
  const appearance = getLabelAppearance(config.appearanceId);
  const material = getLabelMaterial(config.materialId);
  const printing = getLabelPrinting(config.printingId);
  const dispenser = getLabelDispenser(config.dispenserId);
  const winding = getLabelWinding(config.windingId);
  const core = getLabelCore(config.coreId);
  const quantity = Math.max(1, Number(config.quantity) || 1);

  return [
    'Labels on a Roll Quote Request',
    '',
    '── Label configuration ──',
    `Shape: ${shape?.name || config.shapeId}`,
    `Size: ${formatLabelSize(config)}`,
    `Material appearance: ${appearance?.name || config.appearanceId}`,
    `Material: ${material?.name || config.materialId}`,
    `Printing: ${printing?.name || config.printingId}`,
    `Dispenser: ${dispenser?.name || config.dispenserId}`,
    `Roll winding: ${winding ? `${winding.name} ${winding.angle}` : config.windingId}`,
    `Core diameter: ${core?.name || config.coreId}`,
    `Quantity (rolls): ${quantity}`,
  ].join('\n');
}
