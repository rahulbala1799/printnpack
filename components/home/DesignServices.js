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
      accent: 'bg-purple-400'
    },
    {
      id: 'vinyls',
      title: 'Vinyls',
      description: 'Premium vinyl stickers and graphics for branding that sticks with your customers.',
      image: '/images/ifa/heroh/3.png',
      color: 'from-blue-600 to-cyan-700',
      accent: 'bg-blue-400'
    },
    {
      id: 'leaflets',
      title: 'Leaflets',
      description: "Professional leaflets that put your information directly into customers' hands.",
      image: '/images/ifa/heroh/leaflet.png',
      color: 'from-green-600 to-teal-700',
      accent: 'bg-green-400'
    },
    {
      id: 'menus',
      title: 'Menus',
      description: 'Appetizing menu designs that showcase your offerings and enhance the dining experience.',
      image: '/images/ifa/heroh/5.png',
      color: 'from-orange-600 to-amber-700',
      accent: 'bg-orange-400'
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
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Abstract design elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-gradient-to-br from-purple-300 to-pink-200 opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-56 h-56 rounded-full bg-gradient-to-tr from-blue-300 to-cyan-200 opacity-20 blur-3xl"></div>
      
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
            <span className="font-light text-xl text-gray-600 tracking-wide block mb-2">Elevate Your Brand With</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 relative inline-block">
              <span className="relative z-10">Design Services</span>
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-3 bg-yellow-300 opacity-50 rounded"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.4 }}
              ></motion.span>
            </h2>
          </motion.div>
          
          <motion.p 
            className="text-lg text-gray-600 max-w-xl mx-auto mt-4"
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
              className="relative rounded-xl overflow-hidden h-96 md:h-[28rem] group"
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Background gradient that changes on hover */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${service.color} transition-opacity duration-500 ${
                  hoveredService === service.id ? 'opacity-95' : 'opacity-90'
                }`}
              ></div>
              
              {/* Decorative elements */}
              <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full ${service.accent} opacity-20`}></div>
              <div className={`absolute -bottom-12 -left-12 w-32 h-32 rounded-full ${service.accent} opacity-10`}></div>
              
              {/* Service content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 transition-all duration-500 transform">
                <motion.div 
                  className="relative h-40 w-40 mb-6 group-hover:scale-110 transition-transform duration-500"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.7 }}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-contain drop-shadow-lg"
                    style={{ filter: 'brightness(1.05) contrast(1.05)' }}
                  />
                </motion.div>
                
                <h3 className="text-2xl font-bold mb-3 relative">
                  {service.title}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </h3>
                
                <p className="text-center text-white/90 mb-5 max-w-xs">{service.description}</p>
                
                <Link 
                  href="/services" 
                  className="px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 transition-all duration-300 text-sm font-medium"
                >
                  Learn More
                </Link>
              </div>
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
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur-md opacity-70 transform scale-105"></div>
            <Link 
              href="/services#design" 
              className="relative inline-flex items-center justify-center bg-gray-900 text-white py-3 px-8 rounded-lg font-medium z-10"
            >
              <span>View Design Portfolio</span>
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
          
          <p className="mt-4 text-gray-600">Affordable, professional design services starting from just €49</p>
        </motion.div>
      </div>
    </section>
  );
};

export default DesignServices; 