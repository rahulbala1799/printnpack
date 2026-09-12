import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/biobox-containers-ireland-sizes-buying-guide`;
const HERO_IMAGE = '/images/plain-packaging/120090.webp';
const NO3_IMAGE = '/images/plain-packaging/120095.webp';
const NO4_IMAGE = '/images/plain-packaging/120125.webp';
const WHITE_IMAGE = '/images/plain-packaging/10877.webp';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Biobox Containers Ireland: Sizes No.1–No.12, Kraft vs White & Wholesale Buying Guide',
  description:
    'A practical buying guide to biobox containers in Ireland — No.1 to No.12 kraft and white takeaway food boxes, case packs, tiered wholesale pricing, and nationwide delivery from Ashbourne.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-09-12',
  dateModified: '2026-09-12',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a biobox container?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A biobox is a foldable cardboard takeaway food box with a grease- and leak-resistant lining. Irish takeaways, delis and caterers use them for hot meals, salads, pasta, fish & chips and deli portions.',
      },
    },
    {
      '@type': 'Question',
      name: 'What biobox sizes are available in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack stocks kraft biobox containers in No.1 (26oz), No.2 (49oz), No.3 (66oz), No.4 (96oz), No.8 (45oz) and No.12 (34oz), plus white No.12 and white carton / food box options. Dimensions are listed on each product page.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you sell biobox containers wholesale in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Biobox containers are plain wholesale stock sold by the case with four-tier B2B pricing. Browse sizes and live case rates on the biobox containers Ireland hub — no custom-print minimum.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are biobox containers suitable for hot food?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Biobox containers are designed for hot takeaway use. The leak-resistant lining handles sauces, oils and gravies — ideal for curries, pasta, fish & chips and salad bowls.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you deliver biobox containers to Dublin, Cork and Galway?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. PrintNPack delivers biobox wholesale orders to Dublin, Cork, Galway and every Irish county from Ashbourne, Co. Meath. Local buyers can also collect.',
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
      name: 'Biobox Containers Ireland Sizes Buying Guide',
      item: PAGE_URL,
    },
  ],
};

const sizeRows = [
  { size: 'No.1', dims: '109 × 88 × 65 mm', volume: '26oz', use: 'Sides, kids meals, compact portions', pack: '9 × 50' },
  { size: 'No.2', dims: '196 × 139 × 47 mm', volume: '49oz', use: 'Shallow meals, fish & chips', pack: '4 × 50' },
  { size: 'No.3', dims: '196 × 139 × 63 mm', volume: '66oz', use: 'Standard takeaway meal — curries, pasta', pack: '4 × 50' },
  { size: 'No.4', dims: '196 × 139 × 88 mm', volume: '96oz', use: 'Large portions and sharing boxes', pack: '4 × 40' },
  { size: 'No.8', dims: '152 × 120 × 63 mm', volume: '45oz', use: 'Popular medium takeaway / deli size', pack: '6 × 50' },
  { size: 'No.12', dims: '152 × 120 × 38 mm', volume: '34oz', use: 'Shallow salads, rice dishes, deli meals', pack: '6 × 40' },
];

export default function BioboxContainersIrelandSizesBuyingGuide() {
  const title =
    'Biobox Containers Ireland: Sizes No.1–No.12, Kraft vs White & Wholesale Buying Guide';
  const description =
    'Buy biobox containers in Ireland with confidence — No.1 to No.12 kraft and white takeaway food boxes, case packs, tiered wholesale pricing, and delivery to Dublin, Cork, Galway and nationwide.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="biobox containers ireland, kraft biobox wholesale, takeaway food boxes ireland, biobox sizes, white biobox containers, food containers wholesale dublin, leak proof takeaway boxes, biobox No.8, biobox No.12, catering food boxes cork"
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
          content="Biobox containers Ireland — kraft No.8 takeaway food boxes wholesale"
        />
        <meta property="article:published_time" content="2026-09-12" />

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
          <span className="text-slate-900">Biobox Containers Ireland</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            Wholesale Guide
          </span>
          <span className="text-slate-400 text-sm">12 Sep 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Biobox Containers Ireland: Sizes No.1–No.12, Kraft vs White &amp; Wholesale Buying Guide
        </h1>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="relative rounded-2xl overflow-hidden h-48 col-span-2 bg-slate-50">
            <Image
              src={HERO_IMAGE}
              alt="Biobox containers Ireland — kraft No.8 takeaway food boxes for Dublin wholesale"
              fill
              className="object-contain p-6"
              priority
              sizes="(max-width: 768px) 66vw, 512px"
            />
          </div>
          <div className="relative rounded-2xl overflow-hidden h-48 bg-slate-50">
            <Image
              src={NO3_IMAGE}
              alt="Kraft biobox No.3 Ireland — standard takeaway meal box wholesale Cork and Galway"
              fill
              className="object-contain p-4"
              sizes="(max-width: 768px) 33vw, 256px"
            />
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Biobox containers are the everyday cardboard takeaway boxes Irish restaurants, delis and
            meal-prep kitchens restock by the case. Get the size wrong and you either crush a large
            portion into a shallow box or pay for volume you never fill.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            This guide explains how to buy <strong>biobox containers in Ireland</strong> — which No.1
            to No.12 sizes suit common menus, when kraft beats white, how case packs and tiered
            pricing work, and how{' '}
            <Link href="/biobox-containers-ireland" className="text-blue-600 hover:underline">
              PrintNPack&apos;s biobox containers Ireland
            </Link>{' '}
            wholesale range ships from Ashbourne to Dublin, Cork, Galway and nationwide.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Why Irish takeaways buy biobox by the case
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Unlike custom printed pizza boxes or branded bags, biobox containers are plain wholesale
            stock. There is no artwork proof or print minimum — you order kraft or white food boxes
            by the case and restock when service volume climbs. That suits takeaways in Dublin, fish
            &amp; chip shops in Cork, salad bars in Galway, and catering kitchens that need
            leak-resistant meal boxes without waiting on a print run.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            PrintNPack stocks kraft bioboxes from compact No.1 through large No.4, plus popular No.8
            and No.12 sizes, white No.12 options and related white carton / food box lines. Orders
            dispatch across Ireland; local buyers can collect from Ashbourne, Co. Meath.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Because biobox is unprinted stock, it is also a practical way to separate branded and
            operational packaging spend. Many Irish operators put logo budget into pizza boxes or
            paper bags, then keep biobox as the workhorse meal container that can be reordered the
            same week without a proof cycle.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Biobox sizes Ireland — No.1 to No.12 at a glance
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Match the box to the portion, not the supplier catalogue name. Volume (oz) tells you how
            much food fits; depth tells you whether sauces and piled toppings stay put.
          </p>
          <div className="overflow-x-auto my-6 not-prose">
            <table className="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">Size</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">Dims</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">Volume</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">Best for</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">Case pack</th>
                </tr>
              </thead>
              <tbody>
                {sizeRows.map((row, i) => (
                  <tr key={row.size} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="px-4 py-3 font-medium text-slate-900 whitespace-nowrap">{row.size}</td>
                    <td className="px-4 py-3 text-slate-600 whitespace-nowrap">{row.dims}</td>
                    <td className="px-4 py-3 text-slate-600">{row.volume}</td>
                    <td className="px-4 py-3 text-slate-600">{row.use}</td>
                    <td className="px-4 py-3 text-slate-600 whitespace-nowrap">{row.pack}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-700 leading-relaxed mb-8">
            For most Irish hot-food menus, <strong>No.3 (66oz)</strong> and <strong>No.8 (45oz)</strong>{' '}
            cover the majority of single meals. Keep No.12 for shallow salads and deli, and step up to
            No.4 when portions or sharing boxes regularly overflow a No.3.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Kraft vs white biobox — which presentation to stock
          </h2>
          <div className="relative rounded-2xl overflow-hidden h-56 bg-slate-50 mb-6 not-prose">
            <Image
              src={WHITE_IMAGE}
              alt="White food box Ireland Ashbourne wholesale — clean presentation takeaway containers"
              fill
              className="object-contain p-8"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </div>
          <p className="text-slate-700 leading-relaxed mb-4">
            <strong>Kraft biobox</strong> is the default for takeaways — natural brown look,
            grease-resistant lining, and widely recognised as food-service packaging across Ireland.{' '}
            <strong>White biobox</strong> and white carton / food box lines suit operators who want a
            cleaner counter presentation for salads, pasta or deli portions.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Many kitchens stock kraft for hot mains and a white No.12 or white food-box case for cold
            and premium-looking dishes. Browse the full mix on the{' '}
            <Link href="/biobox-containers-ireland" className="text-blue-600 hover:underline">
              biobox containers Ireland hub
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Choosing the right size for your menu
          </h2>
          <div className="relative rounded-2xl overflow-hidden h-56 bg-slate-50 mb-6 not-prose">
            <Image
              src={NO4_IMAGE}
              alt="Large kraft biobox No.4 Ireland — 96oz sharing takeaway food box wholesale"
              fill
              className="object-contain p-8"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </div>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
            <li>
              <strong>No.1 (26oz)</strong> — sides, kids meals and small portions where a full meal box
              wastes space and cost.
            </li>
            <li>
              <strong>No.2 (49oz)</strong> — shallow footprint for fish &amp; chips and plated-style meals
              that need width more than depth.
            </li>
            <li>
              <strong>No.3 (66oz)</strong> — the standard takeaway meal box for curries, pasta and most
              hot mains.
            </li>
            <li>
              <strong>No.8 (45oz)</strong> — popular medium size for delis and mid-portion takeaways;
              often the first size Irish buyers reorder.
            </li>
            <li>
              <strong>No.12 (34oz)</strong> — shallow salads, rice bowls and deli meals where height is
              less important than a tidy lid fold.
            </li>
            <li>
              <strong>No.4 (96oz)</strong> — large portions, family shares and anything that overflows a
              No.3 mid-service.
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-8">
            If lids are popping or sauces are leaking at the fold, move up a size or depth before you
            increase order volume — you will usually waste fewer meals and fewer boxes.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Case packs, MOQ and how pricing works
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Biobox containers are sold by the case with <strong>tiered volume pricing</strong> — the
            more cases you take, the lower the price per case. There is no custom-print MOQ because
            these are plain stock lines. Typical packs:
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
            <li>No.1 kraft: 9 × 50 per case</li>
            <li>No.2 and No.3 kraft: 4 × 50 per case</li>
            <li>No.4 kraft: 4 × 40 per case</li>
            <li>No.8 kraft: 6 × 50 per case</li>
            <li>No.12 kraft or white: 6 × 40 per case</li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-4">
            Live wholesale case prices on kraft biobox lines typically sit in the mid-€20s to mid-€40s
            per case depending on size and tier — for example No.12 kraft cases are among the lower
            price points, while No.1 and No.8 sit higher on the 1–3 case band. Always check the live
            tier table on each product page; we do not invent one-off unit prices here because case
            tiering is how wholesale buyers save money.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            A useful buying habit for Irish kitchens is to lock two core sizes (often No.3 and No.8)
            on a standing reorder, then add No.1 or No.12 only for sides and salads. That keeps shelf
            space tidy and makes volume tiers easier to hit without overstocking rarely used sizes.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Delivery across Ireland from Ashbourne
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            PrintNPack is based in Ashbourne, Co. Meath — convenient for Dublin and Meath collections,
            with nationwide dispatch for Cork, Galway, Limerick and every other county. Plain biobox
            orders move quickly because they are stock packaging, not made-to-print jobs.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Pair biobox with other wholesale catering lines —{' '}
            <Link href="/blog/burger-boxes-ireland-guide" className="text-blue-600 hover:underline">
              burger boxes
            </Link>
            ,{' '}
            <Link href="/plain-packaging" className="text-blue-600 hover:underline">
              plain packaging
            </Link>
            , and{' '}
            <Link href="/blog/plain-packaging-wholesale-ireland" className="text-blue-600 hover:underline">
              bulk catering supplies
            </Link>{' '}
            — so one delivery covers hot and cold takeaway stock.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How to order biobox containers in Ireland
          </h2>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-8">
            <li>List your top takeaway dishes and match each to a No.1–No.12 size above</li>
            <li>Choose kraft for everyday hot food or white for salad / deli presentation</li>
            <li>Confirm case pack (4×40 to 9×50) fits your weekly volume</li>
            <li>Order by the case on the biobox hub — watch the volume tiers</li>
            <li>Take nationwide delivery or collect from Ashbourne, Co. Meath</li>
          </ol>

          <div className="bg-slate-900 rounded-xl p-6 mb-8 text-white not-prose">
            <p className="font-semibold mb-1">Ready to restock biobox containers?</p>
            <p className="text-slate-400 text-sm mb-4">
              Kraft and white takeaway food boxes in No.1–No.12 sizes with tiered case pricing —
              delivered across Ireland.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/biobox-containers-ireland"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Shop Biobox Containers Ireland →
              </Link>
              <Link
                href="/plain-packaging?category=Biobox"
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Browse Biobox Prices
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
                q: 'What is a biobox container?',
                a: 'A biobox is a foldable cardboard takeaway food box with a grease- and leak-resistant lining — used for hot meals, salads, pasta and deli food across Irish food service.',
              },
              {
                q: 'What biobox sizes are available in Ireland?',
                a: 'We stock kraft No.1 (26oz), No.2 (49oz), No.3 (66oz), No.4 (96oz), No.8 (45oz) and No.12 (34oz), plus white No.12 and white carton / food box options.',
              },
              {
                q: 'Do you sell biobox containers wholesale in Ireland?',
                a: 'Yes. PrintNPack sells biobox by the case with four-tier B2B pricing on the biobox containers Ireland hub — no custom-print minimum on these plain stock lines.',
              },
              {
                q: 'Are biobox containers suitable for hot food?',
                a: 'Yes. The leak-resistant lining handles sauces, oils and gravies — ideal for curries, pasta, fish & chips and salad bowls.',
              },
              {
                q: 'Do you deliver biobox containers to Dublin, Cork and Galway?',
                a: 'Yes. We deliver to Dublin, Cork, Galway and all Irish counties, with collection available from Ashbourne, Co. Meath.',
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
              href: '/blog/burger-boxes-ireland-guide',
              src: '/images/products/bagasse-burger-box/1.png',
              title: 'Burger Boxes Ireland: Plain vs Printed, Bagasse & Eco Options',
            },
            {
              href: '/blog/eco-packaging-for-takeaways-ireland',
              src: '/images/products/bagasse-burger-box/1.png',
              title: 'Eco Packaging for Takeaways Ireland: Switching to Sustainable Food Packaging',
            },
            {
              href: '/blog/refuse-sacks-ireland-buying-guide',
              src: '/images/plain-packaging/150003.webp',
              title: 'Refuse Sacks Ireland: Sizes, Hi-Grade vs Standard & Wholesale Buying Guide',
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
