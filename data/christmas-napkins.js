/** Christmas napkin showcase. Same linen-feel stock, sizes and prices as custom printed napkins. Artwork files can be swapped when final designs arrive. */

export const CHRISTMAS_NAPKIN_PATH = '/christmas-napkins-ireland';
export const CHRISTMAS_NAPKIN_PRODUCT_ID = 'christmas-napkins';

const DIR = '/images/christmas-napkins';

function design(id, file, name, alt, blurb) {
  const src = `${DIR}/${file}`;
  return {
    id,
    name,
    blurb,
    web: src,
    thumb: src,
    alt,
    caption: 'Example print. Send your own artwork and we print it on the napkin.',
  };
}

export const CHRISTMAS_NAPKIN_DESIGNS = [
  design(
    'holly-wreath',
    'holly-wreath.svg',
    'Holly wreath',
    'Christmas napkin example with a green holly wreath and the word Noel',
    'A green wreath with red berries, for restaurants, pubs and Christmas parties.'
  ),
  design(
    'gold-snowflake',
    'gold-snowflake.svg',
    'Gold snowflake',
    'Christmas napkin example with a gold snowflake and Merry Christmas',
    'A gold snowflake kept in the middle of a white linen-feel napkin.'
  ),
  design(
    'forest-trees',
    'forest-trees.svg',
    'Forest trees',
    'Christmas napkin example with three green trees',
    'A simple row of trees for cafés, hotels and family tables.'
  ),
  design(
    'berry-monogram',
    'berry-monogram.svg',
    'Berry monogram',
    'Christmas napkin example with a letter monogram and holly berries',
    'A letter in a thin circle, with a small holly sprig. Swap the letter for a name.'
  ),
  design(
    'gold-stars',
    'gold-stars.svg',
    'Gold stars',
    'Christmas napkin example with a ring of gold stars',
    'A ring of stars around a short festive line.'
  ),
  design(
    'red-bow',
    'red-bow.svg',
    'Red bow',
    'Christmas napkin example with a red bow',
    'A red bow for Christmas lunch, staff parties and hotel tables.'
  ),
];

export const CHRISTMAS_NAPKIN_FAQS = [
  {
    q: 'Are Christmas napkins the same price as your other printed napkins?',
    a: 'Yes. Christmas napkins use the same linen-feel airlaid, the same sizes and the same prices as custom printed napkins. From €0.24 ex VAT. 500 napkins are €240 ex VAT for 10 × 20 cm and larger, or €260 ex VAT for the 10 × 10 cm cocktail size.',
  },
  {
    q: 'Can I send my own Christmas design?',
    a: 'Yes. The prints on this page are examples. Send a logo, names, a date or your own artwork. We set it up and send a proof before printing. Keep the design in the middle of the napkin.',
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
    q: 'How long do Christmas napkins take?',
    a: 'Usual print time is 3 to 5 working days after the artwork proof is approved. For a Christmas lunch or party, send the order in time for that proof. Delivery is confirmed on the quote.',
  },
  {
    q: 'Do you deliver Christmas napkins across Ireland?',
    a: 'Yes. We print them in Ashbourne, Co. Meath, and ship across Ireland and Europe. Delivery is confirmed on the quote.',
  },
];
