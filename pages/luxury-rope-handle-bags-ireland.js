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
import LuxuryRopeBagConfigurator from '../components/luxury-rope-bags/LuxuryRopeBagConfigurator';
import {
  ROPE_BAG_ALSO_CALLED,
  ROPE_BAG_GALLERY,
  ROPE_BAG_ID,
  ROPE_BAG_PATH,
  ROPE_BAG_SIZES,
  buildRopeBagQuoteLine,
  ropeBagFaqs,
  ropeBagFromPrice,
  ropeBagPreview,
} from '../data/luxury-rope-handle-bags';

const PAGE_URL = `${SITE_URL}${ROPE_BAG_PATH}`;
const FROM_PRICE = ropeBagFromPrice().toFixed(2);
const faqs = ropeBagFaqs();

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
    { '@type': 'ListItem', position: 2, name: 'Paper Bags Ireland', item: `${SITE_URL}/paper-bags-ireland` },
    { '@type': 'ListItem', position: 3, name: 'Luxury Rope Handle Bags', item: PAGE_URL },
  ],
};

const productLd = buildProductLd({
  name: 'Luxury Rope Handle Bags Ireland',
  description:
    'Luxury rope handle paper bags in Ireland. 170gsm white kraft with a cotton rope, printed in 1 colour, 2 colours or full colour. From 250 bags, delivery included. Ex VAT.',
  image: ROPE_BAG_GALLERY.length ? ROPE_BAG_GALLERY.map((item) => `${SITE_URL}${item.src}`) : undefined,
  url: PAGE_URL,
  price: FROM_PRICE,
  sku: ROPE_BAG_ID,
  category: 'Retail Packaging',
});

export default function LuxuryRopeHandleBagsIreland() {
  const { addItem } = useQuoteCart();
  const catalogItem = getQuoteCatalogItem(ROPE_BAG_ID);
  const [preview, setPreview] = useState(() => ropeBagPreview());
  const [activeImage, setActiveImage] = useState(0);
  const handlePreview = useCallback((priced) => {
    const next = ropeBagPreview(priced);
    setPreview(next);
    if (!next) return;
    const index = ROPE_BAG_GALLERY.findIndex((item) => item.src === next.src);
    if (index >= 0) setActiveImage(index);
  }, []);
  const shown = ROPE_BAG_GALLERY[activeImage] || preview;
  const title = 'Luxury Rope Handle Bags Ireland | Cotton Cord Paper Bags';
  const description =
    `Luxury rope handle paper bags in Ireland, printed on 170gsm white kraft. Cotton rope handles, 13 sizes, from €${FROM_PRICE} for 250 bags, ex VAT, delivery included.`;

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="luxury rope handle bags Ireland, rope handle paper bags, cotton cord paper bags, printed rope handle bags, shoulder rope paper bags, boutique carrier bags Ireland"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="product" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={PAGE_URL} />
        {ROPE_BAG_GALLERY[0] ? <meta property="og:image" content={`${SITE_URL}${ROPE_BAG_GALLERY[0].src}`} /> : null}
        {productLd ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ ...productLd, alternateName: ROPE_BAG_ALSO_CALLED }) }} /> : null}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      </Head>

      <nav className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-gray-700">Home</Link></li>
            <li>/</li>
            <li><Link href="/paper-bags-ireland" className="hover:text-gray-700">Paper Bags</Link></li>
            <li>/</li>
            <li className="text-gray-800 font-medium">Luxury Rope Handle Bags</li>
          </ol>
        </div>
      </nav>

      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">Paper bags · Ireland</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                Luxury rope handle bags Ireland
              </h1>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                White kraft carrier bags with a <strong>cotton rope handle</strong>, printed with your artwork.
                The rope is short, for the hand, or long enough to sit on the shoulder.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Thirteen sizes, from a small vertical bag to a wine bag and a wide shopper.
                Print is 1 colour, 2 colours, or full colour, on 170gsm white kraft.
                Gloss or matt lamination, foil, and closing ribbons are optional.
                From €{FROM_PRICE} for 250 bags, ex VAT, with delivery to Ireland included.
              </p>
              <p className="text-sm text-gray-500">
                This is not a{' '}
                <Link href="/luxury-paper-bags-ireland" className="text-blue-600 hover:underline">die-cut luxury bag</Link>
                , which has the handle cut out of the paper, or a{' '}
                <Link href="/twisted-handle-paper-bags-ireland" className="text-blue-600 hover:underline">twisted paper handle bag</Link>
                . For everyday café bags, see{' '}
                <Link href="/printed-flat-handle-bags-ireland" className="text-blue-600 hover:underline">flat handle bags</Link>.
              </p>
              {shown ? (
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
                  {ROPE_BAG_GALLERY.length > 1 && (
                    <div className="mt-3 grid grid-cols-4 gap-2">
                      {ROPE_BAG_GALLERY.map((item, index) => (
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
                  )}
                  <figcaption className="mt-2 text-sm text-gray-500">
                    Example print. Your own artwork goes on the bag.
                  </figcaption>
                </figure>
              ) : null}
            </div>
            <div id="configure" className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
              <h2 className="mb-4 text-lg font-bold text-gray-900">Build your rope handle bag</h2>
              <LuxuryRopeBagConfigurator
                previewClassName="lg:hidden"
                onChange={handlePreview}
                onSubmit={(priced) => addItem(buildRopeBagQuoteLine(catalogItem, priced))}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-slate-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Also known as</h2>
          <ul className="flex flex-wrap gap-2">
            {ROPE_BAG_ALSO_CALLED.map((name) => (
              <li key={name} className="px-3 py-1.5 rounded-full bg-white border border-gray-200 text-sm text-gray-700">
                {name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Rope handle bag sizes</h2>
          <p className="text-gray-600 mb-6 max-w-3xl">
            Width × depth × height. Vertical bags are taller than they are wide. Horizontal bags are the wide shoppers.
            The wine bag is the narrow one for a bottle.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ROPE_BAG_SIZES.map((size) => (
              <div key={size.id} className="rounded-xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900">{size.label}</h3>
                <p className="text-sm text-gray-600 mt-1">{size.shape}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-gray-600 leading-relaxed">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Print, rope, and delivery</h2>
          <p>
            The bag is 170gsm white kraft. Choose standard paper or FSC paper. The price is the same.
            The rope comes in 18 colours, and the colour does not change the price.
          </p>
          <p>
            A short rope is about 50 cm, held in the hand. A shoulder rope is about 80 cm.
            Closing ribbons are a separate ribbon glued to the bag so it can be tied shut.
          </p>
          <p>
            The smallest order is 250 bags. After that the steps are 250 bags up to 5,000, then 500 bags up to 10,500.
            The price includes one delivery to Ireland and is ex VAT. A bigger bag or a larger quantity includes a higher delivery rate.
          </p>
          <p>
            For tissue and ribbon to go with the bag, see{' '}
            <Link href="/luxury-tissue-paper-ireland" className="text-blue-600 hover:underline">luxury tissue paper</Link>
            {' '}and{' '}
            <Link href="/printed-ribbon-ireland" className="text-blue-600 hover:underline">printed ribbon</Link>.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Rope handle bag FAQs</h2>
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
        title="Related paper bags and packaging"
        links={[
          { href: '/paper-bags-ireland', label: 'Paper Bags Ireland', desc: 'Printed, plain and wholesale bags' },
          { href: '/luxury-paper-bags-ireland', label: 'Luxury Die-Cut Bags', desc: 'Handle cut out of the paper, from 20 bags' },
          { href: '/twisted-handle-paper-bags-ireland', label: 'Twisted Handle Bags', desc: 'Twisted paper handles for retail' },
          { href: '/printed-flat-handle-bags-ireland', label: 'Flat Handle Bags', desc: 'Brown kraft bags for cafés, from 25' },
          { href: '/luxury-tissue-paper-ireland', label: 'Luxury Tissue Paper', desc: 'Tissue to line the bag' },
          { href: '/printed-ribbon-ireland', label: 'Printed Ribbon', desc: 'Satin ribbon for the same gift' },
          { href: '/luxury-magnetic-closure-boxes-ireland', label: 'Magnetic Closure Boxes', desc: 'Rigid gift boxes' },
        ]}
      />
    </Layout>
  );
}
