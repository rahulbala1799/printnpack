/** Reusable branded-clothing price grid. Same € for every size. */

export const CLOTHING_SIZES = ['S', 'M', 'L', 'XL', 'XXL', '2XL', '3XL'];

export const EXTRA_PLACEMENT = 1.5;
export const LADDER_DISCOUNT = 0.08;
export const MIN_QTY = 5;

export const QTY_BANDS = [
  { id: '5-10', label: '5–10', min: 5, max: 10 },
  { id: '11-20', label: '11–20', min: 11, max: 20 },
  { id: '21-30', label: '21–30', min: 21, max: 30 },
  { id: '31-40', label: '31–40', min: 31, max: 40 },
  { id: '41-50', label: '41–50', min: 41, max: 50 },
  { id: '51+', label: '51+', min: 51, max: Infinity },
];

export const PRINT_COMBOS = [
  { id: 'chest', label: 'Chest only', areas: 1 },
  { id: 'large-front', label: 'Large front only', areas: 1 },
  { id: 'large-back', label: 'Large back only', areas: 1 },
  { id: 'one-sleeve', label: 'One sleeve only', areas: 1 },
  { id: 'chest-back', label: 'Chest + large back', areas: 2 },
  { id: 'front-back', label: 'Large front + large back', areas: 2 },
  { id: 'sleeves', label: 'Sleeves only (L+R)', areas: 2 },
  { id: 'chest-sleeve', label: 'Chest + one sleeve', areas: 2 },
  { id: 'chest-sleeves', label: 'Chest + sleeves', areas: 3 },
  { id: 'front-sleeves', label: 'Large front + sleeves', areas: 3 },
  { id: 'back-sleeves', label: 'Large back + sleeves', areas: 3 },
  { id: 'chest-back-sleeve', label: 'Chest + large back + one sleeve', areas: 3 },
  { id: 'front-back-sleeves', label: 'Large front + back + sleeves', areas: 4 },
  { id: 'chest-back-sleeves', label: 'Chest + large back + sleeves', areas: 4 },
];

export const GARMENT_PRICING = {
  tshirts: { base: 15, quoteType: 'T-Shirts' },
  polos: { base: 19, quoteType: 'Polo T-Shirts' },
  sportswear: { base: 16.5, quoteType: 'Sports Wear' },
  hoodies: { base: 36, quoteType: 'Hoodies' },
  sweatshirts: { base: 36, quoteType: 'Sweat Shirts' },
  hiviz: { base: 12, quoteType: 'Hi-Viz Jackets' },
};

/** Fruit of the Loom Super Premium T-shirt colours from the stock card. */
export const TSHIRT_COLOURS = [
  { id: 'white', name: 'White', hex: '#F4F4F1' },
  { id: 'black', name: 'Black', hex: '#161616' },
  { id: 'bottle-green', name: 'Bottle Green', hex: '#1A4A38' },
  { id: 'burgundy', name: 'Burgundy', hex: '#6C2430' },
  { id: 'navy', name: 'Navy', hex: '#1C3F6E' },
  { id: 'deep-navy', name: 'Deep Navy', hex: '#14233A' },
  { id: 'red', name: 'Red', hex: '#C8102E' },
  { id: 'royal-blue', name: 'Royal Blue', hex: '#1A4FA0' },
  { id: 'olive', name: 'Olive', hex: '#5A5828' },
  { id: 'light-graphite', name: 'Light Graphite', hex: '#7B7E82' },
  { id: 'zinc', name: 'Zinc', hex: '#9B9D9F' },
  { id: 'heather-grey', name: 'Heather Grey', hex: '#C9C9C6' },
  { id: 'chocolate', name: 'Chocolate', hex: '#4A301C' },
];

/** AWDis Cool T JC001 — sports wear stock card. */
export const SPORTSWEAR_COLOURS = [
  { id: 'white', name: 'White', hex: '#F4F4F1' },
  { id: 'black', name: 'Black', hex: '#161616' },
  { id: 'charcoal', name: 'Charcoal', hex: '#4A4A4A' },
  { id: 'heather-grey', name: 'Heather Grey', hex: '#C9C9C6' },
  { id: 'royal-blue', name: 'Royal Blue', hex: '#1A4FA0' },
  { id: 'electric-yellow', name: 'Electric Yellow', hex: '#D6E22B' },
  { id: 'electric-green', name: 'Electric Green', hex: '#00C853' },
  { id: 'oxford-navy', name: 'Oxford Navy', hex: '#0E1C36' },
  { id: 'fire-red', name: 'Fire Red', hex: '#E10600' },
];

/** Fruit of the Loom 65/35 Polo 63402. */
export const POLO_COLOURS = [
  { id: 'white', name: 'White', hex: '#F4F4F1' },
  { id: 'black', name: 'Black', hex: '#161616' },
  { id: 'deep-navy', name: 'Deep Navy', hex: '#14233A' },
  { id: 'navy', name: 'Navy', hex: '#1C3F6E' },
  { id: 'royal-blue', name: 'Royal Blue', hex: '#1A4FA0' },
  { id: 'bottle-green', name: 'Bottle Green', hex: '#1A4A38' },
  { id: 'kelly-green', name: 'Kelly Green', hex: '#2E8B3A' },
  { id: 'purple', name: 'Purple', hex: '#5B2C8A' },
  { id: 'burgundy', name: 'Burgundy', hex: '#6C2430' },
  { id: 'red', name: 'Red', hex: '#C8102E' },
  { id: 'orange', name: 'Orange', hex: '#E36B1A' },
  { id: 'sunflower', name: 'Sunflower', hex: '#F5D000' },
  { id: 'sky', name: 'Sky', hex: '#C5D9EA' },
  { id: 'heather', name: 'Heather', hex: '#C9C9C6' },
];

export const HOODIE_CLASSIC_COLOURS = [
  { id: 'white', name: 'White', hex: '#F4F4F1' },
  { id: 'black', name: 'Black', hex: '#161616' },
  { id: 'graphite', name: 'Graphite', hex: '#3A3A3A' },
  { id: 'deep-navy', name: 'Deep Navy', hex: '#14233A' },
  { id: 'navy', name: 'Navy', hex: '#1C3F6E' },
  { id: 'royal-blue', name: 'Royal Blue', hex: '#1A4FA0' },
  { id: 'red', name: 'Red', hex: '#C8102E' },
  { id: 'pink', name: 'Pink', hex: '#F4C6D7' },
  { id: 'bottle-green', name: 'Bottle Green', hex: '#1A4A38' },
  { id: 'heather', name: 'Heather', hex: '#C9C9C6' },
];

export const HOODIE_ELECTRIC_COLOURS = [
  { id: 'electric-pink', name: 'Electric Pink', hex: '#FF4FCB' },
  { id: 'electric-yellow', name: 'Electric Yellow', hex: '#F4F000' },
  { id: 'electric-green', name: 'Electric Green', hex: '#39FF14' },
  { id: 'electric-orange', name: 'Electric Orange', hex: '#FF7A00' },
];

/** Fruit of the Loom Set-in Sweats — unique colours from the stock card. */
export const SWEATSHIRT_COLOURS = [
  { id: 'white', name: 'White', hex: '#F4F4F1' },
  { id: 'heather', name: 'Heather', hex: '#C9C9C6' },
  { id: 'black', name: 'Black', hex: '#161616' },
  { id: 'deep-navy', name: 'Deep Navy', hex: '#14233A' },
  { id: 'navy', name: 'Navy', hex: '#1C3F6E' },
  { id: 'royal-blue', name: 'Royal Blue', hex: '#1A4FA0' },
  { id: 'burgundy', name: 'Burgundy', hex: '#6C2430' },
  { id: 'red', name: 'Red', hex: '#C8102E' },
  { id: 'bottle-green', name: 'Bottle Green', hex: '#1A4A38' },
  { id: 'steel-grey', name: 'Steel Grey', hex: '#6B6F75' },
  { id: 'orange-crush', name: 'Orange Crush', hex: '#F26522' },
  { id: 'fire-red', name: 'Fire Red', hex: '#E10600' },
  { id: 'plum', name: 'Plum', hex: '#6B2D6B' },
  { id: 'hot-pink', name: 'Hot Pink', hex: '#E4007C' },
  { id: 'baby-pink', name: 'Baby Pink', hex: '#F7C6D4' },
  { id: 'sapphire-blue', name: 'Sapphire Blue', hex: '#0066CC' },
  { id: 'kelly-green', name: 'Kelly Green', hex: '#2E8B3A' },
];

/** DMS Hi-Vis tabards. */
export const HIVIZ_COLOURS = [
  { id: 'yellow', name: 'Yellow', hex: '#F7E014' },
  { id: 'orange', name: 'Orange', hex: '#FF6A00' },
  { id: 'pink', name: 'Pink', hex: '#FF69B4' },
  { id: 'royal-blue', name: 'Royal Blue', hex: '#1A4FA0' },
  { id: 'red', name: 'Red', hex: '#C8102E' },
  { id: 'black', name: 'Black', hex: '#161616' },
];

export const GARMENT_COLOURS = {
  tshirts: { ranges: [{ range: 'Fruit of the Loom Super Premium', colours: TSHIRT_COLOURS }] },
  polos: { ranges: [{ range: 'Fruit of the Loom 65/35 Polo', colours: POLO_COLOURS }] },
  sportswear: { ranges: [{ range: 'AWDis Cool T', colours: SPORTSWEAR_COLOURS }] },
  hoodies: {
    ranges: [
      { range: 'Fruit of the Loom Classic Hoodie', colours: HOODIE_CLASSIC_COLOURS },
      { range: 'AWDis Electric Hoodie', colours: HOODIE_ELECTRIC_COLOURS },
    ],
  },
  sweatshirts: { ranges: [{ range: 'Fruit of the Loom Set-in Sweats', colours: SWEATSHIRT_COLOURS }] },
  hiviz: { ranges: [{ range: 'DMS Hi-Vis Tabards', colours: HIVIZ_COLOURS }] },
};

export function colourRangesForGarment(pricingKey) {
  return GARMENT_COLOURS[pricingKey]?.ranges || [];
}

export function coloursForGarment(pricingKey) {
  const ranges = colourRangesForGarment(pricingKey);
  if (!ranges.length) return null;
  return {
    range: ranges.map((r) => r.range).join(' + '),
    colours: ranges.flatMap((r) => r.colours),
  };
}

export function isLightColour(id) {
  return [
    'white',
    'heather-grey',
    'heather',
    'zinc',
    'sky',
    'sunflower',
    'pink',
    'baby-pink',
    'hot-pink',
    'yellow',
    'electric-pink',
    'electric-yellow',
    'electric-green',
  ].includes(id);
}

export function getQtyBand(qty) {
  const n = Number(qty);
  if (!Number.isFinite(n) || n < MIN_QTY) return null;
  return QTY_BANDS.find((b) => n >= b.min && n <= b.max) || QTY_BANDS[QTY_BANDS.length - 1];
}

export function bandIndex(band) {
  return QTY_BANDS.findIndex((b) => b.id === band.id);
}

export function roundMoney(value) {
  return Math.round(value * 100) / 100;
}

export function pricePerPiece(base, areas, qty) {
  const band = getQtyBand(qty);
  if (!band || areas < 1) return null;
  const raw = Number(base) + EXTRA_PLACEMENT * (areas - 1);
  return roundMoney(raw * (1 - LADDER_DISCOUNT * bandIndex(band)));
}

export function formatEuro(value) {
  if (value == null || Number.isNaN(value)) return '—';
  return `€${value.toFixed(2)}`;
}

export function garmentFromQuoteType(quoteType) {
  return Object.keys(GARMENT_PRICING).find((key) => GARMENT_PRICING[key].quoteType === quoteType);
}
