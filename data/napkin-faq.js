export const NAPKIN_FAQ_CATEGORIES = [
  { id: 'pricing', label: 'Pricing & budget', description: 'Costs, MOQs, and what affects napkin prices' },
  { id: 'turnaround', label: 'Turnaround & delivery', description: 'Production time, weekly delivery, and collection' },
  { id: 'types', label: 'Napkin types', description: 'Printed, linen-feel, cocktail, and plain wholesale' },
  { id: 'design', label: 'Design & artwork', description: 'Logos, colours, folds, and file formats' },
  { id: 'use-cases', label: 'Use cases', description: 'Restaurants, weddings, catering, and events' },
  { id: 'local', label: 'Local service', description: 'Ashbourne, Dublin, Meath collection and delivery' },
];

export const NAPKIN_FAQS = [
  // Pricing
  {
    id: 'cost-ireland',
    category: 'pricing',
    q: 'How much do printed napkins cost in Ireland?',
    subtitle: 'Understanding napkin pricing for your budget',
    a: 'Custom printed napkins in Ireland typically start from around €0.05 per unit for standard paper napkins (1,000+ MOQ), with premium linen-feel napkins from €0.10 per unit. Final price depends on size, ply, material, print colours, and quantity. PrintNPack provides free quotes with no obligation.',
    link: { href: '/products/printed-napkins', label: 'Get a napkin quote' },
  },
  {
    id: 'min-order',
    category: 'pricing',
    q: 'What is the minimum order for printed napkins?',
    subtitle: 'MOQ for branded napkins',
    a: 'The minimum order for custom printed napkins is typically 1,000 units. This applies to both standard paper napkins and premium linen-feel napkins. Larger quantities reduce the per-unit cost — ask about bulk pricing for high-volume restaurants and catering operations.',
    link: { href: '/napkin-faq-ireland', label: 'More napkin FAQs' },
  },
  {
    id: 'linen-feel-cost',
    category: 'pricing',
    q: 'How much do linen-feel napkins cost?',
    subtitle: 'Premium airlaid napkin pricing',
    a: 'Premium linen-feel napkins start from around €0.10 per unit with a 1,000-unit minimum order. The airlaid material offers a cloth-like texture and higher absorbency than standard paper napkins — popular for upscale restaurants, hotels, and weddings.',
    link: { href: '/products/premium-linen-feel-napkins', label: 'View linen-feel napkins' },
  },
  {
    id: 'price-factors',
    category: 'pricing',
    q: 'What affects the price of custom napkins?',
    subtitle: 'Size, ply, material, and print explained',
    a: 'Key price factors: napkin size (cocktail vs dinner), ply count (1-ply, 2-ply, 3-ply), material (standard paper vs linen-feel airlaid), number of print colours, fold style, quantity ordered, and delivery frequency. Plain wholesale napkins are the most economical option for high-volume catering.',
    link: { href: '/plain-packaging', label: 'Plain napkins wholesale' },
  },
  {
    id: 'plain-wholesale',
    category: 'pricing',
    q: 'Can I buy plain napkins wholesale in Ireland?',
    subtitle: 'Bulk white napkins without printing',
    a: 'Yes. PrintNPack supplies plain white napkins wholesale for restaurants, takeaways, and catering businesses — 1-ply and 2-ply options in cocktail, lunch, and dinner sizes. Plain napkins are ideal when you need high volume at low cost without custom branding.',
    link: { href: '/plain-packaging', label: 'Browse plain packaging' },
  },

  // Turnaround
  {
    id: 'turnaround',
    category: 'turnaround',
    q: 'How long does napkin printing take in Ireland?',
    subtitle: 'Standard production and express options',
    a: 'Standard printed napkin production is 5–7 business days after artwork approval. Premium linen-feel napkins typically take 7–10 business days. Rush turnaround may be available for urgent event orders — call with your deadline and we will confirm availability.',
    link: { href: '/napkin-printing-ashbourne', label: 'Napkin printing Ashbourne' },
  },
  {
    id: 'weekly-delivery',
    category: 'turnaround',
    q: 'Do you offer weekly napkin delivery?',
    subtitle: 'Scheduled supply for restaurants and hotels',
    a: 'Yes. PrintNPack offers weekly scheduled delivery for hospitality businesses that need a consistent supply of branded napkins. We tailor the delivery schedule to your usage and can adjust quantities over time to reduce waste and storage needs.',
    link: { href: '/products/premium-linen-feel-napkins', label: 'Premium napkins with delivery' },
  },
  {
    id: 'delivery',
    category: 'turnaround',
    q: 'Do you deliver printed napkins across Ireland?',
    subtitle: 'Nationwide delivery and local collection',
    a: 'Yes. We deliver custom printed napkins nationwide across all Irish counties. Customers in Ashbourne, Ratoath, Dunboyne, and north Dublin can also collect from our unit at Ashbourne Business Centre.',
    link: { href: '/napkin-printing-dublin', label: 'Napkin printing Dublin' },
  },

  // Types
  {
    id: 'cocktail-vs-dinner',
    category: 'types',
    q: 'What is the difference between cocktail and dinner napkins?',
    subtitle: 'Choosing the right napkin size',
    a: 'Cocktail napkins are smaller (typically around 25×25cm) — used for drinks, appetisers, and bar service. Luncheon napkins are medium-sized for casual dining. Dinner napkins are larger (40×40cm or 48×48cm) for full meals and upscale table settings. Match the size to your service style.',
    link: { href: '/blog/personalised-napkins-ireland-guide', label: 'Napkin sizes guide' },
  },
  {
    id: 'linen-feel-vs-paper',
    category: 'types',
    q: 'What is the difference between linen-feel and standard paper napkins?',
    subtitle: 'Premium vs everyday napkins',
    a: 'Standard paper napkins are economical and work well for everyday restaurant and takeaway use. Linen-feel napkins use premium airlaid paper with a cloth-like texture — more absorbent, softer, and visually upscale. Choose linen-feel for hotels, fine dining, and weddings; standard printed for high-volume casual dining.',
    link: { href: '/products/premium-linen-feel-napkins', label: 'Premium linen-feel napkins' },
  },
  {
    id: 'ply-options',
    category: 'types',
    q: 'What ply napkins should I order?',
    subtitle: '1-ply, 2-ply, and 3-ply explained',
    a: '1-ply napkins are the most economical — fine for high-volume casual service. 2-ply napkins are the most popular for restaurants — better absorbency and a more substantial feel. 3-ply napkins offer maximum thickness for premium dining. Your choice depends on budget, service style, and how the napkin will be used.',
  },
  {
    id: 'branded-napkins',
    category: 'types',
    q: 'What are branded napkins?',
    subtitle: 'Custom logo napkins for hospitality',
    a: 'Branded napkins are custom-printed napkins featuring your restaurant logo, business name, tagline, or event design. They reinforce brand identity at every table and are popular with restaurants, cafes, hotels, caterers, and wedding planners across Ireland.',
    link: { href: '/products/printed-napkins', label: 'Order branded napkins' },
  },

  // Design
  {
    id: 'artwork',
    category: 'design',
    q: 'What artwork do I need for printed napkins?',
    subtitle: 'Logo files and design tips',
    a: 'Send your logo as PDF, PNG, AI, or EPS with a clear resolution. Simple one- or two-colour designs work best on napkins. Our design team can help adapt your logo for napkin printing and prepare a proof before production.',
    link: { href: '/quote', label: 'Request a quote' },
  },
  {
    id: 'print-colours',
    category: 'design',
    q: 'How many colours can you print on napkins?',
    subtitle: 'Full-colour and spot colour printing',
    a: 'We offer up to 4-colour printing on custom napkins. Single-colour logo prints are the most cost-effective for restaurants. Full-colour designs work well for events, weddings, and promotional campaigns. We will advise on the best approach for your artwork and budget.',
  },
  {
    id: 'fold-styles',
    category: 'design',
    q: 'What fold styles are available for napkins?',
    subtitle: 'Quarter fold, eighth fold, and pocket fold',
    a: 'Common fold styles include quarter fold (4-fold), eighth fold (8-fold), and pocket fold. The fold affects how the napkin sits on the table and how your logo is displayed. Tell us your table setting style and we will recommend the best fold for your brand.',
  },

  // Use cases
  {
    id: 'restaurant-napkins',
    category: 'use-cases',
    q: 'Can you print napkins for my restaurant?',
    subtitle: 'Branded napkins for Irish hospitality',
    a: 'Yes. We print custom napkins for restaurants, cafes, takeaways, pubs, and hotels across Ireland. Add your logo to cocktail, lunch, or dinner napkins — with optional weekly delivery so you never run short during service.',
    link: { href: '/products/printed-napkins', label: 'Restaurant napkins' },
  },
  {
    id: 'wedding-napkins',
    category: 'use-cases',
    q: 'Do you print wedding napkins in Ireland?',
    subtitle: 'Personalised napkins for weddings and events',
    a: 'Yes. We print personalised wedding napkins with couple names, monograms, dates, and custom designs. Premium linen-feel napkins are especially popular for wedding receptions. Order well in advance of your event date — typically 5–10 business days production plus delivery.',
    link: { href: '/blog/personalised-napkins-ireland-guide', label: 'Wedding napkins guide' },
  },
  {
    id: 'catering-napkins',
    category: 'use-cases',
    q: 'Do you supply napkins for catering businesses?',
    subtitle: 'Bulk napkins for events and catering',
    a: 'Yes. Catering companies order both custom branded napkins and plain wholesale napkins from PrintNPack. Branded napkins elevate corporate events and private functions; plain napkins keep costs down for high-volume buffet and outdoor catering.',
    link: { href: '/plain-packaging', label: 'Plain catering supplies' },
  },
  {
    id: 'personalised-napkins',
    category: 'use-cases',
    q: 'Where can I get personalised napkins in Ireland?',
    subtitle: 'Custom printed napkins nationwide',
    a: 'PrintNPack prints personalised napkins for businesses and events across Ireland from our Ashbourne print unit. Order online via our quote form or call +353 89 415 7369. We serve Dublin, Meath, and all counties with delivery or local collection.',
    link: { href: '/napkins-ireland', label: 'Napkins Ireland hub' },
  },

  // Local
  {
    id: 'ashbourne',
    category: 'local',
    q: 'Do you offer napkin printing in Ashbourne?',
    subtitle: 'Local napkin printing in Co. Meath',
    a: 'Yes. PrintNPack is based in Ashbourne, Co. Meath. We print custom napkins for restaurants, caterers, and events across Ashbourne, Ratoath, Dunboyne, Dunshaughlin, and north Dublin. Local collection is available from our unit.',
    link: { href: '/napkin-printing-ashbourne', label: 'Napkin printing Ashbourne' },
  },
  {
    id: 'dublin',
    category: 'local',
    q: 'Do you deliver printed napkins to Dublin?',
    subtitle: 'Napkin printing for Dublin businesses',
    a: 'Yes. We deliver custom printed napkins across Dublin city and county — restaurants, hotels, event venues, and catering companies. Based in Ashbourne with fast turnaround and nationwide delivery.',
    link: { href: '/napkin-printing-dublin', label: 'Napkin printing Dublin' },
  },
  {
    id: 'near-me',
    category: 'local',
    q: 'Where can I get printed napkins near me?',
    subtitle: 'Local and online napkin ordering',
    a: 'PrintNPack makes custom printed napkins from our Ashbourne print unit with delivery across Ireland. If you are in Meath or north Dublin, you can collect in person. Search "printed napkins near me" — we serve customers nationwide from Co. Meath.',
    link: { href: '/napkins-ireland', label: 'Napkins Ireland' },
  },
  {
    id: 'napkin-printing',
    category: 'local',
    q: 'What is napkin printing?',
    subtitle: 'How custom napkins are made',
    a: 'Napkin printing applies your logo or design to paper or linen-feel napkins using flexographic or digital print methods. PrintNPack handles artwork setup, proofing, and production — send your design and we deliver ready-to-use branded napkins.',
    link: { href: '/products/printed-napkins', label: 'Order printed napkins' },
  },
  {
    id: 'paper-napkins',
    category: 'types',
    q: 'Do you supply paper napkins in Ireland?',
    subtitle: 'Standard and printed paper napkins',
    a: 'Yes. We supply both plain white paper napkins wholesale and custom printed paper napkins for Irish restaurants and caterers. Options include 1-ply and 2-ply in cocktail, lunch, and dinner sizes.',
    link: { href: '/products/printed-napkins', label: 'Printed paper napkins' },
  },
];

/** Top FAQs for hub and product pages — matches highest GSC demand. */
export const MOST_ASKED_NAPKIN_FAQS = [
  'cost-ireland',
  'min-order',
  'cocktail-vs-dinner',
  'linen-feel-vs-paper',
  'turnaround',
  'personalised-napkins',
].map((id) => NAPKIN_FAQS.find((faq) => faq.id === id)).filter(Boolean);
