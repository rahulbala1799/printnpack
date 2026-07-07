import products from '../data/products';
import { TIERED_PLAIN_PRODUCTS } from '../data/plain-products-tiered';
import { PLAIN_PRODUCTS, getPlainProductPath } from '../data/plain-products';
import { REFUSE_SACK_PRODUCT_IDS } from '../data/refuse-sacks-seo';
import { NAPKINS_TABLEWARE_PRODUCT_IDS } from '../data/napkins-tableware-seo';
import { HOT_CUPS_PRODUCT_IDS } from '../data/hot-cups-seo';
import { GLOVES_PRODUCT_IDS } from '../data/gloves-seo';
import { SITE_URL } from '../lib/site';

// ── Pizza box cluster (page-1 priority) ─────────────────────────────────────
const PIZZA_PLAIN_PRODUCT_IDS = new Set(
  (TIERED_PLAIN_PRODUCTS || [])
    .filter((p) => p.category === 'Pizza Boxes')
    .map((p) => p.id)
);

const REFUSE_SACK_PLAIN_PRODUCT_IDS = new Set(REFUSE_SACK_PRODUCT_IDS);
const NAPKINS_TABLEWARE_PLAIN_PRODUCT_IDS = new Set(NAPKINS_TABLEWARE_PRODUCT_IDS);
const HOT_CUPS_PLAIN_PRODUCT_IDS = new Set(HOT_CUPS_PRODUCT_IDS);
const GLOVES_PLAIN_PRODUCT_IDS = new Set(GLOVES_PRODUCT_IDS);

function isPriorityPlainProduct(id) {
  return (
    PIZZA_PLAIN_PRODUCT_IDS.has(id) ||
    REFUSE_SACK_PLAIN_PRODUCT_IDS.has(id) ||
    NAPKINS_TABLEWARE_PLAIN_PRODUCT_IDS.has(id) ||
    HOT_CUPS_PLAIN_PRODUCT_IDS.has(id) ||
    GLOVES_PLAIN_PRODUCT_IDS.has(id)
  );
}

// Products with dedicated pages — exclude duplicate /products/{id} URLs
const DEDICATED_PRODUCT_IDS = new Set(
  (products || [])
    .filter((p) => p.url && p.url !== `/products/${p.id}`)
    .map((p) => p.id)
);

// Static pages with their priorities and change frequencies
const staticPages = [
  { path: '',             priority: '1.0', changefreq: 'weekly'  },
  { path: '/products',    priority: '0.9', changefreq: 'weekly'  },
  { path: '/plain-packaging', priority: '0.9', changefreq: 'weekly' },
  { path: '/biobox-containers-ireland', priority: '0.88', changefreq: 'weekly' },
  { path: '/about',       priority: '0.7', changefreq: 'monthly' },
  { path: '/contact',     priority: '0.7', changefreq: 'monthly' },
  { path: '/quote',       priority: '0.8', changefreq: 'monthly' },
  // Pizza box hub — primary SEO target
  { path: '/pizza-boxes-ireland',          priority: '0.95', changefreq: 'weekly' },
  { path: '/custom-pizza-boxes-ireland',   priority: '0.9',  changefreq: 'weekly' },
  { path: '/plain-pizza-boxes-ireland',    priority: '0.88', changefreq: 'weekly' },
  { path: '/pizza-boxes-wholesale-ireland', priority: '0.88', changefreq: 'weekly' },
  { path: '/pizza-box-faq-ireland',        priority: '0.88', changefreq: 'monthly' },
  { path: '/refuse-sacks-ireland',         priority: '0.95', changefreq: 'weekly' },
  { path: '/plain-napkins-tableware-ireland', priority: '0.95', changefreq: 'weekly' },
  { path: '/hot-cups-ireland',              priority: '0.95', changefreq: 'weekly' },
  { path: '/plain-hot-cups-ireland',        priority: '0.88', changefreq: 'weekly' },
  { path: '/gloves-ireland',                priority: '0.95', changefreq: 'weekly' },
  { path: '/nitrile-gloves-ireland',        priority: '0.88', changefreq: 'weekly' },
  { path: '/vinyl-gloves-ireland',          priority: '0.88', changefreq: 'weekly' },
  { path: '/printed-flat-handle-bags-ireland', priority: '0.9', changefreq: 'weekly' },
  // Paper bag cluster
  { path: '/paper-bags-ireland',              priority: '0.95', changefreq: 'weekly' },
  { path: '/plain-paper-bags-ireland',       priority: '0.88', changefreq: 'weekly' },
  { path: '/wholesale-paper-bags-ireland',   priority: '0.88', changefreq: 'weekly' },
  { path: '/twisted-handle-paper-bags-ireland', priority: '0.9', changefreq: 'weekly' },
  { path: '/eco-bagasse-burger-boxes',    priority: '0.85', changefreq: 'weekly' },
  // Burger box cluster
  { path: '/burger-boxes-ireland',           priority: '0.9',  changefreq: 'weekly' },
  { path: '/plain-burger-boxes-ireland',     priority: '0.88', changefreq: 'weekly' },
  { path: '/custom-burger-boxes-ireland',    priority: '0.88', changefreq: 'weekly' },
  { path: '/burger-box-faq-ireland',         priority: '0.88', changefreq: 'monthly' },
  { path: '/burger-box-printing-ashbourne',  priority: '0.88', changefreq: 'monthly' },
  { path: '/burger-box-printing-dublin',      priority: '0.88', changefreq: 'monthly' },
  { path: '/vinyl-stickers',  priority: '0.8', changefreq: 'monthly' },
  // Banner cluster
  { path: '/banners-ireland',              priority: '0.9',  changefreq: 'weekly' },
  { path: '/banner-faq-ireland',           priority: '0.88', changefreq: 'monthly' },
  { path: '/banner-printing-ashbourne',   priority: '0.88', changefreq: 'monthly' },
  { path: '/banner-printing-dublin',       priority: '0.88', changefreq: 'monthly' },
  { path: '/banner-printing-meath',       priority: '0.88', changefreq: 'monthly' },
  { path: '/pull-up-banners-meath',      priority: '0.88', changefreq: 'monthly' },
  { path: '/vinyl-banners',   priority: '0.85', changefreq: 'weekly' },
  { path: '/posters',         priority: '0.85', changefreq: 'weekly' },
  { path: '/roll-up-banners', priority: '0.85', changefreq: 'weekly' },
  { path: '/rubber-stamps',   priority: '0.85', changefreq: 'weekly' },
  { path: '/rubber-stamps-ireland',        priority: '0.9',  changefreq: 'weekly' },
  { path: '/rubber-stamp-faq-ireland',     priority: '0.88', changefreq: 'monthly' },
  { path: '/rubber-stamp-printing-ashbourne', priority: '0.88', changefreq: 'monthly' },
  { path: '/rubber-stamp-printing-dublin', priority: '0.88', changefreq: 'monthly' },
  // Napkin cluster
  { path: '/napkins-ireland',              priority: '0.9',  changefreq: 'weekly' },
  { path: '/napkin-faq-ireland',           priority: '0.88', changefreq: 'monthly' },
  { path: '/napkin-printing-ashbourne',   priority: '0.88', changefreq: 'monthly' },
  { path: '/napkin-printing-dublin',      priority: '0.88', changefreq: 'monthly' },
  // Foamex cluster
  { path: '/foamex-boards',            priority: '0.85', changefreq: 'weekly' },
  { path: '/foamex-ireland',           priority: '0.9',  changefreq: 'weekly' },
  { path: '/foamex-faq-ireland',       priority: '0.88', changefreq: 'monthly' },
  { path: '/foamex-printing-ashbourne', priority: '0.88', changefreq: 'monthly' },
  { path: '/foamex-printing-dublin',   priority: '0.88', changefreq: 'monthly' },
  // Printing cluster
  { path: '/printing-ireland',           priority: '0.9',  changefreq: 'weekly' },
  { path: '/printing-ashbourne',        priority: '0.9',  changefreq: 'weekly' },
  { path: '/printing-dublin',           priority: '0.88', changefreq: 'monthly' },
  { path: '/correx-boards',   priority: '0.8', changefreq: 'monthly' },
  { path: '/clothing',        priority: '0.8', changefreq: 'monthly' },
  { path: '/services/leaflets', priority: '0.8', changefreq: 'monthly' },
  { path: '/services/menus',    priority: '0.8', changefreq: 'monthly' },
  { path: '/services/posters',  priority: '0.8', changefreq: 'monthly' },
  { path: '/services/vinyls',   priority: '0.8', changefreq: 'monthly' },
  { path: '/blog',              priority: '0.8', changefreq: 'weekly'  },
  // Pizza box content cluster
  { path: '/blog/pizza-box-sizes-ireland', priority: '0.85', changefreq: 'monthly' },
  { path: '/blog/custom-pizza-box-cost-ireland', priority: '0.85', changefreq: 'monthly' },
  { path: '/blog/banner-sizes-ireland', priority: '0.85', changefreq: 'monthly' },
  { path: '/blog/business-stamps-ireland-guide', priority: '0.85', changefreq: 'monthly' },
  { path: '/blog/personalised-napkins-ireland-guide', priority: '0.85', changefreq: 'monthly' },
  { path: '/blog/foamex-boards-ireland-guide', priority: '0.85', changefreq: 'monthly' },
  { path: '/blog/burger-boxes-ireland-guide', priority: '0.85', changefreq: 'monthly' },
  { path: '/blog/banner-printing-ireland-guide', priority: '0.85', changefreq: 'monthly' },
  { path: '/blog/printing-ashbourne-guide', priority: '0.88', changefreq: 'monthly' },
  { path: '/blog/eco-friendly-pizza-box-paper-bags-burger-boxes-ireland', priority: '0.85', changefreq: 'monthly' },
  { path: '/blog/eco-packaging-for-takeaways-ireland',   priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/leaflet-printing-ireland-guide',        priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/paper-bags-with-logo-ireland',          priority: '0.85', changefreq: 'monthly' },
  { path: '/blog/printed-paper-bag-cost-ireland',       priority: '0.85', changefreq: 'monthly' },
  { path: '/blog/plain-packaging-wholesale-ireland',         priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/packaging-prices-ireland-covid-shipping',    priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/irish-restaurant-industry-delivery-2025',   priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/packaging-costs-ireland-restaurants-2025-2026', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/eps-polystyrene-packaging-ireland-legal-2025', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/eu-ppwr-packaging-regulation-ireland-2026',   priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/trade-show-banners-decals-ireland',           priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/corriboard-boards-ireland',                   priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/custom-vinyl-stickers-ireland',               priority: '0.8', changefreq: 'monthly' },
];

function urlEntry(loc, { lastmod, changefreq, priority }) {
  return `
  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

function generateSitemap(productIds) {
  const today = new Date().toISOString().split('T')[0];

  const staticUrls = staticPages
    .map(({ path, priority, changefreq }) =>
      urlEntry(`${SITE_URL}${path}`, { lastmod: today, changefreq, priority })
    )
    .join('');

  const productUrls = productIds
    .map((id) =>
      urlEntry(`${SITE_URL}/products/${id}`, {
        lastmod: today,
        changefreq: 'monthly',
        priority: '0.7',
      })
    )
    .join('');

  const plainPackagingUrls = (PLAIN_PRODUCTS || [])
    .map((product) =>
      urlEntry(`${SITE_URL}${getPlainProductPath(product)}`, {
        lastmod: today,
        changefreq: 'monthly',
        priority: isPriorityPlainProduct(product.id) ? '0.8' : '0.7',
      })
    )
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticUrls}
${productUrls}
${plainPackagingUrls}
</urlset>`;
}

export async function getServerSideProps({ res }) {
  const productIds = (products || [])
    .map((p) => p.id)
    .filter((id) => id && !DEDICATED_PRODUCT_IDS.has(id));

  const sitemap = generateSitemap(productIds);

  res.setHeader('Content-Type', 'application/xml');
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=43200');
  res.write(sitemap);
  res.end();

  return { props: {} };
}

// This page only outputs XML — no JSX needed
export default function Sitemap() {
  return null;
}
