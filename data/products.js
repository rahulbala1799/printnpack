const products = [
  {
    id: 'pizza-boxes',
    name: 'Pizza Boxes',
    category: 'Food Packaging',
    description: 'Premium pizza boxes that keep your food hot and enhance your brand image.',
    features: [
      'Made from food-grade materials',
      'Custom printing options',
      'Stackable design for easy storage',
      'Available in various sizes',
      'Fast turnaround times'
    ],
    detailedDescription: 'Our premium pizza boxes are designed to keep your pizzas hot and fresh during delivery while reinforcing your brand image. Made from high-quality food-grade materials, these boxes offer excellent insulation and stability. Choose from a variety of sizes to accommodate different pizza dimensions, from personal 8" pizzas to large 18" family sizes. Each box can be fully customized with your branding, including full-color printing options for logos, messaging, and design elements.',
    specifications: [
      { name: 'Material', value: 'Food-grade corrugated cardboard' },
      { name: 'Thickness', value: '1.5mm - 3mm (E-flute or B-flute)' },
      { name: 'Print Quality', value: 'Up to 4-color offset or digital printing' },
      { name: 'Minimum Order', value: '250 units' },
      { name: 'Production Time', value: '7-10 business days' },
      { name: 'Customization', value: 'Size, shape, printing, finish' },
    ],
    images: [
      '/images/hero/pizza-box.svg',
      '/images/ifa/heroh/pizza.png'
    ],
    imageSrc: '/images/hero/pizza-box.svg',
    price: 'Starting at €0.35 per unit',
    moq: 250,
    leadTime: '7-10 business days'
  },
  {
    id: 'paper-bags',
    name: 'Paper Bags',
    category: 'Retail Packaging',
    description: 'Eco-friendly paper bags that elevate your brand and customer experience.',
    features: [
      'Sustainable kraft paper options',
      'Custom handles and closures',
      'Reinforced bottom for durability',
      'Multiple size options',
      'Bulk order discounts'
    ],
    detailedDescription: 'Our eco-friendly paper bags are perfect for retail stores, restaurants, and promotional events. Made from durable kraft paper with reinforced bottoms and handles, they provide reliable performance while showcasing your commitment to sustainability. Available in multiple sizes and styles, these bags can be fully customized with your branding through various printing techniques.',
    specifications: [
      { name: 'Material', value: 'Kraft paper (80-120gsm)' },
      { name: 'Handle Types', value: 'Twisted paper, flat paper, cotton rope' },
      { name: 'Print Quality', value: 'Up to 4-color offset or digital printing' },
      { name: 'Minimum Order', value: '500 units' },
      { name: 'Production Time', value: '10-14 business days' },
      { name: 'Customization', value: 'Size, handles, printing, finish, reinforcements' },
    ],
    images: [
      '/images/hero/paper-bag.svg',
      '/images/ifa/heroh/bag.png'
    ],
    imageSrc: '/images/hero/paper-bag.svg',
    price: 'Starting at €0.25 per unit',
    moq: 500,
    leadTime: '10-14 business days'
  },
  {
    id: 'burger-boxes',
    name: 'Burger Boxes',
    category: 'Food Packaging',
    description: 'Sustainable and sturdy burger boxes perfect for takeaway and food delivery.',
    features: [
      'Made from bagasse (sugarcane fiber)',
      'Oil and water resistant',
      'Microwave safe options',
      'Biodegradable and compostable',
      'Custom branding available'
    ],
    detailedDescription: 'Our sustainable burger boxes are designed for optimal food presentation and transportation. Made from eco-friendly materials including bagasse (sugarcane fiber), they offer excellent durability and insulation while being kind to the environment. The clamshell design keeps burgers secure, and ventilation features help maintain food quality by preventing sogginess.',
    specifications: [
      { name: 'Material', value: 'Bagasse (sugarcane fiber) or food-grade cardboard' },
      { name: 'Size Options', value: 'Small (4"), Medium (5"), Large (6")' },
      { name: 'Print Quality', value: 'Up to 4-color biodegradable inks' },
      { name: 'Minimum Order', value: '500 units' },
      { name: 'Production Time', value: '7-10 business days' },
      { name: 'Customization', value: 'Size, printing, inserts, ventilation' },
    ],
    images: [
      '/images/hero/burger-box.svg',
      '/images/ifa/heroh/burger.png'
    ],
    imageSrc: '/images/hero/burger-box.svg',
    price: 'Starting at €0.30 per unit',
    moq: 500,
    leadTime: '7-10 business days'
  },
  {
    id: 'marketing-materials',
    name: 'Marketing Materials',
    category: 'Promotional',
    description: 'High-quality printed materials to promote your business and generate leads.',
    features: [
      'Flyers and leaflets',
      'Brochures and catalogs',
      'Business cards',
      'Posters and banners',
      'Same-day printing available'
    ],
    detailedDescription: 'Our marketing materials are designed to help your business make a lasting impression. From sleek business cards to eye-catching brochures, we offer a wide range of high-quality printed products to suit your promotional needs. Each item can be fully customized with your branding, using premium papers and advanced printing techniques for professional results.',
    specifications: [
      { name: 'Materials', value: 'Various paper stocks (100-350gsm)' },
      { name: 'Print Quality', value: 'High-resolution digital or offset printing' },
      { name: 'Finishes Available', value: 'Matte, glossy, soft-touch, spot UV' },
      { name: 'Minimum Order', value: 'Varies by product' },
      { name: 'Production Time', value: '2-5 business days (rush options available)' },
      { name: 'Customization', value: 'Size, shape, paper type, finishes' },
    ],
    images: [
      '/images/hero/leaflet.svg',
      '/images/ifa/heroh/marketing.png'
    ],
    imageSrc: '/images/hero/leaflet.svg',
    price: 'Starting at €0.10 per unit',
    moq: 100,
    leadTime: '2-5 business days'
  },
  {
    id: 'napkins',
    name: 'Custom Napkins',
    category: 'Food Service',
    description: 'Premium napkins with your branding that enhance the dining experience.',
    features: [
      'Multiple ply options',
      'Eco-friendly materials',
      'Full-color printing',
      'Various folding styles',
      'Fast production times'
    ],
    detailedDescription: 'Our custom-printed napkins offer both functionality and branding opportunities for restaurants, cafes, and catering businesses. Available in various sizes, materials, and ply options, these napkins can be fully customized with your logo and design elements. Choose from different folding styles and ink colors to create napkins that perfectly complement your brand identity.',
    specifications: [
      { name: 'Material', value: 'Paper or cloth (various grades available)' },
      { name: 'Ply Options', value: '1-ply, 2-ply, 3-ply' },
      { name: 'Size Options', value: 'Cocktail, Luncheon, Dinner' },
      { name: 'Print Quality', value: 'Up to 4-color printing' },
      { name: 'Minimum Order', value: '1,000 units' },
      { name: 'Production Time', value: '5-7 business days' },
    ],
    images: [
      '/images/hero/napkin.svg',
      '/images/ifa/heroh/napkin.png'
    ],
    imageSrc: '/images/hero/napkin.svg',
    price: 'Starting at €0.05 per unit',
    moq: 1000,
    leadTime: '5-7 business days'
  },
  {
    id: 'corrugated-boxes',
    name: 'Corrugated Boxes',
    category: 'Shipping',
    description: 'Durable corrugated boxes for shipping and storage needs.',
    features: [
      'Custom sizes and strength options',
      'Sustainable materials',
      'Printed branding options',
      'Bulk order discounts',
      'Fast production times'
    ],
    detailedDescription: 'Our corrugated boxes provide excellent protection for your products during storage and shipping. Made from durable, multi-layered cardboard, these boxes offer superior strength and stability. Available in various flute profiles and wall thicknesses to suit different weight requirements, each box can be customized with your branding and designed to optimize shipping costs.',
    specifications: [
      { name: 'Material', value: 'Corrugated cardboard (various flute options)' },
      { name: 'Wall Types', value: 'Single wall, double wall, triple wall' },
      { name: 'Print Quality', value: 'Up to 4-color flexographic printing' },
      { name: 'Minimum Order', value: '250 units' },
      { name: 'Production Time', value: '7-10 business days' },
      { name: 'Customization', value: 'Size, strength, printing, closure options' },
    ],
    images: [
      '/images/hero/pizza-box.svg',
      '/images/ifa/heroh/box.png'
    ],
    imageSrc: '/images/hero/pizza-box.svg',
    price: 'Starting at €0.50 per unit',
    moq: 250,
    leadTime: '7-10 business days'
  },
];

// Helper function to get a product by its ID/slug
export const getProductBySlug = (slug) => {
  return products.find(product => product.id === slug);
};

// Helper to get products by category
export const getProductsByCategory = (category) => {
  return products.filter(product => product.category === category);
};

// Helper to get related products (same category, excluding the current product)
export const getRelatedProducts = (productId, limit = 3) => {
  const currentProduct = getProductBySlug(productId);
  if (!currentProduct) return [];
  
  return products
    .filter(product => product.category === currentProduct.category && product.id !== productId)
    .slice(0, limit);
};

// Export the products array as default
export default products; 