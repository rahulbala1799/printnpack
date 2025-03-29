const products = [
  {
    id: 'white-pizza-boxes',
    name: 'White Pizza Boxes',
    category: 'Food Packaging',
    description: 'Premium white pizza boxes that keep your food hot and showcase your brand with our company blue accents.',
    features: [
      'Made from food-grade white corrugated cardboard',
      'Custom printing with company blue branding',
      'Stackable design for easy storage',
      'Multiple size options: 7", 9", 10", 12", and 14"',
      'Weekly delivery service available'
    ],
    detailedDescription: 'Our premium white pizza boxes are designed to keep your pizzas hot and fresh during delivery while reinforcing your brand image. The clean white exterior with company blue accents creates a professional, high-end appearance. Made from high-quality food-grade materials, these boxes offer excellent insulation and stability. Available in 7", 9", 10", 12", and 14" sizes to accommodate any pizza style. Each box can be fully customized with your branding, including full-color printing options for logos, messaging, and design elements. Take advantage of our weekly delivery service to ensure you never run out of packaging.',
    specifications: [
      { name: 'Material', value: 'Food-grade white corrugated cardboard' },
      { name: 'Thickness', value: '1.5mm - 3mm (E-flute or B-flute)' },
      { name: 'Color', value: 'White with company blue accents' },
      { name: 'Sizes Available', value: '7", 9", 10", 12", 14"' },
      { name: 'Print Quality', value: 'Up to 4-color offset or digital printing' },
      { name: 'Minimum Order', value: '250 units' },
      { name: 'Production Time', value: '7-10 business days' },
      { name: 'Customization', value: 'Size, printing, finish' },
      { name: 'Delivery Options', value: 'Weekly scheduled delivery service available' },
    ],
    images: [
      '/images/hero/white-pizza-box.svg',
      '/images/ifa/heroh/white-pizza.png'
    ],
    imageSrc: '/images/hero/white-pizza-box.svg',
    price: 'Starting at €0.38 per unit',
    moq: 250,
    leadTime: '7-10 business days',
    weeklyDelivery: 'Take advantage of our weekly delivery service specifically designed for restaurants. We\'ll establish a regular schedule that ensures you never run out of packaging while minimizing storage requirements. Our account managers will track your usage patterns to recommend optimal order quantities, helping you maintain efficiency and reduce costs. This branded packaging with consistent weekly delivery enhances your professional image and ensures operational consistency.'
  },
  {
    id: 'brown-pizza-boxes',
    name: 'Brown Pizza Boxes',
    category: 'Food Packaging',
    description: 'Eco-friendly brown pizza boxes with company blue branding that keep food hot and showcase your sustainability commitment.',
    features: [
      'Made from recycled kraft corrugated cardboard',
      'Custom printing with company blue branding',
      'Stackable design for easy storage',
      'Multiple size options: 7", 9", 10", 12", and 14"',
      'Weekly delivery service available'
    ],
    detailedDescription: 'Our brown kraft pizza boxes combine sustainability with excellent performance. The natural brown exterior with company blue accents creates an eco-friendly yet professional appearance. Made from recycled materials, these boxes offer excellent insulation and stability while showcasing your environmental commitment. Available in 7", 9", 10", 12", and 14" sizes to accommodate any pizza style. Each box can be fully customized with your branding while maintaining the sustainable aesthetic. Our weekly delivery service ensures you always have the packaging you need when you need it.',
    specifications: [
      { name: 'Material', value: 'Recycled kraft corrugated cardboard' },
      { name: 'Thickness', value: '1.5mm - 3mm (E-flute or B-flute)' },
      { name: 'Color', value: 'Natural brown with company blue accents' },
      { name: 'Sizes Available', value: '7", 9", 10", 12", 14"' },
      { name: 'Print Quality', value: 'Up to 4-color offset or digital printing' },
      { name: 'Minimum Order', value: '250 units' },
      { name: 'Production Time', value: '7-10 business days' },
      { name: 'Customization', value: 'Size, printing, finish' },
      { name: 'Delivery Options', value: 'Weekly scheduled delivery service available' },
    ],
    images: [
      '/images/hero/brown-pizza-box.svg',
      '/images/ifa/heroh/brown-pizza.png'
    ],
    imageSrc: '/images/hero/brown-pizza-box.svg',
    price: 'Starting at €0.35 per unit',
    moq: 250,
    leadTime: '7-10 business days',
    weeklyDelivery: 'Our weekly delivery service is designed specifically for busy restaurants and food service businesses. We establish a consistent delivery schedule tailored to your needs, ensuring you maintain adequate stock without requiring large storage areas. Our account team monitors your usage patterns to optimize order quantities, reducing waste and controlling costs. This reliable branded packaging delivery service enhances your professional image while simplifying operations.'
  },
  {
    id: 'flat-handle-paper-bags',
    name: 'Flat Handle Paper Bags',
    category: 'Retail Packaging',
    description: 'Premium paper bags with flat handles featuring company blue and white design elements for an elegant retail experience.',
    features: [
      'Durable flat paper handles for comfortable carrying',
      'Company blue and white color scheme',
      'Available in medium and small sizes',
      'Optional grease-proof lining available',
      'Weekly delivery service available'
    ],
    detailedDescription: 'Our flat handle paper bags combine style with functionality, making them perfect for retail, takeaway, and promotional use. The elegant flat handles provide comfort and durability, while the company blue and white design creates a professional, high-end appearance. Available in medium and small sizes with optional grease-proof lining for food applications. These bags can be fully customized with your branding through various printing techniques while maintaining the sophisticated aesthetic. Our weekly delivery service ensures you never run out of essential packaging.',
    specifications: [
      { name: 'Material', value: 'Premium kraft paper (100-120gsm)' },
      { name: 'Handle Type', value: 'Flat paper' },
      { name: 'Color Scheme', value: 'White with company blue accents or brown with company blue accents' },
      { name: 'Size Options', value: 'Small (8"x5"x10"), Medium (10"x6"x12")' },
      { name: 'Lining Options', value: 'Standard or grease-proof lining' },
      { name: 'Print Quality', value: 'Up to 4-color offset or digital printing' },
      { name: 'Minimum Order', value: '500 units' },
      { name: 'Production Time', value: '10-14 business days' },
      { name: 'Delivery Options', value: 'Weekly scheduled delivery service available' },
    ],
    images: [
      '/images/hero/flat-handle-bag.svg',
      '/images/ifa/heroh/flat-bag.png'
    ],
    imageSrc: '/images/hero/flat-handle-bag.svg',
    price: 'Starting at €0.28 per unit',
    moq: 500,
    leadTime: '10-14 business days',
    weeklyDelivery: 'Our weekly delivery service provides a consistent supply of branded packaging materials tailored to your business needs. This service is especially valuable for retail and food businesses that require regular packaging without maintaining large storage areas. Our team tracks your usage patterns to optimize delivery quantities, ensuring you never run short while minimizing waste. This premium service elevates your professional image while streamlining operations.'
  },
  {
    id: 'twisted-handle-paper-bags',
    name: 'Twisted Handle Paper Bags',
    category: 'Retail Packaging',
    description: 'Elegant paper bags with twisted handles in company blue and white designs for upscale retail packaging.',
    features: [
      'Strong twisted paper handles for secure carrying',
      'Company blue and white color options',
      'Available in medium and small sizes',
      'Premium quality paper construction',
      'Weekly delivery service available'
    ],
    detailedDescription: 'Our twisted handle paper bags offer a stylish, upscale packaging solution for boutiques, gift shops, and high-end retail. The distinctive twisted handles provide both visual appeal and functional strength. Available in company blue and white color schemes and in both medium and small sizes, these bags create a premium shopping experience. Each bag can be fully customized with your branding through various printing techniques. Take advantage of our weekly delivery service to maintain a consistent supply without requiring extensive storage space.',
    specifications: [
      { name: 'Material', value: 'Premium kraft paper (100-130gsm)' },
      { name: 'Handle Type', value: 'Twisted paper' },
      { name: 'Color Scheme', value: 'White with company blue accents or company blue with white accents' },
      { name: 'Size Options', value: 'Small (8"x4.5"x10"), Medium (10"x5"x13")' },
      { name: 'Print Quality', value: 'Up to 4-color offset or digital printing' },
      { name: 'Minimum Order', value: '500 units' },
      { name: 'Production Time', value: '10-14 business days' },
      { name: 'Delivery Options', value: 'Weekly scheduled delivery service available' },
    ],
    images: [
      '/images/hero/twisted-handle-bag.svg',
      '/images/ifa/heroh/twisted-bag.png'
    ],
    imageSrc: '/images/hero/twisted-handle-bag.svg',
    price: 'Starting at €0.30 per unit',
    moq: 500,
    leadTime: '10-14 business days',
    weeklyDelivery: 'Our premium weekly delivery service ensures your business always has the right amount of branded packaging on hand. We establish a consistent delivery schedule tailored to your specific needs, helping you maintain adequate inventory without requiring large storage areas. Our account managers monitor your usage patterns to recommend optimal order quantities, reducing waste and controlling costs. This reliable service enhances your professional image while simplifying operations.'
  },
  {
    id: 'sos-grab-bags',
    name: 'SOS Grab Bags',
    category: 'Food Packaging',
    description: 'Versatile SOS (Stand-Up Square Bottom) bags with company blue and white branding for food service and retail.',
    features: [
      'Self-opening square bottom design',
      'Company blue and white color options',
      'Available in medium and small sizes',
      'Optional grease-proof lining available',
      'Weekly delivery service available'
    ],
    detailedDescription: 'Our SOS (Stand-Up Square Bottom) grab bags are perfect for food service, bakeries, coffee shops, and retail. The convenient self-opening design with a square bottom allows the bag to stand upright when filled, making them ideal for takeaway food and coffee. Available in company blue and white color schemes and in both medium and small sizes, with optional grease-proof lining for food applications. These bags can be fully customized with your branding while maintaining their functional design. Our weekly delivery service ensures you never run out of essential packaging.',
    specifications: [
      { name: 'Material', value: 'Food-grade kraft paper (80-100gsm)' },
      { name: 'Style', value: 'Self-opening square bottom' },
      { name: 'Color Scheme', value: 'White with company blue accents or company blue with white accents' },
      { name: 'Size Options', value: 'Small (6"x3.5"x11"), Medium (8"x4.5"x13")' },
      { name: 'Lining Options', value: 'Standard or grease-proof lining' },
      { name: 'Print Quality', value: 'Up to 4-color offset or digital printing' },
      { name: 'Minimum Order', value: '500 units' },
      { name: 'Production Time', value: '10-14 business days' },
      { name: 'Delivery Options', value: 'Weekly scheduled delivery service available' },
    ],
    images: [
      '/images/hero/sos-bag.svg',
      '/images/ifa/heroh/sos-bag.png'
    ],
    imageSrc: '/images/hero/sos-bag.svg',
    price: 'Starting at €0.25 per unit',
    moq: 500,
    leadTime: '10-14 business days',
    weeklyDelivery: 'Our weekly delivery service is ideal for food service businesses that need a consistent supply of packaging. We establish a regular delivery schedule tailored to your needs, ensuring you always have sufficient stock without requiring large storage areas. Our account team monitors your usage patterns to optimize order quantities, helping you maintain efficiency and reduce costs. This reliable branded packaging service enhances your professional image while simplifying inventory management.'
  },
  {
    id: 'flat-paper-bags',
    name: 'Flat Paper Bags',
    category: 'Retail Packaging',
    description: 'Simple and effective flat paper bags in company blue and white designs, with or without grease-proof lining.',
    features: [
      'Clean, flat design without handles',
      'Company blue and white color options',
      'Available in medium and small sizes',
      'Optional grease-proof lining available',
      'Weekly delivery service available'
    ],
    detailedDescription: 'Our flat paper bags provide a clean, minimalist packaging solution for pharmaceuticals, bakeries, and retail. The simple design without handles offers a cost-effective option while maintaining a professional appearance. Available in company blue and white color schemes and in both medium and small sizes, with optional grease-proof lining for food applications. These bags can be fully customized with your branding through various printing techniques. Our weekly delivery service ensures a consistent supply tailored to your business needs.',
    specifications: [
      { name: 'Material', value: 'Kraft paper (70-100gsm)' },
      { name: 'Style', value: 'Flat bag without handles' },
      { name: 'Color Scheme', value: 'White with company blue accents or company blue with white accents' },
      { name: 'Size Options', value: 'Small (6"x2"x8"), Medium (8"x3"x10")' },
      { name: 'Lining Options', value: 'Standard or grease-proof lining' },
      { name: 'Print Quality', value: 'Up to 4-color offset or digital printing' },
      { name: 'Minimum Order', value: '500 units' },
      { name: 'Production Time', value: '10-14 business days' },
      { name: 'Delivery Options', value: 'Weekly scheduled delivery service available' },
    ],
    images: [
      '/images/hero/flat-paper-bag.svg',
      '/images/ifa/heroh/flat-paper.png'
    ],
    imageSrc: '/images/hero/flat-paper-bag.svg',
    price: 'Starting at €0.22 per unit',
    moq: 500,
    leadTime: '10-14 business days',
    weeklyDelivery: 'Our weekly delivery service provides a reliable supply of packaging materials customized to your specific business needs. This service is particularly valuable for businesses that require consistent packaging without maintaining large storage inventories. Our team tracks your usage patterns to optimize delivery quantities, ensuring you never run short while minimizing waste. This premium service elevates your professional image while streamlining operations.'
  },
  {
    id: 'bagasse-boxes',
    name: 'Bagasse Boxes',
    category: 'Eco-Friendly Packaging',
    description: 'Sustainable bagasse boxes made from sugarcane fiber, available in multiple sizes with company blue and white branding.',
    features: [
      'Made from 100% biodegradable sugarcane fiber',
      'Microwave and freezer safe',
      'Oil and water resistant',
      'Available in various sizes',
      'Weekly delivery service available'
    ],
    detailedDescription: 'Our bagasse boxes offer an eco-friendly alternative to traditional packaging. Made from sugarcane fiber, a renewable resource and agricultural by-product, these boxes are 100% biodegradable and compostable. The natural white color with company blue branding creates a clean, professional appearance while showcasing your environmental commitment. These versatile containers are oil and water resistant, microwave and freezer safe, and available in multiple sizes to suit various applications. Our weekly delivery service ensures your business maintains a consistent supply of sustainable packaging.',
    specifications: [
      { name: 'Material', value: 'Sugarcane fiber (bagasse)' },
      { name: 'Color', value: 'Natural white with company blue branding' },
      { name: 'Temperature Range', value: '-20°C to +120°C' },
      { name: 'Size Options', value: 'Various sizes available to suit different food portions' },
      { name: 'Print Quality', value: 'Up to 4-color biodegradable inks' },
      { name: 'Minimum Order', value: '500 units' },
      { name: 'Production Time', value: '10-14 business days' },
      { name: 'Certification', value: 'Biodegradable, compostable' },
      { name: 'Delivery Options', value: 'Weekly scheduled delivery service available' },
    ],
    images: [
      '/images/hero/bagasse-box.svg',
      '/images/ifa/heroh/bagasse.png'
    ],
    imageSrc: '/images/hero/bagasse-box.svg',
    price: 'Starting at €0.32 per unit',
    moq: 500,
    leadTime: '10-14 business days',
    weeklyDelivery: 'Our weekly delivery service for restaurants and food service businesses provides a reliable supply of eco-friendly packaging tailored to your needs. We establish a consistent delivery schedule that ensures you maintain adequate stock without requiring large storage areas. Our account managers track your usage patterns to recommend optimal order quantities, helping you maintain efficiency and reduce waste. This premium service featuring sustainable packaging enhances your brand\'s environmental commitment while simplifying operations.'
  },
  {
    id: 'pizza-boxes',
    name: 'Pizza Boxes',
    category: 'Food Packaging',
    description: 'Premium pizza boxes that keep your food hot and enhance your brand image.',
    features: [
      'Made from food-grade materials',
      'Custom printing options',
      'Stackable design for easy storage',
      'Available in white or brown kraft options',
      'Multiple size options: 7", 9", 10", 12", and 14"',
      'Weekly delivery service available'
    ],
    detailedDescription: 'Our premium pizza boxes are designed to keep your pizzas hot and fresh during delivery while reinforcing your brand image. Made from high-quality food-grade materials, these boxes offer excellent insulation and stability. Choose from white or brown kraft materials with company blue accents to suit your brand aesthetic. Available in 7", 9", 10", 12", and 14" sizes to accommodate any pizza style. Each box can be fully customized with your branding, including full-color printing options for logos, messaging, and design elements. Take advantage of our weekly delivery service to ensure you never run out of packaging.',
    specifications: [
      { name: 'Material', value: 'Food-grade corrugated cardboard (white or brown kraft)' },
      { name: 'Thickness', value: '1.5mm - 3mm (E-flute or B-flute)' },
      { name: 'Color Options', value: 'White with company blue accents or Natural brown with company blue accents' },
      { name: 'Sizes Available', value: '7", 9", 10", 12", 14"' },
      { name: 'Print Quality', value: 'Up to 4-color offset or digital printing' },
      { name: 'Minimum Order', value: '250 units' },
      { name: 'Production Time', value: '7-10 business days' },
      { name: 'Customization', value: 'Size, color, printing, finish' },
      { name: 'Delivery Options', value: 'Weekly scheduled delivery service available' },
    ],
    images: [
      '/images/hero/pizza-box.svg',
      '/images/ifa/heroh/pizza.png'
    ],
    imageSrc: '/images/hero/pizza-box.svg',
    price: 'Starting at €0.35 per unit',
    moq: 250,
    leadTime: '7-10 business days',
    weeklyDelivery: 'Take advantage of our weekly delivery service specifically designed for restaurants. We\'ll establish a regular schedule that ensures you never run out of packaging while minimizing storage requirements. Our account managers will track your usage patterns to recommend optimal order quantities, helping you maintain efficiency and reduce costs. This branded packaging with consistent weekly delivery enhances your professional image and ensures operational consistency.',
    variants: [
      {
        name: 'White Pizza Boxes',
        description: 'Premium white pizza boxes with company blue accents that keep food hot and showcase your brand.',
        features: [
          'Made from food-grade white corrugated cardboard',
          'Clean, professional appearance with company blue accents',
          'Available in 7", 9", 10", 12", and 14" sizes',
          'Ideal for upscale restaurants and premium positioning'
        ],
        imageSrc: '/images/hero/white-pizza-box.svg'
      },
      {
        name: 'Brown Pizza Boxes',
        description: 'Eco-friendly brown kraft pizza boxes with company blue accents that showcase your sustainability commitment.',
        features: [
          'Made from recycled kraft corrugated cardboard',
          'Natural brown with company blue accents',
          'Available in 7", 9", 10", 12", and 14" sizes',
          'Perfect for businesses emphasizing eco-friendliness'
        ],
        imageSrc: '/images/hero/brown-pizza-box.svg'
      }
    ]
  },
  {
    id: 'paper-bags',
    name: 'Paper Bags',
    category: 'Retail Packaging',
    description: 'Eco-friendly paper bags that elevate your brand and customer experience.',
    features: [
      'Sustainable kraft paper options',
      'Multiple handle types and designs',
      'Company blue and white color options',
      'Available in medium and small sizes',
      'Optional grease-proof lining available',
      'Weekly delivery service available'
    ],
    detailedDescription: 'Our eco-friendly paper bags are perfect for retail stores, restaurants, and promotional events. Made from durable kraft paper with various handle options, they provide reliable performance while showcasing your commitment to sustainability. Choose from flat handles, twisted handles, SOS designs, or flat bags without handles to suit your specific needs. Available in company blue and white color schemes and in both medium and small sizes, with optional grease-proof lining for food applications. Each bag can be fully customized with your branding through various printing techniques. Our weekly delivery service ensures you never run out of essential packaging.',
    specifications: [
      { name: 'Material', value: 'Kraft paper (70-130gsm depending on style)' },
      { name: 'Handle Types', value: 'Twisted paper, flat paper, no handles (SOS option available)' },
      { name: 'Color Scheme', value: 'White with company blue accents or company blue with white accents' },
      { name: 'Size Options', value: 'Small and Medium (dimensions vary by style)' },
      { name: 'Lining Options', value: 'Standard or grease-proof lining' },
      { name: 'Print Quality', value: 'Up to 4-color offset or digital printing' },
      { name: 'Minimum Order', value: '500 units' },
      { name: 'Production Time', value: '10-14 business days' },
      { name: 'Customization', value: 'Size, handles, printing, finish, reinforcements' },
      { name: 'Delivery Options', value: 'Weekly scheduled delivery service available' },
    ],
    images: [
      '/images/hero/paper-bag.svg',
      '/images/ifa/heroh/bag.png'
    ],
    imageSrc: '/images/hero/paper-bag.svg',
    price: 'Starting at €0.25 per unit',
    moq: 500,
    leadTime: '10-14 business days',
    weeklyDelivery: 'Our weekly delivery service provides a consistent supply of branded packaging materials tailored to your business needs. This service is especially valuable for retail and food businesses that require regular packaging without maintaining large storage areas. Our team tracks your usage patterns to optimize delivery quantities, ensuring you never run short while minimizing waste. This premium service elevates your professional image while streamlining operations.',
    variants: [
      {
        name: 'Flat Handle Paper Bags',
        description: 'Premium paper bags with flat handles featuring company blue and white design elements for an elegant retail experience.',
        features: [
          'Durable flat paper handles for comfortable carrying',
          'Company blue and white color scheme',
          'Available in medium and small sizes',
          'Optional grease-proof lining available'
        ],
        imageSrc: '/images/hero/flat-handle-bag.svg'
      },
      {
        name: 'Twisted Handle Paper Bags',
        description: 'Elegant paper bags with twisted handles in company blue and white designs for upscale retail packaging.',
        features: [
          'Strong twisted paper handles for secure carrying',
          'Company blue and white color options',
          'Available in medium and small sizes',
          'Premium quality paper construction'
        ],
        imageSrc: '/images/hero/twisted-handle-bag.svg'
      },
      {
        name: 'SOS Grab Bags',
        description: 'Versatile SOS (Stand-Up Square Bottom) bags with company blue and white branding for food service and retail.',
        features: [
          'Self-opening square bottom design',
          'Company blue and white color options',
          'Available in medium and small sizes',
          'Optional grease-proof lining available'
        ],
        imageSrc: '/images/hero/sos-bag.svg'
      },
      {
        name: 'Flat Paper Bags',
        description: 'Simple and effective flat paper bags in company blue and white designs, with or without grease-proof lining.',
        features: [
          'Clean, flat design without handles',
          'Company blue and white color options',
          'Available in medium and small sizes',
          'Optional grease-proof lining available'
        ],
        imageSrc: '/images/hero/flat-paper-bag.svg'
      }
    ]
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