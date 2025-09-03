import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { FaSearch, FaTimes } from 'react-icons/fa';
import products from '../../data/products';

const SearchBar = ({ isMobile = false, onClose }) => {
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
    if (searchTerm.length >= 2) {
      const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(filteredProducts.slice(0, 5)); // Limit to 5 results for better UX
    } else {
      setSearchResults([]);
    }
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
      className={`relative ${isMobile ? 'w-full' : 'w-64 md:w-72 xl:w-80'}`}
    >
      <form onSubmit={handleSearch} className="relative">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsSearchFocused(true)}
          className={`w-full py-2 pl-10 pr-10 rounded-lg ${
            isMobile 
              ? 'bg-white/10 text-white placeholder-white/70 border border-white/20 focus:border-white/50'
              : 'bg-white/90 text-blue-900 border border-gray-300 focus:border-blue-500'
          } focus:outline-none focus:ring-1 focus:ring-blue-500`}
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
                href={product.url || `/products/${product.id}`} 
                key={product.id}
                onClick={handleResultClick}
                className="flex items-center p-3 hover:bg-gray-50 transition-colors"
              >
                <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded">
                  <Image
                    src={product.imageSrc}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="ml-3 flex-grow">
                  <p className="text-sm font-medium text-gray-900">{product.name}</p>
                  <p className="text-xs text-gray-500 truncate">{product.category}</p>
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