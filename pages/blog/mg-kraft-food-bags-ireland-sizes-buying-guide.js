import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/mg-kraft-food-bags-ireland-sizes-buying-guide`;
const HUB_HREF = '/plain-packaging?category=MG+Kraft+Food+Bags';
const PLAIN_BAGS_HREF = '/plain-paper-bags-ireland';
const TWO_LB_HREF = '/plain-packaging/2lb-mg-kraft-paper-bags-7x9-1000-20001';
const TEN_BY_TWELVE_HREF =
  '/plain-packaging/10x12-mg-kraft-paper-bags-37gsm-1000-199998';

const HERO_IMAGE = '/images/plain-packaging/20001.webp';
const TEN_BY_TWELVE_IMAGE = '/images/plain-packaging/199998.webp';
const FLAT_KRAFT_IMAGE = '/images/plain-packaging/199962.webp';
const GREASEPROOF_IMAGE = '/images/plain-packaging/199990.webp';
const SOS_IMAGE = '/images/products/sos-bags/1.png';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'MG Kraft Food Bags Ireland: 2lb 7×9 & 10×12 Sizes Wholesale Buying Guide',
  description:
    'A practical buying guide to plain MG kraft food bags in Ireland — 2lb 7×9 and 10×12 37gsm sizes, 1,000-bag case packs, tiered wholesale pricing, and nationwide delivery from Ashbourne for bakeries, delis and light retail.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-11-08',
  dateModified: '2026-11-08',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I buy MG kraft food bags wholesale in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack stocks plain MG Kraft Food Bags by the case — 2lb 7×9 and 10×12 37gsm lines at 1,000 bags per case — with tiered wholesale pricing. Delivery from Ashbourne, Co. Meath to Dublin, Cork, Galway and nationwide.',
      },
    },
    {
      '@type': 'Question',
      name: 'What MG kraft food bag sizes are available in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The range lists two SKUs: 2lb MG Kraft Paper Bags (7×9) at 1,000 per case, and 10×12 MG Kraft Paper bags (37gsm) at 1,000 per case. Pack counts come from the live product names.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are MG kraft food bags the same as flat kraft food bags?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. MG kraft food bags are a separate plain packaging category for lighter bakery and retail wraps in 7×9 and 10×12 footprints. Flat kraft food bags cover a wider 3lb–9QT brown kraft wrap range. Many Irish kitchens stock both.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I buy MG kraft bags or SOS grab bags?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Choose MG kraft when you need a simple flat kraft sleeve for pastry, light retail or bakery. Choose SOS grab bags when the bag must stand up with a gusseted base for boxes, trays or cups. PrintNPack lists both ranges in plain packaging.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you deliver MG kraft food bags to Dublin, Cork and Galway?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. PrintNPack delivers MG Kraft Food Bags to Dublin, Cork, Galway and every Irish county from Ashbourne. Local buyers can also collect from Co. Meath.',
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
      name: 'MG Kraft Food Bags Ireland Buying Guide',
      item: PAGE_URL,
    },
  ],
};

const sizeRows = [
  {
    size: '2lb MG kraft',
    dims: '7 × 9″',
    pack: '1,000 per case',
    use: 'Small bakery, pastry and light retail wraps',
  },
  {
    size: '10 × 12 MG kraft',
    dims: '10 × 12″ · 37gsm',
    pack: '1,000 per case',
    use: 'Larger bakery, deli and counter wraps',
  },
];

export default function MgKraftFoodBagsIrelandSizesBuyingGuide() {
  const title =
    'MG Kraft Food Bags Ireland: 2lb 7×9 & 10×12 Sizes Wholesale Buying Guide';
  const description =
    'Buy MG kraft food bags in Ireland with confidence — plain 2lb 7×9 and 10×12 37gsm sizes, 1,000-bag case packs, tiered wholesale pricing, and delivery to Dublin, Cork, Galway and nationwide from Ashbourne.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="MG kraft food bags ireland, 2lb kraft bags ireland, 7x9 kraft bags dublin, 10x12 MG kraft bags cork, plain kraft bags wholesale ireland, bakery kraft bags galway, MG paper bags ashbourne, kraft food bags ireland, 37gsm kraft bags ireland, plain paper bags ireland"
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
          content="MG kraft food bags Ireland — 2lb 7×9 plain kraft bags wholesale for bakeries"
        />
        <meta property="article:published_time" content="2026-11-08" />

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
          <span className="text-slate-900">MG Kraft Food Bags Ireland</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            Wholesale Guide
          </span>
          <span className="text-slate-400 text-sm">8 Nov 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          MG Kraft Food Bags Ireland: 2lb 7×9 &amp; 10×12 Sizes Wholesale Buying Guide
        </h1>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="relative rounded-2xl overflow-hidden h-48 col-span-2 bg-slate-50">
            <Image
              src={HERO_IMAGE}
              alt="MG kraft food bags Ireland — 2lb 7×9 plain kraft bags for Dublin bakeries"
              fill
              className="object-contain p-4"
              priority
              sizes="(max-width: 768px) 66vw, 512px"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={TEN_BY_TWELVE_IMAGE}
                alt="10×12 MG kraft food bags Ireland — 37gsm plain kraft wholesale Cork"
                fill
                className="object-contain p-3"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={FLAT_KRAFT_IMAGE}
                alt="Flat kraft food bags Ireland — brown kraft wrap stock beside MG bags Galway"
                fill
                className="object-contain p-3"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Bakeries in Dublin, delis in Cork and gift counters in Galway need a light kraft sleeve that
            wraps pastry, bread rolls and small retail packs without the footprint of a full chipper bag
            range. MG kraft food bags fill that gap: two plain sizes, both sold{' '}
            <strong>1,000 per case</strong>, ready from the warehouse with no print proof.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            This guide covers <strong>MG kraft food bags in Ireland</strong> as plain catering and retail
            stock — the <strong>2lb 7 × 9″</strong> bag and the <strong>10 × 12″ 37gsm</strong> bag —
            case packs, how they sit beside flat kraft and SOS lines, and how{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              PrintNPack&apos;s MG Kraft Food Bags
            </Link>{' '}
            category ships from Ashbourne. For the wider plain bag cluster, see{' '}
            <Link href={PLAIN_BAGS_HREF} className="text-blue-600 hover:underline">
              plain paper bags Ireland
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Why Irish bakeries and delis buy plain MG kraft by the case
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            MG kraft is warehouse stock aimed at lighter bakery and retail wraps. There is no artwork
            MOQ, no branded print lead time — order by the case when the Saturday pastry queue empties
            the shelf. Branding can live on a handled carrier or a printed napkin; the MG bag only has
            to wrap, hold and travel.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            PrintNPack holds MG Kraft Food Bags beside Flat Kraft Food Bags, SOS and greaseproof lines
            in plain packaging. Orders ship nationwide; local buyers can collect from Ashbourne, Co.
            Meath. For a broader view of bulk catering lines, see our{' '}
            <Link href="/blog/plain-packaging-wholesale-ireland" className="text-blue-600 hover:underline">
              plain packaging wholesale Ireland
            </Link>{' '}
            guide. Wider brown kraft wrap sizes are covered separately in the{' '}
            <Link
              href="/blog/flat-kraft-food-bags-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              flat kraft food bags Ireland
            </Link>{' '}
            guide.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            MG kraft food bag sizes at a glance
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Start with the wrap your counter uses most — often <strong>7 × 9″</strong> for small pastry
            and gift packs, then step up to <strong>10 × 12″</strong> for larger bakery and deli wraps —
            and confirm the 1,000-bag case count. Use the table below, then check live case tiers on each
            product page.
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
              src={TEN_BY_TWELVE_IMAGE}
              alt="10×12 MG kraft food bags Ireland — 37gsm plain kraft wholesale Ashbourne"
              fill
              className="object-contain p-6"
              sizes="(max-width: 768px) 100vw, 720px"
            />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            2lb MG kraft — 7 × 9″ for small bakery wraps
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Everyday pastry and light retail stock often starts on the{' '}
            <Link href={TWO_LB_HREF} className="text-blue-600 hover:underline">
              2lb MG Kraft Paper Bags (7 × 9)
            </Link>{' '}
            line — <strong>1,000 bags per case</strong> in a compact footprint suited to scones, cookies,
            rolls and small gift packs. It is the smaller of the two MG SKUs and the natural first case
            when a café counter wraps light bakery rather than full chipper portions.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Dublin bakeries and Galway café counters often keep the 7 × 9″ case as standing wrap stock
            beside napkin and tray lines, then add the larger MG size only when the wrap needs more kraft
            area.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            10 × 12 MG kraft — 37gsm for larger counter wraps
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Larger bakery and deli wraps sit on the{' '}
            <Link href={TEN_BY_TWELVE_HREF} className="text-blue-600 hover:underline">
              10 × 12 MG Kraft Paper bags (37gsm)
            </Link>{' '}
            — also <strong>1,000 bags per case</strong>, with the listing calling out the{' '}
            <strong>37gsm</strong> kraft wall. Same category and case count as the 2lb line, different
            footprint: use it when 7 × 9″ is too short for the product.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Cork delis and multi-site bakery groups often run both MG sizes on one Ashbourne order —
            7 × 9″ for pastry and 10 × 12″ for taller bread or multi-item wraps — then watch the volume
            tiers as case counts climb.
          </p>

          <div className="relative rounded-2xl overflow-hidden h-56 mb-8 bg-slate-50 not-prose">
            <Image
              src={GREASEPROOF_IMAGE}
              alt="Greaseproof food bags Ireland — lined kraft option when oil soaks plain MG kraft"
              fill
              className="object-contain p-6"
              sizes="(max-width: 768px) 100vw, 720px"
            />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Case packs and wholesale pricing
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Both MG kraft SKUs ship <strong>1,000 bags per case</strong>. Each uses{' '}
            <strong>four-tier volume pricing</strong> — more cases lower the price per case. There is no
            custom-print MOQ on these plain lines.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Always check the live tier table on each product in{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              MG Kraft Food Bags
            </Link>
            . We do not reprint one-off unit rates here because case tiering is how wholesale pricing
            works. A single bakery often starts on 1–3 cases of 7 × 9″; multi-site groups consolidate both
            sizes into higher tiers on one Ashbourne dispatch.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            MG kraft vs flat kraft, SOS and greaseproof bags
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            MG kraft is a focused pair of light wrap sizes. The wider{' '}
            <Link
              href="/blog/flat-kraft-food-bags-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              flat kraft food bags
            </Link>{' '}
            range covers brown kraft from 3lb through 9QT for chipper and high-volume food wraps.
            Gusseted{' '}
            <Link
              href="/blog/sos-grab-bags-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              SOS grab bags
            </Link>{' '}
            stand upright for boxes and cups. Greaseproof-lined kraft belongs in the{' '}
            <Link
              href="/blog/greaseproof-food-bags-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              greaseproof food bags Ireland
            </Link>{' '}
            guide when oil will soak a plain kraft wall.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Printed handled carriers for brand-led retail are covered in the{' '}
            <Link
              href="/blog/flat-handle-paper-bags-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              flat handle paper bags Ireland
            </Link>{' '}
            guide — this article stays on plain MG kraft food bags only.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            What to order alongside MG kraft food bags
          </h2>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
            <li>
              <Link
                href="/blog/flat-kraft-food-bags-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                Flat kraft food bags
              </Link>{' '}
              when you also need 3lb–9QT chipper and bakery wrap sizes
            </li>
            <li>
              <Link
                href="/blog/sos-grab-bags-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                SOS grab bags
              </Link>{' '}
              for sealed carry-out when the MG bag is only the wrap
            </li>
            <li>
              <Link
                href="/blog/greaseproof-food-bags-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                Greaseproof food bags
              </Link>{' '}
              when oil or gravy will soak a plain kraft wall
            </li>
            <li>
              <Link
                href="/blog/kraft-food-trays-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                Kraft food trays
              </Link>{' '}
              for open bakery and street-food serves
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-8">
            Pairing MG wraps with SOS carriers or greaseproof lines on one dispatch keeps Dublin and
            nationwide kitchens stocked before weekend peaks.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Delivery across Ireland from Ashbourne
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            PrintNPack is based in Ashbourne, Co. Meath — convenient for Dublin and Meath collections,
            with nationwide dispatch for Cork, Galway, Limerick and every other county. Plain MG kraft
            orders move quickly because they are warehouse stock, not made-to-print jobs.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            UK or Europe shipping is only confirmed case-by-case on request; this guide focuses on Irish
            wholesale delivery, which is the core service for these food bag lines.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How to order MG kraft food bags in Ireland
          </h2>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-8">
            <li>List your busiest wraps — 7 × 9″ for small pastry, or 10 × 12″ for larger bakery packs</li>
            <li>Confirm both SKUs ship 1,000 bags per case before estimating weekly burn</li>
            <li>Decide whether one size covers the counter or you need both MG footprints</li>
            <li>Add flat kraft, SOS, greaseproof or trays if one delivery can cover the line</li>
            <li>Order by the case on MG Kraft Food Bags — watch the volume tiers</li>
            <li>Take nationwide delivery or collect from Ashbourne, Co. Meath</li>
          </ol>

          <div className="bg-slate-900 rounded-xl p-6 mb-8 text-white not-prose">
            <p className="font-semibold mb-1">Ready to restock MG kraft food bags?</p>
            <p className="text-slate-400 text-sm mb-4">
              Plain 2lb 7×9 and 10×12 37gsm kraft, 1,000 per case and tiered wholesale pricing — delivered
              across Ireland.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={HUB_HREF}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Shop MG Kraft Food Bags →
              </Link>
              <Link
                href={TWO_LB_HREF}
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                View 2lb MG Kraft (7×9)
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
                q: 'Where can I buy MG kraft food bags wholesale in Ireland?',
                a: 'PrintNPack stocks plain MG Kraft Food Bags by the case — 2lb 7×9 and 10×12 37gsm lines at 1,000 bags per case — with tiered wholesale pricing from Ashbourne to Dublin, Cork, Galway and nationwide.',
              },
              {
                q: 'What MG kraft food bag sizes are available in Ireland?',
                a: 'The range lists 2lb MG Kraft Paper Bags (7×9) at 1,000 per case, and 10×12 MG Kraft Paper bags (37gsm) at 1,000 per case.',
              },
              {
                q: 'Are MG kraft food bags the same as flat kraft food bags?',
                a: 'No. MG kraft is a separate category for lighter 7×9 and 10×12 wraps. Flat kraft covers a wider 3lb–9QT brown kraft wrap range. Many Irish kitchens stock both.',
              },
              {
                q: 'Should I buy MG kraft bags or SOS grab bags?',
                a: 'Choose MG kraft for a simple flat kraft sleeve. Choose SOS grab bags when the bag must stand up with a gusseted base for boxes, trays or cups.',
              },
              {
                q: 'Do you deliver MG kraft food bags to Dublin, Cork and Galway?',
                a: 'Yes. We deliver MG Kraft Food Bags to Dublin, Cork, Galway and all Irish counties, with collection available from Ashbourne, Co. Meath.',
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
              src: FLAT_KRAFT_IMAGE,
              title: 'Flat Kraft Food Bags Ireland: 3lb–9QT Sizes & Wholesale Buying Guide',
            },
            {
              href: '/blog/sos-grab-bags-ireland-sizes-buying-guide',
              src: SOS_IMAGE,
              title: 'SOS Grab Bags Ireland: Sizes, Plain vs Printed & Wholesale Buying Guide',
            },
            {
              href: '/blog/greaseproof-food-bags-ireland-sizes-buying-guide',
              src: GREASEPROOF_IMAGE,
              title: 'Greaseproof Food Bags Ireland: Lined Kraft & Chip Bag Sizes Buying Guide',
            },
            {
              href: '/blog/kraft-food-trays-ireland-sizes-buying-guide',
              src: '/images/plain-packaging/120266.webp',
              title: 'Kraft Food Trays Ireland: ½lb–3lb Greenspirit Sizes & Wholesale Buying Guide',
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
