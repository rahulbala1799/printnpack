import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/compostable-greaseproof-sheets-ireland-sizes-buying-guide`;
const HUB_HREF = '/plain-packaging?category=Food+Wrap';
const CUSTOM_HUB = '/greaseproof-sheets-ireland';
const GS_300_HREF =
  '/plain-packaging/300x450mm-greenspirit-compostable-greaseproof-sheets-960-1081421';
const PLAIN_300_HREF =
  '/plain-packaging/300-x-450mm-plain-compostable-greaseproof-sheets-960-1081423';
const PLAIN_350_HREF =
  '/plain-packaging/350x450mm-plain-compostable-greaseproof-sheets-960-1081425';
const FOOD_TO_GO_HREF =
  '/plain-packaging/350-x-450mm-food-to-go-greaseproof-sheet-960-1081426';
const GS_350_HREF =
  '/plain-packaging/350x450mm-greenspirit-compostable-greaseproof-sheets-960-1081427';
const BURGER_WRAP_HREF =
  '/plain-packaging/red-compostable-burger-wrap-25x33cm-1000-120525';

const HERO_IMAGE = '/images/plain-packaging/1081426.webp';
const GS_300_IMAGE = '/images/plain-packaging/1081421.webp';
const GS_350_IMAGE = '/images/plain-packaging/1081427.webp';
const CUSTOM_IMAGE =
  '/images/products/greaseproof-sheets/greaseproof-sheets-ireland-branded-burger-wrap.jpg';
const BURGER_WRAP_IMAGE = '/images/plain-packaging/120525.webp';
const TRAY_IMAGE = '/images/plain-packaging/120266.webp';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Compostable Greaseproof Sheets Ireland: 300×450 & 350×450 Sizes Wholesale Buying Guide',
  description:
    'A practical buying guide to plain compostable greaseproof sheets in Ireland — 300×450mm and 350×450mm sizes, Greenspirit vs plain vs Food to go lines, 960 per case, vs custom printed sheets, with nationwide delivery from Ashbourne.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-11-25',
  dateModified: '2026-11-25',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I buy compostable greaseproof sheets wholesale in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack stocks plain compostable greaseproof sheets under Food Wrap — 300×450mm and 350×450mm Greenspirit, plain and Food to go lines at 960 per case — with four-tier volume pricing. Delivery from Ashbourne, Co. Meath to Dublin, Cork, Galway and nationwide.',
      },
    },
    {
      '@type': 'Question',
      name: 'What compostable greaseproof sheet sizes are available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Warehouse lines cover 300×450mm (Greenspirit 1081421 and plain 1081423) and 350×450mm (plain 1081425, Food to go 1081426 and Greenspirit 1081427). All pack at 960 sheets per case. Match 300×450mm to trays and smaller wraps; choose 350×450mm for larger burgers, chip portions and plate liners.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are plain compostable greaseproof sheets the same as custom printed greaseproof?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Plain compostable greaseproof sheets are unprinted warehouse stock sold by the case with no artwork proof. Custom printed greaseproof sheets on greaseproof-sheets-ireland use white 45 gsm paper with food-safe logo print from a 500-piece MOQ. Many Irish takeaways run plain sheets for daily volume and printed sheets for brand-forward wraps.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Food Wrap greaseproof pricing work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every greaseproof sheet SKU in this guide uses four-tier volume pricing by case count (1–3, 4–6, 7–9 and 10+ cases). Example 1–3 case list prices ex VAT include plain 300×450mm from €25.74, plain 350×450mm from €27.43, Greenspirit 300×450mm from €30.40, Greenspirit 350×450mm from €32.89 and Food to go 350×450mm from €32.99 — all per 960-sheet case. Always check the live tier table on each product page.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you deliver compostable greaseproof sheets to Dublin, Cork and Galway?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. PrintNPack delivers Food Wrap greaseproof lines to Dublin, Cork, Galway and every Irish county from Ashbourne. Local buyers can also collect from Co. Meath.',
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
      name: 'Compostable Greaseproof Sheets Ireland Buying Guide',
      item: PAGE_URL,
    },
  ],
};

const sizeRows = [
  {
    size: '300×450mm Greenspirit',
    pack: '960',
    fromPrice: '€30.40',
    use: 'Eco-labelled lining for trays, baskets and mid-size wraps',
  },
  {
    size: '300×450mm plain compostable',
    pack: '960',
    fromPrice: '€25.74',
    use: 'Everyday volume wraps when brand print is not required',
  },
  {
    size: '350×450mm plain compostable',
    pack: '960',
    fromPrice: '€27.43',
    use: 'Larger burgers, chip portions and plate liners',
  },
  {
    size: '350×450mm Food to go',
    pack: '960',
    fromPrice: '€32.99',
    use: 'Printed “Food to go” stock sheet for takeaway counters',
  },
  {
    size: '350×450mm Greenspirit',
    pack: '960',
    fromPrice: '€32.89',
    use: 'Larger Greenspirit compostable wraps for busy chippers',
  },
];

export default function CompostableGreaseproofSheetsIrelandSizesBuyingGuide() {
  const title =
    'Compostable Greaseproof Sheets Ireland: 300×450 & 350×450 Sizes Wholesale Buying Guide';
  const description =
    'Buy compostable greaseproof sheets in Ireland with confidence — plain 300×450mm and 350×450mm Food Wrap lines, Greenspirit vs Food to go, 960 per case vs custom printed sheets, with delivery to Dublin, Cork, Galway and nationwide from Ashbourne.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="compostable greaseproof sheets ireland, greaseproof paper wholesale ireland, 300x450 greaseproof dublin, 350x450 greaseproof cork, greenspirit greaseproof sheets, food to go greaseproof ashbourne, plain greaseproof paper galway, compostable food wrap ireland, greaseproof tray liner wholesale, food wrap greaseproof ireland"
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
          content="Compostable greaseproof sheets Ireland — 350×450mm Food to go wholesale for Dublin takeaways"
        />
        <meta property="article:published_time" content="2026-11-25" />

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
          <span className="text-slate-900">Compostable Greaseproof Sheets Ireland</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            Wholesale Guide
          </span>
          <span className="text-slate-400 text-sm">25 Nov 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Compostable Greaseproof Sheets Ireland: 300×450 &amp; 350×450 Sizes Wholesale Buying
          Guide
        </h1>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="relative rounded-2xl overflow-hidden h-48 col-span-2 bg-slate-50">
            <Image
              src={HERO_IMAGE}
              alt="Compostable greaseproof sheets Ireland — 350×450mm Food to go wholesale for Dublin takeaways"
              fill
              className="object-contain p-4"
              priority
              sizes="(max-width: 768px) 66vw, 512px"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={GS_300_IMAGE}
                alt="Greenspirit greaseproof sheets Ireland — 300×450mm compostable wholesale for Cork chippers"
                fill
                className="object-contain p-2"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={GS_350_IMAGE}
                alt="350×450mm Greenspirit greaseproof Ireland — compostable sheets wholesale for Galway takeaways"
                fill
                className="object-contain p-2"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Irish takeaways, chippers and cafés go through greaseproof paper every service — lining
            trays, wrapping burgers and keeping grease off baskets. PrintNPack stocks plain
            compostable greaseproof sheets under{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              Food Wrap
            </Link>{' '}
            in the two sizes Irish kitchens order most — <strong>300×450mm</strong> and{' '}
            <strong>350×450mm</strong> — with Greenspirit, plain and Food to go lines, tiered case
            pricing and delivery from Ashbourne across Ireland.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            This guide covers which sheet size fits which serve, how Greenspirit compares with plain
            and Food to go stock, when to choose plain wholesale vs{' '}
            <Link href={CUSTOM_HUB} className="text-blue-600 hover:underline">
              custom printed greaseproof
            </Link>
            , and how Dublin, Cork and Galway buyers restock without inventing prices mid-rush.
            Facts and list rates come from the live plain-packaging catalogue — always confirm the
            tier table on each product page.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Who buys compostable greaseproof sheets in Ireland?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Food Wrap greaseproof is warehouse stock for sites that need grease-resistant lining and
            wrapping without waiting on a print proof:
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-8">
            <li>Dublin chippers and burger counters lining kraft trays all day</li>
            <li>Cork and Galway takeaways wrapping hot sandwiches and chip portions</li>
            <li>Hotel and café kitchens that need plate and basket liners for rush service</li>
            <li>Multi-site groups that want one sheet size ladder across every county</li>
            <li>Ashbourne and Meath buyers who collect greaseproof with trays and bags on one pickup</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Greaseproof sheet sizes Ireland — 300×450mm vs 350×450mm
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Match the sheet to the tray or wrap you already run. Both sizes pack at{' '}
            <strong>960 sheets per case</strong>:
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
            <li>
              <strong>300×450mm</strong> — mid-size wraps and tray liners. Choose{' '}
              <Link href={GS_300_HREF} className="text-blue-600 hover:underline">
                Greenspirit compostable (1081421)
              </Link>{' '}
              from <strong>€30.40</strong> ex VAT or{' '}
              <Link href={PLAIN_300_HREF} className="text-blue-600 hover:underline">
                plain compostable (1081423)
              </Link>{' '}
              from <strong>€25.74</strong> ex VAT at 1–3 cases
            </li>
            <li>
              <strong>350×450mm</strong> — larger burgers, chip portions and plate liners. Choose{' '}
              <Link href={PLAIN_350_HREF} className="text-blue-600 hover:underline">
                plain compostable (1081425)
              </Link>{' '}
              from <strong>€27.43</strong>,{' '}
              <Link href={GS_350_HREF} className="text-blue-600 hover:underline">
                Greenspirit compostable (1081427)
              </Link>{' '}
              from <strong>€32.89</strong>, or{' '}
              <Link href={FOOD_TO_GO_HREF} className="text-blue-600 hover:underline">
                Food to go (1081426)
              </Link>{' '}
              from <strong>€32.99</strong> ex VAT
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-8">
            Most Irish chippers run both: 300×450mm for standard tray liners and 350×450mm for
            larger portions and wrap-and-go orders. Keeping one case of each size on the shelf stops
            staff stretching a short sheet over a wide tray during Friday night rush.
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

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Greenspirit vs plain vs Food to go — how to choose
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            All five lines sit in Food Wrap as plain wholesale case stock. The difference is the
            label and presentation, not a custom print MOQ:
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
            <li>
              <strong>Plain compostable</strong> — lowest 1–3 case list rates on both sizes; ideal
              when the sheet stays under food or inside a tray
            </li>
            <li>
              <strong>Greenspirit compostable</strong> — eco-labelled Greenspirit stock for operators
              who want the range consistent with cups, trays and cutlery already on the pass
            </li>
            <li>
              <strong>Food to go 350×450mm</strong> — stock sheet with a ready “Food to go” design
              for takeaway counters that want a printed look without a custom artwork job
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-8">
            Pair sheets with kraft food trays and burger wraps from the same Ashbourne dispatch —
            see our{' '}
            <Link
              href="/blog/kraft-food-trays-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              kraft food trays Ireland sizes guide
            </Link>{' '}
            and{' '}
            <Link
              href="/blog/compostable-burger-wraps-ireland-colours-buying-guide"
              className="text-blue-600 hover:underline"
            >
              compostable burger wraps Ireland colours guide
            </Link>{' '}
            when colour-coded 25×33cm wraps suit the burger line better than a large greaseproof
            sheet.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-8 not-prose">
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={CUSTOM_IMAGE}
                alt="Custom printed greaseproof sheets Ireland — branded burger wrap for Dublin takeaways"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={BURGER_WRAP_IMAGE}
                alt="Compostable burger wraps Ireland — red 25×33cm Food Wrap wholesale for Cork counters"
                fill
                className="object-contain p-3"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Plain wholesale vs custom printed greaseproof
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Plain Food Wrap sheets are <strong>unprinted warehouse stock</strong> — ordered by the
            case, with no artwork proof and no custom-print minimum. That keeps restocking fast when
            a bank-holiday Friday empties the liner shelf.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Custom branding lives on{' '}
            <Link href={CUSTOM_HUB} className="text-blue-600 hover:underline">
              custom printed greaseproof sheets Ireland
            </Link>{' '}
            — white 45 gsm paper with food-safe inks, sizes including 30×45 cm and 35×45 cm (the same
            millimetre footprints as these wholesale sheets), from a <strong>500-piece MOQ</strong>.
            Many Irish takeaways run plain compostable sheets for daily volume and printed sheets for
            brand-forward wraps and tray liners. For a deep dive on logo print options, see our{' '}
            <Link
              href="/blog/custom-greaseproof-sheets-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              custom greaseproof sheets Ireland sizes guide
            </Link>
            .
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Lined kraft greaseproof food bags are a different format again — ready-made bags rather
            than flat sheets. If you need bags for chips or hot snacks, use the{' '}
            <Link
              href="/blog/greaseproof-food-bags-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              greaseproof food bags Ireland sizes guide
            </Link>{' '}
            alongside this sheet guide.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            What to stock beside greaseproof sheets
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Greaseproof sheets rarely travel alone on an Irish pass. The same dispatch that brings
            Food Wrap liners usually covers the tray and bag formats that sit under or around them:
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
            <li>
              <strong>Kraft food trays</strong> — Greenspirit ½lb–3lb trays for chips and hot snacks;
              line with 300×450mm for standard baskets and 350×450mm when the portion spills the rim
            </li>
            <li>
              <strong>Compostable burger wraps</strong> — colour-coded 25×33cm sheets for burger and
              hot-sandwich wraps when a full 300×450 or 350×450 sheet is more paper than you need
            </li>
            <li>
              <strong>Greaseproof food bags</strong> — ready bag formats for chip and snack bagging
              when a flat sheet would need folding on the pass
            </li>
            <li>
              <strong>Fish &amp; chip boxes</strong> — corrugated boxes for sit-down chipper serves;
              greaseproof still lines baskets and wraps sides that leave in bags
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-8">
            For eco-range context across cups, trays and greaseproof, the{' '}
            <Link
              href="/blog/greenspirit-eco-packaging-ireland"
              className="text-blue-600 hover:underline"
            >
              Greenspirit eco packaging Ireland overview
            </Link>{' '}
            sits beside this sizes guide. Keep this article for the sheet size ladder; use the
            overview when you are choosing a wider Greenspirit counter kit.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Case packs, volume tiers and how pricing works
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Every greaseproof sheet SKU in this guide packs at <strong>960 sheets per case</strong>{' '}
            and uses <strong>four-tier volume pricing</strong> (1–3, 4–6, 7–9 and 10+ cases). There is
            no custom-print MOQ because these are warehouse stock.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            A single-site Dublin chipper often starts on 1–3 cases of plain 300×450mm plus a case of
            350×450mm for larger portions. Cork and Galway counters with heavier burger wrap volume
            may lean on Food to go or Greenspirit 350×450mm so the sheet looks intentional when it
            leaves the bag. Multi-site groups consolidate greaseproof with trays, burger wraps and
            SOS bags into higher tiers on one Ashbourne order.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Prices above are the published 1–3 case list rates ex VAT from the catalogue — always
            confirm the live tier table on{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              Food Wrap
            </Link>
            . Do not invent mid-tier rates from memory; the product page is the source of truth when
            you move into 4–6, 7–9 or 10+ case brackets.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Delivery across Ireland from Ashbourne
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            PrintNPack is based in Ashbourne, Co. Meath — convenient for Dublin and Meath
            collections, with nationwide dispatch for Cork, Galway, Limerick and every other county.
            Food Wrap greaseproof moves as warehouse stock, not made-to-print jobs. Local buyers who
            can collect often combine sheets with{' '}
            <Link href="/plain-packaging?category=Food+Trays" className="text-blue-600 hover:underline">
              kraft food trays
            </Link>{' '}
            or{' '}
            <Link href={BURGER_WRAP_HREF} className="text-blue-600 hover:underline">
              compostable burger wraps
            </Link>{' '}
            on one Ashbourne pickup.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Match days, festival weekends and bank-holiday Fridays are where greaseproof stockouts
            show — improvising with baking parchment or the wrong sheet size slows the pass and looks
            inconsistent on the counter. Plan case counts around your busiest fryer nights, not a
            quiet midweek average.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            UK or Europe shipping is only confirmed case-by-case on request; this guide focuses on
            Irish wholesale delivery, which is the core service for Food Wrap greaseproof.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How to order compostable greaseproof sheets in Ireland
          </h2>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-8">
            <li>Match sheet size to the tray or wrap — 300×450mm or 350×450mm</li>
            <li>Choose plain, Greenspirit or Food to go for the look you need on the counter</li>
            <li>Decide plain wholesale vs custom printed for brand-facing wraps</li>
            <li>Open Food Wrap and pick the plain SKUs you need</li>
            <li>Match case packs — every line in this guide is 960 sheets</li>
            <li>Add trays, burger wraps or greaseproof bags if one delivery can cover them</li>
            <li>Watch the four-tier volume pricing on each product page</li>
            <li>Take nationwide delivery or collect from Ashbourne, Co. Meath</li>
          </ol>

          <div className="bg-slate-900 rounded-xl p-6 mb-8 text-white not-prose">
            <p className="font-semibold mb-1">Ready to restock compostable greaseproof sheets?</p>
            <p className="text-slate-400 text-sm mb-4">
              Plain 300×450mm and 350×450mm Food Wrap lines by the case — tiered wholesale pricing,
              delivered across Ireland from Ashbourne.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={HUB_HREF}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Shop Food Wrap →
              </Link>
              <Link
                href={FOOD_TO_GO_HREF}
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                View 350×450 Food to Go
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
                q: 'Where can I buy compostable greaseproof sheets wholesale in Ireland?',
                a: 'PrintNPack stocks plain compostable greaseproof sheets under Food Wrap — 300×450mm and 350×450mm Greenspirit, plain and Food to go lines at 960 per case — with tiered wholesale pricing from Ashbourne to Dublin, Cork, Galway and nationwide.',
              },
              {
                q: 'What compostable greaseproof sheet sizes are available?',
                a: 'Warehouse lines cover 300×450mm (Greenspirit 1081421 and plain 1081423) and 350×450mm (plain 1081425, Food to go 1081426 and Greenspirit 1081427). All pack at 960 sheets per case.',
              },
              {
                q: 'Are plain compostable greaseproof sheets the same as custom printed greaseproof?',
                a: 'No. Plain sheets are unprinted warehouse stock sold by the case. Custom printed greaseproof uses white 45 gsm paper with food-safe logo print from a 500-piece MOQ. Many Irish takeaways stock both.',
              },
              {
                q: 'How does Food Wrap greaseproof pricing work?',
                a: 'Four-tier volume pricing applies by case count. Example 1–3 case list prices ex VAT: plain 300×450mm from €25.74, plain 350×450mm from €27.43, Greenspirit 300×450mm from €30.40, Greenspirit 350×450mm from €32.89, Food to go 350×450mm from €32.99 — all per 960-sheet case. Check the live product page for current tiers.',
              },
              {
                q: 'Do you deliver compostable greaseproof sheets to Dublin, Cork and Galway?',
                a: 'Yes. We deliver Food Wrap greaseproof lines to Dublin, Cork, Galway and all Irish counties, with collection available from Ashbourne, Co. Meath.',
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
              href: '/blog/custom-greaseproof-sheets-ireland-sizes-buying-guide',
              src: CUSTOM_IMAGE,
              title: 'Custom Greaseproof Sheets Ireland: Sizes & MOQ Buying Guide',
            },
            {
              href: '/blog/compostable-burger-wraps-ireland-colours-buying-guide',
              src: BURGER_WRAP_IMAGE,
              title: 'Compostable Burger Wraps Ireland: Colours Buying Guide',
            },
            {
              href: '/blog/greaseproof-food-bags-ireland-sizes-buying-guide',
              src: '/images/plain-packaging/120592.webp',
              title: 'Greaseproof Food Bags Ireland: Sizes Buying Guide',
            },
            {
              href: '/blog/kraft-food-trays-ireland-sizes-buying-guide',
              src: TRAY_IMAGE,
              title: 'Kraft Food Trays Ireland: Sizes Wholesale Buying Guide',
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
