import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../layout/Layout';
import RelatedSeoLinks from './RelatedSeoLinks';
import { SITE_URL } from '../../lib/site';
import { buildOffer } from '../../lib/schema';
import { NAPKIN_LOCAL_PAGES } from '../../data/napkin-local';

const HERO_IMAGE = '/images/hero/napkin.svg';

export default function NapkinLocalPage({ config }) {
  const pageUrl = `${SITE_URL}/${config.slug}`;

  const faqs = [
    {
      q: `How much do printed napkins cost in ${config.title.replace('Napkin Printing ', '')}?`,
      a: 'Custom printed napkins start from around €0.05 per unit (1,000 MOQ), with premium linen-feel napkins from €0.10 per unit. Contact us for a free quote based on size, material, and quantity.',
    },
    {
      q: 'How long does napkin printing take?',
      a: 'Standard printed napkins take 5–7 business days after artwork approval. Premium linen-feel napkins typically take 7–10 business days. Rush orders may be available — call with your deadline.',
    },
    {
      q: 'Can I collect my napkins locally?',
      a: 'Yes. PrintNPack is based in Ashbourne, Co. Meath. Collection is available for customers across Meath and north Dublin.',
    },
    {
      q: 'What types of napkins can you print?',
      a: 'Standard printed paper napkins, premium linen-feel napkins, cocktail, lunch, and dinner sizes. Plain wholesale napkins also available without printing.',
    },
    {
      q: 'Do you print wedding napkins?',
      a: 'Yes. We print personalised wedding napkins with names, monograms, and custom designs. Premium linen-feel napkins are popular for wedding receptions.',
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
      { '@type': 'ListItem', position: 2, name: 'Napkins Ireland', item: `${SITE_URL}/napkins-ireland` },
      { '@type': 'ListItem', position: 3, name: config.title, item: pageUrl },
    ],
  };

  const serviceLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: config.title,
    description: config.metaDescription,
    url: pageUrl,
    provider: {
      '@type': 'LocalBusiness',
      name: 'PrintNPack Ireland',
      url: SITE_URL,
      telephone: '+353894157369',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Unit 14 Ashbourne Business Centre',
        addressLocality: 'Ashbourne',
        addressRegion: 'Co. Meath',
        postalCode: 'A84 KV57',
        addressCountry: 'IE',
      },
    },
    areaServed: config.localAreas.map((name) => ({ '@type': 'Place', name })),
    offers: buildOffer({ url: pageUrl, price: '0.05' }),
  };

  const siblingLinks = Object.values(NAPKIN_LOCAL_PAGES)
    .filter((p) => p.slug !== config.slug)
    .map((p) => ({
      href: `/${p.slug}`,
      label: p.title,
      desc: p.metaDescription.split('.')[0],
    }));

  return (
    <Layout>
      <Head>
        <title>{config.metaTitle}</title>
        <meta name="description" content={config.metaDescription} />
        <meta name="keywords" content={config.keywords} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={config.metaTitle} />
        <meta property="og:description" content={config.metaDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={`${SITE_URL}${HERO_IMAGE}`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      </Head>

      <nav className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-gray-700">Home</Link></li>
            <li>/</li>
            <li><Link href="/napkins-ireland" className="hover:text-gray-700">Napkins Ireland</Link></li>
            <li>/</li>
            <li className="text-gray-800 font-medium">{config.title}</li>
          </ol>
        </div>
      </nav>

      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-3">Local napkin printing</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">{config.h1}</h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">{config.intro}</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/products/printed-napkins" className="inline-flex items-center bg-amber-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-amber-700 transition-colors">
                  Order Printed Napkins
                </Link>
                <a href="tel:+353894157369" className="inline-flex items-center bg-white text-gray-800 font-semibold px-6 py-3 rounded-xl border border-gray-300 hover:border-gray-400 transition-colors">
                  Call +353 89 415 7369
                </a>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-amber-50 flex items-center justify-center p-12">
              <Image src={HERO_IMAGE} alt={`${config.title} — custom branded napkins Ireland`} width={320} height={320} className="object-contain" priority />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Napkin types we print</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Printed Paper Napkins', desc: 'Custom logo napkins in cocktail, lunch, and dinner sizes — from €0.05 per unit.', href: '/products/printed-napkins' },
              { title: 'Linen-Feel Napkins', desc: 'Premium airlaid napkins with cloth-like texture for upscale dining and weddings.', href: '/products/premium-linen-feel-napkins' },
              { title: 'Plain Wholesale Napkins', desc: 'Bulk white napkins without printing — economical for high-volume catering.', href: '/plain-napkins-tableware-ireland' },
            ].map((item) => (
              <Link key={item.title} href={item.href} className="group bg-white rounded-2xl border border-gray-200 p-6 hover:border-amber-300 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-600 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">{item.desc}</p>
                <span className="text-amber-600 font-semibold text-sm">View options →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Popular uses in your area</h2>
          <p className="text-gray-600 mb-8 max-w-3xl">{config.deliveryNote}</p>
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {config.useCases.map((item) => (
              <div key={item.title} className="rounded-xl border border-gray-200 bg-slate-50 p-5">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Areas we serve</h3>
            <div className="flex flex-wrap gap-2">
              {config.localAreas.map((area) => (
                <span key={area} className="rounded-full bg-amber-50 text-amber-700 text-sm font-medium px-4 py-1.5">{area}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-slate-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Frequently asked questions</h2>
            <Link href="/napkin-faq-ireland" className="text-amber-600 hover:underline font-medium text-sm">View all napkin FAQs →</Link>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="group bg-white rounded-xl border border-gray-200 p-5 open:shadow-sm">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center gap-4">
                  {faq.q}
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-600 mt-3 text-sm leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-amber-600">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Ready to order branded napkins?</h2>
          <p className="text-amber-100 mb-6">Tell us your napkin size, quantity, and logo — we will help with artwork and pricing.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/products/printed-napkins" className="inline-flex items-center bg-white text-amber-600 font-semibold px-6 py-3 rounded-xl hover:bg-amber-50 transition-colors">Order Printed Napkins</Link>
            <Link href="/napkin-faq-ireland" className="inline-flex items-center bg-amber-500 text-white font-semibold px-6 py-3 rounded-xl border border-amber-400 hover:bg-amber-400 transition-colors">Napkin FAQ</Link>
          </div>
        </div>
      </section>

      <RelatedSeoLinks
        title="Related napkin pages"
        links={[
          { href: '/printing-ashbourne', label: 'Printing Ashbourne', desc: 'Local print shop — posters, flyers, stickers & more' },
          { href: '/napkins-ireland', label: 'Napkins Ireland', desc: 'Complete napkin printing hub' },
          { href: '/products/printed-napkins', label: 'Printed Napkins', desc: 'Custom logo napkins from €0.05' },
          { href: '/blog/personalised-napkins-ireland-guide', label: 'Personalised Napkins Guide', desc: 'Sizes, materials & wedding tips' },
          { href: '/napkin-faq-ireland', label: 'Napkin FAQ', desc: '25+ instant answers' },
          { href: '/hot-cups-ireland', label: 'Hot Cups & Lids', desc: 'Disposable coffee cups wholesale' },
          { href: '/gloves-ireland', label: 'Disposable Gloves', desc: 'Nitrile & vinyl catering gloves' },
          { href: '/plain-packaging', label: 'Plain Packaging', desc: '736+ wholesale catering SKUs' },
          ...siblingLinks,
        ]}
      />
    </Layout>
  );
}
