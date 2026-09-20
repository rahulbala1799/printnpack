/** Individual branded-clothing products. Dedicated Ireland pages come later. */

const TSHIRT_IMAGES = [
  '/images/apparel/TSHIRT MOCK UP 1.jpg',
  '/images/apparel/TSHIRT MOCK UP 2.jpg',
  '/images/apparel/TSHIRT MOCK UP 3.jpg',
  '/images/apparel/TSHIRT MOCK UP 4.jpg',
  '/images/apparel/TSHIRT MOCK UP 5.jpg',
];

const POLO_IMAGES = [
  '/images/apparel/POLO SHIRT MOCK UP 1.jpg',
  '/images/apparel/POLO SHIRT MOCK UP 2.jpg',
  '/images/apparel/POLO SHIRT MOCK UP 3.jpg',
  '/images/apparel/POLO SHIRT MOCK UP 4.jpg',
  '/images/apparel/POLO SHIRT MOCK UP 5.jpg',
  '/images/apparel/POLO SHIRT MOCK UP 6.jpg',
];

const HOODIE_IMAGES = [
  '/images/apparel/HOODIE MOCK UP 1.jpg',
  '/images/apparel/HOODIE MOCK UP 2.jpg',
  '/images/apparel/HOODIE MOCK UP 3.jpg',
  '/images/apparel/HOODIE MOCK UP 4.jpg',
  '/images/apparel/HOODIE MOCK UP 5.jpg',
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
    name: 'Custom Polo Shirts',
    category: 'Apparel',
    quoteType: 'Polo T-Shirts',
    pricingKey: 'polos',
    popular: true,
    description:
      'Fruit of the Loom 65/35 polo shirts, embroidered or printed. 14 stock colours, same price S–3XL, from €19 for a single placement.',
    features: [
      'Embroidery or print on left chest, back and sleeve',
      'Cotton pique, blend and performance polyester',
      'Standard, button-down and ribbed collars',
      'Corporate colours including navy, black and burgundy',
      'Sizes S–3XL — same price on every size',
      'Nationwide delivery from Ashbourne',
    ],
    detailedDescription:
      'Polo shirts are the usual choice for company clothing with a logo — reception, floor teams and trade stands. Single placement from €19, 8% off each qty step from 5 pieces. Extra print areas +€1.50. Same price S–3XL.',
    specifications: [
      { name: 'Printing', value: 'Embroidery, screen print, digital print' },
      { name: 'Materials', value: 'Cotton pique, cotton blend, performance polyester, organic cotton' },
      { name: 'Colours', value: 'White, Black, Deep Navy, Navy, Royal Blue, Bottle Green, Kelly Green, Purple, Burgundy, Red, Orange, Sunflower, Sky, Heather' },
      { name: 'Collar', value: 'Standard, button-down, ribbed, flat knit' },
      { name: 'Sizes', value: 'S–3XL — same price' },
      { name: 'Minimum order', value: '5 pieces' },
      { name: 'Production time', value: '3–5 business days' },
      { name: 'Delivery', value: 'Nationwide Ireland from Ashbourne' },
    ],
    images: POLO_IMAGES,
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
    name: 'Custom Sports Wear',
    category: 'Apparel',
    quoteType: 'Sports Wear',
    pricingKey: 'sportswear',
    popular: false,
    description:
      'AWDis Cool T sports wear for clubs and teams. 9 stock colours, moisture-wicking, from €16.50 for a single placement. Same price S–3XL.',
    features: [
      'Performance and moisture-wicking fabrics',
      'Club and team branding on chest, back and sleeves',
      'Same price S–3XL, minimum 5 pieces',
      '8% off each quantity step',
      '3–5 day turnaround, Ireland-wide delivery',
    ],
    detailedDescription:
      'Sports wear for GAA, soccer, gyms and events. Single placement from €16.50, extra print areas +€1.50, 8% off each qty ladder from 5 pieces. Photos to follow.',
    specifications: [
      { name: 'Printing', value: 'Screen print, digital print, embroidery' },
      { name: 'Colours', value: 'White, Black, Charcoal, Heather Grey, Royal Blue, Electric Yellow, Electric Green, Oxford Navy, Fire Red' },
      { name: 'Sizes', value: 'S–3XL — same price' },
      { name: 'Minimum order', value: '5 pieces' },
      { name: 'Production time', value: '3–5 business days' },
      { name: 'Delivery', value: 'Nationwide Ireland from Ashbourne' },
    ],
    images: TSHIRT_IMAGES,
    imageSrc: TSHIRT_IMAGES[0],
    price: 'From €16.50',
    moq: 5,
    leadTime: '3-5 business days',
  },
  {
    id: 'custom-hiviz-workwear-ireland',
    name: 'Hi-Viz Jackets & Workwear',
    category: 'Apparel',
    quoteType: 'Hi-Viz Jackets',
    pricingKey: 'hiviz',
    popular: false,
    description:
      'DMS hi-vis tabards and branded workwear. Six stock colours, EN ISO 20471 Class 2, from €12 for a single placement. Same price S–3XL.',
    features: [
      'Yellow, orange, pink, royal blue, red and black',
      'EN ISO 20471 Class 2 with 50mm reflective tape',
      'Logo on chest, back and sleeve',
      'Print or dye-sublimation on polyester',
      'Sizes S–3XL — same price on every size',
      'Nationwide delivery from Ashbourne',
    ],
    detailedDescription:
      'Hi-viz workwear for site teams, events and roadside crews. DMS premium tabards, six colours. From €12 for a single placement, extra areas +€1.50, 8% off each qty step from 5 pieces.',
    specifications: [
      { name: 'Colours', value: 'Yellow, Orange, Pink, Royal Blue, Red, Black' },
      { name: 'Standards', value: 'EN ISO 20471 Class 2 (Class 3 on request)' },
      { name: 'Printing', value: 'Print or embroidery' },
      { name: 'Sizes', value: 'S–3XL — same price' },
      { name: 'Production time', value: '3–5 business days' },
      { name: 'Delivery', value: 'Nationwide Ireland from Ashbourne' },
    ],
    images: HOODIE_IMAGES,
    imageSrc: HOODIE_IMAGES[0],
    price: 'From €12.00',
    moq: 5,
    leadTime: '3-5 business days',
  },
].map((product) => ({
  ...product,
  url: `/clothing/${product.id}`,
}));
