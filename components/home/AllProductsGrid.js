import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import products from '../../data/products';

// Category order and configuration
const categoryConfig = [
  {
    name: 'Food Packaging',
    description: 'Custom printed food packaging for restaurants, takeaways & delivery',
    accent: 'border-orange-500',
    badge: 'bg-orange-100 text-orange-700',
  },
  {
    name: 'Retail Packaging',
    description: 'Premium branded bags for retail, boutiques & events',
    accent: 'border-blue-500',
    badge: 'bg-blue-100 text-blue-700',
  },
  {
    name: 'Eco-Friendly Packaging',
    description: 'Sustainable and biodegradable packaging solutions',
    accent: 'border-green-500',
    badge: 'bg-green-100 text-green-700',
  },
  {
    name: 'Wide Format',
    description: 'Large format printing for signage, displays & events',
    accent: 'border-purple-500',
    badge: 'bg-purple-100 text-purple-700',
  },
  {
    name: 'Stickers & Labels',
    description: 'Vinyl stickers, decals and labels on a roll',
    accent: 'border-pink-500',
    badge: 'bg-pink-100 text-pink-700',
  },
  {
    name: 'Leaflets',
    description: 'High quality leaflets & flyers in all sizes',
    accent: 'border-sky-500',
    badge: 'bg-sky-100 text-sky-700',
  },
  {
    name: 'Hospitality Products',
    description: 'Branded items for restaurants, cafés & hotels',
    accent: 'border-amber-500',
    badge: 'bg-amber-100 text-amber-700',
  },
  {
    name: 'Branded Items',
    description: 'Custom branded products for your business',
    accent: 'border-rose-500',
    badge: 'bg-rose-100 text-rose-700',
  },
];

const ProductCard = ({ product }) => {
  const href = product.url || `/products/${product.id}`;

  return (
    <Link href={href} className="group block bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-200">
      {/* Product Image */}
      <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
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
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-200 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
          </div>
        )}
        {product.moq && (
          <span className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 text-[9px] sm:text-xs font-medium bg-white/90 backdrop-blur-sm text-gray-700 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md shadow-sm">
            MOQ: {product.moq}
          </span>
        )}
      </div>

      {/* Product Info */}
      <div className="p-2.5 sm:p-4">
        <h3 className="font-semibold text-gray-900 text-xs sm:text-base leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">
          {product.name}
        </h3>
        <p className="text-[10px] sm:text-sm text-gray-500 mt-0.5 sm:mt-1 line-clamp-2 hidden sm:block">
          {product.description}
        </p>
        <div className="mt-1.5 sm:mt-3 flex items-center justify-between">
          {product.price && (
            <span className="text-xs sm:text-sm font-semibold text-gray-900">
              {product.price.replace('Starting at ', 'From ')}
            </span>
          )}
          <span className="text-[10px] sm:text-xs text-blue-600 font-medium group-hover:underline flex items-center gap-0.5 sm:gap-1">
            View
            <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
        {product.leadTime && (
          <div className="mt-1 sm:mt-2 flex items-center gap-1 text-[10px] sm:text-xs text-gray-400 hidden sm:flex">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {product.leadTime}
          </div>
        )}
      </div>
    </Link>
  );
};

const AllProductsGrid = () => {
  // Filter out hidden products
  const visibleProducts = products.filter(p => !p.hidden);

  // Group by category
  const grouped = {};
  visibleProducts.forEach(product => {
    if (!grouped[product.category]) {
      grouped[product.category] = [];
    }
    grouped[product.category].push(product);
  });

  return (
    <section className="py-8 sm:py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-10">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
            All Products
          </h2>
          <p className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-500 max-w-2xl mx-auto">
            Browse our complete range of packaging, printing and branding solutions
          </p>
        </div>

        {categoryConfig.map((config) => {
          const categoryProducts = grouped[config.name];
          if (!categoryProducts || categoryProducts.length === 0) return null;

          return (
            <div key={config.name} className="mb-8 sm:mb-12 last:mb-0">
              {/* Category header */}
              <div className={`flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-5 pb-2 sm:pb-3 border-b-2 ${config.accent}`}>
                <div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <h3 className="text-base sm:text-xl font-bold text-gray-900">{config.name}</h3>
                    <span className={`text-[10px] sm:text-xs font-medium px-2 sm:px-2.5 py-0.5 rounded-full ${config.badge}`}>
                      {categoryProducts.length} {categoryProducts.length === 1 ? 'product' : 'products'}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-500 mt-0.5">{config.description}</p>
                </div>
                <Link
                  href={`/products?category=${encodeURIComponent(config.name)}`}
                  className="text-sm text-blue-600 hover:text-blue-800 font-medium mt-2 sm:mt-0 flex items-center gap-1"
                >
                  View all
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Product grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-6">
                {categoryProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AllProductsGrid;
