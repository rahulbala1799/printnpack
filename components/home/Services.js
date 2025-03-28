"use client"
import React, { useState, useEffect } from 'react';
import { FaBox, FaPrint, FaLeaf, FaShippingFast, FaPencilRuler } from 'react-icons/fa';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ServiceCard = ({ icon: Icon, title, description, color, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg overflow-hidden relative group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
    >
      {/* Top gradient bar */}
      <div className={`h-2 bg-gradient-to-r ${color}`}></div>
      
      {/* Background gradient instead of image */}
      <div className="absolute inset-0 z-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
        <div className={`absolute inset-0 bg-gradient-to-br ${color}`}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 p-6 sm:text-center md:text-left">
        <motion.div 
          className={`mb-4 bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto md:mx-0 ${color.includes('blue') ? 'bg-blue-100' : color.includes('green') ? 'bg-green-100' : color.includes('amber') ? 'bg-amber-100' : color.includes('red') ? 'bg-red-100' : 'bg-purple-100'}`}
          animate={{ 
            rotate: isHovered ? [0, 10, -10, 10, 0] : 0,
            scale: isHovered ? 1.1 : 1
          }}
          transition={{ duration: 0.5 }}
        >
          <Icon size={28} className={`${color.includes('blue') ? 'text-blue-600' : color.includes('green') ? 'text-green-600' : color.includes('amber') ? 'text-amber-600' : color.includes('red') ? 'text-red-600' : 'text-purple-600'}`} />
        </motion.div>
        
        <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-5">{description}</p>
        
        <motion.div 
          whileHover={{ x: 5 }}
          className="inline-block"
        >
          <Link 
            href={`/services#${title.toLowerCase().replace(/\s+/g, '-')}`} 
            className={`font-semibold flex items-center gap-1 group ${color.includes('blue') ? 'text-blue-600' : color.includes('green') ? 'text-green-600' : color.includes('amber') ? 'text-amber-600' : color.includes('red') ? 'text-red-600' : 'text-purple-600'}`}
          >
            Learn More
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById('services-section');
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const services = [
    {
      icon: FaBox,
      title: "Packaging Solutions",
      description: "Comprehensive packaging solutions tailored to your product specifications and brand requirements.",
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: FaPrint,
      title: "Custom Printing",
      description: "High-quality printing services to make your packaging stand out with your unique brand identity.",
      color: "from-purple-500 to-purple-700"
    },
    {
      icon: FaLeaf,
      title: "Eco-Friendly Options",
      description: "Sustainable packaging alternatives that reduce environmental impact without compromising quality.",
      color: "from-green-500 to-green-700"
    },
    {
      icon: FaShippingFast,
      title: "Bulk Orders",
      description: "Efficient handling of large volume orders with competitive pricing and timely delivery.",
      color: "from-red-500 to-red-700"
    },
    {
      icon: FaPencilRuler,
      title: "Custom Design",
      description: "Expert design services to create packaging that perfectly fits your product and enhances brand appeal.",
      color: "from-amber-500 to-amber-700"
    },
  ];

  return (
    <section id="services-section" className="py-16 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of packaging and printing services to meet all your business needs.
            From concept to delivery, we ensure quality at every step.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link 
            href="/services" 
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 hover:shadow-lg"
          >
            Explore All Services
          </Link>
        </motion.div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-blue-100 opacity-40"></div>
        <div className="absolute left-1/4 top-1/2 w-32 h-32 rounded-full bg-green-100 opacity-30"></div>
        <div className="absolute right-1/3 bottom-24 w-48 h-48 rounded-full bg-purple-100 opacity-20"></div>
      </div>
    </section>
  );
};

export default Services; 