import React from 'react';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import Services from '../components/home/Services';
import AboutUs from '../components/home/AboutUs';
import CTA from '../components/home/CTA';
import Head from 'next/head';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Print N Pack - Premium Packaging Solutions</title>
        <meta name="description" content="Print N Pack provides high-quality packaging solutions for businesses across India. From custom designs to eco-friendly options, we've got you covered." />
      </Head>
      
      <HeroSection />
      <FeaturedProducts />
      <Services />
      <AboutUs />
      <CTA />
    </Layout>
  );
} 