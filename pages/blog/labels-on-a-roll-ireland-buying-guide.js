import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/labels-on-a-roll-ireland-buying-guide`;
const HERO_IMAGE =
  '/images/products/labels-on-a-roll/labels-on-a-roll-ireland-round-jar-product-label.png';
const DISPENSER_IMAGE =
  '/images/products/labels-on-a-roll/labels-on-a-roll-ireland-dispenser-box-square-round.png';
const TRANSPARENT_IMAGE =
  '/images/products/labels-on-a-roll/labels-on-a-roll-ireland-pvc-transparent-cafe-dispenser.webp';
const STICKER_IMAGE = '/ifa/product/vinylstk/Vinyl-Decals-_-Stickers.jpg';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Labels on a Roll Ireland: Shapes, Materials, Dispensers & Buying Guide',
  description:
    'A practical buying guide to custom labels on a roll in Ireland — round jar labels, glossy PP vs matt vs NatureFlex, dispenser boxes, roll winding and cores, with delivery from Ashbourne to Dublin, Cork, Galway and nationwide.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-09-17',
  dateModified: '2026-09-17',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I order labels on a roll in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack prints custom labels on a roll in Ashbourne, Co. Meath and delivers nationwide — including Dublin, Cork, Galway and every county. Configure shape, size and material on the labels on a roll product page, then request a quotation.',
      },
    },
    {
      '@type': 'Question',
      name: 'What label shapes and sizes are available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Round, square, rectangle and oval labels in 10, 20, 30, 40, 50, 60, 70, 75, 80 and 100 mm. Rectangle and oval use a separate width and height from that list.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which label material should I choose?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Glossy PP is the recommended polypropylene option for most product and jar labels. Matt polypropylene gives a quieter finish. NatureFlex White is the biodegradable face stock. Appearance options include white film, transparent, paper and special.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you supply labels with a dispenser box?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. You can order labels on a roll with no dispenser, or with a dispenser per roll — useful for café counters, packing benches and workplaces that peel labels throughout the day.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you deliver custom roll labels to Dublin, Cork and Galway?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. PrintNPack delivers printed labels on a roll throughout Ireland from Ashbourne, including Dublin, Cork, Galway, Limerick and nationwide courier. Local buyers can also arrange collection.',
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
      name: 'Labels on a Roll Ireland Buying Guide',
      item: PAGE_URL,
    },
  ],
};

const sizeRows = [
  {
    size: '10–30 mm',
    shape: 'Round / square',
    use: 'Small lids, seals, sample jars and mini product stickers',
  },
  {
    size: '40–60 mm',
    shape: 'Round / oval',
    use: 'Everyday jar and bottle product labels for food and drink',
  },
  {
    size: '70–80 mm',
    shape: 'Round / square',
    use: 'Larger lids, gift jars and retail face panels',
  },
  {
    size: '100 mm',
    shape: 'Round / rectangle',
    use: 'Bold pack fronts, thank-you stickers and promotional labels',
  },
];

const materialRows = [
  {
    material: 'Glossy PP',
    look: 'Recommended polypropylene',
    best: 'Most product, jar and café labels — durable film finish',
  },
  {
    material: 'Matt polypropylene',
    look: 'Subtle, low-glare',
    best: 'Premium retail, cosmetics and quieter brand packaging',
  },
  {
    material: 'NatureFlex White',
    look: 'Biodegradable face stock',
    best: 'Eco-led food and gift brands that want a compostable-leaning option',
  },
];

export default function LabelsOnARollIrelandBuyingGuide() {
  const title =
    'Labels on a Roll Ireland: Shapes, Materials, Dispensers & Buying Guide';
  const description =
    'How to buy custom labels on a roll in Ireland — round jar labels, glossy PP vs matt vs NatureFlex, dispenser boxes, roll winding and cores, with nationwide delivery from Ashbourne.';
  const keywords =
    'labels on a roll Ireland, custom roll labels Ireland, printed jar labels Dublin, product labels Ireland, PVC transparent labels Ireland, label dispenser Ireland, NatureFlex labels Ireland, round stickers on a roll Cork, roll labels Galway, labels Ashbourne';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
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
          content="Labels on a roll Ireland — custom round jar product label"
        />
        <meta property="article:published_time" content="2026-09-17" />

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
          <span className="text-slate-900">Labels on a Roll Ireland</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            Retail Guide
          </span>
          <span className="text-slate-400 text-sm">17 Sep 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Labels on a Roll Ireland: Shapes, Materials, Dispensers &amp; Buying Guide
        </h1>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="relative rounded-2xl overflow-hidden h-48 col-span-2 bg-slate-50">
            <Image
              src={HERO_IMAGE}
              alt="Labels on a roll Ireland — custom round jar product label for Dublin food packaging"
              fill
              className="object-contain p-4"
              priority
              sizes="(max-width: 768px) 66vw, 512px"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={DISPENSER_IMAGE}
                alt="Label dispenser box Ireland — square and round printed roll labels Cork retail"
                fill
                className="object-contain p-2"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={TRANSPARENT_IMAGE}
                alt="Transparent PVC labels on a roll Ireland — branded café dispenser stickers Galway"
                fill
                className="object-contain p-2"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Custom labels on a roll are how Irish cafés, food producers, bakeries and shops put a
            finished brand on jars, bottles, lids and packs — without ordering loose sticker sheets
            that slow packing down. Get the shape or film wrong and labels lift, look cheap on glass,
            or jam a dispenser. Get the roll winding and core wrong and applying labels becomes a daily
            frustration.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            This guide explains how to buy{' '}
            <Link href="/labels-on-a-roll" className="text-blue-600 hover:underline">
              custom labels on a roll in Ireland
            </Link>{' '}
            — which sizes suit jar and product work, how glossy PP, matt polypropylene and NatureFlex
            White differ, when a dispenser box is worth it, and how PrintNPack ships from Ashbourne to
            Dublin, Cork, Galway and nationwide.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            What labels on a roll are — and who buys them in Ireland
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Roll labels are printed stickers wound on a core so you peel them in sequence at a counter,
            packing bench or light production line. PrintNPack offers round, square, rectangle and oval
            shapes from 10 mm to 100 mm, full colour printing, optional dispenser per roll, roll
            winding at 0°, 90°, 180° or 270°, and a 40 mm or 76 mm core.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Typical Irish buyers include cafés and coffee shops, bakeries and delis, food and drink
            producers, pet shops and retailers, e-commerce brands, and workplaces that need caution or
            thank-you stickers ready to peel. If you need cut-to-shape window or vehicle graphics
            instead, see our{' '}
            <Link href="/blog/custom-vinyl-stickers-ireland" className="text-blue-600 hover:underline">
              custom vinyl stickers Ireland guide
            </Link>{' '}
            — that is a different product family.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Label sizes Ireland — match the jar or pack, not a guess
          </h2>
          <div className="relative rounded-2xl overflow-hidden h-56 bg-slate-50 mb-6 not-prose">
            <Image
              src={HERO_IMAGE}
              alt="Round jar labels Ireland Ashbourne — printed product labels for food packaging"
              fill
              className="object-contain p-8"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </div>
          <p className="text-slate-700 leading-relaxed mb-4">
            Available sizes are 10, 20, 30, 40, 50, 60, 70, 75, 80 and 100 mm. Rectangle and oval labels
            use a separate width and height from that list. Measure the flat area on your lid, bottle
            or box before you quote — a 50 mm round is the common jar sweet spot for many Irish food
            packs.
          </p>
          <div className="overflow-x-auto my-6 not-prose">
            <table className="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">Size band</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">Typical shapes</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">Best for</th>
                </tr>
              </thead>
              <tbody>
                {sizeRows.map((row, i) => (
                  <tr key={row.size} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="px-4 py-3 font-medium text-slate-900 whitespace-nowrap">
                      {row.size}
                    </td>
                    <td className="px-4 py-3 text-slate-600">{row.shape}</td>
                    <td className="px-4 py-3 text-slate-600">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-700 leading-relaxed mb-8">
            Round labels dominate jar lids and bottle faces. Square and rectangle suit boxes, bags and
            promotional stickers. Oval works well on curved bottles where a hard square corner would
            lift. Configure the exact size in the quote builder on the product page — quotations are
            based on your chosen options rather than a fixed public price list.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Materials and appearance — glossy PP, matt or NatureFlex
          </h2>
          <div className="relative rounded-2xl overflow-hidden h-56 bg-slate-50 mb-6 not-prose">
            <Image
              src={TRANSPARENT_IMAGE}
              alt="Transparent film labels on a roll Ireland — white film and clear café stickers"
              fill
              className="object-contain p-6"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </div>
          <p className="text-slate-700 leading-relaxed mb-4">
            Material appearance options are white film, transparent, paper and special. Face materials
            are glossy PP, matt polypropylene and NatureFlex White. Printing is full colour on all
            configurations.
          </p>
          <div className="overflow-x-auto my-6 not-prose">
            <table className="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">Material</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">Finish</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">Best for</th>
                </tr>
              </thead>
              <tbody>
                {materialRows.map((row, i) => (
                  <tr key={row.material} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="px-4 py-3 font-medium text-slate-900 whitespace-nowrap">
                      {row.material}
                    </td>
                    <td className="px-4 py-3 text-slate-600">{row.look}</td>
                    <td className="px-4 py-3 text-slate-600">{row.best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-700 leading-relaxed mb-8">
            White film is the recommended default for most product branding. Transparent film suits
            café lids and packaging where you want the pack colour to show through. Paper face stock
            suits softer retail looks. Pair roll labels with other branded pack elements such as{' '}
            <Link
              href="/blog/custom-printed-tissue-paper-ireland-buying-guide"
              className="text-blue-600 hover:underline"
            >
              custom printed tissue paper
            </Link>{' '}
            or{' '}
            <Link href="/blog/paper-bags-with-logo-ireland" className="text-blue-600 hover:underline">
              paper bags with logo
            </Link>{' '}
            when you want a full unboxing stack.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Dispenser, roll winding and core — the practical options
          </h2>
          <div className="relative rounded-2xl overflow-hidden h-56 bg-slate-50 mb-6 not-prose">
            <Image
              src={DISPENSER_IMAGE}
              alt="Labels on a roll with dispenser Ireland — square and round stickers for retail packing"
              fill
              className="object-contain p-6"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-4 mb-6 not-prose">
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
              <p className="font-bold text-slate-900 mb-3">No dispenser</p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex gap-2">
                  <span className="text-slate-400">→</span>Roll only — store on a spindle or shelf
                </li>
                <li className="flex gap-2">
                  <span className="text-slate-400">→</span>Best when you already have an applicator
                </li>
                <li className="flex gap-2">
                  <span className="text-slate-400">→</span>Suits warehouses and production lines
                </li>
              </ul>
            </div>
            <div className="bg-amber-50 rounded-xl p-5 border border-amber-200">
              <p className="font-bold text-slate-900 mb-3">Dispenser per roll</p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex gap-2">
                  <span className="text-amber-600">→</span>Recommended for café and retail counters
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600">→</span>Peel cleanly throughout the day
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600">→</span>Ideal for thank-you and product stickers
                </li>
              </ul>
            </div>
          </div>
          <p className="text-slate-700 leading-relaxed mb-8">
            Choose roll winding (0°, 90°, 180° or 270°) so labels present the right way when peeled —
            important if you apply by hand in a fixed direction. Core diameter is 40 mm (recommended
            for most counter rolls) or 76 mm for larger industrial cores. Minimum order quantity starts
            from one configured roll quote; request pricing through the product page builder rather
            than relying on a published per-unit list.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Delivery across Ireland from Ashbourne
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            PrintNPack produces labels on a roll in Ashbourne, Co. Meath — convenient for Dublin and
            Meath collections, with nationwide dispatch for Cork, Galway, Limerick and every other
            county. Food producers and cafés across Ireland use the same quote path: set shape, size,
            appearance, material, dispenser, winding and core, then submit for a quotation.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Roll labels sit alongside other PrintNPack branding tools —{' '}
            <Link href="/blog/custom-vinyl-stickers-ireland" className="text-blue-600 hover:underline">
              vinyl stickers and decals
            </Link>
            ,{' '}
            <Link
              href="/blog/luxury-magnetic-closure-boxes-ireland-buying-guide"
              className="text-blue-600 hover:underline"
            >
              luxury magnetic closure boxes
            </Link>
            , and tissue or bags for gift finishes — so one supplier can cover pack labels and the
            packaging that surrounds them.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How to order labels on a roll in Ireland
          </h2>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-8">
            <li>Measure the flat area on your jar, bottle, lid or box</li>
            <li>Pick round, square, rectangle or oval — then a size from 10 mm to 100 mm</li>
            <li>Choose appearance (white film, transparent, paper or special) and material</li>
            <li>Add a dispenser per roll if staff peel labels all day at the counter</li>
            <li>Confirm roll winding and 40 mm or 76 mm core for how you apply labels</li>
            <li>Request a quote and take delivery nationwide or collect from Ashbourne</li>
          </ol>

          <div className="bg-slate-900 rounded-xl p-6 mb-8 text-white not-prose">
            <p className="font-semibold mb-1">Ready to quote labels on a roll?</p>
            <p className="text-slate-400 text-sm mb-4">
              Custom round jar labels, transparent film rolls and dispenser boxes — printed in
              Ashbourne and delivered across Ireland.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/labels-on-a-roll"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Configure Labels on a Roll →
              </Link>
              <Link
                href="/vinyl-stickers"
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Browse Vinyl Stickers
              </Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6 not-prose">
            {[
              {
                q: 'Where can I order labels on a roll in Ireland?',
                a: 'PrintNPack prints custom labels on a roll in Ashbourne, Co. Meath and delivers nationwide — including Dublin, Cork, Galway and every county. Configure shape, size and material on the labels on a roll product page, then request a quotation.',
              },
              {
                q: 'What label shapes and sizes are available?',
                a: 'Round, square, rectangle and oval labels in 10, 20, 30, 40, 50, 60, 70, 75, 80 and 100 mm. Rectangle and oval use a separate width and height from that list.',
              },
              {
                q: 'Which label material should I choose?',
                a: 'Glossy PP is the recommended polypropylene option for most product and jar labels. Matt polypropylene gives a quieter finish. NatureFlex White is the biodegradable face stock. Appearance options include white film, transparent, paper and special.',
              },
              {
                q: 'Do you supply labels with a dispenser box?',
                a: 'Yes. You can order labels on a roll with no dispenser, or with a dispenser per roll — useful for café counters, packing benches and workplaces that peel labels throughout the day.',
              },
              {
                q: 'Do you deliver custom roll labels to Dublin, Cork and Galway?',
                a: 'Yes. PrintNPack delivers printed labels on a roll throughout Ireland from Ashbourne, including Dublin, Cork, Galway, Limerick and nationwide courier. Local buyers can also arrange collection.',
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
              href: '/blog/custom-vinyl-stickers-ireland',
              src: STICKER_IMAGE,
              title: 'Custom Vinyl Stickers Ireland: Materials, Uses & Ordering',
            },
            {
              href: '/blog/custom-printed-tissue-paper-ireland-buying-guide',
              src: '/images/products/custom-printed-tissue-paper/luxury-custom-printed-tissue-paper-black-gold-ireland.jpg',
              title: 'Custom Printed Tissue Paper Ireland: Ecommerce Unboxing Guide',
            },
            {
              href: '/blog/paper-bags-with-logo-ireland',
              src: '/images/products/twisted-handle-bags/1.png',
              title: 'Paper Bags with Logo Ireland: Retailers, Cafés & Food Businesses',
            },
            {
              href: '/blog/luxury-magnetic-closure-boxes-ireland-buying-guide',
              src: '/images/products/luxury-magnetic-closure-boxes/luxury-magnetic-closure-box-ireland-gold-foil.jpg',
              title: 'Luxury Magnetic Closure Boxes Ireland Buying Guide',
            },
          ].map(({ href, src, title: relatedTitle }) => (
            <Link
              key={href}
              href={href}
              className="group flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors"
            >
              <div className="relative w-16 h-14 flex-shrink-0 rounded-lg overflow-hidden">
                <Image src={src} alt={relatedTitle} fill className="object-cover" sizes="64px" />
              </div>
              <p className="text-sm font-medium text-slate-800 group-hover:text-blue-700 leading-snug">
                {relatedTitle}
              </p>
            </Link>
          ))}
        </div>
      </main>
    </Layout>
  );
}
