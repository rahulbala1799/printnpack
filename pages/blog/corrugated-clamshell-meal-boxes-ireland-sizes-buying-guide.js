import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/corrugated-clamshell-meal-boxes-ireland-sizes-buying-guide`;
const HUB_HREF = '/plain-packaging?category=Corrugated+Meal+Box';
const HERO_IMAGE = '/images/plain-packaging/120091.webp';
const SMALL_IMAGE = '/images/plain-packaging/120134.webp';
const LARGE_IMAGE = '/images/plain-packaging/120093.webp';
const PORTION_IMAGE = '/images/plain-packaging/120136.webp';
const MEAL_IMAGE = '/images/plain-packaging/120162.webp';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Corrugated Clamshell Meal Boxes Ireland: #8–#56 Sizes & Wholesale Buying Guide',
  description:
    'A practical buying guide to corrugated clamshell meal boxes in Ireland — #8 burger to #12 large, #13 long and #56 portion sizes, fold-out burger meal boxes, case packs, and nationwide delivery from Ashbourne.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-09-30',
  dateModified: '2026-09-30',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I buy corrugated clamshell meal boxes wholesale in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack stocks plain corrugated clamshell meal boxes by the case under Corrugated Meal Box — #8, #9, #10, #12, #13 and #56 sizes plus premium fold-out burger boxes, with tiered wholesale pricing. Delivery from Ashbourne, Co. Meath to Dublin, Cork, Galway and nationwide.',
      },
    },
    {
      '@type': 'Question',
      name: 'What corrugated clamshell sizes are available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Stocked lines include #8 burger (105×102×42 mm), #9 small (175×91×50 mm), #10 medium (205×107×46 mm), #12 large (178×160×45 mm), #13 long (208×70×39 mm) and #56 portion (150×91×50 mm), plus premium fold-out burger boxes and burger meal boxes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I buy bagasse meal boxes or corrugated clamshells?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Choose corrugated clamshells when you want recyclable cardboard, hinged lids and high-volume case economics. Choose bagasse meal boxes when compostable sugarcane fibre and multi-compartment trays matter more. Many Irish takeaways stock both — corrugated for burgers and bagasse for plated meals.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are corrugated meal boxes plain wholesale or custom printed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'These corrugated meal boxes are plain wholesale stock — no artwork proof and no custom-print minimum. Order by the case with four-tier volume pricing. For branded burger packaging, see custom printed burger boxes or bagasse options with print available.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you deliver corrugated clamshells to Dublin, Cork and Galway?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. PrintNPack delivers corrugated clamshell meal boxes to Dublin, Cork, Galway and every Irish county from Ashbourne. Local buyers can also collect from Co. Meath.',
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
      name: 'Corrugated Clamshell Meal Boxes Ireland Buying Guide',
      item: PAGE_URL,
    },
  ],
};

const sizeRows = [
  {
    size: '#8 Burger',
    dims: '105 × 102 × 42 mm',
    pack: '5×50 (250 per case)',
    use: 'Standard burgers and compact hot sandwiches',
  },
  {
    size: '#9 Small',
    dims: '175 × 91 × 50 mm',
    pack: '4×50 (200 per case)',
    use: 'Longer sandwiches, wraps and slim hot fills',
  },
  {
    size: '#10 Medium',
    dims: '205 × 107 × 46 mm',
    pack: '4×50 (200 per case)',
    use: 'Loaded burgers, larger sandwiches and meal combos',
  },
  {
    size: '#12 Large',
    dims: '178 × 160 × 45 mm',
    pack: '3×50 (150 per case)',
    use: 'Wide burgers, chicken fillets and bigger plated portions',
  },
  {
    size: '#13 Long',
    dims: '208 × 70 × 39 mm',
    pack: '4×50 (200 per case)',
    use: 'Hot dogs, baguettes and narrow long rolls',
  },
  {
    size: '#56 Portion',
    dims: '150 × 91 × 50 mm',
    pack: '4×50 (200 per case)',
    use: 'Sides, smaller meals and kids or lunch portions',
  },
  {
    size: 'Fold-out burger',
    dims: '12.2 × 12.2 × 10.2 cm',
    pack: '100 per case',
    use: 'Taller premium burgers that need extra headroom',
  },
  {
    size: 'Fold-out meal',
    dims: '24 × 12 cm',
    pack: '100 per case',
    use: 'Burger with chips or side in one fold-out meal box',
  },
];

export default function CorrugatedClamshellMealBoxesIrelandSizesBuyingGuide() {
  const title =
    'Corrugated Clamshell Meal Boxes Ireland: #8–#56 Sizes & Wholesale Buying Guide';
  const description =
    'Buy corrugated clamshell meal boxes in Ireland with confidence — #8 burger to #12 large, #13 long and #56 portion sizes, fold-out burger meal boxes, case packs, and delivery to Dublin, Cork, Galway and nationwide from Ashbourne.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="corrugated clamshell meal boxes ireland, corrugated burger boxes wholesale ireland, #8 clamshell dublin, #12 large meal box cork, portion clamshell galway, fold out burger box ashbourne, plain corrugated meal boxes ireland, takeaway clamshell packaging ireland, wholesale burger clamshells ireland, corrugated meal box sizes ireland"
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
          content="Corrugated clamshell meal boxes Ireland — #8 burger clamshell wholesale for takeaways"
        />
        <meta property="article:published_time" content="2026-09-30" />

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
          <span className="text-slate-900">Corrugated Clamshell Meal Boxes Ireland</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            Wholesale Guide
          </span>
          <span className="text-slate-400 text-sm">30 Sep 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Corrugated Clamshell Meal Boxes Ireland: #8–#56 Sizes &amp; Wholesale Buying Guide
        </h1>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="relative rounded-2xl overflow-hidden h-48 col-span-2 bg-slate-50">
            <Image
              src={HERO_IMAGE}
              alt="Corrugated clamshell meal boxes Ireland — #8 burger clamshell wholesale for Dublin takeaways"
              fill
              className="object-contain p-6"
              priority
              sizes="(max-width: 768px) 66vw, 512px"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={LARGE_IMAGE}
                alt="Large #12 corrugated clamshell Ireland — wide burger meal box wholesale Cork"
                fill
                className="object-contain p-3"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={PORTION_IMAGE}
                alt="Portion #56 corrugated clamshell Ireland — lunch portion box wholesale Galway"
                fill
                className="object-contain p-3"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Corrugated clamshell meal boxes are the hinged cardboard workhorses behind Irish burger
            counters, sandwich shops and chippers that run a hot-meal menu. Too small and the lid
            compresses the bun; too large and you pay for empty board on every ticket. Matching the
            # size to the food is the whole buying decision.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            This guide explains how to buy <strong>corrugated clamshell meal boxes in Ireland</strong>{' '}
            as plain wholesale Corrugated Meal Box stock — #8 through #12, #13 long and #56 portion,
            plus premium fold-out burger and meal boxes, how case packs fit weekly ordering, and how{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              PrintNPack&apos;s Corrugated Meal Box
            </Link>{' '}
            range works with tiered case pricing and delivery from Ashbourne.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Why Irish takeaways buy plain corrugated clamshells by the case
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Plain corrugated clamshells are warehouse stock: order by the case, no artwork proof, no
            print lead time. That matters when a Dublin burger van needs boxes before Friday evening,
            or a Cork sandwich counter restocks after a bank-holiday weekend. The hinged lid keeps
            heat in and grease off the counter bag; branding usually lives on a sticker, outer kraft
            bag or receipt rather than on every box.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            PrintNPack holds the numbered clamshell range (#8, #9, #10, #12, #13, #56) plus premium
            fold-out burger and burger meal boxes. Orders ship nationwide; local buyers can collect
            from Ashbourne, Co. Meath. For compostable sugarcane fibre trays instead of cardboard,
            compare{' '}
            <Link href="/blog/bagasse-meal-boxes-ireland-sizes-buying-guide" className="text-blue-600 hover:underline">
              bagasse meal boxes Ireland
            </Link>{' '}
            in the Bagasse Meal Box category.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Corrugated clamshell sizes at a glance
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Match the # size to the bun, roll or meal you pack most often. Dimensions below are the
            stocked Corrugated Meal Box lines — confirm live case tiers on each product page before
            you consolidate an order.
          </p>

          <div className="overflow-x-auto mb-8 not-prose">
            <table className="min-w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
              <thead className="bg-slate-50 text-left">
                <tr>
                  <th className="px-4 py-3 font-semibold text-slate-900">Size</th>
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
              src={MEAL_IMAGE}
              alt="Fold-out burger meal box Ireland — 24×12 cm corrugated meal box wholesale Ashbourne"
              fill
              className="object-contain p-6"
              sizes="(max-width: 768px) 100vw, 720px"
            />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            #8 vs #10 vs #12: how kitchens choose
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            <strong>#8 burger clamshells</strong> (105×102×42 mm) are the compact classic — square
            enough for a standard burger without drowning a single patty in empty board. Dublin lunch
            counters and food trucks often burn through #8 faster than large clamshells on weekday
            trade. Cases pack <strong>5×50 (250)</strong>.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            <strong>#9 and #10</strong> stretch the footprint for longer sandwiches and loaded
            burgers. #9 (175×91×50 mm) suits slim hot fills and wraps; #10 (205×107×46 mm) gives
            medium width for bigger buns and meal combos. Both pack <strong>4×50 (200)</strong> per
            case.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            <strong>#12 large</strong> (178×160×45 mm) covers wide fillets, stacked burgers and
            plated portions that would crush in a #8. Cork weekend trade and gourmet burger menus
            usually justify a case of #12 beside #8 stock rather than forcing every order into one
            size. Cases pack <strong>3×50 (150)</strong>.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            <strong>#13 long</strong> (208×70×39 mm) is the hot-dog and baguette line — narrow and
            long so rolls sit flat without tipping. <strong>#56 portion</strong> (150×91×50 mm) fills
            the gap for sides, kids meals and smaller lunch boxes without stepping up to a full #10.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Premium <strong>fold-out burger boxes</strong> (12.2×12.2×10.2 cm) and{' '}
            <strong>fold-out burger meal boxes</strong> (24×12 cm) pack 100 per case and suit taller
            gourmet builds or burger-plus-side combos where a standard hinged clamshell feels tight.
            A practical starter mix for most Irish burger takeaways is two cases of #8, one case of
            #10 or #12, and one case of #56 or fold-out meal — then adjust once ticket mix is clear.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-8 not-prose">
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={SMALL_IMAGE}
                alt="Small #9 corrugated clamshell Ireland — 175×91×50 mm sandwich box wholesale"
                fill
                className="object-contain p-3"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={LARGE_IMAGE}
                alt="Large #12 corrugated clamshell Ireland — 178×160×45 mm meal box wholesale"
                fill
                className="object-contain p-3"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Corrugated vs bagasse: plain cardboard or compostable fibre?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            These corrugated meal boxes are <strong>plain wholesale cardboard</strong> — recyclable
            hinged clamshells with no logo print. That keeps MOQ at a case and restocking fast for
            Galway night service or Ashbourne collection. They sit beside bagasse in many Irish
            kitchens rather than replacing it.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Choose corrugated when you want hinged lids, familiar burger-box economics and cardboard
            recycling streams. Choose{' '}
            <Link href="/blog/bagasse-meal-boxes-ireland-sizes-buying-guide" className="text-blue-600 hover:underline">
              bagasse meal boxes
            </Link>{' '}
            when compostable sugarcane fibre and multi-compartment trays matter more for plated meals.
            For a broader plain-versus-printed view of burger packaging, see the{' '}
            <Link href="/blog/burger-boxes-ireland-guide" className="text-blue-600 hover:underline">
              burger boxes Ireland guide
            </Link>
            . PPWR-minded buyers can also skim our{' '}
            <Link href="/blog/eu-ppwr-packaging-regulation-ireland-2026" className="text-blue-600 hover:underline">
              EU packaging regulation Ireland 2026
            </Link>{' '}
            overview.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Case packs, MOQ and how pricing works
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Numbered clamshells pack as <strong>5×50, 4×50 or 3×50</strong> depending on size;
            premium fold-out lines pack <strong>100 per case</strong>. All Corrugated Meal Box lines
            use <strong>four-tier volume pricing</strong> — more cases lower the price per case. There
            is no custom-print MOQ on these plain lines.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Always check the live tier table on each product in{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              Corrugated Meal Box
            </Link>{' '}
            — we do not reprint one-off unit rates here because case tiering is how wholesale buyers
            save money. A single-site takeaway often starts on 1–3 cases of #8; multi-site groups
            consolidate into higher tiers across #10, #12 and fold-out meal boxes as well. Burger-led
            operators can also browse{' '}
            <Link href="/plain-burger-boxes-ireland" className="text-blue-600 hover:underline">
              plain burger boxes Ireland
            </Link>{' '}
            for the bagasse-plus-corrugated mix.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            What to order alongside corrugated clamshells
          </h2>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
            <li>
              <Link href="/blog/bagasse-meal-boxes-ireland-sizes-buying-guide" className="text-blue-600 hover:underline">
                Bagasse meal boxes
              </Link>{' '}
              for compostable plated meals and compartment trays
            </li>
            <li>
              <Link href="/blog/fish-and-chip-boxes-ireland-sizes-buying-guide" className="text-blue-600 hover:underline">
                Fish &amp; chip boxes
              </Link>{' '}
              if the same counter runs a chipper menu
            </li>
            <li>
              <Link href="/blog/wooden-cutlery-ireland-sizes-buying-guide" className="text-blue-600 hover:underline">
                Wooden cutlery
              </Link>{' '}
              — knives, forks and chip forks for eat-in and takeaway
            </li>
            <li>
              <Link href="/blog/biobox-containers-ireland-sizes-buying-guide" className="text-blue-600 hover:underline">
                Biobox containers
              </Link>{' '}
              for kraft takeaway meals that sit beside clamshells
            </li>
            <li>SOS grab bags or kraft food bags for the outer carry layer</li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-8">
            Pairing clamshells, cutlery and outer bags on one Ashbourne dispatch keeps Dublin and
            nationwide burger counters stocked before Friday peaks.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Delivery across Ireland from Ashbourne
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            PrintNPack is based in Ashbourne, Co. Meath — convenient for Dublin and Meath collections,
            with nationwide dispatch for Cork, Galway, Limerick and every other county. Plain
            corrugated clamshell orders move quickly because they are warehouse stock, not
            made-to-print jobs.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            UK or Europe shipping is only confirmed case-by-case on request; this guide focuses on
            Irish wholesale delivery, which is the core service for these Corrugated Meal Box lines.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How to order corrugated clamshell meal boxes in Ireland
          </h2>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-8">
            <li>List your menu builds — standard burger, loaded, long roll, portion side, meal combo</li>
            <li>Match each to #8–#12, #13, #56 or fold-out using the table above</li>
            <li>Add bagasse trays, chip boxes, cutlery or grab bags if the same delivery can cover them</li>
            <li>Order by the case on Corrugated Meal Box — watch the volume tiers</li>
            <li>Take nationwide delivery or collect from Ashbourne, Co. Meath</li>
          </ol>

          <div className="bg-slate-900 rounded-xl p-6 mb-8 text-white not-prose">
            <p className="font-semibold mb-1">Ready to restock corrugated clamshells?</p>
            <p className="text-slate-400 text-sm mb-4">
              #8–#56 sizes plus fold-out burger and meal boxes with case packs and tiered wholesale
              pricing — delivered across Ireland.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={HUB_HREF}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Shop Corrugated Meal Boxes Ireland →
              </Link>
              <Link
                href="/plain-burger-boxes-ireland"
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Plain Burger Boxes Hub
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
                q: 'Where can I buy corrugated clamshell meal boxes wholesale in Ireland?',
                a: 'PrintNPack stocks plain corrugated clamshell meal boxes by the case under Corrugated Meal Box — #8, #9, #10, #12, #13 and #56 sizes plus premium fold-out burger boxes, with tiered wholesale pricing from Ashbourne to Dublin, Cork, Galway and nationwide.',
              },
              {
                q: 'What corrugated clamshell sizes are available?',
                a: '#8 burger 105×102×42 mm, #9 small 175×91×50 mm, #10 medium 205×107×46 mm, #12 large 178×160×45 mm, #13 long 208×70×39 mm and #56 portion 150×91×50 mm, plus fold-out burger and burger meal boxes.',
              },
              {
                q: 'Should I buy bagasse meal boxes or corrugated clamshells?',
                a: 'Choose corrugated for recyclable hinged cardboard and high-volume burger economics. Choose bagasse when compostable fibre and multi-compartment trays matter more. Many Irish takeaways stock both.',
              },
              {
                q: 'Are corrugated meal boxes plain wholesale or custom printed?',
                a: 'These lines are plain wholesale stock — no artwork proof and no custom-print minimum. Order by the case with four-tier volume pricing. For branded burger packaging, see custom printed burger boxes.',
              },
              {
                q: 'Do you deliver corrugated clamshells to Dublin, Cork and Galway?',
                a: 'Yes. We deliver corrugated clamshell meal boxes to Dublin, Cork, Galway and all Irish counties, with collection available from Ashbourne, Co. Meath.',
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
              href: '/blog/burger-boxes-ireland-guide',
              src: '/images/products/bagasse-burger-box/1.png',
              title: 'Burger Boxes Ireland: Plain vs Printed, Bagasse & Eco Options',
            },
            {
              href: '/blog/fish-and-chip-boxes-ireland-sizes-buying-guide',
              src: '/images/plain-packaging/1206643.webp',
              title: 'Fish & Chip Boxes Ireland: Small vs Large Sizes & Wholesale Buying Guide',
            },
            {
              href: '/blog/biobox-containers-ireland-sizes-buying-guide',
              src: '/images/plain-packaging/120090.webp',
              title: 'Biobox Containers Ireland: Sizes No.1–No.12, Kraft vs White & Wholesale Buying Guide',
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
