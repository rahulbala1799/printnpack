import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/kraft-food-trays-ireland-sizes-buying-guide`;
const HUB_HREF = '/plain-packaging?category=Food+Trays';
const HALF_LB_HREF =
  '/plain-packaging/12-lb-kraft-greenspirit-paper-food-tray-150x100x32mm4x250-120266';
const ONE_LB_HREF =
  '/plain-packaging/1lb-small-kraft-greenspirit-paperfoodtray-175x105x38mm4x250-120267';
const TWO_LB_HREF =
  '/plain-packaging/2lb-kraft-greenspirit-paper-food-tray-170x120x45mm-4x250-120268';
const TWO_FIVE_LB_HREF =
  '/plain-packaging/25lb-med-kraftgreenspirit-paperfoodtray-205x135x48mm-2x250-120269';
const THREE_LB_HREF =
  '/plain-packaging/3lb-large-kraft-greenspirit-paperfoodtray-220x160x54mm2x250-120270';
const WINDOWED_HREF = '/plain-packaging/kraft-windowed-food-tray-lge-mw-360s-10862';
const CORRUGATED_HREF =
  '/plain-packaging/99-compostable-corrugated-tray-160x131x38mm-6x100-120139';

const HERO_IMAGE = '/images/plain-packaging/120266.webp';
const TWO_LB_IMAGE = '/images/plain-packaging/120268.webp';
const THREE_LB_IMAGE = '/images/plain-packaging/120270.webp';
const WINDOWED_IMAGE = '/images/plain-packaging/10862.webp';
const CORRUGATED_IMAGE = '/images/plain-packaging/120139.webp';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Kraft Food Trays Ireland: ½lb–3lb Greenspirit Sizes & Wholesale Buying Guide',
  description:
    'A practical buying guide to plain kraft food trays in Ireland — Greenspirit paper trays from ½lb to 3lb, windowed and compostable corrugated options, case packs, and nationwide delivery from Ashbourne for chippers and street food.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-10-15',
  dateModified: '2026-10-15',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I buy kraft food trays wholesale in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack stocks plain Food Trays by the case — Greenspirit kraft paper trays from ½lb to 3lb, a large kraft windowed tray, and a #99 compostable corrugated tray — with tiered wholesale pricing. Delivery from Ashbourne, Co. Meath to Dublin, Cork, Galway and nationwide.',
      },
    },
    {
      '@type': 'Question',
      name: 'What kraft food tray sizes are available in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Greenspirit kraft paper trays run ½lb (150×100×32 mm), 1lb (175×105×38 mm), 2lb (170×120×45 mm), 2.5lb (205×135×48 mm) and 3lb (220×160×54 mm). Smaller sizes pack 4×250 per case; 2.5lb and 3lb pack 2×250. A large kraft windowed tray (360 per case) and a #99 compostable corrugated tray 160×131×38 mm (6×100) are also listed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are these food trays plain wholesale or custom printed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'These are plain unprinted kraft and corrugated trays sold by the case with no print proof or brand MOQ. Branding can sit on greaseproof sheets, SOS bags or carriers while the tray stays a fast wholesale SKU.',
      },
    },
    {
      '@type': 'Question',
      name: 'What else do Irish chippers order with kraft food trays?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most chippers pair kraft food trays with corrugated fish & chip boxes, greaseproof chip bags or sheets, wooden chip forks, and SOS grab bags for carry-out. All are available as plain wholesale lines from PrintNPack.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you deliver kraft food trays to Dublin, Cork and Galway?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. PrintNPack delivers Food Trays to Dublin, Cork, Galway and every Irish county from Ashbourne. Local buyers can also collect from Co. Meath.',
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
      name: 'Kraft Food Trays Ireland Buying Guide',
      item: PAGE_URL,
    },
  ],
};

const sizeRows = [
  {
    size: '½lb Greenspirit kraft',
    dims: '150 × 100 × 32 mm',
    pack: '4 × 250 per case',
    use: 'Small sides, kids portions, sample street-food serves',
  },
  {
    size: '1lb Greenspirit kraft',
    dims: '175 × 105 × 38 mm',
    pack: '4 × 250 per case',
    use: 'Regular chip sides, deli snacks, lighter takeaway trays',
  },
  {
    size: '2lb Greenspirit kraft',
    dims: '170 × 120 × 45 mm',
    pack: '4 × 250 per case',
    use: 'Standard chipper and street-food portions',
  },
  {
    size: '2.5lb Greenspirit kraft',
    dims: '205 × 135 × 48 mm',
    pack: '2 × 250 per case',
    use: 'Medium loaded trays and busier evening serves',
  },
  {
    size: '3lb Greenspirit kraft',
    dims: '220 × 160 × 54 mm',
    pack: '2 × 250 per case',
    use: 'Large chipper trays, family sides, festival portions',
  },
  {
    size: 'Kraft windowed tray (lge)',
    dims: 'Large MW windowed kraft',
    pack: '360 per case',
    use: 'Display trays where customers see the food through the film',
  },
  {
    size: '#99 compostable corrugated',
    dims: '160 × 131 × 38 mm',
    pack: '6 × 100 per case',
    use: 'Sturdier corrugated tray for greasy hot food and delivery bags',
  },
];

export default function KraftFoodTraysIrelandSizesBuyingGuide() {
  const title = 'Kraft Food Trays Ireland: ½lb–3lb Greenspirit Sizes & Wholesale Buying Guide';
  const description =
    'Buy kraft food trays in Ireland with confidence — Greenspirit sizes from ½lb to 3lb, windowed and compostable corrugated options, case packs, and delivery to Dublin, Cork, Galway and nationwide from Ashbourne.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="kraft food trays ireland, greenspirit food trays wholesale ireland, chip trays dublin, kraft paper trays cork, takeaway food trays galway, plain food trays ashbourne, half pound kraft tray ireland, 3lb kraft food tray ireland, compostable corrugated tray ireland, chipper packaging wholesale ireland"
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
          content="Kraft food trays Ireland — ½lb Greenspirit paper tray wholesale for chippers"
        />
        <meta property="article:published_time" content="2026-10-15" />

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
          <span className="text-slate-900">Kraft Food Trays Ireland</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            Wholesale Guide
          </span>
          <span className="text-slate-400 text-sm">15 Oct 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Kraft Food Trays Ireland: ½lb–3lb Greenspirit Sizes &amp; Wholesale Buying Guide
        </h1>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="relative rounded-2xl overflow-hidden h-48 col-span-2 bg-slate-50">
            <Image
              src={HERO_IMAGE}
              alt="Kraft food trays Ireland — ½lb Greenspirit paper tray for Dublin chippers"
              fill
              className="object-contain p-4"
              priority
              sizes="(max-width: 768px) 66vw, 512px"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={TWO_LB_IMAGE}
                alt="2lb kraft food tray Ireland — Greenspirit street food tray wholesale Cork"
                fill
                className="object-contain p-3"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={THREE_LB_IMAGE}
                alt="3lb kraft food tray Ireland — large Greenspirit chip tray Galway"
                fill
                className="object-contain p-3"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Chippers in Dublin, street-food vans in Cork, night markets in Galway — Irish kitchens that
            sell by the tray need a kraft format that holds heat, resists grease and stacks flat under
            the counter. Size is the first decision: too small and chips spill; too large and a regular
            portion looks sparse. Case packs matter just as much when Friday night empties the shelf.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            This guide covers <strong>kraft food trays in Ireland</strong> as plain catering stock —
            Greenspirit paper trays from <strong>½lb to 3lb</strong>, a large kraft windowed tray, a
            #99 compostable corrugated tray, case packs, and how{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              PrintNPack&apos;s Food Trays
            </Link>{' '}
            range works with tiered pricing and delivery from Ashbourne.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Why Irish chippers buy plain kraft trays by the case
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Plain kraft trays are warehouse stock: order by the case, no print proof, no brand MOQ.
            That matters when a Cork chipper burns through 2lb trays at closing time or an Ashbourne
            deli needs ½lb sides before a lunch rush. Branding can sit on greaseproof wrap or the
            carrier bag — the tray only has to hold food, travel in the bag, and survive the counter.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            PrintNPack holds Greenspirit kraft paper trays alongside windowed and corrugated options
            in Food Trays. Orders ship nationwide; local buyers can collect from Ashbourne, Co. Meath.
            For a wider view of bulk catering lines, see our{' '}
            <Link href="/blog/plain-packaging-wholesale-ireland" className="text-blue-600 hover:underline">
              plain packaging wholesale Ireland
            </Link>{' '}
            guide. Corrugated chipper trays that fold around a full fish supper are covered separately
            in the{' '}
            <Link
              href="/blog/fish-and-chip-boxes-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              fish &amp; chip boxes Ireland
            </Link>{' '}
            guide.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Kraft food tray sizes at a glance
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Start with the portion your menu sells most — often <strong>2lb</strong> for a standard
            chip serve, <strong>½lb or 1lb</strong> for sides, and <strong>2.5lb or 3lb</strong> for
            loaded evening trays — then confirm the case pack. Use the table below, then check live
            case tiers on each product page.
          </p>

          <div className="overflow-x-auto mb-8 not-prose">
            <table className="min-w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
              <thead className="bg-slate-50 text-left">
                <tr>
                  <th className="px-4 py-3 font-semibold text-slate-900">Product</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">Dimensions</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">Case pack</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">Best for</th>
                </tr>
              </thead>
              <tbody>
                {sizeRows.map((row) => (
                  <tr key={row.size} className="border-t border-slate-200">
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
              src={WINDOWED_IMAGE}
              alt="Kraft windowed food tray Ireland — large MW display tray wholesale Ashbourne"
              fill
              className="object-contain p-6"
              sizes="(max-width: 768px) 100vw, 720px"
            />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Greenspirit kraft trays from ½lb to 2lb
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            The smaller everyday lines are the{' '}
            <Link href={HALF_LB_HREF} className="text-blue-600 hover:underline">
              ½lb Kraft Greenspirit Paper Food Tray
            </Link>{' '}
            at <strong>150 × 100 × 32 mm</strong>, the{' '}
            <Link href={ONE_LB_HREF} className="text-blue-600 hover:underline">
              1lb Small Kraft Greenspirit Paper Food Tray
            </Link>{' '}
            at <strong>175 × 105 × 38 mm</strong>, and the{' '}
            <Link href={TWO_LB_HREF} className="text-blue-600 hover:underline">
              2lb Kraft Greenspirit Paper Food Tray
            </Link>{' '}
            at <strong>170 × 120 × 45 mm</strong>. All three pack <strong>4 × 250 per case</strong>{' '}
            (1,000 trays), so you can mix sizes on one Ashbourne order without juggling different pack
            formats.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Dublin and Galway counters often keep ½lb and 1lb as standing stock for sides, then step up
            to 2lb for the main chip serve. Cork street-food traders lean on 2lb when the portion is
            the whole meal in one tray.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            2.5lb and 3lb Greenspirit trays for larger portions
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Loaded evening trays need more floor area. The{' '}
            <Link href={TWO_FIVE_LB_HREF} className="text-blue-600 hover:underline">
              2.5lb Medium Kraft Greenspirit Paper Food Tray
            </Link>{' '}
            measures <strong>205 × 135 × 48 mm</strong>, and the{' '}
            <Link href={THREE_LB_HREF} className="text-blue-600 hover:underline">
              3lb Large Kraft Greenspirit Paper Food Tray
            </Link>{' '}
            measures <strong>220 × 160 × 54 mm</strong>. Both pack <strong>2 × 250 per case</strong>{' '}
            (500 trays) — half the unit count of the smaller Greenspirit lines, which matters when you
            compare case tiers.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Festival vans and family chipper boxes often run 3lb as the large option and keep 2lb on
            the shelf for regulars. Do not assume every kraft tray is 1,000 units per case — check the
            pack before you quote a weekly burn rate.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Windowed kraft and #99 compostable corrugated trays
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Not every counter wants an open paper tray. The{' '}
            <Link href={WINDOWED_HREF} className="text-blue-600 hover:underline">
              Kraft Windowed Food Tray Lge. MW
            </Link>{' '}
            packs <strong>360 per case</strong> when you need a film window so customers can see the
            fill. The{' '}
            <Link href={CORRUGATED_HREF} className="text-blue-600 hover:underline">
              #99 Compostable Corrugated Tray
            </Link>{' '}
            at <strong>160 × 131 × 38 mm</strong> packs <strong>6 × 100 per case</strong> (600 trays)
            when you want a sturdier corrugated board for greasy hot food and bagged delivery.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Many Irish kitchens stock Greenspirit kraft for open counter service, then keep one
            windowed or corrugated SKU for display or delivery bags — plain stock, mixed on one
            Ashbourne dispatch.
          </p>

          <div className="relative rounded-2xl overflow-hidden h-56 mb-8 bg-slate-50 not-prose">
            <Image
              src={CORRUGATED_IMAGE}
              alt="#99 compostable corrugated food tray Ireland — 160×131 mm wholesale for takeaways"
              fill
              className="object-contain p-6"
              sizes="(max-width: 768px) 100vw, 720px"
            />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Case packs and wholesale pricing
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Greenspirit ½lb, 1lb and 2lb trays pack <strong>4 × 250 per case</strong>. The 2.5lb and
            3lb lines pack <strong>2 × 250</strong>. The windowed tray is <strong>360 per case</strong>;
            the #99 corrugated tray is <strong>6 × 100</strong>. All use{' '}
            <strong>four-tier volume pricing</strong> — more cases lower the price per case. There is
            no custom-print MOQ on these plain lines.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Always check the live tier table on each product in{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              Food Trays
            </Link>
            . We do not reprint one-off unit rates here because case tiering is how wholesale pricing
            works. A single-site chipper often starts on 1–3 cases of 2lb plus a smaller side size;
            multi-site groups consolidate ½lb through 3lb into higher tiers on one Ashbourne order.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Kraft trays vs fish &amp; chip boxes, bagasse and bioboxes
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Open kraft trays suit chips, sides and street-food portions that leave the counter in a
            bag or on a napkin. Full fish-and-chip meals that need a deeper corrugated surround belong
            in{' '}
            <Link
              href="/blog/fish-and-chip-boxes-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              fish &amp; chip boxes
            </Link>
            . Compostable meal trays with compartments are covered in the{' '}
            <Link href="/blog/bagasse-meal-boxes-ireland-sizes-buying-guide" className="text-blue-600 hover:underline">
              bagasse meal boxes Ireland
            </Link>{' '}
            guide. Fold-flat kraft takeaway boxes sit in{' '}
            <Link href="/blog/biobox-containers-ireland-sizes-buying-guide" className="text-blue-600 hover:underline">
              Biobox containers Ireland
            </Link>
            .
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            For a broader eco view of Greenspirit kraft trays beside cups and cutlery, see the{' '}
            <Link href="/blog/greenspirit-eco-packaging-ireland" className="text-blue-600 hover:underline">
              Greenspirit eco packaging Ireland
            </Link>{' '}
            overview — this guide focuses on tray sizes and case packs only.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            What to order alongside kraft food trays
          </h2>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
            <li>
              <Link
                href="/blog/fish-and-chip-boxes-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                Fish &amp; chip boxes
              </Link>{' '}
              for full chipper meals beside open kraft trays
            </li>
            <li>
              <Link href="/blog/wooden-cutlery-ireland-sizes-buying-guide" className="text-blue-600 hover:underline">
                Wooden cutlery
              </Link>{' '}
              — chip forks for counter trays
            </li>
            <li>
              <Link
                href="/blog/custom-greaseproof-sheets-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                Greaseproof sheets
              </Link>{' '}
              to line trays or wrap hot food
            </li>
            <li>
              <Link href="/blog/sos-grab-bags-ireland-sizes-buying-guide" className="text-blue-600 hover:underline">
                SOS grab bags
              </Link>{' '}
              for sealed carry-out
            </li>
            <li>Napkins and portion pots from plain packaging for sauces beside the tray</li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-8">
            Pairing trays, forks and bags on one dispatch keeps Dublin and nationwide kitchens stocked
            before weekend peaks.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Delivery across Ireland from Ashbourne
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            PrintNPack is based in Ashbourne, Co. Meath — convenient for Dublin and Meath collections,
            with nationwide dispatch for Cork, Galway, Limerick and every other county. Plain kraft
            tray orders move quickly because they are warehouse stock, not made-to-print jobs.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            UK or Europe shipping is only confirmed case-by-case on request; this guide focuses on Irish
            wholesale delivery, which is the core service for these food tray lines.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How to order kraft food trays in Ireland
          </h2>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-8">
            <li>List your busiest sizes — ½lb/1lb sides, 2lb regular, or 2.5lb/3lb large trays</li>
            <li>Decide whether you also need a windowed display tray or #99 corrugated tray</li>
            <li>Note the case pack — 4×250 vs 2×250 vs 360 vs 6×100 — before estimating weekly burn</li>
            <li>Add chip forks, greaseproof, fish &amp; chip boxes or SOS bags if one delivery can cover the line</li>
            <li>Order by the case on Food Trays — watch the volume tiers</li>
            <li>Take nationwide delivery or collect from Ashbourne, Co. Meath</li>
          </ol>

          <div className="bg-slate-900 rounded-xl p-6 mb-8 text-white not-prose">
            <p className="font-semibold mb-1">Ready to restock kraft food trays?</p>
            <p className="text-slate-400 text-sm mb-4">
              Greenspirit trays from ½lb to 3lb, windowed and compostable corrugated options, with
              tiered wholesale pricing — delivered across Ireland.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={HUB_HREF}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Shop Food Trays Ireland →
              </Link>
              <Link
                href={TWO_LB_HREF}
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                View 2lb Kraft Tray
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
                q: 'Where can I buy kraft food trays wholesale in Ireland?',
                a: 'PrintNPack stocks plain Food Trays by the case — Greenspirit kraft paper trays from ½lb to 3lb, a large kraft windowed tray, and a #99 compostable corrugated tray — with tiered wholesale pricing from Ashbourne to Dublin, Cork, Galway and nationwide.',
              },
              {
                q: 'What kraft food tray sizes are available in Ireland?',
                a: 'Greenspirit kraft trays run ½lb (150×100×32 mm), 1lb (175×105×38 mm), 2lb (170×120×45 mm), 2.5lb (205×135×48 mm) and 3lb (220×160×54 mm). Smaller sizes pack 4×250; 2.5lb and 3lb pack 2×250. A windowed kraft tray (360) and #99 compostable corrugated tray 160×131×38 mm (6×100) are also listed.',
              },
              {
                q: 'Are these food trays plain or custom printed?',
                a: 'These are plain unprinted kraft and corrugated trays sold by the case with no print proof or brand MOQ. Branding can sit on greaseproof sheets, SOS bags or carriers.',
              },
              {
                q: 'What else do Irish chippers order with kraft food trays?',
                a: 'Most chippers pair kraft trays with corrugated fish & chip boxes, greaseproof sheets or chip bags, wooden chip forks, and SOS grab bags for carry-out.',
              },
              {
                q: 'Do you deliver kraft food trays to Dublin, Cork and Galway?',
                a: 'Yes. We deliver Food Trays to Dublin, Cork, Galway and all Irish counties, with collection available from Ashbourne, Co. Meath.',
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
              href: '/blog/fish-and-chip-boxes-ireland-sizes-buying-guide',
              src: '/images/plain-packaging/1206643.webp',
              title: 'Fish & Chip Boxes Ireland: Small vs Large Sizes & Wholesale Buying Guide',
            },
            {
              href: '/blog/wooden-cutlery-ireland-sizes-buying-guide',
              src: '/images/plain-packaging/140046.webp',
              title: 'Wooden Cutlery Ireland: Chip Forks, Sets & Wholesale Buying Guide',
            },
            {
              href: '/blog/bagasse-meal-boxes-ireland-sizes-buying-guide',
              src: '/images/plain-packaging/120158.webp',
              title: 'Bagasse Meal Boxes Ireland: Sizes, Compartments & Wholesale Buying Guide',
            },
            {
              href: '/blog/greenspirit-eco-packaging-ireland',
              src: '/images/plain-packaging/120266.webp',
              title:
                'Greenspirit Eco Packaging Ireland: Compostable Cups, Cutlery & Plain Wholesale Delivery',
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
