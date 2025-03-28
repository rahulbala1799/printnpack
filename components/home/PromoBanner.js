"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaGift } from 'react-icons/fa';

const PromoBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 12,
    minutes: 30,
    seconds: 0,
  });
  
  const [hasExpired, setHasExpired] = useState(false);
  const [isFlashing, setIsFlashing] = useState(false);

  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  };

  // Effect for the countdown timer
  useEffect(() => {
    // Calculate the end date (2 days, 12 hours, 30 minutes from now)
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + timeLeft.days);
    endDate.setHours(endDate.getHours() + timeLeft.hours);
    endDate.setMinutes(endDate.getMinutes() + timeLeft.minutes);
    endDate.setSeconds(endDate.getSeconds() + timeLeft.seconds);

    const timer = setInterval(() => {
      const now = new Date();
      const difference = endDate - now;

      if (difference <= 0) {
        clearInterval(timer);
        setHasExpired(true);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Effect for the flashing attention effect
  useEffect(() => {
    const flashInterval = setInterval(() => {
      setIsFlashing(prev => !prev);
    }, 2000);
    
    return () => clearInterval(flashInterval);
  }, []);

  if (hasExpired) {
    return null; // Don't show the banner if the offer has expired
  }

  // CSS variables for the glow effect
  const glowStyles = {
    boxShadow: isFlashing 
      ? '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073' 
      : '0 0 5px #fff, 0 0 10px #e60073',
    transition: 'box-shadow 0.5s ease-in-out'
  };

  return (
    <motion.div 
      className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-800 text-white py-3 px-4 relative overflow-hidden"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated particles in the background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-white opacity-30"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              scale: 0.5
            }}
            animate={{ 
              x: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
              y: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
              scale: [0.5, 1, 0.5],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: Math.random() * 5 + 10, 
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto">
        {/* New Customer Badge - Repositioned for mobile */}
        <motion.div 
          className="absolute top-0 right-0 md:right-4 bg-yellow-400 text-black font-bold py-1 px-3 rounded-b-lg shadow-lg transform -translate-y-0 hidden md:block"
          initial={{ y: -40 }}
          animate={{ y: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 20 
          }}
        >
          New Customer Offer!
        </motion.div>
        
        {/* Mobile Badge - Inline at the top */}
        <div className="w-full flex justify-center mb-2 md:hidden">
          <motion.div 
            className="bg-yellow-400 text-black font-bold py-1 px-3 rounded-lg shadow-lg text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            New Customer Offer!
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
          {/* Offer Message */}
          <div className="flex-1 mb-4 md:mb-0 text-center md:text-left flex items-center">
            <motion.div 
              className="mr-3 hidden md:block"
              animate={{ rotate: [0, 10, 0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <FaGift className="text-3xl text-yellow-300" />
            </motion.div>
            <div>
              <motion.h3 
                className="text-xl md:text-2xl font-bold mb-1"
                style={glowStyles}
                animate={{ scale: isFlashing ? 1.05 : 1 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-yellow-300">15% OFF</span> Your First Order!
              </motion.h3>
              <p className="text-sm md:text-base opacity-90">
                Contact us today to claim this exclusive offer
              </p>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="flex-1 flex flex-col md:flex-row justify-center md:justify-end items-center">
            <div className="text-center md:text-right mb-3 md:mb-0 md:mr-4">
              <p className="text-sm font-medium">Offer Expires In:</p>
            </div>
            <div className="flex space-x-2 md:space-x-3">
              <motion.div 
                className="flex flex-col items-center"
                whileHover={{ scale: 1.1 }}
              >
                <div className="bg-white bg-opacity-20 rounded-md px-2 py-1 w-12 md:w-14 text-center backdrop-blur-sm border border-white/20">
                  <span className="text-xl md:text-2xl font-bold">{timeLeft.days}</span>
                </div>
                <span className="text-xs mt-1">Days</span>
              </motion.div>
              <motion.div 
                className="flex flex-col items-center"
                whileHover={{ scale: 1.1 }}
              >
                <div className="bg-white bg-opacity-20 rounded-md px-2 py-1 w-12 md:w-14 text-center backdrop-blur-sm border border-white/20">
                  <span className="text-xl md:text-2xl font-bold">{timeLeft.hours}</span>
                </div>
                <span className="text-xs mt-1">Hours</span>
              </motion.div>
              <motion.div 
                className="flex flex-col items-center"
                whileHover={{ scale: 1.1 }}
              >
                <div className="bg-white bg-opacity-20 rounded-md px-2 py-1 w-12 md:w-14 text-center backdrop-blur-sm border border-white/20">
                  <span className="text-xl md:text-2xl font-bold">{timeLeft.minutes}</span>
                </div>
                <span className="text-xs mt-1">Mins</span>
              </motion.div>
              <motion.div 
                className="flex flex-col items-center"
                whileHover={{ scale: 1.1 }}
              >
                <div className="bg-white bg-opacity-20 rounded-md px-2 py-1 w-12 md:w-14 text-center backdrop-blur-sm border border-white/20">
                  <span className="text-xl md:text-2xl font-bold">{timeLeft.seconds}</span>
                </div>
                <span className="text-xs mt-1">Secs</span>
              </motion.div>
            </div>
            <div className="hidden md:block ml-6">
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/contact" passHref>
                  <motion.button 
                    className="bg-yellow-400 text-black font-bold py-2 px-4 rounded hover:bg-yellow-300 transition-all flex items-center shadow-lg"
                    animate={{ 
                      boxShadow: isFlashing ? 
                        "0 0 8px rgba(250, 204, 21, 0.8), 0 0 16px rgba(250, 204, 21, 0.6)" :
                        "0 4px 6px rgba(0, 0, 0, 0.2)"
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    Contact Us <FaArrowRight className="ml-2" />
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Mobile CTA */}
        <div className="md:hidden w-full flex justify-center mt-4">
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/contact" passHref>
              <motion.button 
                className="bg-yellow-400 text-black font-bold py-2 px-4 rounded hover:bg-yellow-300 transition-all flex items-center shadow-lg"
                animate={{ 
                  boxShadow: isFlashing ? 
                    "0 0 8px rgba(250, 204, 21, 0.8), 0 0 16px rgba(250, 204, 21, 0.6)" : 
                    "0 4px 6px rgba(0, 0, 0, 0.2)"
                }}
                transition={{ duration: 0.5 }}
              >
                Contact Us <FaArrowRight className="ml-2" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default PromoBanner; 