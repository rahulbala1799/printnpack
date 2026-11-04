import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/nested-kraft-takeaway-boxes-ireland-sizes-buying-guide`;
const HUB_HREF = '/plain-packaging?category=Nested+Boxes';
const BOX_S_HREF =
  '/plain-packaging/small-kraft-nested-takeaway-boxes-117x75x60mm-6-x-50s-120225';
const BOX_M_HREF =
  '/plain-packaging/medium-kraft-nested-takeaway-box-144x95x60mm-6-x-50s-120226';
const BOX_L_HREF =
  '/plain-packaging/large-kraft-nested-takeaway-box-2245x95x60mm-6-x-50s-120227';

const HERO_IMAGE = '/images/plain-packaging/120227.webp';
const MEDIUM_IMAGE = '/images/plain-packaging/120226.webp';
const SMALL_IMAGE = '/images/plain-packaging/120225.webp';
const BIOBOX_IMAGE = '/images/plain-packaging/120090.webp';
const CLAMSHELL_IMAGE = '/images/plain-packaging/120091.webp';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Nested Kraft Takeaway Boxes Ireland: Small, Medium & Large Sizes Buying Guide',
  description:
    'A practical buying guide to plain kraft nested takeaway boxes in Ireland — Small 117×75×60 mm, Medium 144×95×60 mm and Large 224.5×95×60 mm, 6×50 case packs, and nationwide delivery from Ashbourne for takeaways and cafés.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-11-04',
  dateModified: '2026-11-04',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I buy nested kraft takeaway boxes wholesale in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack stocks plain kraft nested takeaway boxes by the case under Nested Boxes — Small 117×75×60 mm, Medium 144×95×60 mm and Large 224.5×95×60 mm, each packed 6×50 — with tiered wholesale pricing. Delivery from Ashbourne, Co. Meath to Dublin, Cork, Galway and nationwide.',
      },
    },
    {
      '@type': 'Question',
      name: 'What nested kraft takeaway box sizes are available in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Three plain kraft sizes: Small 117×75×60 mm (code 120225), Medium 144×95×60 mm (120226) and Large 224.5×95×60 mm (120227). All three pack 6×50 (300 boxes) per case and share a 60 mm height.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are these nested takeaway boxes plain or custom printed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'These lines are plain kraft wholesale stock — unprinted nested cartons with no artwork proof and no custom-print minimum. Order by the case with four-tier volume pricing. Branding usually sits on stickers, napkins or outer bags.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should I choose nested kraft boxes instead of biobox or clamshells?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Choose nested kraft boxes when you need a shallow rectangular kraft carton that stacks tightly in the dry store and suits sides, wraps, sandwiches and slender mains. Use biobox for taller meal-box footprints and corrugated clamshells when you need a hinged fold-out meal format.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you deliver nested kraft takeaway boxes to Dublin, Cork and Galway?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. PrintNPack delivers Nested Boxes to Dublin, Cork, Galway and every Irish county from Ashbourne. Local buyers can also collect from Co. Meath.',
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
      name: 'Nested Kraft Takeaway Boxes Ireland Buying Guide',
      item: PAGE_URL,
    },
  ],
};

const sizeRows = [
  {
    size: 'Small kraft nested box',
    dims: '117 × 75 × 60 mm',
    code: '120225',
    pack: '6 × 50 (300)',
    use: 'Sides, sauces with wraps, compact sandwiches and kids portions',
  },
  {
    size: 'Medium kraft nested box',
    dims: '144 × 95 × 60 mm',
    code: '120226',
    pack: '6 × 50 (300)',
    use: 'Everyday wraps, toasties, light mains and lunch specials',
  },
  {
    size: 'Large kraft nested box',
    dims: '224.5 × 95 × 60 mm',
    code: '120227',
    pack: '6 × 50 (300)',
    use: 'Long wraps, baguettes, slender plated meals and dual-item lunches',
  },
];

export default function NestedKraftTakeawayBoxesIrelandSizesBuyingGuide() {
  const title =
    'Nested Kraft Takeaway Boxes Ireland: Small, Medium & Large Sizes Buying Guide';
  const description =
    'Buy plain kraft nested takeaway boxes in Ireland — Small 117×75×60 mm, Medium 144×95×60 mm and Large 224.5×95×60 mm, 6×50 case packs, and delivery to Dublin, Cork, Galway and nationwide from Ashbourne.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="nested kraft takeaway boxes ireland, kraft nested boxes wholesale ireland, small nested takeaway box dublin, medium kraft nested box cork, large nested takeaway box galway, nested boxes ashbourne, plain kraft takeaway boxes ireland, 117x75x60 nested box ireland, takeaway packaging wholesale ireland, nested vs biobox ireland"
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
          content="Nested kraft takeaway boxes Ireland — large plain kraft carton wholesale"
        />
        <meta property="article:published_time" content="2026-11-04" />

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
          <span className="text-slate-900">Nested Kraft Takeaway Boxes Ireland</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            Wholesale Guide
          </span>
          <span className="text-slate-400 text-sm">4 Nov 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Nested Kraft Takeaway Boxes Ireland: Small, Medium &amp; Large Sizes Buying
          Guide
        </h1>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="relative rounded-2xl overflow-hidden h-48 col-span-2 bg-slate-50">
            <Image
              src={HERO_IMAGE}
              alt="Nested kraft takeaway boxes Ireland — large 224.5×95×60 mm plain carton for Dublin takeaways"
              fill
              className="object-contain p-4"
              priority
              sizes="(max-width: 768px) 66vw, 512px"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={MEDIUM_IMAGE}
                alt="Medium nested kraft takeaway box Ireland — 144×95×60 mm wholesale Cork cafés"
                fill
                className="object-contain p-2"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={SMALL_IMAGE}
                alt="Small nested kraft takeaway box Ireland — 117×75×60 mm sides carton wholesale Galway"
                fill
                className="object-contain p-2"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Irish takeaways, delis and café lunch counters often need a shallow kraft carton that packs
            wraps, toasties and slender mains without the bulk of a full meal clamshell — and that stacks
            tightly between services. PrintNPack stocks plain{' '}
            <strong>nested kraft takeaway boxes</strong> in three footprints under{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              Nested Boxes
            </Link>
            , with tiered wholesale pricing and dispatch from Ashbourne to Dublin, Cork, Galway and
            nationwide.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            This guide covers the Small, Medium and Large sizes, why nesting matters in a crowded dry
            store, when kraft nested boxes beat biobox or corrugated clamshells, and how case packs work
            for Irish kitchens. For the wider plain range, see our{' '}
            <Link
              href="/blog/plain-packaging-wholesale-ireland"
              className="text-blue-600 hover:underline"
            >
              plain packaging wholesale Ireland
            </Link>{' '}
            overview.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Who buys nested kraft takeaway boxes in Ireland?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            The Nested Boxes kraft lines suit kitchens that portion rectangular takeaway items every
            service. Typical buyers include wrap and toastie counters in Dublin and Cork, café lunch
            kitchens packing baguettes for collection, delis running dual-item lunch deals, hotel grab-and-go
            teams in Galway, and multi-site groups that want one unprinted kraft SKU set across branches.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            If your hero line is a tall rice or noodle main that needs fold-over flaps, start with{' '}
            <Link
              href="/blog/noodle-boxes-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              Spiritpak noodle boxes
            </Link>{' '}
            instead. Choose nested kraft when the food is shallow and elongated, staff need cartons that
            nest when empty, and you want fast case restocking without artwork lead times.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Nested kraft takeaway box sizes at a glance
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            All three lines are plain brown kraft nested cartons sold under Nested Boxes. They share the
            same <strong>60 mm height</strong> and the same pack format —{' '}
            <strong>6 × 50 per case (300 boxes)</strong> — so you only choose the footprint that matches
            the food. Product codes <strong>120225–120227</strong> help when reordering from an Ashbourne
            account or matching a previous case label on the dry-store shelf.
          </p>

          <div className="overflow-x-auto mb-8 not-prose">
            <table className="min-w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
              <thead className="bg-slate-50 text-left">
                <tr>
                  <th className="px-4 py-3 font-semibold text-slate-900">Size</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">Dimensions</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">Code</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">Case pack</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">Typical use</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {sizeRows.map((row) => (
                  <tr key={row.code}>
                    <td className="px-4 py-3 text-slate-900 font-medium">{row.size}</td>
                    <td className="px-4 py-3 text-slate-700">{row.dims}</td>
                    <td className="px-4 py-3 text-slate-700">{row.code}</td>
                    <td className="px-4 py-3 text-slate-700">{row.pack}</td>
                    <td className="px-4 py-3 text-slate-700">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Small vs medium vs large — which size should Irish kitchens stock?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            The{' '}
            <Link href={BOX_S_HREF} className="text-blue-600 hover:underline">
              Small kraft nested takeaway box (117×75×60 mm)
            </Link>{' '}
            suits sides, compact sandwiches and kids portions where a full medium carton would look
            half-empty. Dublin lunch cafés and Cork wrap counters often use Small beside a Medium main
            when the order includes a side.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            The{' '}
            <Link href={BOX_M_HREF} className="text-blue-600 hover:underline">
              Medium kraft nested takeaway box (144×95×60 mm)
            </Link>{' '}
            is the everyday footprint for many Irish kitchens — standard wraps, toasties and light lunch
            mains. Most single-site cafés start here and only add Small or Large when the menu needs a
            second step.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            The{' '}
            <Link href={BOX_L_HREF} className="text-blue-600 hover:underline">
              Large kraft nested takeaway box (224.5×95×60 mm)
            </Link>{' '}
            stretches length for long wraps, baguettes and dual-item lunch trays while keeping the same
            60 mm height. Galway and Dublin kitchens that sell elongated sandwiches usually keep Large as
            the weekend or lunch-deal SKU and run Medium for midweek volume.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            A practical stock plan for many single-site takeaways is one open case of Medium on the make
            line, one sealed spare case in the dry store, and Small or Large only where the menu truly
            needs them. Holding every size without a clear use case ties up cash and shelf space — even
            though nested cartons stack more tightly than hinged clamshells.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-8 not-prose">
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={MEDIUM_IMAGE}
                alt="Medium nested kraft box Ireland — 144×95×60 mm wrap carton wholesale Dublin"
                fill
                className="object-contain p-3"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={HERO_IMAGE}
                alt="Large nested kraft box Ireland — 224.5×95×60 mm baguette carton wholesale Cork"
                fill
                className="object-contain p-3"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Nested kraft boxes vs biobox, clamshells and kids meal boxes
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Nested kraft boxes are a shallow rectangular carton format — they nest when empty, close as a
            simple lid-style takeaway box, and suit elongated food. That is different from{' '}
            <Link
              href="/blog/biobox-containers-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              biobox containers
            </Link>
            , which cover taller kraft meal-box footprints for mixed takeaway formats and kids meal
            portions in the smaller biobox sizes.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            <Link
              href="/blog/corrugated-clamshell-meal-boxes-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              Corrugated clamshell meal boxes
            </Link>{' '}
            fold out as hinged meals for burgers, rice bowls and plated mains that need a deeper cavity.
            Use clamshells when the dish needs height and a hinged lid; use nested kraft when the food is
            shallow, long and packed into a kraft sleeve-style carton.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Dedicated kids packaging — such as the Animals kids meal box in the Kids Meal Boxes category
            — suits themed children’s menus. Many multi-cuisine kitchens in Dublin stock nested kraft for
            wraps, biobox for mixed meals, and a kids carton for family menus — one Ashbourne order can
            cover the set. For open trays rather than lidded cartons, see{' '}
            <Link
              href="/blog/kraft-food-trays-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              kraft food trays
            </Link>
            .
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-8 not-prose">
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={BIOBOX_IMAGE}
                alt="Biobox containers Ireland — kraft meal box wholesale alternative to nested cartons"
                fill
                className="object-contain p-3"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={CLAMSHELL_IMAGE}
                alt="Corrugated clamshell meal boxes Ireland — hinged takeaway carton vs nested kraft"
                fill
                className="object-contain p-3"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Plain wholesale vs branded packaging
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            These nested takeaway boxes are <strong>plain wholesale</strong> — unprinted kraft stock with
            no logo. That keeps MOQ at a case and restocking fast for Ashbourne collection or nationwide
            dispatch. Branding usually sits on the outer bag, napkin or sticker rather than on every
            carton.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            For everyday wrap and sandwich delivery, plain nested kraft plus a branded{' '}
            <Link
              href="/blog/sos-grab-bags-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              SOS grab bag
            </Link>{' '}
            or kraft carrier is the usual Irish mix. Save custom print budget for high-visibility outer
            packaging, not every lunch carton. Sandwich-specific wedges and window bags are covered in our{' '}
            <Link
              href="/blog/sandwich-wraps-packaging-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              sandwich and wraps packaging guide
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Case packs, MOQ and how pricing works
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Nested kraft takeaway boxes are sold by the case with{' '}
            <strong>four-tier volume pricing</strong> — more cases lower the price per case. There is no
            custom-print MOQ on these plain lines. Small, Medium and Large all pack{' '}
            <strong>6 × 50 (300 boxes)</strong> per case.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Always check the live tier table on each product in{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              Nested Boxes
            </Link>
            . We do not reprint one-off unit rates here because case tiering is how wholesale pricing
            works. A single-site café often starts on 1–3 cases of Medium; multi-site groups consolidate
            Small, Medium and Large into higher tiers on one Ashbourne order.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            What to order alongside nested kraft takeaway boxes
          </h2>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
            <li>
              <Link
                href="/blog/sandwich-wraps-packaging-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                Sandwich and wraps packaging
              </Link>{' '}
              — wedges, baguette packs and windowed kraft bags for deli lines
            </li>
            <li>
              <Link
                href="/blog/biobox-containers-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                Biobox containers
              </Link>{' '}
              for taller kraft meal footprints beside nested cartons
            </li>
            <li>
              <Link
                href="/blog/kraft-food-trays-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                Kraft food trays
              </Link>{' '}
              for open counter service and chip-shop sides
            </li>
            <li>
              <Link
                href="/blog/sos-grab-bags-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                SOS grab bags
              </Link>{' '}
              for sealed carry-out of filled nested boxes
            </li>
            <li>
              <Link
                href="/blog/wooden-cutlery-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                Wooden cutlery
              </Link>{' '}
              packed with lunch and wrap deliveries
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-8">
            Pairing nested kraft boxes, sandwich packaging and grab bags on one dispatch keeps Dublin and
            nationwide cafés stocked before Friday lunch peaks.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Delivery across Ireland from Ashbourne
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            PrintNPack is based in Ashbourne, Co. Meath — convenient for Dublin and Meath collections,
            with nationwide dispatch for Cork, Galway, Limerick and every other county. Plain nested kraft
            orders move quickly because they are warehouse stock, not made-to-print jobs. Local buyers who
            can collect often combine Nested Boxes with sandwich packaging and SOS bags on one Ashbourne
            pickup.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Midweek lunch and Friday collection peaks in Dublin and Cork are where stockouts hurt most —
            empty Medium cases at noon mean improvised packaging and slower counters. Plan case counts
            around your busiest two days, not a quiet Tuesday average.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            UK or Europe shipping is only confirmed case-by-case on request; this guide focuses on Irish
            wholesale delivery, which is the core service for these Nested Boxes lines.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How to order nested kraft takeaway boxes in Ireland
          </h2>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-8">
            <li>List your busiest formats — compact sides vs everyday wraps vs long baguettes</li>
            <li>Match Small 117×75, Medium 144×95 or Large 224.5×95 mm to those dishes</li>
            <li>Decide whether biobox, clamshells or sandwich packs also belong on the same order</li>
            <li>Order by the case on Nested Boxes — watch the volume tiers</li>
            <li>Add SOS bags, cutlery or kraft trays if one delivery can cover them</li>
            <li>Take nationwide delivery or collect from Ashbourne, Co. Meath</li>
          </ol>

          <div className="bg-slate-900 rounded-xl p-6 mb-8 text-white not-prose">
            <p className="font-semibold mb-1">Ready to restock nested kraft takeaway boxes?</p>
            <p className="text-slate-400 text-sm mb-4">
              Plain kraft Small, Medium and Large nested cartons, 6×50 case packs and tiered wholesale
              pricing — delivered across Ireland.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={HUB_HREF}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Shop Nested Boxes →
              </Link>
              <Link
                href={BOX_M_HREF}
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                View Medium Nested Box
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
                q: 'Where can I buy nested kraft takeaway boxes wholesale in Ireland?',
                a: 'PrintNPack stocks plain kraft nested takeaway boxes by the case under Nested Boxes — Small 117×75×60 mm, Medium 144×95×60 mm and Large 224.5×95×60 mm, each packed 6×50 — with tiered wholesale pricing from Ashbourne to Dublin, Cork, Galway and nationwide.',
              },
              {
                q: 'What nested kraft takeaway box sizes are available in Ireland?',
                a: 'Three sizes: Small 117×75×60 mm (120225), Medium 144×95×60 mm (120226) and Large 224.5×95×60 mm (120227). All pack 6×50 (300) per case.',
              },
              {
                q: 'Are these nested takeaway boxes plain or printed?',
                a: 'Plain kraft wholesale — unprinted nested cartons. No custom-print MOQ. Brand with stickers, napkins or outer bags.',
              },
              {
                q: 'Should I buy nested kraft boxes, biobox or clamshells?',
                a: 'Use nested kraft for shallow rectangular wraps and sandwiches that need tight dry-store stacking. Use biobox for taller meal footprints and corrugated clamshells for hinged deeper meals.',
              },
              {
                q: 'Do you deliver nested kraft takeaway boxes to Dublin, Cork and Galway?',
                a: 'Yes. We deliver Nested Boxes to Dublin, Cork, Galway and all Irish counties, with collection available from Ashbourne, Co. Meath.',
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
              src: BIOBOX_IMAGE,
              title: 'Biobox Containers Ireland: Sizes & Wholesale Buying Guide',
            },
            {
              href: '/blog/corrugated-clamshell-meal-boxes-ireland-sizes-buying-guide',
              src: CLAMSHELL_IMAGE,
              title: 'Corrugated Clamshell Meal Boxes Ireland: Sizes & Wholesale Buying Guide',
            },
            {
              href: '/blog/sandwich-wraps-packaging-ireland-sizes-buying-guide',
              src: '/images/plain-packaging/10802.webp',
              title: 'Sandwich & Wraps Packaging Ireland: Wedges, Bags & Window Sizes Buying Guide',
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
