import React from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import { SITE_URL } from '../lib/site';
import HomepageHero from '../components/home/HomepageHero';
import TrustBar from '../components/home/TrustBar';
import CategoryGrid from '../components/home/CategoryGrid';
import PopularProducts from '../components/home/PopularProducts';
import PackagingGuides from '../components/home/PackagingGuides';
import PlainPackagingShowcase from '../components/home/PlainPackagingShowcase';
import AllProductsGrid from '../components/home/AllProductsGrid';
import QuickServices from '../components/home/QuickServices';
import HomepageCTA from '../components/home/HomepageCTA';

export default function Home() {
  const siteUrl = SITE_URL;
  const siteName = 'PrintNPack Ireland';
  const title = 'PrintNPack - Custom Packaging, Print Solutions & Wholesale Supplies Ireland';
  const description = "Ireland's leading custom packaging and print supplier. Pizza boxes, paper bags, leaflets, wide format printing, plain packaging wholesale and more. Low MOQs, fast delivery across Ireland, eco-friendly options. 100% Irish owned.";
  const ogImage = `${siteUrl}/images/og-homepage.jpg`;

  // ── WebSite schema (enables Google Sitelinks search box) ──────────────────
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    url: siteUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  // ── LocalBusiness / Store schema ──────────────────────────────────────────
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'Store'],
    '@id': `${siteUrl}/#business`,
    name: siteName,
    url: siteUrl,
    logo: `${siteUrl}/favicon.ico`,
    image: ogImage,
    description,
    telephone: '+353894400155',
    email: 'hello@printnpack.ie',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dublin',
      addressCountry: 'IE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 53.3498,
      longitude: -6.2603,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Ireland',
    },
    priceRange: '€€',
    currenciesAccepted: 'EUR',
    paymentAccepted: 'Credit Card, Bank Transfer',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:30',
      },
    ],
    sameAs: [
      'https://www.facebook.com/printnpack',
      'https://www.instagram.com/printnpack',
      'https://www.linkedin.com/company/printnpack',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Packaging & Print Products',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: 'Custom Printed Packaging',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Pizza Boxes Ireland', url: `${siteUrl}/pizza-boxes-ireland` } },
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Custom Printed Pizza Boxes', url: `${siteUrl}/custom-pizza-boxes-ireland` } },
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Printed Flat Handle Bags Ireland', url: `${siteUrl}/printed-flat-handle-bags-ireland` } },
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Paper Bags with Logo', url: `${siteUrl}/printed-flat-handle-bags-ireland` } },
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Eco-Friendly Packaging', url: `${siteUrl}/eco-bagasse-burger-boxes` } },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'Plain Packaging Wholesale',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Wholesale Food Containers', url: `${siteUrl}/plain-packaging` } },
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Catering Supplies Ireland', url: `${siteUrl}/plain-packaging` } },
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Disposable Packaging', url: `${siteUrl}/plain-packaging` } },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'Print Solutions',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Leaflets & Flyers', url: `${siteUrl}/services/leaflets` } },
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Vinyl Banners', url: `${siteUrl}/vinyl-banners` } },
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Vinyl Stickers Ireland', url: `${siteUrl}/vinyl-stickers` } },
          ],
        },
      ],
    },
  };

  // ── FAQPage schema ────────────────────────────────────────────────────────
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Where can I buy pizza boxes in Ireland?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'PrintNPack supplies pizza boxes across Ireland — custom printed boxes from 500 units and plain kraft wholesale boxes in all standard sizes. Visit our pizza boxes Ireland page for the full range with nationwide delivery.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does PrintNPack deliver across all of Ireland?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, PrintNPack delivers to all counties across Ireland. We offer fast turnaround times and nationwide shipping on all custom packaging and print orders.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the minimum order quantity for custom packaging?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'PrintNPack offers low minimum order quantities (MOQs) on most products, making it accessible for small businesses and startups as well as larger enterprises. Contact us for specific MOQ details on any product.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer eco-friendly packaging options?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we offer a range of eco-friendly and sustainable packaging options including bagasse burger boxes, recycled paper bags, and biodegradable food containers.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I get a custom quote for my packaging needs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. Visit our quote page or contact us directly at hello@printnpack.ie and our team will provide a tailored quote based on your specifications, quantities, and artwork requirements.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is PrintNPack an Irish company?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, PrintNPack is 100% Irish owned and operated, based in Dublin. We understand the Irish market and offer competitive pricing with local support.',
        },
      },
    ],
  };

  // ── BreadcrumbList schema (homepage is root) ──────────────────────────────
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteUrl,
      },
    ],
  };

  return (
    <Layout>
      <Head>
        {/* ── Primary meta ──────────────────────────────────────────────── */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="packaging ireland, custom packaging dublin, pizza boxes ireland, paper bags wholesale, leaflets printing, wide format printing ireland, food packaging supplier, retail packaging, eco-friendly packaging ireland, plain packaging wholesale, catering supplies ireland, branded packaging, custom print solutions, takeaway packaging, disposable food containers, custom boxes ireland, printed packaging ireland" />
        <meta name="author" content="PrintNPack Ireland" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

        {/* ── Canonical ─────────────────────────────────────────────────── */}
        <link rel="canonical" href={siteUrl} />

        {/* ── Open Graph ────────────────────────────────────────────────── */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:locale" content="en_IE" />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="PrintNPack Ireland - Custom Packaging & Print Solutions" />

        {/* ── Twitter Card ──────────────────────────────────────────────── */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:image:alt" content="PrintNPack Ireland - Custom Packaging & Print Solutions" />
        <meta name="twitter:site" content="@printnpack" />

        {/* ── Geo / local ───────────────────────────────────────────────── */}
        <meta name="geo.region" content="IE" />
        <meta name="geo.placename" content="Dublin, Ireland" />
        <meta name="geo.position" content="53.3498;-6.2603" />
        <meta name="ICBM" content="53.3498, -6.2603" />

        {/* ── Mobile ────────────────────────────────────────────────────── */}
        <meta name="format-detection" content="telephone=yes" />

        {/* ── PWA / app icons ───────────────────────────────────────────── */}
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* ── JSON-LD Structured Data ───────────────────────────────────── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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

      <PackagingGuides />

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
