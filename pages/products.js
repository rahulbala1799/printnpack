import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import products from '../data/products';

// Improved ProductCard component with animations and better styling
const ProductCard = ({ product }) => {
  return (
    <div className="group bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
      <Link href={`/products/${product.id}`} className="block relative h-60 overflow-hidden bg-gray-100">
        {!product.imageSrc || product.imageSrc.includes('css-placeholder-image') ? (
          <div className="absolute inset-0 css-placeholder banner flex items-center justify-center">
            <span className="sr-only">{product.name}</span>
          </div>
        ) : (
          <Image
            src={product.imageSrc}
            alt={product.name}
            fill
            className="object-contain group-hover:scale-105 transition-transform duration-500"
          />
        )}
        <div className="absolute top-4 left-4">
          <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
            {product.category}
          </span>
        </div>
      </Link>
      <div className="p-5 flex-grow flex flex-col">
        <h3 className="font-bold text-lg mt-1 text-gray-800">{product.name}</h3>
        <p className="mt-2 text-gray-600 text-sm line-clamp-3 flex-grow">{product.description}</p>
        <div className="mt-4 pt-4 border-t border-gray-100">
          <Link href={`/products/${product.id}`} className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-800 transition-colors">
            View Details
            <svg
              className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
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
          </Link>
        </div>
      </div>
    </div>
  );
};

// Group products by category for easier filtering
const groupProductsByCategory = (products) => {
  const categories = [];
  const groupedProducts = {};
  
  products.forEach(product => {
    if (!categories.includes(product.category)) {
      categories.push(product.category);
      groupedProducts[product.category] = [];
    }
    groupedProducts[product.category].push(product);
  });
  
  return { categories, groupedProducts };
};

// Main group categories for the main navigation
const mainGroups = [
  { id: 'packaging', name: 'Packaging', categories: ['Food Packaging', 'Retail Packaging', 'Eco-Friendly Packaging', 'Shipping', 'Hospitality Products'] },
  { id: 'wide-format', name: 'Wide Format', categories: ['Wide Format'] },
  { id: 'leaflets', name: 'Leaflets and Flyers', categories: ['Leaflets', 'Food Service'] },
];

const ProductsPage = () => {
  const [activeGroup, setActiveGroup] = useState('packaging');
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(12);
  const [searchTerm, setSearchTerm] = useState('');
  const { categories, groupedProducts } = groupProductsByCategory(products);
  
  // Load saved category from localStorage on initial render
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedGroup = localStorage.getItem('activeProductGroup');
      const savedCategory = localStorage.getItem('activeProductCategory');
      
      if (savedGroup) {
        setActiveGroup(savedGroup);
      }
      
      if (savedCategory) {
        setActiveCategory(savedCategory);
      }
    }
  }, []);
  
  // Save category selections to localStorage when they change
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('activeProductGroup', activeGroup);
      localStorage.setItem('activeProductCategory', activeCategory);
    }
  }, [activeGroup, activeCategory]);
  
  // Filter products based on active group, category, and search term
  useEffect(() => {
    let filtered = [];
    
    if (activeCategory === 'all') {
      // Show all products from the active group
      const groupCategories = mainGroups.find(g => g.id === activeGroup)?.categories || [];
      filtered = products.filter(product => groupCategories.includes(product.category));
    } else {
      // Show products from the specific category
      filtered = products.filter(product => product.category === activeCategory);
    }
    
    // Apply search filter if there's a search term
    if (searchTerm) {
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredProducts(filtered);
    setVisibleProducts(12); // Reset visible products when filter changes
  }, [activeGroup, activeCategory, searchTerm]);
  
  const loadMoreProducts = () => {
    setVisibleProducts(prev => prev + 8);
  };
  
  return (
    <Layout>
      <Head>
        <title>Products - PrintNPack Premium Packaging Solutions</title>
        <meta 
          name="description" 
          content="Explore PrintNPack's range of premium packaging solutions including food containers, retail bags, marketing materials and more." 
        />
      </Head>

      {/* Hero Section with animated background */}
      <div className="relative bg-gradient-to-r from-blue-900 via-indigo-800 to-blue-700 text-white py-16 overflow-hidden">
        <div className="absolute inset-0">
          <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(15)">
                <rect width="100%" height="100%" fill="none" />
                <path d="M0 20 L40 20 M20 0 L20 40" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
          <div className="absolute inset-0 bg-blue-800 opacity-30 animate-pulse"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Product Range</h1>
            <p className="text-xl mb-8">
              High-quality products designed to help your business stand out
            </p>
            <div className="w-24 h-1 bg-blue-400 mx-auto rounded"></div>
          </div>
        </div>
      </div>

      {/* Main Category Navigation Tabs */}
      <div className="sticky top-0 z-30 bg-white shadow-md px-4">
        <div className="container mx-auto flex flex-wrap justify-center">
          {mainGroups.map((group) => (
            <button
              key={group.id}
              onClick={() => {
                setActiveGroup(group.id);
                setActiveCategory('all');
              }}
              className={`py-5 px-6 font-bold text-lg relative transition-colors duration-300 ${
                activeGroup === group.id 
                  ? 'text-blue-600' 
                  : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              {group.name}
              {activeGroup === group.id && (
                <span className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 transition-all duration-300"></span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Sub-Category Navigation + Search */}
      <div className="bg-gray-50 py-4 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === 'all'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-100'
                }`}
              >
                All
              </button>
              {mainGroups.find(g => g.id === activeGroup)?.categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full md:w-64"
              />
              <svg 
                className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid with counters and load more */}
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 flex justify-between items-center">
          <div className="text-lg text-gray-700">
            Showing <span className="font-semibold text-blue-700">{Math.min(visibleProducts, filteredProducts.length)}</span> of <span className="font-semibold text-blue-700">{filteredProducts.length}</span> products
          </div>
        </div>
        
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-700 mb-2">No products found</h3>
            <p className="text-gray-500 mb-4">Try changing your search or filter criteria</p>
            <button 
              onClick={() => {
                setActiveCategory('all');
                setSearchTerm('');
              }}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.slice(0, visibleProducts).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            
            {visibleProducts < filteredProducts.length && (
              <div className="mt-12 text-center">
                <button
                  onClick={loadMoreProducts}
                  className="inline-flex items-center px-6 py-3 border border-blue-600 rounded-md shadow-sm text-base font-medium text-blue-600 bg-white hover:bg-blue-50 transition-colors"
                >
                  Load More Products
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-800 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto">
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
              <p className="text-blue-100 text-lg mb-6">
                We specialize in creating custom products tailored to your specific requirements. Our design team is ready to help bring your vision to life.
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-base font-bold rounded-md text-white hover:bg-white/10 transition duration-200">
                Contact Our Design Team
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="w-40 h-40 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductsPage; 