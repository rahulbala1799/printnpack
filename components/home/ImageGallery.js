import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import products from '../../data/products';

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [mobileProducts, setMobileProducts] = useState([]);
  
  // Filter out products with no images or hidden products
  const productGallery = products
    .filter(product => !product.hidden && product.images && product.images.length > 0)
    .map(product => ({
      id: product.id,
      name: product.name,
      category: product.category,
      imageSrc: product.imageSrc,
      images: product.images,
      size: getRandomSize() // Assign random sizes for visual interest
    }));

  // Function to get random size for masonry layout
  function getRandomSize() {
    const sizes = ['medium', 'medium', 'medium', 'large', 'medium', 'medium'];
    return sizes[Math.floor(Math.random() * sizes.length)];
  }
  
  // Select 6 random products for mobile view on initial load and when window is resized
  useEffect(() => {
    const shuffleProducts = () => {
      const shuffled = [...productGallery].sort(() => 0.5 - Math.random());
      setMobileProducts(shuffled.slice(0, 6));
    };
    
    shuffleProducts();
    
    // Re-shuffle on resize for better mobile experience
    const handleResize = () => {
      if (window.innerWidth < 768) {
        shuffleProducts();
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const openModal = (image, product) => {
    setModalImage(image);
    setSelectedProduct(product);
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-gray-800">Product Gallery</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8 md:mb-12 px-2">
            Browse through images of our quality packaging products in real-world applications, showcasing the versatility and visual appeal of our solutions.
          </p>
        </motion.div>

        {/* Large Preview */}
        {selectedImage && (
          <motion.div 
            className="gallery-selected-preview relative w-full h-64 md:h-96 mb-6 md:mb-10 overflow-hidden rounded-xl shadow-lg cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => openModal(selectedImage, selectedProduct)}
          >
            <Image
              src={selectedImage}
              alt={selectedProduct ? selectedProduct.name : "Selected packaging product"}
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

        {/* Mobile Gallery View - Simplified grid with randomized products */}
        <div className="block md:hidden">
          <div className="grid grid-cols-2 gap-3">
            {mobileProducts.map((product, index) => (
              <motion.div
                key={`mobile-${product.id}-${index}`}
                className="aspect-square relative overflow-hidden rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow cursor-pointer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => {
                  setSelectedImage(product.imageSrc);
                  setSelectedProduct(product);
                  window.scrollTo({
                    top: document.querySelector('.gallery-selected-preview')?.offsetTop - 80 || 0,
                    behavior: 'smooth'
                  });
                }}
              >
                <Link href={product.url || `/products/${product.id}`} className="aspect-square w-full h-full relative block">
                  <Image
                    src={product.imageSrc}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 50vw"
                    style={{ objectFit: 'contain' }}
                    className="p-2"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                    <p className="text-white text-xs font-medium truncate">{product.name}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop Masonry Gallery - Hidden on mobile */}
        <div className="hidden md:block">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-auto gap-4 md:gap-6">
            {productGallery.map((product, index) => (
              <motion.div
                key={`desktop-${product.id}-${index}`}
                className={`${getSizeClass(product.size)} relative overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow cursor-pointer`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onClick={() => {
                  setSelectedImage(product.imageSrc);
                  setSelectedProduct(product);
                  window.scrollTo({
                    top: document.querySelector('.gallery-selected-preview')?.offsetTop - 100 || 0,
                    behavior: 'smooth'
                  });
                }}
              >
                <Link href={product.url || `/products/${product.id}`} className="aspect-square w-full h-full relative block">
                  <Image
                    src={product.imageSrc}
                    alt={product.name}
                    fill
                    sizes="(min-width: 768px) 25vw, 20vw"
                    style={{ objectFit: 'contain' }}
                    className="p-3 hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                    <p className="text-white text-xs md:text-sm font-medium truncate">{product.name}</p>
                    <p className="text-blue-100 text-xs truncate">{product.category}</p>
                  </div>
                </Link>
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
          <Link 
            href="/products" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 md:py-3 md:px-8 rounded-full font-medium transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            View All Products
          </Link>
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
              <div className="relative w-full h-[60vh] md:h-[75vh]">
                <Image
                  src={modalImage}
                  alt={selectedProduct ? selectedProduct.name : "Enlarged product image"}
                  fill
                  style={{ objectFit: 'contain' }}
                  quality={90}
                  className="p-4"
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
              </div>
              {selectedProduct && (
                <div className="p-4 md:p-6 bg-white">
                  <h3 className="text-lg md:text-xl font-bold text-gray-800">{selectedProduct.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{selectedProduct.category}</p>
                  <Link 
                    href={selectedProduct.url || `/products/${selectedProduct.id}`}
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-1.5 px-4 rounded-lg text-sm font-medium transition-colors"
                  >
                    View Product Details
                  </Link>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ImageGallery; 