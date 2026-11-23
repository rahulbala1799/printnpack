import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/coffee-cup-sleeves-carriers-ireland-buying-guide`;
const HUB_HREF = '/plain-packaging?category=Hot%20Cup%20Extras';
const HOT_CUPS_HUB = '/hot-cups-ireland';
const PLAIN_HOT_CUPS = '/plain-hot-cups-ireland';
const SLEEVE_89_HREF =
  '/plain-packaging/89oz-greenspirit-coffee-cup-sleeve-10x100s-100083';
const SLEEVE_1216_HREF =
  '/plain-packaging/121620oz-greenspirit-coffee-cup-sleeve-10x100s-100084';
const CARRIER_2_HREF =
  '/plain-packaging/2-cup-greenspirit-carrier-pulp-tray-6x80s-480s-100315';
const CARRIER_4_HREF =
  '/plain-packaging/4-cup-greenspirit-carrier-pulp-tray-4x55s-220s-100316';
const CUP_8_HREF =
  '/plain-packaging/8oz-white-greenspirit-aqueous-dw-hot-cups-20x25-100102';
const CUP_12_HREF =
  '/plain-packaging/12oz-white-greenspirit-aqueous-dw-hot-cups-20x25-100103';

const HERO_IMAGE = '/images/plain-packaging/100315.webp';
const CARRIER_4_IMAGE = '/images/plain-packaging/100316.webp';
const SLEEVE_89_IMAGE = '/images/plain-packaging/100083.webp';
const SLEEVE_1216_IMAGE = '/images/plain-packaging/100084.webp';
const CUP_IMAGE = '/images/plain-packaging/100103.webp';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Coffee Cup Sleeves & Carriers Ireland: Greenspirit Hot Cup Extras Buying Guide',
  description:
    'A practical buying guide to plain Greenspirit coffee cup sleeves and pulp carrier trays in Ireland — 8/9oz and 12/16/20oz sleeves, 2-cup and 4-cup carriers, case packs and tiered wholesale pricing with nationwide delivery from Ashbourne.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-11-23',
  dateModified: '2026-11-23',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I buy coffee cup sleeves wholesale in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack stocks plain Greenspirit coffee cup sleeves and pulp carrier trays under Hot Cup Extras — 8/9oz and 12/16/20oz sleeves plus 2-cup and 4-cup carriers — with four-tier volume pricing. Delivery from Ashbourne, Co. Meath to Dublin, Cork, Galway and nationwide.',
      },
    },
    {
      '@type': 'Question',
      name: 'What coffee cup sleeve sizes are available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Greenspirit coffee cup sleeves come in 8/9oz (code 100083, 10×100 per case) and 12/16/20oz (code 100084, 10×100 per case). Match the sleeve band to the cup rim you already stock on the hot-drink pass.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I buy cup sleeves or double-wall hot cups?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Choose sleeves when you already run single-wall or aqueous cups and need hand protection at the counter. Choose double-wall or triple-ripple cups when you want insulation built into the cup and fewer separate SKUs. Many Irish cafés stock both under Hot Cups & Lids and Hot Cup Extras.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Hot Cup Extras pricing work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every Hot Cup Extras SKU uses four-tier volume pricing by case count (1–3, 4–6, 7–9 and 10+ cases). Example 1–3 case list prices ex VAT include 8/9oz sleeves from €32.47 per 10×100, 12/16/20oz sleeves from €35.41 per 10×100, 2-cup carriers from €32.65 per 6×80 and 4-cup carriers from €25.21 per 4×55. Always check the live tier table on each product page.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you deliver coffee cup sleeves and carriers to Dublin, Cork and Galway?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. PrintNPack delivers Hot Cup Extras lines to Dublin, Cork, Galway and every Irish county from Ashbourne. Local buyers can also collect from Co. Meath.',
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
      name: 'Coffee Cup Sleeves & Carriers Ireland Buying Guide',
      item: PAGE_URL,
    },
  ],
};

const sizeRows = [
  {
    size: '8/9oz sleeve',
    pack: '10 × 100',
    fromPrice: '€32.47',
    use: 'Hand protection on small takeaway coffees and teas',
  },
  {
    size: '12/16/20oz sleeve',
    pack: '10 × 100',
    fromPrice: '€35.41',
    use: 'Larger hot drinks — lattes, Americanos and travel cups',
  },
  {
    size: '2-cup pulp tray',
    pack: '6 × 80 (480)',
    fromPrice: '€32.65',
    use: 'Pairs and walk-out trays for café counters',
  },
  {
    size: '4-cup pulp tray',
    pack: '4 × 55 (220)',
    fromPrice: '€25.21',
    use: 'Office runs, meeting orders and multi-drink takeaways',
  },
];

export default function CoffeeCupSleevesCarriersIrelandBuyingGuide() {
  const title =
    'Coffee Cup Sleeves & Carriers Ireland: Greenspirit Hot Cup Extras Buying Guide';
  const description =
    'Buy coffee cup sleeves and pulp carriers in Ireland with confidence — plain Greenspirit 8/9oz and 12/16/20oz sleeves, 2-cup and 4-cup trays, case packs vs double-wall cups, with delivery to Dublin, Cork, Galway and nationwide from Ashbourne.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="coffee cup sleeves ireland, cup carriers ireland wholesale, greenspirit coffee cup sleeve, 2 cup pulp tray dublin, 4 cup coffee carrier cork, hot cup extras ashbourne, takeaway cup sleeve galway, plain coffee cup sleeves ireland, coffee cup carrier trays wholesale, hot cup sleeves ireland"
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
          content="Coffee cup carriers Ireland — 2-cup Greenspirit pulp tray wholesale for Dublin cafés"
        />
        <meta property="article:published_time" content="2026-11-23" />

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
          <span className="text-slate-900">Coffee Cup Sleeves &amp; Carriers Ireland</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            Wholesale Guide
          </span>
          <span className="text-slate-400 text-sm">23 Nov 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Coffee Cup Sleeves &amp; Carriers Ireland: Greenspirit Hot Cup Extras Buying Guide
        </h1>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="relative rounded-2xl overflow-hidden h-48 col-span-2 bg-slate-50">
            <Image
              src={HERO_IMAGE}
              alt="Coffee cup carriers Ireland — 2-cup Greenspirit pulp tray wholesale for Dublin cafés"
              fill
              className="object-contain p-4"
              priority
              sizes="(max-width: 768px) 66vw, 512px"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={SLEEVE_89_IMAGE}
                alt="Coffee cup sleeves Ireland — 8/9oz Greenspirit sleeve wholesale for Cork takeaways"
                fill
                className="object-contain p-2"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={CARRIER_4_IMAGE}
                alt="4-cup coffee carrier Ireland — Greenspirit pulp tray wholesale for Galway cafés"
                fill
                className="object-contain p-2"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Irish cafés burn through hot cups every morning — and the extras that keep hands cool
            and multi-drink orders upright often run out first. PrintNPack stocks plain Greenspirit
            coffee cup sleeves and pulp carrier trays under{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              Hot Cup Extras
            </Link>{' '}
            — 8/9oz and 12/16/20oz sleeves, plus 2-cup and 4-cup carriers — with tiered case pricing
            and delivery from Ashbourne across Ireland.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            This guide covers when a sleeve beats a double-wall cup, how to choose 2-cup vs 4-cup
            trays, case packs and volume tiers, and how Dublin, Cork and Galway buyers restock without
            inventing prices mid-rush. Facts and list rates come from the live plain-packaging
            catalogue — always confirm the tier table on each product page.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Who buys coffee cup sleeves and carriers in Ireland?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Hot Cup Extras are warehouse stock for sites that already run takeaway coffee and need
            the supporting pieces without a custom-print lead time:
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-8">
            <li>Dublin independent cafés and bakery counters that sleeve every hot drink</li>
            <li>Cork and Galway coffee vans and hotel lobbies moving pairs and fours out the door</li>
            <li>Office-park and co-working cafés that sell meeting-room tray orders all morning</li>
            <li>Multi-site groups that want one sleeve and carrier range across every county</li>
            <li>Ashbourne and Meath buyers who collect sleeves with cups and lids on one pickup</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Coffee cup sleeve sizes Ireland — 8/9oz and 12/16/20oz
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Match the sleeve to the cup you already pour into. Greenspirit sleeves cover the two
            bands Irish counters use most:
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
            <li>
              <Link href={SLEEVE_89_HREF} className="text-blue-600 hover:underline">
                8/9oz Greenspirit coffee cup sleeve (10×100)
              </Link>{' '}
              — code <strong>100083</strong>, from <strong>€32.47</strong> ex VAT per case at 1–3
              cases
            </li>
            <li>
              <Link href={SLEEVE_1216_HREF} className="text-blue-600 hover:underline">
                12/16/20oz Greenspirit coffee cup sleeve (10×100)
              </Link>{' '}
              — code <strong>100084</strong>, from <strong>€35.41</strong> ex VAT
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-8">
            Most Irish cafés run both: 8/9oz for flat whites and teas, 12/16/20oz for lattes and
            large Americanos. Both sleeve SKUs pack at <strong>10 × 100</strong> per case, so one
            case covers a busy week of hand protection without overflowing the dry store.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Pulp cup carriers Ireland — 2-cup vs 4-cup trays
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Carrier trays stop walk-out spills when customers leave with more than one drink.
            Greenspirit pulp trays sit under Hot Cup Extras beside the sleeves:
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
            <li>
              <Link href={CARRIER_2_HREF} className="text-blue-600 hover:underline">
                2 Cup Greenspirit Carrier Pulp Tray (6×80 / 480)
              </Link>{' '}
              — code <strong>100315</strong>, from <strong>€32.65</strong> ex VAT
            </li>
            <li>
              <Link href={CARRIER_4_HREF} className="text-blue-600 hover:underline">
                4 Cup Greenspirit Carrier Pulp Tray (4×55 / 220)
              </Link>{' '}
              — code <strong>100316</strong>, from <strong>€25.21</strong> ex VAT
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-8">
            Stock 2-cup trays for pairs and couple walk-outs; keep 4-cup trays for office runs and
            meeting orders. The 2-cup case packs denser (480 trays) because pair orders usually
            outnumber fours on a typical Irish café morning.
          </p>

          <div className="overflow-x-auto mb-8 not-prose">
            <table className="min-w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
              <thead className="bg-slate-50 text-left">
                <tr>
                  <th className="px-4 py-3 font-semibold text-slate-900">SKU</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">Case pack</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">From (1–3 cases, ex VAT)</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">Typical use</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {sizeRows.map((row) => (
                  <tr key={row.size}>
                    <td className="px-4 py-3 text-slate-900 font-medium">{row.size}</td>
                    <td className="px-4 py-3 text-slate-700">{row.pack}</td>
                    <td className="px-4 py-3 text-slate-700">{row.fromPrice}</td>
                    <td className="px-4 py-3 text-slate-700">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 mb-8 not-prose">
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={SLEEVE_1216_IMAGE}
                alt="12/16/20oz coffee cup sleeve Ireland Ashbourne — Greenspirit wholesale for Dublin cafés"
                fill
                className="object-contain p-3"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={CUP_IMAGE}
                alt="12oz Greenspirit hot cups Ireland — plain double-wall cups wholesale for Cork cafés"
                fill
                className="object-contain p-3"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Sleeves vs double-wall cups — how to choose
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Hot Cup Extras sit beside{' '}
            <Link href={HOT_CUPS_HUB} className="text-blue-600 hover:underline">
              Hot Cups &amp; Lids
            </Link>
            . Pick the insulation strategy for your pour speed and cupboard space:
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
            <li>
              <strong>Greenspirit sleeves</strong> — add hand protection to the cups you already
              stock; ideal when you want a separate sleeve SKU for small vs large rims
            </li>
            <li>
              <strong>Double-wall / aqueous cups</strong> — insulation built in; fewer pieces on the
              pass. Example warehouse lines include{' '}
              <Link href={CUP_8_HREF} className="text-blue-600 hover:underline">
                8oz Greenspirit aqueous DW
              </Link>{' '}
              and{' '}
              <Link href={CUP_12_HREF} className="text-blue-600 hover:underline">
                12oz Greenspirit aqueous DW
              </Link>
            </li>
            <li>
              <strong>Carrier trays</strong> — not a substitute for sleeves; they keep multi-drink
              orders upright on the walk out
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-8">
            Many Irish operators run double-wall cups for sit-in speed and keep sleeves for the
            takeaway rush, or sleeve a single-wall aqueous line when brand cups are already printed.
            For the wider plain vs printed cup decision, see our{' '}
            <Link href="/blog/coffee-cups-ireland-guide" className="text-blue-600 hover:underline">
              coffee cups Ireland plain vs printed guide
            </Link>{' '}
            and the{' '}
            <Link
              href="/blog/custom-printed-coffee-cups-ireland-sizes-moq-buying-guide"
              className="text-blue-600 hover:underline"
            >
              custom printed coffee cups Ireland sizes guide
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Plain wholesale stock — no custom-print MOQ
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Every Hot Cup Extras line in this guide is <strong>plain wholesale warehouse stock</strong>{' '}
            — ordered by the case, with no artwork proof and no custom-print minimum. That keeps
            restocking fast for Ashbourne collection or nationwide dispatch when a bank-holiday
            morning empties the sleeve shelf.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            These are not printed logo sleeves. Most Irish cafés pair plain Greenspirit sleeves and
            pulp trays with branded cups, stickers or napkins for the brand touch, and keep extras as
            the warehouse SKU that never waits on a proof. Browse cups separately on{' '}
            <Link href={PLAIN_HOT_CUPS} className="text-blue-600 hover:underline">
              plain hot cups Ireland
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Case packs, volume tiers and how pricing works
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Both sleeve sizes pack at <strong>10 × 100</strong> per case. The 2-cup carrier packs at{' '}
            <strong>6 × 80 (480 trays)</strong>; the 4-cup packs at <strong>4 × 55 (220 trays)</strong>.
            All use <strong>four-tier volume pricing</strong> (1–3, 4–6, 7–9 and 10+ cases). There is
            no custom-print MOQ because these are warehouse stock.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            A single-site Dublin café often starts on 1–3 cases of 8/9oz sleeves plus a case of 2-cup
            trays. Office-facing counters lean on 4-cup trays for morning meeting runs. Multi-site
            groups consolidate sleeves and carriers with cups, lids and napkins into higher tiers on
            one Ashbourne order. Prices above are the published 1–3 case list rates ex VAT from the
            catalogue — always confirm the live tier table on{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              Hot Cup Extras
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Delivery across Ireland from Ashbourne
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            PrintNPack is based in Ashbourne, Co. Meath — convenient for Dublin and Meath collections,
            with nationwide dispatch for Cork, Galway, Limerick and every other county. Hot Cup Extras
            orders move as warehouse stock, not made-to-print jobs. Local buyers who can collect often
            combine sleeves and carriers with{' '}
            <Link href={HOT_CUPS_HUB} className="text-blue-600 hover:underline">
              hot cups and lids
            </Link>{' '}
            on one Ashbourne pickup.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Bank holidays, match days and conference peaks are where sleeve and tray stockouts show —
            improvising with the wrong sleeve size slows the pass and looks inconsistent on
            takeaway. Plan case counts around your busiest coffee mornings, not a quiet midweek
            average.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            UK or Europe shipping is only confirmed case-by-case on request; this guide focuses on
            Irish wholesale delivery, which is the core service for Hot Cup Extras.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How to order coffee cup sleeves and carriers in Ireland
          </h2>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-8">
            <li>Match sleeve size to the cups you pour — 8/9oz or 12/16/20oz</li>
            <li>Add 2-cup trays for pairs and 4-cup trays for office and meeting orders</li>
            <li>Decide sleeves vs double-wall cups for insulation — many cafés stock both</li>
            <li>Open Hot Cup Extras and pick the plain SKUs you need</li>
            <li>Match case packs — 10×100 on sleeves, 6×80 on 2-cup, 4×55 on 4-cup</li>
            <li>Add cups, lids or napkins if one delivery can cover them</li>
            <li>Watch the four-tier volume pricing on each product page</li>
            <li>Take nationwide delivery or collect from Ashbourne, Co. Meath</li>
          </ol>

          <div className="bg-slate-900 rounded-xl p-6 mb-8 text-white not-prose">
            <p className="font-semibold mb-1">Ready to restock coffee cup sleeves and carriers?</p>
            <p className="text-slate-400 text-sm mb-4">
              Plain Greenspirit sleeves and pulp trays by the case — tiered wholesale pricing,
              delivered across Ireland from Ashbourne.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={HUB_HREF}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Shop Hot Cup Extras →
              </Link>
              <Link
                href={CARRIER_2_HREF}
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                View 2-Cup Carrier Tray
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
                q: 'Where can I buy coffee cup sleeves wholesale in Ireland?',
                a: 'PrintNPack stocks plain Greenspirit coffee cup sleeves and pulp carrier trays under Hot Cup Extras — 8/9oz and 12/16/20oz sleeves plus 2-cup and 4-cup carriers — with tiered wholesale pricing from Ashbourne to Dublin, Cork, Galway and nationwide.',
              },
              {
                q: 'What coffee cup sleeve sizes are available?',
                a: 'Greenspirit sleeves come in 8/9oz (10×100, code 100083) and 12/16/20oz (10×100, code 100084). Match the sleeve band to the cup rim on your hot-drink pass.',
              },
              {
                q: 'Should I buy cup sleeves or double-wall hot cups?',
                a: 'Use sleeves when you already run cups that need hand protection. Use double-wall or aqueous DW cups when you want insulation built in and fewer separate SKUs. Many Irish cafés stock both.',
              },
              {
                q: 'How does Hot Cup Extras pricing work?',
                a: 'Four-tier volume pricing applies by case count. Example 1–3 case list prices ex VAT: 8/9oz sleeves from €32.47 per 10×100, 12/16/20oz sleeves from €35.41, 2-cup carriers from €32.65 per 6×80, 4-cup carriers from €25.21 per 4×55. Check the live product page for current tiers.',
              },
              {
                q: 'Do you deliver coffee cup sleeves and carriers to Dublin, Cork and Galway?',
                a: 'Yes. We deliver Hot Cup Extras lines to Dublin, Cork, Galway and all Irish counties, with collection available from Ashbourne, Co. Meath.',
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
              href: '/blog/coffee-cups-ireland-guide',
              src: CUP_IMAGE,
              title: 'Coffee Cups Ireland: Plain vs Custom Printed Guide',
            },
            {
              href: '/blog/custom-printed-coffee-cups-ireland-sizes-moq-buying-guide',
              src: '/images/products/custom-printed-coffee-cups/branded-coffee-cups-dublin-ireland-matte-black-gold.jpg',
              title: 'Custom Printed Coffee Cups Ireland: Sizes & MOQ Guide',
            },
            {
              href: '/blog/paper-straws-ireland-sizes-wrapped-buying-guide',
              src: '/images/plain-packaging/140044.webp',
              title: 'Paper Straws Ireland: Sizes & Wrapped Buying Guide',
            },
            {
              href: '/blog/greenspirit-eco-packaging-ireland',
              src: '/images/plain-packaging/100103.webp',
              title: 'Greenspirit Eco Packaging Ireland Overview',
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
