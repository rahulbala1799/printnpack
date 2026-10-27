import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/microwave-meal-boxes-ireland-sizes-buying-guide`;
const HUB_HREF = '/plain-packaging?category=Microwave+Meal+Boxes';
const CTC12_HREF =
  '/plain-packaging/12oz-black-1-compartment-microwaveable-containers-8x80-ctc12';
const CTC16_HREF =
  '/plain-packaging/16oz-black-1-compartment-microwaveable-containers-8x80-ctc16';
const CTC800_HREF =
  '/plain-packaging/24oz-black-1-compartment-microwaveable-containers-8x40-ctc800';
const CTC341_HREF =
  '/plain-packaging/34oz-black-1-compartment-microwaveable-containers-8x40-ctc341';
const CTC342_HREF =
  '/plain-packaging/34oz-black-2-compartment-microwaveable-containers-8x40-ctc342';
const CTC343_HREF =
  '/plain-packaging/34oz-black-3-compartment-microwaveable-containers-8x40-ctc343';
const LID_1216_HREF =
  '/plain-packaging/lids-for-1216oz-1-comp-microwaveable-containers-32x20-ctl01216';
const COMBO_1_HREF =
  '/plain-packaging/34oz-1-compartment-microwaveable-cont-lid-combo4x40-120096';
const CLEAR_500_HREF =
  '/plain-packaging/500ml-clear-microwavable-container-and-lids-standard250-120271';
const FUSION_HREF =
  '/plain-packaging/8oz-fusion-microwavable-food-sauce-pots-with-lids-225-120327';

const HERO_IMAGE = '/images/plain-packaging/CTC343.webp';
const TWELVE_IMAGE = '/images/plain-packaging/CTC12.webp';
const SIXTEEN_IMAGE = '/images/plain-packaging/CTC16.webp';
const TWENTY_FOUR_IMAGE = '/images/plain-packaging/CTC800.webp';
const THIRTY_FOUR_IMAGE = '/images/plain-packaging/CTC341.webp';
const TWO_COMP_IMAGE = '/images/plain-packaging/CTC342.webp';
const CLEAR_IMAGE = '/images/plain-packaging/120271.webp';
const FUSION_IMAGE = '/images/plain-packaging/120327.webp';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Microwave Meal Boxes Ireland: 12–34oz Black Sizes, Compartments & Wholesale Buying Guide',
  description:
    'A practical buying guide to plain microwave meal boxes in Ireland — black 12oz to 34oz containers, 1-/2-/3-compartment options, matching lids and combos, clear 500–650ml packs, and nationwide delivery from Ashbourne for meal-prep and takeaways.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-10-27',
  dateModified: '2026-10-27',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I buy microwave meal boxes wholesale in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack stocks plain Microwave Meal Boxes by the case — black 12oz to 34oz containers, matching lids, 34oz container-and-lid combos, and clear 500ml/650ml packs — with tiered wholesale pricing. Delivery from Ashbourne, Co. Meath to Dublin, Cork, Galway and nationwide.',
      },
    },
    {
      '@type': 'Question',
      name: 'What microwave meal box sizes are available in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Black 1-compartment lines cover 12oz and 16oz (8×80 per case) plus 24oz and 34oz (8×40 per case). The 34oz footprint also comes in 2-compartment and 3-compartment trays (8×40). Clear microwavable packs are listed in 500ml and 650ml with lids (250 per case). An 8oz Fusion food and sauce pot with lids packs 225.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do microwave meal boxes need separate lids?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most black CTC bases are sold without lids. Match 12oz/16oz bases to the shared 12/16oz lid case, 24oz bases to the 24oz lid case, and 34oz bases to the lid SKU for that compartment count. 34oz 1-compartment and 2-compartment container-and-lid combos (4×40) are also stocked when you want one case for both parts.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should I choose black microwave boxes vs bagasse or foil?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Black microwave meal boxes suit reheated meal-prep, delivery mains and compartmented set meals that need a rigid plastic tray customers can microwave. Bagasse meal boxes suit compostable fibre trays for counter hot food. Foil containers suit oven or grill work. Many Irish kitchens stock more than one format.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you deliver microwave meal boxes to Dublin, Cork and Galway?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. PrintNPack delivers Microwave Meal Boxes to Dublin, Cork, Galway and every Irish county from Ashbourne. Local buyers can also collect from Co. Meath.',
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
      name: 'Microwave Meal Boxes Ireland Buying Guide',
      item: PAGE_URL,
    },
  ],
};

const sizeRows = [
  {
    size: '12oz black 1-compartment (CTC12)',
    pack: '8 × 80 per case',
    use: 'Sides, lighter lunch portions, meal-prep starters',
  },
  {
    size: '16oz black 1-compartment (CTC16)',
    pack: '8 × 80 per case',
    use: 'Standard single-serve mains and reheated bowls',
  },
  {
    size: '24oz black 1-compartment (CTC800)',
    pack: '8 × 40 per case',
    use: 'Heartier takeaway meals and larger meal-prep fills',
  },
  {
    size: '34oz black 1-compartment (CTC341)',
    pack: '8 × 40 per case',
    use: 'Family portions, mixed bowls, high-fill delivery',
  },
  {
    size: '34oz black 2-compartment (CTC342)',
    pack: '8 × 40 per case',
    use: 'Main plus side under one lid footprint',
  },
  {
    size: '34oz black 3-compartment (CTC343)',
    pack: '8 × 40 per case',
    use: 'Set meals — protein, starch and veg separated',
  },
  {
    size: '12/16oz lids (CTL01216)',
    pack: '32 × 20 per case',
    use: 'Shared lid case for CTC12 and CTC16 bases',
  },
  {
    size: '34oz container & lid combo',
    pack: '4 × 40 per case',
    use: '1-comp or 2-comp base plus lid in one SKU',
  },
  {
    size: 'Clear 500ml / 650ml with lids',
    pack: '250 per case',
    use: 'See-through microwavable packs — standard or heavy duty',
  },
];

export default function MicrowaveMealBoxesIrelandSizesBuyingGuide() {
  const title =
    'Microwave Meal Boxes Ireland: 12–34oz Black Sizes, Compartments & Wholesale Buying Guide';
  const description =
    'Buy microwave meal boxes in Ireland with confidence — black 12oz to 34oz sizes, 1-/2-/3-compartment trays, matching lids and combos, clear 500–650ml packs, and delivery to Dublin, Cork, Galway and nationwide from Ashbourne.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="microwave meal boxes ireland, microwaveable containers wholesale ireland, black microwave containers dublin, 34oz microwave meal box cork, compartment meal prep containers ireland, takeaway microwave trays galway, wholesale microwave lids ashbourne, clear microwavable containers ireland, meal prep packaging ireland, plain microwave food boxes wholesale ireland"
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
          content="Microwave meal boxes Ireland — 34oz black 3-compartment tray wholesale for meal-prep"
        />
        <meta property="article:published_time" content="2026-10-27" />

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
          <span className="text-slate-900">Microwave Meal Boxes Ireland</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            Wholesale Guide
          </span>
          <span className="text-slate-400 text-sm">27 Oct 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Microwave Meal Boxes Ireland: 12–34oz Black Sizes, Compartments &amp; Wholesale Buying Guide
        </h1>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="relative rounded-2xl overflow-hidden h-48 col-span-2 bg-slate-50">
            <Image
              src={HERO_IMAGE}
              alt="Microwave meal boxes Ireland — 34oz black 3-compartment tray for Dublin meal-prep"
              fill
              className="object-contain p-4"
              priority
              sizes="(max-width: 768px) 66vw, 512px"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={TWELVE_IMAGE}
                alt="12oz black microwave container Ireland — 1-compartment wholesale Cork"
                fill
                className="object-contain p-3"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={TWENTY_FOUR_IMAGE}
                alt="24oz black microwave meal box Ireland — takeaway tray wholesale Galway"
                fill
                className="object-contain p-3"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Meal-prep kitchens, health-food counters and delivery operators across Ireland need trays
            customers can reheat at home — not just counter packaging that looks good at hand-over.
            Plain microwave meal boxes give you rigid black (or clear) stock by the case, with size and
            compartment choices that match the menu instead of forcing every dish into one footprint.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            This guide covers the{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              Microwave Meal Boxes
            </Link>{' '}
            wholesale range PrintNPack holds in Ireland — black 12oz to 34oz bases, when to pick
            1-, 2- or 3-compartment trays, how lids and combos line up, clear 500–650ml options, and
            delivery from Ashbourne to Dublin, Cork, Galway and nationwide.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Why Irish kitchens buy plain microwave meal boxes
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Plain microwave trays are warehouse stock: order by the case, no artwork proof, no print
            lead time. That matters when a Dublin meal-prep brand or a Cork multi-site group needs
            trays for next week&apos;s batch cook, not a branded campaign. Black bases also hide sauce
            stains better than clear trays once the lid comes off at home.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Many operators mix formats: microwave boxes for reheated delivery and subscription meals,{' '}
            <Link
              href="/blog/bagasse-meal-boxes-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              bagasse meal boxes
            </Link>{' '}
            for compostable counter trays,{' '}
            <Link
              href="/blog/biobox-containers-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              kraft biobox
            </Link>{' '}
            for lighter dry portions, and{' '}
            <Link
              href="/blog/foil-containers-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              foil containers
            </Link>{' '}
            for oven work. Buy microwave stock where reheating is part of the customer journey.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Black microwave sizes and compartments at a glance
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            The core black CTC lines run from 12oz to 34oz. Use the table to match fill volume and
            compartment layout to your menu, then confirm live case tiers on each product page.
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
              src={THIRTY_FOUR_IMAGE}
              alt="34oz black 1-compartment microwave container Ireland — wholesale meal-prep tray Ashbourne"
              fill
              className="object-contain p-6"
              sizes="(max-width: 768px) 100vw, 720px"
            />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Choosing 12oz–24oz single wells vs 34oz compartments
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Start with fill volume. The{' '}
            <Link href={CTC12_HREF} className="text-blue-600 hover:underline">
              12oz black 1-compartment
            </Link>{' '}
            and{' '}
            <Link href={CTC16_HREF} className="text-blue-600 hover:underline">
              16oz black 1-compartment
            </Link>{' '}
            both pack <strong>8 × 80</strong> per case — high unit counts for busy lunch lines. Move to
            the{' '}
            <Link href={CTC800_HREF} className="text-blue-600 hover:underline">
              24oz black 1-compartment
            </Link>{' '}
            (<strong>8 × 40</strong>) when portions run larger but you still want a single well.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            At 34oz the footprint splits by plating style. The{' '}
            <Link href={CTC341_HREF} className="text-blue-600 hover:underline">
              34oz 1-compartment
            </Link>{' '}
            suits mixed bowls. The{' '}
            <Link href={CTC342_HREF} className="text-blue-600 hover:underline">
              34oz 2-compartment
            </Link>{' '}
            keeps a main and a side apart. The{' '}
            <Link href={CTC343_HREF} className="text-blue-600 hover:underline">
              34oz 3-compartment
            </Link>{' '}
            is the set-meal tray — protein, starch and veg without stacking cups inside one box. All
            three 34oz bases pack <strong>8 × 40</strong> per case.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            A shallow 12oz black base and an 8oz Fusion food-and-sauce pot with lids sit beside the main
            CTC range for sides and sauces — useful when the meal box is the main and the pot rides
            alongside in the bag.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Meal-prep buyers in Dublin often standardise on one 16oz well for weekday lunches and one
            34oz compartmented tray for evening set meals. Cork and Galway takeaways that also sell
            reheated evening specials usually keep 24oz single wells on the shelf so staff are not
            guessing which tray fits which scoop. Pick two sizes you will burn weekly, then add a
            third only when the menu truly needs it — spare cases of unused footprints tie up cash and
            cold-room space.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-8 not-prose">
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={TWO_COMP_IMAGE}
                alt="34oz 2-compartment microwave meal box Ireland — main and side tray wholesale Dublin"
                fill
                className="object-contain p-3"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={SIXTEEN_IMAGE}
                alt="16oz black microwave container Ireland — 1-compartment wholesale for cafés"
                fill
                className="object-contain p-3"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Lids, combos and clear packs
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Most black CTC bases are sold as containers only — order the matching lid case. The{' '}
            <Link href={LID_1216_HREF} className="text-blue-600 hover:underline">
              lids for 12/16oz 1-comp
            </Link>{' '}
            pack <strong>32 × 20</strong> and cover both CTC12 and CTC16. Separate lid cases cover 24oz
            1-compartment and each 34oz compartment layout (1-, 2- and 3-compartment lids).
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            If you prefer one SKU for tray and lid, the{' '}
            <Link href={COMBO_1_HREF} className="text-blue-600 hover:underline">
              34oz 1-compartment container &amp; lid combo
            </Link>{' '}
            and the matching 2-compartment combo both pack <strong>4 × 40</strong>. Combos simplify
            restock for Galway night prep when you do not want lids and bases on different burn rates.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Clear microwavable packs are listed in{' '}
            <Link href={CLEAR_500_HREF} className="text-blue-600 hover:underline">
              500ml
            </Link>{' '}
            and 650ml with lids — standard or heavy duty — at <strong>250 per case</strong>. Use clear
            when the customer needs to see the food before reheating; stick with black CTC when
            presentation after the lid comes off matters more than visibility through the pack.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-8 not-prose">
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={CLEAR_IMAGE}
                alt="500ml clear microwavable container Ireland — standard pack with lid wholesale"
                fill
                className="object-contain p-3"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={FUSION_IMAGE}
                alt="8oz Fusion microwavable sauce pot Ireland — food and sauce pot with lid wholesale"
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
            These microwave meal boxes are <strong>plain wholesale</strong> — unprinted black or clear
            trays with no logo. That keeps MOQ at a case and restocking fast for Ashbourne collection or
            nationwide dispatch. Branding usually sits on the bag, napkin, sticker or sleeve rather than
            on every microwave tray.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            For everyday reheated meals, plain CTC cases plus a branded{' '}
            <Link
              href="/blog/sos-grab-bags-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              SOS grab bag
            </Link>{' '}
            or kraft carrier is the usual Irish mix. Save custom print budget for high-visibility outer
            packaging, not every compartment tray in the fridge.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Case packs, MOQ and how pricing works
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Microwave meal boxes are sold by the case with <strong>four-tier volume pricing</strong> —
            more cases lower the price per case. There is no custom-print MOQ on these plain lines.
            Black 12oz/16oz bases pack <strong>8 × 80</strong>; 24oz and 34oz bases pack{' '}
            <strong>8 × 40</strong>; 34oz combos pack <strong>4 × 40</strong>; clear 500/650ml packs are{' '}
            <strong>250</strong>; the{' '}
            <Link href={FUSION_HREF} className="text-blue-600 hover:underline">
              8oz Fusion pot with lids
            </Link>{' '}
            packs <strong>225</strong>.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Always check the live tier table on each product in{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              Microwave Meal Boxes
            </Link>
            . We do not reprint one-off unit rates here because case tiering is how wholesale pricing
            works. A single-site meal-prep kitchen often starts on 1–3 cases of 16oz or 34oz; multi-site
            groups consolidate bases and lids into higher tiers on one Ashbourne order.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            What to order alongside microwave meal boxes
          </h2>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
            <li>
              <Link
                href="/blog/bagasse-meal-boxes-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                Bagasse meal boxes
              </Link>{' '}
              for compostable counter trays beside reheated lines
            </li>
            <li>
              <Link
                href="/blog/foil-containers-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                Foil containers
              </Link>{' '}
              when the dish goes through an oven or grill first
            </li>
            <li>
              <Link
                href="/blog/soup-containers-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                Soup containers
              </Link>{' '}
              for broths and wet sides that suit a cup format
            </li>
            <li>
              <Link
                href="/blog/wooden-cutlery-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                Wooden cutlery
              </Link>{' '}
              — knives and forks packed with meal-prep deliveries
            </li>
            <li>
              <Link
                href="/blog/sos-grab-bags-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                SOS grab bags
              </Link>{' '}
              for sealed carry-out of filled microwave trays
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-8">
            Pairing microwave trays, lids, cutlery and carriers on one dispatch keeps Dublin and
            nationwide kitchens stocked before weekend batch cooks.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Delivery across Ireland from Ashbourne
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            PrintNPack is based in Ashbourne, Co. Meath — convenient for Dublin and Meath collections,
            with nationwide dispatch for Cork, Galway, Limerick and every other county. Plain microwave
            meal box orders move quickly because they are warehouse stock, not made-to-print jobs.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            UK or Europe shipping is only confirmed case-by-case on request; this guide focuses on Irish
            wholesale delivery, which is the core service for these meal box lines.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How to order microwave meal boxes in Ireland
          </h2>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-8">
            <li>List your busiest fills — 12oz/16oz lunch, 24oz larger mains, or 34oz set meals</li>
            <li>Decide 1-compartment vs 2- or 3-compartment plating on the 34oz footprint</li>
            <li>Match lid cases (or 34oz combos) so bases and lids restock together</li>
            <li>Add clear 500/650ml packs or Fusion sauce pots if the menu needs them</li>
            <li>Order by the case on Microwave Meal Boxes — watch the volume tiers</li>
            <li>Take nationwide delivery or collect from Ashbourne, Co. Meath</li>
          </ol>

          <div className="bg-slate-900 rounded-xl p-6 mb-8 text-white not-prose">
            <p className="font-semibold mb-1">Ready to restock microwave meal boxes?</p>
            <p className="text-slate-400 text-sm mb-4">
              Black 12–34oz trays, 1-/2-/3-compartment options, lids and combos with tiered wholesale
              pricing — delivered across Ireland.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={HUB_HREF}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Shop Microwave Meal Boxes →
              </Link>
              <Link
                href={CTC343_HREF}
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                View 34oz 3-Compartment
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
                q: 'Where can I buy microwave meal boxes wholesale in Ireland?',
                a: 'PrintNPack stocks plain Microwave Meal Boxes by the case — black 12oz to 34oz, matching lids, 34oz combos and clear 500/650ml packs — with tiered wholesale pricing from Ashbourne to Dublin, Cork, Galway and nationwide.',
              },
              {
                q: 'What microwave meal box sizes are available in Ireland?',
                a: 'Black 1-compartment covers 12oz and 16oz (8×80) plus 24oz and 34oz (8×40). The 34oz footprint also comes in 2- and 3-compartment (8×40). Clear packs are 500ml and 650ml with lids (250). An 8oz Fusion pot with lids packs 225.',
              },
              {
                q: 'Do microwave meal boxes need separate lids?',
                a: 'Most black CTC bases are sold without lids. Match 12/16oz bases to the shared lid case, 24oz and each 34oz compartment layout to their lid SKUs, or choose a 34oz container-and-lid combo (4×40).',
              },
              {
                q: 'When should I choose black microwave boxes vs bagasse or foil?',
                a: 'Use microwave meal boxes when customers reheat at home. Bagasse suits compostable counter trays. Foil suits oven or grill work. Many Irish kitchens stock more than one format.',
              },
              {
                q: 'Do you deliver microwave meal boxes to Dublin, Cork and Galway?',
                a: 'Yes. We deliver Microwave Meal Boxes to Dublin, Cork, Galway and all Irish counties, with collection available from Ashbourne, Co. Meath.',
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
              href: '/blog/foil-containers-ireland-sizes-buying-guide',
              src: '/images/plain-packaging/10928.webp',
              title: 'Foil Containers Ireland: Sizes, Lids & Wholesale Buying Guide',
            },
            {
              href: '/blog/biobox-containers-ireland-sizes-buying-guide',
              src: '/images/plain-packaging/120090.webp',
              title: 'Biobox Containers Ireland: Sizes No.1–No.12 & Wholesale Buying Guide',
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
