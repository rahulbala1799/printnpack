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
import ImageGallery from '../components/home/ImageGallery';
import DesignServices from '../components/home/DesignServices';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>PrintNPack - Printing &amp; Packaging Solutions | Ireland</title>
        <meta name="description" content="PrintNPack provides high-quality pizza boxes, paper bags, and burger boxes for businesses across Ireland with fast delivery and low minimum orders." />
        <meta name="keywords" content="packaging ireland, pizza boxes, paper bags, food packaging, low moq, fast delivery, printing ireland" />
      </Head>

      <PromoBanner />
      <HeroSection />
      <USPCards />
      <ProductShowcase />
      <PrintingTimes />
      <ImageGallery />
      <DesignServices />
      <Services />
      <AboutUs />
      <CTA />
    </Layout>
  );
}
