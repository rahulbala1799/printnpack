import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../layout/Layout';
import RelatedSeoLinks from '../seo/RelatedSeoLinks';
import { SITE_URL } from '../../lib/site';
import { buildProductLd } from '../../lib/schema';
import { useQuoteCart } from '../../lib/quote-cart-context';
import PrintedBagasseConfigurator from './PrintedBagasseConfigurator';
import {
  PRINTED_BAGASSE_BOXES,
  PRINTED_BAGASSE_PATH,
  PRINTED_BAGASSE_PRINT,
  PRINTED_BAGASSE_QTYS,
  buildPrintedBagasseQuoteLine,
  printedBagassePath,
} from '../../data/printed-bagasse-boxes';

function euro(value) {
  return `€${Number(value).toFixed(2)}`;
}

export default function PrintedBagasseBoxPage({ box }) {
  const { addItem } = useQuoteCart();
  const photos = box.gallery?.length ? box.gallery : [{ src: box.image, alt: box.name }];
  const [shown, setShown] = useState(photos[0].src);

  useEffect(() => {
    setShown(photos[0].src);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [box.id]);
  const pageUrl = `${SITE_URL}${printedBagassePath(box)}`;
  const low = box.prices[box.prices.length - 1].toFixed(2);
  const high = box.prices[0].toFixed(2);
  const others = PRINTED_BAGASSE_BOXES.filter((item) => item.id !== box.id);

  const faqs = [
    {
      q: `How much is a printed ${box.short}?`,
      a: `${box.short} (${box.size}) is ${euro(box.prices[0])} each at 100 boxes and ${euro(box.prices[box.prices.length - 1])} each at 5,000, ex VAT. Print is a ${PRINTED_BAGASSE_PRINT}.`,
    },
    {
      q: `What is the ${box.short} used for?`,
      a: box.use + '.',
    },
    {
      q: 'What is the minimum order?',
      a: '100 boxes. Quantities are 100, 200, 500, 1,000, 2,000, 3,000, 4,000 and 5,000.',
    },
    {
      q: 'Do you deliver this box in Ireland?',
      a: 'Yes. Printed in Ashbourne, Co. Meath, and delivered across Ireland. Production is usually 7–10 business days after the artwork is approved.',
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
      { '@type': 'ListItem', position: 2, name: 'Burger Boxes Ireland', item: `${SITE_URL}/burger-boxes-ireland` },
      { '@type': 'ListItem', position: 3, name: 'Custom Printed Boxes', item: `${SITE_URL}${PRINTED_BAGASSE_PATH}` },
      { '@type': 'ListItem', position: 4, name: box.short, item: pageUrl },
    ],
  };

  const productLd = buildProductLd({
    name: box.name,
    description: box.description,
    image: `${SITE_URL}${box.image}`,
    url: pageUrl,
    lowPrice: low,
    highPrice: high,
    sku: box.catalogId,
    category: 'Food packaging',
    shipping: { handlingMin: 7, handlingMax: 10, transitMin: 1, transitMax: 3 },
  });

  return (
    <Layout>
      <Head>
        <title>{box.title}</title>
        <meta name="description" content={box.description} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={box.title} />
        <meta property="og:description" content={box.description} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={`${SITE_URL}${box.image}`} />
        <meta property="og:locale" content="en_IE" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={box.title} />
        <meta name="twitter:description" content={box.description} />
        <meta name="twitter:image" content={`${SITE_URL}${box.image}`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
        {productLd ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }} /> : null}
      </Head>

      <nav className="border-b border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-gray-700">Home</Link></li>
            <li>/</li>
            <li><Link href="/burger-boxes-ireland" className="hover:text-gray-700">Burger Boxes</Link></li>
            <li>/</li>
            <li><Link href={PRINTED_BAGASSE_PATH} className="hover:text-gray-700">Custom Printed</Link></li>
            <li>/</li>
            <li className="font-medium text-gray-800">{box.short}</li>
          </ol>
        </div>
      </nav>

      <section className="border-b border-gray-100 bg-white">
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-16">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-emerald-600">{box.size}</p>
            <h1 className="mb-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">{box.h1}</h1>
            <p className="mb-4 text-lg leading-relaxed text-gray-600">{box.lead}</p>
            <p className="mb-6 text-gray-600">
              {euro(high)} each at 100 boxes. {euro(low)} each at 5,000. Ex VAT. {PRINTED_BAGASSE_PRINT}.
            </p>
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-emerald-50">
              <Image src={shown} alt={photos.find((item) => item.src === shown)?.alt || box.name} fill className="object-cover" priority sizes="(max-width: 1024px) 100vw, 40vw" />
            </div>
            {photos.length > 1 && (
              <div className="mt-3 grid grid-cols-4 gap-2">
                {photos.map((item) => (
                  <button
                    key={item.src}
                    type="button"
                    onClick={() => setShown(item.src)}
                    className={`relative aspect-square overflow-hidden rounded-lg border bg-emerald-50 ${
                      shown === item.src ? 'border-emerald-600 ring-2 ring-emerald-200' : 'border-gray-200'
                    }`}
                    aria-label={item.alt}
                  >
                    <Image src={item.src} alt="" fill className="object-cover" sizes="120px" />
                  </button>
                ))}
              </div>
            )}
          </div>
          <div id="configure" className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="mb-4 text-lg font-bold text-gray-900">Price this box</h2>
            <PrintedBagasseConfigurator
              key={box.id}
              lockSize
              initial={{ sizeId: box.id }}
              onSubmit={(priced) => addItem(buildPrintedBagasseQuoteLine(null, priced))}
            />
            <div className="mt-5 border-t border-gray-100 pt-4">
              <p className="text-sm font-semibold text-gray-900">Other printed bagasse boxes</p>
              <ul className="mt-2 space-y-1.5">
                {others.map((item) => (
                  <li key={item.id}>
                    <Link href={printedBagassePath(item)} className="text-sm text-emerald-700 hover:underline">
                      {item.short}
                      <span className="text-gray-500"> · {euro(item.prices[0])} at 100</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {box.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="mb-6 leading-relaxed text-gray-600">{paragraph}</p>
          ))}
          <h2 className="mb-4 text-2xl font-bold text-gray-900">{box.short} prices</h2>
          <div className="overflow-hidden rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Quantity</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Each, ex VAT</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Batch</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {PRINTED_BAGASSE_QTYS.map((qty, index) => (
                  <tr key={qty}>
                    <td className="px-4 py-2 font-medium text-gray-900">{qty.toLocaleString('en-IE')}</td>
                    <td className="px-4 py-2 text-gray-700">{euro(box.prices[index])}</td>
                    <td className="px-4 py-2 text-gray-700">{euro(box.prices[index] * qty)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-100 bg-slate-50 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">Other printed bagasse sizes</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((item) => (
              <Link key={item.id} href={printedBagassePath(item)} className="rounded-xl border border-gray-200 bg-white p-4 hover:border-emerald-300">
                <p className="font-semibold text-gray-900">{item.short}</p>
                <p className="mt-1 text-sm text-gray-500">{item.size}</p>
                <p className="mt-2 text-sm text-gray-700">{euro(item.prices[0])} at 100</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">Questions about this box</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="group rounded-xl border border-gray-200 p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-gray-900">
                  {faq.q}
                  <span className="text-gray-400 group-open:rotate-180">▼</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <RelatedSeoLinks
        title="Related pages"
        links={[
          { href: PRINTED_BAGASSE_PATH, label: 'All printed bagasse boxes', desc: 'Eight sizes and the full price table' },
          { href: '/burger-boxes-ireland', label: 'Burger Boxes Ireland', desc: 'Plain and printed hub' },
          { href: '/plain-burger-boxes-ireland', label: 'Plain Burger Boxes', desc: 'Unprinted cases' },
          { href: '/plain-packaging?category=Bagasse+Meal+Box', label: 'Unprinted bagasse boxes', desc: 'Same shapes, sold by the case' },
          { href: '/burger-box-printing-dublin', label: 'Dublin delivery', desc: 'Printed boxes across Dublin' },
          { href: '/burger-box-faq-ireland', label: 'Burger Box FAQ', desc: 'Pricing and materials' },
        ]}
      />
    </Layout>
  );
}
