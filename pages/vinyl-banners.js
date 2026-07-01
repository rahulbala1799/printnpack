import React, { useState, useEffect, useCallback, useRef } from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import RelatedSeoLinks from '../components/seo/RelatedSeoLinks';
import { SITE_URL } from '../lib/site';
import { buildProductLd } from '../lib/schema';

const PAGE_URL = `${SITE_URL}/vinyl-banners`;

const pageFaqs = [
  {
    q: 'Where can I order printed banners in Ireland?',
    a: 'PrintNPack prints custom printed banners and vinyl banners across Ireland — outdoor PVC banners, mesh banners, and indoor displays. No minimum order, fast turnaround, nationwide delivery.',
  },
  {
    q: 'What is the difference between vinyl banners and roll up banners?',
    a: 'Vinyl banners are large-format PVC sheets with eyelets for hanging on fences, buildings, and scaffolding. Roll up (pull up) banners are portable retractable displays for trade shows and indoor events.',
  },
  {
    q: 'Do you print trade show banners?',
    a: 'Yes. We print vinyl banners for outdoor advertising and supply roll up banners for trade shows, exhibitions, and retail. See our roll up banners page for portable display options.',
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
  name: 'Printed Banners Ireland — PVC Outdoor Banners',
  description: 'Custom printed PVC banners for outdoor advertising in Ireland. 440gsm/510gsm PVC, mesh options, UV printing, standard sizes 2×4 to 5×10, custom up to 5m wide. From €25.',
  image: `${SITE_URL}/ifa/product/banner/20221019_184306722822_e66498_Promo-banner.webp`,
  url: PAGE_URL,
  price: '25.00',
});

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Banners Ireland', item: `${SITE_URL}/banners-ireland` },
    { '@type': 'ListItem', position: 3, name: 'PVC Banners', item: PAGE_URL },
  ],
};

const relatedLinks = [
  { href: '/banners-ireland', label: 'Banners Ireland', desc: 'Complete banner printing hub' },
  { href: '/banner-faq-ireland', label: 'Banner FAQ', desc: '40+ instant answers' },
  { href: '/blog/banner-sizes-ireland', label: 'Banner Sizes Guide', desc: '2×4, 3×6, 4×8 & roll-up dimensions' },
  { href: '/roll-up-banners', label: 'Pull Up & Roll Up Banners', desc: 'Portable trade show displays' },
  { href: '/banner-printing-dublin', label: 'Banner Printing Dublin', desc: 'Delivery across Dublin' },
];

// ─── Data ────────────────────────────────────────────────────────────────────

const heroImages = [
  '/ifa/product/banner/20221019_184306722822_e66498_Promo-banner.webp',
  '/ifa/product/banner/20221019_184310980133_d01bb8_Real-Estate.webp',
  '/ifa/product/banner/20221019_184301869688_fcc9a6_Automobiles.webp',
  '/ifa/product/banner/1666183881.webp',
  '/ifa/product/banner/pvc-banner-media-500x500.webp',
  '/ifa/product/banner/1649557756.webp',
];

const galleryImages = [...heroImages];

const features = [
  { title: 'Premium vinyl material', description: '440gsm and 510gsm PVC vinyl. Indoor and outdoor options.', icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" /></svg> },
  { title: 'UV printing', description: 'Vibrant, fade-resistant UV printing. Up to 1440dpi.', icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" /></svg> },
  { title: 'Custom sizes', description: 'Standard sizes plus custom up to 5m wide. Hems and eyelets standard.', icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" /></svg> },
  { title: 'Wind-slits & mesh', description: 'Wind-slits or mesh vinyl for outdoor longevity.', icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 002.985-3.545M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
  { title: 'Fast turnaround', description: '3–5 days standard. 24–48 hour rush available.', icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
  { title: 'Ireland delivery', description: 'Nationwide delivery. No minimum order.', icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg> },
];

const specs = [
  { label: 'Standard materials', value: '440gsm PVC (standard), 510gsm PVC (premium/outdoor)' },
  { label: 'Common sizes', value: "2'×4', 3'×6', 4'×8', 5'×10', custom up to 5m wide" },
  { label: 'Finishing', value: 'Hemmed edges, reinforced eyelets, pole pockets, wind slits' },
  { label: 'Print', value: 'UV-resistant, up to 1440dpi' },
  { label: 'Weather', value: 'Waterproof, UV-resistant, -20°C to +70°C' },
  { label: 'Turnaround', value: '3–5 business days (rush 24–48hr available)' },
  { label: 'Min. order', value: 'No minimum – single banner available' },
  { label: 'Delivery', value: 'Nationwide Ireland' },
];

const CheckIcon = () => (
  <svg className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

export default function VinylBannersPage() {
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

  const quoteUrl = '/quote?product=Vinyl+Banners';

  return (
    <Layout>
      <Head>
        <title>Printed Banners Ireland | PVC Outdoor Banners from €25 | PrintNPack</title>
        <meta name="description" content="Printed banners Ireland from €25 — custom PVC outdoor banners for shop fronts, events and advertising. 440gsm/510gsm PVC, mesh options, eyelets included. No minimum order, nationwide delivery." />
        <meta name="keywords" content="printed banners, printed banners ireland, pvc banners ireland, outdoor banners ireland, vinyl banners ireland, custom banner printing ireland, advertising banners ireland, mesh banners ireland" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta property="og:title" content="Printed Banners Ireland | PVC Outdoor Banners from €25" />
        <meta property="og:description" content="Custom printed PVC banners for outdoor advertising. Standard sizes 2×4 to 5×10, mesh options, UV printing, nationwide delivery." />
        <meta property="og:image" content="https://www.printnpack.ie/ifa/product/banner/20221019_184306722822_e66498_Promo-banner.webp" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Printed Banners Ireland | From €25" />
        <meta name="twitter:description" content="Custom PVC banners from €25. Outdoor advertising, shop fronts, events — no minimum order." />
        <meta name="twitter:image" content="https://www.printnpack.ie/ifa/product/banner/20221019_184306722822_e66498_Promo-banner.webp" />
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
            <li><Link href="/banners-ireland" className="hover:text-gray-700">Banners Ireland</Link></li>
            <li>/</li>
            <li className="text-gray-800 font-medium">PVC Banners</li>
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
                    <Image src={img} alt={`Vinyl banner ${i + 1}`} fill className="object-cover" priority={i === 0} sizes="(max-width: 768px) 100vw, 50vw" />
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
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 leading-tight">Printed Banners Ireland — PVC &amp; Outdoor Advertising</h1>
              <p className="text-gray-500 text-base sm:text-lg mb-6 leading-relaxed">
                <strong>PVC banners</strong> and <strong>printed outdoor banners</strong> for shop fronts, events, and advertising across Ireland.
                Standard sizes from 2×4 to 5×10 — see our{' '}
                <Link href="/blog/banner-sizes-ireland" className="text-blue-600 hover:underline font-medium">banner sizes guide</Link>.
                For portable displays, see{' '}
                <Link href="/roll-up-banners" className="text-blue-600 hover:underline font-medium">pull up banners</Link>.
              </p>
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="bg-gray-50 rounded-xl p-3 text-center"><div className="text-lg sm:text-xl font-bold text-gray-900">From €25</div><div className="text-xs text-gray-500">small PVC</div></div>
                <div className="bg-gray-50 rounded-xl p-3 text-center"><div className="text-lg sm:text-xl font-bold text-gray-900">3–5 days</div><div className="text-xs text-gray-500">standard</div></div>
                <div className="bg-gray-50 rounded-xl p-3 text-center"><div className="text-lg sm:text-xl font-bold text-gray-900">No min.</div><div className="text-xs text-gray-500">order</div></div>
              </div>
              <ul className="space-y-2.5 mb-6">
                {['Premium 440gsm/510gsm vinyl', 'Vibrant, fade-resistant UV printing', 'Indoor and outdoor options', 'Custom sizes up to 5m wide', 'Reinforced hems and eyelets', 'Wind-slits for outdoor'].map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-gray-600"><CheckIcon />{point}</li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <Link href={quoteUrl} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 px-6 rounded-xl transition-colors text-center">Get Custom Quote</Link>
                <a href="tel:+353894157369" className="flex-1 bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3.5 px-6 rounded-xl border border-gray-300 transition-colors text-center">Call +353 89 415 7369</a>
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
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Why Choose Our Vinyl Banners?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">High-impact advertising that withstands the elements.</p>
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

      <section className="bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Mesh Banners for Windy Outdoor Locations</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Standard PVC banners work well on shop fronts and solid walls. For fences, scaffolding,
                GAA grounds, and exposed coastal locations, <strong>mesh PVC banners</strong> let wind
                pass through — reducing strain on eyelets and extending banner life.
              </p>
              <ul className="space-y-2 mb-6">
                {['Perforated mesh PVC — wind passes through', 'Ideal for fences, hoarding & scaffolding', 'Same UV printing as solid PVC', 'Hemmed edges and eyelets included'].map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-gray-600"><CheckIcon />{point}</li>
                ))}
              </ul>
              <Link href="/banner-faq-ireland" className="text-blue-600 hover:underline font-medium text-sm">
                PVC vs mesh — read the full comparison in our banner FAQ →
              </Link>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
              <Image src="/ifa/product/banner/pvc-banner-media-500x500.webp" alt="Mesh PVC banner for windy outdoor locations Ireland" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Gallery</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Examples of our vinyl banners.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {galleryImages.map((img, i) => (
              <button key={i} onClick={() => setLightboxIndex(i)} className="group relative aspect-square rounded-xl overflow-hidden bg-white border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
                <Image src={img} alt={`Vinyl banner ${i + 1}`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 50vw, 25vw" />
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
            <Image src={galleryImages[lightboxIndex]} alt={`Vinyl banner ${lightboxIndex + 1}`} fill className="object-contain" sizes="90vw" />
          </div>
          <div className="absolute bottom-4 text-white/60 text-sm">{lightboxIndex + 1} / {galleryImages.length}</div>
        </div>
      )}

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Technical Specifications</h2>
              <p className="text-gray-500 mb-6">Details for vinyl banners.</p>
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
              <Image src={heroImages[0]} alt="Vinyl banners" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Printed banner FAQs</h2>
          <p className="text-gray-600 text-sm mb-6">
            More on pricing, materials, and artwork in our{' '}
            <Link href="/banner-faq-ireland" className="text-blue-600 hover:underline font-medium">full banner FAQ</Link>.
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
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Ready to order vinyl banners?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">Get a free quote. We'll help with size, material, and finish.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href={quoteUrl} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 px-8 rounded-xl transition-colors">Get Free Quote</Link>
            <a href="tel:+353894157369" className="bg-gray-800 hover:bg-gray-700 text-gray-200 font-semibold py-3.5 px-8 rounded-xl border border-gray-700 transition-colors">Call +353 89 415 7369</a>
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
