import React from 'react';
import Layout from '../layout/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { SITE_URL } from '../../lib/site';
import { buildProductLd } from '../../lib/schema';
import RelatedSeoLinks from '../seo/RelatedSeoLinks';
import { useQuoteCart } from '../../lib/quote-cart-context';
import { getQuoteCatalogItem } from '../../data/quote-modules';
import {
  ZIPPER_HUB_PATH,
  ZIPPER_NEIGHBOUR_LINKS,
  buildZipperWallQuoteLine,
  zipperFaqs,
  zipperFamily,
  zipperFromPrice,
  zipperRelatedLinks,
} from '../../data/zipper-walls';
import ZipperWallConfigurator from './ZipperWallConfigurator';

export default function ZipperWallProductPage({ familyId }) {
  const family = zipperFamily(familyId);
  const { addItem } = useQuoteCart();
  const catalogItem = getQuoteCatalogItem(family.id);
  const from = zipperFromPrice(family.id).toFixed(2);
  const faqs = zipperFaqs(family.id);
  const pageUrl = `${SITE_URL}${family.path}`;
  const description = `${family.lead} From €${from} ex VAT, delivery to Ireland included.`;

  const productLd = buildProductLd({
    name: family.name,
    description,
    url: pageUrl,
    price: from,
    sku: family.id,
    category: 'Banners, Stands and Frames',
  });
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
      { '@type': 'ListItem', position: 2, name: 'Zipper walls', item: `${SITE_URL}${ZIPPER_HUB_PATH}` },
      { '@type': 'ListItem', position: 3, name: family.name, item: pageUrl },
    ],
  };

  return (
    <Layout>
      <Head>
        <title>{family.title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={family.keywords} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:type" content="product" />
        <meta property="og:title" content={family.title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={pageUrl} />
        {productLd ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ ...productLd, alternateName: family.alternateNames }) }} /> : null}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      </Head>

      <nav className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-gray-700">Home</Link></li>
            <li>/</li>
            <li><Link href={ZIPPER_HUB_PATH} className="hover:text-gray-700">Zipper walls</Link></li>
            <li>/</li>
            <li className="text-gray-800 font-medium">{family.name}</li>
          </ol>
        </div>
      </nav>

      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">Zipper walls · Ireland</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                {family.h1}
              </h1>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">{family.lead}</p>
              <p className="text-gray-600 mb-4 leading-relaxed">{family.body}</p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                From €{from} ex VAT for a full set printed on the front, with delivery to Ireland included.
                The cloth is 210 gsm stretch, 90% polyamide and 10% spandex.
              </p>
              <p className="text-sm text-gray-500">
                This is not a{' '}
                <Link href="/pop-up-walls-ireland" className="text-blue-600 hover:underline">pop-up display stand</Link>
                {', a '}
                <Link href="/roll-up-banners-ireland" className="text-blue-600 hover:underline">roll-up banner</Link>
                {', or a rigid '}
                <Link href="/inhaker-stands-ireland" className="text-blue-600 hover:underline">exhibition wall</Link>.
                {family.id === 'curved-horizontal-zipper-walls-ireland' ? (
                  <>
                    {' '}The{' '}
                    <Link href="/curved-banner-stands-ireland" className="text-blue-600 hover:underline">curved banner stand</Link>
                    {' '}is a separate quote.
                  </>
                ) : null}
              </p>
            </div>
            <div id="configure" className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
              <h2 className="mb-4 text-lg font-bold text-gray-900">Build your {family.alternateNames[0].toLowerCase()}</h2>
              <ZipperWallConfigurator
                familyId={family.id}
                onSubmit={(priced) => addItem(buildZipperWallQuoteLine(catalogItem, priced))}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-slate-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Also known as</h2>
          <ul className="flex flex-wrap gap-2">
            {family.alternateNames.map((name) => (
              <li key={name} className="px-3 py-1.5 rounded-full bg-white border border-gray-200 text-sm text-gray-700">{name}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Sizes</h2>
          <p className="text-gray-600 mb-6 max-w-3xl">Width × height × depth. The full set is the printed cloth, the frame and a carry bag.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {family.sizes.map((size) => (
              <div key={size.id} className="rounded-xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900">{size.label}</h3>
                <p className="text-sm text-gray-600 mt-1">{size.depthCm} cm deep</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-gray-600 leading-relaxed">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Frame, cloth and the carry bag</h2>
          <p>{family.transport}</p>
          <p>
            Choose <strong>Full set</strong> when you need the wall complete. Choose <strong>Fabric only</strong> when
            the frame is already yours and you need a new print in that size.
          </p>
          <p>
            The price includes delivery to Ireland and is ex VAT. Each wall includes its own delivery.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Questions</h2>
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
        title="Other zipper walls and stands"
        links={[
          ...zipperRelatedLinks(family.id),
          ...ZIPPER_NEIGHBOUR_LINKS,
        ]}
      />
    </Layout>
  );
}
