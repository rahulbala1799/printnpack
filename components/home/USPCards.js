"use client"
import React, { useEffect, useRef, useState } from 'react';
import { FaLeaf, FaClock, FaBoxOpen, FaCheck, FaTruck, FaRecycle, FaMedal, FaRegClock, FaCube, FaHandshake } from 'react-icons/fa';
import { motion } from 'framer-motion';

const USPCards = ({ data }) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  // Use data from props if provided, otherwise use default data
  const defaultUspData = [
    {
      id: 'irish-made',
      icon: <FaHandshake className="text-4xl text-green-600 icon-hover" />,
      title: 'Proudly Irish-Owned & Operated',
      description: 'Supporting the local economy with Irish-made packaging solutions for businesses across the country.',
      stat: '100%',
      statLabel: 'Irish production',
      color: 'from-green-500 to-green-700',
      delay: 0
    },
    {
      id: 'exclusive',
      icon: <FaLeaf className="text-4xl text-blue-600 icon-hover" />,
      title: 'Eco-Friendly Materials',
      description: 'Sustainable packaging options that reduce environmental impact without compromising on quality.',
      stat: '100%',
      statLabel: 'biodegradable options',
      color: 'from-blue-500 to-blue-700',
      delay: 100
    },
    {
      id: 'low-moq',
      icon: <FaBoxOpen className="text-4xl text-amber-600 icon-hover" />,
      title: 'Low Minimum Orders',
      description: 'Custom packaging accessible to businesses of all sizes with minimums starting at just 100 units.',
      stat: '100',
      statLabel: 'unit minimum',
      color: 'from-amber-500 to-amber-700',
      delay: 200
    },
    {
      id: 'fast-delivery',
      icon: <FaTruck className="text-4xl text-purple-600 icon-hover" />,
      title: 'Weekly Delivery Service',
      description: 'Our unique weekly printing and delivery system ensures you never run out of essential packaging.',
      stat: '52',
      statLabel: 'deliveries per year',
      color: 'from-purple-500 to-purple-700',
      delay: 300
    }
  ];
  
  // Use the data prop if provided, otherwise use the default data
  const displayData = data || defaultUspData;

  return (
    <section ref={sectionRef} className="relative py-16 overflow-hidden">
      {/* Background with particles effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="absolute inset-0 bg-particles opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose PrintNPack?</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="mt-2 text-xl text-gray-600 max-w-3xl mx-auto">
            Our unique advantages set us apart from the competition
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mt-8">
          {displayData.map((usp, index) => (
            <motion.div 
              key={index}
              className="relative bg-white rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: [0.43, 0.13, 0.23, 0.96] 
              }}
              whileHover={{ 
                y: -8,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" 
              }}
            >
              {/* Top gradient bar */}
              <div className={`h-2 bg-gradient-to-r ${typeof usp.color === 'string' ? usp.color : 'from-blue-500 to-blue-700'}`}></div>
              
              <div className="p-6 relative">
                {/* Icon and title */}
                <div className="flex flex-col items-center mt-6 mb-4">
                  <motion.div 
                    className="mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {usp.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-800 text-center mb-2">{usp.title}</h3>
                </div>
                
                {/* Stat */}
                <div className="flex justify-center my-4">
                  <div className={`text-center px-4 py-2 rounded-lg bg-gradient-to-r ${usp.color} text-white`}>
                    <div className="text-3xl font-bold count-up">
                      {usp.stat}
                    </div>
                    <div className="text-sm opacity-90">{usp.statLabel}</div>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-gray-600 text-center px-4 mb-6">{usp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USPCards; 