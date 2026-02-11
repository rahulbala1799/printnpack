import React from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import HomepageHero from '../components/home/HomepageHero';
import TrustBar from '../components/home/TrustBar';
import CategoryGrid from '../components/home/CategoryGrid';
import PopularProducts from '../components/home/PopularProducts';
import AllProductsGrid from '../components/home/AllProductsGrid';
import QuickServices from '../components/home/QuickServices';
import HomepageCTA from '../components/home/HomepageCTA';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>PrintNPack - Custom Packaging & Print Solutions Ireland</title>
        <meta name="description" content="Ireland's leading custom packaging and print supplier. Pizza boxes, paper bags, leaflets, wide format printing and more. Low MOQs, fast delivery, eco-friendly options." />
        <meta name="keywords" content="packaging ireland, pizza boxes, paper bags, leaflets, wide format printing, custom packaging, food packaging, retail packaging, eco-friendly packaging" />
      </Head>

      {/* Hero with search */}
      <HomepageHero />

      {/* Trust/USP bar */}
      <TrustBar />

      {/* Browse by category */}
      <CategoryGrid />

      {/* Most popular products */}
      <PopularProducts />

      {/* All products by category */}
      <AllProductsGrid />

      {/* Why choose us / Services */}
      <QuickServices />

      {/* Final CTA */}
      <HomepageCTA />
    </Layout>
  );
}
