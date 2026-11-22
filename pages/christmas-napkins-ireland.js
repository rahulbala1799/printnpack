import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout/Layout';
import PocketNapkinPriceTable from '../components/napkins/PocketNapkinPriceTable';
import RelatedSeoLinks from '../components/seo/RelatedSeoLinks';
import {
  POCKET_NAPKIN_DESIGNS,
  POCKET_NAPKIN_PATH,
  POCKET_NAPKIN_PRICE_ROWS,
  formatPocketEuro,
} from '../data/pocket-napkins';
import { SITE_URL } from '../lib/site';

const PAGE_URL = `${SITE_URL}/christmas-napkins-ireland`;
const fiveHundred = POCKET_NAPKIN_PRICE_ROWS.find((row) => row.qty === 500);
const TITLE = 'Christmas Napkins Ireland | Printed Pocket Napkins | Print n Pack';
const DESCRIPTION = `Christmas napkins printed as pocket napkins for restaurants and hotels in Ireland. Fork and knife fold, linen-feel. 500 are ${formatPocketEuro(fiveHundred.total)} ex VAT, 10% above cocktail napkins. Printed in Ashbourne.`;

export default function ChristmasNapkinsIreland() {
  return (
    <Layout>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="keywords" content="christmas napkins ireland, christmas pocket napkins, printed christmas napkins, restaurant christmas napkins, festive napkins ireland" />
        <link rel="canonical" href={PAGE_URL} />
        <link rel="alternate" hrefLang="en-ie" href={PAGE_URL} />
        <link rel="alternate" hrefLang="en-gb" href={`${SITE_URL}/christmas-napkins-uk`} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={`${SITE_URL}${POCKET_NAPKIN_DESIGNS[0].web}`} />
      </Head>
      <article className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1f6b45]">Christmas napkins</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-slate-950">Christmas pocket napkins, printed with your name</h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">
            These Christmas napkins are pocket napkins. The fold holds a fork and knife, and the print carries the restaurant name, pine and a stag or a bow. They are the same product as our <Link href={POCKET_NAPKIN_PATH} className="font-semibold text-[#1f6b45] underline">printed pocket napkins</Link>. The price is the cocktail napkin total plus 10%. 500 are {formatPocketEuro(fiveHundred.total)} ex VAT.
          </p>
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
          <h2 className="mt-12 text-2xl font-semibold text-slate-950">Christmas pocket napkin prices</h2>
          <p className="mt-2 max-w-3xl text-slate-600">Order total is the price, ex VAT. It is 10% above the 10 × 10 cm cocktail napkin at the same quantity.</p>
          <div className="mt-6">
            <PocketNapkinPriceTable />
          </div>
          <Link href={`${POCKET_NAPKIN_PATH}#quote-builder`} className="mt-8 inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white">
            Price a pocket napkin order
          </Link>
        </div>
      </article>
      <RelatedSeoLinks title="Related napkin pages" links={[
        { href: POCKET_NAPKIN_PATH, label: 'Pocket Napkins', desc: 'Full price list and quote, 10% above cocktail napkins' },
        { href: '/custom-printed-napkins', label: 'Custom Printed Napkins', desc: 'Other sizes, from €0.24' },
        { href: '/napkins-ireland', label: 'Napkins Ireland', desc: 'All napkin printing' },
      ]} />
    </Layout>
  );
}
