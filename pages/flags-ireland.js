import React from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { SITE_URL } from '../lib/site';
import { beachFlagFromPrice } from '../data/beach-flags';

const PAGE_URL = `${SITE_URL}/flags-ireland`;
const FROM_PRICE = beachFlagFromPrice().toFixed(2);

const faqs = [
  {
    q: 'What flags can I order in Ireland?',
    a: 'Two kinds. A beach flag is a tall outdoor flag, also called a feather flag, with a choice of pole and bag. A custom printed flag is made to your own size for a club, school or business, and the pole is not included.',
  },
  {
    q: 'How much do flags cost?',
    a: `Beach flags start from €${FROM_PRICE} ex VAT, with delivery to Ireland included. Custom printed flags are quoted from one flag.`,
  },
  {
    q: 'Do you deliver flags across Ireland?',
    a: 'Yes. PrintNPack prints in Ashbourne, Co. Meath and delivers to Dublin, Cork, Galway and every county.',
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

export default function FlagsIreland() {
  const title = 'Flags Ireland | Beach Flags and Custom Printed Flags | PrintNPack';
  const description =
    'Flag printing in Ireland. Beach flags and feather flags from €' +
    FROM_PRICE +
    ' ex VAT, and custom printed flags for clubs and businesses. Delivery from Ashbourne.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="flags Ireland, flag printing Ireland, beach flags Ireland, feather flags Ireland, custom printed flags Ireland" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={PAGE_URL} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      </Head>

      <nav className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-gray-700">Home</Link></li>
            <li>/</li>
            <li className="text-gray-800 font-medium">Flags</li>
          </ol>
        </div>
      </nav>

      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">Flags · Ireland</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">Flag printing in Ireland</h1>
          <p className="max-w-3xl text-lg text-gray-600 leading-relaxed">
            Outdoor beach flags and feather flags, or a custom flag made to your own size for a club, school or business.
            Printed in Ashbourne, Co. Meath, and delivered across Ireland.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose a flag</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/beach-flags-ireland" className="group rounded-2xl border border-gray-200 bg-white p-6 hover:border-blue-300 hover:shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 mb-2">Beach flags</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Feather, slanted, hollow, round, square and drop flags. Flag only, or with a pole and carry bag. From €{FROM_PRICE} ex VAT, delivery included.
              </p>
              <span className="text-blue-700 font-semibold text-sm">Build a beach flag →</span>
            </Link>
            <Link href="/custom-printed-flags-ireland" className="group overflow-hidden rounded-2xl border border-gray-200 bg-white hover:border-green-300 hover:shadow-lg">
              <div className="relative aspect-[16/7] bg-slate-100">
                <Image
                  src="/images/products/custom-printed-flags/custom-printed-flags-ireland-gaa-club.jpg"
                  alt="Custom printed flag for a sports club in Ireland"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-700 mb-2">Custom printed flags</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Your own size, for GAA clubs, businesses and events. Polyester or mesh. The pole is not included.
                </p>
                <span className="text-green-700 font-semibold text-sm">View custom flags →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Flag questions</h2>
          <dl className="space-y-5">
            {faqs.map((item) => (
              <div key={item.q}>
                <dt className="font-semibold text-gray-900">{item.q}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-gray-600">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </Layout>
  );
}
