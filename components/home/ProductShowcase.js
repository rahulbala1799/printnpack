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
      { id: 1, name: 'Pizza Boxes', image: '/images/products/pizza-box.png', color: 'from-red-400 to-red-600' },
      { id: 2, name: 'Burger Boxes', image: '/images/products/burger-box.png', color: 'from-yellow-400 to-yellow-600' },
      { id: 3, name: 'Napkins', image: '/images/products/napkin.png', color: 'from-green-400 to-green-600' },
      { id: 4, name: 'Paper Bags', image: '/images/products/paper-bag.png', color: 'from-blue-400 to-blue-600' }
    ],
    wideFormat: [
      { id: 5, name: 'Banners', image: '/images/products/banner.png', color: 'from-purple-400 to-purple-600' },
      { id: 6, name: 'Roll Up Banners', image: '/images/products/rollup-banner.png', color: 'from-pink-400 to-pink-600' },
      { id: 7, name: 'Posters', image: '/images/products/poster.png', color: 'from-indigo-400 to-indigo-600' },
      { id: 8, name: 'Vinyl Stickers', image: '/images/products/vinyl-sticker.png', color: 'from-cyan-400 to-cyan-600' },
      { id: 9, name: 'Foamex Boards', image: '/images/products/foamex.png', color: 'from-blue-500 to-blue-700' },
      { id: 10, name: 'Corriboards', image: '/images/products/corriboard.png', color: 'from-teal-400 to-teal-600' }
    ],
    leafletsFlyers: [
      { id: 11, name: 'A3 Leaflets', image: '/images/products/a3-leaflet.png', color: 'from-blue-500 to-blue-700' },
      { id: 12, name: 'A4 Leaflets', image: '/images/products/a4-leaflet.png', color: 'from-green-500 to-green-700' },
      { id: 13, name: 'A5 Leaflets', image: '/images/products/a5-leaflet.png', color: 'from-yellow-500 to-yellow-700' },
      { id: 14, name: 'A6 Leaflets', image: '/images/products/a6-leaflet.png', color: 'from-orange-400 to-orange-600' }
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
        
        {/* Mobile Netflix-style Carousel (hidden on desktop) */}
        <div className="md:hidden mb-4">
          <div className="relative">
            {/* Left gradient fade */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            
            {/* Carousel container */}
            <div className="overflow-x-auto no-scrollbar pl-4 -mx-4">
              <div className="flex pb-8 pt-2 gap-4">
                {products[activeTab].map((product) => (
                  <motion.div
                    key={product.id}
                    className={`relative flex-shrink-0 rounded-xl shadow-lg overflow-hidden w-72 h-96 cursor-pointer`}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
                    transition={{ 
                      delay: (product.id % 4) * 0.1,
                      duration: 0.4 
                    }}
                    style={{
                      // Perspective effect for Netflix-style cards
                      transform: "perspective(800px) rotateY(0deg)",
                      transformStyle: "preserve-3d"
                    }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-90`}></div>
                    
                    {/* Reflection effect */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent"></div>
                    
                    {/* Content container with better spacing */}
                    <div className="absolute inset-0 flex flex-col items-center justify-between p-6 text-white">
                      <div className="w-full flex justify-between items-start">
                        <div className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs font-medium">
                          Premium
                        </div>
                        <motion.div 
                          className="h-10 w-10 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-sm"
                          whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                          </svg>
                        </motion.div>
                      </div>
                      
                      <div className="relative h-40 w-40 my-4">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-contain drop-shadow-xl"
                        />
                      </div>
                      
                      <div className="text-center w-full mt-auto">
                        <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                        <p className="text-white/70 text-sm mb-4 line-clamp-2">
                          Premium quality {product.name.toLowerCase()} for your business needs
                        </p>
                        <Link 
                          href="/products" 
                          className="block w-full py-2.5 text-center bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg text-white text-sm font-medium transition-all"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Right gradient fade */}
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
            
            {/* Scrollbar indicator */}
            <div className="flex justify-center gap-1.5 mt-2">
              {products[activeTab].map((_, index) => (
                <div 
                  key={index} 
                  className={`h-1.5 rounded-full transition-all ${
                    index === 0 ? 'w-6 bg-blue-600' : 'w-1.5 bg-gray-300'
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Swipe Indicator - only visible on mobile */}
        <div className="mt-4 text-center md:hidden">
          <motion.div 
            className="inline-flex items-center text-gray-500 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            <span>Swipe to browse more products</span>
          </motion.div>
        </div>
        
        {/* View all products button */}
        <div className="mt-10 text-center">
          <Link 
            href="/products" 
            className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md text-lg font-medium transition-colors"
          >
            <span>View All Products</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase; 