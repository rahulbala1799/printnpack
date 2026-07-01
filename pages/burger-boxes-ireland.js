import React from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_URL } from '../lib/site';
import { buildCatalogOffer } from '../lib/schema';
import { MOST_ASKED_BURGER_BOX_FAQS } from '../data/burger-box-faq';

const PAGE_URL = `${SITE_URL}/burger-boxes-ireland`;
const HERO_IMAGE = '/images/products/bagasse-burger-box/1.png';

const burgerTypes = [
  { title: 'Plain Burger Boxes', desc: 'Wholesale bagasse and corrugated clamshell burger boxes by the case.', href: '/plain-burger-boxes-ireland', price: '0.15' },
  { title: 'Custom Printed Burger Boxes', desc: 'Branded compostable bagasse boxes with your logo from 500 units.', href: '/custom-burger-boxes-ireland', price: '0.22' },
  { title: 'Bagasse Burger Boxes', desc: 'Eco-friendly sugarcane fibre boxes — compostable and oil-resistant.', href: '/eco-bagasse-burger-boxes', price: '0.22' },
];

const localPages = [
  { href: '/burger-box-printing-ashbourne', title: 'Burger Boxes Ashbourne', desc: 'Plain wholesale & printed boxes — Ashbourne, Ratoath & Meath.' },
  { href: '/burger-box-printing-dublin', title: 'Burger Boxes Dublin', desc: 'Takeaway and restaurant burger packaging across Dublin.' },
];

const guides = [
  { href: '/burger-box-faq-ireland', title: 'Burger Box FAQ', desc: '20+ instant answers on plain, printed, materials & delivery.' },
  { href: '/blog/burger-boxes-ireland-guide', title: 'Burger Boxes Guide', desc: 'Plain vs printed, bagasse vs corrugated, and eco options.' },
];

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Burger Boxes Ireland', item: PAGE_URL },
  ],
};

const itemListLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Burger Boxes Ireland',
  itemListElement: burgerTypes.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: buildCatalogOffer(item.title, `${SITE_URL}${item.href}`, { price: item.price }).itemOffered,
  })),
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: MOST_ASKED_BURGER_BOX_FAQS.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

export default function BurgerBoxesIreland() {
  const title = 'Burger Boxes Ireland | Plain & Printed Bagasse Packaging | Print n Pack';
  const description =
    'Burger boxes in Ireland — plain wholesale bagasse and corrugated clamshells, plus custom printed compostable burger boxes with your logo. Delivery nationwide from Ashbourne.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="burger boxes ireland, plain burger boxes, bagasse burger box, printed burger boxes, biodegradable burger boxes, burger boxes wholesale, custom burger boxes, burger box printing ashbourne" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={`${SITE_URL}${HERO_IMAGE}`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />
      </Head>

      <nav className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-gray-700">Home</Link></li>
            <li>/</li>
            <li className="text-gray-800 font-medium">Burger Boxes Ireland</li>
          </ol>
        </div>
      </nav>

      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-3">Plain & printed burger packaging</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">Burger Boxes Ireland</h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Plain wholesale burger boxes and custom printed bagasse packaging for Irish takeaways,
                burger restaurants, cafes, and food trucks. Compostable eco options with nationwide delivery
                from our Ashbourne unit.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/plain-burger-boxes-ireland" className="inline-flex items-center bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-emerald-700 transition-colors">
                  Plain Burger Boxes
                </Link>
                <Link href="/custom-burger-boxes-ireland" className="inline-flex items-center bg-white text-gray-800 font-semibold px-6 py-3 rounded-xl border border-gray-300 hover:border-gray-400 transition-colors">
                  Custom Printed Boxes
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-emerald-50">
              <Image src={HERO_IMAGE} alt="Burger boxes Ireland — plain and printed bagasse burger packaging" fill className="object-cover" priority sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Burger box types</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {burgerTypes.map((item) => (
              <Link key={item.title} href={item.href} className="group bg-white rounded-2xl border border-gray-200 p-6 hover:border-emerald-300 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">{item.desc}</p>
                <span className="text-emerald-600 font-semibold text-sm">From €{item.price} — order now →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Local burger box supply</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {localPages.map((item) => (
              <Link key={item.href} href={item.href} className="group bg-slate-50 rounded-2xl border border-gray-200 p-6 hover:border-emerald-300 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-slate-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Guides &amp; resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {guides.map((item) => (
              <Link key={item.href} href={item.href} className="group bg-white rounded-2xl border border-gray-200 p-6 hover:border-emerald-300 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Most asked questions</h2>
          <p className="text-gray-500 text-sm mb-8">Quick answers to the top burger box questions from Irish food businesses.</p>
          <div className="space-y-4">
            {MOST_ASKED_BURGER_BOX_FAQS.map((faq) => (
              <details key={faq.q} className="group bg-slate-50 rounded-xl border border-gray-200 p-5 open:shadow-sm">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center gap-4">
                  {faq.q}
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-600 mt-3 text-sm leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
          <p className="mt-6 text-center">
            <Link href="/burger-box-faq-ireland" className="text-emerald-600 hover:underline font-medium">View detailed FAQ — 20+ questions →</Link>
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-emerald-600">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Ready to order burger boxes?</h2>
          <p className="text-emerald-100 mb-6">Plain wholesale cases from €0.15/box. Custom printed bagasse from 500 units.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/plain-burger-boxes-ireland" className="inline-flex items-center bg-white text-emerald-600 font-semibold px-6 py-3 rounded-xl hover:bg-emerald-50 transition-colors">Plain Burger Boxes</Link>
            <a href="tel:+353894400155" className="inline-flex items-center bg-emerald-500 text-white font-semibold px-6 py-3 rounded-xl border border-emerald-400 hover:bg-emerald-400 transition-colors">Call +353 89 440 0155</a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
