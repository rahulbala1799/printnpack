import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const SectionDivider = ({ variant = 'default' }) => {
  const bgColors = {
    default: 'from-transparent to-gray-50',
    blue: 'from-transparent to-blue-50',
    dark: 'from-transparent to-gray-100',
  };
  
  // Select images based on variant
  const leftImageSrc = variant === 'default' ? '/images/ifa/heroh/4.png' :
                      variant === 'blue' ? '/images/ifa/heroh/6.png' : 
                      '/images/ifa/heroh/8.png';
                      
  const rightImageSrc = variant === 'default' ? '/images/ifa/heroh/3.png' :
                       variant === 'blue' ? '/images/ifa/heroh/5.png' : 
                       '/images/ifa/heroh/7.png';
  
  return (
    <div className={`relative w-full h-32 md:h-40 bg-gradient-to-b ${bgColors[variant]}`}>
      <div className="container mx-auto relative h-full">
        <motion.div 
          className="absolute -left-10 top-1/2 transform -translate-y-1/2 w-32 h-32 opacity-10 hidden lg:block"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 0.1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src={leftImageSrc}
            alt="Decorative packaging"
            width={300}
            height={300}
            style={{ objectFit: 'contain', width: '100%', height: '100%' }}
          />
        </motion.div>
        
        <motion.div 
          className="absolute -right-10 top-1/2 transform -translate-y-1/2 w-40 h-40 opacity-10 hidden lg:block"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 0.1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src={rightImageSrc}
            alt="Decorative packaging"
            width={300}
            height={300}
            style={{ objectFit: 'contain', width: '100%', height: '100%' }}
          />
        </motion.div>
        
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default SectionDivider; 