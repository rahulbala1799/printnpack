"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HeroSectionMinimal = () => {
  const slides = [
    {
      title: "Premium Pizza Boxes That Boost Sales",
      subtitle: "Locally sourced packaging that enhances your brand value & customer experience",
      cta: "Get Your Custom Quote Today",
      product: "Pizza Box",
      benefits: ["Elevates your product presentation", "Boosts perceived value", "Enhances customer experience"],
      imageSrc: "/images/ifa/heroh/pizza.png",
      color: "#3b82f6" // Blue
    },
    {
      title: "Paper Bags That Close More Sales",
      subtitle: "SAME-DAY PRINTING available - Irish-made bags that turn customers into loyal fans",
      cta: "Request Free Samples Now",
      product: "Paper Bag",
      benefits: ["Increases repeat purchases", "Strengthens brand perception", "Eco-friendly marketing tool"],
      imageSrc: "/images/ifa/heroh/bag.png",
      color: "#10b981" // Green
    },
    {
      title: "Sustainable Burger Boxes Customers Love",
      subtitle: "Stand out from competitors with premium eco-friendly packaging",
      cta: "Elevate Your Packaging Today",
      product: "Bagasse Box",
      benefits: ["Improves customer perception", "Supports your green initiatives", "Creates Instagram-worthy presentations"],
      imageSrc: "/images/ifa/heroh/burger.png",
      color: "#f59e0b" // Amber
    },
    {
      title: "Marketing Materials That Generate Leads",
      subtitle: "SAME-DAY PRINTING available - Convert prospects into customers with high-impact designs",
      cta: "Boost Your Marketing Now",
      product: "Leaflet",
      benefits: ["Increases response rates", "Drives store traffic", "Boosts campaign ROI"],
      imageSrc: "/images/ifa/heroh/leaflet.png",
      color: "#8b5cf6" // Purple
    },
    {
      title: "Premium Napkins That Elevate Your Brand",
      subtitle: "SAME-DAY PRINTING available - Turn everyday items into powerful marketing tools",
      cta: "Enhance Your Brand Today",
      product: "Napkin",
      benefits: ["Improves customer experience", "Reinforces brand identity", "Low cost, high impact marketing"],
      imageSrc: "/images/hero/napkin.png",
      color: "#ec4899" // Pink
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);
  
  const customStyles = `
    .minimal-hero {
      background-color: #ffffff;
    }
    
    .minimal-accent-color {
      color: ${slides[currentSlide].color};
    }
    
    .minimal-accent-border {
      border-color: ${slides[currentSlide].color};
    }
    
    .minimal-accent-bg {
      background-color: ${slides[currentSlide].color};
    }
    
    .minimal-dot {
      transition: all 0.3s ease;
    }
    
    .minimal-cta {
      background-color: ${slides[currentSlide].color};
      transition: all 0.3s ease;
    }
    
    .minimal-cta:hover {
      opacity: 0.9;
      transform: translateY(-2px);
    }
    
    .minimal-secondary-cta {
      color: #111827;
      border-color: #e5e7eb;
      transition: all 0.3s ease;
    }
    
    .minimal-secondary-cta:hover {
      border-color: ${slides[currentSlide].color};
      color: ${slides[currentSlide].color};
    }
    
    .minimal-benefit-icon {
      color: ${slides[currentSlide].color};
    }
    
    .minimal-tag {
      background-color: #f3f4f6;
      color: #4b5563;
      transition: all 0.3s ease;
    }
    
    .minimal-tag:hover {
      background-color: ${slides[currentSlide].color};
      color: white;
    }
  `;

  return (
    <div className="relative w-full overflow-hidden minimal-hero border-b border-gray-100">
      <style>{customStyles}</style>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="flex flex-col-reverse md:flex-row items-center">
          {/* Content Section */}
          <div className="md:w-1/2 z-10 space-y-6 mt-8 md:mt-0 text-center md:text-left w-full">
            <div>
              {/* Minimal Badge */}
              <div className="inline-block mb-4 px-3 py-1 rounded-full bg-gray-100 text-xs text-gray-800">
                <span className="inline-block mr-1 minimal-accent-color">•</span> 
                Premium Packaging Solutions
              </div>
              
              {/* Main Headline */}
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
                <span className="minimal-accent-color">{slides[currentSlide].product}</span>
                <br />{slides[currentSlide].title.split(slides[currentSlide].product)[1]}
              </h1>
              
              {/* Minimal subtitle */}
              <p className="text-gray-600 text-lg mb-6">{slides[currentSlide].subtitle}</p>
              
              {/* Mobile-friendly benefits list */}
              <div className="mt-4 mb-6">
                <ul className="space-y-3 text-sm md:text-base">
                  {slides[currentSlide].benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="h-5 w-5 minimal-benefit-icon mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Action buttons - Clean minimal style */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/quote" className="minimal-cta inline-flex items-center justify-center px-5 py-3 rounded-md text-white font-medium shadow-sm">
                  {slides[currentSlide].cta}
                </Link>
                <a href="tel:+35312345678" className="minimal-secondary-cta inline-flex items-center justify-center px-5 py-3 border rounded-md font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Speak to an Expert
                </a>
              </div>
              
              {/* Minimal tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="minimal-tag px-3 py-1 rounded-full text-xs">🇮🇪 Irish-Made</span>
                {(currentSlide === 1 || currentSlide === 3 || currentSlide === 4) && (
                  <span className="minimal-tag px-3 py-1 rounded-full text-xs">⚡ Same-Day</span>
                )}
                <span className="minimal-tag px-3 py-1 rounded-full text-xs">💯 Premium Quality</span>
                <span className="minimal-tag px-3 py-1 rounded-full text-xs">🌱 Eco-Friendly</span>
              </div>
            </div>
          </div>
          
          {/* Product Image - Clean presentation */}
          <div className="md:w-1/2 z-10 flex items-center justify-center">
            <div className="relative">
              <div className="h-60 w-60 md:h-80 md:w-80 flex items-center justify-center relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative h-full w-full">
                    <Image
                      src={slides[currentSlide].imageSrc}
                      alt={slides[currentSlide].product}
                      fill
                      className="object-contain"
                      priority={currentSlide === 0}
                      sizes="(max-width: 768px) 240px, 320px"
                      unoptimized={process.env.NODE_ENV === 'production'}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Minimal slide indicators */}
        <div className="mt-8 flex justify-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all minimal-dot ${
                index === currentSlide 
                  ? 'w-8 minimal-accent-bg' 
                  : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSectionMinimal; 