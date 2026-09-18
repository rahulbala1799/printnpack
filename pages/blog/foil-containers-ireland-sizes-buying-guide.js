import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/foil-containers-ireland-sizes-buying-guide`;
const HUB_HREF = '/plain-packaging?category=Foil+Containers';
const HERO_IMAGE = '/images/plain-packaging/10928.webp';
const SIZE_45_IMAGE = '/images/plain-packaging/10929.webp';
const SIZE_69_IMAGE = '/images/plain-packaging/109292.webp';
const SIZE_99_IMAGE = '/images/plain-packaging/109291.webp';
const GASTRO_IMAGE = '/images/plain-packaging/10932.webp';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Foil Containers Ireland: Sizes, Lids & Wholesale Buying Guide',
  description:
    'A practical buying guide to foil containers in Ireland — 4×5, 4×8, 6×9 and 9×9 sizes, lid combos vs separate lids, half-gastro trays, case packs and nationwide wholesale delivery from Ashbourne.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-09-18',
  dateModified: '2026-09-18',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I buy foil containers wholesale in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack stocks plain aluminium foil containers and lids by the case with tiered wholesale pricing. Browse sizes on the plain packaging Foil Containers category — delivery from Ashbourne, Co. Meath to Dublin, Cork, Galway and nationwide.',
      },
    },
    {
      '@type': 'Question',
      name: 'What foil container sizes are available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Common lines include No.2 4×5" (450ml), No.6a 4×8" (660ml), 6×9, 9×9 (including 1600ml packs), 6×6 flan-style trays, 8" flan dishes and 1/2 foil gastro containers with matching lids. Combo packs ship containers with lids; tray-only and lid-only cases are also stocked.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I buy foil container and lid combos or separate lids?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Combos suit takeaways that always close every portion — one SKU, balanced stock. Buy trays and lids separately when you use open trays for counter display or when lid and tray burn rates differ. Match lid size to the tray (for example No.2 lids for 4×5", No.6 lids for 4×8").',
      },
    },
    {
      '@type': 'Question',
      name: 'Are foil containers suitable for hot takeaway meals?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Aluminium foil containers are widely used for hot curries, rice, roast portions, Chinese and Indian takeaway meals. Pair with the correct board or foil lid for transport. For compostable alternatives, see bagasse meal boxes and biobox lines.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you deliver foil containers to Dublin, Cork and Galway?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. PrintNPack delivers foil containers and lids to Dublin, Cork, Galway and every Irish county from Ashbourne. Local buyers can also collect from Co. Meath.',
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
      name: 'Foil Containers Ireland Buying Guide',
      item: PAGE_URL,
    },
  ],
};

const sizeRows = [
  {
    size: '4 × 5" (No.2, 450ml)',
    pack: '10×100 trays; lids 1000s',
    use: 'Sides, sauces, small curry or rice portions',
  },
  {
    size: '4 × 8" (No.6a, 660ml)',
    pack: '5×100 trays; combo 20×25',
    use: 'Standard takeaway mains — Indian, Chinese, roast dinners',
  },
  {
    size: '6 × 9"',
    pack: 'Combo 20×25; trays 1000; lids 1000',
    use: 'Larger meals, sharing portions, family takeaway trays',
  },
  {
    size: '9 × 9" (incl. 1600ml)',
    pack: 'Combo 10×25; trays 200 or 2×100',
    use: 'Large meals, catering platters, multi-portion trays',
  },
  {
    size: '6 × 6" / 8" flan',
    pack: '4×125 / 800',
    use: 'Bakery flans, desserts and round presentation trays',
  },
  {
    size: '1/2 foil gastro',
    pack: '300 trays; lids 300',
    use: 'Catering, hotels and bulk kitchen prep',
  },
];

export default function FoilContainersIrelandSizesBuyingGuide() {
  const title = 'Foil Containers Ireland: Sizes, Lids & Wholesale Buying Guide';
  const description =
    'Buy foil containers in Ireland with confidence — 4×5, 4×8, 6×9 and 9×9 sizes, lid combos vs separate lids, half-gastro trays, case packs, and wholesale delivery to Dublin, Cork, Galway and nationwide.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="foil containers ireland, aluminium foil trays wholesale, foil food containers dublin, 4x8 foil containers, 9x9 foil trays ireland, foil container lids cork, half gastro foil trays, takeaway foil containers ireland, foil packaging wholesale ashbourne, foil trays galway"
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
        <meta property="og:image:alt" content="Foil containers Ireland — 4×8 aluminium foil trays with lids wholesale" />
        <meta property="article:published_time" content="2026-09-18" />

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
          <span className="text-slate-900">Foil Containers Ireland</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">Wholesale Guide</span>
          <span className="text-slate-400 text-sm">18 Sep 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Foil Containers Ireland: Sizes, Lids &amp; Wholesale Buying Guide
        </h1>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="relative rounded-2xl overflow-hidden h-48 col-span-2 bg-slate-50">
            <Image
              src={HERO_IMAGE}
              alt="Foil containers Ireland — 4×8 aluminium foil food trays with lids for Dublin takeaways"
              fill
              className="object-contain p-6"
              priority
              sizes="(max-width: 768px) 66vw, 512px"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={SIZE_45_IMAGE}
                alt="4×5 foil containers Ireland — small aluminium trays wholesale Cork"
                fill
                className="object-contain p-3"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={SIZE_99_IMAGE}
                alt="9×9 foil containers Ireland — large aluminium catering trays Galway"
                fill
                className="object-contain p-3"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Foil containers are everyday kit for Irish takeaways, Indian and Chinese restaurants,
            roast-dinner counters and caterers. The wrong size leaks margin on every order; the wrong
            lid setup leaves trays open in the bag or unused lids stacked in the storeroom.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            This guide explains how to buy <strong>foil containers in Ireland</strong> as plain
            wholesale stock — which sizes suit which meals, when to order container-and-lid combos
            versus separate lids, how half-gastro trays fit catering, and how{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              PrintNPack&apos;s foil containers
            </Link>{' '}
            range works with tiered case pricing and delivery from Ashbourne.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Why Irish kitchens still buy plain foil trays
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Aluminium trays are heat-tolerant, stack neatly and close with board or foil lids for
            delivery apps and counter collection. They are plain stock — no artwork proof and no
            print minimum — so Dublin, Cork and Galway operators can restock by the case when Friday
            night volume spikes.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            PrintNPack holds portion trays (4×5&quot;, 4×8&quot;), larger 6×9&quot; and 9×9&quot; lines, flan dishes,
            half-gastro catering trays and matching lids. Orders ship nationwide; local buyers can
            collect from Ashbourne, Co. Meath. For compostable clamshells instead of foil, compare{' '}
            <Link href="/plain-packaging?category=Bagasse+Meal+Box" className="text-blue-600 hover:underline">
              bagasse meal boxes
            </Link>{' '}
            and{' '}
            <Link href="/blog/biobox-containers-ireland-sizes-buying-guide" className="text-blue-600 hover:underline">
              biobox containers
            </Link>
            .
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Many Irish kitchens run a mixed pack: foil for wet, sauce-heavy dishes; cardboard biobox or
            bagasse for dry meals and eco-facing menus. That split is normal — buy foil where aluminium
            earns its keep, not as a default for every SKU on the pass.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Who this guide is for
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            This is a takeaway and catering buying guide, not a materials essay. It is written for:
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-8">
            <li>Indian, Chinese and multi-cuisine takeaways that portion curry, rice and noodles nightly</li>
            <li>Roast-dinner and carvery counters packing hot mains into sealed trays</li>
            <li>Hotels and caterers using half-gastro trays for batch cook-and-serve</li>
            <li>Bakeries needing round flan dishes alongside portion takeaway trays</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Foil container sizes Ireland — match the tray to the meal
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Start with portion size, not the cheapest case on the shelf. Oversized trays waste foil
            and look half-empty; undersized trays overflow sauces into the bag.
          </p>
          <div className="overflow-x-auto my-6 not-prose">
            <table className="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">Size</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">Typical pack</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">Best for</th>
                </tr>
              </thead>
              <tbody>
                {sizeRows.map((row, i) => (
                  <tr key={row.size} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="px-4 py-3 font-medium text-slate-900 whitespace-nowrap">{row.size}</td>
                    <td className="px-4 py-3 text-slate-600">{row.pack}</td>
                    <td className="px-4 py-3 text-slate-600">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-700 leading-relaxed mb-8">
            For most Irish takeaways, <strong>4 × 8&quot; (No.6a, 660ml)</strong> is the workhorse main and{' '}
            <strong>4 × 5&quot; (No.2, 450ml)</strong> covers sides. Step up to 6×9&quot; or 9×9&quot; for large
            meals and catering; keep half-gastro for hotels and prep kitchens that batch-cook.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Lid combos vs separate lids
          </h2>
          <div className="relative rounded-2xl overflow-hidden h-56 bg-slate-50 mb-6 not-prose">
            <Image
              src={SIZE_69_IMAGE}
              alt="6×9 foil containers Ireland Ashbourne — aluminium trays with lid combo packs wholesale"
              fill
              className="object-contain p-8"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </div>
          <p className="text-slate-700 leading-relaxed mb-4">
            <strong>Container &amp; lid combos</strong> (for example 4×8, 4×5, 6×9 and 9×9 packed
            together) keep stock balanced when every portion leaves sealed. <strong>Tray-only</strong>{' '}
            and <strong>lid-only</strong> cases suit kitchens that sometimes run open trays on the
            counter, or that burn lids faster than bases.
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
            <li>No.2 / 4×5&quot; trays pair with standard 4×5 lids (1000s) or poly board lids where listed</li>
            <li>No.6 / 4×8&quot; trays pair with standard 4×8 lids (500s)</li>
            <li>6×9&quot; and 9×9&quot; trays have dedicated lid cases — do not mix sizes</li>
            <li>Half-gastro containers have matching half-gastro lids (300 per case)</li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-8">
            If lids are running out mid-week while trays sit unused, switch that size to separate
            ordering. If both deplete together, stay on combos and simplify the purchase order.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Half-gastro and catering trays
          </h2>
          <div className="relative rounded-2xl overflow-hidden h-56 bg-slate-50 mb-6 not-prose">
            <Image
              src={GASTRO_IMAGE}
              alt="Half gastro foil containers Ireland — wholesale catering foil trays from Ashbourne"
              fill
              className="object-contain p-8"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </div>
          <p className="text-slate-700 leading-relaxed mb-4">
            <strong>1/2 foil gastro containers</strong> (300 per case, with lids also at 300) suit
            hotels, event caterers and central kitchens that need larger aluminium trays for oven-to-
            service work. Round <strong>8&quot; flan dishes</strong> and 6×6&quot; trays cover bakery and dessert
            lines. Keep these SKUs separate from portion takeaway trays so front-of-house and catering
            teams do not raid each other&apos;s stock.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            PrintNPack also stocks related foil lines such as foil chicken bags in portion, standard
            and large flat sizes under the Foil Bags category. Those are bags, not rigid trays — useful
            for roast chicken and similar carry-out, but they do not replace a lidded 4×8&quot; meal
            container. Order bags only when your menu needs them; do not substitute them for portion
            trays.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Storage and kitchen workflow tips
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Foil dents easily in a cramped dry store. Keep cases off wet floors, open one sleeve at a
            time on the pass, and store lids beside the matching tray size — mixing 4×5&quot; and 4×8&quot;
            lids is the fastest way to slow a Friday rush.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Train staff to grab the smallest tray that fits the portion. A curry that belongs in
            4×5&quot; should not go out in 9×9&quot; just because the large case was opened first. Consistent
            sizing protects food presentation and keeps your case burn-rate predictable when you reorder.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Case packs, MOQ and how pricing works
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Foil containers are sold by the case with <strong>four-tier volume pricing</strong> — the
            more cases you take, the lower the price per case. There is no custom-print MOQ because
            these are plain stock lines. Pack styles on the live catalogue include:
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
            <li>No.2 4×5&quot; trays: 10×100 per case</li>
            <li>No.6a 4×8&quot; trays: 5×100; combo packs often 20×25</li>
            <li>9×9&quot; 1600ml trays: 2×100; other 9×9 lines in 200s or 10×25 combos</li>
            <li>Half-gastro trays and lids: 300 per case</li>
            <li>Dedicated lid cases for 4×5, 4×8, 6×9 and 9×9</li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-8">
            Always check the live tier table on each product page in the{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              Foil Containers
            </Link>{' '}
            category — we do not reprint one-off unit rates here because case tiering is how wholesale
            buyers save money.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Delivery across Ireland from Ashbourne
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            PrintNPack is based in Ashbourne, Co. Meath — convenient for Dublin and Meath collections,
            with nationwide dispatch for Cork, Galway, Limerick and every other county. Plain foil
            orders move quickly because they are warehouse stock, not made-to-print jobs.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Pair foil trays with other catering lines on one delivery —{' '}
            <Link href="/plain-packaging" className="text-blue-600 hover:underline">
              plain packaging
            </Link>
            ,{' '}
            <Link href="/blog/refuse-sacks-ireland-buying-guide" className="text-blue-600 hover:underline">
              refuse sacks
            </Link>
            , and{' '}
            <Link href="/blog/sos-grab-bags-ireland-sizes-buying-guide" className="text-blue-600 hover:underline">
              SOS grab bags
            </Link>{' '}
            — so kitchen and facilities stock arrive together.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How to order foil containers in Ireland
          </h2>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-8">
            <li>List your menu portions and pick 4×5&quot;, 4×8&quot;, 6×9&quot; or 9×9&quot; accordingly</li>
            <li>Decide combo packs versus separate trays and lids for each size</li>
            <li>Add half-gastro or flan trays only if catering or bakery needs them</li>
            <li>Order by the case on the foil containers category — watch the volume tiers</li>
            <li>Take nationwide delivery or collect from Ashbourne, Co. Meath</li>
          </ol>

          <div className="bg-slate-900 rounded-xl p-6 mb-8 text-white not-prose">
            <p className="font-semibold mb-1">Ready to restock foil containers?</p>
            <p className="text-slate-400 text-sm mb-4">
              Portion trays, lid combos, 9×9 and half-gastro lines with tiered case pricing —
              delivered across Ireland.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={HUB_HREF}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Shop Foil Containers Ireland →
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
                q: 'Where can I buy foil containers wholesale in Ireland?',
                a: 'PrintNPack stocks plain aluminium foil containers and lids by the case with tiered wholesale pricing. Browse the Foil Containers category on plain packaging — delivery from Ashbourne to Dublin, Cork, Galway and nationwide.',
              },
              {
                q: 'What foil container sizes are available?',
                a: 'Common lines include No.2 4×5" (450ml), No.6a 4×8" (660ml), 6×9, 9×9 (including 1600ml), 6×6 and 8" flan trays, plus 1/2 foil gastro containers with matching lids.',
              },
              {
                q: 'Should I buy foil container and lid combos or separate lids?',
                a: 'Combos suit sealed takeaway portions. Buy trays and lids separately when open trays are used on the counter or when lid and tray usage rates differ. Always match lid size to the tray.',
              },
              {
                q: 'Are foil containers suitable for hot takeaway meals?',
                a: 'Yes. Aluminium foil containers are standard for hot curries, rice, roast portions and Chinese or Indian takeaway. Use the correct lid for transport.',
              },
              {
                q: 'Do you deliver foil containers to Dublin, Cork and Galway?',
                a: 'Yes. We deliver foil containers and lids to Dublin, Cork, Galway and all Irish counties, with collection available from Ashbourne, Co. Meath.',
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
              href: '/blog/biobox-containers-ireland-sizes-buying-guide',
              src: '/images/plain-packaging/120090.webp',
              title: 'Biobox Containers Ireland: Sizes No.1–No.12 & Wholesale Buying Guide',
            },
            {
              href: '/blog/sos-grab-bags-ireland-sizes-buying-guide',
              src: '/images/products/sos-bags/1.png',
              title: 'SOS Grab Bags Ireland: Sizes, Plain vs Printed & Buying Guide',
            },
            {
              href: '/blog/refuse-sacks-ireland-buying-guide',
              src: '/images/plain-packaging/150003.webp',
              title: 'Refuse Sacks Ireland: Sizes, Hi-Grade vs Standard & Buying Guide',
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
