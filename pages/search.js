import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { searchSite } from '../lib/site-search';

export default function Search() {
  const router = useRouter();
  const { q } = router.query;
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!q) {
      setResults([]);
      setLoading(false);
      return undefined;
    }
    setResults(searchSite(q));
    setLoading(false);
    return undefined;
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
                {results.map((product) => (
                  <Link key={product.id} href={product.href} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="relative h-48 bg-slate-100">
                      {product.image ? (
                        <Image src={product.image} alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                      ) : null}
                    </div>
                    <div className="p-4">
                      <p className="text-sm font-medium text-blue-600">{product.kind}{product.category ? ` · ${product.category}` : ''}</p>
                      <h2 className="text-xl font-semibold mb-4">{product.name}</h2>
                      <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded">
                        View page
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </Layout>
  );
} 