import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/luxury-tissue-paper-ireland-colours-buying-guide`;
const HUB_HREF = '/luxury-tissue-paper-ireland';
const PRINTED_TISSUE_HREF = '/custom-printed-tissue-paper-ireland';
const RIBBON_HREF = '/printed-ribbon-ireland';
const ROPE_BAGS_HREF = '/luxury-rope-handle-bags-ireland';
const NAPKINS_HREF = '/napkins-ireland';

const HERO_IMAGE = '/images/products/luxury-tissue-paper/luxury-tissue-paper-ireland-blue.jpg';
const GREEN_IMAGE = '/images/products/luxury-tissue-paper/luxury-tissue-paper-ireland-green.jpg';
const PINK_IMAGE = '/images/products/luxury-tissue-paper/luxury-tissue-paper-ireland-pink.jpg';
const PRINTED_TISSUE_IMAGE =
  '/images/products/custom-printed-tissue-paper/luxury-custom-printed-tissue-paper-black-gold-ireland.jpg';
const RIBBON_IMAGE = '/images/products/printed-ribbon/printed-ribbon-widths.jpg';
const ROPE_BAG_IMAGE = '/images/products/luxury-rope-handle-bags/hero.jpg';

const COLOURS = [
  'White',
  'Black',
  'Baby Pink',
  'Cerise',
  'Red',
  'Orange',
  'Yellow',
  'Lime Green',
  'Bottle Green',
  'Pacific Blue',
  'Royal Blue',
  'Lavender',
  'Purple (Violet)',
  'Chocolate Brown',
  'Wine',
];

const priceRows = [
  { cases: '1–4 cases', discount: 'List price', each: '€29.99' },
  { cases: '5–9 cases', discount: '10% off', each: '€26.99' },
  { cases: '10+ cases', discount: '20% off', each: '€23.99' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Luxury Tissue Paper Ireland: Colours, Case Packs & Wholesale Buying Guide',
  description:
    'A practical buying guide to plain luxury colour tissue paper in Ireland — 500 × 750 mm sheets, 480 per case, 15 stock colours, case pricing from €29.99 + VAT, with nationwide delivery from Ashbourne.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-11-17',
  dateModified: '2026-11-17',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I buy luxury tissue paper wholesale in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack stocks plain acid-free luxury colour tissue paper — 500 × 750 mm sheets, 480 per case, 15 stock colours — from €29.99 + VAT per case. Delivery from Ashbourne, Co. Meath to Dublin, Cork, Galway and nationwide.',
      },
    },
    {
      '@type': 'Question',
      name: 'What size are the luxury tissue sheets?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Each sheet measures 500 × 750 mm (50 cm × 75 cm). Every case holds 480 sheets. That size wraps clothing, jewellery, gifts, glassware and florist bunches without constant piecing of smaller sheets.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much is luxury tissue paper per case in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'List price is €29.99 + VAT per case. Order 5–9 cases for 10% off (€26.99 + VAT each). Order 10 or more cases for 20% off (€23.99 + VAT each). Prices are ex VAT; check the live product page when you build a quote.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I buy plain colour tissue or custom printed tissue?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Choose plain luxury colour tissue when you need stock colours by the case, fast restock and no artwork proof. Choose custom printed tissue when every sheet should carry your logo or pattern for branded unboxing. Many Irish boutiques use plain colour tissue day-to-day and printed tissue for premium gift lines.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you deliver luxury tissue paper to Dublin, Cork and Galway?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. PrintNPack delivers luxury tissue paper to Dublin, Cork, Galway, Limerick and every Irish county from Ashbourne, Co. Meath. Local buyers can also collect from the Ashbourne unit.',
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
      name: 'Luxury Tissue Paper Ireland Buying Guide',
      item: PAGE_URL,
    },
  ],
};

export default function LuxuryTissuePaperIrelandColoursBuyingGuide() {
  const title =
    'Luxury Tissue Paper Ireland: Colours, Case Packs & Wholesale Buying Guide';
  const description =
    'Buy luxury tissue paper in Ireland with confidence — plain acid-free 500 × 750 mm sheets, 480 per case, 15 stock colours from €29.99 + VAT, with delivery to Dublin, Cork, Galway and nationwide from Ashbourne.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="luxury tissue paper ireland, colour tissue paper wholesale ireland, tissue paper dublin, acid free tissue paper cork, gift wrap tissue galway, boutique tissue paper ireland, tissue paper ashbourne, wholesale tissue paper ireland, plain colour tissue sheets, 500x750 tissue paper ireland"
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
          content="Luxury tissue paper Ireland — blue colour tissue sheets wholesale for Dublin boutiques"
        />
        <meta property="article:published_time" content="2026-11-17" />

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
          <span className="text-slate-900">Luxury Tissue Paper Ireland</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            Wholesale Guide
          </span>
          <span className="text-slate-400 text-sm">17 Nov 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Luxury Tissue Paper Ireland: Colours, Case Packs & Wholesale Buying Guide
        </h1>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="relative rounded-2xl overflow-hidden h-48 col-span-2 bg-slate-50">
            <Image
              src={HERO_IMAGE}
              alt="Luxury tissue paper Ireland — pale blue, mid blue and navy colour tissue sheets for Dublin boutiques"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 66vw, 512px"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={GREEN_IMAGE}
                alt="Luxury tissue paper Ireland — mint, sage and bottle green sheets wholesale for Cork gift shops"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={PINK_IMAGE}
                alt="Luxury tissue paper Ireland — blush and coral colour tissue for Galway florists"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Irish boutiques, gift shops and florists need tissue that looks intentional in the bag —
            not a random white sheet that fights the brand. PrintNPack stocks plain{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              luxury tissue paper
            </Link>{' '}
            in 15 acid-free stock colours: each sheet is <strong>500 × 750 mm</strong>, every case holds{' '}
            <strong>480 sheets</strong>, and list pricing starts at <strong>€29.99 + VAT</strong> per
            case, with volume discounts from five cases, dispatched from Ashbourne to Dublin, Cork,
            Galway and nationwide.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            This guide covers which colours suit retail and floristry, how case packs and discounts
            work, and when plain colour tissue beats custom printed tissue. For branded logo sheets,
            see our{' '}
            <Link
              href="/blog/custom-printed-tissue-paper-ireland-buying-guide"
              className="text-blue-600 hover:underline"
            >
              custom printed tissue paper Ireland buying guide
            </Link>
            . Finish bags and boxes with{' '}
            <Link
              href="/blog/custom-printed-ribbon-ireland-widths-moq-buying-guide"
              className="text-blue-600 hover:underline"
            >
              custom printed ribbon
            </Link>{' '}
            or{' '}
            <Link
              href="/blog/luxury-rope-handle-bags-ireland-sizes-moq-buying-guide"
              className="text-blue-600 hover:underline"
            >
              luxury rope handle bags
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Who buys luxury tissue paper wholesale in Ireland?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Typical buyers include Dublin fashion and beauty boutiques wrapping garments and cosmetics,
            Cork gift shops staging seasonal colour stories in the window, Galway jewellers and
            homeware counters protecting metal and glass, florists who need soft sheets for bouquet
            presentation, baby and children’s shops matching pastel tissue to packaging, craft and
            arts stores selling wrap as a product line, and multi-site retailers that want one colour
            tissue family across branches without managing artwork proofs.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Acid-free, colour-fast tissue matters when the sheet sits against clothing, jewellery,
            silverware or pale paper bags — colour transfer ruins a sale presentation. Pair tissue with
            lines under{' '}
            <Link href={NAPKINS_HREF} className="text-blue-600 hover:underline">
              napkins Ireland
            </Link>{' '}
            when the same shop also runs hospitality tables, or keep tissue with retail packaging when
            the priority is unboxing rather than table service.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Ashbourne collection suits Meath and north Dublin shops that also pull bags, ribbon and
            boxes on the same trip. Cork and Galway sites usually take nationwide dispatch and
            consolidate tissue with the rest of the packaging dry store on one order.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Sheet size and case pack — 500 × 750 mm, 480 sheets
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Every sheet measures <strong>500 × 750 mm</strong> (50 cm × 75 cm). That footprint wraps a
            folded jumper, a jewellery box nest, a bottle gift set or a florist bunch without constant
            piecing of smaller sheets. Each case holds <strong>480 sheets</strong> of one colour —
            mix colours as separate quote lines when you need a palette, not a random assortment in one
            carton.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Minimum order is <strong>one case</strong> (no custom-print MOQ). Stock colours ship as
            warehouse inventory, so restocking after a busy gift weekend does not wait on a proof.
            Always confirm the live case price and discount tier on the{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              luxury tissue paper Ireland
            </Link>{' '}
            product page when you build a quote.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            15 stock colours — match the shop, not a print run
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Plain luxury tissue is sold by colour. The current stock range is:
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-1 mb-4 columns-1 sm:columns-2">
            {COLOURS.map((colour) => (
              <li key={colour} className="break-inside-avoid">
                {colour}
              </li>
            ))}
          </ul>
          <p className="text-slate-700 leading-relaxed mb-4">
            Neutrals (White, Black, Chocolate Brown) suit fashion and jewellery counters that want the
            product to lead. Soft pinks and lavender suit baby, beauty and bridal gift shops. Bottle
            green, Pacific blue and wine suit florists and seasonal window stories. Cerise, red, orange
            and yellow punch through kraft bags for Christmas and Valentine’s peaks.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Pick one hero colour for everyday wrap and one accent colour for gift-with-purchase or
            window display — two cases of the hero colour plus one accent case is a common Dublin
            boutique pattern before stepping into the five-case discount tier.
          </p>

          <div className="grid sm:grid-cols-3 gap-3 mb-8 not-prose">
            <div className="relative rounded-xl overflow-hidden h-36 bg-slate-50">
              <Image
                src={HERO_IMAGE}
                alt="Luxury tissue paper Ireland — blue colour family sheets wholesale Ashbourne"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 240px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-36 bg-slate-50">
              <Image
                src={GREEN_IMAGE}
                alt="Luxury tissue paper Ireland — green colour family for Cork florists"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 240px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-36 bg-slate-50">
              <Image
                src={PINK_IMAGE}
                alt="Luxury tissue paper Ireland — pink colour family for Dublin gift shops"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 240px"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Case pricing — €29.99 list, volume discounts from 5 and 10
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Published pricing is ex VAT. List price is <strong>€29.99 + VAT</strong> per case. Order{' '}
            <strong>5–9 cases</strong> for <strong>10% off</strong> (€26.99 + VAT each). Order{' '}
            <strong>10 or more cases</strong> for <strong>20% off</strong> (€23.99 + VAT each). Mix is
            by colour when you build a quote — each line is one colour and a case quantity.
          </p>

          <div className="overflow-x-auto mb-8 not-prose">
            <table className="min-w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
              <thead className="bg-slate-50 text-left">
                <tr>
                  <th className="px-4 py-3 font-semibold text-slate-900">Cases</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">Discount</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">Price per case (ex VAT)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {priceRows.map((row) => (
                  <tr key={row.cases}>
                    <td className="px-4 py-3 text-slate-900 font-medium">{row.cases}</td>
                    <td className="px-4 py-3 text-slate-700">{row.discount}</td>
                    <td className="px-4 py-3 text-slate-700">{row.each}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-slate-700 leading-relaxed mb-8">
            A single-site Galway gift shop often starts on one or two cases of a hero colour. Multi-site
            groups consolidating Christmas wrap usually push into the 10-case tier and split colours
            across branches. Check the live quote builder on{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              luxury tissue paper Ireland
            </Link>{' '}
            before you lock quantities.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Plain colour tissue vs custom printed tissue
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            This guide is about <strong>plain wholesale warehouse stock</strong> — no logo, no pattern
            print, no artwork proof. Choose it when colour match and restock speed matter more than a
            printed mark on every sheet.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Choose{' '}
            <Link href={PRINTED_TISSUE_HREF} className="text-blue-600 hover:underline">
              custom printed tissue paper
            </Link>{' '}
            when ecommerce and boutique unboxing should carry your logo or a bespoke pattern. Many Irish
            retailers use plain colour tissue for everyday sales and printed tissue for premium gift
            lines, subscriptions or launch kits — see the{' '}
            <Link
              href="/blog/custom-printed-tissue-paper-ireland-buying-guide"
              className="text-blue-600 hover:underline"
            >
              printed tissue buying guide
            </Link>{' '}
            for that route.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Pair either tissue with{' '}
            <Link href={RIBBON_HREF} className="text-blue-600 hover:underline">
              printed ribbon
            </Link>
            ,{' '}
            <Link href={ROPE_BAGS_HREF} className="text-blue-600 hover:underline">
              luxury rope handle bags
            </Link>{' '}
            or{' '}
            <Link
              href="/blog/luxury-die-cut-paper-bags-ireland-buying-guide"
              className="text-blue-600 hover:underline"
            >
              luxury die-cut paper bags
            </Link>{' '}
            so the wrap, handle and bag read as one retail finish rather than three unrelated SKUs.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-8 not-prose">
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={PRINTED_TISSUE_IMAGE}
                alt="Custom printed tissue paper Ireland — branded logo tissue vs plain colour sheets Dublin"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={ROPE_BAG_IMAGE}
                alt="Luxury rope handle bags Ireland — pair with colour tissue for Cork boutiques"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Delivery across Ireland from Ashbourne
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            PrintNPack is based in Ashbourne, Co. Meath — convenient for Dublin and Meath collections,
            with nationwide dispatch for Cork, Galway, Limerick, Waterford and every other county.
            Luxury tissue moves as warehouse stock, not made-to-print jobs. Local buyers who can collect
            often combine tissue with bags, ribbon and boxes on one Ashbourne pickup.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Christmas, Mother’s Day and Valentine’s weekends are where tissue stockouts show —
            improvising with printer paper or the wrong colour in a kraft bag looks inconsistent on the
            counter. Plan case counts around gift peaks, not a quiet midweek average.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            UK or Europe shipping is only confirmed case-by-case on request; this guide focuses on Irish
            wholesale delivery, which is the core service for luxury tissue paper.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How to order luxury tissue paper in Ireland
          </h2>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-8">
            <li>Choose a hero colour that matches your bags, boxes or shop palette</li>
            <li>Add an accent colour for seasonal windows or gift-with-purchase if needed</li>
            <li>
              Open{' '}
              <Link href={HUB_HREF} className="text-blue-600 hover:underline">
                luxury tissue paper Ireland
              </Link>{' '}
              and build a quote line per colour
            </li>
            <li>Match case counts to volume — 480 sheets per case, MOQ one case</li>
            <li>Watch the 5-case (10% off) and 10-case (20% off) discount tiers</li>
            <li>Add ribbon, rope-handle bags or printed tissue if one delivery can cover them</li>
            <li>Take nationwide delivery or collect from Ashbourne, Co. Meath</li>
          </ol>

          <div className="bg-slate-900 rounded-xl p-6 mb-8 text-white not-prose">
            <p className="font-semibold mb-1">Ready to restock luxury tissue paper?</p>
            <p className="text-slate-400 text-sm mb-4">
              Plain acid-free colour tissue — 500 × 750 mm, 480 sheets per case, 15 stock colours from
              €29.99 + VAT, delivered across Ireland from Ashbourne.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={HUB_HREF}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Shop Luxury Tissue →
              </Link>
              <Link
                href={PRINTED_TISSUE_HREF}
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Custom Printed Tissue
              </Link>
              <Link
                href="/quote"
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6 not-prose">
            {[
              {
                q: 'Where can I buy luxury tissue paper wholesale in Ireland?',
                a: 'PrintNPack stocks plain acid-free luxury colour tissue — 500 × 750 mm, 480 per case, 15 colours — from €29.99 + VAT per case, with delivery from Ashbourne to Dublin, Cork, Galway and nationwide.',
              },
              {
                q: 'What size are the luxury tissue sheets?',
                a: 'Each sheet is 500 × 750 mm (50 cm × 75 cm). Every case holds 480 sheets of one colour.',
              },
              {
                q: 'How much is luxury tissue paper per case in Ireland?',
                a: 'List price is €29.99 + VAT per case. Five to nine cases are 10% off (€26.99). Ten or more cases are 20% off (€23.99). Prices are ex VAT.',
              },
              {
                q: 'Should I buy plain colour tissue or custom printed tissue?',
                a: 'Use plain colour tissue for stock colours, fast restock and no artwork. Use custom printed tissue when every sheet should carry your logo or pattern. Many shops use both.',
              },
              {
                q: 'Do you deliver luxury tissue paper to Dublin, Cork and Galway?',
                a: 'Yes. We deliver to Dublin, Cork, Galway, Limerick and all Irish counties, with collection available from Ashbourne, Co. Meath.',
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
              src: PRINTED_TISSUE_IMAGE,
              title: 'Custom Printed Tissue Paper Ireland Buying Guide',
            },
            {
              href: '/blog/custom-printed-ribbon-ireland-widths-moq-buying-guide',
              src: RIBBON_IMAGE,
              title: 'Custom Printed Ribbon Ireland: Widths & MOQ Buying Guide',
            },
            {
              href: '/blog/luxury-rope-handle-bags-ireland-sizes-moq-buying-guide',
              src: ROPE_BAG_IMAGE,
              title: 'Luxury Rope Handle Bags Ireland: Sizes & MOQ Buying Guide',
            },
            {
              href: '/blog/luxury-die-cut-paper-bags-ireland-buying-guide',
              src: '/images/products/luxury-paper-bags/luxury-paper-bags-ireland-premium-die-cut.jpg',
              title: 'Luxury Die-Cut Paper Bags Ireland Buying Guide',
            },
          ].map(({ href, src, title: relatedTitle }) => (
            <Link
              key={href}
              href={href}
              className="group flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors"
            >
              <div className="relative w-16 h-14 flex-shrink-0 rounded-lg overflow-hidden bg-slate-100">
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
