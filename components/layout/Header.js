"use client"
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  FaPhone,
  FaChevronRight,
  FaSearch
} from 'react-icons/fa';
import SearchBar from '../search/SearchBar';
import MobileSearch from '../search/MobileSearch';
import QuoteCartButton from '../quote/QuoteCartButton';
import { useQuoteCart } from '../../lib/quote-cart-context';

const Header = () => {
  const { openBuilder } = useQuoteCart();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [menuTop, setMenuTop] = useState(64);
  const barRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      if (barRef.current) setMenuTop(barRef.current.getBoundingClientRect().bottom);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpen && barRef.current) setMenuTop(barRef.current.getBoundingClientRect().bottom);
  }, [isOpen, scrolled]);

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
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Plain', path: '/plain-packaging' },
    { name: 'Wedding', path: '/wedding-printing-ireland' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleMenuItemClick = () => {
    setIsOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-200 ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
      <MobileSearch isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Main navigation */}
      <div ref={barRef} className={`bg-white border-b border-slate-200 transition-all duration-200 ${scrolled ? 'py-2' : 'py-3'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center">
              <span className="text-xl font-bold text-slate-900 tracking-tight">
                print<span className="text-blue-600">N</span>pack
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-2 md:flex">
              <SearchBar />
              <QuoteCartButton />
              <button
                type="button"
                onClick={() => openBuilder()}
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Get Quote
              </button>
            </div>
            <div className="flex items-center gap-2 md:hidden">
              <QuoteCartButton className="px-2" />
              <a href="tel:+353894157369" className="p-2 text-slate-600" aria-label="Call Us">
                <FaPhone className="text-base" />
              </a>
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-slate-600"
                aria-label="Search products"
              >
                <FaSearch className="text-base" />
              </button>
            </div>
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

      <div
        id="navMenu"
        className={`fixed inset-x-0 bottom-0 z-40 overflow-y-auto bg-white ${
          isOpen ? '' : 'hidden'
        }`}
        style={{ top: menuTop }}
      >
        <nav aria-label="Menu">
          <ul className="border-t border-slate-200">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className="flex items-center justify-between px-5 py-5 text-[17px] font-medium text-neutral-900 active:bg-slate-50"
                  onClick={handleMenuItemClick}
                >
                  {item.name}
                  <FaChevronRight className="text-[11px] text-neutral-400" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="relative overflow-hidden bg-slate-950 text-center text-[13px] font-semibold leading-none text-white sm:text-sm">
        <span className="pointer-events-none absolute inset-y-0 left-0 w-[min(36rem,80%)] bg-gradient-to-r from-blue-500/50 to-transparent" />
        <p className="relative px-4 py-2">We reply to quote requests within 2 hours</p>
      </div>
    </header>
  );
};

export default Header;
