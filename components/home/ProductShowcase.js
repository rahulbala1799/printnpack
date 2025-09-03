"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import products from '../../data/products';

const ProductShowcase = () => {
  // Define the 4 main products to showcase
  const mainProducts = [
    'brown-pizza-boxes',
    'twisted-handle-paper-bags',
    'flat-handle-paper-bags',
    'eco-bagasse-burger-boxes'
  ];
  
  // Find the products from the product data
  const featuredProducts = mainProducts
    .map(id => products.find(product => product.id === id))
    .filter(product => product && !product.hidden);

  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Our Premium Products
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our range of high-quality packaging solutions designed for businesses that value presentation and sustainability.
          </p>
        </div>

        {/* 2x2 Product Grid - Same on mobile and desktop */}
        <div className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {featuredProducts.map((product) => (
            <Link 
              href={product.url || `/products/${product.id}`} 
              key={product.id}
              className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Product Image - Large and prominent */}
              <div className="relative w-full pt-[100%] bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden">
                <Image
                  src={product.imageSrc}
                  alt={product.name}
                  fill
                  className="object-contain p-3 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Product Info */}
              <div className="p-4 flex flex-col flex-grow">
                <div className="text-xs font-medium text-blue-600 uppercase mb-1">
                  {product.category}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 line-clamp-2 mb-2 flex-grow">
                  {product.description}
                </p>
                <span className="inline-flex items-center text-blue-600 font-medium text-sm">
                  View details
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Link 
            href="/products" 
            className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase; 