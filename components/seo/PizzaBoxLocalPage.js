import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../layout/Layout';
import RelatedSeoLinks from './RelatedSeoLinks';
import { SITE_URL } from '../../lib/site';
import { buildOffer } from '../../lib/schema';
import { PIZZA_BOX_LOCAL_PAGES } from '../../data/pizza-box-local';

const HERO_IMAGE = '/images/pizza-boxes/PIZZA_BOX_1.jpg';

export default function PizzaBoxLocalPage({ config }) {
  const pageUrl = `${SITE_URL}/${config.slug}`;
  const areaName = config.title.replace('Pizza Box Printing ', '');

  const faqs = [
    {
      q: `How much do pizza boxes cost in ${areaName}?`,
      a: 'Plain kraft pizza boxes are sold by the case from around €0.10–€0.25 per box depending on size. Custom printed pizza boxes start from around €0.17 per unit with a 500-unit MOQ.',
    },
    {
      q: 'Do you sell plain pizza boxes wholesale?',
      a: 'Yes. Kraft corrugated pizza boxes are available by the case in 7", 9", 10", 12", 14" and 16" sizes with tiered wholesale pricing.',
    },
    {
      q: 'Can I get pizza boxes with my logo?',
      a: 'Yes. Custom printed pizza boxes with your logo start from 500 units. Production takes 5–7 business days after artwork approval.',
    },
    {
      q: 'What pizza box size is most popular in Ireland?',
      a: 'The 12-inch pizza box is the most popular size for Irish takeaways, followed by 14-inch for large and family orders.',
    },
    {
      q: 'Do you deliver pizza boxes locally?',
      a: 'Yes. PrintNPack is based in Ashbourne, Co. Meath. Collection and delivery available across Meath, Dublin and nationwide.',
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
      { '@type': 'ListItem', position: 2, name: 'Pizza Boxes Ireland', item: `${SITE_URL}/pizza-boxes-ireland` },
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
    offers: buildOffer({ url: pageUrl, price: '0.17' }),
  };

  const siblingLinks = Object.values(PIZZA_BOX_LOCAL_PAGES)
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
            <li><Link href="/pizza-boxes-ireland" className="hover:text-gray-700">Pizza Boxes Ireland</Link></li>
            <li>/</li>
            <li className="text-gray-800 font-medium">{config.title}</li>
          </ol>
        </div>
      </nav>

      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-semibold text-orange-600 uppercase tracking-wider mb-3">Local pizza box supply</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">{config.h1}</h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">{config.intro}</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/plain-pizza-boxes-ireland" className="inline-flex items-center bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors">
                  Plain Pizza Boxes
                </Link>
                <Link href="/custom-pizza-boxes-ireland" className="inline-flex items-center bg-white text-gray-800 font-semibold px-6 py-3 rounded-xl border border-gray-300 hover:border-gray-400 transition-colors">
                  Custom Printed Boxes
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-orange-50">
              <Image src={HERO_IMAGE} alt={`${config.title} — pizza boxes Ireland`} fill className="object-cover" priority sizes="(max-width: 1024px) 100vw, 50vw" unoptimized={process.env.NODE_ENV === 'production'} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Pizza box options</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Plain Pizza Boxes', desc: 'Wholesale kraft corrugated boxes by the case — 7" to 16".', href: '/plain-pizza-boxes-ireland' },
              { title: 'Custom Printed Boxes', desc: 'Branded pizza boxes with your logo from 500 units.', href: '/custom-pizza-boxes-ireland' },
              { title: 'Wholesale Bulk Supply', desc: 'Tiered case pricing for busy takeaways and pizzerias.', href: '/pizza-boxes-wholesale-ireland' },
            ].map((item) => (
              <Link key={item.title} href={item.href} className="group bg-white rounded-2xl border border-gray-200 p-6 hover:border-blue-300 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">{item.desc}</p>
                <span className="text-blue-600 font-semibold text-sm">View options →</span>
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
                <span key={area} className="rounded-full bg-orange-50 text-orange-700 text-sm font-medium px-4 py-1.5">{area}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-slate-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Frequently asked questions</h2>
            <Link href="/pizza-box-faq-ireland" className="text-blue-600 hover:underline font-medium text-sm">View all pizza box FAQs →</Link>
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

      <section className="py-12 lg:py-16 bg-blue-600">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Ready to order pizza boxes?</h2>
          <p className="text-blue-100 mb-6">Plain wholesale cases or custom printed boxes — we will help you choose.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/plain-pizza-boxes-ireland" className="inline-flex items-center bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors">Plain Pizza Boxes</Link>
            <Link href="/pizza-box-faq-ireland" className="inline-flex items-center bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl border border-blue-400 hover:bg-blue-400 transition-colors">Pizza Box FAQ</Link>
          </div>
        </div>
      </section>

      <RelatedSeoLinks
        title="Related pizza box pages"
        links={[
          { href: '/pizza-boxes-ireland', label: 'Pizza Boxes Ireland', desc: 'Complete pizza box hub' },
          { href: '/custom-pizza-boxes-ireland', label: 'Custom Printed Boxes', desc: 'Branded pizza boxes from 500 units' },
          { href: '/plain-pizza-boxes-ireland', label: 'Plain Pizza Boxes', desc: 'Kraft wholesale in case packs' },
          { href: '/blog/pizza-boxes-ireland-guide', label: 'Pizza Boxes Guide', desc: 'Plain vs printed, sizes & ordering' },
          { href: '/pizza-box-faq-ireland', label: 'Pizza Box FAQ', desc: '30+ instant answers' },
          ...siblingLinks,
        ]}
      />
    </Layout>
  );
}
