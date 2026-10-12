import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/portion-pots-ireland-pp-vs-paper-buying-guide`;
const HUB_HREF = '/plain-packaging?category=Portion+Pots';
const PRODUCT_HREF = '/plain-packaging/2oz-pp-clear-portion-pot-pp2-25x100s-120043';
const PAPER_HREF = '/plain-packaging/2oz-white-paper-portion-pot-pe-pp1-20x50-120163';
const HERO_IMAGE = '/images/plain-packaging/120043.webp';
const LID_2OZ_IMAGE = '/images/plain-packaging/120044.webp';
const FOUR_OZ_IMAGE = '/images/plain-packaging/120045.webp';
const LID_4OZ_IMAGE = '/images/plain-packaging/120046.webp';
const PAPER_2OZ_IMAGE = '/images/plain-packaging/120163.webp';
const PAPER_4OZ_IMAGE = '/images/plain-packaging/120164.webp';
const PAPER_LID_IMAGE = '/images/plain-packaging/120165.webp';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Portion Pots Ireland: PP Clear vs Paper, 1–4oz & Lids Buying Guide',
  description:
    'A practical buying guide to plain portion pots in Ireland — PP clear 2oz/4oz (PP2/PP3) vs white paper PE pots (PP1), matching lids, paper soufflé cups, and nationwide delivery from Ashbourne for takeaways and cafés.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-10-12',
  dateModified: '2026-10-12',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I buy portion pots wholesale in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack stocks plain Portion Pots by the case — PP clear 2oz and 4oz pots with matching lids, white paper PE pots (PP1) with shared HD PP lids, paper soufflé cups and larger deli pots — with tiered wholesale pricing. Delivery from Ashbourne, Co. Meath to Dublin, Cork, Galway and nationwide.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I choose PP clear or paper portion pots?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PP clear pots (PP2 2oz and PP3 4oz) show sauces and dressings and take a dedicated clear lid per size. White paper PE pots (PP1) in 2oz and 4oz suit a paper look beside kraft packaging and share one HD PP lid size for both volumes. Many Irish takeaways stock clear for wet sauces and paper for dry sides or eco-facing counters.',
      },
    },
    {
      '@type': 'Question',
      name: 'What portion pot sizes are available wholesale?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Core sauce lines include 2oz and 4oz PP clear (25×100 per case) with matching lids, 2oz and 4oz white paper PE (20×50) with shared HD lids, plus 1oz and 2oz paper soufflé cups (20×250). The category also includes 1oz Spiritpak pots, microwavable combo pots and larger 8–16oz clear deli containers for salads and sides.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do portion pot lids fit both 2oz and 4oz?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Only within the correct family. PP2 clear 2oz pots need the 2oz PP2 lid; PP3 clear 4oz pots need the 4oz PP3 lid — do not mix them. White paper PE pots (PP1) use one HD PP lid case that covers both 2oz and 4oz paper pots.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you deliver portion pots to Dublin, Cork and Galway?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. PrintNPack delivers Portion Pots to Dublin, Cork, Galway and every Irish county from Ashbourne. Local buyers can also collect from Co. Meath.',
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
      name: 'Portion Pots Ireland Buying Guide',
      item: PAGE_URL,
    },
  ],
};

const sizeRows = [
  {
    size: '2oz PP Clear Portion Pot (PP2)',
    dims: 'Clear polypropylene',
    pack: '25 × 100 per case',
    use: 'Dips, garlic mayo, ketchup portions',
  },
  {
    size: 'Lid for 2oz PP Clear (PP2)',
    dims: 'Clear lid — 2oz only',
    pack: '25 × 100 per case',
    use: 'Seal PP2 pots for delivery bags',
  },
  {
    size: '4oz PP Clear Portion Pot (PP3)',
    dims: 'Clear polypropylene',
    pack: '25 × 100 per case',
    use: 'Larger sauces, coleslaw, gravy dips',
  },
  {
    size: 'Lid for 4oz PP Clear (PP3)',
    dims: 'Clear lid — 4oz only',
    pack: '25 × 100 per case',
    use: 'Seal PP3 pots — do not use on 2oz',
  },
  {
    size: '2oz / 4oz White Paper PE (PP1)',
    dims: 'White paper PE lining',
    pack: '20 × 50 per case',
    use: 'Paper-look sides beside kraft trays',
  },
  {
    size: 'HD PP Lids for 2oz & 4oz (PP1)',
    dims: 'Shared lid for both paper sizes',
    pack: '20 × 50 per case',
    use: 'One lid SKU for PP1 2oz and 4oz pots',
  },
  {
    size: '1oz / 2oz Paper soufflé cups',
    dims: 'Paper soufflé (open top)',
    pack: '20 × 250 per case',
    use: 'Dry samples, condiments, tasting pots',
  },
];

export default function PortionPotsIrelandPpVsPaperBuyingGuide() {
  const title = 'Portion Pots Ireland: PP Clear vs Paper, 1–4oz & Lids Buying Guide';
  const description =
    'Buy portion pots in Ireland with confidence — PP clear 2oz/4oz vs white paper PE pots, matching lids, soufflé cups, and delivery to Dublin, Cork, Galway and nationwide from Ashbourne.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="portion pots ireland, pp clear portion pots wholesale ireland, paper portion pots dublin, sauce pots cork, 2oz 4oz dip pots galway, portion pot lids ashbourne, plain portion pots wholesale ireland, takeaway sauce pots ireland, paper souffle cups ireland, catering portion pots ireland"
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
          content="Portion pots Ireland — 2oz PP clear sauce pot wholesale for takeaways"
        />
        <meta property="article:published_time" content="2026-10-12" />

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
          <span className="text-slate-900">Portion Pots Ireland</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            Wholesale Guide
          </span>
          <span className="text-slate-400 text-sm">12 Oct 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Portion Pots Ireland: PP Clear vs Paper, 1–4oz &amp; Lids Buying Guide
        </h1>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="relative rounded-2xl overflow-hidden h-48 col-span-2 bg-slate-50">
            <Image
              src={HERO_IMAGE}
              alt="Portion pots Ireland — 2oz PP clear sauce pot for Dublin takeaways"
              fill
              className="object-contain p-4"
              priority
              sizes="(max-width: 768px) 66vw, 512px"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={FOUR_OZ_IMAGE}
                alt="4oz PP clear portion pot Ireland — wholesale dip pot Cork"
                fill
                className="object-contain p-3"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={PAPER_2OZ_IMAGE}
                alt="2oz white paper portion pot Ireland — PE lined sauce cup Galway"
                fill
                className="object-contain p-3"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Chip-shop garlic mayo in Dublin, kebab sauces in Cork, deli dips in Galway — Irish takeaways
            live on small pots. Clear PP shows the sauce; white paper PE matches a kraft counter. The
            wrong lid family means leaks in the bag, so size and pot type matter as much as volume.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            This guide covers <strong>portion pots in Ireland</strong> as plain catering stock — PP
            clear 2oz and 4oz (PP2/PP3), white paper PE pots (PP1), matching lids, paper soufflé cups,
            and how{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              PrintNPack&apos;s Portion Pots
            </Link>{' '}
            range works with tiered pricing and delivery from Ashbourne.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Why Irish kitchens buy plain portion pots by the case
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Plain portion pots are warehouse stock: order by the case, no print proof, no brand MOQ.
            That matters when a Cork chipper burns through 2oz pots on a Friday night or an Ashbourne
            café needs sealed 4oz coleslaw pots before a lunch rush. Branding can sit on the burger box
            or carrier — the pot only has to hold sauce, seal, and travel.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            PrintNPack holds PP clear pots alongside white paper PE pots, soufflé cups and larger clear
            deli containers in Portion Pots. Orders ship nationwide; local buyers can collect from
            Ashbourne, Co. Meath. For a wider view of bulk catering lines, see our{' '}
            <Link href="/blog/plain-packaging-wholesale-ireland" className="text-blue-600 hover:underline">
              plain packaging wholesale Ireland
            </Link>{' '}
            guide. Hot soup is a different line — see the{' '}
            <Link href="/blog/soup-containers-ireland-sizes-buying-guide" className="text-blue-600 hover:underline">
              soup containers Ireland
            </Link>{' '}
            guide for 8–32oz Spiritpak cups.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Portion pot sizes at a glance
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Start with the sauce volume your menu sells most — often <strong>2oz</strong> for dips and{' '}
            <strong>4oz</strong> for sides — then choose clear PP or paper PE. Use the table below, then
            confirm live case tiers on each product page.
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
              src={LID_2OZ_IMAGE}
              alt="2oz PP clear portion pot lid Ireland — wholesale sauce pot lid Ashbourne"
              fill
              className="object-contain p-6"
              sizes="(max-width: 768px) 100vw, 720px"
            />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            PP clear portion pots — 2oz (PP2) and 4oz (PP3)
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            The core clear line is <strong>PP Clear Portion Pots</strong> in{' '}
            <strong>2oz (PP2)</strong> and <strong>4oz (PP3)</strong>, each packed{' '}
            <strong>25 × 100 per case</strong> (2,500 pots). The{' '}
            <Link href={PRODUCT_HREF} className="text-blue-600 hover:underline">
              2oz PP clear portion pot
            </Link>{' '}
            is the everyday dip size for many Irish takeaways; <strong>4oz</strong> covers larger
            sauces, gravy dips and small sides. Matching lids are sold separately —{' '}
            <strong>25 × 100 per case</strong> for each size — so you can buy lids ahead of pots when
            delivery bags are the leak risk.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Dublin and Cork kitchens often keep 2oz clear as standing stock, then add 4oz when sides
            like coleslaw move into pots. <strong>Do not mix lid sizes</strong>: the 2oz PP2 lid only
            fits PP2 pots; the 4oz PP3 lid only fits PP3. Staff guessing mid-service is how bags stain
            on the way home.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-8 not-prose">
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={FOUR_OZ_IMAGE}
                alt="4oz PP clear portion pot Ireland — wholesale sauce pot Dublin"
                fill
                className="object-contain p-3"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={LID_4OZ_IMAGE}
                alt="4oz PP clear portion pot lid Ireland — PP3 lid Cork wholesale"
                fill
                className="object-contain p-3"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            White paper PE pots (PP1) vs paper soufflé cups
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Prefer a paper look beside kraft trays and bags? Stock{' '}
            <strong>white paper portion pots with PE lining (PP1)</strong> in{' '}
            <strong>2oz and 4oz</strong>, each packed <strong>20 × 50 per case</strong> (1,000 pots).
            One{' '}
            <Link href={PAPER_HREF} className="text-blue-600 hover:underline">
              2oz white paper portion pot
            </Link>{' '}
            line pairs with the same <strong>HD PP lid</strong> case that also fits 4oz PP1 pots —{' '}
            <strong>20 × 50 per case</strong> — so paper counters keep a simpler lid SKU than clear PP.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            <strong>Paper soufflé cups</strong> in <strong>1oz and 2oz</strong> pack{' '}
            <strong>20 × 250 per case</strong> and suit dry condiments, tasting samples and open-top
            service where a snap lid is not required. A 1oz Clear Spiritpak portion pot (50 × 100) is
            also listed for very small wet portions when you want clear plastic at 1oz.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            For compostable meal boxes and sugarcane fibre trays that often sit beside sauce pots, see
            our{' '}
            <Link href="/blog/bagasse-meal-boxes-ireland-sizes-buying-guide" className="text-blue-600 hover:underline">
              bagasse meal boxes Ireland
            </Link>{' '}
            guide. Clear PP pots remain the workhorse for wet sauces that need a visible seal; paper
            PE suits eco-facing counters that still need a lid.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-8 not-prose">
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={PAPER_4OZ_IMAGE}
                alt="4oz white paper portion pot Ireland — PE lined pot Galway wholesale"
                fill
                className="object-contain p-3"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={PAPER_LID_IMAGE}
                alt="HD PP lids for 2oz and 4oz paper portion pots Ireland — Ashbourne wholesale"
                fill
                className="object-contain p-3"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Larger deli pots when 4oz is not enough
          </h2>
          <p className="text-slate-700 leading-relaxed mb-8">
            Portion Pots also includes larger clear lines for salad bars and deli counters — for
            example 8oz/14oz PET tri-pots, Greenspirit rPET deli containers in 8oz, 12oz and 16oz with
            shared lids, and 2oz/4oz clear microwavable pots sold as pot-and-lid combos (1,000 per
            case). Use those when the “portion” is a full side salad, not a sauce dip. For hinged cold
            salad tubs instead of round pots, see the{' '}
            <Link
              href="/blog/rpet-hinged-salad-containers-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              rPET hinged salad containers Ireland
            </Link>{' '}
            guide.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Case packs, MOQ and how pricing works
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            PP clear pots and lids pack <strong>25 × 100 per case</strong>. Paper PE pots and their
            shared HD lids pack <strong>20 × 50</strong>. Paper soufflé cups pack{' '}
            <strong>20 × 250</strong>. All use <strong>four-tier volume pricing</strong> — more cases
            lower the price per case. There is no custom-print MOQ on these plain lines.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Always check the live tier table on each product in{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              Portion Pots
            </Link>
            . We do not reprint one-off unit rates here because case tiering is how wholesale pricing
            works. A single-site takeaway often starts on 1–3 cases of 2oz PP clear plus lids;
            multi-site groups consolidate pots and lids into higher tiers on one Ashbourne order.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            What to order alongside portion pots
          </h2>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
            <li>
              <Link
                href="/blog/corrugated-clamshell-meal-boxes-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                Corrugated clamshell meal boxes
              </Link>{' '}
              — burger and meal packs that need a sauce pot in the bag
            </li>
            <li>
              <Link href="/blog/wooden-cutlery-ireland-sizes-buying-guide" className="text-blue-600 hover:underline">
                Wooden cutlery
              </Link>{' '}
              for dip spoons and chip forks
            </li>
            <li>
              <Link href="/blog/soup-containers-ireland-sizes-buying-guide" className="text-blue-600 hover:underline">
                Soup containers
              </Link>{' '}
              when lunch mixes hot broth and cold dips
            </li>
            <li>
              <Link href="/blog/cold-cups-ireland-sizes-buying-guide" className="text-blue-600 hover:underline">
                Cold cups
              </Link>{' '}
              for soft drinks beside takeaway meals
            </li>
            <li>Napkins, kraft carriers and grab bags from plain packaging for sealed pot deliveries</li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-8">
            Pairing pots, lids and meal boxes on one dispatch keeps Dublin and nationwide kitchens
            stocked before weekend peaks.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Delivery across Ireland from Ashbourne
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            PrintNPack is based in Ashbourne, Co. Meath — convenient for Dublin and Meath collections,
            with nationwide dispatch for Cork, Galway, Limerick and every other county. Plain portion
            pot orders move quickly because they are warehouse stock, not made-to-print jobs.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            UK or Europe shipping is only confirmed case-by-case on request; this guide focuses on Irish
            wholesale delivery, which is the core service for these portion-pot lines.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How to order portion pots in Ireland
          </h2>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-8">
            <li>List your busiest sizes — 2oz dips, 4oz sides, or 1oz samples</li>
            <li>Choose PP clear (show the sauce) or white paper PE (paper look)</li>
            <li>Match lids to the same family — PP2/PP3 separate lids; PP1 shared HD lid</li>
            <li>Add meal boxes, cutlery or soup cups if one delivery can cover the full line</li>
            <li>Order by the case on Portion Pots — watch the volume tiers</li>
            <li>Take nationwide delivery or collect from Ashbourne, Co. Meath</li>
          </ol>

          <div className="bg-slate-900 rounded-xl p-6 mb-8 text-white not-prose">
            <p className="font-semibold mb-1">Ready to restock portion pots?</p>
            <p className="text-slate-400 text-sm mb-4">
              PP clear 2oz/4oz, white paper PE pots, matching lids and soufflé cups with tiered
              wholesale pricing — delivered across Ireland.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={HUB_HREF}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Shop Portion Pots Ireland →
              </Link>
              <Link
                href={PRODUCT_HREF}
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                View 2oz PP Clear Pot
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
                q: 'Where can I buy portion pots wholesale in Ireland?',
                a: 'PrintNPack stocks plain Portion Pots by the case — PP clear 2oz/4oz with matching lids, white paper PE pots (PP1) with shared HD lids, soufflé cups and larger deli pots — with tiered wholesale pricing from Ashbourne to Dublin, Cork, Galway and nationwide.',
              },
              {
                q: 'Should I choose PP clear or paper portion pots?',
                a: 'PP clear (PP2/PP3) shows sauces and needs a dedicated lid per size. White paper PE (PP1) suits a paper look beside kraft packaging and shares one HD PP lid for 2oz and 4oz. Many Irish takeaways stock both.',
              },
              {
                q: 'What portion pot sizes are available wholesale?',
                a: 'Core lines include 2oz and 4oz PP clear (25×100) with matching lids, 2oz and 4oz white paper PE (20×50) with shared HD lids, plus 1oz and 2oz paper soufflé cups (20×250). Larger 8–16oz clear deli containers are also in the category.',
              },
              {
                q: 'Do portion pot lids fit both 2oz and 4oz?',
                a: 'Only within the correct family. PP2 and PP3 clear lids are size-specific. White paper PE pots (PP1) use one HD PP lid case for both 2oz and 4oz.',
              },
              {
                q: 'Do you deliver portion pots to Dublin, Cork and Galway?',
                a: 'Yes. We deliver Portion Pots to Dublin, Cork, Galway and all Irish counties, with collection available from Ashbourne, Co. Meath.',
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
              href: '/blog/cold-cups-ireland-sizes-buying-guide',
              src: '/images/plain-packaging/10427.webp',
              title: 'Cold Cups Ireland: Chill Paper & rPET Juice Sizes Buying Guide',
            },
            {
              href: '/blog/plain-packaging-wholesale-ireland',
              src: '/images/plain-packaging/100396.webp',
              title: 'Plain Packaging Wholesale Ireland: How to Buy Catering Supplies in Bulk',
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
