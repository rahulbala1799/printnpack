"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  FaPhone,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaChevronRight,
  FaHome,
  FaInfoCircle,
  FaBoxOpen,
  FaTools,
  FaPhoneAlt,
  FaSearch,
  FaBox,
  FaNewspaper
} from 'react-icons/fa';
import SearchBar from '../search/SearchBar';
import MobileSearch from '../search/MobileSearch';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const navMenu = document.getElementById('navMenu');
      const hamburger = document.getElementById('hamburger');
      if (isOpen && navMenu && !navMenu.contains(event.target) && !hamburger.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const menuItems = [
    { name: 'Home', path: '/', icon: <FaHome /> },
    { name: 'About', path: '/about', icon: <FaInfoCircle /> },
    { name: 'Products', path: '/products', icon: <FaBoxOpen /> },
    { name: 'Plain Packaging', path: '/plain-packaging', icon: <FaBox /> },
    { name: 'Services', path: '/services', icon: <FaTools /> },
    { name: 'Blog', path: '/blog', icon: <FaNewspaper /> },
    { name: 'Contact', path: '/contact', icon: <FaPhoneAlt /> },
  ];

  const handleMenuItemClick = () => {
    setIsOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-200 ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
      <MobileSearch isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Top bar - desktop only */}
      <div className="hidden lg:block bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-9 text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+353894400155" className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors">
              <FaPhone className="text-xs" />
              <span>+353 89 440 0155</span>
            </a>
            <a href="mailto:info@printnpack.ie" className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors">
              <FaEnvelope className="text-xs" />
              <span>info@printnpack.ie</span>
            </a>
          </div>
          <div className="text-slate-400 text-xs">
            Ireland&apos;s Printing &amp; Packaging Specialists
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className={`bg-white border-b border-slate-200 transition-all duration-200 ${scrolled ? 'py-2' : 'py-3'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center">
              <span className="text-xl font-bold text-slate-900 tracking-tight">
                print<span className="text-blue-600">N</span>pack
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <nav aria-label="Main Navigation">
              <ul className="flex items-center gap-1">
                {menuItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-2 ml-4 pl-4 border-l border-slate-200">
              <SearchBar />
              <Link
                href="/quote"
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Get Quote
              </Link>
            </div>
          </div>

          {/* Mobile actions */}
          <div className="md:hidden flex items-center gap-2">
            <a href="tel:+353894400155" className="p-2 text-slate-600" aria-label="Call Us">
              <FaPhone className="text-base" />
            </a>
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-slate-600"
              aria-label="Search products"
            >
              <FaSearch className="text-base" />
            </button>
            <button
              id="hamburger"
              aria-label="Toggle Menu"
              className="p-2 text-slate-700"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="hamburger-icon">
                <span className={`hamburger-line bg-slate-700 ${isOpen ? 'line-1-active' : ''}`}></span>
                <span className={`hamburger-line bg-slate-700 ${isOpen ? 'line-2-active' : ''}`}></span>
                <span className={`hamburger-line bg-slate-700 ${isOpen ? 'line-3-active' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        id="navMenu"
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-5 border-b border-slate-200">
          <span className="text-lg font-bold text-slate-900">
            print<span className="text-blue-600">N</span>pack
          </span>
          <button
            aria-label="Close Menu"
            className="p-2 text-slate-500 hover:text-slate-700"
            onClick={() => setIsOpen(false)}
          >
            <FaTimes size={20} />
          </button>
        </div>

        <nav className="px-3 py-4">
          <ul className="space-y-1">
            <li className={`opacity-0 ${isOpen ? 'animate-slide-in-right' : ''} mobile-menu-item-0`}>
              <button
                onClick={() => {
                  setIsOpen(false);
                  setTimeout(() => setIsSearchOpen(true), 300);
                }}
                className="flex w-full items-center p-3 rounded-lg text-slate-700 hover:bg-slate-50 transition-colors"
              >
                <span className="mr-3 text-slate-400"><FaSearch /></span>
                <span className="font-medium text-sm">Search Products</span>
              </button>
            </li>

            {menuItems.map((item, index) => (
              <li
                key={item.path}
                className={`opacity-0 ${isOpen ? 'animate-slide-in-right' : ''} mobile-menu-item-${index + 1}`}
              >
                <Link
                  href={item.path}
                  className="flex items-center p-3 rounded-lg text-slate-700 hover:bg-slate-50 transition-colors"
                  onClick={handleMenuItemClick}
                >
                  <span className="mr-3 text-slate-400">{item.icon}</span>
                  <span className="font-medium text-sm">{item.name}</span>
                  <FaChevronRight className="ml-auto text-slate-300 text-xs" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-slate-200 p-5 mt-2">
          <div className="space-y-3">
            <a href="tel:+353894400155" className="flex items-center text-sm text-slate-600 hover:text-slate-900">
              <FaPhone className="text-slate-400 mr-3 text-xs" />
              +353 89 440 0155
            </a>
            <a href="mailto:info@printnpack.ie" className="flex items-center text-sm text-slate-600 hover:text-slate-900">
              <FaEnvelope className="text-slate-400 mr-3 text-xs" />
              info@printnpack.ie
            </a>
            <Link
              href="/quote"
              className="w-full flex items-center justify-center bg-blue-600 text-white py-3 rounded-lg mt-3 hover:bg-blue-700 transition-colors text-sm font-medium"
              onClick={handleMenuItemClick}
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 z-40' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      ></div>
    </header>
  );
};

export default Header;
