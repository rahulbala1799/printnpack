import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/round-kraft-bowls-ireland-sizes-buying-guide`;
const HUB_HREF = '/plain-packaging?category=Round+Kraft+Bowls';
const PRODUCT_750_HREF = '/plain-packaging/750ml-kraft-bowls-pe-kb3-6x50-120074';
const PRODUCT_900_HREF = '/plain-packaging/900ml-kraft-bowls-pe-kb4-6x50-120075';
const PRODUCT_1300_HREF = '/plain-packaging/1300ml-kraft-bowl-pe-kb4-6x50-120076';
const LID_750_HREF = '/plain-packaging/pet-lids-for-750ml-bowls-kb3-6x50-clsb750';
const LID_900_1300_HREF = '/plain-packaging/pet-lids-for-900-1300ml-bowls-kb4-6x50-clsb1300';
const HERO_IMAGE = '/images/plain-packaging/120074.webp';
const BOWL_900_IMAGE = '/images/plain-packaging/120075.webp';
const BOWL_1300_IMAGE = '/images/plain-packaging/120076.webp';
const LID_750_IMAGE = '/images/plain-packaging/CLSB750.webp';
const LID_KB4_IMAGE = '/images/plain-packaging/CLSB1300.webp';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Round Kraft Bowls Ireland: 750–1300ml Sizes & Lids Buying Guide',
  description:
    'A practical buying guide to plain round kraft bowls in Ireland — PE kraft bowls in 750ml (KB3), 900ml and 1300ml (KB4), matching PET lids, case packs, and nationwide delivery from Ashbourne for poke, salad and noodle takeaways.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-10-14',
  dateModified: '2026-10-14',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I buy round kraft bowls wholesale in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack stocks plain Round Kraft Bowls by the case — 750ml PE kraft bowls (KB3), 900ml and 1300ml PE kraft bowls (KB4), plus matching PET lids — with tiered wholesale pricing. Delivery from Ashbourne, Co. Meath to Dublin, Cork, Galway and nationwide.',
      },
    },
    {
      '@type': 'Question',
      name: 'What round kraft bowl sizes are available in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Core PE kraft bowl sizes are 750ml (KB3), 900ml (KB4) and 1300ml (KB4). Each bowl line packs 6×50 per case (300 bowls). A separate 750ml GO (KB1) bowl and rPET lid line is also listed for buyers who need that lid family.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which lids fit 750ml, 900ml and 1300ml kraft bowls?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PET lids for 750ml bowls (KB3) fit the KB3 750ml bowl only. PET lids for 900 & 1300ml bowls (KB4) share one lid case for both larger bowls. Do not mix KB3 and KB4 lid families. The GO KB1 750ml bowl uses its own rPET lid case.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are these kraft bowls plain or custom printed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'These are plain unprinted kraft bowls — brown PE kraft stock sold by the case with no print proof or brand MOQ. Branding can sit on carriers, napkins or meal boxes while the bowl stays a fast wholesale SKU.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you deliver kraft bowls to Dublin, Cork and Galway?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. PrintNPack delivers Round Kraft Bowls to Dublin, Cork, Galway and every Irish county from Ashbourne. Local buyers can also collect from Co. Meath.',
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
      name: 'Round Kraft Bowls Ireland Buying Guide',
      item: PAGE_URL,
    },
  ],
};

const sizeRows = [
  {
    size: '750ml Kraft Bowl PE (KB3)',
    dims: 'PE kraft round bowl',
    pack: '6 × 50 per case',
    use: 'Poke sides, grain bowls, small salads',
  },
  {
    size: 'PET Lid for 750ml (KB3)',
    dims: 'Clear PET — KB3 only',
    pack: '6 × 50 per case',
    use: 'Seal 750ml KB3 bowls for delivery',
  },
  {
    size: '900ml Kraft Bowl PE (KB4)',
    dims: 'PE kraft round bowl',
    pack: '6 × 50 per case',
    use: 'Standard lunch bowls, noodles, rice',
  },
  {
    size: '1300ml Kraft Bowl PE (KB4)',
    dims: 'PE kraft round bowl',
    pack: '6 × 50 per case',
    use: 'Large sharing bowls, loaded salads',
  },
  {
    size: 'PET Lid for 900 & 1300ml (KB4)',
    dims: 'Shared clear PET — KB4',
    pack: '6 × 50 per case',
    use: 'One lid SKU for both KB4 bowl sizes',
  },
  {
    size: '750ml Kraft Bowl PE GO (KB1)',
    dims: 'PE kraft + matching rPET lid',
    pack: '6 × 50 per case',
    use: '750ml line that uses the GO lid family',
  },
];

export default function RoundKraftBowlsIrelandSizesBuyingGuide() {
  const title = 'Round Kraft Bowls Ireland: 750–1300ml Sizes & Lids Buying Guide';
  const description =
    'Buy round kraft bowls in Ireland with confidence — 750ml (KB3), 900ml and 1300ml (KB4) PE kraft bowls, matching PET lids, case packs, and delivery to Dublin, Cork, Galway and nationwide from Ashbourne.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="round kraft bowls ireland, kraft bowls wholesale ireland, 750ml kraft bowl dublin, 900ml kraft bowl cork, 1300ml kraft bowl galway, pet lids kraft bowls ashbourne, poke bowl packaging ireland, plain kraft bowls wholesale ireland, salad bowls takeaway ireland, noodle bowl containers ireland"
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
          content="Round kraft bowls Ireland — 750ml PE kraft bowl wholesale for takeaways"
        />
        <meta property="article:published_time" content="2026-10-14" />

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
          <span className="text-slate-900">Round Kraft Bowls Ireland</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            Wholesale Guide
          </span>
          <span className="text-slate-400 text-sm">14 Oct 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Round Kraft Bowls Ireland: 750–1300ml Sizes &amp; Lids Buying Guide
        </h1>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="relative rounded-2xl overflow-hidden h-48 col-span-2 bg-slate-50">
            <Image
              src={HERO_IMAGE}
              alt="Round kraft bowls Ireland — 750ml PE kraft bowl for Dublin poke takeaways"
              fill
              className="object-contain p-4"
              priority
              sizes="(max-width: 768px) 66vw, 512px"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={BOWL_900_IMAGE}
                alt="900ml kraft bowl Ireland — PE kraft lunch bowl wholesale Cork"
                fill
                className="object-contain p-3"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={BOWL_1300_IMAGE}
                alt="1300ml kraft bowl Ireland — large PE kraft salad bowl Galway"
                fill
                className="object-contain p-3"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Poke counters in Dublin, noodle lunch spots in Cork, salad bars in Galway — Irish kitchens
            that sell by the bowl need a round kraft format that stacks, seals and travels. Size is the
            first decision: too small and toppings spill; too large and food looks sparse. The lid
            family has to match the bowl code, or Friday delivery bags leak.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            This guide covers <strong>round kraft bowls in Ireland</strong> as plain catering stock —
            PE kraft bowls in <strong>750ml (KB3)</strong>, <strong>900ml</strong> and{' '}
            <strong>1300ml (KB4)</strong>, matching PET lids, case packs, and how{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              PrintNPack&apos;s Round Kraft Bowls
            </Link>{' '}
            range works with tiered pricing and delivery from Ashbourne.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Why Irish takeaways buy plain kraft bowls by the case
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Plain kraft bowls are warehouse stock: order by the case, no print proof, no brand MOQ.
            That matters when a Cork poke shop burns through 900ml bowls at lunch or an Ashbourne café
            needs sealed 750ml sides before a weekend rush. Branding can sit on the carrier or napkin —
            the bowl only has to hold food, take a lid, and survive the bag.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            PrintNPack holds PE kraft bowls alongside dedicated PET lids in Round Kraft Bowls. Orders
            ship nationwide; local buyers can collect from Ashbourne, Co. Meath. For a wider view of
            bulk catering lines, see our{' '}
            <Link href="/blog/plain-packaging-wholesale-ireland" className="text-blue-600 hover:underline">
              plain packaging wholesale Ireland
            </Link>{' '}
            guide. Hot broth in a lidded cup is a different line — see the{' '}
            <Link href="/blog/soup-containers-ireland-sizes-buying-guide" className="text-blue-600 hover:underline">
              soup containers Ireland
            </Link>{' '}
            guide for 8–32oz Spiritpak cups.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Round kraft bowl sizes at a glance
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Start with the portion your menu sells most — often <strong>900ml</strong> for a full lunch
            bowl, <strong>750ml</strong> for lighter salads or kids, and <strong>1300ml</strong> for
            loaded or sharing portions — then match the lid code. Use the table below, then confirm live
            case tiers on each product page.
          </p>

          <div className="overflow-x-auto mb-8 not-prose">
            <table className="min-w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
              <thead className="bg-slate-50 text-left">
                <tr>
                  <th className="px-4 py-3 font-semibold text-slate-900">Product</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">Format</th>
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
              src={LID_750_IMAGE}
              alt="PET lid for 750ml kraft bowl Ireland — KB3 clear lid wholesale Ashbourne"
              fill
              className="object-contain p-6"
              sizes="(max-width: 768px) 100vw, 720px"
            />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            750ml PE kraft bowls (KB3) and matching PET lids
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            The smaller everyday line is the{' '}
            <Link href={PRODUCT_750_HREF} className="text-blue-600 hover:underline">
              750ml Kraft Bowl PE (KB3)
            </Link>
            , packed <strong>6 × 50 per case</strong> (300 bowls). It suits lighter poke sides, grain
            bowls and smaller salads where 900ml would leave empty space. Matching{' '}
            <Link href={LID_750_HREF} className="text-blue-600 hover:underline">
              PET lids for 750ml bowls (KB3)
            </Link>{' '}
            pack the same <strong>6 × 50 per case</strong> so you can buy lids ahead of bowls when
            delivery is the leak risk.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Dublin and Galway counters often keep 750ml as standing stock for sides, then step up to
            KB4 for full meals. <strong>Do not put a KB4 lid on a KB3 bowl</strong> — the codes are
            separate lid families. Staff guessing mid-service is how bags stain on the way home.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            900ml and 1300ml PE kraft bowls (KB4) — shared lid
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            The workhorse lunch size is the{' '}
            <Link href={PRODUCT_900_HREF} className="text-blue-600 hover:underline">
              900ml Kraft Bowl PE (KB4)
            </Link>
            , also packed <strong>6 × 50 per case</strong>. Cork noodle spots and Dublin salad bars
            typically run this as the default. For loaded or sharing portions, step up to the{' '}
            <Link href={PRODUCT_1300_HREF} className="text-blue-600 hover:underline">
              1300ml Kraft Bowl PE (KB4)
            </Link>{' '}
            — same case pack, same lid family.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Both KB4 bowls share one{' '}
            <Link href={LID_900_1300_HREF} className="text-blue-600 hover:underline">
              PET lid case for 900 &amp; 1300ml bowls (KB4)
            </Link>{' '}
            at <strong>6 × 50 per case</strong>. That keeps lid stock simpler than clear portion pots:
            one KB4 lid SKU covers both larger bowls, while KB3 stays on its own 750ml lid.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-8 not-prose">
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={BOWL_900_IMAGE}
                alt="900ml PE kraft bowl Ireland — wholesale lunch bowl Dublin"
                fill
                className="object-contain p-3"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={LID_KB4_IMAGE}
                alt="PET lids for 900 and 1300ml kraft bowls Ireland — KB4 lid Cork wholesale"
                fill
                className="object-contain p-3"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            GO 750ml (KB1) when you need the rPET lid line
          </h2>
          <p className="text-slate-700 leading-relaxed mb-8">
            Round Kraft Bowls also lists a <strong>750ml PE kraft bowl GO (KB1)</strong> packed{' '}
            <strong>6 × 50 per case</strong>, with a matching <strong>rPET lid for 750ml (KB1)</strong>{' '}
            at the same pack. Use this only when your kitchen is already on the GO lid family — it is
            not interchangeable with the KB3 PET lid. Most new buyers start on KB3 750ml plus KB4
            900/1300ml and keep lid SKUs to two clear PET cases.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Case packs, MOQ and how pricing works
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Core PE kraft bowls and their PET lids pack <strong>6 × 50 per case</strong> (300 units).
            All use <strong>four-tier volume pricing</strong> — more cases lower the price per case.
            There is no custom-print MOQ on these plain lines.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Always check the live tier table on each product in{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              Round Kraft Bowls
            </Link>
            . We do not reprint one-off unit rates here because case tiering is how wholesale pricing
            works. A single-site takeaway often starts on 1–3 cases of 900ml plus the shared KB4 lid;
            multi-site groups consolidate 750ml, 900ml and lids into higher tiers on one Ashbourne
            order.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Kraft bowls vs soup cups, salad tubs and bioboxes
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Round kraft bowls suit cold or warm bowl meals that need a wide open top for toppings.
            Hot soup with a sip lid belongs in{' '}
            <Link href="/blog/soup-containers-ireland-sizes-buying-guide" className="text-blue-600 hover:underline">
              soup containers
            </Link>
            . Hinged clear salad packs are covered in the{' '}
            <Link
              href="/blog/rpet-hinged-salad-containers-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              rPET hinged salad containers Ireland
            </Link>{' '}
            guide. Fold-flat kraft takeaway boxes sit in{' '}
            <Link href="/blog/biobox-containers-ireland-sizes-buying-guide" className="text-blue-600 hover:underline">
              Biobox containers Ireland
            </Link>
            .
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Many Irish kitchens stock kraft bowls for poke and noodles, then keep soup cups and hinged
            salad tubs for other menu lines — plain stock, mixed on one Ashbourne dispatch.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            What to order alongside kraft bowls
          </h2>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
            <li>
              <Link href="/blog/wooden-cutlery-ireland-sizes-buying-guide" className="text-blue-600 hover:underline">
                Wooden cutlery
              </Link>{' '}
              — forks and spoons for bowl meals
            </li>
            <li>
              <Link href="/blog/portion-pots-ireland-pp-vs-paper-buying-guide" className="text-blue-600 hover:underline">
                Portion pots
              </Link>{' '}
              for dressings and sauces beside the bowl
            </li>
            <li>
              <Link href="/blog/kraft-carriers-ireland-sizes-buying-guide" className="text-blue-600 hover:underline">
                Kraft carriers
              </Link>{' '}
              when two bowls leave in one bag
            </li>
            <li>
              <Link href="/blog/cold-cups-ireland-sizes-buying-guide" className="text-blue-600 hover:underline">
                Cold cups
              </Link>{' '}
              for soft drinks with lunch bowls
            </li>
            <li>Napkins and SOS grab bags from plain packaging for sealed bowl deliveries</li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-8">
            Pairing bowls, lids and cutlery on one dispatch keeps Dublin and nationwide kitchens
            stocked before weekend peaks.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Delivery across Ireland from Ashbourne
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            PrintNPack is based in Ashbourne, Co. Meath — convenient for Dublin and Meath collections,
            with nationwide dispatch for Cork, Galway, Limerick and every other county. Plain kraft bowl
            orders move quickly because they are warehouse stock, not made-to-print jobs.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            UK or Europe shipping is only confirmed case-by-case on request; this guide focuses on Irish
            wholesale delivery, which is the core service for these kraft bowl lines.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How to order round kraft bowls in Ireland
          </h2>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-8">
            <li>List your busiest sizes — 750ml sides, 900ml lunch, or 1300ml large bowls</li>
            <li>Match lids to the same family — KB3 for 750ml; KB4 shared for 900ml and 1300ml</li>
            <li>Only add the GO KB1 750ml line if you need that rPET lid family</li>
            <li>Add cutlery, portion pots or carriers if one delivery can cover the full line</li>
            <li>Order by the case on Round Kraft Bowls — watch the volume tiers</li>
            <li>Take nationwide delivery or collect from Ashbourne, Co. Meath</li>
          </ol>

          <div className="bg-slate-900 rounded-xl p-6 mb-8 text-white not-prose">
            <p className="font-semibold mb-1">Ready to restock round kraft bowls?</p>
            <p className="text-slate-400 text-sm mb-4">
              750ml, 900ml and 1300ml PE kraft bowls with matching PET lids and tiered wholesale
              pricing — delivered across Ireland.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={HUB_HREF}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Shop Round Kraft Bowls Ireland →
              </Link>
              <Link
                href={PRODUCT_900_HREF}
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                View 900ml Kraft Bowl
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
                q: 'Where can I buy round kraft bowls wholesale in Ireland?',
                a: 'PrintNPack stocks plain Round Kraft Bowls by the case — 750ml (KB3), 900ml and 1300ml (KB4) PE kraft bowls with matching PET lids — with tiered wholesale pricing from Ashbourne to Dublin, Cork, Galway and nationwide.',
              },
              {
                q: 'What round kraft bowl sizes are available in Ireland?',
                a: 'Core PE kraft sizes are 750ml (KB3), 900ml (KB4) and 1300ml (KB4), each packed 6×50 per case. A separate 750ml GO (KB1) bowl and rPET lid line is also listed.',
              },
              {
                q: 'Which lids fit 750ml, 900ml and 1300ml kraft bowls?',
                a: 'KB3 PET lids fit 750ml KB3 bowls only. KB4 PET lids are shared by 900ml and 1300ml bowls. Do not mix KB3 and KB4. The GO KB1 750ml bowl uses its own rPET lid.',
              },
              {
                q: 'Are these kraft bowls plain or custom printed?',
                a: 'These are plain unprinted kraft bowls sold by the case with no print proof or brand MOQ. Branding can sit on carriers, napkins or meal boxes.',
              },
              {
                q: 'Do you deliver kraft bowls to Dublin, Cork and Galway?',
                a: 'Yes. We deliver Round Kraft Bowls to Dublin, Cork, Galway and all Irish counties, with collection available from Ashbourne, Co. Meath.',
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
              href: '/blog/soup-containers-ireland-sizes-buying-guide',
              src: '/images/plain-packaging/10984485.webp',
              title: 'Soup Containers Ireland: 8–32oz Sizes, Lids & Wholesale Buying Guide',
            },
            {
              href: '/blog/rpet-hinged-salad-containers-ireland-sizes-buying-guide',
              src: '/images/plain-packaging/120336.webp',
              title:
                'rPET Hinged Salad Containers Ireland: Round vs Square vs Oval & Wholesale Buying Guide',
            },
            {
              href: '/blog/biobox-containers-ireland-sizes-buying-guide',
              src: '/images/plain-packaging/120090.webp',
              title: 'Biobox Containers Ireland: Sizes No.1–No.12, Kraft vs White & Wholesale Buying Guide',
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
