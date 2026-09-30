import React from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_URL } from '../lib/site';
import { buildProductLd } from '../lib/schema';
import RelatedSeoLinks from '../components/seo/RelatedSeoLinks';
import { useQuoteCart } from '../lib/quote-cart-context';

const PAGE_PATH = '/custom-table-covers-ireland';
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const HERO_IMAGE = '/images/table-covers/custom-table-cover-ireland.jpg';

const ALTERNATE_NAMES = [
  'Printed table cover',
  'Exhibition table throw',
  'Fitted table cover',
  'Trade show table cover',
  'Branded table cloth',
  'Stretch table cover',
  'Conference table cover',
  'Event table throw',
];

const COUNTIES = [
  'Carlow', 'Cavan', 'Clare', 'Cork', 'Donegal', 'Dublin', 'Galway', 'Kerry',
  'Kildare', 'Kilkenny', 'Laois', 'Leitrim', 'Limerick', 'Longford', 'Louth',
  'Mayo', 'Meath', 'Monaghan', 'Offaly', 'Roscommon', 'Sligo', 'Tipperary',
  'Waterford', 'Westmeath', 'Wexford', 'Wicklow',
];

const sizes = [
  { size: '1.2 × 0.6 m', use: 'Small display or registration table' },
  { size: '1.8 × 0.75 m', use: 'Standard 6 ft exhibition table' },
  { size: '2.4 × 0.75 m', use: '8 ft trade-show table' },
  { size: '3 × 1.5 m', use: 'Wide branded front for a larger stand' },
  { size: '6 × 1.5 m', use: 'Maximum length, full 1.5 m drop' },
];

const deliveryAreas = [
  { city: 'Dublin', detail: 'Printed table throws for RDS, Convention Centre Dublin, hotels and city exhibitions. Delivery across Dublin city and county.' },
  { city: 'Cork & Munster', detail: 'Exhibition and conference covers for Cork, Limerick, Kerry, Waterford, Clare and Tipperary.' },
  { city: 'Galway & Connacht', detail: 'Event and trade-stand covers for Galway, Mayo, Sligo, Roscommon and Leitrim.' },
  { city: 'Meath & Leinster', detail: 'Collection from Ashbourne, plus delivery across Meath, Kildare, Wicklow, Louth and the rest of Leinster.' },
  { city: 'Ulster counties', detail: 'Donegal, Cavan and Monaghan — same print run, delivered from Ashbourne.' },
  { city: 'Every county', detail: 'One quote covers the Republic of Ireland. Pick a standard size or enter your own, up to 1.5 m wide and 6 m long.' },
];

const faqs = [
  {
    q: 'Where can I order custom table covers in Ireland?',
    a: 'PrintNPack prints custom table covers in Ashbourne, Co. Meath and delivers to every county in Ireland, including Dublin, Cork, Galway, Limerick and Waterford. Collection is available from the Ashbourne unit.',
  },
  {
    q: 'Do you supply printed table covers in Dublin?',
    a: 'Yes. Dublin exhibitions, hotel conferences and pop-up stands can order a fitted table throw and have it delivered across the city and county. The same sizes are available for Cork, Galway and the rest of Ireland.',
  },
  {
    q: 'What sizes of custom table covers can you print?',
    a: 'Standard finished sizes are 1.2 × 0.6 m, 1.8 × 0.75 m, 2.4 × 0.75 m, 3 × 1.5 m and 6 × 1.5 m. For any other table, choose Custom and enter width and length. Width can be up to 1.5 m. Length can be up to 6 m.',
  },
  {
    q: 'Can I enter my own measurements instead of a standard size?',
    a: 'Yes. The quote uses one option: a listed size, or your own width and length. Choosing a standard size clears the measurement boxes so the order is not mixed.',
  },
  {
    q: 'What is an exhibition table throw?',
    a: 'A table throw is a fitted printed cover that wraps the front and sides of an exhibition or conference table, with your logo and artwork on the cloth. It is also called a fitted table cover, stretch table cover or branded table cloth.',
  },
  {
    q: 'Can I order one table cover?',
    a: 'Yes. There is no minimum. Add the quantity in the quote builder and we confirm the price before anything is printed.',
  },
  {
    q: 'Do you deliver table covers to Cork, Galway and Limerick?',
    a: 'Yes. We deliver printed table covers to Cork, Galway, Limerick, Waterford and every other county from Ashbourne, Co. Meath.',
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
    { '@type': 'ListItem', position: 2, name: 'Banners Ireland', item: `${SITE_URL}/banners-ireland` },
    { '@type': 'ListItem', position: 3, name: 'Custom Table Covers Ireland', item: PAGE_URL },
  ],
};

const productLd = {
  ...buildProductLd({
    name: 'Custom Table Covers Ireland',
    description:
      'Custom printed table covers and exhibition table throws for events across Ireland. Standard sizes or your own, up to 1.5 m wide and 6 m long. Delivered to every county from Ashbourne.',
    image: `${SITE_URL}${HERO_IMAGE}`,
    url: PAGE_URL,
    sku: 'custom-table-covers-ireland',
    category: 'Banners, Stands and Frames',
  }),
  alternateName: ALTERNATE_NAMES,
  areaServed: COUNTIES.map((name) => ({
    '@type': 'AdministrativeArea',
    name: `County ${name}, Ireland`,
  })),
};

const webPageLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Custom Table Covers Ireland | Printed Exhibition Throws',
  description:
    'Printed table covers and exhibition throws in Ireland. Standard sizes or custom up to 1.5 m wide and 6 m long. Dublin, Cork, Galway and every county.',
  url: PAGE_URL,
  inLanguage: 'en-IE',
  isPartOf: { '@type': 'WebSite', name: 'PrintNPack Ireland', url: SITE_URL },
  about: { '@type': 'Thing', name: 'Custom table covers Ireland' },
  dateModified: '2026-09-30',
};

export default function CustomTableCoversIreland() {
  const { openBuilder } = useQuoteCart();
  const title = 'Custom Table Covers Ireland | Printed Exhibition Throws | PrintNPack';
  const description =
    'Printed table covers and exhibition throws in Ireland. Standard sizes or custom up to 1.5 m wide and 6 m long. Dublin, Cork, Galway and every county.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="custom table covers Ireland, printed table covers Ireland, exhibition table covers, table throws Ireland, fitted table covers, trade show table covers, branded table cloths Ireland, stretch table covers, conference table covers Dublin, table covers Cork, table covers Galway"
        />
        <meta name="author" content="PrintNPack Ireland" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="product" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:site_name" content="PrintNPack Ireland" />
        <meta property="og:locale" content="en_IE" />
        <meta property="og:image" content={`${SITE_URL}${HERO_IMAGE}`} />
        <meta property="og:image:alt" content="Custom printed exhibition table cover Ireland" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${SITE_URL}${HERO_IMAGE}`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageLd) }} />
      </Head>

      <nav className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-gray-700">Home</Link></li>
            <li>/</li>
            <li><Link href="/banners-ireland" className="hover:text-gray-700">Banners</Link></li>
            <li>/</li>
            <li className="text-gray-800 font-medium">Custom Table Covers</li>
          </ol>
        </div>
      </nav>

      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">Exhibitions and events · all of Ireland</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                Custom Table Covers Ireland
              </h1>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                A printed fitted cover for exhibition, conference and event tables. Your logo across the front,
                finished to the size of the table. Also called a <strong>table throw</strong>,{' '}
                <strong>fitted table cover</strong> or <strong>branded table cloth</strong>.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Pick a standard size, or enter your own. Width up to 1.5 m, length up to 6 m.
                Printed in Ashbourne and delivered to Dublin, Cork, Galway, Limerick and every county.
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => openBuilder('custom-table-covers')}
                  className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
                >
                  Build a quote
                </button>
                <Link
                  href="/banners-ireland"
                  className="inline-flex items-center gap-2 bg-white text-gray-800 font-semibold px-6 py-3 rounded-xl border border-gray-300 hover:border-gray-400 transition-colors"
                >
                  Banner printing Ireland
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-slate-100">
              <Image
                src={HERO_IMAGE}
                alt="Custom printed table cover Ireland — fitted exhibition throw on a branded event table"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-slate-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Also known as</h2>
          <p className="text-gray-600 text-sm mb-4 max-w-3xl">
            These are the names Irish exhibitors use for the same printed table cover.
          </p>
          <ul className="flex flex-wrap gap-2">
            {ALTERNATE_NAMES.map((name) => (
              <li key={name} className="px-3 py-1.5 rounded-full bg-white border border-gray-200 text-sm text-gray-700">
                {name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Sizes</h2>
          <p className="text-gray-600 mb-6 max-w-2xl">
            Finished cover sizes. For any other table, choose Custom in the quote and enter width and length.
            Use a listed size or your own measurements, one at a time.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sizes.map((row) => (
              <div key={row.size} className="rounded-xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900">{row.size}</h3>
                <p className="text-sm text-gray-600 mt-1">{row.use}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-gray-500">Custom limit: width up to 1.5 m, length up to 6 m.</p>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Printed table covers for Irish exhibitions</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              A custom table cover is the cloth on the front of a stand: the name, the logo, and a short line
              people can read from the aisle. Clubs, publishers, schools and trade stands use the same product
              at the RDS, hotel conferences, county shows and one-day pop-ups.
            </p>
            <p>
              Standard covers suit a 6 ft or 8 ft table. A long run, up to 6 m, covers a joined row.
              The front drop stays within 1.5 m, which is the widest side we print on this product.
            </p>
            <p>
              Pair it with a{' '}
              <Link href="/roll-up-banners-ireland" className="text-blue-600 hover:underline">roll-up banner</Link>
              {' '}or a{' '}
              <Link href="/fabric-banner-stands-ireland" className="text-blue-600 hover:underline">fabric banner stand</Link>
              {' '}when the stand needs a wall as well as a branded table.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Table covers across Ireland</h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Printed in Ashbourne, Co. Meath. Delivered to all 26 counties, with collection if you are nearby.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {deliveryAreas.map(({ city, detail }) => (
              <div key={city} className="rounded-xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900">{city}</h3>
                <p className="text-sm text-gray-600 mt-1 leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
          <ul className="mt-8 flex flex-wrap gap-2">
            {COUNTIES.map((county) => (
              <li key={county} className="px-3 py-1 rounded-full bg-slate-50 border border-gray-200 text-sm text-gray-700">
                {county}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Custom table cover questions</h2>
          <dl className="space-y-5">
            {faqs.map((item) => (
              <div key={item.q}>
                <dt className="font-semibold text-gray-900">{item.q}</dt>
                <dd className="mt-1 text-gray-600 text-sm leading-relaxed">{item.a}</dd>
              </div>
            ))}
          </dl>
          <button
            type="button"
            onClick={() => openBuilder('custom-table-covers')}
            className="mt-8 inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
          >
            Build a quote
          </button>
        </div>
      </section>

      <RelatedSeoLinks
        title="Related banners and displays"
        links={[
          { href: '/banners-ireland', label: 'Banner printing Ireland', desc: 'PVC, roll-ups, stands and flags' },
          { href: '/banner-printing-dublin', label: 'Banner printing Dublin', desc: 'Dublin city and county delivery' },
          { href: '/roll-up-banners-ireland', label: 'Roll-up banners', desc: 'Pull-up stands for the same event' },
          { href: '/fabric-banner-stands-ireland', label: 'Fabric banner stands', desc: 'Banner with frame, 2.5–6 m' },
          { href: '/stage-backdrop-banners-ireland', label: 'Stage backdrops', desc: 'Large hanging graphics' },
          { href: '/custom-printed-flags-ireland', label: 'Custom printed flags', desc: 'Club and event flags' },
        ]}
      />
    </Layout>
  );
}
