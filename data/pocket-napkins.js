/** Printed pocket napkins. Every total is the 10 × 10 cm cocktail napkin total plus 10%. */

import { PRINTED_NAPKIN_MIN, PRINTED_NAPKIN_QTY, getNapkinLineTotal } from './printed-napkins';

export const POCKET_NAPKIN_PATH = '/pocket-napkins-ireland';
export const POCKET_NAPKIN_PRODUCT_ID = 'pocket-napkins';
export const POCKET_NAPKIN_MIN = PRINTED_NAPKIN_MIN;
export const POCKET_NAPKIN_QTY = PRINTED_NAPKIN_QTY;
export const POCKET_NAPKIN_PREMIUM = 1.1;

const DIR = '/images/pocket-napkins';

function photo(id, file, name, alt, blurb) {
  const src = `${DIR}/${file}`;
  return {
    id,
    name,
    blurb,
    web: src,
    thumb: src,
    alt,
    caption: 'Example print on a pocket napkin. Send your own artwork.',
  };
}

export const POCKET_NAPKIN_DESIGNS = [
  photo(
    'riverdale',
    'pocket-napkin-riverdale-christmas-ireland.jpg',
    'Riverdale',
    'Printed pocket napkin for The Riverdale Restaurant, white linen-feel napkin with pine, pine cones and a bow, holding a fork and knife',
    'Cutlery pocket with pine, berries and a bow. The fork and knife sit in the fold.'
  ),
  photo(
    'ivy-crest',
    'pocket-napkin-ivy-crest-christmas-ireland.jpg',
    'Ivy Crest',
    'Printed pocket napkin for The Ivy Crest Restaurant, white napkin with pine branches and a restaurant name, holding cutlery',
    'Name in the middle, pine in the corners, folded as a cutlery pocket.'
  ),
  photo(
    'belfry',
    'pocket-napkin-belfry-christmas-ireland.jpg',
    'The Belfry',
    'Printed pocket napkin for The Belfry Restaurant, white napkin with a stag, pine and berries on a marble table',
    'A stag and a short restaurant name, with pine kept around the print.'
  ),
  photo(
    'oakridge-stag',
    'pocket-napkin-oakridge-stag-christmas-ireland.jpg',
    'Oakridge stag',
    'Printed pocket napkin for The Oakridge Restaurant, white napkin with a leaping stag, holly and pine',
    'Leaping stag, holly and pine. Folded long for the place setting.'
  ),
  photo(
    'oakridge-pocket',
    'pocket-napkin-oakridge-cutlery-christmas-ireland.jpg',
    'Oakridge pocket',
    'Printed pocket napkin for The Oakridge Restaurant folded around a fork and knife, with a stag and pine print',
    'The same Oakridge print folded so the cutlery sits in the pocket.'
  ),
];

export function pocketQuantity(qty) {
  const entered = Number(qty);
  const safe = Number.isFinite(entered) && entered > 0 ? Math.round(entered) : POCKET_NAPKIN_MIN;
  return Math.max(POCKET_NAPKIN_MIN, safe);
}

/** Order total ex VAT. Exactly 10% above the cocktail napkin total for the same quantity. */
export function getPocketNapkinLineTotal(qty) {
  const safeQty = pocketQuantity(qty);
  return Math.round(getNapkinLineTotal('10x10', safeQty) * POCKET_NAPKIN_PREMIUM * 100) / 100;
}

/** Per napkin, from the order total, so the table and the quote use one number. */
export function getPocketNapkinUnitPrice(qty) {
  const safeQty = pocketQuantity(qty);
  return getPocketNapkinLineTotal(safeQty) / safeQty;
}

export const POCKET_NAPKIN_PRICE_QTY = [25, 50, 100, 150, 250, 500, 1000, 2000, 5000, 10000];

export const POCKET_NAPKIN_PRICE_ROWS = POCKET_NAPKIN_PRICE_QTY.map((qty) => {
  const cocktailTotal = getNapkinLineTotal('10x10', qty);
  const total = getPocketNapkinLineTotal(qty);
  return {
    qty,
    cocktailTotal,
    total,
    unit: total / qty,
  };
});

export const POCKET_NAPKIN_FROM = POCKET_NAPKIN_PRICE_ROWS[POCKET_NAPKIN_PRICE_ROWS.length - 1].unit;

export function formatPocketEuro(value) {
  const amount = Number(value);
  const asCents = Math.round(amount * 100) / 100;
  if (Math.abs(amount - asCents) < 0.0005) return `€${asCents.toFixed(2)}`;
  const asMilli = Math.round(amount * 1000) / 1000;
  if (Math.abs(amount - asMilli) < 0.00005) return `€${asMilli.toFixed(3)}`;
  return `€${(Math.round(amount * 10000) / 10000).toFixed(4)}`;
}

export const POCKET_NAPKIN_FAQS = [
  {
    q: 'How much are printed pocket napkins?',
    a: 'Pocket napkins are priced at 10% above the 10 × 10 cm cocktail napkin, ex VAT. 25 are €36.03. 100 are €92.40. 500 are €286.00. 1,000 are €478.50. 10,000 are €2,860.00. The full table is on this page. The order total is the price.',
  },
  {
    q: 'Why do pocket napkins cost more than cocktail napkins?',
    a: 'A pocket napkin is folded to hold a fork and knife. The price is the cocktail napkin price plus 10% at the same quantity. Full colour and 1 colour use the same price.',
  },
  {
    q: 'What is a pocket napkin?',
    a: 'A pocket napkin is a printed napkin folded into a pocket for the cutlery. The restaurant name sits on the front. Guests pull the fork and knife from the fold. The photographs on this page show that fold.',
  },
  {
    q: 'What is the minimum order?',
    a: '25 pocket napkins. The price table lists 25, 50, 100, 150, 250, 500, 1,000, 2,000, 5,000 and 10,000. You can also type another quantity. The total updates from the same 10% rule.',
  },
  {
    q: 'Can you print our Christmas design on pocket napkins?',
    a: 'Yes. The Riverdale, Ivy Crest, Belfry and Oakridge napkins on this page are example prints. Send your logo, a name or your own artwork. We send a proof before printing. Keep the design in the middle of the pocket.',
  },
  {
    q: 'Do you deliver pocket napkins across Ireland?',
    a: 'Yes. We print them in Ashbourne, Co. Meath, and ship across Ireland and Europe. Delivery is confirmed on the quote. Usual print time is 3 to 5 working days after the artwork proof is approved.',
  },
];
