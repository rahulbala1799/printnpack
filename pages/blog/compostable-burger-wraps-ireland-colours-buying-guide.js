import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/compostable-burger-wraps-ireland-colours-buying-guide`;
const HUB_HREF = '/plain-packaging?category=Food+Wrap';
const RED_HREF = '/plain-packaging/red-compostable-burger-wrap-25x33cm-1000-120525';
const BLUE_HREF = '/plain-packaging/blue-compostable-burger-wrap-25x33cm-1000-120526';
const YELLOW_HREF = '/plain-packaging/yellow-compostable-burger-wrap-25x33cm-1000-120527';
const GREASEPROOF_300_HREF =
  '/plain-packaging/300-x-450mm-plain-compostable-greaseproof-sheets-960-1081423';
const GREASEPROOF_350_HREF =
  '/plain-packaging/350x450mm-plain-compostable-greaseproof-sheets-960-1081425';
const DELI_SHEETS_HREF =
  '/plain-packaging/6x1075-dry-wax-compostable-pop-up-deli-sheets-12x500-220032';

const HERO_IMAGE = '/images/plain-packaging/120525.webp';
const BLUE_IMAGE = '/images/plain-packaging/120526.webp';
const YELLOW_IMAGE = '/images/plain-packaging/120527.webp';
const GREASEPROOF_IMAGE = '/images/plain-packaging/1081423.webp';
const BURGER_BOX_IMAGE = '/images/products/bagasse-burger-box/1.png';
const DELI_IMAGE = '/images/plain-packaging/220032.webp';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Compostable Burger Wraps Ireland: Red, Blue & Yellow 25×33cm Wholesale Buying Guide',
  description:
    'A practical buying guide to plain compostable burger wraps in Ireland — red, blue and yellow 25×33cm sheets, 1,000 per case, vs greaseproof sheets and burger boxes, with nationwide delivery from Ashbourne.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-11-13',
  dateModified: '2026-11-13',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I buy compostable burger wraps wholesale in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack stocks plain compostable burger wraps under Food Wrap — red, blue and yellow 25×33cm sheets at 1,000 per case — with tiered wholesale pricing. Delivery from Ashbourne, Co. Meath to Dublin, Cork, Galway and nationwide.',
      },
    },
    {
      '@type': 'Question',
      name: 'What compostable burger wrap colours and size are available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Three colour lines share the same 25×33cm sheet size and 1,000-per-case pack: red (120525), blue (120526) and yellow (120527). Pick a colour for menu coding or brand accent; the sheet size stays the same.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are compostable burger wraps the same as greaseproof sheets?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Burger wraps are colour-coded 25×33cm sheets sold for burger and hot-sandwich service. Plain compostable greaseproof sheets in Food Wrap are larger (for example 300×450mm or 350×450mm at 960 per case) for general greaseproof lining and wrapping. Many Irish kitchens stock both.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I buy burger wraps or burger boxes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Choose compostable burger wraps when the serve is a wrapped burger or hot sandwich that needs a colour sheet. Choose burger boxes or clamshells when the serve needs a rigid tray with a lid. Many takeaways use wraps for counter wraps and boxes for delivery.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you deliver compostable burger wraps to Dublin, Cork and Galway?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. PrintNPack delivers Food Wrap lines to Dublin, Cork, Galway and every Irish county from Ashbourne. Local buyers can also collect from Co. Meath.',
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
      name: 'Compostable Burger Wraps Ireland Buying Guide',
      item: PAGE_URL,
    },
  ],
};

const colourRows = [
  {
    colour: 'Red',
    code: '120525',
    pack: '1,000',
    use: 'Signature burgers, spicy lines and high-visibility counters',
  },
  {
    colour: 'Blue',
    code: '120526',
    pack: '1,000',
    use: 'Fish burger specials, kids menus and cool-tone branding',
  },
  {
    colour: 'Yellow',
    code: '120527',
    pack: '1,000',
    use: 'Chicken, cheese and lunch-deal coding at the pass',
  },
];

export default function CompostableBurgerWrapsIrelandColoursBuyingGuide() {
  const title =
    'Compostable Burger Wraps Ireland: Red, Blue & Yellow 25×33cm Wholesale Buying Guide';
  const description =
    'Buy compostable burger wraps in Ireland with confidence — plain red, blue and yellow 25×33cm sheets, 1,000 per case, vs greaseproof sheets and burger boxes, with delivery to Dublin, Cork, Galway and nationwide from Ashbourne.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="compostable burger wraps ireland, burger wrap paper wholesale ireland, red burger wraps dublin, blue burger wraps cork, yellow burger wraps galway, 25x33cm burger wrap ireland, plain food wrap ashbourne, compostable food wrap ireland, takeaway burger wrap wholesale, food wrap wholesale ireland"
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
          content="Compostable burger wraps Ireland — red 25×33cm plain sheets wholesale for Dublin takeaways"
        />
        <meta property="article:published_time" content="2026-11-13" />

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
          <span className="text-slate-900">Compostable Burger Wraps Ireland</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            Wholesale Guide
          </span>
          <span className="text-slate-400 text-sm">13 Nov 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Compostable Burger Wraps Ireland: Red, Blue &amp; Yellow 25×33cm Wholesale
          Buying Guide
        </h1>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="relative rounded-2xl overflow-hidden h-48 col-span-2 bg-slate-50">
            <Image
              src={HERO_IMAGE}
              alt="Compostable burger wraps Ireland — red 25×33cm plain sheets wholesale for Dublin takeaways"
              fill
              className="object-contain p-4"
              priority
              sizes="(max-width: 768px) 66vw, 512px"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={BLUE_IMAGE}
                alt="Blue compostable burger wraps Ireland — 25×33cm sheets wholesale for Cork burger counters"
                fill
                className="object-contain p-2"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={YELLOW_IMAGE}
                alt="Yellow compostable burger wraps Ireland — 25×33cm sheets wholesale for Galway lunch deals"
                fill
                className="object-contain p-2"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Burger counters and hot-sandwich takeaways need a wrap that folds cleanly, shows grease
            resistance and reads clearly at the pass — not a random sheet pulled from the bakers&apos;
            store. PrintNPack stocks plain compostable burger wraps under{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              Food Wrap
            </Link>{' '}
            in three colours —{' '}
            <Link href={RED_HREF} className="text-blue-600 hover:underline">
              red
            </Link>
            ,{' '}
            <Link href={BLUE_HREF} className="text-blue-600 hover:underline">
              blue
            </Link>{' '}
            and{' '}
            <Link href={YELLOW_HREF} className="text-blue-600 hover:underline">
              yellow
            </Link>{' '}
            — all at <strong>25×33cm</strong> and <strong>1,000 per case</strong>, with tiered wholesale
            pricing and dispatch from Ashbourne to Dublin, Cork, Galway and nationwide.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            This guide covers which colour to stock, how burger wraps differ from larger greaseproof
            sheets and rigid burger boxes, and how case packs work for Irish kitchens. For the wider
            plain range, see our{' '}
            <Link
              href="/blog/plain-packaging-wholesale-ireland"
              className="text-blue-600 hover:underline"
            >
              plain packaging wholesale Ireland
            </Link>{' '}
            overview.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Who buys compostable burger wraps wholesale in Ireland?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Typical buyers include Dublin and Cork burger restaurants wrapping signature patties for
            collection, Galway lunch spots coding chicken and veggie lines by colour, festival and
            event caterers who need bright wraps that photograph well, hotel kitchens running burger
            nights, and multi-site groups that want one 25×33cm sheet family across branches without
            managing custom print artwork.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            If the serve needs a printed logo on every sheet, that is a custom greaseproof job — see our{' '}
            <Link
              href="/blog/custom-greaseproof-sheets-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              custom greaseproof sheets guide
            </Link>
            . Choose these compostable burger wraps when you want warehouse-stock colour sheets by the
            case, ready to reorder without an artwork proof.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Ashbourne collection suits Meath and north Dublin kitchens that also pull greaseproof
            sheets, napkins and boxes on the same trip. Cork and Galway sites usually take nationwide
            dispatch and consolidate Food Wrap with the rest of the dry store on one order.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Burger wrap colours — red, blue and yellow at 25×33cm
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            All three lines share the same sheet size and case pack. The buying decision is colour
            coding, not format:
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
            <li>
              <Link href={RED_HREF} className="text-blue-600 hover:underline">
                Red Compostable Burger Wrap 25×33cm (1000)
              </Link>{' '}
              — code <strong>120525</strong>
            </li>
            <li>
              <Link href={BLUE_HREF} className="text-blue-600 hover:underline">
                Blue Compostable Burger Wrap 25×33cm (1000)
              </Link>{' '}
              — code <strong>120526</strong>
            </li>
            <li>
              <Link href={YELLOW_HREF} className="text-blue-600 hover:underline">
                Yellow Compostable Burger Wrap 25×33cm (1000)
              </Link>{' '}
              — code <strong>120527</strong>
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-4">
            Use one hero colour for your house burger and a second colour for specials or kids menus.
            Busy Dublin passes often keep red for beef, yellow for chicken and blue for fish or plant-based
            — staff can grab the right sheet without reading a label mid-rush.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Four-tier volume pricing applies on each product page — more cases lower the price per case.
            We do not reprint unit rates here; always check the live tier table under{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              Food Wrap
            </Link>{' '}
            before you consolidate an Ashbourne order.
          </p>

          <div className="overflow-x-auto mb-8 not-prose">
            <table className="min-w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
              <thead className="bg-slate-50 text-left">
                <tr>
                  <th className="px-4 py-3 font-semibold text-slate-900">Colour</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">Code</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">Case pack</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">Typical use</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {colourRows.map((row) => (
                  <tr key={row.code}>
                    <td className="px-4 py-3 text-slate-900 font-medium">{row.colour}</td>
                    <td className="px-4 py-3 text-slate-700">{row.code}</td>
                    <td className="px-4 py-3 text-slate-700">{row.pack}</td>
                    <td className="px-4 py-3 text-slate-700">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Burger wraps vs greaseproof sheets vs burger boxes
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Compostable burger wraps sit in{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              Food Wrap
            </Link>{' '}
            beside larger greaseproof and deli sheets. Plain compostable greaseproof lines such as{' '}
            <Link href={GREASEPROOF_300_HREF} className="text-blue-600 hover:underline">
              300×450mm
            </Link>{' '}
            and{' '}
            <Link href={GREASEPROOF_350_HREF} className="text-blue-600 hover:underline">
              350×450mm
            </Link>{' '}
            pack at <strong>960 per case</strong> and suit baking trays, chip liners and general wrapping.
            Burger wraps are the smaller colour sheet sized for a burger or hot sandwich fold.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Rigid packaging is a different job. When the serve needs a hinged tray or lid for delivery
            bags, use{' '}
            <Link
              href="/blog/burger-boxes-ireland-guide"
              className="text-blue-600 hover:underline"
            >
              burger boxes
            </Link>{' '}
            (bagasse or corrugated) instead of a paper wrap alone. Many Cork takeaways wrap for walk-in
            counter service and box for Just Eat / Deliveroo runs.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Sandwich wedges, tortilla packs and windowed bags live under sandwich packaging — see the{' '}
            <Link
              href="/blog/sandwich-wraps-packaging-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              sandwich &amp; wraps packaging guide
            </Link>
            . Keep compostable burger wraps for burger-style colour sheets; keep sandwich packs for
            cold deli formats.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            For a broader eco overview across pizza boxes, bags and burger formats, the{' '}
            <Link
              href="/blog/eco-friendly-pizza-box-paper-bags-burger-boxes-ireland"
              className="text-blue-600 hover:underline"
            >
              eco-friendly pizza box, paper bags and burger boxes guide
            </Link>{' '}
            and{' '}
            <Link
              href="/blog/greenspirit-eco-packaging-ireland"
              className="text-blue-600 hover:underline"
            >
              Greenspirit eco packaging Ireland
            </Link>{' '}
            posts sit alongside this colour-wrap deep dive.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-8 not-prose">
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={GREASEPROOF_IMAGE}
                alt="Plain compostable greaseproof sheets Ireland — 300×450mm Food Wrap wholesale Dublin"
                fill
                className="object-contain p-3"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={BURGER_BOX_IMAGE}
                alt="Bagasse burger boxes Ireland — rigid takeaway trays vs compostable burger wraps Cork"
                fill
                className="object-contain p-3"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Plain wholesale stock vs custom printed greaseproof
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Every compostable burger wrap line in this guide is <strong>plain wholesale warehouse stock</strong>{' '}
            — ordered by the case, with no artwork proof and no custom-print minimum. That keeps
            restocking fast for Ashbourne collection or nationwide dispatch when a match-day weekend
            empties the dry store.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            If you need your logo on every sheet, order custom greaseproof rather than expecting these
            colour wraps to carry branding. Most Irish burger kitchens pair plain colour wraps with a
            branded sticker, napkin or outer bag for the brand touch, and keep the wrap itself as the
            warehouse SKU.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Case packs, MOQ and how pricing works
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Red, blue and yellow burger wraps all sell at <strong>1,000 sheets per case</strong>. All
            three use <strong>four-tier volume pricing</strong>. There is no custom-print MOQ because
            these are warehouse stock.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            A single-site Dublin burger counter often starts on 1–3 cases of the hero colour plus a
            smaller case of a second colour for specials. Multi-site groups consolidate wraps with
            greaseproof sheets, pop-up deli sheets and burger boxes into higher tiers on one Ashbourne
            order. Always check the live tier table on{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              Food Wrap
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            What to order alongside burger wraps
          </h2>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
            <li>
              Plain compostable greaseproof sheets (
              <Link href={GREASEPROOF_300_HREF} className="text-blue-600 hover:underline">
                300×450mm
              </Link>
              ,{' '}
              <Link href={GREASEPROOF_350_HREF} className="text-blue-600 hover:underline">
                350×450mm
              </Link>
              ) for trays and general lining
            </li>
            <li>
              <Link href={DELI_SHEETS_HREF} className="text-blue-600 hover:underline">
                Dry wax compostable pop-up deli sheets
              </Link>{' '}
              for sandwich and deli stations
            </li>
            <li>
              <Link
                href="/blog/burger-boxes-ireland-guide"
                className="text-blue-600 hover:underline"
              >
                Burger boxes
              </Link>{' '}
              for delivery and rigid takeaway
            </li>
            <li>
              <Link
                href="/blog/corrugated-clamshell-meal-boxes-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                Corrugated clamshell meal boxes
              </Link>{' '}
              when the serve needs a hinged kraft tray
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-8">
            Pairing colour wraps, greaseproof sheets and a box line on one dispatch keeps Dublin and
            nationwide burger counters ready for Friday peaks without a mid-service emergency run.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-8 not-prose">
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={YELLOW_IMAGE}
                alt="Yellow compostable burger wraps Ireland — 25×33cm case pack wholesale Ashbourne"
                fill
                className="object-contain p-3"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={DELI_IMAGE}
                alt="Pop-up deli sheets Ireland — dry wax compostable sheets wholesale for Dublin sandwich counters"
                fill
                className="object-contain p-3"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Delivery across Ireland from Ashbourne
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            PrintNPack is based in Ashbourne, Co. Meath — convenient for Dublin and Meath collections,
            with nationwide dispatch for Cork, Galway, Limerick and every other county. Burger wrap
            orders move as warehouse stock, not made-to-print jobs. Local buyers who can collect often
            combine Food Wrap with burger boxes and napkins on one Ashbourne pickup.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Match-day evenings and festival weekends are where wrap stockouts show — improvising with
            oversized greaseproof slows the pass and looks inconsistent on the counter. Plan case
            counts around your busiest burger days, not a quiet midweek average.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            UK or Europe shipping is only confirmed case-by-case on request; this guide focuses on Irish
            wholesale delivery, which is the core service for Food Wrap.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How to order compostable burger wraps in Ireland
          </h2>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-8">
            <li>Confirm the serve is a wrapped burger or hot sandwich — not a rigid boxed delivery</li>
            <li>Open Food Wrap and pick red, blue or yellow 25×33cm</li>
            <li>Match case packs to volume — all three colours are 1,000 per case</li>
            <li>Add greaseproof sheets, deli sheets or burger boxes if one delivery can cover them</li>
            <li>Watch the four-tier volume pricing on each product page</li>
            <li>Take nationwide delivery or collect from Ashbourne, Co. Meath</li>
          </ol>

          <div className="bg-slate-900 rounded-xl p-6 mb-8 text-white not-prose">
            <p className="font-semibold mb-1">Ready to restock compostable burger wraps?</p>
            <p className="text-slate-400 text-sm mb-4">
              Plain red, blue and yellow 25×33cm sheets by the case — tiered wholesale pricing,
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
                href={RED_HREF}
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                View Red Burger Wraps
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
                q: 'Where can I buy compostable burger wraps wholesale in Ireland?',
                a: 'PrintNPack stocks plain compostable burger wraps under Food Wrap — red, blue and yellow 25×33cm at 1,000 per case — with tiered wholesale pricing from Ashbourne to Dublin, Cork, Galway and nationwide.',
              },
              {
                q: 'What compostable burger wrap colours and size are available?',
                a: 'Three colour lines share the same 25×33cm sheet and 1,000-per-case pack: red (120525), blue (120526) and yellow (120527).',
              },
              {
                q: 'Are compostable burger wraps the same as greaseproof sheets?',
                a: 'No. Burger wraps are colour-coded 25×33cm sheets for burger service. Plain compostable greaseproof sheets are larger (for example 300×450mm or 350×450mm at 960 per case) for general lining. Many kitchens stock both.',
              },
              {
                q: 'Should I buy burger wraps or burger boxes?',
                a: 'Use compostable burger wraps for wrapped counter service. Use burger boxes or clamshells when the serve needs a rigid tray with a lid for delivery.',
              },
              {
                q: 'Do you deliver compostable burger wraps to Dublin, Cork and Galway?',
                a: 'Yes. We deliver Food Wrap lines to Dublin, Cork, Galway and all Irish counties, with collection available from Ashbourne, Co. Meath.',
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
              src: '/images/products/greaseproof-sheets/greaseproof-sheets-ireland-branded-burger-wrap.jpg',
              title: 'Custom Greaseproof Sheets Ireland: Sizes, MOQ & Print Buying Guide',
            },
            {
              href: '/blog/burger-boxes-ireland-guide',
              src: BURGER_BOX_IMAGE,
              title: 'Burger Boxes Ireland: Plain vs Printed, Bagasse & Wholesale Guide',
            },
            {
              href: '/blog/sandwich-wraps-packaging-ireland-sizes-buying-guide',
              src: '/images/plain-packaging/220032.webp',
              title: 'Sandwich & Wraps Packaging Ireland: Sizes & Wholesale Buying Guide',
            },
            {
              href: '/blog/greenspirit-eco-packaging-ireland',
              src: '/images/plain-packaging/100396.webp',
              title: 'Greenspirit Eco Packaging Ireland: Range Overview',
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
