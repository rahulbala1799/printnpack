"use client"
import React, { useEffect, useRef, useState } from 'react';
import { FaTruck, FaLeaf, FaCubes, FaCalendarCheck } from 'react-icons/fa';

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
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const usps = [
    {
      icon: <FaCubes className="text-xl text-blue-600" />,
      title: 'Low Minimum Orders',
      description: 'Custom printed packaging from as low as 100 units. Accessible to businesses of all sizes.',
      stat: 'From 100 units',
    },
    {
      icon: <FaTruck className="text-xl text-blue-600" />,
      title: 'Weekly Delivery Service',
      description: 'Our unique weekly printing and delivery system ensures you never run out of essential packaging.',
      stat: '52 deliveries/year',
    },
    {
      icon: <FaLeaf className="text-xl text-blue-600" />,
      title: 'Eco-Friendly Materials',
      description: 'Sustainable packaging options that reduce environmental impact without compromising on quality.',
      stat: '100% biodegradable options',
    },
    {
      icon: <FaCalendarCheck className="text-xl text-blue-600" />,
      title: 'Same-Day Dispatch',
      description: 'Order by 10AM for same-day dispatch on select products. Express service when you need it most.',
      stat: 'Order by 10AM',
    },
  ];

  return (
    <section ref={sectionRef} className="py-16 md:py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
            Why Businesses Choose PrintNPack
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Trusted by restaurants, retailers, and businesses across Ireland for reliable printing and packaging.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {usps.map((usp, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg border border-slate-200 p-6 hover:shadow-md hover:border-slate-300 transition-all duration-200 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                {usp.icon}
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">{usp.title}</h3>
              <p className="text-sm text-slate-500 mb-3 leading-relaxed">{usp.description}</p>
              <p className="text-xs font-medium text-blue-600 uppercase tracking-wide">{usp.stat}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USPCards;
