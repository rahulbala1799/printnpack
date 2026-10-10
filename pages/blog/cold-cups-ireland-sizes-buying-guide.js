import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/cold-cups-ireland-sizes-buying-guide`;
const HUB_HREF = '/plain-packaging?category=Cold+Cups+%26+Lids';
const PRODUCT_HREF = '/plain-packaging/12oz-chill-cold-paper-cup-pe-355ml-20x50-10427';
const JUICE_HREF =
  '/plain-packaging/1214oz-clear-greenspirit-rpet-juice-cups-95mmjc216x50-120171';
const HERO_IMAGE = '/images/plain-packaging/10427.webp';
const NINE_IMAGE = '/images/plain-packaging/10426.webp';
const SIXTEEN_IMAGE = '/images/plain-packaging/10428.webp';
const TWENTY_TWO_IMAGE = '/images/plain-packaging/104294.webp';
const RPET_IMAGE = '/images/plain-packaging/120171.webp';
const RPET_16_IMAGE = '/images/plain-packaging/120174.webp';
const DOME_LID_IMAGE = '/images/plain-packaging/120172.webp';
const FLAT_LID_IMAGE = '/images/plain-packaging/120464.webp';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Cold Cups Ireland: Chill Paper & rPET Juice Sizes Buying Guide',
  description:
    'A practical buying guide to plain cold cups in Ireland — Chill PE paper cups from 9oz to 22oz, Greenspirit rPET juice cups (JC1/JC2), matching flat and dome lids, and nationwide delivery from Ashbourne for cafés and juice bars.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-10-10',
  dateModified: '2026-10-10',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I buy cold cups wholesale in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack stocks plain Cold Cups & Lids by the case — Chill PE paper cold cups from 9oz to 22oz, Greenspirit rPET juice cups in JC1 (78mm) and JC2 (95mm) families, and matching flat and dome lids — with tiered wholesale pricing. Delivery from Ashbourne, Co. Meath to Dublin, Cork, Galway and nationwide.',
      },
    },
    {
      '@type': 'Question',
      name: 'What Chill cold paper cup sizes are available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Chill Cold Paper Cup PE lines are stocked in 9oz (270ml), 12oz (355ml), 16oz (475ml) and 22oz (650ml), each packed 20×50 per case. Pair them with the matching cold-cup lid diameter for your size band.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between JC1 and JC2 rPET juice cups?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'JC1 Greenspirit rPET juice cups use a 78mm rim — stocked in 7/9oz and 10oz (25×50 per case) with matching 78mm flat or dome lids. JC2 cups use a 95mm rim — including 9oz squat, 12/14oz and 16oz (typically 16×50) with 95mm flat, dome or sip lids. Do not mix JC1 lids with JC2 cups.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I buy paper Chill cups or clear rPET juice cups?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Chill PE paper cold cups suit iced coffee, soft drinks and counter cold drinks where a paper look matches your hot-cup line. Clear Greenspirit rPET juice cups show fruit, smoothies and layered drinks and are the recyclable cold-drink option in the Greenspirit range. Many Irish sites stock both.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you deliver cold cups to Dublin, Cork and Galway?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. PrintNPack delivers Cold Cups & Lids to Dublin, Cork, Galway and every Irish county from Ashbourne. Local buyers can also collect from Co. Meath.',
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
      name: 'Cold Cups Ireland Buying Guide',
      item: PAGE_URL,
    },
  ],
};

const sizeRows = [
  {
    size: '9oz Chill Cold Paper Cup PE',
    dims: '270ml paper',
    pack: '20 × 50 per case',
    use: 'Kids drinks, small iced coffees, soft drinks',
  },
  {
    size: '12oz Chill Cold Paper Cup PE',
    dims: '355ml paper',
    pack: '20 × 50 per case',
    use: 'Everyday iced coffee and cold counter drinks',
  },
  {
    size: '16oz Chill Cold Paper Cup PE',
    dims: '475ml paper',
    pack: '20 × 50 per case',
    use: 'Large iced lattes, smoothies in paper',
  },
  {
    size: '22oz Chill Cold Paper Cup PE',
    dims: '650ml paper',
    pack: '20 × 50 per case',
    use: 'Sharing soft drinks and large cold orders',
  },
  {
    size: '7/9oz & 10oz Greenspirit rPET (JC1)',
    dims: '78mm clear rPET',
    pack: '25 × 50 per case',
    use: 'Small juices, samples, kids smoothies',
  },
  {
    size: '9oz–16oz Greenspirit rPET (JC2)',
    dims: '95mm clear rPET',
    pack: '16 × 50 per case',
    use: 'Smoothies, juices, layered cold drinks',
  },
  {
    size: 'Matching flat / dome / sip lids',
    dims: '78mm JC1 · 95mm JC2 · MK80/MK90',
    pack: '16×50 to 50×50 / 20×100',
    use: 'Match lid family to cup rim — never mix JC1/JC2',
  },
];

export default function ColdCupsIrelandSizesBuyingGuide() {
  const title = 'Cold Cups Ireland: Chill Paper & rPET Juice Sizes Buying Guide';
  const description =
    'Buy cold cups in Ireland with confidence — Chill PE paper cups from 9oz to 22oz, Greenspirit rPET juice cups (JC1/JC2), matching lids, and delivery to Dublin, Cork, Galway and nationwide from Ashbourne.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="cold cups ireland, chill cold paper cups ireland, rpet juice cups wholesale ireland, greenspirit cold cups dublin, smoothie cups cork, iced coffee cups galway, cold cup lids ashbourne, wholesale cold drinks packaging ireland, clear juice cups ireland, plain cold cups wholesale ireland"
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
          content="Cold cups Ireland — 12oz Chill PE paper cold cup wholesale for cafés"
        />
        <meta property="article:published_time" content="2026-10-10" />

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
          <span className="text-slate-900">Cold Cups Ireland</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            Wholesale Guide
          </span>
          <span className="text-slate-400 text-sm">10 Oct 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Cold Cups Ireland: Chill Paper &amp; rPET Juice Sizes Buying Guide
        </h1>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="relative rounded-2xl overflow-hidden h-48 col-span-2 bg-slate-50">
            <Image
              src={HERO_IMAGE}
              alt="Cold cups Ireland — 12oz Chill PE paper cold cup for Dublin cafés"
              fill
              className="object-contain p-4"
              priority
              sizes="(max-width: 768px) 66vw, 512px"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={NINE_IMAGE}
                alt="9oz Chill cold paper cup Ireland — wholesale iced drink cup Cork"
                fill
                className="object-contain p-3"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={RPET_IMAGE}
                alt="Greenspirit rPET juice cups Ireland — 12/14oz clear cold cup Galway"
                fill
                className="object-contain p-3"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Iced coffee in Dublin, smoothie counters in Cork, juice bars in Galway — cold drinks need a
            different cup family to hot coffee. Paper Chill cups handle everyday iced lines; clear rPET
            juice cups show fruit and layers. The wrong rim diameter means lids that will not seat, so
            size and lid family matter as much as volume.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            This guide covers <strong>cold cups in Ireland</strong> as plain catering stock — Chill PE
            paper cups from 9oz to 22oz, Greenspirit rPET juice cups in JC1 and JC2 rim families,
            matching flat and dome lids, and how{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              PrintNPack&apos;s Cold Cups &amp; Lids
            </Link>{' '}
            range works with tiered pricing and delivery from Ashbourne.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Why Irish cafés buy plain cold cups by the case
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Plain cold cups are warehouse stock: order by the case, no print proof, no brand MOQ. That
            matters when a Galway juice bar sells through 12oz cups on a warm Saturday or an Ashbourne
            café needs dome lids before a school-holiday smoothie rush. Branding can sit on a sleeve or
            carrier — the cup only has to hold ice, seal, and travel.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            PrintNPack holds Chill paper cold cups alongside Greenspirit rPET juice cups and matching
            lids in Cold Cups &amp; Lids. Orders ship nationwide; local buyers can collect from
            Ashbourne, Co. Meath. For a wider view of bulk catering lines, see our{' '}
            <Link href="/blog/plain-packaging-wholesale-ireland" className="text-blue-600 hover:underline">
              plain packaging wholesale Ireland
            </Link>{' '}
            guide. Hot drinks are a separate line — see the{' '}
            <Link href="/blog/coffee-cups-ireland-guide" className="text-blue-600 hover:underline">
              coffee cups Ireland
            </Link>{' '}
            guide for double-wall hot cups.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Cold cup sizes at a glance
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Start with the size your cold menu sells most — often 12oz paper or 12/14oz clear for café
            iced lines — then add 9oz for kids and 16–22oz for large smoothies. Use the table below,
            then confirm live case tiers on each product page.
          </p>

          <div className="overflow-x-auto mb-8 not-prose">
            <table className="min-w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
              <thead className="bg-slate-50 text-left">
                <tr>
                  <th className="px-4 py-3 font-semibold text-slate-900">Product</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">Size / format</th>
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
              src={TWENTY_TWO_IMAGE}
              alt="22oz Chill cold paper cup Ireland — large wholesale cold drink cup Ashbourne"
              fill
              className="object-contain p-6"
              sizes="(max-width: 768px) 100vw, 720px"
            />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Chill PE paper cold cups — 9oz to 22oz
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            The core paper line is <strong>Chill Cold Paper Cup PE</strong> in{' '}
            <strong>9oz (270ml), 12oz (355ml), 16oz (475ml) and 22oz (650ml)</strong>, each packed{' '}
            <strong>20 × 50 per case</strong> (1,000 cups). The{' '}
            <Link href={PRODUCT_HREF} className="text-blue-600 hover:underline">
              12oz Chill cold paper cup
            </Link>{' '}
            is the everyday iced-coffee size for many Irish counters; <strong>9oz</strong> suits kids
            and light drinks; <strong>16oz</strong> covers large iced lattes; <strong>22oz</strong>{' '}
            handles sharing soft drinks and oversized cold orders.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Dublin and Cork kitchens often keep 12oz and 16oz as standing stock, then add 9oz when kids
            drinks spike in school holidays. Pair Chill cups with the matching cold-cup lid band —{' '}
            <strong>80mm MK80 flat lids</strong> for the 9–12oz band and <strong>90mm MK90 flat
            lids</strong> for 16–22oz — so staff are not guessing rim size mid-service.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-8 not-prose">
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={SIXTEEN_IMAGE}
                alt="16oz Chill cold paper cup Ireland — wholesale iced latte cup Dublin"
                fill
                className="object-contain p-3"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={RPET_16_IMAGE}
                alt="16oz Greenspirit rPET juice cup Ireland — clear smoothie cup Cork wholesale"
                fill
                className="object-contain p-3"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Greenspirit rPET juice cups — JC1 vs JC2
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Clear <strong>Greenspirit rPET juice cups</strong> show the drink. Buy them by rim family,
            not by oz alone:
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
            <li>
              <strong>JC1 (78mm)</strong> — 7/9oz and 10oz clear cups, typically{' '}
              <strong>25 × 50 per case</strong>, with matching 78mm flat or dome lids (often 50 × 50)
            </li>
            <li>
              <strong>JC2 (95mm)</strong> — 9oz squat,{' '}
              <Link href={JUICE_HREF} className="text-blue-600 hover:underline">
                12/14oz
              </Link>{' '}
              and 16oz clear cups, typically <strong>16 × 50 per case</strong>, with 95mm flat, dome
              (sip-slot or no-slot) and sip lids (often 16 × 50)
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-4">
            A <strong>4oz Greenspirit cup insert</strong> for 95mm (JC2) cups is also stocked for
            layered desserts or fruit cups inside a larger cold cup. Dome lids suit whipped toppings;
            flat lids suit bagged delivery and straw slots.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            For the wider eco takeaway story — hot aqueous cups, kraft trays and recyclable cold cups —
            see our{' '}
            <Link href="/blog/greenspirit-eco-packaging-ireland" className="text-blue-600 hover:underline">
              Greenspirit eco packaging Ireland
            </Link>{' '}
            overview. rPET cold cups are the recyclable cold-drink option in that range; Chill paper
            remains the workhorse when you want a paper look beside your hot-cup counter.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-8 not-prose">
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={DOME_LID_IMAGE}
                alt="95mm Greenspirit rPET dome lids Ireland — JC2 cold cup lids wholesale Dublin"
                fill
                className="object-contain p-3"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={FLAT_LID_IMAGE}
                alt="95mm Greenspirit rPET flat lids Ireland — JC2 sip-slot lids Galway wholesale"
                fill
                className="object-contain p-3"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Case packs, MOQ and how pricing works
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Chill paper cups pack <strong>20 × 50 per case</strong>. JC1 juice cups pack{' '}
            <strong>25 × 50</strong>; JC2 cups typically pack <strong>16 × 50</strong>. Lid case packs
            vary by family (for example 16 × 50, 20 × 100 or 50 × 50). All use{' '}
            <strong>four-tier volume pricing</strong> — more cases lower the price per case. There is
            no custom-print MOQ on these plain lines.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Always check the live tier table on each product in{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              Cold Cups &amp; Lids
            </Link>
            . We do not reprint one-off unit rates here because case tiering is how wholesale pricing
            works. A single-site café often starts on 1–3 cases of 12oz Chill; multi-site groups
            consolidate cups and lids into higher tiers on one Ashbourne order.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            What to order alongside cold cups
          </h2>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
            <li>
              <Link href="/blog/coffee-cups-ireland-guide" className="text-blue-600 hover:underline">
                Hot coffee cups
              </Link>{' '}
              — when the same counter runs iced and hot drinks
            </li>
            <li>
              <Link href="/blog/kraft-carriers-ireland-sizes-buying-guide" className="text-blue-600 hover:underline">
                Kraft carriers
              </Link>{' '}
              and pulp cup carriers for multi-drink takeaway
            </li>
            <li>
              <Link href="/blog/rpet-hinged-salad-containers-ireland-sizes-buying-guide" className="text-blue-600 hover:underline">
                rPET hinged salad containers
              </Link>{' '}
              for cold lunch sides beside juice orders
            </li>
            <li>
              <Link href="/blog/soup-containers-ireland-sizes-buying-guide" className="text-blue-600 hover:underline">
                Soup containers
              </Link>{' '}
              if your lunch menu mixes hot broth and cold drinks
            </li>
            <li>Straws, napkins and wooden cutlery from plain packaging for smoothie spoons and wipe-downs</li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-8">
            Pairing cold cups, lids and carriers on one dispatch keeps Dublin and nationwide kitchens
            stocked before weekend peaks.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Delivery across Ireland from Ashbourne
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            PrintNPack is based in Ashbourne, Co. Meath — convenient for Dublin and Meath collections,
            with nationwide dispatch for Cork, Galway, Limerick and every other county. Plain cold cup
            orders move quickly because they are warehouse stock, not made-to-print jobs.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            UK or Europe shipping is only confirmed case-by-case on request; this guide focuses on Irish
            wholesale delivery, which is the core service for these cold-cup lines.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How to order cold cups in Ireland
          </h2>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-8">
            <li>List your busiest cold sizes — 9oz kids, 12oz iced, 16–22oz smoothies or clear juice</li>
            <li>Choose Chill PE paper or Greenspirit rPET (JC1 78mm vs JC2 95mm)</li>
            <li>Match flat, dome or sip lids to the same rim family</li>
            <li>Add carriers, salad pots or hot cups if one delivery can cover the full drink line</li>
            <li>Order by the case on Cold Cups &amp; Lids — watch the volume tiers</li>
            <li>Take nationwide delivery or collect from Ashbourne, Co. Meath</li>
          </ol>

          <div className="bg-slate-900 rounded-xl p-6 mb-8 text-white not-prose">
            <p className="font-semibold mb-1">Ready to restock cold cups?</p>
            <p className="text-slate-400 text-sm mb-4">
              Chill 9–22oz paper cups, Greenspirit rPET juice cups and matching lids with tiered
              wholesale pricing — delivered across Ireland.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={HUB_HREF}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Shop Cold Cups Ireland →
              </Link>
              <Link
                href={PRODUCT_HREF}
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                View 12oz Chill Cup
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
                q: 'Where can I buy cold cups wholesale in Ireland?',
                a: 'PrintNPack stocks plain Cold Cups & Lids by the case — Chill PE paper cups from 9oz to 22oz, Greenspirit rPET juice cups (JC1/JC2) and matching lids — with tiered wholesale pricing from Ashbourne to Dublin, Cork, Galway and nationwide.',
              },
              {
                q: 'What Chill cold paper cup sizes are available?',
                a: 'Chill Cold Paper Cup PE lines are stocked in 9oz (270ml), 12oz (355ml), 16oz (475ml) and 22oz (650ml), each 20×50 per case. Pair them with MK80 or MK90 cold-cup lids for the matching size band.',
              },
              {
                q: 'What is the difference between JC1 and JC2 rPET juice cups?',
                a: 'JC1 uses a 78mm rim (7/9oz and 10oz, typically 25×50) with 78mm lids. JC2 uses a 95mm rim (9oz squat, 12/14oz, 16oz, typically 16×50) with 95mm flat, dome or sip lids. Never mix JC1 lids with JC2 cups.',
              },
              {
                q: 'Should I buy paper Chill cups or clear rPET juice cups?',
                a: 'Chill PE paper suits iced coffee and soft drinks with a paper look. Clear Greenspirit rPET juice cups show fruit and smoothies and are the recyclable cold-drink option in the Greenspirit range. Many Irish sites stock both.',
              },
              {
                q: 'Do you deliver cold cups to Dublin, Cork and Galway?',
                a: 'Yes. We deliver Cold Cups & Lids to Dublin, Cork, Galway and all Irish counties, with collection available from Ashbourne, Co. Meath.',
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
              href: '/blog/coffee-cups-ireland-guide',
              src: '/images/plain-packaging/100070.webp',
              title: 'Coffee Cups Ireland: Plain vs Custom Printed Buying Guide',
            },
            {
              href: '/blog/greenspirit-eco-packaging-ireland',
              src: '/images/plain-packaging/100103.webp',
              title: 'Greenspirit Eco Packaging Ireland: Compostable Cups, Cutlery & Nationwide Delivery',
            },
            {
              href: '/blog/kraft-carriers-ireland-sizes-buying-guide',
              src: '/images/plain-packaging/180021.webp',
              title: 'Kraft Carriers Ireland: Small–XL Internal Handle Sizes & Wholesale Buying Guide',
            },
            {
              href: '/blog/soup-containers-ireland-sizes-buying-guide',
              src: '/images/plain-packaging/10984485.webp',
              title: 'Soup Containers Ireland: 8–32oz Sizes, Lids & Wholesale Buying Guide',
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
