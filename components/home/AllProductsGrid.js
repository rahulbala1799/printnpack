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
            className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            unoptimized={process.env.NODE_ENV === 'production'}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
          </div>
        )}
        {product.moq && (
          <span className="absolute top-2 right-2 text-xs font-medium bg-white/90 backdrop-blur-sm text-gray-700 px-2 py-1 rounded-md shadow-sm">
            MOQ: {product.moq}
          </span>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 text-sm sm:text-base group-hover:text-blue-600 transition-colors line-clamp-1">
          {product.name}
        </h3>
        <p className="text-xs sm:text-sm text-gray-500 mt-1 line-clamp-2">
          {product.description}
        </p>
        <div className="mt-3 flex items-center justify-between">
          {product.price && (
            <span className="text-sm font-semibold text-gray-900">
              {product.price.replace('Starting at ', 'From ')}
            </span>
          )}
          <span className="text-xs text-blue-600 font-medium group-hover:underline flex items-center gap-1">
            View
            <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
        {product.leadTime && (
          <div className="mt-2 flex items-center gap-1 text-xs text-gray-400">
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
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            All Products
          </h2>
          <p className="mt-2 text-gray-500 max-w-2xl mx-auto">
            Browse our complete range of packaging, printing and branding solutions
          </p>
        </div>

        {categoryConfig.map((config) => {
          const categoryProducts = grouped[config.name];
          if (!categoryProducts || categoryProducts.length === 0) return null;

          return (
            <div key={config.name} className="mb-12 last:mb-0">
              {/* Category header */}
              <div className={`flex flex-col sm:flex-row sm:items-center justify-between mb-5 pb-3 border-b-2 ${config.accent}`}>
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold text-gray-900">{config.name}</h3>
                    <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${config.badge}`}>
                      {categoryProducts.length} {categoryProducts.length === 1 ? 'product' : 'products'}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mt-0.5">{config.description}</p>
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
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
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
