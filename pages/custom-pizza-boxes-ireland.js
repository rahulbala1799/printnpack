import React, { useState, useEffect, useCallback, useRef } from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import PizzaBoxQuoteForm from '../components/PizzaBoxQuoteForm';
import RelatedSeoLinks from '../components/seo/RelatedSeoLinks';
import { SITE_URL } from '../lib/site';

const PAGE_URL = `${SITE_URL}/custom-pizza-boxes-ireland`;

const productLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Custom Pizza Boxes Ireland',
  description:
    'Premium custom printed pizza boxes for Irish restaurants and takeaways. Full-colour CMYK printing, food-safe corrugated board, sizes 7" to 20", MOQ from 500 units, nationwide delivery.',
  image: `${SITE_URL}/images/pizza-boxes/PIZZA_BOX_1.jpg`,
  brand: { '@type': 'Brand', name: 'PrintNPack Ireland' },
  offers: {
    '@type': 'Offer',
    url: PAGE_URL,
    priceCurrency: 'EUR',
    availability: 'https://schema.org/InStock',
    seller: { '@type': 'Organization', name: 'PrintNPack Ireland', url: SITE_URL },
  },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I buy a custom pizza box in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack supplies custom pizza boxes across Ireland with full-colour logo printing from 500 units. Sizes from 7 inch to 20 inch, food-safe corrugated board, and nationwide delivery for restaurants and takeaways.',
      },
    },
    {
      '@type': 'Question',
      name: 'What pizza box sizes are available in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack supplies custom pizza boxes from 7 inch (personal) up to 20 inch (party size), including popular Irish takeaway sizes 9", 12", 14", and 16". Custom dimensions are available on request.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the minimum order for custom printed pizza boxes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Custom printed pizza boxes start from 500 units. This MOQ suits growing takeaways and multi-site restaurants ordering branded packaging in Ireland.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does pizza box printing and delivery take in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Production typically takes 5–7 business days after artwork approval, with nationwide delivery across all counties in Ireland including Dublin, Cork, and Galway.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I get my logo printed on pizza boxes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We offer full-colour CMYK custom printing with food-safe inks, plus a free professional design service to prepare your logo and branding artwork.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which pizza box size is best for Irish takeaways — 7", 12", or 14"?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '7" suits personal and kids portions; 12" is the core size for standard medium pizzas in Irish takeaways; 14" is best for large and family orders, especially at weekends. Most operators stock 12" and 14" as their primary sizes.',
      },
    },
  ],
};

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Pizza Boxes Ireland', item: `${SITE_URL}/pizza-boxes-ireland` },
    { '@type': 'ListItem', position: 3, name: 'Custom Printed Pizza Boxes', item: PAGE_URL },
  ],
};

const pageFaqs = [
  {
    q: 'Where can I buy a custom pizza box in Ireland?',
    a: 'PrintNPack prints custom pizza boxes for Irish restaurants and takeaways — full-colour branding, food-safe board, MOQ from 500 units, and nationwide delivery.',
  },
  {
    q: 'What pizza box sizes are available in Ireland?',
    a: 'We supply 7", 9", 12", 14", 16", 18", and 20" boxes, plus custom sizes. The most popular for Irish takeaways are 12" and 14".',
  },
  {
    q: 'What is the minimum order quantity (MOQ)?',
    a: 'Custom printed pizza boxes start from 500 units — ideal for restaurants and takeaways scaling branded packaging.',
  },
  {
    q: 'How long is production and delivery?',
    a: 'Allow 5–7 business days for printing after artwork sign-off. We deliver nationwide across Ireland.',
  },
  {
    q: 'Do you include design support?',
    a: 'Yes — our team prepares professional print-ready artwork for your boxes at no extra cost.',
  },
];

const sizeComparison = [
  {
    size: '7"',
    label: 'Personal',
    bestFor: 'Kids meals, lunch specials, single slices',
    irishUse: 'Side orders and meal-deal add-ons',
  },
  {
    size: '12"',
    label: 'Medium (most popular)',
    bestFor: 'Standard medium pizzas — core takeaway size',
    irishUse: 'Everyday orders; stock this first',
  },
  {
    size: '14"',
    label: 'Large',
    bestFor: 'Large pizzas and family sharing boxes',
    irishUse: 'Weekend peaks and family delivery orders',
  },
];

// ─── Data ────────────────────────────────────────────────────────────────────

const heroImages = [
  '/images/pizza-boxes/PIZZA_BOX_1.jpg',
  '/images/pizza-boxes/PIZZA_BOX_2.jpg',
  '/images/pizza-boxes/PIZZA_BOX_3.jpg',
  '/images/pizza-boxes/PIZZA_BOX_4.jpg',
  '/images/pizza-boxes/PIZZA_BOX_5.jpg',
  '/images/pizza-boxes/PIZZA_BOX_6.jpg',
];

const galleryImages = [
  '/images/pizza-boxes/PIZZA_BOX_1.jpg',
  '/images/pizza-boxes/PIZZA_BOX_2.jpg',
  '/images/pizza-boxes/PIZZA_BOX_3.jpg',
  '/images/pizza-boxes/PIZZA_BOX_4.jpg',
  '/images/pizza-boxes/PIZZA_BOX_5.jpg',
  '/images/pizza-boxes/PIZZA_BOX_6.jpg',
  '/images/pizza-boxes/PIZZA_BOX_7.jpg',
  '/images/pizza-boxes/PIZZA_BOX_8.jpg',
  '/images/pizza-boxes/PIZZA_BOX_9.jpg',
  '/images/pizza-boxes/PIZZA_BOX_10.jpg',
  '/images/pizza-boxes/PIZZA_BOX_11.jpg',
  '/images/pizza-boxes/PIZZA_BOX_12.jpg',
  '/images/pizza-boxes/PIZZA_BOX_13.jpg',
];

const sizes = [
  { size: '7"', label: 'Personal', popular: false },
  { size: '9"', label: 'Small', popular: false },
  { size: '12"', label: 'Medium', popular: true },
  { size: '14"', label: 'Large', popular: true },
  { size: '16"', label: 'Family', popular: false },
  { size: '18"', label: 'Extra Large', popular: false },
  { size: '20"', label: 'Party', popular: false },
  { size: 'Custom', label: 'Any Size', popular: false },
];

const features = [
  {
    title: 'Full-Colour Custom Printing',
    description: 'CMYK printing with your logo, branding, and bespoke designs on food-safe inks.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    title: 'Food-Safe Materials',
    description: 'Corrugated cardboard with grease-resistant coating. Heat-retention and stackable design.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'All Sizes Available',
    description: 'From 7" personal to 20" party size. Custom dimensions available on request.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
      </svg>
    ),
  },
  {
    title: 'Low Minimum Order',
    description: 'Start from just 500 units. Perfect for small restaurants and growing businesses.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
  {
    title: 'Fast Ireland Delivery',
    description: '5-7 day production with delivery across Dublin, Cork, Galway, and all of Ireland.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
  {
    title: 'Free Design Service',
    description: 'Our team creates professional artwork for your pizza boxes at no extra cost.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
      </svg>
    ),
  },
];

const specs = [
  { label: 'Material', value: 'Food-safe corrugated cardboard' },
  { label: 'Printing', value: 'Full-colour CMYK, food-safe inks' },
  { label: 'Sizes', value: '7" to 20" (custom available)' },
  { label: 'Coating', value: 'Grease-resistant, heat-retention' },
  { label: 'Min. Order', value: '500 units' },
  { label: 'Production', value: '5-7 business days' },
  { label: 'Design', value: 'Free professional design service' },
  { label: 'Delivery', value: 'Nationwide Ireland delivery' },
];

// ─── Components ──────────────────────────────────────────────────────────────

const CheckIcon = () => (
  <svg className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

// ─── Page ────────────────────────────────────────────────────────────────────

const CustomPizzaBoxesIreland = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const timeoutRef = useRef(null);

  // Smooth hero image rotation
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
        <title>Custom Pizza Box Ireland | Printed Pizza Boxes | PrintNPack</title>
        <meta name="description" content="Custom pizza box Ireland — printed pizza boxes with your logo from 500 units. All sizes 7&quot; to 20&quot;, food-safe board, fast nationwide delivery for restaurants &amp; takeaways." />
        <meta name="keywords" content="pizza box, pizza box ireland, custom pizza box ireland, printed pizza boxes, custom pizza boxes Ireland, pizza box printing Dublin, food packaging Ireland, restaurant packaging, takeaway boxes" />
        <meta property="og:title" content="Pizza Boxes Ireland | Custom Printed Pizza Box Packaging" />
        <meta property="og:description" content="High-quality custom pizza boxes with full-color printing. All sizes available. Fast delivery across Ireland." />
        <meta property="og:image" content="https://www.printnpack.ie/images/pizza-boxes/PIZZA_BOX_1.jpg" />
        <meta property="og:url" content="https://www.printnpack.ie/custom-pizza-boxes-ireland" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={PAGE_URL} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      </Head>

      {/* ── Breadcrumb ── */}
      <nav className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-gray-700">Home</Link></li>
            <li>/</li>
            <li><Link href="/#products" className="hover:text-gray-700">Products</Link></li>
            <li>/</li>
            <li><Link href="/pizza-boxes-ireland" className="hover:text-gray-700">Pizza Boxes Ireland</Link></li>
            <li>/</li>
            <li className="text-gray-800 font-medium">Custom Printed</li>
          </ol>
        </div>
      </nav>

      {/* ── Hero / Product Overview ── */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left — Image gallery */}
            <div>
              {/* Main image with crossfade */}
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
                      alt={`Custom printed pizza box design ${i + 1}`}
                      fill
                      className="object-cover"
                      priority={i === 0}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      unoptimized={process.env.NODE_ENV === 'production'}
                    />
                  </div>
                ))}
              </div>
              {/* Thumbnail strip */}
              <div className="grid grid-cols-6 gap-2">
                {heroImages.map((img, i) => (
                  <button
                    key={img}
                    onClick={() => goToImage(i)}
                    className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      i === currentImage ? 'border-blue-500 ring-1 ring-blue-300' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Thumbnail ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="80px"
                      unoptimized={process.env.NODE_ENV === 'production'}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right — Product info */}
            <div className="lg:sticky lg:top-24">
              <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 rounded-full px-3 py-1 text-sm font-medium mb-4 border border-emerald-200">
                <span className="w-2 h-2 bg-emerald-500 rounded-full" />
                In Stock - Ready to Print
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 leading-tight">
                Custom Pizza Box Ireland — Printed Pizza Boxes
              </h1>

              <p className="text-gray-500 text-base sm:text-lg mb-6 leading-relaxed">
                Order a <strong>custom pizza box</strong> with full-colour branding for your Irish restaurant or takeaway. Food-safe corrugated board, sizes 7&quot;–20&quot;, MOQ from 500 units.
                {' '}
                <Link href="/pizza-boxes-ireland" className="text-blue-600 hover:underline font-medium">
                  View all pizza boxes Ireland
                </Link>
                {' '}or{' '}
                <Link href="/blog/pizza-box-sizes-ireland" className="text-blue-600 hover:underline font-medium">
                  compare sizes (7&quot;, 12&quot;, 14&quot;) →
                </Link>
              </p>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="bg-gray-50 rounded-xl p-3 text-center">
                  <div className="text-lg sm:text-xl font-bold text-gray-900">From €0.35</div>
                  <div className="text-xs text-gray-500">per box</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-3 text-center">
                  <div className="text-lg sm:text-xl font-bold text-gray-900">500+</div>
                  <div className="text-xs text-gray-500">min. order</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-3 text-center">
                  <div className="text-lg sm:text-xl font-bold text-gray-900">5-7 days</div>
                  <div className="text-xs text-gray-500">production</div>
                </div>
              </div>

              {/* Key selling points */}
              <ul className="space-y-2.5 mb-6">
                {[
                  'Full-colour CMYK custom printing',
                  'Food-safe corrugated cardboard',
                  'All sizes: 7" to 20" + custom',
                  'Free professional design service',
                  'Nationwide Ireland delivery',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <CheckIcon />
                    {point}
                  </li>
                ))}
              </ul>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <button
                  onClick={openQuote}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 px-6 rounded-xl transition-colors text-center"
                >
                  Get Custom Quote
                </button>
                <a
                  href="tel:+353894400155"
                  className="flex-1 bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3.5 px-6 rounded-xl border border-gray-300 transition-colors text-center"
                >
                  Call +353 89 440 0155
                </a>
              </div>

              {/* Trust signals */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-400 border-t border-gray-100 pt-4">
                <span className="flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  Food Safe
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  Irish Business
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  100+ Happy Restaurants
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
              Why Choose Our Pizza Boxes?
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Ireland's trusted custom pizza box supplier. Quality materials, fast turnaround, competitive pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-xl p-5 sm:p-6 border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-3">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-1.5">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sizes ── */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Available Sizes
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              From 7" personal to 20" party size — we cover every standard pizza box dimension with custom sizes on request.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto">
            {sizes.map((s) => (
              <div
                key={s.size}
                className={`relative rounded-xl p-4 text-center border-2 transition-all ${
                  s.popular
                    ? 'border-blue-300 bg-blue-50'
                    : 'border-gray-200 bg-gray-50 hover:border-gray-300'
                }`}
              >
                {s.popular && (
                  <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wide">
                    Popular
                  </span>
                )}
                <div className={`text-xl sm:text-2xl font-bold mb-0.5 ${s.popular ? 'text-blue-600' : 'text-gray-800'}`}>
                  {s.size}
                </div>
                <div className="text-xs text-gray-500">{s.label}</div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-400 mt-6">
            Need a size not listed?{' '}
            <button onClick={openQuote} className="text-blue-600 hover:underline font-medium">Request a custom size</button>
            {' · '}
            <Link href="/blog/pizza-box-sizes-ireland" className="text-blue-600 hover:underline font-medium">
              Full pizza box sizes guide
            </Link>
          </p>
        </div>
      </section>

      {/* ── Size comparison: 7 vs 12 vs 14 ── */}
      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              7&quot; vs 12&quot; vs 14&quot; Pizza Boxes for Irish Takeaways
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Not sure which size to order? Most Irish operators run 12&quot; and 14&quot; as core stock — here is how the key sizes compare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {sizeComparison.map((row) => (
              <div
                key={row.size}
                className={`rounded-xl border-2 p-5 bg-white ${
                  row.size === '12"' ? 'border-blue-300 ring-1 ring-blue-100' : 'border-gray-200'
                }`}
              >
                <div className="text-2xl font-bold text-gray-900 mb-1">{row.size}</div>
                <div className="text-sm font-medium text-blue-600 mb-3">{row.label}</div>
                <p className="text-sm text-gray-600 mb-2"><strong>Best for:</strong> {row.bestFor}</p>
                <p className="text-sm text-gray-500"><strong>In Ireland:</strong> {row.irishUse}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-500 mt-8 max-w-2xl mx-auto">
            Deep-dive on every standard size, board weight, and ordering tips in our{' '}
            <Link href="/blog/pizza-box-sizes-ireland" className="text-blue-600 hover:underline font-medium">
              pizza box sizes Ireland guide
            </Link>
            .
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
              Browse examples of custom printed pizza boxes we've produced for Irish businesses.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {galleryImages.map((img, i) => (
              <button
                key={img}
                onClick={() => setLightboxIndex(i)}
                className="group relative aspect-square rounded-xl overflow-hidden bg-white border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <Image
                  src={img}
                  alt={`Pizza box design ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  unoptimized={process.env.NODE_ENV === 'production'}
                />
              </button>
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={openQuote}
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-6 rounded-xl border border-gray-300 transition-colors"
            >
              Get Your Custom Design
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
              alt={`Pizza box design ${lightboxIndex + 1}`}
              fill
              className="object-contain"
              sizes="90vw"
              unoptimized={process.env.NODE_ENV === 'production'}
            />
          </div>
          <div className="absolute bottom-4 text-white/60 text-sm">
            {lightboxIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}

      {/* ── Specifications ── */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                Technical Specifications
              </h2>
              <p className="text-gray-500 mb-6">
                Professional-grade pizza boxes built to food-safety standards with premium printing quality.
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
                src="/images/products/pizza-boxes/white/pizza-box-1000x10003.webp"
                alt="Pizza box specifications"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                unoptimized={process.env.NODE_ENV === 'production'}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Custom Pizza Boxes — FAQs
            </h2>
            <p className="text-gray-600 text-sm">
              More on pricing, artwork, samples, and delivery in our{' '}
              <Link href="/pizza-box-faq-ireland" className="text-blue-600 hover:underline font-medium">
                full pizza box FAQ
              </Link>
              .
            </p>
          </div>
          <div className="space-y-6">
            {pageFaqs.map(({ q, a }) => (
              <div key={q} className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{q}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/pizza-box-faq-ireland"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-blue-600 font-semibold py-3 px-6 rounded-xl border border-blue-200 transition-colors"
            >
              Browse all pizza box questions
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <RelatedSeoLinks
        links={[
          { href: '/pizza-box-faq-ireland', label: 'Pizza Box FAQ', desc: '30+ instant answers' },
          { href: '/pizza-boxes-ireland', label: 'Pizza Boxes Ireland', desc: 'Plain & wholesale options' },
          { href: '/blog/pizza-box-sizes-ireland', label: 'Pizza Box Sizes Guide', desc: '7″ to 20″ sizing help' },
          { href: '/printed-flat-handle-bags-ireland', label: 'Printed Paper Bags', desc: 'Takeaway bag branding' },
        ]}
      />

      {/* ── CTA ── */}
      <section className="bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Ready to order your custom pizza boxes?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Get a free quote with no obligation. Our team will help you choose the right size, quantity, and design for your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={openQuote}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 px-8 rounded-xl transition-colors"
            >
              Get Free Quote
            </button>
            <a
              href="tel:+353894400155"
              className="bg-gray-800 hover:bg-gray-700 text-gray-200 font-semibold py-3.5 px-8 rounded-xl border border-gray-700 transition-colors"
            >
              Call +353 89 440 0155
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8 text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
              <CheckIcon />
              No obligation
            </span>
            <span className="flex items-center gap-1.5">
              <CheckIcon />
              Free design service
            </span>
            <span className="flex items-center gap-1.5">
              <CheckIcon />
              Ireland-wide delivery
            </span>
          </div>
        </div>
      </section>

      {/* ── Quote Modal ── */}
      {quoteModalOpen && (
        <PizzaBoxQuoteForm
          isOpen={quoteModalOpen}
          onClose={() => setQuoteModalOpen(false)}
        />
      )}
    </Layout>
  );
};

export default CustomPizzaBoxesIreland;
