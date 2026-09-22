import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_URL } from '../lib/site';
import { buildProductLd } from '../lib/schema';
import RelatedSeoLinks from '../components/seo/RelatedSeoLinks';
import { useQuoteCart } from '../lib/quote-cart-context';

const PAGE_PATH = '/curved-banner-stands-ireland';
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const HERO_IMAGE = '/images/banners/curved-banner-stands/curved-banner-stand-ireland-curved-stretch-stand.jpg';

const gallery = [
  {
    src: HERO_IMAGE,
    alt: 'Curved banner stand Ireland — curved stretch stand with printed fabric on a frame',
  },
  {
    src: '/images/banners/curved-banner-stands/curved-banner-stand-ireland-curved-media-wall.jpg',
    alt: 'Curved media wall Ireland — zipped stretch fabric curved banner with stand',
  },
];

const ALTERNATE_NAMES = [
  'Curved stretch stand',
  'Curved banner with stand',
  'Curved fabric display',
  'Curved media wall',
  'Curved exhibition backdrop',
  'Curved tension fabric stand',
  'Curved fabric banner stand',
  'Curved photo backdrop',
];

const sizes = [
  { size: '300 × 230 cm', use: 'Standard exhibition curve — recommended starting size' },
  { size: '400 × 230 cm', use: 'Wider trade-stand back wall and photo backdrop' },
  { size: '500 × 230 cm', use: 'Large indoor media wall or event branding' },
  { size: 'Custom', use: 'Other widths — quote from Ashbourne' },
];

const faqs = [
  {
    q: 'What is a curved stretch stand?',
    a: 'It is a printed stretch fabric graphic on a curved aluminium frame. People also search curved banner with stand, curved media wall, curved fabric display or curved exhibition backdrop. Same product.',
  },
  {
    q: 'How is a curved banner stand different from a straight fabric stand?',
    a: 'A straight fabric banner stand is a flat wall. A curved stand wraps the print so it is visible from the sides as well as head-on — better for aisle traffic and photo walls. See also our straight fabric banner stands.',
  },
  {
    q: 'Can I order print only for a curved frame I already have?',
    a: 'Yes. Choose Print only in the quote builder and send the measurements of your existing frame.',
  },
  {
    q: 'What sizes are available?',
    a: 'Standard kits are 300×230 cm, 400×230 cm and 500×230 cm. Custom sizes are quoted. Typical height is about 2.3 m.',
  },
  {
    q: 'Does the fabric crease if I fold it?',
    a: 'Stretch fabric for these stands folds for the carry bag and should not hold creases the way PVC does. Setup is typically about 10 minutes, no tools.',
  },
  {
    q: 'Do you deliver curved banner stands in Ireland?',
    a: 'Yes. Delivery to Dublin, Cork, Galway and every county from Ashbourne, Co. Meath. Collection is available.',
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
    { '@type': 'ListItem', position: 3, name: 'Curved Banner Stands', item: PAGE_URL },
  ],
};

const productLd = {
  ...buildProductLd({
    name: 'Curved Banner Stands Ireland',
    description:
      'Curved banner stands Ireland — curved stretch stand or curved banner with stand. Printed stretch fabric on a curved aluminium frame. Complete set or print only. Delivered from Ashbourne.',
    image: gallery.map((item) => `${SITE_URL}${item.src}`),
    url: PAGE_URL,
    sku: 'curved-banner-stands-ireland',
    category: 'Banners, Stands and Frames',
  }),
  alternateName: ALTERNATE_NAMES,
};

export default function CurvedBannerStandsIreland() {
  const { openBuilder } = useQuoteCart();
  const [activeImage, setActiveImage] = useState(0);
  const title = 'Curved Banner Stands Ireland | Curved Stretch Stand | PrintNPack';
  const description =
    'Curved banner stands Ireland — also called a curved stretch stand or curved banner with stand. Lightweight fabric on a curved frame, 3–5 m. Complete kit or print only. Quote from Ashbourne.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="curved banner stands Ireland, curved stretch stand, curved banner with stand, curved fabric display, curved media wall Ireland, curved exhibition backdrop, curved tension fabric stand, curved photo backdrop"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="product" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={`${SITE_URL}${HERO_IMAGE}`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      </Head>

      <nav className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-gray-700">Home</Link></li>
            <li>/</li>
            <li><Link href="/banners-ireland" className="hover:text-gray-700">Banners</Link></li>
            <li>/</li>
            <li className="text-gray-800 font-medium">Curved Banner Stands</li>
          </ol>
        </div>
      </nav>

      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">Banners, stands and frames · Ireland</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                Curved Banner Stands Ireland
              </h1>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                A lightweight <strong>curved stretch stand</strong> — printed fabric on a curved aluminium frame.
                Most people search <strong>curved banner with stand</strong>, <strong>curved media wall</strong> or{' '}
                <strong>curved exhibition backdrop</strong>. That is this product.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                The curve shows your brand from more angles than a flat fabric wall. Complete set or print only if you
                already have the frame. Single or double sided. Standard sizes 300×230, 400×230 and 500×230 cm. Fabric
                folds without creases and packs in a carry bag. About 10 minutes to assemble, no tools. Proofs before
                print. Delivery from Ashbourne to Dublin and nationwide.
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => openBuilder('curved-banner-stands-ireland')}
                  className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
                >
                  Build a quote
                </button>
                <Link
                  href="/fabric-banner-stands-ireland"
                  className="inline-flex items-center gap-2 bg-white text-gray-800 font-semibold px-6 py-3 rounded-xl border border-gray-300 hover:border-gray-400 transition-colors"
                >
                  Prefer a straight fabric stand?
                </Link>
              </div>
            </div>
            <div>
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg bg-slate-100">
                <Image
                  src={gallery[activeImage].src}
                  alt={gallery[activeImage].alt}
                  fill
                  className="object-contain p-4"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {gallery.map((item, index) => (
                  <button
                    key={item.src}
                    type="button"
                    onClick={() => setActiveImage(index)}
                    className={`relative aspect-square rounded-lg overflow-hidden border bg-slate-50 ${
                      activeImage === index ? 'border-blue-600 ring-2 ring-blue-200' : 'border-gray-200'
                    }`}
                    aria-label={item.alt}
                  >
                    <Image src={item.src} alt={item.alt} fill className="object-contain p-2" sizes="160px" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-slate-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Also known as</h2>
          <p className="text-gray-600 text-sm mb-4 max-w-3xl">
            Search any of these — they all land on this curved banner stand.
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
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Standard sizes</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {sizes.map((row) => (
              <div key={row.size} className="rounded-xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900">{row.size}</h3>
                <p className="text-sm text-gray-600 mt-1">{row.use}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Curved vs straight fabric stand</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Choose a <strong>curved banner with stand</strong> when you want wraparound presence on an exhibition
              aisle or a softer photo backdrop. The stretch fabric sits tight on the curve and packs without creases.
            </p>
            <p>
              Choose a <Link href="/fabric-banner-stands-ireland" className="text-blue-600 hover:underline">straight fabric banner stand</Link>{' '}
              (banner with frame) when you want a flat media wall that sits flush behind a desk or stage.
            </p>
            <p>
              A <Link href="/roll-up-banners-ireland" className="text-blue-600 hover:underline">roll-up banner</Link>{' '}
              is still the quicker cassette option if you only need about 85–200 cm width.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Curved banner stand FAQs</h2>
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
            onClick={() => openBuilder('curved-banner-stands-ireland')}
            className="mt-8 inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
          >
            Open quote builder
          </button>
        </div>
      </section>

      <RelatedSeoLinks
        title="Related banners, stands and frames"
        links={[
          { href: '/fabric-banner-stands-ireland', label: 'Fabric banner stands', desc: 'Straight banner with frame' },
          { href: '/banners-ireland', label: 'Banner printing Ireland', desc: 'PVC, roll-ups and displays' },
          { href: '/roll-up-banners-ireland', label: 'Roll-up banners', desc: 'Cassette pull-up stands' },
          { href: '/stage-backdrop-banners-ireland', label: 'Stage backdrop banners', desc: 'Huge hanging graphics' },
          { href: '/banner-faq-ireland', label: 'Banner FAQ Ireland', desc: 'Cost, materials and names' },
        ]}
      />
    </Layout>
  );
}
