import React from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import products from '../data/products';

// ProductCard component for rendering each product in the grid
const ProductCard = ({ product }) => {
  return (
    <Link href={`/products/${product.id}`} className="block">
      <div className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
        <div className="relative h-56">
          <Image
            src={product.imageSrc}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-5">
          <span className="text-sm text-blue-600 font-medium">{product.category}</span>
          <h3 className="font-bold text-lg mt-1">{product.name}</h3>
          <p className="mt-2 text-gray-600 line-clamp-2">{product.description}</p>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-blue-600 font-medium">View Details</span>
            <svg
              className="w-5 h-5 text-blue-600 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

const ProductsPage = () => {
  return (
    <Layout>
      <Head>
        <title>Products - PrintNPack Premium Packaging Solutions</title>
        <meta 
          name="description" 
          content="Explore PrintNPack's range of premium packaging solutions including food containers, retail bags, marketing materials and more." 
        />
      </Head>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="absolute inset-0 bg-particles opacity-20"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Product Range</h1>
            <p className="text-xl mb-8">
              High-quality packaging solutions designed to help your business stand out
            </p>
            <div className="w-24 h-1 bg-white mx-auto rounded"></div>
          </div>
        </div>
      </div>

      {/* Filter Bar (future enhancement) */}
      <div className="bg-gray-100 py-4 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between">
            <div className="text-lg font-medium text-gray-700 mb-2 md:mb-0">
              Showing all <span className="text-blue-700">{products.length}</span> products
            </div>
            <div className="flex space-x-2">
              <span className="text-gray-600">Sort by:</span>
              <select className="bg-white border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Popularity</option>
                <option>Newest first</option>
                <option>Price: Low to high</option>
                <option>Price: High to low</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Packaging Solution?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            We specialize in creating custom packaging solutions tailored to your specific requirements.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50 transition duration-200">
            Contact Our Design Team
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default ProductsPage; 