"use client"
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import {
  FaPhone,
  FaChevronRight,
  FaSearch
} from 'react-icons/fa';
import SearchBar from '../search/SearchBar';
import MobileSearch from '../search/MobileSearch';
import QuoteCartButton from '../quote/QuoteCartButton';
import { useQuoteCart } from '../../lib/quote-cart-context';
import { HEADER_CATEGORIES, activeHeaderCategory } from '../../data/header-nav';

const Header = () => {
  const router = useRouter();
  const { openBuilder } = useQuoteCart();
  const currentCategory = activeHeaderCategory(router.asPath || '');
  const [menuValue, setMenuValue] = useState('');
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
    setMenuValue('');
  }, [router.asPath]);

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
        <div className="flex w-full items-center gap-4 px-4 sm:px-6 xl:px-10">
          <Link href="/" className="flex shrink-0 items-center">
            <span className="text-[1.35rem] font-extrabold tracking-tight text-slate-950">
              print<span className="text-blue-600">N</span>pack
            </span>
          </Link>

          <div className="hidden min-w-0 flex-1 px-6 lg:flex">
            <SearchBar variant="header" className="w-full" />
          </div>

          <div className="ml-auto flex items-center gap-1 sm:gap-2">
            <a
              href="tel:+353894157369"
              className="hidden items-center gap-2 px-2 text-slate-700 hover:text-blue-700 xl:flex"
            >
              <FaPhone className="text-sm" aria-hidden="true" />
              <span className="text-left leading-tight">
                <span className="block text-[11px] text-slate-500">Call us</span>
                <span className="block text-sm font-semibold">089 415 7369</span>
              </span>
            </a>
            <div className="hidden items-center gap-2 lg:flex">
              <QuoteCartButton />
              <button
                type="button"
                onClick={() => openBuilder()}
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Get Quote
              </button>
            </div>
            <div className="flex items-center gap-1 lg:hidden">
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
              className="p-2 text-slate-700 lg:hidden"
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

      <NavigationMenu.Root
        value={menuValue}
        onValueChange={setMenuValue}
        delayDuration={80}
        className="site-header-nav relative z-30 hidden w-full border-b border-slate-200 bg-white lg:block"
      >
        <NavigationMenu.List className="flex w-full list-none items-stretch justify-between px-4 sm:px-6 xl:px-10">
          {HEADER_CATEGORIES.map((category) => {
            const active = currentCategory === category.id || menuValue === category.id;
            return (
              <NavigationMenu.Item key={category.id} value={category.id} className="flex min-w-0 flex-1">
                <NavigationMenu.Trigger asChild>
                  <Link
                    href={category.href}
                    className={`relative flex h-11 w-full items-center justify-center whitespace-nowrap px-1 text-[13px] font-semibold tracking-tight xl:text-[15px] ${
                      active ? 'text-blue-700' : 'text-slate-800 hover:text-blue-700'
                    }`}
                    aria-current={currentCategory === category.id ? 'page' : undefined}
                  >
                    {category.name}
                    <span
                      className={`absolute inset-x-2 bottom-0 h-0.5 rounded-full ${active ? 'bg-blue-600' : 'bg-transparent'}`}
                      aria-hidden="true"
                    />
                  </Link>
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className="absolute left-0 top-0 w-full">
                  <div className="w-full px-6 py-7 xl:px-10">
                    <div className="mb-4 flex items-end justify-between gap-6 border-b border-slate-100 pb-4">
                      <div>
                        <p className="text-lg font-semibold tracking-tight text-slate-950">{category.name}</p>
                        <p className="mt-0.5 text-sm text-slate-500">{category.summary}</p>
                      </div>
                      <NavigationMenu.Link asChild>
                        <Link href={category.href} className="shrink-0 text-sm font-semibold text-blue-700 hover:text-blue-800">
                          View all
                        </Link>
                      </NavigationMenu.Link>
                    </div>
                    <ul className="grid grid-cols-2 gap-x-8 gap-y-1 md:grid-cols-3 xl:grid-cols-4">
                      {category.products.map((product) => (
                        <li key={product.href}>
                          <NavigationMenu.Link asChild>
                            <Link
                              href={product.href}
                              className="block rounded-lg px-3 py-2.5 text-[15px] font-medium leading-snug text-slate-800 hover:bg-slate-50 hover:text-blue-700"
                            >
                              {product.name}
                            </Link>
                          </NavigationMenu.Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </NavigationMenu.Content>
              </NavigationMenu.Item>
            );
          })}
        </NavigationMenu.List>
        <div className="absolute left-0 top-full w-full">
          <NavigationMenu.Viewport className="relative h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden bg-white shadow-[0_18px_40px_rgba(15,23,42,0.12)]" />
        </div>
      </NavigationMenu.Root>
      <style jsx global>{`
        .site-header-nav [data-radix-navigation-menu-viewport] {
          width: 100% !important;
        }
      `}</style>

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
