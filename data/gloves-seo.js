/** SEO metadata for Gloves plain packaging products and hub pages. */

export const GLOVES_CATEGORY = 'Gloves';

export const GLOVES_HUB_PATH = '/gloves-ireland';

export const NITRILE_GLOVES_HUB_PATH = '/nitrile-gloves-ireland';

export const VINYL_GLOVES_HUB_PATH = '/vinyl-gloves-ireland';

export const GLOVES_CATEGORY_QUERY = 'Gloves';

const DISCOUNT = 0.95;

export const GLOVES_PRODUCT_IDS = [
  '122090', '122091', '122092', '122093', '122094', '122095', '122096', '122100', '1221031',
  '122104', '122173', '122174', '122175', '122176', '122177', '122178', '122180', '170001',
  '170035', '170043', '170044', '170045', '170046', '170047', '170048', '170050', '170054',
  '170055', '170056', '170058', '170064', '170065', '170066', '170067', '170068', '170078',
  '170079', '170080',
];

const FEATURED_IDS = new Set([
  '170054', '170055', '170056', '170058', '170065', '170066', '122090', '122094', '170043', '170046',
]);

export const NITRILE_GLOVE_IDS = new Set([
  '170054', '170055', '170056', '170058', '170064', '170065', '170066', '170067', '170068', '170078',
  '170079', '170080',
]);

export const VINYL_GLOVE_IDS = new Set([
  '122090', '122091', '122092', '122093', '122094', '122095', '122096', '122100', '1221031', '122104',
  '170001', '170043', '170044', '170045', '170046', '170047', '170048', '170050',
]);

const KEYWORD_HINTS = {
  '170054': 'blue nitrile gloves medium, powder-free food handling gloves',
  '170055': 'blue nitrile gloves large, catering and kitchen gloves',
  '170056': 'blue nitrile gloves small, disposable gloves Ireland',
  '170058': 'blue nitrile gloves XL, wholesale nitrile gloves',
  '170065': 'black nitrile gloves medium, tattoo and catering gloves',
  '170066': 'black nitrile gloves large, heavy-duty disposable gloves',
  '122090': 'blue vinyl gloves medium, economical food service gloves',
  '122094': 'clear vinyl gloves medium, powder-free catering gloves',
  '170043': 'Spirit PF clear vinyl gloves, powder-free wholesale',
  '170046': 'Spirit PF blue vinyl gloves medium, deli and catering',
};

function cleanName(name) {
  return (name || '').replace(/\s+/g, ' ').trim();
}

function extractSize(name) {
  const n = name.toUpperCase();
  if (/\bXL\b/.test(n) || /\bXL\s*\(/.test(n)) return 'XL';
  if (/\bLRG\b|\bLARGE\b|\b L\b/.test(n)) return 'Large';
  if (/\bMED\b|\bMEDIUM\b|\b M\b/.test(n)) return 'Medium';
  if (/\bSML\b|\bSMALL\b|\b S\b/.test(n)) return 'Small';
  return null;
}

function getProductTypeHint(name) {
  const n = name.toLowerCase();
  const size = extractSize(name);
  const sizePhrase = size ? `${size} ` : '';

  if (n.includes('nitrile')) {
    if (n.includes('black')) {
      return `${sizePhrase}powder-free black nitrile disposable gloves for catering, food prep and heavy-duty tasks`;
    }
    return `${sizePhrase}powder-free blue nitrile gloves for food handling, catering and hygiene`;
  }
  if (n.includes('vinyl')) {
    if (n.includes('powder free') || n.includes('pf ')) {
      return `${sizePhrase}powder-free vinyl disposable gloves for food service and catering`;
    }
    return `${sizePhrase}vinyl disposable gloves for kitchens, delis and food handling`;
  }
  if (n.includes('poly')) {
    return `${sizePhrase}clear embossed poly gloves for light food handling and sandwich prep`;
  }
  if (n.includes('deli fit') || n.includes('deli fit')) {
    return `${sizePhrase}deli-fit disposable gloves for sandwich counters and food prep`;
  }
  if (n.includes('rubber')) {
    return 'long sleeve black rubber gloves for washing up and heavy-duty kitchen tasks';
  }
  return `${sizePhrase}disposable gloves for Irish catering, food service and hospitality`;
}

export function getGloveDisplayName(product) {
  return cleanName(product?.name);
}

export function isGloveProduct(product) {
  return product?.category === GLOVES_CATEGORY;
}

export function isNitrileGlove(product) {
  return NITRILE_GLOVE_IDS.has(product?.id);
}

export function isVinylGlove(product) {
  return VINYL_GLOVE_IDS.has(product?.id);
}

export function getGloveProductSeo(product) {
  const name = getGloveDisplayName(product);
  const fromPrice = product?.caseTiers?.[0]?.pricePerCase;
  const pricePhrase =
    fromPrice != null
      ? ` from €${(Math.round(fromPrice * DISCOUNT * 100) / 100).toFixed(2)}/case`
      : '';
  const hints = KEYWORD_HINTS[product?.id];
  const hintPhrase = hints ? ` ${hints}.` : '';
  const typeHint = getProductTypeHint(name);

  const pageTitle = `${name} | Disposable Gloves Ireland | PrintNPack`;

  const metaDescription =
    `Buy ${name} in Ireland — ${typeHint}.${hintPhrase} ` +
    `${product.qtyPerCase || 'Case'} pack, wholesale case pricing${pricePhrase}. ` +
    'Glove supplier for Dublin, Cork & nationwide. Order online.';
  const pageDescription =
    `Wholesale ${name.toLowerCase()} for Irish restaurants, cafes, delis, caterers and food businesses. ` +
    `${typeHint.charAt(0).toUpperCase()}${typeHint.slice(1)}. ` +
    `${product.qtyPerCase || 'Case'} per case with tiered volume pricing${pricePhrase}. ` +
    'Disposable gloves with fast delivery from PrintNPack Ireland.';

  return {
    pageTitle,
    metaDescription: metaDescription.slice(0, 160),
    pageDescription,
    keywords:
      'disposable gloves ireland, nitrile gloves ireland, vinyl gloves wholesale, catering gloves ireland, ' +
      'food handling gloves, blue nitrile gloves, powder free gloves, gloves supplier ireland',
  };
}

export const GLOVES_CATEGORY_SEO = {
  pageTitle: 'Disposable Gloves Wholesale Ireland | Nitrile & Vinyl | PrintNPack',
  pageDescription:
    'Wholesale disposable gloves Ireland — blue & black nitrile, vinyl, poly and deli-fit gloves in S–XL. Powder-free catering and food handling gloves. Tiered case pricing, nationwide delivery.',
  canonicalPath: `https://www.printnpack.ie/plain-packaging?category=${GLOVES_CATEGORY_QUERY}`,
};

export const GLOVES_HUB_FAQS = [
  {
    q: 'Where can I buy disposable gloves in Ireland?',
    a: 'PrintNPack supplies wholesale disposable gloves across Ireland — blue and black nitrile, powder-free vinyl, poly embossed and deli-fit gloves in sizes S to XL. Order by the case online with tiered pricing and nationwide delivery from Ashbourne, Co. Meath.',
  },
  {
    q: 'What gloves do Irish restaurants and cafes use?',
    a: 'Food businesses typically use powder-free nitrile gloves (blue or black) for food prep and handling, or economical vinyl gloves for lighter tasks. Deli counters often use deli-fit gloves or clear poly gloves. All are available by the case with volume discounts.',
  },
  {
    q: 'Nitrile vs vinyl gloves — which should I choose?',
    a: 'Nitrile gloves offer better puncture resistance and are preferred for food prep, catering and hygiene-critical tasks. Vinyl gloves are more economical for light food handling, sandwich prep and general kitchen use. We stock both in multiple sizes.',
  },
  {
    q: 'Do you sell blue nitrile gloves wholesale?',
    a: 'Yes. SAFE TOUCH powder-free blue nitrile gloves are available in Small, Medium, Large and XL — 10 boxes of 100 per case. Black nitrile options from SAFE TOUCH, Kingfa and Touch Guard are also in stock.',
  },
  {
    q: 'Are your gloves powder-free?',
    a: 'Our Spirit PF vinyl gloves, SAFE TOUCH nitrile gloves, deli-fit gloves and most professional lines are powder-free (PF). Spirit LP vinyl gloves are also suitable for food service. Check individual product pages for specifications.',
  },
  {
    q: 'Do you deliver gloves to Dublin and nationwide?',
    a: 'Yes. PrintNPack delivers disposable gloves to Dublin, Cork, Galway and all Irish counties. Based in Ashbourne, Co. Meath — tiered case pricing with fast dispatch on wholesale orders.',
  },
];

export const GLOVES_HUB_CONFIG = {
  metaTitle: 'Disposable Gloves Ireland | Nitrile & Vinyl Wholesale Supplier',
  metaDescription:
    'Disposable gloves supplier Ireland — wholesale nitrile, vinyl & poly gloves in S–XL. Blue & black nitrile from €29/case. Powder-free catering gloves. Food handling gloves. Nationwide delivery.',
  keywords:
    'disposable gloves ireland, gloves supplier ireland, nitrile gloves ireland, vinyl gloves wholesale, catering gloves ireland, food handling gloves, blue nitrile gloves, black nitrile gloves, powder free gloves, disposable gloves wholesale, kitchen gloves ireland',
  h1: 'Disposable Gloves Ireland — Nitrile & Vinyl Wholesale',
  heroLabel: '38 SKUs · nitrile, vinyl & poly · S to XL · case pricing',
  intro:
    'Wholesale disposable gloves for Irish restaurants, cafes, delis, caterers, takeaways and food businesses. PrintNPack stocks powder-free blue and black nitrile gloves, Spirit vinyl gloves, deli-fit gloves, poly embossed gloves and long-sleeve rubber gloves — all with tiered case pricing and fast nationwide delivery.',
};

export const NITRILE_GLOVES_CONFIG = {
  metaTitle: 'Nitrile Gloves Ireland | Blue & Black Disposable Nitrile Wholesale',
  metaDescription:
    'Wholesale nitrile gloves Ireland — powder-free blue and black nitrile in S, M, L & XL. SAFE TOUCH, Kingfa & Touch Guard. Catering & food prep gloves from €29/case. Nationwide delivery.',
  keywords:
    'nitrile gloves ireland, blue nitrile gloves, black nitrile gloves, powder free nitrile, disposable nitrile gloves wholesale, catering nitrile gloves, food prep gloves ireland',
  h1: 'Nitrile Gloves Ireland — Blue & Black Disposable Wholesale',
  intro:
    'Powder-free nitrile gloves for Irish catering, food prep, delis and hospitality. Order blue SAFE TOUCH nitrile or black nitrile from SAFE TOUCH, Kingfa and Touch Guard in Small through XL — 10×100 per case with tiered wholesale pricing.',
};

export const VINYL_GLOVES_CONFIG = {
  metaTitle: 'Vinyl Gloves Ireland | Powder-Free Disposable Vinyl Wholesale',
  metaDescription:
    'Wholesale vinyl gloves Ireland — Spirit LP & PF clear and blue vinyl gloves in S–XL. Powder-free food handling gloves from €15/case. Catering & deli gloves. Nationwide delivery.',
  keywords:
    'vinyl gloves ireland, disposable vinyl gloves, powder free vinyl gloves, clear vinyl gloves, blue vinyl gloves wholesale, catering vinyl gloves, food handling vinyl gloves ireland',
  h1: 'Vinyl Gloves Ireland — Powder-Free Disposable Wholesale',
  intro:
    'Economical disposable vinyl gloves for Irish food service. Spirit LP and powder-free Spirit PF vinyl gloves in clear and blue — sizes Small to XL, 10×100 per case. Ideal for sandwich prep, deli counters and light catering tasks.',
};

export { FEATURED_IDS as GLOVES_FEATURED_IDS };
