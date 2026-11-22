import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout/Layout';
import UkNapkinFacts from '../components/napkins/UkNapkinFacts';
import {
  UK_500_COCKTAIL,
  UK_500_POCKET,
  UK_500_STANDARD,
  UK_NAPKIN_PAGES,
  UK_PRINTED_SIZES,
  formatNapkinMoney,
} from '../data/napkin-uk';
import { LINEN_NAPKIN_FROM, PRINTED_NAPKIN_MIN } from '../data/printed-napkins';
import { SITE_URL } from '../lib/site';

const PAGE_URL = `${SITE_URL}/napkins-uk`;
const gbp = (value) => formatNapkinMoney(value, 'uk');
const TITLE = 'Low MOQ Napkins UK | High Quality Linen-Feel Airlaid Napkins';
const DESCRIPTION = `High quality linen-feel airlaid napkins for the UK. Low minimum, from ${PRINTED_NAPKIN_MIN}. Prices in GBP. UK delivery charges, production time and delivery time are on each page.`;

export default function NapkinsUk() {
  return (
    <Layout>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="keywords" content="napkins uk, linen feel napkins uk, airlaid napkins uk, low moq napkins, personalised napkins uk, printed napkins uk" />
        <link rel="canonical" href={PAGE_URL} />
        <link rel="alternate" hrefLang="en-gb" href={PAGE_URL} />
        <link rel="alternate" hrefLang="en-ie" href={`${SITE_URL}/napkins-ireland`} />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={PAGE_URL} />
      </Head>
      <article className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Napkins UK</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-slate-950">Low MOQ. High quality linen-feel airlaid napkins</h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">
            Every personalised napkin page for UK delivery is in GBP. The minimum on printed napkins is {PRINTED_NAPKIN_MIN}, not 1,000.
            From £{LINEN_NAPKIN_FROM} ex VAT. 500 linen-feel napkins are {gbp(UK_500_STANDARD)}. 500 cocktail napkins are {gbp(UK_500_COCKTAIL)}. 500 pocket napkins are {gbp(UK_500_POCKET)}.
            UK delivery is extra. A quote sent from these pages is emailed as UK Delivery.
          </p>
          <p className="mt-3 text-sm text-slate-500">
            Euro prices for Ireland are on <Link href="/napkins-ireland" className="font-semibold text-blue-700 underline">Napkins Ireland</Link>.
          </p>
          <div className="mt-8 max-w-3xl">
            <UkNapkinFacts
              moq={PRINTED_NAPKIN_MIN}
              sizes={UK_PRINTED_SIZES}
              priceNote="Cocktail napkins start at 50. Wedding napkins start at 50. Pocket and printed napkins start at 25."
            />
          </div>
          <h2 className="mt-12 text-2xl font-semibold text-slate-950">Napkin pages</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {UK_NAPKIN_PAGES.filter((page) => page.path !== '/napkins-uk').map((page) => (
              <li key={page.path}>
                <Link href={page.path} className="block rounded-xl border border-slate-200 px-4 py-4 hover:border-slate-400">
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
