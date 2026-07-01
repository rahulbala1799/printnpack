export const FOAMEX_FAQ_CATEGORIES = [
  { id: 'pricing', label: 'Pricing & budget', description: 'Costs, sheet sizes, and what affects foamex prices' },
  { id: 'turnaround', label: 'Turnaround & delivery', description: 'Production time, collection, and nationwide delivery' },
  { id: 'types', label: 'Thickness & materials', description: '3mm, 5mm, 10mm foamex and PVC foam board' },
  { id: 'design', label: 'Design & printing', description: 'Artwork, UV print, laminate, and finishing' },
  { id: 'use-cases', label: 'Use cases', description: 'Signage, exhibitions, retail, and indoor displays' },
  { id: 'local', label: 'Local service', description: 'Ashbourne, Dublin, Meath collection and delivery' },
];

export const FOAMEX_FAQS = [
  // Pricing
  {
    id: 'cost-ireland',
    category: 'pricing',
    q: 'How much do foamex boards cost in Ireland?',
    subtitle: 'Understanding foamex sheet pricing',
    a: 'Printed foamex boards in Ireland typically start from around €15–€28 per sheet depending on thickness (3mm, 5mm, or 10mm), size, and print finish. Standard sheet size is 2440mm × 1220mm (8ft × 4ft). PrintNPack provides free quotes with no obligation.',
    link: { href: '/foamex-boards', label: 'Get a foamex quote' },
  },
  {
    id: '5mm-cost',
    category: 'pricing',
    q: 'How much does 5mm foamex cost?',
    subtitle: 'Most popular thickness pricing',
    a: '5mm foamex is the most popular thickness for indoor signage and exhibition panels in Ireland. Pricing depends on sheet size, print area, and laminate finish — contact PrintNPack for a quote on your specific dimensions.',
    link: { href: '/foamex-boards', label: 'Order 5mm foamex' },
  },
  {
    id: 'price-factors',
    category: 'pricing',
    q: 'What affects the price of foamex printing?',
    subtitle: 'Thickness, size, print, and finishing explained',
    a: 'Key price factors: foamex thickness (3mm vs 5mm vs 10mm), sheet dimensions, number of boards, print coverage, laminate finish (matt or gloss), mounting holes or hanging systems, and delivery location. Larger quantities reduce the per-board cost.',
  },
  {
    id: 'sheet-size',
    category: 'pricing',
    q: 'What is the standard foamex sheet size?',
    subtitle: 'Maximum dimensions for foamex boards',
    a: 'The standard foamex sheet size is 2440mm × 1220mm (8ft × 4ft). We can cut to custom sizes within this maximum — popular sizes include A0, A1, A2, and bespoke dimensions for retail displays and exhibition stands.',
    link: { href: '/blog/foamex-boards-ireland-guide', label: 'Foamex sizes guide' },
  },

  // Turnaround
  {
    id: 'turnaround',
    category: 'turnaround',
    q: 'How long does foamex printing take in Ireland?',
    subtitle: 'Standard and express production times',
    a: 'Standard foamex board printing is typically 3–5 business days after artwork approval. Larger orders or complex finishing may take longer. Rush turnaround may be available for urgent exhibition or retail deadlines — call with your date.',
    link: { href: '/foamex-printing-ashbourne', label: 'Foamex printing Ashbourne' },
  },
  {
    id: 'delivery',
    category: 'turnaround',
    q: 'Do you deliver foamex boards across Ireland?',
    subtitle: 'Nationwide delivery and local collection',
    a: 'Yes. We deliver printed foamex boards nationwide across all Irish counties. Foamex sheets are carefully packaged to prevent damage in transit. Customers in Ashbourne and north Dublin can also collect from our unit.',
    link: { href: '/foamex-printing-dublin', label: 'Foamex printing Dublin' },
  },

  // Types
  {
    id: 'thickness-guide',
    category: 'types',
    q: 'What thickness foamex should I choose?',
    subtitle: '3mm, 5mm, 5.5mm, and 10mm compared',
    a: '3mm foamex is lightweight — ideal for wall-mounted signs and short-term displays. 5mm is the most popular all-round choice for exhibition panels and retail signage. 10mm offers maximum rigidity for freestanding displays and premium presentations. 5.5mm sits between 5mm and 10mm for extra stiffness without the weight of 10mm.',
    link: { href: '/foamex-boards', label: 'View thickness options' },
  },
  {
    id: 'what-is-foamex',
    category: 'types',
    q: 'What is foamex?',
    subtitle: 'PVC foam board explained',
    a: 'Foamex (also called Forex or PVC foam board) is a lightweight, rigid expanded PVC sheet used for indoor signage, exhibition graphics, and retail displays. It has a smooth white surface ideal for direct UV printing and is easy to cut, drill, and mount.',
    link: { href: '/foamex-ireland', label: 'Foamex Ireland hub' },
  },
  {
    id: 'pvc-foamex',
    category: 'types',
    q: 'What is PVC foamex?',
    subtitle: 'Foamex vs other signage materials',
    a: 'PVC foamex is expanded polyvinyl chloride foam — the same material sold under brand names like Foamex and Forex. It is lightweight, waterproof on the surface, and prints with vibrant UV colours. For permanent outdoor signage, consider Correx or Dibond instead.',
    link: { href: '/correx-boards', label: 'Outdoor correx boards' },
  },
  {
    id: 'foamex-vs-correx',
    category: 'types',
    q: 'What is the difference between foamex and correx?',
    subtitle: 'Indoor vs outdoor signage materials',
    a: 'Foamex is rigid PVC foam board — best for indoor signage, exhibitions, and sheltered displays. Correx (corrugated plastic) is fluted and weather-resistant — better for outdoor estate agent boards, site signage, and temporary outdoor use. Choose foamex for premium indoor graphics; correx for outdoor durability.',
    link: { href: '/correx-boards', label: 'View correx boards' },
  },

  // Design
  {
    id: 'artwork',
    category: 'design',
    q: 'What artwork do I need for foamex printing?',
    subtitle: 'File formats and resolution tips',
    a: 'Send print-ready artwork as PDF, AI, EPS, or high-resolution PNG/JPG at 150–300 DPI at final size. Include 3mm bleed if your design goes to the edge. Our design team can help prepare files or create artwork from your logo and brief.',
    link: { href: '/quote', label: 'Request a quote' },
  },
  {
    id: 'uv-printing',
    category: 'design',
    q: 'How is foamex printed?',
    subtitle: 'Direct UV printing on PVC foam board',
    a: 'We use direct UV printing onto the foamex surface — vibrant, sharp colours with excellent detail for logos, photos, and text. Optional matt or gloss laminate protects the print and extends durability for high-traffic retail and exhibition use.',
  },
  {
    id: 'mounting',
    category: 'design',
    q: 'How are foamex boards mounted?',
    subtitle: 'Tape, screws, holes, and hanging systems',
    a: 'Foamex boards can be mounted with double-sided tape (lightweight signs), pre-drilled holes with screws or standoffs, specialised hanging systems, or simply leaned against a wall for temporary displays. We can add drilled holes or hanging hardware on request.',
  },
  {
    id: 'design-service',
    category: 'design',
    q: 'Do you offer design services for foamex boards?',
    subtitle: 'In-house design for signage',
    a: 'Yes. Our in-house design team can create professional foamex signage from your logo, brand guidelines, or brief. Contact us for a design consultation — we prepare proofs before printing.',
  },

  // Use cases
  {
    id: 'foamex-signage',
    category: 'use-cases',
    q: 'What is foamex used for?',
    subtitle: 'Popular foamex applications in Ireland',
    a: 'Foamex is used for indoor shop signage, exhibition stand panels, point-of-sale displays, office wall graphics, estate agent window boards (short-term), menu boards, directional signs, and event branding. It is the go-to material for lightweight rigid indoor graphics.',
    link: { href: '/foamex-boards', label: 'Order foamex boards' },
  },
  {
    id: 'foamex-signs',
    category: 'use-cases',
    q: 'Can you print foamex signs?',
    subtitle: 'Custom foamex signage printing',
    a: 'Yes. We print custom foamex signs for shops, offices, exhibitions, schools, and events across Ireland. Any size up to 8ft × 4ft, multiple thicknesses, and professional finishing options available.',
    link: { href: '/foamex-boards', label: 'Foamex signs' },
  },
  {
    id: 'exhibition-panels',
    category: 'use-cases',
    q: 'Are foamex boards good for exhibitions?',
    subtitle: 'Trade show and exhibition graphics',
    a: 'Yes. Foamex is one of the most popular materials for exhibition panels and trade show graphics in Ireland. Lightweight for transport, rigid enough to stand upright, and prints with sharp detail. Pair with our roll-up banners for a complete exhibition package.',
    link: { href: '/roll-up-banners', label: 'Roll-up banners' },
  },
  {
    id: 'outdoor-use',
    category: 'use-cases',
    q: 'Can foamex boards be used outdoors?',
    subtitle: 'Indoor vs short-term outdoor use',
    a: 'Foamex is primarily designed for indoor use. It can be used outdoors for short-term events (1–2 days) in dry conditions. For permanent outdoor signage, we recommend Correx boards or PVC banners which are weather-resistant.',
    link: { href: '/correx-boards', label: 'Outdoor correx signage' },
  },
  {
    id: 'foamex-panels',
    category: 'use-cases',
    q: 'What are foamex panels?',
    subtitle: 'Rigid display panels explained',
    a: 'Foamex panels are rigid PVC foam sheets cut to size and printed with your graphics — used as exhibition panels, wall-mounted displays, retail point-of-sale boards, and directional signage. Available in 3mm, 5mm, and 10mm thicknesses.',
    link: { href: '/foamex-boards', label: 'Order foamex panels' },
  },

  // Local
  {
    id: 'ashbourne',
    category: 'local',
    q: 'Do you offer foamex printing in Ashbourne?',
    subtitle: 'Local foamex printing in Co. Meath',
    a: 'Yes. PrintNPack prints foamex boards from our Ashbourne unit at Ashbourne Business Centre. We serve Ashbourne, Ratoath, Dunboyne, Dunshaughlin, and north Dublin with local collection and delivery.',
    link: { href: '/foamex-printing-ashbourne', label: 'Foamex printing Ashbourne' },
  },
  {
    id: 'dublin',
    category: 'local',
    q: 'Do you deliver foamex boards to Dublin?',
    subtitle: 'Foamex printing for Dublin businesses',
    a: 'Yes. We deliver printed foamex boards across Dublin city and county — shops, offices, exhibition venues, and retail fit-outs. Based in Ashbourne with fast turnaround and nationwide delivery.',
    link: { href: '/foamex-printing-dublin', label: 'Foamex printing Dublin' },
  },
  {
    id: 'foamex-board-ireland',
    category: 'local',
    q: 'Where can I get foamex boards in Ireland?',
    subtitle: 'Ordering foamex nationwide',
    a: 'PrintNPack supplies printed foamex boards across Ireland from our Ashbourne print unit. Order via our quote form or call +353 89 415 7369. We print 3mm, 5mm, 5.5mm, and 10mm foamex with UV print and optional laminate.',
    link: { href: '/foamex-ireland', label: 'Foamex Ireland' },
  },
  {
    id: 'foamex-printing',
    category: 'local',
    q: 'What is foamex printing?',
    subtitle: 'How custom foamex boards are made',
    a: 'Foamex printing applies your design directly onto PVC foam board using UV print technology. We handle artwork setup, proofing, cutting to size, optional drilling or laminate, and delivery — send your file and we produce ready-to-mount signage.',
    link: { href: '/foamex-boards', label: 'Order foamex printing' },
  },
  {
    id: 'foam-board-printing',
    category: 'use-cases',
    q: 'Do you offer foam board printing in Ireland?',
    subtitle: 'PVC foam board and foamex printing',
    a: 'Yes. Foam board printing (foamex/Forex PVC foam) is one of our core signage services. We print photo-quality graphics on 3mm, 5mm, and 10mm sheets for Irish businesses, schools, exhibitions, and retail.',
    link: { href: '/foamex-boards', label: 'Foam board printing' },
  },
];

/** Top FAQs for hub and product pages — matches highest GSC demand. */
export const MOST_ASKED_FOAMEX_FAQS = [
  'cost-ireland',
  'what-is-foamex',
  'thickness-guide',
  'foamex-board-ireland',
  'turnaround',
  'outdoor-use',
].map((id) => FOAMEX_FAQS.find((faq) => faq.id === id)).filter(Boolean);
