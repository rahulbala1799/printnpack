"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

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
    <section id="product-showcase" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Our Products</h2>
          <p className="mt-2 text-xl text-gray-600">
            Explore our range of high-quality packaging solutions
          </p>
        </div>
        
        {/* Swipeable Tabs - Mobile Friendly */}
        <motion.div 
          className="tab-container flex overflow-x-hidden mb-8 justify-center"
          drag="x"
          dragConstraints={dragConstraints}
          dragElastic={0.1}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
        >
          <div className="flex md:flex-wrap space-x-2 md:space-x-4 md:justify-center px-2">
            {tabs.map(tab => (
              <motion.button
                key={tab.id}
                className={`py-2 px-4 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
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
          </div>
        </motion.div>
        
        {/* Products Grid with Interactive Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products[activeTab].map((product) => (
            <motion.div
              key={product.id}
              className={`relative rounded-xl shadow-lg overflow-hidden h-60 cursor-pointer ${
                isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transition: `all 0.6s ease ${(product.id % 4) * 0.1}s`
              }}
              whileHover={{ scale: 1.03 }}
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
                <div className="relative h-32 w-32 mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain drop-shadow-xl"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">{product.name}</h3>
                <Link href="/products" className="text-white/90 hover:text-white text-sm font-medium underline">
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Swipe Indicator for Mobile - only visible on small screens */}
        <div className="mt-8 text-center md:hidden">
          <motion.div 
            className="inline-flex items-center text-gray-500 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
            <span>Swipe cards to see details</span>
          </motion.div>
        </div>
        
        <div className="mt-12 text-center">
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