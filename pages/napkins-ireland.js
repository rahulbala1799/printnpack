import React from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_URL } from '../lib/site';
import { buildCatalogOffer } from '../lib/schema';
import { MOST_ASKED_NAPKIN_FAQS } from '../data/napkin-faq';

const PAGE_URL = `${SITE_URL}/napkins-ireland`;
const HERO_IMAGE = '/images/hero/napkin.svg';

const napkinTypes = [
  { title: 'Printed Paper Napkins', desc: 'Custom logo napkins for restaurants, cafes, and takeaways — cocktail, lunch, and dinner sizes.', href: '/products/printed-napkins', price: '0.05' },
  { title: 'Premium Linen-Feel Napkins', desc: 'Cloth-like airlaid napkins for upscale dining, hotels, and weddings.', href: '/products/premium-linen-feel-napkins', price: '0.10' },
  { title: 'Plain Wholesale Napkins', desc: 'Bulk white napkins without printing — economical for high-volume catering.', href: '/plain-napkins-tableware-ireland', price: '0.03' },
];

const localPages = [
  { href: '/napkin-printing-ashbourne', title: 'Napkin Printing Ashbourne', desc: 'Local collection and weekly delivery — Ashbourne, Ratoath & north Dublin.' },
  { href: '/napkin-printing-dublin', title: 'Napkin Printing Dublin', desc: 'Branded restaurant and wedding napkins delivered across Dublin.' },
];

const guides = [
  { href: '/napkin-faq-ireland', title: 'Napkin FAQ', desc: '25+ instant answers on pricing, sizes, materials & delivery.' },
  { href: '/blog/custom-napkins-uk-ireland-europe', title: 'Custom Napkins UK, Ireland & Europe', desc: 'Printed napkins for restaurants, weddings and hotels — Ireland, UK and EU delivery.' },
  { href: '/blog/personalised-napkins-ireland-guide', title: 'Personalised Napkins Guide', desc: 'Sizes, materials, wedding napkins & branding tips for Irish businesses.' },
];

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Napkins Ireland', item: PAGE_URL },
  ],
};

const itemListLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Napkins Ireland',
  itemListElement: napkinTypes.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: buildCatalogOffer(item.title, `${SITE_URL}${item.href}`, { price: item.price }).itemOffered,
  })),
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: MOST_ASKED_NAPKIN_FAQS.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

export default function NapkinsIreland() {
  const title = 'Napkins Ireland | Printed, Branded & Linen-Feel Napkins | Print n Pack';
  const description =
    'Custom printed napkins in Ireland — branded restaurant napkins, premium linen-feel napkins, cocktail & wedding napkins. Weekly delivery, local collection in Ashbourne, delivery across Dublin & nationwide.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="napkins ireland, printed napkins ireland, personalised napkins ireland, branded napkins, napkin printing ireland, linen feel napkins, cocktail napkins, wedding napkins ireland, paper napkins ireland, napkin printing ashbourne, custom napkins, custom napkins uk, custom napkins ireland" />
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
            <li className="text-gray-800 font-medium">Napkins Ireland</li>
          </ol>
        </div>
      </nav>

      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-3">Custom napkin printing</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">Napkins Ireland</h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Custom printed napkins for Irish restaurants, cafes, hotels, caterers, and events.
                Branded paper napkins, premium linen-feel napkins, and plain wholesale options —
                with weekly delivery from our Ashbourne print unit.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/products/printed-napkins" className="inline-flex items-center bg-amber-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-amber-700 transition-colors">
                  Order Printed Napkins
                </Link>
                <Link href="/napkin-faq-ireland" className="inline-flex items-center bg-white text-gray-800 font-semibold px-6 py-3 rounded-xl border border-gray-300 hover:border-gray-400 transition-colors">
                  Napkin FAQ
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-amber-50 flex items-center justify-center p-12">
              <Image src={HERO_IMAGE} alt="Custom printed napkins Ireland — branded restaurant and wedding napkins" width={360} height={360} className="object-contain" priority />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Napkin types</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {napkinTypes.map((item) => (
              <Link key={item.title} href={item.href} className="group bg-white rounded-2xl border border-gray-200 p-6 hover:border-amber-300 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-600 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">{item.desc}</p>
                <span className="text-amber-600 font-semibold text-sm">From €{item.price} — order now →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Local napkin printing</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {localPages.map((item) => (
              <Link key={item.href} href={item.href} className="group bg-slate-50 rounded-2xl border border-gray-200 p-6 hover:border-amber-300 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-600 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-slate-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Guides &amp; resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {guides.map((item) => (
              <Link key={item.href} href={item.href} className="group bg-white rounded-2xl border border-gray-200 p-6 hover:border-amber-300 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-600 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Most asked questions</h2>
          <p className="text-gray-500 text-sm mb-8">Quick answers to the top napkin printing questions from Irish businesses.</p>
          <div className="space-y-4">
            {MOST_ASKED_NAPKIN_FAQS.map((faq) => (
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
            <Link href="/napkin-faq-ireland" className="text-amber-600 hover:underline font-medium">View detailed FAQ — 25+ questions →</Link>
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-amber-600">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Ready to order branded napkins?</h2>
          <p className="text-amber-100 mb-6">Printed napkins from €0.05 per unit. 1,000 MOQ. Weekly delivery available.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/products/printed-napkins" className="inline-flex items-center bg-white text-amber-600 font-semibold px-6 py-3 rounded-xl hover:bg-amber-50 transition-colors">Order Printed Napkins</Link>
            <a href="tel:+353894157369" className="inline-flex items-center bg-amber-500 text-white font-semibold px-6 py-3 rounded-xl border border-amber-400 hover:bg-amber-400 transition-colors">Call +353 89 415 7369</a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
