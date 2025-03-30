import React, { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import SearchBar from './SearchBar';

const MobileSearch = ({ isOpen, onClose }) => {
  // Lock body scroll when search is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Search Panel */}
      <div className="fixed inset-x-0 top-0 z-[70] bg-blue-900 shadow-lg p-4 animate-slide-down">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-white text-lg font-semibold">Search Products</h2>
          <button 
            onClick={onClose}
            className="text-white p-2 rounded-full hover:bg-white/10"
            aria-label="Close search"
          >
            <FaTimes size={20} />
          </button>
        </div>
        
        <SearchBar isMobile={true} onClose={onClose} />
        
        <div className="mt-4">
          <p className="text-white/70 text-sm">
            Search for products by name, category, or description
          </p>
        </div>
      </div>
    </>
  );
};

export default MobileSearch; 