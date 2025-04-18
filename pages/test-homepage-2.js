import React, { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import HeroSectionMinimal from '../components/home/HeroMinimal';
import ProductShowcase from '../components/home/ProductShowcase';
import USPCards from '../components/home/USPCards';
import Services from '../components/home/Services';
import AboutUs from '../components/home/AboutUs';
import CTA from '../components/home/CTA';
import Head from 'next/head';
import PrintingTimes from '../components/home/PrintingTimes';
import DecorativeImages from '../components/home/DecorativeImages';
import FloatingImages from '../components/home/FloatingImages';
import SectionDivider from '../components/home/SectionDivider';
import ImageGallery from '../components/home/ImageGallery';
import DesignServices from '../components/home/DesignServices';
import { 
  FaTruck, 
  FaRecycle, 
  FaMedal, 
  FaRegClock, 
  FaCube, 
  FaHandshake,
  FaPrint
} from 'react-icons/fa';
import { 
  RiTimerFlashLine, 
  RiLeafLine, 
  RiAwardLine, 
  RiNumbersLine, 
  RiRulerLine, 
  RiPaintBrushLine
} from 'react-icons/ri';
import Link from 'next/link';

export default function TestHomepageMinimal() {
  // USP data with simpler, consistent packaging-themed icons
  const uspData = [
    {
      icon: <RiTimerFlashLine className="text-4xl text-blue-600 icon-hover" />,
      title: "Fast Delivery",
      description: "Industry-leading turnaround times with our unique weekly delivery system"
    },
    {
      icon: <RiLeafLine className="text-4xl text-green-600 icon-hover" />,
      title: "Eco-Friendly",
      description: "Sustainable materials and production methods for environmentally conscious packaging"
    },
    {
      icon: <RiAwardLine className="text-4xl text-amber-600 icon-hover" />,
      title: "Premium Quality",
      description: "High-quality materials and precision printing for exceptional results"
    },
    {
      icon: <RiNumbersLine className="text-4xl text-purple-600 icon-hover" />,
      title: "Low MOQ",
      description: "Minimum orders as low as 100 units, making custom packaging accessible to all"
    },
    {
      icon: <RiRulerLine className="text-4xl text-red-600 icon-hover" />,
      title: "Custom Sizes",
      description: "Tailored dimensions to perfectly fit your specific product requirements"
    },
    {
      icon: <RiPaintBrushLine className="text-4xl text-blue-800 icon-hover" />,
      title: "Custom Design Service",
      description: "Professional design team to create unique packaging that represents your brand"
    }
  ];

  // Initialize scroll animations when the component mounts
  useEffect(() => {
    // Init Observer API for scroll animations
    const initScrollAnimations = () => {
      // Only run on client-side
      if (typeof window === 'undefined') return;
      
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      };
      
      // Create observer for fade-in animation
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-section-visible');
            // Unobserve after animating to improve performance
            observer.unobserve(entry.target);
          }
        });
      }, options);
      
      // Observe all elements with our animation class
      document.querySelectorAll('.animate-on-scroll').forEach(section => {
        observer.observe(section);
      });
      
      return () => {
        // Clean up
        document.querySelectorAll('.animate-on-scroll').forEach(section => {
          observer.unobserve(section);
        });
      };
    };
    
    // Small delay to ensure DOM is ready
    setTimeout(initScrollAnimations, 100);
    
    // Handle staggered animation timings by adding data attributes
    document.querySelectorAll('.stagger-item').forEach((item, index) => {
      item.setAttribute('style', `--stagger-delay: ${index * 0.1}s`);
    });
    
  }, []);

  // Override any global styles that might interfere with minimal design
  const minimalStylesOverride = `
    .section-minimal {
      background-color: white !important;
      background-image: none !important;
      position: relative;
      overflow-x: hidden; /* Prevent horizontal scrolling */
      width: 100%;
      max-width: 100vw;
    }
    
    /* Reduced spacing between sections */
    .section-minimal {
      padding-top: 2rem !important;
      padding-bottom: 2rem !important;
      position: relative;
      z-index: 1;
    }
    
    /* Mobile-specific adjustments */
    @media (max-width: 768px) {
      .section-minimal {
        padding-top: 1.5rem !important;
        padding-bottom: 1.5rem !important;
      }
      
      .section-divider {
        margin: 0.5rem 0;
        height: 1px;
      }
      
      .section-divider::before {
        display: none; /* Hide divider circles on mobile */
      }
    }
    
    /* Fix horizontal scrolling issues */
    body, html {
      overflow-x: hidden;
      width: 100%;
      max-width: 100vw;
    }
    
    /* Add subtle shadow to the bottom of each section - simplified */
    .section-minimal::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(to bottom, rgba(0,0,0,0.01), rgba(0,0,0,0));
      z-index: -1;
    }
    
    /* Enhanced visual separation for alternating sections - simplified */
    .section-minimal.bg-gray-50 {
      background-color: #f9fafb !important;
      border-top: 1px solid #f3f4f6;
      box-shadow: 0 2px 3px -1px rgba(0, 0, 0, 0.02);
    }
    
    /* Add subtle divider decoration between sections - simplified */
    .section-divider {
      position: relative;
      height: 1px;
      background: linear-gradient(to right, transparent, rgba(209, 213, 219, 0.4), transparent);
      margin: 0;
      padding: 0;
    }
    
    .section-divider::before {
      content: '';
      position: absolute;
      top: -4px;
      left: 50%;
      transform: translateX(-50%);
      width: 8px;
      height: 8px;
      background-color: white;
      border-radius: 50%;
      border: 1px solid #f3f4f6;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    }
    
    /* Scroll animation styles */
    .animate-on-scroll {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }
    
    .animate-section-visible {
      opacity: 1;
      transform: translateY(0);
    }
    
    /* Staggered animation for children */
    .stagger-children .stagger-item {
      opacity: 0;
      transform: translateY(15px);
      transition: opacity 0.4s ease-out, transform 0.4s ease-out;
      transition-delay: var(--stagger-delay, 0s);
    }
    
    .animate-section-visible .stagger-item {
      opacity: 1;
      transform: translateY(0);
    }
    
    /* Fade in from left/right animations */
    .animate-from-left {
      opacity: 0;
      transform: translateX(-30px);
      transition: opacity 0.7s ease-out, transform 0.7s ease-out;
    }
    
    .animate-from-right {
      opacity: 0;
      transform: translateX(30px);
      transition: opacity 0.7s ease-out, transform 0.7s ease-out;
    }
    
    .animate-section-visible.animate-from-left,
    .animate-section-visible.animate-from-right {
      opacity: 1;
      transform: translateX(0);
    }
    
    /* Scale animation */
    .animate-scale {
      opacity: 0;
      transform: scale(0.92);
      transition: opacity 0.7s ease-out, transform 0.7s ease-out;
    }
    
    .animate-section-visible.animate-scale {
      opacity: 1;
      transform: scale(1);
    }
    
    /* Enhance white space and brightness for minimal theme */
    .section-minimal h2 {
      font-weight: 700;
      margin-bottom: 0.75rem;
      color: #111827;
    }
    
    .section-minimal h3 {
      font-weight: 600;
      color: #1f2937;
    }
    
    /* Condensed section content */
    .section-minimal .container,
    .section-minimal div[class*="max-w-"] {
      padding-left: 1rem;
      padding-right: 1rem;
    }
    
    @media (max-width: 768px) {
      .section-minimal .container,
      .section-minimal div[class*="max-w-"] {
        padding-left: 0.75rem;
        padding-right: 0.75rem;
      }
    }
    
    /* Light section headers */
    .section-minimal .section-header {
      background-color: white;
      padding: 1rem;
      border-radius: 0.5rem;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
      margin-bottom: 1.5rem;
    }
    
    /* Subtle divider lines */
    .section-minimal .divider {
      height: 1px;
      background: linear-gradient(to right, transparent, #e5e7eb, transparent);
      margin: 1.5rem 0;
      opacity: 0.7;
    }
    
    /* Enhanced button styles */
    .section-minimal .btn-primary,
    .section-minimal button:not(.minimal-dot):not([class*="text-"]):not([type="submit"]) {
      background-color: white;
      border: 1px solid #e5e7eb;
      color: #374151;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
      border-radius: 0.375rem;
      padding: 0.5rem 1rem;
      font-weight: 500;
      transition: all 0.2s;
    }
    
    .section-minimal .btn-primary:hover,
    .section-minimal button:not(.minimal-dot):not([class*="text-"]):not([type="submit"]):hover {
      background-color: #f9fafb;
      border-color: #d1d5db;
      transform: translateY(-1px);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    }
  `;

  return (
    <Layout>
      <Head>
        <title>MINIMALIST THEME - PrintNPack - Premium Irish Packaging Solutions</title>
        <meta name="description" content="Ultra-minimalist design concept for PrintNPack - Premium Irish packaging solutions with clean design and colorful accents." />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <style>{minimalStylesOverride}</style>
      </Head>
      
      <div className="relative section-minimal">
        <HeroSectionMinimal />
      </div>
      
      <div className="section-divider"></div>
      
      <div className="section-minimal bg-white border-t border-gray-100 animate-on-scroll animate-scale">
        <ProductShowcase />
      </div>
      
      <div className="section-divider"></div>
      
      <div className="section-minimal bg-gray-50 border-t border-gray-100 animate-on-scroll animate-from-right">
        <USPCards data={uspData} isMinimal={true} />
      </div>
      
      <div className="section-divider"></div>
      
      <div className="section-minimal bg-white border-t border-gray-100 animate-on-scroll animate-from-left">
        <PrintingTimes />
      </div>
      
      <div className="section-divider"></div>
      
      <div className="section-minimal bg-gray-50 border-t border-gray-100 animate-on-scroll animate-from-right">
        <ImageGallery />
      </div>
      
      <div className="section-divider"></div>
      
      <div className="section-minimal bg-white border-t border-gray-100 animate-on-scroll">
        <DesignServices />
      </div>
      
      <div className="section-divider"></div>
      
      <div className="section-minimal bg-gray-50 border-t border-gray-100 animate-on-scroll animate-scale">
        <Services />
      </div>
      
      <div className="section-divider"></div>
      
      <div className="section-minimal bg-white border-t border-gray-100 animate-on-scroll animate-from-left">
        <AboutUs />
      </div>
      
      <div className="section-divider"></div>
      
      <div className="section-minimal bg-gray-50 border-t border-gray-100 animate-on-scroll">
        <CTA />
      </div>
      
      {/* Test theme navigation - simplified for mobile */}
      <div className="fixed bottom-4 right-4 bg-white/95 backdrop-blur-sm p-2 rounded-lg shadow-md z-50 border border-gray-200 text-xs sm:text-sm">
        <div className="font-bold mb-1">Theme Tests:</div>
        <div className="space-y-1">
          <Link href="/" className="text-blue-600 hover:underline block">Original</Link>
          <Link href="/test-homepage-red" className="text-red-600 hover:underline block">Red</Link>
          <div className="font-bold block">Minimal (Current)</div>
        </div>
      </div>
    </Layout>
  );
} 