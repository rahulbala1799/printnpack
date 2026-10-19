import React, { useCallback, useRef, useState } from 'react';
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
  VINYL_LETTER_ALSO_CALLED,
  VINYL_LETTER_GALLERY,
  VINYL_LETTER_IMAGE,
  VINYL_LETTER_INSTALL_STEPS,
  VINYL_LETTER_PATH,
  VINYL_LETTER_PHOTOS,
  VINYL_LETTER_PRESETS,
  VINYL_LETTER_USES,
  VINYL_LETTER_VINYL_GUIDE,
  buildVinylLetterQuoteLine,
  formatVinylLetterArea,
  priceVinylLetters,
  vinylLetterFaqs,
  vinylLetterFromPrice,
  vinylLetterMachineRecord,
  vinylLetterPhoto,
} from '../data/vinyl-cut-letters';
import VinylCutLetterConfigurator from '../components/vinyl-cut-letters/VinylCutLetterConfigurator';

const PAGE_URL = `${SITE_URL}${VINYL_LETTER_PATH}`;
const FROM_PRICE = vinylLetterFromPrice().toFixed(2);
const WINDOW_PRICE = priceVinylLetters({ widthMm: 200, heightMm: 600, material: 'white_gloss_oracal_751-010', contours: 4, qty: 1 }).lineTotal.toFixed(2);

const faqs = vinylLetterFaqs();

const howToLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to put vinyl letters on a shop window',
  description:
    'Vinyl cut letters from PrintNPack arrive on application tape. Clean the glass, hinge the sheet, peel the backing, rub the letters on with a plastic card, and peel the tape off.',
  supply: [{ '@type': 'HowToSupply', name: 'Vinyl cut letters on application tape' }],
  tool: [
    { '@type': 'HowToTool', name: 'Masking tape' },
    { '@type': 'HowToTool', name: 'Plastic card' },
  ],
  step: VINYL_LETTER_INSTALL_STEPS.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.name,
    text: step.text,
    url: `${PAGE_URL}#vinyl-letter-install`,
  })),
};

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
    { '@type': 'ListItem', position: 2, name: 'Vinyl stickers', item: `${SITE_URL}/vinyl-stickers` },
    { '@type': 'ListItem', position: 3, name: 'Vinyl cut letters', item: PAGE_URL },
  ],
};

const productLd = buildProductLd({
  name: 'Vinyl Cut Letters Ireland',
  description: `Shop window lettering in Ireland. Vinyl cut letters arrive on application tape so you can put the shop name or opening hours on the glass yourself. From €${FROM_PRICE} ex VAT, delivery included.`,
  image: VINYL_LETTER_GALLERY.map((item) => `${SITE_URL}${item.src}`),
  url: PAGE_URL,
  price: FROM_PRICE,
  sku: 'vinyl-cut-letters-ireland',
  category: 'Stickers & Labels',
});

const machineRecord = vinylLetterMachineRecord(SITE_URL);
const datasetLd = {
  '@context': 'https://schema.org',
  '@type': 'Dataset',
  name: 'Vinyl cut letter sizes and prices',
  description: machineRecord.whatItIs,
  url: machineRecord.specificationJsonUrl,
  creator: { '@type': 'Organization', name: 'PrintNPack Ireland', url: SITE_URL },
  distribution: [
    { '@type': 'DataDownload', encodingFormat: 'text/plain', contentUrl: machineRecord.specificationUrl },
    { '@type': 'DataDownload', encodingFormat: 'application/json', contentUrl: machineRecord.specificationJsonUrl },
  ],
};

const speakableLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Shop window lettering in Ireland',
  url: PAGE_URL,
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['#vinyl-letter-answer', '#vinyl-letter-price', '#vinyl-letter-install', '#which-vinyl'],
  },
};

export default function VinylCutLettersIreland() {
  const { addItem } = useQuoteCart();
  const catalogItem = getQuoteCatalogItem('vinyl-cut-letters-ireland');
  const [activeImage, setActiveImage] = useState(0);
  const materialRef = useRef('white_gloss_oracal_751-010');
  const handlePreview = useCallback((priced) => {
    if (materialRef.current !== priced.material.id) {
      materialRef.current = priced.material.id;
      const match = vinylLetterPhoto(priced.material);
      const index = match ? VINYL_LETTER_GALLERY.findIndex((item) => item.src === match.src) : 0;
      setActiveImage(index < 0 ? 0 : index);
    }
  }, []);
  const shown = VINYL_LETTER_GALLERY[activeImage] || VINYL_LETTER_IMAGE;
  const title = 'Shop Window Lettering Ireland | Vinyl Cut Letters | PrintNPack';
  const description =
    'Shop window lettering in Ireland. The letters arrive on application tape, so you can put a shop name or opening hours on the glass yourself. From €' +
    FROM_PRICE +
    ' ex VAT, delivery included.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="shop window lettering Ireland, vinyl letters for shop window, opening hours on window, gold vinyl letters, frosted window film, application tape, vinyl cut letters Ireland"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href={PAGE_URL} />
        <link rel="describedby" href={machineRecord.specificationUrl} type="text/plain" />
        <link rel="alternate" type="application/json" href={machineRecord.specificationJsonUrl} title="Vinyl cut letter specification" />
        <meta property="og:type" content="product" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={`${SITE_URL}${VINYL_LETTER_IMAGE.src}`} />
        {productLd ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ ...productLd, alternateName: VINYL_LETTER_ALSO_CALLED }) }} /> : null}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToLd) }} />
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
            <li><Link href="/vinyl-stickers" className="hover:text-gray-700">Vinyl stickers</Link></li>
            <li>/</li>
            <li className="text-gray-800 font-medium">Vinyl cut letters</li>
          </ol>
        </div>
      </nav>

      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">For shop owners · Ireland</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                Shop window lettering in Ireland
              </h1>
              <p id="vinyl-letter-answer" className="text-lg text-gray-600 mb-4 leading-relaxed">
                <strong>Vinyl cut letters</strong> are the letters for a shop window: the shop name, the opening hours, a phone number.
                They are cut from one colour of vinyl and arrive with the <strong>application tape</strong> already on, so the words stay lined up and you put them on the glass yourself.
              </p>
              <p id="vinyl-letter-price" className="text-gray-600 mb-4 leading-relaxed">
                Start from a common size such as 10 × 20 cm, 20 × 60 cm or 60 × 80 cm, or set your own width and height.
                A 10 × 10 cm white letter is €{FROM_PRICE} ex VAT, with one delivery to Ireland included.
                A 20 × 60 cm white piece with 4 cuts is €{WINDOW_PRICE}.
              </p>
              <p className="text-sm text-gray-500">
                For a full-colour printed decal, see{' '}
                <Link href="/vinyl-stickers" className="text-blue-600 hover:underline">vinyl stickers</Link>.
                For a large printed PVC sheet, see{' '}
                <Link href="/vinyl-banners" className="text-blue-600 hover:underline">vinyl banners</Link>.
              </p>
              <figure className="mt-6">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100">
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
                <div className="mt-3 grid grid-cols-4 gap-2 sm:grid-cols-8">
                  {VINYL_LETTER_GALLERY.map((item, index) => (
                    <button
                      key={item.src}
                      type="button"
                      onClick={() => setActiveImage(index)}
                      className={`relative aspect-square overflow-hidden rounded-lg border bg-slate-100 ${
                        activeImage === index ? 'border-gray-900 ring-2 ring-gray-300' : 'border-gray-200'
                      }`}
                      aria-label={item.alt}
                    >
                      <Image src={item.src} alt="" fill className="object-cover" sizes="64px" />
                    </button>
                  ))}
                </div>
                <figcaption className="mt-2 text-sm text-gray-500">
                  Example lettering. Your own words are cut in the colour you choose. The diagram in the price box shows the size.
                </figcaption>
              </figure>
            </div>
            <div id="configure" className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
              <h2 className="mb-4 text-lg font-bold text-gray-900">Price your shop window letters</h2>
              <VinylCutLetterConfigurator
                previewClassName="lg:hidden"
                initial={{ widthMm: 200, heightMm: 600, contours: 4 }}
                onChange={handlePreview}
                onSubmit={(priced) => addItem(buildVinylLetterQuoteLine(catalogItem, priced))}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-slate-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Also known as</h2>
          <ul className="flex flex-wrap gap-2">
            {VINYL_LETTER_ALSO_CALLED.map((name) => (
              <li key={name} className="px-3 py-1.5 rounded-full bg-white border border-gray-200 text-sm text-gray-700">
                {name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Vinyl letter sizes</h2>
          <p className="text-gray-600 mb-6 max-w-3xl">
            Width runs from 10 cm to 300 cm. Height runs from 10 cm to 120 cm. The price follows the area, then the vinyl colour and the number of cuts.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {VINYL_LETTER_PRESETS.map((preset) => {
              const priced = priceVinylLetters({
                widthMm: preset.widthCm * 10,
                heightMm: preset.heightCm * 10,
                material: 'white_gloss_oracal_751-010',
                contours: 1,
                qty: 1,
              });
              return (
                <div key={preset.id} className="rounded-xl border border-gray-200 p-5">
                  <h3 className="font-semibold text-gray-900">{preset.label}</h3>
                  <p className="text-sm text-gray-600 mt-1">{formatVinylLetterArea(preset.widthCm * 10, preset.heightCm * 10)} · white gloss, 1 cut</p>
                  <p className="mt-2 text-lg font-bold text-gray-900">€{priced.lineTotal.toFixed(2)}</p>
                  <p className="text-xs text-gray-500">ex VAT, delivery included</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">What shop owners use them for</h2>
          <p className="text-gray-600 mb-6 max-w-3xl">
            You do not need a sign writer. The usual jobs are a name, a set of hours, and a way to screen off the till.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {VINYL_LETTER_USES.map((item) => (
              <div key={item.title} className="rounded-xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-1 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="vinyl-letter-install" className="py-12 lg:py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">You can put them on yourself</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The letters come with the application tape already on them. You do not get a bag of loose letters.
            The shop name or the opening hours are held together on one sheet. Clean the glass, stick the sheet on, rub it down with a plastic card, and peel the tape off.
            A line of opening hours is a job you can do on your own. A piece close to 3 metres wide is easier with a second person.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Most shops stick the letters on the <strong>inside</strong> of the glass, so the rain stays off them.
            From the pavement the words still have to read the right way, so say that when you send the wording. The letters are then cut as a mirror image.
          </p>
          <figure className="mb-8">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100">
              <Image
                src={VINYL_LETTER_PHOTOS.tape.src}
                alt={VINYL_LETTER_PHOTOS.tape.alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 720px"
              />
            </div>
            <figcaption className="mt-2 text-sm text-gray-500">{VINYL_LETTER_PHOTOS.tape.alt}</figcaption>
          </figure>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">How to apply the letters</h3>
          <ol className="space-y-4">
            {VINYL_LETTER_INSTALL_STEPS.map((step, index) => (
              <li key={step.name} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-900 text-sm font-semibold text-white">{index + 1}</span>
                <div>
                  <p className="font-semibold text-gray-900">{step.name}</p>
                  <p className="text-sm text-gray-600 leading-relaxed mt-1">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="which-vinyl" className="py-12 lg:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Which vinyl to pick</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            There are four kinds. All of them are one solid colour, cut to your words. None of them is a printed picture.
            The coloured films are Oracal 751. Colours in the same group are the same price.
          </p>
          <div className="space-y-5">
            {VINYL_LETTER_VINYL_GUIDE.map((item) => (
              <div key={item.title}>
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed mt-1">{item.text}</p>
                {item.photos.length > 0 && (
                  <div className={`mt-3 grid gap-3 ${item.photos.length > 1 ? 'sm:grid-cols-2' : ''}`}>
                    {item.photos.map((key) => {
                      const shot = VINYL_LETTER_PHOTOS[key];
                      return (
                        <figure key={shot.src}>
                          <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-100">
                            <Image src={shot.src} alt={shot.alt} fill className="object-contain" sizes="(max-width: 640px) 100vw, 360px" />
                          </div>
                          <figcaption className="mt-1 text-xs text-gray-500">{shot.alt}</figcaption>
                        </figure>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 pt-10 mb-3">How the size is priced</h2>
          <p className="text-gray-600 leading-relaxed">
            A small piece has a minimum charge, so 10 × 10 cm and 10 × 20 cm land close together.
            Once the area grows, the price follows the square metres. Extra copies of a small piece stay near that minimum until the area charge takes over.
            Extra cuts add a set amount each, and from 26 cuts that amount steps up. Delivery is added once, for the whole line.
            The largest piece is 300 cm wide and 120 cm high.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Shop window lettering questions</h2>
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
        title="Related lettering and vinyl"
        links={[
          { href: '/vinyl-stickers', label: 'Vinyl stickers', desc: 'Full-colour printed decals' },
          { href: '/vinyl-banners', label: 'Vinyl banners', desc: 'Printed PVC banners' },
          { href: '/labels-on-a-roll', label: 'Labels on a roll', desc: 'Product labels' },
          { href: '/banners-ireland', label: 'Banners Ireland', desc: 'PVC, roll-ups and displays' },
        ]}
      />
    </Layout>
  );
}
