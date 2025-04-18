import React from 'react';
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

  // Override any global styles that might interfere with minimal design
  const minimalStylesOverride = `
    .section-minimal {
      background-color: white !important;
      background-image: none !important;
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
      
      <div className="section-minimal bg-white">
        <PromoBanner />
      </div>
      
      <div className="section-minimal bg-white border-t border-gray-100">
        <ProductShowcase />
      </div>
      
      <div className="section-minimal bg-gray-50 border-t border-gray-100">
        <USPCards data={uspData} />
      </div>
      
      <div className="section-minimal bg-white border-t border-gray-100">
        <PrintingTimes />
      </div>
      
      <div className="section-minimal bg-gray-50 border-t border-gray-100">
        <ImageGallery />
      </div>
      
      <div className="section-minimal bg-white border-t border-gray-100">
        <DesignServices />
      </div>
      
      <div className="section-minimal bg-gray-50 border-t border-gray-100">
        <Services />
      </div>
      
      <div className="section-minimal bg-white border-t border-gray-100">
        <AboutUs />
      </div>
      
      <div className="section-minimal bg-gray-50 border-t border-gray-100">
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