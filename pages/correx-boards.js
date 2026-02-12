import React, { useState, useEffect, useCallback, useRef } from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import CorrexQuoteForm from '../components/CorrexQuoteForm';

// ─── Data ────────────────────────────────────────────────────────────────────

const heroImages = [
  '/ifa/product/corriboard/4-x-8-corrugated-plastic-sheets.jpg',
  '/ifa/product/corriboard/corrugated-plastic-signs.jpg',
  '/ifa/product/corriboard/corrugated-plastic-signs-3.jpg',
  '/ifa/product/corriboard/coroplast-yard-signs.jpg',
  '/ifa/product/corriboard/4-x-8-corrugated-plastic-sheets-1.jpg',
];

const galleryImages = [...heroImages];

const thicknessOptions = [
  { size: '2mm/3mm', label: '2mm/3mm', popular: false },
  { size: '4mm', label: '4mm', popular: true },
  { size: '5mm/8mm', label: '5mm/8mm', popular: false },
  { size: 'Staked system', label: 'Staked system', popular: false },
];

const features = [
  {
    title: 'Weather resistant',
    description: 'Durable corrugated plastic built for outdoor use. UV stable and long-lasting.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 002.985-3.545M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Multiple thicknesses',
    description: 'From 2mm/3mm to 5mm/8mm plus staked systems. Choose the right option for your application.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
      </svg>
    ),
  },
  {
    title: 'UV printing',
    description: 'Vibrant, fade-resistant print for election signs, real estate, and construction.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    title: 'Election & real estate',
    description: 'Perfect for campaign signs, yard signs, real estate boards, and construction site info.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    title: 'Mounting options',
    description: 'H-stakes, wire frames, pre-drilled holes, stake slots. Ready for your preferred installation.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
  {
    title: 'Fast Ireland delivery',
    description: 'Quick turnaround and nationwide delivery for elections, events, and campaigns.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
];

const specs = [
  { label: 'Material', value: 'Corrugated plastic (correx/corriboard)' },
  { label: 'Thicknesses', value: '2mm/3mm, 4mm, 5mm/8mm' },
  { label: 'Max size', value: '2440mm x 1220mm' },
  { label: 'Printing', value: 'UV outdoor-resistant' },
  { label: 'Use', value: 'Outdoor, weather resistant' },
  { label: 'Mounting', value: 'H-stakes, wire frames, pre-drilled, stake slots' },
  { label: 'Delivery', value: 'Nationwide Ireland' },
];

// ─── Components ──────────────────────────────────────────────────────────────

const CheckIcon = () => (
  <svg className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

// ─── Page ────────────────────────────────────────────────────────────────────

const CorrexBoardsPage = () => {
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
        <title>Correx Boards - Weather-Resistant Outdoor Signage | Print n Pack Ireland</title>
        <meta name="description" content="Weather-resistant correx boards for durable outdoor signage. Available in 2mm to 8mm thicknesses with UV printing. Perfect for elections, construction, real estate, and outdoor events across Ireland." />
        <meta name="keywords" content="correx boards, corriboard, outdoor signage, weather-resistant signs, election signs, real estate boards, construction signage, Ireland" />
        <meta property="og:title" content="Correx Boards - Weather-Resistant Outdoor Signage Ireland" />
        <meta property="og:description" content="Durable correx boards for outdoor signage. Multiple thicknesses, UV printing, mounting options. Elections, real estate, construction." />
        <meta property="og:image" content="https://www.printnpack.ie/ifa/product/corriboard/4-x-8-corrugated-plastic-sheets.jpg" />
        <meta property="og:url" content="https://www.printnpack.ie/correx-boards" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.printnpack.ie/correx-boards" />
      </Head>

      {/* ── Breadcrumb ── */}
      <nav className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-gray-700">Home</Link></li>
            <li>/</li>
            <li><Link href="/#products" className="hover:text-gray-700">Products</Link></li>
            <li>/</li>
            <li className="text-gray-800 font-medium">Correx Boards</li>
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
                    style={{ transition: 'opacity 0.8s ease', opacity: i === currentImage && !isTransitioning ? 1 : 0 }}
                  >
                    <Image src={img} alt={`Correx boards ${i + 1}`} fill className="object-cover" priority={i === 0} sizes="(max-width: 768px) 100vw, 50vw" />
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-5 gap-2">
                {heroImages.map((img, i) => (
                  <button
                    key={img}
                    onClick={() => goToImage(i)}
                    className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${i === currentImage ? 'border-green-500 ring-1 ring-green-300' : 'border-transparent opacity-70 hover:opacity-100'}`}
                  >
                    <Image src={img} alt={`Thumbnail ${i + 1}`} fill className="object-cover" sizes="80px" />
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:sticky lg:top-24">
              <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 rounded-full px-3 py-1 text-sm font-medium mb-4 border border-green-200">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                Outdoor & Weather Resistant
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 leading-tight">
                Correx Boards
              </h1>

              <p className="text-gray-500 text-base sm:text-lg mb-6 leading-relaxed">
                Weather-resistant corrugated plastic boards for outdoor signage. Elections, real estate, construction sites, and events. UV printing and multiple thicknesses.
              </p>

              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="bg-gray-50 rounded-xl p-3 text-center">
                  <div className="text-lg sm:text-xl font-bold text-gray-900">From €15</div>
                  <div className="text-xs text-gray-500">starting price</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-3 text-center">
                  <div className="text-lg sm:text-xl font-bold text-gray-900">3–5 days</div>
                  <div className="text-xs text-gray-500">delivery</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-3 text-center">
                  <div className="text-lg sm:text-xl font-bold text-gray-900">4</div>
                  <div className="text-xs text-gray-500">options</div>
                </div>
              </div>

              <ul className="space-y-2.5 mb-6">
                {['Weather resistant & UV stable', '2mm to 8mm thicknesses', 'Election & real estate signs', 'H-stakes & mounting options', 'Custom sizes up to 8ft x 4ft', 'Nationwide Ireland delivery'].map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <CheckIcon />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <button onClick={openQuote} className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3.5 px-6 rounded-xl transition-colors text-center">
                  Get Custom Quote
                </button>
                <a href="tel:+353894400155" className="flex-1 bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3.5 px-6 rounded-xl border border-gray-300 transition-colors text-center">
                  Call +353 89 440 0155
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-400 border-t border-gray-100 pt-4">
                <span className="flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
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
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Why Choose Our Correx Boards?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Durable outdoor signage for elections, real estate, construction, and events.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="bg-white rounded-xl p-5 sm:p-6 border border-gray-200 hover:border-green-200 hover:shadow-md transition-all">
                <div className="w-10 h-10 bg-green-50 text-green-600 rounded-lg flex items-center justify-center mb-3">{feature.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1.5">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Thickness options ── */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Thickness & System Options</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Choose the right option for your outdoor signage.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto">
            {thicknessOptions.map((s) => (
              <div
                key={s.size}
                className={`relative rounded-xl p-4 text-center border-2 transition-all ${s.popular ? 'border-green-300 bg-green-50' : 'border-gray-200 bg-gray-50 hover:border-gray-300'}`}
              >
                {s.popular && (
                  <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-green-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wide">Popular</span>
                )}
                <div className={`text-lg font-bold ${s.popular ? 'text-green-600' : 'text-gray-800'}`}>{s.label}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-400 mt-6">
            Not sure which option? <button onClick={openQuote} className="text-green-600 hover:underline font-medium">Get a quote</button> and we’ll recommend.
          </p>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section id="gallery" className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Design Gallery</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Examples of correx boards for Irish businesses.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {galleryImages.map((img, i) => (
              <button key={`${img}-${i}`} onClick={() => setLightboxIndex(i)} className="group relative aspect-square rounded-xl overflow-hidden bg-white border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all">
                <Image src={img} alt={`Correx ${i + 1}`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" />
              </button>
            ))}
          </div>
          <div className="text-center mt-8">
            <button onClick={openQuote} className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-6 rounded-xl border border-gray-300 transition-colors">
              Get Your Custom Quote
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
            </button>
          </div>
        </div>
      </section>

      {/* ── Lightbox ── */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setLightboxIndex(null)}>
          <button className="absolute top-4 right-4 text-white/80 hover:text-white p-2" onClick={() => setLightboxIndex(null)}>
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <button className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2" onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex - 1 + galleryImages.length) % galleryImages.length); }}>
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
          </button>
          <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2" onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex + 1) % galleryImages.length); }}>
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
          </button>
          <div className="relative w-full max-w-3xl aspect-square" onClick={(e) => e.stopPropagation()}>
            <Image src={galleryImages[lightboxIndex]} alt={`Correx ${lightboxIndex + 1}`} fill className="object-contain" sizes="90vw" />
          </div>
          <div className="absolute bottom-4 text-white/60 text-sm">{lightboxIndex + 1} / {galleryImages.length}</div>
        </div>
      )}

      {/* ── Specifications ── */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Technical Specifications</h2>
              <p className="text-gray-500 mb-6">Weather-resistant correx for outdoor signage.</p>
              <div className="border border-gray-200 rounded-xl overflow-hidden">
                {specs.map((spec, i) => (
                  <div key={spec.label} className={`flex justify-between items-center px-4 py-3 text-sm ${i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                    <span className="font-medium text-gray-700">{spec.label}</span>
                    <span className="text-gray-500 text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
              <Image src={heroImages[0]} alt="Correx boards" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Ready for outdoor signage?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">Get a free quote. We’ll help you choose thickness, size, and mounting.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={openQuote} className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3.5 px-8 rounded-xl transition-colors">Get Free Quote</button>
            <a href="tel:+353894400155" className="bg-gray-800 hover:bg-gray-700 text-gray-200 font-semibold py-3.5 px-8 rounded-xl border border-gray-700 transition-colors">Call +353 89 440 0155</a>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8 text-sm text-gray-500">
            <span className="flex items-center gap-1.5"><CheckIcon /> No obligation</span>
            <span className="flex items-center gap-1.5"><CheckIcon /> Ireland-wide delivery</span>
          </div>
        </div>
      </section>

      {quoteModalOpen && (
        <CorrexQuoteForm isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} productType="4mm Correx" />
      )}
    </Layout>
  );
};

export default CorrexBoardsPage;
