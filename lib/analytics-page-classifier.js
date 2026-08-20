import products from '../data/products';
import { parseTrafficSource } from './analytics-traffic';

const PATH_LOOKUP = new Map();

PATH_LOOKUP.set('/biobox-containers-ireland', {
    product_slug: 'biobox-containers-ireland',
    product_name: 'Biobox Containers Wholesale',
    product_family: 'Biobox Containers',
    page_type: 'hub',
  });

for (const product of products) {
  const entry = {
    product_slug: product.id,
    product_name: product.name,
    product_family: mapCategoryToFamily(product.category, product.id, product.name),
    page_type: 'product',
  };

  PATH_LOOKUP.set(`/products/${product.id}`, entry);
  if (product.url) {
    PATH_LOOKUP.set(product.url, entry);
  }
}

const FAMILY_RULES = [
  { family: 'Pizza Boxes', test: (path) => /pizza/i.test(path) },
  { family: 'Burger Boxes', test: (path) => /burger|bagasse/i.test(path) },
  { family: 'Napkins', test: (path) => /napkin/i.test(path) },
  {
    family: 'Banners & Signage',
    test: (path) => /banner|foamex|correx|vinyl-banner|roll-up|pull-up|poster/i.test(path),
  },
  { family: 'Stickers & Labels', test: (path) => /vinyl-sticker|services\/vinyl|labels-on-a-roll/i.test(path) },
  { family: 'Paper Bags', test: (path) => /bag/i.test(path) },
  { family: 'Leaflets', test: (path) => /leaflet|services\/leaflets/i.test(path) },
  { family: 'Rubber Stamps', test: (path) => /rubber-stamp|stamp/i.test(path) },
  { family: 'Clothing', test: (path) => /clothing/i.test(path) },
  { family: 'Plain Packaging', test: (path) => /plain-packaging|plain-pizza|plain-burger/i.test(path) },
  { family: 'Biobox Containers', test: (path) => /biobox/i.test(path) },
  { family: 'Printing Services', test: (path) => /printing-/i.test(path) },
];

function mapCategoryToFamily(category = '', slug = '', name = '') {
  const haystack = `${category} ${slug} ${name}`.toLowerCase();

  if (haystack.includes('pizza')) return 'Pizza Boxes';
  if (haystack.includes('burger') || haystack.includes('bagasse')) return 'Burger Boxes';
  if (haystack.includes('napkin')) return 'Napkins';
  if (haystack.includes('sticker') || haystack.includes('label')) return 'Stickers & Labels';
  if (haystack.includes('wide format') || haystack.includes('banner') || haystack.includes('foamex')) {
    return 'Banners & Signage';
  }
  if (haystack.includes('leaflet')) return 'Leaflets';
  if (haystack.includes('stamp')) return 'Rubber Stamps';
  if (haystack.includes('bag')) return 'Paper Bags';
  if (haystack.includes('apparel') || haystack.includes('clothing')) return 'Clothing';

  return category || 'Other Products';
}

function inferFamilyFromPath(path) {
  for (const rule of FAMILY_RULES) {
    if (rule.test(path)) return rule.family;
  }
  return null;
}

function humanizeSlug(slug = '') {
  return slug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export function getPagePath(pageUrl = '') {
  try {
    return new URL(pageUrl).pathname || '/';
  } catch {
    return '/';
  }
}

export function classifyPage(pageUrl = '', pageTitle = '') {
  const page_path = getPagePath(pageUrl);

  if (page_path.startsWith('/admin') || page_path.startsWith('/staff') || page_path === '/login') {
    return {
      page_path,
      page_type: 'internal',
      product_family: null,
      product_slug: null,
      product_name: null,
    };
  }

  const exact = PATH_LOOKUP.get(page_path);
  if (exact) {
    return { page_path, ...exact };
  }

  if (page_path.startsWith('/products/')) {
    const slug = page_path.replace('/products/', '').split('/')[0];
    return {
      page_path,
      page_type: 'product',
      product_slug: slug,
      product_name: humanizeSlug(slug),
      product_family: inferFamilyFromPath(page_path) || 'Catalog Products',
    };
  }

  if (page_path.startsWith('/plain-packaging/')) {
    const slug = page_path.replace('/plain-packaging/', '').split('/')[0];
    return {
      page_path,
      page_type: 'plain',
      product_slug: slug,
      product_name: `Plain SKU ${slug}`,
      product_family: 'Plain Packaging',
    };
  }

  if (page_path === '/products' || page_path === '/plain-packaging') {
    return {
      page_path,
      page_type: 'catalog',
      product_family: page_path === '/plain-packaging' ? 'Plain Packaging' : 'Catalog',
      product_slug: null,
      product_name: page_path === '/plain-packaging' ? 'Plain Packaging Hub' : 'Products Hub',
    };
  }

  if (page_path.startsWith('/blog')) {
    return {
      page_path,
      page_type: 'content',
      product_family: inferFamilyFromPath(page_path) || 'Blog',
      product_slug: page_path.replace('/blog/', '') || 'blog',
      product_name: pageTitle || 'Blog',
    };
  }

  if (page_path.includes('-faq-')) {
    return {
      page_path,
      page_type: 'content',
      product_family: inferFamilyFromPath(page_path) || 'FAQ',
      product_slug: page_path.slice(1),
      product_name: pageTitle || humanizeSlug(page_path.slice(1)),
    };
  }

  const family = inferFamilyFromPath(page_path);
  if (family) {
    return {
      page_path,
      page_type: page_path.includes('-ireland') || page_path.includes('-printing-') ? 'hub' : 'product',
      product_family: family,
      product_slug: page_path.slice(1),
      product_name: pageTitle || humanizeSlug(page_path.slice(1)),
    };
  }

  if (['/', '/about', '/contact', '/quote', '/search'].includes(page_path)) {
    return {
      page_path,
      page_type: 'utility',
      product_family: null,
      product_slug: page_path === '/' ? 'home' : page_path.slice(1),
      product_name: page_path === '/' ? 'Homepage' : humanizeSlug(page_path.slice(1)),
    };
  }

  return {
    page_path,
    page_type: 'other',
    product_family: null,
    product_slug: page_path.slice(1) || 'home',
    product_name: pageTitle || humanizeSlug(page_path.slice(1) || 'home'),
  };
}

export function enrichPageVisit({
  pageUrl,
  pageTitle,
  referrer,
  utmSource,
  utmMedium,
  utmCampaign,
}) {
  const page = classifyPage(pageUrl, pageTitle);
  const traffic = parseTrafficSource({ referrer, utmSource, utmMedium, pageUrl });

  return {
    ...page,
    ...traffic,
    utm_campaign: (utmCampaign || '').trim() || null,
  };
}
