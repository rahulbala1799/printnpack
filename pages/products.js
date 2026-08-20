import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import products from '../data/products';
import { useRouter } from 'next/router';
import { SITE_URL } from '../lib/site';
import { buildProductListItem, parsePriceString } from '../lib/schema';
import RelatedSeoLinks from '../components/seo/RelatedSeoLinks';

const PAGE_URL = `${SITE_URL}/products`;
const PAGE_TITLE = 'Print & Packaging Products Ireland | PrintNPack Ashbourne';
const PAGE_DESCRIPTION =
  'Custom print and packaging products in Ireland — pizza boxes, paper bags, banners, leaflets, foamex and food packaging. Full-colour branding from 500 units, nationwide delivery from Ashbourne, Co. Meath.';
const PAGE_KEYWORDS =
  'printing ireland, print and packaging ireland, custom pizza boxes ireland, printed paper bags ireland, roll up banners ireland, leaflet printing ireland, foamex boards, food packaging ireland, packaging supplier ireland, PrintNPack';
const OG_IMAGE = `${SITE_URL}/images/pizza-boxes/PIZZA_BOX_1.jpg`;

// ─── Category Config ──────────────────────────────────────────────────────────
const mainGroups = [
  {
    id: 'packaging',
    name: 'Food & Retail Packaging',
    shortName: 'Packaging',
    description: 'Pizza boxes, bags, burger boxes and hospitality stock',
    categories: ['Food Packaging', 'Retail Packaging', 'Eco-Friendly Packaging', 'Shipping', 'Hospitality Products'],
  },
  {
    id: 'wide-format',
    name: 'Wide Format Printing',
    shortName: 'Wide Format',
    description: 'Banners, posters, boards and vinyl graphics',
    categories: ['Wide Format'],
  },
  {
    id: 'leaflets',
    name: 'Leaflets & Flyers',
    shortName: 'Leaflets',
    description: 'A3, A4, A5 and A6 print runs',
    categories: ['Leaflets', 'Food Service'],
  },
  {
    id: 'clothing',
    name: 'Branded Clothing',
    shortName: 'Clothing',
    description: 'Custom branded apparel for your team',
    categories: ['Apparel'],
    redirect: '/clothing',
  },
  {
    id: 'rubber-stamps',
    name: 'Rubber Stamps',
    shortName: 'Stamps',
    description: 'Custom stamps for offices and businesses',
    categories: ['Stamps'],
    redirect: '/rubber-stamps',
  },
];

const HERO_SHOWCASE_IDS = [
  'custom-pizza-boxes-ireland',
  'flat-handle-paper-bags',
  'roll-up-banner-stands',
  'eco-bagasse-burger-boxes',
];

const STAT_PILLS = [
  { value: '22+', label: 'Products' },
  { value: '500+', label: 'Unit MOQ' },
  { value: '5–7 Day', label: 'Production' },
  { value: '100%', label: 'Irish Business' },
];

const POPULAR_LINKS = [
  { label: 'Pizza Boxes', href: '/pizza-boxes-ireland' },
  { label: 'Cake Boxes', href: '/custom-cake-boxes-ireland' },
  { label: 'Paper Bags', href: '/printed-flat-handle-bags-ireland' },
  { label: 'Hot Cups', href: '/hot-cups-ireland' },
  { label: 'Custom Coffee Cups', href: '/custom-printed-coffee-cups-ireland' },
  { label: 'Luxury Paper Bags', href: '/luxury-paper-bags-ireland' },
  { label: 'Magnetic Gift Boxes', href: '/luxury-magnetic-closure-boxes-ireland' },
  { label: 'Tissue Paper', href: '/custom-printed-tissue-paper-ireland' },
  { label: 'Plain Packaging', href: '/plain-packaging' },
  { label: 'Roll-Up Banners', href: '/roll-up-banners' },
  { label: 'Custom Flags', href: '/custom-printed-flags-ireland' },
  { label: 'Premium Leaflets', href: '/premium-leaflets-ireland' },
  { label: 'Leaflets', href: '/services/leaflets' },
  { label: 'Printing Services', href: '/printing-ireland' },
];

const DELIVERY_AREAS = [
  { area: 'Dublin', detail: 'Same-week delivery to Dublin city and county' },
  { area: 'Cork & Munster', detail: 'Regular supply to Cork, Limerick and Kerry' },
  { area: 'Galway & West', detail: 'Wholesale and printed stock to Connacht' },
  { area: 'Nationwide', detail: 'All counties — Leinster, Ulster and beyond' },
];

const WHY_US = [
  {
    title: 'Quality Guaranteed',
    desc: 'Every order is proofed and reviewed before it leaves our Ashbourne warehouse.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: '5–7 Day Production',
    desc: 'Fast turnaround on custom print runs, with nationwide delivery included.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Dedicated Support',
    desc: 'A named account manager for repeat B2B and wholesale orders.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Volume Pricing',
    desc: 'Competitive per-unit pricing that improves with regular repeat orders.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const RELATED_LINKS = [
  { href: '/printing-ireland', label: 'Printing Services Ireland', desc: 'Posters, flyers, stickers and business print.' },
  { href: '/pizza-boxes-ireland', label: 'Pizza Boxes Ireland', desc: 'Plain and custom printed pizza boxes for takeaways.' },
  { href: '/custom-cake-boxes-ireland', label: 'Custom Cake Boxes', desc: 'Branded bakery packaging for cupcakes and celebration cakes.' },
  { href: '/printed-flat-handle-bags-ireland', label: 'Printed Paper Bags', desc: 'Flat handle bags with your logo, from 500 units.' },
  { href: '/hot-cups-ireland', label: 'Hot Cups & Lids Ireland', desc: 'Plain disposable coffee cups wholesale.' },
  { href: '/custom-printed-coffee-cups-ireland', label: 'Custom Printed Coffee Cups', desc: 'Branded takeaway cups Dublin & Ireland, low MOQ.' },
  { href: '/luxury-paper-bags-ireland', label: 'Luxury Paper Bags', desc: 'Premium die-cut bags for luxury brands nationwide.' },
  { href: '/luxury-magnetic-closure-boxes-ireland', label: 'Magnetic Closure Boxes', desc: 'Luxury rigid gift boxes with custom logo printing.' },
  { href: '/custom-printed-tissue-paper-ireland', label: 'Custom Tissue Paper', desc: 'Branded logo tissue for ecommerce and luxury retail.' },
  { href: '/banners-ireland', label: 'Banners Ireland', desc: 'Vinyl banners, roll-ups and extra-wide stands.' },
  { href: '/custom-printed-flags-ireland', label: 'Custom Printed Flags', desc: 'Full-colour flags for clubs & events, from 1 flag.' },
  { href: '/plain-packaging', label: 'Plain Packaging', desc: 'Stock cups, boxes, bags and gloves with volume pricing.' },
  { href: '/foamex-ireland', label: 'Foamex Boards', desc: 'Rigid display boards for retail and events.' },
  { href: '/premium-leaflets-ireland', label: 'Premium Leaflets', desc: 'Special material flyers — metallic, pearl marble & synthetic paper.' },
  { href: '/services/leaflets', label: 'Leaflets', desc: 'Flat leaflet printing for promotions and handouts.' },
  { href: '/burger-boxes-ireland', label: 'Burger Boxes', desc: 'Bagasse and printed burger boxes for food service.' },
];

const FAQ_ITEMS = [
  {
    q: 'What print and packaging products do you supply in Ireland?',
    a: 'PrintNPack supplies custom printed pizza boxes, paper bags, SOS grab bags, bagasse burger boxes, napkins, roll-up banners, vinyl banners, foamex and correx boards, posters, vinyl stickers and leaflets. We also stock plain packaging for cafés and takeaways that need volume pricing without artwork.',
  },
  {
    q: 'What is the minimum order quantity?',
    a: 'Most custom printed packaging starts from 500 units. Printed napkins typically start from 1,000. Wide format items such as banners and boards can often be ordered as single pieces. Plain packaging MOQs vary by product.',
  },
  {
    q: 'How fast is delivery across Ireland?',
    a: 'Typical production is 5–7 business days for packaging and similar for most print jobs, with nationwide delivery from our Ashbourne, Co. Meath warehouse. Weekly scheduled delivery is available for regular packaging customers.',
  },
  {
    q: 'Can you print my logo on packaging?',
    a: 'Yes. We print full-colour branding on pizza boxes, paper bags, napkins, burger boxes and more. Our design team can work from your existing artwork or create a layout for you before production.',
  },
  {
    q: 'Do you deliver to Dublin, Cork and Galway?',
    a: 'Yes. We deliver nationwide from Ashbourne, Co. Meath, including same-week delivery to Dublin city and county, and regular scheduled delivery to Cork, Limerick, Galway and every other county.',
  },
];

function productHref(product) {
  return product.url || `/products/${product.id}`;
}

function getVisibleProducts() {
  return products.filter((p) => !p.hidden);
}

function filterProducts(activeGroup, activeCategory, searchTerm = '') {
  const visible = getVisibleProducts();
  const q = searchTerm.trim().toLowerCase();

  if (q) {
    return visible.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        (p.description || '').toLowerCase().includes(q) ||
        (p.category || '').toLowerCase().includes(q)
    );
  }

  const groupCats = mainGroups.find((g) => g.id === activeGroup)?.categories || [];
  return activeCategory === 'all'
    ? visible.filter((p) => groupCats.includes(p.category))
    : visible.filter((p) => p.category === activeCategory);
}

// ─── Product Card ─────────────────────────────────────────────────────────────
const ProductCard = ({ product, priority = false }) => {
  const href = productHref(product);
  const alt = `${product.name} — custom ${product.category?.toLowerCase() || 'print'} Ireland`;

  return (
    <article className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all duration-200 flex flex-col">
      <Link href={href} className="relative block overflow-hidden bg-slate-50 aspect-[4/3]">
        {!product.imageSrc || product.imageSrc.includes('css-placeholder-image') ? (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-100">
            <span className="sr-only">{product.name}</span>
          </div>
        ) : (
          <Image
            src={product.imageSrc}
            alt={alt}
            fill
            priority={priority}
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
          />
        )}

        <div className="absolute top-2.5 left-2.5 z-10">
          <span className="text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full bg-white/90 text-gray-700 backdrop-blur-sm border border-gray-200">
            {product.category}
          </span>
        </div>

        {product.moq && (
          <div className="absolute top-2.5 right-2.5 z-10">
            <span className="text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full bg-gray-900/80 text-white">
              MOQ {product.moq.toLocaleString()}
            </span>
          </div>
        )}
      </Link>

      <div className="p-3.5 sm:p-4 flex-1 flex flex-col">
        <h2 className="font-semibold text-gray-900 text-sm sm:text-base leading-snug mb-1 group-hover:text-blue-600 transition-colors line-clamp-2">
          <Link href={href}>{product.name}</Link>
        </h2>
        <p className="text-gray-500 text-xs sm:text-sm line-clamp-2 flex-1 mb-3">
          {product.description}
        </p>

        <div className="flex items-center justify-between text-xs text-gray-400 pt-3 border-t border-gray-100">
          <span className="font-medium text-gray-700">{product.price || 'Quote on request'}</span>
          <Link
            href={href}
            className="inline-flex items-center gap-1 text-blue-600 font-semibold group-hover:gap-1.5 transition-all"
          >
            View
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
};

const ProductsPage = ({ initialGroup, initialCategory, initialProducts, catalogProducts }) => {
  const router = useRouter();
  const { group: groupParam, category: categoryParam } = router.query;
  const [activeGroup, setActiveGroup] = useState(initialGroup);
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);
  const [visibleCount, setVisibleCount] = useState(12);
  const [searchTerm, setSearchTerm] = useState('');

  const activeGroupConfig = mainGroups.find((g) => g.id === activeGroup);
  const heroProducts = HERO_SHOWCASE_IDS.map((id) => products.find((p) => p.id === id)).filter(Boolean);

  useEffect(() => {
    if (groupParam) setActiveGroup(groupParam);
    if (categoryParam) setActiveCategory(categoryParam);
  }, [groupParam, categoryParam]);

  useEffect(() => {
    setFilteredProducts(filterProducts(activeGroup, activeCategory, searchTerm));
    setVisibleCount(12);
  }, [activeGroup, activeCategory, searchTerm]);

  const handleGroupClick = (group) => {
    if (group.redirect) {
      router.push(group.redirect);
    } else {
      setActiveGroup(group.id);
      setActiveCategory('all');
      setSearchTerm('');
    }
  };

  const subCategories = activeGroupConfig?.categories || [];

  const collectionLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    inLanguage: 'en-IE',
    isPartOf: { '@type': 'WebSite', name: 'PrintNPack Ireland', url: SITE_URL },
    about: { '@type': 'Thing', name: 'Print and packaging products Ireland' },
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Products', item: PAGE_URL },
    ],
  };

  const itemListLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'PrintNPack print and packaging products',
    description: PAGE_DESCRIPTION,
    numberOfItems: catalogProducts.length,
    itemListElement: catalogProducts.map((p, i) =>
      buildProductListItem({
        position: i + 1,
        name: p.name,
        url: `${SITE_URL}${productHref(p)}`,
        price: parsePriceString(p.price),
        image: p.imageSrc && !p.imageSrc.includes('css-placeholder') ? `${SITE_URL}${p.imageSrc}` : undefined,
      })
    ),
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  return (
    <Layout>
      <Head>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
        <meta name="keywords" content={PAGE_KEYWORDS} />
        <meta name="author" content="PrintNPack Ireland" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESCRIPTION} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:site_name" content="PrintNPack Ireland" />
        <meta property="og:locale" content="en_IE" />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:alt" content="Print and packaging products Ireland – PrintNPack" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      </Head>

      <nav className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-gray-700">Home</Link></li>
            <li>/</li>
            <li className="text-gray-800 font-medium">Products</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-semibold text-orange-600 uppercase tracking-wider mb-3">
                Ireland&apos;s Print &amp; Packaging Supplier
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                Print &amp; Packaging Products Ireland
              </h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Custom <strong>printed pizza boxes</strong>, <strong>paper bags</strong>,{' '}
                <strong>banners</strong> and <strong>leaflets</strong> for Irish cafés, takeaways and
                retailers. Full-colour branding, low MOQs, and nationwide delivery from our Ashbourne,
                Co. Meath warehouse.
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                {STAT_PILLS.map((stat) => (
                  <div key={stat.label} className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-center">
                    <div className="text-sm font-bold text-gray-900">{stat.value}</div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>

              <label className="sr-only" htmlFor="product-search">Search products</label>
              <div className="relative max-w-lg mb-4">
                <svg className="w-5 h-5 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  id="product-search"
                  type="search"
                  placeholder="Search pizza boxes, bags, banners…"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-11 pr-10 py-3 rounded-xl bg-white text-gray-900 placeholder-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 text-sm"
                />
                {searchTerm && (
                  <button
                    type="button"
                    onClick={() => setSearchTerm('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
                    aria-label="Clear search"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
                >
                  Get a Custom Quote
                </Link>
                <Link
                  href="/plain-packaging"
                  className="inline-flex items-center gap-2 bg-white text-gray-800 font-semibold px-6 py-3 rounded-xl border border-gray-300 hover:border-gray-400 transition-colors"
                >
                  Browse Plain Packaging
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-1.5 mt-5">
                <span className="text-xs text-gray-400">Popular:</span>
                {POPULAR_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-xs bg-white hover:bg-blue-50 text-gray-600 hover:text-blue-700 px-2.5 py-1 rounded-full border border-gray-200 hover:border-blue-200 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg grid grid-cols-2 grid-rows-2 gap-1 bg-gray-100">
              {heroProducts.map((product, index) => (
                <div key={product.id} className="relative overflow-hidden">
                  {product.imageSrc && !product.imageSrc.includes('css-placeholder') ? (
                    <Image
                      src={product.imageSrc}
                      alt={`${product.name} Ireland`}
                      fill
                      priority={index < 2}
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Category filters */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex gap-2 overflow-x-auto no-scrollbar">
            {mainGroups.map((group) => {
              const isActive = activeGroup === group.id && !group.redirect && !searchTerm;
              return (
                <button
                  type="button"
                  key={group.id}
                  onClick={() => handleGroupClick(group)}
                  className={`flex-shrink-0 px-4 py-2 rounded-xl font-semibold text-sm transition-colors border ${
                    isActive
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:text-gray-900'
                  }`}
                >
                  {group.shortName}
                  {group.redirect && <span className="ml-1 opacity-60">↗</span>}
                </button>
              );
            })}
          </div>
          {subCategories.length > 1 && !searchTerm && (
            <div className="flex gap-2 overflow-x-auto no-scrollbar mt-2.5 pt-2.5 border-t border-gray-100">
              <button
                type="button"
                onClick={() => setActiveCategory('all')}
                className={`flex-shrink-0 text-xs font-semibold px-3 py-1 rounded-full transition-colors ${
                  activeCategory === 'all'
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-50 text-gray-600 border border-gray-200 hover:border-gray-300'
                }`}
              >
                All {activeGroupConfig?.shortName}
              </button>
              {subCategories.map((cat) => (
                <button
                  type="button"
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex-shrink-0 text-xs font-semibold px-3 py-1 rounded-full transition-colors whitespace-nowrap ${
                    activeCategory === cat
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-50 text-gray-600 border border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Product grid */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
          {activeGroup === 'packaging' && !searchTerm && (
            <Link
              href="/plain-packaging"
              className="flex items-center justify-between gap-3 bg-blue-50 border border-blue-100 rounded-xl px-4 py-3 mb-6 group hover:border-blue-200 transition-colors"
            >
              <div className="flex items-center gap-3 min-w-0">
                <span className="font-semibold text-sm text-gray-900">Plain Packaging</span>
                <span className="text-[10px] font-bold bg-blue-600 text-white px-1.5 py-0.5 rounded-full">New</span>
                <span className="hidden sm:inline text-xs text-gray-500 truncate">
                  No artwork needed — volume pricing, quote in seconds.
                </span>
              </div>
              <span className="text-blue-600 font-semibold text-xs flex-shrink-0 group-hover:translate-x-0.5 transition-transform">
                Browse →
              </span>
            </Link>
          )}

          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                {searchTerm ? `Results for "${searchTerm}"` : activeGroupConfig?.name}
              </h2>
              <p className="text-sm text-gray-500 mt-0.5">
                Showing {Math.min(visibleCount, filteredProducts.length)} of {filteredProducts.length} products
              </p>
            </div>
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="text-xs font-medium text-blue-600 hover:text-blue-700 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100 flex-shrink-0"
              >
                Clear search
              </button>
            )}
          </div>

          {filteredProducts.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">No products found</h3>
              <p className="text-gray-500 text-sm mb-6 max-w-xs">Try a different search or browse a category above.</p>
              <button
                type="button"
                onClick={() => {
                  setActiveCategory('all');
                  setSearchTerm('');
                }}
                className="bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-blue-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
                {filteredProducts.slice(0, visibleCount).map((product, index) => (
                  <ProductCard key={product.id} product={product} priority={index < 4} />
                ))}
              </div>

              {visibleCount < filteredProducts.length && (
                <div className="mt-8 text-center">
                  <button
                    type="button"
                    onClick={() => setVisibleCount((v) => v + 8)}
                    className="inline-flex items-center gap-2 bg-white border-2 border-blue-600 text-blue-600 font-semibold text-sm px-6 py-3 rounded-xl hover:bg-blue-600 hover:text-white transition-colors duration-200"
                  >
                    Load More Products
                  </button>
                  <p className="text-xs text-gray-400 mt-2">
                    {filteredProducts.length - visibleCount} more products
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-12 bg-slate-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {WHY_US.map((item) => (
              <div key={item.title} className="flex flex-col items-center text-center">
                <div className="w-11 h-11 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                  {item.icon}
                </div>
                <h3 className="text-sm font-semibold text-gray-900">{item.title}</h3>
                <p className="text-xs text-gray-500 mt-1 max-w-[16rem]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topical content — print & packaging supplier Ireland */}
      <section className="py-12 lg:py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Custom printing and packaging supplier in Ireland
          </h2>
          <p className="text-gray-600 mb-4 max-w-3xl leading-relaxed">
            PrintNPack is based in Ashbourne, Co. Meath and supplies custom-printed packaging and
            general print to restaurants, takeaways, retailers and offices across Ireland. Whether
            you need <Link href="/pizza-boxes-ireland" className="text-blue-600 hover:underline font-medium">branded pizza boxes</Link>,{' '}
            <Link href="/printed-flat-handle-bags-ireland" className="text-blue-600 hover:underline font-medium">printed paper bags</Link>,{' '}
            <Link href="/banners-ireland" className="text-blue-600 hover:underline font-medium">shop banners</Link>, or{' '}
            <Link href="/services/leaflets" className="text-blue-600 hover:underline font-medium">leaflets and flyers</Link>,
            our team handles design, full-colour print and delivery from a single supplier.
          </p>
          <p className="text-gray-600 max-w-3xl leading-relaxed">
            Most custom packaging is available from 500 units with 5–7 day production, and we also
            stock <Link href="/plain-packaging" className="text-blue-600 hover:underline font-medium">plain packaging</Link> for
            businesses that need volume pricing without artwork. For general business printing — posters,
            stickers, certificates and rubber stamps — see our{' '}
            <Link href="/printing-ireland" className="text-blue-600 hover:underline font-medium">printing services Ireland</Link> page.
          </p>
        </div>
      </section>

      {/* Delivery across Ireland */}
      <section className="py-12 lg:py-16 bg-slate-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Print &amp; packaging delivery across Ireland
          </h2>
          <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
            We deliver nationwide from our Ashbourne, Co. Meath warehouse — whether you need a single
            case of plain stock or a full custom print run with your branding.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {DELIVERY_AREAS.map(({ area, detail }) => (
              <div key={area} className="rounded-xl border border-gray-200 bg-white p-5">
                <h3 className="font-bold text-gray-900 mb-1">{area}</h3>
                <p className="text-sm text-gray-600">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 lg:py-16 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            Print &amp; packaging FAQs
          </h2>
          <div className="space-y-4">
            {FAQ_ITEMS.map((faq) => (
              <details key={faq.q} className="group bg-slate-50 rounded-xl border border-gray-200 p-5 open:shadow-sm">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center gap-4">
                  {faq.q}
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-600 mt-3 text-sm leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <RelatedSeoLinks title="Related products & guides" links={RELATED_LINKS} />

      {/* CTA */}
      <section className="py-12 lg:py-16 bg-blue-600">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Need a custom print or packaging run?
          </h2>
          <p className="text-blue-100 mb-6">
            Send artwork or a brief and we&apos;ll quote branded pizza boxes, bags, banners or leaflets
            for your Irish business.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors"
            >
              Get a Custom Quote
            </Link>
            <a
              href="tel:+353894157369"
              className="inline-flex items-center bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl border border-blue-400 hover:bg-blue-400 transition-colors"
            >
              Call +353 89 415 7369
            </a>
          </div>
        </div>
      </section>

      {/* Mobile category bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-2xl safe-area-bottom">
        <div className="flex overflow-x-auto no-scrollbar px-3 py-2 gap-2">
          {mainGroups.map((group) => (
            <button
              type="button"
              key={group.id}
              onClick={() => handleGroupClick(group)}
              className={`flex-shrink-0 px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors ${
                activeGroup === group.id && !group.redirect
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-500 bg-gray-50'
              }`}
            >
              {group.shortName}
            </button>
          ))}
        </div>
      </div>
      <div className="md:hidden h-16" />
    </Layout>
  );
};

export async function getServerSideProps({ query }) {
  const groupParam = typeof query.group === 'string' ? query.group : 'packaging';
  const categoryParam = typeof query.category === 'string' ? query.category : 'all';
  const initialGroup = mainGroups.some((g) => g.id === groupParam) ? groupParam : 'packaging';
  const groupConfig = mainGroups.find((g) => g.id === initialGroup);
  const initialCategory =
    categoryParam === 'all' || groupConfig?.categories.includes(categoryParam)
      ? categoryParam
      : 'all';

  const catalogProducts = getVisibleProducts().map((p) => ({
    id: p.id,
    name: p.name,
    url: p.url || null,
    price: p.price || null,
    imageSrc: p.imageSrc || null,
    category: p.category || null,
  }));

  return {
    props: {
      initialGroup,
      initialCategory,
      initialProducts: filterProducts(initialGroup, initialCategory),
      catalogProducts,
    },
  };
}

export default ProductsPage;
