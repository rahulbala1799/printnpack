import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout/Layout';
import PocketNapkinPriceTable from '../components/napkins/PocketNapkinPriceTable';
import UkNapkinFacts from '../components/napkins/UkNapkinFacts';
import { UK_500_POCKET, formatNapkinMoney } from '../data/napkin-uk';
import { POCKET_NAPKIN_DESIGNS, POCKET_NAPKIN_MIN } from '../data/pocket-napkins';
import { SITE_URL } from '../lib/site';

const PAGE_URL = `${SITE_URL}/christmas-napkins-uk`;
const TITLE = 'Low MOQ Christmas Napkins UK | High Quality Linen-Feel Airlaid Napkins';
const DESCRIPTION = `Christmas pocket napkins for UK restaurants and hotels. High quality linen-feel airlaid, low minimum of ${POCKET_NAPKIN_MIN}. 500 are ${formatNapkinMoney(UK_500_POCKET, 'uk')} ex VAT. Prices in GBP. UK delivery is extra.`;

export default function ChristmasNapkinsUk() {
  return (
    <Layout>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="keywords" content="christmas napkins uk, festive napkins uk, pocket napkins uk, linen feel napkins uk, airlaid napkins uk, low moq napkins" />
        <link rel="canonical" href={PAGE_URL} />
        <link rel="alternate" hrefLang="en-gb" href={PAGE_URL} />
        <link rel="alternate" hrefLang="en-ie" href={`${SITE_URL}/christmas-napkins-ireland`} />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={`${SITE_URL}${POCKET_NAPKIN_DESIGNS[0].web}`} />
      </Head>
      <article className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1f6b45]">Christmas napkins UK</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-slate-950">Low MOQ. High quality linen-feel airlaid Christmas napkins</h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">
            These Christmas napkins are pocket napkins. The fold holds a fork and knife. The minimum is {POCKET_NAPKIN_MIN}.
            The price is the cocktail napkin total plus 10%, in GBP. 500 are {formatNapkinMoney(UK_500_POCKET, 'uk')} ex VAT. UK delivery is extra.
          </p>
          <div className="mt-8">
            <UkNapkinFacts
              moq={POCKET_NAPKIN_MIN}
              sizes={['Christmas pocket fold']}
              priceNote={`Same GBP price as pocket napkins. 500 are ${formatNapkinMoney(UK_500_POCKET, 'uk')} ex VAT.`}
            />
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {POCKET_NAPKIN_DESIGNS.map((item) => (
              <figure key={item.id} className="overflow-hidden rounded-3xl bg-[#f7f4ee]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.web} alt={item.alt} width={1100} height={1100} className="aspect-square w-full object-cover" />
                <figcaption className="px-4 py-3 text-sm text-slate-700">
                  <span className="font-semibold text-slate-950">{item.name}. </span>{item.blurb}
                </figcaption>
              </figure>
            ))}
          </div>
          <h2 className="mt-12 text-2xl font-semibold text-slate-950">Christmas pocket napkin prices in GBP</h2>
          <div className="mt-6">
            <PocketNapkinPriceTable market="uk" />
          </div>
          <Link href="/pocket-napkins-uk#quote-builder" className="mt-8 inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white">
            Price a UK pocket napkin order
          </Link>
        </div>
      </article>
    </Layout>
  );
}
