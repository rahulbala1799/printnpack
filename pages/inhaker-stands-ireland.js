import React, { useCallback, useState } from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_URL } from '../lib/site';
import { buildProductLd } from '../lib/schema';
import RelatedSeoLinks from '../components/seo/RelatedSeoLinks';
import { useQuoteCart } from '../lib/quote-cart-context';
import { getQuoteCatalogItem } from '../data/quote-modules';
import {
  INHAKER_EXAMPLE_CAPTION,
  INHAKER_GALLERY,
  INHAKER_PATH,
  INHAKER_SIZES,
  buildInhakerQuoteLine,
  inhakerFromPrice,
  inhakerMachineRecord,
  inhakerPreview,
} from '../data/inhaker-stands';
import InhakerStandConfigurator from '../components/inhaker-stands/InhakerStandConfigurator';

const PAGE_URL = `${SITE_URL}${INHAKER_PATH}`;
const FROM_PRICE = inhakerFromPrice().toFixed(2);

const ALTERNATE_NAMES = [
  'Exhibition wall',
  'Printed exhibition wall',
  'Rigid exhibition wall',
  'Display wall',
  'Trade show wall',
  'Booth wall',
  'Modular panel wall',
  'Printed display panel',
  'Exhibition panel',
  'Inhaker stand',
  'Hook-in display panel',
  'Re-board display panel',
  'Forex display panel',
];

const faqs = [
  {
    q: 'I need an exhibition wall for a show in Ireland. What should I order?',
    a: 'Order a printed exhibition wall: rigid panels, 88 cm wide, that hook into upright posts. The trade name is an inhaker stand. People also call it a display wall, a trade show wall, a booth wall or a modular panel wall. PrintNPack prints them in Ashbourne, Co. Meath, and delivers across Ireland.',
  },
  {
    q: 'What is an inhaker stand?',
    a: 'An inhaker stand is the trade name for a hook-in exhibition wall. Each printed panel slots into upright posts, so you can add another panel or change the graphic later. It is a rigid board, not a fabric pop-up.',
  },
  {
    q: 'How much does a printed exhibition wall cost in Ireland?',
    a: `A single 88 × 195 cm panel in 10 mm Re-board, printed on the front, is €${FROM_PRICE} ex VAT. That price includes one delivery to Ireland. Taller panels, Forex, both-sides print, and extra panels cost more. The price on this page updates as you choose.`,
  },
  {
    q: 'What size is a standard exhibition panel?',
    a: 'Every panel is 88 cm wide. Choose a visible height of 195 cm, 247.5 cm or 300 cm. One run can include 1 to 10 panels, hooked into the same line of posts.',
  },
  {
    q: 'What is the difference between Re-board and Forex?',
    a: 'Both are 10 mm thick and printed in full colour. Re-board is a light honeycomb board, easy to carry to the next show. Forex is a solid foam board, heavier and stiffer.',
  },
  {
    q: 'Can an exhibition wall be printed on both sides?',
    a: 'Yes. Front only leaves the back plain white. Both sides prints your artwork on each face, so the panel can be read from either direction.',
  },
  {
    q: 'Does the exhibition wall price include the posts and foot plates?',
    a: 'The price is the printed panel, cut so it hooks into the posts. Photos show the panel on posts with foot plates so you can see how an exhibition wall stands. Those posts and plates are not in the price.',
  },
  {
    q: 'Is an exhibition wall the same as a pop-up wall?',
    a: 'No. This exhibition wall is a rigid printed panel. A pop-up wall is a folding fabric stand. A fabric banner stand is a stretch graphic on a tube frame. A freestanding LED frame is a lit frame supplied unprinted.',
  },
  {
    q: 'Do you deliver exhibition walls in Ireland?',
    a: 'Yes. PrintNPack is in Ashbourne, Co. Meath. The price includes one delivery to Ireland and is ex VAT. Extra panels in the same order share that delivery.',
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
    { '@type': 'ListItem', position: 3, name: 'Exhibition walls', item: PAGE_URL },
  ],
};

const productLd = buildProductLd({
  name: 'Exhibition Walls Ireland',
  description:
    `Printed exhibition walls in Ireland, also called an inhaker stand, a display wall or a trade show wall. Rigid panels, 88 cm wide, in Re-board or Forex. From €${FROM_PRICE} ex VAT, delivery included.`,
  image: INHAKER_GALLERY.map((item) => `${SITE_URL}${item.src}`),
  url: PAGE_URL,
  price: FROM_PRICE,
  sku: 'inhaker-stands-ireland',
  category: 'Banners, Stands and Frames',
});

const machineRecord = inhakerMachineRecord(SITE_URL);
const datasetLd = {
  '@context': 'https://schema.org',
  '@type': 'Dataset',
  name: 'Exhibition wall specifications and prices',
  description: machineRecord.whatItIs,
  url: machineRecord.specificationJsonUrl,
  creator: { '@type': 'Organization', name: 'PrintNPack Ireland', url: SITE_URL },
  distribution: [
    {
      '@type': 'DataDownload',
      encodingFormat: 'text/plain',
      contentUrl: machineRecord.specificationUrl,
    },
    {
      '@type': 'DataDownload',
      encodingFormat: 'application/json',
      contentUrl: machineRecord.specificationJsonUrl,
    },
  ],
};

const speakableLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Exhibition walls in Ireland',
  url: PAGE_URL,
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['#exhibition-wall-answer', '#exhibition-wall-price'],
  },
};

export default function InhakerStandsIreland() {
  const { addItem } = useQuoteCart();
  const catalogItem = getQuoteCatalogItem('inhaker-stands-ireland');
  const [activeImage, setActiveImage] = useState(0);
  const [preview, setPreview] = useState(() => inhakerPreview({}));
  const handlePreview = useCallback((priced) => {
    const next = inhakerPreview(priced);
    setPreview(next);
    if (!next) return;
    const index = INHAKER_GALLERY.findIndex((item) => item.src === next.src);
    if (index >= 0) setActiveImage(index);
  }, []);
  const shown = INHAKER_GALLERY[activeImage] || preview;
  const title = 'Exhibition Walls Ireland | Printed Display Panels | PrintNPack';
  const description =
    'Need an exhibition wall in Ireland? Printed display panels, also called an inhaker stand, from €' +
    FROM_PRICE +
    ' ex VAT with delivery included. 88 cm wide, Re-board or Forex, front or both sides.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="exhibition wall Ireland, printed exhibition wall, display wall Ireland, trade show wall, booth wall, modular panel wall, printed display panel, exhibition panel, inhaker stand Ireland, rigid exhibition wall"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href={PAGE_URL} />
        <link rel="describedby" href={machineRecord.specificationUrl} type="text/plain" />
        <link rel="alternate" type="application/json" href={machineRecord.specificationJsonUrl} title="Exhibition wall specification" />
        <meta property="og:type" content="product" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={`${SITE_URL}${INHAKER_GALLERY[0].src}`} />
        {productLd ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ ...productLd, alternateName: ALTERNATE_NAMES }) }} /> : null}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetLd) }} />
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
            <li className="text-gray-800 font-medium">Exhibition walls</li>
          </ol>
        </div>
      </nav>

      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">Banners, stands and frames · Ireland</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                Exhibition walls in Ireland
              </h1>
              <p id="exhibition-wall-answer" className="text-lg text-gray-600 mb-4 leading-relaxed">
                A <strong>printed exhibition wall</strong> is a rigid panel that hooks into upright posts.
                The trade name is an <strong>inhaker stand</strong>. People who do not know that name
                search display wall, trade show wall, booth wall, modular panel wall or exhibition panel.
              </p>
              <p id="exhibition-wall-price" className="text-gray-600 mb-4 leading-relaxed">
                Each panel is 88 cm wide. Choose 195, 247.5 or 300 cm high, 10 mm Re-board or Forex,
                and print on the front or both sides. One 88 × 195 cm Re-board panel, printed on the front,
                is €{FROM_PRICE} ex VAT, with one delivery to Ireland included.
              </p>
              <p className="text-sm text-gray-500">
                This is not a{' '}
                <Link href="/pop-up-walls-ireland" className="text-blue-600 hover:underline">pop-up display stand</Link>
                {' '}or a{' '}
                <Link href="/freestanding-led-frames-ireland" className="text-blue-600 hover:underline">freestanding LED frame</Link>.
              </p>
              {shown && (
                <figure className="mt-6 hidden lg:block">
                  <div className="relative aspect-square overflow-hidden rounded-2xl bg-slate-100">
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
                  <div className="mt-3 grid grid-cols-5 gap-2">
                    {INHAKER_GALLERY.map((item, index) => (
                      <button
                        key={item.src}
                        type="button"
                        onClick={() => setActiveImage(index)}
                        className={`relative aspect-square overflow-hidden rounded-lg border bg-slate-100 ${
                          activeImage === index ? 'border-blue-600 ring-2 ring-blue-200' : 'border-gray-200'
                        }`}
                        aria-label={item.alt}
                      >
                        <Image src={item.src} alt="" fill className="object-contain" sizes="80px" />
                      </button>
                    ))}
                  </div>
                  <figcaption className="mt-2 text-sm text-gray-500">{INHAKER_EXAMPLE_CAPTION}</figcaption>
                </figure>
              )}
            </div>
            <div id="configure" className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
              <h2 className="mb-4 text-lg font-bold text-gray-900">Build your exhibition wall</h2>
              <InhakerStandConfigurator
                previewClassName="lg:hidden"
                onChange={handlePreview}
                onSubmit={(priced) => addItem(buildInhakerQuoteLine(catalogItem, priced))}
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
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Exhibition wall sizes</h2>
          <p className="text-gray-600 mb-6 max-w-3xl">Visible area of each printed panel. Width stays 88 cm. Height is what changes. Add panels side by side to make a longer wall.</p>
          <div className="grid sm:grid-cols-3 gap-4">
            {INHAKER_SIZES.map((size) => (
              <div key={size.id} className="rounded-xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900">{size.label}</h3>
                <p className="text-sm text-gray-600 mt-1">10 mm Re-board or Forex</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-gray-600 leading-relaxed">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Which wall do you mean?</h2>
          <p>
            Search “exhibition wall” and three different products come up. This page is the rigid printed one:
            an inhaker panel in 10 mm Re-board or Forex, 88 cm wide, hooked into posts. Use it when you want a
            solid graphic panel you can add to, or reprint, for the next show.
          </p>
          <p>
            A folding fabric wall is a{' '}
            <Link href="/pop-up-walls-ireland" className="text-blue-600 hover:underline">pop-up display stand</Link>.
            A stretch graphic on a tube frame is a{' '}
            <Link href="/fabric-banner-stands-ireland" className="text-blue-600 hover:underline">fabric banner stand</Link>.
            A lit frame with no print is a{' '}
            <Link href="/freestanding-led-frames-ireland" className="text-blue-600 hover:underline">freestanding LED frame</Link>.
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 pt-4">What is included</h2>
          <p>
            The printed panel, contour-cut so it hooks into an inhaker post. Choose a light 10 mm Re-board panel
            or a stiffer 10 mm Forex panel. Front only, or printed on both sides.
          </p>
          <p>
            The photos show the panel on posts with foot plates. Those posts and plates are not in this price.
            Delivery to Ireland is in the price, once per order, and the price is ex VAT.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Exhibition wall questions</h2>
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
          { href: '/pop-up-walls-ireland', label: 'Pop-up display stands', desc: 'Folding pop-up wall' },
          { href: '/freestanding-led-frames-ireland', label: 'Freestanding LED frames', desc: 'Double-sided edge-lit frame' },
          { href: '/fabric-banner-stands-ireland', label: 'Fabric banner stands', desc: 'Stretch graphic on a tube frame' },
          { href: '/banners-ireland', label: 'Banner printing Ireland', desc: 'PVC, roll-ups and displays' },
        ]}
      />
    </Layout>
  );
}
