import React, { useState, useEffect, useCallback, useRef } from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import RollUpBannerQuoteForm from '../components/RollUpBannerQuoteForm';
import RelatedSeoLinks from '../components/seo/RelatedSeoLinks';
import { SITE_URL } from '../lib/site';
import { buildProductLd } from '../lib/schema';

const PAGE_URL = `${SITE_URL}/roll-up-banners`;

const pageFaqs = [
  {
    q: 'Where can I order trade show banners in Ireland?',
    a: 'PrintNPack supplies trade show banners, pull up banners and roll up banners across Ireland. Portable retractable displays with premium vinyl graphics — ideal for exhibitions, conferences, retail and corporate events. Based in Ashbourne, Co. Meath with nationwide delivery.',
  },
  {
    q: 'Where can I order pull up banners in Meath?',
    a: 'PrintNPack supplies pull up banners and roll up banners across Meath, Dublin, and all of Ireland. We are based in Ashbourne, Co. Meath — order online or call for exhibition banners with fast nationwide delivery.',
  },
  {
    q: 'What is the difference between pull up and roll up banners?',
    a: 'Pull up banners and roll up banners are the same product — a portable banner that retracts into a base for easy transport. PrintNPack prints premium vinyl graphics on aluminium and lightweight frames for trade shows and retail.',
  },
  {
    q: 'How much do roll up banners cost in Ireland?',
    a: 'Roll up banners start from €35 depending on size and frame type. Contact PrintNPack for a quote on standard 850mm and 1200mm widths or custom exhibition sizes.',
  },
];

const productLd = buildProductLd({
  name: 'Trade Show Banners Ireland — Pull Up & Roll Up Displays',
  description:
    'Professional roll-up banner printing for trade shows, exhibitions, and retail across Ireland. Premium vinyl graphics, aluminium stands, and nationwide delivery from Ashbourne, Co. Meath.',
  image: `${SITE_URL}/ifa/product/rollup/1.png`,
  url: PAGE_URL,
  price: '35.00',
});

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
    { '@type': 'ListItem', position: 3, name: 'Roll Up Banners', item: PAGE_URL },
  ],
};

// ─── Data ────────────────────────────────────────────────────────────────────

const heroImages = [
  '/ifa/product/rollup/1.png',
  '/ifa/product/rollup/2.png',
  '/ifa/product/rollup/3.png',
  '/ifa/product/rollup/4.png',
  '/ifa/product/rollup/5.png',
];

const galleryImages = [...heroImages];

const productOptions = [
  { size: 'Roll Up Banners', label: 'Standard', popular: true },
  { size: 'Premium Roll Up', label: 'Premium', popular: true },
  { size: 'Lightweight Roll Up', label: 'Lightweight', popular: false },
  { size: 'Custom Roll Up System', label: 'Custom', popular: false },
];

const features = [
  { title: 'Easy setup & transport', description: 'Portable design with quick setup. Perfect for trade shows and exhibitions.', icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg> },
  { title: 'Premium vinyl printing', description: 'Vibrant, durable print. Multiple sizes and materials.', icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" /></svg> },
  { title: 'Multiple sizes', description: 'From 800mm to 1200mm width. Custom sizes up to 1500mm x 3000mm.', icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" /></svg> },
  { title: 'Frame options', description: 'Aluminium, lightweight, heavy duty, travel frames. Professional finish.', icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" /></svg> },
  { title: 'Ireland delivery', description: 'Fast turnaround and nationwide delivery for exhibitions and events.', icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg> },
];

const specs = [
  { label: 'Sizes', value: '800mm–1200mm width, up to 1500mm x 3000mm custom' },
  { label: 'Materials', value: 'Premium vinyl, economy, mesh, backlit, fabric' },
  { label: 'Frames', value: 'Aluminium, lightweight, heavy duty, travel' },
  { label: 'Use', value: 'Trade shows, exhibitions, retail, corporate' },
  { label: 'Delivery', value: 'Nationwide Ireland' },
];

const CheckIcon = () => (
  <svg className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const RollUpBannersPage = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const timeoutRef = useRef(null);

  const goToImage = useCallback((nextIndex) => {
    if (nextIndex === currentImage) return;
    setIsTransitioning(true);
    timeoutRef.current = setTimeout(() => { setCurrentImage(nextIndex); requestAnimationFrame(() => setIsTransitioning(false)); }, 400);
  }, [currentImage]);

  useEffect(() => {
    const interval = setInterval(() => goToImage((currentImage + 1) % heroImages.length), 5000);
    return () => { clearInterval(interval); if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [currentImage, goToImage]);

  const openQuote = () => setQuoteModalOpen(true);

  return (
    <Layout>
      <Head>
        <title>Trade Show Banners Ireland | Pull Up &amp; Roll Up Banner Printing | PrintNPack</title>
        <meta name="description" content="Trade show banners Ireland — professional pull up and roll up banner printing for exhibitions, conferences and retail. Portable displays from €35. Based in Ashbourne, nationwide delivery." />
        <meta name="keywords" content="trade show banners, trade show banners ireland, pull up banners meath, roll up banners ireland, exhibition banners ireland, roll up banner printing dublin, portable banners ireland" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta property="og:title" content="Trade Show Banners Ireland | Pull Up & Roll Up Banner Printing" />
        <meta property="og:description" content="Trade show banners and portable roll-up displays for exhibitions and corporate events. Nationwide delivery from Meath." />
        <meta property="og:image" content="https://www.printnpack.ie/ifa/product/rollup/1.png" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Trade Show Banners Ireland | From €35" />
        <meta name="twitter:description" content="Portable trade show banners for exhibitions, conferences and retail. Nationwide delivery." />
        <meta name="twitter:image" content="https://www.printnpack.ie/ifa/product/rollup/1.png" />
        <link rel="canonical" href={PAGE_URL} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      </Head>

      <nav className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-gray-700">Home</Link></li>
            <li>/</li>
            <li><Link href="/banners-ireland" className="hover:text-gray-700">Banners Ireland</Link></li>
            <li>/</li>
            <li className="text-gray-800 font-medium">Roll Up Banners</li>
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
                    <Image src={img} alt={`Roll-up banner ${i + 1}`} fill className="object-cover" priority={i === 0} sizes="(max-width: 768px) 100vw, 50vw" />
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-5 gap-2">
                {heroImages.map((img, i) => (
                  <button key={img} onClick={() => goToImage(i)} className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${i === currentImage ? 'border-orange-500 ring-1 ring-orange-300' : 'border-transparent opacity-70 hover:opacity-100'}`}>
                    <Image src={img} alt={`Thumbnail ${i + 1}`} fill className="object-cover" sizes="80px" />
                  </button>
                ))}
              </div>
            </div>
            <div className="lg:sticky lg:top-24">
              <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-700 rounded-full px-3 py-1 text-sm font-medium mb-4 border border-orange-200">
                <span className="w-2 h-2 bg-orange-500 rounded-full" />
                Exhibitions & trade shows
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 leading-tight">Trade Show Banners Ireland — Pull Up &amp; Roll Up Displays</h1>
              <p className="text-gray-500 text-base sm:text-lg mb-6 leading-relaxed">
                Professional <strong>trade show banners</strong> and <strong>pull up banners</strong> for exhibitions, conferences, and corporate displays across Ireland. Premium vinyl printing, easy setup, multiple sizes. Based in Ashbourne, Co. Meath.{' '}
                <Link href="/blog/trade-show-banners-decals-ireland" className="text-orange-600 hover:underline font-medium">Trade show guide</Link>
              </p>
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="bg-gray-50 rounded-xl p-3 text-center"><div className="text-lg sm:text-xl font-bold text-gray-900">From €35</div><div className="text-xs text-gray-500">starting</div></div>
                <div className="bg-gray-50 rounded-xl p-3 text-center"><div className="text-lg sm:text-xl font-bold text-gray-900">Multiple</div><div className="text-xs text-gray-500">sizes</div></div>
                <div className="bg-gray-50 rounded-xl p-3 text-center"><div className="text-lg sm:text-xl font-bold text-gray-900">Ireland</div><div className="text-xs text-gray-500">delivery</div></div>
              </div>
              <ul className="space-y-2.5 mb-6">
                {['Easy setup & transport', 'Premium vinyl printing', 'Standard to custom sizes', 'Aluminium & lightweight frames', 'Nationwide Ireland delivery'].map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-gray-600"><CheckIcon />{point}</li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <button onClick={openQuote} className="flex-1 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3.5 px-6 rounded-xl transition-colors text-center">Get Custom Quote</button>
                <a href="tel:+353894400155" className="flex-1 bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3.5 px-6 rounded-xl border border-gray-300 transition-colors text-center">Call +353 89 440 0155</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Why Choose Our Roll Up Banners?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Professional displays for exhibitions and corporate events.</p>
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

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Product Options</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Standard, premium, lightweight, and custom systems.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto">
            {productOptions.map((s) => (
              <div key={s.size} className={`rounded-xl p-4 text-center border-2 transition-all ${s.popular ? 'border-orange-300 bg-orange-50' : 'border-gray-200 bg-gray-50 hover:border-gray-300'}`}>
                <div className={`text-sm font-bold ${s.popular ? 'text-orange-600' : 'text-gray-800'}`}>{s.label}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-400 mt-6"><button onClick={openQuote} className="text-orange-600 hover:underline font-medium">Get a quote</button></p>
        </div>
      </section>

      <section id="gallery" className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Gallery</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Examples of our roll-up banners.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {galleryImages.map((img, i) => (
              <button key={`${img}-${i}`} onClick={() => setLightboxIndex(i)} className="group relative aspect-square rounded-xl overflow-hidden bg-white border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all">
                <Image src={img} alt={`Roll-up ${i + 1}`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 50vw, 25vw" />
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
          <div className="relative w-full max-w-3xl aspect-square" onClick={(e) => e.stopPropagation()}>
            <Image src={galleryImages[lightboxIndex]} alt={`Roll-up ${lightboxIndex + 1}`} fill className="object-contain" sizes="90vw" />
          </div>
          <div className="absolute bottom-4 text-white/60 text-sm">{lightboxIndex + 1} / {galleryImages.length}</div>
        </div>
      )}

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Specifications</h2>
              <p className="text-gray-500 mb-6">Sizes, materials, and frame options.</p>
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
              <Image src={heroImages[0]} alt="Roll up banners" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Ready for professional displays?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">Get a free quote. We’ll help with size, material, and frame.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={openQuote} className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3.5 px-8 rounded-xl transition-colors">Get Free Quote</button>
            <a href="tel:+353894400155" className="bg-gray-800 hover:bg-gray-700 text-gray-200 font-semibold py-3.5 px-8 rounded-xl border border-gray-700 transition-colors">Call +353 89 440 0155</a>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8 text-sm text-gray-500">
            <span className="flex items-center gap-1.5"><CheckIcon /> No obligation</span>
            <span className="flex items-center gap-1.5"><CheckIcon /> Ireland-wide delivery</span>
          </div>
        </div>
      </section>

      <RelatedSeoLinks
        links={[
          { href: '/banners-ireland', label: 'Banners Ireland', desc: 'Complete banner printing hub' },
          { href: '/banner-faq-ireland', label: 'Banner FAQ', desc: '40+ instant answers' },
          { href: '/vinyl-banners', label: 'PVC Banners', desc: 'Outdoor advertising banners' },
          { href: '/pull-up-banners-meath', label: 'Pull Up Banners Meath', desc: 'Roll-up displays across County Meath' },
          { href: '/banner-printing-meath', label: 'Banner Printing Meath', desc: 'Based in Ashbourne' },
        ]}
      />

      {quoteModalOpen && <RollUpBannerQuoteForm isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} productType="Roll Up Banners" />}
    </Layout>
  );
};

export default RollUpBannersPage;
