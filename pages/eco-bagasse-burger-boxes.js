import React, { useState, useEffect, useCallback, useRef } from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import BagasseQuoteForm from '../components/BagasseQuoteForm';
import RelatedSeoLinks from '../components/seo/RelatedSeoLinks';
import { SITE_URL } from '../lib/site';
import { buildProductLd } from '../lib/schema';
import { MOST_ASKED_BURGER_BOX_FAQS } from '../data/burger-box-faq';

const PAGE_URL = `${SITE_URL}/eco-bagasse-burger-boxes`;

const pageFaqs = MOST_ASKED_BURGER_BOX_FAQS.slice(0, 4);

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: pageFaqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

const productLd = buildProductLd({
  name: 'Eco-Friendly Bagasse Burger Boxes Ireland',
  description:
    'Premium biodegradable bagasse burger boxes made from sugarcane fibre. Microwave safe, oil resistant, 100% compostable. Perfect for eco-conscious food businesses in Ireland.',
  image: `${SITE_URL}/images/products/bagasse-burger-box/1.png`,
  url: PAGE_URL,
  price: '0.22',
});

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Burger Boxes Ireland', item: `${SITE_URL}/burger-boxes-ireland` },
    { '@type': 'ListItem', position: 3, name: 'Bagasse Burger Boxes', item: PAGE_URL },
  ],
};

const relatedLinks = [
  { href: '/burger-boxes-ireland', label: 'Burger Boxes Ireland', desc: 'Complete burger box hub' },
  { href: '/plain-burger-boxes-ireland', label: 'Plain Burger Boxes', desc: 'Wholesale bagasse & corrugated' },
  { href: '/custom-burger-boxes-ireland', label: 'Custom Printed Boxes', desc: 'Branded bagasse from 500 units' },
  { href: '/burger-box-faq-ireland', label: 'Burger Box FAQ', desc: '20+ instant answers' },
  { href: '/blog/burger-boxes-ireland-guide', label: 'Burger Boxes Guide', desc: 'Plain vs printed, materials' },
  { href: '/burger-box-printing-dublin', label: 'Burger Boxes Dublin', desc: 'Delivery across Dublin' },
];

// ─── Data ────────────────────────────────────────────────────────────────────

const heroImages = [
  '/images/products/bagasse-burger-box/1.png',
  '/images/products/bagasse-burger-box/2.png',
  '/images/products/bagasse-burger-box/3.png',
  '/images/products/bagasse-burger-box/4.png',
  '/images/products/bagasse-burger-box/5.png',
  '/images/products/bagasse-burger-box/6.png',
];

const galleryImages = heroImages;

const sizeOptions = [
  { size: 'Standard', label: 'Standard', popular: true },
  { size: 'Gourmet', label: 'Gourmet', popular: true },
  { size: 'Custom', label: 'Custom Size', popular: false },
];

const features = [
  {
    title: '100% Biodegradable',
    description: 'Made from sugarcane fibre, completely compostable and eco-friendly. No plastic.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: 'Heat Resistant',
    description: 'Microwave safe and withstands temperatures from -20°C to +120°C.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.647 6.646A8.252 8.252 0 0112 3a8.252 8.252 0 013.362 2.214" />
      </svg>
    ),
  },
  {
    title: 'Oil & Water Resistant',
    description: 'Grease-proof design keeps food fresh and packaging intact.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
      </svg>
    ),
  },
  {
    title: 'Sturdy Construction',
    description: 'Strong enough for the largest gourmet burgers and sandwiches.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
  {
    title: 'Freezer Safe',
    description: 'Perfect for storage and preparation, freezer to microwave ready.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3m3 3H9" />
      </svg>
    ),
  },
  {
    title: 'Stackable Design',
    description: 'Space-efficient storage and transport with secure stacking.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.25 2.25 0 01-1.5 2.122v5.256a2.25 2.25 0 01-1.5 2.122 2.25 2.25 0 01-1.5-2.122V9.878m-12 0A2.25 2.25 0 014.5 12v.878" />
      </svg>
    ),
  },
];

const specs = [
  { label: 'Material', value: '100% Sugarcane fibre (bagasse)' },
  { label: 'Colour', value: 'Natural white' },
  { label: 'Temperature range', value: '-20°C to +120°C' },
  { label: 'Size options', value: 'Standard & gourmet burger sizes' },
  { label: 'Min. order', value: '500 units' },
  { label: 'Lead time', value: '7–10 business days' },
  { label: 'Customization', value: 'Custom printing available' },
  { label: 'Certifications', value: 'FDA food safe, compostable' },
];

// ─── Components ──────────────────────────────────────────────────────────────

const CheckIcon = () => (
  <svg className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

// ─── Page ────────────────────────────────────────────────────────────────────

const EcoBagasseBurgerBoxes = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const timeoutRef = useRef(null);

  const goToImage = useCallback((nextIndex) => {
    if (nextIndex === currentImage) return;
    setIsTransitioning(true);
    timeoutRef.current = setTimeout(() => {
      setCurrentImage(nextIndex);
      requestAnimationFrame(() => setIsTransitioning(false));
    }, 400);
  }, [currentImage]);

  useEffect(() => {
    const interval = setInterval(() => {
      goToImage((currentImage + 1) % heroImages.length);
    }, 5000);
    return () => {
      clearInterval(interval);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentImage, goToImage]);

  const openQuote = () => setQuoteModalOpen(true);

  return (
    <Layout>
      <Head>
        <title>Bagasse Burger Boxes Ireland | Biodegradable & Compostable | Print n Pack</title>
        <meta name="description" content="Bagasse burger boxes Ireland — 100% compostable sugarcane fibre packaging. Plain wholesale or custom printed from 500 units. Microwave safe, oil resistant. Free quote, nationwide delivery." />
        <meta name="keywords" content="bagasse burger boxes ireland, biodegradable burger boxes, compostable burger boxes, eco-friendly food packaging, sugarcane fibre packaging, custom printed burger boxes, sustainable packaging dublin" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta property="og:title" content="Bagasse Burger Boxes Ireland | Biodegradable Food Packaging" />
        <meta property="og:description" content="Compostable bagasse burger boxes made from sugarcane fibre. Plain wholesale or custom printed with your logo. Microwave safe, oil resistant, Ireland-wide delivery." />
        <meta property="og:image" content={`${SITE_URL}/images/products/bagasse-burger-box/1.png`} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={`${SITE_URL}/images/products/bagasse-burger-box/1.png`} />
        <link rel="canonical" href={PAGE_URL} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      </Head>

      {/* ── Breadcrumb ── */}
      <nav className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-gray-700">Home</Link></li>
            <li>/</li>
            <li><Link href="/burger-boxes-ireland" className="hover:text-gray-700">Burger Boxes Ireland</Link></li>
            <li>/</li>
            <li className="text-gray-800 font-medium">Bagasse Burger Boxes</li>
          </ol>
        </div>
      </nav>

      {/* ── Hero / Product Overview ── */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div>
              <div className="relative aspect-square bg-gray-50 rounded-2xl overflow-hidden mb-3">
                {heroImages.map((img, i) => (
                  <div
                    key={img}
                    className="absolute inset-0"
                    style={{
                      transition: 'opacity 0.8s ease',
                      opacity: i === currentImage && !isTransitioning ? 1 : 0,
                    }}
                  >
                    <Image
                      src={img}
                      alt={`Bagasse burger box ${i + 1}`}
                      fill
                      className="object-cover"
                      priority={i === 0}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-6 gap-2">
                {heroImages.map((img, i) => (
                  <button
                    key={img}
                    onClick={() => goToImage(i)}
                    className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      i === currentImage ? 'border-emerald-500 ring-1 ring-emerald-300' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <Image src={img} alt={`Thumbnail ${i + 1}`} fill className="object-cover" sizes="80px" />
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:sticky lg:top-24">
              <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 rounded-full px-3 py-1 text-sm font-medium mb-4 border border-emerald-200">
                <span className="w-2 h-2 bg-emerald-500 rounded-full" />
                100% Eco-Friendly · Compostable
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 leading-tight">
                Bagasse Burger Boxes Ireland
              </h1>

              <p className="text-gray-500 text-base sm:text-lg mb-6 leading-relaxed">
                Compostable burger boxes made from sugarcane fibre — plain wholesale or custom printed with your logo.{' '}
                <Link href="/burger-box-faq-ireland" className="text-emerald-600 hover:underline font-medium">Burger box FAQ</Link>{' '}
                ·{' '}
                <Link href="/blog/burger-boxes-ireland-guide" className="text-emerald-600 hover:underline font-medium">materials guide</Link>
              </p>

              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="bg-gray-50 rounded-xl p-3 text-center">
                  <div className="text-lg sm:text-xl font-bold text-gray-900">From €0.22</div>
                  <div className="text-xs text-gray-500">per unit</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-3 text-center">
                  <div className="text-lg sm:text-xl font-bold text-gray-900">500+</div>
                  <div className="text-xs text-gray-500">min. order</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-3 text-center">
                  <div className="text-lg sm:text-xl font-bold text-gray-900">7–10 days</div>
                  <div className="text-xs text-gray-500">production</div>
                </div>
              </div>

              <ul className="space-y-2.5 mb-6">
                {[
                  '100% biodegradable & compostable',
                  'Microwave and freezer safe',
                  'Oil and water resistant',
                  'Standard & gourmet sizes',
                  'Nationwide Ireland delivery',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <CheckIcon />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <button
                  onClick={openQuote}
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3.5 px-6 rounded-xl transition-colors text-center"
                >
                  Get Custom Quote
                </button>
                <a
                  href="tel:+353894157369"
                  className="flex-1 bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3.5 px-6 rounded-xl border border-gray-300 transition-colors text-center"
                >
                  Call +353 89 415 7369
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-400 border-t border-gray-100 pt-4">
                <span className="flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  Food Safe
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  Irish Business
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Why Choose Our Bagasse Burger Boxes?
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Eco-friendly packaging that performs. Superior quality with a clear environmental benefit.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-xl p-5 sm:p-6 border border-gray-200 hover:border-emerald-200 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center mb-3">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-1.5">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Size options ── */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Size Options
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Standard and gourmet burger sizes. Custom dimensions available on request.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {sizeOptions.map((s) => (
              <div
                key={s.size}
                className={`relative rounded-xl p-4 text-center border-2 transition-all ${
                  s.popular ? 'border-emerald-300 bg-emerald-50' : 'border-gray-200 bg-gray-50 hover:border-gray-300'
                }`}
              >
                {s.popular && (
                  <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wide">
                    Popular
                  </span>
                )}
                <div className={`text-xl font-bold ${s.popular ? 'text-emerald-600' : 'text-gray-800'}`}>{s.label}</div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-400 mt-6">
            Need a custom size? <button onClick={openQuote} className="text-emerald-600 hover:underline font-medium">Request a quote</button>
          </p>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section id="gallery" className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Design Gallery
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Examples of our bagasse burger boxes for Irish food businesses.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {galleryImages.map((img, i) => (
              <button
                key={img}
                onClick={() => setLightboxIndex(i)}
                className="group relative aspect-square rounded-xl overflow-hidden bg-white border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all"
              >
                <Image
                  src={img}
                  alt={`Bagasse burger box ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </button>
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={openQuote}
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-6 rounded-xl border border-gray-300 transition-colors"
            >
              Get Your Custom Quote
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ── Lightbox ── */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <button className="absolute top-4 right-4 text-white/80 hover:text-white p-2" onClick={() => setLightboxIndex(null)}>
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2"
            onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex - 1 + galleryImages.length) % galleryImages.length); }}
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2"
            onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex + 1) % galleryImages.length); }}
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
          <div className="relative w-full max-w-3xl aspect-square" onClick={(e) => e.stopPropagation()}>
            <Image
              src={galleryImages[lightboxIndex]}
              alt={`Bagasse burger box ${lightboxIndex + 1}`}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>
          <div className="absolute bottom-4 text-white/60 text-sm">
            {lightboxIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}

      {/* ── Specifications ── */}
      <section id="specifications" className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                Technical Specifications
              </h2>
              <p className="text-gray-500 mb-6">
                Premium bagasse burger boxes built to food-safety standards.
              </p>

              <div className="border border-gray-200 rounded-xl overflow-hidden">
                {specs.map((spec, i) => (
                  <div
                    key={spec.label}
                    className={`flex justify-between items-center px-4 py-3 text-sm ${
                      i % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                    }`}
                  >
                    <span className="font-medium text-gray-700">{spec.label}</span>
                    <span className="text-gray-500 text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src={heroImages[0]}
                alt="Bagasse burger box"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Most asked questions</h2>
          <p className="text-gray-500 text-sm mb-6">
            <Link href="/burger-box-faq-ireland" className="text-emerald-600 hover:underline">View detailed FAQ →</Link>
          </p>
          <div className="space-y-4">
            {pageFaqs.map((faq) => (
              <details key={faq.q} className="group bg-emerald-50/50 rounded-xl border border-gray-200 p-5 open:shadow-sm">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center gap-4">
                  {faq.q}
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-600 mt-3 text-sm leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Ready to switch to eco-friendly burger boxes?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Get a free quote with no obligation. We'll help you choose the right size and quantity for your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={openQuote}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3.5 px-8 rounded-xl transition-colors"
            >
              Get Free Quote
            </button>
            <a
              href="tel:+353894157369"
              className="bg-gray-800 hover:bg-gray-700 text-gray-200 font-semibold py-3.5 px-8 rounded-xl border border-gray-700 transition-colors"
            >
              Call +353 89 415 7369
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8 text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
              <CheckIcon />
              No obligation
            </span>
            <span className="flex items-center gap-1.5">
              <CheckIcon />
              Volume discounts
            </span>
            <span className="flex items-center gap-1.5">
              <CheckIcon />
              Ireland-wide delivery
            </span>
          </div>
        </div>
      </section>

      <RelatedSeoLinks title="Related burger box pages" links={relatedLinks} />

      {/* ── Quote Modal ── */}
      {quoteModalOpen && (
        <BagasseQuoteForm
          isOpen={quoteModalOpen}
          onClose={() => setQuoteModalOpen(false)}
        />
      )}
    </Layout>
  );
};

export default EcoBagasseBurgerBoxes;
