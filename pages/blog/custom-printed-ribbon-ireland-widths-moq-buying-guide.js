import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/custom-printed-ribbon-ireland-widths-moq-buying-guide`;
const HUB_HREF = '/printed-ribbon-ireland';
const HERO_IMAGE = '/images/products/printed-ribbon/printed-ribbon-white.jpg';
const WIDTHS_IMAGE = '/images/products/printed-ribbon/printed-ribbon-widths.jpg';
const BLACK_IMAGE = '/images/products/printed-ribbon/printed-ribbon-black.jpg';
const NAVY_IMAGE = '/images/products/printed-ribbon/printed-ribbon-navy.jpg';
const GOLD_IMAGE = '/images/products/printed-ribbon/printed-ribbon-gold.jpg';
const TISSUE_IMAGE =
  '/images/products/custom-printed-tissue-paper/luxury-custom-printed-tissue-paper-black-gold-ireland.jpg';

const FROM_PRICE = '125.75';
const PLAIN_FROM_PRICE = '38.39';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Custom Printed Ribbon Ireland: Widths 10–100 mm, Roll vs Cut & MOQ Buying Guide',
  description:
    'A practical buying guide to custom printed satin ribbon in Ireland — widths from 10 mm to 100 mm, roll vs pre-cut pieces, 1–4 colour logo print, MOQ and nationwide delivery included from Ashbourne.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-10-26',
  dateModified: '2026-10-26',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I buy custom printed ribbon in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: `PrintNPack supplies custom printed double-faced satin ribbon across Ireland from Ashbourne, Co. Meath. Order a roll or pre-cut pieces with your logo in 1 to 4 colours. From €${FROM_PRICE} ex VAT for 100 metres of 10 mm ribbon printed in one colour, with delivery to Ireland included.`,
      },
    },
    {
      '@type': 'Question',
      name: 'What printed ribbon widths are available in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Widths are 10, 15, 20, 25, 30, 40, 50 and 100 mm. 10 mm suits a thin tie, 25 mm is the usual gift ribbon, and 100 mm works as a sash. Ribbon colour does not change the price — there are 28 satin colours.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I order printed ribbon on a roll or as cut pieces?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A roll is one continuous length wound 100 metres to a roll — choose 100, 200, 300, 500, 1,000 or 2,000 metres and cut bows yourself. Cut pieces arrive already cut to 10, 15, 20, 25 or 33 cm in quantities of 300, 500, 1,000 or 2,000, with a straight, diagonal or notched end. The end shape does not change the price.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the minimum order for branded ribbon in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Minimums are 100 metres on a roll, or 300 cut pieces. On a roll, two or more print colours start at 300 metres. A plain roll with no logo starts from a lower from-price than one-colour print.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is delivery included for printed ribbon in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Quoted ribbon prices are ex VAT and include delivery to Ireland. PrintNPack ships from Ashbourne to Dublin, Cork, Galway and nationwide.',
      },
    },
  ],
};

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteUrl}/blog` },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Custom Printed Ribbon Ireland Buying Guide',
      item: PAGE_URL,
    },
  ],
};

const widthRows = [
  { width: '10–15 mm', use: 'Thin ties on small jewellery boxes, favour tags and delicate retail wraps' },
  { width: '20–25 mm', use: 'Everyday gift ribbon for bags, cake boxes and ecommerce parcels' },
  { width: '30–50 mm', use: 'Wider bows on gift sets, magnetic boxes and boutique carrier bags' },
  { width: '100 mm', use: 'Sashes for displays, hampers and large presentation boxes' },
];

const formRows = [
  {
    form: 'Roll',
    detail: '100–2,000 m, wound 100 m per roll — cut bows and lengths in-house',
  },
  {
    form: 'Cut pieces',
    detail: '10–33 cm lengths · 300–2,000 pieces · straight, diagonal or notch end',
  },
];

const buyerRows = [
  {
    buyer: 'Ecommerce & online retail',
    use: 'Seal tissue folds and finish parcel unboxing with a logo bow',
  },
  {
    buyer: 'Boutiques & gift shops',
    use: 'Tie carrier bags and counter purchases in brand colours',
  },
  {
    buyer: 'Florists & hampers',
    use: 'Wide bows and sashes on arrangements and presentation boxes',
  },
  {
    buyer: 'Corporate gifting',
    use: 'Match ribbon colour and logo to client or seasonal campaigns',
  },
];

export default function CustomPrintedRibbonIrelandWidthsMoqBuyingGuide() {
  const title =
    'Custom Printed Ribbon Ireland: Widths 10–100 mm, Roll vs Cut & MOQ Buying Guide';
  const description = `How to buy custom printed satin ribbon in Ireland — 10–100 mm widths, roll vs cut pieces, 1–4 colour logos, MOQ from 100 metres or 300 pieces, from €${FROM_PRICE} ex VAT with Ireland delivery included from Ashbourne.`;

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="custom printed ribbon ireland, branded satin ribbon dublin, logo ribbon ireland, printed gift ribbon cork, ribbon on a roll ireland, pre-cut branded ribbon galway, satin ribbon printing ashbourne, ecommerce ribbon ireland, gift wrap ribbon with logo, personalised ribbon ireland"
        />
        <meta name="author" content="PrintNPack Ireland" />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:site_name" content="PrintNPack Ireland" />
        <meta property="og:locale" content="en_IE" />
        <meta property="og:image" content={`${siteUrl}${HERO_IMAGE}`} />
        <meta
          property="og:image:alt"
          content="Custom printed ribbon Ireland — white satin roll with logo for Dublin gift packaging"
        />
        <meta property="article:published_time" content="2026-10-26" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${siteUrl}${HERO_IMAGE}`} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />
      </Head>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <Link href="/" className="hover:text-slate-700">
            Home
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-slate-700">
            Blog
          </Link>
          <span>/</span>
          <span className="text-slate-900">Custom Printed Ribbon Ireland</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            Retail Guide
          </span>
          <span className="text-slate-400 text-sm">26 Oct 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Custom Printed Ribbon Ireland: Widths 10–100 mm, Roll vs Cut &amp; MOQ Buying Guide
        </h1>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="relative rounded-2xl overflow-hidden h-48 col-span-2">
            <Image
              src={HERO_IMAGE}
              alt="Custom printed ribbon Ireland — white satin roll with one-colour logo for Dublin boutiques"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 66vw, 512px"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative rounded-xl overflow-hidden flex-1">
              <Image
                src={WIDTHS_IMAGE}
                alt="Printed ribbon widths Ireland — 10 mm, 25 mm and 100 mm white satin compared for gift wrap"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden flex-1">
              <Image
                src={BLACK_IMAGE}
                alt="Branded satin ribbon Ireland — black roll with logo print for Cork and Galway retail"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Branded ribbon is the finishing detail Irish retailers and ecommerce brands often leave
            until last — then notice how much it lifts bags, boxes and tissue. This guide explains how
            to buy{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              custom printed satin ribbon in Ireland
            </Link>
            : which width to choose, when a roll beats pre-cut pieces, how MOQ and print colours work,
            and what delivery from Ashbourne includes. Prices below are ex VAT and taken from the live
            ribbon quote — from €{FROM_PRICE} for 100 metres of 10 mm ribbon printed in one colour,
            with Ireland delivery included.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            What you get: double-faced satin with your logo
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            PrintNPack ribbon is double-faced satin — shiny on both sides, about 1 mm thick — so bows
            and wraps look finished from every angle. Print options are no logo, or your logo in 1, 2,
            3 or 4 colours. There are 28 satin colours; choosing white, black, navy, burgundy, gold or
            another shade does not change the price.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Typical uses in Ireland include gift wrapping, retail bags and boxes, ecommerce unboxing
            and corporate gifts. Pair ribbon with{' '}
            <Link
              href="/custom-printed-tissue-paper-ireland"
              className="text-blue-600 hover:underline"
            >
              custom printed tissue paper
            </Link>{' '}
            and{' '}
            <Link
              href="/luxury-magnetic-closure-boxes-ireland"
              className="text-blue-600 hover:underline"
            >
              magnetic closure gift boxes
            </Link>{' '}
            so the full set reads as one brand system when a parcel opens in Dublin, Cork or Galway.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Who buys custom printed ribbon in Ireland?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Most orders come from brands that already wrap with tissue or bags and want the last
            visible touch to carry a logo. PrintNPack supplies ribbon for gift wrapping, retail bags
            and boxes, ecommerce unboxing and corporate gifts nationwide.
          </p>
          <div className="overflow-x-auto mb-8 not-prose">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-3 pr-4 font-semibold text-slate-900">Buyer</th>
                  <th className="py-3 font-semibold text-slate-900">Typical use</th>
                </tr>
              </thead>
              <tbody>
                {buyerRows.map((row) => (
                  <tr key={row.buyer} className="border-b border-slate-100">
                    <td className="py-3 pr-4 font-medium text-slate-800 whitespace-nowrap">
                      {row.buyer}
                    </td>
                    <td className="py-3 text-slate-700">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Widths from 10 mm to 100 mm: which size to order
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Available widths are 10, 15, 20, 25, 30, 40, 50 and 100 mm. Use the hints on the product
            page as a starting point: 10–15 mm for a thin tie, 25 mm as the usual gift ribbon, 40–50
            mm for a wide bow, and 100 mm as a sash.
          </p>
          <div className="overflow-x-auto mb-6 not-prose">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-3 pr-4 font-semibold text-slate-900">Width</th>
                  <th className="py-3 font-semibold text-slate-900">Best for</th>
                </tr>
              </thead>
              <tbody>
                {widthRows.map((row) => (
                  <tr key={row.width} className="border-b border-slate-100">
                    <td className="py-3 pr-4 font-medium text-slate-800 whitespace-nowrap">
                      {row.width}
                    </td>
                    <td className="py-3 text-slate-700">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-700 leading-relaxed mb-8">
            Wider ribbon uses more material, so line totals rise with width even when colour stays the
            same. Quote the exact width on the{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              printed ribbon Ireland
            </Link>{' '}
            page rather than guessing from a generic catalogue.
          </p>

          <div className="relative rounded-2xl overflow-hidden h-56 mb-8 not-prose">
            <Image
              src={WIDTHS_IMAGE}
              alt="Satin ribbon widths Ireland — 10 mm thin tie, 25 mm gift ribbon and 100 mm sash for Ashbourne orders"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Roll vs cut pieces: MOQ and how Irish teams use each
          </h2>
          <div className="overflow-x-auto mb-6 not-prose">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-3 pr-4 font-semibold text-slate-900">Form</th>
                  <th className="py-3 font-semibold text-slate-900">What you order</th>
                </tr>
              </thead>
              <tbody>
                {formRows.map((row) => (
                  <tr key={row.form} className="border-b border-slate-100">
                    <td className="py-3 pr-4 font-medium text-slate-800 whitespace-nowrap">
                      {row.form}
                    </td>
                    <td className="py-3 text-slate-700">{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-700 leading-relaxed mb-4">
            Choose a <strong>roll</strong> when packing staff already cut bows at different lengths —
            ecommerce fulfilment, florists and gift shops often prefer continuous stock. Roll lengths
            are 100, 200, 300, 500, 1,000 or 2,000 metres, always wound 100 metres to a roll.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Choose <strong>cut pieces</strong> when you want consistent lengths ready for the till or
            packing bench: 10, 15, 20, 25 or 33 cm, in 300, 500, 1,000 or 2,000 pieces. Ends can be
            straight, diagonal or notched; the end does not change the price. Minimums are 100 metres
            on a roll, or 300 cut pieces.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Print colours, plain stock and from-prices
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            One-colour logos suit most Irish brands: clean, readable and easy to approve. Multi-colour
            logos (2, 3 or 4 colours) are available; on a roll, two or more colours start at 300
            metres. Plain satin with no logo is also available if you only need colour-matched ribbon
            without branding.
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
            <li>
              From €{FROM_PRICE} ex VAT — 100 metres of 10 mm ribbon printed in one colour, Ireland
              delivery included
            </li>
            <li>
              From €{PLAIN_FROM_PRICE} ex VAT — 100 metres of 10 mm plain satin with no logo, Ireland
              delivery included
            </li>
            <li>Ribbon colour never changes the price across the 28 satin options</li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-8">
            Wider widths and longer rolls change the line total. Use the live configurator on the
            product page for your exact width, print and quantity — do not invent catalogue rates from
            this guide.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-8 not-prose">
            <div className="relative rounded-2xl overflow-hidden h-44">
              <Image
                src={NAVY_IMAGE}
                alt="Navy custom printed ribbon Ireland — satin roll for Galway hospitality gift sets"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 384px"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden h-44">
              <Image
                src={GOLD_IMAGE}
                alt="Gold branded ribbon Ireland — printed satin for Dublin luxury ecommerce unboxing"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 384px"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Build a branded finish: ribbon, tissue, bags and boxes
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Ribbon works best as part of a kit. A practical Irish retail stack looks like this:
          </p>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-6">
            <li>Printed satin ribbon for bows, seals and bag handles</li>
            <li>
              Custom printed tissue as the first branded layer — see our{' '}
              <Link
                href="/blog/custom-printed-tissue-paper-ireland-buying-guide"
                className="text-blue-600 hover:underline"
              >
                custom printed tissue paper Ireland buying guide
              </Link>
            </li>
            <li>
              Luxury die-cut or logo paper bags for walk-out — covered in our{' '}
              <Link
                href="/blog/luxury-die-cut-paper-bags-ireland-buying-guide"
                className="text-blue-600 hover:underline"
              >
                luxury die-cut paper bags Ireland guide
              </Link>{' '}
              and{' '}
              <Link href="/blog/paper-bags-with-logo-ireland" className="text-blue-600 hover:underline">
                paper bags with logo Ireland
              </Link>
            </li>
            <li>
              Magnetic closure boxes when the product needs a rigid open —{' '}
              <Link
                href="/blog/luxury-magnetic-closure-boxes-ireland-buying-guide"
                className="text-blue-600 hover:underline"
              >
                luxury magnetic closure boxes Ireland buying guide
              </Link>
            </li>
          </ol>

          <div className="relative rounded-2xl overflow-hidden h-52 mb-8 not-prose">
            <Image
              src={TISSUE_IMAGE}
              alt="Custom printed tissue paper Ireland — pairs with branded satin ribbon for nationwide unboxing"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Delivery across Ireland from Ashbourne
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Quoted ribbon prices include delivery to Ireland. PrintNPack ships from Ashbourne, Co.
            Meath to Dublin, Cork, Galway, Limerick and every county. That suits boutiques stocking
            seasonal gift wrap and ecommerce brands that reorder ribbon with tissue and boxes on a
            fixed cycle.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            UK or Europe delivery is not assumed in the Ireland-included price — ask when you need a
            quote outside Ireland. Local buyers can also discuss collection from Co. Meath.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How to order custom printed ribbon in Ireland
          </h2>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-8">
            <li>Pick width (10–100 mm) and satin colour from the 28 options</li>
            <li>Choose roll metres or cut length/quantity, plus end style if cut</li>
            <li>Select no logo, or logo print in 1–4 colours (multi-colour rolls from 300 m)</li>
            <li>
              Configure and order on the{' '}
              <Link href={HUB_HREF} className="text-blue-600 hover:underline">
                printed ribbon Ireland
              </Link>{' '}
              page, or request help via the{' '}
              <Link href="/quote" className="text-blue-600 hover:underline">
                free quote form
              </Link>
            </li>
            <li>Approve artwork, then take Ireland delivery included in the price</li>
          </ol>

          <div className="bg-slate-900 rounded-xl p-6 mb-8 text-white not-prose">
            <p className="font-semibold mb-1">Ready to brand your gift wrap?</p>
            <p className="text-slate-400 text-sm mb-4">
              Custom printed satin ribbon from €{FROM_PRICE} ex VAT — widths 10–100 mm, roll or cut
              pieces, Ireland delivery included from Ashbourne.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={HUB_HREF}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Printed Ribbon Ireland →
              </Link>
              <Link
                href="/quote"
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/custom-printed-tissue-paper-ireland"
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Custom Tissue Paper
              </Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6 not-prose">
            {[
              {
                q: 'Where can I buy custom printed ribbon in Ireland?',
                a: `PrintNPack supplies custom printed double-faced satin ribbon across Ireland from Ashbourne, Co. Meath. Order a roll or pre-cut pieces with your logo in 1 to 4 colours. From €${FROM_PRICE} ex VAT for 100 metres of 10 mm ribbon printed in one colour, with delivery to Ireland included.`,
              },
              {
                q: 'What printed ribbon widths are available in Ireland?',
                a: 'Widths are 10, 15, 20, 25, 30, 40, 50 and 100 mm. 10 mm suits a thin tie, 25 mm is the usual gift ribbon, and 100 mm works as a sash. Ribbon colour does not change the price — there are 28 satin colours.',
              },
              {
                q: 'Should I order printed ribbon on a roll or as cut pieces?',
                a: 'A roll is one continuous length wound 100 metres to a roll — choose 100, 200, 300, 500, 1,000 or 2,000 metres and cut bows yourself. Cut pieces arrive already cut to 10, 15, 20, 25 or 33 cm in quantities of 300, 500, 1,000 or 2,000, with a straight, diagonal or notched end. The end shape does not change the price.',
              },
              {
                q: 'What is the minimum order for branded ribbon in Ireland?',
                a: 'Minimums are 100 metres on a roll, or 300 cut pieces. On a roll, two or more print colours start at 300 metres. A plain roll with no logo starts from a lower from-price than one-colour print.',
              },
              {
                q: 'Is delivery included for printed ribbon in Ireland?',
                a: 'Yes. Quoted ribbon prices are ex VAT and include delivery to Ireland. PrintNPack ships from Ashbourne to Dublin, Cork, Galway and nationwide.',
              },
            ].map(({ q, a }) => (
              <div key={q} className="border-l-4 border-slate-400 pl-5">
                <h3 className="font-semibold text-slate-900 mb-2">{q}</h3>
                <p className="text-slate-700 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 gap-4">
          {[
            {
              href: '/blog/custom-printed-tissue-paper-ireland-buying-guide',
              src: TISSUE_IMAGE,
              title: 'Custom Printed Tissue Paper Ireland: Ecommerce Unboxing Guide',
            },
            {
              href: '/blog/luxury-magnetic-closure-boxes-ireland-buying-guide',
              src: '/images/products/luxury-magnetic-closure-boxes/luxury-magnetic-closure-box-ireland-gold-foil.jpg',
              title: 'Luxury Magnetic Closure Boxes Ireland Buying Guide',
            },
            {
              href: '/blog/luxury-die-cut-paper-bags-ireland-buying-guide',
              src: '/images/products/luxury-paper-bags/luxury-paper-bags-ireland-premium-die-cut.jpg',
              title: 'Luxury Die-Cut Paper Bags Ireland Buying Guide',
            },
            {
              href: '/blog/paper-bags-with-logo-ireland',
              src: '/images/products/twisted-handle-bags/1.png',
              title: 'Paper Bags with Logo Ireland: Twisted, Flat Handle & SOS',
            },
          ].map(({ href, src, title: relatedTitle }) => (
            <Link
              key={href}
              href={href}
              className="group flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors"
            >
              <div className="relative w-16 h-14 flex-shrink-0 rounded-lg overflow-hidden">
                <Image src={src} alt={relatedTitle} fill className="object-cover" sizes="64px" />
              </div>
              <p className="text-sm font-medium text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                {relatedTitle}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/blog" className="text-slate-500 hover:text-slate-700 text-sm font-medium">
            ← Back to all guides
          </Link>
        </div>
      </main>
    </Layout>
  );
}
