import products from '../data/products';
import { TIERED_PLAIN_PRODUCTS } from '../data/plain-products-tiered';
import { SITE_URL } from '../lib/site';

// ── Pizza box cluster (page-1 priority) ─────────────────────────────────────
const PIZZA_PLAIN_PRODUCT_IDS = new Set(
  (TIERED_PLAIN_PRODUCTS || [])
    .filter((p) => p.category === 'Pizza Boxes')
    .map((p) => p.id)
);

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
  { path: '/about',       priority: '0.7', changefreq: 'monthly' },
  { path: '/contact',     priority: '0.7', changefreq: 'monthly' },
  { path: '/quote',       priority: '0.8', changefreq: 'monthly' },
  // Pizza box hub — primary SEO target
  { path: '/pizza-boxes-ireland',          priority: '0.95', changefreq: 'weekly' },
  { path: '/custom-pizza-boxes-ireland',   priority: '0.9',  changefreq: 'weekly' },
  { path: '/plain-pizza-boxes-ireland',    priority: '0.88', changefreq: 'weekly' },
  { path: '/pizza-boxes-wholesale-ireland', priority: '0.88', changefreq: 'weekly' },
  { path: '/pizza-box-faq-ireland',        priority: '0.88', changefreq: 'monthly' },
  { path: '/printed-flat-handle-bags-ireland', priority: '0.9', changefreq: 'weekly' },
  { path: '/eco-bagasse-burger-boxes',    priority: '0.8',  changefreq: 'monthly' },
  { path: '/vinyl-stickers',  priority: '0.8', changefreq: 'monthly' },
  // Banner cluster
  { path: '/banners-ireland',              priority: '0.9',  changefreq: 'weekly' },
  { path: '/banner-faq-ireland',           priority: '0.88', changefreq: 'monthly' },
  { path: '/banner-printing-ashbourne',   priority: '0.88', changefreq: 'monthly' },
  { path: '/banner-printing-dublin',       priority: '0.88', changefreq: 'monthly' },
  { path: '/banner-printing-meath',       priority: '0.88', changefreq: 'monthly' },
  { path: '/vinyl-banners',   priority: '0.85', changefreq: 'weekly' },
  { path: '/posters',         priority: '0.85', changefreq: 'weekly' },
  { path: '/roll-up-banners', priority: '0.85', changefreq: 'weekly' },
  { path: '/rubber-stamps',   priority: '0.85', changefreq: 'weekly' },
  { path: '/rubber-stamps-ireland',        priority: '0.9',  changefreq: 'weekly' },
  { path: '/rubber-stamp-faq-ireland',     priority: '0.88', changefreq: 'monthly' },
  { path: '/rubber-stamp-printing-ashbourne', priority: '0.88', changefreq: 'monthly' },
  { path: '/rubber-stamp-printing-dublin', priority: '0.88', changefreq: 'monthly' },
  // Printing cluster
  { path: '/printing-ireland',           priority: '0.9',  changefreq: 'weekly' },
  { path: '/printing-ashbourne',        priority: '0.9',  changefreq: 'weekly' },
  { path: '/printing-dublin',           priority: '0.88', changefreq: 'monthly' },
  { path: '/foamex-boards',   priority: '0.8', changefreq: 'monthly' },
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
  { path: '/blog/banner-printing-ireland-guide', priority: '0.85', changefreq: 'monthly' },
  { path: '/blog/printing-ashbourne-guide', priority: '0.88', changefreq: 'monthly' },
  { path: '/blog/eco-friendly-pizza-box-paper-bags-burger-boxes-ireland', priority: '0.85', changefreq: 'monthly' },
  { path: '/blog/eco-packaging-for-takeaways-ireland',   priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/leaflet-printing-ireland-guide',        priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/paper-bags-with-logo-ireland',          priority: '0.85', changefreq: 'monthly' },
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

function generateSitemap(productIds, plainPackagingIds) {
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

  const plainPackagingUrls = (plainPackagingIds || [])
    .map((id) =>
      urlEntry(`${SITE_URL}/plain-packaging/${id}`, {
        lastmod: today,
        changefreq: 'monthly',
        priority: PIZZA_PLAIN_PRODUCT_IDS.has(id) ? '0.8' : '0.7',
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

  const plainPackagingIds = (TIERED_PLAIN_PRODUCTS || []).map((p) => p.id).filter(Boolean);

  const sitemap = generateSitemap(productIds, plainPackagingIds);

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
