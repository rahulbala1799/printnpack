import { NAPKIN_FAQS } from './napkin-faq';
import { PRINTED_NAPKIN_FAQS } from './printed-napkins';

const byId = (id) => NAPKIN_FAQS.find((faq) => faq.id === id);

const SHARED_LINKS = [
  { href: '/napkins-ireland', label: 'Napkins Ireland', desc: 'Complete napkin printing hub' },
  { href: '/napkin-faq-ireland', label: 'Napkin FAQ', desc: '25+ instant answers' },
  { href: '/blog/custom-printed-napkins', label: 'Custom Printed Napkins', desc: '10 × 10 cm cocktail, wedding napkins and kraft, from 50' },
  { href: '/blog/custom-napkins-uk-ireland-europe', label: 'Custom Napkins UK, Ireland & Europe', desc: 'Printed napkins for Ireland, the UK and EU' },
  { href: '/blog/personalised-napkins-ireland-guide', label: 'Personalised Napkins Guide', desc: 'Sizes, materials & wedding tips' },
  { href: '/napkin-printing-ashbourne', label: 'Napkin Printing Ashbourne', desc: 'Local collection & delivery' },
  { href: '/napkin-printing-dublin', label: 'Napkin Printing Dublin', desc: 'Delivery across Dublin' },
  { href: '/plain-napkins-tableware-ireland', label: 'Plain Napkins Wholesale', desc: 'Bulk white napkins without printing' },
];

export const NAPKIN_PRODUCT_SEO = {
  'printed-napkins': {
    title: 'Printed Napkins Ireland | Custom Logo Napkins from 25 | Print n Pack',
    description:
      'Custom printed napkins for Irish restaurants, cafes and caterers. 10 × 10 cm cocktail, 10 × 20, 12 × 20, 15 × 20 and 20 × 20 cm, from 25. Quote online. Delivery from Ashbourne.',
    keywords: 'printed napkins ireland, personalised napkins ireland, branded napkins, cocktail napkins, paper napkins, napkin printing ireland, restaurant napkins, custom napkins, 10x20 napkins, 20x20 napkins',
    h1: 'Printed Napkins Ireland',
    intro: 'Custom printed napkins with your logo. Choose 10 × 10 cm cocktail, 10 × 20, 12 × 20, 15 × 20 or 20 × 20 cm, from 25 napkins. We confirm the price before printing.',
    productFaqs: PRINTED_NAPKIN_FAQS,
    relatedLinks: [
      { href: '/products/cocktail-napkins', label: 'Cocktail Napkins', desc: 'White 10 × 10 cm napkins, 20 × 40 cm open' },
      { href: '/cocktail-napkins-ireland', label: 'Cocktail Napkins Ireland', desc: '10 × 10 cm closed, for weddings, restaurants and bars' },
      { href: '/wedding-kraft-napkins-ireland', label: 'Kraft Wedding Napkins', desc: 'Custom kraft napkins with names, a date or a monogram' },
      { href: '/products/premium-linen-feel-napkins', label: 'Custom Printed Napkins', desc: 'Logo napkins from 25, in linen-feel airlaid' },
      { href: '/luxury-tissue-paper-ireland', label: 'Luxury Tissue Paper', desc: 'Plain colour tissue, 480 sheets per case' },
      ...SHARED_LINKS,
    ],
  },
  'cocktail-napkins': {
    title: 'Cocktail Napkins Ireland | Printed Logo Napkins for Restaurants',
    description:
      'Cocktail napkin printing in Ireland. White napkins, 10 × 10 cm closed and 20 × 40 cm open, custom printed for restaurants, bars and cafés. From 50. Delivered nationwide.',
    keywords:
      'cocktail napkins ireland, cocktail napkin printing ireland, printed cocktail napkins, custom cocktail napkins, restaurant cocktail napkins, bar cocktail napkins, 10x10 cocktail napkins, logo napkins ireland, printed napkins ireland',
    h1: 'Cocktail Napkins Ireland',
    intro:
      'White cocktail napkins printed with your logo for restaurants, bars and cafés. Closed, the napkin is 10 × 10 cm. Open, it is 20 × 40 cm. Order from 50 and we deliver across Ireland.',
    productFaqs: [
      {
        q: 'What size are the cocktail napkins?',
        a: 'Closed, the cocktail napkin is 10 × 10 cm. Open, it is 20 × 40 cm.',
      },
      {
        q: 'Who are these cocktail napkins for?',
        a: 'Restaurants, bars, cafés, takeaways and hotels. Print a logo or a short name in the middle of the napkin.',
      },
      {
        q: 'Should the design have a border?',
        a: 'No. Keep the logo and the words in the middle. A frame, a border or a shape along the edge often gets cut off, because a napkin is not always cut with a perfectly straight edge.',
      },
      {
        q: 'What is the minimum order?',
        a: 'From 50 napkins. Choose 50, 100, 200 or up to 1,000 in the quote builder, or type your own number.',
      },
      {
        q: 'Do you deliver cocktail napkins across Ireland?',
        a: 'Yes. We print in Ashbourne, Co. Meath, and deliver nationwide. UK and EU postage is confirmed in the quote.',
      },
    ],
    relatedLinks: [
      { href: '/cocktail-napkins-ireland', label: 'Cocktail napkin printing', desc: 'The cocktail napkin page, including wedding print' },
      { href: '/products/premium-linen-feel-napkins', label: 'Custom Printed Napkins', desc: '10 × 10 cm cocktail, 10 × 20, 12 × 20, 15 × 20 and 20 × 20 cm' },
      ...SHARED_LINKS,
    ],
  },
  'premium-linen-feel-napkins': {
    title: 'Custom Printed Napkins Ireland | Logo Napkins from 25 | Print n Pack',
    description:
      'Custom printed napkins for Irish restaurants, cafés and caterers. 10 × 10 cm cocktail, 10 × 20, 12 × 20, 15 × 20 and 20 × 20 cm, from 25. Linen-feel airlaid, from €0.24. Quote online. Delivery from Ashbourne.',
    keywords: 'custom printed napkins, custom printed napkins ireland, printed napkins ireland, personalised napkins ireland, branded napkins, cocktail napkins, paper napkins, napkin printing ireland, restaurant napkins, custom napkins, 10x20 napkins, 20x20 napkins, linen feel napkins',
    h1: 'Custom Printed Napkins',
    intro: 'Custom printed napkins with your logo. Choose 10 × 10 cm cocktail, 10 × 20, 12 × 20, 15 × 20 or 20 × 20 cm, from 25 napkins. The napkins are linen-feel airlaid, from €0.24. We confirm the price before printing.',
    price: '0.24',
    lowPrice: '0.24',
    highPrice: '1.31',
    productFaqs: PRINTED_NAPKIN_FAQS,
    relatedLinks: [
      { href: '/products/cocktail-napkins', label: 'Cocktail Napkins', desc: 'The 10 × 10 cm cocktail napkin page' },
      { href: '/cocktail-napkins-ireland', label: 'Cocktail Napkins Ireland', desc: '10 × 10 cm closed, for weddings, restaurants and bars' },
      { href: '/wedding-kraft-napkins-ireland', label: 'Kraft Wedding Napkins', desc: 'Custom kraft napkins for weddings, delivered nationwide' },
      ...SHARED_LINKS,
    ],
  },
};
