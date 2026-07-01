import React, { useState, useEffect, useCallback, useRef } from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import RubberStampQuoteForm from '../components/RubberStampQuoteForm';
import RelatedSeoLinks from '../components/seo/RelatedSeoLinks';
import { SITE_URL } from '../lib/site';
import { buildProductLd } from '../lib/schema';

const PAGE_URL = `${SITE_URL}/rubber-stamps`;

const pageFaqs = [
  {
    q: 'How much do rubber stamps cost in Ireland?',
    a: 'Custom rubber stamps start from around €15–€25 for a basic business stamp, with signature stamps and larger company stamps from €20–€45. Contact PrintNPack for a free quote — no minimum order.',
  },
  {
    q: 'Do you offer same-day rubber stamp printing?',
    a: 'Yes. Same-day and next-day express service is available for urgent business stamp orders when artwork is ready. Call +353 89 415 7369 with your deadline.',
  },
  {
    q: 'What is the difference between self-inking and hand stamps?',
    a: 'Self-inking stamps have a built-in ink pad for clean, fast daily use. Traditional hand stamps use a separate ink pad and wooden handle — lower cost for occasional stamping.',
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

const productLd = buildProductLd({
  name: 'Rubber Stamps Ireland — Business Stamps & Custom Rubber Stamps',
  description: 'Professional custom rubber stamps for business and personal use in Ireland. Business stamps, signature stamps, company logo stamps, and traditional hand stamps. Same-day service available.',
  image: `${SITE_URL}/images/rubber-stamps/RubberStamp_10.jpg`,
  url: PAGE_URL,
  price: '15.00',
});

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Rubber Stamps Ireland', item: `${SITE_URL}/rubber-stamps-ireland` },
    { '@type': 'ListItem', position: 3, name: 'Order Custom Stamps', item: PAGE_URL },
  ],
};

const relatedLinks = [
  { href: '/printing-ashbourne', label: 'Printing Ashbourne', desc: 'Local print shop — posters, flyers & stamps' },
  { href: '/rubber-stamps-ireland', label: 'Rubber Stamps Ireland', desc: 'Complete stamp printing hub' },
  { href: '/rubber-stamp-faq-ireland', label: 'Stamp FAQ', desc: '25+ instant answers' },
  { href: '/blog/business-stamps-ireland-guide', label: 'Business Stamps Guide', desc: 'Company & invoice stamps' },
  { href: '/rubber-stamp-printing-ashbourne', label: 'Stamp Printing Ashbourne', desc: 'Local collection & same-day' },
  { href: '/rubber-stamp-printing-dublin', label: 'Stamp Printing Dublin', desc: 'Delivery across Dublin' },
];

// ─── Data ────────────────────────────────────────────────────────────────────

const heroImages = [
  '/images/rubber-stamps/Rubberstam_6.jpg',
  '/images/rubber-stamps/Rubberstam_7.jpg',
  '/images/rubber-stamps/RubberStamp_10.jpg',
  '/images/rubber-stamps/RubberStamp_11.jpg',
  '/images/rubber-stamps/RubberStamp_12.jpg',
];

const galleryImages = [
  '/images/rubber-stamps/Rubberstam_6.jpg',
  '/images/rubber-stamps/Rubberstam_7.jpg',
  '/images/rubber-stamps/Rubberstam_8.jpg',
  '/images/rubber-stamps/Rubberstam_9.jpg',
  '/images/rubber-stamps/RubberStamp_10.jpg',
  '/images/rubber-stamps/RubberStamp_11.jpg',
  '/images/rubber-stamps/RubberStamp_12.jpg',
  '/images/rubber-stamps/RubberStamp_13.jpg',
  '/images/rubber-stamps/RubberStamp_14.jpg',
  '/images/rubber-stamps/RubberStamp_15.jpg',
];

const stampTypes = [
  { title: 'Custom Business Stamps', description: 'Company logos, addresses, official documentation. Invoices, letterheads, corporate branding.', popular: true },
  { title: 'Traditional Hand Stamps', description: 'Classic wooden handle stamps with separate ink pad. Occasional use and traditional applications.', popular: false },
  { title: 'Signature Stamps', description: 'Personalized signature stamps for authorized document signing. Streamline approvals.', popular: true },
];

const features = [
  {
    title: 'Same day service',
    description: 'Same day and next day service available for urgent orders.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Premium quality',
    description: 'Professional-grade materials and precision manufacturing for crisp, clear impressions.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'Custom design',
    description: 'Fully customizable: logos, text, graphics, and special formatting to match your brand.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    title: 'Expert support',
    description: 'Our design team helps you create the perfect stamp with professional advice.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
  },
];

const specs = [
  { label: 'Types', value: 'Business, traditional hand, signature stamps' },
  { label: 'Materials', value: 'Professional-grade rubber and mounts' },
  { label: 'Turnaround', value: 'Same day & next day available' },
  { label: 'Delivery', value: 'Nationwide Ireland' },
];

// ─── Components ──────────────────────────────────────────────────────────────

const CheckIcon = () => (
  <svg className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

// ─── Page ────────────────────────────────────────────────────────────────────

const RubberStampsPage = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedStampType, setSelectedStampType] = useState('Custom Rubber Stamp');
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

  const openQuote = () => {
    setSelectedStampType('Custom Rubber Stamp');
    setQuoteModalOpen(true);
  };
  const openQuoteWithType = (stampType) => {
    setSelectedStampType(stampType);
    setQuoteModalOpen(true);
  };

  return (
    <Layout>
      <Head>
        <title>Rubber Stamps Ireland | Business Stamps — Custom Stamps from €15 | PrintNPack</title>
        <meta name="description" content="Rubber stamps Ireland and business stamps from €15 — custom company stamps, signature stamps and logo stamps. Same-day service, local collection in Ashbourne, nationwide delivery." />
        <meta name="keywords" content="rubber stamps ireland, business stamp, business stamps ireland, custom rubber stamps, company stamp ireland, stamp printing, signature stamps, personalised stamps ireland, logo stamp near me" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta property="og:title" content="Rubber Stamps Ireland | Business Stamps — Custom Stamps from €15" />
        <meta property="og:description" content="Professional custom rubber stamps for business and personal use. Same-day service, nationwide delivery." />
        <meta property="og:image" content="https://www.printnpack.ie/images/rubber-stamps/RubberStamp_10.jpg" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rubber Stamps Ireland | Business Stamps from €15" />
        <meta name="twitter:description" content="Business stamps, signature stamps & company logo stamps. Same-day service available." />
        <meta name="twitter:image" content="https://www.printnpack.ie/images/rubber-stamps/RubberStamp_10.jpg" />
        <link rel="canonical" href={PAGE_URL} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      </Head>

      <nav className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-gray-700">Home</Link></li>
            <li>/</li>
            <li><Link href="/rubber-stamps-ireland" className="hover:text-gray-700">Rubber Stamps Ireland</Link></li>
            <li>/</li>
            <li className="text-gray-800 font-medium">Order Stamps</li>
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
                    <Image src={img} alt={`Rubber stamp ${i + 1}`} fill className="object-cover" priority={i === 0} sizes="(max-width: 768px) 100vw, 50vw" />
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-5 gap-2">
                {heroImages.map((img, i) => (
                  <button key={img} onClick={() => goToImage(i)} className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${i === currentImage ? 'border-indigo-500 ring-1 ring-indigo-300' : 'border-transparent opacity-70 hover:opacity-100'}`}>
                    <Image src={img} alt={`Thumbnail ${i + 1}`} fill className="object-cover" sizes="80px" />
                  </button>
                ))}
              </div>
            </div>
            <div className="lg:sticky lg:top-24">
              <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 rounded-full px-3 py-1 text-sm font-medium mb-4 border border-indigo-200">
                <span className="w-2 h-2 bg-indigo-500 rounded-full" />
                Made in Ireland
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 leading-tight">Rubber Stamps Ireland — Business Stamps &amp; Custom Stamps</h1>
              <p className="text-gray-500 text-base sm:text-lg mb-6 leading-relaxed">
                Custom <strong>business stamps</strong>, <strong>company logo stamps</strong>, and <strong>signature stamps</strong> for Irish businesses.
                Self-inking and traditional hand stamps — see our{' '}
                <Link href="/rubber-stamp-faq-ireland" className="text-indigo-600 hover:underline font-medium">stamp FAQ</Link>{' '}
                or{' '}
                <Link href="/blog/business-stamps-ireland-guide" className="text-indigo-600 hover:underline font-medium">business stamps guide</Link>.
              </p>
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="bg-gray-50 rounded-xl p-3 text-center"><div className="text-lg sm:text-xl font-bold text-gray-900">From €15</div><div className="text-xs text-gray-500">business stamp</div></div>
                <div className="bg-gray-50 rounded-xl p-3 text-center"><div className="text-lg sm:text-xl font-bold text-gray-900">1000+</div><div className="text-xs text-gray-500">customers</div></div>
                <div className="bg-gray-50 rounded-xl p-3 text-center"><div className="text-lg sm:text-xl font-bold text-gray-900">15+</div><div className="text-xs text-gray-500">years</div></div>
              </div>
              <ul className="space-y-2.5 mb-6">
                {['Same day service available', 'Professional quality', 'Custom designs', 'Expert support', 'Nationwide Ireland delivery'].map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-gray-600"><CheckIcon />{point}</li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <button onClick={openQuote} className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3.5 px-6 rounded-xl transition-colors text-center">Get Custom Quote</button>
                <a href="tel:+353894157369" className="flex-1 bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3.5 px-6 rounded-xl border border-gray-300 transition-colors text-center">Call +353 89 415 7369</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Why Choose Our Rubber Stamps?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Ireland’s trusted rubber stamp specialists.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-xl p-5 sm:p-6 border border-gray-200 hover:border-indigo-200 hover:shadow-md transition-all">
                <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center mb-3">{f.icon}</div>
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
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Stamp Types</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Choose the right stamp for your needs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {stampTypes.map((s) => (
              <div key={s.title} className={`rounded-xl p-5 border-2 transition-all ${s.popular ? 'border-indigo-300 bg-indigo-50' : 'border-gray-200 bg-gray-50 hover:border-gray-300'}`}>
                <h3 className="font-semibold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{s.description}</p>
                <button onClick={() => openQuoteWithType(s.title)} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors">
                  Get Quote for {s.title.replace('Custom ', '').replace(' Stamps', '')}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Stamp Gallery</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Examples of our rubber stamps.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {galleryImages.map((img, i) => (
              <button key={`${img}-${i}`} onClick={() => setLightboxIndex(i)} className="group relative aspect-square rounded-xl overflow-hidden bg-white border border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all">
                <Image src={img} alt={`Stamp ${i + 1}`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 50vw, 20vw" />
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
            <Image src={galleryImages[lightboxIndex]} alt={`Stamp ${lightboxIndex + 1}`} fill className="object-contain" sizes="90vw" />
          </div>
          <div className="absolute bottom-4 text-white/60 text-sm">{lightboxIndex + 1} / {galleryImages.length}</div>
        </div>
      )}

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Specifications</h2>
              <p className="text-gray-500 mb-6">Professional rubber stamps for every application.</p>
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
              <Image src={heroImages[0]} alt="Rubber stamps" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Rubber stamp FAQs</h2>
          <p className="text-gray-600 text-sm mb-6">
            More on pricing, types, and turnaround in our{' '}
            <Link href="/rubber-stamp-faq-ireland" className="text-indigo-600 hover:underline font-medium">full stamp FAQ</Link>.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {pageFaqs.map(({ q, a }) => (
              <div key={q} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h3 className="font-semibold text-gray-900 text-sm mb-2">{q}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedSeoLinks links={relatedLinks} />

      <section className="bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Ready to create your custom stamp?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">Get professional rubber stamps made to your exact specifications. Fast turnaround and competitive prices.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={openQuote} className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3.5 px-8 rounded-xl transition-colors">Get Custom Quote</button>
            <a href="tel:+353894157369" className="bg-gray-800 hover:bg-gray-700 text-gray-200 font-semibold py-3.5 px-8 rounded-xl border border-gray-700 transition-colors">Call +353 89 415 7369</a>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8 text-sm text-gray-500">
            <span className="flex items-center gap-1.5"><CheckIcon /> No obligation</span>
            <span className="flex items-center gap-1.5"><CheckIcon /> Ireland-wide delivery</span>
          </div>
        </div>
      </section>

      {quoteModalOpen && (
        <RubberStampQuoteForm isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} stampType={selectedStampType} />
      )}
    </Layout>
  );
};

export default RubberStampsPage;
