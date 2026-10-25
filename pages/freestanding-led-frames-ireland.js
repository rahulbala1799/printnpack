import React, { useCallback, useState } from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_URL } from '../lib/site';
import { buildProductLd } from '../lib/schema';
import RelatedSeoLinks from '../components/seo/RelatedSeoLinks';
import { EXHIBITION_RELATED } from '../data/exhibition-stands';
import { zipperRelatedLinks } from '../data/zipper-walls';
import { useQuoteCart } from '../lib/quote-cart-context';
import { getQuoteCatalogItem } from '../data/quote-modules';
import {
  LED_FRAME_EXAMPLE_CAPTION,
  LED_FRAME_GALLERY,
  LED_FRAME_PATH,
  LED_FRAME_SIZES,
  buildLedFrameQuoteLine,
  ledFrameFromPrice,
  ledFramePreview,
} from '../data/led-frames';
import LedFrameConfigurator from '../components/led-frames/LedFrameConfigurator';

const PAGE_URL = `${SITE_URL}${LED_FRAME_PATH}`;
const FROM_PRICE = ledFrameFromPrice().toFixed(2);

const ALTERNATE_NAMES = [
  'Freestanding LED frame',
  'LED lightbox frame',
  'Double-sided LED frame',
  'Illuminated display frame',
  'Edge-lit display frame',
  'Freestanding lightbox',
  'LED display stand',
  'Illuminated poster frame',
  'Double-sided lightbox',
  'Exhibition lightbox',
];

const faqs = [
  {
    q: 'What is a freestanding LED frame?',
    a: 'It is a rigid double-sided frame that stands on its own and lights from the edge. People also search LED lightbox frame and illuminated display frame. It is not a pop-up wall and not a stretch fabric banner stand.',
  },
  {
    q: 'Does the price include a printed graphic?',
    a: 'No. The frame is supplied unprinted, as a construction kit. The light is bright white, 6500K. A 2 metre black power cable is included and exits on the left, 5 cm from the bottom.',
  },
  {
    q: 'What sizes are there?',
    a: 'Three sizes: 80 × 200 cm, 150 × 200 cm and 200 × 200 cm. Each size is 120 mm or 160 mm deep. Both depths are double-sided.',
  },
  {
    q: 'What is the difference between flat feet and wheels?',
    a: 'Flat feet include side plates so the frame stands still. Wheels use a wheeled base so it can be moved on a smooth floor. The wheeled base costs more.',
  },
  {
    q: 'Do you deliver freestanding LED frames in Ireland?',
    a: 'Yes. The price in the builder includes delivery to Ireland and is ex VAT. Each frame includes its own delivery.',
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
    { '@type': 'ListItem', position: 3, name: 'Freestanding LED Frames', item: PAGE_URL },
  ],
};

const productLd = buildProductLd({
  name: 'Freestanding LED Frames Ireland',
  description:
    'Freestanding double-sided LED frames in Ireland. 80, 150 or 200 cm wide, aluminium, black or white, flat feet or wheels. Unprinted. Delivery included. Ex VAT.',
  image: LED_FRAME_GALLERY.length ? LED_FRAME_GALLERY.map((item) => `${SITE_URL}${item.src}`) : undefined,
  url: PAGE_URL,
  price: FROM_PRICE,
  sku: 'freestanding-led-frames-ireland',
  category: 'Banners, Stands and Frames',
});

export default function FreestandingLedFramesIreland() {
  const { addItem } = useQuoteCart();
  const catalogItem = getQuoteCatalogItem('freestanding-led-frames-ireland');
  const [activeImage, setActiveImage] = useState(0);
  const [preview, setPreview] = useState(() => ledFramePreview({}));
  const handlePreview = useCallback((priced) => {
    const next = ledFramePreview(priced);
    setPreview(next);
    if (!next) return;
    const index = LED_FRAME_GALLERY.findIndex((item) => item.src === next.src);
    if (index >= 0) setActiveImage(index);
  }, []);
  const shown = LED_FRAME_GALLERY[activeImage] || preview;
  const title = 'Freestanding LED Frames Ireland | PrintNPack';
  const description =
    'Freestanding double-sided LED frames from €' +
    FROM_PRICE +
    ' ex VAT, delivery to Ireland included. 80, 150 or 200 cm wide. Aluminium, black or white. Flat feet or wheels. Supplied unprinted.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="freestanding LED frame Ireland, LED lightbox frame, double-sided LED frame, illuminated display frame, edge-lit display frame, freestanding lightbox, LED display stand, illuminated poster frame, exhibition lightbox"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="product" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={PAGE_URL} />
        {LED_FRAME_GALLERY[0] ? <meta property="og:image" content={`${SITE_URL}${LED_FRAME_GALLERY[0].src}`} /> : null}
        {productLd ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ ...productLd, alternateName: ALTERNATE_NAMES }) }} /> : null}
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
            <li className="text-gray-800 font-medium">Freestanding LED Frames</li>
          </ol>
        </div>
      </nav>

      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">Banners, stands and frames · Ireland</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                Freestanding LED frames in Ireland
              </h1>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                A rigid <strong>double-sided LED frame</strong> that stands on its own and lights from the edge.
                It arrives as a construction kit, unprinted.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                People also search freestanding lightbox, LED display stand, illuminated poster frame,
                double-sided lightbox and exhibition lightbox. Three widths, 80, 150 and 200 cm, all 200 cm high.
                Choose 120 mm or 160 mm deep, aluminium, black or white, and flat feet or wheels.
                From €{FROM_PRICE} ex VAT, with delivery to Ireland included.
              </p>
              <p className="text-sm text-gray-500">
                This is not a{' '}
                <Link href="/pop-up-walls-ireland" className="text-blue-600 hover:underline">pop-up display stand</Link>
                {' '}or a{' '}
                <Link href="/fabric-banner-stands-ireland" className="text-blue-600 hover:underline">fabric banner stand</Link>.
              </p>
              {shown && (
                <figure className="mt-6 hidden lg:block">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-slate-100">
                    <Image
                      key={shown.src}
                      src={shown.src}
                      alt={shown.alt}
                      fill
                      className="object-contain"
                      priority
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>
                  {LED_FRAME_GALLERY.length > 1 && (
                    <div className="mt-3 grid grid-cols-4 gap-2">
                      {LED_FRAME_GALLERY.map((item, index) => (
                        <button
                          key={item.src}
                          type="button"
                          onClick={() => setActiveImage(index)}
                          className={`relative aspect-[3/4] overflow-hidden rounded-lg border bg-slate-100 ${
                            activeImage === index ? 'border-blue-600 ring-2 ring-blue-200' : 'border-gray-200'
                          }`}
                          aria-label={item.alt}
                        >
                          <Image src={item.src} alt="" fill className="object-contain" sizes="120px" />
                        </button>
                      ))}
                    </div>
                  )}
                  <figcaption className="mt-2 text-sm text-gray-500">
                    {LED_FRAME_EXAMPLE_CAPTION}
                  </figcaption>
                </figure>
              )}
            </div>
            <div id="configure" className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
              <h2 className="mb-4 text-lg font-bold text-gray-900">Build your LED frame</h2>
              <LedFrameConfigurator
                previewClassName="lg:hidden"
                onChange={handlePreview}
                onSubmit={(priced) => addItem(buildLedFrameQuoteLine(catalogItem, priced))}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-slate-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Also known as</h2>
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
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">LED frame sizes</h2>
          <p className="text-gray-600 mb-6 max-w-3xl">Width × height. Every frame is double-sided and edge-lit.</p>
          <div className="grid sm:grid-cols-3 gap-4">
            {LED_FRAME_SIZES.map((size) => (
              <div key={size.id} className="rounded-xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900">{size.label}</h3>
                <p className="text-sm text-gray-600 mt-1">120 mm or 160 mm deep</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-gray-600 leading-relaxed">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">What is included</h2>
          <p>
            The frame, the edge lighting, and a 2 metre black power cable that leaves the frame on the left.
            Flat feet include side plates. Wheels include the wheeled base.
          </p>
          <p>
            The frame is unprinted. It is packed as a construction kit. Delivery to Ireland is in the price, and the price is ex VAT.
          </p>
          <p>
            For a printed folding wall, see{' '}
            <Link href="/pop-up-walls-ireland" className="text-blue-600 hover:underline">pop-up display stands</Link>.
            For a stretch graphic on a tube frame, see{' '}
            <Link href="/fabric-banner-stands-ireland" className="text-blue-600 hover:underline">fabric banner stands</Link>.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">LED frame FAQs</h2>
          <dl className="space-y-5">
            {faqs.map((item) => (
              <div key={item.q}>
                <dt className="font-semibold text-gray-900">{item.q}</dt>
                <dd className="mt-1 text-gray-600 text-sm leading-relaxed">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <RelatedSeoLinks
        title="Related banners, stands and frames"
        links={[
          EXHIBITION_RELATED,
          { href: '/pop-up-walls-ireland', label: 'Pop-up display stands', desc: 'Folding pop-up wall' },
          { href: '/inhaker-stands-ireland', label: 'Exhibition walls', desc: 'Rigid printed panels, also called an inhaker stand' },
          { href: '/fabric-banner-stands-ireland', label: 'Fabric banner stands', desc: 'Stretch graphic on a tube frame' },
          { href: '/curved-banner-stands-ireland', label: 'Curved banner stands', desc: 'Curved stretch stand' },
          { href: '/roll-up-banners-ireland', label: 'Roll-up banners', desc: 'Narrow pull-up stands' },
          { href: '/banners-ireland', label: 'Banner printing Ireland', desc: 'PVC, roll-ups and displays' },
          { href: '/zipper-walls-ireland', label: 'Zipper walls', desc: 'Arch, pillar, wave, U and curves' },
          ...zipperRelatedLinks(),
        ]}
      />
    </Layout>
  );
}
