import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/greaseproof-food-bags-ireland-sizes-buying-guide`;
const HUB_HREF = '/plain-packaging?category=Greaseproof+Food+Bag';
const PLAIN_BAGS_HREF = '/plain-paper-bags-ireland';
const TWO_LB_LINED_HREF = '/plain-packaging/2lb-greaseproof-lined-kraft-bags-7x9-345-199990';
const THREE_LB_LINED_HREF = '/plain-packaging/3lb-greaseproof-lined-kraft-bags-85x11-235-199991';
const THREE_QT_LINED_HREF = '/plain-packaging/3qt-greaseproof-lined-kraft-bags-11x14-1505-kilo-199993';
const FOUR_QT_LINED_HREF = '/plain-packaging/4qt-greaseproof-lined-kraft-bags-11x16-140-199994';
const CHIP_5X5_HREF = '/plain-packaging/5x5-greaseproof-chip-bags-1000-200001';
const CHIP_1LB_HREF = '/plain-packaging/1lb-greaseproof-chip-bags-6x7-1000-200002';
const TWO_LB_BAGS_HREF = '/plain-packaging/2lb-greaseproof-bags-7x9-1000-200003';

const HERO_IMAGE = '/images/plain-packaging/199990.webp';
const THREE_LB_IMAGE = '/images/plain-packaging/199991.webp';
const CHIP_IMAGE = '/images/plain-packaging/200001.webp';
const ONE_LB_CHIP_IMAGE = '/images/plain-packaging/200002.webp';
const TWO_LB_IMAGE = '/images/plain-packaging/200003.webp';
const THREE_QT_IMAGE = '/images/plain-packaging/199993.webp';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Greaseproof Food Bags Ireland: Lined Kraft & Chip Bag Sizes Buying Guide',
  description:
    'A practical buying guide to plain greaseproof food bags in Ireland — lined kraft from 2lb to 4QT, 5×5″ and 1lb chip bags, case packs, tiered wholesale pricing, and nationwide delivery from Ashbourne for chippers and takeaways.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-10-25',
  dateModified: '2026-10-25',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I buy greaseproof food bags wholesale in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack stocks plain Greaseproof Food Bags by the case — lined kraft sizes from 2lb to 4QT plus greaseproof chip bags — with tiered wholesale pricing. Delivery from Ashbourne, Co. Meath to Dublin, Cork, Galway and nationwide.',
      },
    },
    {
      '@type': 'Question',
      name: 'What greaseproof food bag sizes are available in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lined kraft covers 2lb 7×9″ (345), 3lb 8.5×11″ (235), 3QT 11×14 (150) and 4QT 11×16 (140). Chip and greaseproof bags include 5×5″ (1,000), 1lb 6×7 (1,000) and 2lb 7×9″ (1,000). Pack counts are taken from the live product listings.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between greaseproof food bags and flat kraft food bags?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Flat kraft food bags are plain brown kraft wrap bags for dry bakery and lighter takeaway. Greaseproof food bags add a grease-resistant wall — lined kraft or dedicated chip bags — when oil, gravy or fried food would soak through plain kraft. PrintNPack lists both ranges separately in plain packaging.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are greaseproof food bags the same as printed greaseproof sheets?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Greaseproof food bags are ready-made bag formats for wrapping and bagging hot food. Custom printed greaseproof sheets are flat sheets for lining trays or wrapping with your logo. Many Irish chippers stock both.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you deliver greaseproof food bags to Dublin, Cork and Galway?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. PrintNPack delivers Greaseproof Food Bags to Dublin, Cork, Galway and every Irish county from Ashbourne. Local buyers can also collect from Co. Meath.',
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
      name: 'Greaseproof Food Bags Ireland Buying Guide',
      item: PAGE_URL,
    },
  ],
};

const sizeRows = [
  {
    size: '2lb lined kraft',
    dims: '7 × 9″',
    pack: '345 per case',
    use: 'Everyday oily wraps and smaller fried portions',
  },
  {
    size: '3lb lined kraft',
    dims: '8.5 × 11″',
    pack: '235 per case',
    use: 'Standard chipper and takeaway greaseproof wraps',
  },
  {
    size: '3QT lined kraft',
    dims: '11 × 14″',
    pack: '150 per case',
    use: 'Larger hot-food wraps and multi-item packs',
  },
  {
    size: '4QT lined kraft',
    dims: '11 × 16″',
    pack: '140 per case',
    use: 'Tallest lined kraft serves on the list',
  },
  {
    size: '5×5″ chip bag',
    dims: '5 × 5″',
    pack: '1,000 per case',
    use: 'Small chip, snack and side bagging',
  },
  {
    size: '1lb chip bag',
    dims: '6 × 7″',
    pack: '1,000 per case',
    use: 'High-volume single chip and fry portions',
  },
  {
    size: '2lb greaseproof bag',
    dims: '7 × 9″',
    pack: '1,000 per case',
    use: 'Bulk 2lb greaseproof wrap without lined kraft SKU',
  },
];

export default function GreaseproofFoodBagsIrelandSizesBuyingGuide() {
  const title = 'Greaseproof Food Bags Ireland: Lined Kraft & Chip Bag Sizes Buying Guide';
  const description =
    'Buy greaseproof food bags in Ireland with confidence — lined kraft from 2lb to 4QT, 5×5″ and 1lb chip bags, case packs, tiered wholesale pricing, and delivery to Dublin, Cork, Galway and nationwide from Ashbourne.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="greaseproof food bags ireland, lined kraft bags wholesale ireland, greaseproof chip bags dublin, kraft greaseproof bags cork, chip bags wholesale galway, plain greaseproof bags ashbourne, 2lb greaseproof lined kraft ireland, 5x5 chip bags ireland, takeaway greaseproof bags ireland, greaseproof food bag wholesale ireland"
        />
        <meta name="author" content="PrintNPack Ireland" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
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
          content="Greaseproof food bags Ireland — 2lb lined kraft bags wholesale for takeaways"
        />
        <meta property="article:published_time" content="2026-10-25" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${siteUrl}${HERO_IMAGE}`} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
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
          <span className="text-slate-900">Greaseproof Food Bags Ireland</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            Wholesale Guide
          </span>
          <span className="text-slate-400 text-sm">25 Oct 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Greaseproof Food Bags Ireland: Lined Kraft &amp; Chip Bag Sizes Buying Guide
        </h1>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="relative rounded-2xl overflow-hidden h-48 col-span-2 bg-slate-50">
            <Image
              src={HERO_IMAGE}
              alt="Greaseproof food bags Ireland — 2lb lined kraft bags for Dublin chippers"
              fill
              className="object-contain p-4"
              priority
              sizes="(max-width: 768px) 66vw, 512px"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={CHIP_IMAGE}
                alt="5×5 greaseproof chip bags Ireland — wholesale snack bags for Cork takeaways"
                fill
                className="object-contain p-3"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={THREE_LB_IMAGE}
                alt="3lb greaseproof lined kraft bag Ireland — 8.5×11 inch wholesale Galway"
                fill
                className="object-contain p-3"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            When Friday chips leave grease rings on plain kraft, Irish chippers and night counters move
            to greaseproof food bags. Lined kraft walls and dedicated chip bags keep oil and gravy in
            the wrap — not on the customer&apos;s hands or the carrier bag. Size and case pack decide
            whether you restock mid-week or sail through the weekend from one Ashbourne order.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            This guide covers <strong>greaseproof food bags in Ireland</strong> as plain catering stock
            — greaseproof-lined kraft from <strong>2lb to 4QT</strong>, plus{' '}
            <strong>5 × 5″</strong>, <strong>1lb 6 × 7″</strong> and <strong>2lb 7 × 9″</strong> chip /
            greaseproof bags — and how{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              PrintNPack&apos;s Greaseproof Food Bag
            </Link>{' '}
            category works with tiered case pricing and delivery from Ashbourne. For the wider plain
            bag cluster, see{' '}
            <Link href={PLAIN_BAGS_HREF} className="text-blue-600 hover:underline">
              plain paper bags Ireland
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Why Irish kitchens buy plain greaseproof bags by the case
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Plain greaseproof bags are warehouse stock: order by the case, no print proof, no brand MOQ.
            That suits Dublin chippers wrapping fish and chips at closing time and Cork takeaways that
            need a 5 × 5″ snack bag before a Saturday queue. Branding can sit on a carrier, napkin or
            printed greaseproof sheet — the food bag only has to resist grease, wrap and travel.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            PrintNPack holds Greaseproof Food Bags beside Flat Kraft Food Bags, SOS and MG kraft in
            plain packaging. Orders ship nationwide; local buyers can collect from Ashbourne, Co. Meath.
            For a broader view of bulk catering lines, see our{' '}
            <Link href="/blog/plain-packaging-wholesale-ireland" className="text-blue-600 hover:underline">
              plain packaging wholesale Ireland
            </Link>{' '}
            guide. Unlined brown kraft wraps are covered separately in the{' '}
            <Link
              href="/blog/flat-kraft-food-bags-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              flat kraft food bags Ireland
            </Link>{' '}
            guide.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Greaseproof food bag sizes at a glance
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Start with how oily the portion is and how large the wrap needs to be — often{' '}
            <strong>2lb or 3lb lined kraft</strong> for everyday fried food,{' '}
            <strong>5 × 5″ or 1lb chip bags</strong> for high-volume sides, then{' '}
            <strong>3QT–4QT</strong> for bulkier packs — and confirm the case count. Use the table
            below, then check live case tiers on each product page.
          </p>

          <div className="overflow-x-auto mb-8 not-prose">
            <table className="min-w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
              <thead className="bg-slate-50 text-left">
                <tr>
                  <th className="px-4 py-3 font-semibold text-slate-900">Product</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">Size</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">Case pack</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">Best for</th>
                </tr>
              </thead>
              <tbody>
                {sizeRows.map((row) => (
                  <tr key={`${row.size}-${row.dims}`} className="border-t border-slate-200">
                    <td className="px-4 py-3 text-slate-900 font-medium">{row.size}</td>
                    <td className="px-4 py-3 text-slate-700">{row.dims}</td>
                    <td className="px-4 py-3 text-slate-700">{row.pack}</td>
                    <td className="px-4 py-3 text-slate-700">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="relative rounded-2xl overflow-hidden h-56 mb-8 bg-slate-50 not-prose">
            <Image
              src={ONE_LB_CHIP_IMAGE}
              alt="1lb greaseproof chip bags Ireland — 6×7 inch wholesale for Ashbourne chippers"
              fill
              className="object-contain p-6"
              sizes="(max-width: 768px) 100vw, 720px"
            />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Lined kraft — 2lb and 3lb everyday wraps
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Everyday oily wraps often start on the{' '}
            <Link href={TWO_LB_LINED_HREF} className="text-blue-600 hover:underline">
              2lb Greaseproof Lined Kraft Bags (7 × 9″)
            </Link>{' '}
            line — <strong>345 bags per case</strong> — or step up to the{' '}
            <Link href={THREE_LB_LINED_HREF} className="text-blue-600 hover:underline">
              3lb Greaseproof Lined Kraft Bags (8.5 × 11″)
            </Link>{' '}
            at <strong>235 per case</strong>. Same lined-kraft family, different footprint and pack
            count — check both before you compare weekly burn rates.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Dublin and Galway counters often keep 2lb lined kraft as standing wrap stock, then add the
            measured 8.5 × 11″ 3lb SKU when portion photos and pricing boards need a consistent wrap
            size.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            3QT and 4QT lined kraft for larger portions
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Larger hot-food wraps sit on the{' '}
            <Link href={THREE_QT_LINED_HREF} className="text-blue-600 hover:underline">
              3QT Greaseproof Lined Kraft Bags (11 × 14)
            </Link>{' '}
            at <strong>150 per case</strong>, and the{' '}
            <Link href={FOUR_QT_LINED_HREF} className="text-blue-600 hover:underline">
              4QT Greaseproof Lined Kraft Bags (11 × 16)
            </Link>{' '}
            at <strong>140 per case</strong>. The 3QT line is listed as a 5 kilo case pack — useful when
            you order beside other QT sizes on one wholesale dispatch.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Cork chippers and festival vans often run 3QT as the shared or family wrap and keep 4QT for
            the tallest greaseproof packs. Pack counts fall as the bag gets larger — do not assume every
            QT case holds the same unit count.
          </p>

          <div className="relative rounded-2xl overflow-hidden h-56 mb-8 bg-slate-50 not-prose">
            <Image
              src={THREE_QT_IMAGE}
              alt="3QT greaseproof lined kraft bags Ireland — 11×14 inch wholesale for larger takeaway wraps"
              fill
              className="object-contain p-6"
              sizes="(max-width: 768px) 100vw, 720px"
            />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Chip bags and bulk 2lb greaseproof — 1,000-pack lines
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            High-volume snack and chip bagging sits on the{' '}
            <Link href={CHIP_5X5_HREF} className="text-blue-600 hover:underline">
              5 × 5″ Greaseproof Chip Bags
            </Link>{' '}
            and{' '}
            <Link href={CHIP_1LB_HREF} className="text-blue-600 hover:underline">
              1lb Greaseproof Chip Bags (6 × 7)
            </Link>
            — both <strong>1,000 per case</strong>. For a bulk 2lb greaseproof wrap without the lined
            kraft SKU, the{' '}
            <Link href={TWO_LB_BAGS_HREF} className="text-blue-600 hover:underline">
              2lb Greaseproof Bags (7 × 9″)
            </Link>{' '}
            also pack <strong>1,000 per case</strong>.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Night counters that bag chips separately from a tray or cone often keep the 5 × 5″ or 1lb
            line as standing stock, then use lined kraft 2lb/3lb when the whole meal goes in one wrap.
            Confirm the live case pack on each product page before you quote a multi-site restock.
          </p>

          <div className="relative rounded-2xl overflow-hidden h-56 mb-8 bg-slate-50 not-prose">
            <Image
              src={TWO_LB_IMAGE}
              alt="2lb greaseproof bags Ireland — 7×9 inch 1000-pack wholesale for takeaways"
              fill
              className="object-contain p-6"
              sizes="(max-width: 768px) 100vw, 720px"
            />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Case packs and wholesale pricing
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Case packs run from <strong>1,000</strong> on the chip and bulk 2lb greaseproof lines down
            to <strong>140</strong> on the 4QT lined kraft bag. Lined kraft mid sizes sit between{' '}
            <strong>150 and 345</strong> depending on the SKU. All use{' '}
            <strong>four-tier volume pricing</strong> — more cases lower the price per case. There is no
            custom-print MOQ on these plain lines.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Always check the live tier table on each product in{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              Greaseproof Food Bags
            </Link>
            . We do not reprint one-off unit rates here because case tiering is how wholesale pricing
            works. A single-site chipper often starts on 1–3 cases of 2lb lined kraft or 1lb chip bags;
            multi-site groups consolidate lined and chip SKUs into higher tiers on one Ashbourne order.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Greaseproof bags vs flat kraft, sheets, trays and foil bags
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Greaseproof food bags resist oil in a ready bag format.{' '}
            <Link
              href="/blog/flat-kraft-food-bags-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              Flat kraft food bags
            </Link>{' '}
            suit dry bakery and lighter wraps. Custom{' '}
            <Link
              href="/blog/custom-greaseproof-sheets-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              greaseproof sheets
            </Link>{' '}
            line trays or wrap with a logo. Open{' '}
            <Link
              href="/blog/kraft-food-trays-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              kraft food trays
            </Link>{' '}
            and corrugated{' '}
            <Link
              href="/blog/fish-and-chip-boxes-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              fish &amp; chip boxes
            </Link>{' '}
            suit chips sold on a tray or in a box rather than in a bag.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Foil rotisserie packs are a different format again — see the{' '}
            <Link
              href="/blog/foil-chicken-bags-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              foil chicken bags Ireland
            </Link>{' '}
            guide. This article stays on plain Greaseproof Food Bag SKUs only.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            What to order alongside greaseproof food bags
          </h2>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
            <li>
              <Link
                href="/blog/flat-kraft-food-bags-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                Flat kraft food bags
              </Link>{' '}
              for dry bakery and lighter wraps on the same dispatch
            </li>
            <li>
              <Link
                href="/blog/kraft-food-trays-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                Kraft food trays
              </Link>{' '}
              for open chipper and street-food serves
            </li>
            <li>
              <Link
                href="/blog/fish-and-chip-boxes-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                Fish &amp; chip boxes
              </Link>{' '}
              when the portion needs a corrugated box, not a bag
            </li>
            <li>
              <Link
                href="/blog/custom-greaseproof-sheets-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                Greaseproof sheets
              </Link>{' '}
              to line trays or add branded wrap beside plain bags
            </li>
            <li>
              <Link
                href="/blog/sos-grab-bags-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                SOS grab bags
              </Link>{' '}
              for sealed carry-out when the greaseproof bag is only the wrap
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-8">
            Pairing greaseproof bags, trays and carriers on one dispatch keeps Dublin and nationwide
            kitchens stocked before weekend peaks.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Delivery across Ireland from Ashbourne
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            PrintNPack is based in Ashbourne, Co. Meath — convenient for Dublin and Meath collections,
            with nationwide dispatch for Cork, Galway, Limerick and every other county. Plain greaseproof
            bag orders move quickly because they are warehouse stock, not made-to-print jobs.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            UK or Europe shipping is only confirmed case-by-case on request; this guide focuses on Irish
            wholesale delivery, which is the core service for these food bag lines.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How to order greaseproof food bags in Ireland
          </h2>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-8">
            <li>List your busiest sizes — 2lb/3lb lined kraft, 5×5″ or 1lb chip bags, or 3QT–4QT large packs</li>
            <li>Decide whether you need lined kraft wrap or high-volume chip bags (or both)</li>
            <li>Note the case pack — 1,000 vs 345 vs 235 down to 140 — before estimating weekly burn</li>
            <li>Add flat kraft, trays, fish &amp; chip boxes or SOS bags if one delivery can cover the line</li>
            <li>Order by the case on Greaseproof Food Bags — watch the volume tiers</li>
            <li>Take nationwide delivery or collect from Ashbourne, Co. Meath</li>
          </ol>

          <div className="bg-slate-900 rounded-xl p-6 mb-8 text-white not-prose">
            <p className="font-semibold mb-1">Ready to restock greaseproof food bags?</p>
            <p className="text-slate-400 text-sm mb-4">
              Lined kraft from 2lb to 4QT, chip bags in 1,000-packs and tiered wholesale pricing —
              delivered across Ireland.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={HUB_HREF}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Shop Greaseproof Food Bags →
              </Link>
              <Link
                href={TWO_LB_LINED_HREF}
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                View 2lb Lined Kraft Bags
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
                q: 'Where can I buy greaseproof food bags wholesale in Ireland?',
                a: 'PrintNPack stocks plain Greaseproof Food Bags by the case — lined kraft from 2lb to 4QT plus chip bags — with tiered wholesale pricing from Ashbourne to Dublin, Cork, Galway and nationwide.',
              },
              {
                q: 'What greaseproof food bag sizes are available in Ireland?',
                a: 'Lined kraft covers 2lb 7×9″ (345), 3lb 8.5×11″ (235), 3QT 11×14 (150) and 4QT 11×16 (140). Chip and greaseproof bags include 5×5″ (1,000), 1lb 6×7 (1,000) and 2lb 7×9″ (1,000).',
              },
              {
                q: 'What is the difference between greaseproof food bags and flat kraft food bags?',
                a: 'Flat kraft suits dry bakery and lighter wraps. Greaseproof food bags — lined kraft or chip bags — resist oil and gravy that would soak a plain kraft wall.',
              },
              {
                q: 'Are greaseproof food bags the same as printed greaseproof sheets?',
                a: 'No. Greaseproof food bags are ready bag formats. Custom printed greaseproof sheets are flat sheets for lining trays or wrapping with your logo.',
              },
              {
                q: 'Do you deliver greaseproof food bags to Dublin, Cork and Galway?',
                a: 'Yes. We deliver Greaseproof Food Bags to Dublin, Cork, Galway and all Irish counties, with collection available from Ashbourne, Co. Meath.',
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
              href: '/blog/flat-kraft-food-bags-ireland-sizes-buying-guide',
              src: '/images/plain-packaging/199962.webp',
              title: 'Flat Kraft Food Bags Ireland: 3lb–9QT Sizes & Wholesale Buying Guide',
            },
            {
              href: '/blog/custom-greaseproof-sheets-ireland-sizes-buying-guide',
              src: '/images/products/greaseproof-sheets/greaseproof-sheets-ireland-branded-burger-wrap.jpg',
              title: 'Custom Greaseproof Sheets Ireland: Sizes, MOQ & Buying Guide',
            },
            {
              href: '/blog/kraft-food-trays-ireland-sizes-buying-guide',
              src: '/images/plain-packaging/120266.webp',
              title: 'Kraft Food Trays Ireland: ½lb–3lb Greenspirit Sizes & Wholesale Buying Guide',
            },
            {
              href: '/blog/fish-and-chip-boxes-ireland-sizes-buying-guide',
              src: '/images/plain-packaging/1206643.webp',
              title: 'Fish & Chip Boxes Ireland: Small vs Large Sizes & Wholesale Buying Guide',
            },
          ].map(({ href, src, title: relatedTitle }) => (
            <Link
              key={href}
              href={href}
              className="group flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors"
            >
              <div className="relative w-16 h-14 flex-shrink-0 rounded-lg overflow-hidden bg-slate-100">
                <Image src={src} alt={relatedTitle} fill className="object-contain p-1" sizes="64px" />
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
