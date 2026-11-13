import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout/Layout';
import PocketNapkinPriceTable from '../components/napkins/PocketNapkinPriceTable';
import PocketNapkinQuote from '../components/napkins/PocketNapkinQuote';
import RelatedSeoLinks from '../components/seo/RelatedSeoLinks';
import {
  POCKET_NAPKIN_DESIGNS,
  POCKET_NAPKIN_FAQS,
  POCKET_NAPKIN_MIN,
  POCKET_NAPKIN_PATH,
  POCKET_NAPKIN_PRICE_ROWS,
  formatPocketEuro,
} from '../data/pocket-napkins';
import { SITE_URL } from '../lib/site';
import { buildProductLd } from '../lib/schema';

const PAGE_URL = `${SITE_URL}${POCKET_NAPKIN_PATH}`;
const row = (qty) => POCKET_NAPKIN_PRICE_ROWS.find((item) => item.qty === qty);
const fiveHundred = row(500);
const twentyFive = row(25);
const oneThousand = row(1000);
const tenThousand = row(10000);

const TITLE = 'Pocket Napkins Ireland | Printed Cutlery Pocket Napkins | Print n Pack';
const DESCRIPTION = `Printed pocket napkins in Ireland for restaurants, hotels and Christmas tables. Folded to hold a fork and knife. 500 are ${formatPocketEuro(fiveHundred.total)} ex VAT, 10% above our cocktail napkin. From ${POCKET_NAPKIN_MIN}. Printed in Ashbourne.`;

const relatedLinks = [
  { href: '/custom-printed-napkins', label: 'Custom Printed Napkins', desc: 'Cocktail and larger linen-feel napkins, from €0.24' },
  { href: '/products/cocktail-napkins', label: 'Cocktail Napkins', desc: 'The 10 × 10 cm price that pocket napkins sit 10% above' },
  { href: '/napkins-ireland', label: 'Napkins Ireland', desc: 'Cocktail, linen-feel and wholesale napkins' },
];

export default function PocketNapkinsIreland() {
  const [imageIndex, setImageIndex] = useState(0);
  const image = POCKET_NAPKIN_DESIGNS[imageIndex];

  const productLd = buildProductLd({
    name: 'Printed Pocket Napkins',
    description: DESCRIPTION,
    image: `${SITE_URL}${POCKET_NAPKIN_DESIGNS[0].web}`,
    url: PAGE_URL,
    price: tenThousand.unit.toFixed(2),
    category: 'Hospitality Products',
  });

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Napkins Ireland', item: `${SITE_URL}/napkins-ireland` },
      { '@type': 'ListItem', position: 3, name: 'Pocket Napkins', item: PAGE_URL },
    ],
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: POCKET_NAPKIN_FAQS.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  return (
    <Layout>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="keywords" content="pocket napkins ireland, printed pocket napkins, cutlery pocket napkins, restaurant pocket napkins, christmas pocket napkins, napkin with fork and knife, branded pocket napkins ireland" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:type" content="product" />
        <meta property="og:image" content={`${SITE_URL}${POCKET_NAPKIN_DESIGNS[0].web}`} />
        {productLd ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }} /> : null}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      </Head>

      <nav className="border-b border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-gray-700">Home</Link></li>
            <li>/</li>
            <li><Link href="/napkins-ireland" className="hover:text-gray-700">Napkins Ireland</Link></li>
            <li>/</li>
            <li className="font-medium text-gray-800">Pocket Napkins</li>
          </ol>
        </div>
      </nav>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1f6b45]">Pocket napkins</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Printed pocket napkins for the place setting</h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              A pocket napkin is folded so a fork and knife sit in the pocket, with your name on the front. Restaurants, hotels and Christmas tables use them in place of a loose napkin. We print them in Ashbourne, Co. Meath, and ship across Ireland and Europe.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              The price is simple. Take the 10 × 10 cm cocktail napkin total for the same quantity and add 10%. {twentyFive.qty} pocket napkins are {formatPocketEuro(twentyFive.total)} ex VAT. 500 are {formatPocketEuro(fiveHundred.total)}. 1,000 are {formatPocketEuro(oneThousand.total)}.
            </p>
            <dl className="mt-6 grid grid-cols-3 gap-3">
              {[
                ['25', formatPocketEuro(twentyFive.total)],
                ['500', formatPocketEuro(fiveHundred.total)],
                ['1,000', formatPocketEuro(oneThousand.total)],
              ].map(([label, price]) => (
                <div key={label} className="rounded-2xl bg-slate-950 px-3 py-4 text-white">
                  <dt className="text-xs uppercase tracking-wide text-slate-300">{label} napkins</dt>
                  <dd className="mt-1 text-xl font-semibold">{price}</dd>
                </div>
              ))}
            </dl>
          </div>
          <button type="button" onClick={() => setImageIndex(0)} className="overflow-hidden rounded-3xl bg-[#f3efe6] text-left">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image.web} alt={image.alt} width={1100} height={1100} className="aspect-square w-full object-cover" />
          </button>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-[#f7f4ee] py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">Pocket napkin price list</h2>
          <p className="mt-3 max-w-3xl text-slate-600">
            Prices are ex VAT. The pocket napkin column is the amount to pay. It is always 10% more than the cocktail napkin total beside it. Full colour and 1 colour are the same price. Another quantity uses the same rule.
          </p>
          <div className="mt-8">
            <PocketNapkinPriceTable />
          </div>
          <div className="mt-8">
            <PocketNapkinQuote imageIndex={imageIndex} onImageIndexChange={setImageIndex} />
          </div>
        </div>
      </section>

      <section className="bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">Christmas prints on a pocket napkin</h2>
          <p className="mt-3 max-w-3xl text-slate-600">
            These are example prints for a Christmas service. Riverdale, Ivy Crest, The Belfry and Oakridge are sample names. Send your own logo and we set the proof before printing. Keep the name in the middle of the pocket so the edge of the fold does not cut it off.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {POCKET_NAPKIN_DESIGNS.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setImageIndex(index);
                  document.getElementById('quote-builder')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className={`overflow-hidden rounded-3xl bg-white text-left ring-1 ${index === imageIndex ? 'ring-[#1f6b45]' : 'ring-slate-200'}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.web} alt={item.alt} width={1100} height={1100} className="aspect-square w-full object-cover" />
                <span className="block px-5 py-4">
                  <span className="block text-lg font-semibold text-slate-950">{item.name}</span>
                  <span className="mt-1 block text-sm leading-relaxed text-slate-600">{item.blurb}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white py-12 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-2xl font-semibold text-slate-950">Who orders pocket napkins</h2>
            <p className="mt-3 leading-relaxed text-slate-600">
              Hotels set them on the Christmas lunch table. Restaurants use them for a named place setting. Pubs and cafés use them when the cutlery needs to stay with the napkin. The fold does the job of a cutlery sleeve, and the print does the job of the menu card logo.
            </p>
            <p className="mt-3 leading-relaxed text-slate-600">
              The napkin is linen-feel airlaid, the same cloth-like stock as our custom printed napkins. Usual print time is 3 to 5 working days after you approve the proof. Delivery across Ireland and Europe is confirmed on the quote.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-slate-950">Pocket napkin questions</h2>
            <div className="mt-4 space-y-3">
              {POCKET_NAPKIN_FAQS.map((faq) => (
                <details key={faq.q} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <summary className="cursor-pointer font-semibold text-slate-950">{faq.q}</summary>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <RelatedSeoLinks title="Related napkin pages" links={relatedLinks} />
    </Layout>
  );
}
