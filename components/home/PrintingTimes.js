"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const PrintingTimes = () => {
  const [activeTab, setActiveTab] = useState('packaging');
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  
  // Flag that component has mounted (client-side only)
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Track component visibility for animation - only run on client
  useEffect(() => {
    if (!isMounted) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    
    const section = document.getElementById('printing-times-section');
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, [isMounted]);

  const tabs = [
    { id: 'packaging', label: 'Packaging Products' },
    { id: 'wideFormat', label: 'Wide Format' },
    { id: 'leaflets', label: 'Leaflets & Flyers' }
  ];

  const timelineData = {
    packaging: [
      { 
        title: 'Standard Production',
        time: '8-12 Days',
        description: 'Our standard production time for custom packaging, ideal for most business needs.',
        icon: '📦',
        color: 'from-blue-500 to-blue-700'
      },
      { 
        title: 'Express Service',
        time: '4-7 Days',
        description: 'Accelerated production for when you need your packaging sooner.',
        icon: '⚡',
        color: 'from-amber-500 to-amber-700'
      },
      { 
        title: 'Weekly Service',
        time: 'Every Week',
        description: 'Unique weekly packaging service with printed options - exclusive to PrintNPack!',
        icon: '🔄',
        color: 'from-green-500 to-green-700',
        badge: 'EXCLUSIVE'
      }
    ],
    wideFormat: [
      { 
        title: 'Same-Day Printing',
        time: 'Today',
        description: 'Order by 10AM for same-day production of urgent wide format projects.',
        icon: '🔥',
        color: 'from-red-500 to-red-700',
        badge: 'FASTEST'
      },
      { 
        title: 'Next-Day Service',
        time: '24 Hours',
        description: 'Order by 3PM for next-day delivery of your wide format prints.',
        icon: '⏱️',
        color: 'from-purple-500 to-purple-700'
      },
      { 
        title: 'Standard Production',
        time: '3-5 Days',
        description: 'Our standard timeline for wide format printing with optimal quality and price.',
        icon: '📊',
        color: 'from-blue-500 to-blue-700'
      }
    ],
    leaflets: [
      { 
        title: 'Same-Day Printing',
        time: 'Today',
        description: 'Order by 10AM for same-day production of your marketing materials.',
        icon: '🚀',
        color: 'from-red-500 to-red-700',
        badge: 'FASTEST'
      },
      { 
        title: 'Next-Day Service',
        time: '24 Hours',
        description: 'Submit your designs by 3PM for delivery the next business day.',
        icon: '📆',
        color: 'from-orange-500 to-orange-700'
      },
      { 
        title: 'Standard Production',
        time: '3-5 Days',
        description: 'Our standard timeline for leaflets and flyers with best value pricing.',
        icon: '📄',
        color: 'from-blue-500 to-blue-700'
      }
    ]
  };

  // These will be the initial states before animations
  const initialOpacity = isMounted ? 0 : 1;
  const initialY = isMounted ? 20 : 0;
  const initialScale = isMounted ? 0.9 : 1;

  return (
    <section id="printing-times-section" className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: initialOpacity, y: initialY }}
          animate={isVisible || !isMounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Lightning-Fast Printing Times</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We revolutionize the industry with our rapid turnaround times, from same-day printing to our exclusive weekly packaging service.
          </p>
        </motion.div>
        
        {/* Tabs for selecting product category */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {tabs.map((tab, index) => (
            <motion.button
              key={tab.id}
              className={`py-3 px-5 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                activeTab === tab.id 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
              onClick={() => setActiveTab(tab.id)}
              initial={{ opacity: initialOpacity, y: initialY }}
              animate={isVisible || !isMounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: isMounted ? index * 0.1 : 0 }}
              whileHover={isMounted ? { scale: 1.03 } : {}}
              whileTap={isMounted ? { scale: 0.97 } : {}}
            >
              {tab.label}
            </motion.button>
          ))}
        </div>
        
        {/* Timeline display */}
        <div className="relative">
          {/* Animated line connecting timeline items - only animate on client */}
          <div className="absolute top-16 left-8 right-8 hidden md:block">
            <div className="h-1 bg-gray-200 relative">
              <motion.div 
                className="absolute inset-0 bg-blue-500 origin-left"
                initial={{ scaleX: isMounted ? 0 : 1 }}
                animate={isVisible || !isMounted ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {timelineData[activeTab].map((item, index) => (
              <motion.div
                key={`${activeTab}-${index}`}
                className="bg-white rounded-xl shadow-lg overflow-hidden relative z-10"
                initial={{ opacity: initialOpacity, scale: initialScale }}
                animate={isVisible || !isMounted ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: isMounted ? 0.2 + index * 0.15 : 0 }}
                whileHover={isMounted ? { y: -5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' } : {}}
              >
                {/* Top color band */}
                <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>
                
                <div className="p-6">
                  {/* Icon with animated background pulse */}
                  <div className="relative mb-4 inline-block">
                    <div className={`h-16 w-16 rounded-full bg-gradient-to-r ${item.color} bg-opacity-20 flex items-center justify-center`}>
                      <span className="text-3xl">{item.icon}</span>
                    </div>
                    
                    {/* Animated pulse around icon - only render on client */}
                    {isMounted && (
                      <motion.div
                        className={`absolute inset-0 rounded-full bg-gradient-to-r ${item.color} opacity-30`}
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                      />
                    )}
                    
                    {/* Badge if available */}
                    {item.badge && (
                      <div className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                        {item.badge}
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  
                  {/* Delivery time with gradient text */}
                  <div className={`text-3xl font-extrabold mb-3 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                    {item.time}
                  </div>
                  
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  
                  {/* Footer with availability info */}
                  <div className="mt-auto pt-4 border-t border-gray-100 flex items-center text-sm text-gray-500">
                    <span className="inline-block h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                    Available for all volumes
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Mobile-friendly touch instruction - only show on client */}
        {isMounted && (
          <motion.div 
            className="text-center mt-10 text-gray-500 text-sm md:hidden"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1 }}
          >
            <div className="inline-flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
              Tap the options above to explore different printing times
            </div>
          </motion.div>
        )}
        
        {/* Real people note */}
        <motion.div 
          className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mt-12 max-w-3xl mx-auto"
          initial={{ opacity: initialOpacity, x: isMounted ? -20 : 0 }}
          animate={isVisible || !isMounted ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ delay: isMounted ? 0.8 : 0 }}
        >
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-blue-800">
                <span className="font-bold">Need a custom timeline?</span> Our team can work with your specific deadlines. Contact us for special arrangements or rush orders.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrintingTimes; 