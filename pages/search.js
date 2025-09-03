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
            <Link href={product.url || `/products/${product.id}`} className="block">
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

export default function Search() {
  const router = useRouter();
  const { q } = router.query;
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (q) {
      const searchTerm = q.toLowerCase();
      const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
      );
      setResults(filteredProducts);
    } else {
      setResults([]);
    }
    setLoading(false);
  }, [q]);

  return (
    <Layout>
      <Head>
        <title>Search Results - PrintNPack</title>
        <meta name="description" content={`Search results for ${q || 'products'} at PrintNPack`} />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Search Results</h1>
        
        {loading ? (
          <div className="text-center py-8">Loading...</div>
        ) : (
          <>
            {q && (
              <p className="text-gray-600 mb-6">
                Showing results for "{q}"
              </p>
            )}
            
            {results.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-600">No results found.</p>
                <p className="text-gray-600 mt-2">Try different keywords or browse our products.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.map(product => (
                  <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="relative h-48">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                      <p className="text-gray-600 mb-4">{product.description}</p>
                      <a
                        href={product.url || `/products/${product.id}`}
                        className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                      >
                        View Details
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </Layout>
  );
} 