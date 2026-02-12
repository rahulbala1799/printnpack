import React, { useState, useEffect, useRef } from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import products from '../data/products';
import { useRouter } from 'next/router';

// ─── Category Config ───────────────────────────────────────────────────────────
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
  },
  {
    id: 'rubber-stamps',
    name: 'Rubber Stamps',
    description: 'Custom stamps for businesses',
    categories: ['Stamps'],
    redirect: '/rubber-stamps',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
];

// ─── Product Card ──────────────────────────────────────────────────────────────
const ProductCard = ({ product }) => {
  return (
    <div className="group bg-white rounded-xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col">
      {/* Image */}
      <Link href={product.url || `/products/${product.id}`} className="relative block overflow-hidden bg-stone-50" style={{ paddingBottom: '68%' }}>
        <div className="absolute inset-0">
          {!product.imageSrc || product.imageSrc.includes('css-placeholder-image') ? (
            <div className="absolute inset-0 css-placeholder banner flex items-center justify-center bg-gradient-to-br from-stone-100 to-stone-200">
              <span className="sr-only">{product.name}</span>
            </div>
          ) : (
            <Image
              src={product.imageSrc}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          )}
        </div>

        {/* MOQ badge */}
        {product.moq && (
          <div className="absolute top-2 right-2 z-10">
            <span className="text-[9px] font-medium px-1.5 py-0.5 rounded-full bg-white/90 text-stone-500 border border-stone-200 backdrop-blur-sm leading-none">
              MOQ {product.moq.toLocaleString()}
            </span>
          </div>
        )}
      </Link>

      {/* Content */}
      <div className="p-2.5 flex-1 flex flex-col">
        <h3 className="font-semibold text-stone-900 text-[11px] leading-tight mb-1.5 line-clamp-2">
          {product.name}
        </h3>

        {/* Price row */}
        <div className="flex items-end justify-between mt-auto mb-2">
          {product.price ? (
            <div>
              <div className="text-[9px] text-stone-400 leading-none mb-0.5">From</div>
              <div className="text-xs font-bold text-stone-900 leading-none">{product.price}</div>
            </div>
          ) : (
            <div className="text-[10px] font-medium text-stone-400">POA</div>
          )}
          {product.leadTime && (
            <div className="text-right">
              <div className="text-[9px] text-stone-400 leading-none mb-0.5">Delivery</div>
              <div className="text-[10px] font-semibold text-stone-500 leading-none">{product.leadTime}</div>
            </div>
          )}
        </div>

        {/* CTA */}
        <Link
          href={product.url || `/products/${product.id}`}
          className="w-full flex items-center justify-center gap-1 py-1.5 px-2 rounded-lg text-[10px] font-semibold text-white bg-stone-800 hover:bg-stone-700 active:scale-95 transition-all duration-200"
        >
          View
          <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

// ─── Category Tab ──────────────────────────────────────────────────────────────
const CategoryTab = ({ group, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
      isActive
        ? 'bg-stone-900 text-white shadow-sm'
        : 'bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-800'
    }`}
  >
    <span>{group.icon}</span>
    <span className="whitespace-nowrap">{group.name}</span>
    {group.redirect && (
      <svg className="w-3 h-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    )}
  </button>
);

// ─── Main Page ─────────────────────────────────────────────────────────────────
const ProductsPage = () => {
  const router = useRouter();
  const { group: groupParam, category: categoryParam } = router.query;
  const [activeGroup, setActiveGroup] = useState('packaging');
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(12);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);
  const tabsRef = useRef(null);

  const activeGroupConfig = mainGroups.find(g => g.id === activeGroup);

  // URL params
  useEffect(() => {
    if (groupParam) setActiveGroup(groupParam);
    if (categoryParam) setActiveCategory(categoryParam);
  }, [groupParam, categoryParam]);

  // Persist
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const sg = localStorage.getItem('activeProductGroup');
      const sc = localStorage.getItem('activeProductCategory');
      if (sg) setActiveGroup(sg);
      if (sc) setActiveCategory(sc);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('activeProductGroup', activeGroup);
      localStorage.setItem('activeProductCategory', activeCategory);
    }
  }, [activeGroup, activeCategory]);

  // Filter
  useEffect(() => {
    const visible = products.filter(p => !p.hidden);
    const groupCats = mainGroups.find(g => g.id === activeGroup)?.categories || [];

    let filtered = activeCategory === 'all'
      ? visible.filter(p => groupCats.includes(p.category))
      : visible.filter(p => p.category === activeCategory);

    if (searchTerm) {
      const q = searchTerm.toLowerCase();
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(q) ||
        (p.description || '').toLowerCase().includes(q)
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

  const subCategories = activeGroupConfig?.categories || [];

  return (
    <Layout>
      <Head>
        <title>B2B Print & Packaging Products | PrintNPack Ireland</title>
        <meta
          name="description"
          content="Browse PrintNPack's full range of B2B print and packaging products. Food packaging, wide format, leaflets, clothing and more. Fast delivery across Ireland."
        />
      </Head>

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-stone-100">
        <div className="container mx-auto px-4 py-10 md:py-14">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs text-stone-400 mb-5">
            <Link href="/" className="hover:text-stone-700 transition-colors">Home</Link>
            <svg className="w-3.5 h-3.5 text-stone-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
            </svg>
            <span className="text-stone-700 font-medium">Products</span>
          </nav>

          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-widest text-stone-400 uppercase mb-2">Ireland&apos;s B2B Print Partner</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-3 text-stone-900 tracking-tight">
              Print & Packaging
            </h1>
            <p className="text-stone-500 text-base md:text-lg max-w-xl mb-7 leading-relaxed">
              Consistent quality. Competitive pricing. Reliable delivery across Ireland.
            </p>

            {/* Search */}
            <div className={`relative max-w-md transition-all duration-200 ${searchFocused ? 'scale-[1.01]' : ''}`}>
              <div className={`flex items-center bg-stone-50 border rounded-xl overflow-hidden transition-all duration-200 ${searchFocused ? 'border-stone-400 ring-2 ring-stone-200' : 'border-stone-200'}`}>
                <svg className="w-4 h-4 text-stone-400 ml-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search products…"
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                  className="flex-1 bg-transparent px-3 py-3.5 text-stone-800 placeholder-stone-400 text-sm outline-none"
                />
                {searchTerm && (
                  <button onClick={() => setSearchTerm('')} className="mr-3 text-stone-400 hover:text-stone-600 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Stats strip */}
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            {[
              { value: '22+', label: 'Products' },
              { value: 'MOQ 500', label: 'Min. order' },
              { value: '5–7 days', label: 'Delivery' },
              { value: '100%', label: 'Irish business' },
            ].map(stat => (
              <div key={stat.label} className="flex items-baseline gap-1.5">
                <span className="text-base font-bold text-stone-900">{stat.value}</span>
                <span className="text-xs text-stone-400">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Category Tabs (Sticky) ─────────────────────────────────────────── */}
      <div className="sticky top-0 z-30 bg-white/97 backdrop-blur-md border-b border-stone-100 shadow-sm">
        <div className="container mx-auto px-4 py-2.5">
          <div
            ref={tabsRef}
            className="flex gap-2 overflow-x-auto no-scrollbar"
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

      {/* ── Sub-category pills ─────────────────────────────────────────────── */}
      {activeGroupConfig && !activeGroupConfig.redirect && subCategories.length > 1 && (
        <div className="bg-stone-50 border-b border-stone-100">
          <div className="container mx-auto px-4 py-2.5 flex items-center gap-2 overflow-x-auto no-scrollbar">
            <button
              onClick={() => setActiveCategory('all')}
              className={`flex-shrink-0 text-xs font-medium px-3 py-1.5 rounded-full transition-all ${
                activeCategory === 'all'
                  ? 'bg-stone-900 text-white'
                  : 'bg-white text-stone-500 border border-stone-200 hover:border-stone-300 hover:text-stone-700'
              }`}
            >
              All {activeGroupConfig.name}
            </button>
            {subCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 text-xs font-medium px-3 py-1.5 rounded-full transition-all whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-stone-900 text-white'
                    : 'bg-white text-stone-500 border border-stone-200 hover:border-stone-300 hover:text-stone-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── Products Grid ──────────────────────────────────────────────────── */}
      <main className="bg-stone-50 min-h-screen">
        <div className="container mx-auto px-4 py-7 md:py-10">

          {/* Count row */}
          <div className="flex items-center justify-between mb-5">
            <p className="text-xs text-stone-400">
              <span className="font-semibold text-stone-700">{Math.min(visibleCount, filteredProducts.length)}</span>
              {' '}of{' '}
              <span className="font-semibold text-stone-700">{filteredProducts.length}</span>{' '}
              products
            </p>
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="text-xs font-medium text-stone-600 hover:text-stone-800 flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-stone-200"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Clear &ldquo;{searchTerm}&rdquo;
              </button>
            )}
          </div>

          {/* Empty state */}
          {filteredProducts.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-stone-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-stone-800 mb-1">No products found</h3>
              <p className="text-stone-400 text-sm mb-5 max-w-xs">Try a different search or browse another category.</p>
              <button
                onClick={() => { setActiveCategory('all'); setSearchTerm(''); }}
                className="bg-stone-900 text-white text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-stone-800 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <>
              {/* Grid */}
              <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-3">
                {filteredProducts.slice(0, visibleCount).map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                ))}
              </div>

              {/* Load more */}
              {visibleCount < filteredProducts.length && (
                <div className="mt-10 text-center">
                  <button
                    onClick={() => setVisibleCount(v => v + 8)}
                    className="inline-flex items-center gap-2 bg-white border border-stone-200 text-stone-700 font-medium text-sm px-6 py-3 rounded-xl hover:bg-stone-50 hover:border-stone-300 transition-all duration-200 shadow-sm"
                  >
                    Load more
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <p className="text-xs text-stone-400 mt-2">
                    {filteredProducts.length - visibleCount} more products
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </main>

      {/* ── Trust Strip ───────────────────────────────────────────────────── */}
      <section className="bg-white border-t border-stone-100 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              {
                icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>,
                title: 'Quality Guaranteed',
                desc: 'Every order reviewed before dispatch',
              },
              {
                icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>,
                title: '5–7 Day Delivery',
                desc: 'Nationwide delivery across Ireland',
              },
              {
                icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>,
                title: 'Dedicated Support',
                desc: 'Account managers for B2B clients',
              },
              {
                icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>,
                title: 'Competitive Pricing',
                desc: 'Volume discounts for regular orders',
              },
            ].map(item => (
              <div key={item.title} className="flex flex-col items-center gap-2.5">
                <div className="w-11 h-11 rounded-xl bg-stone-100 text-stone-500 flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <div className="font-semibold text-stone-900 text-sm">{item.title}</div>
                  <div className="text-xs text-stone-400 mt-0.5">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="bg-stone-900 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 text-center max-w-xl">
          <p className="text-xs font-semibold tracking-widest text-stone-400 uppercase mb-3">Custom Orders Welcome</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">
            Need a Custom Solution?
          </h2>
          <p className="text-stone-400 text-base mb-7 max-w-md mx-auto leading-relaxed">
            Our design team creates bespoke products tailored to your exact requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-stone-900 font-semibold py-3 px-6 rounded-xl hover:bg-stone-100 transition-all duration-200 text-sm"
            >
              Get a Quote
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-stone-700 text-stone-300 hover:border-stone-500 hover:text-white font-medium py-3 px-6 rounded-xl transition-all duration-200 text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* ── Mobile: sticky bottom filter bar ─────────────────────────────── */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/97 backdrop-blur-md border-t border-stone-100 shadow-lg safe-area-bottom">
        <div className="flex overflow-x-auto no-scrollbar px-2 py-1.5 gap-1">
          {mainGroups.map(group => (
            <button
              key={group.id}
              onClick={() => handleGroupClick(group)}
              className={`flex-shrink-0 flex flex-col items-center gap-1 px-3 py-2 rounded-xl text-xs font-medium transition-all min-w-[64px] ${
                activeGroup === group.id && !group.redirect
                  ? 'bg-stone-900 text-white'
                  : 'text-stone-400 hover:text-stone-700'
              }`}
            >
              <span>{group.icon}</span>
              <span className="whitespace-nowrap leading-none text-[10px]">{group.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Mobile bottom padding */}
      <div className="md:hidden h-20" />
    </Layout>
  );
};

export default ProductsPage;
