import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/bagasse-meal-boxes-ireland-sizes-buying-guide`;
const HUB_HREF = '/plain-packaging?category=Bagasse+Meal+Box';
const HERO_IMAGE = '/images/plain-packaging/120158.webp';
const NINE_IMAGE = '/images/plain-packaging/120026.webp';
const THREE_COMP_IMAGE = '/images/plain-packaging/120159.webp';
const TWO_COMP_IMAGE = '/images/plain-packaging/1206660.webp';
const BURGER_IMAGE = '/images/plain-packaging/1206653.webp';
const LUNCH_IMAGE = '/images/plain-packaging/120157.webp';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Bagasse Meal Boxes Ireland: Sizes, Compartments & Wholesale Buying Guide',
  description:
    'A practical buying guide to bagasse meal boxes in Ireland — 9×9, 8×8 HP4, 1/2/3-compartment options, lunch and burger sizes, case packs, and nationwide wholesale delivery from Ashbourne.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-09-24',
  dateModified: '2026-09-24',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I buy bagasse meal boxes wholesale in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack stocks plain compostable bagasse meal boxes by the case under the Bagasse Meal Box category — with tiered wholesale pricing and delivery from Ashbourne, Co. Meath to Dublin, Cork, Galway and nationwide.',
      },
    },
    {
      '@type': 'Question',
      name: 'What bagasse meal box sizes are available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Catalogue lines include the 9×9" meal box (2×100), 8×8" HP4 single and 3-compartment boxes (5×50), 9×6×2" 1000ml 1-comp and 2-comp boxes (5×50), 7" small rectangle (12×50), 6×4" small lunch box (20×50) and 6" bagasse burger box 15×15cm (8×50).',
      },
    },
    {
      '@type': 'Question',
      name: 'When should I choose 1-compartment vs 2 or 3-compartment bagasse boxes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use 1-compartment for mixed meals, pasta and bowls. Choose 2-compartment 9×6×2" when you need a protein and a side kept apart. Pick the 8×8" 3-compartment HP4 for set meals with three separated portions. Match compartment count to how the kitchen plates the dish, not to branding.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are bagasse meal boxes plain wholesale or custom printed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'These bagasse meal boxes are plain wholesale stock — no artwork proof and no custom-print minimum. Order by the case with four-tier volume pricing. For branded burger packaging, see eco bagasse burger boxes or the burger boxes Ireland hub.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you deliver bagasse meal boxes to Dublin, Cork and Galway?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. PrintNPack delivers bagasse meal boxes to Dublin, Cork, Galway and every Irish county from Ashbourne. Local buyers can also collect from Co. Meath.',
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
      name: 'Bagasse Meal Boxes Ireland Buying Guide',
      item: PAGE_URL,
    },
  ],
};

const sizeRows = [
  {
    size: '9×9" meal box',
    pack: '2 × 100 per case',
    use: 'Full takeaway meals, salad boxes and large portions',
  },
  {
    size: '8×8" HP4 (1-comp)',
    pack: '5 × 50 per case',
    use: 'Standard hot meals and tray-bake style takeaway',
  },
  {
    size: '8×8" HP4 3-comp',
    pack: '5 × 50 per case',
    use: 'Set meals with three separated sides or proteins',
  },
  {
    size: '9×6×2" 1000ml 1-comp',
    pack: '5 × 50 per case',
    use: 'Curries, pasta, rice bowls and saucy mains',
  },
  {
    size: '9×6×2" 1000ml 2-comp',
    pack: '5 × 50 per case',
    use: 'Protein plus side kept apart in one lid-ready tray',
  },
  {
    size: '7" small rectangle',
    pack: '12 × 50 per case',
    use: 'Smaller meals, kids portions and lighter lunch offers',
  },
  {
    size: '6×4" small lunch box',
    pack: '20 × 50 per case',
    use: 'Sandwiches, wraps and compact café lunch packs',
  },
  {
    size: '6" burger box 15×15cm',
    pack: '8 × 50 per case',
    use: 'Burgers, stacked sandwiches and snack boxes',
  },
];

export default function BagasseMealBoxesIrelandSizesBuyingGuide() {
  const title = 'Bagasse Meal Boxes Ireland: Sizes, Compartments & Wholesale Buying Guide';
  const description =
    'Buy bagasse meal boxes in Ireland with confidence — 9×9, 8×8 HP4, 1/2/3-compartment sizes, case packs, tiered wholesale pricing, and delivery to Dublin, Cork, Galway and nationwide from Ashbourne.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="bagasse meal boxes ireland, bagasse meal box wholesale, compostable meal boxes dublin, 8x8 bagasse HP4 ireland, 3 compartment bagasse box, bagasse lunch box cork, takeaway meal boxes galway, plain bagasse packaging ashbourne, sugarcane meal boxes ireland, wholesale bagasse containers"
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
          content="Bagasse meal boxes Ireland — 8×8 HP4 compostable takeaway trays wholesale"
        />
        <meta property="article:published_time" content="2026-09-24" />

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
          <span className="text-slate-900">Bagasse Meal Boxes Ireland</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            Wholesale Guide
          </span>
          <span className="text-slate-400 text-sm">24 Sep 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Bagasse Meal Boxes Ireland: Sizes, Compartments &amp; Wholesale Buying Guide
        </h1>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="relative rounded-2xl overflow-hidden h-48 col-span-2 bg-slate-50">
            <Image
              src={HERO_IMAGE}
              alt="Bagasse meal boxes Ireland — 8×8 HP4 compostable takeaway trays for Dublin kitchens"
              fill
              className="object-contain p-4"
              priority
              sizes="(max-width: 768px) 66vw, 512px"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={THREE_COMP_IMAGE}
                alt="3-compartment bagasse meal box Ireland — HP4 wholesale Cork Galway"
                fill
                className="object-contain p-2"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={BURGER_IMAGE}
                alt="6 inch bagasse burger box Ireland — compostable 15×15cm wholesale Ashbourne"
                fill
                className="object-contain p-2"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Bagasse meal boxes are the compostable workhorse for Irish takeaways that need a rigid,
            oil-tolerant tray without polystyrene. Made from sugarcane fibre, they suit hot curries,
            salads, set meals and burger counters — provided you match size and compartment count to
            the dish.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            This guide covers the{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              Bagasse Meal Box
            </Link>{' '}
            wholesale stock PrintNPack holds in Ireland — sizes from the 6×4&quot; lunch box up to the
            9×9&quot; meal box, when to pick 1-, 2- or 3-compartment trays, how case packs work, and
            delivery from Ashbourne to Dublin, Cork, Galway and nationwide.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Why Irish kitchens buy plain bagasse meal boxes
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Plain bagasse is warehouse stock: order by the case, no artwork proof, no print lead time.
            That matters when a café in Dublin or a multi-site group in Cork needs trays for next
            week&apos;s menu, not a branded campaign. Compostable fibre also sits cleanly beside other
            eco lines such as{' '}
            <Link href="/blog/greenspirit-eco-packaging-ireland" className="text-blue-600 hover:underline">
              Greenspirit cups and lids
            </Link>{' '}
            and wooden cutlery.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Many operators mix formats: bagasse for wet or saucy meals,{' '}
            <Link
              href="/blog/biobox-containers-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              kraft biobox
            </Link>{' '}
            for lighter portions, and corrugated fish &amp; chip trays for fry work. Buy bagasse where
            the fibre earns its keep — not as a one-size-fits-all substitute for every box on the
            shelf.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Bagasse meal box sizes and compartments at a glance
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            PrintNPack lists eight plain bagasse meal box lines. Use the table to match footprint and
            compartment layout to your menu, then confirm live case tiers on the product pages.
          </p>

          <div className="overflow-x-auto mb-8 not-prose">
            <table className="min-w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
              <thead className="bg-slate-50 text-left">
                <tr>
                  <th className="px-4 py-3 font-semibold text-slate-900">Size / format</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">Case pack</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">Best for</th>
                </tr>
              </thead>
              <tbody>
                {sizeRows.map((row) => (
                  <tr key={row.size} className="border-t border-slate-200">
                    <td className="px-4 py-3 text-slate-900 font-medium">{row.size}</td>
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
              alt="9×9 bagasse meal box Ireland — large compostable takeaway tray wholesale Galway"
              fill
              className="object-contain p-6"
              sizes="(max-width: 768px) 100vw, 720px"
            />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Choosing 1-compartment vs 2- or 3-compartment
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Compartment count is a plating decision. A 1-compartment 9×6×2&quot; 1000ml tray suits
            mixed bowls and dishes that travel better stirred together. The matching 2-compartment
            1000ml tray keeps a main and a side separate under one lid footprint — useful for curry
            and rice or chicken and salad.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            The 8×8&quot; HP4 3-compartment box is the set-meal workhorse: three wells for protein,
            starch and veg without stacking cups inside a single tray. If the kitchen plates everything
            into one mixed portion, stick with the single-well 8×8&quot; HP4 or the larger 9×9&quot;
            and save the 3-comp for fixed meal deals.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Lunch and burger formats are different jobs again: the 6×4&quot; lunch box and 7&quot;
            rectangle handle compact café offers, while the 6&quot; 15×15cm bagasse burger box covers
            stacked sandwiches. For a full burger packaging overview — including printed options —
            see the{' '}
            <Link href="/blog/burger-boxes-ireland-guide" className="text-blue-600 hover:underline">
              burger boxes Ireland guide
            </Link>{' '}
            and{' '}
            <Link href="/eco-bagasse-burger-boxes" className="text-blue-600 hover:underline">
              eco bagasse burger boxes
            </Link>
            .
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-8 not-prose">
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={TWO_COMP_IMAGE}
                alt="2-compartment bagasse meal box Ireland — 9×6×2 1000ml wholesale Dublin"
                fill
                className="object-contain p-3"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={LUNCH_IMAGE}
                alt="6×4 bagasse small lunch box Ireland — compact café packaging wholesale"
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
            These bagasse meal boxes are <strong>plain wholesale</strong> — white or natural fibre with
            no logo print. That keeps MOQ at a case, restocking fast for Galway night service or
            Ashbourne collection. Branding usually sits on the bag, napkin or sticker rather than on
            every tray.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            If you need a printed face on high-visibility burger packaging, use the dedicated bagasse
            burger product pages. For everyday meal trays, plain cases plus a branded{' '}
            <Link
              href="/blog/sos-grab-bags-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              SOS grab bag
            </Link>{' '}
            or greaseproof sheet is the usual Irish mix.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Case packs, MOQ and how pricing works
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Bagasse meal boxes are sold by the case with <strong>four-tier volume pricing</strong> —
            more cases lower the price per case. There is no custom-print MOQ on these plain lines.
            Packs range from <strong>2 × 100</strong> on the 9×9&quot; up to <strong>20 × 50</strong>{' '}
            on the 6×4&quot; lunch box; most HP4 and 1000ml lines pack <strong>5 × 50</strong>.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Always check the live tier table on each product in the{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              Bagasse Meal Box
            </Link>{' '}
            category — we do not reprint one-off unit rates here because case tiering is how wholesale
            buyers save money. A single-site takeaway often starts on 1–3 cases; multi-site groups
            consolidate into higher tiers.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            What to order alongside bagasse meal boxes
          </h2>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
            <li>
              <Link
                href="/blog/wooden-cutlery-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                Wooden cutlery
              </Link>{' '}
              — 160mm knives and forks for meal boxes, chip forks for fry counters
            </li>
            <li>
              <Link
                href="/blog/biobox-containers-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                Biobox containers
              </Link>{' '}
              for kraft alternatives on lighter or dry portions
            </li>
            <li>
              <Link
                href="/blog/foil-containers-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                Foil containers
              </Link>{' '}
              when the kitchen still needs oven-to-door aluminium trays
            </li>
            <li>SOS grab bags so closed meal trays travel cleanly to the customer</li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-8">
            Pairing meal boxes with cutlery and bags on one Ashbourne dispatch keeps Dublin and
            nationwide kitchens stocked before Friday peaks.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Delivery across Ireland from Ashbourne
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            PrintNPack is based in Ashbourne, Co. Meath — convenient for Dublin and Meath collections,
            with nationwide dispatch for Cork, Galway, Limerick and every other county. Plain bagasse
            orders move quickly because they are warehouse stock, not made-to-print jobs.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            UK or Europe shipping is only confirmed case-by-case on request; this guide focuses on
            Irish wholesale delivery, which is the core service for these lines.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How to order bagasse meal boxes in Ireland
          </h2>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-8">
            <li>List menu formats — full meals, set meals, lunch packs and burgers</li>
            <li>Match each to size and compartment count using the table above</li>
            <li>Add cutlery, biobox or grab bags if the same delivery can cover them</li>
            <li>Order by the case on Bagasse Meal Box — watch the volume tiers</li>
            <li>Take nationwide delivery or collect from Ashbourne, Co. Meath</li>
          </ol>

          <div className="bg-slate-900 rounded-xl p-6 mb-8 text-white not-prose">
            <p className="font-semibold mb-1">Ready to restock bagasse meal boxes?</p>
            <p className="text-slate-400 text-sm mb-4">
              9×9, 8×8 HP4, 1/2/3-compartment and lunch sizes with tiered case pricing — delivered
              across Ireland.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={HUB_HREF}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Shop Bagasse Meal Boxes Ireland →
              </Link>
              <Link
                href="/plain-packaging"
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Browse Plain Packaging
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
                q: 'Where can I buy bagasse meal boxes wholesale in Ireland?',
                a: 'PrintNPack stocks plain compostable bagasse meal boxes by the case under Bagasse Meal Box — with tiered wholesale pricing from Ashbourne to Dublin, Cork, Galway and nationwide.',
              },
              {
                q: 'What bagasse meal box sizes are available?',
                a: 'Lines include 9×9" (2×100), 8×8" HP4 single and 3-comp (5×50), 9×6×2" 1000ml 1-comp and 2-comp (5×50), 7" rectangle (12×50), 6×4" lunch box (20×50) and 6" burger box 15×15cm (8×50).',
              },
              {
                q: 'When should I choose 1-compartment vs 2 or 3-compartment?',
                a: '1-comp for mixed meals and bowls; 2-comp 9×6×2" for protein plus side; 8×8" 3-comp HP4 for set meals with three separated portions.',
              },
              {
                q: 'Are bagasse meal boxes plain wholesale or custom printed?',
                a: 'These lines are plain wholesale stock — no artwork proof and no custom-print minimum. Order by the case with four-tier volume pricing.',
              },
              {
                q: 'Do you deliver bagasse meal boxes to Dublin, Cork and Galway?',
                a: 'Yes. We deliver bagasse meal boxes to Dublin, Cork, Galway and all Irish counties, with collection available from Ashbourne, Co. Meath.',
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
              src: '/images/plain-packaging/120090.webp',
              title: 'Biobox Containers Ireland: Sizes No.1–No.12 & Wholesale Buying Guide',
            },
            {
              href: '/blog/burger-boxes-ireland-guide',
              src: '/images/products/bagasse-burger-box/1.png',
              title: 'Burger Boxes Ireland Guide — Plain, Printed & Bagasse',
            },
            {
              href: '/blog/greenspirit-eco-packaging-ireland',
              src: '/images/plain-packaging/100103.webp',
              title: 'Greenspirit Eco Packaging Ireland: Compostable Cups, Cutlery & Delivery',
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
              <div className="relative w-16 h-14 flex-shrink-0 rounded-lg overflow-hidden">
                <Image src={src} alt={relatedTitle} fill className="object-cover" sizes="64px" />
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
