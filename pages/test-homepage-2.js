import React, { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import HeroSectionMinimal from '../components/home/HeroMinimal';
import ProductShowcase from '../components/home/ProductShowcase';
import USPCards from '../components/home/USPCards';
import Services from '../components/home/Services';
import AboutUs from '../components/home/AboutUs';
import CTA from '../components/home/CTA';
import Head from 'next/head';
import PromoBanner from '../components/home/PromoBanner';
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
  `;

  return (
    <Layout>
      <Head>
        <title>MINIMALIST THEME - PrintNPack - Premium Irish Packaging Solutions</title>
        <meta name="description" content="Ultra-minimalist design concept for PrintNPack - Premium Irish packaging solutions with clean design and colorful accents." />
        <meta name="robots" content="noindex, nofollow" />
        <style>{minimalStylesOverride}</style>
      </Head>
      
      <div className="relative section-minimal">
        <HeroSectionMinimal />
      </div>
      
      <div className="section-minimal bg-white animate-on-scroll">
        <PromoBanner />
      </div>
      
      <div className="section-minimal bg-white border-t border-gray-100 animate-on-scroll animate-scale">
        <ProductShowcase />
      </div>
      
      <div className="section-minimal bg-gray-50 border-t border-gray-100 animate-on-scroll stagger-children">
        <USPCards data={uspData} isMinimal={true} />
      </div>
      
      <div className="section-minimal bg-white border-t border-gray-100 animate-on-scroll animate-from-left">
        <PrintingTimes />
      </div>
      
      <div className="section-minimal bg-gray-50 border-t border-gray-100 animate-on-scroll animate-from-right">
        <ImageGallery />
      </div>
      
      <div className="section-minimal bg-white border-t border-gray-100 animate-on-scroll">
        <DesignServices />
      </div>
      
      <div className="section-minimal bg-gray-50 border-t border-gray-100 animate-on-scroll animate-scale">
        <Services />
      </div>
      
      <div className="section-minimal bg-white border-t border-gray-100 animate-on-scroll animate-from-left">
        <AboutUs />
      </div>
      
      <div className="section-minimal bg-gray-50 border-t border-gray-100 animate-on-scroll">
        <CTA />
      </div>
      
      {/* Test theme navigation */}
      <div className="fixed bottom-4 right-4 bg-white/95 backdrop-blur-sm p-3 rounded-lg shadow-md z-50 border border-gray-200">
        <div className="text-sm font-bold mb-2">Theme Test Pages:</div>
        <div className="space-y-1">
          <Link href="/" className="text-sm text-blue-600 hover:underline block">Original Blue Theme</Link>
          <Link href="/test-homepage-red" className="text-sm text-red-600 hover:underline block">Red Theme</Link>
          <div className="text-sm font-bold block">Minimalist Theme (Current)</div>
          <div className="text-xs text-gray-500 mt-2">Private test pages - not indexed</div>
        </div>
      </div>
    </Layout>
  );
} 