import React from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_URL } from '../lib/site';
import { buildProductLd } from '../lib/schema';
import RelatedSeoLinks from '../components/seo/RelatedSeoLinks';

const PAGE_URL = `${SITE_URL}/luxury-magnetic-closure-boxes-ireland`;
const HERO_IMAGE = '/images/products/luxury-magnetic-closure-boxes/luxury-magnetic-closure-box-ireland-gold-foil.jpg';

const galleryImages = [
  {
    src: '/images/products/luxury-magnetic-closure-boxes/luxury-magnetic-closure-box-ireland-gold-foil.jpg',
    alt: 'Luxury magnetic closure box Ireland — forest green rigid gift box with gold foil logo and embossing',
  },
  {
    src: '/images/products/luxury-magnetic-closure-boxes/luxury-magnetic-closure-box-custom-printed-ireland-navy.jpg',
    alt: 'Custom printed magnetic closure box Ireland — navy blue luxury gift box with interior branding',
  },
];

const keyBenefits = [
  {
    title: 'Premium Magnetic Closure',
    desc: 'Premium magnetic closure for a luxury unboxing experience.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: 'Strong Rigid Construction',
    desc: 'Strong rigid construction for superior product protection.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Fully Customisable',
    desc: 'Fully customisable sizes, colours, finishes and inserts.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
];

const finishOptions = [
  { title: 'Foil Stamping', desc: 'Gold, silver or coloured foil detailing on your logo for a genuine luxury statement.' },
  { title: 'Embossing & Debossing', desc: 'Raised or pressed detailing that adds tactile depth to your branding.' },
  { title: 'Spot UV', desc: 'Glossy highlights over a matte base to make key design elements stand out.' },
  { title: 'Custom Logo Printing', desc: 'Full-colour or one-colour logo printing inside and outside the box.' },
  { title: 'Bespoke Inserts', desc: 'Custom foam, card or tissue inserts to hold your product securely in place.' },
  { title: 'Magnetic Closure', desc: 'Concealed magnetic fastening for a seamless, premium opening experience.' },
];

const applications = [
  'Retail Products & E-commerce',
  'Corporate Gifts',
  'Cosmetics & Beauty Brands',
  'Jewellery & Watches',
  'Clothing & Fashion',
  'Luxury Gift Packaging',
  'Wellness & Subscription Boxes',
  'Premium Food & Confectionery',
];

const seoSections = [
  {
    title: 'Luxury Magnetic Closure Boxes for Irish Brands',
    body: 'PrintNPack supplies premium magnetic closure boxes in Ireland, designed to create an impressive and memorable unboxing experience. Featuring a concealed magnetic fastening and strong rigid construction, these luxury boxes combine excellent product protection with an elegant, high-end finish.',
  },
  {
    title: 'Custom Printed Magnetic Boxes for Retail, Gifting & Corporate',
    body: 'Ideal for retail products, corporate gifts, cosmetics, jewellery, clothing and luxury gift packaging, our custom-printed magnetic boxes can be tailored to match your brand. Choose from bespoke sizes, colours, inserts and premium finishes, including foil stamping, embossing, spot UV and custom logo printing.',
  },
  {
    title: 'Magnetic Gift Boxes with Logo — Fully Customisable',
    body: 'Every luxury magnetic closure box is fully customised with your branding and print — your logo, brand colours, and messaging, produced to match your exact packaging requirements. Elevate your product presentation with beautifully designed luxury magnetic boxes from PrintNPack Ireland.',
    link: { href: '/luxury-paper-bags-ireland', label: 'luxury paper bags' },
  },
];

const deliveryAreas = [
  { city: 'Dublin', detail: 'Luxury magnetic boxes for retail, cosmetics and corporate gifting across Dublin' },
  { city: 'Cork & Munster', detail: 'Custom printed gift boxes for brands and boutiques in Munster' },
  { city: 'Galway & West', detail: 'Rigid magnetic packaging for jewellers and luxury retailers in Connacht' },
  { city: 'Nationwide', detail: 'Delivery to every county in Ireland from Ashbourne, Co. Meath' },
];

const guides = [
  { href: '/luxury-paper-bags-ireland', title: 'Luxury Paper Bags Ireland', desc: 'Premium die-cut carrier bags for luxury brands.' },
  { href: '/printed-flat-handle-bags-ireland', title: 'Printed Paper Bags', desc: 'Branded bags for retail and takeaway.' },
  { href: '/products', title: 'All Products', desc: 'Full print and packaging catalogue.' },
];

const faqs = [
  {
    q: 'Where can I order luxury magnetic closure boxes in Ireland?',
    a: 'PrintNPack supplies premium magnetic closure boxes to retail brands, cosmetics companies, jewellers and corporate clients throughout Ireland. Contact us with your logo, preferred size and quantity for a custom quotation — with nationwide delivery from Ashbourne, Co. Meath.',
  },
  {
    q: 'What are magnetic closure boxes?',
    a: 'Magnetic closure boxes are rigid luxury gift boxes with a concealed magnetic fastening that creates a seamless, premium opening experience. They combine strong rigid construction for product protection with an elegant, high-end finish ideal for retail, gifting and corporate packaging.',
  },
  {
    q: 'What customisation options are available?',
    a: 'Our custom-printed magnetic boxes can be tailored with bespoke sizes, colours, inserts and premium finishes — including foil stamping, embossing, spot UV and custom logo printing inside and outside the box.',
  },
  {
    q: 'What products are magnetic closure boxes suitable for?',
    a: 'Luxury magnetic closure boxes are ideal for retail products, corporate gifts, cosmetics, jewellery, clothing and luxury gift packaging — anywhere a memorable unboxing experience matters.',
  },
  {
    q: 'Do you deliver magnetic gift boxes nationwide in Ireland?',
    a: 'Yes. PrintNPack delivers custom magnetic closure boxes to Dublin, Cork, Galway, Limerick and every county in Ireland.',
  },
];

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
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
    { '@type': 'ListItem', position: 2, name: 'Products', item: `${SITE_URL}/products` },
    { '@type': 'ListItem', position: 3, name: 'Luxury Magnetic Closure Boxes', item: PAGE_URL },
  ],
};

const productLd = buildProductLd({
  name: 'Luxury Magnetic Closure Boxes Ireland',
  description:
    'Premium magnetic closure boxes for Irish brands — rigid luxury gift packaging with foil stamping, embossing, spot UV and custom logo printing. Nationwide delivery.',
  image: `${SITE_URL}${HERO_IMAGE}`,
  url: PAGE_URL,
});

const webPageLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Luxury Magnetic Closure Boxes Ireland | Custom Printed Gift Boxes Dublin',
  description:
    'Luxury magnetic closure boxes Ireland — premium rigid gift boxes with custom logo printing, foil stamping and embossing. Dublin, Cork, Galway & nationwide delivery.',
  url: PAGE_URL,
  inLanguage: 'en-IE',
  isPartOf: { '@type': 'WebSite', name: 'PrintNPack Ireland', url: SITE_URL },
  about: { '@type': 'Thing', name: 'Luxury magnetic closure boxes Ireland' },
  dateModified: '2026-08-19',
};

export default function LuxuryMagneticClosureBoxesIreland() {
  const title = 'Luxury Magnetic Closure Boxes Ireland | Custom Printed Gift Boxes Dublin';
  const description =
    'Luxury magnetic closure boxes Ireland — premium rigid gift boxes with custom logo printing, foil stamping, embossing & spot UV. Dublin, Cork, Galway & nationwide delivery.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="luxury magnetic closure boxes ireland, magnetic closure boxes dublin, magnetic gift boxes ireland, custom printed gift boxes ireland, rigid gift boxes ireland, luxury packaging boxes ireland, magnetic box printing ireland, corporate gift boxes ireland, premium gift boxes dublin, magnetic closure packaging ireland, luxury unboxing boxes ireland, bespoke gift boxes ireland"
        />
        <meta name="author" content="PrintNPack Ireland" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:site_name" content="PrintNPack Ireland" />
        <meta property="og:locale" content="en_IE" />
        <meta property="og:image" content={`${SITE_URL}${HERO_IMAGE}`} />
        <meta property="og:image:alt" content="Luxury magnetic closure box Ireland — forest green rigid gift box with gold foil logo" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${SITE_URL}${HERO_IMAGE}`} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }} />
      </Head>

      <nav className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-gray-700">Home</Link></li>
            <li>/</li>
            <li><Link href="/products" className="hover:text-gray-700">Products</Link></li>
            <li>/</li>
            <li className="text-gray-800 font-medium">Luxury Magnetic Closure Boxes</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative bg-gray-950 border-b border-gray-900 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.12),_transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(217,180,110,0.12),_transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-semibold text-emerald-400 uppercase tracking-[0.2em] mb-4">
                Premium Packaging · Nationwide Ireland
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
                Luxury Magnetic Closure Boxes Ireland — Premium Rigid Gift Packaging for Brands That Demand More
              </h1>
              <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                PrintNPack supplies premium <strong className="text-white">magnetic closure boxes in Ireland</strong>,
                designed to create an impressive and memorable unboxing experience. Featuring a concealed magnetic
                fastening and strong rigid construction, these luxury boxes combine excellent product protection with
                an elegant, high-end finish.
              </p>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Ideal for retail products, corporate gifts, cosmetics, jewellery, clothing and luxury gift packaging,
                our custom-printed magnetic boxes can be tailored to match your brand — with bespoke sizes, colours,
                inserts and premium finishes including foil stamping, embossing, spot UV and custom logo printing.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-center">
                  <div className="text-sm font-bold text-emerald-400">Magnetic</div>
                  <div className="text-xs text-gray-400">closure</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-center">
                  <div className="text-sm font-bold text-amber-400">Foil &amp; emboss</div>
                  <div className="text-xs text-gray-400">finishes</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-center">
                  <div className="text-sm font-bold text-white">Rigid</div>
                  <div className="text-xs text-gray-400">construction</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-center">
                  <div className="text-sm font-bold text-white">Nationwide</div>
                  <div className="text-xs text-gray-400">Irish delivery</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-2 bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-emerald-500 transition-colors"
                >
                  Get a Magnetic Box Quote
                </Link>
                <a
                  href="tel:+353894157369"
                  className="inline-flex items-center gap-2 bg-transparent text-white font-semibold px-6 py-3 rounded-xl border border-white/20 hover:border-white/40 transition-colors"
                >
                  Call +353 89 415 7369
                </a>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              <Image
                src={HERO_IMAGE}
                alt="Luxury magnetic closure box Ireland — forest green rigid gift box with gold foil logo and embossing"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                unoptimized={process.env.NODE_ENV === 'production'}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key benefits */}
      <section className="py-12 lg:py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Key benefits</h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Everything a luxury brand needs from its packaging, built into every magnetic closure box.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {keyBenefits.map((item) => (
              <div key={item.title} className="bg-slate-50 rounded-xl border border-gray-200 p-5">
                <div className="w-10 h-10 rounded-full bg-gray-900 text-emerald-400 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              'Suitable for retail, gifting, cosmetics and corporate packaging',
              'Custom printed with your logo and brand artwork',
              'Available from PrintNPack throughout Ireland',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-gray-200 bg-slate-50 p-4">
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <p className="text-sm text-gray-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 lg:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Luxury magnetic box examples</h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Custom printed rigid gift boxes with magnetic closure, foil stamping and interior branding for Irish
            retail and luxury brands.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {galleryImages.map((img) => (
              <div key={img.src} className="relative aspect-square rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  unoptimized={process.env.NODE_ENV === 'production'}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO content */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {seoSections.map((section) => (
            <div key={section.title} className="mb-10 last:mb-0">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{section.title}</h2>
              <p className="text-gray-600 leading-relaxed">
                {section.body}
                {section.link && (
                  <>
                    {' '}
                    <Link href={section.link.href} className="text-emerald-700 hover:underline font-medium">
                      View {section.link.label} →
                    </Link>
                  </>
                )}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Finishes */}
      <section className="py-12 lg:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Premium finishes &amp; customisation</h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Tailor every detail — from foil and embossing to bespoke inserts and interior logo printing.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {finishOptions.map((item) => (
              <div key={item.title} className="rounded-xl border border-gray-200 bg-white p-5 hover:border-emerald-200 hover:shadow-md transition-all">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who uses */}
      <section className="py-12 lg:py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Who uses magnetic closure boxes?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl">
            From Dublin cosmetics brands to nationwide corporate gifting — luxury magnetic boxes elevate every
            unboxing moment.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {applications.map((app) => (
              <div key={app} className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-medium text-gray-200">
                {app}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery */}
      <section className="py-12 lg:py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Magnetic closure box delivery — nationwide across Ireland
          </h2>
          <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
            PrintNPack delivers <strong>luxury magnetic closure boxes to Dublin</strong>, Cork, Galway, Limerick,
            and every county in Ireland. Based in Ashbourne, Co. Meath, we supply retail brands, cosmetics
            companies, jewellers and corporate clients with premium rigid gift packaging.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {deliveryAreas.map(({ city, detail }) => (
              <div key={city} className="rounded-xl border border-gray-200 bg-slate-50 p-5">
                <h3 className="font-bold text-gray-900 mb-1">{city}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related packaging */}
      <section className="py-12 lg:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Related luxury packaging</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/luxury-paper-bags-ireland"
              className="group flex gap-5 bg-white rounded-2xl border border-gray-200 p-5 hover:border-emerald-200 hover:shadow-md transition-all"
            >
              <div className="relative w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden bg-slate-50 border border-gray-100">
                <Image
                  src="/images/products/luxury-paper-bags/luxury-paper-bags-ireland-premium-die-cut.jpg"
                  alt="Luxury paper bags Ireland"
                  fill
                  className="object-cover"
                  sizes="96px"
                  unoptimized={process.env.NODE_ENV === 'production'}
                />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">Luxury Paper Bags Ireland</h3>
                <p className="text-sm text-gray-600 mt-1">Premium die-cut carrier bags for luxury retail brands.</p>
                <span className="inline-block mt-2 text-sm font-medium text-emerald-700">View luxury bags →</span>
              </div>
            </Link>
            <Link
              href="/twisted-handle-paper-bags-ireland"
              className="group flex gap-5 bg-white rounded-2xl border border-gray-200 p-5 hover:border-emerald-200 hover:shadow-md transition-all"
            >
              <div className="relative w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden bg-slate-50 border border-gray-100">
                <Image
                  src="/images/products/twisted-handle-bags/1.png"
                  alt="Twisted handle paper bags Ireland"
                  fill
                  className="object-contain p-2"
                  sizes="96px"
                  unoptimized={process.env.NODE_ENV === 'production'}
                />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">Twisted Handle Paper Bags</h3>
                <p className="text-sm text-gray-600 mt-1">Premium rope-handle bags for boutiques and gift retail.</p>
                <span className="inline-block mt-2 text-sm font-medium text-emerald-700">View twisted handle bags →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Guides */}
      <section className="py-12 lg:py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related guides</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {guides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="rounded-xl border border-gray-200 bg-slate-50 p-5 hover:border-emerald-200 hover:shadow-sm transition-all group"
              >
                <h3 className="font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">{guide.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{guide.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 lg:py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
            Luxury magnetic closure boxes — FAQs
          </h2>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <div key={q} className="border border-gray-200 rounded-xl p-5 bg-white">
                <h3 className="font-bold text-gray-900 mb-2">{q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedSeoLinks
        title="More packaging for Irish brands"
        links={[
          { href: '/custom-printed-tissue-paper-ireland', label: 'Custom Tissue Paper', desc: 'Branded logo tissue for luxury unboxing' },
          { href: '/luxury-paper-bags-ireland', label: 'Luxury Paper Bags', desc: 'Premium die-cut bags for luxury brands' },
          { href: '/twisted-handle-paper-bags-ireland', label: 'Twisted Handle Bags', desc: 'Premium retail paper bags' },
          { href: '/printed-flat-handle-bags-ireland', label: 'Printed Paper Bags', desc: 'Branded bags for cafés and retail' },
          { href: '/custom-printed-coffee-cups-ireland', label: 'Custom Coffee Cups', desc: 'Branded takeaway cups Ireland' },
          { href: '/products', label: 'All Products', desc: 'Full print and packaging catalogue' },
        ]}
      />

      {/* CTA */}
      <section className="py-12 lg:py-16 bg-gray-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Elevate your product presentation
          </h2>
          <p className="text-gray-400 mb-6">
            Contact PrintNPack today for a custom quotation on luxury magnetic closure boxes — beautifully
            designed rigid gift packaging with your logo, premium finishes and delivery throughout Ireland.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/quote"
              className="inline-flex items-center bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-emerald-500 transition-colors"
            >
              Request a Quote
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center bg-transparent text-white font-semibold px-6 py-3 rounded-xl border border-white/20 hover:border-white/40 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
