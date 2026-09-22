import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_URL } from '../lib/site';
import { buildProductLd } from '../lib/schema';
import RelatedSeoLinks from '../components/seo/RelatedSeoLinks';
import { useQuoteCart } from '../lib/quote-cart-context';

const PAGE_PATH = '/fabric-banner-stands-ireland';
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const HERO_IMAGE = '/images/banners/fabric-banner-stands/fabric-banner-stand-ireland-exhibition-media-wall.jpg';

const ALTERNATE_NAMES = [
  'Banner with frame',
  'Banner with structure',
  'Banner with stand',
  'Stretch fabric display',
  'Tension fabric display',
  'Straight stretch stand',
  'Media wall',
  'Fabric backdrop stand',
  'Exhibition backdrop',
  'Pillowcase banner stand',
];

const gallery = [
  {
    src: HERO_IMAGE,
    alt: 'Fabric banner stand Ireland — exhibition media wall, stretch fabric on an aluminium frame',
  },
  {
    src: '/images/banners/fabric-banner-stands/fabric-banner-stand-ireland-banner-with-frame.jpg',
    alt: 'Banner with frame Ireland — fabric banner stand for a coffee brand exhibition',
  },
  {
    src: '/images/banners/fabric-banner-stands/fabric-banner-stand-ireland-conference-backdrop.jpg',
    alt: 'Conference backdrop Ireland — fabric media wall banner with structure',
  },
  {
    src: '/images/banners/fabric-banner-stands/fabric-banner-stand-ireland-stretch-fabric-display.jpg',
    alt: 'Stretch fabric display Ireland — fabric banner stand photo wall for events',
  },
];

const sizes = [
  { size: '250 × 228 cm', use: 'Reception desks, small booths and compact photo walls' },
  { size: '300 × 230 cm', use: 'Standard exhibition wall and conference backdrop' },
  { size: '400 × 230 cm', use: 'Wide trade-stand back wall' },
  { size: '500 × 230 cm', use: 'Large indoor media wall or stage header' },
  { size: '600 × 230 cm', use: 'Extra-wide exhibition and event branding' },
  { size: 'Custom', use: 'Any other width or height — quote from Ashbourne' },
];

const faqs = [
  {
    q: 'What is a fabric banner stand called?',
    a: 'The trade name is a straight stretch fabric display or tension fabric stand. Most Irish customers search banner with frame, banner with structure, banner with stand, media wall or fabric backdrop. They are the same product: printed stretch fabric on a reusable aluminium frame.',
  },
  {
    q: 'Do you sell a banner with frame in Ireland?',
    a: 'Yes. PrintNPack supplies fabric banner stands Ireland-wide from Ashbourne — complete set (frame + graphic) or a replacement graphic if you already have the structure. Single or double sided.',
  },
  {
    q: 'How is this different from a roll-up banner?',
    a: 'A roll-up uses a cassette and a narrower graphic. A banner with structure stretches fabric over a straight frame, so it is wider, flatter and reusable. Roll-ups stay best for portable aisle displays.',
  },
  {
    q: 'Can I reuse the frame and only reprint the graphic?',
    a: 'Yes. Choose Graphic only in the quote builder. Send approximate measurements of your existing frame if it is not a standard size.',
  },
  {
    q: 'What sizes are available?',
    a: 'Standard kits are 250×228 cm, 300×230 cm, 400×230 cm, 500×230 cm and 600×230 cm. Custom sizes are quoted. Typical height is about 2.3 m.',
  },
  {
    q: 'Do you deliver fabric banner stands to Dublin?',
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
    { '@type': 'ListItem', position: 3, name: 'Fabric Banner Stands', item: PAGE_URL },
  ],
};

const productLd = {
  ...buildProductLd({
    name: 'Fabric Banner Stands Ireland',
    description:
      'Fabric banner stands Ireland — banner with frame, banner with structure or stretch fabric display. Printed graphic on a reusable aluminium frame. Complete set or graphic only. Delivered from Ashbourne.',
    image: gallery.map((item) => `${SITE_URL}${item.src}`),
    url: PAGE_URL,
    sku: 'fabric-banner-stands-ireland',
    category: 'Banners, Stands and Frames',
  }),
  alternateName: ALTERNATE_NAMES,
};

export default function FabricBannerStandsIreland() {
  const { openBuilder } = useQuoteCart();
  const [activeImage, setActiveImage] = useState(0);
  const title = 'Fabric Banner Stands Ireland | Banner with Frame & Structure | PrintNPack';
  const description =
    'Fabric banner stands Ireland — also called banner with frame, banner with structure, stretch fabric display or media wall. Complete kit or graphic only, 2.5–6 m. Quote from Ashbourne.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="fabric banner stands Ireland, banner with frame, banner with structure, banner with stand, stretch fabric display Ireland, tension fabric display, straight stretch stand, media wall Ireland, fabric backdrop, exhibition backdrop stand, pillowcase banner Ireland"
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
            <li className="text-gray-800 font-medium">Fabric Banner Stands</li>
          </ol>
        </div>
      </nav>

      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">Banners, stands and frames · Ireland</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                Fabric Banner Stands Ireland
              </h1>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                A printed stretch fabric graphic on a reusable aluminium frame. Most people do not search the trade name
                — they look for a <strong>banner with frame</strong>, <strong>banner with structure</strong>,{' '}
                <strong>banner with stand</strong>, <strong>media wall</strong> or <strong>fabric backdrop</strong>.
                That is this product.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Complete set (frame + graphic) or graphic only if you already have the structure. Single or double sided.
                Standard widths 2.5 m to 6 m. No tools, typically up in about 15 minutes. Proofs before print. Delivery
                from Ashbourne to Dublin and nationwide.
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => openBuilder('fabric-banner-stands-ireland')}
                  className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
                >
                  Build a quote
                </button>
                <Link
                  href="/roll-up-banners-ireland"
                  className="inline-flex items-center gap-2 bg-white text-gray-800 font-semibold px-6 py-3 rounded-xl border border-gray-300 hover:border-gray-400 transition-colors"
                >
                  Need a roll-up instead?
                </Link>
              </div>
            </div>
            <div>
              <div className="relative aspect-[3/2] rounded-2xl overflow-hidden shadow-lg bg-slate-100">
                <Image
                  src={gallery[activeImage].src}
                  alt={gallery[activeImage].alt}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="mt-3 grid grid-cols-4 gap-2">
                {gallery.map((item, index) => (
                  <button
                    key={item.src}
                    type="button"
                    onClick={() => setActiveImage(index)}
                    className={`relative aspect-[3/2] rounded-lg overflow-hidden border ${
                      activeImage === index ? 'border-blue-600 ring-2 ring-blue-200' : 'border-gray-200'
                    }`}
                    aria-label={item.alt}
                  >
                    <Image src={item.src} alt={item.alt} fill className="object-cover" sizes="120px" />
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
            Search any of these — they all land on this fabric banner stand (straight stretch display).
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Banner with frame vs roll-up vs hanging backdrop</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              A <strong>banner with frame</strong> (this page) is a free-standing stretch fabric wall. The graphic
              zips or slides over the aluminium structure like a pillowcase, so the print stays tight and wrinkle-free.
            </p>
            <p>
              A <Link href="/roll-up-banners-ireland" className="text-blue-600 hover:underline">roll-up banner</Link>{' '}
              is a cassette on the floor with a pull-up graphic — faster to pack, narrower.
            </p>
            <p>
              A <Link href="/stage-backdrop-banners-ireland" className="text-blue-600 hover:underline">stage backdrop banner</Link>{' '}
              is a large hanging polyester sheet (rings or hems), not a portable frame. Use that for festival stages
              and 3 m+ walls you hang from truss.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Fabric banner stand FAQs</h2>
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
            onClick={() => openBuilder('fabric-banner-stands-ireland')}
            className="mt-8 inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
          >
            Open quote builder
          </button>
        </div>
      </section>

      <RelatedSeoLinks
        title="Related banners, stands and frames"
        links={[
          { href: '/curved-banner-stands-ireland', label: 'Curved banner stands', desc: 'Curved stretch stand / media wall' },
          { href: '/banners-ireland', label: 'Banner printing Ireland', desc: 'PVC, roll-ups and displays' },
          { href: '/roll-up-banners-ireland', label: 'Roll-up banners', desc: 'Cassette pull-up stands' },
          { href: '/extra-wide-roll-up-banners-ireland', label: 'Extra-wide roll-ups', desc: '2 m cassette banners' },
          { href: '/stage-backdrop-banners-ireland', label: 'Stage backdrop banners', desc: 'Huge hanging graphics' },
          { href: '/banner-faq-ireland', label: 'Banner FAQ Ireland', desc: 'Cost, materials and names' },
        ]}
      />
    </Layout>
  );
}
