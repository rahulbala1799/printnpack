import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/flat-kraft-food-bags-ireland-sizes-buying-guide`;
const HUB_HREF = '/plain-packaging?category=Flat+Kraft+Food+Bags';
const PLAIN_BAGS_HREF = '/plain-paper-bags-ireland';
const THREE_LB_1000_HREF = '/plain-packaging/3lb-brown-kraft-bags-1000-199962';
const THREE_LB_85_HREF = '/plain-packaging/3lb-brown-kraft-bags-85x11-376-199981';
const TWO_QT_HREF = '/plain-packaging/2qt-brown-kraft-bags-10x12-280-5-kilo-199982';
const THREE_QT_HREF = '/plain-packaging/3qt-brown-kraft-bags-11x14-2365-kilo-199983';
const FIVE_QT_HREF = '/plain-packaging/5qt-brown-kraft-bags-125x14-2145-kilo-199985';
const SIX_QT_HREF = '/plain-packaging/6qt-brown-kraft-bags-125x16-2165-kilo-199986';
const NINE_QT_HREF = '/plain-packaging/9qt-brown-kraft-bag-125x17x19-110-5-kilo-200038';

const HERO_IMAGE = '/images/plain-packaging/199962.webp';
const THREE_LB_IMAGE = '/images/plain-packaging/199981.webp';
const TWO_QT_IMAGE = '/images/plain-packaging/199982.webp';
const FIVE_QT_IMAGE = '/images/plain-packaging/199985.webp';
const SIX_QT_IMAGE = '/images/plain-packaging/199986.webp';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Flat Kraft Food Bags Ireland: 3lb–9QT Sizes & Wholesale Buying Guide',
  description:
    'A practical buying guide to plain flat kraft food bags in Ireland — 3lb through 9QT brown kraft sizes, case packs, tiered wholesale pricing, and nationwide delivery from Ashbourne for chippers, bakeries and takeaways.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-10-19',
  dateModified: '2026-10-19',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I buy flat kraft food bags wholesale in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack stocks plain Flat Kraft Food Bags by the case — brown kraft sizes from 3lb to 9QT — with tiered wholesale pricing. Delivery from Ashbourne, Co. Meath to Dublin, Cork, Galway and nationwide.',
      },
    },
    {
      '@type': 'Question',
      name: 'What flat kraft food bag sizes are available in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The range includes 3lb brown kraft bags (1,000 or 376 per case at 8.5×11″), 2QT 10×12″ (280), 3QT 11×14 (236), 5QT 12.5×14″ (214), 6QT 12.5×16″ (216) and 9QT 12.5×17×19″ (110). Pack counts are taken from the live product listings.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are flat kraft food bags the same as SOS grab bags?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Flat kraft food bags are flat-packed kraft bags for food portions — chips, bakery goods and takeaway wraps. SOS grab bags are gusseted stand-up carriers with a flat base for boxes and trays. Many Irish kitchens stock both.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I buy plain flat kraft bags or greaseproof-lined bags?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Plain flat kraft bags suit dry bakery, wraps and lighter food service. Greaseproof-lined kraft bags and chip bags are better when oil or gravy will soak a plain kraft wall. PrintNPack lists both ranges separately in plain packaging.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you deliver flat kraft food bags to Dublin, Cork and Galway?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. PrintNPack delivers Flat Kraft Food Bags to Dublin, Cork, Galway and every Irish county from Ashbourne. Local buyers can also collect from Co. Meath.',
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
      name: 'Flat Kraft Food Bags Ireland Buying Guide',
      item: PAGE_URL,
    },
  ],
};

const sizeRows = [
  {
    size: '3lb brown kraft',
    dims: 'Bulk 3lb pack',
    pack: '1,000 per case',
    use: 'High-volume chipper and bakery wrap stock',
  },
  {
    size: '3lb brown kraft',
    dims: '8.5 × 11″',
    pack: '376 per case',
    use: 'Measured 3lb serves when you want a fixed footprint',
  },
  {
    size: '2QT brown kraft',
    dims: '10 × 12″',
    pack: '280 per case',
    use: 'Standard takeaway portions and deli wraps',
  },
  {
    size: '3QT brown kraft',
    dims: '11 × 14″',
    pack: '236 per case',
    use: 'Larger bakery and hot-food wraps',
  },
  {
    size: '5QT brown kraft',
    dims: '12.5 × 14″',
    pack: '214 per case',
    use: 'Bulkier chip and street-food portions',
  },
  {
    size: '6QT brown kraft',
    dims: '12.5 × 16″',
    pack: '216 per case',
    use: 'Tall wraps and multi-item counter packs',
  },
  {
    size: '9QT brown kraft',
    dims: '12.5 × 17 × 19″',
    pack: '110 per case',
    use: 'Largest flat kraft serves and shared takeaway packs',
  },
];

export default function FlatKraftFoodBagsIrelandSizesBuyingGuide() {
  const title = 'Flat Kraft Food Bags Ireland: 3lb–9QT Sizes & Wholesale Buying Guide';
  const description =
    'Buy flat kraft food bags in Ireland with confidence — brown kraft sizes from 3lb to 9QT, case packs, tiered wholesale pricing, and delivery to Dublin, Cork, Galway and nationwide from Ashbourne.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="flat kraft food bags ireland, brown kraft bags wholesale ireland, 3lb kraft food bags dublin, kraft chip bags cork, takeaway kraft bags galway, plain kraft food bags ashbourne, 2QT kraft bags ireland, 9QT brown kraft bag ireland, flat kraft bags wholesale ireland, bakery kraft bags ireland"
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
          content="Flat kraft food bags Ireland — 3lb brown kraft bags wholesale for takeaways"
        />
        <meta property="article:published_time" content="2026-10-19" />

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
          <span className="text-slate-900">Flat Kraft Food Bags Ireland</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            Wholesale Guide
          </span>
          <span className="text-slate-400 text-sm">19 Oct 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Flat Kraft Food Bags Ireland: 3lb–9QT Sizes &amp; Wholesale Buying Guide
        </h1>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="relative rounded-2xl overflow-hidden h-48 col-span-2 bg-slate-50">
            <Image
              src={HERO_IMAGE}
              alt="Flat kraft food bags Ireland — 3lb brown kraft bags for Dublin chippers"
              fill
              className="object-contain p-4"
              priority
              sizes="(max-width: 768px) 66vw, 512px"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={THREE_LB_IMAGE}
                alt="3lb flat kraft food bag Ireland — 8.5×11 inch brown kraft wholesale Cork"
                fill
                className="object-contain p-3"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={TWO_QT_IMAGE}
                alt="2QT flat kraft food bag Ireland — 10×12 inch brown kraft Galway takeaway"
                fill
                className="object-contain p-3"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Chippers in Dublin, bakeries in Cork and night counters in Galway burn through brown kraft
            food bags every service. Flat kraft is the simple format: no handles, no gusseted base —
            just a kraft wall that wraps chips, rolls, wraps and bakery goods fast. Size and case pack
            are the decisions that matter when Friday night empties the shelf.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            This guide covers <strong>flat kraft food bags in Ireland</strong> as plain catering stock
            — brown kraft from <strong>3lb to 9QT</strong>, measured footprints such as{' '}
            <strong>8.5 × 11″</strong> through <strong>12.5 × 17 × 19″</strong>, case packs, and how{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              PrintNPack&apos;s Flat Kraft Food Bags
            </Link>{' '}
            range works with tiered pricing and delivery from Ashbourne. For the wider plain bag
            cluster, see{' '}
            <Link href={PLAIN_BAGS_HREF} className="text-blue-600 hover:underline">
              plain paper bags Ireland
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Why Irish takeaways buy plain flat kraft by the case
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Plain flat kraft bags are warehouse stock: order by the case, no print proof, no brand MOQ.
            That suits Cork chippers wrapping hot portions at closing time and Ashbourne bakeries that
            need a measured 3lb bag before a Saturday queue. Branding can sit on a carrier or a printed
            napkin — the food bag only has to wrap, hold and travel.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            PrintNPack holds the Flat Kraft Food Bags category beside SOS, MG kraft and greaseproof
            lines in plain packaging. Orders ship nationwide; local buyers can collect from Ashbourne,
            Co. Meath. For a broader view of bulk catering lines, see our{' '}
            <Link href="/blog/plain-packaging-wholesale-ireland" className="text-blue-600 hover:underline">
              plain packaging wholesale Ireland
            </Link>{' '}
            guide. Stand-up takeaway carriers are covered separately in the{' '}
            <Link
              href="/blog/sos-grab-bags-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              SOS grab bags Ireland
            </Link>{' '}
            guide.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Flat kraft food bag sizes at a glance
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Start with the portion your menu wraps most — often <strong>3lb</strong> or{' '}
            <strong>2QT</strong> for everyday serves, then step up to <strong>5QT–9QT</strong> for
            bulkier counter packs — and confirm the case count. Use the table below, then check live
            case tiers on each product page.
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
              src={FIVE_QT_IMAGE}
              alt="5QT flat kraft food bag Ireland — 12.5×14 inch brown kraft wholesale Ashbourne"
              fill
              className="object-contain p-6"
              sizes="(max-width: 768px) 100vw, 720px"
            />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            3lb brown kraft — high volume and measured 8.5 × 11″
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Everyday chipper and bakery stock often starts on the{' '}
            <Link href={THREE_LB_1000_HREF} className="text-blue-600 hover:underline">
              3lb Brown Kraft Bags (1,000)
            </Link>{' '}
            line — <strong>1,000 bags per case</strong> when you want maximum units on one Ashbourne
            order. When you need a fixed footprint, the{' '}
            <Link href={THREE_LB_85_HREF} className="text-blue-600 hover:underline">
              3lb Brown Kraft Bags (8.5 × 11″)
            </Link>{' '}
            pack <strong>376 per case</strong>. Same 3lb family, different pack economics — check the
            case count before you compare weekly burn rates.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Dublin and Galway counters often keep the 1,000-pack as standing wrap stock, then add the
            measured 8.5 × 11″ SKU when portion consistency matters for pricing boards and delivery
            photos.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            2QT and 3QT for standard takeaway wraps
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Mid-size wraps sit on the{' '}
            <Link href={TWO_QT_HREF} className="text-blue-600 hover:underline">
              2QT Brown Kraft Bags (10 × 12″)
            </Link>{' '}
            at <strong>280 per case</strong>, and the{' '}
            <Link href={THREE_QT_HREF} className="text-blue-600 hover:underline">
              3QT Brown Kraft Bags (11 × 14)
            </Link>{' '}
            at <strong>236 per case</strong>. Both are listed as 5 kilo case packs — useful when you
            order beside other QT sizes on one wholesale dispatch.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Cork delis and Galway bakeries often run 2QT as the default sandwich or pastry wrap and
            keep 3QT for taller bakery goods. Do not assume every QT case holds the same unit count —
            packs fall as the bag gets larger.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            5QT, 6QT and 9QT for larger portions
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Bulkier counter packs need more kraft area. The{' '}
            <Link href={FIVE_QT_HREF} className="text-blue-600 hover:underline">
              5QT Brown Kraft Bags (12.5 × 14″)
            </Link>{' '}
            pack <strong>214 per case</strong>, the{' '}
            <Link href={SIX_QT_HREF} className="text-blue-600 hover:underline">
              6QT Brown Kraft Bags (12.5 × 16″)
            </Link>{' '}
            pack <strong>216 per case</strong>, and the{' '}
            <Link href={NINE_QT_HREF} className="text-blue-600 hover:underline">
              9QT Brown Kraft Bag (12.5 × 17 × 19″)
            </Link>{' '}
            packs <strong>110 per case</strong> for the largest flat kraft serves on the list.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Festival vans and family chipper boxes often keep 5QT or 6QT beside a smaller everyday
            size, then reach for 9QT when the order is a shared pack. Confirm the live case pack on
            each product page before you quote a multi-site restock.
          </p>

          <div className="relative rounded-2xl overflow-hidden h-56 mb-8 bg-slate-50 not-prose">
            <Image
              src={SIX_QT_IMAGE}
              alt="6QT flat kraft food bag Ireland — 12.5×16 inch brown kraft for larger takeaway wraps"
              fill
              className="object-contain p-6"
              sizes="(max-width: 768px) 100vw, 720px"
            />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Case packs and wholesale pricing
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Case packs run from <strong>1,000</strong> on the bulk 3lb line down to <strong>110</strong>{' '}
            on the 9QT bag. Mid sizes sit between <strong>214 and 376</strong> depending on the SKU.
            All use <strong>four-tier volume pricing</strong> — more cases lower the price per case.
            There is no custom-print MOQ on these plain lines.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Always check the live tier table on each product in{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              Flat Kraft Food Bags
            </Link>
            . We do not reprint one-off unit rates here because case tiering is how wholesale pricing
            works. A single-site chipper often starts on 1–3 cases of 3lb or 2QT; multi-site groups
            consolidate several QT sizes into higher tiers on one Ashbourne order.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Flat kraft vs SOS, greaseproof bags and kraft trays
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Flat kraft wraps food in a simple kraft sleeve. Gusseted{' '}
            <Link
              href="/blog/sos-grab-bags-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              SOS grab bags
            </Link>{' '}
            stand upright for boxes and cups. Greaseproof-lined kraft and chip bags belong in the
            Greaseproof Food Bag category when oil will soak a plain kraft wall. Open{' '}
            <Link
              href="/blog/kraft-food-trays-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              kraft food trays
            </Link>{' '}
            suit chips sold on a tray rather than in a bag.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Foil rotisserie packs are a different format again — see the{' '}
            <Link
              href="/blog/foil-chicken-bags-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              foil chicken bags Ireland
            </Link>{' '}
            guide. Printed handled carriers for brand-led retail are covered in the{' '}
            <Link
              href="/blog/flat-handle-paper-bags-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              flat handle paper bags Ireland
            </Link>{' '}
            guide — this article stays on plain flat kraft food bags only.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            What to order alongside flat kraft food bags
          </h2>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
            <li>
              <Link
                href="/blog/sos-grab-bags-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                SOS grab bags
              </Link>{' '}
              for sealed carry-out when the food bag is only the wrap
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
                href="/blog/wooden-cutlery-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                Wooden cutlery
              </Link>{' '}
              — chip forks beside bagged portions
            </li>
            <li>
              <Link
                href="/blog/custom-greaseproof-sheets-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                Greaseproof sheets
              </Link>{' '}
              to line trays or wrap oily food before the kraft bag
            </li>
            <li>Greaseproof Food Bag lines from plain packaging when you need a lined kraft wall</li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-8">
            Pairing wrap bags, trays and carriers on one dispatch keeps Dublin and nationwide kitchens
            stocked before weekend peaks.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Delivery across Ireland from Ashbourne
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            PrintNPack is based in Ashbourne, Co. Meath — convenient for Dublin and Meath collections,
            with nationwide dispatch for Cork, Galway, Limerick and every other county. Plain flat kraft
            orders move quickly because they are warehouse stock, not made-to-print jobs.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            UK or Europe shipping is only confirmed case-by-case on request; this guide focuses on Irish
            wholesale delivery, which is the core service for these food bag lines.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How to order flat kraft food bags in Ireland
          </h2>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-8">
            <li>List your busiest sizes — 3lb everyday wrap, 2QT/3QT mid, or 5QT–9QT large packs</li>
            <li>Decide whether you need the bulk 1,000-pack 3lb or the measured 8.5 × 11″ 3lb</li>
            <li>Note the case pack — 1,000 vs 376 vs 280 down to 110 — before estimating weekly burn</li>
            <li>Add SOS bags, kraft trays, chip forks or greaseproof if one delivery can cover the line</li>
            <li>Order by the case on Flat Kraft Food Bags — watch the volume tiers</li>
            <li>Take nationwide delivery or collect from Ashbourne, Co. Meath</li>
          </ol>

          <div className="bg-slate-900 rounded-xl p-6 mb-8 text-white not-prose">
            <p className="font-semibold mb-1">Ready to restock flat kraft food bags?</p>
            <p className="text-slate-400 text-sm mb-4">
              Brown kraft from 3lb to 9QT, measured footprints and tiered wholesale pricing — delivered
              across Ireland.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={HUB_HREF}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Shop Flat Kraft Food Bags →
              </Link>
              <Link
                href={THREE_LB_1000_HREF}
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                View 3lb Kraft Bags (1,000)
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
                q: 'Where can I buy flat kraft food bags wholesale in Ireland?',
                a: 'PrintNPack stocks plain Flat Kraft Food Bags by the case — brown kraft sizes from 3lb to 9QT — with tiered wholesale pricing from Ashbourne to Dublin, Cork, Galway and nationwide.',
              },
              {
                q: 'What flat kraft food bag sizes are available in Ireland?',
                a: 'The range includes 3lb brown kraft (1,000 or 376 at 8.5×11″), 2QT 10×12″ (280), 3QT 11×14 (236), 5QT 12.5×14″ (214), 6QT 12.5×16″ (216) and 9QT 12.5×17×19″ (110).',
              },
              {
                q: 'Are flat kraft food bags the same as SOS grab bags?',
                a: 'No. Flat kraft food bags wrap food portions; SOS grab bags are gusseted stand-up carriers for boxes and trays. Many Irish kitchens stock both.',
              },
              {
                q: 'Should I buy plain flat kraft or greaseproof-lined bags?',
                a: 'Plain flat kraft suits dry bakery and lighter wraps. Choose greaseproof-lined kraft or chip bags when oil or gravy will soak a plain kraft wall.',
              },
              {
                q: 'Do you deliver flat kraft food bags to Dublin, Cork and Galway?',
                a: 'Yes. We deliver Flat Kraft Food Bags to Dublin, Cork, Galway and all Irish counties, with collection available from Ashbourne, Co. Meath.',
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
              href: '/blog/sos-grab-bags-ireland-sizes-buying-guide',
              src: '/images/products/sos-bags/1.png',
              title: 'SOS Grab Bags Ireland: Sizes, Plain vs Printed & Wholesale Buying Guide',
            },
            {
              href: '/blog/kraft-food-trays-ireland-sizes-buying-guide',
              src: '/images/plain-packaging/120266.webp',
              title: 'Kraft Food Trays Ireland: ½lb–3lb Greenspirit Sizes & Wholesale Buying Guide',
            },
            {
              href: '/blog/foil-chicken-bags-ireland-sizes-buying-guide',
              src: '/images/plain-packaging/120705.webp',
              title: 'Foil Chicken Bags Ireland: Portion vs Standard vs Large & Wholesale Buying Guide',
            },
            {
              href: '/blog/flat-handle-paper-bags-ireland-sizes-buying-guide',
              src: '/images/products/flat-handle-bags/1.png',
              title: 'Flat Handle Paper Bags Ireland: Sizes, MOQ & Café Buying Guide',
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
