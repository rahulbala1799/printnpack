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
    imageSrc: "/images/products/pizza-box.png"
  },
  {
    icon: FaPrint,
    title: "Custom Printing",
    description: "High-quality printing services to make your packaging stand out with your unique brand identity.",
    color: "from-purple-500 to-purple-700",
    imageSrc: "/images/products/paper-bag.png"
  },
  {
    icon: FaLeaf,
    title: "Eco-Friendly Options",
    description: "Sustainable packaging alternatives that reduce environmental impact without compromising quality.",
    color: "from-green-500 to-green-700",
    imageSrc: "/images/products/burger-box.png"
  }
] 