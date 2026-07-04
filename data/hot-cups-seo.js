/** SEO metadata for Hot Cups & Lids plain packaging products and hub pages. */

export const HOT_CUPS_CATEGORY = 'Hot Cups & Lids';

export const HOT_CUPS_HUB_PATH = '/hot-cups-ireland';

export const PLAIN_HOT_CUPS_HUB_PATH = '/plain-hot-cups-ireland';

export const HOT_CUPS_CATEGORY_QUERY = 'Hot+Cups+%26+Lids';

const DISCOUNT = 0.95;

export const HOT_CUPS_PRODUCT_IDS = [
  '100029', '100057', '100058', '100067', '100068', '100069', '100070', '100071', '100072',
  '100088', '100089', '100102', '100103', '100104', '100154', '100155', '100209', '100223',
  '100253', '100271', '100276', '100314', '100319', '100320', '100321', '100328', '100329',
  '100337', '100338', '100340', '100341', '100347', '100348', '100364', '100365', '100366',
  '100367', '100389', '100390', '100392', '100393', '100396', '100397', '100455', '100456',
  '100470', '100471', '100472', '100476', '100477', '100478', '101005', '101006', '1041501',
  '1041502', '1041505', '10415093', '104390', '104391', '104392', '104393', '104394', '105000',
  '105001', '105002', '105003', 'cl12bl', 'cl12br', 'cl12wl', 'cl8bl', 'cl8wl',
];

const FEATURED_IDS = new Set([
  '100070', '100071', '100072', '100102', '100103', '100104', 'cl8wl', 'cl12wl', '100396', '100397',
]);

const PLAIN_WHITE_CUP_IDS = new Set([
  '100070', '100071', '100072', '1041501', '1041502', '1041505', '104391', '104392', '104393', '104394',
]);

const KEYWORD_HINTS = {
  '100070': '8oz disposable coffee cups, plain white double wall takeaway cups',
  '100071': '12oz disposable coffee cups, latte and regular coffee size',
  '100072': '16oz disposable coffee cups, large takeaway hot drinks',
  '100102': '8oz compostable aqueous coated cups, eco takeaway cups',
  '100103': '12oz compostable Greenspirit cups, eco coffee cups Ireland',
  '100104': '16oz compostable hot cups, large eco takeaway cups',
  'cl8wl': '80mm white hot cup lids for 8oz cups',
  'cl12wl': '90mm white hot cup lids for 12oz and 16oz cups',
  '100396': '8oz kraft aqueous compostable coffee cups',
  '100397': '12oz kraft compostable takeaway cups',
};

function discountedCasePrice(product) {
  const price = product?.caseTiers?.[0]?.pricePerCase;
  if (price == null) return null;
  return Math.round(price * DISCOUNT * 100) / 100;
}

function cleanName(name) {
  return (name || '').replace(/\s+/g, ' ').trim();
}

function extractOzSize(name) {
  const m = name.match(/\b(4|7|8|10|12|16)oz\b/i);
  return m ? `${m[1]}oz` : null;
}

function isLidProduct(name) {
  return /\blid/i.test(name);
}

function getProductTypeHint(name) {
  const n = name.toLowerCase();
  const oz = extractOzSize(name);

  if (isLidProduct(n)) {
    if (n.includes('80mm') || n.includes('8oz')) {
      return '80mm hot cup lids to fit 8oz disposable coffee cups';
    }
    if (n.includes('90mm') || n.includes('12') || n.includes('16')) {
      return '90mm hot cup lids to fit 10oz, 12oz and 16oz takeaway cups';
    }
    return 'disposable hot cup lids for cafes and takeaway';
  }

  if (n.includes('compostable') || n.includes('aqueous') || n.includes('greenspirit')) {
    return `${oz ? `${oz} ` : ''}compostable disposable coffee cups for eco-conscious cafes`;
  }
  if (n.includes('ripple') || n.includes('triple')) {
    return `${oz ? `${oz} ` : ''}ripple wall paper hot cups — extra insulation for takeaway coffee`;
  }
  if (n.includes('single wall') || /\bsw\b/i.test(name)) {
    return `${oz ? `${oz} ` : ''}single wall disposable paper coffee cups — economical takeaway supply`;
  }
  if (n.includes('double wall') || /\bdw\b/i.test(name)) {
    return `${oz ? `${oz} ` : ''}double wall disposable coffee cups — insulated takeaway hot cups`;
  }
  if (n.includes('vending')) {
    return `${oz ? `${oz} ` : ''}vending machine paper hot cups for offices and workplaces`;
  }
  if (n.includes('espresso') || n.includes('4oz')) {
    return '4oz espresso disposable cups for cafes and coffee shops';
  }
  return `${oz ? `${oz} ` : ''}disposable takeaway hot cups for Irish cafes and food service`;
}

export function getHotCupDisplayName(product) {
  return cleanName(product?.name);
}

export function isHotCupProduct(product) {
  return product?.category === HOT_CUPS_CATEGORY;
}

export function isPlainWhiteHotCup(product) {
  return PLAIN_WHITE_CUP_IDS.has(product?.id);
}

export function getHotCupProductSeo(product) {
  const name = getHotCupDisplayName(product);
  const fromPrice = discountedCasePrice(product);
  const pricePhrase = fromPrice != null ? ` from €${fromPrice.toFixed(2)}/case` : '';
  const hints = KEYWORD_HINTS[product?.id];
  const hintPhrase = hints ? ` ${hints}.` : '';
  const typeHint = getProductTypeHint(name);
  const oz = extractOzSize(name);

  const pageTitle = isLidProduct(name)
    ? `${name} | Hot Cup Lids Ireland | PrintNPack`
    : `${name} | Disposable Coffee Cups Ireland | PrintNPack`;

  const metaDescription =
    `Buy ${name} in Ireland — ${typeHint}.${hintPhrase} ` +
    `${product.qtyPerCase || 'Case'} pack, wholesale case pricing${pricePhrase}. ` +
    'Coffee cup supplier for Dublin, Cork & nationwide. Order online.';
  const pageDescription =
    `Wholesale ${name.toLowerCase()} for Irish cafes, coffee shops, delis, hotels and catering. ` +
    `${typeHint.charAt(0).toUpperCase()}${typeHint.slice(1)}. ` +
    `${product.qtyPerCase || 'Case'} per case with tiered volume pricing${pricePhrase}. ` +
    `${oz ? `Standard ${oz} takeaway size. ` : ''}` +
    'Plain stock disposable cups and matching lids — fast delivery from PrintNPack Ireland.';

  return {
    pageTitle,
    metaDescription: metaDescription.slice(0, 160),
    pageDescription,
    keywords:
      'disposable coffee cups ireland, hot cups ireland, paper cups wholesale, coffee cup supplier ireland, ' +
      'takeaway cups ireland, 8oz coffee cups, 12oz coffee cups, 16oz coffee cups, hot cup lids, compostable coffee cups',
  };
}

export const HOT_CUPS_CATEGORY_SEO = {
  pageTitle: 'Hot Cups & Lids Wholesale Ireland | Disposable Coffee Cups | PrintNPack',
  pageDescription:
    'Wholesale disposable coffee cups and lids Ireland — 8oz, 10oz, 12oz & 16oz double wall, single wall, compostable Greenspirit and kraft cups. Plain takeaway stock, tiered case pricing, nationwide delivery.',
  canonicalPath: `https://www.printnpack.ie/plain-packaging?category=${HOT_CUPS_CATEGORY_QUERY}`,
};

export const HOT_CUPS_HUB_FAQS = [
  {
    q: 'Where can I buy disposable coffee cups in Ireland?',
    a: 'PrintNPack supplies wholesale disposable hot cups and lids across Ireland — 8oz, 10oz, 12oz and 16oz paper cups in double wall, single wall, ripple and compostable aqueous options. Order plain stock by the case online with tiered pricing and nationwide delivery.',
  },
  {
    q: 'What size coffee cups do Irish cafes use?',
    a: 'The most popular takeaway sizes are 8oz (regular coffee), 12oz (latte and large regular) and 16oz (large hot drinks). We also stock 4oz espresso cups, 7oz vending cups and 10oz options. Cups are sold in cases — typically 500 cups per case on double wall lines.',
  },
  {
    q: 'Do you sell compostable coffee cups in Ireland?',
    a: 'Yes. Greenspirit aqueous-coated double wall cups are available in 8oz, 10oz, 12oz and 16oz, plus kraft aqueous and bagasse compostable lids. Ideal for cafes moving to more sustainable takeaway packaging.',
  },
  {
    q: 'Which lids fit 8oz and 12oz coffee cups?',
    a: '80mm lids fit 8oz hot cups. 90mm lids fit 10oz, 12oz and 16oz cups. We stock white, black and brown PP lids, compostable CPLA lids, and Greenspirit bagasse and aqueous paper lids — all matched to our cup range.',
  },
  {
    q: 'Can I order plain cups without custom printing?',
    a: 'Yes. Our hot cups range is plain wholesale stock for immediate dispatch — white matt double wall, embossed, kraft ripple and compostable options. No minimum print run. For branded custom printed cups, contact us for a quote on larger print orders.',
  },
  {
    q: 'Do you deliver coffee cups to Dublin and nationwide?',
    a: 'Yes. PrintNPack delivers disposable cups and lids to Dublin, Meath and all Irish counties. Based in Ashbourne, Co. Meath — tiered case pricing with fast dispatch on plain stock orders.',
  },
];

export const HOT_CUPS_HUB_CONFIG = {
  metaTitle: 'Disposable Coffee Cups Ireland | Hot Cups & Lids Wholesale Supplier',
  metaDescription:
    'Coffee cup supplier Ireland — wholesale disposable hot cups & lids in 8oz, 12oz & 16oz. Plain double wall, compostable & kraft cups from €17/case. Takeaway cups for cafes. Nationwide delivery.',
  keywords:
    'disposable coffee cups ireland, coffee cup supplier ireland, hot cups ireland, paper cups wholesale, takeaway cups ireland, disposable cups ireland, wholesale coffee cups, 8oz coffee cups, 12oz coffee cups, 16oz coffee cups, hot cup lids, compostable coffee cups, double wall cups, cafe cups ireland',
  h1: 'Disposable Coffee Cups Ireland — Hot Cups & Lids Wholesale',
  heroLabel: '71 SKUs · 8oz to 16oz · cups & lids · case pricing',
  intro:
    'Wholesale disposable coffee cups and lids for Irish cafes, coffee shops, delis, hotels and caterers. PrintNPack stocks plain 8oz, 10oz, 12oz and 16oz double wall and single wall paper cups, compostable Greenspirit aqueous cups, kraft ripple cups and matching lids — all with tiered case pricing and fast nationwide delivery. No print MOQ — order plain takeaway stock today.',
};

export const PLAIN_HOT_CUPS_CONFIG = {
  metaTitle: 'Plain Hot Cups Ireland | White Disposable Coffee Cups Wholesale',
  metaDescription:
    'Plain white disposable coffee cups Ireland — 8oz, 12oz & 16oz double wall and single wall takeaway cups. Wholesale case pricing from €24/case. Coffee cup supplier for cafes. Nationwide delivery.',
  keywords:
    'plain coffee cups ireland, white disposable cups, plain hot cups wholesale, 8oz white cups, 12oz coffee cups bulk, takeaway cups plain, unprinted coffee cups ireland',
  h1: 'Plain Hot Cups Ireland — White Disposable Coffee Cups Wholesale',
  intro:
    'Plain white disposable coffee cups for Irish cafes that need reliable wholesale stock without a custom print run. Order 8oz, 12oz and 16oz double wall matt PE cups and economical single wall options by the case — tiered pricing, fast delivery nationwide.',
};

export { FEATURED_IDS as HOT_CUPS_FEATURED_IDS, PLAIN_WHITE_CUP_IDS };
