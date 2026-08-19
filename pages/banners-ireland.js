import React from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_URL } from '../lib/site';
import { buildCatalogOffer } from '../lib/schema';

const PAGE_URL = `${SITE_URL}/banners-ireland`;
const HERO_IMAGE = '/ifa/product/banner/20221019_184306722822_e66498_Promo-banner.webp';

const localPages = [
  { href: '/banner-printing-ashbourne', title: 'Banner Printing Ashbourne', desc: 'Local collection, schools, sports clubs, shops & events in Ashbourne and Ratoath.' },
  { href: '/banner-printing-dublin', title: 'Banner Printing Dublin', desc: 'Banners Dublin — retail, corporate, restaurants, exhibitions & pop-up promotions.' },
  { href: '/banner-printing-meath', title: 'Banner Printing Meath', desc: 'Navan, Trim, Ashbourne, Dunboyne — schools, GAA clubs & community events.' },
];

const guides = [
  { href: '/banner-faq-ireland', title: 'Banner FAQ', desc: '40+ instant answers on cost, materials, artwork & delivery.' },
  { href: '/blog/banner-sizes-ireland', title: 'Banner Sizes Guide', desc: '2×4, 3×6, 4×8 PVC & roll-up dimensions for Irish businesses.' },
  { href: '/blog/banner-printing-ireland-guide', title: 'Banner Printing Guide', desc: 'Cost, materials, turnaround & design tips for Irish businesses.' },
  { href: '/blog/trade-show-banners-decals-ireland', title: 'Trade Show Banners & Decals', desc: 'Exhibition marketing and custom decals guide.' },
];

const faqs = [
  { q: 'Where can I get banner printing near me?', a: 'PrintNPack is based in Ashbourne, Co. Meath — your local banner printer for Meath and north Dublin with collection available. We also deliver banner printing across Dublin, Cork, Galway and all Irish counties.' },
  { q: 'Where can I get banner printing in Dublin?', a: 'We provide banner printing Dublin with delivery across the city and county — PVC banners, roll-up banners, and event graphics for shops, restaurants, schools and exhibitions. See our Dublin banner printing page for local delivery details.' },
  { q: 'How much does banner printing cost?', a: 'PVC banners start from around €25–€45 for small sizes, with larger outdoor banners from €60–€150+. Roll-up banners with stands start from around €35. No minimum order — get a free quote for your exact size.' },
  { q: 'Can I order one banner?', a: 'Yes. Single banners for shop sales, school events, sports matches, and parties are welcome. We help with artwork and finishing.' },
  { q: 'How quickly can you print a banner?', a: 'Standard turnaround is 3–5 business days after artwork approval. Rush options (24–48 hours) may be available — tell us your deadline.' },
  { q: 'Do you offer banner printing in Ashbourne?', a: 'Yes. PrintNPack is based in Ashbourne, Co. Meath. Local collection is available, and we serve Ratoath, Dunboyne, Dunshaughlin, Dublin, and all of Ireland.' },
  { q: 'What is the best material for an outdoor banner?', a: '510gsm PVC with hemmed edges and eyelets is best for most outdoor use. Mesh PVC is recommended for windy fences and scaffolding.' },
  { q: 'Can you design the banner for me?', a: 'Yes. Send your logo and message — we prepare a proof before printing. WhatsApp logos are fine; we will check resolution.' },
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
    { '@type': 'ListItem', position: 2, name: 'Banners Ireland', item: PAGE_URL },
  ],
};

const itemListLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Banner Printing Ireland',
  itemListElement: [
    buildCatalogOffer('PVC Banners Ireland', `${SITE_URL}/vinyl-banners`, { price: '25.00' }).itemOffered,
    buildCatalogOffer('Roll Up Banners Ireland', `${SITE_URL}/roll-up-banners`, { price: '35.00' }).itemOffered,
    buildCatalogOffer('Extra Wide Roll Up Banners Ireland', `${SITE_URL}/extra-wide-roll-up-banners-ireland`, { price: '398.96' }).itemOffered,
  ].map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item,
  })),
};

export default function BannersIreland() {
  const title = 'Banner Printing Ireland | Custom PVC & Roll-Up Banners | Print n Pack';
  const description =
    'Banner printing Ireland — custom PVC banners, printed banners, roll-up banners, extra wide 2m roller banners and trade show displays. From Ashbourne with delivery across Dublin, Meath, Northern Ireland and nationwide.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="banner printing, banner printing ireland, banners ireland, banner printing near me, banner printing dublin, banners dublin, PVC banners ireland, roll up banners ireland, extra wide roll up banners, printed banners ireland, trade show banners ireland" />
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
            <li className="text-gray-800 font-medium">Banners Ireland</li>
          </ol>
        </div>
      </nav>

      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">Ireland&apos;s local banner printer</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">Banner Printing Ireland</h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Need a banner for a shop, school, event, sports club, restaurant, market or promotion? Print n Pack prints custom{' '}
                <strong>PVC banners</strong>, <strong>roll-up banners</strong>, event banners and display graphics for customers across{' '}
                <strong>Ashbourne, Dublin and Meath</strong>. We help with artwork, sizing, material choice and finishing options such as eyelets, hems and banner stands.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/quote?product=Vinyl+Banners" className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors">Get a Free Quote</Link>
                <Link href="/vinyl-banners" className="inline-flex items-center gap-2 bg-white text-gray-800 font-semibold px-6 py-3 rounded-xl border border-gray-300 hover:border-gray-400 transition-colors">PVC Banners</Link>
                <Link href="/banner-faq-ireland" className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 font-medium px-2 py-3 transition-colors text-sm">Banner FAQ →</Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image src={HERO_IMAGE} alt="Banner printing Ireland — custom PVC and roll-up banners" fill className="object-cover" priority sizes="(max-width: 1024px) 100vw, 50vw" unoptimized={process.env.NODE_ENV === 'production'} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Two ways to order banners</h2>
          <p className="text-gray-600 mb-8 max-w-2xl">PVC for outdoor and shop-front use. Roll-ups for portable indoor displays.</p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/vinyl-banners" className="group bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 hover:border-blue-300 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 mb-2">PVC Banners</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">Full-colour outdoor PVC banners with eyelets, hems, mesh options, and custom sizes. Shops, events, fences, and scaffolding.</p>
              <span className="text-blue-600 font-semibold text-sm">View PVC banners →</span>
            </Link>
            <Link href="/roll-up-banners" className="group bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 hover:border-blue-300 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 mb-2">Roll-Up Banners</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">Portable roll-up displays with stand and carry case. Trade shows, reception areas, clinics, schools, and corporate events.</p>
              <span className="text-blue-600 font-semibold text-sm">View roll-up banners →</span>
            </Link>
            <Link href="/extra-wide-roll-up-banners-ireland" className="group bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 hover:border-orange-300 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 mb-2">Extra Wide Roll-Ups</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">200 cm wide XL roller banners up to 3 metres high. Silver XL stand, B1 certified — for large exhibition booths and corporate backdrops.</p>
              <span className="text-orange-600 font-semibold text-sm">View extra wide roll-ups →</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Banner printing near you</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {localPages.map((page) => (
              <Link key={page.href} href={page.href} className="group p-5 rounded-xl border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all">
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{page.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{page.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-slate-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Guides &amp; resources</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {guides.map((guide) => (
              <Link key={guide.href} href={guide.href} className="group p-5 rounded-xl border border-gray-200 bg-white hover:border-blue-200 hover:shadow-md transition-all">
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{guide.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{guide.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Banner FAQs</h2>
            <Link href="/banner-faq-ireland" className="text-blue-600 hover:underline font-medium text-sm">View all 40+ questions →</Link>
          </div>
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
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-blue-600">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Ready to order your banner?</h2>
          <p className="text-blue-100 mb-6">PVC banners, roll-up displays, event signage — design help included. No minimum order.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/quote?product=Vinyl+Banners" className="inline-flex items-center bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors">Get a Free Quote</Link>
            <a href="tel:+353894157369" className="inline-flex items-center bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl border border-blue-400 hover:bg-blue-400 transition-colors">Call +353 89 415 7369</a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
