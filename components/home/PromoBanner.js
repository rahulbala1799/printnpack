"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

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

  // Add a flashing/pulsing state
  const [isFlashing, setIsFlashing] = useState(false);
  
  // Toggle flash effect every 2 seconds
  useEffect(() => {
    const flashInterval = setInterval(() => {
      setIsFlashing(prev => !prev);
    }, 1500);
    
    return () => clearInterval(flashInterval);
  }, []);

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
    <div className="relative bg-gradient-to-r from-black via-yellow-950 to-black w-full overflow-hidden">
      {/* Background starburst effect */}
      <div className="absolute inset-0 bg-starburst opacity-20"></div>
      
      {/* Glow effect overlays */}
      <motion.div 
        className="absolute inset-0 bg-yellow-500 blur-[50px] opacity-10"
        animate={{ 
          opacity: [0.1, 0.2, 0.1],
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      
      <motion.div 
        className="py-4 px-6 flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Left side with heading and subheading */}
        <motion.div 
          className="flex flex-col items-center sm:items-start" 
          variants={itemVariants}
        >
          <motion.h3 
            className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent"
            animate={{ 
              textShadow: isFlashing 
                ? "0 0 7px rgba(234, 179, 8, 0.8), 0 0 10px rgba(234, 179, 8, 0.5)" 
                : "0 0 0px rgba(234, 179, 8, 0)" 
            }}
            transition={{ duration: 0.5 }}
          >
            NEW CUSTOMER OFFER
          </motion.h3>
          <p className="text-yellow-100 text-sm sm:text-base mt-1">First order discount for new customers</p>
        </motion.div>
        
        {/* Divider for desktop */}
        <motion.div 
          className="hidden sm:block h-12 w-px bg-gradient-to-b from-yellow-700 via-yellow-300 to-yellow-700" 
          variants={itemVariants}
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        ></motion.div>
        
        {/* Discount amount */}
        <motion.div 
          className="flex items-center justify-center bg-gradient-to-r from-yellow-500 to-yellow-300 text-black font-extrabold text-2xl sm:text-3xl px-5 py-3 rounded-lg"
          variants={itemVariants}
          animate={{ 
            boxShadow: isFlashing 
              ? "0 0 10px rgba(234, 179, 8, 0.8), 0 0 20px rgba(234, 179, 8, 0.5), 0 0 30px rgba(234, 179, 8, 0.3)" 
              : "0 0 5px rgba(234, 179, 8, 0.5), 0 0 10px rgba(234, 179, 8, 0.3)" 
          }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            animate={{ 
              scale: isFlashing ? 1.05 : 1,
              textShadow: isFlashing ? "0 0 5px rgba(0, 0, 0, 0.5)" : "none" 
            }}
            transition={{ duration: 0.5 }}
          >
            15% OFF
          </motion.span>
        </motion.div>
        
        {/* Countdown timer */}
        <motion.div className="flex flex-col items-center" variants={itemVariants}>
          <span className="text-yellow-400 text-xs uppercase font-semibold mb-1">Offer Expires In:</span>
          <div className="flex space-x-2 font-mono">
            {/* Hours */}
            <div className="flex flex-col items-center">
              <motion.div 
                className="bg-gradient-to-b from-yellow-800 to-yellow-950 text-yellow-300 px-2 py-1 rounded-lg font-bold w-12 text-center border border-yellow-600/30"
                animate={{ 
                  boxShadow: isFlashing 
                    ? "0 0 8px rgba(234, 179, 8, 0.5), 0 0 15px rgba(234, 179, 8, 0.3)" 
                    : "0 0 2px rgba(234, 179, 8, 0.3)" 
                }}
                transition={{ duration: 0.5 }}
              >
                {formatNumber(countdown.hours)}
              </motion.div>
              <span className="text-yellow-500 text-xs mt-1">HRS</span>
            </div>
            
            <div className="text-yellow-400 font-bold self-start mt-1 animate-pulse">:</div>
            
            {/* Minutes */}
            <div className="flex flex-col items-center">
              <motion.div 
                className="bg-gradient-to-b from-yellow-800 to-yellow-950 text-yellow-300 px-2 py-1 rounded-lg font-bold w-12 text-center border border-yellow-600/30"
                animate={{ 
                  boxShadow: isFlashing 
                    ? "0 0 8px rgba(234, 179, 8, 0.5), 0 0 15px rgba(234, 179, 8, 0.3)" 
                    : "0 0 2px rgba(234, 179, 8, 0.3)" 
                }}
                transition={{ duration: 0.5 }}
              >
                {formatNumber(countdown.minutes)}
              </motion.div>
              <span className="text-yellow-500 text-xs mt-1">MIN</span>
            </div>
            
            <div className="text-yellow-400 font-bold self-start mt-1 animate-pulse">:</div>
            
            {/* Seconds */}
            <div className="flex flex-col items-center">
              <motion.div 
                className="bg-gradient-to-b from-yellow-800 to-yellow-950 text-yellow-300 px-2 py-1 rounded-lg font-bold w-12 text-center border border-yellow-600/30"
                animate={{ 
                  boxShadow: "0 0 8px rgba(234, 179, 8, 0.5), 0 0 15px rgba(234, 179, 8, 0.3)",
                  borderColor: ["rgba(234, 179, 8, 0.3)", "rgba(234, 179, 8, 0.8)", "rgba(234, 179, 8, 0.3)"]
                }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                {formatNumber(countdown.seconds)}
              </motion.div>
              <span className="text-yellow-500 text-xs mt-1">SEC</span>
            </div>
          </div>
        </motion.div>
        
        {/* CTA Button */}
        <motion.div 
          variants={itemVariants}
          animate={{ 
            y: isFlashing ? [-2, 2, -2] : 0,
          }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            animate={{ 
              scale: [1, 1.05, 1],
              boxShadow: isFlashing 
                ? "0 0 10px rgba(234, 179, 8, 0.8), 0 0 20px rgba(234, 179, 8, 0.5)" 
                : "0 0 5px rgba(234, 179, 8, 0.5)" 
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="rounded-full overflow-hidden relative"
          >
            <AnimatePresence>
              {isFlashing && (
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-200/50 to-transparent"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  exit={{ x: "100%" }}
                  transition={{ duration: 1 }}
                />
              )}
            </AnimatePresence>
            <Link 
              href="/contact" 
              className="inline-block bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-black font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 relative z-10"
            >
              CLAIM NOW
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Bottom border with animated gold gradient */}
      <motion.div 
        className="h-1.5 w-full bg-gradient-to-r from-yellow-700 via-yellow-300 to-yellow-700"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        style={{ backgroundSize: "200% 100%" }}
      ></motion.div>
    </div>
  );
};

export default PromoBanner; 