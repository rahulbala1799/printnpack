import React from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_URL } from '../lib/site';
import { PRINTING_SERVICES, PRINTING_LOCAL_FAQS } from '../data/printing-local';

const PAGE_URL = `${SITE_URL}/printing-ireland`;
const HERO_IMAGE = '/ifa/product/Poster/single_poster.jpg';

const localPages = [
  {
    href: '/printing-ashbourne',
    title: 'Printing Ashbourne',
    desc: 'Local collection from Unit 14 Ashbourne Business Centre — posters, flyers, certificates & more.',
  },
  {
    href: '/printing-dublin',
    title: 'Printing Dublin',
    desc: 'Posters, flyers, stickers, banners and business print delivered across Dublin.',
  },
];

const guides = [
  {
    href: '/blog/printing-ashbourne-guide',
    title: 'Printing Ashbourne Guide',
    desc: 'Artwork tips, what to prepare, and how to get the best print result.',
  },
  {
    href: '/blog/leaflet-printing-ireland-guide',
    title: 'Leaflet Printing Guide',
    desc: 'Sizes, paper stocks and distribution tips for Irish businesses.',
  },
  {
    href: '/blog/business-stamps-ireland-guide',
    title: 'Business Stamps Guide',
    desc: 'Company stamps, invoice stamps and how to order.',
  },
];

const irelandFaqs = [
  {
    q: 'Where can I find printing services near me?',
    a: 'PrintNPack is based at Unit 14 Ashbourne Business Centre, Ashbourne, Co. Meath — serving as your local print shop for Meath and north Dublin with collection available. We deliver printing services across Dublin and all Irish counties.',
  },
  {
    q: 'What printing services do you offer?',
    a: 'We offer posters, flyers, leaflets, certificates, business cards, stickers, banners, rubber stamps, menus, signs, foamex boards, packaging and business print — with practical advice, good print quality and reliable delivery.',
  },
  {
    q: 'Do you offer printing across Ireland?',
    a: 'Yes. PrintNPack is based in Ashbourne, Co. Meath and delivers posters, flyers, banners, stickers, stamps, packaging and business print nationwide.',
  },
  {
    q: 'Where is PrintNPack based?',
    a: 'Unit 14 Ashbourne Business Centre, Ashbourne, Co. Meath, A84 KV57. Local collection is available for Meath and north Dublin customers.',
  },
  ...PRINTING_LOCAL_FAQS.filter((f) => !f.q.startsWith('Where can I get printing done')),
];

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: irelandFaqs.map(({ q, a }) => ({
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
    { '@type': 'ListItem', position: 2, name: 'Printing Ireland', item: PAGE_URL },
  ],
};

const serviceLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'PrintNPack Ireland',
  url: SITE_URL,
  telephone: '+353894400155',
  description:
    'Printing and packaging across Ireland — posters, flyers, certificates, stickers, banners, rubber stamps and business print. Based in Ashbourne, Co. Meath.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Unit 14 Ashbourne Business Centre',
    addressLocality: 'Ashbourne',
    addressRegion: 'Co. Meath',
    postalCode: 'A84 KV57',
    addressCountry: 'IE',
  },
  areaServed: { '@type': 'Country', name: 'Ireland' },
};

export default function PrintingIreland() {
  const title = 'Printing Services Ireland | Print Shop Near Me — Posters, Flyers & Banners';
  const description =
    'Printing services Ireland — posters, flyers, certificates, stickers, banners, rubber stamps and packaging. Print shop near me in Ashbourne with delivery across Dublin and nationwide.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="printing services, printing services ireland, printing services near me, printing near me, print shop ireland, poster printing ireland, flyer printing ireland, business printing ireland, printing dublin, printing ashbourne"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={`${SITE_URL}${HERO_IMAGE}`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      </Head>

      <nav className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-gray-700">Home</Link></li>
            <li>/</li>
            <li className="text-gray-800 font-medium">Printing Ireland</li>
          </ol>
        </div>
      </nav>

      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">Ireland&apos;s print &amp; packaging specialist</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">Printing Services Ireland — Print Shop Near Me</h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                PrintNPack is your local <strong>printing services</strong> supplier — posters, flyers, leaflets, certificates, business cards, stickers, banners, rubber stamps,
                menus, signs and packaging for businesses across <strong>Ireland</strong>. Based at Unit 14 Ashbourne Business
                Centre in Co. Meath, we are the <strong>print shop near me</strong> for Ashbourne, Dublin and Meath with delivery to every county.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/quote" className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors">
                  Request a Quote
                </Link>
                <Link href="/printing-ashbourne" className="inline-flex items-center gap-2 bg-white text-gray-800 font-semibold px-6 py-3 rounded-xl border border-gray-300 hover:border-gray-400 transition-colors">
                  Printing Ashbourne
                </Link>
                <a href="tel:+353894400155" className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 font-medium px-2 py-3 transition-colors text-sm">
                  Call +353 89 440 0155
                </a>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={HERO_IMAGE}
                alt="Printing Ireland — posters, flyers and business print nationwide"
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

      <section className="py-12 lg:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">What we print</h2>
          <p className="text-gray-600 mb-8 max-w-2xl">Posters to packaging — one supplier for Irish businesses, schools, clubs and events.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PRINTING_SERVICES.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group bg-white rounded-2xl border border-gray-200 p-5 hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <h3 className="font-bold text-gray-900 group-hover:text-blue-600 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">{service.desc}</p>
                <span className="text-blue-600 font-semibold text-sm">{service.cta} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Printing near you</h2>
          <div className="grid sm:grid-cols-2 gap-4">
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
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Frequently asked questions</h2>
          <div className="space-y-4">
            {irelandFaqs.map((faq) => (
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
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Ready to order printing?</h2>
          <p className="text-blue-100 mb-6">Nationwide delivery from Ashbourne, Co. Meath — send your artwork and deadline for a fast quote.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/quote" className="inline-flex items-center bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors">
              Request a Quote
            </Link>
            <Link href="/contact" className="inline-flex items-center bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl border border-blue-400 hover:bg-blue-400 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
