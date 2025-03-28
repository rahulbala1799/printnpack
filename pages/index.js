import React from 'react';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/home/Hero';
import ProductShowcase from '../components/home/ProductShowcase';
import USPCards from '../components/home/USPCards';
import Services from '../components/home/Services';
import AboutUs from '../components/home/AboutUs';
import CTA from '../components/home/CTA';
import Head from 'next/head';
import PromoBanner from '../components/home/PromoBanner';
import PrintingTimes from '../components/home/PrintingTimes';
import { 
  FaTruck, 
  FaRecycle, 
  FaMedal, 
  FaRegClock, 
  FaCube, 
  FaHandshake,
  FaPrint
} from 'react-icons/fa';

export default function Home() {
  // USP data with enhanced icon setup
  const uspData = [
    {
      icon: <FaTruck className="text-4xl text-blue-600 icon-hover" />,
      title: "Fast Delivery",
      description: "Industry-leading turnaround times with our unique weekly delivery system"
    },
    {
      icon: <FaRecycle className="text-4xl text-green-600 icon-hover" />,
      title: "Eco-Friendly",
      description: "Sustainable materials and production methods for environmentally conscious packaging"
    },
    {
      icon: <FaMedal className="text-4xl text-amber-600 icon-hover" />,
      title: "Premium Quality",
      description: "High-quality materials and precision printing for exceptional results"
    },
    {
      icon: <FaRegClock className="text-4xl text-purple-600 icon-hover" />,
      title: "Low MOQ",
      description: "Minimum orders as low as 100 units, making custom packaging accessible to all"
    },
    {
      icon: <FaCube className="text-4xl text-red-600 icon-hover" />,
      title: "Custom Sizes",
      description: "Tailored dimensions to perfectly fit your specific product requirements"
    },
    {
      icon: <FaPrint className="text-4xl text-blue-800 icon-hover" />,
      title: "Custom Design Service",
      description: "Professional design team to create unique packaging that represents your brand"
    }
  ];

  return (
    <Layout>
      <Head>
        <title>PrintNPack - Premium Irish Packaging Solutions</title>
        <meta name="description" content="PrintNPack provides high-quality pizza boxes, paper bags, and burger boxes for businesses across Ireland with fast delivery and low minimum orders." />
        <meta name="keywords" content="packaging ireland, pizza boxes, paper bags, food packaging, low moq, fast delivery" />
      </Head>
      
      <HeroSection />
      <PromoBanner />
      <ProductShowcase />
      <USPCards data={uspData} />
      <PrintingTimes />
      <Services />
      <AboutUs />
      <CTA />
    </Layout>
  );
} 