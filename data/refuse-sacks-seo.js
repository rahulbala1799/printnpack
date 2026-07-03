/** SEO metadata for Refuse Sack plain packaging products and hub page. */

export const REFUSE_SACK_CATEGORY = 'Refuse Sack';

export const REFUSE_SACK_HUB_PATH = '/refuse-sacks-ireland';

const DISCOUNT = 0.95;

/** Product IDs in the Refuse Sack category — used for sitemap priority and static paths. */
export const REFUSE_SACK_PRODUCT_IDS = [
  '101020', '101102', '101103', '1011051', '10112', '10123', '101230', '101231',
  '101232', '103233', '150000', '150002', '150003', '150004', '150005', '150006',
  '150007', '150008', '150009', '150010', '210029',
];

/** Display-name fixes for catalogue typos that hurt SEO. */
const NAME_OVERRIDES = {
  '10123': '29x39 Clear Refuse Sacks Rio Grand (8×25)',
};

/** Short keyword hints per product for richer meta descriptions. */
const KEYWORD_HINTS = {
  '150003': 'hi grade black refuse sacks, 26x44 black bin bags',
  '150004': 'hi grade clear refuse sacks, 26x44 clear bin bags',
  '150006': 'standard black refuse sacks, economy bin bags',
  '150005': 'heavy duty black refuse sacks, large bin bags',
  '150007': 'compactor sacks, wheelie bin compactor bags',
  '150008': 'SuperSack black refuse sacks',
  '150002': 'SuperSack clear refuse sacks',
  '101102': 'Greensack green refuse sacks, recyclable bin bags',
  '101103': 'Greensack clear refuse sacks',
  '1011051': 'Greensack compactor bags',
  '150000': 'office bin liners, desk bin bags',
  '10112': 'swing bin liners, pedal bin bags',
  '101231': 'recycled clear refuse sacks',
  '210029': 'disposable bedpan liners, healthcare waste bags',
};

function discountedCasePrice(product) {
  const price = product?.caseTiers?.[0]?.pricePerCase;
  if (price == null) return null;
  return Math.round(price * DISCOUNT * 100) / 100;
}

export function getRefuseSackDisplayName(product) {
  return NAME_OVERRIDES[product?.id] || product?.name || '';
}

export function isRefuseSackProduct(product) {
  return product?.category === REFUSE_SACK_CATEGORY;
}

export function getRefuseSackProductSeo(product) {
  const name = getRefuseSackDisplayName(product);
  const fromPrice = discountedCasePrice(product);
  const pricePhrase = fromPrice != null ? ` from €${fromPrice.toFixed(2)}/case` : '';
  const hints = KEYWORD_HINTS[product?.id];
  const hintPhrase = hints ? ` ${hints}.` : '';

  const pageTitle = `${name} | Refuse Sacks Ireland | PrintNPack`;
  const metaDescription =
    `Buy ${name} in Ireland — wholesale refuse sacks & bin bags.${hintPhrase} ` +
    `${product.qtyPerCase || 'Case'} pack, tiered volume pricing${pricePhrase}. ` +
    'Fast delivery to Dublin, Cork & nationwide. Order online.';
  const pageDescription =
    `Wholesale ${name.toLowerCase()} for Irish businesses — catering, hospitality, retail and facilities management. ` +
    `${product.qtyPerCase || 'Case'} per case with tiered volume pricing${pricePhrase}. ` +
    'Heavy-duty refuse sacks and bin liners delivered nationwide from PrintNPack Ireland.';

  return {
    pageTitle,
    metaDescription: metaDescription.slice(0, 160),
    pageDescription,
    keywords:
      'refuse sacks ireland, refuse bags ireland, bin bags ireland, black refuse sacks, ' +
      'clear refuse sacks, wholesale bin bags, compactor sacks, bin liners ireland',
  };
}

export const REFUSE_SACK_CATEGORY_SEO = {
  pageTitle: 'Refuse Sacks & Bin Bags Wholesale Ireland | PrintNPack',
  pageDescription:
    'Wholesale refuse sacks and bin bags Ireland — black, clear and green hi-grade sacks, compactor bags, swing bin liners and office bin bags. Tiered case pricing, fast delivery nationwide.',
  canonicalPath: 'https://www.printnpack.ie/plain-packaging?category=Refuse+Sack',
};

export const REFUSE_SACK_HUB_FAQS = [
  {
    q: 'Where can I buy refuse sacks in Ireland?',
    a: 'PrintNPack supplies wholesale refuse sacks and bin bags across Ireland — black hi-grade sacks, clear sacks, Greensack recyclable bags, compactor sacks and swing bin liners. Order by the case online with tiered volume pricing and nationwide delivery.',
  },
  {
    q: 'What size refuse sack is most common in Ireland?',
    a: 'The 26 x 44 inch black refuse sack (8 rolls of 25) is the most popular commercial size for wheelie bins and general waste. We also stock 29 x 46 heavy-duty sacks, compactor bags and office bin liners.',
  },
  {
    q: 'What is the difference between hi-grade and standard refuse sacks?',
    a: 'Hi-grade refuse sacks use thicker, stronger polythene for heavier commercial waste and sharper contents. Standard sacks are a cost-effective option for lighter general waste. Both are available in black and clear.',
  },
  {
    q: 'Do you sell clear refuse sacks?',
    a: 'Yes. We stock hi-grade clear refuse sacks (26 x 44), Greensack clear sacks, SuperSack clear sacks, recycled clear sacks and clear compactor bags — all available by the case with tiered pricing.',
  },
  {
    q: 'How many refuse sacks are in a case?',
    a: 'Most 26 x 44 refuse sacks come in cases of 8 rolls × 25 sacks (200 sacks per case). Compactor bags and some clear sacks use 4 × 25 rolls. Swing bin liners are packed 500 per case. Check each product page for exact pack sizes.',
  },
  {
    q: 'Do you deliver refuse sacks to Dublin?',
    a: 'Yes. We deliver refuse sacks and bin bags to Dublin and all Irish counties. Based in Ashbourne, Co. Meath, PrintNPack ships wholesale packaging nationwide with fast dispatch on plain stock orders.',
  },
];

export const REFUSE_SACK_HUB_CONFIG = {
  metaTitle: 'Refuse Sacks Ireland | Black, Clear & Hi-Grade Bin Bags Wholesale',
  metaDescription:
    'Buy refuse sacks in Ireland — black hi-grade, clear, Greensack and compactor bin bags. Wholesale case pricing from €18/case. 26×44, 29×46 & more sizes. Fast delivery nationwide.',
  keywords:
    'refuse sacks ireland, refuse bags ireland, bin bags ireland, black refuse sacks, clear refuse sacks, hi grade refuse sacks, compactor sacks, swing bin liners, wholesale bin bags, bin bags dublin',
  h1: 'Refuse Sacks Ireland — Black, Clear & Hi-Grade Bin Bags',
  heroLabel: 'Wholesale bin bags · tiered case pricing',
  intro:
    'Buy wholesale refuse sacks and bin bags in Ireland for catering, hospitality, facilities and commercial waste. PrintNPack stocks black hi-grade sacks, clear refuse bags, Greensack recyclable sacks, compactor bags, swing bin liners and office bin liners — all with tiered case pricing and fast nationwide delivery.',
};
