const NAPKIN_DIR = '/images/napkins';

function photo(name, width, height, alt, caption) {
  return {
    src: `${NAPKIN_DIR}/${name}.jpg`,
    web: `${NAPKIN_DIR}/${name}.webp`,
    thumb: `${NAPKIN_DIR}/${name}-thumb.webp`,
    width,
    height,
    sizeId: '10x10',
    alt,
    caption,
  };
}

/** One cocktail napkin: 10 × 10 cm closed, 20 × 40 cm open. Weddings and everyday print. */
export const COCKTAIL_NAPKIN_PRODUCT = {
  id: 'cocktail-napkins-ireland',
  moduleId: 'cocktail-napkins',
  path: '/cocktail-napkins-ireland',
  name: 'Cocktail Napkins',
  h1: 'Cocktail napkin printing Ireland',
  tagline: 'White napkins for weddings, restaurants and bars. 10 × 10 cm closed.',
  metaTitle: 'Cocktail Napkins Ireland | Printed for Weddings & Restaurants',
  metaDescription:
    'Cocktail napkin printing in Ireland. White napkins, 10 × 10 cm closed and 20 × 40 cm open, custom printed for weddings, restaurants and bars. From 50. Delivered nationwide.',
  keywords: [
    'cocktail napkins ireland',
    'cocktail napkin printing ireland',
    'printed cocktail napkins',
    'custom cocktail napkins ireland',
    'wedding cocktail napkins',
    'restaurant cocktail napkins',
    'bar cocktail napkins',
    '10x10 cocktail napkins',
    'personalised cocktail napkins',
    'cocktail napkins dublin',
    'printed napkins ireland',
    'wedding napkins ireland',
  ].join(', '),
  sectionLabel: 'Napkin printing',
  sectionHref: '/napkins-ireland',
  sectionName: 'Napkins Ireland',
  category: 'Cocktail napkins',
  trackWedding: false,
  addedNote: 'Added. We will price the cocktail napkins and confirm delivery.',
  relatedTitle: 'More napkins',
  related: [
    { id: 'cocktail-product', name: 'Cocktail napkins', path: '/products/cocktail-napkins' },
    { id: 'wedding-napkins', name: 'Wedding napkins', path: '/wedding-napkins-ireland' },
    { id: 'kraft-napkins', name: 'Kraft wedding napkins', path: '/wedding-kraft-napkins-ireland' },
    { id: 'printed-napkins', name: 'Printed napkins', path: '/products/premium-linen-feel-napkins' },
  ],
  relatedHub: { href: '/napkins-ireland', label: 'All napkins' },
  unit: 'napkins',
  previewRatio: '1 / 1',
  galleryTitle: 'Printed cocktail napkins',
  sizeLabel: 'Napkin',
  sizes: [
    {
      id: '10x10',
      name: '10 × 10 cm',
      dimensions: '10 × 10 cm closed',
      chip: '10 × 10 cm closed',
      detail: 'The folded cocktail napkin. Open, it is 20 × 40 cm.',
      recommended: true,
    },
  ],
  choices: [
    {
      key: 'use',
      label: 'Printed for',
      options: ['Wedding', 'Restaurant, bar or café'],
    },
  ],
  fixed: [
    { key: 'open', label: 'Open size', value: '20 × 40 cm' },
    { key: 'paper', label: 'Paper', value: 'White' },
    { key: 'print', label: 'Print', value: 'Custom print' },
  ],
  quantities: [50, 100, 200, 300, 500, 1000],
  minQty: 50,
  tip: 'Keep the logo and the words in the middle. A frame, a border or a shape along the edge often gets cut off, because a napkin is not always cut with a perfectly straight edge.',
  gallery: [
    photo(
      'cocktail-napkin-salty-cod-ireland',
      1024,
      936,
      'Printed cocktail napkin in Ireland for The Salty Cod fish and chips, white 10 × 10 cm napkin with a blue fish logo',
      'Restaurant logo, 10 × 10 cm'
    ),
    photo(
      'cocktail-napkin-tamarind-lane-ireland',
      1024,
      936,
      'Custom printed cocktail napkin for Tamarind Lane Indian Street Kitchen, white napkin with a copper pot logo',
      'Café logo, 10 × 10 cm'
    ),
  ],
  introTitle: 'Weddings and everyday service',
  intro:
    'The same white cocktail napkin works for a wedding drinks reception and for a restaurant, bar or café. Closed, it is 10 × 10 cm. Open, it is 20 × 40 cm. Print a name and a date for the wedding, or a logo for the bar. Order from 50, and we deliver across Ireland.',
  faqs: [
    {
      q: 'What size are your printed cocktail napkins?',
      a: 'Closed, the cocktail napkin is 10 × 10 cm. Open, it is 20 × 40 cm. That is the size for drinks, canapés and the bar.',
    },
    {
      q: 'Can you print cocktail napkins for a wedding and for a restaurant?',
      a: 'Yes. Weddings use names, a date or a monogram. Restaurants, bars and cafés use a logo. It is the same white napkin and the same sizes.',
    },
    {
      q: 'Should the design have a border?',
      a: 'No. Keep the logo and the type in the middle. A frame or a shape on the edge can be cut off, because the napkin is not always cut with a straight edge.',
    },
    {
      q: 'What is the minimum order for cocktail napkin printing in Ireland?',
      a: 'From 50 napkins. Choose 50, 100, 200 or up to 1,000 in the quote builder, or type your own number.',
    },
    {
      q: 'Do you deliver printed cocktail napkins across Ireland?',
      a: 'Yes. Napkins are printed in Ashbourne, Co. Meath. You can collect locally, or we deliver to Dublin, Cork, Galway and every county in Ireland. We also post to the UK and the EU, with the cost confirmed in your quote.',
    },
  ],
};
