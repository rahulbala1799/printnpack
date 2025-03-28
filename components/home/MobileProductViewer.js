"use client"
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';

const MobileProductViewer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [exitX, setExitX] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if it's a mobile device on component mount
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const products = [
    {
      id: 1,
      name: "Pizza Boxes",
      description: "Custom designed pizza boxes with your branding. Heat retention and eco-friendly options available.",
      image: "/images/hero/pizza-box.png",
      color: "from-red-500 to-red-600"
    },
    {
      id: 2,
      name: "Paper Bags",
      description: "Branded paper bags for retail and takeaway. Fully customizable with multiple sizes available.",
      image: "/images/hero/paper-bag.png",
      color: "from-amber-400 to-amber-600"
    },
    {
      id: 3,
      name: "Burger Boxes",
      description: "Eco-friendly burger boxes perfect for delivery. Grease-resistant with ventilation options.",
      image: "/images/hero/burger-box.png",
      color: "from-green-500 to-green-600"
    },
    {
      id: 4,
      name: "Banners & Posters",
      description: "High-quality wide format printing for indoor and outdoor promotions with vibrant colors and sharp details.",
      image: "/images/hero/wide-format.png",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 5,
      name: "Leaflets & Flyers",
      description: "Professional A3, A4, A5 and A6 leaflets for effective marketing campaigns and promotional materials.",
      image: "/images/hero/leaflet.png",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const x = useMotionValue(0);
  const background = useTransform(
    x,
    [-100, 0, 100],
    [
      'linear-gradient(135deg, rgb(235, 87, 87) 0%, rgb(249, 68, 68) 100%)',
      `linear-gradient(135deg, ${getGradientColors(products[currentIndex].color)})`,
      'linear-gradient(135deg, rgb(16, 185, 129) 0%, rgb(5, 150, 105) 100%)'
    ]
  );

  // Extract gradient colors from the color string
  function getGradientColors(colorString) {
    const colors = colorString.split(' ');
    const fromColor = colors[0] ? colors[0].replace('from-', '').replace('-500', '120, 120, 255').replace('-400', '150, 150, 255') : '120, 120, 255';
    const toColor = colors[2] ? colors[2].replace('to-', '').replace('-600', '80, 80, 200').replace('-500', '100, 100, 220') : '80, 80, 200';
    return `rgb(${fromColor}) 0%, rgb(${toColor}) 100%`;
  }

  const handleDragEnd = (_, info) => {
    if (info.offset.x > 100) {
      // Swiped right
      setExitX(200);
      setTimeout(() => {
        setCurrentIndex(prev => prev === 0 ? products.length - 1 : prev - 1);
        setExitX(0);
      }, 300);
    } else if (info.offset.x < -100) {
      // Swiped left
      setExitX(-200);
      setTimeout(() => {
        setCurrentIndex(prev => (prev + 1) % products.length);
        setExitX(0);
      }, 300);
    }
  };

  if (!isMobile) {
    // Render a simplified version for desktop
    return (
      <section className="py-12 bg-white hidden md:block">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Mobile Experience</h2>
            <p className="mt-2 text-gray-600">
              This interactive product viewer is designed for mobile devices. Please view on a mobile device or resize your browser window.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-white md:hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Our Products</h2>
          <p className="mt-2 text-gray-600">
            Swipe to explore our premium product range
          </p>
        </div>
        
        <div className="relative h-[520px] rounded-xl overflow-hidden shadow-xl">
          <motion.div 
            className="absolute inset-0" 
            style={{ background }}
          />
          
          <AnimatePresence initial={false}>
            <motion.div
              key={products[currentIndex].id}
              className="absolute inset-0 flex flex-col items-center justify-center p-6"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.7}
              onDragEnd={handleDragEnd}
              style={{ x }}
              initial={{ opacity: 0, x: exitX }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: exitX }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white/20 backdrop-blur-sm p-2 rounded-3xl mb-4 w-[80%] flex items-center justify-center">
                <div className="relative h-64 w-64 drop-shadow-2xl">
                  <Image
                    src={products[currentIndex].image}
                    alt={products[currentIndex].name}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
              
              <motion.div
                className="text-center text-white mt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold mb-1">{products[currentIndex].name}</h3>
                <p className="text-white/90 mb-4 px-4 text-sm">{products[currentIndex].description}</p>
                
                <Link
                  href="/products"
                  className="bg-white/20 hover:bg-white/30 text-white py-2 px-4 rounded-lg backdrop-blur-sm inline-flex items-center transition-all duration-300"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </motion.div>
              
              {/* Swipe instruction overlay - only shows on first load */}
              <motion.div
                className="absolute inset-0 bg-black/50 flex items-center justify-center backdrop-blur-sm z-10"
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ delay: 2, duration: 0.5 }}
                onAnimationComplete={() => {}}
                style={{ pointerEvents: 'none' }}
              >
                <div className="text-white text-center px-6">
                  <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7M9 5l7 7-7 7"></path>
                  </svg>
                  <p className="text-2xl font-bold">Swipe to View Products</p>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
          
          {/* Indicator dots */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            {products.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-white w-6' : 'bg-white/50'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            <span className="inline-block border border-gray-300 rounded-full px-3 py-1">
              {currentIndex + 1} of {products.length}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default MobileProductViewer; 