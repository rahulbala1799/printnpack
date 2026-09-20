import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/fish-and-chip-boxes-ireland-sizes-buying-guide`;
const HUB_HREF = '/plain-packaging?category=Fish+%26+Chip+Boxes';
const HERO_IMAGE = '/images/plain-packaging/1206643.webp';
const SMALL_IMAGE = '/images/plain-packaging/1206642.webp';
const LARGE_IMAGE = '/images/plain-packaging/1206643.webp';
const TRAY_IMAGE = '/images/plain-packaging/120266.webp';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Fish & Chip Boxes Ireland: Small vs Large Sizes & Wholesale Buying Guide',
  description:
    'A practical buying guide to corrugated fish & chip boxes in Ireland — small vs large sizes, case packs of 100, tiered wholesale pricing, and nationwide delivery from Ashbourne for chippers and takeaways.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-09-20',
  dateModified: '2026-09-20',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I buy fish & chip boxes wholesale in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack stocks plain corrugated fish & chip boxes by the case with tiered wholesale pricing. Browse the Fish & Chip Boxes category on plain packaging — delivery from Ashbourne, Co. Meath to Dublin, Cork, Galway and nationwide.',
      },
    },
    {
      '@type': 'Question',
      name: 'What fish & chip box sizes are available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Two corrugated lines are stocked: Small Corrugated Fish & Chip Box 255×150×510mm (100 per case) and Large Corrugated Fish & Chip Box 310×150×50mm (100 per case). Match small to regular chipper portions and large to family or loaded trays.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are fish & chip boxes plain wholesale or custom printed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'These fish & chip boxes are plain corrugated wholesale stock — no artwork proof and no custom-print minimum. Order by the case with four-tier volume pricing. For branded paper packaging alongside plain boxes, see custom greaseproof sheets or printed paper bags.',
      },
    },
    {
      '@type': 'Question',
      name: 'What else do Irish chippers usually order with fish & chip boxes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most chippers pair corrugated fish & chip boxes with kraft paper food trays, greaseproof chip bags or sheets, wooden chip forks, and SOS grab bags for carry-out. All are available as plain wholesale lines from PrintNPack.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you deliver fish & chip boxes to Dublin, Cork and Galway?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. PrintNPack delivers fish & chip boxes to Dublin, Cork, Galway and every Irish county from Ashbourne. Local buyers can also collect from Co. Meath.',
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
      name: 'Fish & Chip Boxes Ireland Buying Guide',
      item: PAGE_URL,
    },
  ],
};

const sizeRows = [
  {
    size: 'Small corrugated',
    dims: '255 × 150 × 510 mm',
    pack: '100 per case',
    use: 'Regular fish, chips and single takeaway portions',
  },
  {
    size: 'Large corrugated',
    dims: '310 × 150 × 50 mm',
    pack: '100 per case',
    use: 'Larger chipper trays, family portions and loaded meals',
  },
];

export default function FishAndChipBoxesIrelandSizesBuyingGuide() {
  const title = 'Fish & Chip Boxes Ireland: Small vs Large Sizes & Wholesale Buying Guide';
  const description =
    'Buy fish & chip boxes in Ireland with confidence — small vs large corrugated sizes, 100-piece case packs, tiered wholesale pricing, and delivery to Dublin, Cork, Galway and nationwide from Ashbourne.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="fish and chip boxes ireland, fish chip boxes wholesale, corrugated fish box dublin, chipper packaging cork, large fish and chip box, small fish chip box ireland, takeaway chip boxes ashbourne, fish and chip packaging galway, plain fish chip boxes wholesale, chip shop boxes ireland"
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
          content="Fish and chip boxes Ireland — large corrugated chipper tray wholesale"
        />
        <meta property="article:published_time" content="2026-09-20" />

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
          <span className="text-slate-900">Fish &amp; Chip Boxes Ireland</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            Wholesale Guide
          </span>
          <span className="text-slate-400 text-sm">20 Sep 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Fish &amp; Chip Boxes Ireland: Small vs Large Sizes &amp; Wholesale Buying Guide
        </h1>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="relative rounded-2xl overflow-hidden h-48 col-span-2 bg-slate-50">
            <Image
              src={HERO_IMAGE}
              alt="Fish and chip boxes Ireland — large corrugated chipper packaging for Dublin takeaways"
              fill
              className="object-contain p-6"
              priority
              sizes="(max-width: 768px) 66vw, 512px"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={SMALL_IMAGE}
                alt="Small fish and chip boxes Ireland — corrugated chipper tray wholesale Cork"
                fill
                className="object-contain p-3"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={TRAY_IMAGE}
                alt="Kraft food trays Ireland — Greenspirit paper chip trays Galway wholesale"
                fill
                className="object-contain p-3"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Fish &amp; chip boxes are everyday kit for Irish chippers, seaside takeaways and Friday-night
            counters. The wrong size leaves chips spilling over the edge or looking lost in an oversized
            tray — and both mistakes show up on every delivery photo.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            This guide explains how to buy <strong>fish &amp; chip boxes in Ireland</strong> as plain
            wholesale stock — small versus large corrugated sizes, how 100-piece cases fit weekly
            ordering, what to stock alongside boxes, and how{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              PrintNPack&apos;s fish &amp; chip boxes
            </Link>{' '}
            range works with tiered case pricing and delivery from Ashbourne.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Why Irish chippers buy plain corrugated boxes
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Corrugated fish &amp; chip boxes are rigid enough for hot battered fish, grease-tolerant for
            a busy pass, and stack neatly in a dry store. They are plain stock — no artwork proof and no
            print minimum — so Dublin, Cork and Galway chippers can restock by the case when weekend
            volume spikes.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            PrintNPack holds two corrugated fish &amp; chip box lines (small and large), each packed 100
            per case. Orders ship nationwide; local buyers can collect from Ashbourne, Co. Meath. For
            open paper trays instead of a closed corrugated box, compare{' '}
            <Link href="/plain-packaging?category=Food+Trays" className="text-blue-600 hover:underline">
              kraft food trays
            </Link>{' '}
            and{' '}
            <Link href="/blog/biobox-containers-ireland-sizes-buying-guide" className="text-blue-600 hover:underline">
              biobox containers
            </Link>{' '}
            for saucier or plated-style meals.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Many Irish takeaways run a mixed pack: corrugated fish &amp; chip boxes for classic chipper
            orders, kraft trays for sides and street-food portions, and biobox or bagasse for wetter
            dishes. That split is normal — buy fish &amp; chip boxes where corrugated earns its keep,
            not as a default for every SKU on the pass.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Who this guide is for</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            This is a chipper and takeaway buying guide, not a materials essay. It is written for:
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-8">
            <li>Traditional fish &amp; chip shops packing battered fish and chips nightly</li>
            <li>Seaside and tourist takeaways that spike hard on weekends and bank holidays</li>
            <li>Multi-cuisine takeaways that still run a dedicated chipper line</li>
            <li>Caterers and food trucks serving chip portions into rigid carry trays</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Fish &amp; chip box sizes Ireland — small vs large
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Start with portion size, not the cheapest case on the shelf. An oversized tray wastes board
            and looks half-empty; an undersized tray crumples under a large fish or spills chips into
            the bag.
          </p>
          <div className="overflow-x-auto my-6 not-prose">
            <table className="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">Size</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">Catalogue dims</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">Pack</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">Best for</th>
                </tr>
              </thead>
              <tbody>
                {sizeRows.map((row, i) => (
                  <tr key={row.size} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="px-4 py-3 font-medium text-slate-900 whitespace-nowrap">{row.size}</td>
                    <td className="px-4 py-3 text-slate-600 whitespace-nowrap">{row.dims}</td>
                    <td className="px-4 py-3 text-slate-600">{row.pack}</td>
                    <td className="px-4 py-3 text-slate-600">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-700 leading-relaxed mb-8">
            For most Irish chippers, the <strong>small corrugated</strong> box covers regular single
            orders and the <strong>large corrugated</strong> box covers family portions, doubles and
            loaded trays. Stock both if your menu mixes standard and large — do not force every order
            into one size just to simplify the purchase order.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Small vs large — how to choose on the pass
          </h2>
          <div className="relative rounded-2xl overflow-hidden h-56 bg-slate-50 mb-6 not-prose">
            <Image
              src={LARGE_IMAGE}
              alt="Large fish and chip boxes Ireland Ashbourne — corrugated wholesale chipper trays"
              fill
              className="object-contain p-8"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </div>
          <p className="text-slate-700 leading-relaxed mb-4">
            Use the <strong>small</strong> box when a single fish and a standard chip portion leave a
            tidy fill with room to close or wrap. Step up to the <strong>large</strong> box when the
            order includes a larger fish, extra chips, mushy peas on the side, or a family tray that
            needs a wider footprint.
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
            <li>Train staff to pick size from the ticket before the fryer — not after chips are piled high</li>
            <li>Keep small and large cases on separate shelves so the pass does not mix sizes mid-rush</li>
            <li>Count weekly burn rates; if large runs out first, reorder large earlier rather than
              stuffing family orders into small boxes</li>
            <li>Pair either size with greaseproof wrap or sheets when you want grease control and brand
              print on the wrap rather than on the box</li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-8">
            If you brand packaging, keep the boxes plain and put the logo on{' '}
            <Link
              href="/blog/custom-greaseproof-sheets-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              custom greaseproof sheets
            </Link>{' '}
            or paper bags. That keeps the corrugated case cheap and flexible while still putting your
            name in the customer&apos;s hand.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            What to stock with fish &amp; chip boxes
          </h2>
          <div className="relative rounded-2xl overflow-hidden h-56 bg-slate-50 mb-6 not-prose">
            <Image
              src={TRAY_IMAGE}
              alt="Kraft Greenspirit food trays Ireland — chip and street food trays wholesale"
              fill
              className="object-contain p-8"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </div>
          <p className="text-slate-700 leading-relaxed mb-4">
            A chipper rarely buys boxes alone. Build a simple restock list around the same delivery:
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
            <li>
              <Link href="/plain-packaging?category=Food+Trays" className="text-blue-600 hover:underline">
                Greenspirit kraft food trays
              </Link>{' '}
              (½lb to 3lb) for open chip portions and street-food sides
            </li>
            <li>Greaseproof chip bags and sheets for lining trays and wrapping fish</li>
            <li>Wooden chip forks under Cutlery &amp; Stirrers for counter and delivery orders</li>
            <li>
              <Link
                href="/blog/sos-grab-bags-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                SOS grab bags
              </Link>{' '}
              for carry-out when customers need a handled bag
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-8">
            For wetter takeaway meals that are not classic chipper trays, switch to{' '}
            <Link href="/blog/foil-containers-ireland-sizes-buying-guide" className="text-blue-600 hover:underline">
              foil containers
            </Link>{' '}
            or biobox — corrugated fish &amp; chip boxes are built for fish and chips, not curry gravy.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Case packs, MOQ and how pricing works
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Fish &amp; chip boxes are sold by the case with <strong>four-tier volume pricing</strong> —
            the more cases you take, the lower the price per case. There is no custom-print MOQ because
            these are plain stock lines. Both small and large catalogue lines pack <strong>100 boxes
            per case</strong>.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Always check the live tier table on each product page in the{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              Fish &amp; Chip Boxes
            </Link>{' '}
            category — we do not reprint one-off unit rates here because case tiering is how wholesale
            buyers save money. A single-site chipper often starts on 1–3 cases per size; multi-site
            groups and busy seaside shops move into higher tiers when they consolidate orders.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Delivery across Ireland from Ashbourne
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            PrintNPack is based in Ashbourne, Co. Meath — convenient for Dublin and Meath collections,
            with nationwide dispatch for Cork, Galway, Limerick and every other county. Plain corrugated
            orders move quickly because they are warehouse stock, not made-to-print jobs.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Pair fish &amp; chip boxes with other catering lines on one delivery —{' '}
            <Link href="/plain-packaging" className="text-blue-600 hover:underline">
              plain packaging
            </Link>
            , kraft trays, greaseproof and grab bags — so kitchen stock arrives together before the
            weekend rush.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How to order fish &amp; chip boxes in Ireland
          </h2>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-8">
            <li>List your regular vs family portions and choose small, large, or both</li>
            <li>Add kraft trays, greaseproof and chip forks if the pass needs them</li>
            <li>Order by the case on the Fish &amp; Chip Boxes category — watch the volume tiers</li>
            <li>Take nationwide delivery or collect from Ashbourne, Co. Meath</li>
            <li>Track weekly burn rates and reorder before bank-holiday spikes</li>
          </ol>

          <div className="bg-slate-900 rounded-xl p-6 mb-8 text-white not-prose">
            <p className="font-semibold mb-1">Ready to restock fish &amp; chip boxes?</p>
            <p className="text-slate-400 text-sm mb-4">
              Small and large corrugated chipper boxes with tiered case pricing — delivered across
              Ireland.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={HUB_HREF}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Shop Fish &amp; Chip Boxes Ireland →
              </Link>
              <Link
                href="/plain-packaging"
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Browse Plain Packaging
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
                q: 'Where can I buy fish & chip boxes wholesale in Ireland?',
                a: 'PrintNPack stocks plain corrugated fish & chip boxes by the case with tiered wholesale pricing. Browse the Fish & Chip Boxes category on plain packaging — delivery from Ashbourne to Dublin, Cork, Galway and nationwide.',
              },
              {
                q: 'What fish & chip box sizes are available?',
                a: 'Two corrugated lines are stocked: Small 255×150×510mm (100 per case) and Large 310×150×50mm (100 per case). Match small to regular portions and large to family or loaded trays.',
              },
              {
                q: 'Are fish & chip boxes plain wholesale or custom printed?',
                a: 'These lines are plain corrugated wholesale stock — no artwork proof and no custom-print minimum. Order by the case with four-tier volume pricing.',
              },
              {
                q: 'What else do Irish chippers usually order with fish & chip boxes?',
                a: 'Most chippers pair boxes with kraft paper food trays, greaseproof chip bags or sheets, wooden chip forks, and SOS grab bags for carry-out.',
              },
              {
                q: 'Do you deliver fish & chip boxes to Dublin, Cork and Galway?',
                a: 'Yes. We deliver fish & chip boxes to Dublin, Cork, Galway and all Irish counties, with collection available from Ashbourne, Co. Meath.',
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
              href: '/blog/biobox-containers-ireland-sizes-buying-guide',
              src: '/images/plain-packaging/120090.webp',
              title: 'Biobox Containers Ireland: Sizes No.1–No.12 & Wholesale Buying Guide',
            },
            {
              href: '/blog/custom-greaseproof-sheets-ireland-sizes-buying-guide',
              src: '/images/products/greaseproof-sheets/greaseproof-sheets-ireland-branded-burger-wrap.jpg',
              title: 'Custom Greaseproof Sheets Ireland: Sizes, MOQ & Buying Guide',
            },
            {
              href: '/blog/foil-containers-ireland-sizes-buying-guide',
              src: '/images/plain-packaging/10928.webp',
              title: 'Foil Containers Ireland: Sizes, Lids & Wholesale Buying Guide',
            },
            {
              href: '/blog/plain-packaging-wholesale-ireland',
              src: '/images/plain-packaging/100396.webp',
              title: 'Plain Packaging Wholesale Ireland: How to Buy Catering Supplies in Bulk',
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
