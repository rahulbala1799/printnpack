/** Individual branded-clothing products. Dedicated Ireland pages come later. */

const TSHIRT_IMAGES = [
  '/images/apparel/TSHIRT MOCK UP 1.jpg',
  '/images/apparel/TSHIRT MOCK UP 2.jpg',
  '/images/apparel/TSHIRT MOCK UP 3.jpg',
  '/images/apparel/TSHIRT MOCK UP 4.jpg',
  '/images/apparel/TSHIRT MOCK UP 5.jpg',
];

const POLO_IMAGES = [
  '/images/apparel/custom-polo-shirts-ireland-embroidered-events-uniform.jpg',
  '/images/apparel/custom-polo-shirts-ireland-landscaping-workwear.jpg',
  '/images/apparel/custom-polo-shirts-ireland-hospitality-staff.jpg',
  '/images/apparel/custom-polo-shirts-ireland-golf-club-kit.jpg',
];

const HOODIE_IMAGES = [
  '/images/apparel/HOODIE MOCK UP 1.jpg',
  '/images/apparel/HOODIE MOCK UP 2.jpg',
  '/images/apparel/HOODIE MOCK UP 3.jpg',
  '/images/apparel/HOODIE MOCK UP 4.jpg',
  '/images/apparel/HOODIE MOCK UP 5.jpg',
];

const SPORTSWEAR_IMAGES = [
  '/images/apparel/custom-printed-sportswear-ireland-dublin-running-club.jpg',
  '/images/apparel/custom-printed-sportswear-ireland-soccer-team-kit.jpg',
  '/images/apparel/custom-printed-sportswear-ireland-club-kit-navy-white.jpg',
  '/images/apparel/custom-printed-sportswear-ireland-gym-performance-tshirt.jpg',
];

const HIVIZ_IMAGES = [
  '/images/apparel/custom-hiviz-workwear-ireland-construction-site.jpg',
  '/images/apparel/custom-hiviz-vest-ireland-warehouse-logistics.jpg',
  '/images/apparel/custom-hiviz-vest-ireland-event-crew.jpg',
  '/images/apparel/custom-hiviz-vest-ireland-roadworks.jpg',
  '/images/apparel/custom-hiviz-vest-ireland-event-security.jpg',
];

export const clothingHref = (product) => product.url || `/clothing/${product.id}`;

export const clothingProducts = [
  {
    id: 'custom-printed-tshirts-ireland',
    name: 'Custom Printed T-Shirts',
    category: 'Apparel',
    quoteType: 'T-Shirts',
    pricingKey: 'tshirts',
    popular: true,
    description:
      'Promotional and branded Fruit of the Loom Super Premium t-shirts. S–3XL same price, from €15 for a chest print. Nationwide from Ashbourne.',
    features: [
      'Screen print and digital print for logos and full-colour artwork',
      'Cotton, cotton blend, organic and performance fabrics',
      'Sizes S–3XL — same price on every size',
      'Front, back, chest and sleeve placements',
      'Bulk discounts for teams and repeat orders',
      '3–5 day turnaround, Ireland-wide delivery',
    ],
    detailedDescription:
      'Custom printed t-shirts are the most popular branded clothing we supply in Ireland — events, giveaways, GAA clubs and staff uniforms. Fruit of the Loom Super Premium, 13 stock colours. Chest print from €15, 8% off each qty step from 5 pieces. Extra print areas +€1.50.',
    specifications: [
      { name: 'Printing', value: 'Screen print, digital print' },
      { name: 'Materials', value: '100% cotton, cotton blend, organic cotton, performance fabric' },
      { name: 'Sizes', value: 'S, M, L, XL, XXL, 2XL, 3XL — same price' },
      { name: 'Colours', value: 'White, Black, Bottle Green, Burgundy, Navy, Deep Navy, Red, Royal Blue, Olive, Light Graphite, Zinc, Heather Grey, Chocolate' },
      { name: 'Minimum order', value: '5 pieces' },
      { name: 'Production time', value: '3–5 business days' },
      { name: 'Delivery', value: 'Nationwide Ireland from Ashbourne' },
    ],
    images: TSHIRT_IMAGES,
    imageSrc: TSHIRT_IMAGES[0],
    price: 'From €15.00',
    moq: 5,
    leadTime: '3-5 business days',
  },
  {
    id: 'custom-polo-shirts-ireland',
    name: 'Custom Polo Shirts Ireland',
    category: 'Apparel',
    quoteType: 'Polo T-Shirts',
    pricingKey: 'polos',
    popular: true,
    schemaCategory: 'Polo Shirts',
    seoTitle: 'Custom Polo Shirts Ireland | Embroidered Staff Uniforms | PrintNPack',
    seoDescription:
      'Custom polo shirts Ireland for hospitality, events, golf clubs and workwear. Fruit of the Loom 65/35, embroidered or printed from €19. Same price S–3XL. Delivered nationwide from Ashbourne.',
    h1: 'Custom Polo Shirts Ireland',
    keywords:
      'custom polo shirts Ireland, embroidered polo shirts Ireland, company polo shirts Dublin, staff uniform polos Ireland, hospitality polo shirts, golf club polo Ireland, Fruit of the Loom polo print Ashbourne',
    faqIds: ['polo-ireland', 'polo-price', 'cost', 'turnaround', 'dublin'],
    faqHeading: 'Custom polo shirts Ireland — FAQs',
    description:
      'Embroidered and printed polo shirts for Irish businesses — hotels, cafés, events, grounds teams and golf clubs. Fruit of the Loom 65/35, 14 stock colours, from €19 for a left-chest logo. Same price S–3XL, delivery from Ashbourne.',
    features: [
      'Embroidery or print on left chest, back and sleeve — the usual company clothing with a logo',
      'Fruit of the Loom 65/35 cotton/poly pique — hospitality, events, retail and outdoor teams',
      '14 stock colours including black, bottle green, red, royal, navy and white',
      'Same price S–3XL, minimum 5 pieces, 8% off each quantity step',
      'Standard, button-down and ribbed collars',
      '3–5 day turnaround, Ireland-wide delivery from Ashbourne, Co. Meath',
    ],
    detailedDescription:
      'Order custom polo shirts in Ireland for hotels, cafés, event staff, landscaping crews, golf clubs and office teams. We embroider or print your crest on Fruit of the Loom 65/35 polos — left chest, back or sleeve — from €19 for a single placement. Extra print areas +€1.50. Same price on every size S–3XL, from 5 pieces, with 8% off each quantity step. Proofs before stitch or print. Delivery to Dublin, Cork, Galway and every county from Ashbourne.',
    specifications: [
      { name: 'Garment', value: 'Fruit of the Loom 65/35 polo shirt' },
      { name: 'Printing', value: 'Embroidery, screen print, digital print' },
      { name: 'Materials', value: 'Cotton pique, cotton blend, performance polyester' },
      { name: 'Colours', value: 'White, Black, Deep Navy, Navy, Royal Blue, Bottle Green, Kelly Green, Purple, Burgundy, Red, Orange, Sunflower, Sky, Heather' },
      { name: 'Collar', value: 'Standard, button-down, ribbed, flat knit' },
      { name: 'Sizes', value: 'S–3XL — same price' },
      { name: 'Minimum order', value: '5 pieces' },
      { name: 'Production time', value: '3–5 business days after proof' },
      { name: 'Delivery', value: 'Nationwide Ireland from Ashbourne, Co. Meath' },
    ],
    images: POLO_IMAGES,
    imageAlts: [
      'Custom embroidered polo shirts Ireland — black events and hospitality staff uniform',
      'Custom polo shirts Ireland — bottle green landscaping and grounds team workwear',
      'Embroidered café polo shirts Ireland — red hospitality staff uniform with company logo',
      'Custom golf club polo shirts Ireland — royal blue embroidered staff kit',
    ],
    imageSrc: POLO_IMAGES[0],
    price: 'From €19.00',
    moq: 5,
    leadTime: '3-5 business days',
  },
  {
    id: 'custom-hoodies-ireland',
    name: 'Custom Hoodies',
    category: 'Apparel',
    quoteType: 'Hoodies',
    pricingKey: 'hoodies',
    popular: true,
    description:
      'Fruit of the Loom Classic and AWDis Electric hoodies. 14 stock colours, same price S–3XL, from €36 for a single placement.',
    features: [
      'Pullover, zip-up, quarter zip and cropped styles',
      'Print on front, back, hood, sleeve or pocket',
      'Cotton blend, fleece and French terry',
      'Popular for merch shops, clubs and winter campaigns',
      'Sizes S–3XL — same price on every size',
      '3–5 day production, nationwide delivery',
    ],
    detailedDescription:
      'Custom hoodies suit merch, clubs and winter staff wear. Fruit of the Loom Classic (10 colours) and AWDis Electric (pink, yellow, green, orange). From €36 for a single placement, extra areas +€1.50.',
    specifications: [
      { name: 'Styles', value: 'Classic pullover and electric fluorescent hoodies' },
      { name: 'Printing', value: 'Screen print, digital print, embroidery' },
      { name: 'Colours', value: 'White, Black, Graphite, Deep Navy, Navy, Royal Blue, Red, Pink, Bottle Green, Heather, plus Electric Pink, Yellow, Green and Orange' },
      { name: 'Sizes', value: 'S–3XL — same price' },
      { name: 'Production time', value: '3–5 business days' },
      { name: 'Delivery', value: 'Nationwide Ireland from Ashbourne' },
    ],
    images: HOODIE_IMAGES,
    imageSrc: HOODIE_IMAGES[0],
    price: 'From €36.00',
    moq: 5,
    leadTime: '3-5 business days',
  },
  {
    id: 'custom-sweatshirts-ireland',
    name: 'Custom Sweatshirts',
    category: 'Apparel',
    quoteType: 'Sweat Shirts',
    pricingKey: 'sweatshirts',
    popular: false,
    description:
      'Fruit of the Loom Set-in Sweats, crew neck. 17 stock colours, same price S–3XL, from €36 for a single placement.',
    features: [
      'Crew neck Set-in Sweats, 280gsm cotton/poly',
      'Print or embroidery on chest, back and sleeve',
      '17 stock colours from the Fruit of the Loom card',
      'A lighter option than a hoodie for staff uniforms',
      'Sizes S–3XL — same price on every size',
      '3–5 day turnaround, Ireland-wide delivery',
    ],
    detailedDescription:
      'Sweatshirts sit between a t-shirt and a hoodie — sleeves without a hood. Fruit of the Loom Set-in Sweats, 17 colours. From €36 for a single placement, extra areas +€1.50, 8% off each qty step from 5 pieces.',
    specifications: [
      { name: 'Neck', value: 'Crew neck (V-neck and mock neck on request)' },
      { name: 'Printing', value: 'Screen print, digital print, embroidery' },
      { name: 'Colours', value: 'White, Heather, Black, Deep Navy, Navy, Royal Blue, Burgundy, Red, Bottle Green, Steel Grey, Orange Crush, Fire Red, Plum, Hot Pink, Baby Pink, Sapphire Blue, Kelly Green' },
      { name: 'Sizes', value: 'S–3XL — same price' },
      { name: 'Production time', value: '3–5 business days' },
      { name: 'Delivery', value: 'Nationwide Ireland from Ashbourne' },
    ],
    images: HOODIE_IMAGES,
    imageSrc: HOODIE_IMAGES[0],
    price: 'From €36.00',
    moq: 5,
    leadTime: '3-5 business days',
  },
  {
    id: 'custom-sportswear-ireland',
    name: 'Custom Sportswear Ireland',
    category: 'Apparel',
    quoteType: 'Sports Wear',
    pricingKey: 'sportswear',
    popular: true,
    schemaCategory: 'Sportswear',
    keywords:
      'custom sportswear Ireland, printed sports t-shirts Ireland, GAA club kit printing, soccer team t-shirts Ireland, running club merch Dublin, gym staff t-shirts Ireland, AWDis Cool T print Ashbourne',
    faqIds: ['sportswear-ireland', 'sportswear-price', 'cost', 'turnaround', 'dublin'],
    faqHeading: 'Custom sportswear Ireland — FAQs',
    seoTitle: 'Custom Sportswear Ireland | Printed Club & Team Kits | PrintNPack',
    seoDescription:
      'Custom printed sportswear Ireland for GAA, soccer, running clubs and gyms. AWDis Cool T kits from €16.50, same price S–3XL, 3–5 days. Delivered nationwide from Ashbourne.',
    h1: 'Custom Sportswear Ireland',
    description:
      'Printed sports t-shirts and club kits for Irish teams. AWDis Cool T moisture-wicking fabric, 9 stock colours, from €16.50 for a chest print. Same price S–3XL, delivery from Ashbourne to Dublin and nationwide.',
    features: [
      'AWDis Cool T performance fabric — moisture-wicking for training and match day',
      'Club and team logos on chest, back and sleeves — GAA, soccer, running and gyms',
      '9 stock colours including royal, navy, fire red and electric yellow',
      'Same price S–3XL, minimum 5 pieces, 8% off each quantity step',
      'Screen print, digital print or embroidery',
      '3–5 day turnaround, Ireland-wide delivery from Ashbourne, Co. Meath',
    ],
    detailedDescription:
      'Order custom sportswear in Ireland for GAA clubs, soccer teams, running clubs, gyms and school PE kits. We print moisture-wicking AWDis Cool T shirts with your crest — chest, back or sleeves — from €16.50 for a single placement. Extra print areas +€1.50. Same price on every size S–3XL, from 5 pieces, with 8% off each quantity step. Proofs before print. Delivery to Dublin, Cork, Galway and every county from Ashbourne.',
    specifications: [
      { name: 'Garment', value: 'AWDis Cool T performance sports t-shirt' },
      { name: 'Printing', value: 'Screen print, digital print, embroidery' },
      { name: 'Colours', value: 'White, Black, Charcoal, Heather Grey, Royal Blue, Electric Yellow, Electric Green, Oxford Navy, Fire Red' },
      { name: 'Sizes', value: 'S–3XL — same price' },
      { name: 'Minimum order', value: '5 pieces' },
      { name: 'Production time', value: '3–5 business days after proof' },
      { name: 'Delivery', value: 'Nationwide Ireland from Ashbourne, Co. Meath' },
    ],
    images: SPORTSWEAR_IMAGES,
    imageAlts: [
      'Custom printed sportswear Ireland — Dublin running club moisture-wicking t-shirt',
      'Custom soccer team kit Ireland — printed sports t-shirt with club crest',
      'Custom club sportswear Ireland — navy and white printed team t-shirts',
      'Custom gym performance t-shirt Ireland — printed sportswear in electric yellow',
    ],
    imageSrc: SPORTSWEAR_IMAGES[0],
    price: 'From €16.50',
    moq: 5,
    leadTime: '3-5 business days',
  },
  {
    id: 'custom-hiviz-workwear-ireland',
    name: 'Hi-Viz Workwear Ireland',
    category: 'Apparel',
    quoteType: 'Hi-Viz Jackets',
    pricingKey: 'hiviz',
    popular: true,
    schemaCategory: 'Hi-Viz Workwear',
    seoTitle: 'Hi-Viz Workwear Ireland | Printed Safety Vests & Tabards | PrintNPack',
    seoDescription:
      'Custom hi-viz workwear Ireland for sites, warehouses, road crews and events. Printed or embroidered vests from €12, EN ISO 20471 Class 2, same price S–3XL. Delivered from Ashbourne.',
    h1: 'Hi-Viz Workwear Ireland',
    keywords:
      'hi viz workwear Ireland, custom hi vis vests Ireland, printed safety vests Dublin, branded hi viz tabards, event hi vis Ireland, construction hi viz printing Ashbourne',
    faqIds: ['hiviz-ireland', 'hiviz-price', 'cost', 'turnaround', 'dublin'],
    faqHeading: 'Hi-viz workwear Ireland — FAQs',
    description:
      'Printed hi-viz vests and tabards for Irish sites, warehouses, road crews and event staff. DMS colours including yellow, orange, pink, royal and black. From €12 for a chest logo. Same price S–3XL, delivery from Ashbourne.',
    features: [
      'Yellow, orange, pink, royal blue, red and black stock colours',
      'EN ISO 20471 Class 2 with 50mm reflective tape',
      'Logo on chest, back and sleeve — print or embroidery',
      'Site teams, warehouses, roadworks, festivals and event security',
      'Same price S–3XL, minimum 5 pieces, 8% off each quantity step',
      '3–5 day turnaround, Ireland-wide delivery from Ashbourne, Co. Meath',
    ],
    detailedDescription:
      'Order custom hi-viz workwear in Ireland for construction sites, warehouses, road crews, festivals and event security. We print or embroider your logo on DMS hi-vis tabards — chest, back or sleeve — from €12 for a single placement. Extra print areas +€1.50. Same price S–3XL, from 5 pieces, with 8% off each quantity step. EN ISO 20471 Class 2. Proofs before print. Delivery to Dublin, Cork, Galway and every county from Ashbourne.',
    specifications: [
      { name: 'Garment', value: 'DMS hi-vis tabard / safety vest' },
      { name: 'Colours', value: 'Yellow, Orange, Pink, Royal Blue, Red, Black' },
      { name: 'Standards', value: 'EN ISO 20471 Class 2 (Class 3 on request)' },
      { name: 'Printing', value: 'Print or embroidery' },
      { name: 'Sizes', value: 'S–3XL — same price' },
      { name: 'Minimum order', value: '5 pieces' },
      { name: 'Production time', value: '3–5 business days after proof' },
      { name: 'Delivery', value: 'Nationwide Ireland from Ashbourne, Co. Meath' },
    ],
    images: HIVIZ_IMAGES,
    imageAlts: [
      'Custom hi-viz workwear Ireland — yellow printed safety vest on a construction site',
      'Custom hi-vis vest Ireland — orange warehouse and logistics workwear with company logo',
      'Printed pink hi-viz vest Ireland — event crew safety tabard',
      'Custom hi-viz vest Ireland — royal blue roadworks and traffic management',
      'Black hi-viz vest Ireland — event security printed safety workwear',
    ],
    imageSrc: HIVIZ_IMAGES[0],
    price: 'From €12.00',
    moq: 5,
    leadTime: '3-5 business days',
  },
].map((product) => ({
  ...product,
  url: `/clothing/${product.id}`,
}));
