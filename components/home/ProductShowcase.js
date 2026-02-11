"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import products from '../../data/products';

const ProductShowcase = () => {
  const mainProducts = [
    'brown-pizza-boxes',
    'twisted-handle-paper-bags',
    'flat-handle-paper-bags',
    'eco-bagasse-burger-boxes'
  ];
  
  const featuredProducts = mainProducts
    .map(id => products.find(product => product.id === id))
    .filter(product => product && !product.hidden);

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
            Popular Products
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Quality packaging and print solutions for businesses across Ireland. Low minimum orders, fast turnaround.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {featuredProducts.map((product) => (
            <Link 
              href={product.url || `/products/${product.id}`} 
              key={product.id}
              className="group bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-lg hover:border-slate-300 transition-all duration-200"
            >
              <div className="relative w-full pt-[100%] bg-slate-50 overflow-hidden">
                <Image
                  src={product.imageSrc}
                  alt={product.name}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-4">
                <p className="text-xs font-medium text-blue-600 uppercase tracking-wide mb-1">
                  {product.category}
                </p>
                <h3 className="text-sm sm:text-base font-semibold text-slate-900 mb-1 line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 line-clamp-2 mb-3">
                  {product.description}
                </p>
                <span className="inline-flex items-center text-blue-600 font-medium text-sm group-hover:gap-2 transition-all">
                  View details
                  <svg className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
            className="inline-flex items-center px-6 py-3 bg-slate-900 text-white text-sm font-medium rounded-md hover:bg-slate-800 transition-colors"
          >
            View All Products
            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
