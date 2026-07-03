export const BIOBOX_HUB_CONFIG = {
  slug: 'biobox-containers-ireland',
  metaTitle: 'Biobox Containers Wholesale Ireland | Kraft Takeaway Food Boxes',
  metaDescription:
    'Wholesale biobox containers Ireland for takeaways, delis, and catering. Kraft and white leak-proof food boxes in No.1–No.12 sizes — case packs, tiered B2B pricing, fast delivery nationwide.',
  h1: 'Biobox Containers Wholesale Ireland — Kraft Takeaway Food Boxes',
  heroLabel: 'B2B wholesale · case packs · tiered pricing',
  intro:
    'Wholesale biobox containers for Irish takeaways, restaurants, delis, and catering operators. PrintNPack stocks kraft and white biobox food boxes in standard No.1–No.12 sizes with grease-resistant lining — order by the case online with tiered wholesale pricing and delivery across Dublin, Meath, and nationwide.',
  keywords:
    'biobox containers Ireland, biobox wholesale, kraft biobox, takeaway food boxes wholesale, food containers Ireland, leak proof food boxes, compostable style food boxes, biobox No.8, biobox No.12',
  primaryCta: { href: '/plain-packaging?category=Biobox', label: 'Browse Biobox Prices' },
  secondaryCta: { href: '/plain-packaging', label: 'All plain packaging' },
  productFilter: (product) => product.category === 'Biobox',
  sections: [
    {
      title: 'Wholesale Biobox Food Containers for Takeaways',
      body: 'Biobox containers are foldable cardboard food boxes with a leak-resistant coating — the everyday choice for hot takeaway meals, salads, pasta, and deli portions. Order by the case for fast restocking without custom print lead times.',
    },
    {
      title: 'Kraft & White Biobox Sizes',
      body: 'Stock includes kraft biobox containers from compact No.1 (26oz) through large No.4 (96oz), plus popular No.8 and No.12 sizes. White biobox options and carton food boxes are also available for operators who prefer a cleaner presentation.',
    },
    {
      title: 'Case Packs & Tiered Wholesale Pricing',
      body: 'Every biobox SKU is sold in wholesale case quantities — typically 4×40 to 9×50 inner packs per case depending on size. Order multiple cases to unlock lower per-case rates on our four-tier B2B pricing.',
      link: { href: '/plain-packaging?category=Biobox', label: 'biobox case pricing online' },
    },
    {
      title: 'Who Buys Biobox Containers in Ireland?',
      body: 'Takeaways, fish & chip shops, salad bars, meal-prep kitchens, and contract caterers use biobox containers for hot and cold food to go. They stack well, hold sauces and oils, and are widely accepted in Irish food service.',
    },
    {
      title: 'Nationwide Delivery from PrintNPack',
      body: 'Order biobox wholesale online for delivery across Dublin, Cork, Galway, Meath, and all Irish counties. Combine with other plain packaging — pizza boxes, burger boxes, bags, and napkins — on the same account.',
      link: { href: '/blog/plain-packaging-wholesale-ireland', label: 'plain packaging wholesale guide' },
    },
  ],
  faqs: [
    {
      q: 'What is a biobox container?',
      a: 'A biobox is a foldable cardboard takeaway food box with a grease- and leak-resistant coating. They are used for hot meals, salads, pasta, and deli food — popular with Irish takeaways and catering businesses.',
    },
    {
      q: 'Do you sell biobox containers wholesale in Ireland?',
      a: 'Yes. PrintNPack stocks kraft and white biobox containers by the case with tiered wholesale pricing. Browse all sizes and case rates online — no minimum order on most SKUs.',
    },
    {
      q: 'What biobox sizes are available?',
      a: 'We stock No.1 (26oz), No.2 (49oz), No.3 (66oz), No.4 (96oz), No.8 (45oz), and No.12 (34oz) kraft biobox containers, plus white No.12 and carton food box options. Dimensions are listed on each product page.',
    },
    {
      q: 'Are biobox containers suitable for hot food?',
      a: 'Yes. Biobox containers are designed for hot takeaway use with a leak-resistant lining that handles sauces, oils, and gravies — ideal for curries, pasta, fish & chips, and salad bowls.',
    },
    {
      q: 'How many bioboxes are in a case?',
      a: 'Case quantities vary by size — for example No.1 kraft bioboxes come in 9×50 inner packs per case, while No.4 comes in 4×40. Each product page shows exact case configuration and tiered pricing.',
    },
    {
      q: 'Do you deliver biobox containers nationwide?',
      a: 'Yes. Biobox wholesale orders ship across Dublin, Meath, Cork, and all Irish counties. Add cases to your quote basket and check out online or contact us for regular supply.',
    },
  ],
  sizeGuide: [
    { size: 'No.1', dims: '109 × 88 × 65 mm', volume: '26oz', notes: 'Compact portions, sides, kids meals' },
    { size: 'No.2', dims: '196 × 139 × 47 mm', volume: '49oz', notes: 'Shallow meals, fish & chips' },
    { size: 'No.3', dims: '196 × 139 × 63 mm', volume: '66oz', notes: 'Standard takeaway meal' },
    { size: 'No.4', dims: '196 × 139 × 88 mm', volume: '96oz', notes: 'Large portions, sharing boxes' },
    { size: 'No.8', dims: '152 × 120 × 63 mm', volume: '45oz', notes: 'Popular medium takeaway size' },
    { size: 'No.12', dims: '152 × 120 × 38 mm', volume: '34oz', notes: 'Shallow box — salads, pasta' },
  ],
};

export function getBioboxProductSeo(product) {
  if (!product || product.category !== 'Biobox') return null;

  const name = product.name || 'Biobox container';
  const shortName = name.replace(/\s*\([^)]*\)\s*$/g, '').trim();
  const qty = product.qtyPerCase ? `${product.qtyPerCase} per case` : 'case packs';

  return {
    pageTitle: `${shortName} | Biobox Wholesale Ireland | PrintNPack`,
    metaDescription:
      `Wholesale ${shortName.toLowerCase()} for Irish takeaways and catering. ${qty}, tiered B2B case pricing, leak-resistant kraft food box — order online with nationwide delivery.`,
  };
}
