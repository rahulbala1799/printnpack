import React from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { SITE_URL } from '../lib/site';
import { buildProductLd } from '../lib/schema';
import BusinessCardConfigurator from '../components/business-cards/BusinessCardConfigurator';
import RelatedSeoLinks from '../components/seo/RelatedSeoLinks';
import { BUSINESS_CARD_GSM, BUSINESS_CARD_IMAGES, BUSINESS_CARD_SIZE } from '../data/business-cards-options';

const PAGE_URL = `${SITE_URL}/business-cards-ireland`;
const HERO_IMAGE = BUSINESS_CARD_IMAGES[0].src;

const pageFaqs = [
  {
    q: 'What size are your business cards?',
    a: 'Every card is 85 × 55 mm on 350 gsm stock. The size is fixed, so you do not need to specify length or width.',
  },
  {
    q: 'How much do business cards cost?',
    a: '100 cards are €35, 200 are €60, 300 are €75, and 1,000 are €160.',
  },
  {
    q: 'How long does delivery take?',
    a: 'Dublin is 2 day delivery. The rest of Ireland is 4–6 days.',
  },
];

const productLd = buildProductLd({
  name: 'Business Cards Ireland',
  description:
    'Business card printing in Ireland. 85 × 55 mm on 350 gsm card. €35 for 100, €60 for 200, €75 for 300 and €160 for 1,000. 2 day delivery in Dublin, 4–6 days for the rest of Ireland.',
  image: `${SITE_URL}${HERO_IMAGE}`,
  url: PAGE_URL,
  price: '35.00',
});

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: pageFaqs.map(({ q, a }) => ({
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
    { '@type': 'ListItem', position: 2, name: 'Products', item: `${SITE_URL}/products` },
    { '@type': 'ListItem', position: 3, name: 'Business Cards', item: PAGE_URL },
  ],
};

export default function BusinessCardsIreland() {
  const title = 'Business Cards Ireland | 85 × 55 mm, 350 gsm | PrintNPack';
  const description =
    'Business card printing in Ireland. 85 × 55 mm on 350 gsm card. €35 for 100, €60 for 200, €75 for 300, €160 for 1,000. 2 day delivery in Dublin, 4–6 days for the rest of Ireland.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="business cards ireland, business card printing dublin, 350 gsm business cards, 85x55 business cards ireland"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={`${SITE_URL}${HERO_IMAGE}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${SITE_URL}${HERO_IMAGE}`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      </Head>

      <nav className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
            <li><Link href="/" className="hover:text-slate-700">Home</Link></li>
            <li>/</li>
            <li><Link href="/products" className="hover:text-slate-700">Products</Link></li>
            <li>/</li>
            <li className="text-slate-800 font-medium">Business Cards</li>
          </ol>
        </div>
      </nav>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BusinessCardConfigurator />
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Business card printing in Ireland</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Standard business cards printed at {BUSINESS_CARD_SIZE} on {BUSINESS_CARD_GSM} card. The size is set, so the quote only needs a quantity and a delivery area.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Dublin orders are quoted for 2 day delivery. Orders for the rest of Ireland are quoted for 4–6 days. Printed in Ashbourne and delivered across Ireland.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Prices and delivery</h2>
          <div className="overflow-hidden rounded-xl border border-slate-200">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 text-left text-slate-500">
                <tr>
                  <th className="px-4 py-3 font-medium">Quantity</th>
                  <th className="px-4 py-3 font-medium">Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr><td className="px-4 py-3">100</td><td className="px-4 py-3 font-semibold">€35</td></tr>
                <tr><td className="px-4 py-3">200</td><td className="px-4 py-3 font-semibold">€60</td></tr>
                <tr><td className="px-4 py-3">300</td><td className="px-4 py-3 font-semibold">€75</td></tr>
                <tr><td className="px-4 py-3">1,000</td><td className="px-4 py-3 font-semibold">€160</td></tr>
              </tbody>
            </table>
          </div>
          <ul className="mt-6 space-y-2 text-slate-600">
            <li>Size: {BUSINESS_CARD_SIZE}</li>
            <li>Stock: {BUSINESS_CARD_GSM}</li>
            <li>Dublin: 2 day delivery</li>
            <li>Rest of Ireland: 4–6 days</li>
          </ul>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Questions</h2>
          <div className="space-y-6">
            {pageFaqs.map((item) => (
              <div key={item.q}>
                <h3 className="font-semibold text-slate-900">{item.q}</h3>
                <p className="mt-1 text-slate-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedSeoLinks
        title="More print"
        links={[
          { href: '/premium-leaflets-ireland', label: 'Premium Leaflets', desc: 'Special material flyers' },
          { href: '/services/leaflets', label: 'Leaflets', desc: 'Flat leaflet printing' },
          { href: '/printing-ireland', label: 'Printing Services', desc: 'Print across Ireland' },
          { href: '/products', label: 'All Products', desc: 'Print and packaging catalogue' },
        ]}
      />
    </Layout>
  );
}
