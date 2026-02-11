import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import products from '../../data/products';

const ImageGallery = () => {
  const productGallery = products
    .filter(product => !product.hidden && product.images && product.images.length > 0)
    .slice(0, 8);

  return (
    <section className="py-16 md:py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">Product Gallery</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Browse our range of packaging products. All available in custom sizes and designs.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {productGallery.map((product, index) => (
            <Link
              key={`gallery-${product.id}-${index}`}
              href={product.url || `/products/${product.id}`}
              className="group bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-md hover:border-slate-300 transition-all duration-200"
            >
              <div className="aspect-square relative bg-white">
                <Image
                  src={product.imageSrc}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-contain p-3 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-3 border-t border-slate-100">
                <p className="text-sm font-medium text-slate-900 truncate">{product.name}</p>
                <p className="text-xs text-slate-500 truncate">{product.category}</p>
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

export default ImageGallery;
