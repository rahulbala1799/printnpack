import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/condiment-sachets-ireland-sugar-salt-pepper-buying-guide`;
const HUB_HREF = '/plain-packaging?category=Condiments';
const WHITE_SUGAR_HREF =
  '/plain-packaging/white-sugar-sachets-25g-1000-10500';
const BROWN_SUGAR_HREF =
  '/plain-packaging/brown-sugar-sachets-25g-1000-10498';
const WHITE_STICK_HREF =
  '/plain-packaging/white-sugar-sticks-25g-1000-10501';
const BROWN_STICK_HREF =
  '/plain-packaging/brown-sugar-sticks-25g-1000-10502';
const SALT_HREF = '/plain-packaging/1g-salt-sachets-5000-190001';
const PEPPER_HREF = '/plain-packaging/025g-pepper-sachet-5000-190002';
const VINEGAR_HREF = '/plain-packaging/vinegar-sachets-200-190004';
const KETCHUP_HREF = '/plain-packaging/tomato-ketchup-sachet-200-190005';

const HERO_IMAGE = '/images/plain-packaging/10500.webp';
const BROWN_SUGAR_IMAGE = '/images/plain-packaging/10498.webp';
const WHITE_STICK_IMAGE = '/images/plain-packaging/10501.webp';
const SALT_IMAGE = '/images/plain-packaging/190001.webp';
const PEPPER_IMAGE = '/images/plain-packaging/190002.webp';
const KETCHUP_IMAGE = '/images/plain-packaging/190005.webp';
const VINEGAR_IMAGE = '/images/plain-packaging/190004.webp';
const PORTION_POT_IMAGE = '/images/plain-packaging/120043.webp';
const COFFEE_CUP_IMAGE = '/images/plain-packaging/100070.webp';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Condiment Sachets Ireland: Sugar, Salt, Pepper & Sauce Wholesale Buying Guide',
  description:
    'A practical buying guide to plain sugar sachets and sticks, salt, pepper, vinegar and ketchup sachets in Ireland — case packs, sachets vs sticks, with nationwide delivery from Ashbourne.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-11-19',
  dateModified: '2026-11-19',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I buy sugar and condiment sachets wholesale in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack stocks plain Condiments under wholesale packaging — white and brown sugar sachets and sticks (2.5g, 1,000 per case), 1g salt and 0.25g pepper sachets (5,000 per case), plus vinegar and tomato ketchup sachets (200 per case) — with four-tier volume pricing. Delivery from Ashbourne, Co. Meath to Dublin, Cork, Galway and nationwide.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I buy sugar sachets or sugar sticks?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Choose flat 2.5g sugar sachets for café sugar bowls, hotel trays and self-serve stations where guests tear a packet. Choose 2.5g sugar sticks for barista bars and takeaway counters where a stick slips into a cup sleeve or bag. Both white and brown options pack at 1,000 per case.',
      },
    },
    {
      '@type': 'Question',
      name: 'What case packs do salt, pepper and sauce sachets use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '1g salt sachets and 0.25g pepper sachets pack at 5,000 per case for high-volume dry seasoning. Vinegar sachets and tomato ketchup sachets pack at 200 per case — better suited to chip shops, burger counters and takeaway bags that need wet sauces without open bottles.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Condiment pricing work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every Condiment SKU uses four-tier volume pricing by case count (1–3, 4–6, 7–9 and 10+ cases). Example 1–3 case list prices ex VAT include white sugar sachets from €10.85 per 1,000, brown sugar sachets from €12.71, salt from €13.80 per 5,000 and ketchup from €14.22 per 200. Always check the live tier table on each product page.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you deliver condiment sachets to Dublin, Cork and Galway?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. PrintNPack delivers Condiments lines to Dublin, Cork, Galway and every Irish county from Ashbourne. Local buyers can also collect from Co. Meath.',
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
      name: 'Condiment Sachets Ireland Buying Guide',
      item: PAGE_URL,
    },
  ],
};

const productRows = [
  {
    product: 'White sugar sachets 2.5g',
    pack: '1,000',
    fromPrice: '€10.85',
    use: 'Café bowls, hotel trays, self-serve stations',
  },
  {
    product: 'Brown sugar sachets 2.5g',
    pack: '1,000',
    fromPrice: '€12.71',
    use: 'Coffee, tea and bakery counters that prefer brown',
  },
  {
    product: 'White / brown sugar sticks 2.5g',
    pack: '1,000',
    fromPrice: '€11.08 / €12.95',
    use: 'Barista bars, takeaway sleeves and cup carriers',
  },
  {
    product: '1g salt sachets',
    pack: '5,000',
    fromPrice: '€13.80',
    use: 'Chip shops, burger bags, outdoor catering',
  },
  {
    product: '0.25g pepper sachets',
    pack: '5,000',
    fromPrice: '€25.89',
    use: 'Meal bags and table service without open grinders',
  },
  {
    product: 'Vinegar / ketchup sachets',
    pack: '200',
    fromPrice: '€12.85 / €14.22',
    use: 'Fish & chips, burgers and delivery bags',
  },
];

export default function CondimentSachetsIrelandSugarSaltPepperBuyingGuide() {
  const title =
    'Condiment Sachets Ireland: Sugar, Salt, Pepper & Sauce Wholesale Buying Guide';
  const description =
    'Buy sugar and condiment sachets in Ireland with confidence — plain 2.5g sugar sachets and sticks, 1g salt, 0.25g pepper, vinegar and ketchup case packs, with delivery to Dublin, Cork, Galway and nationwide from Ashbourne.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="condiment sachets ireland, sugar sachets wholesale ireland, sugar sticks dublin, salt pepper sachets cork, ketchup sachets galway, vinegar sachets ireland, brown sugar sachets ashbourne, café sugar packets ireland, takeaway condiment sachets wholesale, plain packaging condiments ireland"
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
          content="Condiment sachets Ireland — white sugar sachets wholesale for Dublin cafés"
        />
        <meta property="article:published_time" content="2026-11-19" />

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
          <span className="text-slate-900">Condiment Sachets Ireland</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            Wholesale Guide
          </span>
          <span className="text-slate-400 text-sm">19 Nov 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Condiment Sachets Ireland: Sugar, Salt, Pepper & Sauce Wholesale Buying Guide
        </h1>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="relative rounded-2xl overflow-hidden h-48 col-span-2 bg-slate-50">
            <Image
              src={HERO_IMAGE}
              alt="Condiment sachets Ireland — white sugar sachets 2.5g wholesale for Dublin cafés"
              fill
              className="object-contain p-4"
              priority
              sizes="(max-width: 768px) 66vw, 512px"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={SALT_IMAGE}
                alt="Salt sachets Ireland — 1g plain salt packets wholesale for Cork chip shops"
                fill
                className="object-contain p-2"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={KETCHUP_IMAGE}
                alt="Ketchup sachets Ireland — tomato ketchup portion sachets wholesale for Galway takeaways"
                fill
                className="object-contain p-2"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Irish cafés, hotels and takeaways need portion condiments that match the service style —
            not one random sugar bowl for every coffee, chip bag and delivery order. PrintNPack stocks
            plain{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              Condiments
            </Link>{' '}
            as warehouse wholesale:{' '}
            <Link href={WHITE_SUGAR_HREF} className="text-blue-600 hover:underline">
              white sugar sachets
            </Link>{' '}
            and{' '}
            <Link href={BROWN_SUGAR_HREF} className="text-blue-600 hover:underline">
              brown sugar sachets
            </Link>
            , sugar sticks,{' '}
            <Link href={SALT_HREF} className="text-blue-600 hover:underline">
              1g salt
            </Link>{' '}
            and{' '}
            <Link href={PEPPER_HREF} className="text-blue-600 hover:underline">
              0.25g pepper
            </Link>
            , plus{' '}
            <Link href={VINEGAR_HREF} className="text-blue-600 hover:underline">
              vinegar
            </Link>{' '}
            and{' '}
            <Link href={KETCHUP_HREF} className="text-blue-600 hover:underline">
              tomato ketchup
            </Link>{' '}
            sachets — with four-tier case pricing and dispatch from Ashbourne to Dublin, Cork, Galway
            and nationwide.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            This guide covers sachets versus sticks, which case pack fits cafés versus chip shops, and
            how to consolidate dry-store seasoning with cups and portion pots. For the wider plain
            range, see our{' '}
            <Link
              href="/blog/plain-packaging-wholesale-ireland"
              className="text-blue-600 hover:underline"
            >
              plain packaging wholesale Ireland
            </Link>{' '}
            overview and the{' '}
            <Link
              href="/blog/portion-pots-ireland-pp-vs-paper-buying-guide"
              className="text-blue-600 hover:underline"
            >
              portion pots Ireland buying guide
            </Link>{' '}
            when you need wet sauces in pots rather than tear-open sachets.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Who buys condiment sachets wholesale in Ireland?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Typical buyers include Dublin coffee shops that keep white and brown sugar on the counter,
            Cork hotels stocking tray sachets for bedroom and meeting-room service, Galway takeaways
            that put salt and ketchup in every delivery bag, fish-and-chip shops that prefer vinegar
            sachets over open bottles, burger counters that need pepper without table grinders, and
            multi-site groups that want one Condiment family across branches without custom print
            artwork.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Choose these plain lines when hygiene, portion control and fast restocking matter more than
            branded sugar packets. Pair café sugar with the cup sizes in our{' '}
            <Link href="/blog/coffee-cups-ireland-guide" className="text-blue-600 hover:underline">
              coffee cups Ireland guide
            </Link>{' '}
            and paper straws with the{' '}
            <Link
              href="/blog/paper-straws-ireland-sizes-wrapped-buying-guide"
              className="text-blue-600 hover:underline"
            >
              paper straws Ireland sizes guide
            </Link>{' '}
            so one Ashbourne order covers the drinks pass.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Ashbourne collection suits Meath and north Dublin kitchens that also pull hot cups, lids
            and napkins on the same trip. Cork and Galway sites usually take nationwide dispatch and
            consolidate Condiments with the rest of the dry store.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Sugar sachets vs sugar sticks — which format to stock
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Both sugar formats are <strong>2.5g</strong> portions packed at <strong>1,000 per case</strong>.
            Flat sachets suit bowls and trays where guests tear a packet. Sticks suit barista and
            takeaway counters where the sugar slips into a sleeve or carrier:
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
            <li>
              <Link href={WHITE_SUGAR_HREF} className="text-blue-600 hover:underline">
                White Sugar Sachets 2.5g (1000)
              </Link>{' '}
              — code <strong>10500</strong>, from <strong>€10.85</strong> ex VAT per case at 1–3 cases
            </li>
            <li>
              <Link href={BROWN_SUGAR_HREF} className="text-blue-600 hover:underline">
                Brown Sugar Sachets 2.5g (1000)
              </Link>{' '}
              — code <strong>10498</strong>, from <strong>€12.71</strong> ex VAT
            </li>
            <li>
              <Link href={WHITE_STICK_HREF} className="text-blue-600 hover:underline">
                White Sugar Sticks 2.5g (1000)
              </Link>{' '}
              — code <strong>10501</strong>, from <strong>€11.08</strong> ex VAT
            </li>
            <li>
              <Link href={BROWN_STICK_HREF} className="text-blue-600 hover:underline">
                Brown Sugar Sticks 2.5g (1000)
              </Link>{' '}
              — code <strong>10502</strong>, from <strong>€12.95</strong> ex VAT
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-8">
            Busy Dublin cafés often keep white sachets on the self-serve station and white sticks behind
            the bar for takeaway. Hotels and B&amp;Bs usually lean on sachets for tray presentation.
            Always check the live four-tier table on{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              Condiments
            </Link>{' '}
            before you consolidate an Ashbourne order — higher case counts drop the price per case.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-8 not-prose">
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={BROWN_SUGAR_IMAGE}
                alt="Brown sugar sachets Ireland — 2.5g plain packets wholesale Ashbourne for Cork hotels"
                fill
                className="object-contain p-3"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={WHITE_STICK_IMAGE}
                alt="Sugar sticks Ireland — white 2.5g sticks wholesale for Galway barista takeaway"
                fill
                className="object-contain p-3"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Salt, pepper and sauce sachets for takeaway bags
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Dry seasoning and wet sauces use different case economics. Salt and pepper ship in large
            packs for high-volume bagging; vinegar and ketchup ship in smaller 200 packs that match
            chip-shop and burger throughput without tying up cash in open bottles:
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
            <li>
              <Link href={SALT_HREF} className="text-blue-600 hover:underline">
                1g Salt Sachets (5000)
              </Link>{' '}
              — code <strong>190001</strong>, from <strong>€13.80</strong> ex VAT per case at 1–3 cases
            </li>
            <li>
              <Link href={PEPPER_HREF} className="text-blue-600 hover:underline">
                0.25g Pepper Sachet (5000)
              </Link>{' '}
              — code <strong>190002</strong>, from <strong>€25.89</strong> ex VAT
            </li>
            <li>
              <Link href={VINEGAR_HREF} className="text-blue-600 hover:underline">
                Vinegar Sachets (200)
              </Link>{' '}
              — code <strong>190004</strong>, from <strong>€12.85</strong> ex VAT
            </li>
            <li>
              <Link href={KETCHUP_HREF} className="text-blue-600 hover:underline">
                Tomato Ketchup Sachet (200)
              </Link>{' '}
              — code <strong>190005</strong>, from <strong>€14.22</strong> ex VAT
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-8">
            Chip shops and late-night takeaways usually consolidate salt with vinegar sachets. Burger
            counters pair pepper with ketchup. For fish-and-chip box sizing that sits beside these
            sachets, see our{' '}
            <Link
              href="/blog/fish-and-chip-boxes-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              fish and chip boxes Ireland sizes guide
            </Link>
            . When you need measured wet sauces in pots instead of tear sachets — garlic mayo, gravy,
            dressings — switch to portion pots rather than forcing a sachet into every menu line.
          </p>

          <div className="overflow-x-auto mb-8 not-prose">
            <table className="min-w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
              <thead className="bg-slate-50 text-left">
                <tr>
                  <th className="px-4 py-3 font-semibold text-slate-900">Product</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">Case pack</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">From (1–3 cases, ex VAT)</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">Typical use</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {productRows.map((row) => (
                  <tr key={row.product}>
                    <td className="px-4 py-3 text-slate-900 font-medium">{row.product}</td>
                    <td className="px-4 py-3 text-slate-700">{row.pack}</td>
                    <td className="px-4 py-3 text-slate-700">{row.fromPrice}</td>
                    <td className="px-4 py-3 text-slate-700">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 mb-8 not-prose">
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={PEPPER_IMAGE}
                alt="Pepper sachets Ireland — 0.25g plain pepper packets wholesale Dublin takeaways"
                fill
                className="object-contain p-3"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={VINEGAR_IMAGE}
                alt="Vinegar sachets Ireland — plain vinegar portion sachets wholesale Cork chip shops"
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
            Every Condiment line in this guide is <strong>plain wholesale warehouse stock</strong> —
            ordered by the case, with no artwork proof and no custom-print minimum. That keeps
            restocking fast for Ashbourne collection or nationwide dispatch when a bank-holiday weekend
            empties the sugar tray or the salt drawer.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            These are not printed logo sugar packets. Most Irish cafés and takeaways pair plain
            Condiments with branded cups, napkins or stickers for the brand touch, and keep seasoning
            as the warehouse SKU that never waits on a proof.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Case packs, MOQ and how pricing works
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Sugar sachets and sticks pack at <strong>1,000</strong> per case. Salt and pepper pack at{' '}
            <strong>5,000</strong>. Vinegar and ketchup pack at <strong>200</strong>. All use{' '}
            <strong>four-tier volume pricing</strong> (1–3, 4–6, 7–9 and 10+ cases). There is no
            custom-print MOQ because these are warehouse stock.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            A single-site Dublin café often starts on 1–3 cases of white sugar sachets plus a case of
            sticks for takeaway. Chip shops lean on salt and vinegar. Multi-site groups consolidate
            Condiments with hot cups and portion pots into higher tiers on one Ashbourne order. Prices
            above are the published 1–3 case list rates ex VAT from the catalogue — always confirm the
            live tier table on{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              Condiments
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Delivery across Ireland from Ashbourne
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            PrintNPack is based in Ashbourne, Co. Meath — convenient for Dublin and Meath collections,
            with nationwide dispatch for Cork, Galway, Limerick and every other county. Condiment
            orders move as warehouse stock, not made-to-print jobs. Local buyers who can collect often
            combine sugar, salt and ketchup with hot cups, lids and napkins on one Ashbourne pickup.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Bank holidays and festival weekends are where sugar and salt stockouts show — improvising
            with open bowls or shared bottles slows service and looks inconsistent in delivery bags.
            Plan case counts around your busiest coffee and takeaway days, not a quiet midweek average.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            UK or Europe shipping is only confirmed case-by-case on request; this guide focuses on Irish
            wholesale delivery, which is the core service for Condiments.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How to order condiment sachets in Ireland
          </h2>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-8">
            <li>Match the service — sugar sachets for trays, sticks for takeaway, salt/pepper for bags</li>
            <li>Add vinegar or ketchup sachets if chip or burger lines need wet sauces in the bag</li>
            <li>Open Condiments and pick the plain SKU and colour you need</li>
            <li>Match case packs to volume — 1,000, 5,000 or 200 depending on the product</li>
            <li>Add hot cups, portion pots or paper straws if one delivery can cover them</li>
            <li>Watch the four-tier volume pricing on each product page</li>
            <li>Take nationwide delivery or collect from Ashbourne, Co. Meath</li>
          </ol>

          <div className="bg-slate-900 rounded-xl p-6 mb-8 text-white not-prose">
            <p className="font-semibold mb-1">Ready to restock condiment sachets?</p>
            <p className="text-slate-400 text-sm mb-4">
              Plain sugar sachets and sticks, salt, pepper, vinegar and ketchup by the case — tiered
              wholesale pricing, delivered across Ireland from Ashbourne.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={HUB_HREF}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Shop Condiments →
              </Link>
              <Link
                href={WHITE_SUGAR_HREF}
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                View White Sugar Sachets
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
                q: 'Where can I buy sugar and condiment sachets wholesale in Ireland?',
                a: 'PrintNPack stocks plain Condiments — white and brown sugar sachets and sticks (2.5g, 1,000 per case), 1g salt and 0.25g pepper (5,000), vinegar and ketchup (200) — with tiered wholesale pricing from Ashbourne to Dublin, Cork, Galway and nationwide.',
              },
              {
                q: 'Should I buy sugar sachets or sugar sticks?',
                a: 'Use flat 2.5g sachets for café bowls, hotel trays and self-serve stations. Use 2.5g sticks for barista bars and takeaway counters where sugar slips into a sleeve or bag. Both pack at 1,000 per case.',
              },
              {
                q: 'What case packs do salt, pepper and sauce sachets use?',
                a: 'Salt (1g) and pepper (0.25g) pack at 5,000 per case. Vinegar and tomato ketchup pack at 200 per case for chip shops, burger counters and takeaway bags.',
              },
              {
                q: 'How does Condiment pricing work?',
                a: 'Four-tier volume pricing applies by case count. Example 1–3 case list prices ex VAT: white sugar sachets from €10.85 per 1,000, brown sugar from €12.71, salt from €13.80 per 5,000, ketchup from €14.22 per 200. Check the live product page for current tiers.',
              },
              {
                q: 'Do you deliver condiment sachets to Dublin, Cork and Galway?',
                a: 'Yes. We deliver Condiments lines to Dublin, Cork, Galway and all Irish counties, with collection available from Ashbourne, Co. Meath.',
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
              href: '/blog/portion-pots-ireland-pp-vs-paper-buying-guide',
              src: PORTION_POT_IMAGE,
              title: 'Portion Pots Ireland: PP vs Paper Buying Guide',
            },
            {
              href: '/blog/coffee-cups-ireland-guide',
              src: COFFEE_CUP_IMAGE,
              title: 'Coffee Cups Ireland: Plain & Printed Buying Guide',
            },
            {
              href: '/blog/paper-straws-ireland-sizes-wrapped-buying-guide',
              src: '/images/plain-packaging/140044.webp',
              title: 'Paper Straws Ireland: Sizes & Wrapped Buying Guide',
            },
            {
              href: '/blog/plain-packaging-wholesale-ireland',
              src: '/images/plain-packaging/100396.webp',
              title: 'Plain Packaging Wholesale Ireland Overview',
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
