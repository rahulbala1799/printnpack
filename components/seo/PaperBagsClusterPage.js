import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../layout/Layout';
import RelatedSeoLinks from './RelatedSeoLinks';
import PackagingIcon, { isPlaceholderImage } from '../PackagingIcon';
import { SITE_URL } from '../../lib/site';
import { PLAIN_PRODUCTS, getPlainProductPath, getPlainProductPathById } from '../../data/plain-products';
import { PLAIN_BAG_CATEGORIES } from '../../data/paper-bags-cluster';

const HUB = '/paper-bags-ireland';
const HERO_IMAGE = '/images/products/flat-handle-bags/6.png';

const plainBagProducts = PLAIN_PRODUCTS.filter((p) => PLAIN_BAG_CATEGORIES.includes(p.category)).slice(0, 12);

export default function PaperBagsClusterPage({ config }) {
  const pageUrl = `${SITE_URL}/${config.slug}`;

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
      { '@type': 'ListItem', position: 2, name: 'Paper Bags Ireland', item: `${SITE_URL}${HUB}` },
      { '@type': 'ListItem', position: 3, name: config.h1.split('—')[0].trim(), item: pageUrl },
    ],
  };

  const webPageLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: config.metaTitle,
    description: config.metaDescription,
    url: pageUrl,
  };

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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageLd) }} />
      </Head>

      <nav className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-gray-700">Home</Link></li>
            <li>/</li>
            <li><Link href={HUB} className="hover:text-gray-700">Paper Bags Ireland</Link></li>
            <li>/</li>
            <li className="text-gray-800 font-medium">{config.h1.split('—')[0].trim()}</li>
          </ol>
        </div>
      </nav>

      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-3">{config.heroLabel}</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">{config.h1}</h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">{config.intro}</p>
              <div className="flex flex-wrap gap-3">
                <Link href={config.primaryCta.href} className="inline-flex items-center bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-emerald-700 transition-colors">
                  {config.primaryCta.label}
                </Link>
                <Link href={config.secondaryCta.href} className="inline-flex items-center bg-white text-gray-800 font-semibold px-6 py-3 rounded-xl border border-gray-300 hover:border-gray-400 transition-colors">
                  {config.secondaryCta.label}
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image src={HERO_IMAGE} alt={`${config.h1} — kraft paper bags Ireland`} fill className="object-cover" priority sizes="(max-width: 1024px) 100vw, 50vw" unoptimized={process.env.NODE_ENV === 'production'} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {config.sections.map((section) => (
            <div key={section.title} className="mb-10 last:mb-0">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{section.title}</h2>
              <p className="text-gray-600 leading-relaxed">
                {section.body}
                {section.link && (
                  <>
                    {' '}
                    <Link href={section.link.href} className="text-blue-600 hover:underline font-medium">
                      View {section.link.label} →
                    </Link>
                  </>
                )}
              </p>
            </div>
          ))}
        </div>
      </section>

      {plainBagProducts.length > 0 && (
        <section className="py-12 lg:py-16 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Plain paper bag stock</h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              Order by the case online.{' '}
              <Link href="/plain-packaging" className="text-blue-600 hover:underline font-medium">Browse all plain packaging</Link>.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {plainBagProducts.map((product) => (
                <Link key={product.id} href={getPlainProductPath(product)} className="group bg-white rounded-xl border border-gray-200 p-4 hover:border-emerald-200 hover:shadow-md transition-all">
                  <div className="relative aspect-square mb-3 rounded-lg overflow-hidden border border-gray-100 bg-gray-50">
                    {isPlaceholderImage(product.imageSrc) ? (
                      <PackagingIcon category={product.category} className="w-full h-full" />
                    ) : (
                      <Image src={product.imageSrc} alt={product.name} fill className="object-contain p-2" sizes="200px" unoptimized={process.env.NODE_ENV === 'production'} />
                    )}
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm group-hover:text-emerald-600 transition-colors leading-snug">{product.name}</h3>
                  <p className="text-xs text-gray-500 mt-1">{product.category}</p>
                  <span className="inline-block mt-3 text-xs font-medium text-emerald-600">View pricing →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-12 lg:py-16 bg-slate-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Frequently asked questions</h2>
          <div className="space-y-4">
            {config.faqs.map((faq) => (
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

      <section className="py-12 lg:py-16 bg-emerald-600">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Ready to order paper bags?</h2>
          <p className="text-emerald-100 mb-6">{config.primaryCta.label} — or contact us for regular wholesale supply.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href={config.primaryCta.href} className="inline-flex items-center bg-white text-emerald-600 font-semibold px-6 py-3 rounded-xl hover:bg-emerald-50 transition-colors">
              {config.primaryCta.label}
            </Link>
            <Link href="/quote" className="inline-flex items-center bg-emerald-500 text-white font-semibold px-6 py-3 rounded-xl border border-emerald-400 hover:bg-emerald-400 transition-colors">
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      <RelatedSeoLinks
        title="Related paper bag pages"
        links={[
          { href: HUB, label: 'Paper Bags Ireland', desc: 'Printed, plain & wholesale hub' },
          { href: '/printed-flat-handle-bags-ireland', label: 'Printed Flat Handle Bags', desc: 'Logo takeaway bags from 500 units' },
          { href: '/twisted-handle-paper-bags-ireland', label: 'Twisted Handle Bags', desc: 'Premium retail carrier bags' },
          { href: '/plain-paper-bags-ireland', label: 'Plain Paper Bags', desc: 'Kraft stock in bulk cases' },
          { href: '/wholesale-paper-bags-ireland', label: 'Wholesale Paper Bags', desc: 'Bulk case & print runs' },
          { href: '/blog/printed-paper-bag-cost-ireland', label: 'Paper Bag Cost Guide', desc: 'Pricing before you quote' },
        ].filter((link) => link.href !== `/${config.slug}`)}
      />
    </Layout>
  );
}
