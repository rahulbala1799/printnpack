"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  const slides = [
    {
      title: "Premium Pizza Boxes That Boost Sales",
      subtitle: "Locally sourced packaging that enhances your brand value & customer experience",
      cta: "Get Your Custom Quote Today",
      product: "Pizza Box",
      benefits: ["Elevates your product presentation", "Boosts perceived value", "Enhances customer experience"],
      imageSrc: "/images/ifa/heroh/pizza.png"
    },
    {
      title: "Paper Bags That Close More Sales",
      subtitle: "SAME-DAY PRINTING available - Irish-made bags that turn customers into loyal fans",
      cta: "Request Free Samples Now",
      product: "Paper Bag",
      benefits: ["Increases repeat purchases", "Strengthens brand perception", "Eco-friendly marketing tool"],
      imageSrc: "/images/ifa/heroh/bag.png"
    },
    {
      title: "Sustainable Burger Boxes Customers Love",
      subtitle: "Stand out from competitors with premium eco-friendly packaging",
      cta: "Elevate Your Packaging Today",
      product: "Bagasse Box",
      benefits: ["Improves customer perception", "Supports your green initiatives", "Creates Instagram-worthy presentations"],
      imageSrc: "/images/ifa/heroh/burger.png"
    },
    {
      title: "Marketing Materials That Generate Leads",
      subtitle: "SAME-DAY PRINTING available - Convert prospects into customers with high-impact designs",
      cta: "Boost Your Marketing Now",
      product: "Leaflet",
      benefits: ["Increases response rates", "Drives store traffic", "Boosts campaign ROI"],
      imageSrc: "/images/ifa/heroh/leaflet.png"
    },
    {
      title: "Premium Napkins That Elevate Your Brand",
      subtitle: "SAME-DAY PRINTING available - Turn everyday items into powerful marketing tools",
      cta: "Enhance Your Brand Today",
      product: "Napkin",
      benefits: ["Improves customer experience", "Reinforces brand identity", "Low cost, high impact marketing"],
      imageSrc: "/images/hero/napkin.png"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);
  
  // Track mouse position for gradient effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      // Calculate mouse position as percentage of screen width/height
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  // Store mouse position as CSS variables to be used by the animation
  const gradientStyle = {
    '--mouse-x': `${mousePosition.x}%`,
    '--mouse-y': `${Math.min(mousePosition.y, 30)}%`,
    backgroundSize: '200% 200%',
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Blue gradient background with particles and sheen effect */}
      <div className="absolute inset-0 animate-pulse-gradient" style={gradientStyle}>
        {/* Moving particles overlay */}
        <div className="absolute inset-0 bg-particles opacity-20"></div>
        
        {/* Subtle sheen/sweep effect - reduced intensity */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -inset-full w-[200%] h-[200%] bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-sweep-shine"></div>
        </div>
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center py-8 md:py-24">
          {/* Content Section */}
          <div className="md:w-1/2 text-white z-10 space-y-4 md:space-y-6 mt-6 md:mt-0 text-center md:text-left w-full">
            <div className="animate-fade-in">
              {/* Combined Company/Social Proof Banner (mobile optimization) */}
              <div className="inline-flex items-center mb-3 bg-blue-950/90 backdrop-blur-sm rounded-lg py-1.5 px-3">
                <span className="text-yellow-400 text-sm">★★★★★</span>
                <span className="text-white text-xs ml-1">Trusted Irish Business</span>
              </div>
              
              {/* Main Headline */}
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight !leading-tight">
                {slides[currentSlide].title}
              </h1>
              
              {/* Mobile-friendly benefits list */}
              <div className="mt-2 flex flex-col sm:flex-row justify-center md:justify-start">
                <ul className="space-y-1 md:space-y-2 text-sm md:text-base">
                  {slides[currentSlide].benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center justify-center md:justify-start">
                      <svg className="h-4 w-4 md:h-5 md:w-5 text-green-300 mr-1.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Same-Day Banner - Condensed and only on relevant slides */}
              {(currentSlide === 1 || currentSlide === 3 || currentSlide === 4) && (
                <div className="bg-white text-black font-bold py-1 px-3 text-sm rounded-lg my-2 inline-block animate-pulse">
                  <span className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    SAME-DAY DISPATCH
                  </span>
                </div>
              )}
              
              {/* Action buttons - Optimized for mobile */}
              <div className="mt-4 md:mt-6 flex flex-col sm:flex-row gap-2 md:gap-4 justify-center md:justify-start">
                <Link href="/quote" className="inline-flex items-center justify-center px-4 py-2 md:px-5 md:py-3 border border-transparent text-sm md:text-base font-medium rounded-md text-white bg-black shadow-sm hover:bg-gray-900 transition transform hover:scale-105 duration-200">
                  {slides[currentSlide].cta}
                </Link>
                <a href="tel:+35312345678" className="inline-flex items-center justify-center px-4 py-2 md:px-5 md:py-3 border border-white text-sm md:text-base font-medium rounded-md text-white hover:bg-white/10 transition transform hover:scale-105 duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 mr-1 md:mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Get Advice
                </a>
              </div>
              
              {/* Mobile-optimized USP Pills - Show fewer on mobile */}
              <div className="flex flex-wrap gap-1.5 mt-4 animate-fade-in-delayed justify-center md:justify-start">
                <span className="bg-blue-900/90 text-white px-2 py-0.5 rounded-full text-xs md:text-sm">🇮🇪 Irish</span>
                {(currentSlide === 1 || currentSlide === 3 || currentSlide === 4) && (
                  <span className="bg-black text-white px-2 py-0.5 rounded-full text-xs md:text-sm font-bold">⚡ SAME-DAY</span>
                )}
                <span className="bg-blue-900/90 text-white px-2 py-0.5 rounded-full text-xs md:text-sm">💰 Low MOQs</span>
                <span className="hidden md:inline-block bg-blue-900/90 md:bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">🌿 Locally Sourced</span>
                <span className="hidden md:inline-block bg-blue-900/90 md:bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">💰 No Hidden Costs</span>
              </div>
            </div>
          </div>
          
          {/* Product Image - Larger on mobile */}
          <div className="md:w-1/2 z-10 flex items-center justify-center overflow-visible w-full">
            <div className="relative transform scale-125 md:scale-150">
              <div className="h-72 w-72 md:h-96 md:w-96 flex items-center justify-center relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative h-full w-full">
                    <Image
                      src={slides[currentSlide].imageSrc}
                      alt={slides[currentSlide].product}
                      fill
                      className="object-contain"
                      priority={currentSlide === 0}
                      sizes="(max-width: 768px) 288px, 384px"
                      unoptimized={process.env.NODE_ENV === 'production'}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Slide indicators */}
        <div className="absolute bottom-2 md:bottom-4 left-0 right-0 flex justify-center space-x-1.5 md:space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 md:h-2 rounded-full transition-all ${
                index === currentSlide ? 'w-6 md:w-8 bg-white' : 'w-1.5 md:w-2 bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;