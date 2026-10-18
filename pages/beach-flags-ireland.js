import React from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { SITE_URL } from '../lib/site';
import { buildProductLd } from '../lib/schema';
import RelatedSeoLinks from '../components/seo/RelatedSeoLinks';
import { useQuoteCart } from '../lib/quote-cart-context';
import { getQuoteCatalogItem } from '../data/quote-modules';
import {
  BEACH_FLAG_PATH,
  BEACH_SHAPES,
  beachFlagFromPrice,
  buildBeachFlagQuoteLine,
} from '../data/beach-flags';
import BeachFlagConfigurator from '../components/beach-flags/BeachFlagConfigurator';

const PAGE_URL = `${SITE_URL}${BEACH_FLAG_PATH}`;
const FROM_PRICE = beachFlagFromPrice().toFixed(2);

const ALTERNATE_NAMES = [
  'Beach flag',
  'Feather flag',
  'Straight beach flag',
  'Slanted beach flag',
  'Hollow beach flag',
  'Round beach flag',
  'Square flag',
  'Drop flag',
  'Outdoor feather flag',
  'Promotional beach flag',
];

const faqs = [
  {
    q: 'What is a beach flag?',
    a: 'A beach flag is a tall outdoor flag on a flexible pole. People also call the straight shape a feather flag. PrintNPack also prints slanted, hollow, round, square and drop flags. The flag can be ordered on its own, with the pole, or with the pole and a carry bag.',
  },
  {
    q: 'How much does a beach flag cost in Ireland?',
    a: `The smallest square flag, printed on its own, is €${FROM_PRICE} ex VAT with delivery to Ireland included. A straight S flag, 67 × 210 cm, is a little more. Adding the pole, or the pole and bag, costs more and uses a higher delivery rate. The price on this page updates as you choose.`,
  },
  {
    q: 'Does the price include the pole?',
    a: 'Only if you choose flag and pole, or flag, pole and bag. Flag only is the printed flag. The sleeve is white and sits on the left.',
  },
  {
    q: 'What is the difference between 110 gsm and longlife?',
    a: '110 gsm is the standard flag cloth. 115 gsm longlife is a tougher outdoor cloth. On this flag they are the same price.',
  },
  {
    q: 'Do you deliver beach flags in Ireland?',
    a: 'Yes. PrintNPack is in Ashbourne, Co. Meath. The price includes one delivery to Ireland and is ex VAT. Extra flags in the same order share that delivery.',
  },
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
    { '@type': 'ListItem', position: 2, name: 'Flags', item: `${SITE_URL}/flags-ireland` },
    { '@type': 'ListItem', position: 3, name: 'Beach flags', item: PAGE_URL },
  ],
};

const productLd = buildProductLd({
  name: 'Beach Flags Ireland',
  description: `Beach flags, feather flags and drop flags in Ireland. Flag only, or with a pole and bag. From €${FROM_PRICE} ex VAT, delivery included.`,
  url: PAGE_URL,
  price: FROM_PRICE,
  sku: 'beach-flags-ireland',
  category: 'Flags',
});

export default function BeachFlagsIreland() {
  const { addItem } = useQuoteCart();
  const catalogItem = getQuoteCatalogItem('beach-flags-ireland');
  const title = 'Beach Flags Ireland | Feather, Drop and Square Flags | PrintNPack';
  const description =
    'Beach flags and feather flags in Ireland from €' +
    FROM_PRICE +
    ' ex VAT, delivery included. Straight, slanted, hollow, round, square and drop flags. Flag only, or with a pole and bag.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="beach flags Ireland, feather flag Ireland, drop flag Ireland, square flag, outdoor beach flag, promotional feather flag, beach flag pole"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={PAGE_URL} />
        {productLd ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ ...productLd, alternateName: ALTERNATE_NAMES }) }} /> : null}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      </Head>

      <nav className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-gray-700">Home</Link></li>
            <li>/</li>
            <li><Link href="/flags-ireland" className="hover:text-gray-700">Flags</Link></li>
            <li>/</li>
            <li className="text-gray-800 font-medium">Beach flags</li>
          </ol>
        </div>
      </nav>

      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">Flags · Ireland</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                Beach flags in Ireland
              </h1>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                A <strong>beach flag</strong> is a tall outdoor flag. The straight shape is also called a <strong>feather flag</strong>.
                Choose slanted, hollow, round, square or a drop flag.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Order the printed flag on its own, with the pole, or with the pole and a carry bag.
                Cloth is 110 gsm or 115 gsm longlife, at the same price. The sleeve is white and sits on the left.
                From €{FROM_PRICE} ex VAT for the smallest square flag, with one delivery to Ireland included.
              </p>
              <p className="text-sm text-gray-500">
                For a club or company flag in your own size, without this pole system, see{' '}
                <Link href="/custom-printed-flags-ireland" className="text-blue-600 hover:underline">custom printed flags</Link>.
              </p>
            </div>
            <div id="configure" className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
              <h2 className="mb-4 text-lg font-bold text-gray-900">Build your beach flag</h2>
              <BeachFlagConfigurator
                onSubmit={(priced) => addItem(buildBeachFlagQuoteLine(catalogItem, priced))}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-slate-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Also known as</h2>
          <ul className="flex flex-wrap gap-2">
            {ALTERNATE_NAMES.map((name) => (
              <li key={name} className="px-3 py-1.5 rounded-full bg-white border border-gray-200 text-sm text-gray-700">{name}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Beach flag shapes</h2>
          <p className="text-gray-600 mb-6 max-w-3xl">Straight, slanted, hollow and round share the same three heights. Square and drop flags have their own sizes. The shape does not change the price.</p>
          <div className="grid sm:grid-cols-3 gap-4">
            {BEACH_SHAPES.map((shape) => (
              <div key={shape.id} className="rounded-xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900">{shape.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Beach flag questions</h2>
          <dl className="space-y-5">
            {faqs.map((item) => (
              <div key={item.q}>
                <dt className="font-semibold text-gray-900">{item.q}</dt>
                <dd className="mt-1 text-gray-600 text-sm leading-relaxed">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <RelatedSeoLinks
        title="Related flags and outdoor print"
        links={[
          { href: '/flags-ireland', label: 'Flags', desc: 'Beach flags and custom flags' },
          { href: '/custom-printed-flags-ireland', label: 'Custom printed flags', desc: 'Your own size, no beach-flag pole' },
          { href: '/banners-ireland', label: 'Banner printing Ireland', desc: 'PVC, roll-ups and displays' },
        ]}
      />
    </Layout>
  );
}
