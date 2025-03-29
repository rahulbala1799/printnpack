"use client"
import React, { useState, useEffect } from 'react';
import { FaBox, FaPrint, FaLeaf, FaShippingFast, FaPencilRuler } from 'react-icons/fa';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ServiceCard = ({ icon: Icon, title, description, color, index, imageSrc }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg overflow-hidden relative group text-center md:text-left"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
    >
      {/* Top gradient bar */}
      <div className={`h-2 bg-gradient-to-r ${color}`}></div>
      
      {/* Background gradient */}
      <div className="absolute inset-0 z-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
        <div className={`absolute inset-0 bg-gradient-to-br ${color}`}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 p-6">
        <div className="flex flex-col md:flex-row md:items-start gap-4">
          {/* Left content */}
          <div className="flex flex-col items-center md:items-start">
            <motion.div 
              className={`mb-4 bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center ${color.includes('blue') ? 'bg-blue-100' : color.includes('green') ? 'bg-green-100' : color.includes('amber') ? 'bg-amber-100' : color.includes('red') ? 'bg-red-100' : 'bg-purple-100'}`}
              animate={{ 
                rotate: isHovered ? [0, 10, -10, 10, 0] : 0,
                scale: isHovered ? 1.1 : 1
              }}
              transition={{ duration: 0.5 }}
            >
              <Icon size={28} className={`${color.includes('blue') ? 'text-blue-600' : color.includes('green') ? 'text-green-600' : color.includes('amber') ? 'text-amber-600' : color.includes('red') ? 'text-red-600' : 'text-purple-600'}`} />
            </motion.div>
            
            <h3 className="text-xl font-bold mb-3 text-gray-900 w-full">{title}</h3>
            <p className="text-gray-600 mb-5 w-full">{description}</p>
            
            <motion.div 
              whileHover={{ x: 5 }}
              className="flex justify-center md:justify-start w-full"
            >
              <Link 
                href={`/services#${title.toLowerCase().replace(/\s+/g, '-')}`} 
                className={`font-semibold inline-flex items-center gap-1 group ${color.includes('blue') ? 'text-blue-600' : color.includes('green') ? 'text-green-600' : color.includes('amber') ? 'text-amber-600' : color.includes('red') ? 'text-red-600' : 'text-purple-600'}`}
              >
                Learn More
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </motion.div>
          </div>
          
          {/* Right side - Product image */}
          <div className="md:w-1/3 flex-shrink-0 hidden md:block">
            <div className="relative h-32 w-32 ml-auto opacity-90 group-hover:opacity-100 transition-opacity">
              <Image
                src={imageSrc}
                alt={title}
                width={128}
                height={128}
                className="object-contain"
                unoptimized={process.env.NODE_ENV === 'production'}
              />
            </div>
          </div>
        </div>
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
    color: "from-blue-500 to-blue-700",
    imageSrc: "/images/ifa/heroh/pizza.png"
  },
  {
    icon: FaPrint,
    title: "Custom Printing",
    description: "High-quality printing services to make your packaging stand out with your unique brand identity.",
    color: "from-purple-500 to-purple-700",
    imageSrc: "/images/ifa/heroh/bag.png"
  },
  {
    icon: FaLeaf,
    title: "Eco-Friendly Options",
    description: "Sustainable packaging alternatives that reduce environmental impact without compromising quality.",
    color: "from-green-500 to-green-700",
    imageSrc: "/images/ifa/heroh/burger.png"
  },
  {
    icon: FaShippingFast,
    title: "Bulk Orders",
    description: "Efficient handling of large volume orders with competitive pricing and timely delivery.",
    color: "from-red-500 to-red-700",
    imageSrc: "/images/ifa/heroh/napkin.png"
  },
  {
    icon: FaPencilRuler,
    title: "Custom Design",
    description: "Expert design services to create packaging that perfectly fits your product and enhances brand appeal.",
    color: "from-amber-500 to-amber-700",
    imageSrc: "/images/ifa/heroh/leaflet.png"
  }
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
        
        {/* Featured Service Showcase */}
        <motion.div 
          className="bg-white rounded-xl shadow-xl overflow-hidden mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 relative">
              <div className="h-64 md:h-full w-full relative overflow-hidden">
                <div className="w-full h-full bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center">
                  <span className="text-white text-xl font-semibold">Premium Packaging Service</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 md:p-8">
                  <div className="bg-white/90 backdrop-blur-sm px-4 py-3 rounded-lg inline-block mb-2">
                    <span className="text-blue-800 font-bold">Featured Service</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-lg">Complete Packaging Solutions</h3>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 p-6 md:p-8">
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <FaBox className="text-2xl text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">End-to-End Packaging Excellence</h3>
                <p className="text-gray-700 mb-4">
                  Our comprehensive packaging service takes care of every aspect of your packaging needs, from initial design to final delivery.
                  We handle material selection, structural design, graphics, printing, finishing, and logistics integration.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start">
                    <div className="rounded-full bg-green-100 p-2 mr-2">
                      <FaLeaf className="text-green-600" />
                    </div>
                    <span className="text-sm text-gray-700">Eco-Friendly Materials</span>
                  </div>
                  <div className="flex items-start">
                    <div className="rounded-full bg-amber-100 p-2 mr-2">
                      <FaPrint className="text-amber-600" />
                    </div>
                    <span className="text-sm text-gray-700">Custom Branding</span>
                  </div>
                  <div className="flex items-start">
                    <div className="rounded-full bg-purple-100 p-2 mr-2">
                      <FaPencilRuler className="text-purple-600" />
                    </div>
                    <span className="text-sm text-gray-700">Expert Design</span>
                  </div>
                  <div className="flex items-start">
                    <div className="rounded-full bg-red-100 p-2 mr-2">
                      <FaShippingFast className="text-red-600" />
                    </div>
                    <span className="text-sm text-gray-700">Fast Production</span>
                  </div>
                </div>
              </div>
              
              <Link 
                href="/services" 
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 hover:shadow-lg"
              >
                Learn More About Our Services
              </Link>
            </div>
          </div>
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
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 