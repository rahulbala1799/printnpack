import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import products from '../data/products';
import { FaSearch } from 'react-icons/fa';

// ProductCard component (same as on products page for consistency)
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

const SearchPage = () => {
  const router = useRouter();
  const { q } = router.query;
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (q) {
      setIsLoading(true);
      const query = q.toLowerCase();
      
      // Filter products based on search query
      const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        (product.features && product.features.some(feature => 
          feature.toLowerCase().includes(query)
        ))
      );
      
      setSearchResults(filteredProducts);
      setIsLoading(false);
    }
  }, [q]);

  return (
    <Layout>
      <Head>
        <title>{q ? `Search results for "${q}"` : 'Search'} - PrintNPack</title>
        <meta 
          name="description" 
          content="Search PrintNPack's range of premium packaging solutions and printing services."
        />
      </Head>

      {/* Search Header */}
      <div className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              {q ? `Search Results for "${q}"` : 'Search Products'}
            </h1>
            
            {/* Search form for refinement */}
            <form 
              className="max-w-xl mx-auto relative" 
              onSubmit={(e) => {
                e.preventDefault();
                const input = e.target.elements.search.value;
                if (input.trim()) {
                  router.push(`/search?q=${encodeURIComponent(input.trim())}`);
                }
              }}
            >
              <input
                type="text"
                name="search"
                placeholder="Search for products..."
                defaultValue={q || ''}
                className="w-full py-3 px-5 pl-12 rounded-full text-blue-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-600">
                <FaSearch size={18} />
              </div>
              <button 
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition-colors"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Results section */}
      <div className="container mx-auto px-4 py-12">
        {isLoading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading results...</p>
          </div>
        ) : (
          <>
            {q && (
              <div className="mb-8 text-center">
                <p className="text-gray-600">
                  {searchResults.length === 0
                    ? 'No products found matching your search.'
                    : `Found ${searchResults.length} product${searchResults.length !== 1 ? 's' : ''} matching your search.`}
                </p>
              </div>
            )}

            {searchResults.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {searchResults.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : q ? (
              <div className="text-center py-12 bg-gray-50 rounded-xl">
                <div className="text-6xl mb-4">🔍</div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">No results found</h2>
                <p className="text-gray-600 mb-6">
                  We couldn't find any products matching "{q}". 
                  <br />Try different keywords or browse our product categories.
                </p>
                <Link href="/products" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-200">
                  Browse All Products
                </Link>
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600">Enter a search term to find products.</p>
              </div>
            )}
          </>
        )}
      </div>

      {/* Product categories suggestion */}
      {q && searchResults.length === 0 && (
        <div className="container mx-auto px-4 py-8 mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">Browse Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {['Food Containers', 'Bags', 'Labels', 'Marketing Materials', 'Signage'].map((category) => (
              <Link href={`/products?category=${category}`} key={category} className="flex items-center p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all">
                <span className="text-blue-600 flex-grow">{category}</span>
                <svg 
                  className="w-5 h-5 text-blue-600" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      )}
    </Layout>
  );
};

export default SearchPage; 