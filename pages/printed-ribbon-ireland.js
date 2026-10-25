import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { SITE_URL } from '../lib/site';
import { buildProductLd } from '../lib/schema';
import RelatedSeoLinks from '../components/seo/RelatedSeoLinks';
import { useQuoteCart } from '../lib/quote-cart-context';
import { getQuoteCatalogItem } from '../data/quote-modules';
import RibbonConfigurator from '../components/ribbons/RibbonConfigurator';
import {
  RIBBON_ALSO_CALLED,
  RIBBON_COLOURS,
  RIBBON_CUT_LENGTHS,
  RIBBON_CUT_PIECES,
  RIBBON_ENDS,
  RIBBON_GALLERY,
  RIBBON_ID,
  RIBBON_PATH,
  RIBBON_PRINTS,
  RIBBON_ROLL_METRES,
  RIBBON_WIDTHS,
  buildRibbonQuoteLine,
  priceRibbon,
  ribbonFaqs,
  ribbonFromPrice,
  ribbonPlainFromPrice,
} from '../data/ribbons';

const PAGE_URL = `${SITE_URL}${RIBBON_PATH}`;
const FROM_PRICE = ribbonFromPrice().toFixed(2);
const PLAIN_PRICE = ribbonPlainFromPrice().toFixed(2);

const faqs = ribbonFaqs();

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
    { '@type': 'ListItem', position: 2, name: 'Products', item: `${SITE_URL}/products` },
    { '@type': 'ListItem', position: 3, name: 'Custom Printed Ribbon', item: PAGE_URL },
  ],
};

const productLd = buildProductLd({
  name: 'Custom Printed Ribbon Ireland',
  description:
    'Custom printed satin ribbon in Ireland. A roll from 100 metres, or pieces already cut. Widths 10 mm to 100 mm, 28 colours, logo in 1 to 4 colours. Delivery included, ex VAT.',
  url: PAGE_URL,
  image: RIBBON_GALLERY.map((item) => `${SITE_URL}${item.src}`),
  price: FROM_PRICE,
  sku: RIBBON_ID,
  category: 'Retail Packaging',
});

function euro(value) {
  return `€${Number(value).toFixed(2)}`;
}

const rollExamples = RIBBON_ROLL_METRES.map((amount) => priceRibbon({
  form: 'roll',
  width: 'ribbon_25_mm',
  print: '10',
  amount,
}));

const cutExamples = RIBBON_CUT_PIECES.map((amount) => priceRibbon({
  form: 'cut',
  width: 'ribbon_25_mm',
  length: '20_cm',
  print: '10',
  amount,
  end: 'ribbon_cut_straight',
}));

export default function PrintedRibbonIreland() {
  const { addItem } = useQuoteCart();
  const catalogItem = getQuoteCatalogItem(RIBBON_ID);
  const [swatch, setSwatch] = useState(() => priceRibbon({}));
  const title = 'Custom Printed Ribbon Ireland | Satin Logo Ribbon | PrintNPack';
  const description = `Custom printed satin ribbon in Ireland from €${FROM_PRICE} ex VAT, delivery included. Order a roll or cut pieces, 10 mm to 100 mm, in 28 colours, with your logo in 1 to 4 colours.`;

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="custom printed ribbon Ireland, printed satin ribbon, branded ribbon, logo ribbon, ribbon on a roll, cut ribbon, gift ribbon with a logo"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="product" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={`${SITE_URL}${RIBBON_GALLERY[0].src}`} />
        {productLd ? (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                ...productLd,
                alternateName: RIBBON_ALSO_CALLED,
                additionalProperty: [
                  { '@type': 'PropertyValue', name: 'Material', value: 'Double-faced satin, about 1 mm' },
                  { '@type': 'PropertyValue', name: 'Widths', value: RIBBON_WIDTHS.map((item) => item.label).join(', ') },
                  { '@type': 'PropertyValue', name: 'Colours', value: RIBBON_COLOURS.map((item) => item.label).join(', ') },
                  { '@type': 'PropertyValue', name: 'Print', value: 'No logo, or a logo in 1, 2, 3 or 4 colours' },
                  { '@type': 'PropertyValue', name: 'Roll lengths', value: '100, 200, 300, 500, 1000 or 2000 metres' },
                  { '@type': 'PropertyValue', name: 'Cut lengths', value: '10, 15, 20, 25 or 33 cm' },
                  { '@type': 'PropertyValue', name: 'Cut quantity', value: '300, 500, 1000 or 2000 pieces' },
                ],
              }),
            }}
          />
        ) : null}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      </Head>

      <nav className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-stone-500">
            <li><Link href="/" className="hover:text-stone-800">Home</Link></li>
            <li>/</li>
            <li><Link href="/products" className="hover:text-stone-800">Products</Link></li>
            <li>/</li>
            <li className="font-medium text-stone-800">Custom printed ribbon</li>
          </ol>
        </div>
      </nav>

      <section className="border-b border-stone-100 bg-white">
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-16">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600">Retail packaging · Ireland</p>
            <h1 className="mb-4 text-3xl font-bold leading-tight text-stone-900 sm:text-4xl lg:text-5xl">
              Custom printed ribbon
            </h1>
            <p className="mb-4 text-lg leading-relaxed text-stone-600">
              Satin ribbon with your logo, for bags, boxes and gifts. Order <strong>a roll</strong> and cut the bows yourself, or order <strong>cut pieces</strong> that are ready to tie.
            </p>
            <p className="mb-6 leading-relaxed text-stone-600">
              The ribbon is double-faced satin, shiny on both sides. Widths run from 10 mm to 100 mm. There are 28 colours, and the colour does not change the price. From €{FROM_PRICE} ex VAT for 100 metres of 10 mm ribbon printed in one colour, with delivery to Ireland included. A roll with no logo starts at €{PLAIN_PRICE}.
            </p>
            <p className="text-sm text-stone-500">
              It sits with{' '}
              <Link href="/custom-printed-tissue-paper-ireland" className="text-blue-600 hover:underline">custom printed tissue paper</Link>
              {' '}and{' '}
              <Link href="/luxury-tissue-paper-ireland" className="text-blue-600 hover:underline">plain luxury tissue</Link>.
            </p>
            {swatch?.colourImage ? (
              <figure className="mt-6">
                <img
                  src={swatch.colourImage}
                  alt={swatch.colourImageAlt}
                  className="w-full rounded-2xl border border-stone-200"
                />
                <figcaption className="mt-2 text-sm text-stone-500">
                  {swatch.colourLabel} satin. The name on the ribbon is a sample. The pieces in front have a notched end.
                </figcaption>
              </figure>
            ) : swatch ? (
              <figure className="mt-6">
                <div
                  className="flex h-40 items-center justify-center rounded-2xl border border-stone-200"
                  style={{ background: swatch.colourHex }}
                >
                  <span className="rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-stone-900">
                    {swatch.colourLabel} satin
                  </span>
                </div>
                <figcaption className="mt-2 text-sm text-stone-500">
                  {swatch.colourLabel} satin. This colour has no photo yet. Your own artwork is printed on the satin.
                </figcaption>
              </figure>
            ) : null}
          </div>
          <div id="configure" className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="mb-4 text-lg font-bold text-stone-900">Choose your ribbon</h2>
            <RibbonConfigurator
              showPreview={false}
              onChange={setSwatch}
              onSubmit={(priced) => addItem(buildRibbonQuoteLine(catalogItem, priced))}
            />
          </div>
        </div>
      </section>

      <section className="border-b border-stone-100 bg-stone-50 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-xl font-bold text-stone-900">Also called</h2>
          <ul className="flex flex-wrap gap-2">
            {RIBBON_ALSO_CALLED.map((name) => (
              <li key={name} className="rounded-full border border-stone-200 bg-white px-3 py-1.5 text-sm text-stone-700">
                {name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-2 text-2xl font-bold text-stone-900 sm:text-3xl">What you are choosing</h2>
          <p className="mb-8 max-w-3xl text-stone-600">
            A roll is one continuous length. Cut pieces are already cut. 25 mm is the usual gift ribbon. 10 mm is a thin tie. 100 mm is a sash.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-stone-200 p-5">
              <h3 className="font-semibold text-stone-900">A roll</h3>
              <p className="mt-1 text-sm text-stone-600">
                {RIBBON_ROLL_METRES.join(', ')} metres. Wound 100 metres to a roll, so 300 metres is three rolls. 2, 3 and 4 print colours start at 300 metres.
              </p>
            </div>
            <div className="rounded-xl border border-stone-200 p-5">
              <h3 className="font-semibold text-stone-900">Cut pieces</h3>
              <p className="mt-1 text-sm text-stone-600">
                {RIBBON_CUT_LENGTHS.map((item) => item.label).join(', ')} long. {RIBBON_CUT_PIECES.join(', ')} pieces. Straight is a flat end, diagonal is a slanted end, and notch is a V cut in the end.
              </p>
            </div>
            <div className="rounded-xl border border-stone-200 p-5">
              <h3 className="font-semibold text-stone-900">Logo</h3>
              <p className="mt-1 text-sm text-stone-600">
                {RIBBON_PRINTS.map((item) => item.detail).join('. ')}.
              </p>
            </div>
          </div>

          <h2 className="mb-2 mt-12 text-2xl font-bold text-stone-900">25 mm ribbon, logo in one colour</h2>
          <p className="mb-4 max-w-3xl text-sm text-stone-600">
            These are the prices for the usual gift width. Other widths are in the chooser. Every colour is this price. Ex VAT, delivery to Ireland included.
          </p>
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="mb-2 font-semibold text-stone-900">A roll</h3>
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-stone-200 text-stone-500">
                    <th className="py-2 font-medium">Metres</th>
                    <th className="py-2 font-medium">Price</th>
                    <th className="py-2 font-medium">A metre</th>
                  </tr>
                </thead>
                <tbody>
                  {rollExamples.map((row) => (
                    <tr key={row.amount} className="border-b border-stone-100">
                      <td className="py-2">{row.amount}</td>
                      <td className="py-2">{euro(row.lineTotal)}</td>
                      <td className="py-2">{euro(row.each)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-stone-900">Cut pieces, 20 cm, straight end</h3>
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-stone-200 text-stone-500">
                    <th className="py-2 font-medium">Pieces</th>
                    <th className="py-2 font-medium">Price</th>
                    <th className="py-2 font-medium">Each</th>
                  </tr>
                </thead>
                <tbody>
                  {cutExamples.map((row) => (
                    <tr key={row.amount} className="border-b border-stone-100">
                      <td className="py-2">{row.amount}</td>
                      <td className="py-2">{euro(row.lineTotal)}</td>
                      <td className="py-2">{euro(row.each)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <h2 className="mb-3 mt-12 text-2xl font-bold text-stone-900">Ribbon colours</h2>
          <p className="mb-4 max-w-3xl text-sm text-stone-600">
            White, black, burgundy, dark blue and gold have a sample photo. The other colours use the dot. Every colour is the same price.
          </p>
          <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {RIBBON_GALLERY.map((photo) => (
              <figure key={photo.colourId}>
                <img src={photo.src} alt={photo.alt} className="w-full rounded-xl border border-stone-200" />
                <figcaption className="mt-1.5 text-sm text-stone-600">{photo.label}</figcaption>
              </figure>
            ))}
          </div>
          <ul className="flex flex-wrap gap-2">
            {RIBBON_COLOURS.map((colour) => (
              <li key={colour.id} className="inline-flex items-center gap-2 rounded-full border border-stone-200 px-3 py-1 text-sm text-stone-700">
                <span className="h-3 w-3 rounded-full border border-stone-300" style={{ background: colour.hex }} />
                {colour.label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold text-stone-900 sm:text-3xl">Custom printed ribbon — FAQs</h2>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <div key={q} className="rounded-xl border border-stone-200 p-5">
                <h3 className="mb-2 font-bold text-stone-900">{q}</h3>
                <p className="text-sm leading-relaxed text-stone-600">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedSeoLinks
        title="Tissue, boxes and bags to go with the ribbon"
        links={[
          { href: '/custom-printed-tissue-paper-ireland', label: 'Custom Tissue Paper', desc: 'Printed tissue for the same unboxing' },
          { href: '/luxury-tissue-paper-ireland', label: 'Luxury Tissue Paper', desc: 'Plain colour tissue, 480 sheets per case' },
          { href: '/luxury-magnetic-closure-boxes-ireland', label: 'Magnetic Closure Boxes', desc: 'Rigid gift boxes with a logo' },
          { href: '/luxury-paper-bags-ireland', label: 'Luxury Paper Bags', desc: 'Carrier bags for the same counter' },
          { href: '/products', label: 'All Products', desc: 'Full print and packaging catalogue' },
        ]}
      />
    </Layout>
  );
}
