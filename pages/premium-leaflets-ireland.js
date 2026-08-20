import React from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { SITE_URL } from '../lib/site';
import { buildProductLd } from '../lib/schema';
import PremiumLeafletConfigurator from '../components/leaflets/PremiumLeafletConfigurator';
import RelatedSeoLinks from '../components/seo/RelatedSeoLinks';

const PAGE_URL = `${SITE_URL}/premium-leaflets-ireland`;

const highlights = [
  'Unique materials guaranteed to make you stand out',
  'High-quality digital print',
  'White colours cannot be printed on metallic or pearl paper',
];

const productLd = buildProductLd({
  name: 'Premium Leaflets Ireland',
  description:
    'Print to impress with special material flyers — metallic, pearl marble, sulfate cardboard and synthetic PVC paper. High-quality digital print, Ireland.',
  url: PAGE_URL,
});

const webPageLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Premium Leaflets Ireland | Special Material Flyers',
  description:
    'Print to impress with special material flyers. Metallic finishes in white, gold and silver, pearl marble, sulfate cardboard and waterproof synthetic paper.',
  url: PAGE_URL,
  inLanguage: 'en-IE',
  isPartOf: { '@type': 'WebSite', name: 'PrintNPack Ireland', url: SITE_URL },
  about: { '@type': 'Thing', name: 'Premium leaflets Ireland' },
  dateModified: '2026-08-20',
};

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Products', item: `${SITE_URL}/products` },
    { '@type': 'ListItem', position: 3, name: 'Premium Leaflets', item: PAGE_URL },
  ],
};

export default function PremiumLeafletsIreland() {
  const title = 'Premium Leaflets Ireland | Special Material Flyers';
  const description =
    'Print to impress with special material flyers. Metallic finishes in white, gold and silver, pearl marble, sulfate cardboard and waterproof synthetic paper. High-quality digital print.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="premium leaflets ireland, special material flyers ireland, metallic flyers ireland, pearl marble leaflets, sulfate cardboard flyers, synthetic paper flyers ireland, waterproof flyers ireland, premium flyer printing ireland"
        />
        <meta name="author" content="PrintNPack Ireland" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:site_name" content="PrintNPack Ireland" />
        <meta property="og:locale" content="en_IE" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }} />
      </Head>

      <nav className="bg-violet-50 border-b border-violet-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-stone-500">
            <li><Link href="/" className="hover:text-stone-700">Home</Link></li>
            <li>/</li>
            <li><Link href="/products" className="hover:text-stone-700">Products</Link></li>
            <li>/</li>
            <li className="text-stone-800 font-medium">Premium Leaflets</li>
          </ol>
        </div>
      </nav>

      <section className="relative bg-gradient-to-br from-violet-950 via-indigo-950 to-stone-950 border-b border-violet-900/50 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(167,139,250,0.18),_transparent_50%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(251,191,36,0.1),_transparent_45%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <p className="text-sm font-semibold text-violet-300 uppercase tracking-[0.2em] mb-4">
            Special Material Flyers
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 max-w-4xl">
            Premium Leaflets Ireland
          </h1>
          <p className="text-lg text-stone-300 leading-relaxed max-w-3xl mb-8">
            Print to impress with Special Material Flyers! Command attention with our metallic flyer finishes in
            white, gold and silver. Exude an aura of sophistication with our pearl marble finish. Looking for
            something more subtle? Need something that can withstand the test of time? Our smoothed cardboard
            flyers are as sturdy as they get. Not a fan of paper? Our synthetic paper flyers are a great
            alternative to paper — they&apos;re 100% tree free, tear-resistant and even waterproof!
          </p>
          <ul className="space-y-3 max-w-2xl">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-stone-200">
                <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-violet-500/30 text-violet-200 flex items-center justify-center">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-sm font-semibold text-violet-600 uppercase tracking-wider mb-2">Configure your order</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-3">Select material, size &amp; printing</h2>
            <p className="text-stone-600 max-w-2xl leading-relaxed">
              Choose your special material, leaflet size and printing options below, then request a quotation.
            </p>
          </div>
          <PremiumLeafletConfigurator />
        </div>
      </section>

      <RelatedSeoLinks
        title="More print products"
        links={[
          { href: '/services/leaflets', label: 'Leaflets', desc: 'Flat leaflet printing Ireland' },
          { href: '/posters', label: 'Posters', desc: 'Custom poster printing' },
          { href: '/printing-ireland', label: 'Printing Services', desc: 'Print services across Ireland' },
          { href: '/products', label: 'All Products', desc: 'Full print and packaging catalogue' },
        ]}
      />

      <section className="py-12 bg-violet-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-stone-300 mb-6 leading-relaxed">
            Contact PrintNPack for a quotation on premium leaflets with special material finishes.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/quote"
              className="inline-flex items-center bg-white text-violet-700 font-semibold px-6 py-3 rounded-xl hover:bg-violet-50 transition-colors"
            >
              Request a Quote
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center bg-transparent text-white font-semibold px-6 py-3 rounded-xl border border-white/20 hover:border-white/40 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
