export const PLAIN_BURGER_CONFIG = {
  slug: 'plain-burger-boxes-ireland',
  metaTitle: 'Plain Burger Boxes Ireland | Bagasse & Corrugated Wholesale',
  metaDescription:
    'Buy plain burger boxes wholesale in Ireland — compostable bagasse burger boxes and corrugated clamshells in case packs. Tiered pricing, fast delivery for takeaways and restaurants.',
  h1: 'Plain Burger Boxes Ireland — Bagasse & Corrugated Wholesale',
  heroLabel: 'Case packs · bagasse & corrugated',
  intro:
    'Buy plain burger boxes in Ireland for takeaways, burger restaurants, and food trucks. PrintNPack stocks compostable bagasse burger boxes and corrugated clamshell burger boxes in case quantities with tiered wholesale pricing — delivery across Dublin, Meath, and nationwide.',
  keywords:
    'plain burger boxes Ireland, burger boxes wholesale, bagasse burger box, biodegradable burger boxes, corrugated burger box, burger boxes Ireland',
  primaryCta: { href: '/plain-packaging?category=Bagasse+Meal+Box', label: 'Get Plain Burger Box Prices' },
  secondaryCta: { href: '/custom-burger-boxes-ireland', label: 'Need boxes with your logo?' },
  productFilter: (product) =>
    (product.category === 'Bagasse Meal Box' || product.category === 'Corrugated Meal Box') &&
    /burger|clamshell|meal box/i.test(product.name),
  sections: [
    {
      title: 'Plain Burger Boxes for Takeaways and Restaurants',
      body: 'Plain burger boxes are the everyday packaging for Irish burger takeaways, cafes, and delivery kitchens. Order by the case for fast restocking without custom print lead times.',
    },
    {
      title: 'Bagasse Burger Boxes — Compostable & Eco-Friendly',
      body: 'Our bagasse burger boxes are made from sugarcane fibre — compostable, oil-resistant, and microwave-safe. Popular with eco-conscious operators replacing plastic and foam containers.',
      link: { href: '/eco-bagasse-burger-boxes', label: 'bagasse burger boxes' },
    },
    {
      title: 'Corrugated Clamshell Burger Boxes',
      body: 'Corrugated cardboard clamshell burger boxes are recyclable and cost-effective for high-volume takeaway use. Available in standard burger clamshell sizes with case pricing.',
    },
    {
      title: 'Plain vs Custom Printed Burger Boxes',
      body: 'Plain boxes suit fast wholesale orders. When you want your logo on every takeaway order, custom printed bagasse burger boxes start from 500 units.',
      link: { href: '/custom-burger-boxes-ireland', label: 'custom printed burger boxes with logo' },
    },
  ],
  faqs: [
    {
      q: 'Do you sell plain burger boxes wholesale?',
      a: 'Yes. Bagasse burger boxes and corrugated clamshells are available by the case with tiered wholesale pricing. Browse current stock and case rates online.',
    },
    {
      q: 'Are bagasse burger boxes compostable?',
      a: 'Yes. Bagasse burger boxes are made from sugarcane fibre and are 100% biodegradable and compostable — a popular eco-friendly choice in Ireland.',
    },
    {
      q: 'What plain burger box sizes are in stock?',
      a: 'Plain options include 6" bagasse burger boxes, bagasse meal boxes, and corrugated clamshells (#8–#12) plus premium fold-out burger boxes depending on stock.',
    },
    {
      q: 'Can I upgrade to printed burger boxes later?',
      a: 'Yes. Custom printed bagasse burger boxes with your logo start from 500 units when you are ready for branded packaging.',
    },
    {
      q: 'Do you deliver plain burger boxes across Ireland?',
      a: 'Yes. Plain burger box cases ship across Dublin, Cork, Galway, Meath, and all Irish counties.',
    },
  ],
};

export const CUSTOM_BURGER_CONFIG = {
  slug: 'custom-burger-boxes-ireland',
  metaTitle: 'Custom Printed Burger Boxes Ireland | Branded Bagasse Boxes',
  metaDescription:
    'Custom printed burger boxes with your logo for Irish takeaways and burger restaurants. Compostable bagasse boxes, full-colour print, MOQ from 500 units, nationwide delivery.',
  h1: 'Custom Printed Burger Boxes Ireland — Branded Bagasse Packaging',
  heroLabel: 'Logo print · compostable bagasse',
  intro:
    'Custom printed burger boxes with your logo for Irish burger restaurants, takeaways, food trucks, and catering brands. Compostable bagasse construction, full-colour print, MOQ from 500 units — turn every takeaway order into branded advertising.',
  keywords:
    'custom burger boxes Ireland, printed burger boxes, burger boxes with logo, branded burger boxes, personalised burger boxes, bagasse burger box printing',
  primaryCta: { href: '/eco-bagasse-burger-boxes', label: 'Get a Custom Burger Box Quote' },
  secondaryCta: { href: '/plain-burger-boxes-ireland', label: 'Need plain stock boxes?' },
  productFilter: null,
  sections: [
    {
      title: 'Burger Boxes with Logo for Takeaways and Restaurants',
      body: 'Custom printed burger boxes carry your brand from the kitchen to the customer. Add your logo, colours, QR code, or campaign message to compostable bagasse packaging.',
    },
    {
      title: 'Compostable Bagasse — Eco-Friendly Branded Packaging',
      body: 'Our printed burger boxes use bagasse (sugarcane fibre) board — compostable, oil-resistant, and microwave-safe. Show customers you care about sustainability without sacrificing branding.',
      link: { href: '/eco-bagasse-burger-boxes', label: 'bagasse burger box details' },
    },
    {
      title: 'Minimum Order and Turnaround',
      body: 'Custom printed bagasse burger boxes start from 500 units. Production typically takes 7–10 business days after artwork approval. Plain wholesale boxes are available for faster stock orders.',
      link: { href: '/plain-burger-boxes-ireland', label: 'plain burger boxes' },
    },
    {
      title: 'Delivery Across Ireland',
      body: 'We deliver custom printed burger boxes nationwide — Dublin, Cork, Galway, Meath, and all counties. Weekly delivery schedules available for regular hospitality orders.',
    },
  ],
  faqs: [
    {
      q: 'Can I get burger boxes with my logo in Ireland?',
      a: 'Yes. PrintNPack prints custom bagasse burger boxes with your logo for takeaways, burger restaurants, and food businesses across Ireland.',
    },
    {
      q: 'What is the minimum order for printed burger boxes?',
      a: 'Custom printed bagasse burger boxes typically start from 500 units. For smaller quantities, plain wholesale burger boxes are available by the case.',
    },
    {
      q: 'Are printed burger boxes compostable?',
      a: 'Yes. Our bagasse burger boxes are made from sugarcane fibre and are biodegradable and compostable, with food-safe print inks.',
    },
    {
      q: 'How long do printed burger boxes take to produce?',
      a: 'Standard production is 7–10 business days after artwork approval. Rush orders may be available — call with your deadline.',
    },
    {
      q: 'Do you deliver printed burger boxes to Dublin?',
      a: 'Yes. We deliver custom printed burger boxes across Dublin and nationwide.',
    },
  ],
};
