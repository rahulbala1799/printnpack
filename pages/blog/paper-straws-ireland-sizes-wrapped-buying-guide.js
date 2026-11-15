import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/paper-straws-ireland-sizes-wrapped-buying-guide`;
const HUB_HREF = '/plain-packaging?category=Straws';
const RED_6_HREF =
  '/plain-packaging/6x197mm-3ply-greenspirit-paper-straws-red-stripes-50x100-140032';
const KRAFT_8_HREF =
  '/plain-packaging/8x197mm-4ply-greenspirit-paper-straws-kraft-48x100-140044';
const WRAPPED_RED_HREF =
  '/plain-packaging/6x197mm-3ply-wrapped-gs-paper-straws-red-stripes-48x100-140060';
const WRAPPED_KRAFT_HREF =
  '/plain-packaging/8x197mm-4ply-wrapped-gs-paper-straws-kraft-48x100-140061';
const COCKTAIL_HREF =
  '/plain-packaging/5x140mm-3ply-greenspirit-paper-cocktail-straws-black20x250-140084';
const BLACK_6_HREF =
  '/plain-packaging/6x197mm-3ply-greenspirit-paper-straws-black-50x100-140086';

const HERO_IMAGE = '/images/plain-packaging/140044.webp';
const WRAPPED_IMAGE = '/images/plain-packaging/140060.webp';
const COCKTAIL_IMAGE = '/images/plain-packaging/140084.webp';
const RED_IMAGE = '/images/plain-packaging/140032.webp';
const COLD_CUP_IMAGE = '/images/plain-packaging/10427.webp';
const CUTLERY_IMAGE = '/images/plain-packaging/140046.webp';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Paper Straws Ireland: Sizes, Wrapped vs Unwrapped Wholesale Buying Guide',
  description:
    'A practical buying guide to plain Greenspirit paper straws in Ireland — 5×140mm cocktail, 6×197mm and 8×197mm sizes, wrapped vs unwrapped packs, with nationwide delivery from Ashbourne.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-11-15',
  dateModified: '2026-11-15',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I buy paper straws wholesale in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack stocks plain Greenspirit paper straws under Straws — 5×140mm cocktail, 6×197mm drinking and 8×197mm kraft lines, wrapped and unwrapped — with tiered wholesale pricing. Delivery from Ashbourne, Co. Meath to Dublin, Cork, Galway and nationwide.',
      },
    },
    {
      '@type': 'Question',
      name: 'What paper straw sizes are available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Three diameter × length families cover most Irish drinks menus: 5×140mm 3-ply black cocktail straws (20×250 per case), 6×197mm 3-ply red-stripe or black drinking straws (50×100 or 48×100 wrapped), and 8×197mm 4-ply kraft straws for thicker shakes and smoothies (48×100, wrapped or unwrapped).',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I buy wrapped or unwrapped paper straws?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Choose individually wrapped straws for self-serve counters, takeaway bags and hygiene-led sites. Choose unwrapped bulk sleeves for staff-served bars and cafés where straws are handed out from a clean dispenser. Both formats are plain Greenspirit warehouse stock.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are paper straws a legal replacement for plastic straws in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ireland has restricted single-use plastic straws under EU single-use plastics rules. Paper straws are the standard catering swap for cafés, bars, takeaways and events. Match diameter to the drink — cocktail, soft drink or thick smoothie — rather than stocking one size for every cup.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you deliver paper straws to Dublin, Cork and Galway?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. PrintNPack delivers Straws lines to Dublin, Cork, Galway and every Irish county from Ashbourne. Local buyers can also collect from Co. Meath.',
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
      name: 'Paper Straws Ireland Buying Guide',
      item: PAGE_URL,
    },
  ],
};

const sizeRows = [
  {
    size: '5×140mm',
    ply: '3-ply',
    finish: 'Black cocktail',
    pack: '20×250',
    use: 'Cocktails, soft drinks in short glasses, kids cups',
  },
  {
    size: '6×197mm',
    ply: '3-ply',
    finish: 'Red stripe / black',
    pack: '50×100 (or 48×100 wrapped)',
    use: 'Everyday iced coffee, soft drinks, cold cups',
  },
  {
    size: '8×197mm',
    ply: '4-ply',
    finish: 'Kraft',
    pack: '48×100 (wrapped or unwrapped)',
    use: 'Thick shakes, smoothies, bubble-style drinks',
  },
];

export default function PaperStrawsIrelandSizesWrappedBuyingGuide() {
  const title =
    'Paper Straws Ireland: Sizes, Wrapped vs Unwrapped Wholesale Buying Guide';
  const description =
    'Buy paper straws in Ireland with confidence — plain Greenspirit 5×140mm cocktail, 6×197mm and 8×197mm sizes, wrapped vs unwrapped case packs, with delivery to Dublin, Cork, Galway and nationwide from Ashbourne.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="paper straws ireland, greenspirit paper straws wholesale ireland, wrapped paper straws dublin, cocktail paper straws cork, kraft paper straws galway, 8mm paper straws ireland, paper straws ashbourne, compostable paper straws ireland, takeaway paper straws wholesale, paper straw sizes ireland"
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
          content="Paper straws Ireland — 8×197mm kraft Greenspirit straws wholesale for Dublin cafés"
        />
        <meta property="article:published_time" content="2026-11-15" />

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
          <span className="text-slate-900">Paper Straws Ireland</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            Wholesale Guide
          </span>
          <span className="text-slate-400 text-sm">15 Nov 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Paper Straws Ireland: Sizes, Wrapped vs Unwrapped Wholesale Buying Guide
        </h1>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="relative rounded-2xl overflow-hidden h-48 col-span-2 bg-slate-50">
            <Image
              src={HERO_IMAGE}
              alt="Paper straws Ireland — 8×197mm kraft Greenspirit straws wholesale for Dublin cafés"
              fill
              className="object-contain p-4"
              priority
              sizes="(max-width: 768px) 66vw, 512px"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={WRAPPED_IMAGE}
                alt="Wrapped paper straws Ireland — 6×197mm red-stripe individual wraps for Cork takeaways"
                fill
                className="object-contain p-2"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={COCKTAIL_IMAGE}
                alt="Cocktail paper straws Ireland — 5×140mm black 3-ply wholesale for Galway bars"
                fill
                className="object-contain p-2"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Irish cafés, bars and takeaways need paper straws that match the drink — not one random
            sleeve for every iced coffee, cocktail and thick shake. PrintNPack stocks plain Greenspirit
            paper straws under{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              Straws
            </Link>{' '}
            in three size families —{' '}
            <Link href={COCKTAIL_HREF} className="text-blue-600 hover:underline">
              5×140mm cocktail
            </Link>
            ,{' '}
            <Link href={RED_6_HREF} className="text-blue-600 hover:underline">
              6×197mm drinking
            </Link>{' '}
            and{' '}
            <Link href={KRAFT_8_HREF} className="text-blue-600 hover:underline">
              8×197mm kraft
            </Link>{' '}
            — plus wrapped options for hygiene-led counters, with tiered wholesale pricing and dispatch
            from Ashbourne to Dublin, Cork, Galway and nationwide.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            This guide covers which diameter and length to stock, when wrapped beats unwrapped, and how
            case packs work for Irish drinks service. For the wider plain range, see our{' '}
            <Link
              href="/blog/plain-packaging-wholesale-ireland"
              className="text-blue-600 hover:underline"
            >
              plain packaging wholesale Ireland
            </Link>{' '}
            overview and the{' '}
            <Link
              href="/blog/greenspirit-eco-packaging-ireland"
              className="text-blue-600 hover:underline"
            >
              Greenspirit eco packaging Ireland
            </Link>{' '}
            range guide.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Who buys paper straws wholesale in Ireland?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Typical buyers include Dublin coffee shops serving iced lattes in cold cups, Cork cocktail
            bars that need short black straws for highballs, Galway smoothie and juice counters that need
            a wider 8mm kraft straw, hotel bars running evening service, festival and event caterers who
            want individually wrapped straws in takeaway bags, and multi-site groups that want one
            Greenspirit straw family across branches without managing custom print artwork.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Plastic straws are restricted under Irish single-use plastics rules, so paper is the
            everyday catering swap — see our{' '}
            <Link
              href="/blog/eco-packaging-for-takeaways-ireland"
              className="text-blue-600 hover:underline"
            >
              eco packaging for takeaways Ireland
            </Link>{' '}
            guide for the wider compliance picture. Choose these plain Greenspirit lines when you want
            warehouse-stock sizes by the case, ready to reorder without an artwork proof.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Ashbourne collection suits Meath and north Dublin kitchens that also pull cold cups, lids
            and wooden cutlery on the same trip. Cork and Galway sites usually take nationwide dispatch
            and consolidate Straws with the rest of the dry store on one order.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Paper straw sizes — cocktail, drinking and kraft
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Match diameter and length to the drink, not the branding mood board:
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
            <li>
              <Link href={COCKTAIL_HREF} className="text-blue-600 hover:underline">
                5×140mm 3-ply Greenspirit paper cocktail straws black (20×250)
              </Link>{' '}
              — code <strong>140084</strong>
            </li>
            <li>
              <Link href={RED_6_HREF} className="text-blue-600 hover:underline">
                6×197mm 3-ply Greenspirit paper straws red stripes (50×100)
              </Link>{' '}
              — code <strong>140032</strong>; also{' '}
              <Link href={BLACK_6_HREF} className="text-blue-600 hover:underline">
                black 6×197mm (50×100)
              </Link>{' '}
              — code <strong>140086</strong>
            </li>
            <li>
              <Link href={KRAFT_8_HREF} className="text-blue-600 hover:underline">
                8×197mm 4-ply Greenspirit paper straws kraft (48×100)
              </Link>{' '}
              — code <strong>140044</strong>
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-4">
            Use 5×140mm for short glasses and cocktail service. Use 6×197mm for everyday soft drinks and
            iced coffee in standard cold cups. Step up to 8×197mm 4-ply kraft when the drink is thick —
            milkshakes, smoothies and pulp-heavy juices clog a narrow 6mm straw and frustrate guests.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Four-tier volume pricing applies on each product page — more cases lower the price per case.
            We do not reprint unit rates here; always check the live tier table under{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              Straws
            </Link>{' '}
            before you consolidate an Ashbourne order.
          </p>

          <div className="overflow-x-auto mb-8 not-prose">
            <table className="min-w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
              <thead className="bg-slate-50 text-left">
                <tr>
                  <th className="px-4 py-3 font-semibold text-slate-900">Size</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">Ply</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">Finish</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">Case pack</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">Typical use</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {sizeRows.map((row) => (
                  <tr key={row.size}>
                    <td className="px-4 py-3 text-slate-900 font-medium">{row.size}</td>
                    <td className="px-4 py-3 text-slate-700">{row.ply}</td>
                    <td className="px-4 py-3 text-slate-700">{row.finish}</td>
                    <td className="px-4 py-3 text-slate-700">{row.pack}</td>
                    <td className="px-4 py-3 text-slate-700">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Wrapped vs unwrapped — which format to stock
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            The same size often ships in two hygiene formats. Unwrapped sleeves suit staff-served
            counters where a clean dispenser or napkin wrap keeps straws dry until they hit the cup.
            Individually wrapped lines suit self-serve stations, takeaway bags and venues that want a
            clear hygiene cue for guests:
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
            <li>
              <Link href={WRAPPED_RED_HREF} className="text-blue-600 hover:underline">
                6×197mm 3-ply wrapped GS paper straws red stripes (48×100)
              </Link>{' '}
              — code <strong>140060</strong>
            </li>
            <li>
              <Link href={WRAPPED_KRAFT_HREF} className="text-blue-600 hover:underline">
                8×197mm 4-ply wrapped GS paper straws kraft (48×100)
              </Link>{' '}
              — code <strong>140061</strong>
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-8">
            Busy Dublin takeaways often keep unwrapped 6×197mm behind the bar for dine-in and wrapped
            6×197mm in the bagging station for delivery. Smoothie bars that put kraft straws in every
            bag usually prefer the wrapped 8×197mm so the straw stays clean until the customer opens it.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-8 not-prose">
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={WRAPPED_IMAGE}
                alt="Wrapped paper straws Ireland — individually wrapped red-stripe straws wholesale Dublin"
                fill
                className="object-contain p-3"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={RED_IMAGE}
                alt="Unwrapped paper straws Ireland — 6×197mm red-stripe Greenspirit bulk sleeve Ashbourne"
                fill
                className="object-contain p-3"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Pair straws with cold cups, cutlery and eco lines
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Paper straws only work if the cup and lid match. Pair 6×197mm and 8×197mm lines with the
            cold-cup sizes in our{' '}
            <Link
              href="/blog/cold-cups-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              cold cups Ireland sizes buying guide
            </Link>{' '}
            — dome lids and straw-slot flat lids are the usual partners for iced coffee and smoothies.
            Ice cream and gelato counters that also sell soft drinks can consolidate with the{' '}
            <Link
              href="/blog/ice-cream-cups-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              ice cream cups Ireland guide
            </Link>
            .
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Finish the eco dry store with{' '}
            <Link
              href="/blog/wooden-cutlery-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              wooden cutlery
            </Link>{' '}
            for dessert spoons and chip forks. Greenspirit cups, cutlery and kraft trays sit alongside
            these straw SKUs in the same plain wholesale catalogue — one Ashbourne order can cover the
            full drinks and dessert pass.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-8 not-prose">
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={COLD_CUP_IMAGE}
                alt="Cold cups Ireland — Chill paper cups wholesale to pair with paper straws Dublin"
                fill
                className="object-contain p-3"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={CUTLERY_IMAGE}
                alt="Wooden cutlery Ireland — FSC compostable cutlery wholesale with paper straws Cork"
                fill
                className="object-contain p-3"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Plain wholesale stock — no custom-print MOQ
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Every paper straw line in this guide is <strong>plain wholesale warehouse stock</strong> —
            ordered by the case, with no artwork proof and no custom-print minimum. That keeps
            restocking fast for Ashbourne collection or nationwide dispatch when a heatwave or festival
            weekend empties the dry store.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            These are not printed logo straws. Most Irish cafés and bars pair plain Greenspirit straws
            with branded cold cups, napkins or stickers for the brand touch, and keep the straw itself as
            the warehouse SKU that never waits on a proof.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Case packs, MOQ and how pricing works
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Cocktail black straws pack at <strong>20×250</strong> per case. Unwrapped 6×197mm red-stripe
            and black lines pack at <strong>50×100</strong>. Wrapped 6×197mm and both kraft 8×197mm
            lines pack at <strong>48×100</strong>. All use <strong>four-tier volume pricing</strong>.
            There is no custom-print MOQ because these are warehouse stock.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            A single-site Dublin café often starts on 1–3 cases of 6×197mm plus a case of cocktail
            straws for evening service. Smoothie bars lean on kraft 8×197mm. Multi-site groups
            consolidate Straws with cold cups and wooden cutlery into higher tiers on one Ashbourne
            order. Always check the live tier table on{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              Straws
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Delivery across Ireland from Ashbourne
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            PrintNPack is based in Ashbourne, Co. Meath — convenient for Dublin and Meath collections,
            with nationwide dispatch for Cork, Galway, Limerick and every other county. Paper straw
            orders move as warehouse stock, not made-to-print jobs. Local buyers who can collect often
            combine Straws with cold cups, lids and wooden cutlery on one Ashbourne pickup.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Heatwaves and festival weekends are where straw stockouts show — improvising with coffee
            stirrers or the wrong diameter slows service and looks inconsistent on the counter. Plan
            case counts around your busiest iced-drink days, not a quiet midweek average.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            UK or Europe shipping is only confirmed case-by-case on request; this guide focuses on Irish
            wholesale delivery, which is the core service for Straws.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How to order paper straws in Ireland
          </h2>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-8">
            <li>Match the drink — cocktail (5×140mm), soft drink (6×197mm) or thick shake (8×197mm)</li>
            <li>Choose wrapped for takeaway bags and self-serve, or unwrapped for staff-served bars</li>
            <li>Open Straws and pick the Greenspirit size and colour you need</li>
            <li>Match case packs to volume — 20×250, 50×100 or 48×100 depending on the SKU</li>
            <li>Add cold cups, lids or wooden cutlery if one delivery can cover them</li>
            <li>Watch the four-tier volume pricing on each product page</li>
            <li>Take nationwide delivery or collect from Ashbourne, Co. Meath</li>
          </ol>

          <div className="bg-slate-900 rounded-xl p-6 mb-8 text-white not-prose">
            <p className="font-semibold mb-1">Ready to restock paper straws?</p>
            <p className="text-slate-400 text-sm mb-4">
              Plain Greenspirit cocktail, drinking and kraft sizes by the case — wrapped or unwrapped,
              tiered wholesale pricing, delivered across Ireland from Ashbourne.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={HUB_HREF}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Shop Straws →
              </Link>
              <Link
                href={KRAFT_8_HREF}
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                View Kraft 8×197mm
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
                q: 'Where can I buy paper straws wholesale in Ireland?',
                a: 'PrintNPack stocks plain Greenspirit paper straws under Straws — 5×140mm cocktail, 6×197mm drinking and 8×197mm kraft, wrapped and unwrapped — with tiered wholesale pricing from Ashbourne to Dublin, Cork, Galway and nationwide.',
              },
              {
                q: 'What paper straw sizes are available?',
                a: 'Three size families cover most menus: 5×140mm 3-ply black cocktail (20×250), 6×197mm 3-ply red-stripe or black (50×100, or 48×100 wrapped), and 8×197mm 4-ply kraft (48×100 wrapped or unwrapped).',
              },
              {
                q: 'Should I buy wrapped or unwrapped paper straws?',
                a: 'Use individually wrapped straws for self-serve counters and takeaway bags. Use unwrapped bulk sleeves for staff-served bars and cafés with a clean dispenser.',
              },
              {
                q: 'Are paper straws a legal replacement for plastic straws in Ireland?',
                a: 'Ireland has restricted single-use plastic straws under EU rules. Paper straws are the standard catering swap — match diameter to the drink rather than stocking one size for every cup.',
              },
              {
                q: 'Do you deliver paper straws to Dublin, Cork and Galway?',
                a: 'Yes. We deliver Straws lines to Dublin, Cork, Galway and all Irish counties, with collection available from Ashbourne, Co. Meath.',
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
              title: 'Cold Cups Ireland: Sizes & Wholesale Buying Guide',
            },
            {
              href: '/blog/wooden-cutlery-ireland-sizes-buying-guide',
              src: CUTLERY_IMAGE,
              title: 'Wooden Cutlery Ireland: Sizes & Wholesale Buying Guide',
            },
            {
              href: '/blog/greenspirit-eco-packaging-ireland',
              src: '/images/plain-packaging/100396.webp',
              title: 'Greenspirit Eco Packaging Ireland: Range Overview',
            },
            {
              href: '/blog/eco-packaging-for-takeaways-ireland',
              src: '/images/plain-packaging/120525.webp',
              title: 'Eco Packaging for Takeaways Ireland',
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
