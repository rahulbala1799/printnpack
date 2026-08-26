import React, { useState, useEffect, useCallback, useRef } from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import RollUpBannerQuoteForm from '../components/RollUpBannerQuoteForm';
import RelatedSeoLinks from '../components/seo/RelatedSeoLinks';
import { SITE_URL } from '../lib/site';
import { buildProductLd } from '../lib/schema';
import {
  ROLL_UP_TITLE,
  ROLL_UP_DESCRIPTION,
  ROLL_UP_KEYWORDS,
  sizeGuide,
  seoSections,
  pageFaqs,
  deliveryAreas,
  comparisonRows,
} from '../data/roll-up-banners-seo';

const PAGE_URL = `${SITE_URL}/roll-up-banners-ireland`;
const HERO_IMG = `${SITE_URL}/ifa/product/rollup/1.png`;

const productLd = buildProductLd({
  name: 'Roll Up Banners Ireland — Pull Up & Roller Banners',
  description: ROLL_UP_DESCRIPTION,
  image: HERO_IMG,
  url: PAGE_URL,
  price: '80.00',
  sku: 'RUB-STD',
  category: 'Roll Up Banners',
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
    { '@type': 'ListItem', position: 3, name: 'Roll Up Banners Ireland', item: PAGE_URL },
  ],
};

const webPageLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: ROLL_UP_TITLE,
  description: ROLL_UP_DESCRIPTION,
  url: PAGE_URL,
  inLanguage: 'en-IE',
  isPartOf: { '@type': 'WebSite', name: 'PrintNPack Ireland', url: SITE_URL },
  about: { '@type': 'Thing', name: 'Roll up banners Ireland' },
  dateModified: '2026-08-26',
};

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
  { title: 'Set up in 60 seconds', description: 'Aluminium cassette, telescopic pole and carry bag — no tools. Built for Irish trade shows and retail floors.', icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg> },
  { title: 'Premium vinyl printing', description: 'Anti-curl graphic, full colour, photo quality. Send a PDF — we proof before print.', icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" /></svg> },
  { title: '850, 1000 and 1200 mm', description: 'Standard Irish sizes plus custom. Extra wide 2 m roller banners available separately.', icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" /></svg> },
  { title: 'Economy to premium frames', description: 'Lightweight travel frames or heavy-duty aluminium cassettes for repeat exhibition use.', icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" /></svg> },
  { title: 'Ireland-wide delivery', description: 'From Ashbourne to Dublin, Cork, Galway and every county. Collection available locally.', icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg> },
  { title: 'Order from 1 banner', description: 'No bulk minimum. One pull up banner for a single event, or a set for a roadshow.', icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg> },
];

const specs = [
  { label: 'Sizes', value: '850 / 1000 / 1200 mm × 2000 mm; custom on request' },
  { label: 'Graphic', value: 'Anti-curl vinyl, full colour, UV-resistant inks' },
  { label: 'Frames', value: 'Economy, standard aluminium, premium heavy duty' },
  { label: 'Included', value: 'Stand, graphic, carry bag' },
  { label: 'Setup', value: 'Under 60 seconds, no tools' },
  { label: 'Use', value: 'Indoor — trade shows, retail, reception, conferences' },
  { label: 'MOQ', value: 'From 1 banner' },
  { label: 'Turnaround', value: '2–3 business days after proof (rush available)' },
  { label: 'Delivery', value: 'Nationwide Ireland; Ashbourne collection' },
];

const CheckIcon = () => (
  <svg className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const RollUpBannersIrelandPage = () => {
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
        <title>{ROLL_UP_TITLE}</title>
        <meta name="description" content={ROLL_UP_DESCRIPTION} />
        <meta name="keywords" content={ROLL_UP_KEYWORDS} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="geo.region" content="IE-MH" />
        <meta name="geo.placename" content="Ashbourne, Co. Meath, Ireland" />
        <meta name="geo.position" content="53.511286;-6.399544" />
        <meta name="ICBM" content="53.511286, -6.399544" />
        <meta property="og:locale" content="en_IE" />
        <meta property="og:title" content={ROLL_UP_TITLE} />
        <meta property="og:description" content={ROLL_UP_DESCRIPTION} />
        <meta property="og:image" content={HERO_IMG} />
        <meta property="og:image:alt" content="Roll up banners Ireland — pull up banner with aluminium stand" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:type" content="product" />
        <meta property="og:site_name" content="PrintNPack Ireland" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Roll Up Banners Ireland | From €80" />
        <meta name="twitter:description" content="Pull up and roller banners printed in Ashbourne. 850–1200 mm, stand included, nationwide delivery." />
        <meta name="twitter:image" content={HERO_IMG} />
        <link rel="canonical" href={PAGE_URL} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageLd) }} />
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
            <li className="text-gray-800 font-medium">Roll Up Banners Ireland</li>
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
                    <Image
                      src={img}
                      alt={i === 0
                        ? 'Roll up banners Ireland — printed pull up banner with aluminium stand and carry bag'
                        : `Roll up banner printing Ireland example ${i + 1}`}
                      fill
                      className="object-cover"
                      priority={i === 0}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-5 gap-2">
                {heroImages.map((img, i) => (
                  <button key={img} type="button" onClick={() => goToImage(i)} className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${i === currentImage ? 'border-orange-500 ring-1 ring-orange-300' : 'border-transparent opacity-70 hover:opacity-100'}`}>
                    <Image src={img} alt={`Roll up banner thumbnail ${i + 1}`} fill className="object-cover" sizes="80px" />
                  </button>
                ))}
              </div>
            </div>
            <div className="lg:sticky lg:top-24">
              <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-700 rounded-full px-3 py-1 text-sm font-medium mb-4 border border-orange-200">
                <span className="w-2 h-2 bg-orange-500 rounded-full" />
                Printed in Ashbourne · Ireland-wide delivery
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 leading-tight">Roll Up Banners Ireland — Pull Up &amp; Roller Banners from €80</h1>
              <p className="text-gray-500 text-base sm:text-lg mb-6 leading-relaxed">
                <strong>Roll up banners</strong>, <strong>pull up banners</strong> and <strong>roller banners</strong> are the same portable display — retractable stand, printed graphic and carry bag. PrintNPack prints them in Ashbourne, Co. Meath for trade shows, retail and receptions across Ireland.{' '}
                <Link href="/blog/roll-up-banners-ireland-guide" className="text-orange-600 hover:underline font-medium">Size &amp; cost guide</Link>
                {' · '}
                <Link href="/blog/roll-up-banner-printing-ireland" className="text-orange-600 hover:underline font-medium">Printing &amp; Dublin delivery</Link>
              </p>
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="bg-gray-50 rounded-xl p-3 text-center"><div className="text-lg sm:text-xl font-bold text-gray-900">From €80</div><div className="text-xs text-gray-500">heavy cassette</div></div>
                <div className="bg-gray-50 rounded-xl p-3 text-center"><div className="text-lg sm:text-xl font-bold text-gray-900">€35</div><div className="text-xs text-gray-500">artwork only</div></div>
                <div className="bg-gray-50 rounded-xl p-3 text-center"><div className="text-lg sm:text-xl font-bold text-gray-900">Up to €450</div><div className="text-xs text-gray-500">XXL 3 m × 2 m</div></div>
              </div>
              <ul className="space-y-2.5 mb-6">
                {['Complete units from €80 with heavy cassette', 'Artwork reprints from €35 — graphic only, no stand', '850, 1000 and 1200 mm — Irish trade show sizes', '2–3 day print after proof, rush available', 'Dublin, Cork, Galway and nationwide delivery'].map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-gray-600"><CheckIcon />{point}</li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <button type="button" onClick={openQuote} className="flex-1 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3.5 px-6 rounded-xl transition-colors text-center">Get Roll Up Banner Quote</button>
                <a href="tel:+353894157369" className="flex-1 bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3.5 px-6 rounded-xl border border-gray-300 transition-colors text-center">Call +353 89 415 7369</a>
              </div>
              <p className="text-xs text-gray-400 text-center">
                Need a 2 metre backdrop?{' '}
                <Link href="/extra-wide-roll-up-banners-ireland" className="text-orange-600 hover:underline">Extra wide roll up banners up to €450 for 3 m × 2 m</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Roll Up Banner Sizes Ireland</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Pick the width that fits your stand. Height is typically 2000 mm.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {sizeGuide.map((row) => (
              <div key={row.size} className={`rounded-xl p-5 border-2 ${row.popular ? 'border-orange-300 bg-orange-50' : 'border-gray-200 bg-white'}`}>
                <div className={`text-lg font-bold ${row.popular ? 'text-orange-700' : 'text-gray-900'}`}>{row.size}</div>
                <p className="text-sm text-gray-600 mt-2">{row.use}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                      <Link href={section.link.href} className="text-orange-600 hover:underline font-medium">{section.link.label}</Link>
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
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Why Order Roll Up Banners from PrintNPack?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Irish print unit, practical sizes, and a stand that survives more than one exhibition.</p>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Standard vs Extra Wide Roll Up Banners</h2>
              <p className="text-gray-500 mb-6">Most Irish orders are standard width. Choose extra wide when you need a 2 metre indoor backdrop.</p>
              <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                <div className="grid grid-cols-3 bg-gray-100 px-4 py-2 text-xs font-semibold text-gray-600 uppercase tracking-wide">
                  <span>Feature</span>
                  <span>Standard</span>
                  <span>Extra wide</span>
                </div>
                {comparisonRows.map((row, i) => (
                  <div key={row.feature} className={`grid grid-cols-3 px-4 py-3 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    <span className="font-medium text-gray-800">{row.feature}</span>
                    <span className="text-gray-600">{row.standard}</span>
                    <span className="text-gray-500">{row.extra}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-4">
                <Link href="/extra-wide-roll-up-banners-ireland" className="text-orange-600 hover:underline font-medium">Extra wide 2m roll up banners</Link>
                {' '}up to €450 for 3 m × 2 m ·{' '}
                <Link href="/blog/banner-sizes-ireland" className="text-orange-600 hover:underline font-medium">Banner sizes Ireland</Link>
              </p>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Delivery Across Ireland</h2>
              <p className="text-gray-500 mb-6">Printed in Ashbourne, Co. Meath. Collection from Unit 14 Ashbourne Business Centre or courier nationwide.</p>
              <div className="space-y-3">
                {deliveryAreas.map((area) => (
                  <div key={area.region} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">{area.region}</h3>
                    <p className="text-sm text-gray-600">{area.places}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Frame Options</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Standard, premium, lightweight travel, or a custom cassette.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto">
            {productOptions.map((s) => (
              <div key={s.size} className={`rounded-xl p-4 text-center border-2 transition-all ${s.popular ? 'border-orange-300 bg-orange-50' : 'border-gray-200 bg-white hover:border-gray-300'}`}>
                <div className={`text-sm font-bold ${s.popular ? 'text-orange-600' : 'text-gray-800'}`}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Roll Up Banner Gallery</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Examples of pull up and roller banners printed for Irish events and retail.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {galleryImages.map((img, i) => (
              <button key={`${img}-${i}`} type="button" onClick={() => setLightboxIndex(i)} className="group relative aspect-square rounded-xl overflow-hidden bg-gray-50 border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all">
                <Image src={img} alt={`Roll up banner Ireland gallery ${i + 1}`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 50vw, 20vw" />
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
            <Image src={galleryImages[lightboxIndex]} alt={`Roll up banner Ireland ${lightboxIndex + 1}`} fill className="object-contain" sizes="90vw" />
          </div>
          <div className="absolute bottom-4 text-white/60 text-sm">{lightboxIndex + 1} / {galleryImages.length}</div>
        </div>
      )}

      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Specifications</h2>
              <p className="text-gray-500 mb-6">What ships with a standard Irish roll up banner order.</p>
              <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                {specs.map((spec, i) => (
                  <div key={spec.label} className={`flex justify-between items-center px-4 py-3 text-sm ${i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                    <span className="font-medium text-gray-700">{spec.label}</span>
                    <span className="text-gray-500 text-right max-w-[60%]">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Roll Up Banner FAQs</h2>
              <div className="space-y-4">
                {pageFaqs.map((faq) => (
                  <details key={faq.q} className="group border border-gray-200 rounded-xl overflow-hidden bg-white">
                    <summary className="flex items-center justify-between cursor-pointer px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-colors text-sm font-semibold text-gray-900">
                      {faq.q}
                      <svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-4 py-3 text-sm text-gray-600 leading-relaxed">
                      {faq.a}
                      {faq.link && (
                        <>
                          {' '}
                          <Link href={faq.link.href} className="text-orange-600 hover:underline font-medium">{faq.link.label}</Link>
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
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Ready to order roll up banners in Ireland?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">Free quote. We will confirm size, frame and delivery for your event date.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button type="button" onClick={openQuote} className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3.5 px-8 rounded-xl transition-colors">Get Free Quote</button>
            <a href="tel:+353894157369" className="bg-gray-800 hover:bg-gray-700 text-gray-200 font-semibold py-3.5 px-8 rounded-xl border border-gray-700 transition-colors">Call +353 89 415 7369</a>
          </div>
        </div>
      </section>

      <RelatedSeoLinks
        links={[
          { href: '/blog/roll-up-banner-printing-ireland', label: 'Roll Up Banner Printing Ireland', desc: 'Cost, Dublin delivery and turnaround' },
          { href: '/blog/roll-up-banners-ireland-guide', label: 'Roll Up Banner Guide', desc: 'Sizes, pull up vs roller, cost in Ireland' },
          { href: '/extra-wide-roll-up-banners-ireland', label: 'Extra Wide Roll Up Banners', desc: 'XXL up to €450 for 3 m × 2 m' },
          { href: '/banners-ireland', label: 'Banners Ireland', desc: 'PVC, roll-up and exhibition printing' },
          { href: '/banner-faq-ireland', label: 'Banner FAQ', desc: '40+ instant answers' },
          { href: '/vinyl-banners', label: 'PVC Banners', desc: 'Outdoor advertising banners' },
          { href: '/pull-up-banners-meath', label: 'Pull Up Banners Meath', desc: 'Local collection in Ashbourne' },
          { href: '/banner-printing-dublin', label: 'Banner Printing Dublin', desc: 'Delivery across Dublin city & county' },
          { href: '/blog/trade-show-banners-decals-ireland', label: 'Trade Show Guide', desc: 'Exhibition marketing tips' },
        ]}
      />

      {quoteModalOpen && <RollUpBannerQuoteForm isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} productType="Roll Up Banners" />}
    </Layout>
  );
};

export default RollUpBannersIrelandPage;
