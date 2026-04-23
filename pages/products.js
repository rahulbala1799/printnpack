import React, { useState, useEffect, useRef } from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import products from '../data/products';
import { useRouter } from 'next/router';

// ─── Category Config ──────────────────────────────────────────────────────────
const mainGroups = [
  {
    id: 'all',
    name: 'All Products',
    description: 'Everything we print and package',
    categories: 'all',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    ),
    color: 'gray',
    accentBg: 'bg-gray-900',
    accentText: 'text-gray-900',
    accentBorder: 'border-gray-900',
    lightBg: 'bg-gray-50',
    badge: 'bg-gray-100 text-gray-700',
  },
  {
    id: 'packaging',
    name: 'Packaging',
    description: 'Premium food, retail & hospitality packaging',
    categories: ['Food Packaging', 'Retail Packaging', 'Eco-Friendly Packaging', 'Shipping', 'Hospitality Products'],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    description: 'Banners, posters, boards & vinyl graphics',
    categories: ['Wide Format'],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    description: 'High-impact A3, A4, A5 & A6 print runs',
    categories: ['Leaflets', 'Food Service'],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    description: 'Custom branded apparel for your team',
    categories: ['Apparel'],
    redirect: '/clothing',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    description: 'Custom stamps for offices & businesses',
    categories: ['Stamps'],
    redirect: '/rubber-stamps',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

// ─── Helpers ──────────────────────────────────────────────────────────────────
const parsePrice = (raw) => {
  if (!raw) return null;
  const quoteOnly = /quote|request/i.test(raw);
  if (quoteOnly) return { quoteOnly: true };
  const m = raw.match(/€\s*([\d.,]+)\s*(?:per\s+)?([a-zA-Z]+)?/i);
  if (!m) return { label: raw };
  return { amount: m[1], unit: m[2] ? m[2].toLowerCase() : null };
};

const shortLeadTime = (raw) => {
  if (!raw) return null;
  return raw.replace(/business\s+days?/i, 'days').replace(/\s+standard.*$/i, '').trim();
};

// ─── Product Card ─────────────────────────────────────────────────────────────
const ProductCard = ({ product }) => {
  const href = product.url || `/products/${product.id}`;
  const price = parsePrice(product.price);
  const lead = shortLeadTime(product.leadTime);

  return (
    <Link
      href={href}
      className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-200 flex flex-col"
    >
      {/* Image — smaller aspect */}
      <div className="relative block overflow-hidden bg-gray-50 aspect-[16/10]">
        {!product.imageSrc || product.imageSrc.includes('css-placeholder-image') ? (
          <div className="absolute inset-0 css-placeholder banner flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
            <span className="sr-only">{product.name}</span>
          </div>
        ) : (
          <Image
            src={product.imageSrc}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          />
        )}

        <span className="absolute top-2 left-2 z-10 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white/95 text-gray-700 shadow-sm border border-gray-100">
          {product.category}
        </span>

        {product.moq && (
          <span className="absolute top-2 right-2 z-10 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-gray-900/80 text-white backdrop-blur-sm">
            MOQ {product.moq.toLocaleString()}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="px-3.5 pt-3 pb-3 flex-1 flex flex-col">
        <h3 className="font-semibold text-gray-900 text-[14px] leading-snug mb-1 group-hover:text-orange-600 transition-colors line-clamp-2 min-h-[2.6em]">
          {product.name}
        </h3>
        <p className="text-gray-500 text-xs line-clamp-2 mb-3 leading-relaxed">
          {product.description}
        </p>

        {/* Price + Lead time strip */}
        <div className="mt-auto grid grid-cols-2 divide-x divide-gray-100 border-t border-gray-100 -mx-3.5 px-0">
          <div className="px-3 py-2.5">
            <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">From</div>
            {price?.quoteOnly ? (
              <div className="font-bold text-gray-900 text-sm leading-tight mt-0.5">On quote</div>
            ) : price?.amount ? (
              <div className="leading-tight mt-0.5">
                <span className="font-bold text-gray-900 text-base tabular-nums">€{price.amount}</span>
                {price.unit && <span className="text-[11px] text-gray-500 ml-0.5">/{price.unit}</span>}
              </div>
            ) : price?.label ? (
              <div className="font-semibold text-gray-900 text-xs leading-tight mt-0.5 line-clamp-1">{price.label}</div>
            ) : (
              <div className="font-bold text-gray-900 text-sm leading-tight mt-0.5">On quote</div>
            )}
          </div>
          <div className="px-3 py-2.5">
            <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider flex items-center gap-1">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Lead time
            </div>
            <div className="font-bold text-gray-900 text-sm leading-tight mt-0.5">
              {lead || 'On request'}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

// ─── Category Tab ─────────────────────────────────────────────────────────────
const CategoryTab = ({ group, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`flex-shrink-0 flex items-center gap-2.5 px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-200 border-2 ${
      isActive
        ? `${group.accentBg} text-white border-transparent shadow-lg shadow-${group.color}-200`
        : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:text-gray-900'
    }`}
  >
    <span className={isActive ? 'text-white' : group.accentText}>
      {group.icon}
    </span>
    <span className="whitespace-nowrap">{group.name}</span>
    {group.redirect && (
      <svg className="w-3.5 h-3.5 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    )}
  </button>
);

// ─── Main Page ────────────────────────────────────────────────────────────────
const ProductsPage = () => {
  const router = useRouter();
  const { group: groupParam, category: categoryParam } = router.query;
  const [activeGroup, setActiveGroup] = useState('all');
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(15);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);
  const tabsRef = useRef(null);

  const activeGroupConfig = mainGroups.find(g => g.id === activeGroup);

  // URL params
  useEffect(() => {
    if (groupParam) setActiveGroup(groupParam);
    if (categoryParam) setActiveCategory(categoryParam);
  }, [groupParam, categoryParam]);


  // Filter
  useEffect(() => {
    const visible = products.filter(p => !p.hidden);
    const group = mainGroups.find(g => g.id === activeGroup);
    const isAll = group?.categories === 'all';
    const groupCats = isAll ? null : (group?.categories || []);

    let filtered;
    if (isAll) {
      filtered = visible;
    } else if (activeCategory === 'all') {
      filtered = visible.filter(p => groupCats.includes(p.category));
    } else {
      filtered = visible.filter(p => p.category === activeCategory);
    }

    if (searchTerm) {
      const q = searchTerm.toLowerCase();
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(q) ||
        (p.description || '').toLowerCase().includes(q) ||
        (p.category || '').toLowerCase().includes(q)
      );
    }

    setFilteredProducts(filtered);
    setVisibleCount(12);
  }, [activeGroup, activeCategory, searchTerm]);

  const handleGroupClick = (group) => {
    if (group.redirect) {
      router.push(group.redirect);
    } else {
      setActiveGroup(group.id);
      setActiveCategory('all');
    }
  };

  // Sub-categories for active group ('all' group has no sub-pill bar)
  const subCategories = Array.isArray(activeGroupConfig?.categories) ? activeGroupConfig.categories : [];

  return (
    <Layout>
      <Head>
        <title>B2B Print & Packaging Products | PrintNPack Ireland</title>
        <meta
          name="description"
          content="Browse PrintNPack's full range of B2B print and packaging products. Food packaging, wide format, leaflets, clothing and more. Fast delivery across Ireland."
        />
      </Head>

      {/* ── Compact Page Header ──────────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 md:py-5">
          <nav className="flex items-center gap-1.5 text-xs text-gray-500 mb-2.5" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-orange-600 transition-colors">Home</Link>
            <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7"/></svg>
            <span className="text-gray-700 font-medium">Products</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-6">
            <div className="min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h1 className="text-xl sm:text-2xl md:text-[28px] font-extrabold text-gray-900 leading-tight tracking-tight">
                  Print &amp; Packaging <span className="text-orange-500">Catalogue</span>
                </h1>
              </div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500">
                <span className="inline-flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Ireland B2B print partner
                </span>
                <span className="text-gray-300">•</span>
                <span>22+ products</span>
                <span className="text-gray-300">•</span>
                <span>5–7 day delivery</span>
                <span className="text-gray-300 hidden sm:inline">•</span>
                <span className="hidden sm:inline">Volume pricing</span>
              </div>
            </div>

            <div className="md:w-[360px] lg:w-[400px] w-full">
              <div className={`relative flex items-center bg-gray-50 border rounded-xl overflow-hidden transition-all ${searchFocused ? 'border-orange-400 ring-2 ring-orange-400/20 bg-white' : 'border-gray-200 hover:border-gray-300'}`}>
                <svg className="w-4 h-4 text-gray-400 ml-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search packaging, banners, leaflets…"
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                  className="flex-1 bg-transparent px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none"
                />
                {searchTerm && (
                  <button onClick={() => setSearchTerm('')} className="mr-2 p-1 text-gray-400 hover:text-gray-700 rounded-md hover:bg-gray-100" aria-label="Clear search">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Category Tabs (Sticky) ────────────────────────────────────────── */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div
            ref={tabsRef}
            className="flex gap-2.5 overflow-x-auto no-scrollbar pb-0.5"
          >
            {mainGroups.map(group => (
              <CategoryTab
                key={group.id}
                group={group}
                isActive={activeGroup === group.id && !group.redirect}
                onClick={() => handleGroupClick(group)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── Sub-category bar (only when there are sub-categories) ────────── */}
      {activeGroupConfig && !activeGroupConfig.redirect && subCategories.length > 1 && (
        <div className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-2.5 flex gap-2 overflow-x-auto no-scrollbar">
            <button
              onClick={() => setActiveCategory('all')}
              className={`flex-shrink-0 text-xs font-semibold px-3 py-1.5 rounded-full transition-all ${
                activeCategory === 'all'
                  ? `${activeGroupConfig.accentBg} text-white shadow-sm`
                  : 'bg-gray-50 text-gray-600 border border-gray-200 hover:border-gray-300 hover:text-gray-900'
              }`}
            >
              All {activeGroupConfig.name.toLowerCase()}
            </button>
            {subCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 text-xs font-semibold px-3 py-1.5 rounded-full transition-all whitespace-nowrap ${
                  activeCategory === cat
                    ? `${activeGroupConfig.accentBg} text-white shadow-sm`
                    : 'bg-gray-50 text-gray-600 border border-gray-200 hover:border-gray-300 hover:text-gray-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── Products Grid ────────────────────────────────────────────────── */}
      <main className="bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 py-5 md:py-7">

          {/* Plain packaging promo card — shown when Packaging tab is active */}
          {activeGroup === 'packaging' && !searchTerm && (
            <Link
              href="/plain-packaging"
              className="flex items-center justify-between gap-4 bg-gray-950 text-white rounded-2xl px-5 py-3.5 mb-5 group hover:bg-gray-900 transition-colors border border-white/5 hover:border-orange-500/30"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="font-bold text-sm text-white">Plain Packaging</span>
                    <span className="text-xs font-bold bg-orange-500 text-white px-2 py-0.5 rounded-full">New</span>
                  </div>
                  <div className="text-xs text-gray-400">No artwork? No problem. Order plain stock with volume pricing — build your quote in seconds.</div>
                </div>
              </div>
              <div className="flex items-center gap-1 text-orange-400 font-bold text-xs flex-shrink-0 group-hover:translate-x-0.5 transition-transform">
                Browse
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          )}

          {/* Count + Sort row */}
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-gray-500">
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
                onClick={() => setSearchTerm('')}
                className="text-xs font-medium text-orange-600 hover:text-orange-700 flex items-center gap-1.5 bg-orange-50 px-3 py-1.5 rounded-full border border-orange-200"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Clear &ldquo;{searchTerm}&rdquo;
              </button>
            )}
          </div>

          {/* Empty state */}
          {filteredProducts.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <div className="w-20 h-20 rounded-full bg-orange-50 border-2 border-orange-100 flex items-center justify-center mb-5">
                <svg className="w-10 h-10 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">No products found</h3>
              <p className="text-gray-500 text-sm mb-6 max-w-xs">Try a different search term or browse a different category above.</p>
              <button
                onClick={() => { setActiveCategory('all'); setSearchTerm(''); }}
                className="bg-orange-500 text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-orange-600 transition-colors shadow-sm"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <>
              {/* Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
                {filteredProducts.slice(0, visibleCount).map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {/* Load more */}
              {visibleCount < filteredProducts.length && (
                <div className="mt-10 text-center">
                  <button
                    onClick={() => setVisibleCount(v => v + 10)}
                    className="inline-flex items-center gap-2 bg-white border-2 border-orange-500 text-orange-600 font-semibold text-sm px-6 py-3 rounded-xl hover:bg-orange-500 hover:text-white transition-all duration-200 shadow-sm"
                  >
                    Load More Products
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <p className="text-xs text-gray-400 mt-2">
                    {filteredProducts.length - visibleCount} more products
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </main>

      {/* ── Trust Strip ─────────────────────────────────────────────────── */}
      <section className="bg-white border-t border-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            {[
              {
                icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>,
                title: 'Quality Guaranteed',
                desc: 'Every order reviewed before dispatch',
              },
              {
                icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>,
                title: '5–7 Day Delivery',
                desc: 'Fast nationwide delivery across Ireland',
              },
              {
                icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>,
                title: 'Dedicated Support',
                desc: 'Account managers for B2B clients',
              },
              {
                icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>,
                title: 'Competitive Pricing',
                desc: 'Volume discounts for regular orders',
              },
            ].map(item => (
              <div key={item.title} className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">{item.title}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section className="bg-gray-950 text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 text-orange-300 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-5">
            Custom Orders Welcome
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
            Need a Custom Solution?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto">
            Our design team specialises in creating bespoke products tailored to your exact requirements. Get in touch today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 px-7 rounded-xl transition-all duration-200 shadow-lg shadow-orange-900/40 text-sm"
            >
              Get a Custom Quote
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 hover:bg-white/15 text-white font-semibold py-3.5 px-7 rounded-xl transition-all duration-200 text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* ── Mobile: sticky bottom filter bar ────────────────────────────── */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-2xl safe-area-bottom">
        <div className="flex overflow-x-auto no-scrollbar px-3 py-2 gap-2">
          {mainGroups.map(group => (
            <button
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

      {/* Mobile bottom padding so content isn't hidden by fixed bar */}
      <div className="md:hidden h-20" />
    </Layout>
  );
};

export default ProductsPage;
