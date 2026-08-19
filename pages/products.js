import React, { useState, useEffect, useRef } from 'react';
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
const PAGE_TITLE = 'Custom Print & Packaging Products Ireland | PrintNPack';
const PAGE_DESCRIPTION =
  'Browse custom print and packaging products in Ireland — pizza boxes, paper bags, banners, leaflets, foamex and food packaging. Printed from 500 units with nationwide delivery from Ashbourne.';
const PAGE_KEYWORDS =
  'print and packaging Ireland, custom pizza boxes Ireland, printed paper bags, roll up banners Ireland, leaflets printing, foamex boards, food packaging Ireland, PrintNPack';
const OG_IMAGE = `${SITE_URL}/images/pizza-boxes/PIZZA_BOX_1.jpg`;

// ─── Category Config ──────────────────────────────────────────────────────────
const mainGroups = [
  {
    id: 'packaging',
    name: 'Packaging',
    description: 'Food, retail & hospitality packaging',
    categories: ['Food Packaging', 'Retail Packaging', 'Eco-Friendly Packaging', 'Shipping', 'Hospitality Products'],
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    color: 'orange',
    accentBg: 'bg-orange-500',
    accentText: 'text-orange-500',
    accentBorder: 'border-orange-500',
    lightBg: 'bg-orange-50',
    badge: 'bg-orange-100 text-orange-700',
  },
  {
    id: 'wide-format',
    name: 'Wide Format',
    description: 'Banners, posters, boards & vinyl',
    categories: ['Wide Format'],
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    color: 'blue',
    accentBg: 'bg-blue-600',
    accentText: 'text-blue-600',
    accentBorder: 'border-blue-600',
    lightBg: 'bg-blue-50',
    badge: 'bg-blue-100 text-blue-700',
  },
  {
    id: 'leaflets',
    name: 'Leaflets & Flyers',
    description: 'A3, A4, A5 & A6 print runs',
    categories: ['Leaflets', 'Food Service'],
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    color: 'violet',
    accentBg: 'bg-violet-600',
    accentText: 'text-violet-600',
    accentBorder: 'border-violet-600',
    lightBg: 'bg-violet-50',
    badge: 'bg-violet-100 text-violet-700',
  },
  {
    id: 'clothing',
    name: 'Clothing',
    description: 'Custom branded apparel',
    categories: ['Apparel'],
    redirect: '/clothing',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4l2 2h4l2-2h4a2 2 0 012 2v12a4 4 0 01-4 4H7z" />
      </svg>
    ),
    color: 'rose',
    accentBg: 'bg-rose-500',
    accentText: 'text-rose-500',
    accentBorder: 'border-rose-500',
    lightBg: 'bg-rose-50',
    badge: 'bg-rose-100 text-rose-700',
  },
  {
    id: 'rubber-stamps',
    name: 'Rubber Stamps',
    description: 'Custom stamps for offices',
    categories: ['Stamps'],
    redirect: '/rubber-stamps',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    color: 'emerald',
    accentBg: 'bg-emerald-600',
    accentText: 'text-emerald-600',
    accentBorder: 'border-emerald-600',
    lightBg: 'bg-emerald-50',
    badge: 'bg-emerald-100 text-emerald-700',
  },
];

const HERO_SHOWCASE_IDS = [
  'custom-pizza-boxes-ireland',
  'flat-handle-paper-bags',
  'eco-bagasse-burger-boxes',
  'roll-up-banner-stands',
  'foamex-boards',
  'leaflets-a5',
];

const POPULAR_LINKS = [
  { label: 'Pizza Boxes', href: '/pizza-boxes-ireland' },
  { label: 'Paper Bags', href: '/printed-flat-handle-bags-ireland' },
  { label: 'Plain Packaging', href: '/plain-packaging' },
  { label: 'Roll-Up Banners', href: '/roll-up-banners' },
  { label: 'Leaflets', href: '/services/leaflets' },
];

const RELATED_LINKS = [
  { href: '/pizza-boxes-ireland', label: 'Pizza Boxes Ireland', desc: 'Plain and custom printed pizza boxes for takeaways.' },
  { href: '/printed-flat-handle-bags-ireland', label: 'Printed Paper Bags', desc: 'Flat handle bags with your logo, from 500 units.' },
  { href: '/banners-ireland', label: 'Banners Ireland', desc: 'Vinyl banners, roll-ups and extra-wide stands.' },
  { href: '/plain-packaging', label: 'Plain Packaging', desc: 'Stock cups, boxes, bags and gloves with volume pricing.' },
  { href: '/foamex-ireland', label: 'Foamex Boards', desc: 'Rigid display boards for retail and events.' },
  { href: '/services/leaflets', label: 'Leaflet Printing', desc: 'A6 to A3 flyers for restaurants and retail.' },
  { href: '/napkins-ireland', label: 'Printed Napkins', desc: 'Custom napkins and linen-feel hospitality stock.' },
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
];

function productHref(product) {
  return product.url || `/products/${product.id}`;
}

function groupForProduct(product) {
  return mainGroups.find((g) => g.categories.includes(product.category));
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
const ProductCard = ({ product, groupConfig, priority = false }) => {
  const badge = groupConfig?.badge || 'bg-orange-100 text-orange-700';
  const accent = groupConfig?.accentBg || 'bg-orange-500';
  const href = productHref(product);
  const alt = `${product.name} — custom ${product.category?.toLowerCase() || 'print'} Ireland`;

  return (
    <article className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex flex-col">
      <Link href={href} className="relative block overflow-hidden bg-gray-50 aspect-[4/3]">
        {!product.imageSrc || product.imageSrc.includes('css-placeholder-image') ? (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
            <span className="sr-only">{product.name}</span>
          </div>
        ) : (
          <Image
            src={product.imageSrc}
            alt={alt}
            fill
            priority={priority}
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        )}

        <div className="absolute top-2.5 left-2.5 z-10">
          <span className={`text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full ${badge}`}>
            {product.category}
          </span>
        </div>

        {product.moq && (
          <div className="absolute top-2.5 right-2.5 z-10">
            <span className="text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full bg-black/70 text-white">
              MOQ {product.moq.toLocaleString()}
            </span>
          </div>
        )}
      </Link>

      <div className="p-3.5 sm:p-4 flex-1 flex flex-col">
        <h2 className="font-bold text-gray-900 text-sm sm:text-base leading-snug mb-1 group-hover:text-orange-600 transition-colors line-clamp-2">
          <Link href={href}>{product.name}</Link>
        </h2>
        <p className="text-gray-500 text-xs sm:text-sm line-clamp-2 flex-1 mb-3">
          {product.description}
        </p>

        <div className="flex items-center justify-between text-xs text-gray-400 mb-3 pb-3 border-b border-gray-100">
          {product.price && (
            <span className="font-medium text-gray-700">{product.price}</span>
          )}
          {product.leadTime && (
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {product.leadTime}
            </span>
          )}
        </div>

        <Link
          href={href}
          className={`w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold text-white transition-all duration-200 ${accent} hover:opacity-90 active:scale-95`}
        >
          View Product
          <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </article>
  );
};

const CategoryTab = ({ group, isActive, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`flex-shrink-0 flex items-center gap-2 px-3.5 py-2 rounded-xl font-semibold text-sm transition-all duration-200 border ${
      isActive
        ? `${group.accentBg} text-white border-transparent shadow-md`
        : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:text-gray-900'
    }`}
  >
    <span className={isActive ? 'text-white' : group.accentText}>{group.icon}</span>
    <span className="whitespace-nowrap">{group.name}</span>
    {group.redirect && (
      <svg className="w-3.5 h-3.5 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    )}
  </button>
);

const ProductsPage = ({ initialGroup, initialCategory, initialProducts, catalogProducts }) => {
  const router = useRouter();
  const { group: groupParam, category: categoryParam } = router.query;
  const [activeGroup, setActiveGroup] = useState(initialGroup);
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);
  const [visibleCount, setVisibleCount] = useState(12);
  const [searchTerm, setSearchTerm] = useState('');
  const tabsRef = useRef(null);

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
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESCRIPTION} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:locale" content="en_IE" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      </Head>

      {/* Compact visual hero — products stay above the fold */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-orange-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 sm:py-5">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-orange-600 transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-gray-800 font-medium">Products</span>
          </nav>

          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-6 lg:gap-10 items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-orange-600 mb-2.5">
                Ashbourne · Nationwide Ireland
              </p>
              <h1 className="text-2xl sm:text-3xl lg:text-[2.15rem] font-extrabold leading-tight tracking-tight text-gray-900 mb-2">
                Custom Print &amp; Packaging{' '}
                <span className="text-orange-500">Products in Ireland</span>
              </h1>
              <p className="text-sm sm:text-base text-gray-600 max-w-xl mb-3 leading-relaxed">
                Printed pizza boxes, paper bags, banners, leaflets and food packaging for cafés, takeaways and retailers.
                Low MOQs, custom branding, delivery from Ashbourne, Co. Meath.
              </p>

              <label className="sr-only" htmlFor="product-search">Search products</label>
              <div className="relative max-w-lg mb-3">
                <svg className="w-5 h-5 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  id="product-search"
                  type="search"
                  placeholder="Search pizza boxes, bags, banners…"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-11 pr-10 py-3 rounded-xl bg-white text-gray-900 placeholder-gray-400 shadow-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent text-sm"
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

              <div className="flex flex-wrap items-center gap-1.5 mb-3">
                <span className="text-xs text-gray-400">Popular:</span>
                {POPULAR_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-xs bg-white hover:bg-orange-50 text-gray-600 hover:text-orange-700 px-2.5 py-1 rounded-full border border-gray-200 hover:border-orange-200 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <ul className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500">
                <li>From 500 units</li>
                <li>5–7 day production</li>
                <li>Irish-owned</li>
              </ul>
            </div>

            <div className="hidden md:grid grid-cols-2 gap-2.5">
              {heroProducts.slice(0, 4).map((product, index) => (
                <Link
                  key={product.id}
                  href={productHref(product)}
                  className="relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow min-h-[132px]"
                >
                  {product.imageSrc && !product.imageSrc.includes('css-placeholder') ? (
                    <Image
                      src={product.imageSrc}
                      alt={`${product.name} Ireland`}
                      fill
                      priority={index < 3}
                      sizes={index === 0 ? '320px' : '140px'}
                      className="object-cover"
                    />
                  ) : null}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-2.5">
                    <p className="text-white text-xs font-semibold leading-tight line-clamp-2">{product.name}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sticky category + sub-category bar */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-2.5">
          <div ref={tabsRef} className="flex gap-2 overflow-x-auto no-scrollbar">
            {mainGroups.map((group) => (
              <CategoryTab
                key={group.id}
                group={group}
                isActive={activeGroup === group.id && !group.redirect && !searchTerm}
                onClick={() => handleGroupClick(group)}
              />
            ))}
          </div>
          {subCategories.length > 1 && !searchTerm && (
            <div className="flex gap-2 overflow-x-auto no-scrollbar mt-2 pt-2 border-t border-gray-100">
              <button
                type="button"
                onClick={() => setActiveCategory('all')}
                className={`flex-shrink-0 text-xs font-semibold px-3 py-1 rounded-full transition-all ${
                  activeCategory === 'all'
                    ? `${activeGroupConfig.accentBg} text-white`
                    : 'bg-gray-50 text-gray-600 border border-gray-200 hover:border-gray-300'
                }`}
              >
                All {activeGroupConfig?.name}
              </button>
              {subCategories.map((cat) => (
                <button
                  type="button"
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex-shrink-0 text-xs font-semibold px-3 py-1 rounded-full transition-all whitespace-nowrap ${
                    activeCategory === cat
                      ? `${activeGroupConfig.accentBg} text-white`
                      : 'bg-gray-50 text-gray-600 border border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <section className="bg-gray-50">
        <div className="container mx-auto px-4 py-5 md:py-7">
          {activeGroup === 'packaging' && !searchTerm && (
            <Link
              href="/plain-packaging"
              className="flex items-center justify-between gap-3 bg-gray-950 text-white rounded-xl px-4 py-3 mb-5 group hover:bg-gray-900 transition-colors"
            >
              <div className="flex items-center gap-3 min-w-0">
                <span className="font-bold text-sm">Plain Packaging</span>
                <span className="text-[10px] font-bold bg-orange-500 text-white px-1.5 py-0.5 rounded-full">New</span>
                <span className="hidden sm:inline text-xs text-gray-400 truncate">
                  No artwork needed — volume pricing, quote in seconds.
                </span>
              </div>
              <span className="text-orange-400 font-bold text-xs flex-shrink-0 group-hover:translate-x-0.5 transition-transform">
                Browse →
              </span>
            </Link>
          )}

          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-gray-500">
              {searchTerm ? (
                <>
                  Search results for <span className="font-semibold text-gray-900">&ldquo;{searchTerm}&rdquo;</span>
                  {' — '}
                </>
              ) : null}
              Showing{' '}
              <span className="font-semibold text-gray-900">
                {Math.min(visibleCount, filteredProducts.length)}
              </span>{' '}
              of{' '}
              <span className="font-semibold text-gray-900">{filteredProducts.length}</span>{' '}
              products
            </p>
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="text-xs font-medium text-orange-600 hover:text-orange-700 bg-orange-50 px-3 py-1.5 rounded-full border border-orange-200"
              >
                Clear search
              </button>
            )}
          </div>

          {filteredProducts.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <h2 className="text-xl font-bold text-gray-800 mb-2">No products found</h2>
              <p className="text-gray-500 text-sm mb-6 max-w-xs">Try a different search or browse a category above.</p>
              <button
                type="button"
                onClick={() => {
                  setActiveCategory('all');
                  setSearchTerm('');
                }}
                className="bg-orange-500 text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-orange-600 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
                {filteredProducts.slice(0, visibleCount).map((product, index) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    groupConfig={groupForProduct(product) || activeGroupConfig}
                    priority={index < 4}
                  />
                ))}
              </div>

              {visibleCount < filteredProducts.length && (
                <div className="mt-8 text-center">
                  <button
                    type="button"
                    onClick={() => setVisibleCount((v) => v + 8)}
                    className="inline-flex items-center gap-2 bg-white border-2 border-orange-500 text-orange-600 font-semibold text-sm px-6 py-3 rounded-xl hover:bg-orange-500 hover:text-white transition-all duration-200"
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

      <section className="bg-white border-t border-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { title: 'Quality Guaranteed', desc: 'Every order reviewed before dispatch' },
              { title: '5–7 Day Production', desc: 'Nationwide delivery across Ireland' },
              { title: 'Dedicated Support', desc: 'Account managers for B2B clients' },
              { title: 'Volume Pricing', desc: 'Discounts for regular orders' },
            ].map((item) => (
              <div key={item.title}>
                <div className="font-bold text-gray-900 text-sm">{item.title}</div>
                <div className="text-xs text-gray-500 mt-0.5">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 border-t border-slate-200 py-10 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
            Print and packaging FAQs
          </h2>
          <dl className="space-y-4">
            {FAQ_ITEMS.map(({ q, a }) => (
              <div key={q} className="bg-white rounded-xl border border-gray-200 p-4 sm:p-5">
                <dt className="font-semibold text-gray-900 text-sm sm:text-base mb-2">{q}</dt>
                <dd className="text-sm text-gray-600 leading-relaxed">{a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <RelatedSeoLinks title="Related products & guides" links={RELATED_LINKS} />

      <section className="bg-gray-950 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3 tracking-tight">
            Need a custom print or packaging run?
          </h2>
          <p className="text-gray-300 text-base mb-7">
            Send artwork or a brief and we will quote branded pizza boxes, bags, banners or leaflets for your Irish business.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl text-sm"
            >
              Get a Custom Quote
            </Link>
            <a
              href="tel:+353894157369"
              className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 hover:bg-white/15 text-white font-semibold py-3 px-6 rounded-xl text-sm"
            >
              Call +353 89 415 7369
            </a>
          </div>
        </div>
      </section>

      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-2xl safe-area-bottom">
        <div className="flex overflow-x-auto no-scrollbar px-3 py-2 gap-2">
          {mainGroups.map((group) => (
            <button
              type="button"
              key={group.id}
              onClick={() => handleGroupClick(group)}
              className={`flex-shrink-0 flex flex-col items-center gap-1 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeGroup === group.id && !group.redirect
                  ? `${group.accentBg} text-white shadow-md`
                  : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              <span className={activeGroup === group.id && !group.redirect ? 'text-white' : group.accentText}>
                {group.icon}
              </span>
              <span className="whitespace-nowrap leading-none">{group.name}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="md:hidden h-20" />
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
