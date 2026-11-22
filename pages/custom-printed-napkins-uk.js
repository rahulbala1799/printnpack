import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout/Layout';
import PrintedNapkinConfigurator from '../components/napkins/PrintedNapkinConfigurator';
import UkNapkinFacts from '../components/napkins/UkNapkinFacts';
import {
  UK_500_COCKTAIL,
  UK_500_STANDARD,
  UK_NAPKIN_PAGES,
  UK_PRINTED_FAQS,
  UK_PRINTED_SIZES,
  formatNapkinMoney,
} from '../data/napkin-uk';
import { LINEN_NAPKIN_FROM, PRINTED_NAPKIN_MIN, PRINTED_NAPKIN_PRICE_ROWS } from '../data/printed-napkins';
import { SITE_URL } from '../lib/site';

const PATH = '/custom-printed-napkins-uk';
const PAGE_URL = `${SITE_URL}${PATH}`;
const gbp = (value) => formatNapkinMoney(value, 'uk');
const TITLE = 'Low MOQ Printed Napkins UK | High Quality Linen-Feel Airlaid Napkins';
const DESCRIPTION = `High quality linen-feel airlaid napkins for the UK. Low minimum of ${PRINTED_NAPKIN_MIN}, not 1,000. Five sizes. From £${LINEN_NAPKIN_FROM} ex VAT. 500 are ${gbp(UK_500_STANDARD)}. UK delivery is extra. Production is 3 to 5 working days after the proof; delivery time is separate.`;

const productLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'High quality linen-feel airlaid napkins',
  description: DESCRIPTION,
  url: PAGE_URL,
  brand: { '@type': 'Brand', name: 'PrintNPack' },
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'GBP',
    lowPrice: LINEN_NAPKIN_FROM,
    highPrice: '1.31',
    offerCount: String(PRINTED_NAPKIN_PRICE_ROWS.length),
    url: PAGE_URL,
    shippingDetails: {
      '@type': 'OfferShippingDetails',
      shippingRate: { '@type': 'MonetaryAmount', value: '21.00', currency: 'GBP' },
      shippingDestination: { '@type': 'DefinedRegion', addressCountry: 'GB' },
      deliveryTime: {
        '@type': 'ShippingDeliveryTime',
        handlingTime: { '@type': 'QuantitativeValue', minValue: 3, maxValue: 5, unitCode: 'DAY' },
        transitTime: { '@type': 'QuantitativeValue', minValue: 1, maxValue: 5, unitCode: 'DAY' },
      },
    },
  },
};

export default function CustomPrintedNapkinsUk() {
  return (
    <Layout>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="keywords" content="printed napkins uk, linen feel napkins uk, airlaid napkins uk, low moq napkins, personalised napkins uk, custom napkins uk, napkin printing uk" />
        <link rel="canonical" href={PAGE_URL} />
        <link rel="alternate" hrefLang="en-gb" href={PAGE_URL} />
        <link rel="alternate" hrefLang="en-ie" href={`${SITE_URL}/custom-printed-napkins`} />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={PAGE_URL} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: UK_PRINTED_FAQS.map(({ q, a }) => ({
            '@type': 'Question',
            name: q,
            acceptedAnswer: { '@type': 'Answer', text: a },
          })),
        }) }} />
      </Head>
      <article className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Napkins UK</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-slate-950">Low MOQ. High quality linen-feel airlaid napkins</h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">
            Printed napkins for UK restaurants, cafés, hotels and events. The minimum is {PRINTED_NAPKIN_MIN} napkins, including smaller bespoke orders. It is not 1,000.
            Sizes are {UK_PRINTED_SIZES.join(', ')}. Indicative prices are in GBP, from £{LINEN_NAPKIN_FROM} ex VAT.
            500 napkins are {gbp(UK_500_STANDARD)} for 10 × 20 cm and larger, or {gbp(UK_500_COCKTAIL)} for the 10 × 10 cm cocktail size.
            UK delivery is extra. Production is 3 to 5 working days after you approve the proof. Delivery time starts after that.
          </p>
          <p className="mt-3 text-sm text-slate-500">
            Ireland and euro prices are on <Link href="/custom-printed-napkins" className="font-semibold text-blue-700 underline">the Ireland napkin page</Link>.
          </p>
          <div className="mt-8">
            <UkNapkinFacts
              moq={PRINTED_NAPKIN_MIN}
              sizes={UK_PRINTED_SIZES}
              priceNote={`500 napkins are ${gbp(UK_500_STANDARD)} ex VAT for 10 × 20 cm and larger, or ${gbp(UK_500_COCKTAIL)} for cocktail napkins. UK delivery is extra.`}
            />
          </div>
          <div className="mt-12">
            <PrintedNapkinConfigurator
              market="uk"
              titleTag="h2"
              eyebrow="GBP quote"
              heading="Build a UK napkin quote"
              lead="Choose a size and a quantity. The price is the same rate as our euro list, shown in pounds, ex VAT. Add it to the quote and the email is marked UK Delivery."
            />
          </div>
          <h2 className="mt-12 text-2xl font-semibold text-slate-950">Order totals in GBP, ex VAT</h2>
          <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200">
            <table className="min-w-full text-sm">
              <thead className="bg-slate-50 text-left">
                <tr>
                  <th className="px-4 py-3 font-semibold">Quantity</th>
                  <th className="px-4 py-3 font-semibold">10 × 20 cm and larger</th>
                  <th className="px-4 py-3 font-semibold">10 × 10 cm cocktail</th>
                </tr>
              </thead>
              <tbody>
                {PRINTED_NAPKIN_PRICE_ROWS.map((row) => (
                  <tr key={row.qty} className="border-t border-slate-200">
                    <td className="px-4 py-3 font-medium">{row.qty.toLocaleString('en-GB')}</td>
                    <td className="px-4 py-3">{gbp(row.standardTotal)} ({gbp(row.standardUnit)} each)</td>
                    <td className="px-4 py-3">{gbp(row.cocktailTotal)} ({gbp(row.cocktailUnit)} each)</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h2 className="mt-12 text-2xl font-semibold text-slate-950">Questions</h2>
          <div className="mt-4 space-y-3">
            {UK_PRINTED_FAQS.map((faq) => (
              <details key={faq.q} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <summary className="cursor-pointer font-semibold text-slate-900">{faq.q}</summary>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{faq.a}</p>
              </details>
            ))}
          </div>
          <h2 className="mt-12 text-xl font-semibold text-slate-950">Other napkin pages, in GBP</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {UK_NAPKIN_PAGES.filter((page) => page.path !== PATH).map((page) => (
              <li key={page.path}>
                <Link href={page.path} className="block rounded-xl border border-slate-200 px-4 py-3 hover:border-slate-400">
                  <span className="font-semibold text-slate-950">{page.title}</span>
                  <span className="mt-1 block text-sm text-slate-600">{page.desc}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </Layout>
  );
}
