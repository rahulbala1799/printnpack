import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../layout/Layout';
import RelatedSeoLinks from './RelatedSeoLinks';
import { SITE_URL } from '../../lib/site';
import { buildOffer } from '../../lib/schema';
import { PRINTING_LOCAL_PAGES, PRINTING_SERVICES, PRINTING_LOCAL_FAQS } from '../../data/printing-local';

const HERO_IMAGE = '/ifa/product/Poster/single_poster.jpg';

export default function PrintingLocalPage({ config }) {
  const pageUrl = `${SITE_URL}/${config.slug}`;

  const faqs = config.faqs || PRINTING_LOCAL_FAQS;

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
      { '@type': 'ListItem', position: 2, name: config.hubLabel, item: `${SITE_URL}/${config.hubSlug}` },
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
    areaServed: [
      ...config.localAreas.map((name) => ({ '@type': 'Place', name })),
      { '@type': 'Country', name: 'Ireland' },
    ],
    offers: buildOffer({ url: pageUrl, price: '8.00' }),
  };

  const siblingLinks = Object.values(PRINTING_LOCAL_PAGES)
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
            <li><Link href={`/${config.hubSlug}`} className="hover:text-gray-700">{config.hubLabel}</Link></li>
            <li>/</li>
            <li className="text-gray-800 font-medium">{config.title}</li>
          </ol>
        </div>
      </nav>

      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">{config.heroLabel}</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">{config.h1}</h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">{config.intro}</p>
              <p className="text-sm text-gray-500 mb-6 flex items-start gap-2">
                <span className="font-medium text-gray-700 shrink-0">Address:</span>
                Unit 14 Ashbourne Business Centre, Ashbourne, Co. Meath, A84 KV57
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/quote" className="inline-flex items-center bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors">
                  Request a Quote
                </Link>
                <a href="tel:+353894157369" className="inline-flex items-center bg-white text-gray-800 font-semibold px-6 py-3 rounded-xl border border-gray-300 hover:border-gray-400 transition-colors">
                  Call +353 89 415 7369
                </a>
                <Link href="/contact" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold px-2 py-3 transition-colors text-sm">
                  Send artwork / contact →
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={HERO_IMAGE}
                alt={`${config.title} — posters, flyers and business printing`}
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
          <p className="text-gray-600 mb-8 max-w-3xl">
            Practical print and packaging for businesses, events, schools and everyday jobs — with nationwide delivery across Ireland.
          </p>
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
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Collection, delivery & areas served</h2>
          <p className="text-gray-600 mb-8 max-w-3xl">{config.deliveryNote}</p>
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Areas we serve</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {config.localAreas.map((area) => (
                <span key={area} className="rounded-full bg-blue-50 text-blue-700 text-sm font-medium px-4 py-1.5">{area}</span>
              ))}
              <span className="rounded-full bg-slate-100 text-slate-700 text-sm font-medium px-4 py-1.5">All Ireland</span>
            </div>
            <p className="text-sm text-gray-500">
              Looking for advice on artwork or materials? Read our{' '}
              <Link href="/blog/printing-ashbourne-guide" className="text-blue-600 hover:underline font-medium">
                printing in Ashbourne guide
              </Link>{' '}
              for preparation tips — or{' '}
              <Link href={`/${config.hubSlug}`} className="text-blue-600 hover:underline font-medium">
                browse printing across Ireland
              </Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-slate-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Frequently asked questions</h2>
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
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Ready to order printing?</h2>
          <p className="text-blue-100 mb-6">
            Send your artwork, size, quantity and deadline — we will recommend the right material and turnaround.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/quote" className="inline-flex items-center bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors">
              Request a Quote
            </Link>
            <Link href="/contact" className="inline-flex items-center bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl border border-blue-400 hover:bg-blue-400 transition-colors">
              Contact / Send Artwork
            </Link>
          </div>
        </div>
      </section>

      <RelatedSeoLinks
        title="Related printing pages"
        links={[
          { href: `/${config.hubSlug}`, label: 'Printing Ireland', desc: 'Nationwide posters, flyers, packaging & business print' },
          { href: '/banner-printing-ashbourne', label: 'Banner Printing Ashbourne', desc: 'PVC & roll-up banners — local collection' },
          { href: '/rubber-stamp-printing-ashbourne', label: 'Stamp Printing Ashbourne', desc: 'Company & business rubber stamps' },
          { href: '/blog/printing-ashbourne-guide', label: 'Printing Ashbourne Guide', desc: 'Artwork tips & what to prepare before ordering' },
          ...siblingLinks,
        ]}
      />
    </Layout>
  );
}
