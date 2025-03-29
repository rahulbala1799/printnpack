import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const positionStyles = {
  'top-left': 'absolute top-0 left-0 transform -translate-x-1/3 -translate-y-1/4',
  'top-right': 'absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/4',
  'bottom-left': 'absolute bottom-0 left-0 transform -translate-x-1/3 translate-y-1/4',
  'bottom-right': 'absolute bottom-0 right-0 transform translate-x-1/3 translate-y-1/4',
  'center-left': 'absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2',
  'center-right': 'absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2',
};

const FloatingImages = ({ position = 'top-right', size = 'md', rotation = 5 }) => {
  // Select image based on position
  const imageIndex = {
    'top-left': '1.png',
    'top-right': '3.png',
    'bottom-left': '5.png',
    'bottom-right': '7.png',
    'center-left': '2.png',
    'center-right': '6.png',
  }[position] || '1.png';
  
  const imageSrc = `/images/ifa/heroh/${imageIndex}`;
  
  // Size classes
  const sizeClasses = {
    sm: 'w-40 h-40',
    md: 'w-60 h-60',
    lg: 'w-80 h-80'
  }[size] || 'w-60 h-60';
  
  // Animation for floating effect
  const floatingAnimation = {
    y: [0, -10, 0],
    rotate: [0, rotation, 0]
  };
  
  return (
    <div className={`${positionStyles[position]} overflow-visible pointer-events-none z-0 hidden lg:block`}>
      <motion.div 
        className={`${sizeClasses} opacity-20`}
        animate={floatingAnimation}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      >
        <Image
          src={imageSrc}
          alt="Floating product image"
          width={300}
          height={300}
          style={{ objectFit: 'contain', width: '100%', height: '100%' }}
        />
      </motion.div>
    </div>
  );
};

export default FloatingImages; 