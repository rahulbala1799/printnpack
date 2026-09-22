import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../layout/Layout';
import RelatedSeoLinks from './RelatedSeoLinks';
import { SITE_URL, SITE_PHONE_DISPLAY, SITE_PHONE_TEL } from '../../lib/site';
import { buildOffer } from '../../lib/schema';
import { STAMP_NICHE_LIST } from '../../data/rubber-stamp-niches';

const HERO_IMAGE = '/images/rubber-stamps/RubberStamp_10.jpg';

export default function StampNichePage({ config }) {
  const pageUrl = `${SITE_URL}/${config.slug}`;

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: config.faqs.map(({ q, a }) => ({
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
      { '@type': 'ListItem', position: 2, name: 'Rubber Stamps Ireland', item: `${SITE_URL}/rubber-stamps-ireland` },
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
      telephone: SITE_PHONE_TEL,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Unit 14 Ashbourne Business Centre',
        addressLocality: 'Ashbourne',
        addressRegion: 'Co. Meath',
        postalCode: 'A84 KV57',
        addressCountry: 'IE',
      },
    },
    areaServed: { '@type': 'Country', name: 'Ireland' },
    offers: buildOffer({ url: pageUrl, price: config.price }),
  };

  const related = [
    { href: '/rubber-stamps', label: 'Custom Rubber Stamps', desc: 'Order from €15 — same-day dispatch' },
    { href: '/rubber-stamps-ireland', label: 'Rubber Stamps Ireland', desc: 'All stamp types in one hub' },
    { href: '/rubber-stamp-faq-ireland', label: 'Stamp FAQ', desc: 'Pricing, ink, and artwork' },
    ...STAMP_NICHE_LIST.filter((page) => page.slug !== config.slug).map((page) => ({
      href: `/${page.slug}`,
      label: page.title,
      desc: page.priceNote.split('.')[0],
    })),
  ];

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
            <li><Link href="/rubber-stamps-ireland" className="hover:text-gray-700">Rubber Stamps Ireland</Link></li>
            <li>/</li>
            <li className="text-gray-800 font-medium">{config.title}</li>
          </ol>
        </div>
      </nav>

      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-3">{config.eyebrow}</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">{config.h1}</h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">{config.intro}</p>
              <p className="text-sm font-medium text-gray-800 mb-6">{config.priceNote}</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/rubber-stamps" className="inline-flex items-center bg-indigo-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-indigo-700 transition-colors">
                  Order a custom rubber stamp
                </Link>
                <a href={`tel:${SITE_PHONE_TEL}`} className="inline-flex items-center bg-white text-gray-800 font-semibold px-6 py-3 rounded-xl border border-gray-300 hover:border-gray-400 transition-colors">
                  Call {SITE_PHONE_DISPLAY}
                </a>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-gray-100">
              <Image src={HERO_IMAGE} alt={`${config.h1} made by Print n Pack`} fill className="object-cover" priority sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Same-day dispatch from Ashbourne</h2>
          <ul className="grid sm:grid-cols-2 gap-4">
            {config.bullets.map((item) => (
              <li key={item} className="rounded-xl border border-gray-200 bg-white p-5 text-gray-700 text-sm leading-relaxed">{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {config.sections.map((section) => (
        <section key={section.heading} className="py-12 lg:py-16 bg-white border-t border-gray-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-gray-600 leading-relaxed mb-4">{paragraph}</p>
            ))}
            {section.bullets && (
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                {section.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        </section>
      ))}

      <section className="py-12 lg:py-16 bg-slate-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Frequently asked questions</h2>
            <Link href="/rubber-stamp-faq-ireland" className="text-indigo-600 hover:underline font-medium text-sm">View all stamp FAQs →</Link>
          </div>
          <div className="space-y-4">
            {config.faqs.map((faq) => (
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

      <section className="py-12 lg:py-16 bg-indigo-600">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Ready to order?</h2>
          <p className="text-indigo-100 mb-6">Send the text or logo. We proof the layout, engrave the die, and dispatch from Ashbourne.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/rubber-stamps" className="inline-flex items-center bg-white text-indigo-600 font-semibold px-6 py-3 rounded-xl hover:bg-indigo-50 transition-colors">Order custom rubber stamps</Link>
            <Link href="/rubber-stamps-ireland" className="inline-flex items-center bg-indigo-500 text-white font-semibold px-6 py-3 rounded-xl border border-indigo-400 hover:bg-indigo-400 transition-colors">All stamp types</Link>
          </div>
        </div>
      </section>

      <RelatedSeoLinks title="Other rubber stamps" links={related} />
    </Layout>
  );
}
