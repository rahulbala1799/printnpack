"use client"
import React, { useEffect, useRef, useState } from 'react';
import { FaLeaf, FaClock, FaBoxOpen, FaCheck } from 'react-icons/fa';

const USPCards = () => {
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

  const uspData = [
    {
      id: 'irish-made',
      icon: (
        <div className="relative">
          <div className="h-16 w-16 rounded-full bg-green-500/20 flex items-center justify-center">
            <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-500">
              <rect x="4" y="4" width="40" height="40" rx="4" fill="currentColor" />
              <rect x="4" y="4" width="13.33" height="40" fill="white" />
              <rect x="30.67" y="4" width="13.33" height="40" fill="#FF7900" />
            </svg>
          </div>
          <div className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-white flex items-center justify-center animate-pulse">
            <span className="text-green-600 text-xs">🍀</span>
          </div>
        </div>
      ),
      title: 'Proudly Irish-Sourced & Printed',
      description: 'All our packaging materials are locally sourced and printed here in Ireland, ensuring superior quality control, faster turnaround, and supporting the local economy.',
      stat: '100%',
      statLabel: 'Irish production',
      color: 'from-green-500 to-green-700',
      delay: 0
    },
    {
      id: 'exclusive',
      icon: (
        <div className="relative">
          <div className="h-16 w-16 rounded-full bg-blue-500/20 flex items-center justify-center">
            <FaLeaf className="h-8 w-8 text-blue-500" />
          </div>
          <div className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-white flex items-center justify-center">
            <FaCheck className="h-3 w-3 text-blue-600" />
          </div>
        </div>
      ),
      title: 'Exclusive Printing Technologies',
      description: 'We\'re the only printer worldwide offering specialized printing on eco-friendly materials like bagasse burger boxes and other sustainable packaging solutions.',
      stat: '100%',
      statLabel: 'biodegradable options',
      color: 'from-blue-500 to-blue-700',
      delay: 100
    },
    {
      id: 'low-moq',
      icon: (
        <div className="relative">
          <div className="h-16 w-16 rounded-full bg-amber-500/20 flex items-center justify-center">
            <FaBoxOpen className="h-8 w-8 text-amber-500" />
          </div>
          <div className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-white flex items-center justify-center">
            <span className="text-amber-600 text-xs font-bold">500</span>
          </div>
        </div>
      ),
      title: 'Industry-Leading Low MOQs',
      description: 'We believe quality packaging should be accessible to businesses of all sizes, with minimum orders starting at just 500 pieces.',
      stat: '500',
      statLabel: 'piece minimum',
      color: 'from-amber-500 to-amber-700',
      delay: 200
    },
    {
      id: 'fast-delivery',
      icon: (
        <div className="relative">
          <div className="h-16 w-16 rounded-full bg-purple-500/20 flex items-center justify-center">
            <FaClock className="h-8 w-8 text-purple-500" />
          </div>
          <div className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-white flex items-center justify-center animate-spin-slow">
            <span className="text-purple-600 text-xs font-bold">10×</span>
          </div>
        </div>
      ),
      title: 'Lightning-Fast Delivery',
      description: 'While the industry standard is 8-12 weeks, we proudly deliver your custom packaging in just 8-12 days without compromising on quality.',
      stat: '10×',
      statLabel: 'faster than industry standard',
      color: 'from-purple-500 to-purple-700',
      delay: 300
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-16 overflow-hidden">
      {/* Background with particles effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="absolute inset-0 bg-particles opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose PrintNPack?</h2>
          <p className="mt-2 text-xl text-gray-600 max-w-3xl mx-auto">
            Our unique advantages set us apart from the competition
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {uspData.map((usp, index) => (
            <div 
              key={usp.id}
              className={`relative bg-white bg-opacity-70 backdrop-blur-md rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: `${usp.delay}ms`,
                borderTop: '3px solid',
                borderImage: `linear-gradient(to right, rgb(var(--${usp.id}-color-start)), rgb(var(--${usp.id}-color-end))) 1`
              }}
            >
              {/* Subtle gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${usp.color} opacity-5`}></div>
              
              <div className="p-6 relative">
                {/* Icon and title */}
                <div className="flex flex-col items-center mb-4">
                  <div className="mb-4 transform transition-transform duration-700 hover:scale-110">
                    {usp.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 text-center">{usp.title}</h3>
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
                <p className="text-gray-600 text-center">{usp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USPCards; 