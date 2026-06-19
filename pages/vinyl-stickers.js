import React, { useState, useEffect, useCallback, useRef } from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import VinylStickerQuoteForm from '../components/VinylStickerQuoteForm';
import { SITE_URL } from '../lib/site';

const PAGE_URL = `${SITE_URL}/vinyl-stickers`;

const pageFaqs = [
  {
    q: 'Where can I order custom vinyl stickers in Ireland?',
    a: 'PrintNPack prints custom vinyl stickers across Ireland for windows, vehicles, walls, and packaging. Die-cut shapes, gloss or matte finish, outdoor-grade vinyl, and fast nationwide delivery.',
  },
  {
    q: 'Do you supply stickers across all of Ireland?',
    a: 'Yes — we deliver custom vinyl stickers and decals to Dublin, Cork, Galway, and every county in Ireland.',
  },
  {
    q: 'What materials are available for vinyl stickers?',
    a: 'We offer gloss, matte, transparent, and removable vinyl plus vehicle-grade and floor graphics materials.',
  },
];

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: pageFaqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

// ─── Data ────────────────────────────────────────────────────────────────────

const heroImages = [
  '/ifa/product/vinylstk/Window_Sticker_2_01041803202404.png.webp',
  '/ifa/product/vinylstk/Window_Sticker_3_01042303202404.png.webp',
  '/ifa/product/vinylstk/Transperent_Sticker_low_03281303202404.png.webp',
  '/ifa/product/vinylstk/carstk.webp',
  '/ifa/product/vinylstk/Vinyl-Decals-_-Stickers.jpg',
];

const galleryImages = [...heroImages];

const productOptions = [
  { size: 'Vinyl Stickers', label: 'Stickers', popular: true },
  { size: 'Vinyl Decals', label: 'Decals', popular: true },
  { size: 'Vinyl Labels', label: 'Labels', popular: false },
  { size: 'Vinyl Graphics', label: 'Graphics', popular: false },
];

const features = [
  {
    title: 'Premium vinyl',
    description: 'High-quality vinyl with excellent outdoor durability and vibrant colours.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    title: 'Vehicles & windows',
    description: 'Vehicle graphics, window decals, wall murals, and floor graphics.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 002.985-3.545M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Custom shapes',
    description: 'Die-cut custom shapes, transparent or white backing, gloss or matte finish.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    title: 'Fast turnaround',
    description: '1–3 day delivery. Same-day options available for urgent orders.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Multiple materials',
    description: 'Premium, economy, reflective, fluorescent, metallic, and chrome vinyl.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    title: 'Ireland-wide',
    description: 'Professional quality vinyl stickers and decals delivered across Ireland.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
];

const specs = [
  { label: 'Materials', value: 'Premium, economy, reflective, fluorescent, metallic, chrome' },
  { label: 'Finish', value: 'Gloss, matte, satin, transparent, white backing, die-cut' },
  { label: 'Use', value: 'Indoor & outdoor' },
  { label: 'Applications', value: 'Vehicles, windows, walls, floors, labels, signage' },
  { label: 'Delivery', value: 'Nationwide Ireland, 1–3 days' },
];

// ─── Components ──────────────────────────────────────────────────────────────

const CheckIcon = () => (
  <svg className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

// ─── Page ────────────────────────────────────────────────────────────────────

const VinylStickersPage = () => {
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
        <title>Custom Vinyl Stickers Ireland | Stickers &amp; Decals | PrintNPack</title>
        <meta name="description" content="Custom vinyl stickers Ireland — window, vehicle &amp; wall decals with premium outdoor vinyl. Stickers Ireland with fast turnaround and nationwide delivery from PrintNPack." />
        <meta name="keywords" content="custom vinyl stickers, custom vinyl stickers ireland, stickers ireland, vinyl stickers ireland, vinyl decals ireland, window decals, vehicle graphics ireland" />
        <meta property="og:title" content="Custom Vinyl Stickers Ireland | Stickers & Decals" />
        <meta property="og:description" content="Custom vinyl stickers & decals for vehicles, windows & walls. Premium materials, Ireland delivery." />
        <meta property="og:image" content="https://www.printnpack.ie/ifa/product/vinylstk/Window_Sticker_2_01041803202404.png.webp" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={PAGE_URL} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      </Head>

      <nav className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-gray-700">Home</Link></li>
            <li>/</li>
            <li><Link href="/#products" className="hover:text-gray-700">Products</Link></li>
            <li>/</li>
            <li className="text-gray-800 font-medium">Vinyl Stickers</li>
          </ol>
        </div>
      </nav>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div>
              <div className="relative aspect-square bg-gray-50 rounded-2xl overflow-hidden mb-3">
                {heroImages.map((img, i) => (
                  <div key={img} className="absolute inset-0" style={{ transition: 'opacity 0.8s ease', opacity: i === currentImage && !isTransitioning ? 1 : 0 }}>
                    <Image src={img} alt={`Vinyl sticker ${i + 1}`} fill className="object-cover" priority={i === 0} sizes="(max-width: 768px) 100vw, 50vw" />
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-5 gap-2">
                {heroImages.map((img, i) => (
                  <button key={img} onClick={() => goToImage(i)} className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${i === currentImage ? 'border-purple-500 ring-1 ring-purple-300' : 'border-transparent opacity-70 hover:opacity-100'}`}>
                    <Image src={img} alt={`Thumbnail ${i + 1}`} fill className="object-cover" sizes="80px" />
                  </button>
                ))}
              </div>
            </div>
            <div className="lg:sticky lg:top-24">
              <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 rounded-full px-3 py-1 text-sm font-medium mb-4 border border-purple-200">
                <span className="w-2 h-2 bg-purple-500 rounded-full" />
                Custom graphics & decals
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 leading-tight">Custom Vinyl Stickers Ireland</h1>
              <p className="text-gray-500 text-base sm:text-lg mb-6 leading-relaxed">
                <strong>Custom vinyl stickers</strong> and decals for vehicles, windows, walls, and more — premium outdoor vinyl with vibrant colour. Trusted <strong>stickers Ireland</strong> supplier with fast nationwide delivery.
              </p>
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="bg-gray-50 rounded-xl p-3 text-center"><div className="text-lg sm:text-xl font-bold text-gray-900">From €2</div><div className="text-xs text-gray-500">starting</div></div>
                <div className="bg-gray-50 rounded-xl p-3 text-center"><div className="text-lg sm:text-xl font-bold text-gray-900">1–3 days</div><div className="text-xs text-gray-500">delivery</div></div>
                <div className="bg-gray-50 rounded-xl p-3 text-center"><div className="text-lg sm:text-xl font-bold text-gray-900">6</div><div className="text-xs text-gray-500">material types</div></div>
              </div>
              <ul className="space-y-2.5 mb-6">
                {['Premium vinyl, outdoor durable', 'Vehicles, windows, walls', 'Custom shapes & die-cut', 'Gloss, matte, transparent', 'Nationwide Ireland delivery'].map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-gray-600"><CheckIcon />{point}</li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <button onClick={openQuote} className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3.5 px-6 rounded-xl transition-colors text-center">Get Custom Quote</button>
                <a href="tel:+353894400155" className="flex-1 bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3.5 px-6 rounded-xl border border-gray-300 transition-colors text-center">Call +353 89 440 0155</a>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-400 border-t border-gray-100 pt-4">
                <span className="flex items-center gap-1"><svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Quality Guaranteed</span>
                <span className="flex items-center gap-1"><svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>Irish Business</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Why Choose Our Vinyl Stickers?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Premium materials and professional results for every application.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-xl p-5 sm:p-6 border border-gray-200 hover:border-purple-200 hover:shadow-md transition-all">
                <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center mb-3">{f.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1.5">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Product Types</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Stickers, decals, labels, and large-format graphics.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto">
            {productOptions.map((s) => (
              <div key={s.size} className={`rounded-xl p-4 text-center border-2 transition-all ${s.popular ? 'border-purple-300 bg-purple-50' : 'border-gray-200 bg-gray-50 hover:border-gray-300'}`}>
                <div className={`text-lg font-bold ${s.popular ? 'text-purple-600' : 'text-gray-800'}`}>{s.label}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-400 mt-6">
            <button onClick={openQuote} className="text-purple-600 hover:underline font-medium">Get a quote</button> for your project.
          </p>
        </div>
      </section>

      <section id="gallery" className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Gallery</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Examples of our vinyl stickers and decals.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {galleryImages.map((img, i) => (
              <button key={`${img}-${i}`} onClick={() => setLightboxIndex(i)} className="group relative aspect-square rounded-xl overflow-hidden bg-white border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all">
                <Image src={img} alt={`Vinyl ${i + 1}`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" />
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
            <Image src={galleryImages[lightboxIndex]} alt={`Vinyl ${lightboxIndex + 1}`} fill className="object-contain" sizes="90vw" />
          </div>
          <div className="absolute bottom-4 text-white/60 text-sm">{lightboxIndex + 1} / {galleryImages.length}</div>
        </div>
      )}

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Specifications</h2>
              <p className="text-gray-500 mb-6">Materials and finishes for every application.</p>
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
              <Image src={heroImages[0]} alt="Vinyl stickers" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Ready for custom vinyl?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">Get a free quote. We’ll help with material, size, and finish.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={openQuote} className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3.5 px-8 rounded-xl transition-colors">Get Free Quote</button>
            <a href="tel:+353894400155" className="bg-gray-800 hover:bg-gray-700 text-gray-200 font-semibold py-3.5 px-8 rounded-xl border border-gray-700 transition-colors">Call +353 89 440 0155</a>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8 text-sm text-gray-500">
            <span className="flex items-center gap-1.5"><CheckIcon /> No obligation</span>
            <span className="flex items-center gap-1.5"><CheckIcon /> Ireland-wide delivery</span>
          </div>
        </div>
      </section>

      {quoteModalOpen && (
        <VinylStickerQuoteForm isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} productType="Vinyl Stickers" />
      )}
    </Layout>
  );
};

export default VinylStickersPage;
