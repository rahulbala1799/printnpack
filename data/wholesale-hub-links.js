/** Internal link targets for wholesale / plain packaging SEO hubs. */

export const CATEGORY_HUB_LINKS = {
  'Hot Cups & Lids': {
    href: '/hot-cups-ireland',
    label: 'Hot Cups & Lids Ireland',
    desc: 'Disposable coffee cups & lids wholesale',
  },
  Gloves: {
    href: '/gloves-ireland',
    label: 'Disposable Gloves Ireland',
    desc: 'Nitrile & vinyl gloves wholesale',
  },
  'Refuse Sack': {
    href: '/refuse-sacks-ireland',
    label: 'Refuse Sacks Ireland',
    desc: 'Bin bags & compactor sacks',
  },
  'Napkins & Tableware': {
    href: '/plain-napkins-tableware-ireland',
    label: 'Napkins & Tableware',
    desc: 'Plain wholesale napkins & table covers',
  },
  Biobox: {
    href: '/biobox-containers-ireland',
    label: 'Biobox Containers',
    desc: 'Kraft takeaway food boxes',
  },
  'Pizza Boxes': {
    href: '/pizza-boxes-ireland',
    label: 'Pizza Boxes Ireland',
    desc: 'Plain & custom pizza boxes',
  },
};

/** Primary wholesale hub pages — use for footer, homepage & cross-linking. */
export const WHOLESALE_HUB_LINKS = [
  { href: '/hot-cups-ireland', label: 'Hot Cups & Lids', desc: 'Disposable coffee cups Ireland' },
  { href: '/custom-printed-coffee-cups-ireland', label: 'Custom Printed Coffee Cups', desc: 'Branded takeaway cups Dublin & Ireland' },
  { href: '/plain-hot-cups-ireland', label: 'Plain Hot Cups', desc: 'White takeaway coffee cups' },
  { href: '/gloves-ireland', label: 'Disposable Gloves', desc: 'Nitrile & vinyl wholesale' },
  { href: '/nitrile-gloves-ireland', label: 'Nitrile Gloves', desc: 'Blue & black powder-free' },
  { href: '/vinyl-gloves-ireland', label: 'Vinyl Gloves', desc: 'Spirit PF & LP vinyl' },
  { href: '/refuse-sacks-ireland', label: 'Refuse Sacks', desc: 'Bin bags & compactor sacks' },
  { href: '/plain-napkins-tableware-ireland', label: 'Napkins & Tableware', desc: 'Plain wholesale napkins' },
  { href: '/biobox-containers-ireland', label: 'Biobox Containers', desc: 'Kraft takeaway food boxes' },
  { href: '/pizza-boxes-ireland', label: 'Pizza Boxes', desc: 'Plain & custom pizza boxes' },
  { href: '/plain-pizza-boxes-ireland', label: 'Plain Pizza Boxes', desc: 'Kraft boxes by the case' },
  { href: '/paper-bags-ireland', label: 'Paper Bags', desc: 'Plain & printed paper bags' },
  { href: '/burger-boxes-ireland', label: 'Burger Boxes', desc: 'Bagasse takeaway boxes' },
  { href: '/plain-packaging', label: 'All Plain Packaging', desc: '736+ wholesale SKUs' },
  { href: '/blog/plain-packaging-wholesale-ireland', label: 'Wholesale Guide', desc: 'How case pricing works' },
];

/** Compact strip for plain-packaging — top category hubs only. */
export const PRIMARY_WHOLESALE_HUBS = [
  CATEGORY_HUB_LINKS['Hot Cups & Lids'],
  CATEGORY_HUB_LINKS.Gloves,
  CATEGORY_HUB_LINKS['Refuse Sack'],
  CATEGORY_HUB_LINKS['Napkins & Tableware'],
  CATEGORY_HUB_LINKS.Biobox,
  CATEGORY_HUB_LINKS['Pizza Boxes'],
  { href: '/paper-bags-ireland', label: 'Paper Bags Ireland', desc: 'Plain & printed bags' },
  { href: '/burger-boxes-ireland', label: 'Burger Boxes', desc: 'Bagasse takeaway boxes' },
];

export function getCategoryHubLink(categoryName) {
  return CATEGORY_HUB_LINKS[categoryName] || null;
}

export function getCategoryHubHref(categoryName) {
  return CATEGORY_HUB_LINKS[categoryName]?.href || null;
}

export function getRelatedWholesaleLinks(excludeHref, { limit = 8 } = {}) {
  const exclude = new Set([excludeHref].filter(Boolean));
  return WHOLESALE_HUB_LINKS.filter((link) => !exclude.has(link.href)).slice(0, limit);
}
