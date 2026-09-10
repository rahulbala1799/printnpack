import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/refuse-sacks-ireland-buying-guide`;
const HERO_IMAGE = '/images/plain-packaging/150003.webp';
const CLEAR_IMAGE = '/images/plain-packaging/150004.webp';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Refuse Sacks Ireland: Sizes, Hi-Grade vs Standard & Wholesale Buying Guide',
  description:
    'A practical buying guide to refuse sacks and bin bags in Ireland — 26×44 sizes, hi-grade vs standard, clear and Greensack options, case packs, and nationwide wholesale delivery from Ashbourne.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-09-10',
  dateModified: '2026-09-10',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I buy refuse sacks wholesale in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack supplies wholesale refuse sacks and bin bags across Ireland — black hi-grade, clear, Greensack recyclable sacks, compactor bags and swing bin liners — with tiered case pricing and delivery from Ashbourne, Co. Meath to Dublin, Cork, Galway and nationwide.',
      },
    },
    {
      '@type': 'Question',
      name: 'What size refuse sack is most common for Irish businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The 26 × 44 inch refuse sack (typically 8 rolls of 25, 200 sacks per case) is the most popular commercial size for wheelie bins and general waste. Larger 29 × 46 heavy-duty sacks, 38 × 42–43 compactor bags and 30" swing bin liners cover heavier and kitchen waste.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between hi-grade and standard refuse sacks?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hi-grade refuse sacks use thicker, stronger polythene for heavier commercial waste and sharper contents. Standard sacks are a cost-effective option for lighter general waste. Both are stocked in black and clear with tiered volume pricing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you deliver refuse sacks to Dublin and Cork?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. PrintNPack delivers refuse sacks and bin bags to Dublin, Cork, Galway and every Irish county. Plain stock orders dispatch quickly from our Ashbourne warehouse, with collection available for local buyers in Co. Meath.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many refuse sacks are in a case?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most 26 × 44 refuse sacks come in cases of 8 rolls × 25 sacks (200 per case). Compactor bags often use 4 × 25 rolls. Swing bin liners are packed 500 per case. Always check the product page for the exact pack size.',
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
    { '@type': 'ListItem', position: 3, name: 'Refuse Sacks Ireland Buying Guide', item: PAGE_URL },
  ],
};

const sizeRows = [
  { size: '26 × 44"', use: 'Standard wheelie bin and commercial waste — the most popular Irish size' },
  { size: '26 × 42"', use: 'Special black or clear economy sacks for lighter general waste' },
  { size: '29 × 46"', use: 'Large heavy-duty black sacks for bulky or wet commercial waste' },
  { size: '38 × 42–43"', use: 'Compactor sacks for industrial compactors and high-volume sites' },
  { size: '18 × 29 × 37"', use: 'Medium Greensack sacks for catering and hospitality bins' },
  { size: '13 × 25 × 20"', use: 'Office desk and under-desk bin liners' },
  { size: '30" swing', use: 'Pedal bin and swing-top kitchen liners — 500 per case' },
];

export default function RefuseSacksIrelandBuyingGuide() {
  const title = 'Refuse Sacks Ireland: Sizes, Hi-Grade vs Standard & Wholesale Buying Guide';
  const description =
    'Buy refuse sacks in Ireland with confidence — 26×44 sizes, hi-grade vs standard, clear and Greensack bin bags, case packs, and wholesale delivery to Dublin, Cork, Galway and nationwide.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="refuse sacks ireland, bin bags ireland, wholesale refuse sacks, hi grade refuse sacks, clear refuse sacks, black refuse sacks dublin, compactor sacks ireland, swing bin liners, refuse bags cork, bin bags wholesale ireland"
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
        <meta property="og:image:alt" content="Refuse sacks Ireland — hi-grade black bin bags wholesale" />
        <meta property="article:published_time" content="2026-09-10" />

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
          <Link href="/" className="hover:text-slate-700">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-slate-700">Blog</Link>
          <span>/</span>
          <span className="text-slate-900">Refuse Sacks Ireland</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">Wholesale Guide</span>
          <span className="text-slate-400 text-sm">10 Sep 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Refuse Sacks Ireland: Sizes, Hi-Grade vs Standard &amp; Wholesale Buying Guide
        </h1>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="relative rounded-2xl overflow-hidden h-48 col-span-2 bg-slate-50">
            <Image
              src={HERO_IMAGE}
              alt="Refuse sacks Ireland — hi-grade black bin bags for Dublin and nationwide wholesale"
              fill
              className="object-contain p-6"
              priority
              sizes="(max-width: 768px) 66vw, 512px"
            />
          </div>
          <div className="relative rounded-2xl overflow-hidden h-48 bg-slate-50">
            <Image
              src={CLEAR_IMAGE}
              alt="Clear refuse sacks Ireland — hi-grade transparent bin bags wholesale Cork and Galway"
              fill
              className="object-contain p-4"
              sizes="(max-width: 768px) 33vw, 256px"
            />
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Refuse sacks are one of the most frequent reorders for Irish restaurants, takeaways, hotels,
            offices and facilities teams. Getting the size, grade and case pack wrong means tears in
            the wheelie bin, wasted stock, or paying for strength you never use.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            This guide explains how to buy <strong>refuse sacks in Ireland</strong> for commercial use —
            which sizes fit Irish bins, when hi-grade beats standard, when clear or Greensack bags make
            sense, and how{' '}
            <Link href="/refuse-sacks-ireland" className="text-blue-600 hover:underline">
              PrintNPack&apos;s refuse sacks Ireland
            </Link>{' '}
            wholesale range works with tiered case pricing and nationwide delivery from Ashbourne.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Why Irish businesses buy refuse sacks by the case
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Unlike custom printed packaging, refuse sacks are plain wholesale stock. There is no artwork
            proof or print minimum — you order cases of black, clear or green bags and restock when
            usage climbs. That suits catering kitchens in Dublin, hotels in Cork, cafés in Galway, and
            facilities managers who need reliable bin bags without waiting on a print run.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            PrintNPack stocks black hi-grade sacks, clear refuse bags, Greensack recyclable options,
            SuperSack heavy polythene, compactor bags, swing bin liners and office bin liners. Orders
            ship across Ireland; local buyers can also collect from Ashbourne, Co. Meath.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Refuse sack sizes Ireland — which one fits your bins
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Match the sack to the bin, not the brand label on the box. Oversized bags waste polythene;
            undersized bags split when you lift them.
          </p>
          <div className="overflow-x-auto my-6 not-prose">
            <table className="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">Size</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">Best for</th>
                </tr>
              </thead>
              <tbody>
                {sizeRows.map((row, i) => (
                  <tr key={row.size} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="px-4 py-3 font-medium text-slate-900 whitespace-nowrap">{row.size}</td>
                    <td className="px-4 py-3 text-slate-600">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-700 leading-relaxed mb-8">
            For most Irish food businesses, <strong>26 × 44&quot;</strong> is the workhorse — typically packed
            as 8 × 25 rolls (200 sacks per case). Step up to 29 × 46&quot; for heavy or wet waste, and keep a
            case of 30&quot; swing liners for kitchen pedal bins.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Hi-grade vs standard vs SuperSack
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Grade is about film strength, not colour. Choosing the wrong grade is the most common
            buying mistake we see from new hospitality accounts.
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
            <li>
              <strong>Standard black 26 × 44&quot;</strong> — cost-effective for lighter general waste and
              quieter service periods.
            </li>
            <li>
              <strong>Hi-grade black or clear 26 × 44&quot;</strong> — thicker polythene for sharper
              kitchen waste, bottle glass risk and busier commercial bins.
            </li>
            <li>
              <strong>SuperSack</strong> — heavier-duty 26 × 44&quot; option when bags must survive long
              carries or denser loads.
            </li>
            <li>
              <strong>Large heavy-weight 29 × 46&quot;</strong> — for bulky commercial waste that overflows
              a standard wheelie liner.
            </li>
            <li>
              <strong>Compactor sacks (38 × 42–43&quot;)</strong> — sized for industrial compactors, not
              standard office bins.
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-8">
            If bags are tearing before the bin is full, move up a grade before you increase order
            volume — you will usually use fewer sacks per week.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Black, clear and Greensack — when each colour helps
          </h2>
          <div className="relative rounded-2xl overflow-hidden h-56 bg-slate-50 mb-6 not-prose">
            <Image
              src={CLEAR_IMAGE}
              alt="Clear refuse sacks Ireland Ashbourne wholesale — transparent bin bags for waste segregation"
              fill
              className="object-contain p-8"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </div>
          <p className="text-slate-700 leading-relaxed mb-4">
            <strong>Black sacks</strong> are the default for general refuse — they hide contents and suit
            front-of-house and back-of-house bins alike. <strong>Clear sacks</strong> help security and
            waste segregation where staff or contractors need to see what is inside before collection.
            <strong> Greensack</strong> options (including green and clear Greensack lines) are popular
            with sites that want a recyclable-facing refuse bag for selected waste streams.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Many Irish operators keep black hi-grade for kitchen waste and a clear or Greensack case for
            recycling or audit-sensitive areas. Browse the full mix on the{' '}
            <Link href="/refuse-sacks-ireland" className="text-blue-600 hover:underline">
              refuse sacks Ireland hub
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Case packs, MOQ and how pricing works
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Refuse sacks are sold by the case with <strong>tiered volume pricing</strong> — the more cases
            you take, the lower the price per case. There is no custom-print MOQ because these are plain
            stock lines. Typical packs:
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
            <li>Most 26 × 44&quot; sacks: 8 rolls × 25 (200 sacks per case)</li>
            <li>Many clear or compactor lines: 4 × 25 rolls</li>
            <li>Swing bin liners: 500 per case</li>
            <li>Office bin liners: often 10 × 50</li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-8">
            Online case prices start from around <strong>€18 per case</strong> on economy lines, with
            hi-grade, SuperSack and large heavy-duty sizes higher depending on film and pack. Always
            check the live tier table on each product page — we do not quote one-off unit prices here
            because case tiering is how wholesale buyers save money.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Delivery across Ireland from Ashbourne
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            PrintNPack is based in Ashbourne, Co. Meath — convenient for Dublin and Meath collections,
            with nationwide dispatch for Cork, Galway, Limerick and every other county. Plain refuse
            sack orders move quickly because they are stock packaging, not made-to-print jobs.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Pair bin bags with other wholesale catering lines —{' '}
            <Link href="/plain-packaging" className="text-blue-600 hover:underline">
              plain packaging
            </Link>
            ,{' '}
            <Link href="/gloves-ireland" className="text-blue-600 hover:underline">
              disposable gloves
            </Link>
            , and{' '}
            <Link href="/hot-cups-ireland" className="text-blue-600 hover:underline">
              hot cups
            </Link>{' '}
            — so one delivery covers kitchen and facilities stock.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How to order refuse sacks in Ireland
          </h2>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-8">
            <li>Measure your bins and pick the size from the guide above</li>
            <li>Choose standard, hi-grade, SuperSack or compactor film strength</li>
            <li>Decide black, clear or Greensack for each waste stream</li>
            <li>Order by the case on the refuse sacks hub — watch the volume tiers</li>
            <li>Take nationwide delivery or collect from Ashbourne, Co. Meath</li>
          </ol>

          <div className="bg-slate-900 rounded-xl p-6 mb-8 text-white not-prose">
            <p className="font-semibold mb-1">Ready to restock refuse sacks?</p>
            <p className="text-slate-400 text-sm mb-4">
              Black hi-grade, clear, Greensack and compactor bin bags with tiered case pricing —
              delivered across Ireland.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/refuse-sacks-ireland"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Shop Refuse Sacks Ireland →
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
                q: 'Where can I buy refuse sacks wholesale in Ireland?',
                a: 'PrintNPack supplies wholesale refuse sacks and bin bags across Ireland — black hi-grade, clear, Greensack, compactor bags and swing bin liners — with tiered case pricing and delivery from Ashbourne to Dublin, Cork, Galway and nationwide.',
              },
              {
                q: 'What size refuse sack is most common for Irish businesses?',
                a: 'The 26 × 44 inch sack (typically 8 × 25 rolls, 200 per case) is the most popular commercial size for wheelie bins. Use 29 × 46 for heavy waste, 38 × 42–43 for compactors, and 30" swing liners for kitchen pedal bins.',
              },
              {
                q: 'What is the difference between hi-grade and standard refuse sacks?',
                a: 'Hi-grade sacks use thicker polythene for heavier commercial waste. Standard sacks suit lighter general waste at a lower case price. SuperSack and heavy-weight 29 × 46 lines cover denser loads.',
              },
              {
                q: 'Do you deliver refuse sacks to Dublin and Cork?',
                a: 'Yes. We deliver refuse sacks and bin bags to Dublin, Cork, Galway and all Irish counties, with collection available from Ashbourne, Co. Meath.',
              },
              {
                q: 'How many refuse sacks are in a case?',
                a: 'Most 26 × 44 lines are 8 × 25 (200 sacks). Compactor bags often use 4 × 25. Swing bin liners are 500 per case. Check each product page for the exact pack.',
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
              href: '/blog/plain-packaging-wholesale-ireland',
              src: '/images/plain-packaging/100396.webp',
              title: 'Plain Packaging Wholesale Ireland: How to Buy Catering Supplies in Bulk',
            },
            {
              href: '/blog/greenspirit-eco-packaging-ireland',
              src: '/images/plain-packaging/100103.webp',
              title: 'Greenspirit Eco Packaging Ireland: Compostable Cups, Cutlery & Delivery',
            },
            {
              href: '/blog/eu-ppwr-packaging-regulation-ireland-2026',
              src: '/images/products/bagasse-burger-box/1.png',
              title: 'EU Packaging Regulation Ireland 2026: What PPWR Means for Food Businesses',
            },
            {
              href: '/blog/eco-packaging-for-takeaways-ireland',
              src: '/images/products/bagasse-burger-box/1.png',
              title: 'Eco Packaging for Takeaways Ireland: Switching to Sustainable Food Packaging',
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
