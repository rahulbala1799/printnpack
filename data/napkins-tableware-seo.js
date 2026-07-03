/** SEO metadata for Napkins & Tableware plain packaging products and hub page. */

export const NAPKINS_TABLEWARE_CATEGORY = 'Napkins & Tableware';

export const NAPKINS_TABLEWARE_HUB_PATH = '/plain-napkins-tableware-ireland';

export const NAPKINS_TABLEWARE_CATEGORY_QUERY = 'Napkins+%26+Tableware';

const DISCOUNT = 0.95;

/** Product IDs — used for sitemap priority and static path prebuild. */
export const NAPKINS_TABLEWARE_PRODUCT_IDS = [
  '105doyrd', '10145doyrd', '10251', '103072', '103073', '103082', '103083', '103084', '103085',
  '103491', '103492', '103493', '103495', '10356', '10360', '103601', '103716', '103718',
  '1216doyrd', '1218doyrd', '130027', '130034', '130035', '130036', '160003', '160006', '160007',
  '160008', '160009', '160016', '160021', '160025', '160028', '160034', '160038', '160039',
  '160041', '160042', '160043', '160051', '160052', '160053', '160054', '160055', '160056',
  '160057', '160058', '160060', '160061', '160062', '160064', '160065', '160066', '160072',
  '160074', '160075', '2006660', '210053', '45doyrd', '55doyrd', '65doyrd', '75doyrd', '85doyrd',
  '95doyrd', 'l8dnow-d', 'l8dnow-dm',
];

const NAME_OVERRIDES = {
  '160007': "Logic8 33cm 2ply 8fold White Lunch Napkins (20x100's)",
  '160009': "Logic8 40cm 2ply 8fold White Napkins (20x100's)",
  '10360': '100m White Banquet Roll (1 per case)',
  '103601': '25m Tamask White Banquet Roll (9 per case)',
};

const FEATURED_IDS = new Set([
  '160006', '160007', '160008', '160003', '103072', '103716', '160028', '10360',
]);

function discountedCasePrice(product) {
  const price = product?.caseTiers?.[0]?.pricePerCase;
  if (price == null) return null;
  return Math.round(price * DISCOUNT * 100) / 100;
}

function cleanName(name) {
  return (name || '').replace(/\*/g, '').replace(/\s+/g, ' ').trim();
}

function getProductTypeHint(name) {
  const n = name.toLowerCase();
  if (n.includes('doylie')) return 'paper doilies for cakes, desserts and table settings';
  if (n.includes('placemat')) return 'disposable paper placemats for restaurants';
  if (n.includes('slipcover') || n.includes('table cover')) return 'disposable table covers for events and banquets';
  if (n.includes('banquet roll')) return 'banquet table rolls for catering and events';
  if (n.includes('tray paper') || n.includes('lace tray')) return 'tray liner paper for catering service';
  if (n.includes('dispenser')) return 'napkin dispensers for washrooms and food service';
  if (n.includes('cocktail')) return 'cocktail napkins for bars, cafes and events';
  if (n.includes('airlaid')) return 'premium airlaid napkins with linen-feel quality';
  if (n.includes('compostable') || (n.includes('kraft') && n.includes('napkin'))) {
    return 'compostable eco-friendly napkins for sustainable catering';
  }
  if (n.includes('interfold') || n.includes('disp napkin')) return 'interfold dispenser napkins for high-traffic areas';
  if (n.includes('guest towel')) return 'disposable guest towels for washrooms';
  if (n.includes('pocket') || n.includes('pouchette')) return 'pocket-style cutlery wrap napkins';
  if (n.includes('dinner')) return 'dinner napkins for restaurants and hospitality';
  if (n.includes('lunch')) return 'lunch napkins for cafes and food service';
  return 'wholesale napkins and tableware for Irish catering';
}

export function getNapkinsTablewareDisplayName(product) {
  return NAME_OVERRIDES[product?.id] || cleanName(product?.name);
}

export function isNapkinsTablewareProduct(product) {
  return product?.category === NAPKINS_TABLEWARE_CATEGORY;
}

export function getNapkinsTablewareProductSeo(product) {
  const name = getNapkinsTablewareDisplayName(product);
  const fromPrice = discountedCasePrice(product);
  const pricePhrase = fromPrice != null ? ` from €${fromPrice.toFixed(2)}/case` : '';
  const typeHint = getProductTypeHint(name);

  const pageTitle = `${name} | Plain Napkins & Tableware Ireland | PrintNPack`;
  const metaDescription =
    `Buy ${name} in Ireland — ${typeHint}. ` +
    `${product.qtyPerCase || 'Case'} pack, tiered wholesale pricing${pricePhrase}. ` +
    'Fast delivery Dublin & nationwide.';
  const pageDescription =
    `Wholesale ${name.toLowerCase()} for Irish restaurants, hotels, caterers and event venues. ` +
    `${typeHint.charAt(0).toUpperCase()}${typeHint.slice(1)}. ` +
    `${product.qtyPerCase || 'Case'} per case with tiered volume pricing${pricePhrase}. ` +
    'Order plain napkins and tableware online from PrintNPack Ireland.';

  return {
    pageTitle,
    metaDescription: metaDescription.slice(0, 160),
    pageDescription,
    keywords:
      'plain napkins ireland, wholesale napkins, paper napkins bulk, tableware ireland, doilies ireland, ' +
      'placemats wholesale, banquet rolls, airlaid napkins, compostable napkins, cocktail napkins ireland',
  };
}

export const NAPKINS_TABLEWARE_CATEGORY_SEO = {
  pageTitle: 'Plain Napkins & Tableware Wholesale Ireland | PrintNPack',
  pageDescription:
    'Wholesale plain napkins and tableware Ireland — white 2-ply lunch & dinner napkins, cocktail napkins, compostable kraft, airlaid, doilies, placemats, table covers and banquet rolls. Tiered case pricing, nationwide delivery.',
  canonicalPath: `https://www.printnpack.ie/plain-packaging?category=${NAPKINS_TABLEWARE_CATEGORY_QUERY}`,
};

export const NAPKINS_TABLEWARE_HUB_FAQS = [
  {
    q: 'Where can I buy wholesale napkins in Ireland?',
    a: 'PrintNPack supplies wholesale plain napkins and tableware across Ireland — white 2-ply lunch and dinner napkins, coloured BulkySoft napkins, compostable kraft, airlaid premium napkins, doilies, placemats and table covers. Order by the case online with tiered pricing.',
  },
  {
    q: 'What napkin sizes are available for Irish restaurants?',
    a: 'We stock 24cm cocktail napkins, 33cm lunch napkins and 40cm dinner napkins in 1-ply and 2-ply options. Logic8 and BulkySoft brands are available in 4-fold and 8-fold formats. Compostable kraft napkins are also available in 30cm and 40cm sizes.',
  },
  {
    q: 'Do you sell compostable napkins in Ireland?',
    a: 'Yes. We stock compostable kraft napkins in 30cm 1-ply and 33–40cm 2-ply 4-fold and 8-fold formats, plus Kraft Ecopouchet pocket napkins. Ideal for eco-conscious cafes, takeaways and event caterers.',
  },
  {
    q: 'What is the difference between paper napkins and airlaid napkins?',
    a: 'Standard paper napkins are economical 1-ply or 2-ply tissue for everyday catering. Airlaid napkins have a thicker, cloth-like texture — popular for upscale dining, hotels and weddings. We stock Logic8 and BulkySoft airlaid in white and colours.',
  },
  {
    q: 'Do you sell table covers and doilies?',
    a: 'Yes. Our Napkins & Tableware range includes white round and rectangular doilies, paper placemats, Tamask table covers, silk slipcovers, banquet rolls and lace tray paper — all available wholesale by the case.',
  },
  {
    q: 'Can I get custom printed napkins instead of plain?',
    a: 'Yes. For branded napkins with your logo, see our custom printed napkins from €0.05 per unit. Plain wholesale napkins on this page are unbranded stock for immediate case orders.',
  },
];

export const NAPKINS_TABLEWARE_HUB_CONFIG = {
  metaTitle: 'Plain Napkins & Tableware Ireland | Wholesale Napkins, Doilies & Placemats',
  metaDescription:
    'Buy plain napkins and tableware in Ireland — white 2-ply lunch & dinner napkins, cocktail napkins, compostable kraft, airlaid, doilies, placemats & table covers. Wholesale case pricing from €15/case. Nationwide delivery.',
  keywords:
    'plain napkins ireland, wholesale napkins ireland, paper napkins bulk, white napkins wholesale, tableware ireland, doilies ireland, placemats wholesale, banquet rolls ireland, airlaid napkins, compostable napkins ireland, cocktail napkins, napkin dispensers',
  h1: 'Plain Napkins & Tableware Ireland — Wholesale for Catering',
  heroLabel: '58 SKUs · napkins, doilies & table covers · case pricing',
  intro:
    'Buy wholesale plain napkins and tableware in Ireland for restaurants, hotels, cafes, caterers and events. PrintNPack stocks white and coloured 2-ply napkins, compostable kraft, premium airlaid, cocktail napkins, doilies, placemats, table covers, banquet rolls and dispensers — all with tiered case pricing and fast nationwide delivery.',
};

export { FEATURED_IDS as NAPKINS_TABLEWARE_FEATURED_IDS };
