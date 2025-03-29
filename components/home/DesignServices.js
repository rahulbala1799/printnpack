import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const DesignServices = () => {
  const [hoveredService, setHoveredService] = useState(null);
  
  const designServices = [
    {
      id: 'posters',
      title: 'Posters',
      description: 'Eye-catching posters that demand attention and convey your message with impact.',
      image: '/images/ifa/heroh/2.png',
      color: 'from-purple-600 to-indigo-700',
      accent: 'bg-purple-400',
      pattern: 'radial-gradient(circle, purple 1px, transparent 1px)',
      patternSize: '20px 20px'
    },
    {
      id: 'vinyls',
      title: 'Vinyls',
      description: 'Premium vinyl stickers and graphics for branding that sticks with your customers.',
      image: '/images/ifa/heroh/3.png',
      color: 'from-blue-600 to-cyan-700',
      accent: 'bg-blue-400',
      pattern: 'linear-gradient(45deg, #4f46e5 25%, transparent 25%, transparent 50%, #4f46e5 50%, #4f46e5 75%, transparent 75%, transparent)',
      patternSize: '20px 20px'
    },
    {
      id: 'leaflets',
      title: 'Leaflets',
      description: "Professional leaflets that put your information directly into customers' hands.",
      image: '/images/ifa/heroh/leaflet.png',
      color: 'from-green-600 to-teal-700',
      accent: 'bg-green-400',
      pattern: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.05), rgba(0,0,0,0.05) 2px, transparent 2px, transparent 4px)',
      patternSize: '20px 20px'
    },
    {
      id: 'menus',
      title: 'Menus',
      description: 'Appetizing menu designs that showcase your offerings and enhance the dining experience.',
      image: '/images/ifa/heroh/5.png',
      color: 'from-orange-600 to-amber-700',
      accent: 'bg-orange-400',
      pattern: 'repeating-radial-gradient(circle at 0 0, transparent 0, rgba(255,255,255,0.1) 8px), repeating-linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0))',
      patternSize: '20px 20px'
    }
  ];
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Dynamic background with design element grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-95"></div>
      
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid lines */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>
        
        {/* Design accent circles */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full opacity-20 bg-gradient-to-br from-blue-500 to-purple-600 blur-3xl"></div>
        <div className="absolute top-1/3 left-0 -ml-20 w-80 h-80 rounded-full opacity-10 bg-gradient-to-br from-yellow-400 to-orange-500 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 -mb-32 w-80 h-80 rounded-full opacity-10 bg-gradient-to-br from-green-400 to-teal-500 blur-3xl"></div>
        
        {/* Floating design elements */}
        <motion.div 
          className="absolute top-20 left-10 w-20 h-20 opacity-20 hidden lg:block"
          initial={{ y: 0 }}
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        >
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="white">
            <path d="M45.4,-52.9C58.9,-39.1,70.3,-25.2,74.3,-9C78.3,7.2,74.9,25.8,64.4,38.7C53.9,51.7,36.3,59.1,18.1,66.2C-0.2,73.3,-18.9,80.1,-33.9,74.9C-48.9,69.6,-60.1,52.2,-70.3,33.3C-80.6,14.4,-89.9,-6,-86.9,-24.4C-83.9,-42.8,-68.7,-59.3,-51,-69.3C-33.3,-79.3,-13.1,-82.8,2.9,-86.3C19,-89.7,31.9,-66.8,45.4,-52.9Z" transform="translate(100 100)" />
          </svg>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-20 right-10 w-24 h-24 opacity-20 hidden lg:block"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="white">
            <path d="M44.3,-65.2C53.2,-55.1,53.2,-36.6,53.2,-21.6C53.2,-6.6,53.5,5,53.9,20.8C54.3,36.5,54.9,56.4,45.9,66.5C36.8,76.6,18.1,76.9,0.9,76.1C-16.3,75.3,-32.6,73.4,-46.6,64.9C-60.5,56.3,-71.7,41.1,-73.9,25.2C-76.1,9.3,-69.3,-7.2,-63.8,-23.9C-58.3,-40.5,-54.2,-57.3,-43.5,-66.5C-32.7,-75.8,-15.9,-77.4,0.5,-78.5C18,-79.5,35.2,-75.3,44.1,-65.2Z" transform="translate(100 100)" />
          </svg>
        </motion.div>
        
        <motion.div 
          className="absolute top-1/2 left-1/3 w-16 h-16 opacity-30 hidden lg:block"
          animate={{ 
            scale: [1, 1.2, 1],
            rotateZ: [0, 10, -10, 0]
          }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        >
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="white">
            <path d="M39.5,-63.4C49.3,-56.9,54.3,-42.6,59.8,-29.1C65.4,-15.6,71.4,-2.8,70.4,9.2C69.4,21.2,61.3,32.5,51.3,41.3C41.3,50.1,29.5,56.4,16.5,61.2C3.5,65.9,-10.8,69,-24.5,66.7C-38.2,64.4,-51.3,56.7,-60.4,45.1C-69.4,33.5,-74.4,18,-73.3,3.3C-72.2,-11.4,-64.9,-25.4,-55.3,-36.3C-45.7,-47.3,-33.7,-55.2,-21.1,-59.6C-8.5,-64,-2.1,-65,7.8,-77.1C17.7,-89.3,29.7,-112.5,39.5,-63.4Z" transform="translate(100 100)" />
          </svg>
        </motion.div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section heading with creative elements */}
        <div className="relative mb-16 text-center">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="inline-block"
          >
            <span className="font-light text-xl text-gray-300 tracking-wide block mb-2">Creative Solutions For Your Business</span>
            <h2 className="text-5xl md:text-6xl font-bold mb-3 relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Design Services</span>
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400"
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: '100%', opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              ></motion.span>
            </h2>
          </motion.div>
          
          <motion.p 
            className="text-lg text-gray-300 max-w-xl mx-auto mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            We blend creativity with strategy to design materials that capture attention
            and communicate your message at affordable prices.
          </motion.p>
        </div>
        
        {/* Design services grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {designServices.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="relative rounded-xl overflow-hidden group cursor-pointer perspective"
              style={{ height: '28rem' }}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* 3D card tilt effect wrapper */}
              <motion.div
                className="w-full h-full relative"
                animate={hoveredService === service.id ? {
                  rotateX: [0, 2, 0],
                  rotateY: [0, 5, 0]
                } : {}}
                transition={{ duration: 0.3 }}
              >
                {/* Background gradient and pattern */}
                <div 
                  className={`absolute inset-0 z-0 bg-gradient-to-br ${service.color} transition-all duration-500 ${
                    hoveredService === service.id ? 'opacity-100' : 'opacity-95'
                  }`}
                  style={{
                    backgroundImage: service.pattern,
                    backgroundSize: service.patternSize
                  }}
                ></div>
                
                {/* Decorative elements */}
                <div className={`absolute top-0 right-0 w-40 h-40 rounded-full ${service.accent} opacity-20 blur-xl transform translate-x-10 -translate-y-10 transition-all duration-500 ${
                  hoveredService === service.id ? 'scale-125' : 'scale-100'
                }`}></div>
                <div className={`absolute bottom-0 left-0 w-32 h-32 rounded-full ${service.accent} opacity-10 blur-xl transform -translate-x-10 translate-y-10 transition-all duration-700 ${
                  hoveredService === service.id ? 'scale-125' : 'scale-100'
                }`}></div>
                
                {/* Service content */}
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white p-6 transition-all duration-500">
                  {/* Animated circle behind image */}
                  <motion.div
                    className="absolute w-40 h-40 rounded-full border-2 border-white/30 opacity-50"
                    animate={hoveredService === service.id ? {
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.7, 0.5]
                    } : {}}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  ></motion.div>
                  
                  <motion.div 
                    className="relative h-40 w-40 mb-6 transition-transform duration-700 z-20"
                    animate={hoveredService === service.id ? { 
                      scale: 1.1,
                      y: -10
                    } : {
                      scale: 1,
                      y: 0
                    }}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-contain drop-shadow-xl"
                      style={{ filter: 'brightness(1.05) contrast(1.05)' }}
                    />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold relative mb-4 z-20">
                    <span className="relative">
                      {service.title}
                      <motion.span 
                        className={`absolute -bottom-1 left-0 h-0.5 bg-white transform origin-left transition-all duration-300`}
                        animate={hoveredService === service.id ? { width: '100%' } : { width: '0%' }}
                      ></motion.span>
                    </span>
                  </h3>
                  
                  <p className="text-center text-white/90 mb-5 max-w-xs z-20">{service.description}</p>
                  
                  <motion.div
                    animate={hoveredService === service.id ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="z-20"
                  >
                    <Link 
                      href="/services" 
                      className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 transition-all duration-300 text-sm font-medium flex items-center"
                    >
                      <span>Learn More</span>
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Call to action */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="relative inline-block">
            {/* Animated glow effect */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 rounded-lg opacity-70 blur-xl"
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.7, 0.9, 0.7]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            ></motion.div>
            
            <Link 
              href="/services#design" 
              className="relative inline-flex items-center justify-center bg-gray-900 text-white py-3 px-8 rounded-lg font-medium z-10 border border-white/10 shadow-xl"
            >
              <span>View Design Portfolio</span>
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
          
          <motion.p 
            className="mt-4 text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <span className="text-xl font-light">Starting from just </span>
            <span className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-400">€49</span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default DesignServices; 