import React, { useState, useEffect, useCallback, useRef } from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

// ─── Pricing Data ────────────────────────────────────────────────────────────

const POSTER_SIZES = ['A4', 'A3'];

const POSTER_PRICES = {
  A4: { label: 'A4 (210×297mm)', tiers: [
    { qty: 10, price: 12 }, { qty: 20, price: 16 }, { qty: 50, price: 30 },
    { qty: 100, price: 41 }, { qty: 200, price: 51 }, { qty: 300, price: 56 },
    { qty: 400, price: 59 }, { qty: 500, price: 66 }, { qty: 1000, price: 94 },
    { qty: 2000, price: 127 }, { qty: 3000, price: 189 }, { qty: 4000, price: 191 },
    { qty: 5000, price: 318 },
  ]},
  A3: { label: 'A3 (297×420mm)', tiers: [
    { qty: 10, price: 16 }, { qty: 20, price: 27 }, { qty: 50, price: 41 },
    { qty: 100, price: 51 }, { qty: 200, price: 59 }, { qty: 300, price: 75 },
    { qty: 400, price: 83 }, { qty: 500, price: 94 }, { qty: 1000, price: 127 },
    { qty: 2000, price: 254 }, { qty: 3000, price: 381 }, { qty: 4000, price: 508 },
    { qty: 5000, price: 635 },
  ]},
};

const VAT_RATE = 0.23;

// ─── Data ────────────────────────────────────────────────────────────────────

const heroImages = [
  '/ifa/product/Poster/single_poster.jpg',
  '/ifa/product/Poster/PosterPrinting-4.jpg',
  '/ifa/product/Poster/PosterPrinting-5.jpg',
  '/ifa/product/Poster/1.webp',
  '/ifa/product/Poster/2.webp',
  '/ifa/product/Poster/3.webp',
];

const galleryImages = [
  '/ifa/product/Poster/single_poster.jpg',
  '/ifa/product/Poster/PosterPrinting-4.jpg',
  '/ifa/product/Poster/PosterPrinting-5.jpg',
  '/ifa/product/Poster/1.webp',
  '/ifa/product/Poster/2.webp',
  '/ifa/product/Poster/3.webp',
  '/ifa/product/Poster/4.webp',
  '/ifa/product/Poster/5.webp',
];

const features = [
  { title: 'Premium paper', description: '170gsm and 200gsm premium satin. Sharp, high-resolution reproduction.', icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg> },
  { title: 'Eco-solvent printing', description: 'Vibrant, long-lasting colors. Full CMYK, up to 1440dpi.', icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" /></svg> },
  { title: 'Standard & custom sizes', description: 'A4 to A0, 40x60cm to 70x100cm. Custom up to 1.5m width.', icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" /></svg> },
  { title: 'Lamination options', description: 'Matt or gloss lamination for protection and premium finish.', icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" /></svg> },
  { title: 'Fast turnaround', description: '1–3 business days standard. Rush service available.', icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
  { title: 'No minimum order', description: 'Single posters available. Bulk discounts for larger orders.', icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.097V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" /></svg> },
];

const specs = [
  { label: 'Paper options', value: '170gsm premium satin, 200gsm premium satin' },
  { label: 'Printing', value: 'Eco-solvent, full color CMYK, up to 1440dpi' },
  { label: 'Standard sizes', value: 'A4, A3, A2, A1, A0, 40x60cm, 50x70cm, 60x90cm, 70x100cm' },
  { label: 'Custom sizes', value: 'Up to 1.5m width' },
  { label: 'Finishing', value: 'Cut to size, matt or gloss lamination' },
  { label: 'Production', value: '1–3 business days (rush available)' },
  { label: 'Min. order', value: 'No minimum – single posters available' },
  { label: 'Delivery', value: 'Nationwide Ireland' },
];

const CheckIcon = () => (
  <svg className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

export default function PostersPage() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const timeoutRef = useRef(null);
  const [selectedSize, setSelectedSize] = useState('A4');
  const [selectedQty, setSelectedQty] = useState(100);

  const currentTier = POSTER_PRICES[selectedSize].tiers.find(t => t.qty === selectedQty);
  const priceExVat = currentTier ? currentTier.price : 0;
  const vatAmount = +(priceExVat * VAT_RATE).toFixed(2);
  const priceIncVat = +(priceExVat + vatAmount).toFixed(2);
  const pricePerUnit = selectedQty > 0 ? (priceExVat / selectedQty).toFixed(2) : '0.00';

  const goToImage = useCallback((nextIndex) => {
    if (nextIndex === currentImage) return;
    setIsTransitioning(true);
    timeoutRef.current = setTimeout(() => { setCurrentImage(nextIndex); requestAnimationFrame(() => setIsTransitioning(false)); }, 400);
  }, [currentImage]);

  useEffect(() => {
    const interval = setInterval(() => goToImage((currentImage + 1) % heroImages.length), 5000);
    return () => { clearInterval(interval); if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [currentImage, goToImage]);

  const quoteUrl = '/quote?product=Custom+Posters';

  return (
    <Layout>
      <Head>
        <title>Custom Posters - Premium Print | Print n Pack Ireland</title>
        <meta name="description" content="High-quality custom posters on premium paper. Eco-solvent printing, A4 to A0 and custom sizes. Fast turnaround, no minimum order. Ireland delivery." />
        <meta name="keywords" content="custom posters, poster printing, A4 A3 A2 A1 A0, events, retail, Ireland" />
        <meta property="og:title" content="Custom Posters - Premium Print | Print n Pack Ireland" />
        <meta property="og:description" content="High-quality custom posters. Premium paper, eco-solvent inks. From €15 per poster." />
        <meta property="og:image" content="https://www.printnpack.ie/ifa/product/Poster/single_poster.jpg" />
        <meta property="og:url" content="https://www.printnpack.ie/posters" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.printnpack.ie/posters" />
      </Head>

      <nav className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-gray-700">Home</Link></li>
            <li>/</li>
            <li><Link href="/products" className="hover:text-gray-700">Products</Link></li>
            <li>/</li>
            <li className="text-gray-800 font-medium">Custom Posters</li>
          </ol>
        </div>
      </nav>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div>
              <div className="relative aspect-square bg-gray-50 rounded-2xl overflow-hidden mb-3">
                {heroImages.map((img, i) => (
                  <div key={i} className="absolute inset-0" style={{ transition: 'opacity 0.8s ease', opacity: i === currentImage && !isTransitioning ? 1 : 0 }}>
                    <Image src={img} alt={`Custom poster ${i + 1}`} fill className="object-cover" priority={i === 0} sizes="(max-width: 768px) 100vw, 50vw" />
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-6 gap-2">
                {heroImages.map((img, i) => (
                  <button key={i} onClick={() => goToImage(i)} className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${i === currentImage ? 'border-blue-500 ring-1 ring-blue-300' : 'border-transparent opacity-70 hover:opacity-100'}`}>
                    <Image src={img} alt="" fill className="object-cover" sizes="80px" />
                  </button>
                ))}
              </div>
            </div>
            <div className="lg:sticky lg:top-24">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 rounded-full px-3 py-1 text-sm font-medium mb-4 border border-blue-200">
                <span className="w-2 h-2 bg-blue-500 rounded-full" />
                Wide format
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 leading-tight">Custom Posters</h1>
              <p className="text-gray-500 text-base sm:text-lg mb-6 leading-relaxed">
                High-quality custom posters printed on premium paper with vibrant eco-solvent inks. Perfect for advertising, events, retail displays, and exhibitions.
              </p>
              {/* Pricing Calculator */}
              <div className="bg-gray-50 rounded-2xl p-4 mb-6 border border-gray-200">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Instant Price (170gsm Coated Gloss)</p>
                <div className="flex gap-2 mb-3">
                  {POSTER_SIZES.map(s => (
                    <button key={s} onClick={() => setSelectedSize(s)} className={`flex-1 py-2 rounded-lg text-sm font-semibold border transition-all ${selectedSize === s ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400'}`}>{s} <span className="font-normal text-xs opacity-70">{s === 'A4' ? '210×297' : '297×420'}</span></button>
                  ))}
                </div>
                <div className="mb-4">
                  <label className="block text-xs text-gray-500 mb-1">Quantity</label>
                  <select value={selectedQty} onChange={e => setSelectedQty(Number(e.target.value))} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-300">
                    {POSTER_PRICES[selectedSize].tiers.map(t => (
                      <option key={t.qty} value={t.qty}>{t.qty} posters</option>
                    ))}
                  </select>
                </div>
                <div className="bg-white rounded-xl border border-gray-200 p-4">
                  <div className="flex items-end justify-between mb-1">
                    <span className="text-3xl font-bold text-gray-900">€{priceExVat}</span>
                    <span className="text-sm text-gray-400 mb-1">excl. VAT</span>
                  </div>
                  <div className="text-xs text-gray-400 mb-3">€{pricePerUnit} per poster · VAT €{vatAmount} · Total incl. VAT <span className="font-semibold text-gray-600">€{priceIncVat}</span></div>
                  <a href="#pricing-table" className="text-xs text-blue-600 hover:underline">View full pricing table ↓</a>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-gray-50 rounded-xl p-3 text-center"><div className="text-lg sm:text-xl font-bold text-gray-900">1+</div><div className="text-xs text-gray-500">min. order</div></div>
                <div className="bg-gray-50 rounded-xl p-3 text-center"><div className="text-lg sm:text-xl font-bold text-gray-900">1–3 days</div><div className="text-xs text-gray-500">production</div></div>
              </div>
              <ul className="space-y-2.5 mb-6">
                {['170gsm and 200gsm premium paper', 'Eco-solvent printing, vibrant colors', 'Custom sizes A4 to A0 and beyond', 'Indoor and short-term outdoor use', 'Fast turnaround, rush available', 'Bulk discounts for larger orders'].map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-gray-600"><CheckIcon />{point}</li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <Link href={quoteUrl} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 px-6 rounded-xl transition-colors text-center">Get Custom Quote</Link>
                <a href="tel:+353894400155" className="flex-1 bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3.5 px-6 rounded-xl border border-gray-300 transition-colors text-center">Call +353 89 440 0155</a>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-400 border-t border-gray-100 pt-4">
                <span className="flex items-center gap-1"><svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Irish Business</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Why Choose Custom Posters?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Professional posters for advertising, events, and displays.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-xl p-5 sm:p-6 border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all">
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-3">{f.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1.5">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Gallery</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Examples of our custom posters.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {galleryImages.map((img, i) => (
              <button key={i} onClick={() => setLightboxIndex(i)} className="group relative aspect-square rounded-xl overflow-hidden bg-white border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
                <Image src={img} alt={`Custom poster ${i + 1}`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 50vw, 25vw" />
              </button>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href={quoteUrl} className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-6 rounded-xl border border-gray-300 transition-colors">
              Get Your Custom Quote
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
            </Link>
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
            <Image src={galleryImages[lightboxIndex]} alt={`Custom poster ${lightboxIndex + 1}`} fill className="object-contain" sizes="90vw" />
          </div>
          <div className="absolute bottom-4 text-white/60 text-sm">{lightboxIndex + 1} / {galleryImages.length}</div>
        </div>
      )}

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Technical Specifications</h2>
              <p className="text-gray-500 mb-6">Details for custom posters.</p>
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
              <Image src={heroImages[0]} alt="Custom posters" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      <section id="pricing-table" className="bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Poster Pricing</h2>
            <p className="text-gray-500 text-sm">170gsm coated glossy paper · Prices excl. 23% VAT</p>
          </div>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Qty</th>
                  <th className="text-right px-4 py-3 font-semibold text-gray-700">A4 <span className="font-normal text-gray-400 text-xs">210×297mm</span></th>
                  <th className="text-right px-4 py-3 font-semibold text-gray-700">A3 <span className="font-normal text-gray-400 text-xs">297×420mm</span></th>
                  <th className="text-right px-4 py-3 font-semibold text-gray-700 hidden sm:table-cell">A4 per unit</th>
                  <th className="text-right px-4 py-3 font-semibold text-gray-700 hidden sm:table-cell">A3 per unit</th>
                </tr>
              </thead>
              <tbody>
                {POSTER_PRICES.A4.tiers.map((t, i) => {
                  const a3 = POSTER_PRICES.A3.tiers[i];
                  const isActive = selectedQty === t.qty;
                  return (
                    <tr key={t.qty} onClick={() => setSelectedQty(t.qty)} className={`cursor-pointer border-b border-gray-100 transition-colors ${isActive ? 'bg-blue-50' : i % 2 === 0 ? 'bg-white hover:bg-gray-50' : 'bg-gray-50/50 hover:bg-gray-100'}`}>
                      <td className={`px-4 py-3 font-medium ${isActive ? 'text-blue-700' : 'text-gray-800'}`}>{t.qty.toLocaleString()}</td>
                      <td className={`px-4 py-3 text-right font-semibold ${isActive ? 'text-blue-700' : 'text-gray-900'}`}>€{t.price}</td>
                      <td className={`px-4 py-3 text-right font-semibold ${isActive ? 'text-blue-700' : 'text-gray-900'}`}>€{a3.price}</td>
                      <td className="px-4 py-3 text-right text-gray-400 hidden sm:table-cell">€{(t.price / t.qty).toFixed(3)}</td>
                      <td className="px-4 py-3 text-right text-gray-400 hidden sm:table-cell">€{(a3.price / a3.qty).toFixed(3)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3 text-center">Click a row to update the price calculator above. All prices excl. VAT (23%).</p>
        </div>
      </section>

      <section className="bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Ready to order custom posters?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">Get a free quote. We'll help with size, paper, and finish.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href={quoteUrl} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 px-8 rounded-xl transition-colors">Get Free Quote</Link>
            <a href="tel:+353894400155" className="bg-gray-800 hover:bg-gray-700 text-gray-200 font-semibold py-3.5 px-8 rounded-xl border border-gray-700 transition-colors">Call +353 89 440 0155</a>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8 text-sm text-gray-500">
            <span className="flex items-center gap-1.5"><CheckIcon /> No obligation</span>
            <span className="flex items-center gap-1.5"><CheckIcon /> Ireland-wide delivery</span>
          </div>
        </div>
      </section>
    </Layout>
  );
}
