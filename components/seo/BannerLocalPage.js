import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../layout/Layout';
import RelatedSeoLinks from './RelatedSeoLinks';
import { SITE_URL } from '../../lib/site';
import { buildOffer } from '../../lib/schema';
import { BANNER_LOCAL_PAGES } from '../../data/banner-local';

const HERO_IMAGE = '/ifa/product/banner/20221019_184306722822_e66498_Promo-banner.webp';

export default function BannerLocalPage({ config }) {
  const pageUrl = `${SITE_URL}/${config.slug}`;

  const defaultFaqs = [
    {
      q: `How much does banner printing cost in ${config.title.replace('Banner Printing ', '')}?`,
      a: 'PVC banners start from around €25–€45 for small sizes, with larger outdoor banners from €60–€150+. Roll-up banners with stands start from around €35. We provide free quotes with no minimum order.',
    },
    {
      q: 'How quickly can you print a banner?',
      a: 'Standard turnaround is 3–5 business days after artwork approval. Rush options (24–48 hours) may be available — mention your deadline when ordering.',
    },
    {
      q: 'Can I collect my banner locally?',
      a: 'Yes. PrintNPack is based in Ashbourne, Co. Meath. Collection is available for customers across Meath and north Dublin who want a fast pickup.',
    },
    {
      q: 'Can you design the banner for me?',
      a: 'Yes. Send your logo and key message — we prepare a proof before printing. Artwork help is included with most orders.',
    },
    {
      q: 'What banner material is best for outdoor use?',
      a: '510gsm PVC with hemmed edges and eyelets is best for most outdoor use. Mesh PVC is recommended for very windy locations like fences and scaffolding.',
    },
  ];

  const faqs = config.faqs || defaultFaqs;

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
      { '@type': 'ListItem', position: 2, name: 'Banners Ireland', item: `${SITE_URL}/banners-ireland` },
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
      telephone: '+353894400155',
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
    offers: buildOffer({ url: pageUrl, price: '25.00' }),
  };

  const siblingLinks = Object.values(BANNER_LOCAL_PAGES)
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
            <li><Link href="/banners-ireland" className="hover:text-gray-700">Banners Ireland</Link></li>
            <li>/</li>
            <li className="text-gray-800 font-medium">{config.title}</li>
          </ol>
        </div>
      </nav>

      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">Local banner printing</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">{config.h1}</h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">{config.intro}</p>
              <div className="flex flex-wrap gap-3">
                <Link href={config.quoteHref || '/quote?product=Vinyl+Banners'} className="inline-flex items-center bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors">
                  {config.quoteLabel || 'Get a Free Quote'}
                </Link>
                <a href="tel:+353894400155" className="inline-flex items-center bg-white text-gray-800 font-semibold px-6 py-3 rounded-xl border border-gray-300 hover:border-gray-400 transition-colors">
                  Call +353 89 440 0155
                </a>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image src={HERO_IMAGE} alt={`${config.title} — custom PVC and roll-up banners`} fill className="object-cover" priority sizes="(max-width: 1024px) 100vw, 50vw" unoptimized={process.env.NODE_ENV === 'production'} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Banner types we print</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/vinyl-banners" className="group bg-white rounded-2xl border border-gray-200 p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 mb-2">PVC Banners</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">Outdoor and indoor PVC banners with eyelets, hems, mesh options, and custom sizes up to 5m wide.</p>
              <span className="text-blue-600 font-semibold text-sm">View PVC banners →</span>
            </Link>
            <Link href="/roll-up-banners" className="group bg-white rounded-2xl border border-gray-200 p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 mb-2">Roll-Up Banners</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">Portable roll-up displays for trade shows, reception areas, clinics, schools, and corporate events.</p>
              <span className="text-blue-600 font-semibold text-sm">View roll-up banners →</span>
            </Link>
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
                <span key={area} className="rounded-full bg-blue-50 text-blue-700 text-sm font-medium px-4 py-1.5">{area}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-slate-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Frequently asked questions</h2>
            <Link href="/banner-faq-ireland" className="text-blue-600 hover:underline font-medium text-sm">View all banner FAQs →</Link>
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
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Ready to order your banner?</h2>
          <p className="text-blue-100 mb-6">Tell us your size, deadline, and indoor/outdoor use — we will help with artwork and material choice.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href={config.quoteHref || '/quote?product=Vinyl+Banners'} className="inline-flex items-center bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors">{config.quoteLabel || 'Get a Free Quote'}</Link>
            <Link href="/banner-faq-ireland" className="inline-flex items-center bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl border border-blue-400 hover:bg-blue-400 transition-colors">Banner FAQ</Link>
          </div>
        </div>
      </section>

      <RelatedSeoLinks
        title="Related banner pages"
        links={[
          { href: '/printing-ashbourne', label: 'Printing Ashbourne', desc: 'Local print shop — posters, flyers, stickers & more' },
          { href: '/banners-ireland', label: 'Banners Ireland', desc: 'Complete banner printing hub' },
          { href: '/blog/banner-sizes-ireland', label: 'Banner Sizes Guide', desc: '2×4, 3×6, 4×8 & roll-up dimensions' },
          { href: '/vinyl-banners', label: 'PVC Banners', desc: 'Outdoor & shop-front banners' },
          { href: '/roll-up-banners', label: 'Roll-Up Banners', desc: 'Portable trade show displays' },
          { href: '/banner-faq-ireland', label: 'Banner FAQ', desc: '40+ instant answers' },
          ...siblingLinks,
        ]}
      />
    </Layout>
  );
}
