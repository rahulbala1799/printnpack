import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../layout/Layout';
import RelatedSeoLinks from './RelatedSeoLinks';
import { getRelatedWholesaleLinks } from '../../data/wholesale-hub-links';
import PackagingIcon, { isPlaceholderImage } from '../PackagingIcon';
import { SITE_URL } from '../../lib/site';
import { PLAIN_PRODUCTS, getPlainProductPath, getPlainProductPathById } from '../../data/plain-products';

const HUB = '/biobox-containers-ireland';

export default function BioboxClusterPage({ config }) {
  const pageUrl = `${SITE_URL}/${config.slug}`;

  const plainProducts = config.productFilter
    ? PLAIN_PRODUCTS.filter(config.productFilter)
    : [];

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
      { '@type': 'ListItem', position: 2, name: 'Plain Packaging', item: `${SITE_URL}/plain-packaging` },
      { '@type': 'ListItem', position: 3, name: config.h1.split('—')[0].trim(), item: pageUrl },
    ],
  };

  const webPageLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: config.metaTitle,
    description: config.metaDescription,
    url: pageUrl,
    isPartOf: { '@type': 'WebSite', name: 'PrintNPack Ireland', url: SITE_URL },
  };

  const itemListLd = plainProducts.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Biobox containers wholesale Ireland',
        itemListElement: plainProducts.map((product, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: product.name,
          url: `${SITE_URL}${getPlainProductPath(product)}`,
        })),
      }
    : null;

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
        <meta property="og:site_name" content="PrintNPack Ireland" />
        <meta property="og:locale" content="en_IE" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageLd) }} />
        {itemListLd && (
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />
        )}
      </Head>

      <nav className="bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-stone-500">
            <li><Link href="/" className="hover:text-stone-700">Home</Link></li>
            <li>/</li>
            <li><Link href="/plain-packaging" className="hover:text-stone-700">Plain Packaging</Link></li>
            <li>/</li>
            <li className="text-stone-800 font-medium">Biobox Containers</li>
          </ol>
        </div>
      </nav>

      <section className="bg-white border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-semibold text-lime-700 uppercase tracking-wider mb-3">{config.heroLabel}</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight mb-4">{config.h1}</h1>
              <p className="text-lg text-stone-600 leading-relaxed mb-6">{config.intro}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-xs font-semibold bg-lime-50 border border-lime-200 text-lime-800 px-3 py-1.5 rounded-lg">B2B wholesale</span>
                <span className="text-xs font-semibold bg-stone-100 border border-stone-200 text-stone-700 px-3 py-1.5 rounded-lg">Case packs</span>
                <span className="text-xs font-semibold bg-stone-100 border border-stone-200 text-stone-700 px-3 py-1.5 rounded-lg">Ireland delivery</span>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href={config.primaryCta.href} className="inline-flex items-center bg-lime-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-lime-700 transition-colors">
                  {config.primaryCta.label}
                </Link>
                <Link href={config.secondaryCta.href} className="inline-flex items-center bg-white text-stone-800 font-semibold px-6 py-3 rounded-xl border border-stone-300 hover:border-stone-400 transition-colors">
                  {config.secondaryCta.label}
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-lime-50 border border-lime-100">
              <PackagingIcon category="Biobox" className="w-full h-full" />
            </div>
          </div>
        </div>
      </section>

      {config.sizeGuide?.length > 0 && (
        <section className="py-12 lg:py-14 bg-lime-50/50 border-b border-lime-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-2">Biobox size guide</h2>
            <p className="text-stone-600 mb-6">Standard kraft biobox dimensions — choose the right wholesale case for your menu.</p>
            <div className="overflow-x-auto rounded-xl border border-lime-200 bg-white">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-stone-500 border-b border-stone-100 bg-stone-50">
                    <th className="px-4 py-3 font-semibold">Size</th>
                    <th className="px-4 py-3 font-semibold">Dimensions</th>
                    <th className="px-4 py-3 font-semibold">Volume</th>
                    <th className="px-4 py-3 font-semibold">Typical use</th>
                  </tr>
                </thead>
                <tbody>
                  {config.sizeGuide.map((row) => (
                    <tr key={row.size} className="border-b border-stone-50 last:border-0">
                      <td className="px-4 py-3 font-semibold text-stone-900">{row.size}</td>
                      <td className="px-4 py-3 text-stone-700">{row.dims}</td>
                      <td className="px-4 py-3 text-stone-700">{row.volume}</td>
                      <td className="px-4 py-3 text-stone-600">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {config.sections.map((section) => (
            <div key={section.title} className="mb-10 last:mb-0">
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-3">{section.title}</h2>
              <p className="text-stone-600 leading-relaxed">
                {section.body}
                {section.link && (
                  <>
                    {' '}
                    <Link href={section.link.href} className="text-lime-700 hover:underline font-medium">
                      View {section.link.label} →
                    </Link>
                  </>
                )}
              </p>
            </div>
          ))}
        </div>
      </section>

      {plainProducts.length > 0 && (
        <section className="py-12 lg:py-16 bg-stone-50 border-t border-stone-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-2">Biobox wholesale — all sizes in stock</h2>
            <p className="text-stone-600 mb-8 max-w-2xl">
              Order kraft and white biobox containers by the case. Tiered pricing applies when you order multiple cases.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {plainProducts.map((product) => (
                <Link
                  key={product.id}
                  href={getPlainProductPath(product)}
                  className="group bg-white rounded-xl border border-stone-200 p-4 hover:border-lime-300 hover:shadow-md transition-all"
                >
                  <div className="relative aspect-square mb-3 rounded-lg overflow-hidden border border-stone-100 bg-lime-50/50">
                    {isPlaceholderImage(product.imageSrc) ? (
                      <PackagingIcon category={product.category} className="w-full h-full" />
                    ) : (
                      <img src={product.imageSrc} alt={product.name} className="w-full h-full object-contain p-2" />
                    )}
                  </div>
                  <h3 className="font-semibold text-stone-900 text-sm group-hover:text-lime-700 transition-colors leading-snug">
                    {product.name}
                  </h3>
                  {product.qtyPerCase && (
                    <p className="text-xs text-stone-500 mt-1">{product.qtyPerCase} per case · wholesale</p>
                  )}
                  <span className="inline-block mt-3 text-xs font-medium text-lime-700">View case pricing →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-12 lg:py-16 bg-white border-t border-stone-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-8">Frequently asked questions</h2>
          <div className="space-y-4">
            {config.faqs.map((faq) => (
              <details key={faq.q} className="group bg-stone-50 rounded-xl border border-stone-200 p-5 open:shadow-sm">
                <summary className="font-semibold text-stone-900 cursor-pointer list-none flex justify-between items-center gap-4">
                  {faq.q}
                  <span className="text-stone-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-stone-600 mt-3 text-sm leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-lime-600">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Order biobox containers wholesale</h2>
          <p className="text-lime-100 mb-6">Browse case pricing online or speak to us about regular supply for your takeaway or catering business.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href={config.primaryCta.href} className="inline-flex items-center bg-white text-lime-700 font-semibold px-6 py-3 rounded-xl hover:bg-lime-50 transition-colors">
              {config.primaryCta.label}
            </Link>
            <Link href="/contact" className="inline-flex items-center bg-lime-500 text-white font-semibold px-6 py-3 rounded-xl border border-lime-400 hover:bg-lime-400 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <RelatedSeoLinks
        title="Related wholesale packaging"
        links={getRelatedWholesaleLinks('/biobox-containers-ireland')}
      />
    </Layout>
  );
}
