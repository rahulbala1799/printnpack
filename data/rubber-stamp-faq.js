export const RUBBER_STAMP_FAQ_CATEGORIES = [
  { id: 'pricing', label: 'Pricing & budget', description: 'Costs, value, and what affects stamp prices' },
  { id: 'turnaround', label: 'Turnaround & delivery', description: 'Same-day, express, collection, and delivery' },
  { id: 'types', label: 'Stamp types', description: 'Business, signature, self-inking, and hand stamps' },
  { id: 'design', label: 'Design & artwork', description: 'Logos, text layout, and file formats' },
  { id: 'use-cases', label: 'Use cases', description: 'Invoices, letterheads, schools, and personal use' },
  { id: 'local', label: 'Local service', description: 'Ashbourne, Dublin, Meath collection and delivery' },
];

export const RUBBER_STAMP_FAQS = [
  // Pricing
  {
    id: 'cost-ireland',
    category: 'pricing',
    q: 'How much do rubber stamps cost in Ireland?',
    subtitle: 'Understanding stamp pricing for your budget',
    a: 'Custom rubber stamps in Ireland typically start from around €15–€25 for a basic self-inking business stamp, with larger company stamps, signature stamps, and traditional hand stamps from €20–€45 depending on size, type, and ink colour. PrintNPack provides free quotes with no minimum order.',
    link: { href: '/rubber-stamps', label: 'Get a stamp quote' },
  },
  {
    id: 'business-stamp-cost',
    category: 'pricing',
    q: 'How much does a business stamp cost?',
    subtitle: 'Company logo and address stamp pricing',
    a: 'A custom business stamp with company name, address, and logo typically costs €20–€40 in Ireland depending on size and whether you choose self-inking or traditional mount. Self-inking stamps cost slightly more upfront but include the ink pad — better value for daily office use.',
    link: { href: '/rubber-stamps', label: 'Order business stamps' },
  },
  {
    id: 'signature-stamp-cost',
    category: 'pricing',
    q: 'How much does a signature stamp cost?',
    subtitle: 'Personalised signature stamp pricing',
    a: 'Signature stamps in Ireland typically start from around €18–€35 depending on size and mount type. Self-inking signature stamps are popular for authorised document signing. We prepare a proof before manufacturing so the impression matches your signature.',
  },
  {
    id: 'price-factors',
    category: 'pricing',
    q: 'What affects the price of a custom rubber stamp?',
    subtitle: 'Size, type, ink, and turnaround explained',
    a: 'Key price factors: stamp size (impression area), mount type (self-inking vs traditional wooden handle), number of lines of text, logo complexity, ink colour, quantity ordered, and express turnaround. Sending a clear logo file keeps design costs down.',
  },
  {
    id: 'min-order',
    category: 'pricing',
    q: 'What is the minimum order for rubber stamps?',
    subtitle: 'Single stamp orders welcome',
    a: 'PrintNPack has no minimum order for rubber stamps — you can order a single business stamp, one signature stamp, or a batch for a whole office. Bulk discounts may apply for larger quantities.',
  },

  // Turnaround
  {
    id: 'turnaround',
    category: 'turnaround',
    q: 'How quickly can you make a rubber stamp in Ireland?',
    subtitle: 'Standard, next-day, and same-day options',
    a: 'Standard turnaround is 2–3 business days after artwork approval. Next-day and same-day express service is available for urgent orders — call with your deadline. Local collection from our Ashbourne unit is available for Meath and north Dublin customers.',
    link: { href: '/rubber-stamp-printing-ashbourne', label: 'Stamp printing Ashbourne' },
  },
  {
    id: 'same-day',
    category: 'turnaround',
    q: 'Do you offer same-day rubber stamp printing?',
    subtitle: 'Express stamp service in Ireland',
    a: 'Yes. Same-day and next-day rubber stamp service is available for urgent business stamp orders when artwork is ready. Call +353 89 440 0155 with your deadline — we will confirm availability based on current workload.',
  },
  {
    id: 'delivery',
    category: 'turnaround',
    q: 'Do you deliver rubber stamps across Ireland?',
    subtitle: 'Nationwide delivery and local collection',
    a: 'Yes. We deliver rubber stamps nationwide across all Irish counties. Customers in Ashbourne, Ratoath, Dunboyne, and north Dublin can also collect from our unit at Ashbourne Business Centre for faster pickup.',
    link: { href: '/rubber-stamp-printing-dublin', label: 'Stamp printing Dublin' },
  },

  // Types
  {
    id: 'self-inking-vs-traditional',
    category: 'types',
    q: 'What is the difference between self-inking and traditional rubber stamps?',
    subtitle: 'Choosing the right mount type',
    a: 'Self-inking stamps have a built-in ink pad that re-inks the die automatically — clean, fast, and ideal for daily office use. Traditional hand stamps use a separate ink pad and wooden handle — lower cost, classic feel, and good for occasional stamping or craft use.',
  },
  {
    id: 'business-stamps',
    category: 'types',
    q: 'What is a business stamp used for?',
    subtitle: 'Company stamps for Irish businesses',
    a: 'Business stamps are used on invoices, letterheads, receipts, delivery notes, and official correspondence. Common layouts include company name and address, logo with registration number, "Received" or "Paid" stamps, and COVID-era contact tracing stamps. PrintNPack prints custom business stamps with your exact layout.',
    link: { href: '/blog/business-stamps-ireland-guide', label: 'Business stamps guide' },
  },
  {
    id: 'signature-stamps',
    category: 'types',
    q: 'Can I get a custom signature stamp made?',
    subtitle: 'Authorised signing made easy',
    a: 'Yes. We make personalised signature stamps from your scanned or digital signature. Popular with solicitors, accountants, company directors, and anyone who signs documents regularly. Self-inking signature stamps are the most convenient option for daily use.',
  },
  {
    id: 'company-logo-stamp',
    category: 'types',
    q: 'Can you put my company logo on a rubber stamp?',
    subtitle: 'Logo stamps for Irish businesses',
    a: 'Yes. We print company logo stamps with crisp detail on professional-grade rubber. Send your logo as PDF, PNG, or AI — we check resolution and prepare a proof before manufacturing. Logo stamps work on letterheads, packaging, and official documents.',
  },
  {
    id: 'hand-stamps',
    category: 'types',
    q: 'Do you make traditional hand stamps?',
    subtitle: 'Wooden handle stamps with separate ink pad',
    a: 'Yes. Traditional hand stamps with wooden handles and separate ink pads are available for craft use, occasional stamping, and customers who prefer the classic style. They are typically lower cost than self-inking mounts.',
  },
  {
    id: 'address-stamps',
    category: 'types',
    q: 'Can I get a custom address stamp?',
    subtitle: 'Return address and correspondence stamps',
    a: 'Yes. Address stamps are one of our most popular orders — company return address, personal correspondence, or wedding invitation stamps. Available in self-inking and traditional formats with multiple lines of text.',
  },

  // Design
  {
    id: 'artwork-format',
    category: 'design',
    q: 'What artwork format do I need for a rubber stamp?',
    subtitle: 'File types and design tips',
    a: 'Send your logo or layout as PDF, PNG, AI, or EPS. For text-only stamps, tell us the exact wording and we lay it out for you. Black-and-white artwork works best — we convert colour logos to a stamp-ready format. WhatsApp photos of sketches are fine for simple text layouts.',
  },
  {
    id: 'design-help',
    category: 'design',
    q: 'Can you design my rubber stamp for me?',
    subtitle: 'Layout and artwork support included',
    a: 'Yes. Basic layout help is included with most stamp orders. Tell us your company name, address, phone, and logo — we prepare a proof showing the impression size and text arrangement before we manufacture.',
  },
  {
    id: 'stamp-size',
    category: 'design',
    q: 'What size rubber stamp do I need?',
    subtitle: 'Common impression sizes explained',
    a: 'Common business stamp sizes range from 40×20mm (compact address) to 70×30mm (full company details with logo). Signature stamps are typically 50×20mm. We recommend the size based on how many lines of text you need — send your details and we will advise.',
  },
  {
    id: 'ink-colours',
    category: 'design',
    q: 'What ink colours are available for rubber stamps?',
    subtitle: 'Black, blue, red, and more',
    a: 'Standard ink colours include black, blue, and red for self-inking stamps. Traditional hand stamps can use any colour ink pad. Black is most common for business and official documents; blue is popular for personal and craft use.',
  },

  // Use cases
  {
    id: 'invoice-stamp',
    category: 'use-cases',
    q: 'Can I get a stamp for invoices and receipts?',
    subtitle: 'Business document stamping',
    a: 'Yes. Invoice stamps, "Paid" stamps, "Received" stamps, and company detail stamps are among our most common orders. A self-inking business stamp saves time on daily paperwork and gives a professional impression on every document.',
  },
  {
    id: 'school-stamps',
    category: 'use-cases',
    q: 'Do you make stamps for schools and teachers?',
    subtitle: 'Teacher reward and marking stamps',
    a: 'Yes. We make custom stamps for schools — teacher marking stamps, reward stamps, library stamps, and school office stamps. Popular with primary schools across Meath and Dublin. Fast turnaround for term-start orders.',
  },
  {
    id: 'personalised-stamps',
    category: 'use-cases',
    q: 'Can I get personalised rubber stamps in Ireland?',
    subtitle: 'Personal, wedding, and gift stamps',
    a: 'Yes. Personalised rubber stamps are available for wedding invitations, craft projects, hobby use, and gifts. Custom text, names, and simple graphics. Self-inking and traditional formats available with nationwide delivery.',
  },
  {
    id: 'solicitor-accountant',
    category: 'use-cases',
    q: 'Do solicitors and accountants order stamps from you?',
    subtitle: 'Professional stamp orders',
    a: 'Yes. We regularly supply signature stamps, company stamps, and "Copy" / "Certified True Copy" stamps to solicitors, accountants, and professional services firms across Ireland. Express turnaround available for urgent orders.',
  },

  // Local
  {
    id: 'ashbourne',
    category: 'local',
    q: 'Where can I get rubber stamps in Ashbourne?',
    subtitle: 'Local stamp printing near you',
    a: 'PrintNPack is based at Unit 14 Ashbourne Business Centre, Ashbourne, Co. Meath. We make custom rubber stamps for local businesses, schools, and residents across Ashbourne, Ratoath, Dunboyne, and north Dublin. Collection available.',
    link: { href: '/rubber-stamp-printing-ashbourne', label: 'Stamp printing Ashbourne' },
  },
  {
    id: 'dublin',
    category: 'local',
    q: 'Do you deliver rubber stamps to Dublin?',
    subtitle: 'Dublin stamp printing and delivery',
    a: 'Yes. We deliver custom rubber stamps across Dublin city and county. Based in Ashbourne, Co. Meath, we serve Dublin businesses, solicitors, retailers, and offices with fast turnaround and nationwide courier delivery.',
    link: { href: '/rubber-stamp-printing-dublin', label: 'Stamp printing Dublin' },
  },
  {
    id: 'near-me',
    category: 'local',
    q: 'Where can I get a logo stamp near me in Ireland?',
    subtitle: 'Local and online stamp ordering',
    a: 'PrintNPack makes custom logo stamps from our Ashbourne print unit with delivery across Ireland. If you are in Meath or north Dublin, you can collect in person. Order online via our quote form or call +353 89 440 0155.',
    link: { href: '/rubber-stamps', label: 'Order custom stamps' },
  },
  {
    id: 'stamp-printing',
    category: 'local',
    q: 'What is stamp printing?',
    subtitle: 'How custom rubber stamps are made',
    a: 'Stamp printing (rubber stamp manufacturing) involves laser-engraving your design into a rubber die, mounting it on a self-inking mechanism or wooden handle, and fitting the ink pad. PrintNPack handles the full process — send your artwork or text and we deliver a ready-to-use stamp.',
    link: { href: '/rubber-stamps-ireland', label: 'Rubber stamps Ireland hub' },
  },
];
