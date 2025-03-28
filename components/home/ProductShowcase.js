"use client"
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useAnimation, useInView } from 'framer-motion';

const ProductShowcase = () => {
  const [activeTab, setActiveTab] = useState('food');
  const [isVisible, setIsVisible] = useState(false);
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });
  
  // Track visibility for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById('product-showcase');
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);
  
  // Calculate drag constraints based on screen width
  useEffect(() => {
    const calculateConstraints = () => {
      const tabContainer = document.querySelector('.tab-container');
      if (tabContainer) {
        const containerWidth = tabContainer.scrollWidth;
        const viewportWidth = tabContainer.offsetWidth;
        if (containerWidth > viewportWidth) {
          setDragConstraints({ left: -(containerWidth - viewportWidth), right: 0 });
        } else {
          setDragConstraints({ left: 0, right: 0 });
        }
      }
    };
    
    calculateConstraints();
    window.addEventListener('resize', calculateConstraints);
    return () => window.removeEventListener('resize', calculateConstraints);
  }, []);

  const products = {
    food: [
      { id: 1, name: 'Pizza Boxes', image: '/images/ifa/heroh/pizza.png', color: 'from-red-400 to-red-600' },
      { id: 2, name: 'Burger Boxes', image: '/images/ifa/heroh/burger.png', color: 'from-yellow-400 to-yellow-600' },
      { id: 3, name: 'Napkins', image: '/images/ifa/heroh/napkin.png', color: 'from-green-400 to-green-600' },
      { id: 4, name: 'Paper Bags', image: '/images/ifa/heroh/bag.png', color: 'from-blue-400 to-blue-600' }
    ],
    wideFormat: [
      { id: 5, name: 'Banners', image: '/images/ifa/heroh/wide.png', color: 'from-purple-400 to-purple-600' },
      { id: 6, name: 'Roll Up Banners', image: '/images/ifa/heroh/1.png', color: 'from-pink-400 to-pink-600' },
      { id: 7, name: 'Posters', image: '/images/ifa/heroh/2.png', color: 'from-indigo-400 to-indigo-600' },
      { id: 8, name: 'Vinyl Stickers', image: '/images/ifa/heroh/3.png', color: 'from-cyan-400 to-cyan-600' },
      { id: 9, name: 'Foamex Boards', image: '/images/ifa/heroh/4.png', color: 'from-blue-500 to-blue-700' },
      { id: 10, name: 'Corriboards', image: '/images/ifa/heroh/5.png', color: 'from-teal-400 to-teal-600' }
    ],
    leafletsFlyers: [
      { id: 11, name: 'A3 Leaflets', image: '/images/ifa/heroh/leaflet.png', color: 'from-blue-500 to-blue-700' },
      { id: 12, name: 'A4 Leaflets', image: '/images/ifa/heroh/6.png', color: 'from-green-500 to-green-700' },
      { id: 13, name: 'A5 Leaflets', image: '/images/ifa/heroh/7.png', color: 'from-yellow-500 to-yellow-700' },
      { id: 14, name: 'A6 Leaflets', image: '/images/ifa/heroh/8.png', color: 'from-orange-400 to-orange-600' }
    ]
  };

  const tabs = [
    { id: 'food', label: 'Food Packaging' },
    { id: 'wideFormat', label: 'Wide Format' },
    { id: 'leafletsFlyers', label: 'Leaflets & Flyers' }
  ];

  return (
    <section id="product-showcase" className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-1">Our Products</h2>
          <p className="mt-2 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Swipe to explore our premium product range
          </p>
        </div>
        
        {/* Category Tabs */}
        <div className="mb-8 overflow-hidden">
          <motion.div 
            className="flex space-x-2 md:space-x-4 md:justify-center px-2 overflow-x-auto no-scrollbar pb-2"
            drag="x"
            dragConstraints={dragConstraints}
            dragElastic={0.1}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
          >
            {tabs.map(tab => (
              <motion.button
                key={tab.id}
                className={`py-2 px-5 rounded-full whitespace-nowrap text-sm md:text-base font-medium transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                }`}
                onClick={() => setActiveTab(tab.id)}
                whileTap={{ scale: 0.95 }}
              >
                {tab.label}
              </motion.button>
            ))}
          </motion.div>
        </div>
        
        {/* Desktop Products Grid (hidden on mobile) */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {products[activeTab].map((product) => (
            <motion.div
              key={product.id}
              className="relative rounded-xl shadow-lg overflow-hidden h-64 cursor-pointer"
              whileHover={{ scale: 1.03, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ 
                delay: (product.id % 4) * 0.1,
                duration: 0.4 
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-90`}></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white">
                <div className="relative h-36 w-36 mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain drop-shadow-xl"
                    unoptimized={true}
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">{product.name}</h3>
                <Link href="/products" className="inline-block mt-2 px-4 py-1.5 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full text-white text-sm font-medium transition-all">
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Mobile Products Grid - Elegant Card Design */}
        <div className="md:hidden mb-8">
          <div className="px-2">
            <div className="grid grid-cols-2 gap-4">
              {products[activeTab].map((product, index) => (
                <motion.div
                  key={product.id}
                  className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: isVisible ? 1 : 0, 
                    y: isVisible ? 0 : 20,
                    transition: {
                      delay: index * 0.1,
                      duration: 0.4
                    }
                  }}
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  variants={{
                    hover: {
                      "& .product-image": {
                        scale: 1.35,
                        filter: "brightness(1.2)",
                        transition: { duration: 0.3 }
                      }
                    }
                  }}
                >
                  {/* Decorative accent corner */}
                  <div className={`absolute top-0 right-0 w-16 h-16 -mr-8 -mt-8 rounded-full bg-gradient-to-br ${product.color} opacity-80 blur-lg`}></div>
                  
                  {/* Product Image - Larger size */}
                  <div className="relative h-32 w-full flex items-center justify-center p-2 bg-gradient-to-b from-black/40 to-transparent">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={110}
                      height={110}
                      className="object-contain drop-shadow-xl scale-125 product-image transition-all"
                      unoptimized={true}
                    />
                  </div>
                  
                  {/* Content - Compact layout */}
                  <div className="p-3 bg-black/30 backdrop-blur-sm">
                    <div className="flex flex-col items-center justify-center">
                      <h3 className="text-white font-bold text-sm text-center mb-2 drop-shadow-sm">{product.name}</h3>
                      <Link 
                        href="/products" 
                        className="flex items-center justify-center h-7 w-7 bg-white/20 hover:bg-white/30 rounded-full text-white text-xs transition-all"
                        aria-label={`View ${product.name}`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* "View All" button with highlight effect */}
          <div className="text-center mt-6">
            <motion.div
              className="relative inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur-md opacity-70"></div>
              <Link 
                href="/products" 
                className="relative inline-flex items-center justify-center bg-gray-900 text-white py-3 px-6 rounded-lg text-sm font-medium border border-blue-500/30"
              >
                <span>Browse All Products</span>
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
        
        {/* Empty div to replace the previous swipe indicator */}
        <div className="mt-4 text-center md:hidden"></div>
      </div>
    </section>
  );
};

export default ProductShowcase; 