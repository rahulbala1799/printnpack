"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [isTouching, setIsTouching] = useState(false);
  const [autoplay, setAutoplay] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "John O'Connor",
      position: "Owner, Dublin Pizzeria",
      quote: "PrintNPack's pizza boxes have helped us elevate our takeaway experience. Our customers often comment on the premium feel of our packaging, which has definitely contributed to our growing orders.",
      image: "/images/testimonials/customer1.png",
      logo: "/images/testimonials/logo1.png",
      rating: 5
    },
    {
      id: 2,
      name: "Sarah Kennedy",
      position: "Marketing Director, Green Earth Foods",
      quote: "We were looking for sustainable packaging solutions that aligned with our brand values. PrintNPack delivered exactly what we needed with their eco-friendly options and the turnaround time was impressive!",
      image: "/images/testimonials/customer2.png",
      logo: "/images/testimonials/logo2.png",
      rating: 5
    },
    {
      id: 3,
      name: "Michael Doyle",
      position: "CEO, Boxed Gifts",
      quote: "As an e-commerce business, packaging is crucial for us. PrintNPack's custom boxes have significantly reduced our damage rates while giving our customers an unboxing experience worth sharing online.",
      image: "/images/testimonials/customer3.png",
      logo: "/images/testimonials/logo3.png",
      rating: 4
    }
  ];

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 500 : -500,
      opacity: 0
    })
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(() => {
        handleNext();
      }, 5000);
      
      return () => clearInterval(interval);
    }
  }, [currentIndex, autoplay]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
    setIsTouching(true);
    setAutoplay(false);
  };

  const handleTouchMove = (e) => {
    if (!isTouching) return;
    
    const touchEnd = e.touches[0].clientX;
    const diff = touchStart - touchEnd;
    
    if (diff > 50) {
      // Swiped left
      handleNext();
      setIsTouching(false);
    } else if (diff < -50) {
      // Swiped right
      handlePrev();
      setIsTouching(false);
    }
  };

  const handleTouchEnd = () => {
    setIsTouching(false);
    // Resume autoplay after 5 seconds of inactivity
    setTimeout(() => setAutoplay(true), 5000);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">What Our Customers Say</h2>
          <p className="mt-2 text-xl text-gray-600">Don't just take our word for it</p>
        </div>
        
        <div 
          className="relative max-w-4xl mx-auto"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={testimonials[currentIndex].id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="relative bg-white rounded-xl shadow-lg p-6 md:p-8"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="md:w-1/4 flex flex-col items-center">
                  {/* Use empty div as placeholder if no actual images are available */}
                  <div className="relative h-24 w-24 rounded-full overflow-hidden bg-blue-100 mb-3">
                    {testimonials[currentIndex].image ? (
                      <Image 
                        src={testimonials[currentIndex].image} 
                        alt={testimonials[currentIndex].name} 
                        fill
                        className="object-cover"
                        unoptimized={true}
                      />
                    ) : (
                      <div className="h-full w-full flex items-center justify-center text-blue-500 font-bold text-2xl">
                        {testimonials[currentIndex].name[0]}
                      </div>
                    )}
                  </div>
                  
                  {testimonials[currentIndex].logo ? (
                    <div className="relative h-12 w-24 mb-2">
                      <Image 
                        src={testimonials[currentIndex].logo} 
                        alt="Company logo" 
                        fill
                        className="object-contain"
                        unoptimized={true}
                      />
                    </div>
                  ) : null}
                  
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`h-5 w-5 ${
                          i < testimonials[currentIndex].rating ? "text-yellow-400" : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                
                <div className="md:w-3/4">
                  <blockquote className="text-lg text-gray-700 mb-4 relative">
                    <svg
                      className="absolute -top-4 -left-4 h-8 w-8 text-blue-200 transform -scale-x-100"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    {testimonials[currentIndex].quote}
                    <svg
                      className="absolute -bottom-4 -right-4 h-8 w-8 text-blue-200"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                  </blockquote>
                  
                  <div className="font-medium">
                    <div className="text-blue-600">{testimonials[currentIndex].name}</div>
                    <div className="text-gray-500">{testimonials[currentIndex].position}</div>
                  </div>
                </div>
              </div>
              
              {/* Mobile swipe indicator */}
              <div className="mt-6 text-center text-gray-400 text-sm md:hidden">
                <svg className="w-6 h-6 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
                Swipe to see more
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation buttons - visible on larger screens */}
          <div className="hidden md:block">
            <button
              onClick={handlePrev}
              className="absolute top-1/2 -left-12 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none"
            >
              <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={handleNext}
              className="absolute top-1/2 -right-12 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none"
            >
              <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Pagination dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
                setAutoplay(false);
                setTimeout(() => setAutoplay(true), 5000);
              }}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? "w-8 bg-blue-600" : "w-2 bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider; 