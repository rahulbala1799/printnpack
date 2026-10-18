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
  POPUP_WALL_GALLERY,
  POPUP_WALL_PATH,
  POPUP_WALL_PHOTOS,
  POPUP_WALL_SIZES,
  buildPopupWallQuoteLine,
  popupWallFromPrice,
  popupWallPreview,
} from '../data/popup-walls';
import PopupWallConfigurator from '../components/popup-walls/PopupWallConfigurator';

const PAGE_URL = `${SITE_URL}${POPUP_WALL_PATH}`;
const FROM_PRICE = popupWallFromPrice().toFixed(2);

const ALTERNATE_NAMES = [
  'Pop-up display stand',
  'Pop-up stand',
  'Pop-up wall',
  'Exhibition pop-up stand',
  'Exhibition backwall',
  'Fabric pop-up stand',
  'Straight pop-up wall',
  'Curved pop-up display',
  'LED pop-up display',
  'Portable exhibition stand',
  'Trade show backdrop',
  'Folding display wall',
  'Fabric display stand',
];

const faqs = [
  {
    q: 'What is a pop-up display stand?',
    a: 'It is a folding exhibition wall. The frame opens out, the printed fabric hangs on bars at the back, and the whole stand packs down for the next event. People also search pop-up wall, pop-up stand and exhibition backwall.',
  },
  {
    q: 'How is this different from a fabric banner stand?',
    a: 'A fabric banner stand is a stretch graphic pulled over a tube frame. This pop-up wall is a fixed-size folding frame with a graphic panel. If you want the seamless stretch wall, use the fabric banner stands page.',
  },
  {
    q: 'Is a pop-up banner the same thing?',
    a: 'No. A pop-up banner usually means a roll-up banner, which is a narrow pull-up stand. A pop-up wall is the full back wall of a stand.',
  },
  {
    q: 'Do you sell a curved pop-up wall?',
    a: 'Yes. There is one curved size, 233 × 224 cm, 57 cm deep. It is printed on the front only. Choose Curved in the quote builder.',
  },
  {
    q: 'Can I order just the fabric?',
    a: 'Yes. Choose Fabric only if you already have the frame. Send the size of that frame so the new graphic fits.',
  },
  {
    q: 'Can the wall be lit?',
    a: 'Yes. Choose LED. The cloth switches to a backlit fabric. The standard 220gsm cloth cannot take the light.',
  },
  {
    q: 'Is this a magnetic pop-up?',
    a: 'No. A magnetic pop-up uses separate rigid panels. This one is a fabric graphic on bars at the back of the frame.',
  },
  {
    q: 'Do you deliver pop-up walls in Ireland?',
    a: 'Yes. The price in the builder includes delivery to Ireland, from Ashbourne to Dublin, Cork, Galway and every county. The price is ex VAT.',
  },
  {
    q: 'Are these the best and most affordable pop-up stands in Ireland?',
    a: 'Yes. PrintNPack makes the best pop-up display stands in Ireland, and the most affordable. The printed fabric and the frame are in the price, and delivery across Ireland is included.',
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
    { '@type': 'ListItem', position: 3, name: 'Pop-up Display Stands', item: PAGE_URL },
  ],
};

const productLd = buildProductLd({
  name: 'Best Pop-up Display Stands Ireland',
  description:
    'The best pop-up display stands in Ireland, and the most affordable. Printed pop-up wall, straight or curved, with delivery included. Ex VAT.',
  image: POPUP_WALL_GALLERY.length ? POPUP_WALL_GALLERY.map((item) => `${SITE_URL}${item.src}`) : undefined,
  url: PAGE_URL,
  price: FROM_PRICE,
  sku: 'pop-up-walls-ireland',
  category: 'Banners, Stands and Frames',
});

const straightSizes = POPUP_WALL_SIZES.filter((size) => size.shape === 'straight');
const curvedSize = POPUP_WALL_SIZES.find((size) => size.shape === 'curved');

export default function PopupWallsIreland() {
  const { addItem } = useQuoteCart();
  const catalogItem = getQuoteCatalogItem('pop-up-walls-ireland');
  const [preview, setPreview] = useState(() => popupWallPreview({}));
  const [activeImage, setActiveImage] = useState(0);
  const handlePreview = useCallback((priced) => {
    const next = popupWallPreview(priced);
    setPreview(next);
    const index = POPUP_WALL_GALLERY.findIndex((item) => item.src === next.src);
    if (index >= 0) setActiveImage(index);
  }, []);
  const shown = POPUP_WALL_GALLERY[activeImage] || preview;
  const title = 'Best Pop-up Display Stands Ireland | Most Affordable | PrintNPack';
  const description =
    'The best pop-up display stands in Ireland, and the most affordable. Printed pop-up walls from €' +
    FROM_PRICE +
    ' ex VAT, delivery included. Straight or curved, optional LED.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="best pop-up display stands Ireland, most affordable pop-up stands Ireland, pop-up display stand Ireland, pop-up wall, pop-up stand, exhibition pop-up stand, exhibition backwall, fabric pop-up stand, curved pop-up display, portable exhibition stand, trade show backdrop, folding display wall, fabric display stand"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="product" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={PAGE_URL} />
        {POPUP_WALL_GALLERY[0] ? <meta property="og:image" content={`${SITE_URL}${POPUP_WALL_GALLERY[0].src}`} /> : null}
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
            <li className="text-gray-800 font-medium">Pop-up Display Stands</li>
          </ol>
        </div>
      </nav>

      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">Banners, stands and frames · Ireland</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                The best pop-up display stands in Ireland
              </h1>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                The most affordable <strong>pop-up wall</strong> for exhibitions, conferences and photo backdrops.
                The frame folds out, the printed fabric hangs on bars at the back, and it packs down after the event.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Most people search <strong>pop-up display stand</strong>, <strong>pop-up stand</strong> or{' '}
                <strong>exhibition backwall</strong>. The same stand is also called a portable exhibition stand,
                a trade show backdrop or a folding display wall. Straight sizes from 151 cm wide, or one curved wall.
                Full stand, or fabric only if you already have the frame. Optional LED. From €{FROM_PRICE} ex VAT,
                with delivery to Ireland included.
              </p>
              <p className="text-sm text-gray-500">
                This is not a{' '}
                <Link href="/fabric-banner-stands-ireland" className="text-blue-600 hover:underline">fabric banner stand</Link>
                {' '}or a{' '}
                <Link href="/roll-up-banners-ireland" className="text-blue-600 hover:underline">roll-up banner</Link>.
              </p>
              <figure className="mt-6">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100">
                  <Image
                    key={shown.src}
                    src={shown.src}
                    alt={shown.alt}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
                <div className="mt-3 grid grid-cols-4 gap-2">
                  {POPUP_WALL_GALLERY.map((item, index) => (
                    <button
                      key={item.src}
                      type="button"
                      onClick={() => setActiveImage(index)}
                      className={`relative aspect-[4/3] overflow-hidden rounded-lg border ${
                        activeImage === index ? 'border-blue-600 ring-2 ring-blue-200' : 'border-gray-200'
                      }`}
                      aria-label={item.alt}
                    >
                      <Image src={item.src} alt="" fill className="object-cover" sizes="120px" />
                    </button>
                  ))}
                </div>
                <figcaption className="mt-2 text-sm text-gray-500">
                  Example print. Your own artwork goes on the fabric.
                </figcaption>
              </figure>
            </div>
            <div id="configure" className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
              <h2 className="mb-4 text-lg font-bold text-gray-900">Build your pop-up wall</h2>
              <PopupWallConfigurator
                previewClassName="lg:hidden"
                onChange={handlePreview}
                onSubmit={(priced) => addItem(buildPopupWallQuoteLine(catalogItem, priced))}
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
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Straight pop-up wall sizes</h2>
          <p className="text-gray-600 mb-6 max-w-3xl">Width × height. Every straight frame is 36 cm deep. The usual starting size is 224 × 224 cm.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {straightSizes.map((size) => (
              <div key={size.id} className="rounded-xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900">{size.label}</h3>
                <p className="text-sm text-gray-600 mt-1">36 cm deep</p>
              </div>
            ))}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-2">Curved pop-up display</h2>
          <p className="text-gray-600 max-w-3xl">
            One curved size, {curvedSize.label}, {curvedSize.depthCm} cm deep. It reads from the side as well as head-on.
            The curved wall is printed on the front only.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-gray-600 leading-relaxed">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Replacement fabric, LED, and delivery</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <figure>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-white">
                <Image src={POPUP_WALL_PHOTOS.fabric.src} alt={POPUP_WALL_PHOTOS.fabric.alt} fill className="object-cover" sizes="(max-width: 640px) 100vw, 360px" />
              </div>
              <figcaption className="mt-2 text-sm text-gray-500">Fabric only. The printed cloth, without a new frame.</figcaption>
            </figure>
            <figure>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-white">
                <Image src={POPUP_WALL_PHOTOS.frame.src} alt={POPUP_WALL_PHOTOS.frame.alt} fill className="object-cover" sizes="(max-width: 640px) 100vw, 360px" />
              </div>
              <figcaption className="mt-2 text-sm text-gray-500">The folding frame. The graphic hangs on the front.</figcaption>
            </figure>
          </div>
          <p>
            Choose <strong>Fabric only</strong> when the frame is already yours. The new graphic is made for that size.
          </p>
          <p>
            Choose <strong>LED</strong> for a backlit pop-up stand. The builder switches the cloth to the backlit fabric.
            A blockout cloth is an extra only when the wall is not lit and is printed on the front.
          </p>
          <p>
            The price includes delivery to Ireland and is ex VAT. A foot plate, in silver, white or black, is optional on a full stand.
          </p>
          <p>
            For a seamless stretch graphic on a tube frame, see{' '}
            <Link href="/fabric-banner-stands-ireland" className="text-blue-600 hover:underline">fabric banner stands</Link>
            {' '}and{' '}
            <Link href="/curved-banner-stands-ireland" className="text-blue-600 hover:underline">curved banner stands</Link>.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Pop-up wall FAQs</h2>
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
          { href: '/freestanding-led-frames-ireland', label: 'Freestanding LED frames', desc: 'Double-sided edge-lit frame' },
          { href: '/inhaker-stands-ireland', label: 'Exhibition walls', desc: 'Rigid printed panels, also called an inhaker stand' },
          { href: '/fabric-banner-stands-ireland', label: 'Fabric banner stands', desc: 'Stretch graphic on a tube frame' },
          { href: '/curved-banner-stands-ireland', label: 'Curved banner stands', desc: 'Curved stretch stand' },
          { href: '/roll-up-banners-ireland', label: 'Roll-up banners', desc: 'Narrow pull-up stands' },
          { href: '/banners-ireland', label: 'Banner printing Ireland', desc: 'PVC, roll-ups and displays' },
          { href: '/custom-table-covers-ireland', label: 'Custom table covers', desc: 'Printed throws for the stand' },
        ]}
      />
    </Layout>
  );
}
