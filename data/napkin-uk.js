import { COCKTAIL_NAPKIN_PRODUCT } from './cocktail-napkins';
import { getPocketNapkinLineTotal } from './pocket-napkins';
import { LINEN_NAPKIN_FROM, PRINTED_NAPKIN_MIN, PRINTED_NAPKIN_SIZES, getNapkinLineTotal } from './printed-napkins';
import { getWeddingProduct } from './wedding-products';

/** Same published rates as the euro price list, shown in pounds. Not a converted FX rate. */
export const UK_500_STANDARD = getNapkinLineTotal('10x20', 500);
export const UK_500_COCKTAIL = getNapkinLineTotal('10x10', 500);
export const UK_500_POCKET = getPocketNapkinLineTotal(500);

export const UK_DELIVERY_BANDS = [
  { label: 'Great Britain, up to 2 kg', price: '£21' },
  { label: 'Great Britain, up to 5 kg', price: '£23' },
  { label: 'Great Britain, up to 10 kg', price: '£25' },
  { label: 'Great Britain, up to 15 kg', price: '£27' },
  { label: 'Great Britain, up to 20 kg', price: '£30' },
  { label: 'Northern Ireland', price: 'From £9' },
];

export const UK_PRODUCTION_TIME = '3 to 5 working days after the artwork proof is approved';
export const UK_DELIVERY_TIME = 'Courier time after production. Delivery time is separate from the 3 to 5 production days, and the quote confirms it before you order.';

export const UK_DELIVERY_EMAIL_BLOCK = [
  'UK DELIVERY',
  'This quote is for UK Delivery.',
  'Ship to the United Kingdom: England, Scotland, Wales or Northern Ireland.',
  'Prices are in GBP (British pounds), ex VAT. The numbers match the published napkin rates, shown in pounds.',
  'UK delivery is not included in the napkin price. Indicative UK delivery:',
  '- Great Britain: £21 up to 2 kg, £23 up to 5 kg, £25 up to 10 kg, £27 up to 15 kg, £30 up to 20 kg.',
  '- Northern Ireland: from £9, the same as delivery within Ireland.',
  '- Orders under 2 kg may qualify for a cheaper packet rate. The quote confirms the charge.',
  `Production time: ${UK_PRODUCTION_TIME}.`,
  `Delivery time: ${UK_DELIVERY_TIME}`,
  'Printed in Ashbourne, Ireland, then posted to the UK.',
  'Goods sent to Great Britain pass through UK customs. Postage is confirmed before you order.',
].join('\n');

export const UK_NAPKIN_PAGES = [
  {
    path: '/napkins-uk',
    title: 'Napkins UK',
    desc: 'All personalised napkin pages, prices in GBP, UK delivery',
  },
  {
    path: '/custom-printed-napkins-uk',
    title: 'Printed napkins',
    desc: `High quality linen-feel airlaid, from ${PRINTED_NAPKIN_MIN}, five sizes`,
  },
  {
    path: '/cocktail-napkins-uk',
    title: 'Cocktail napkins',
    desc: '10 × 10 cm closed, 20 × 40 cm open, from 50',
  },
  {
    path: '/pocket-napkins-uk',
    title: 'Pocket napkins',
    desc: 'Cutlery pocket, cocktail price plus 10%',
  },
  {
    path: '/wedding-napkins-uk',
    title: 'Wedding napkins',
    desc: 'White airlaid, 20 × 20 cm and 10 × 20 cm, from 50',
  },
  {
    path: '/wedding-kraft-napkins-uk',
    title: 'Kraft wedding napkins',
    desc: 'Brown kraft, names or a monogram, from 50',
  },
  {
    path: '/christmas-napkins-uk',
    title: 'Christmas napkins',
    desc: 'Festive pocket napkins, same price as pocket napkins',
  },
];

const UK_NAPKIN_PATHS = new Set(UK_NAPKIN_PAGES.map((page) => page.path));

export function isUkNapkinPath(pathname) {
  const path = String(pathname || '').split('?')[0].replace(/\/$/, '') || '/';
  return UK_NAPKIN_PATHS.has(path);
}

export function isUkDeliveryQuote(items) {
  return (items || []).some((item) => item?.currency === 'GBP' || item?.delivery === 'UK Delivery' || item?.market === 'uk');
}

const UK_NAPKIN_MODULES = {
  'printed-napkins': {},
  'pocket-napkins': {},
  'cocktail-napkins': { napkinPrice: 'cocktail' },
  'cocktail-napkin-print': { napkinPrice: 'cocktail' },
  'wedding-napkins': { napkinPrice: 'standard' },
  'wedding-kraft-napkins': {},
};

/** Options stamped onto a quote line opened from a UK napkin page. */
export function napkinQuoteMarketOptions(moduleId) {
  if (!Object.prototype.hasOwnProperty.call(UK_NAPKIN_MODULES, moduleId)) return null;
  return { market: 'uk', ...UK_NAPKIN_MODULES[moduleId] };
}

export function formatNapkinMoney(value, market = 'ie') {
  const symbol = market === 'uk' ? '£' : '€';
  const amount = Number(value);
  if (!Number.isFinite(amount)) return `${symbol}0.00`;
  const asCents = Math.round(amount * 100) / 100;
  if (Math.abs(amount - asCents) < 0.0005) return `${symbol}${asCents.toFixed(2)}`;
  const asMilli = Math.round(amount * 1000) / 1000;
  if (Math.abs(amount - asMilli) < 0.00005) return `${symbol}${asMilli.toFixed(3)}`;
  return `${symbol}${(Math.round(amount * 10000) / 10000).toFixed(4)}`;
}

export function gbpLabel(text) {
  return String(text || '').replace(/€/g, '£');
}

const gbp = (value) => formatNapkinMoney(value, 'uk');

function ukFaqs({ moq, sizes, priceAnswer }) {
  return [
    {
      q: 'What is the minimum order?',
      a: `The minimum is ${moq} napkins. It is a low minimum, including smaller bespoke runs. It is not a 1,000-unit minimum.`,
    },
    {
      q: 'What sizes can I order?',
      a: sizes,
    },
    {
      q: 'How much do they cost in the UK?',
      a: priceAnswer,
    },
    {
      q: 'How much is UK delivery?',
      a: 'UK delivery is extra. Great Britain is £21 up to 2 kg, £23 up to 5 kg, £25 up to 10 kg, £27 up to 15 kg and £30 up to 20 kg. Northern Ireland is from £9. Orders under 2 kg may qualify for a cheaper packet rate. The quote confirms the charge.',
    },
    {
      q: 'How long do production and delivery take?',
      a: `Production is ${UK_PRODUCTION_TIME}. ${UK_DELIVERY_TIME} Printed in Ashbourne, Ireland, then posted to the UK.`,
    },
  ];
}

export const UK_PRINTED_FAQS = ukFaqs({
  moq: PRINTED_NAPKIN_MIN,
  sizes: '10 × 10 cm cocktail, 10 × 20 cm, 12 × 20 cm, 15 × 20 cm and 20 × 20 cm.',
  priceAnswer: `Indicative prices are in GBP, ex VAT, from £${LINEN_NAPKIN_FROM}. 500 napkins are ${gbp(UK_500_STANDARD)} for 10 × 20 cm and larger, or ${gbp(UK_500_COCKTAIL)} for the 10 × 10 cm cocktail size. UK delivery is extra.`,
});

export const UK_COCKTAIL_NAPKIN_PRODUCT = {
  ...COCKTAIL_NAPKIN_PRODUCT,
  path: '/cocktail-napkins-uk',
  iePath: COCKTAIL_NAPKIN_PRODUCT.path,
  market: 'uk',
  napkinPrice: 'cocktail',
  h1: 'Low MOQ. High quality linen-feel airlaid cocktail napkins',
  tagline: 'From 50. Prices in GBP. UK delivery quoted on the order.',
  metaTitle: 'Low MOQ Cocktail Napkins UK | High Quality Linen-Feel Airlaid Napkins',
  metaDescription: `High quality linen-feel airlaid cocktail napkins for the UK. Low minimum of 50. 10 × 10 cm closed, 20 × 40 cm open. 500 are ${gbp(UK_500_COCKTAIL)} ex VAT. UK delivery is extra.`,
  keywords: 'cocktail napkins uk, personalised napkins uk, linen feel napkins uk, airlaid napkins uk, low moq napkins, printed cocktail napkins uk, 10x10 napkins uk',
  sectionLabel: 'Napkins UK',
  sectionHref: '/napkins-uk',
  sectionName: 'Napkins UK',
  ukPriceNote: `Indicative price is the 10 × 10 cm cocktail rate, in GBP, ex VAT. 500 are ${gbp(UK_500_COCKTAIL)}. UK delivery is extra.`,
  ukMaterial: 'High quality linen-feel airlaid',
  addedNote: 'Added. The quote email is marked UK Delivery, with the price in GBP.',
  related: [
    { id: 'printed', name: 'Printed napkins', path: '/custom-printed-napkins-uk' },
    { id: 'pocket', name: 'Pocket napkins', path: '/pocket-napkins-uk' },
    { id: 'wedding', name: 'Wedding napkins', path: '/wedding-napkins-uk' },
    { id: 'kraft', name: 'Kraft wedding napkins', path: '/wedding-kraft-napkins-uk' },
  ],
  relatedHub: { href: '/napkins-uk', label: 'All napkins UK' },
  intro:
    'High quality linen-feel airlaid cocktail napkins, with a low minimum of 50. Closed, the napkin is 10 × 10 cm. Open, it is 20 × 40 cm. Prices on this page are in GBP. We print in Ashbourne, Ireland, and post to the UK.',
  faqs: ukFaqs({
    moq: 50,
    sizes: 'Closed 10 × 10 cm. Open 20 × 40 cm.',
    priceAnswer: `The indicative price is the 10 × 10 cm cocktail rate, in GBP, ex VAT. 500 are ${gbp(UK_500_COCKTAIL)}. UK delivery is extra and is confirmed on the quote.`,
  }),
};

const weddingBase = getWeddingProduct('wedding-napkins-ireland');
const kraftBase = getWeddingProduct('wedding-kraft-napkins-ireland');

export const UK_WEDDING_NAPKIN_PRODUCT = {
  ...weddingBase,
  path: '/wedding-napkins-uk',
  iePath: weddingBase.path,
  market: 'uk',
  napkinPrice: 'standard',
  h1: 'Low MOQ. High quality linen-feel airlaid wedding napkins',
  tagline: 'From 50. Prices in GBP. Posted to the UK.',
  metaTitle: 'Low MOQ Wedding Napkins UK | High Quality Linen-Feel Airlaid Napkins',
  metaDescription: `High quality linen-feel airlaid wedding napkins for UK weddings. Low minimum of 50. 20 × 20 cm and 10 × 20 cm. 500 are ${gbp(UK_500_STANDARD)} ex VAT. UK delivery is extra.`,
  keywords: 'wedding napkins uk, personalised wedding napkins uk, airlaid wedding napkins uk, linen feel napkins uk, low moq wedding napkins',
  sectionLabel: 'Napkins UK',
  sectionHref: '/napkins-uk',
  sectionName: 'Napkins UK',
  ukPriceNote: `Indicative price is the linen-feel rate for 10 × 20 cm and larger, in GBP, ex VAT. 500 are ${gbp(UK_500_STANDARD)}. UK delivery is extra.`,
  ukMaterial: 'High quality linen-feel airlaid',
  addedNote: 'Added. The quote email is marked UK Delivery, with the price in GBP.',
  relatedHub: { href: '/napkins-uk', label: 'All napkins UK' },
  related: [
    { id: 'printed', name: 'Printed napkins', path: '/custom-printed-napkins-uk' },
    { id: 'cocktail', name: 'Cocktail napkins', path: '/cocktail-napkins-uk' },
    { id: 'kraft', name: 'Kraft wedding napkins', path: '/wedding-kraft-napkins-uk' },
  ],
  intro:
    'High quality linen-feel airlaid wedding napkins, printed in full colour with names, a date or a monogram. The minimum is 50. Sizes are 20 × 20 cm and 10 × 20 cm. Prices are in GBP. We print in Ireland and post to England, Scotland, Wales and Northern Ireland.',
  faqs: ukFaqs({
    moq: 50,
    sizes: '20 × 20 cm and 10 × 20 cm.',
    priceAnswer: `Indicative prices are in GBP, ex VAT. 500 napkins are ${gbp(UK_500_STANDARD)}, the same rate as our other linen-feel napkins at 10 × 20 cm and larger. UK delivery is extra.`,
  }),
};

export const UK_KRAFT_NAPKIN_PRODUCT = {
  ...kraftBase,
  path: '/wedding-kraft-napkins-uk',
  iePath: kraftBase.path,
  market: 'uk',
  h1: 'Low MOQ brown kraft wedding napkins, posted to the UK',
  tagline: 'From 50. The quote is in GBP, with UK delivery written on the email.',
  metaTitle: 'Low MOQ Kraft Wedding Napkins UK | Brown Napkins, UK Delivery',
  metaDescription:
    'Brown kraft wedding napkins for UK weddings. Low minimum of 50. 20 × 20 cm and 10 × 20 cm. The quote is in GBP and the email is marked UK Delivery.',
  keywords: 'kraft wedding napkins uk, brown wedding napkins uk, eco friendly wedding napkins uk, low moq napkins uk',
  sectionLabel: 'Napkins UK',
  sectionHref: '/napkins-uk',
  sectionName: 'Napkins UK',
  ukPriceNote: `Kraft print is confirmed in GBP on the quote. White linen-feel airlaid napkins are priced on the printed napkins page, from £${LINEN_NAPKIN_FROM}, and 500 are ${gbp(UK_500_STANDARD)}. UK delivery is extra on either.`,
  ukMaterial: 'Unbleached kraft. White linen-feel airlaid is a separate napkin',
  addedNote: 'Added. The quote email is marked UK Delivery. The price is confirmed in GBP.',
  relatedHub: { href: '/napkins-uk', label: 'All napkins UK' },
  related: [
    { id: 'wedding', name: 'Wedding napkins', path: '/wedding-napkins-uk' },
    { id: 'printed', name: 'Printed napkins', path: '/custom-printed-napkins-uk' },
  ],
  intro:
    'Brown kraft wedding napkins for a UK wedding, printed with names, a date or a monogram. The minimum is 50, not 1,000. Sizes are 20 × 20 cm and 10 × 20 cm. The quote is in GBP and the email says UK Delivery. For white linen-feel airlaid, use the printed napkin page.',
  faqs: ukFaqs({
    moq: 50,
    sizes: '20 × 20 cm and 10 × 20 cm, unbleached kraft.',
    priceAnswer: 'Kraft napkin print is confirmed in GBP on the quote. UK delivery is listed on that email and is not included in the napkin price.',
  }),
};

export const UK_PRINTED_SIZES = PRINTED_NAPKIN_SIZES.map((size) => size.name);
