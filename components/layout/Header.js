"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaPhone, FaEnvelope, FaBars, FaTimes, FaChevronRight, FaHome, FaInfoCircle, FaBoxOpen, FaTools, FaPhoneAlt } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close the mobile menu when user clicks outside
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

  // Lock body scroll when menu is open
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

  const menuItems = [
    { name: 'Home', path: '/', icon: <FaHome /> },
    { name: 'About', path: '/about', icon: <FaInfoCircle /> },
    { name: 'Products', path: '/products', icon: <FaBoxOpen /> },
    { name: 'Services', path: '/services', icon: <FaTools /> },
    { name: 'Contact', path: '/contact', icon: <FaPhoneAlt /> },
  ];

  const handleMenuItemClick = () => {
    setIsOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-md' : ''}`}>
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center">
              <FaPhone className="mr-2" />
              <span>+91 9843 141 313</span>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="mr-2" />
              <span>printnpack@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 md:space-x-4">
            <a href="tel:+919843141313" className="text-white md:hidden flex items-center">
              <FaPhone className="text-lg" />
            </a>
            <a href="mailto:printnpack@gmail.com" className="text-white md:hidden flex items-center">
              <FaEnvelope className="text-lg" />
            </a>
            <Link href="/contact" className="bg-blue-700 px-4 py-1 rounded hover:bg-blue-600 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <div className={`bg-white py-4 transition-all duration-300 ${scrolled ? 'py-2' : ''}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-900">PrintNPack</div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link 
                    href={item.path} 
                    className="text-blue-900 hover:text-blue-700 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Mobile Nav Hamburger Button */}
          <button
            id="hamburger"
            aria-label="Toggle Menu"
            className="md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Drawer */}
      <div 
        id="navMenu"
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b">
          <div className="text-xl font-bold text-blue-900">PrintNPack</div>
          <button
            aria-label="Close Menu"
            className="p-2 text-blue-900 focus:outline-none"
            onClick={() => setIsOpen(false)}
          >
            <FaTimes size={24} />
          </button>
        </div>
        
        <nav className="px-4 py-6">
          <ul className="space-y-4">
            {menuItems.map((item, index) => (
              <li 
                key={item.path} 
                className={`opacity-0 ${isOpen ? 'animate-slide-in-right' : ''} mobile-menu-item-${index + 1}`}
              >
                <Link 
                  href={item.path} 
                  className="flex items-center p-3 rounded-lg text-blue-900 hover:bg-blue-50 transition-colors group"
                  onClick={handleMenuItemClick}
                >
                  <span className="mr-3 text-blue-800">{item.icon}</span>
                  <span className="font-medium">{item.name}</span>
                  <FaChevronRight className="ml-auto opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="border-t p-6 mt-6">
          <div className="space-y-4">
            <div className={`flex items-center opacity-0 ${isOpen ? 'animate-slide-in-left' : ''}`} style={{ animationDelay: '0.35s' }}>
              <FaPhone className="text-blue-800 mr-3" />
              <a href="tel:+919843141313" className="text-blue-900 hover:text-blue-700">+91 9843 141 313</a>
            </div>
            <div className={`flex items-center opacity-0 ${isOpen ? 'animate-slide-in-left' : ''}`} style={{ animationDelay: '0.4s' }}>
              <FaEnvelope className="text-blue-800 mr-3" />
              <a href="mailto:printnpack@gmail.com" className="text-blue-900 hover:text-blue-700 break-all">printnpack@gmail.com</a>
            </div>
            <Link 
              href="/contact" 
              className={`w-full flex items-center justify-center bg-blue-800 text-white py-3 rounded-lg mt-4 hover:bg-blue-700 transition-colors opacity-0 ${isOpen ? 'animate-fade-in' : ''}`}
              style={{ animationDelay: '0.45s' }}
              onClick={handleMenuItemClick}
            >
              Get A Quote
            </Link>
          </div>
        </div>
      </div>
      
      {/* Overlay when mobile nav is open */}
      <div 
        className={`fixed inset-0 bg-black transition-opacity duration-300 ${
          isOpen ? 'opacity-50 z-40' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      ></div>
    </header>
  );
};

export default Header; 