import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout/Layout';
import PocketNapkinPriceTable from '../components/napkins/PocketNapkinPriceTable';
import PocketNapkinQuote from '../components/napkins/PocketNapkinQuote';
import UkNapkinFacts from '../components/napkins/UkNapkinFacts';
import { UK_500_POCKET, formatNapkinMoney } from '../data/napkin-uk';
import { POCKET_NAPKIN_DESIGNS, POCKET_NAPKIN_MIN } from '../data/pocket-napkins';
import { SITE_URL } from '../lib/site';

const PAGE_URL = `${SITE_URL}/pocket-napkins-uk`;
const TITLE = 'Low MOQ Pocket Napkins UK | High Quality Linen-Feel Airlaid Napkins';
const DESCRIPTION = `High quality linen-feel airlaid pocket napkins for the UK. Low minimum of ${POCKET_NAPKIN_MIN}. The price is the cocktail napkin total plus 10%, in GBP. 500 are ${formatNapkinMoney(UK_500_POCKET, 'uk')} ex VAT. UK delivery is extra.`;

export default function PocketNapkinsUk() {
  const [imageIndex, setImageIndex] = useState(0);
  return (
    <Layout>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="keywords" content="pocket napkins uk, cutlery napkins uk, linen feel napkins uk, airlaid napkins uk, low moq napkins uk" />
        <link rel="canonical" href={PAGE_URL} />
        <link rel="alternate" hrefLang="en-gb" href={PAGE_URL} />
        <link rel="alternate" hrefLang="en-ie" href={`${SITE_URL}/pocket-napkins-ireland`} />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={PAGE_URL} />
      </Head>
      <article className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1f6b45]">Pocket napkins UK</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-slate-950">Low MOQ. High quality linen-feel airlaid pocket napkins</h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">
            A pocket napkin folds around a fork and knife. The minimum is {POCKET_NAPKIN_MIN}. The price is the 10 × 10 cm cocktail total plus 10%, in GBP, ex VAT.
            500 are {formatNapkinMoney(UK_500_POCKET, 'uk')}. UK delivery is extra, and the quote email says UK Delivery.
          </p>
          <p className="mt-3 text-sm text-slate-500">
            Euro prices are on <Link href="/pocket-napkins-ireland" className="font-semibold text-[#1f6b45] underline">pocket napkins Ireland</Link>.
          </p>
          <div className="mt-8">
            <UkNapkinFacts
              moq={POCKET_NAPKIN_MIN}
              sizes={['Pocket fold, priced from the 10 × 10 cm cocktail napkin']}
              priceNote={`500 pocket napkins are ${formatNapkinMoney(UK_500_POCKET, 'uk')} ex VAT. That is 10% above the cocktail napkin total.`}
            />
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {POCKET_NAPKIN_DESIGNS.map((item, index) => (
              <button key={item.id} type="button" onClick={() => setImageIndex(index)} className="overflow-hidden rounded-3xl bg-[#f7f4ee] text-left">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.web} alt={item.alt} width={1100} height={1100} className="aspect-square w-full object-cover" />
                <span className="block px-4 py-3 text-sm text-slate-700">
                  <span className="font-semibold text-slate-950">{item.name}. </span>{item.blurb}
                </span>
              </button>
            ))}
          </div>
          <div className="mt-10">
            <PocketNapkinQuote market="uk" imageIndex={imageIndex} onImageIndexChange={setImageIndex} />
          </div>
          <h2 className="mt-12 text-2xl font-semibold text-slate-950">Pocket napkin prices in GBP</h2>
          <div className="mt-4">
            <PocketNapkinPriceTable market="uk" />
          </div>
        </div>
      </article>
    </Layout>
  );
}
