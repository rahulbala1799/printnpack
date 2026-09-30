import React from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_URL } from '../lib/site';
import { buildProductLd } from '../lib/schema';
import RelatedSeoLinks from '../components/seo/RelatedSeoLinks';
import { useQuoteCart } from '../lib/quote-cart-context';
import { formatEuro } from '../data/clothing-pricing';
import {
  LUXURY_TISSUE_CASE_PRICE,
  LUXURY_TISSUE_COLOURS,
  LUXURY_TISSUE_ID,
  LUXURY_TISSUE_IMAGES,
  LUXURY_TISSUE_SHEET_SIZE,
  LUXURY_TISSUE_SHEETS,
  tissueCasePrice,
} from '../data/luxury-tissue-paper';

const PAGE_PATH = '/luxury-tissue-paper-ireland';
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const HERO = LUXURY_TISSUE_IMAGES[0];

const priceRows = [
  { cases: '1–4 cases', discount: 'List price', each: tissueCasePrice(1) },
  { cases: '5–9 cases', discount: '10% off', each: tissueCasePrice(5) },
  { cases: '10+ cases', discount: '20% off', each: tissueCasePrice(10) },
];

const keyBenefits = [
  'Acid-free tissue that stays colour-fast',
  `${LUXURY_TISSUE_SHEET_SIZE} sheets — 50 cm wide by 75 cm long`,
  `${LUXURY_TISSUE_SHEETS} sheets in every case`,
  `${formatEuro(LUXURY_TISSUE_CASE_PRICE)} + VAT per case`,
  '10% off from 5 cases, 20% off from 10 cases',
  '15 stock colours to match your shop and packaging',
  'Light protection for clothing, gifts, glass and flowers',
  'Supplied across Ireland from Ashbourne, Co. Meath',
];

const applications = [
  'Boutiques & fashion',
  'Gift shops',
  'Jewellers',
  'Florists',
  'Baby & children’s shops',
  'Arts & craft stores',
  'Homeware & glassware',
  'Shop window displays',
];

const seoSections = [
  {
    title: 'Luxury tissue paper for Irish shops',
    body: 'PrintNPack supplies plain luxury colour tissue paper across Ireland. Sheets are acid-free and colour-fast, so they protect clothing, jewellery, glassware and gifts without colour transfer. Each sheet is 500 × 750 mm, and every case contains 480 sheets.',
  },
  {
    title: 'Wholesale tissue paper by the case',
    body: `A case of ${LUXURY_TISSUE_SHEETS} sheets is ${formatEuro(LUXURY_TISSUE_CASE_PRICE)} + VAT. Order 5 or more cases and the case price drops by 10%. Order 10 or more cases and the case price drops by 20%. Mix is by colour when you build a quote — each line is one colour and a case quantity.`,
  },
  {
    title: 'Colour tissue paper delivered nationwide',
    body: 'Choose white, black, baby pink, cerise, red, orange, yellow, lime green, bottle green, Pacific blue, royal blue, lavender, purple, chocolate brown or wine. We deliver to Dublin, Cork, Galway, Limerick, Waterford and every county from our unit in Ashbourne, Co. Meath. Local collection is available.',
    link: { href: '/napkins-ireland', label: 'napkins and table lines' },
  },
];

const deliveryAreas = [
  { city: 'Dublin', detail: 'Colour tissue for boutiques, gift shops and florists across Dublin city and county' },
  { city: 'Cork & Munster', detail: 'Case delivery to Cork, Limerick, Waterford and the rest of Munster' },
  { city: 'Galway & the West', detail: 'Luxury tissue for retailers and florists in Galway and Connacht' },
  { city: 'Nationwide', detail: 'Every county in Ireland, dispatched from Ashbourne, Co. Meath' },
];

const faqs = [
  {
    q: 'How much is luxury tissue paper in Ireland?',
    a: `A case of ${LUXURY_TISSUE_SHEETS} sheets is ${formatEuro(LUXURY_TISSUE_CASE_PRICE)} plus VAT. Five or more cases are 10% off. Ten or more cases are 20% off. Prices on this page and in the quote builder are ex VAT.`,
  },
  {
    q: 'What size are the tissue sheets?',
    a: 'Each sheet measures 50 cm wide by 75 cm long (500 × 750 mm). There are 480 sheets in a case.',
  },
  {
    q: 'Which colours can I order?',
    a: 'White, Black, Baby Pink, Cerise, Red, Orange, Yellow, Lime Green, Bottle Green, Pacific Blue, Royal Blue, Lavender, Purple (Violet), Chocolate Brown and Wine. Pick the colour in the quote builder.',
  },
  {
    q: 'Is the tissue acid-free?',
    a: 'Yes. This luxury tissue is acid-free and colour-fast, so it gives clothing, jewellery, glass and silverware protection from colour transfer.',
  },
  {
    q: 'Do you deliver tissue paper across Ireland?',
    a: 'Yes. PrintNPack delivers to Dublin, Cork, Galway, Limerick and every county from Ashbourne, Co. Meath. Collection from the Ashbourne unit is also available.',
  },
  {
    q: 'Who uses plain colour tissue paper?',
    a: 'Boutiques, gift shops, jewellers, florists, baby shops, craft stores and homeware retailers use it to wrap and present products, and for window displays.',
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
    { '@type': 'ListItem', position: 2, name: 'Products', item: `${SITE_URL}/products` },
    { '@type': 'ListItem', position: 3, name: 'Napkins Ireland', item: `${SITE_URL}/napkins-ireland` },
    { '@type': 'ListItem', position: 4, name: 'Luxury Tissue Paper', item: PAGE_URL },
  ],
};

const productLd = buildProductLd({
  name: 'Luxury Tissue Paper Ireland',
  description:
    'Plain luxury colour tissue paper in Ireland. Acid-free 500 × 750 mm sheets, 480 per case, €29.99 + VAT. 15 colours. 10% off 5 cases, 20% off 10 cases. Nationwide delivery.',
  image: `${SITE_URL}${HERO.src}`,
  url: PAGE_URL,
  price: '29.99',
  sku: 'LUX-TISSUE-480',
  category: 'Tissue Paper',
});

export default function LuxuryTissuePaperIreland() {
  const { openBuilder } = useQuoteCart();
  const title = 'Luxury Tissue Paper Ireland | Colour Tissue 480 Sheets | PrintNPack';
  const description =
    'Buy luxury tissue paper in Ireland — acid-free colour tissue, 500 × 750 mm, 480 sheets per case at €29.99 + VAT. 15 colours. 10% off 5 cases, 20% off 10. Dublin and nationwide delivery.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="luxury tissue paper ireland, colour tissue paper ireland, wholesale tissue paper ireland, acid free tissue paper, tissue paper dublin, tissue paper cork, boutique tissue paper, gift tissue paper ireland, plain tissue paper wholesale, tissue paper 500x750, tissue paper ashbourne"
        />
        <meta name="author" content="PrintNPack Ireland" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="product" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:site_name" content="PrintNPack Ireland" />
        <meta property="og:locale" content="en_IE" />
        <meta property="og:image" content={`${SITE_URL}${HERO.src}`} />
        <meta property="og:image:alt" content={HERO.alt} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${SITE_URL}${HERO.src}`} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }} />
      </Head>

      <nav className="bg-rose-50 border-b border-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-stone-500">
            <li><Link href="/" className="hover:text-stone-700">Home</Link></li>
            <li>/</li>
            <li><Link href="/products" className="hover:text-stone-700">Products</Link></li>
            <li>/</li>
            <li><Link href="/napkins-ireland" className="hover:text-stone-700">Napkins Ireland</Link></li>
            <li>/</li>
            <li className="text-stone-800 font-medium">Luxury Tissue Paper</li>
          </ol>
        </div>
      </nav>

      <section className="relative bg-stone-900 border-b border-stone-800 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(91,164,212,0.18),_transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-semibold text-sky-300 uppercase tracking-[0.2em] mb-4">
                Plain colour tissue · Ireland
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
                Luxury Tissue Paper Ireland
              </h1>
              <p className="text-lg text-stone-300 mb-4 leading-relaxed">
                Finish a sale with acid-free colour tissue. Sheets are {LUXURY_TISSUE_SHEET_SIZE}, packed{' '}
                <strong className="text-white">{LUXURY_TISSUE_SHEETS} per case</strong> at{' '}
                <strong className="text-white">{formatEuro(LUXURY_TISSUE_CASE_PRICE)} + VAT</strong>.
              </p>
              <p className="text-stone-400 mb-8 leading-relaxed">
                Fifteen stock colours for boutiques, gift shops, jewellers and florists. Five cases or more take 10% off.
                Ten cases or more take 20% off. Delivery to Dublin, Cork, Galway and every county from Ashbourne, Co. Meath.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-center">
                  <div className="text-sm font-bold text-sky-300">{formatEuro(LUXURY_TISSUE_CASE_PRICE)} + VAT</div>
                  <div className="text-xs text-stone-400">{LUXURY_TISSUE_SHEETS} sheets</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-center">
                  <div className="text-sm font-bold text-white">5+ cases</div>
                  <div className="text-xs text-stone-400">10% off</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-center">
                  <div className="text-sm font-bold text-white">10+ cases</div>
                  <div className="text-xs text-stone-400">20% off</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-center">
                  <div className="text-sm font-bold text-white">15 colours</div>
                  <div className="text-xs text-stone-400">acid-free</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => openBuilder(LUXURY_TISSUE_ID)}
                  className="inline-flex items-center gap-2 bg-sky-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-sky-500 transition-colors"
                >
                  Choose a colour and quote
                </button>
                <a
                  href="tel:+353894157369"
                  className="inline-flex items-center gap-2 bg-transparent text-white font-semibold px-6 py-3 rounded-xl border border-white/20 hover:border-white/40 transition-colors"
                >
                  Call +353 89 415 7369
                </a>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 bg-white">
              <Image
                src={HERO.src}
                alt={HERO.alt}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-2">Colour tissue, ready to wrap</h2>
          <p className="text-stone-600 mb-8 max-w-2xl">
            Pale, mid and deep tones in blue, green and pink — the same sheet size and case quantity in every colour.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {LUXURY_TISSUE_IMAGES.map((img) => (
              <div key={img.src} className="relative aspect-square rounded-xl overflow-hidden border border-stone-200 bg-stone-50 shadow-sm">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-sky-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-2">Case price</h2>
          <p className="text-stone-600 mb-8 max-w-2xl">
            {LUXURY_TISSUE_SHEETS} sheets per case. Prices are ex VAT. The discount follows the number of cases on that colour.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-sky-100 bg-white">
            <table className="min-w-full text-sm">
              <thead className="bg-stone-50 text-left text-stone-500">
                <tr>
                  <th className="px-5 py-3 font-semibold">Quantity</th>
                  <th className="px-5 py-3 font-semibold">Discount</th>
                  <th className="px-5 py-3 font-semibold">Price per case</th>
                </tr>
              </thead>
              <tbody>
                {priceRows.map((row) => (
                  <tr key={row.cases} className="border-t border-stone-100">
                    <td className="px-5 py-4 font-medium text-stone-900">{row.cases}</td>
                    <td className="px-5 py-4 text-stone-600">{row.discount}</td>
                    <td className="px-5 py-4 font-semibold text-stone-900">{formatEuro(row.each)} + VAT</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-2">15 stock colours</h2>
          <p className="text-stone-600 mb-8 max-w-2xl">
            Select a colour in the quote builder. Each quote line is one colour, priced by the number of cases.
          </p>
          <div className="flex flex-wrap gap-4">
            {LUXURY_TISSUE_COLOURS.map((colour) => (
              <div key={colour.id} className="flex w-24 flex-col items-center gap-2 text-center">
                <span
                  className="h-10 w-10 rounded-full border border-stone-200 shadow-sm"
                  style={{ backgroundColor: colour.hex }}
                />
                <span className="text-xs font-medium text-stone-700 leading-tight">{colour.name}</span>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={() => openBuilder(LUXURY_TISSUE_ID)}
            className="mt-8 inline-flex items-center bg-sky-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-sky-500 transition-colors"
          >
            Add a colour to your quote
          </button>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-rose-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-8">What you get</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {keyBenefits.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-rose-100 bg-white p-4">
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-sky-600 text-white flex items-center justify-center text-xs">✓</span>
                <p className="text-sm text-stone-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {seoSections.map((section) => (
            <div key={section.title} className="mb-10 last:mb-0">
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-3">{section.title}</h2>
              <p className="text-stone-600 leading-relaxed">
                {section.body}
                {section.link && (
                  <>
                    {' '}
                    <Link href={section.link.href} className="text-sky-700 hover:underline font-medium">
                      See {section.link.label}
                    </Link>
                    .
                  </>
                )}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Who orders colour tissue in Ireland</h2>
          <p className="text-stone-400 mb-8 max-w-2xl">
            A light wrap for delicate stock, and a colour match for bags, boxes and shop displays.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {applications.map((app) => (
              <div key={app} className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-medium text-stone-200">
                {app}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-stone-50 border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-4">
            Tissue paper delivery across Ireland
          </h2>
          <p className="text-stone-600 mb-8 max-w-3xl leading-relaxed">
            Orders leave Ashbourne Business Centre, Co. Meath, for Dublin and every county. Call +353 89 415 7369
            or email info@printnpack.ie if you need a regular case delivery.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {deliveryAreas.map(({ city, detail }) => (
              <div key={city} className="rounded-xl border border-stone-200 bg-white p-5">
                <h3 className="font-bold text-stone-900 mb-1">{city}</h3>
                <p className="text-sm text-stone-600 leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-8">Luxury tissue paper — questions</h2>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <div key={q} className="border border-stone-200 rounded-xl p-5">
                <h3 className="font-bold text-stone-900 mb-2">{q}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedSeoLinks
        title="Next to napkins in the catalogue"
        links={[
          { href: '/products/printed-napkins', label: 'Printed Napkins', desc: 'Custom logo napkins from €0.05' },
          { href: '/napkins-ireland', label: 'Napkins Ireland', desc: 'Printed, linen-feel and plain napkins' },
          { href: '/plain-napkins-tableware-ireland', label: 'Plain Napkins Wholesale', desc: 'Bulk white napkins by the case' },
          { href: '/luxury-paper-bags-ireland', label: 'Luxury Paper Bags', desc: 'Carrier bags for the same counter' },
          { href: '/products', label: 'All Products', desc: 'Full print and packaging catalogue' },
        ]}
      />

      <section className="py-12 lg:py-16 bg-stone-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Order luxury tissue by the case</h2>
          <p className="text-stone-400 mb-6">
            {formatEuro(LUXURY_TISSUE_CASE_PRICE)} + VAT for {LUXURY_TISSUE_SHEETS} sheets. Pick a colour, then add the cases.
          </p>
          <button
            type="button"
            onClick={() => openBuilder(LUXURY_TISSUE_ID)}
            className="inline-flex items-center bg-sky-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-sky-500 transition-colors"
          >
            Open the quote builder
          </button>
        </div>
      </section>
    </Layout>
  );
}
