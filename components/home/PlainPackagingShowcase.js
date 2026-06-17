import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PLAIN_PRODUCTS, CATEGORIES } from '../../data/plain-products';
import { isPlaceholderImage } from '../PackagingIcon';

// Pick products that have real images, spread across different categories
const getFeaturedPlainProducts = () => {
  const withImages = PLAIN_PRODUCTS.filter(p => !isPlaceholderImage(p.imageSrc));
  // Pick from different categories for variety
  const seen = new Set();
  const featured = [];
  for (const p of withImages) {
    if (!seen.has(p.category) && featured.length < 8) {
      featured.push(p);
      seen.add(p.category);
    }
  }
  // Fill remaining slots if needed
  for (const p of withImages) {
    if (featured.length >= 8) break;
    if (!featured.find(f => f.id === p.id)) {
      featured.push(p);
    }
  }
  return featured.slice(0, 8);
};

const DISCOUNT = 0.95;
const fmt = (n) => `\u20AC${Number(n).toFixed(2)}`;

// Top category stats
const topCategories = (() => {
  const counts = {};
  PLAIN_PRODUCTS.forEach(p => { counts[p.category] = (counts[p.category] || 0) + 1; });
  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)
    .map(([name, count]) => ({ name, count }));
})();

const PlainPackagingShowcase = () => {
  const featured = getFeaturedPlainProducts();

  return (
    <section className="py-10 sm:py-16 bg-gradient-to-b from-stone-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6 sm:mb-8">
          <div>
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-3 py-1 mb-3">
              <span className="text-amber-700 text-xs font-bold">B2B WHOLESALE</span>
              <span className="text-amber-500 text-[10px]">736+ products</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-stone-900">
              Plain Packaging &amp; Catering Supplies
            </h2>
            <p className="mt-1 sm:mt-2 text-sm sm:text-base text-stone-500 max-w-xl">
              Wholesale unbranded packaging for food service, hospitality and retail. Volume pricing from just 1 case.
            </p>
          </div>
          <Link
            href="/plain-packaging"
            className="flex items-center gap-1.5 bg-stone-900 text-white font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-black transition-colors flex-shrink-0 self-start sm:self-auto"
          >
            Browse All 736 Products
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </Link>
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
          {topCategories.map(({ name, count }) => (
            <Link
              key={name}
              href={`/plain-packaging`}
              className="text-xs font-medium bg-white border border-stone-200 text-stone-600 px-3 py-1.5 rounded-full hover:border-stone-400 hover:shadow-sm transition-all"
            >
              {name} <span className="text-stone-400">({count})</span>
            </Link>
          ))}
          <Link
            href="/plain-packaging"
            className="text-xs font-medium bg-stone-100 text-stone-500 px-3 py-1.5 rounded-full hover:bg-stone-200 transition-colors"
          >
            +{CATEGORIES.filter(c => c !== 'All').length - 6} more
          </Link>
        </div>

        {/* Product grid - 2 on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
          {featured.map((product) => {
            const lowestTier = product.caseTiers?.[product.caseTiers.length - 1];
            const price = lowestTier ? Math.round(lowestTier.pricePerCase * DISCOUNT * 100) / 100 : null;

            return (
              <Link
                key={product.id}
                href={`/plain-packaging/${product.id}`}
                className="group block bg-white rounded-xl border border-stone-200 overflow-hidden hover:shadow-lg hover:border-stone-300 transition-all duration-200"
              >
                {/* Image */}
                <div className="relative bg-stone-50 overflow-hidden" style={{ paddingBottom: '65%' }}>
                  <Image
                    src={product.imageSrc}
                    alt={product.name}
                    fill
                    className="object-contain p-3 group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    unoptimized={process.env.NODE_ENV === 'production'}
                  />
                  <span className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2 text-[9px] sm:text-[10px] font-medium bg-white/90 backdrop-blur-sm text-stone-500 px-1.5 sm:px-2 py-0.5 rounded-md">
                    {product.category}
                  </span>
                </div>

                {/* Info */}
                <div className="p-2 sm:p-3">
                  <h3 className="font-semibold text-stone-900 text-xs sm:text-sm leading-snug line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  <div className="mt-1.5 flex items-baseline justify-between gap-1">
                    {price && (
                      <span className="text-xs sm:text-sm font-bold text-stone-900">
                        {fmt(price)}<span className="text-[10px] sm:text-xs font-normal text-stone-400">/case</span>
                      </span>
                    )}
                    {product.qtyPerCase && (
                      <span className="text-[9px] sm:text-[10px] text-stone-400 flex-shrink-0">{product.qtyPerCase}/case</span>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-6 sm:mt-8 bg-stone-900 rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-white font-bold text-sm sm:text-base">Need wholesale catering supplies?</p>
            <p className="text-stone-400 text-xs sm:text-sm mt-0.5">57 categories, 4-tier volume pricing, no minimum order</p>
          </div>
          <div className="flex gap-2">
            <Link
              href="/plain-packaging"
              className="bg-white text-stone-900 font-bold text-xs sm:text-sm px-4 sm:px-6 py-2.5 rounded-xl hover:bg-stone-100 transition-colors"
            >
              Browse Catalogue
            </Link>
            <Link
              href="/contact"
              className="bg-stone-700 text-white font-bold text-xs sm:text-sm px-4 sm:px-6 py-2.5 rounded-xl hover:bg-stone-600 transition-colors"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlainPackagingShowcase;
