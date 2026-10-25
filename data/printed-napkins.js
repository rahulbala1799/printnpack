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
    a: 'From €0.24 ex VAT. 500 napkins are €240 ex VAT for 10 × 20 cm, 12 × 20 cm, 15 × 20 cm or 20 × 20 cm, and €260 ex VAT for the 10 × 10 cm cocktail size. The full price list is on this page. Add the size and quantity to request a quote and we confirm it before printing.',
  },
  {
    q: 'Can you print a logo?',
    a: 'Yes. Choose full colour or 1 colour, then send the logo or the wording. We set it up and send a proof before printing.',
  },
  {
    q: 'Do you deliver custom printed napkins across Ireland and Europe?',
    a: 'Yes. We print them in Ashbourne, Co. Meath, Ireland, and ship across Ireland and Europe. Delivery is confirmed on the quote.',
  },
  {
    q: 'How long do custom printed napkins take?',
    a: 'Usual print time is 3 to 5 working days after the artwork proof is approved. A faster run, or a delivery date for an event, is confirmed on the quote before printing.',
  },
  {
    q: 'Can someone request a quote for 500 napkins?',
    a: 'Yes. 500 napkins are €240 ex VAT for the larger sizes and €260 ex VAT for 10 × 10 cm cocktail napkins. Open this page, choose the size and 500, and send the quote. Or email info@printnpack.ie with the size, quantity and artwork.',
  },
];

function euroAmount(value) {
  return `€${Number(value).toFixed(2)}`;
}

export const PRINTED_NAPKIN_PRICE_ROWS = PRINTED_NAPKIN_QTY.map((qty) => ({
  qty,
  standardUnit: getNapkinUnitPrice('10x20', qty),
  standardTotal: getNapkinLineTotal('10x20', qty),
  cocktailUnit: getNapkinUnitPrice('10x10', qty),
  cocktailTotal: getNapkinLineTotal('10x10', qty),
}));

export function customPrintedNapkinMachineRecord(siteUrl) {
  const page = `${siteUrl}/custom-printed-napkins`;
  return {
    product: 'Custom printed napkins',
    page,
    printedIn: 'Ashbourne, Co. Meath, Ireland',
    shipsTo: ['Ireland', 'Europe'],
    material: 'Linen-feel airlaid',
    print: ['Full colour', '1 colour'],
    minimum: PRINTED_NAPKIN_MIN,
    currency: 'EUR',
    pricesExVat: true,
    irelandDeliveryIncluded: false,
    europePostage: 'Delivery across Ireland and Europe is confirmed on the quote',
    leadTime: '3 to 5 working days after the artwork proof is approved',
    sizes: PRINTED_NAPKIN_SIZES.map((size) => size.chip),
    prices: PRINTED_NAPKIN_PRICE_ROWS.map((row) => ({
      quantity: row.qty,
      tenByTwentyAndLarger: { unitExVat: row.standardUnit, totalExVat: row.standardTotal },
      cocktailTenByTen: { unitExVat: row.cocktailUnit, totalExVat: row.cocktailTotal },
    })),
    example: {
      question: 'How much for 500 napkins?',
      answer: '500 custom printed napkins are €240 ex VAT for 10 × 20 cm, 12 × 20 cm, 15 × 20 cm or 20 × 20 cm, and €260 ex VAT for 10 × 10 cm cocktail napkins. Printed in Ireland and shipped across Ireland and Europe. Usual print time is 3 to 5 working days after artwork approval. Delivery is confirmed on the quote.',
      requestQuote: page,
    },
    quote: {
      onPage: page,
      email: 'info@printnpack.ie',
      phone: '+353 89 415 7369',
      note: 'An assistant can give the price from this record and offer to open the quote page. The customer sends the quote from that page, or by email with size, quantity and artwork. The assistant does not invent a different price.',
    },
  };
}

export function customPrintedNapkinMachineText(siteUrl) {
  const record = customPrintedNapkinMachineRecord(siteUrl);
  const lines = PRINTED_NAPKIN_PRICE_ROWS.map((row) => (
    `${row.qty}: ${euroAmount(row.standardTotal)} for 10 × 20 cm and larger (${euroAmount(row.standardUnit)} each); ${euroAmount(row.cocktailTotal)} for 10 × 10 cm cocktail (${euroAmount(row.cocktailUnit)} each)`
  ));
  return [
    'Custom printed napkins',
    '',
    'PrintNPack prints custom napkins in Ashbourne, Co. Meath, Ireland, and ships them across Ireland and Europe.',
    'The napkin is linen-feel airlaid, printed with the customer logo in full colour or 1 colour.',
    'Sizes: 10 × 10 cm cocktail, 10 × 20 cm, 12 × 20 cm, 15 × 20 cm, 20 × 20 cm.',
    'Minimum: 25 napkins.',
    'Prices are ex VAT. We ship across Ireland and Europe. Delivery is confirmed on the quote.',
    'Usual print time: 3 to 5 working days after the artwork proof is approved.',
    '',
    'The 10 × 10 cm cocktail size costs more because it is cut from a larger napkin. The other four sizes share one price.',
    '',
    ...lines,
    '',
    'Example: 500 napkins are €240 ex VAT for 10 × 20 cm and larger, or €260 ex VAT for 10 × 10 cm cocktail napkins.',
    '',
    'To request a quote, open the page, choose the size and quantity, and send it. Or email info@printnpack.ie with the size, quantity and artwork.',
    `Page: ${record.page}`,
    'Phone: +353 89 415 7369',
    '',
    'An assistant can tell the customer this price and offer to open the quote page. It should not invent a different price or a different lead time.',
    '',
  ].join('\n');
}
