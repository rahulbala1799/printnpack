"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const PromoBanner = () => {
  // Set up countdown timer
  const [countdown, setCountdown] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });
  
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

  // Update countdown every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  // Format numbers to always be two digits
  const formatNumber = (num) => num.toString().padStart(2, '0');
  
  return (
    <div className="bg-black w-full overflow-hidden">
      <motion.div 
        className="py-4 px-6 flex flex-col sm:flex-row items-center justify-center gap-4"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Left side with heading and subheading */}
        <motion.div className="flex flex-col items-center sm:items-start" variants={itemVariants}>
          <h3 className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
            NEW CUSTOMER OFFER
          </h3>
          <p className="text-yellow-100 text-sm sm:text-base mt-1">First order discount for new customers</p>
        </motion.div>
        
        {/* Divider for desktop */}
        <motion.div className="hidden sm:block h-12 w-px bg-yellow-700" variants={itemVariants}></motion.div>
        
        {/* Discount amount */}
        <motion.div 
          className="flex items-center justify-center bg-gradient-to-r from-yellow-500 to-yellow-300 text-black font-extrabold text-xl sm:text-2xl px-4 py-2 rounded-lg shadow-glow-yellow"
          variants={itemVariants}
        >
          15% OFF
        </motion.div>
        
        {/* Countdown timer */}
        <motion.div className="flex flex-col items-center" variants={itemVariants}>
          <span className="text-yellow-400 text-xs uppercase font-semibold mb-1">Offer Expires In:</span>
          <div className="flex space-x-2 font-mono">
            <div className="flex flex-col items-center">
              <div className="bg-yellow-900/50 text-yellow-300 px-2 py-1 rounded font-bold w-10 text-center">
                {formatNumber(countdown.hours)}
              </div>
              <span className="text-yellow-500 text-xs mt-1">HRS</span>
            </div>
            <div className="text-yellow-400 font-bold self-start mt-1">:</div>
            <div className="flex flex-col items-center">
              <div className="bg-yellow-900/50 text-yellow-300 px-2 py-1 rounded font-bold w-10 text-center">
                {formatNumber(countdown.minutes)}
              </div>
              <span className="text-yellow-500 text-xs mt-1">MIN</span>
            </div>
            <div className="text-yellow-400 font-bold self-start mt-1">:</div>
            <div className="flex flex-col items-center">
              <div className="bg-yellow-900/50 text-yellow-300 px-2 py-1 rounded font-bold w-10 text-center">
                {formatNumber(countdown.seconds)}
              </div>
              <span className="text-yellow-500 text-xs mt-1">SEC</span>
            </div>
          </div>
        </motion.div>
        
        {/* CTA Button */}
        <motion.div variants={itemVariants}>
          <Link 
            href="/contact" 
            className="inline-block bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-black font-bold py-2 px-6 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            CLAIM NOW
          </Link>
        </motion.div>
      </motion.div>
      
      {/* Bottom border with gold gradient */}
      <div className="h-1 w-full bg-gradient-to-r from-yellow-700 via-yellow-300 to-yellow-700"></div>
    </div>
  );
};

export default PromoBanner; 