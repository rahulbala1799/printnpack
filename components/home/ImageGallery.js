import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  
  const images = [
    { 
      src: '/images/ifa/heroh/1.png', 
      alt: 'Premium packaging product 1',
      size: 'large' // large images span 2 columns or rows
    },
    { 
      src: '/images/ifa/heroh/2.png', 
      alt: 'Premium packaging product 2',
      size: 'medium'
    },
    { 
      src: '/images/ifa/heroh/3.png', 
      alt: 'Premium packaging product 3',
      size: 'medium'
    },
    { 
      src: '/images/ifa/heroh/4.png', 
      alt: 'Premium packaging product 4',
      size: 'large'
    },
    { 
      src: '/images/ifa/heroh/5.png', 
      alt: 'Premium packaging product 5',
      size: 'medium'
    },
    { 
      src: '/images/ifa/heroh/6.png', 
      alt: 'Premium packaging product 6',
      size: 'large'
    },
    { 
      src: '/images/ifa/heroh/7.png', 
      alt: 'Premium packaging product 7',
      size: 'medium'
    },
    { 
      src: '/images/ifa/heroh/8.png', 
      alt: 'Premium packaging product 8',
      size: 'medium'
    }
  ];

  const openModal = (image) => {
    setModalImage(image);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Helper function to get the appropriate class based on image size
  const getSizeClass = (size) => {
    // On mobile devices, all items are single-cell for consistency
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      return '';
    }
    
    // On desktop, use the masonry layout
    switch(size) {
      case 'large':
        return 'md:col-span-2 md:row-span-2';
      case 'wide':
        return 'md:col-span-2';
      case 'tall':
        return 'md:row-span-2';
      default:
        return '';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-gray-800">Our Premium Products</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8 md:mb-12 px-2">
            Explore our range of high-quality packaging solutions designed for businesses that value presentation and sustainability.
          </p>
        </motion.div>

        {/* Large Preview */}
        {selectedImage && (
          <motion.div 
            className="gallery-selected-preview relative w-full h-64 md:h-96 mb-6 md:mb-10 overflow-hidden rounded-xl shadow-lg cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => openModal(selectedImage)}
          >
            <Image
              src={selectedImage}
              alt="Selected packaging product"
              fill
              style={{ objectFit: 'contain' }}
              className="bg-white p-4"
            />
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-10 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-sm font-medium bg-black bg-opacity-70 py-1 px-3 rounded-full">
                Click to enlarge
              </span>
            </div>
          </motion.div>
        )}

        {/* Mobile Gallery View - Simplified grid */}
        <div className="block md:hidden">
          <div className="grid grid-cols-2 gap-3">
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="aspect-square relative overflow-hidden rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow cursor-pointer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => {
                  setSelectedImage(image.src);
                  window.scrollTo({
                    top: document.querySelector('.gallery-selected-preview')?.offsetTop - 80 || 0,
                    behavior: 'smooth'
                  });
                }}
              >
                <div className="aspect-square w-full h-full relative">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 50vw"
                    style={{ objectFit: 'contain' }}
                    className="p-2"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop Masonry Gallery - Hidden on mobile */}
        <div className="hidden md:block">
          <div className="grid grid-cols-4 auto-rows-auto gap-4 md:gap-6">
            {images.map((image, index) => (
              <motion.div
                key={index}
                className={`${getSizeClass(image.size)} relative overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow cursor-pointer`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => {
                  setSelectedImage(image.src);
                  window.scrollTo({
                    top: document.querySelector('.gallery-selected-preview')?.offsetTop - 100 || 0,
                    behavior: 'smooth'
                  });
                }}
              >
                <div className="aspect-square w-full h-full relative">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 768px) 25vw, 20vw"
                    style={{ objectFit: 'contain' }}
                    className="p-3 hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <motion.div 
          className="mt-8 md:mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-700 mb-4 md:mb-6 px-2">
            All products are available in custom sizes and designs to suit your specific requirements.
          </p>
          <a 
            href="/products" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 md:py-3 md:px-8 rounded-full font-medium transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            View All Products
          </a>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 z-10 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-white shadow-md text-gray-800 hover:bg-gray-100"
                onClick={closeModal}
              >
                ✕
              </button>
              <div className="relative w-full h-[60vh] md:h-[80vh]">
                <Image
                  src={modalImage}
                  alt="Enlarged product image"
                  fill
                  style={{ objectFit: 'contain' }}
                  quality={90}
                  className="p-4"
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ImageGallery; 