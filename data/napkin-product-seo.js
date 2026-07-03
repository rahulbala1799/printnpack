import { MOST_ASKED_NAPKIN_FAQS, NAPKIN_FAQS } from './napkin-faq';

const byId = (id) => NAPKIN_FAQS.find((faq) => faq.id === id);

const SHARED_LINKS = [
  { href: '/napkins-ireland', label: 'Napkins Ireland', desc: 'Complete napkin printing hub' },
  { href: '/napkin-faq-ireland', label: 'Napkin FAQ', desc: '25+ instant answers' },
  { href: '/blog/personalised-napkins-ireland-guide', label: 'Personalised Napkins Guide', desc: 'Sizes, materials & wedding tips' },
  { href: '/napkin-printing-ashbourne', label: 'Napkin Printing Ashbourne', desc: 'Local collection & delivery' },
  { href: '/napkin-printing-dublin', label: 'Napkin Printing Dublin', desc: 'Delivery across Dublin' },
  { href: '/plain-napkins-tableware-ireland', label: 'Plain Napkins Wholesale', desc: 'Bulk white napkins without printing' },
];

export const NAPKIN_PRODUCT_SEO = {
  'printed-napkins': {
    title: 'Printed Napkins Ireland | Custom Branded & Cocktail Napkins | Print n Pack',
    description:
      'Custom printed napkins for Irish restaurants, cafes & caterers — cocktail, lunch & dinner sizes. Logo printing from €0.05/unit, 1,000 MOQ. Delivery nationwide from Ashbourne.',
    keywords: 'printed napkins ireland, personalised napkins ireland, branded napkins, cocktail napkins, paper napkins, napkin printing ireland, restaurant napkins, custom napkins',
    h1: 'Printed Napkins Ireland',
    intro: 'Custom printed napkins with your logo for restaurants, cafes, takeaways, and catering businesses across Ireland. Cocktail, lunch, and dinner sizes — from €0.05 per unit.',
    price: '0.05',
    productFaqs: MOST_ASKED_NAPKIN_FAQS.slice(0, 4),
    relatedLinks: [
      { href: '/products/premium-linen-feel-napkins', label: 'Premium Linen-Feel Napkins', desc: 'Upscale airlaid napkins for hotels & weddings' },
      ...SHARED_LINKS,
    ],
  },
  'premium-linen-feel-napkins': {
    title: 'Linen-Feel Napkins Ireland | Premium Printed Napkins | Print n Pack',
    description:
      'Premium linen-feel napkins with custom logo printing for Irish hotels, restaurants & weddings. Cloth-like airlaid texture from €0.10/unit. Weekly delivery available.',
    keywords: 'linen feel napkins ireland, premium napkins, wedding napkins ireland, airlaid napkins, branded napkins, personalised napkins, napkin printing',
    h1: 'Premium Linen-Feel Napkins Ireland',
    intro: 'Elegant linen-feel napkins with custom printing — the cloth-like texture Irish hotels, fine dining restaurants, and wedding planners choose for upscale table settings.',
    price: '0.10',
    productFaqs: [
      byId('linen-feel-vs-paper'),
      byId('linen-feel-cost'),
      byId('wedding-napkins'),
      byId('weekly-delivery'),
    ].filter(Boolean),
    relatedLinks: [
      { href: '/products/printed-napkins', label: 'Printed Paper Napkins', desc: 'Economical branded napkins from €0.05' },
      ...SHARED_LINKS,
    ],
  },
};
