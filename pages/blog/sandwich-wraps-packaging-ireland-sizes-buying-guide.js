import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/sandwich-wraps-packaging-ireland-sizes-buying-guide`;
const HUB_HREF = '/plain-packaging?category=Sandwich+%26+Wraps';
const RPET_WEDGE_HREF =
  '/plain-packaging/deep-fill-hinged-sandwich-wedge-rpet-185x80x80mm-500-10802';
const RPET_WEDGE_PACK_HREF =
  '/plain-packaging/deep-fill-hinged-sandwich-wedge-rpet-185x80x80mm-10x50s-10802p';
const KRAFT_WEDGE_HREF = '/plain-packaging/kraft-deep-fill-sandwich-wedge-500s-10857';
const BAGUETTE_HREF = '/plain-packaging/kraft-baguette-with-film-1000s-10848';
const BLOOMER_HREF = '/plain-packaging/kraft-bloomer-with-film-1000s-10849';
const TORTILLA_CLEAR_HREF = '/plain-packaging/tortilla-clear-cont-with-hinged-lid-320s-10830';
const TORTILLA_KRAFT_HREF = '/plain-packaging/kraft-compostable-wraptortilla-pack-500-200026';
const WINDOW_MED_HREF =
  '/plain-packaging/medium-flat-kraft-compostable-windowed-bag-210x210-1000-200032';
const WINDOW_LG_HREF =
  '/plain-packaging/large-flat-kraft-compostable-windowed-bag-250x250-1000-200033';
const PLATTER_MED_HREF =
  '/plain-packaging/medium-kraft-platter-box-insert-compostable-window-25s-200035';
const PLATTER_LG_HREF =
  '/plain-packaging/large-kraft-platter-box-insert-compostable-window-25s-200036';

const HERO_IMAGE = '/images/plain-packaging/10802.webp';
const KRAFT_WEDGE_IMAGE = '/images/plain-packaging/10857.webp';
const WINDOW_IMAGE = '/images/plain-packaging/200032.webp';
const BAGUETTE_IMAGE = '/images/plain-packaging/10848.webp';
const TORTILLA_IMAGE = '/images/plain-packaging/10830.webp';
const PLATTER_IMAGE = '/images/plain-packaging/200035.webp';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Sandwich & Wraps Packaging Ireland: Wedges, Bags & Window Sizes Buying Guide',
  description:
    'A practical buying guide to plain sandwich and wraps packaging in Ireland — kraft and rPET deep-fill wedges, baguette and bloomer film packs, tortilla packs, windowed kraft bags, platter boxes, case packs, and nationwide wholesale delivery from Ashbourne.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-10-23',
  dateModified: '2026-10-23',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I buy sandwich and wraps packaging wholesale in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack stocks plain Sandwich & Wraps packaging by the case — kraft and rPET deep-fill wedges, baguette and bloomer film packs, tortilla packs, windowed kraft bags and platter boxes — with tiered wholesale pricing. Delivery from Ashbourne, Co. Meath to Dublin, Cork, Galway and nationwide.',
      },
    },
    {
      '@type': 'Question',
      name: 'What sandwich wedge options does PrintNPack stock in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Catalogue deep-fill wedges include a clear hinged rPET wedge at 185×80×80 mm (500 or 10×50 per case) and a kraft deep-fill sandwich wedge (500 per case). Match clear plastic when display matters and kraft when you want a fibre look.',
      },
    },
    {
      '@type': 'Question',
      name: 'What sizes are the kraft windowed sandwich bags?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Flat kraft compostable windowed bags are stocked in medium 210×210 mm and large 250×250 mm, both 1,000 per case. Use them for square sandwiches and wraps you want customers to see through the window.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are sandwich wedges the same as flat kraft food bags?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Wedges and film-window packs are shaped deli formats for sandwiches, baguettes and wraps. Flat kraft food bags are simple kraft sleeves for chips and general food wrap. Many Irish kitchens stock both.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you deliver sandwich packaging to Dublin, Cork and Galway?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. PrintNPack delivers Sandwich & Wraps lines to Dublin, Cork, Galway and every Irish county from Ashbourne. Local buyers can also collect from Co. Meath.',
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
      name: 'Sandwich & Wraps Packaging Ireland Buying Guide',
      item: PAGE_URL,
    },
  ],
};

const sizeRows = [
  {
    size: 'rPET deep-fill hinged wedge',
    dims: '185 × 80 × 80 mm',
    pack: '500 or 10 × 50 per case',
    use: 'Clear display of deep-fill sandwiches in chilled cabinets',
  },
  {
    size: 'Kraft deep-fill sandwich wedge',
    dims: 'Deep-fill kraft wedge',
    pack: '500 per case',
    use: 'Fibre look for takeaway wedges without a clear wall',
  },
  {
    size: 'Kraft baguette with film',
    dims: 'Baguette format',
    pack: '1,000 per case',
    use: 'Long filled baguettes with a film window',
  },
  {
    size: 'Kraft bloomer with film',
    dims: 'Bloomer format',
    pack: '1,000 per case',
    use: 'Wider bloomer sandwiches for deli counters',
  },
  {
    size: 'Tortilla clear hinged / kraft wrap',
    dims: 'Tortilla / wrap formats',
    pack: '320 clear or 500 kraft',
    use: 'Burritos, wraps and rolled fills',
  },
  {
    size: 'Windowed kraft bags',
    dims: '210 × 210 or 250 × 250 mm',
    pack: '1,000 per case',
    use: 'Square sandwiches and wraps with a compostable window',
  },
  {
    size: 'Kraft platter box & insert',
    dims: 'Medium or large',
    pack: '25 per case',
    use: 'Shared sandwich platters and catering trays with window',
  },
];

export default function SandwichWrapsPackagingIrelandSizesBuyingGuide() {
  const title = 'Sandwich & Wraps Packaging Ireland: Wedges, Bags & Window Sizes Buying Guide';
  const description =
    'Buy sandwich and wraps packaging in Ireland with confidence — kraft and rPET deep-fill wedges, baguette and bloomer film packs, tortilla packs, 210×210 and 250×250 mm windowed kraft bags, platter boxes, and delivery to Dublin, Cork, Galway and nationwide from Ashbourne.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="sandwich packaging ireland, sandwich wedges wholesale ireland, kraft sandwich bags dublin, wrap packaging cork, rPET sandwich wedge galway, windowed kraft bag ireland, baguette packaging ashbourne, deli sandwich packaging ireland, tortilla pack wholesale ireland, plain sandwich wraps ireland"
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
          content="Sandwich packaging Ireland — clear rPET deep-fill sandwich wedge wholesale for delis"
        />
        <meta property="article:published_time" content="2026-10-23" />

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
          <span className="text-slate-900">Sandwich &amp; Wraps Packaging Ireland</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            Wholesale Guide
          </span>
          <span className="text-slate-400 text-sm">23 Oct 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Sandwich &amp; Wraps Packaging Ireland: Wedges, Bags &amp; Window Sizes Buying Guide
        </h1>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="relative rounded-2xl overflow-hidden h-48 col-span-2 bg-slate-50">
            <Image
              src={HERO_IMAGE}
              alt="Sandwich packaging Ireland — clear rPET deep-fill sandwich wedge for Dublin delis"
              fill
              className="object-contain p-4"
              priority
              sizes="(max-width: 768px) 66vw, 512px"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={KRAFT_WEDGE_IMAGE}
                alt="Kraft sandwich wedge Ireland — deep-fill kraft wedge wholesale Cork"
                fill
                className="object-contain p-3"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={WINDOW_IMAGE}
                alt="Windowed kraft sandwich bag Ireland — 210 by 210 mm compostable bag Galway"
                fill
                className="object-contain p-3"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Delis in Dublin, café counters in Cork and festival wrap vans in Galway need packaging that
            holds a deep-fill wedge upright, shows the filling when it helps sell, and still looks tidy
            after a lunch rush. Plain sandwich and wraps packaging is the wholesale answer: hinged clear
            wedges for chilled display, kraft wedges and film packs for takeaway, windowed bags for
            square sandwiches, and platter boxes when the order is catering rather than a single serve.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            This guide covers <strong>sandwich and wraps packaging in Ireland</strong> as plain catering
            stock — <strong>kraft and rPET deep-fill wedges</strong>,{' '}
            <strong>baguette and bloomer film packs</strong>, <strong>tortilla packs</strong>,{' '}
            <strong>210 × 210 and 250 × 250 mm windowed kraft bags</strong>, platter boxes, case packs,
            and how{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              PrintNPack&apos;s Sandwich &amp; Wraps
            </Link>{' '}
            range works with tiered pricing and delivery from Ashbourne. Simple kraft food sleeves are a
            different category — see the{' '}
            <Link
              href="/blog/flat-kraft-food-bags-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              flat kraft food bags Ireland
            </Link>{' '}
            guide.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Why Irish delis buy plain sandwich packaging by the case
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Plain sandwich packs are warehouse stock: order by the case, no print proof, no brand MOQ.
            That suits Ashbourne cafés restocking wedges before a weekday lunch peak and Cork catering
            kitchens that need platter boxes beside everyday wraps. Branding can sit on napkins or
            carriers — the pack only has to protect the sandwich, travel from fridge to bag, and look
            right on the counter.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            PrintNPack holds Sandwich &amp; Wraps lines beside bags, trays and salad containers in the
            same plain packaging catalogue. Orders ship nationwide; local buyers can collect from
            Ashbourne, Co. Meath. For a broader view of bulk catering lines, see our{' '}
            <Link href="/blog/plain-packaging-wholesale-ireland" className="text-blue-600 hover:underline">
              plain packaging wholesale Ireland
            </Link>{' '}
            guide.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Sandwich and wraps formats at a glance
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Start with the format your menu uses most — often a <strong>deep-fill wedge</strong> for
            triangle sandwiches — then add baguette or bloomer film packs for longer breads, tortilla
            packs for wraps, and windowed bags when you want a flat kraft look with a view of the fill.
            Confirm the case count on each product page.
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
              src={BAGUETTE_IMAGE}
              alt="Kraft baguette packaging Ireland — film window baguette pack wholesale Ashbourne"
              fill
              className="object-contain p-6"
              sizes="(max-width: 768px) 100vw, 720px"
            />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Deep-fill sandwich wedges — clear rPET vs kraft
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Chilled cabinets sell better when customers can see the filling. The{' '}
            <Link href={RPET_WEDGE_HREF} className="text-blue-600 hover:underline">
              Deep Fill Hinged Sandwich Wedge rPET (185 × 80 × 80 mm)
            </Link>{' '}
            packs <strong>500 per case</strong>, with an alternate case as{' '}
            <Link href={RPET_WEDGE_PACK_HREF} className="text-blue-600 hover:underline">
              10 × 50
            </Link>{' '}
            when you prefer smaller inners. When you want a kraft fibre look instead of clear plastic,
            the{' '}
            <Link href={KRAFT_WEDGE_HREF} className="text-blue-600 hover:underline">
              Kraft Deep Fill Sandwich Wedge
            </Link>{' '}
            also packs <strong>500 per case</strong>.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Dublin delis often run clear rPET on the fridge edge and kraft wedges for bagged takeaway.
            Cork and Galway counters that already use kraft bags sometimes keep kraft wedges only so the
            whole sandwich line matches. Confirm the live case pack before you quote a multi-site
            restock — volume tiers reward more cases on the same SKU.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Baguette and bloomer film packs
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Longer breads need a longer pack. The{' '}
            <Link href={BAGUETTE_HREF} className="text-blue-600 hover:underline">
              Kraft Baguette with Film
            </Link>{' '}
            and{' '}
            <Link href={BLOOMER_HREF} className="text-blue-600 hover:underline">
              Kraft Bloomer with Film
            </Link>{' '}
            both ship <strong>1,000 per case</strong>. Baguette suits slim filled sticks; bloomer suits
            a wider loaf cut. Film windows keep the fill visible without switching to a full clear
            plastic tub.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Festival vans and hotel grab-and-go in Ireland often keep both formats on one Ashbourne
            order so lunch menus can rotate bread shape without a second supplier. These are not the
            same as hinged meal boxes — if the food is hot plated takeaway, use a meal box or tray
            instead.
          </p>

          <div className="relative rounded-2xl overflow-hidden h-56 mb-8 bg-slate-50 not-prose">
            <Image
              src={TORTILLA_IMAGE}
              alt="Tortilla wrap packaging Ireland — clear hinged tortilla container wholesale for cafés"
              fill
              className="object-contain p-6"
              sizes="(max-width: 768px) 100vw, 720px"
            />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Tortilla and wrap packs
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Rolled wraps need a different footprint to a triangle wedge. The{' '}
            <Link href={TORTILLA_CLEAR_HREF} className="text-blue-600 hover:underline">
              Tortilla clear container with hinged lid
            </Link>{' '}
            packs <strong>320 per case</strong> for clear display. The{' '}
            <Link href={TORTILLA_KRAFT_HREF} className="text-blue-600 hover:underline">
              Kraft compostable wrap / tortilla pack
            </Link>{' '}
            packs <strong>500 per case</strong> when you prefer kraft presentation.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Match clear when the wrap is the hero of a chilled counter; match kraft when the wrap sits
            in a brown kraft bag line with your other plain packaging. Sealed salad bowls are a
            different format — covered in the{' '}
            <Link
              href="/blog/rpet-hinged-salad-containers-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              rPET hinged salad containers Ireland
            </Link>{' '}
            guide.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Windowed kraft bags — 210 × 210 and 250 × 250 mm
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Flat windowed bags suit square sandwiches and wraps that do not need a rigid wedge. The{' '}
            <Link href={WINDOW_MED_HREF} className="text-blue-600 hover:underline">
              Medium Flat Kraft Compostable Windowed Bag (210 × 210 mm)
            </Link>{' '}
            and{' '}
            <Link href={WINDOW_LG_HREF} className="text-blue-600 hover:underline">
              Large Flat Kraft Compostable Windowed Bag (250 × 250 mm)
            </Link>{' '}
            both pack <strong>1,000 per case</strong>. Step up to large when the sandwich footprint
            overcrowds the medium window.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            These are compostable-window kraft packs in Sandwich &amp; Wraps — not the unlined flat
            kraft food bags used for chips. Keep both categories if your kitchen wraps fries and
            sandwiches on the same service.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Kraft platter boxes for catering
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Shared trays need a different case size. The{' '}
            <Link href={PLATTER_MED_HREF} className="text-blue-600 hover:underline">
              Medium Kraft Platter Box &amp; Insert
            </Link>{' '}
            and{' '}
            <Link href={PLATTER_LG_HREF} className="text-blue-600 hover:underline">
              Large Kraft Platter Box &amp; Insert
            </Link>{' '}
            (compostable window) pack <strong>25 per case</strong> — smaller case counts for catering
            peaks rather than everyday single sandwiches.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Office lunch deliveries in Dublin and event catering in Cork often add one medium or large
            platter SKU beside wedge stock so one Ashbourne dispatch covers retail and catering.
          </p>

          <div className="relative rounded-2xl overflow-hidden h-56 mb-8 bg-slate-50 not-prose">
            <Image
              src={PLATTER_IMAGE}
              alt="Kraft platter box Ireland — medium sandwich catering tray with window wholesale"
              fill
              className="object-contain p-6"
              sizes="(max-width: 768px) 100vw, 720px"
            />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Case packs and wholesale pricing
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Wedges commonly pack at <strong>500</strong> (or <strong>10 × 50</strong> on the alternate
            rPET case). Baguette, bloomer and windowed bags pack denser at <strong>1,000</strong>.
            Tortilla clear packs <strong>320</strong>; kraft wrap packs <strong>500</strong>. Platter
            boxes sit at <strong>25</strong>. All use <strong>four-tier volume pricing</strong> — more
            cases lower the price per case. There is no custom-print MOQ on these plain lines.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Always check the live tier table on each product in{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              Sandwich &amp; Wraps
            </Link>
            . We do not reprint one-off unit rates here because case tiering is how wholesale pricing
            works. A single-site café often starts on 1–3 cases of wedges; multi-site groups consolidate
            wedges, window bags and a platter size into higher tiers on one order.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Sandwich packs vs flat kraft bags vs salad containers
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Sandwich wedges and film packs are shaped deli formats. Open{' '}
            <Link
              href="/blog/flat-kraft-food-bags-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              flat kraft food bags
            </Link>{' '}
            wrap chips and lighter food in a kraft sleeve. Hinged{' '}
            <Link
              href="/blog/rpet-hinged-salad-containers-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              rPET salad containers
            </Link>{' '}
            suit bowls and salads, not triangle sandwiches. Gusseted{' '}
            <Link
              href="/blog/sos-grab-bags-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              SOS grab bags
            </Link>{' '}
            carry sealed packs out the door.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Greaseproof sheets and lined kraft bags belong with oily wraps and chipper lines — see the{' '}
            <Link
              href="/blog/custom-greaseproof-sheets-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              custom greaseproof sheets Ireland
            </Link>{' '}
            guide when you need a liner rather than a sandwich wedge. This article stays on Sandwich
            &amp; Wraps formats only.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            What to order alongside sandwich and wraps packaging
          </h2>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
            <li>
              <Link
                href="/blog/sos-grab-bags-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                SOS grab bags
              </Link>{' '}
              for carry-out when the wedge is only the food pack
            </li>
            <li>
              <Link
                href="/blog/flat-kraft-food-bags-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                Flat kraft food bags
              </Link>{' '}
              for chips and bakery wraps beside the sandwich line
            </li>
            <li>
              <Link
                href="/blog/portion-pots-ireland-pp-vs-paper-buying-guide"
                className="text-blue-600 hover:underline"
              >
                Portion pots
              </Link>{' '}
              for sauces sold with wraps and baguettes
            </li>
            <li>
              <Link
                href="/blog/wooden-cutlery-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                Wooden cutlery
              </Link>{' '}
              when platter trays need forks on the side
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-8">
            Pairing wedges, window bags, SOS carriers and portion pots on one dispatch keeps Dublin and
            nationwide kitchens stocked before weekday lunch peaks.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Delivery across Ireland from Ashbourne
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            PrintNPack is based in Ashbourne, Co. Meath — convenient for Dublin and Meath collections,
            with nationwide dispatch for Cork, Galway, Limerick and every other county. Plain sandwich
            and wraps orders move quickly because they are warehouse stock, not made-to-print jobs.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            UK or Europe shipping is only confirmed case-by-case on request; this guide focuses on Irish
            wholesale delivery, which is the core service for these Sandwich &amp; Wraps lines.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How to order sandwich and wraps packaging in Ireland
          </h2>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-8">
            <li>List your busiest formats — deep-fill wedge, baguette/bloomer, tortilla, or windowed bag</li>
            <li>Decide clear rPET vs kraft for display versus takeaway look</li>
            <li>Note the case pack — 500 vs 1,000 vs 320 vs 25 — before estimating weekly burn</li>
            <li>Add SOS bags, portion pots or platter boxes if one delivery can cover the line</li>
            <li>Order by the case on Sandwich &amp; Wraps — watch the volume tiers</li>
            <li>Take nationwide delivery or collect from Ashbourne, Co. Meath</li>
          </ol>

          <div className="bg-slate-900 rounded-xl p-6 mb-8 text-white not-prose">
            <p className="font-semibold mb-1">Ready to restock sandwich and wraps packaging?</p>
            <p className="text-slate-400 text-sm mb-4">
              Kraft and rPET wedges, baguette packs, windowed bags and platter boxes — tiered wholesale
              pricing delivered across Ireland.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={HUB_HREF}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Shop Sandwich &amp; Wraps →
              </Link>
              <Link
                href={RPET_WEDGE_HREF}
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                View rPET Deep-Fill Wedge
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
                q: 'Where can I buy sandwich and wraps packaging wholesale in Ireland?',
                a: 'PrintNPack stocks plain Sandwich & Wraps packaging by the case — with tiered wholesale pricing from Ashbourne to Dublin, Cork, Galway and nationwide.',
              },
              {
                q: 'What sandwich wedge options are available in Ireland?',
                a: 'Deep-fill hinged rPET wedges at 185×80×80 mm (500 or 10×50) and kraft deep-fill sandwich wedges (500). Match clear plastic for display and kraft for a fibre takeaway look.',
              },
              {
                q: 'What sizes are the kraft windowed sandwich bags?',
                a: 'Medium 210×210 mm and large 250×250 mm flat kraft compostable windowed bags, both 1,000 per case.',
              },
              {
                q: 'Are sandwich wedges the same as flat kraft food bags?',
                a: 'No. Wedges and film-window packs are shaped deli formats; flat kraft food bags are simple kraft sleeves. Many Irish kitchens stock both.',
              },
              {
                q: 'Do you deliver sandwich packaging to Dublin, Cork and Galway?',
                a: 'Yes. We deliver Sandwich & Wraps lines to Dublin, Cork, Galway and all Irish counties, with collection available from Ashbourne, Co. Meath.',
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
              href: '/blog/flat-kraft-food-bags-ireland-sizes-buying-guide',
              src: '/images/plain-packaging/199962.webp',
              title: 'Flat Kraft Food Bags Ireland: 3lb–9QT Sizes & Wholesale Buying Guide',
            },
            {
              href: '/blog/sos-grab-bags-ireland-sizes-buying-guide',
              src: '/images/products/sos-bags/1.png',
              title: 'SOS Grab Bags Ireland: Sizes, Plain vs Printed & Wholesale Buying Guide',
            },
            {
              href: '/blog/rpet-hinged-salad-containers-ireland-sizes-buying-guide',
              src: '/images/plain-packaging/CTRD500.webp',
              title: 'rPET Hinged Salad Containers Ireland: Sizes & Wholesale Buying Guide',
            },
            {
              href: '/blog/portion-pots-ireland-pp-vs-paper-buying-guide',
              src: '/images/plain-packaging/120043.webp',
              title: 'Portion Pots Ireland: PP Clear vs Paper, 1–4oz & Lids Buying Guide',
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
