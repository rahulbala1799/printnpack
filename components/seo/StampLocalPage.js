import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../layout/Layout';
import RelatedSeoLinks from './RelatedSeoLinks';
import { SITE_URL } from '../../lib/site';
import { buildOffer } from '../../lib/schema';
import { STAMP_LOCAL_PAGES } from '../../data/rubber-stamp-local';

const HERO_IMAGE = '/images/rubber-stamps/RubberStamp_10.jpg';

export default function StampLocalPage({ config }) {
  const pageUrl = `${SITE_URL}/${config.slug}`;

  const faqs = [
    {
      q: `How much do rubber stamps cost in ${config.title.replace('Rubber Stamp Printing ', '')}?`,
      a: 'Custom rubber stamps start from around €15–€25 for a basic business stamp, with signature stamps and larger company stamps from €20–€45. Same-day express service may be available — call for a quote.',
    },
    {
      q: 'How quickly can you make a rubber stamp?',
      a: 'Standard turnaround is 2–3 business days. Same-day and next-day express service is available for urgent orders when artwork is ready.',
    },
    {
      q: 'Can I collect my stamp locally?',
      a: 'Yes. PrintNPack is based in Ashbourne, Co. Meath. Collection is available for customers across Meath and north Dublin.',
    },
    {
      q: 'What types of rubber stamps do you make?',
      a: 'Business stamps, company logo stamps, signature stamps, address stamps, traditional hand stamps, and personalised stamps. Self-inking and wooden-handle formats available.',
    },
    {
      q: 'Can you put my company logo on a stamp?',
      a: 'Yes. Send your logo as PDF, PNG, or AI — we prepare a proof before manufacturing. Logo stamps are popular for letterheads, invoices, and official documents.',
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
    offers: buildOffer({ url: pageUrl, price: '15.00' }),
  };

  const siblingLinks = Object.values(STAMP_LOCAL_PAGES)
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
              <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-3">Local stamp printing</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">{config.h1}</h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">{config.intro}</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/rubber-stamps" className="inline-flex items-center bg-indigo-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-indigo-700 transition-colors">
                  Order Custom Stamps
                </Link>
                <a href="tel:+353894157369" className="inline-flex items-center bg-white text-gray-800 font-semibold px-6 py-3 rounded-xl border border-gray-300 hover:border-gray-400 transition-colors">
                  Call +353 89 415 7369
                </a>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-gray-100">
              <Image src={HERO_IMAGE} alt={`${config.title} — custom business and signature rubber stamps`} fill className="object-cover" priority sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Stamp types we make</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Business Stamps', desc: 'Company name, address, logo, invoice and received stamps for daily office use.' },
              { title: 'Signature Stamps', desc: 'Personalised signature stamps for authorised document signing.' },
              { title: 'Traditional Hand Stamps', desc: 'Wooden handle stamps with separate ink pad for craft and occasional use.' },
            ].map((item) => (
              <Link key={item.title} href="/rubber-stamps" className="group bg-white rounded-2xl border border-gray-200 p-6 hover:border-indigo-300 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">{item.desc}</p>
                <span className="text-indigo-600 font-semibold text-sm">Order stamps →</span>
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
                <span key={area} className="rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium px-4 py-1.5">{area}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-slate-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Frequently asked questions</h2>
            <Link href="/rubber-stamp-faq-ireland" className="text-indigo-600 hover:underline font-medium text-sm">View all stamp FAQs →</Link>
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

      <section className="py-12 lg:py-16 bg-indigo-600">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Ready to order your stamp?</h2>
          <p className="text-indigo-100 mb-6">Tell us your stamp type, text, and deadline — we will help with layout and artwork.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/rubber-stamps" className="inline-flex items-center bg-white text-indigo-600 font-semibold px-6 py-3 rounded-xl hover:bg-indigo-50 transition-colors">Order Custom Stamps</Link>
            <Link href="/rubber-stamp-faq-ireland" className="inline-flex items-center bg-indigo-500 text-white font-semibold px-6 py-3 rounded-xl border border-indigo-400 hover:bg-indigo-400 transition-colors">Stamp FAQ</Link>
          </div>
        </div>
      </section>

      <RelatedSeoLinks
        title="Related stamp pages"
        links={[
          { href: '/printing-ashbourne', label: 'Printing Ashbourne', desc: 'Local print shop — posters, flyers, stickers & more' },
          { href: '/rubber-stamps-ireland', label: 'Rubber Stamps Ireland', desc: 'Complete stamp printing hub' },
          { href: '/rubber-stamps', label: 'Order Custom Stamps', desc: 'Business, signature & hand stamps' },
          { href: '/blog/business-stamps-ireland-guide', label: 'Business Stamps Guide', desc: 'Company stamps for Irish businesses' },
          { href: '/rubber-stamp-faq-ireland', label: 'Stamp FAQ', desc: '25+ instant answers' },
          ...siblingLinks,
        ]}
      />
    </Layout>
  );
}
