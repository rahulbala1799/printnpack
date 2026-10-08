import { WEDDING_IMAGES } from './wedding-printing';

const WEDDING_DIR = '/images/wedding';

/**
 * One gallery photo. Each name has a .jpg original (used for social previews),
 * a 1024 px .webp for the page, and a small -thumb.webp for the thumbnail strip.
 * Width and height are the real image size, so images are never cropped and
 * the page does not jump while they load.
 */
function photo(name, width, height, sizeId, alt, caption) {
  return {
    src: `${WEDDING_DIR}/${name}.jpg`,
    web: `${WEDDING_DIR}/${name}.webp`,
    thumb: `${WEDDING_DIR}/${name}-thumb.webp`,
    width,
    height,
    sizeId,
    alt,
    caption,
  };
}

/**
 * Every wedding product page and its quote-builder entry is driven from this list.
 * To add a size or a quantity, edit it here. The page, the quote builder and
 * the cart all read the same values.
 */
export const WEDDING_PRODUCTS = [
  {
    id: 'wedding-envelopes-ireland',
    moduleId: 'wedding-envelopes',
    path: '/wedding-envelopes-ireland',
    name: 'Wedding Envelopes',
    h1: 'Wedding envelopes',
    tagline: 'Colour-printed, with the guest’s name on the front.',
    metaTitle: 'Wedding Envelopes Ireland | Printed C6, C5 and DL Envelopes',
    metaDescription:
      'Printed wedding envelopes in Ireland. Choose C6, C5 or DL, with colour print, a return address and guest addressing. Quote from Ashbourne, with delivery nationwide.',
    keywords:
      'wedding envelopes ireland, printed wedding envelopes, personalised envelopes ireland, addressed wedding envelopes, C6 wedding envelopes, C5 wedding envelopes, DL wedding envelopes, wedding invitation envelopes dublin',
    unit: 'envelopes',
    previewRatio: '3 / 2',
    galleryTitle: 'Envelope ideas',
    sizeLabel: 'Envelope size',
    sizeHint: 'Standard sizes',
    sizes: [
      {
        id: 'c6',
        name: 'C6',
        dimensions: '114 × 162 mm',
        chip: 'C6 · 114 × 162 mm',
        detail: 'Fits an A6 card. The usual size for RSVP cards, details cards and smaller invitations.',
        recommended: true,
      },
      {
        id: 'c5',
        name: 'C5',
        dimensions: '162 × 229 mm',
        chip: 'C5 · 162 × 229 mm',
        detail: 'Fits an A5 card. The usual size for the main invitation.',
      },
      {
        id: 'dl',
        name: 'DL',
        dimensions: '110 × 220 mm',
        chip: 'DL · 110 × 220 mm',
        detail: 'A long envelope for a DL card or a folded invitation.',
      },
    ],
    fixed: [{ key: 'print', label: 'Print', value: 'Full colour' }],
    quantities: [25, 50, 100, 150, 200, 300, 500],
    minQty: 25,
    gallery: [
      photo('wedding-envelope-floral-address-ireland', 1024, 682, 'c6', WEDDING_IMAGES.envelopeFloral.alt, WEDDING_IMAGES.envelopeFloral.caption),
      photo('wedding-envelope-designs-ireland', 1024, 682, 'c5', WEDDING_IMAGES.envelopeDesigns.alt, WEDDING_IMAGES.envelopeDesigns.caption),
      photo('wedding-envelopes-printed-workshop-ireland', 1024, 682, 'dl', WEDDING_IMAGES.envelopeWorkshop.alt, WEDDING_IMAGES.envelopeWorkshop.caption),
    ],
    introTitle: 'Printed to match the invitation',
    intro:
      'White, blush and kraft envelopes, printed in colour with the couple’s design. A return address can sit on the flap, and each guest’s name and address can be printed on the front.',
    faqs: [
      {
        q: 'What wedding envelope sizes can you print?',
        a: 'Standard sizes are C6 (114 × 162 mm), C5 (162 × 229 mm) and DL (110 × 220 mm). C6 suits an A6 or RSVP card, C5 suits an A5 invitation, and DL suits a long card.',
      },
      {
        q: 'Can you print the guest’s name and address on the envelope?',
        a: 'Yes. The design can include the guest’s name and address, plus a return address on the flap, so the invitation leaves ready to post.',
      },
      {
        q: 'What is the minimum order?',
        a: 'The minimum is 25 envelopes. Choose the size and quantity in the quote builder and we will confirm the price before anything is printed.',
      },
      {
        q: 'Do you deliver wedding envelopes across Ireland?',
        a: 'Yes. Envelopes are printed in Ashbourne, Co. Meath. You can collect locally, or we deliver to Dublin, Cork, Galway and every county in Ireland. We also post to the UK and across the EU, with the cost confirmed in your quote.',
      },
    ],
  },
  {
    id: 'wedding-napkins-ireland',
    moduleId: 'wedding-napkins',
    path: '/wedding-napkins-ireland',
    name: 'Wedding Napkins',
    h1: 'Wedding napkins',
    tagline: 'White airlaid, printed in full colour with your names and date.',
    metaTitle: 'Personalised Wedding Napkins Ireland | Airlaid, Full Colour',
    metaDescription:
      'Personalised wedding napkins in Ireland. White airlaid napkins, printed in full colour, in 20 × 20 cm and 10 × 20 cm, from 50. Quote from Ashbourne, with delivery nationwide.',
    keywords:
      'personalised wedding napkins ireland, airlaid wedding napkins, printed wedding napkins, custom napkins wedding ireland, monogram napkins, wedding napkins dublin, full colour napkins',
    unit: 'napkins',
    previewRatio: '1 / 1',
    galleryTitle: 'Ideas for your napkins',
    sizeLabel: 'Napkin size',
    sizeHint: 'Two sizes',
    sizes: [
      {
        id: '20x20',
        name: '20 × 20 cm',
        dimensions: '20 × 20 cm',
        chip: '20 × 20 cm',
        detail: 'The square napkin, for cocktails, canapés and the drinks reception.',
        recommended: true,
      },
      {
        id: '10x20',
        name: '10 × 20 cm',
        dimensions: '10 × 20 cm',
        chip: '10 × 20 cm',
        detail: 'The slim napkin, for the place setting on the plate or at the bar.',
      },
    ],
    fixed: [
      { key: 'paper', label: 'Paper', value: 'Airlaid white' },
      { key: 'print', label: 'Print', value: 'Full colour' },
    ],
    quantities: [50, 100, 200, 300, 500, 1000],
    minQty: 50,
    gallery: [
      photo('wedding-napkin-20x20-airlaid-blue-ireland', 1024, 1024, '20x20',
        'Personalised wedding napkin in Ireland — white airlaid 20 × 20 cm napkin printed in blue with two hearts, names and date',
        'Names and date, 20 × 20 cm'),
      photo('wedding-napkin-20x20-airlaid-couple-cartoon-ireland', 1024, 1024, '20x20',
        'Wedding napkin printed in full colour with a cartoon portrait of the couple, their names and the date',
        'Couple portrait, 20 × 20 cm'),
      photo('wedding-napkins-20x20-airlaid-bar-ireland', 1024, 682, '20x20',
        'Wedding cocktail napkins printed with a green wreath monogram on a marble bar beside champagne coupes',
        'Wreath monogram, 20 × 20 cm'),
      photo('wedding-napkins-20x20-airlaid-ring-security-dog-ireland', 1024, 1024, '20x20',
        'Wedding napkins printed with a border collie in a bow tie and the line Official Ring Security',
        'Pet portrait, 20 × 20 cm'),
      photo('wedding-napkin-10x20-airlaid-sage-ireland', 1024, 1024, '10x20',
        'White airlaid 10 × 20 cm wedding napkin printed with a green laurel wreath, initials and wedding date',
        'Initials and date, 10 × 20 cm'),
      photo('wedding-napkin-10x20-airlaid-table-ireland', 1024, 682, '10x20',
        'Printed wedding napkin on a dinner plate with a burgundy peony and the couple’s names',
        'On the plate, 10 × 20 cm'),
      photo('wedding-napkin-10x20-airlaid-venue-illustration-ireland', 1024, 1024, '10x20',
        'Wedding napkin printed in burgundy with a line illustration of the wedding venue and the date',
        'Venue illustration, 10 × 20 cm'),
      photo('wedding-napkin-10x20-airlaid-dog-cartoon-ireland', 1024, 1024, '10x20',
        'Wedding napkin printed with a golden retriever in a bow tie and the line Milo says I do too',
        'Pet portrait, 10 × 20 cm'),
    ],
    introTitle: 'Printed to match the day',
    intro:
      'Airlaid napkins feel like cloth and take full-colour print well, so a wreath, a peony, your venue or even the dog comes out as drawn. Add the names, initials or date, and choose the colours to suit the flowerss.',
    faqs: [
      {
        q: 'What napkins do you print for weddings?',
        a: 'White airlaid napkins, printed in full colour, in 20 × 20 cm and 10 × 20 cm.',
      },
      {
        q: 'What is the minimum order?',
        a: 'From 50 napkins. Choose a quantity such as 50, 100 or 200 in the quote builder, or type your own number.',
      },
      {
        q: 'Can I print a monogram, a portrait, my venue or my dog?',
        a: 'Yes. Send the names, date and any artwork, such as a couple portrait, a venue illustration or a pet, and we will set it up in full colour and send a proof before printing.',
      },
      {
        q: 'Do you deliver wedding napkins across Ireland?',
        a: 'Yes. Napkins are printed in Ashbourne, Co. Meath. You can collect locally, or we deliver to Dublin, Cork, Galway and every county in Ireland. We also post to the UK and across the EU, with the cost confirmed in your quote.',
      },
    ],
  },
];

export function getWeddingProduct(id) {
  return WEDDING_PRODUCTS.find((product) => product.id === id) || WEDDING_PRODUCTS[0];
}

export function sizeChips(product) {
  return product.sizes.map((size) => size.chip);
}

/** Field list for the quote builder, built from the same product config. */
export function weddingModuleFields(product) {
  return [
    { key: 'sizePreset', label: product.sizeLabel, type: 'chips', options: sizeChips(product) },
    ...product.fixed.map((item) => ({ key: item.key, label: item.label, type: 'chips', options: [item.value] })),
    { key: 'qty', label: 'Quantity', type: 'qty', min: product.minQty },
  ];
}
