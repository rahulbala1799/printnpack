import React, { useState, useEffect, useCallback, useRef } from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import ExtraWideRollUpBannerQuoteForm from '../components/ExtraWideRollUpBannerQuoteForm';
import RelatedSeoLinks from '../components/seo/RelatedSeoLinks';
import { SITE_URL } from '../lib/site';
import { buildOffer } from '../lib/schema';
import {
  EXTRA_WIDE_TITLE,
  EXTRA_WIDE_DESCRIPTION,
  EXTRA_WIDE_KEYWORDS,
  seoSections,
  pageFaqs,
  deliveryAreas,
  comparisonRows,
} from '../data/extra-wide-rollup-seo';

const PAGE_URL = `${SITE_URL}/extra-wide-roll-up-banners-ireland`;
const HERO_IMG = `${SITE_URL}/ifa/product/extra-wide-rollup/hero-standout-3m.jpg`;
const DETAIL_IMG = `${SITE_URL}/ifa/product/extra-wide-rollup/hero-standout-detail.jpg`;

const sizeOptions = [
  {
    id: 'xl',
    label: 'XL',
    dimensions: '200 × 200 cm',
    wasPrice: 428.99,
    price: 398.96,
    image: '/ifa/product/extra-wide-rollup/size-xl.jpg',
    popular: true,
  },
  {
    id: 'xxl',
    label: 'XXL',
    dimensions: '200 × 250 cm',
    wasPrice: 449.99,
    price: 418.49,
    image: '/ifa/product/extra-wide-rollup/size-xxl.jpg',
    popular: false,
  },
  {
    id: 'xxxl',
    label: 'XXXL',
    dimensions: '200 × 300 cm',
    wasPrice: 469.49,
    price: 436.62,
    image: '/ifa/product/extra-wide-rollup/size-xxxl.jpg',
    popular: false,
  },
];

const baseOptions = [
  {
    id: 'silver-xl',
    label: 'Silver XL stand',
    image: '/ifa/product/extra-wide-rollup/base-silver-xl.jpg',
    popular: true,
  },
];

const heroImages = [
  '/ifa/product/extra-wide-rollup/hero-standout-3m.jpg',
  '/ifa/product/extra-wide-rollup/hero-standout-detail.jpg',
];

const galleryImages = [...heroImages];

const features = [
  {
    title: 'Extra wide 2-metre format',
    description: '200 cm width with heights up to 3 metres — ideal for exhibition halls, retail atriums and large corporate backdrops.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
      </svg>
    ),
  },
  {
    title: 'Wrinkle-free Airtex 330',
    description: 'Premium scratch-resistant banner material with vibrant UV full-colour print — B1 fire certified for indoor venues.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    title: 'Silver XL heavy-duty stand',
    description: 'Robust silver aluminium cassette base engineered for extra-wide graphics — stable, professional and built for repeat use.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'Carry bag included',
    description: 'Each banner includes a padded carry bag for easy transport between trade shows, conferences and retail activations.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
  },
  {
    title: 'Order from 1 piece',
    description: 'No bulk minimum — order a single extra-wide roll up banner for your next exhibition or a fleet for a national roadshow.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
  {
    title: 'Nationwide Ireland, NI & Europe delivery',
    description: 'Deliver extra-wide roller banners across Ireland, Northern Ireland, the UK and EU exhibition addresses from Ashbourne, Co. Meath.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
];

const specs = [
  { label: 'Material', value: 'Airtex 330 — wrinkle-free, scratch-resistant' },
  { label: 'Print', value: 'Single-sided UV, full colour' },
  { label: 'Sizes', value: 'XL 200×200 cm, XXL 200×250 cm, XXXL 200×300 cm' },
  { label: 'Base', value: 'Silver XL aluminium stand (heavy duty)' },
  { label: 'Min. order', value: 'From 1 piece' },
  { label: 'Fire certificate', value: 'B1 certified (indoor use)' },
  { label: 'Weight', value: 'Approx. 14 kg per unit' },
  { label: 'Use', value: 'Indoor exhibitions, trade shows, retail, corporate events' },
  { label: 'Included', value: 'Carry bag, assembly guide' },
  { label: 'Delivery', value: 'Ireland, Northern Ireland, UK & EU (quoted)' },
];

const areaServed = [
  { '@type': 'Country', name: 'Ireland' },
  { '@type': 'Country', name: 'United Kingdom' },
  { '@type': 'AdministrativeArea', name: 'Northern Ireland' },
];

function variantOffer(size) {
  const offer = buildOffer({ url: PAGE_URL, price: size.price.toFixed(2) });
  return {
    '@type': 'Product',
    '@id': `${PAGE_URL}#${size.id}`,
    name: `Extra Wide Roll Up Banner ${size.label} ${size.dimensions}`,
    sku: `EWRB-${size.label}`,
    size: size.dimensions,
    image: [HERO_IMG, DETAIL_IMG],
    offers: { ...offer, areaServed, itemCondition: 'https://schema.org/NewCondition' },
  };
}

const productLd = {
  '@context': 'https://schema.org/',
  '@type': 'ProductGroup',
  name: 'Extra Wide Roll Up Banners — 2m XL Roller Banners',
  description: EXTRA_WIDE_DESCRIPTION,
  url: PAGE_URL,
  image: [HERO_IMG, DETAIL_IMG],
  brand: { '@type': 'Brand', name: 'PrintNPack Ireland' },
  material: 'Airtex 330',
  category: 'Roll Up Banners',
  productGroupID: 'extra-wide-roll-up-banners',
  variesBy: ['https://schema.org/size'],
  hasVariant: sizeOptions.map(variantOffer),
  offers: {
    '@type': 'AggregateOffer',
    url: PAGE_URL,
    priceCurrency: 'EUR',
    lowPrice: '398.96',
    highPrice: '436.62',
    offerCount: String(sizeOptions.length),
    availability: 'https://schema.org/InStock',
    areaServed,
  },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: pageFaqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Banners Ireland', item: `${SITE_URL}/banners-ireland` },
    { '@type': 'ListItem', position: 3, name: 'Roll Up Banners', item: `${SITE_URL}/roll-up-banners` },
    { '@type': 'ListItem', position: 4, name: 'Extra Wide Roll Up Banners', item: PAGE_URL },
  ],
};

function formatEuro(amount) {
  return `€${amount.toFixed(2)}`;
}

const CheckIcon = () => (
  <svg className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const ExtraWideRollUpBannersPage = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState('xl');
  const [selectedBase, setSelectedBase] = useState('silver-xl');
  const [currentImage, setCurrentImage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const timeoutRef = useRef(null);

  const activeSize = sizeOptions.find((s) => s.id === selectedSize) || sizeOptions[0];
  const activeBase = baseOptions.find((b) => b.id === selectedBase) || baseOptions[0];

  const goToImage = useCallback((nextIndex) => {
    if (nextIndex === currentImage) return;
    setIsTransitioning(true);
    timeoutRef.current = setTimeout(() => {
      setCurrentImage(nextIndex);
      requestAnimationFrame(() => setIsTransitioning(false));
    }, 400);
  }, [currentImage]);

  useEffect(() => {
    const interval = setInterval(() => goToImage((currentImage + 1) % heroImages.length), 5000);
    return () => {
      clearInterval(interval);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentImage, goToImage]);

  const openQuote = () => setQuoteModalOpen(true);

  return (
    <Layout>
      <Head>
        <title>{EXTRA_WIDE_TITLE}</title>
        <meta name="description" content={EXTRA_WIDE_DESCRIPTION} />
        <meta name="keywords" content={EXTRA_WIDE_KEYWORDS} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="geo.region" content="IE" />
        <meta name="geo.placename" content="Ashbourne, Co. Meath, Ireland" />
        <meta property="og:locale" content="en_IE" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:title" content={EXTRA_WIDE_TITLE} />
        <meta property="og:description" content={EXTRA_WIDE_DESCRIPTION} />
        <meta property="og:image" content={HERO_IMG} />
        <meta property="og:image:alt" content="Extra wide 2m x 3m roll up banner Ireland with Silver XL stand" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:type" content="product" />
        <meta property="og:site_name" content="PrintNPack Ireland" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Extra Wide Roll Up Banners | From €398.96 | Ireland, NI & UK" />
        <meta name="twitter:description" content="2m-wide XL roller banners up to 3m. UV print, Silver XL stand. Delivery across Ireland, Northern Ireland, UK and EU." />
        <meta name="twitter:image" content={HERO_IMG} />
        <link rel="canonical" href={PAGE_URL} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      </Head>

      <nav className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-gray-700">Home</Link></li>
            <li>/</li>
            <li><Link href="/banners-ireland" className="hover:text-gray-700">Banners Ireland</Link></li>
            <li>/</li>
            <li><Link href="/roll-up-banners" className="hover:text-gray-700">Roll Up Banners</Link></li>
            <li>/</li>
            <li className="text-gray-800 font-medium">Extra Wide</li>
          </ol>
        </div>
      </nav>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div>
              <div className="relative aspect-square bg-gray-50 rounded-2xl overflow-hidden mb-3">
                {heroImages.map((img, i) => (
                  <div
                    key={img}
                    className="absolute inset-0"
                    style={{ transition: 'opacity 0.8s ease', opacity: i === currentImage && !isTransitioning ? 1 : 0 }}
                  >
                    <Image
                      src={img}
                      alt={i === 0
                        ? 'Extra wide 2 metre by 3 metre roll up banner Ireland — XXXL roller banner with Silver XL stand'
                        : 'Extra wide XL roller banner cassette close-up — silver aluminium Silver XL stand'}
                      fill
                      className="object-contain"
                      priority={i === 0}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-2">
                {heroImages.map((img, i) => (
                  <button
                    key={img}
                    type="button"
                    onClick={() => goToImage(i)}
                    className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      i === currentImage ? 'border-orange-500 ring-1 ring-orange-300' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <Image src={img} alt={`Thumbnail ${i + 1}`} fill className="object-contain bg-gray-50" sizes="80px" />
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:sticky lg:top-24">
              <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-700 rounded-full px-3 py-1 text-sm font-medium mb-4 border border-orange-200">
                <span className="w-2 h-2 bg-orange-500 rounded-full" />
                XL 2m wide — Indoor exhibitions
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 leading-tight">
                Extra Wide Roll Up Banners Ireland — 2m XL Roller Banners for NI &amp; the UK
              </h1>

              <p className="text-gray-500 text-base sm:text-lg mb-4 leading-relaxed">
                Attract attention at events and exhibitions with our{' '}
                <strong>extra wide roll up banners</strong>. Three sizes — the largest 3 metres high — with a{' '}
                <strong>Silver XL stand</strong>, carry bag, and UV full-colour print on wrinkle-free Airtex 330.
                Delivery across Ireland, <strong>Northern Ireland</strong>, the UK and EU on request.
              </p>

              <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                Create a big impact with our XXL roller banners and order today! Wrinkle-free · Scratch-resistant · Indoor use only · B1 certified.
              </p>

              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="bg-gray-50 rounded-xl p-3 text-center">
                  <div className="text-lg sm:text-xl font-bold text-emerald-600">{formatEuro(activeSize.price)}</div>
                  <div className="text-xs text-gray-500">selected size</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-3 text-center">
                  <div className="text-lg sm:text-xl font-bold text-gray-900">200 cm</div>
                  <div className="text-xs text-gray-500">extra wide</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-3 text-center">
                  <div className="text-lg sm:text-xl font-bold text-gray-900">From 1</div>
                  <div className="text-xs text-gray-500">piece MOQ</div>
                </div>
              </div>

              {/* Size selector */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-sm font-semibold text-gray-900">
                    Size: <span className="text-orange-600">{activeSize.label}</span>
                  </h2>
                  <span className="text-xs text-gray-400">{activeSize.dimensions}</span>
                </div>
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {sizeOptions.map((size) => (
                    <button
                      key={size.id}
                      type="button"
                      onClick={() => setSelectedSize(size.id)}
                      className={`relative rounded-xl border-2 overflow-hidden text-left transition-all ${
                        selectedSize === size.id
                          ? 'border-blue-500 ring-2 ring-blue-100 shadow-md'
                          : 'border-gray-200 hover:border-gray-300 bg-white'
                      }`}
                    >
                      <div className="relative aspect-[3/4] bg-gray-50">
                        <Image src={size.image} alt={`${size.label} extra wide roll up banner size`} fill className="object-contain p-2" sizes="120px" />
                      </div>
                      <div className={`p-2 sm:p-3 border-t border-gray-100 ${size.popular ? 'pb-7' : ''}`}>
                        <div className="font-bold text-gray-900 text-sm">{size.label}</div>
                        <div className="text-[10px] sm:text-xs text-gray-500 mb-1">{size.dimensions}</div>
                        <div className="text-[10px] sm:text-xs text-red-400 line-through">{formatEuro(size.wasPrice)}</div>
                        <div className="text-sm font-bold text-emerald-600">{formatEuro(size.price)}</div>
                      </div>
                      {size.popular && (
                        <div className="absolute bottom-0 left-0 right-0 bg-blue-600 text-white text-[10px] sm:text-xs font-semibold text-center py-1">
                          Recommended
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Base selector */}
              <div className="mb-6">
                <h2 className="text-sm font-semibold text-gray-900 mb-3">
                  Base: <span className="text-orange-600">{activeBase.label}</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {baseOptions.map((base) => (
                    <button
                      key={base.id}
                      type="button"
                      onClick={() => setSelectedBase(base.id)}
                      className={`relative rounded-xl border-2 overflow-hidden text-left transition-all ${
                        selectedBase === base.id
                          ? 'border-blue-500 ring-2 ring-blue-100 shadow-md'
                          : 'border-gray-200 hover:border-gray-300 bg-white'
                      }`}
                    >
                      <div className="relative aspect-[16/9] bg-gray-50">
                        <Image src={base.image} alt={base.label} fill className="object-cover" sizes="200px" />
                      </div>
                      <div className="p-3 border-t border-gray-100">
                        <div className="font-semibold text-gray-900 text-sm">{base.label}</div>
                      </div>
                      {base.popular && (
                        <div className="absolute bottom-0 left-0 right-0 bg-blue-600 text-white text-xs font-semibold text-center py-1">
                          Recommended
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <ul className="space-y-2.5 mb-6">
                {[
                  '200 cm extra wide format — up to 3m high',
                  'Wrinkle-free Airtex 330, scratch-resistant',
                  'Silver XL heavy-duty aluminium stand',
                  'Carry bag included — approx. 14 kg per unit',
                  'B1 fire certified — indoor use only',
                  'Order from 1 piece — Ireland, NI, UK & EU delivery',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <CheckIcon />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <button
                  type="button"
                  onClick={openQuote}
                  className="flex-1 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3.5 px-6 rounded-xl transition-colors text-center"
                >
                  Get Quote — {activeSize.label} {formatEuro(activeSize.price)}
                </button>
                <a
                  href="tel:+353894157369"
                  className="flex-1 bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3.5 px-6 rounded-xl border border-gray-300 transition-colors text-center"
                >
                  Call +353 89 415 7369
                </a>
              </div>

              <p className="text-xs text-gray-400 text-center">
                Need standard width?{' '}
                <Link href="/roll-up-banners" className="text-orange-600 hover:underline">
                  View standard roll up banners
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Why Choose Extra Wide Roll Up Banners?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Double the width of standard pull up banners — built for exhibitions, conferences and large indoor venues across Ireland.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-xl p-5 sm:p-6 border border-gray-200 hover:border-orange-200 hover:shadow-md transition-all">
                <div className="w-10 h-10 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center mb-3">{f.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1.5">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO content sections */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="max-w-3xl mx-auto space-y-8">
            {seoSections.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{section.title}</h2>
                <p className="text-gray-600 leading-relaxed">
                  {section.body}
                  {section.link && (
                    <>
                      {' '}
                      <Link href={section.link.href} className="text-orange-600 hover:underline font-medium">
                        {section.link.label}
                      </Link>
                      .
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Extra Wide vs Standard Roll Up Banners</h2>
              <p className="text-gray-500 mb-6">Compare 2 metre XL roller banners with standard Irish roll ups before you order.</p>
              <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                <div className="grid grid-cols-3 bg-gray-100 px-4 py-2 text-xs font-semibold text-gray-600 uppercase tracking-wide">
                  <span>Feature</span>
                  <span>Extra wide</span>
                  <span>Standard</span>
                </div>
                {comparisonRows.map((row, i) => (
                  <div key={row.feature} className={`grid grid-cols-3 px-4 py-3 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    <span className="font-medium text-gray-800">{row.feature}</span>
                    <span className="text-gray-600">{row.extra}</span>
                    <span className="text-gray-500">{row.standard}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Need a compact stand?{' '}
                <Link href="/roll-up-banners" className="text-orange-600 hover:underline font-medium">Order standard roll up banners</Link>
                {' '}from €35. Size guide:{' '}
                <Link href="/blog/banner-sizes-ireland" className="text-orange-600 hover:underline font-medium">banner sizes Ireland</Link>.
              </p>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Delivery: Ireland, NI, UK &amp; Europe</h2>
              <p className="text-gray-500 mb-6">
                Extra wide roller banners ship from Ashbourne, Co. Meath. Confirm carriage on your quote — units weigh about 14 kg.
              </p>
              <div className="space-y-3">
                {deliveryAreas.map((area) => (
                  <div key={area.region} className="bg-white border border-gray-200 rounded-xl p-4">
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">{area.region}</h3>
                    <p className="text-sm text-gray-600">{area.places}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Gallery</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Extra wide roll up banners for exhibitions and corporate events.</p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-3xl mx-auto">
            {galleryImages.map((img, i) => (
              <button
                key={`${img}-${i}`}
                type="button"
                onClick={() => setLightboxIndex(i)}
                className="group relative aspect-square rounded-xl overflow-hidden bg-white border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all"
              >
                <Image src={img} alt={`Extra wide roll up banner ${i + 1}`} fill className="object-contain group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 50vw, 25vw" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setLightboxIndex(null)}>
          <button type="button" className="absolute top-4 right-4 text-white/80 hover:text-white p-2" onClick={() => setLightboxIndex(null)}>
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <div className="relative w-full max-w-3xl aspect-square" onClick={(e) => e.stopPropagation()}>
            <Image src={galleryImages[lightboxIndex]} alt={`Extra wide roll up banner ${lightboxIndex + 1}`} fill className="object-contain" sizes="90vw" />
          </div>
          <div className="absolute bottom-4 text-white/60 text-sm">{lightboxIndex + 1} / {galleryImages.length}</div>
        </div>
      )}

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Product Specifications</h2>
              <p className="text-gray-500 mb-6">
                Airtex 330 material · UV full-colour print · B1 fire certified · Indoor use only.
                {' '}
                <a href="/contact" className="text-orange-600 hover:underline font-medium">Complete product guide</a> available on request.
              </p>
              <div className="border border-gray-200 rounded-xl overflow-hidden">
                {specs.map((spec, i) => (
                  <div key={spec.label} className={`flex justify-between items-center px-4 py-3 text-sm ${i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                    <span className="font-medium text-gray-700">{spec.label}</span>
                    <span className="text-gray-500 text-right max-w-[60%]">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {pageFaqs.map((faq) => (
                  <details key={faq.q} className="group border border-gray-200 rounded-xl overflow-hidden">
                    <summary className="flex items-center justify-between cursor-pointer px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-colors text-sm font-semibold text-gray-900">
                      {faq.q}
                      <svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-4 py-3 text-sm text-gray-600 leading-relaxed bg-white">
                      {faq.a}
                      {faq.link && (
                        <>
                          {' '}
                          <Link href={faq.link.href} className="text-orange-600 hover:underline font-medium">
                            {faq.link.label}
                          </Link>
                          .
                        </>
                      )}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Ready to make a big impact?</h2>
          <p className="text-gray-400 mb-2 max-w-xl mx-auto">
            Order your extra wide roll up banner today — {activeSize.label} from {formatEuro(activeSize.price)} with Silver XL stand included.
          </p>
          <p className="text-gray-500 text-sm mb-8">Free quote · Artwork support · Nationwide Ireland delivery</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button type="button" onClick={openQuote} className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3.5 px-8 rounded-xl transition-colors">
              Get Free Quote
            </button>
            <a href="tel:+353894157369" className="bg-gray-800 hover:bg-gray-700 text-gray-200 font-semibold py-3.5 px-8 rounded-xl border border-gray-700 transition-colors">
              Call +353 89 415 7369
            </a>
          </div>
        </div>
      </section>

      <RelatedSeoLinks
        links={[
          { href: '/blog/extra-wide-roll-up-banners-ireland-guide', label: 'XL Roller Banner Guide', desc: 'Sizes, venues, NI & UK shipping' },
          { href: '/roll-up-banners', label: 'Standard Roll Up Banners', desc: 'Portable trade show displays from €35' },
          { href: '/banners-ireland', label: 'Banners Ireland', desc: 'Complete banner printing hub' },
          { href: '/banner-faq-ireland', label: 'Banner FAQ', desc: '40+ instant answers' },
          { href: '/vinyl-banners', label: 'PVC Banners', desc: 'Outdoor advertising banners' },
          { href: '/pull-up-banners-meath', label: 'Pull Up Banners Meath', desc: 'Roll-up displays across County Meath' },
          { href: '/blog/trade-show-banners-decals-ireland', label: 'Trade Show Guide', desc: 'Exhibition marketing tips' },
          { href: '/banner-printing-dublin', label: 'Banner Printing Dublin', desc: 'Delivery across Dublin city & county' },
        ]}
      />

      {quoteModalOpen && (
        <ExtraWideRollUpBannerQuoteForm
          isOpen={quoteModalOpen}
          onClose={() => setQuoteModalOpen(false)}
          initialSize={selectedSize}
          initialBase={selectedBase}
        />
      )}
    </Layout>
  );
};

export default ExtraWideRollUpBannersPage;
