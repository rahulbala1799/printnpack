import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/food-freezer-bags-ireland-sizes-buying-guide`;
const HUB_HREF = '/plain-packaging?category=Food+%26+Freezer+Bags';
const BAG_1L_HREF =
  '/plain-packaging/1l-hero-double-seal-food-freezer-bags-6x70pc-220024';
const BAG_38L_HREF =
  '/plain-packaging/38l-hero-double-seal-food-freezer-bags-6x60pc-220025';
const HEAT_SEAL_BAG_HREF =
  '/plain-packaging/bags-for-heat-seal-machine-150x200mm-2000-220022';
const HEAT_SEALER_HREF =
  '/plain-packaging/300mm-single-bar-heat-sealer-sealer-bar-ireland-220021';
const FOIL_FILM_HUB = '/plain-packaging?category=Foil%2CFilm%2C%20Parchment';
const FOIL_CONTAINERS_HUB = '/plain-packaging?category=Foil+Containers';

const HERO_IMAGE = '/images/plain-packaging/220024.webp';
const BAG_38L_IMAGE = '/images/plain-packaging/220025.webp';
const HEAT_SEALER_IMAGE = '/images/plain-packaging/220021.webp';
const CLING_IMAGE = '/images/plain-packaging/220018.webp';
const FOIL_TRAY_IMAGE = '/images/plain-packaging/10928.webp';
const PORTION_POT_IMAGE = '/images/plain-packaging/120043.webp';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Food & Freezer Bags Ireland: 1L vs 3.8L Hero Double Seal Wholesale Buying Guide',
  description:
    'A practical buying guide to plain food and freezer bags in Ireland — 1L and 3.8L Hero Double Seal packs, heat-seal machine bags 150×200mm, case tiers, vs cling film and foil trays, with nationwide delivery from Ashbourne.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-11-27',
  dateModified: '2026-11-27',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I buy food and freezer bags wholesale in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack stocks plain Food & Freezer Bags — 1L and 3.8L Hero Double Seal packs plus bags for heat-seal machines at 150×200mm — with four-tier volume pricing. Delivery from Ashbourne, Co. Meath to Dublin, Cork, Galway and nationwide.',
      },
    },
    {
      '@type': 'Question',
      name: 'What Hero Double Seal freezer bag sizes are available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Warehouse lines cover 1L Hero Double Seal (6×70 bags per case) and 3.8L Hero Double Seal (6×60 bags per case). Use 1L for portions, leftovers and sandwich prep; choose 3.8L for bulk batch cook, catering trays and larger frozen packs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are food and freezer bags the same as catering cling film?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Hero Double Seal freezer bags are resealable storage bags sold by the case for fridge and freezer use. Catering cling film is a roll wrap for covering trays and boards. Many Irish kitchens stock both — bags for labelled portions, cling film for short-life wrap — from the same Ashbourne dispatch.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Food & Freezer Bags pricing work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every SKU in this guide uses four-tier volume pricing by case count (1–3, 4–6, 7–9 and 10+ cases). Example 1–3 case list prices ex VAT include 1L Hero Double Seal from €21.59, 3.8L Hero Double Seal from €33.16 and heat-seal bags 150×200mm from €46.12 per case. Always check the live tier table on each product page.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you deliver food and freezer bags to Dublin, Cork and Galway?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. PrintNPack delivers Food & Freezer Bags to Dublin, Cork, Galway and every Irish county from Ashbourne. Local buyers can also collect from Co. Meath.',
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
      name: 'Food & Freezer Bags Ireland Buying Guide',
      item: PAGE_URL,
    },
  ],
};

const sizeRows = [
  {
    size: '1L Hero Double Seal',
    pack: '6×70 (420 bags)',
    fromPrice: '€21.59',
    use: 'Portions, leftovers, sandwich prep and small frozen packs',
  },
  {
    size: '3.8L Hero Double Seal',
    pack: '6×60 (360 bags)',
    fromPrice: '€33.16',
    use: 'Batch cook, catering trays and larger freezer packs',
  },
  {
    size: 'Heat-seal bags 150×200mm',
    pack: '2000',
    fromPrice: '€46.12',
    use: 'Machine-sealed pouches for prep kitchens with a heat sealer',
  },
];

export default function FoodFreezerBagsIrelandSizesBuyingGuide() {
  const title =
    'Food & Freezer Bags Ireland: 1L vs 3.8L Hero Double Seal Wholesale Buying Guide';
  const description =
    'Buy food and freezer bags in Ireland with confidence — plain 1L and 3.8L Hero Double Seal packs, heat-seal machine bags 150×200mm, case tiers vs cling film and foil trays, with delivery to Dublin, Cork, Galway and nationwide from Ashbourne.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="food freezer bags ireland, hero double seal bags ireland, 1l freezer bags dublin, 3.8l freezer bags cork, wholesale freezer bags galway, heat seal bags ireland, food storage bags ashbourne, plain freezer bags wholesale, catering freezer bags ireland, resealable food bags ireland"
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
          content="Food and freezer bags Ireland — 1L Hero Double Seal wholesale for Dublin kitchens"
        />
        <meta property="article:published_time" content="2026-11-27" />

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
          <span className="text-slate-900">Food &amp; Freezer Bags Ireland</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            Wholesale Guide
          </span>
          <span className="text-slate-400 text-sm">27 Nov 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Food &amp; Freezer Bags Ireland: 1L vs 3.8L Hero Double Seal Wholesale Buying Guide
        </h1>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="relative rounded-2xl overflow-hidden h-48 col-span-2 bg-slate-50">
            <Image
              src={HERO_IMAGE}
              alt="Food and freezer bags Ireland — 1L Hero Double Seal wholesale for Dublin kitchens"
              fill
              className="object-contain p-4"
              priority
              sizes="(max-width: 768px) 66vw, 512px"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={BAG_38L_IMAGE}
                alt="3.8L Hero Double Seal freezer bags Ireland — wholesale packs for Cork catering kitchens"
                fill
                className="object-contain p-2"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={HEAT_SEALER_IMAGE}
                alt="Heat sealer Ireland — 300mm single bar for Galway prep kitchens sealing food bags"
                fill
                className="object-contain p-2"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Irish cafés, takeaways and catering kitchens need resealable storage that survives the
            fridge and freezer without leaking sauce across the shelf. PrintNPack stocks plain{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              Food &amp; Freezer Bags
            </Link>{' '}
            — <strong>1L</strong> and <strong>3.8L Hero Double Seal</strong> packs, plus{' '}
            <strong>150×200mm bags for heat-seal machines</strong> — with tiered case pricing and
            delivery from Ashbourne across Ireland.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            This guide covers which litre size fits which prep job, when double-seal zipper bags beat
            cling film or foil trays, how heat-seal pouches fit beside a 300mm sealer bar, and how
            Dublin, Cork and Galway buyers restock without inventing prices mid-service. Facts and
            list rates come from the live plain-packaging catalogue — always confirm the tier table
            on each product page.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Who buys food and freezer bags in Ireland?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Food &amp; Freezer Bags are warehouse stock for sites that portion, chill and freeze
            without waiting on a print proof:
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-8">
            <li>Dublin cafés and delis bagging sandwich fillings, sauces and leftovers</li>
            <li>Cork and Galway caterers freezing batch-cooked protein and veg for event weeks</li>
            <li>Hotel and canteen kitchens labelling chilled portions for the next service</li>
            <li>Meal-prep and ghost-kitchen operators who need a clear size ladder across sites</li>
            <li>Ashbourne and Meath buyers who collect freezer bags with foil and cling film on one pickup</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Freezer bag sizes Ireland — 1L vs 3.8L Hero Double Seal
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Match the litre size to the portion you actually freeze. Both Hero lines use a double
            seal and pack as multi-roll cases:
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
            <li>
              <strong>1L Hero Double Seal</strong> —{' '}
              <Link href={BAG_1L_HREF} className="text-blue-600 hover:underline">
                6×70 bags per case (420 bags)
              </Link>{' '}
              from <strong>€21.59</strong> ex VAT at 1–3 cases. Best for single portions, leftovers,
              sandwich prep and small frozen packs
            </li>
            <li>
              <strong>3.8L Hero Double Seal</strong> —{' '}
              <Link href={BAG_38L_HREF} className="text-blue-600 hover:underline">
                6×60 bags per case (360 bags)
              </Link>{' '}
              from <strong>€33.16</strong> ex VAT. Best for batch cook, larger catering packs and
              bulk freezer fills that would burst a 1L bag
            </li>
            <li>
              <strong>Heat-seal bags 150×200mm</strong> —{' '}
              <Link href={HEAT_SEAL_BAG_HREF} className="text-blue-600 hover:underline">
                2000 per case
              </Link>{' '}
              from <strong>€46.12</strong> ex VAT for prep kitchens that seal pouches on a machine
              rather than a zipper
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-8">
            Most Irish kitchens run both Hero sizes: 1L for labelled day-parts and 3.8L for weekend
            batch cook. Keeping one case of each stops staff overfilling small bags or wasting a large
            bag on a single sandwich filling during Saturday prep.
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
            Double-seal zipper bags vs heat-seal pouches
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            All three lines sit in Food &amp; Freezer Bags as plain wholesale case stock. The
            difference is how you close the bag:
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
            <li>
              <strong>Hero Double Seal</strong> — resealable zipper bags for fridges and freezers
              where staff open and close the same pack through a service week
            </li>
            <li>
              <strong>Heat-seal 150×200mm</strong> — flat pouches for a sealing bar when you want a
              closed pack that stays shut until cut open; pair with the{' '}
              <Link href={HEAT_SEALER_HREF} className="text-blue-600 hover:underline">
                300mm single bar heat sealer
              </Link>{' '}
              under Catering Equipment
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-8">
            Zipper bags win for mise en place and leftovers. Heat-seal pouches win for sealed snack
            packs and prep that should not reopen until service. See our{' '}
            <Link
              href="/blog/foil-film-parchment-ireland-buying-guide"
              className="text-blue-600 hover:underline"
            >
              catering foil, film and parchment Ireland guide
            </Link>{' '}
            when short-life tray wrap is a better fit than a storage bag.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-8 not-prose">
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={CLING_IMAGE}
                alt="Catering cling film Ireland — 12 inch rolls wholesale for Dublin takeaway prep"
                fill
                className="object-contain p-3"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={FOIL_TRAY_IMAGE}
                alt="Foil containers Ireland — wholesale trays for Cork catering storage and oven use"
                fill
                className="object-contain p-3"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Freezer bags vs cling film, foil trays and portion pots
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Plain Food &amp; Freezer Bags are <strong>unprinted warehouse stock</strong> — ordered by
            the case, with no artwork proof and no custom-print minimum. That keeps restocking fast
            when a festival weekend empties the freezer drawer.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Other formats cover different jobs on the same pass:
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
            <li>
              <strong>Cling film and foil rolls</strong> — cover trays and boards for short-life wrap;
              see{' '}
              <Link href={FOIL_FILM_HUB} className="text-blue-600 hover:underline">
                Foil, Film &amp; Parchment
              </Link>
            </li>
            <li>
              <strong>Foil containers</strong> — rigid trays for oven, chill and delivery when a bag
              is too soft; see the{' '}
              <Link
                href="/blog/foil-containers-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                foil containers Ireland sizes guide
              </Link>
            </li>
            <li>
              <strong>Portion pots</strong> — clear or paper pots for sauces and sides that need a
              lid rather than a zipper; see the{' '}
              <Link
                href="/blog/portion-pots-ireland-pp-vs-paper-buying-guide"
                className="text-blue-600 hover:underline"
              >
                portion pots Ireland PP vs paper guide
              </Link>
            </li>
            <li>
              <strong>Microwave meal boxes</strong> — black multi-compartment trays for plated
              reheats; see the{' '}
              <Link
                href="/blog/microwave-meal-boxes-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                microwave meal boxes Ireland sizes guide
              </Link>
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-8">
            Many Irish sites stock Hero bags for labelled freezer portions and foil trays or meal
            boxes for hot holds — branding belongs on takeaway bags and boxes, not on the freezer
            bag itself.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Case packs, volume tiers and how pricing works
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Every SKU in this guide uses <strong>four-tier volume pricing</strong> (1–3, 4–6, 7–9 and
            10+ cases). There is no custom-print MOQ because these are warehouse stock.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            A single-site Dublin café often starts on 1–3 cases of 1L Hero for daily leftovers, then
            adds a case of 3.8L when batch cook ramps up. Cork and Galway caterers with heavier freeze
            cycles may lean on 3.8L first and keep heat-seal 150×200mm for sealed snack packs. Multi-
            site groups consolidate freezer bags with{' '}
            <Link href={FOIL_CONTAINERS_HUB} className="text-blue-600 hover:underline">
              foil containers
            </Link>{' '}
            and cling film into higher tiers on one Ashbourne order.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Prices above are the published 1–3 case list rates ex VAT from the catalogue — always
            confirm the live tier table on{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              Food &amp; Freezer Bags
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
            Food &amp; Freezer Bags move as warehouse stock, not made-to-print jobs. Local buyers who
            can collect often combine Hero packs with cling film or foil trays on one Ashbourne
            pickup.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Match days, festival weekends and bank-holiday prep are where freezer-bag stockouts show
            — improvising with the wrong litre size or loose cling film slows labelling and risks
            freezer burn on batch cook. Plan case counts around your busiest freeze nights, not a
            quiet midweek average.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            UK or Europe shipping is only confirmed case-by-case on request; this guide focuses on
            Irish wholesale delivery, which is the core service for Food &amp; Freezer Bags.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How to order food and freezer bags in Ireland
          </h2>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-8">
            <li>Match litre size to the portion — 1L for day-parts, 3.8L for batch cook</li>
            <li>Choose Hero Double Seal zipper bags or heat-seal 150×200mm pouches</li>
            <li>Add a 300mm heat sealer if you are running machine-sealed pouches</li>
            <li>Open Food &amp; Freezer Bags and pick the plain SKUs you need</li>
            <li>Match case packs — 6×70, 6×60 or 2000 depending on the line</li>
            <li>Add cling film, foil trays or portion pots if one delivery can cover them</li>
            <li>Watch the four-tier volume pricing on each product page</li>
            <li>Take nationwide delivery or collect from Ashbourne, Co. Meath</li>
          </ol>

          <div className="bg-slate-900 rounded-xl p-6 mb-8 text-white not-prose">
            <p className="font-semibold mb-1">Ready to restock food and freezer bags?</p>
            <p className="text-slate-400 text-sm mb-4">
              Plain 1L and 3.8L Hero Double Seal packs by the case — tiered wholesale pricing,
              delivered across Ireland from Ashbourne.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={HUB_HREF}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Shop Food &amp; Freezer Bags →
              </Link>
              <Link
                href={BAG_1L_HREF}
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                View 1L Hero Double Seal
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
                q: 'Where can I buy food and freezer bags wholesale in Ireland?',
                a: 'PrintNPack stocks plain Food & Freezer Bags — 1L and 3.8L Hero Double Seal packs plus 150×200mm heat-seal bags — with tiered wholesale pricing from Ashbourne to Dublin, Cork, Galway and nationwide.',
              },
              {
                q: 'What Hero Double Seal freezer bag sizes are available?',
                a: 'Warehouse lines cover 1L Hero Double Seal (6×70 bags per case) and 3.8L Hero Double Seal (6×60 bags per case). Use 1L for portions and leftovers; choose 3.8L for batch cook and larger freezer packs.',
              },
              {
                q: 'Are food and freezer bags the same as catering cling film?',
                a: 'No. Hero Double Seal bags are resealable storage bags for fridge and freezer use. Cling film is a roll wrap for covering trays. Many Irish kitchens stock both.',
              },
              {
                q: 'How does Food & Freezer Bags pricing work?',
                a: 'Four-tier volume pricing applies by case count. Example 1–3 case list prices ex VAT: 1L Hero Double Seal from €21.59, 3.8L Hero Double Seal from €33.16, heat-seal bags 150×200mm from €46.12. Check the live product page for current tiers.',
              },
              {
                q: 'Do you deliver food and freezer bags to Dublin, Cork and Galway?',
                a: 'Yes. We deliver Food & Freezer Bags to Dublin, Cork, Galway and all Irish counties, with collection available from Ashbourne, Co. Meath.',
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
              href: '/blog/foil-film-parchment-ireland-buying-guide',
              src: CLING_IMAGE,
              title: 'Catering Foil, Film & Parchment Ireland: Roll Sizes Buying Guide',
            },
            {
              href: '/blog/foil-containers-ireland-sizes-buying-guide',
              src: FOIL_TRAY_IMAGE,
              title: 'Foil Containers Ireland: Sizes Wholesale Buying Guide',
            },
            {
              href: '/blog/portion-pots-ireland-pp-vs-paper-buying-guide',
              src: PORTION_POT_IMAGE,
              title: 'Portion Pots Ireland: PP vs Paper Buying Guide',
            },
            {
              href: '/blog/microwave-meal-boxes-ireland-sizes-buying-guide',
              src: '/images/plain-packaging/CTC343.webp',
              title: 'Microwave Meal Boxes Ireland: Sizes Wholesale Buying Guide',
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
