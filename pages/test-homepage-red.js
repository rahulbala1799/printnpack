import React from 'react';
import Layout from '../components/layout/Layout';
import HeroSectionRed from '../components/home/HeroRed';
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
import Image from 'next/image';
import { FaArrowRight, FaCheck } from 'react-icons/fa';

export default function TestHomepageRed() {
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

  return (
    <Layout>
      <Head>
        <title>RED THEME TEST - PrintNPack - Premium Irish Packaging Solutions</title>
        <meta name="description" content="Test page with red theme - PrintNPack provides high-quality pizza boxes, paper bags, and burger boxes for businesses across Ireland with fast delivery and low minimum orders." />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      
      <div className="relative">
        <FloatingImages position="top-right" size="lg" />
        <HeroSectionRed />
      </div>
      
      <DecorativeImages position="header" />
      <PromoBanner />
      
      <SectionDivider variant="default" />
      <div className="relative">
        <FloatingImages position="center-left" size="md" />
        <ProductShowcase />
      </div>
      
      <SectionDivider variant="blue" />
      <USPCards data={uspData} />
      
      <div className="relative">
        <DecorativeImages position="section1" />
        <PrintingTimes />
      </div>
      
      <SectionDivider variant="dark" />
      <ImageGallery />
      
      <SectionDivider variant="default" />
      <DesignServices />
      
      <SectionDivider variant="blue" />
      <div className="relative">
        <FloatingImages position="bottom-right" size="md" />
        <Services />
      </div>
      
      <DecorativeImages position="section2" />
      <AboutUs />
      
      <div className="relative">
        <FloatingImages position="bottom-left" size="sm" />
        <DecorativeImages position="footer" />
        <CTA />
      </div>
      
      {/* Test theme navigation */}
      <div className="fixed bottom-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg z-50 border border-gray-200">
        <div className="text-sm font-bold mb-2">Theme Test Pages:</div>
        <div className="space-y-1">
          <Link href="/" className="text-sm text-blue-600 hover:underline block">Original Blue Theme</Link>
          <div className="text-sm text-red-600 font-bold block">Red Theme (Current)</div>
          <div className="text-xs text-gray-500 mt-2">Private test pages - not indexed</div>
        </div>
      </div>
    </Layout>
  );
} 