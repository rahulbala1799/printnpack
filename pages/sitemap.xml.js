import products from '../data/products';

const SITE_URL = 'https://printnpack.ie';

// Static pages with their priorities and change frequencies
const staticPages = [
  { path: '',             priority: '1.0', changefreq: 'weekly'  },
  { path: '/products',   priority: '0.9', changefreq: 'weekly'  },
  { path: '/plain-packaging', priority: '0.9', changefreq: 'weekly' },
  { path: '/about',      priority: '0.7', changefreq: 'monthly' },
  { path: '/contact',    priority: '0.7', changefreq: 'monthly' },
  { path: '/quote',      priority: '0.8', changefreq: 'monthly' },
  { path: '/custom-pizza-boxes-ireland', priority: '0.8', changefreq: 'monthly' },
  { path: '/eco-bagasse-burger-boxes',   priority: '0.8', changefreq: 'monthly' },
  { path: '/vinyl-stickers',  priority: '0.8', changefreq: 'monthly' },
  { path: '/vinyl-banners',   priority: '0.8', changefreq: 'monthly' },
  { path: '/posters',         priority: '0.8', changefreq: 'monthly' },
  { path: '/roll-up-banners', priority: '0.8', changefreq: 'monthly' },
  { path: '/rubber-stamps',   priority: '0.8', changefreq: 'monthly' },
  { path: '/foamex-boards',   priority: '0.8', changefreq: 'monthly' },
  { path: '/correx-boards',   priority: '0.8', changefreq: 'monthly' },
  { path: '/clothing',        priority: '0.8', changefreq: 'monthly' },
  { path: '/services/leaflets', priority: '0.8', changefreq: 'monthly' },
  { path: '/services/menus',    priority: '0.8', changefreq: 'monthly' },
  { path: '/services/posters',  priority: '0.8', changefreq: 'monthly' },
  { path: '/services/vinyls',   priority: '0.8', changefreq: 'monthly' },
  { path: '/blog',              priority: '0.8', changefreq: 'weekly'  },
  { path: '/blog/pizza-box-sizes-ireland',               priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/eco-packaging-for-takeaways-ireland',   priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/leaflet-printing-ireland-guide',        priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/paper-bags-with-logo-ireland',          priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/plain-packaging-wholesale-ireland',         priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/packaging-prices-ireland-covid-shipping',  priority: '0.8', changefreq: 'monthly' },
];

function generateSitemap(productSlugs) {
  const today = new Date().toISOString().split('T')[0];

  const staticUrls = staticPages
    .map(
      ({ path, priority, changefreq }) => `
  <url>
    <loc>${SITE_URL}${path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
    )
    .join('');

  const productUrls = productSlugs
    .map(
      (slug) => `
  <url>
    <loc>${SITE_URL}/products/${slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
    )
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticUrls}
${productUrls}
</urlset>`;
}

export async function getServerSideProps({ res }) {
  const productSlugs = (products || []).map((p) => p.slug).filter(Boolean);

  const sitemap = generateSitemap(productSlugs);

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
