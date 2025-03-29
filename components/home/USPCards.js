"use client"
import React, { useEffect, useRef, useState } from 'react';
import { RiTimerFlashLine, RiLeafLine, RiAwardLine, RiNumbersLine, RiRulerLine, RiPaintBrushLine, RiBox3Line } from 'react-icons/ri';
import { motion } from 'framer-motion';
import Image from 'next/image';

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
      id: 'custom-design',
      icon: <RiBox3Line className="text-4xl text-green-600 icon-hover" />,
      title: 'Custom Design Service',
      description: 'Professional design team to create unique packaging that represents your brand and stands out.',
      stat: '100%',
      statLabel: 'customizable',
      color: 'from-green-500 to-green-700',
      delay: 0
    },
    {
      id: 'exclusive',
      icon: <RiLeafLine className="text-4xl text-blue-600 icon-hover" />,
      title: 'Eco-Friendly Materials',
      description: 'Sustainable packaging options that reduce environmental impact without compromising on quality.',
      stat: '100%',
      statLabel: 'biodegradable options',
      color: 'from-blue-500 to-blue-700',
      delay: 100
    },
    {
      id: 'low-moq',
      icon: <RiRulerLine className="text-4xl text-amber-600 icon-hover" />,
      title: 'Low Minimum Orders',
      description: 'Custom packaging accessible to businesses of all sizes with minimums starting at just 100 units.',
      stat: '100',
      statLabel: 'unit minimum',
      color: 'from-amber-500 to-amber-700',
      delay: 200
    },
    {
      id: 'fast-delivery',
      icon: <RiTimerFlashLine className="text-4xl text-purple-600 icon-hover" />,
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
    <section ref={sectionRef} className="relative py-10 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-blue-700 to-blue-900 opacity-5 transform -skew-y-2"></div>
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Product image background elements */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -right-20 top-1/4 w-64 h-64 opacity-5">
          <Image 
            src="/images/hero/pizza-box.png" 
            alt="Pizza Box" 
            width={300} 
            height={300}
            className="object-contain transform rotate-12"
            unoptimized={true}
          />
        </div>
        <div className="absolute -left-20 bottom-1/4 w-64 h-64 opacity-5">
          <Image 
            src="/images/hero/paper-bag.png" 
            alt="Paper Bag" 
            width={300} 
            height={300}
            className="object-contain transform -rotate-12"
            unoptimized={true}
          />
        </div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 opacity-5">
          <Image 
            src="/images/hero/burger-box.png" 
            alt="Burger Box" 
            width={350} 
            height={350}
            className="object-contain"
            unoptimized={true}
          />
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <div className="flex items-center justify-center mb-8">
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="hidden md:block absolute left-10 opacity-5"
          >
            <RiBox3Line className="text-9xl text-blue-700" />
          </motion.div>
          
          <div className="text-center relative">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Why Choose <span className="text-blue-700">Print<span className="text-blue-900">N</span>Pack</span>?</h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-1 w-10 bg-blue-700"></div>
              <RiBox3Line className="text-xl text-blue-700" />
              <div className="h-1 w-36 bg-gradient-to-r from-blue-700 to-blue-500"></div>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl">
              Our unique advantages set us apart from the competition
            </p>
          </div>
          
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="hidden md:block absolute right-10 opacity-5"
          >
            <RiBox3Line className="text-9xl text-blue-700" />
          </motion.div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {displayData.map((usp, index) => (
            <motion.div 
              key={index}
              className="relative bg-white rounded-xl shadow-md overflow-hidden border border-gray-100
                        w-[calc(50%-0.5rem)] 
                        aspect-square
                        sm:w-[calc(50%-0.75rem)]
                        md:w-[calc(33.333%-1rem)]
                        lg:w-[calc(33.333%-1rem)]
                        xl:w-[calc(25%-1rem)]"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.1,
                ease: [0.43, 0.13, 0.23, 0.96] 
              }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.15)",
                scale: 1.02
              }}
            >
              {/* Side accent bar with logo mark */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-blue-700 via-blue-500 to-blue-700"></div>
              
              <div className="h-full p-4 flex flex-col">
                {/* Icon with pulse effect */}
                <div className="relative mx-auto mb-4">
                  <div className={`h-16 w-16 rounded-xl bg-gradient-to-br ${typeof usp.color === 'string' ? usp.color : 'from-blue-500 to-blue-700'} flex items-center justify-center opacity-90`}>
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className="text-white"
                    >
                      {usp.icon}
                    </motion.div>
                  </div>
                  <motion.div 
                    className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-blue-700"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
                
                {/* Content */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-gray-800 mb-2 text-center">{usp.title}</h3>
                    <div className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${usp.color} mx-auto mb-3 inline-block`}>
                      {usp.stat}
                    </div>
                    
                    <p className="text-xs text-gray-600 mb-4 text-center leading-tight line-clamp-3">{usp.description}</p>
                  </div>
                  
                  <div className="text-xs text-gray-500 flex items-center gap-1 justify-center mt-auto">
                    <RiBox3Line className="text-blue-700" />
                    <span>{usp.statLabel}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USPCards; 