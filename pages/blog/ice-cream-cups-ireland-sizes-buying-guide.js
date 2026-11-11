import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/ice-cream-cups-ireland-sizes-buying-guide`;
const HUB_HREF = '/plain-packaging?category=Ice+Cream+Cups';
const FOUR_OZ_HREF = '/plain-packaging/4oz-chill-ice-cream-cup-20-x-50s-109549';
const FIVE_OZ_HREF = '/plain-packaging/5oz-chill-ice-cream-cup-20-x-50s-109550';
const EIGHT_OZ_HREF = '/plain-packaging/8oz-chill-ice-cream-cup-20-x-50s-109551';
const TWELVE_OZ_HREF = '/plain-packaging/12oz-chill-ice-cream-cup-20-x-50s-109552';
const PASTELS_HREF = '/plain-packaging/5oz-mix-pastels-ice-cream-cups-32x25-100306';
const MOOCH_8_HREF = '/plain-packaging/8oz-mooch-ice-cream-cup-1000-1095522';
const MOOCH_12_HREF = '/plain-packaging/12oz-mooch-ice-cream-cup-1000-1095523';
const SWIRLY_HREF =
  '/plain-packaging/swirly-8oz-ice-cream-paper-cup-90mm-pe-20-x-50s-120140';
const PE_8_HREF =
  '/plain-packaging/8oz-chill-ice-cream-cups-pe-245ml-24x25-100260';
const COLD_CUPS_HREF = '/plain-packaging?category=Cold+Cups+%26+Lids';
const FOOD_CONES_HREF = '/plain-packaging?category=Food+Cones';
const CUTLERY_HREF = '/plain-packaging?category=Cutlery+%26+Stirrers';

const HERO_IMAGE = '/images/plain-packaging/109551.webp';
const FOUR_IMAGE = '/images/plain-packaging/109549.webp';
const FIVE_IMAGE = '/images/plain-packaging/109550.webp';
const TWELVE_IMAGE = '/images/plain-packaging/109552.webp';
const PASTELS_IMAGE = '/images/plain-packaging/100306.webp';
const SPADE_IMAGE = '/images/plain-packaging/140012.webp';
const COLD_CUP_IMAGE = '/images/plain-packaging/10427.webp';
const CUTLERY_IMAGE = '/images/plain-packaging/140046.webp';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Ice Cream Cups Ireland: 4–12oz Chill, Mooch & Pastels Wholesale Buying Guide',
  description:
    'A practical buying guide to plain ice cream cups in Ireland — Chill 4oz to 12oz, Mooch 8oz and 12oz, mix pastels and Swirly 8oz, case packs, and nationwide delivery from Ashbourne for gelato bars, soft-serve counters and cafés.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-11-11',
  dateModified: '2026-11-11',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I buy ice cream cups wholesale in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack stocks plain Ice Cream Cups by the case — Chill 4oz to 12oz, Mooch 8oz and 12oz, mix pastels and Swirly 8oz — with tiered wholesale pricing. Delivery from Ashbourne, Co. Meath to Dublin, Cork, Galway and nationwide.',
      },
    },
    {
      '@type': 'Question',
      name: 'What ice cream cup sizes are available in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Chill range lists 4oz, 5oz, 8oz and 12oz cups at 20 × 50 per case. Mooch covers 8oz and 12oz at 1,000 per case. Mix pastels are 5oz at 32 × 25. Swirly is an 8oz PE paper cup (90mm) at 20 × 50. An 8oz Chill PE 245ml line is also listed at 24 × 25.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are ice cream cups the same as cold cups?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Ice cream cups are a dedicated dessert format for scoops, soft serve and gelato. Cold Cups & Lids cover Chill paper drink cups and rPET juice cups with matching lids. Many Irish counters stock both ranges.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I buy ice cream cups or food cones?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Choose ice cream cups when the serve needs a stable paper cup for scoops, sundaes or takeaway lids at the counter. Choose Food Cones when the serve is a hand-held crepe or chip-style cone. PrintNPack lists both categories in plain packaging.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you deliver ice cream cups to Dublin, Cork and Galway?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. PrintNPack delivers Ice Cream Cups to Dublin, Cork, Galway and every Irish county from Ashbourne. Local buyers can also collect from Co. Meath.',
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
      name: 'Ice Cream Cups Ireland Buying Guide',
      item: PAGE_URL,
    },
  ],
};

const sizeRows = [
  {
    size: '4oz Chill',
    code: '109549',
    pack: '20 × 50',
    use: 'Kids scoops, tasting cups and small soft-serve',
  },
  {
    size: '5oz Chill',
    code: '109550',
    pack: '20 × 50',
    use: 'Single scoop and café dessert portions',
  },
  {
    size: '5oz mix pastels',
    code: '100306',
    pack: '32 × 25',
    use: 'Colourful counter displays and kids ice cream',
  },
  {
    size: '8oz Chill',
    code: '109551',
    pack: '20 × 50',
    use: 'Double scoop, soft serve and takeaway gelato',
  },
  {
    size: '8oz Chill PE 245ml',
    code: '100260',
    pack: '24 × 25',
    use: 'PE-lined 8oz Chill cups for wetter soft-serve runs',
  },
  {
    size: '8oz Mooch',
    code: '1095522',
    pack: '1,000',
    use: 'High-volume 8oz dessert counters',
  },
  {
    size: '8oz Swirly PE',
    code: '120140',
    pack: '20 × 50',
    use: '90mm Swirly paper cup for soft-serve counters',
  },
  {
    size: '12oz Chill',
    code: '109552',
    pack: '20 × 50',
    use: 'Large scoops, sundaes and sharing desserts',
  },
  {
    size: '12oz Mooch',
    code: '1095523',
    pack: '1,000',
    use: 'High-volume large dessert and sundae service',
  },
];

export default function IceCreamCupsIrelandSizesBuyingGuide() {
  const title =
    'Ice Cream Cups Ireland: 4–12oz Chill, Mooch & Pastels Wholesale Buying Guide';
  const description =
    'Buy ice cream cups in Ireland with confidence — plain Chill 4–12oz, Mooch 8oz and 12oz, mix pastels and Swirly 8oz, case packs, tiered wholesale pricing, and delivery to Dublin, Cork, Galway and nationwide from Ashbourne.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="ice cream cups ireland, chill ice cream cups wholesale ireland, gelato cups ireland, soft serve cups dublin, 8oz ice cream cups ireland, 12oz ice cream cups wholesale, ice cream packaging cork, plain dessert cups galway, ice cream cups ashbourne, takeaway ice cream cups ireland"
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
          content="Ice cream cups Ireland — 8oz Chill plain cups wholesale for Dublin gelato bars"
        />
        <meta property="article:published_time" content="2026-11-11" />

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
          <span className="text-slate-900">Ice Cream Cups Ireland</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            Wholesale Guide
          </span>
          <span className="text-slate-400 text-sm">11 Nov 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Ice Cream Cups Ireland: 4–12oz Chill, Mooch &amp; Pastels Wholesale Buying
          Guide
        </h1>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="relative rounded-2xl overflow-hidden h-48 col-span-2 bg-slate-50">
            <Image
              src={HERO_IMAGE}
              alt="Ice cream cups Ireland — 8oz Chill plain cups wholesale for Dublin gelato bars"
              fill
              className="object-contain p-4"
              priority
              sizes="(max-width: 768px) 66vw, 512px"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={FOUR_IMAGE}
                alt="4oz Chill ice cream cups Ireland — small scoop cups wholesale for Cork kids counters"
                fill
                className="object-contain p-2"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={TWELVE_IMAGE}
                alt="12oz Chill ice cream cups Ireland — large sundae cups wholesale for Galway dessert bars"
                fill
                className="object-contain p-2"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Soft-serve vans, gelato bars and café dessert counters need cups that match the scoop —
            not a drink cup pressed into dessert service. PrintNPack stocks plain{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              Ice Cream Cups
            </Link>{' '}
            as warehouse lines — Chill from{' '}
            <Link href={FOUR_OZ_HREF} className="text-blue-600 hover:underline">
              4oz
            </Link>{' '}
            to{' '}
            <Link href={TWELVE_OZ_HREF} className="text-blue-600 hover:underline">
              12oz
            </Link>
            , plus Mooch, mix pastels and Swirly — with tiered wholesale pricing and dispatch from
            Ashbourne to Dublin, Cork, Galway and nationwide.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            This guide covers which size to stock, how Chill differs from Mooch and pastels, when to
            reach for cold drink cups or food cones instead, and how case packs work for Irish dessert
            kitchens. For the wider plain range, see our{' '}
            <Link
              href="/blog/plain-packaging-wholesale-ireland"
              className="text-blue-600 hover:underline"
            >
              plain packaging wholesale Ireland
            </Link>{' '}
            overview.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Who buys ice cream cups wholesale in Ireland?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Typical buyers include gelato and ice cream shops in Dublin and Cork, seaside soft-serve
            counters, hotel and leisure dessert stations, café brunch spots packing ice cream for
            collection, cinema and leisure venues running popcorn-and-scoop deals, and multi-site groups
            that want one dessert-cup family across branches without managing print artwork.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            If the serve is a cold drink — iced coffee, juice or smoothie — you want{' '}
            <Link
              href="/blog/cold-cups-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              cold cups and lids
            </Link>
            , not an ice cream cup. Choose Ice Cream Cups when the product is scoops, soft serve or
            gelato and the cup is the dessert vessel itself.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Dublin and Galway sites that run both a drinks counter and a dessert counter often keep
            Chill ice cream cups sealed beside the freezer and Cold Cups &amp; Lids on the drink station.
            That split stops drink cups being burned through on scoops, and it keeps the dry-store plan
            honest when you reorder from Ashbourne.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Ice cream cup sizes — Chill, Mooch, pastels and Swirly
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            The Chill family is the everyday size ladder: <strong>4oz</strong>, <strong>5oz</strong>,{' '}
            <strong>8oz</strong> and <strong>12oz</strong>, each listed at <strong>20 × 50</strong> per
            case (1,000 cups). Use 4oz for kids and tasting; 5oz for a single scoop; 8oz for double scoop
            and soft serve; 12oz for large scoops and sundaes. Product pages:{' '}
            <Link href={FOUR_OZ_HREF} className="text-blue-600 hover:underline">
              4oz Chill
            </Link>
            ,{' '}
            <Link href={FIVE_OZ_HREF} className="text-blue-600 hover:underline">
              5oz Chill
            </Link>
            ,{' '}
            <Link href={EIGHT_OZ_HREF} className="text-blue-600 hover:underline">
              8oz Chill
            </Link>{' '}
            and{' '}
            <Link href={TWELVE_OZ_HREF} className="text-blue-600 hover:underline">
              12oz Chill
            </Link>
            .
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            A separate <strong>8oz Chill PE (245ml)</strong> line packs at <strong>24 × 25</strong> — see{' '}
            <Link href={PE_8_HREF} className="text-blue-600 hover:underline">
              8oz Chill Ice Cream Cups PE
            </Link>
            . Mooch covers high-volume <strong>8oz</strong> and <strong>12oz</strong> at{' '}
            <strong>1,000 per case</strong> (
            <Link href={MOOCH_8_HREF} className="text-blue-600 hover:underline">
              8oz Mooch
            </Link>
            ,{' '}
            <Link href={MOOCH_12_HREF} className="text-blue-600 hover:underline">
              12oz Mooch
            </Link>
            ).{' '}
            <Link href={PASTELS_HREF} className="text-blue-600 hover:underline">
              5oz mix pastels
            </Link>{' '}
            pack at <strong>32 × 25</strong> for colourful kids counters.{' '}
            <Link href={SWIRLY_HREF} className="text-blue-600 hover:underline">
              Swirly 8oz PE (90mm)
            </Link>{' '}
            is listed at <strong>20 × 50</strong> for soft-serve counters that want that cup style.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Four-tier volume pricing applies on each product page — more cases lower the price per case.
            We do not reprint unit rates here; always check the live tier table under{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              Ice Cream Cups
            </Link>{' '}
            before you consolidate an Ashbourne order.
          </p>

          <div className="overflow-x-auto mb-8 not-prose">
            <table className="min-w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
              <thead className="bg-slate-50 text-left">
                <tr>
                  <th className="px-4 py-3 font-semibold text-slate-900">Size / line</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">Code</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">Case pack</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">Typical use</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {sizeRows.map((row) => (
                  <tr key={row.code}>
                    <td className="px-4 py-3 text-slate-900 font-medium">{row.size}</td>
                    <td className="px-4 py-3 text-slate-700">{row.code}</td>
                    <td className="px-4 py-3 text-slate-700">{row.pack}</td>
                    <td className="px-4 py-3 text-slate-700">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Ice cream cups vs cold cups vs food cones
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Ice cream cups are a dedicated dessert format. Browse{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              Ice Cream Cups
            </Link>{' '}
            when scoops or soft serve leave the freezer in a paper cup. Cold drink packaging lives under{' '}
            <Link href={COLD_CUPS_HREF} className="text-blue-600 hover:underline">
              Cold Cups &amp; Lids
            </Link>{' '}
            — Chill paper drink cups and Greenspirit rPET juice cups with flat or dome lids. See the{' '}
            <Link
              href="/blog/cold-cups-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              cold cups sizes guide
            </Link>{' '}
            when the serve is a drink, not a dessert.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Hand-held cone service is a different category again. PrintNPack lists{' '}
            <Link href={FOOD_CONES_HREF} className="text-blue-600 hover:underline">
              Food Cones
            </Link>{' '}
            (including white crepe cones) for crepe and cone-style counters. Keep cones for hand-held
            serves and ice cream cups for scoop and sundae service that needs a stable base on the
            counter or in a takeaway bag.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Many Cork and Dublin dessert kitchens stock Chill 5oz and 8oz for everyday scoops, 12oz for
            sundae specials, and a cold-cup line for milkshakes — three formats, one Ashbourne order —
            rather than forcing one cup to do every job.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-8 not-prose">
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={PASTELS_IMAGE}
                alt="5oz mix pastels ice cream cups Ireland — colourful scoop cups wholesale Dublin kids counters"
                fill
                className="object-contain p-3"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={COLD_CUP_IMAGE}
                alt="Cold cups Ireland — Chill drink cups vs ice cream dessert cups wholesale Cork"
                fill
                className="object-contain p-3"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Plain wholesale stock vs custom printed cups
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Every ice cream cup line in this guide is <strong>plain wholesale warehouse stock</strong> —
            ordered by the case, with no artwork proof and no custom-print minimum. That keeps restocking
            fast for Ashbourne collection or nationwide dispatch when a sunny weekend empties the dry
            store.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            If you need your gelato logo on every cup, that is a different project from stocking Chill or
            Mooch. Most Irish dessert kitchens pair plain ice cream cups with branded napkins, stickers
            or outer bags for the brand touch, and keep the cup itself as the warehouse SKU. Custom hot
            cups are covered separately in the{' '}
            <Link
              href="/blog/custom-printed-coffee-cups-ireland-sizes-moq-buying-guide"
              className="text-blue-600 hover:underline"
            >
              custom printed coffee cups guide
            </Link>
            ; ice cream cups here stay plain.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Case packs, MOQ and how pricing works
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Chill 4–12oz and Swirly 8oz sell at <strong>20 × 50</strong> per case. Mix pastels pack at{' '}
            <strong>32 × 25</strong>. The 8oz Chill PE 245ml line packs at <strong>24 × 25</strong>.
            Mooch 8oz and 12oz sell at <strong>1,000 per case</strong>. All lines use{' '}
            <strong>four-tier volume pricing</strong>. There is no custom-print MOQ because these are
            warehouse stock.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            A single-site gelato counter often starts on 1–3 cases of the hero size (usually 5oz or 8oz)
            plus a smaller case of 4oz or 12oz. Multi-site groups consolidate cups with wooden ice cream
            spades and cold-cup lids into higher tiers on one Ashbourne order. Always check the live tier
            table on{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              Ice Cream Cups
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            What to order alongside ice cream cups
          </h2>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
            <li>
              <Link
                href="/blog/wooden-cutlery-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                Wooden cutlery
              </Link>{' '}
              — including Greenspirit wooden ice cream spades under{' '}
              <Link href={CUTLERY_HREF} className="text-blue-600 hover:underline">
                Cutlery &amp; Stirrers
              </Link>
            </li>
            <li>
              <Link
                href="/blog/cold-cups-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                Cold cups and lids
              </Link>{' '}
              for milkshakes and juice beside the dessert counter
            </li>
            <li>
              <Link
                href="/blog/portion-pots-ireland-pp-vs-paper-buying-guide"
                className="text-blue-600 hover:underline"
              >
                Portion pots
              </Link>{' '}
              for sauces, toppings and dessert add-ons
            </li>
            <li>
              <Link
                href="/blog/sos-grab-bags-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                SOS grab bags
              </Link>{' '}
              for sealed takeaway of filled cups
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-8">
            Pairing Chill cups, wooden ice cream spades and grab bags on one dispatch keeps Dublin and
            nationwide dessert counters ready for warm-weekend peaks without a mid-Saturday emergency
            run.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-8 not-prose">
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={FIVE_IMAGE}
                alt="5oz Chill ice cream cups Ireland — single scoop cups wholesale Ashbourne"
                fill
                className="object-contain p-3"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={SPADE_IMAGE}
                alt="Wooden ice cream spade Ireland — Greenspirit 95mm spade for Dublin gelato counters"
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
            with nationwide dispatch for Cork, Galway, Limerick and every other county. Ice cream cup
            orders move as warehouse stock, not made-to-print jobs. Local buyers who can collect often
            combine Ice Cream Cups with cutlery and cold cups on one Ashbourne pickup.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Warm weekends and school-holiday afternoons are where dessert-cup stockouts show —
            improvising with oversized drink cups slows the pass and looks wrong on a gelato counter.
            Plan case counts around your busiest scoop days, not a quiet midweek average.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            UK or Europe shipping is only confirmed case-by-case on request; this guide focuses on Irish
            wholesale delivery, which is the core service for Ice Cream Cups.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How to order ice cream cups in Ireland
          </h2>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-8">
            <li>Confirm the serve is scoops or soft serve — not a cold drink that needs lids</li>
            <li>Open Ice Cream Cups and pick Chill 4–12oz, Mooch, pastels or Swirly</li>
            <li>Match case packs to volume — 20 × 50 Chill lines vs 1,000 Mooch cases</li>
            <li>Add wooden ice cream spades, cold cups or SOS bags if one delivery can cover them</li>
            <li>Watch the four-tier volume pricing on each product page</li>
            <li>Take nationwide delivery or collect from Ashbourne, Co. Meath</li>
          </ol>

          <div className="bg-slate-900 rounded-xl p-6 mb-8 text-white not-prose">
            <p className="font-semibold mb-1">Ready to restock ice cream cups?</p>
            <p className="text-slate-400 text-sm mb-4">
              Plain Chill, Mooch, pastels and Swirly cups by the case — tiered wholesale pricing,
              delivered across Ireland from Ashbourne.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={HUB_HREF}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Shop Ice Cream Cups →
              </Link>
              <Link
                href={EIGHT_OZ_HREF}
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                View 8oz Chill Cups
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
                q: 'Where can I buy ice cream cups wholesale in Ireland?',
                a: 'PrintNPack stocks plain Ice Cream Cups by the case — Chill 4oz to 12oz, Mooch 8oz and 12oz, mix pastels and Swirly 8oz — with tiered wholesale pricing from Ashbourne to Dublin, Cork, Galway and nationwide.',
              },
              {
                q: 'What ice cream cup sizes are available?',
                a: 'Chill lists 4oz, 5oz, 8oz and 12oz at 20 × 50 per case, plus an 8oz Chill PE 245ml at 24 × 25. Mooch covers 8oz and 12oz at 1,000 per case. Mix pastels are 5oz at 32 × 25. Swirly is an 8oz PE paper cup (90mm) at 20 × 50.',
              },
              {
                q: 'Are ice cream cups the same as cold cups?',
                a: 'No. Ice cream cups are a dessert format for scoops and soft serve. Cold Cups & Lids cover drink cups and juice cups with matching lids. Stock both when you run desserts and drinks.',
              },
              {
                q: 'Should I buy ice cream cups or food cones?',
                a: 'Use ice cream cups for scoop and sundae service that needs a stable paper cup. Use Food Cones for hand-held crepe or cone-style serves.',
              },
              {
                q: 'Do you deliver ice cream cups to Dublin, Cork and Galway?',
                a: 'Yes. We deliver Ice Cream Cups to Dublin, Cork, Galway and all Irish counties, with collection available from Ashbourne, Co. Meath.',
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
              href: '/blog/cold-cups-ireland-sizes-buying-guide',
              src: COLD_CUP_IMAGE,
              title: 'Cold Cups Ireland: Chill Paper & rPET Juice Sizes Buying Guide',
            },
            {
              href: '/blog/wooden-cutlery-ireland-sizes-buying-guide',
              src: CUTLERY_IMAGE,
              title: 'Wooden Cutlery Ireland: Chip Forks, Sets & Wholesale Buying Guide',
            },
            {
              href: '/blog/portion-pots-ireland-pp-vs-paper-buying-guide',
              src: '/images/plain-packaging/10841.webp',
              title: 'Portion Pots Ireland: PP Clear vs Paper, 1–4oz & Lids Buying Guide',
            },
            {
              href: '/blog/plain-packaging-wholesale-ireland',
              src: '/images/plain-packaging/100396.webp',
              title: 'Plain Packaging Wholesale Ireland: Catering Supplies in Bulk',
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
