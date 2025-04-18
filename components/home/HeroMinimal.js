"use client"
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

const HeroSectionMinimal = () => {
  const slides = [
    {
      title: "Premium Pizza Boxes That Boost Sales",
      subtitle: "Locally sourced packaging that enhances your brand value & customer experience",
      cta: "Get Your Custom Quote Today",
      product: "Pizza Boxes",
      benefits: ["Elevates your product presentation", "Boosts perceived value", "Enhances customer experience"],
      imageSrc: "/images/ifa/heroh/pizza.png",
      color: "#3b82f6" // Blue
    },
    {
      title: "Paper Bags That Close More Sales",
      subtitle: "SAME-DAY PRINTING available - Irish-made bags that turn customers into loyal fans",
      cta: "Request Free Samples Now",
      product: "Paper Bags",
      benefits: ["Increases repeat purchases", "Strengthens brand perception", "Eco-friendly marketing tool"],
      imageSrc: "/images/ifa/heroh/bag.png",
      color: "#10b981" // Green
    },
    {
      title: "Sustainable Burger Boxes Customers Love",
      subtitle: "Stand out from competitors with premium eco-friendly packaging",
      cta: "Elevate Your Packaging Today",
      product: "Burger Boxes",
      benefits: ["Improves customer perception", "Supports your green initiatives", "Creates Instagram-worthy presentations"],
      imageSrc: "/images/ifa/heroh/burger.png",
      color: "#f59e0b" // Amber
    },
    {
      title: "Marketing Materials That Generate Leads",
      subtitle: "SAME-DAY PRINTING available - Convert prospects into customers with high-impact designs",
      cta: "Boost Your Marketing Now",
      product: "Marketing Materials",
      benefits: ["Increases response rates", "Drives store traffic", "Boosts campaign ROI"],
      imageSrc: "/images/ifa/heroh/leaflet.png",
      color: "#8b5cf6" // Purple
    },
    {
      title: "Premium Napkins That Elevate Your Brand",
      subtitle: "SAME-DAY PRINTING available - Turn everyday items into powerful marketing tools",
      cta: "Enhance Your Brand Today",
      product: "Custom Napkins",
      benefits: ["Improves customer experience", "Reinforces brand identity", "Low cost, high impact marketing"],
      imageSrc: "/images/ifa/heroh/napkin.png",
      color: "#ec4899" // Pink
    }
  ];

  const heroRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);
  
  // Track mouse/touch position for subtle background effect
  useEffect(() => {
    if (!isMounted) return;
    
    const handleMouseMove = (e) => {
      // Calculate mouse position as percentage of screen width/height
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        const x = (e.touches[0].clientX / window.innerWidth) * 100;
        const y = (e.touches[0].clientY / window.innerHeight) * 100;
        setMousePosition({ x, y });
      }
    };

    // Simulate subtle movement on mobile
    const mobileAnimation = setInterval(() => {
      if (window.innerWidth < 768) {
        setMousePosition(prev => ({
          x: prev.x + (Math.random() * 2 - 1),
          y: prev.y + (Math.random() * 2 - 1),
        }));
      }
    }, 1000);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      clearInterval(mobileAnimation);
    };
  }, [isMounted]);
  
  // Add more visual elements for mobile
  useEffect(() => {
    if (!isMounted || !heroRef.current) return;
    
    // Add additional subtle background elements for mobile
    const addMobileBackgroundElements = () => {
      if (window.innerWidth >= 768) return;
      
      // Create subtle background patterns for mobile
      const heroSection = heroRef.current;
      if (!heroSection) return;
      
      const createPatternElement = (className) => {
        const element = document.createElement('div');
        element.className = className;
        return element;
      };
      
      // Add subtle decorative elements if they don't already exist
      if (!document.querySelector('.mobile-bg-pattern-1')) {
        const pattern1 = createPatternElement('mobile-bg-pattern-1');
        const pattern2 = createPatternElement('mobile-bg-pattern-2');
        const pattern3 = createPatternElement('mobile-bg-pattern-3');
        
        heroSection.appendChild(pattern1);
        heroSection.appendChild(pattern2);
        heroSection.appendChild(pattern3);
      }
    };
    
    // Call once after mount
    setTimeout(addMobileBackgroundElements, 500);
    
    // Also call on resize
    window.addEventListener('resize', addMobileBackgroundElements);
    
    return () => {
      window.removeEventListener('resize', addMobileBackgroundElements);
    };
  }, [isMounted]);

  // Apply dynamic colors based on the current slide
  useEffect(() => {
    if (!isMounted) return;
    
    const applyDynamicStyles = () => {
      document.documentElement.style.setProperty('--accent-color', slides[currentSlide].color);
      
      // Update radial gradient positions
      const heroElement = heroRef.current;
      if (heroElement && heroElement.style) {
        heroElement.style.setProperty('--mouse-x', `${mousePosition.x}%`);
        heroElement.style.setProperty('--mouse-y', `${mousePosition.y}%`);
      }
    };
    
    applyDynamicStyles();
  }, [currentSlide, isMounted, mousePosition, slides]);

  // Add a useEffect to preload all images when the component mounts
  useEffect(() => {
    if (!isMounted) return;
    
    // Preload all slide images
    const preloadImages = () => {
      slides.forEach(slide => {
        const img = new window.Image();
        img.src = slide.imageSrc;
      });
    };
    
    preloadImages();
  }, [isMounted, slides]);

  return (
    <div 
      ref={heroRef} 
      className={`relative w-full overflow-hidden hero-minimal border-b border-gray-100 ${isMounted ? 'hero-mounted' : ''}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center">
          {/* Content Section */}
          <div className="md:w-1/2 z-10 space-y-6 mt-8 md:mt-0 text-center md:text-left w-full">
            <div>
              {/* Minimal Badge */}
              <div className="inline-block mb-4 px-3 py-1 rounded-full bg-gray-100 text-xs text-gray-800">
                <span className="inline-block mr-1 text-accent">•</span> 
                Premium Packaging Solutions
              </div>
              
              {/* Main Headline - Update the layout to prevent awkward breaks */}
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4 hero-headline">
                <div className="inline-block text-accent whitespace-nowrap">{slides[currentSlide].product}</div>
                <div className="inline md:block">
                  {slides[currentSlide].title.split(slides[currentSlide].product)[1]}
                </div>
              </h1>
              
              {/* Minimal subtitle */}
              <p className="text-gray-600 text-lg mb-6 mt-3">{slides[currentSlide].subtitle}</p>
              
              {/* Mobile-friendly benefits list */}
              <div className="mt-6 mb-8 hero-benefits-list">
                <ul className="space-y-4 text-sm md:text-base">
                  {slides[currentSlide].benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="h-5 w-5 text-accent mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Action buttons - Clean minimal style */}
              <div className="flex flex-col sm:flex-row gap-4 mt-4 hero-content-spacing">
                <Link href="/quote" className="btn-accent inline-flex items-center justify-center px-5 py-3 rounded-md text-white font-medium shadow-sm">
                  {slides[currentSlide].cta}
                </Link>
                <a href="tel:+35312345678" className="btn-secondary inline-flex items-center justify-center px-5 py-3 border rounded-md font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Speak to an Expert
                </a>
              </div>
              
              {/* Minimal tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="tag px-3 py-1 rounded-full text-xs">🇮🇪 Irish-Made</span>
                {(currentSlide === 1 || currentSlide === 3 || currentSlide === 4) && (
                  <span className="tag px-3 py-1 rounded-full text-xs">⚡ Same-Day</span>
                )}
                <span className="tag px-3 py-1 rounded-full text-xs">💯 Premium Quality</span>
                <span className="tag px-3 py-1 rounded-full text-xs">🌱 Eco-Friendly</span>
              </div>
            </div>
          </div>
          
          {/* Product Image with improved loading */}
          <div className="md:w-1/2 z-10 flex items-center justify-center">
            <div className="relative subtle-pulse">
              <div className="h-72 w-72 md:h-80 md:w-80 flex items-center justify-center relative overflow-hidden">
                {isMounted && (
                  <div className="absolute inset-0 flex items-center justify-center hero-image-container">
                    <div className="relative h-full w-full flex items-center justify-center">
                      <Image
                        src={slides[currentSlide].imageSrc}
                        alt={slides[currentSlide].product}
                        fill
                        className="object-contain transition-opacity duration-500"
                        priority={true}
                        sizes="(max-width: 768px) 288px, 320px"
                        quality={90}
                        loading="eager"
                        onError={(e) => {
                          console.error(`Failed to load image: ${slides[currentSlide].imageSrc}`);
                          e.target.style.display = 'none';
                          // Show a fallback placeholder with the product name
                          const parent = e.target.parentNode;
                          if (parent) {
                            const placeholder = document.createElement('div');
                            placeholder.className = 'absolute inset-0 flex items-center justify-center bg-gray-100 rounded-xl';
                            placeholder.innerHTML = `
                              <div class="text-center p-4">
                                <div class="text-accent text-4xl mb-2">📦</div>
                                <div class="font-bold text-gray-800">${slides[currentSlide].product}</div>
                              </div>
                            `;
                            parent.appendChild(placeholder);
                          }
                        }}
                      />
                    </div>
                  </div>
                )}
                
                {/* Fallback when not mounted */}
                {!isMounted && (
                  <div className="h-full w-full flex items-center justify-center bg-gray-50 rounded-xl">
                    <div className="animate-pulse bg-gray-200 h-5/6 w-5/6 rounded-lg"></div>
                  </div>
                )}
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
              className={`h-2 rounded-full transition-all ${
                index === currentSlide 
                  ? 'w-8 bg-accent' 
                  : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .hero-minimal {
          background-color: #ffffff;
          position: relative;
          overflow: hidden;
          padding-top: 1rem;
        }
        
        /* Ensure headings don't break words awkwardly */
        .hero-headline {
          line-height: 1.2;
          word-break: keep-all;
          hyphens: none;
          white-space: normal;
        }
        
        /* Prevent word breaks on product names */
        .hero-headline .text-accent {
          display: inline-block;
          margin-right: 0.2em;
        }
        
        /* Mobile-specific headline adjustments */
        @media (max-width: 768px) {
          .hero-headline {
            font-size: 1.875rem;
            line-height: 1.3;
          }
          
          .hero-headline div {
            display: inline;
            word-break: normal;
          }
        }
        
        /* Improved spacing for mobile */
        @media (max-width: 768px) {
          .hero-minimal {
            padding-top: 2rem;
            padding-bottom: 2rem;
          }
          .hero-content-spacing {
            margin-top: 2rem;
            margin-bottom: 1.5rem;
          }
          .hero-benefits-list {
            margin: 2rem 0;
          }
        }
        
        .text-accent {
          color: var(--accent-color, #3b82f6);
        }
        
        .bg-accent {
          background-color: var(--accent-color, #3b82f6);
        }
        
        .border-accent {
          border-color: var(--accent-color, #3b82f6);
        }
        
        .btn-accent {
          background-color: var(--accent-color, #3b82f6);
          transition: all 0.3s ease;
        }
        
        .btn-accent:hover {
          opacity: 0.9;
          transform: translateY(-2px);
        }
        
        .btn-secondary {
          color: #111827;
          border-color: #e5e7eb;
          transition: all 0.3s ease;
        }
        
        .btn-secondary:hover {
          border-color: var(--accent-color, #3b82f6);
          color: var(--accent-color, #3b82f6);
        }
        
        .tag {
          background-color: #f3f4f6;
          color: #4b5563;
          transition: all 0.3s ease;
        }
        
        .tag:hover {
          background-color: var(--accent-color, #3b82f6);
          color: white;
        }
        
        @keyframes subtlePulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.02);
            opacity: 0.9;
          }
        }
        
        .subtle-pulse {
          animation: subtlePulse 5s ease infinite;
        }
        
        .hero-mounted::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(
            circle at var(--mouse-x, 50%) var(--mouse-y, 50%), 
            rgba(var(--accent-color-rgb, 59, 130, 246), 0.02) 0%,
            rgba(var(--accent-color-rgb, 59, 130, 246), 0.01) 30%,
            transparent 70%
          );
          opacity: 0.7;
          z-index: 0;
        }
        
        .hero-mounted::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='var(--accent-color, %233b82f6)' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E");
          opacity: 0.5;
          z-index: 0;
        }
        
        .mobile-bg-pattern-1 {
          position: absolute;
          width: 150px;
          height: 150px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(240,240,250,0.3) 70%, transparent 100%);
          top: 10%;
          right: -50px;
          z-index: 0;
          opacity: 0.4;
        }
        
        .mobile-bg-pattern-2 {
          position: absolute;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(240,240,250,0.3) 70%, transparent 100%);
          bottom: 15%;
          left: -40px;
          z-index: 0;
          opacity: 0.3;
        }
        
        .mobile-bg-pattern-3 {
          position: absolute;
          width: 80px;
          height: 80px;
          border: 1px solid rgba(220,220,230,0.2);
          border-radius: 50%;
          top: 40%;
          left: 20%;
          z-index: 0;
          opacity: 0.2;
        }
        
        /* Add mobile-specific image styling */
        .hero-image-container {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        @media (max-width: 768px) {
          .hero-image-container {
            max-height: 280px;
          }
          
          .hero-image-container img {
            max-width: 90% !important;
            max-height: 90% !important;
            object-position: center !important;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSectionMinimal; 