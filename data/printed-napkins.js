/** Linen-feel napkin quote. Real tiered pricing — cocktail (10 × 10 cm) costs more per unit because it is cut down from a larger napkin. */

export const LINEN_NAPKIN_FROM = '0.24';

export const PRINTED_NAPKIN_MIN = 25;

export const PRINTED_NAPKIN_QTY = [25, 50, 100, 250, 500, 1000];

/**
 * Price tiers, stored as cents per unit (can be a half-cent, e.g. 43.5 for
 * the 1,000pc cocktail tier). 43.5 is exactly representable in binary, so
 * multiplying by an integer quantity and dividing by 100 gives an exact
 * euro total — e.g. 43.5 × 1000 ÷ 100 = €435.00 exactly, no float drift.
 * Cocktail (10 × 10 cm) is cut from a larger napkin, so it costs ~9% more
 * per unit at every tier than the other four sizes.
 */
export const NAPKIN_PRICE_TIERS = [
  { minQty: 10000, standardCents: 24, cocktailCents: 26 },
  { minQty: 5000, standardCents: 27, cocktailCents: 29 },
  { minQty: 2000, standardCents: 33, cocktailCents: 36 },
  { minQty: 1000, standardCents: 40, cocktailCents: 43.5 },
  { minQty: 500, standardCents: 48, cocktailCents: 52 },
  { minQty: 250, standardCents: 58, cocktailCents: 63 },
  { minQty: 150, standardCents: 67, cocktailCents: 73 },
  { minQty: 100, standardCents: 77, cocktailCents: 84 },
  { minQty: 50, standardCents: 96, cocktailCents: 104 },
  { minQty: 0, standardCents: 120, cocktailCents: 131 },
];

function findTier(qty) {
  return NAPKIN_PRICE_TIERS.find((row) => qty >= row.minQty) || NAPKIN_PRICE_TIERS[NAPKIN_PRICE_TIERS.length - 1];
}

function unitCents(sizeId, qty) {
  const safeQty = Math.max(PRINTED_NAPKIN_MIN, Number(qty) || PRINTED_NAPKIN_MIN);
  const tier = findTier(safeQty);
  return sizeId === '10x10' ? tier.cocktailCents : tier.standardCents;
}

/** Per-unit price in euro, rounded to the nearest cent for display. */
export function getNapkinUnitPrice(sizeId, qty) {
  return Math.round(unitCents(sizeId, qty)) / 100;
}

/** Order line total in euro, computed from the exact cent rate so it matches the real quoted price (e.g. 1,000pc cocktail = exactly €435). */
export function getNapkinLineTotal(sizeId, qty) {
  const safeQty = Math.max(PRINTED_NAPKIN_MIN, Number(qty) || PRINTED_NAPKIN_MIN);
  return Math.round(unitCents(sizeId, qty) * safeQty) / 100;
}

export const PRINTED_NAPKIN_PRINT = ['Full colour', '1 colour'];

export const PRINTED_NAPKIN_SIZES = [
  {
    id: '10x10',
    name: '10 × 10 cm',
    chip: '10 × 10 cm cocktail',
    detail: 'Cocktail napkins.',
  },
  {
    id: '10x20',
    name: '10 × 20 cm',
    chip: '10 × 20 cm',
    detail: 'Folded size.',
  },
  {
    id: '12x20',
    name: '12 × 20 cm',
    chip: '12 × 20 cm',
    detail: 'Folded size.',
  },
  {
    id: '15x20',
    name: '15 × 20 cm',
    chip: '15 × 20 cm',
    detail: 'Folded size.',
  },
  {
    id: '20x20',
    name: '20 × 20 cm',
    chip: '20 × 20 cm',
    detail: 'Square napkin.',
  },
];

const LINEN_DIR = '/images/products/premium-linen-feel-napkins';

function linenPhoto(file, alt) {
  const src = `${LINEN_DIR}/${file}`;
  return {
    web: src,
    thumb: src,
    alt,
    caption: 'Example print. Your own artwork goes on the napkin.',
  };
}

export const PRINTED_NAPKIN_IMAGES = [
  linenPhoto('airlaid-kinetic-labs-ireland.jpg', 'Custom printed napkin with the Kinetic Labs logo'),
  linenPhoto('airlaid-oakline-partners-ireland.jpg', 'Custom printed napkin with the Oakline Partners oak leaf'),
  linenPhoto('airlaid-cavan-court-ireland.jpg', 'Custom printed napkin with the Cavan Court Hotel crest'),
  linenPhoto('airlaid-greenstone-ireland.jpg', 'Custom printed napkin with the Greenstone Property Group logo'),
  linenPhoto('airlaid-nova-dental-ireland.jpg', 'Custom printed napkin with the Nova Dental logo'),
];

export const PRINTED_NAPKIN_FAQS = [
  {
    q: 'Do you do custom printed napkins?',
    a: 'Yes. Custom printed napkins for restaurants, cafés and caterers. Choose 10 × 10 cm cocktail, 10 × 20, 12 × 20, 15 × 20 or 20 × 20 cm, full colour or 1 colour, from 25 napkins. The napkins are linen-feel airlaid, printed with your logo. We confirm the price before printing.',
  },
  {
    q: 'What sizes can I order?',
    a: '10 × 10 cm cocktail napkins, 10 × 20 cm, 12 × 20 cm, 15 × 20 cm and 20 × 20 cm.',
  },
  {
    q: 'What is the minimum order?',
    a: '25 napkins. Choose 25, 50, 100, 250, 500 or 1,000, or type your own number.',
  },
  {
    q: 'How much do they cost?',
    a: 'From €0.24. The price depends on the quantity and the design. Add the size and quantity to the quote and we confirm it before printing.',
  },
  {
    q: 'Can you print a logo?',
    a: 'Yes. Choose full colour or 1 colour, then send the logo or the wording. We set it up and send a proof before printing.',
  },
  {
    q: 'Do you deliver printed napkins across Ireland?',
    a: 'Yes. Napkins are printed in Ashbourne, Co. Meath, and delivered nationwide. UK and EU postage is confirmed with the quote.',
  },
];
