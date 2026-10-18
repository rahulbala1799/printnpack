import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { FaSearch, FaTimes } from 'react-icons/fa';
import products from '../../data/products';
import { getPlainProductPath } from '../../lib/plain-product-urls';

function isUsableImage(src) {
  return Boolean(src) && !src.includes('css-placeholder') && !src.includes('logos/logo');
}

function printedMatches(term) {
  return products
    .filter((product) => product && !product.hidden && product.name)
    .filter((product) => {
      const haystack = [
        product.name,
        product.category,
        product.description,
        ...(product.features || []),
        ...(product.searchAliases || []),
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();
      return haystack.includes(term);
    })
    .map((product) => ({
      id: `print:${product.id}`,
      name: product.name,
      category: product.category || 'Custom print',
      href: product.url || `/products/${product.id}`,
      image: isUsableImage(product.imageSrc) ? product.imageSrc : '',
      kind: 'Custom print',
    }));
}

const SearchBar = ({ isMobile = false, onClose, className = '', variant = 'default' }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchRef = useRef(null);
  const router = useRouter();
  
  useEffect(() => {
    // Handle clicks outside the search component to close it
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchFocused(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  useEffect(() => {
    const term = searchTerm.trim().toLowerCase();
    if (term.length < 2) {
      setSearchResults([]);
      return undefined;
    }
    let cancelled = false;
    const printed = printedMatches(term).slice(0, 5);
    setSearchResults(printed);
    import('../../data/plain-products').then(({ PLAIN_PRODUCTS }) => {
      if (cancelled) return;
      const plain = PLAIN_PRODUCTS.filter((product) => {
        const haystack = `${product.name} ${product.code || ''} ${product.category || ''}`.toLowerCase();
        return haystack.includes(term);
      })
        .slice(0, 4)
        .map((product) => ({
          id: `plain:${product.id}`,
          name: product.name,
          category: product.category || 'Plain stock',
          href: getPlainProductPath(product),
          image: isUsableImage(product.imageSrc) ? product.imageSrc : '',
          kind: 'Plain stock',
        }));
      setSearchResults([...printed, ...plain]);
    }).catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [searchTerm]);
  
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm('');
      setIsSearchFocused(false);
      if (onClose && isMobile) onClose();
    }
  };
  
  const handleResultClick = () => {
    setSearchTerm('');
    setSearchResults([]);
    setIsSearchFocused(false);
    if (onClose && isMobile) onClose();
  };
  
  const clearSearch = () => {
    setSearchTerm('');
    setSearchResults([]);
  };

  return (
    <div 
      ref={searchRef} 
      className={`relative ${isMobile ? 'w-full' : className || 'w-64 md:w-72 xl:w-80'}`}
    >
      <form onSubmit={handleSearch} className="relative">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsSearchFocused(true)}
          className={`w-full pl-11 pr-10 focus:outline-none ${
            isMobile
              ? 'rounded-lg border border-white/20 bg-white/10 py-2 text-white placeholder-white/70 focus:border-white/50 focus:ring-1 focus:ring-blue-500'
              : variant === 'header'
                ? 'h-11 rounded-full border border-slate-200 bg-slate-50 text-[15px] text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20'
                : 'rounded-lg border border-gray-300 bg-white/90 py-2 text-blue-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
          }`}
        />
        <div className={`absolute inset-y-0 left-0 flex items-center pl-3 ${isMobile ? 'text-white/70' : 'text-blue-600'}`}>
          <FaSearch />
        </div>
        {searchTerm && (
          <button
            type="button"
            onClick={clearSearch}
            className={`absolute inset-y-0 right-0 flex items-center pr-3 ${isMobile ? 'text-white/70' : 'text-gray-500'}`}
          >
            <FaTimes />
          </button>
        )}
      </form>

      {/* Search Results Dropdown */}
      {isSearchFocused && searchResults.length > 0 && (
        <div className={`absolute z-50 w-full mt-1 bg-white shadow-lg rounded-lg overflow-hidden max-h-[80vh] overflow-y-auto ${isMobile ? 'border border-blue-500' : 'border border-gray-200'}`}>
          <div className="divide-y divide-gray-100">
            {searchResults.map((product) => (
              <Link
                href={product.href}
                key={product.id}
                onClick={handleResultClick}
                className="flex items-center p-3 hover:bg-gray-50 transition-colors"
              >
                <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded bg-slate-100">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  ) : null}
                </div>
                <div className="ml-3 flex-grow min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{product.name}</p>
                  <p className="text-xs text-gray-500 truncate">{product.kind} · {product.category}</p>
                </div>
              </Link>
            ))}
          </div>
          
          {/* View all results link */}
          <div className="p-3 bg-gray-50 border-t border-gray-100">
            <button 
              onClick={handleSearch}
              className="w-full text-center text-sm text-blue-600 font-medium hover:text-blue-800"
            >
              View all results
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar; 