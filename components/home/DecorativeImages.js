import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ImagePositions = {
  header: [
    { src: '/images/ifa/heroh/1.png', className: 'absolute top-10 -right-20 w-64 opacity-20 hidden lg:block', alt: 'Decorative packaging 1' },
    { src: '/images/ifa/heroh/2.png', className: 'absolute -bottom-10 -left-16 w-48 opacity-15 hidden lg:block', alt: 'Decorative packaging 2' }
  ],
  section1: [
    { src: '/images/ifa/heroh/3.png', className: 'absolute top-1/4 -left-10 w-40 opacity-15 hidden lg:block', alt: 'Decorative packaging 3' },
    { src: '/images/ifa/heroh/4.png', className: 'absolute bottom-20 -right-16 w-56 opacity-20 hidden lg:block', alt: 'Decorative packaging 4' }
  ],
  section2: [
    { src: '/images/ifa/heroh/5.png', className: 'absolute top-10 -right-24 w-60 opacity-15 hidden lg:block', alt: 'Decorative packaging 5' },
    { src: '/images/ifa/heroh/6.png', className: 'absolute -bottom-16 left-10 w-44 opacity-20 hidden lg:block', alt: 'Decorative packaging 6' }
  ],
  footer: [
    { src: '/images/ifa/heroh/7.png', className: 'absolute top-1/3 -left-16 w-52 opacity-20 hidden lg:block', alt: 'Decorative packaging 7' },
    { src: '/images/ifa/heroh/8.png', className: 'absolute -bottom-10 -right-10 w-48 opacity-15 hidden lg:block', alt: 'Decorative packaging 8' }
  ]
};

const DecorativeImages = ({ position = 'header' }) => {
  // Select images based on the position prop
  const images = ImagePositions[position] || [];
  
  return (
    <div className="relative overflow-hidden">
      {images.map((img, index) => (
        <motion.div
          key={index}
          className={img.className}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: index * 0.2 }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            width={500}
            height={500}
            style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default DecorativeImages; 