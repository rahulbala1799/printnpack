import React from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import HomepageHero from '../components/home/HomepageHero';
import TrustBar from '../components/home/TrustBar';
import CategoryGrid from '../components/home/CategoryGrid';
import PopularProducts from '../components/home/PopularProducts';
import PlainPackagingShowcase from '../components/home/PlainPackagingShowcase';
import AllProductsGrid from '../components/home/AllProductsGrid';
import QuickServices from '../components/home/QuickServices';
import HomepageCTA from '../components/home/HomepageCTA';

export default function Home() {
  const siteUrl = 'https://printnpack.ie';
  const siteName = 'PrintNPack Ireland';
  const description = 'Ireland\'s leading custom packaging and print supplier. Pizza boxes, paper bags, leaflets, wide format printing, plain packaging wholesale and more. Low MOQs, fast delivery across Ireland, eco-friendly options. 100% Irish owned.';
  const title = 'PrintNPack - Custom Packaging, Print Solutions & Wholesale Supplies Ireland';

  // JSON-LD structured data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Store',
    name: siteName,
    url: siteUrl,
    description,
    telephone: '+353894400155',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IE',
      addressLocality: 'Dublin',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Ireland',
    },
    priceRange: '€€',
    sameAs: [],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Packaging & Print Products',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: 'Custom Printed Packaging',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Custom Pizza Boxes' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Paper Bags with Logo' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Eco-Friendly Packaging' } },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'Plain Packaging Wholesale',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Wholesale Food Containers' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Catering Supplies' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Disposable Packaging' } },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'Print Solutions',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Leaflets & Flyers' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Wide Format Printing' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Vinyl Stickers' } },
          ],
        },
      ],
    },
  };

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="packaging ireland, custom packaging dublin, pizza boxes ireland, paper bags wholesale, leaflets printing, wide format printing ireland, food packaging supplier, retail packaging, eco-friendly packaging ireland, plain packaging wholesale, catering supplies ireland, branded packaging, custom print solutions, takeaway packaging, disposable food containers" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:locale" content="en_IE" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />

        {/* Canonical */}
        <link rel="canonical" href={siteUrl} />

        {/* Geo tags for Ireland */}
        <meta name="geo.region" content="IE" />
        <meta name="geo.placename" content="Dublin, Ireland" />

        {/* Mobile */}
        <meta name="format-detection" content="telephone=yes" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      {/* Hero with search */}
      <HomepageHero />

      {/* Trust/USP bar */}
      <TrustBar />

      {/* Browse by category */}
      <CategoryGrid />

      {/* Most popular products */}
      <PopularProducts />

      {/* Plain Packaging Wholesale Showcase */}
      <PlainPackagingShowcase />

      {/* All products by category */}
      <AllProductsGrid />

      {/* Why choose us / Services */}
      <QuickServices />

      {/* Final CTA */}
      <HomepageCTA />
    </Layout>
  );
}
