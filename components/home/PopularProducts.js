import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import products from '../../data/products';

const popularProductIds = [
  'custom-pizza-boxes-ireland',
  'flat-handle-paper-bags',
  'twisted-handle-paper-bags',
  'eco-bagasse-burger-boxes',
  'roll-up-banner-stands',
  'foamex-boards',
  'vinyl-stickers',
  'leaflets-a5',
];

const PopularProducts = () => {
  const popularProducts = popularProductIds
    .map(id => products.find(p => p.id === id))
    .filter(Boolean);

  return (
    <section className="py-8 sm:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-5 sm:mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
              Most Popular
            </h2>
            <p className="mt-0.5 sm:mt-1 text-xs sm:text-base text-gray-500">Our best-selling products</p>
          </div>
          <Link
            href="/products"
            className="hidden sm:flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
          >
            View all products
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-6">
          {popularProducts.map((product) => {
            const href =
              product.id === 'custom-pizza-boxes-ireland'
                ? '/pizza-boxes-ireland'
                : product.url || `/products/${product.id}`;
            return (
              <Link
                key={product.id}
                href={href}
                className="group block bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-blue-200 transition-all duration-200"
              >
                {/* Image */}
                <div className="relative aspect-square bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden">
                  {product.imageSrc && !product.imageSrc.includes('css-placeholder') ? (
                    <Image
                      src={product.imageSrc}
                      alt={product.name}
                      fill
                      className="object-contain p-3 sm:p-4 group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      unoptimized={process.env.NODE_ENV === 'production'}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                      </div>
                    </div>
                  )}
                  {/* Category tag */}
                  <span className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2 text-[9px] sm:text-xs font-medium bg-white/90 backdrop-blur-sm text-gray-600 px-1.5 sm:px-2 py-0.5 rounded-md">
                    {product.category}
                  </span>
                </div>

                {/* Info */}
                <div className="p-2.5 sm:p-4">
                  <h3 className="font-semibold text-gray-900 text-xs sm:text-base leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                  {product.price && (
                    <p className="mt-1 text-xs sm:text-sm font-semibold text-blue-600">
                      {product.price.replace('Starting at ', 'From ')}
                    </p>
                  )}
                  <div className="mt-1.5 sm:mt-2 flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-gray-400">
                    {product.moq && (
                      <span className="flex items-center gap-0.5 sm:gap-1">
                        <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                        MOQ: {product.moq}
                      </span>
                    )}
                    {product.leadTime && (
                      <span className="flex items-center gap-0.5 sm:gap-1 hidden sm:flex">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {product.leadTime}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Mobile view all link */}
        <div className="mt-4 sm:mt-6 text-center sm:hidden">
          <Link
            href="/products"
            className="inline-flex items-center gap-1 text-xs font-medium text-blue-600"
          >
            View all products
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
