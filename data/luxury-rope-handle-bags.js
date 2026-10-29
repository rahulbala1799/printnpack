/**
 * Luxury rope handle bag quote.
 * Print costs are Print.com sales prices for sku luxury-paper-bag, sampled 29 Oct 2026.
 * salesPrice already includes the membership discount. Do not take another 8% off.
 * Customer price = print cost × 1.3, plus Ireland delivery at the carrier rate.
 * Delivery is not marked up. Prices are ex VAT.
 *
 * The print cost from the API is the whole run, not one bag.
 * Closing ribbons and the longer rope cost the same on every size.
 * Lamination and foil depend on the size and the print.
 * Gloss and matt are the same price. Gold foil and silver foil are the same price.
 * Rope colour and FSC paper do not change the price.
 * Unprinted bags are not available.
 */

import prices from './luxury-rope-handle-bags-prices.json';

export const ROPE_BAG_ID = 'luxury-rope-handle-bags-ireland';
export const ROPE_BAG_PATH = '/luxury-rope-handle-bags-ireland';
export const ROPE_BAG_MARKUP = 1.3;

export const ROPE_BAG_SIZES = [
  { id: 'paper_bag_cat1_15x8x20cm', label: '15 × 8 × 20 cm', shape: 'Vertical' },
  { id: 'paper_bag_cat1_16x8x25cm', label: '16 × 7 × 25 cm', shape: 'Vertical' },
  { id: 'paper_bag_cat2_11x9x35cm', label: '11.5 × 9.5 × 35 cm', shape: 'Wine bag' },
  { id: 'paper_bag_cat3_20x16x20cm', label: '20 × 16 × 20 cm', shape: 'Vertical' },
  { id: 'paper_bag_cat3_24x10x30cm', label: '24 × 10 × 30 cm', shape: 'Vertical' },
  { id: 'paper_bag_cat4_35x10x24cm', label: '35 × 10 × 24 cm', shape: 'Horizontal' },
  { id: 'paper_bag_cat5_26x12x36cm', label: '26 × 12 × 36 cm', shape: 'Vertical' },
  { id: 'paper_bag_cat5_31x10x40cm', label: '31 × 10 × 40 cm', shape: 'Vertical' },
  { id: 'paper_bag_cat5_40x10x33cm', label: '42 × 12 × 32 cm', shape: 'Horizontal' },
  { id: 'paper_bag_cat6_32x18x39cm', label: '32 × 18 × 39 cm', shape: 'Vertical' },
  { id: 'paper_bag_cat6_42x20x30cm', label: '42 × 20 × 30 cm', shape: 'Horizontal' },
  { id: 'paper_bag_cat6_44x14x36cm', label: '44 × 14 × 36 cm', shape: 'Horizontal' },
  { id: 'paper_bag_cat7_54x14x45cm', label: '54 × 14 × 45 cm', shape: 'Horizontal' },
];

export const ROPE_BAG_PRINTS = [
  { id: '10', label: '1 colour', detail: 'One PMS colour' },
  { id: '20', label: '2 colours', detail: 'Two PMS colours' },
  { id: '40', label: 'Full colour', detail: 'Full colour print' },
];

export const ROPE_BAG_LENGTHS = [
  { id: 'short', label: 'Short', detail: 'About 50 cm' },
  { id: 'long', label: 'Shoulder', detail: 'About 80 cm' },
];

export const ROPE_BAG_PAPERS = [
  { id: 'standard', label: 'White kraft' },
  { id: 'fsc', label: 'FSC white kraft' },
];

export const ROPE_BAG_LAMINATIONS = [
  { id: 'none', label: 'None' },
  { id: 'gloss', label: 'Gloss' },
  { id: 'matt', label: 'Matt' },
];

export const ROPE_BAG_SPOTS = [
  { id: 'none', label: 'None' },
  { id: 'partial', label: 'Partial gloss' },
  { id: 'gold', label: 'Gold foil' },
  { id: 'silver', label: 'Silver foil' },
];

export const ROPE_BAG_RIBBONS = [
  { id: 'none', label: 'None' },
  { id: 'white', label: 'White' },
  { id: 'black', label: 'Black' },
];

export const ROPE_BAG_CORDS = [
  { id: 'cord_white', label: 'White', hex: '#f5f5f4' },
  { id: 'cord_cream', label: 'Cream', hex: '#f3e6c4' },
  { id: 'cord_beige', label: 'Beige', hex: '#d7c4a3' },
  { id: 'cord_yellow', label: 'Yellow', hex: '#e6c84a' },
  { id: 'cord_orange', label: 'Orange', hex: '#e07a2f' },
  { id: 'cord_red', label: 'Red', hex: '#d12b2b' },
  { id: 'cord_red2', label: 'Dark red', hex: '#8b1e1e' },
  { id: 'cord_bordeaux', label: 'Bordeaux', hex: '#6b1d3a' },
  { id: 'cord_magenta', label: 'Magenta', hex: '#c43b8a' },
  { id: 'cord_brown', label: 'Brown', hex: '#6b4423' },
  { id: 'cord_lightgreen', label: 'Light green', hex: '#8fbf7a' },
  { id: 'cord_darkgreen', label: 'Dark green', hex: '#1f4d32' },
  { id: 'cord_cyan', label: 'Light blue', hex: '#7eb6d9' },
  { id: 'cord_reflexblue', label: 'Reflex blue', hex: '#123a9c' },
  { id: 'cord_navyblue', label: 'Navy', hex: '#1b2a4a' },
  { id: 'cord_grey', label: 'Light grey', hex: '#c8c8c8' },
  { id: 'cord_darkgrey', label: 'Dark grey', hex: '#4a4a4a' },
  { id: 'cord_black', label: 'Black', hex: '#1a1a1a' },
];

export const ROPE_BAG_QUANTITIES = prices.quantities;

const ROPE_BAG_PHOTO = '/images/products/luxury-rope-handle-bags';

export const ROPE_BAG_GALLERY = [
  {
    id: 'hero',
    src: `${ROPE_BAG_PHOTO}/hero.jpg`,
    alt: 'White kraft shopping bag with a short black cotton rope handle and a navy example wordmark.',
  },
  {
    id: 'length',
    src: `${ROPE_BAG_PHOTO}/rope-length.jpg`,
    alt: 'Two white kraft bags. The left has a short cotton rope for the hand. The right has a long shoulder rope.',
  },
  {
    id: 'ribbons',
    src: `${ROPE_BAG_PHOTO}/closing-ribbons.jpg`,
    alt: 'Two white kraft rope handle bags. The bag on the right has a ribbon bow at the opening. The rope is still the handle.',
  },
  {
    id: 'foil',
    src: `${ROPE_BAG_PHOTO}/gold-foil.jpg`,
    alt: 'White kraft rope handle bag with the example wordmark in gold foil.',
  },
];

export const ROPE_BAG_ALSO_CALLED = [
  'Rope handle paper bags',
  'Cotton cord paper bags',
  'Luxury rope handle carrier bags',
  'Printed rope handle bags',
  'Shoulder rope paper bags',
  'Boutique rope handle bags',
];

function money(value) {
  return Math.round(Number(value) * 100) / 100;
}

function byId(list, id) {
  return list.find((item) => item.id === id) || null;
}

function nearestQty(value) {
  const steps = ROPE_BAG_QUANTITIES;
  const number = Number(value);
  if (!Number.isFinite(number)) return steps[0];
  return steps.reduce((best, step) => {
    const gap = Math.abs(step - number);
    const bestGap = Math.abs(best - number);
    if (gap < bestGap) return step;
    if (gap === bestGap) return Math.max(best, step);
    return best;
  });
}

function plainLine(sizeId, print, qty) {
  const printCost = prices.base[`${sizeId}|${print}|${qty}`];
  const delivery = prices.delivery[`${sizeId}|${qty}`];
  if (printCost == null || delivery == null) return null;
  return money(printCost * ROPE_BAG_MARKUP + delivery);
}

const START = ROPE_BAG_SIZES.reduce((best, size) => {
  ROPE_BAG_PRINTS.forEach((print) => {
    const total = plainLine(size.id, print.id, ROPE_BAG_QUANTITIES[0]);
    if (total == null) return;
    if (!best || total < best.total) {
      best = { sizeId: size.id, print: print.id, total };
    }
  });
  return best;
}, null);

export function normalizeRopeBag(input = {}) {
  const sizeId = byId(ROPE_BAG_SIZES, input.sizeId) ? input.sizeId : START.sizeId;
  const print = byId(ROPE_BAG_PRINTS, input.print) ? input.print : START.print;
  const cord = byId(ROPE_BAG_CORDS, input.cord) ? input.cord : 'cord_black';
  const cordLength = input.cordLength === 'long' ? 'long' : 'short';
  const paper = input.paper === 'fsc' ? 'fsc' : 'standard';
  let lamination = byId(ROPE_BAG_LAMINATIONS, input.lamination) ? input.lamination : 'none';
  let spot = byId(ROPE_BAG_SPOTS, input.spot) ? input.spot : 'none';
  const ribbons = byId(ROPE_BAG_RIBBONS, input.ribbons) ? input.ribbons : 'none';
  const qty = nearestQty(input.qty);
  const key = `${sizeId}|${print}|${qty}`;
  if (lamination !== 'none' && prices.lamination[key] == null) lamination = 'none';
  if (spot === 'partial' && prices.spotGloss[key] == null) spot = 'none';
  if ((spot === 'gold' || spot === 'silver') && prices.foil[key] == null) spot = 'none';
  return { sizeId, print, cord, cordLength, paper, lamination, spot, ribbons, qty };
}

export function ropeBagFinishChoices(selection) {
  const key = `${selection.sizeId}|${selection.print}|${selection.qty}`;
  return {
    lamination: ROPE_BAG_LAMINATIONS.filter((item) => item.id === 'none' || prices.lamination[key] != null),
    spots: ROPE_BAG_SPOTS.filter((item) => {
      if (item.id === 'none') return true;
      if (item.id === 'partial') return prices.spotGloss[key] != null;
      return prices.foil[key] != null;
    }),
  };
}

function printCostFor(selection) {
  const key = `${selection.sizeId}|${selection.print}|${selection.qty}`;
  const base = prices.base[key];
  const delivery = prices.delivery[`${selection.sizeId}|${selection.qty}`];
  if (base == null || delivery == null) return null;
  let extra = 0;
  if (selection.lamination !== 'none') extra += prices.lamination[key] || 0;
  if (selection.spot === 'partial') extra += prices.spotGloss[key] || 0;
  if (selection.spot === 'gold' || selection.spot === 'silver') extra += prices.foil[key] || 0;
  if (selection.ribbons !== 'none') extra += prices.ribbon[`${selection.print}|${selection.qty}`] || 0;
  if (selection.cordLength === 'long') extra += prices.longCord[`${selection.print}|${selection.qty}`] || 0;
  if (selection.lamination !== 'none' && prices.lamination[key] == null) return null;
  if (selection.spot === 'partial' && prices.spotGloss[key] == null) return null;
  if ((selection.spot === 'gold' || selection.spot === 'silver') && prices.foil[key] == null) return null;
  return { printCost: money(base + extra), delivery };
}

export function ropeBagSummary(selection) {
  const size = byId(ROPE_BAG_SIZES, selection.sizeId);
  const print = byId(ROPE_BAG_PRINTS, selection.print);
  const cord = byId(ROPE_BAG_CORDS, selection.cord);
  const length = byId(ROPE_BAG_LENGTHS, selection.cordLength);
  const parts = [
    `${selection.qty} bags`,
    `${size.shape} ${size.label}`,
    print.label,
    `${cord.label} rope`,
    length.id === 'long' ? 'Shoulder rope' : 'Short rope',
  ];
  if (selection.paper === 'fsc') parts.push('FSC paper');
  if (selection.lamination === 'gloss') parts.push('Gloss lamination');
  if (selection.lamination === 'matt') parts.push('Matt lamination');
  if (selection.spot === 'partial') parts.push('Partial gloss');
  if (selection.spot === 'gold') parts.push('Gold foil');
  if (selection.spot === 'silver') parts.push('Silver foil');
  if (selection.ribbons === 'white') parts.push('White closing ribbons');
  if (selection.ribbons === 'black') parts.push('Black closing ribbons');
  return parts.join(' · ');
}

export function priceRopeBag(input) {
  const selection = normalizeRopeBag(input);
  const cost = printCostFor(selection);
  if (!cost) return null;
  const size = byId(ROPE_BAG_SIZES, selection.sizeId);
  const lineTotal = money(cost.printCost * ROPE_BAG_MARKUP + cost.delivery);
  const each = money(lineTotal / selection.qty);
  return {
    ...selection,
    sizeLabel: size.label,
    shape: size.shape,
    printLabel: byId(ROPE_BAG_PRINTS, selection.print).label,
    cordLabel: byId(ROPE_BAG_CORDS, selection.cord).label,
    cordHex: byId(ROPE_BAG_CORDS, selection.cord).hex,
    lengthLabel: byId(ROPE_BAG_LENGTHS, selection.cordLength).label,
    paperLabel: byId(ROPE_BAG_PAPERS, selection.paper).label,
    laminationLabel: byId(ROPE_BAG_LAMINATIONS, selection.lamination).label,
    spotLabel: byId(ROPE_BAG_SPOTS, selection.spot).label,
    ribbonLabel: byId(ROPE_BAG_RIBBONS, selection.ribbons).label,
    delivery: cost.delivery,
    each,
    unitPrice: each,
    lineTotal,
    summary: ropeBagSummary(selection),
  };
}

export function ropeBagPreview(selection) {
  const photo = (id) => ROPE_BAG_GALLERY.find((item) => item.id === id) || ROPE_BAG_GALLERY[0] || null;
  if (!selection) return photo('hero');
  if (selection.ribbons && selection.ribbons !== 'none') return photo('ribbons');
  if (selection.spot === 'gold') return photo('foil');
  if (selection.cordLength === 'long') return photo('length');
  return photo('hero');
}

export function ropeBagFromPrice() {
  return START.total;
}

export function ropeBagFaqs() {
  const from = ropeBagFromPrice().toFixed(2);
  const size = byId(ROPE_BAG_SIZES, START.sizeId);
  const print = byId(ROPE_BAG_PRINTS, START.print);
  return [
    {
      q: 'What is a luxury rope handle bag?',
      a: 'A white kraft carrier bag with a cotton rope handle. The rope is short, about 50 cm, or shoulder length, about 80 cm. Your artwork is printed on the bag.',
    },
    {
      q: 'How is this different from a die-cut bag or a twisted handle bag?',
      a: 'A die-cut bag has the handle cut out of the paper. A twisted handle bag uses twisted paper handles and can start at 20 bags. This bag has a cotton rope, and the smallest order is 250 bags.',
    },
    {
      q: 'What sizes can I order?',
      a: 'Thirteen sizes. The measurement is width × depth × height. There are vertical bags, one wine bag, and wide horizontal bags. The largest is 54 × 14 × 45 cm.',
    },
    {
      q: 'What is the smallest order?',
      a: `250 bags. A ${size.shape.toLowerCase()} ${size.label} bag printed in ${print.label.toLowerCase()} starts at €${from} for 250, ex VAT, with delivery to Ireland included. Quantities then go up in steps of 250 to 5,000, and in steps of 500 to 10,500.`,
    },
    {
      q: 'Does the rope colour change the price?',
      a: 'No. All 18 rope colours are the same price. You are choosing the colour of the rope, not the colour of the print.',
    },
    {
      q: 'What do gloss, matt, foil and closing ribbons mean?',
      a: 'Gloss and matt are a laminate over the print. They are the same price as each other. Partial gloss, gold foil and silver foil are extra finishes. Gold and silver foil are the same price as each other. Closing ribbons are glued to the bag so it can be tied shut. They are not the handle. White and black ribbons are the same price.',
    },
    {
      q: 'Is FSC paper extra?',
      a: 'No. FSC white kraft is the same price as the standard 170gsm white kraft.',
    },
    {
      q: 'Is delivery included?',
      a: 'Yes. The price is ex VAT and includes one delivery to Ireland. A bigger bag or a larger quantity includes a higher delivery rate. The figure updates when you change the bag.',
    },
  ];
}

export function buildRopeBagQuoteLine(catalogItem, raw) {
  const priced = priceRopeBag(raw);
  if (!priced) return null;
  const images = ROPE_BAG_GALLERY.map((item) => item.src);
  const preview = ropeBagPreview(priced);
  return {
    moduleId: 'luxury-rope-bags',
    productId: catalogItem?.id || ROPE_BAG_ID,
    name: catalogItem?.name || 'Luxury Rope Handle Bags',
    href: catalogItem?.href || ROPE_BAG_PATH,
    image: preview?.src || images[0] || '',
    images,
    qty: priced.qty,
    unitPrice: priced.unitPrice,
    lineTotal: priced.lineTotal,
    summary: priced.summary,
    options: {
      sizeId: priced.sizeId,
      print: priced.print,
      cord: priced.cord,
      cordLength: priced.cordLength,
      paper: priced.paper,
      lamination: priced.lamination,
      spot: priced.spot,
      ribbons: priced.ribbons,
      qty: priced.qty,
    },
    fingerprint: [
      'luxury-rope-bags',
      priced.sizeId,
      priced.print,
      priced.cord,
      priced.cordLength,
      priced.paper,
      priced.lamination,
      priced.spot,
      priced.ribbons,
    ].join('|'),
  };
}
