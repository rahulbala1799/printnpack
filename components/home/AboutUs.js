import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaBox, 
  FaShippingFast, 
  FaLeaf, 
  FaRegCalendarCheck, 
  FaPizzaSlice,
  FaShoppingBag,
  FaHamburger,
  FaRecycle
} from 'react-icons/fa';

// Card with 3D hover effect
const FeatureCard = ({ icon: Icon, title, description, color, delay }) => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        delay: delay * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="perspective-1000"
    >
      <motion.div
        className={`bg-white rounded-xl shadow-lg border border-gray-100 p-8 text-center h-full ${isHovered ? 'shadow-xl' : ''}`}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ 
          rotateX: 5, 
          rotateY: 5, 
          scale: 1.05,
          transition: { duration: 0.4 }
        }}
      >
        <div className="relative mb-8">
          <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center ${color} transition-all duration-300`}>
            <motion.div
              animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Icon size={32} className="text-white" />
            </motion.div>
          </div>
          <motion.div 
            className={`absolute inset-0 rounded-full ${color} opacity-30`}
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          />
        </div>
        
        <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <motion.div
          className="inline-block"
          whileHover={{ x: 4 }}
        >
          <Link 
            href="/about" 
            className={`font-medium text-blue-600 inline-flex items-center group`}
          >
            Learn more
            <motion.span 
              className="ml-1"
              animate={isHovered ? { x: 3 } : { x: 0 }}
              transition={{ duration: 0.2 }}
            >
              →
            </motion.span>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// Main component
const AboutUs = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const features = [
    {
      icon: FaBox,
      title: "Low MOQ",
      description: "Custom printed packaging with minimums as low as 100 units, making professional packaging accessible to all businesses.",
      color: "bg-blue-600",
      delay: 0
    },
    {
      icon: FaShippingFast,
      title: "Fast Turnaround",
      description: "Industry-leading 7-day standard turnaround with express options available for urgent packaging needs.",
      color: "bg-amber-500",
      delay: 1
    },
    {
      icon: FaRegCalendarCheck,
      title: "Weekly Deliveries",
      description: "Our unique weekly delivery service helps you manage inventory while ensuring you never run out of packaging.",
      color: "bg-purple-600",
      delay: 2
    },
    {
      icon: FaLeaf,
      title: "Eco-Friendly",
      description: "Sustainable materials and production processes that reduce environmental impact without compromising quality.",
      color: "bg-green-600",
      delay: 3
    }
  ];

  const products = [
    {
      icon: FaPizzaSlice,
      label: "Pizza Boxes"
    },
    {
      icon: FaShoppingBag,
      label: "Paper Bags"
    },
    {
      icon: FaHamburger,
      label: "Burger Boxes"
    },
    {
      icon: FaRecycle,
      label: "Eco Materials"
    }
  ];

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        delay: 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-white via-white to-blue-50">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100 rounded-full -mr-64 -mt-64 opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-green-100 rounded-full -ml-64 -mb-64 opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-purple-100 rounded-full opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div ref={ref} className="text-center mb-12">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={headingVariants}
            className="inline-block mb-4"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              About PrintNPack
            </h2>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            animate={controls}
            variants={textVariants}
            className="max-w-3xl mx-auto"
          >
            <p className="text-lg text-gray-700 mb-8">
              Ireland's premier packaging specialist, delivering high-quality printed 
              <span className="font-semibold text-blue-800"> pizza boxes</span>, 
              <span className="font-semibold text-blue-800"> paper bags</span>, and
              <span className="font-semibold text-blue-800"> burger boxes</span> with 
              industry-leading turnaround times and low minimum order quantities.
            </p>
          </motion.div>
          
          {/* Product icons with animations */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={controls}
                variants={{
                  visible: { 
                    opacity: 1, 
                    scale: 1,
                    transition: { delay: 0.3 + (index * 0.1), duration: 0.5 }
                  }
                }}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-2 shadow-md">
                  <product.icon size={28} className="text-blue-600" />
                </div>
                <span className="text-sm font-medium text-gray-800">{product.label}</span>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { delay: 0.5, duration: 0.6 }
              }
            }}
          >
            <Link
              href="/about"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1"
            >
              Discover Our Story
            </Link>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { delay: 0.8, duration: 0.6 }
            }
          }}
        >
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-lg">
            <span className="font-bold text-blue-800">100% Irish Owned & Operated</span>
            <span className="mx-2 text-blue-400">•</span>
            <span className="text-blue-700">Proudly serving businesses across Ireland</span>
          </div>
        </motion.div>
        
        {/* Add some CSS animations directly */}
        <style jsx global>{`
          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
          .perspective-1000 {
            perspective: 1000px;
          }
        `}</style>
      </div>
    </section>
  );
};

export default AboutUs;