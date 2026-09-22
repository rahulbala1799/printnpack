import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/wooden-cutlery-ireland-sizes-buying-guide`;
const HUB_HREF = '/plain-packaging?category=Cutlery+%26+Stirrers';
const HERO_IMAGE = '/images/plain-packaging/140046.webp';
const KNIFE_IMAGE = '/images/plain-packaging/140009.webp';
const FORK_IMAGE = '/images/plain-packaging/140010.webp';
const CHIP_FORK_IMAGE = '/images/plain-packaging/140040.webp';
const TEASPOON_IMAGE = '/images/plain-packaging/140013.webp';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Wooden Cutlery Ireland: Chip Forks, Sets & Wholesale Buying Guide',
  description:
    'A practical buying guide to wooden cutlery in Ireland — chip forks, 160mm knives and forks, teaspoons, 3-in-1 sets, case packs, and nationwide wholesale delivery from Ashbourne.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-09-22',
  dateModified: '2026-09-22',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I buy wooden cutlery wholesale in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack stocks plain wooden cutlery and chip forks by the case under Cutlery & Stirrers — Greenspirit knives, forks, dessert spoons, teaspoons, chip forks and 3-in-1 sets — with tiered wholesale pricing and delivery from Ashbourne, Co. Meath to Dublin, Cork, Galway and nationwide.',
      },
    },
    {
      '@type': 'Question',
      name: 'What wooden cutlery sizes are available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Catalogue lines include 85mm Greenspirit chip forks (10×1000 per case), 160mm wooden knives, forks and dessert spoons (10×100), 110mm wooden teaspoons (10×100), 95mm ice cream spades (20×100), and 3-in-1 fork, knife and napkin sets (20×50). Match chip forks to chipper counters and full-length cutlery to meal boxes and catering.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is wooden cutlery plain wholesale or custom printed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'These lines are plain wholesale stock — no artwork proof and no custom-print minimum. Order by the case with four-tier volume pricing. Branding usually sits on the bag, box or napkin rather than on the cutlery itself.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should Irish takeaways use wooden cutlery or reusable HD PP?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wooden cutlery suits single-use takeaway, festivals and chip counters where compostable presentation matters. Greenspirit black reusable HD PP forks, knives and spoons suit dine-in, events and operators who wash and reuse. Many Irish kitchens stock wooden for delivery and HD PP for on-site service.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you deliver wooden cutlery to Dublin, Cork and Galway?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. PrintNPack delivers wooden cutlery to Dublin, Cork, Galway and every Irish county from Ashbourne. Local buyers can also collect from Co. Meath.',
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
      name: 'Wooden Cutlery Ireland Buying Guide',
      item: PAGE_URL,
    },
  ],
};

const sizeRows = [
  {
    size: '85mm chip fork',
    pack: '10 × 1000 per case',
    use: 'Chippers, fry counters and open kraft trays',
  },
  {
    size: '160mm knife / fork / dessert spoon',
    pack: '10 × 100 per case',
    use: 'Meal boxes, catering trays and full takeaway meals',
  },
  {
    size: '110mm teaspoon',
    pack: '10 × 100 per case',
    use: 'Coffee, desserts, sauces and sampling',
  },
  {
    size: '95mm ice cream spade',
    pack: '20 × 100 per case',
    use: 'Ice cream cups, soft serve and gelato counters',
  },
  {
    size: '3-in-1 set (fork, knife, napkin)',
    pack: '20 × 50 per case',
    use: 'Delivery bags and event catering — one grab pack per guest',
  },
];

export default function WoodenCutleryIrelandSizesBuyingGuide() {
  const title = 'Wooden Cutlery Ireland: Chip Forks, Sets & Wholesale Buying Guide';
  const description =
    'Buy wooden cutlery in Ireland with confidence — chip forks, 160mm knives and forks, teaspoons, 3-in-1 sets, case packs, and delivery to Dublin, Cork, Galway and nationwide from Ashbourne.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="wooden cutlery ireland, wooden cutlery wholesale, chip forks ireland, greenspirit wooden fork dublin, wooden knives cork, compostable cutlery ireland, wooden teaspoons wholesale, takeaway cutlery ashbourne, wooden cutlery sets galway, plain cutlery wholesale ireland"
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
          content="Wooden cutlery Ireland — 3-in-1 wooden fork knife napkin set wholesale"
        />
        <meta property="article:published_time" content="2026-09-22" />

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
          <span className="text-slate-900">Wooden Cutlery Ireland</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            Wholesale Guide
          </span>
          <span className="text-slate-400 text-sm">22 Sep 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Wooden Cutlery Ireland: Chip Forks, Sets &amp; Wholesale Buying Guide
        </h1>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="relative rounded-2xl overflow-hidden h-48 col-span-2 bg-slate-50">
            <Image
              src={HERO_IMAGE}
              alt="Wooden cutlery Ireland — 3-in-1 fork knife and napkin set for Dublin takeaways"
              fill
              className="object-contain p-6"
              priority
              sizes="(max-width: 768px) 66vw, 512px"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={CHIP_FORK_IMAGE}
                alt="Wooden chip forks Ireland — 85mm Greenspirit chip forks wholesale Cork"
                fill
                className="object-contain p-3"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={FORK_IMAGE}
                alt="Greenspirit wooden forks Ireland — 160mm takeaway cutlery Galway wholesale"
                fill
                className="object-contain p-3"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Wooden cutlery is everyday kit for Irish chippers, takeaways, cafés and caterers who need a
            practical single-use option without plastic. The wrong length leaves chips awkward to eat or
            meal-box customers struggling with a tiny chip fork — and both mistakes show up every service.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            This guide explains how to buy <strong>wooden cutlery in Ireland</strong> as plain wholesale
            stock — chip forks versus full-length knives and forks, teaspoons and 3-in-1 sets, how case
            packs fit weekly ordering, and how{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              PrintNPack&apos;s Cutlery &amp; Stirrers
            </Link>{' '}
            range works with tiered case pricing and delivery from Ashbourne.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Why Irish kitchens buy plain wooden cutlery
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Single-use plastic cutlery is restricted under Irish and EU rules, so most food operators
            have already moved to wood or reusable options. Plain wooden knives, forks, spoons and chip
            forks are warehouse stock — no artwork proof and no print minimum — so Dublin, Cork and
            Galway kitchens can restock by the case when weekend volume spikes.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            PrintNPack holds Greenspirit wooden cutlery lines alongside chip forks, wooden teaspoons,
            ice cream spades, bamboo stirrers and 3-in-1 sets. Orders ship nationwide; local buyers can
            collect from Ashbourne, Co. Meath. For a wider eco range that pairs with wooden cutlery, see
            the{' '}
            <Link href="/blog/greenspirit-eco-packaging-ireland" className="text-blue-600 hover:underline">
              Greenspirit eco packaging guide
            </Link>{' '}
            and{' '}
            <Link href="/plain-packaging" className="text-blue-600 hover:underline">
              plain packaging wholesale
            </Link>
            .
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Many Irish takeaways run a mixed kit: chip forks for fry counters, full-length wooden cutlery
            for meal boxes, and teaspoons for coffee or dessert. That split is normal — buy each length
            for the job it does, not one SKU for every station.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Who this guide is for</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            This is a takeaway and catering buying guide, not a materials essay. It is written for:
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-8">
            <li>Chippers and fry counters that burn through chip forks every Friday night</li>
            <li>Takeaways packing biobox or bagasse meals that need a knife, fork or spoon in the bag</li>
            <li>Cafés and dessert counters stocking teaspoons and ice cream spades</li>
            <li>Caterers and event teams who prefer 3-in-1 sets for faster packing</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Wooden cutlery sizes Ireland — chip forks to full sets
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Start with the service style, not the cheapest case on the shelf. An 85mm chip fork is perfect
            for chips and open trays; it is the wrong tool for a curry meal box. A 160mm knife and fork
            suit full meals; they are overkill for a portion of chips at the counter.
          </p>
          <div className="overflow-x-auto my-6 not-prose">
            <table className="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">Line</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">Pack</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">Best for</th>
                </tr>
              </thead>
              <tbody>
                {sizeRows.map((row, i) => (
                  <tr key={row.size} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="px-4 py-3 font-medium text-slate-900">{row.size}</td>
                    <td className="px-4 py-3 text-slate-600 whitespace-nowrap">{row.pack}</td>
                    <td className="px-4 py-3 text-slate-600">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-700 leading-relaxed mb-8">
            For most Irish chippers, the <strong>85mm Greenspirit chip fork</strong> covers counter and
            tray service. Takeaways packing hot meals should stock <strong>160mm knives, forks and dessert
            spoons</strong> separately so the bag matches the dish. Cafés usually add teaspoons; delivery-heavy
            sites often prefer the <strong>3-in-1 set</strong> so every order gets a fork, knife and napkin
            without picking three SKUs at the pass.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Chip forks vs full cutlery — how to choose on the pass
          </h2>
          <div className="relative rounded-2xl overflow-hidden h-56 bg-slate-50 mb-6 not-prose">
            <Image
              src={CHIP_FORK_IMAGE}
              alt="85mm wooden chip forks Ireland Ashbourne — Greenspirit wholesale for chippers"
              fill
              className="object-contain p-8"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </div>
          <p className="text-slate-700 leading-relaxed mb-4">
            Use <strong>chip forks</strong> when customers eat from an open tray or{' '}
            <Link
              href="/blog/fish-and-chip-boxes-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              fish &amp; chip box
            </Link>{' '}
            at the counter or in the car. Step up to <strong>160mm wooden knives and forks</strong> when
            the order is a closed meal box, salad, pasta or anything that needs proper cutlery length.
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
            <li>Keep chip-fork cases beside the fryer and full cutlery beside the meal-box station</li>
            <li>Train staff to pick from the ticket — chips get a chip fork; meal boxes get a set</li>
            <li>Count weekly burn rates; chip forks often empty first on Friday and Saturday nights</li>
            <li>
              Pair meal-box cutlery with{' '}
              <Link href="/blog/biobox-containers-ireland-sizes-buying-guide" className="text-blue-600 hover:underline">
                biobox containers
              </Link>{' '}
              or bagasse meal boxes so the pack feels complete
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-8">
            If you brand packaging, keep the cutlery plain and put the logo on bags, greaseproof or
            napkins. That keeps case pricing flexible while still putting your name in the
            customer&apos;s hand.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Wooden vs reusable HD PP — when each makes sense
          </h2>
          <div className="relative rounded-2xl overflow-hidden h-56 bg-slate-50 mb-6 not-prose">
            <Image
              src={KNIFE_IMAGE}
              alt="Greenspirit wooden knives Ireland — 160mm compostable takeaway cutlery wholesale"
              fill
              className="object-contain p-8"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </div>
          <p className="text-slate-700 leading-relaxed mb-4">
            PrintNPack also stocks Greenspirit black reusable HD PP forks, knives, spoons and teaspoons
            (20 × 50 per case). Use wood for single-use takeaway and festivals; use reusable HD PP where
            you can wash and return pieces to service — dine-in, staff canteens and controlled events.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Do not treat reusable plastic as a drop-in for every delivery bag unless you have a return
            or wash process. Most Irish delivery menus stay on wooden cutlery for that reason.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            What to stock with wooden cutlery
          </h2>
          <div className="relative rounded-2xl overflow-hidden h-56 bg-slate-50 mb-6 not-prose">
            <Image
              src={TEASPOON_IMAGE}
              alt="Wooden teaspoons Ireland — 110mm Greenspirit teaspoons for cafés nationwide"
              fill
              className="object-contain p-8"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </div>
          <p className="text-slate-700 leading-relaxed mb-4">
            Cutlery rarely ships alone. Build a simple restock list around the same delivery:
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
            <li>
              <Link
                href="/blog/fish-and-chip-boxes-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                Fish &amp; chip boxes
              </Link>{' '}
              and kraft food trays for chipper counters that burn chip forks
            </li>
            <li>
              Biobox or bagasse meal boxes for full meals that need 160mm knives and forks
            </li>
            <li>
              <Link href="/blog/sos-grab-bags-ireland-sizes-buying-guide" className="text-blue-600 hover:underline">
                SOS grab bags
              </Link>{' '}
              so 3-in-1 sets drop straight into the carry bag
            </li>
            <li>Bamboo stirrers under the same Cutlery &amp; Stirrers category for coffee service</li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-8">
            Hygiene-critical prep lines should also review{' '}
            <Link
              href="/blog/disposable-gloves-ireland-nitrile-vs-vinyl-buying-guide"
              className="text-blue-600 hover:underline"
            >
              disposable gloves
            </Link>{' '}
            on the same plain wholesale order so kitchen and counter stock arrive together.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Case packs, MOQ and how pricing works
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Wooden cutlery is sold by the case with <strong>four-tier volume pricing</strong> — the more
            cases you take, the lower the price per case. There is no custom-print MOQ because these are
            plain stock lines. Chip forks pack <strong>10 × 1000</strong> per case; most 160mm knives,
            forks and dessert spoons pack <strong>10 × 100</strong>; teaspoons pack{' '}
            <strong>10 × 100</strong>; 3-in-1 sets pack <strong>20 × 50</strong>.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Always check the live tier table on each product page in the{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              Cutlery &amp; Stirrers
            </Link>{' '}
            category — we do not reprint one-off unit rates here because case tiering is how wholesale
            buyers save money. A single-site chipper often starts on 1–3 cases of chip forks; multi-site
            groups and busy festival caterers move into higher tiers when they consolidate orders.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Delivery across Ireland from Ashbourne
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            PrintNPack is based in Ashbourne, Co. Meath — convenient for Dublin and Meath collections,
            with nationwide dispatch for Cork, Galway, Limerick and every other county. Plain wooden
            cutlery orders move quickly because they are warehouse stock, not made-to-print jobs.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Pair cutlery with other catering lines on one delivery — fish &amp; chip boxes, biobox,
            grab bags and gloves — so kitchen stock arrives together before the weekend rush.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How to order wooden cutlery in Ireland
          </h2>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-8">
            <li>List chipper vs meal-box vs café stations and choose chip forks, full cutlery, teaspoons or sets</li>
            <li>Add meal boxes, trays and grab bags if the same delivery can cover them</li>
            <li>Order by the case on Cutlery &amp; Stirrers — watch the volume tiers</li>
            <li>Take nationwide delivery or collect from Ashbourne, Co. Meath</li>
            <li>Track weekly burn rates and reorder before bank-holiday spikes</li>
          </ol>

          <div className="bg-slate-900 rounded-xl p-6 mb-8 text-white not-prose">
            <p className="font-semibold mb-1">Ready to restock wooden cutlery?</p>
            <p className="text-slate-400 text-sm mb-4">
              Chip forks, Greenspirit knives and forks, teaspoons and 3-in-1 sets with tiered case
              pricing — delivered across Ireland.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={HUB_HREF}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Shop Wooden Cutlery Ireland →
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
                q: 'Where can I buy wooden cutlery wholesale in Ireland?',
                a: 'PrintNPack stocks plain wooden cutlery and chip forks by the case under Cutlery & Stirrers — knives, forks, spoons, teaspoons, chip forks and 3-in-1 sets — with tiered wholesale pricing from Ashbourne to Dublin, Cork, Galway and nationwide.',
              },
              {
                q: 'What wooden cutlery sizes are available?',
                a: 'Catalogue lines include 85mm chip forks (10×1000), 160mm knives/forks/dessert spoons (10×100), 110mm teaspoons (10×100), 95mm ice cream spades (20×100) and 3-in-1 sets (20×50). Match chip forks to chippers and full-length cutlery to meal boxes.',
              },
              {
                q: 'Is wooden cutlery plain wholesale or custom printed?',
                a: 'These lines are plain wholesale stock — no artwork proof and no custom-print minimum. Order by the case with four-tier volume pricing.',
              },
              {
                q: 'Should Irish takeaways use wooden cutlery or reusable HD PP?',
                a: 'Wood suits single-use takeaway and festivals. Greenspirit black reusable HD PP suits dine-in and wash-and-reuse service. Many kitchens stock both.',
              },
              {
                q: 'Do you deliver wooden cutlery to Dublin, Cork and Galway?',
                a: 'Yes. We deliver wooden cutlery to Dublin, Cork, Galway and all Irish counties, with collection available from Ashbourne, Co. Meath.',
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
              href: '/blog/greenspirit-eco-packaging-ireland',
              src: '/images/plain-packaging/100103.webp',
              title: 'Greenspirit Eco Packaging Ireland: Compostable Cups, Cutlery & Delivery',
            },
            {
              href: '/blog/biobox-containers-ireland-sizes-buying-guide',
              src: '/images/plain-packaging/120090.webp',
              title: 'Biobox Containers Ireland: Sizes No.1–No.12 & Wholesale Buying Guide',
            },
            {
              href: '/blog/disposable-gloves-ireland-nitrile-vs-vinyl-buying-guide',
              src: '/images/plain-packaging/170054.webp',
              title: 'Disposable Gloves Ireland: Nitrile vs Vinyl & Wholesale Buying Guide',
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
