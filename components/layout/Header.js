"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
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
  FaPrint,
  FaTruck,
  FaRecycle,
  FaShoppingBag,
  FaPizzaSlice,
  FaLeaf,
  FaCube,
  FaBox
} from 'react-icons/fa';
import { BsFillDropletFill, BsBox } from 'react-icons/bs';
import { IoColorPaletteSharp } from 'react-icons/io5';

// Logo Component with package box icon
const Logo = ({ scrolled }) => {
  const boxVariants = {
    hover: {
      rotateY: [0, 15, 0, -15, 0],
      scale: [1, 1.1, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };
  
  return (
    <Link href="/" aria-label="Home page">
      <motion.div 
        className="flex items-center gap-3 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        whileHover="hover"
      >
        {/* Box icon for packaging */}
        <motion.div
          variants={boxVariants}
          className="relative"
          transition={{ delay: 0.2 }}
          style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
        >
          <FaBox className="text-3xl text-blue-700" />
        </motion.div>
        
        <div className={`font-extrabold transition-all duration-300 ${scrolled ? 'text-xl' : 'text-2xl'}`}>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-900">Print</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-blue-600">N</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-900">Pack</span>
        </div>
      </motion.div>
    </Link>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse position for gradient effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      // Calculate mouse position as percentage of screen width/height
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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

  // Calculate dynamic gradient position based on mouse movement
  const gradientStyle = {
    backgroundImage: `
      radial-gradient(
        circle at ${mousePosition.x}% ${Math.min(mousePosition.y, 30)}%, 
        rgba(37, 99, 235, 0.9) 0%, 
        rgba(30, 58, 138, 0.95) 50%, 
        rgba(23, 37, 84, 1) 100%
      )
    `,
    backgroundSize: '200% 200%',
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-md' : ''}`}>
      {/* Animated Background with Glass Effect */}
      <div className="relative">
        {/* Animated gradient background */}
        <div 
          className="absolute inset-0 animate-gradient-slow" 
          style={gradientStyle}
        >
          {/* Moving particles overlay */}
          <div className="absolute inset-0 bg-particles opacity-20"></div>
        </div>
        
        {/* Top Bar with Glass effect */}
        <div className="relative backdrop-blur-sm bg-blue-900/90 md:bg-white/5">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <div className="hidden md:flex items-center space-x-4 text-white">
              <div className="flex items-center">
                <FaPhone className="mr-2" />
                <span>+353 1 234 5678</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="mr-2" />
                <span>info@printnpack.ie</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 md:space-x-4">
              <a href="tel:+35312345678" className="text-white md:hidden flex items-center">
                <FaPhone className="text-lg" />
              </a>
              <a href="mailto:info@printnpack.ie" className="text-white md:hidden flex items-center">
                <FaEnvelope className="text-lg" />
              </a>
              <Link href="/contact" className="bg-blue-800/80 md:bg-white/20 backdrop-blur-md hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-colors shadow-glow">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        
        {/* Main Navigation with Glass effect */}
        <div className={`relative backdrop-blur-md bg-white/90 py-4 transition-all duration-300 shadow-md ${scrolled ? 'py-2' : ''}`}>
          <div className="container mx-auto px-4 flex justify-between items-center">
            <Logo scrolled={scrolled} />
            
            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex space-x-6">
                {menuItems.map((item) => (
                  <li key={item.path}>
                    <Link 
                      href={item.path} 
                      className="text-blue-900 hover:text-blue-700 transition-colors relative nav-link"
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
              className="md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-900 relative z-10"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="hamburger-icon">
                <span className={`hamburger-line ${isOpen ? 'line-1-active' : ''}`}></span>
                <span className={`hamburger-line ${isOpen ? 'line-2-active' : ''}`}></span>
                <span className={`hamburger-line ${isOpen ? 'line-3-active' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Drawer */}
      <div 
        id="navMenu"
        className={`fixed top-0 right-0 h-full w-80 bg-gradient-to-b from-blue-900 to-blue-800 backdrop-blur-lg shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b border-white/20">
          <div className="flex items-center gap-3">
            <FaBox className="text-2xl text-white" />
            <div className="text-xl font-bold text-white">
              <span className="text-gradient-white">PrintNPack</span>
            </div>
          </div>
          <button
            aria-label="Close Menu"
            className="p-2 text-white focus:outline-none"
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
                  className="flex items-center p-3 rounded-lg text-white hover:bg-white/10 transition-colors group"
                  onClick={handleMenuItemClick}
                >
                  <span className="mr-3 text-blue-200">{item.icon}</span>
                  <span className="font-medium">{item.name}</span>
                  <FaChevronRight className="ml-auto opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all text-blue-200" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="border-t border-white/20 p-6 mt-6">
          <div className="space-y-4">
            <div className={`flex items-center opacity-0 ${isOpen ? 'animate-slide-in-left' : ''}`} style={{ animationDelay: '0.35s' }}>
              <FaPhone className="text-blue-200 mr-3" />
              <a href="tel:+35312345678" className="text-white hover:text-blue-200">+353 1 234 5678</a>
            </div>
            <div className={`flex items-center opacity-0 ${isOpen ? 'animate-slide-in-left' : ''}`} style={{ animationDelay: '0.4s' }}>
              <FaEnvelope className="text-blue-200 mr-3" />
              <a href="mailto:info@printnpack.ie" className="text-white hover:text-blue-200 break-all">info@printnpack.ie</a>
            </div>
            <Link 
              href="/contact" 
              className={`w-full flex items-center justify-center bg-white/10 backdrop-blur-md text-white py-3 rounded-lg mt-4 hover:bg-white/20 transition-colors shadow-glow opacity-0 ${isOpen ? 'animate-fade-in' : ''}`}
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