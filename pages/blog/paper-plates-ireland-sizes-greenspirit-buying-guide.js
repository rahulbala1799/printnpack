import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/paper-plates-ireland-sizes-greenspirit-buying-guide`;
const HUB_HREF = '/plain-packaging?category=Plates+%26+Bowls';
const PAPER_6_HREF = '/plain-packaging/6-white-greenspirit-paper-plates-20x100-110025';
const PAPER_7_GS_HREF = '/plain-packaging/7-white-greenspirit-paper-plates-10x100-110026';
const PAPER_9_GS_HREF = '/plain-packaging/9-white-greenspirit-paper-plates-10x100-110027';
const PAPER_7_HREF = '/plain-packaging/7-white-paper-plate-10x100-11002';
const PAPER_9_HREF = '/plain-packaging/9-white-paper-plate-10x100-11003';
const FOIL_9_HREF = '/plain-packaging/9-foil-plate-1000s-10945';
const BAGASSE_7_HREF = '/plain-packaging/7-bagasse-round-plate-20x50s-109755';
const BAGASSE_9_HREF = '/plain-packaging/9-bagasse-round-plate-10x50s-109756';

const HERO_IMAGE = '/images/plain-packaging/110026.webp';
const SIX_IMAGE = '/images/plain-packaging/110025.webp';
const SEVEN_WHITE_IMAGE = '/images/plain-packaging/11002.webp';
const FOIL_IMAGE = '/images/plain-packaging/10945.webp';
const BAGASSE_IMAGE = '/images/plain-packaging/109755.webp';
const BOWL_IMAGE = '/images/plain-packaging/120592.webp';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Paper Plates Ireland: 6″, 7″ & 9″ Greenspirit Sizes Wholesale Buying Guide',
  description:
    'A practical buying guide to plain white paper plates in Ireland — Greenspirit 6″, 7″ and 9″ sizes, standard white 7″ and 9″ lines, case packs vs bagasse and foil plates, with nationwide delivery from Ashbourne.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-11-21',
  dateModified: '2026-11-21',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I buy paper plates wholesale in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack stocks plain white paper plates under Plates & Bowls — including Greenspirit 6″, 7″ and 9″ lines plus standard white 7″ and 9″ plates — with four-tier volume pricing. Delivery from Ashbourne, Co. Meath to Dublin, Cork, Galway and nationwide.',
      },
    },
    {
      '@type': 'Question',
      name: 'What paper plate sizes are available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Greenspirit white paper plates come in 6″ (20×100 per case), 7″ (10×100) and 9″ (10×100). Standard white paper plates are stocked in 7″ and 9″ (both 10×100). Match diameter to the portion — sides and desserts on 6″/7″, mains and event catering on 9″.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I buy paper plates or bagasse plates?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Choose plain white paper plates for light café, canteen and event serves where a thin disposable plate is enough. Choose bagasse round or oval plates when the food is heavier, wetter or needs a stiffer rim — many Irish kitchens stock both under Plates & Bowls.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does paper plate pricing work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every paper plate SKU uses four-tier volume pricing by case count (1–3, 4–6, 7–9 and 10+ cases). Example 1–3 case list prices ex VAT include 6″ Greenspirit from €48.02 per 20×100, 7″ Greenspirit from €37.83 per 10×100 and 9″ Greenspirit from €41.28 per 10×100. Always check the live tier table on each product page.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you deliver paper plates to Dublin, Cork and Galway?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. PrintNPack delivers Plates & Bowls lines to Dublin, Cork, Galway and every Irish county from Ashbourne. Local buyers can also collect from Co. Meath.',
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
      name: 'Paper Plates Ireland Buying Guide',
      item: PAGE_URL,
    },
  ],
};

const sizeRows = [
  {
    size: '6″ Greenspirit',
    pack: '20 × 100',
    fromPrice: '€48.02',
    use: 'Sides, desserts, kids portions, canapé-style café plates',
  },
  {
    size: '7″ Greenspirit',
    pack: '10 × 100',
    fromPrice: '€37.83',
    use: 'Lunch plates, sandwiches, light hot meals',
  },
  {
    size: '9″ Greenspirit',
    pack: '10 × 100',
    fromPrice: '€41.28',
    use: 'Main courses, event catering, buffet stations',
  },
  {
    size: '7″ white paper',
    pack: '10 × 100',
    fromPrice: '€36.62',
    use: 'Everyday canteen and café counter service',
  },
  {
    size: '9″ white paper',
    pack: '10 × 100',
    fromPrice: '€41.28',
    use: 'Larger plated serves when you want standard white stock',
  },
];

export default function PaperPlatesIrelandSizesGreenspiritBuyingGuide() {
  const title =
    'Paper Plates Ireland: 6″, 7″ & 9″ Greenspirit Sizes Wholesale Buying Guide';
  const description =
    'Buy paper plates in Ireland with confidence — plain Greenspirit 6″, 7″ and 9″ white plates, standard 7″ and 9″ lines, case packs vs bagasse and foil, with delivery to Dublin, Cork, Galway and nationwide from Ashbourne.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="paper plates ireland, greenspirit paper plates wholesale ireland, 9 inch paper plates dublin, 7 inch paper plates cork, white paper plates galway, disposable plates ashbourne, 6 inch paper plates ireland, plain paper plates wholesale, compostable paper plates ireland, plates and bowls wholesale ireland"
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
          content="Paper plates Ireland — 7 inch white Greenspirit plates wholesale for Dublin cafés"
        />
        <meta property="article:published_time" content="2026-11-21" />

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
          <span className="text-slate-900">Paper Plates Ireland</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            Wholesale Guide
          </span>
          <span className="text-slate-400 text-sm">21 Nov 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Paper Plates Ireland: 6″, 7″ &amp; 9″ Greenspirit Sizes Wholesale Buying Guide
        </h1>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="relative rounded-2xl overflow-hidden h-48 col-span-2 bg-slate-50">
            <Image
              src={HERO_IMAGE}
              alt="Paper plates Ireland — 7 inch white Greenspirit plates wholesale for Dublin cafés"
              fill
              className="object-contain p-4"
              priority
              sizes="(max-width: 768px) 66vw, 512px"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={SIX_IMAGE}
                alt="6 inch paper plates Ireland — Greenspirit white plates wholesale for Cork cafés"
                fill
                className="object-contain p-2"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={SEVEN_WHITE_IMAGE}
                alt="7 inch white paper plates Ireland — plain disposable plates wholesale Galway canteens"
                fill
                className="object-contain p-2"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Irish cafés, canteens and event caterers go through white paper plates every service —
            and the wrong diameter shows up fast. A 6″ plate looks sparse under a main; a 9″ plate
            wastes cupboard space on dessert stations. PrintNPack stocks plain white paper plates
            under{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              Plates &amp; Bowls
            </Link>{' '}
            — Greenspirit 6″, 7″ and 9″ lines plus standard white 7″ and 9″ stock — with tiered case
            pricing and delivery from Ashbourne across Ireland.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            This guide covers the size ladder, when Greenspirit paper plates beat bagasse or foil,
            how case packs and MOQ-style volume tiers work, and how Dublin, Cork and Galway buyers
            restock without inventing prices mid-service. Facts and list rates come from the live
            plain-packaging catalogue — always confirm the tier table on each product page.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Who buys plain paper plates in Ireland?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Plain disposable plates are warehouse stock for sites that need clean white tableware
            without a custom-print lead time:
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-8">
            <li>Dublin cafés and canteens plating sandwiches, salads and light hot lunches</li>
            <li>Cork and Galway hotels running breakfast buffets and conference catering</li>
            <li>Event caterers and festival vans that burn through 7″ and 9″ plates every weekend</li>
            <li>School, office and sports-club canteens that want simple white stock by the case</li>
            <li>Ashbourne and Meath buyers who collect Plates &amp; Bowls with napkins and cutlery</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Paper plate sizes Ireland — 6″, 7″ and 9″
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Start with the portion, not the cheapest case. Greenspirit white paper plates cover three
            diameters; standard white lines cover 7″ and 9″ for everyday counter service:
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
            <li>
              <Link href={PAPER_6_HREF} className="text-blue-600 hover:underline">
                6″ White Greenspirit Paper Plates (20×100)
              </Link>{' '}
              — code <strong>110025</strong>, from <strong>€48.02</strong> ex VAT per case at 1–3
              cases
            </li>
            <li>
              <Link href={PAPER_7_GS_HREF} className="text-blue-600 hover:underline">
                7″ White Greenspirit Paper Plates (10×100)
              </Link>{' '}
              — code <strong>110026</strong>, from <strong>€37.83</strong> ex VAT
            </li>
            <li>
              <Link href={PAPER_9_GS_HREF} className="text-blue-600 hover:underline">
                9″ White Greenspirit Paper Plates (10×100)
              </Link>{' '}
              — code <strong>110027</strong>, from <strong>€41.28</strong> ex VAT
            </li>
            <li>
              <Link href={PAPER_7_HREF} className="text-blue-600 hover:underline">
                7″ White Paper plate (10×100)
              </Link>{' '}
              — code <strong>11002</strong>, from <strong>€36.62</strong> ex VAT
            </li>
            <li>
              <Link href={PAPER_9_HREF} className="text-blue-600 hover:underline">
                9″ White Paper plate (10×100)
              </Link>{' '}
              — code <strong>11003</strong>, from <strong>€41.28</strong> ex VAT
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-8">
            Most Irish cafés run a mixed shelf: 6″ or 7″ for sides and desserts, 9″ for mains and
            buffet lines. The 6″ case packs denser (20×100) because dessert and kids stations empty
            smaller plates faster than main-course stacks.
          </p>

          <div className="overflow-x-auto mb-8 not-prose">
            <table className="min-w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
              <thead className="bg-slate-50 text-left">
                <tr>
                  <th className="px-4 py-3 font-semibold text-slate-900">Size</th>
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
                src={SIX_IMAGE}
                alt="Greenspirit 6 inch paper plates Ireland Ashbourne — wholesale for Dublin dessert stations"
                fill
                className="object-contain p-3"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={FOIL_IMAGE}
                alt="9 inch foil plate Ireland — plain foil plates wholesale for Cork catering kitchens"
                fill
                className="object-contain p-3"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Paper plates vs bagasse vs foil — how to choose
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Plates &amp; Bowls is one category with three jobs. Pick the material for the food weight
            and service style:
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
            <li>
              <strong>White paper plates</strong> — light café, canteen and event serves; cheapest
              everyday disposable look; Greenspirit lines sit beside other eco counter stock
            </li>
            <li>
              <strong>Bagasse round plates</strong> — stiffer rim for heavier or wetter plated food;
              see{' '}
              <Link href={BAGASSE_7_HREF} className="text-blue-600 hover:underline">
                7″ bagasse
              </Link>{' '}
              and{' '}
              <Link href={BAGASSE_9_HREF} className="text-blue-600 hover:underline">
                9″ bagasse
              </Link>{' '}
              , or the full{' '}
              <Link
                href="/blog/bagasse-plates-bowls-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                bagasse plates and bowls Ireland sizes guide
              </Link>
            </li>
            <li>
              <strong>Foil plates</strong> — heat-retaining catering trays for hot holds and oven-to-
              table runs;{' '}
              <Link href={FOIL_9_HREF} className="text-blue-600 hover:underline">
                9″ foil plate (1000&apos;s)
              </Link>{' '}
              packs denser for high-volume kitchens
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-8">
            Many Irish operators keep paper plates on the café pass and bagasse on the plated-meal
            line. Foil stays with hot counters and catering kitchens — not as a swap for a thin paper
            dessert plate. For hinged takeaway instead of open plates, move to meal boxes rather than
            forcing a paper plate into a delivery bag.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Plain wholesale stock — no custom-print MOQ
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Every paper plate line in this guide is <strong>plain wholesale warehouse stock</strong>{' '}
            — ordered by the case, with no artwork proof and no custom-print minimum. That keeps
            restocking fast for Ashbourne collection or nationwide dispatch when a bank-holiday
            buffet empties the 9″ stack.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            These are not printed logo plates. Most Irish cafés and caterers pair plain white plates
            with branded napkins, stickers or cups for the brand touch, and keep tableware as the
            warehouse SKU that never waits on a proof. For printed napkin options that sit beside
            plate stations, see our{' '}
            <Link
              href="/blog/premium-linen-feel-napkins-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              premium linen-feel napkins Ireland sizes guide
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Case packs, volume tiers and how pricing works
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Greenspirit 6″ packs at <strong>20 × 100</strong> per case. Greenspirit 7″ and 9″, plus
            standard white 7″ and 9″, pack at <strong>10 × 100</strong>. All use{' '}
            <strong>four-tier volume pricing</strong> (1–3, 4–6, 7–9 and 10+ cases). There is no
            custom-print MOQ because these are warehouse stock.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            A single-site Dublin café often starts on 1–3 cases of 7″ Greenspirit plus a case of 6″
            for desserts. Event caterers lean on 9″ for buffet mains. Multi-site groups consolidate
            paper plates with bagasse bowls, wooden cutlery and napkins into higher tiers on one
            Ashbourne order. Prices above are the published 1–3 case list rates ex VAT from the
            catalogue — always confirm the live tier table on{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              Plates &amp; Bowls
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Delivery across Ireland from Ashbourne
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            PrintNPack is based in Ashbourne, Co. Meath — convenient for Dublin and Meath collections,
            with nationwide dispatch for Cork, Galway, Limerick and every other county. Paper plate
            orders move as warehouse stock, not made-to-print jobs. Local buyers who can collect often
            combine 7″ and 9″ plates with bagasse bowls, cutlery and napkins on one Ashbourne pickup.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Bank holidays, graduation weekends and conference peaks are where plate stockouts show —
            improvising with the wrong diameter slows plating and looks inconsistent on buffet lines.
            Plan case counts around your busiest catering days, not a quiet midweek average.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            UK or Europe shipping is only confirmed case-by-case on request; this guide focuses on
            Irish wholesale delivery, which is the core service for Plates &amp; Bowls.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How to order paper plates in Ireland
          </h2>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-8">
            <li>Match the portion — 6″ for sides/desserts, 7″ for lunch, 9″ for mains and buffets</li>
            <li>Choose Greenspirit white or standard white from the size ladder above</li>
            <li>Switch to bagasse or foil only when the food needs a stiffer or heat-holding plate</li>
            <li>Open Plates &amp; Bowls and pick the plain SKU you need</li>
            <li>Match case packs — 20×100 on 6″ Greenspirit, 10×100 on most 7″ and 9″ lines</li>
            <li>Add napkins, cutlery or bagasse bowls if one delivery can cover them</li>
            <li>Watch the four-tier volume pricing on each product page</li>
            <li>Take nationwide delivery or collect from Ashbourne, Co. Meath</li>
          </ol>

          <div className="bg-slate-900 rounded-xl p-6 mb-8 text-white not-prose">
            <p className="font-semibold mb-1">Ready to restock paper plates?</p>
            <p className="text-slate-400 text-sm mb-4">
              Plain Greenspirit 6″, 7″ and 9″ white paper plates by the case — tiered wholesale
              pricing, delivered across Ireland from Ashbourne.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={HUB_HREF}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Shop Plates &amp; Bowls →
              </Link>
              <Link
                href={PAPER_7_GS_HREF}
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                View 7″ Greenspirit Plates
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
                q: 'Where can I buy paper plates wholesale in Ireland?',
                a: 'PrintNPack stocks plain white paper plates under Plates & Bowls — Greenspirit 6″, 7″ and 9″ plus standard white 7″ and 9″ — with tiered wholesale pricing from Ashbourne to Dublin, Cork, Galway and nationwide.',
              },
              {
                q: 'What paper plate sizes are available?',
                a: 'Greenspirit white paper plates come in 6″ (20×100), 7″ (10×100) and 9″ (10×100). Standard white paper plates are stocked in 7″ and 9″ (both 10×100). Match diameter to sides, lunch or mains.',
              },
              {
                q: 'Should I buy paper plates or bagasse plates?',
                a: 'Use white paper plates for light café, canteen and event serves. Use bagasse when the food is heavier or wetter and needs a stiffer rim. Many Irish kitchens stock both.',
              },
              {
                q: 'How does paper plate pricing work?',
                a: 'Four-tier volume pricing applies by case count. Example 1–3 case list prices ex VAT: 6″ Greenspirit from €48.02 per 20×100, 7″ Greenspirit from €37.83 per 10×100, 9″ Greenspirit from €41.28 per 10×100. Check the live product page for current tiers.',
              },
              {
                q: 'Do you deliver paper plates to Dublin, Cork and Galway?',
                a: 'Yes. We deliver Plates & Bowls lines to Dublin, Cork, Galway and all Irish counties, with collection available from Ashbourne, Co. Meath.',
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
              href: '/blog/bagasse-plates-bowls-ireland-sizes-buying-guide',
              src: BAGASSE_IMAGE,
              title: 'Bagasse Plates & Bowls Ireland: Sizes Buying Guide',
            },
            {
              href: '/blog/wooden-cutlery-ireland-sizes-buying-guide',
              src: '/images/plain-packaging/140046.webp',
              title: 'Wooden Cutlery Ireland: Chip Forks & Sets Guide',
            },
            {
              href: '/blog/premium-linen-feel-napkins-ireland-sizes-buying-guide',
              src: '/images/plain-packaging/103718.webp',
              title: 'Premium Linen-Feel Napkins Ireland Sizes Guide',
            },
            {
              href: '/blog/plain-packaging-wholesale-ireland',
              src: BOWL_IMAGE,
              title: 'Plain Packaging Wholesale Ireland Overview',
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
