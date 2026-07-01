import React from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_URL } from '../lib/site';
import { buildCatalogOffer } from '../lib/schema';
import { MOST_ASKED_FOAMEX_FAQS } from '../data/foamex-faq';

const PAGE_URL = `${SITE_URL}/foamex-ireland`;
const HERO_IMAGE = '/ifa/product/foamex/3mm-Printed-Foamex-Boards-XL-Displays.avif';

const foamexTypes = [
  { title: '3mm Foamex Boards', desc: 'Lightweight PVC foam panels for wall signs and short-term indoor displays.', href: '/foamex-boards', price: '15.00' },
  { title: '5mm Foamex Boards', desc: 'Most popular thickness for exhibition panels, retail signage, and shop displays.', href: '/foamex-boards', price: '18.00' },
  { title: '10mm Foamex Boards', desc: 'Maximum rigidity for freestanding displays and premium presentation panels.', href: '/foamex-boards', price: '28.00' },
];

const localPages = [
  { href: '/foamex-printing-ashbourne', title: 'Foamex Printing Ashbourne', desc: 'Local collection — Ashbourne, Ratoath & north Dublin.' },
  { href: '/foamex-printing-dublin', title: 'Foamex Printing Dublin', desc: 'Exhibition panels and shop signage delivered across Dublin.' },
];

const guides = [
  { href: '/foamex-faq-ireland', title: 'Foamex FAQ', desc: '25+ instant answers on pricing, thickness, printing & delivery.' },
  { href: '/blog/foamex-boards-ireland-guide', title: 'Foamex Boards Guide', desc: 'Thickness, sizes, indoor vs outdoor, and material comparison.' },
];

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Foamex Ireland', item: PAGE_URL },
  ],
};

const itemListLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Foamex Ireland',
  itemListElement: foamexTypes.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: buildCatalogOffer(item.title, `${SITE_URL}${item.href}`, { price: item.price }).itemOffered,
  })),
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: MOST_ASKED_FOAMEX_FAQS.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

export default function FoamexIreland() {
  const title = 'Foamex Ireland | Foam Board Printing & PVC Signage | Print n Pack';
  const description =
    'Custom foamex board printing in Ireland — 3mm, 5mm & 10mm PVC foam signage for exhibitions, retail, and indoor displays. UV print, custom sizes up to 8ft × 4ft. Delivery nationwide from Ashbourne.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="foamex ireland, foamex boards ireland, foamex printing, foam board printing ireland, foamex signs, pvc foamex, foamex panels, foamex board printing, 5mm foamex, exhibition panels ireland, foamex printing ashbourne" />
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
            <li className="text-gray-800 font-medium">Foamex Ireland</li>
          </ol>
        </div>
      </nav>

      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-semibold text-violet-600 uppercase tracking-wider mb-3">PVC foam board printing</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">Foamex Ireland</h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Custom foamex board printing for Irish shops, exhibitions, offices, and events.
                UV-printed PVC foam signage in 3mm, 5mm, and 10mm — custom sizes up to 8ft × 4ft,
                with optional laminate and mounting from our Ashbourne print unit.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/foamex-boards" className="inline-flex items-center bg-violet-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-violet-700 transition-colors">
                  Order Foamex Boards
                </Link>
                <Link href="/foamex-faq-ireland" className="inline-flex items-center bg-white text-gray-800 font-semibold px-6 py-3 rounded-xl border border-gray-300 hover:border-gray-400 transition-colors">
                  Foamex FAQ
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-gray-100">
              <Image src={HERO_IMAGE} alt="Foamex boards Ireland — custom PVC foam board signage and exhibition panels" fill className="object-cover" priority sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Foamex thickness options</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {foamexTypes.map((item) => (
              <Link key={item.title} href={item.href} className="group bg-white rounded-2xl border border-gray-200 p-6 hover:border-violet-300 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-violet-600 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">{item.desc}</p>
                <span className="text-violet-600 font-semibold text-sm">From €{item.price} — get a quote →</span>
              </Link>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-6">
            Need outdoor signage? <Link href="/correx-boards" className="text-violet-600 hover:underline font-medium">Correx boards</Link> are weather-resistant for permanent outdoor use.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Local foamex printing</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {localPages.map((item) => (
              <Link key={item.href} href={item.href} className="group bg-slate-50 rounded-2xl border border-gray-200 p-6 hover:border-violet-300 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-violet-600 mb-2">{item.title}</h3>
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
              <Link key={item.href} href={item.href} className="group bg-white rounded-2xl border border-gray-200 p-6 hover:border-violet-300 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-violet-600 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Most asked questions</h2>
          <p className="text-gray-500 text-sm mb-8">Quick answers to the top foamex printing questions from Irish businesses.</p>
          <div className="space-y-4">
            {MOST_ASKED_FOAMEX_FAQS.map((faq) => (
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
            <Link href="/foamex-faq-ireland" className="text-violet-600 hover:underline font-medium">View detailed FAQ — 25+ questions →</Link>
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-violet-600">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Ready to order foamex boards?</h2>
          <p className="text-violet-100 mb-6">3mm, 5mm & 10mm foamex. Custom sizes. UV print with optional laminate.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/foamex-boards" className="inline-flex items-center bg-white text-violet-600 font-semibold px-6 py-3 rounded-xl hover:bg-violet-50 transition-colors">Order Foamex Boards</Link>
            <a href="tel:+353894400155" className="inline-flex items-center bg-violet-500 text-white font-semibold px-6 py-3 rounded-xl border border-violet-400 hover:bg-violet-400 transition-colors">Call +353 89 440 0155</a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
