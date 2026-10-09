import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout/Layout';
import PrintedCoasterConfigurator from '../components/coasters/PrintedCoasterConfigurator';
import RelatedSeoLinks from '../components/seo/RelatedSeoLinks';
import { COASTER_BOARD, COASTER_IMAGES, PRINTED_COASTER_MIN } from '../data/coasters-options';
import { buildProductLd } from '../lib/schema';
import { SITE_URL } from '../lib/site';

const PAGE_URL = `${SITE_URL}/printed-coasters-ireland`;
const title = 'Printed Coasters Ireland | Round 9 × 9 cm, 8 Ply | PrintNPack';
const description = `Custom printed coasters in Ireland. Round 9 × 9 cm, ${COASTER_BOARD}, full colour on one or both sides, from ${PRINTED_COASTER_MIN}. Printed in Ashbourne.`;

const faqs = [
  {
    q: 'What size are the coasters?',
    a: 'Round, 9 × 9 cm. That is the only shape and the only size.',
  },
  {
    q: 'What are the coasters made from?',
    a: `${COASTER_BOARD} board. The print is full colour, on one side or both sides.`,
  },
  {
    q: 'Can you print a logo or a bar name?',
    a: 'Yes. Send the logo, wording or artwork and we will set it up and send a proof before printing.',
  },
  {
    q: 'What is the minimum order?',
    a: `From ${PRINTED_COASTER_MIN} coasters. Choose 100, 250, 500 or 1,000, or type your own number.`,
  },
  {
    q: 'Do you also print wedding coasters?',
    a: 'Yes. The same round 9 × 9 cm, 8 ply coasters can be printed with names, a date or a monogram for a wedding.',
  },
];

const productLd = buildProductLd({
  name: 'Printed Coasters Ireland',
  description,
  image: COASTER_IMAGES[0] ? `${SITE_URL}${COASTER_IMAGES[0].src}` : undefined,
  url: PAGE_URL,
  category: 'Print',
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

export default function PrintedCoastersIreland() {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="printed coasters ireland, custom coasters, beer mats, 8 ply coasters, round coasters, 9x9 coasters, logo coasters, branded coasters dublin, bar coasters" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={PAGE_URL} />
        {COASTER_IMAGES[0] && <meta property="og:image" content={`${SITE_URL}${COASTER_IMAGES[0].src}`} />}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      </Head>

      <nav className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
            <li><Link href="/" className="hover:text-slate-700">Home</Link></li>
            <li>/</li>
            <li><Link href="/products" className="hover:text-slate-700">Products</Link></li>
            <li>/</li>
            <li className="font-medium text-slate-800">Printed Coasters</li>
          </ol>
        </div>
      </nav>

      <section className="bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PrintedCoasterConfigurator />
        </div>
      </section>

      <section className="border-t border-slate-100 bg-slate-50 py-12 lg:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl">Printed coasters in Ireland</h2>
          <p className="leading-relaxed text-slate-600">
            A printed coaster is round, 9 × 9 cm, on {COASTER_BOARD} board, with your logo or a short line of type. Bars, cafés, hotels and events use them under a glass. We print them in Ashbourne, Co. Meath, and deliver across Ireland, with postage to the UK and the EU quoted on the order.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">Questions</h2>
          <div className="space-y-6">
            {faqs.map((item) => (
              <div key={item.q}>
                <h3 className="font-semibold text-slate-900">{item.q}</h3>
                <p className="mt-1 leading-relaxed text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedSeoLinks
        title="More print"
        links={[
          { href: '/wedding-coasters-ireland', label: 'Wedding Coasters', desc: 'Names, a date or a monogram' },
          { href: '/business-cards-ireland', label: 'Business Cards', desc: '85 × 55 mm on 350 gsm' },
          { href: '/products/printed-napkins', label: 'Printed Napkins', desc: 'Logo napkins for bars and cafés' },
          { href: '/products', label: 'All Products', desc: 'Print and packaging catalogue' },
        ]}
      />
    </Layout>
  );
}
