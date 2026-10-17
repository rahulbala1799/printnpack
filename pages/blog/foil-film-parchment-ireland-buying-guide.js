import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/foil-film-parchment-ireland-buying-guide`;
const HUB_HREF = '/plain-packaging?category=Foil%2CFilm%2C%20Parchment';

const FOIL_90_HREF = '/plain-packaging/18-heavy-duty-catering-foil-90m-6-220001';
const FOIL_75_SIX_HREF = '/plain-packaging/18-heavy-duty-catering-foil-75m-6-220000';
const FOIL_75_ONE_HREF = '/plain-packaging/18-heavy-duty-catering-foil-75m-1-10200';
const PARCHMENT_HREF = '/plain-packaging/baking-parchment-50m-6-220002';
const CLING_12_HREF = '/plain-packaging/12-catering-cling-film-300m-6-220018';
const CLING_18_HREF = '/plain-packaging/18-catering-cling-film-300m-6-220019';
const CLING_REFILL_30_HREF = '/plain-packaging/wm-cling-refill-30cm-x-300m-31c80-3-220003';
const CLING_REFILL_45_HREF = '/plain-packaging/wm-cling-refill-45cm-x-300m-31c81-3-220004';
const DISP_30_HREF = '/plain-packaging/wm3000-dispenser-30cm-63m98-1-220007';
const DISP_45_HREF = '/plain-packaging/wm4500-dispenser-45cm-63m97-1-220008';
const FOIL_REFILL_HREF = '/plain-packaging/wm-foil-refill-45cm-x-90m-24c55-3-220009';
const PARCHMENT_REFILL_HREF = '/plain-packaging/wm-bparchment-refill-45cmx-50m-21c32-3-220010';

const HERO_IMAGE = '/images/plain-packaging/220001.webp';
const PARCHMENT_IMAGE = '/images/plain-packaging/220002.webp';
const CLING_IMAGE = '/images/plain-packaging/220018.webp';
const DISPENSER_IMAGE = '/images/plain-packaging/220007.webp';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Catering Foil, Film & Parchment Ireland: Roll Sizes & Wholesale Buying Guide',
  description:
    'A practical buying guide to plain catering foil, cling film and baking parchment in Ireland — 18″ foil rolls, 12″/18″ cling film, 50m parchment, WM refill and dispenser systems, case packs, and nationwide delivery from Ashbourne.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-10-17',
  dateModified: '2026-10-17',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I buy catering foil, cling film and parchment wholesale in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack stocks plain Foil, Film & Parchment by the case — 18″ heavy-duty catering foil, 12″ and 18″ catering cling film, baking parchment 50m, and WM refill/dispenser lines — with tiered wholesale pricing. Delivery from Ashbourne, Co. Meath to Dublin, Cork, Galway and nationwide.',
      },
    },
    {
      '@type': 'Question',
      name: 'What catering foil and cling film sizes are available in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Heavy-duty catering foil is listed at 18″ in 75m (single roll or 6-pack) and 90m (6-pack). Catering cling film packs as 12″ × 300m and 18″ × 300m (6 per case). WM cling refills run 30cm × 300m and 45cm × 300m (3 per case), with matching WM3000 (30cm) and WM4500 (45cm) dispensers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I buy boxed catering rolls or a WM dispenser system?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Boxed 12″/18″ cling film and 18″ foil suit most Irish takeaways and cafés that want a cutter box ready to use. A WM dispenser plus refill rolls suits busier prep kitchens that burn through wrap daily and want to reload the same housing. Both are plain wholesale lines with no print MOQ.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are these foil, film and parchment products plain or custom printed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'These are plain unprinted catering consumables sold by the case. There is no logo print or brand MOQ — order the roll size and pack format you need. Branding belongs on bags, boxes or greaseproof sheets, not on the wrap roll.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you deliver catering foil and film to Dublin, Cork and Galway?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. PrintNPack delivers Foil, Film & Parchment to Dublin, Cork, Galway and every Irish county from Ashbourne. Local buyers can also collect from Co. Meath.',
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
      name: 'Catering Foil Film Parchment Ireland Buying Guide',
      item: PAGE_URL,
    },
  ],
};

const sizeRows = [
  {
    size: '18″ heavy-duty foil 75m',
    dims: '18″ × 75m',
    pack: '1 roll or 6 per case',
    use: 'Everyday wrap, roasting, freezing — trial pack or bulk',
  },
  {
    size: '18″ heavy-duty foil 90m',
    dims: '18″ × 90m',
    pack: '6 per case',
    use: 'Higher-volume catering foil for busy prep and service',
  },
  {
    size: 'Baking parchment 50m',
    dims: '50m roll (6-pack)',
    pack: '6 per case',
    use: 'Baking sheets, lining trays, non-stick prep',
  },
  {
    size: 'Catering cling film 12″ / 18″',
    dims: '12″ or 18″ × 300m',
    pack: '6 per case',
    use: 'Counter wrap, cold prep, portion covering',
  },
  {
    size: 'WM cling refill 30cm / 45cm',
    dims: '30cm or 45cm × 300m',
    pack: '3 per case',
    use: 'Reload WM3000 / WM4500 dispensers',
  },
  {
    size: 'WM foil / parchment refill',
    dims: '45cm × 90m foil; 45cm × 50m parchment',
    pack: '3 per case',
    use: 'Dispenser system refills for foil and baking parchment',
  },
];

export default function FoilFilmParchmentIrelandBuyingGuide() {
  const title =
    'Catering Foil, Film & Parchment Ireland: Roll Sizes & Wholesale Buying Guide';
  const description =
    'How to buy plain catering foil, cling film and baking parchment in Ireland — 18″ foil 75m/90m, 12″ and 18″ cling film 300m, 50m parchment, WM refill dispensers, case packs, and nationwide delivery from Ashbourne.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="catering foil ireland, cling film wholesale ireland, baking parchment ireland, foodservice wrap dublin, catering foil cork, cling film galway, parchment rolls ashbourne, foil film parchment wholesale ireland, WM cling refill ireland, plain catering wrap ireland"
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
          content="Catering foil Ireland — 18 inch heavy duty aluminium foil 90m wholesale"
        />
        <meta property="article:published_time" content="2026-10-17" />

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
          <span className="text-slate-900">Catering Foil Film Parchment Ireland</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            Wholesale Guide
          </span>
          <span className="text-slate-400 text-sm">17 Oct 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Catering Foil, Film &amp; Parchment Ireland: Roll Sizes &amp; Wholesale Buying Guide
        </h1>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="relative rounded-2xl overflow-hidden h-48 col-span-2 bg-slate-50">
            <Image
              src={HERO_IMAGE}
              alt="Catering foil Ireland — 18 inch heavy duty aluminium foil 90m for Dublin kitchens"
              fill
              className="object-contain p-4"
              priority
              sizes="(max-width: 768px) 66vw, 512px"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={PARCHMENT_IMAGE}
                alt="Baking parchment Ireland — 50m catering parchment roll wholesale Cork"
                fill
                className="object-contain p-3"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={CLING_IMAGE}
                alt="Cling film Ireland — 12 inch 300m foodservice wrap wholesale Galway"
                fill
                className="object-contain p-3"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Hotel kitchens in Dublin, bakery prep in Cork, café counters in Galway — Irish food
            businesses run through catering foil, cling film and baking parchment every service. The
            decision is not whether to wrap; it is which roll width, which metre length, and whether
            you want a ready cutter box or a refill dispenser that stays on the prep bench.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            This guide covers <strong>catering foil, film and parchment in Ireland</strong> as plain
            wholesale stock — <strong>18″ heavy-duty foil</strong>, <strong>12″ and 18″ cling film</strong>,{' '}
            <strong>50m baking parchment</strong>, WM refill and dispenser options, case packs, and how{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              PrintNPack&apos;s Foil, Film &amp; Parchment
            </Link>{' '}
            range works with tiered pricing and delivery from Ashbourne.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Why Irish kitchens buy plain wrap by the case
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Foil, cling film and parchment are high-burn consumables. You need warehouse stock you can
            reorder without artwork proofs or brand MOQs. Plain catering rolls do that job: order the
            width and length that matches your prep tables, stack cases under the counter, and keep
            service moving when Friday prep empties the last roll.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            PrintNPack holds these lines under Foil, Film &amp; Parchment with four-tier case pricing.
            Orders ship nationwide; local buyers can collect from Ashbourne, Co. Meath. For a wider
            view of bulk catering supplies, see our{' '}
            <Link href="/blog/plain-packaging-wholesale-ireland" className="text-blue-600 hover:underline">
              plain packaging wholesale Ireland
            </Link>{' '}
            guide. Formed aluminium trays for takeaway are covered separately in the{' '}
            <Link
              href="/blog/foil-containers-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              foil containers Ireland
            </Link>{' '}
            guide — this page is about rolls and dispensers only.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Foil, film and parchment sizes at a glance
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Start with the wrap your kitchen uses most — often <strong>18″ foil</strong> for hot food
            and roasting, <strong>12″ cling</strong> for counter portions, and a <strong>50m
            parchment</strong> case for baking — then confirm the case pack. Use the table below, then
            check live case tiers on each product page.
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
              src={PARCHMENT_IMAGE}
              alt="Baking parchment Ireland — Caterwrap 50m parchment case for Ashbourne wholesale"
              fill
              className="object-contain p-6"
              sizes="(max-width: 768px) 100vw, 720px"
            />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Heavy-duty 18″ catering foil — 75m and 90m
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            The foil line is fixed at <strong>18″ width</strong>. Choose length and pack: the{' '}
            <Link href={FOIL_75_ONE_HREF} className="text-blue-600 hover:underline">
              18″ Heavy duty catering foil 75m
            </Link>{' '}
            as a <strong>single roll</strong> when you are testing burn rate, the{' '}
            <Link href={FOIL_75_SIX_HREF} className="text-blue-600 hover:underline">
              75m foil 6-pack
            </Link>{' '}
            for regular restock, or the{' '}
            <Link href={FOIL_90_HREF} className="text-blue-600 hover:underline">
              18″ Heavy duty catering foil 90m (6)
            </Link>{' '}
            when longer rolls cut changeovers on a busy prep line.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Dublin hotels and Cork catering kitchens often keep a 6-pack of 90m as standing stock and
            a shorter 75m case for overflow or satellite sites. Galway cafés that wrap less frequently
            may start on the single 75m roll, then step up once the weekly burn is clear.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Catering cling film — 12″ and 18″ × 300m
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Boxed foodservice cling film packs <strong>6 per case</strong> in two widths:{' '}
            <Link href={CLING_12_HREF} className="text-blue-600 hover:underline">
              12″ Catering Cling Film 300m
            </Link>{' '}
            and{' '}
            <Link href={CLING_18_HREF} className="text-blue-600 hover:underline">
              18″ Catering Cling Film 300m
            </Link>
            . The 12″ cutter box suits sandwich counters and portion covering; 18″ covers larger trays
            and hotel cold-prep tables without piecing two strips together.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Match width to your busiest prep surface. A Cork deli wrapping sandwiches all day usually
            burns 12″ faster; a Galway hotel kitchen plating banqueting trays will empty 18″ first.
            Both lengths are <strong>300m</strong>, so you are choosing width and case volume, not metre
            count.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Baking parchment 50m and WM refill systems
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            The{' '}
            <Link href={PARCHMENT_HREF} className="text-blue-600 hover:underline">
              Baking Parchment 50m (6)
            </Link>{' '}
            case is the straightforward bakery SKU — six 50m rolls for lining trays and non-stick
            baking. If your kitchen already runs a wall or bench dispenser, step into the WM refill
            range:{' '}
            <Link href={CLING_REFILL_30_HREF} className="text-blue-600 hover:underline">
              WM Cling Refill 30cm × 300m
            </Link>
            ,{' '}
            <Link href={CLING_REFILL_45_HREF} className="text-blue-600 hover:underline">
              WM Cling Refill 45cm × 300m
            </Link>
            ,{' '}
            <Link href={FOIL_REFILL_HREF} className="text-blue-600 hover:underline">
              WM Foil Refill 45cm × 90m
            </Link>
            , and{' '}
            <Link href={PARCHMENT_REFILL_HREF} className="text-blue-600 hover:underline">
              WM Baking Parchment Refill 45cm × 50m
            </Link>
            — each <strong>3 per case</strong>.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Pair refills with the matching housing:{' '}
            <Link href={DISP_30_HREF} className="text-blue-600 hover:underline">
              WM3000 Dispenser 30cm
            </Link>{' '}
            or{' '}
            <Link href={DISP_45_HREF} className="text-blue-600 hover:underline">
              WM4500 Dispenser 45cm
            </Link>
            , sold as single units. Buy the dispenser once, then reorder refills on the same Ashbourne
            account.
          </p>

          <div className="relative rounded-2xl overflow-hidden h-56 mb-8 bg-slate-50 not-prose">
            <Image
              src={DISPENSER_IMAGE}
              alt="WM3000 dispenser Ireland — 30cm cling film dispenser wholesale for catering kitchens"
              fill
              className="object-contain p-6"
              sizes="(max-width: 768px) 100vw, 720px"
            />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Case packs and wholesale pricing
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Foil 75m is available as <strong>1 roll</strong> or <strong>6 per case</strong>; foil 90m
            and both cling film widths pack <strong>6 per case</strong>. Baking parchment is{' '}
            <strong>6 per case</strong>. WM cling, foil and parchment refills pack <strong>3 per
            case</strong>; dispensers are <strong>1 unit</strong>. All use{' '}
            <strong>four-tier volume pricing</strong> — more cases lower the price per case. There is
            no custom-print MOQ on these plain lines.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Always check the live tier table on each product in{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              Foil, Film &amp; Parchment
            </Link>
            . We do not reprint one-off unit rates here because case tiering is how wholesale pricing
            works. A single-site café often starts on 1–3 cases of 12″ cling plus a foil 6-pack; multi-
            site groups consolidate foil, film and parchment into higher tiers on one Ashbourne order.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Rolls vs foil containers, chicken bags and greaseproof sheets
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Catering foil rolls wrap and cover food on the prep bench. Formed{' '}
            <Link
              href="/blog/foil-containers-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              foil containers
            </Link>{' '}
            are takeaway trays with lids.{' '}
            <Link
              href="/blog/foil-chicken-bags-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              Foil chicken bags
            </Link>{' '}
            are flat portion bags for hot chicken and similar fills. Printed or plain{' '}
            <Link
              href="/blog/custom-greaseproof-sheets-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              greaseproof sheets
            </Link>{' '}
            line trays and wrap burgers — they are not a substitute for cling film or parchment rolls.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Many Irish kitchens stock all four: rolls for prep, containers for delivery trays, chicken
            bags for rotisserie, and greaseproof for chipper wrap — plain stock, mixed on one dispatch.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            What to order alongside foil, film and parchment
          </h2>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
            <li>
              <Link
                href="/blog/foil-containers-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                Foil containers
              </Link>{' '}
              for takeaway meals that need a tray, not just wrap
            </li>
            <li>
              <Link
                href="/blog/foil-chicken-bags-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                Foil chicken bags
              </Link>{' '}
              for portion hot chicken and similar counter lines
            </li>
            <li>
              <Link
                href="/blog/custom-greaseproof-sheets-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                Greaseproof sheets
              </Link>{' '}
              to line trays or brand food wrap
            </li>
            <li>
              <Link
                href="/blog/kraft-food-trays-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                Kraft food trays
              </Link>{' '}
              for open chip and street-food serves beside the wrap station
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-8">
            Pairing wrap, trays and bags on one dispatch keeps Dublin and nationwide kitchens stocked
            before weekend peaks.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Delivery across Ireland from Ashbourne
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            PrintNPack is based in Ashbourne, Co. Meath — convenient for Dublin and Meath collections,
            with nationwide dispatch for Cork, Galway, Limerick and every other county. Plain foil,
            film and parchment orders move quickly because they are warehouse stock, not made-to-print
            jobs.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            UK or Europe shipping is only confirmed case-by-case on request; this guide focuses on Irish
            wholesale delivery, which is the core service for these catering wrap lines.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How to order catering foil, film and parchment in Ireland
          </h2>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-8">
            <li>List your busiest wraps — 18″ foil, 12″ or 18″ cling, and baking parchment</li>
            <li>Decide boxed cutter rolls versus a WM dispenser plus matching refills</li>
            <li>Note case packs — 1 vs 6 for foil, 6 for cling/parchment, 3 for WM refills</li>
            <li>Add foil containers, chicken bags or greaseproof sheets if one delivery can cover prep and takeaway</li>
            <li>Order by the case on Foil, Film &amp; Parchment — watch the volume tiers</li>
            <li>Take nationwide delivery or collect from Ashbourne, Co. Meath</li>
          </ol>

          <div className="bg-slate-900 rounded-xl p-6 mb-8 text-white not-prose">
            <p className="font-semibold mb-1">Ready to restock catering foil, film and parchment?</p>
            <p className="text-slate-400 text-sm mb-4">
              18″ foil, 12″/18″ cling film, 50m parchment and WM refill systems, with tiered wholesale
              pricing — delivered across Ireland.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={HUB_HREF}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Shop Foil, Film &amp; Parchment →
              </Link>
              <Link
                href={FOIL_90_HREF}
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                View 18″ Foil 90m
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
                q: 'Where can I buy catering foil, cling film and parchment wholesale in Ireland?',
                a: 'PrintNPack stocks plain Foil, Film & Parchment by the case — 18″ heavy-duty catering foil, 12″ and 18″ catering cling film, baking parchment 50m, and WM refill/dispenser lines — with tiered wholesale pricing from Ashbourne to Dublin, Cork, Galway and nationwide.',
              },
              {
                q: 'What catering foil and cling film sizes are available in Ireland?',
                a: 'Heavy-duty catering foil is listed at 18″ in 75m (single roll or 6-pack) and 90m (6-pack). Catering cling film packs as 12″ × 300m and 18″ × 300m (6 per case). WM cling refills run 30cm × 300m and 45cm × 300m (3 per case), with matching WM3000 (30cm) and WM4500 (45cm) dispensers.',
              },
              {
                q: 'Should I buy boxed catering rolls or a WM dispenser system?',
                a: 'Boxed 12″/18″ cling film and 18″ foil suit most Irish takeaways and cafés that want a cutter box ready to use. A WM dispenser plus refill rolls suits busier prep kitchens that burn through wrap daily and want to reload the same housing.',
              },
              {
                q: 'Are these products plain or custom printed?',
                a: 'These are plain unprinted catering consumables sold by the case with no print proof or brand MOQ. Branding belongs on bags, boxes or greaseproof sheets.',
              },
              {
                q: 'Do you deliver catering foil and film to Dublin, Cork and Galway?',
                a: 'Yes. We deliver Foil, Film & Parchment to Dublin, Cork, Galway and all Irish counties, with collection available from Ashbourne, Co. Meath.',
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
              href: '/blog/foil-containers-ireland-sizes-buying-guide',
              src: '/images/plain-packaging/10928.webp',
              title: 'Foil Containers Ireland: Sizes, Lids & Wholesale Buying Guide',
            },
            {
              href: '/blog/foil-chicken-bags-ireland-sizes-buying-guide',
              src: '/images/plain-packaging/120704.webp',
              title: 'Foil Chicken Bags Ireland: Portion vs Standard Sizes & Wholesale Buying Guide',
            },
            {
              href: '/blog/custom-greaseproof-sheets-ireland-sizes-buying-guide',
              src: '/images/products/greaseproof-sheets/greaseproof-sheets-ireland-branded-burger-wrap.jpg',
              title: 'Custom Greaseproof Sheets Ireland: Sizes, MOQ & Print Buying Guide',
            },
            {
              href: '/blog/kraft-food-trays-ireland-sizes-buying-guide',
              src: '/images/plain-packaging/120266.webp',
              title: 'Kraft Food Trays Ireland: ½lb–3lb Greenspirit Sizes & Wholesale Buying Guide',
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
