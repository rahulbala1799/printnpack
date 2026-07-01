import React from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_URL } from '../lib/site';
import { buildCatalogOffer } from '../lib/schema';

const PAGE_URL = `${SITE_URL}/rubber-stamps-ireland`;
const HERO_IMAGE = '/images/rubber-stamps/RubberStamp_10.jpg';

const stampTypes = [
  { title: 'Business Stamps', desc: 'Company name, address, logo, invoice & received stamps for daily office use.', href: '/rubber-stamps' },
  { title: 'Signature Stamps', desc: 'Personalised signature stamps for authorised document signing by directors and professionals.', href: '/rubber-stamps' },
  { title: 'Traditional Hand Stamps', desc: 'Wooden handle stamps with separate ink pad — craft, occasional use, and classic style.', href: '/rubber-stamps' },
];

const localPages = [
  { href: '/rubber-stamp-printing-ashbourne', title: 'Stamp Printing Ashbourne', desc: 'Local collection, same-day service — Ashbourne, Ratoath & north Dublin.' },
  { href: '/rubber-stamp-printing-dublin', title: 'Stamp Printing Dublin', desc: 'Business stamps, signature stamps & company logo stamps delivered across Dublin.' },
];

const guides = [
  { href: '/rubber-stamp-faq-ireland', title: 'Rubber Stamp FAQ', desc: '25+ instant answers on pricing, types, turnaround & delivery.' },
  { href: '/blog/business-stamps-ireland-guide', title: 'Business Stamps Guide', desc: 'Company stamps, invoice stamps & logo stamps for Irish businesses.' },
];

const faqs = [
  { q: 'How much do rubber stamps cost in Ireland?', a: 'Custom rubber stamps start from around €15–€25 for a basic business stamp, with signature stamps and larger company stamps from €20–€45. No minimum order — get a free quote.' },
  { q: 'How quickly can you make a rubber stamp?', a: 'Standard turnaround is 2–3 business days. Same-day and next-day express service is available for urgent orders — call with your deadline.' },
  { q: 'What types of rubber stamps do you make?', a: 'Business stamps, company logo stamps, signature stamps, address stamps, traditional hand stamps, and personalised stamps. Self-inking and wooden-handle formats.' },
  { q: 'Do you offer rubber stamp printing in Ashbourne?', a: 'Yes. PrintNPack is based in Ashbourne, Co. Meath. Local collection is available, and we serve Ratoath, Dunboyne, Dublin, and all of Ireland.' },
  { q: 'Can you put my company logo on a stamp?', a: 'Yes. Send your logo — we prepare a proof before manufacturing. Logo stamps work on letterheads, invoices, and official documents.' },
  { q: 'What is the difference between self-inking and hand stamps?', a: 'Self-inking stamps have a built-in ink pad — clean and fast for daily use. Traditional hand stamps use a separate ink pad and wooden handle — lower cost for occasional stamping.' },
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
    { '@type': 'ListItem', position: 2, name: 'Rubber Stamps Ireland', item: PAGE_URL },
  ],
};

const itemListLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Rubber Stamps Ireland',
  itemListElement: stampTypes.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: buildCatalogOffer(item.title, `${SITE_URL}${item.href}`, { price: '15.00' }).itemOffered,
  })),
};

export default function RubberStampsIreland() {
  const title = 'Rubber Stamps Ireland | Business, Signature & Company Stamps | Print n Pack';
  const description =
    'Custom rubber stamps in Ireland — business stamps, company logo stamps, signature stamps & traditional hand stamps. Same-day service, local collection in Ashbourne, delivery across Dublin & nationwide.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="rubber stamps ireland, custom rubber stamps, business stamps ireland, company stamp ireland, signature stamps, stamp printing ireland, personalised stamps ireland, rubber stamp printing ashbourne" />
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
            <li className="text-gray-800 font-medium">Rubber Stamps Ireland</li>
          </ol>
        </div>
      </nav>

      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-3">Custom stamp printing</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">Rubber Stamps Ireland</h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Professional custom rubber stamps for Irish businesses, schools, solicitors, and personal use.
                Business stamps, signature stamps, company logo stamps, and traditional hand stamps — same-day
                express service available from our Ashbourne print unit.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/rubber-stamps" className="inline-flex items-center bg-indigo-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-indigo-700 transition-colors">
                  Order Custom Stamps
                </Link>
                <Link href="/rubber-stamp-faq-ireland" className="inline-flex items-center bg-white text-gray-800 font-semibold px-6 py-3 rounded-xl border border-gray-300 hover:border-gray-400 transition-colors">
                  Stamp FAQ
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-gray-100">
              <Image src={HERO_IMAGE} alt="Custom rubber stamps Ireland — business and signature stamps" fill className="object-cover" priority sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Stamp types</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {stampTypes.map((item) => (
              <Link key={item.title} href={item.href} className="group bg-white rounded-2xl border border-gray-200 p-6 hover:border-indigo-300 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">{item.desc}</p>
                <span className="text-indigo-600 font-semibold text-sm">From €15 — order now →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Local stamp printing</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {localPages.map((item) => (
              <Link key={item.href} href={item.href} className="group bg-slate-50 rounded-2xl border border-gray-200 p-6 hover:border-indigo-300 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 mb-2">{item.title}</h3>
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
              <Link key={item.href} href={item.href} className="group bg-white rounded-2xl border border-gray-200 p-6 hover:border-indigo-300 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Frequently asked questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
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
            <Link href="/rubber-stamp-faq-ireland" className="text-indigo-600 hover:underline font-medium">View all 25+ stamp FAQs →</Link>
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-indigo-600">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Ready to order your stamp?</h2>
          <p className="text-indigo-100 mb-6">Business stamps from €15. Same-day express available. No minimum order.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/rubber-stamps" className="inline-flex items-center bg-white text-indigo-600 font-semibold px-6 py-3 rounded-xl hover:bg-indigo-50 transition-colors">Order Custom Stamps</Link>
            <a href="tel:+353894157369" className="inline-flex items-center bg-indigo-500 text-white font-semibold px-6 py-3 rounded-xl border border-indigo-400 hover:bg-indigo-400 transition-colors">Call +353 89 415 7369</a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
