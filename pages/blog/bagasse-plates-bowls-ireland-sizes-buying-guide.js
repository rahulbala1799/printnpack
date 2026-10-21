import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/bagasse-plates-bowls-ireland-sizes-buying-guide`;
const HUB_HREF = '/plain-packaging?category=Plates+%26+Bowls';
const SEVEN_INCH_HREF = '/plain-packaging/7-bagasse-round-plate-20x50s-109755';
const NINE_INCH_HREF = '/plain-packaging/9-bagasse-round-plate-10x50s-109756';
const OVAL_HREF = '/plain-packaging/105x8-bagasse-oval-plate-10x50s-109758';
const BOWL_32_HREF = '/plain-packaging/32oz-bagasse-bowl-10x50-120592';
const BOWL_12_HREF = '/plain-packaging/12oz-white-bagasse-bowls-20x50-pb12rd';
const BOWL_9_HREF = '/plain-packaging/9oz-bagasse-bowl-11x11-20x50s-1206661';
const PAPER_6_HREF = '/plain-packaging/6-white-greenspirit-paper-plates-20x100-110025';
const PAPER_7_HREF = '/plain-packaging/7-white-greenspirit-paper-plates-10x100-110026';
const PAPER_9_HREF = '/plain-packaging/9-white-greenspirit-paper-plates-10x100-110027';

const HERO_IMAGE = '/images/plain-packaging/109756.webp';
const SEVEN_IMAGE = '/images/plain-packaging/109755.webp';
const OVAL_IMAGE = '/images/plain-packaging/109758.webp';
const NINE_IMAGE = '/images/plain-packaging/109756.webp';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Bagasse Plates & Bowls Ireland: 7″–9″ Sizes & Wholesale Buying Guide',
  description:
    'A practical buying guide to plain bagasse plates and bowls in Ireland — 7″ and 9″ round plates, 10.5×8″ oval plates, 9oz–32oz bagasse bowls, case packs, and nationwide wholesale delivery from Ashbourne.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-10-21',
  dateModified: '2026-10-21',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I buy bagasse plates and bowls wholesale in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack stocks plain bagasse plates and bowls by the case under Plates & Bowls — including 7″ and 9″ round plates, 10.5×8″ oval plates and bagasse bowls — with tiered wholesale pricing. Delivery from Ashbourne, Co. Meath to Dublin, Cork, Galway and nationwide.',
      },
    },
    {
      '@type': 'Question',
      name: 'What bagasse plate sizes are available in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Catalogue bagasse plates include the 7″ round plate (20×50 per case), the 9″ round plate (10×50) and the 10.5×8″ oval plate (10×50). Match diameter to the portion you plate most often.',
      },
    },
    {
      '@type': 'Question',
      name: 'What bagasse bowl sizes does PrintNPack stock?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bagasse bowl lines in Plates & Bowls include 9oz (20×50), 12oz white (20×50) and 32oz (10×50). Case packs are listed on each product page with four-tier volume pricing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are bagasse plates the same as bagasse meal boxes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Bagasse plates and bowls are open tableware for plated or buffet service. Bagasse meal boxes are hinged or compartment takeaway trays with lids. Many Irish kitchens stock both.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you deliver bagasse plates to Dublin, Cork and Galway?',
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
      name: 'Bagasse Plates & Bowls Ireland Buying Guide',
      item: PAGE_URL,
    },
  ],
};

const sizeRows = [
  {
    size: '7″ bagasse round plate',
    dims: '7″ round',
    pack: '20 × 50 per case',
    use: 'Sides, desserts, kids portions and compact plated serves',
  },
  {
    size: '9″ bagasse round plate',
    dims: '9″ round',
    pack: '10 × 50 per case',
    use: 'Standard main courses, lunch plates and event catering',
  },
  {
    size: '10.5 × 8″ bagasse oval plate',
    dims: '10.5 × 8″ oval',
    pack: '10 × 50 per case',
    use: 'Longer plated dishes, fish and shared starter layouts',
  },
  {
    size: '9oz bagasse bowl',
    dims: '9oz / 11 × 11 format',
    pack: '20 × 50 per case',
    use: 'Sides, dips and small hot portions',
  },
  {
    size: '12oz white bagasse bowl',
    dims: '12oz',
    pack: '20 × 50 per case',
    use: 'Soups, porridge and café bowl meals',
  },
  {
    size: '32oz bagasse bowl',
    dims: '32oz',
    pack: '10 × 50 per case',
    use: 'Large salads, sharing bowls and bulk catering portions',
  },
];

export default function BagassePlatesBowlsIrelandSizesBuyingGuide() {
  const title = 'Bagasse Plates & Bowls Ireland: 7″–9″ Sizes & Wholesale Buying Guide';
  const description =
    'Buy bagasse plates and bowls in Ireland with confidence — 7″ and 9″ round plates, 10.5×8″ oval plates, 9oz–32oz bowls, case packs, and delivery to Dublin, Cork, Galway and nationwide from Ashbourne.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="bagasse plates ireland, bagasse bowls wholesale ireland, compostable plates dublin, 9 inch bagasse plate cork, eco plates galway, bagasse tableware ashbourne, oval bagasse plate ireland, plain bagasse bowls ireland, compostable bowls wholesale ireland, plates and bowls wholesale ireland"
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
          content="Bagasse plates Ireland — 9 inch round compostable plate wholesale for catering"
        />
        <meta property="article:published_time" content="2026-10-21" />

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
          <span className="text-slate-900">Bagasse Plates &amp; Bowls Ireland</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            Wholesale Guide
          </span>
          <span className="text-slate-400 text-sm">21 Oct 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Bagasse Plates &amp; Bowls Ireland: 7″–9″ Sizes &amp; Wholesale Buying Guide
        </h1>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="relative rounded-2xl overflow-hidden h-48 col-span-2 bg-slate-50">
            <Image
              src={HERO_IMAGE}
              alt="Bagasse plates Ireland — 9 inch round compostable plate for Dublin catering"
              fill
              className="object-contain p-4"
              priority
              sizes="(max-width: 768px) 66vw, 512px"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={SEVEN_IMAGE}
                alt="7 inch bagasse plate Ireland — round compostable plate wholesale Cork"
                fill
                className="object-contain p-3"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={OVAL_IMAGE}
                alt="Oval bagasse plate Ireland — 10.5 by 8 inch compostable plate Galway"
                fill
                className="object-contain p-3"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Caterers in Dublin, café kitchens in Cork and festival crews in Galway need plates that hold
            a hot main without feeling like a disposable afterthought. Bagasse — moulded sugarcane fibre
            — is the plain wholesale answer for open tableware: round plates for everyday mains, oval
            plates for longer dishes, and bowls when the menu is soup, salad or porridge rather than a
            flat plate.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            This guide covers <strong>bagasse plates and bowls in Ireland</strong> as plain catering
            stock — <strong>7″ and 9″ round plates</strong>, the <strong>10.5 × 8″ oval plate</strong>,{' '}
            <strong>9oz–32oz bagasse bowls</strong>, case packs, and how{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              PrintNPack&apos;s Plates &amp; Bowls
            </Link>{' '}
            range works with tiered pricing and delivery from Ashbourne. Hinged takeaway trays are a
            different category — see the{' '}
            <Link
              href="/blog/bagasse-meal-boxes-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              bagasse meal boxes Ireland
            </Link>{' '}
            guide.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Why Irish kitchens buy plain bagasse plates by the case
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Plain bagasse plates are warehouse stock: order by the case, no print proof, no brand MOQ.
            That suits Cork event caterers plating buffet mains and Ashbourne cafés that need a 7″ side
            plate beside a 9″ lunch plate before a Saturday rush. Branding can sit on napkins or
            carriers — the plate only has to hold food, travel from pass to table, and look tidy.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            PrintNPack holds bagasse plates and bowls beside Greenspirit paper plates and pulp bowls in
            the same Plates &amp; Bowls category. Orders ship nationwide; local buyers can collect from
            Ashbourne, Co. Meath. For a broader view of bulk catering lines, see our{' '}
            <Link href="/blog/plain-packaging-wholesale-ireland" className="text-blue-600 hover:underline">
              plain packaging wholesale Ireland
            </Link>{' '}
            guide. Compostable cups and cutlery context sits in the{' '}
            <Link
              href="/blog/greenspirit-eco-packaging-ireland"
              className="text-blue-600 hover:underline"
            >
              Greenspirit eco packaging Ireland
            </Link>{' '}
            overview.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Bagasse plate and bowl sizes at a glance
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Start with the plate your menu uses most — often the <strong>9″ round</strong> for mains —
            then add a <strong>7″</strong> for sides or desserts and the <strong>oval</strong> when
            dishes run long. Bowls cover wet and piled portions the flat plate cannot. Confirm the case
            count on each product page.
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
              src={NINE_IMAGE}
              alt="9 inch bagasse round plate Ireland — compostable catering plate wholesale Ashbourne"
              fill
              className="object-contain p-6"
              sizes="(max-width: 768px) 100vw, 720px"
            />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            7″ and 9″ round bagasse plates
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Everyday plated service often starts on the{' '}
            <Link href={NINE_INCH_HREF} className="text-blue-600 hover:underline">
              9″ Bagasse Round Plate
            </Link>{' '}
            — <strong>10 × 50 per case</strong> — for lunch mains, hot dinners and event catering across
            Dublin and nationwide. When the portion is smaller, the{' '}
            <Link href={SEVEN_INCH_HREF} className="text-blue-600 hover:underline">
              7″ Bagasse Round Plate
            </Link>{' '}
            packs <strong>20 × 50 per case</strong>, so you get more units on one Ashbourne order for
            sides, desserts and kids plates.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Cork delis and Galway cafés often run 9″ as the default main plate and keep 7″ for
            accompaniments so the pass stays consistent. Confirm the live case pack before you quote a
            multi-site restock — volume tiers reward more cases on the same SKU.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            10.5 × 8″ oval bagasse plates
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Longer plated dishes need a different footprint. The{' '}
            <Link href={OVAL_HREF} className="text-blue-600 hover:underline">
              10.5 × 8″ Bagasse Oval Plate
            </Link>{' '}
            ships <strong>10 × 50 per case</strong> and suits fish, sharing starters and layouts that
            look cramped on a round 9″. Festival vans and hotel banqueting teams in Ireland often keep
            oval beside round so one delivery covers both shapes.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Oval is not a substitute for a meal box with a lid — if food must travel closed, use{' '}
            <Link
              href="/blog/bagasse-meal-boxes-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              bagasse meal boxes
            </Link>{' '}
            or a bowl with a matching lid from another line. This oval plate is open tableware for
            plated service.
          </p>

          <div className="relative rounded-2xl overflow-hidden h-56 mb-8 bg-slate-50 not-prose">
            <Image
              src={OVAL_IMAGE}
              alt="10.5 by 8 inch oval bagasse plate Ireland — compostable catering plate for events"
              fill
              className="object-contain p-6"
              sizes="(max-width: 768px) 100vw, 720px"
            />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Bagasse bowls — 9oz, 12oz and 32oz
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Bowls handle wet and piled food better than a flat plate. The{' '}
            <Link href={BOWL_9_HREF} className="text-blue-600 hover:underline">
              9oz Bagasse Bowl
            </Link>{' '}
            and{' '}
            <Link href={BOWL_12_HREF} className="text-blue-600 hover:underline">
              12oz White Bagasse Bowls
            </Link>{' '}
            both pack <strong>20 × 50 per case</strong> for sides, soups and café bowl meals. Step up to
            the{' '}
            <Link href={BOWL_32_HREF} className="text-blue-600 hover:underline">
              32oz Bagasse Bowl
            </Link>{' '}
            (<strong>10 × 50 per case</strong>) for large salads and sharing portions.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Round kraft bowls with PET lids are a different PE kraft format for poke and noodle
            takeaway — covered in the{' '}
            <Link
              href="/blog/round-kraft-bowls-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              round kraft bowls Ireland
            </Link>{' '}
            guide. Keep bagasse bowls when you want fibre tableware in the same compostable family as
            your plates.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Case packs and wholesale pricing
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Round 7″ plates pack denser (<strong>20 × 50</strong>) than 9″ and oval (<strong>10 × 50</strong>
            ). Bowl packs follow the same pattern — smaller 9oz/12oz at <strong>20 × 50</strong>, 32oz at{' '}
            <strong>10 × 50</strong>. All use <strong>four-tier volume pricing</strong> — more cases lower
            the price per case. There is no custom-print MOQ on these plain lines.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Always check the live tier table on each product in{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              Plates &amp; Bowls
            </Link>
            . We do not reprint one-off unit rates here because case tiering is how wholesale pricing
            works. A single-site café often starts on 1–3 cases of 9″ plates; multi-site caterers
            consolidate 7″, 9″ and oval into higher tiers on one Ashbourne order.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Bagasse plates vs paper plates vs meal boxes
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Bagasse plates suit hot plated and buffet service where you want a stiffer fibre feel.
            Greenspirit paper plates in the same category —{' '}
            <Link href={PAPER_6_HREF} className="text-blue-600 hover:underline">
              6″
            </Link>
            ,{' '}
            <Link href={PAPER_7_HREF} className="text-blue-600 hover:underline">
              7″
            </Link>{' '}
            and{' '}
            <Link href={PAPER_9_HREF} className="text-blue-600 hover:underline">
              9″ White Greenspirit Paper Plates
            </Link>{' '}
            — pack in 100s and suit lighter cold or dry serves. Hinged{' '}
            <Link
              href="/blog/bagasse-meal-boxes-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              bagasse meal boxes
            </Link>{' '}
            close for delivery; open plates do not.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Kraft food trays are another open format for chips and street food — see the{' '}
            <Link
              href="/blog/kraft-food-trays-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              kraft food trays Ireland
            </Link>{' '}
            guide. This article stays on bagasse plates and bowls only.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            What to order alongside bagasse plates and bowls
          </h2>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
            <li>
              <Link
                href="/blog/bagasse-meal-boxes-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                Bagasse meal boxes
              </Link>{' '}
              when takeaway needs a hinged lid
            </li>
            <li>
              <Link
                href="/blog/wooden-cutlery-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                Wooden cutlery
              </Link>{' '}
              — forks and knives beside plated fibreware
            </li>
            <li>
              <Link
                href="/blog/premium-linen-feel-napkins-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                Premium linen-feel napkins
              </Link>{' '}
              for hospitality tables
            </li>
            <li>
              <Link
                href="/blog/round-kraft-bowls-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                Round kraft bowls
              </Link>{' '}
              when you need PE kraft bowls with PET lids for sealed takeaway
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-8">
            Pairing plates, bowls, cutlery and napkins on one dispatch keeps Dublin and nationwide
            kitchens stocked before weekend peaks and event weekends.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Delivery across Ireland from Ashbourne
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            PrintNPack is based in Ashbourne, Co. Meath — convenient for Dublin and Meath collections,
            with nationwide dispatch for Cork, Galway, Limerick and every other county. Plain bagasse
            plate and bowl orders move quickly because they are warehouse stock, not made-to-print jobs.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            UK or Europe shipping is only confirmed case-by-case on request; this guide focuses on Irish
            wholesale delivery, which is the core service for these Plates &amp; Bowls lines.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How to order bagasse plates and bowls in Ireland
          </h2>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-8">
            <li>List your busiest sizes — 9″ mains, 7″ sides, oval for longer dishes, or bowls for wet food</li>
            <li>Decide plate vs bowl vs hinged meal box for each menu item</li>
            <li>Note the case pack — 20 × 50 vs 10 × 50 — before estimating weekly burn</li>
            <li>Add wooden cutlery, napkins or meal boxes if one delivery can cover the line</li>
            <li>Order by the case on Plates &amp; Bowls — watch the volume tiers</li>
            <li>Take nationwide delivery or collect from Ashbourne, Co. Meath</li>
          </ol>

          <div className="bg-slate-900 rounded-xl p-6 mb-8 text-white not-prose">
            <p className="font-semibold mb-1">Ready to restock bagasse plates and bowls?</p>
            <p className="text-slate-400 text-sm mb-4">
              Round and oval bagasse plates plus 9oz–32oz bowls — tiered wholesale pricing delivered
              across Ireland.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={HUB_HREF}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Shop Plates &amp; Bowls →
              </Link>
              <Link
                href={NINE_INCH_HREF}
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                View 9″ Bagasse Plate
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
                q: 'Where can I buy bagasse plates and bowls wholesale in Ireland?',
                a: 'PrintNPack stocks plain bagasse plates and bowls by the case under Plates & Bowls — with tiered wholesale pricing from Ashbourne to Dublin, Cork, Galway and nationwide.',
              },
              {
                q: 'What bagasse plate sizes are available in Ireland?',
                a: 'Catalogue lines include the 7″ round (20×50), 9″ round (10×50) and 10.5×8″ oval (10×50). Match diameter to the portion you plate most often.',
              },
              {
                q: 'What bagasse bowl sizes does PrintNPack stock?',
                a: 'Bagasse bowls include 9oz (20×50), 12oz white (20×50) and 32oz (10×50). Check each product page for live case tiers.',
              },
              {
                q: 'Are bagasse plates the same as bagasse meal boxes?',
                a: 'No. Plates and bowls are open tableware; meal boxes are hinged or compartment takeaway trays. Many Irish kitchens stock both.',
              },
              {
                q: 'Do you deliver bagasse plates to Dublin, Cork and Galway?',
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
              href: '/blog/bagasse-meal-boxes-ireland-sizes-buying-guide',
              src: '/images/plain-packaging/120158.webp',
              title: 'Bagasse Meal Boxes Ireland: Sizes, Compartments & Wholesale Buying Guide',
            },
            {
              href: '/blog/round-kraft-bowls-ireland-sizes-buying-guide',
              src: '/images/plain-packaging/120074.webp',
              title: 'Round Kraft Bowls Ireland: 750–1300ml Sizes & Lids Buying Guide',
            },
            {
              href: '/blog/kraft-food-trays-ireland-sizes-buying-guide',
              src: '/images/plain-packaging/120266.webp',
              title: 'Kraft Food Trays Ireland: ½lb–3lb Greenspirit Sizes & Wholesale Buying Guide',
            },
            {
              href: '/blog/wooden-cutlery-ireland-sizes-buying-guide',
              src: '/images/plain-packaging/140046.webp',
              title: 'Wooden Cutlery Ireland: Chip Forks, Sets & Wholesale Buying Guide',
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
