import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/white-cake-boxes-ireland-sizes-buying-guide`;
const HUB_HREF = '/plain-packaging?category=Bakery+Packaging';
const CUSTOM_HREF = '/custom-cake-boxes-ireland';
const BOX_6_HREF = '/plain-packaging/white-cake-box-6x6x3-250-230007';
const BOX_8_HREF = '/plain-packaging/white-cake-box-8x8x3-250-230008';
const BOX_10_HREF = '/plain-packaging/white-cake-box-10x10x4-100-230009';
const BOX_12_HREF = '/plain-packaging/white-cake-box-12x12x4-100-230010';
const CUPCAKE_HREF =
  '/plain-packaging/6-cupcake-box-with-inserts-242x165x75mm-125-230000';

const HERO_IMAGE = '/images/plain-packaging/230007.webp';
const EIGHT_IMAGE = '/images/plain-packaging/230008.webp';
const TEN_IMAGE = '/images/plain-packaging/230009.webp';
const TWELVE_IMAGE = '/images/plain-packaging/230010.webp';
const CUPCAKE_IMAGE = '/images/plain-packaging/230000.webp';
const CAKE_CARD_IMAGE = '/images/plain-packaging/1022210.webp';
const CUSTOM_IMAGE =
  '/images/products/custom-cake-boxes/custom-cake-boxes-ireland-luxury-navy-cupcake-window.jpg';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'White Cake Boxes Ireland: 6–12″ Sizes & Wholesale Buying Guide',
  description:
    'A practical buying guide to plain white cake boxes in Ireland — 6×6×3″, 8×8×3″, 10×10×4″ and 12×12×4″ sizes, case packs, plain vs custom print, and nationwide delivery from Ashbourne for bakeries and cafés.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-11-02',
  dateModified: '2026-11-02',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I buy white cake boxes wholesale in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack stocks plain white cake boxes by the case under Bakery Packaging — 6×6×3″, 8×8×3″, 10×10×4″ and 12×12×4″ — with tiered wholesale pricing. Delivery from Ashbourne, Co. Meath to Dublin, Cork, Galway and nationwide.',
      },
    },
    {
      '@type': 'Question',
      name: 'What white cake box sizes are available in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Four plain white sizes: 6×6×3″ (250 per case, code 230007), 8×8×3″ (250 per case, 230008), 10×10×4″ (100 per case, 230009) and 12×12×4″ (100 per case, 230010). Match the footprint to your tin and cake card.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are these cake boxes plain or custom printed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'These lines are plain white wholesale bakery stock — unprinted boxes with no artwork proof and no custom-print minimum. Order by the case with four-tier volume pricing. For branded window boxes, foil and embossing, see custom cake boxes Ireland.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I buy white cake boxes or custom printed cake boxes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use plain white cake boxes for everyday sponges, traybakes and café cakes where speed and case pricing matter. Invest in custom printed cake boxes for celebration ranges, gift cakes and high-street brand visibility. Many Irish bakeries run both.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you deliver white cake boxes to Dublin, Cork and Galway?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. PrintNPack delivers Bakery Packaging to Dublin, Cork, Galway and every Irish county from Ashbourne. Local buyers can also collect from Co. Meath.',
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
      name: 'White Cake Boxes Ireland Buying Guide',
      item: PAGE_URL,
    },
  ],
};

const sizeRows = [
  {
    size: '6×6×3″ white cake box',
    code: '230007',
    pack: '250 per case',
    use: 'Small sponges, café portion cakes, kids celebration cakes',
  },
  {
    size: '8×8×3″ white cake box',
    code: '230008',
    pack: '250 per case',
    use: 'Standard 8″ sponges and everyday celebration cakes',
  },
  {
    size: '10×10×4″ white cake box',
    code: '230009',
    pack: '100 per case',
    use: 'Larger celebration cakes needing extra head height',
  },
  {
    size: '12×12×4″ white cake box',
    code: '230010',
    pack: '100 per case',
    use: '12″ celebration cakes, tall finishes and weekend orders',
  },
];

export default function WhiteCakeBoxesIrelandSizesBuyingGuide() {
  const title = 'White Cake Boxes Ireland: 6–12″ Sizes & Wholesale Buying Guide';
  const description =
    'Buy plain white cake boxes in Ireland — 6×6×3″, 8×8×3″, 10×10×4″ and 12×12×4″ sizes, case packs, and delivery to Dublin, Cork, Galway and nationwide from Ashbourne.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="white cake boxes ireland, plain cake boxes wholesale ireland, 8 inch cake box dublin, 10 inch cake box cork, bakery packaging galway, white cake boxes ashbourne, cake boxes wholesale ireland, 6x6 cake box ireland, 12 inch cake box ireland, plain vs printed cake boxes ireland"
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
          content="White cake boxes Ireland — 6×6×3 inch plain bakery box wholesale"
        />
        <meta property="article:published_time" content="2026-11-02" />

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
          <span className="text-slate-900">White Cake Boxes Ireland</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            Wholesale Guide
          </span>
          <span className="text-slate-400 text-sm">2 Nov 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          White Cake Boxes Ireland: 6–12″ Sizes &amp; Wholesale Buying Guide
        </h1>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="relative rounded-2xl overflow-hidden h-48 col-span-2 bg-slate-50">
            <Image
              src={HERO_IMAGE}
              alt="White cake boxes Ireland — 6×6×3 inch plain bakery box for Dublin bakeries"
              fill
              className="object-contain p-4"
              priority
              sizes="(max-width: 768px) 66vw, 512px"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={EIGHT_IMAGE}
                alt="8 inch white cake box Ireland — plain wholesale bakery packaging Cork"
                fill
                className="object-contain p-2"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={TWELVE_IMAGE}
                alt="12 inch white cake box Ireland — tall celebration cake box wholesale Galway"
                fill
                className="object-contain p-2"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Irish bakeries, patisseries and café counters need a clean square carton that protects a
            finished cake without stealing the show — and that restocks by the case before Saturday
            orders. PrintNPack stocks plain <strong>white cake boxes</strong> in four footprints under{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              Bakery Packaging
            </Link>
            , with tiered wholesale pricing and dispatch from Ashbourne to Dublin, Cork, Galway and
            nationwide.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            This guide covers the 6×6×3″ through 12×12×4″ sizes, how case packs differ between small and
            large formats, when plain white stock beats custom print, and how to match boxes to{' '}
            <Link
              href="/blog/cake-cards-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              cake cards
            </Link>{' '}
            and cupcake packaging. For the wider plain range, see our{' '}
            <Link
              href="/blog/plain-packaging-wholesale-ireland"
              className="text-blue-600 hover:underline"
            >
              plain packaging wholesale Ireland
            </Link>{' '}
            overview.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Who buys white cake boxes in Ireland?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            The Bakery Packaging white cake box lines suit kitchens that box whole sponges and
            celebration cakes every week. Typical buyers include high-street bakeries in Dublin and Cork,
            café kitchens packaging weekend cakes for collection, home bakers stepping into wholesale
            case packs, hotel pastry teams in Galway, and multi-site bakery groups that want one unprinted
            SKU set across branches.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            If your hero range is a branded gift cake with a window panel or foil finish, start with{' '}
            <Link href={CUSTOM_HREF} className="text-blue-600 hover:underline">
              custom cake boxes
            </Link>{' '}
            instead. Choose plain white boxes when the cake itself is the visual, stickers carry the logo,
            and you need fast case restocking without artwork lead times.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            White cake box sizes at a glance
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            All four lines are plain white square cartons sold under Bakery Packaging. The smaller two
            sizes pack <strong>250 per case</strong>; the larger two pack <strong>100 per case</strong>{' '}
            — so dry-store planning changes when you step from 8″ to 10″. Product codes{' '}
            <strong>230007–230010</strong> help when reordering from an Ashbourne account or matching a
            previous case label.
          </p>

          <div className="overflow-x-auto mb-8 not-prose">
            <table className="min-w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
              <thead className="bg-slate-50 text-left">
                <tr>
                  <th className="px-4 py-3 font-semibold text-slate-900">Size</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">Code</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">Case pack</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">Typical use</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {sizeRows.map((row) => (
                  <tr key={row.code}>
                    <td className="px-4 py-3 text-slate-900 font-medium">{row.size}</td>
                    <td className="px-4 py-3 text-slate-700">{row.code}</td>
                    <td className="px-4 py-3 text-slate-700">{row.pack}</td>
                    <td className="px-4 py-3 text-slate-700">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            6″ and 8″ vs 10″ and 12″ — which sizes should Irish bakeries stock?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            The{' '}
            <Link href={BOX_6_HREF} className="text-blue-600 hover:underline">
              6×6×3″ white cake box
            </Link>{' '}
            suits small sponges, café portion cakes and kids celebration cakes. Dublin lunch bakeries and
            Cork café counters often move 6″ faster than 12″ during the week.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            The{' '}
            <Link href={BOX_8_HREF} className="text-blue-600 hover:underline">
              8×8×3″ white cake box
            </Link>{' '}
            is the everyday celebration footprint for many Irish bakeries — standard 8″ sponges with a
            matching 8″ cake card. Most single-site shops start here and only add larger sizes when
            weekend order books need them.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            The{' '}
            <Link href={BOX_10_HREF} className="text-blue-600 hover:underline">
              10×10×4″ white cake box
            </Link>{' '}
            and{' '}
            <Link href={BOX_12_HREF} className="text-blue-600 hover:underline">
              12×12×4″ white cake box
            </Link>{' '}
            add footprint and 4″ height for taller finishes and larger celebration cakes. Galway and
            Dublin pastry kitchens usually keep 10″ or 12″ as the weekend SKU and run 6″/8″ for midweek
            volume.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Match the box footprint to the cake card you already stock — 8″ boxes with 8″ cards, 10″ with
            10″, and so on — so cakes sit centred without wasting board. Holding every size without a clear
            tin plan ties up cash and shelf space.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-8 not-prose">
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={TEN_IMAGE}
                alt="10 inch white cake box Ireland — 10×10×4 inch plain bakery carton wholesale Dublin"
                fill
                className="object-contain p-3"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={CAKE_CARD_IMAGE}
                alt="Cake cards Ireland — round cake board to pair with white cake boxes Ashbourne"
                fill
                className="object-contain p-3"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Plain white cake boxes vs custom printed cake boxes
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            These white cake boxes are <strong>plain wholesale</strong> — unprinted white cartons with no
            logo proof and no custom-print MOQ. That keeps restocking at a case and suits bakeries that
            brand with a sticker, tissue wrap or outer bag instead of full-bleed print on every box.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Custom printed cake boxes — including window panels, foil, embossing and luxury finishes —
            belong on gift and celebration ranges where the box sells the brand before the lid opens. See
            our{' '}
            <Link
              href="/blog/custom-cake-boxes-ireland-buying-guide"
              className="text-blue-600 hover:underline"
            >
              custom cake boxes Ireland buying guide
            </Link>{' '}
            for that route. Many Irish bakeries run plain white for everyday sponges and custom print for
            premium lines.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            For cupcake and muffin collections, pair white cake boxes with{' '}
            <Link
              href="/blog/cupcake-boxes-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              6-cavity cupcake boxes
            </Link>{' '}
            rather than forcing a whole-cake footprint onto a six-cup set.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-8 not-prose">
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={CUPCAKE_IMAGE}
                alt="Cupcake boxes Ireland — 6-cavity bakery box wholesale alternative for Dublin cafés"
                fill
                className="object-contain p-3"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={CUSTOM_IMAGE}
                alt="Custom cake boxes Ireland — printed navy window box for branded bakery gifts"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Case packs, MOQ and how pricing works
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            White cake boxes are sold by the case with <strong>four-tier volume pricing</strong> — more
            cases lower the price per case. There is no custom-print MOQ on these plain lines. The 6″ and
            8″ sizes pack <strong>250 per case</strong>; the 10″ and 12″ sizes pack{' '}
            <strong>100 per case</strong>.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Always check the live tier table on each product in{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              Bakery Packaging
            </Link>
            . We do not reprint one-off unit rates here because case tiering is how wholesale pricing
            works. A single-site bakery often starts on 1–3 cases of 8″; multi-site groups consolidate 6″,
            8″ and 10″ into higher tiers on one Ashbourne order.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            What to order alongside white cake boxes
          </h2>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
            <li>
              <Link
                href="/blog/cake-cards-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                Cake cards
              </Link>{' '}
              — round and square boards from 7″ to 12″ matched to the box footprint
            </li>
            <li>
              <Link href={CUPCAKE_HREF} className="text-blue-600 hover:underline">
                6-cavity cupcake boxes with inserts
              </Link>{' '}
              for cupcake and muffin collections
            </li>
            <li>
              <Link
                href="/blog/custom-cake-boxes-ireland-buying-guide"
                className="text-blue-600 hover:underline"
              >
                Custom cake boxes
              </Link>{' '}
              for branded gift and celebration ranges
            </li>
            <li>
              <Link
                href="/blog/custom-printed-tissue-paper-ireland-buying-guide"
                className="text-blue-600 hover:underline"
              >
                Custom printed tissue paper
              </Link>{' '}
              for unboxing wrap inside plain white cartons
            </li>
            <li>
              <Link
                href="/blog/sos-grab-bags-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                SOS grab bags
              </Link>{' '}
              for sealed carry-out of boxed cakes
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-8">
            Pairing white cake boxes, cake cards and cupcake boxes on one dispatch keeps Dublin and
            nationwide bakeries stocked before Friday collection peaks.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Delivery across Ireland from Ashbourne
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            PrintNPack is based in Ashbourne, Co. Meath — convenient for Dublin and Meath collections,
            with nationwide dispatch for Cork, Galway, Limerick and every other county. Plain white cake
            box orders move quickly because they are warehouse stock, not made-to-print jobs. Local buyers
            who can collect often combine cake boxes with cake cards and cupcake boxes on one Ashbourne
            pickup.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Weekend celebration demand in Dublin and Cork is where stockouts hurt most — empty 10″ or 12″
            cases on a Saturday morning mean improvised packaging and slower collection counters. Plan
            case counts around your busiest two days, not a quiet Tuesday average.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            UK or Europe shipping is only confirmed case-by-case on request; this guide focuses on Irish
            wholesale delivery, which is the core service for these Bakery Packaging lines.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How to order white cake boxes in Ireland
          </h2>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-8">
            <li>List your busiest tin sizes — 6″/8″ midweek vs 10″/12″ weekend celebrations</li>
            <li>Match each box footprint to the cake cards you already stock</li>
            <li>Decide whether cupcake boxes or custom print also belong on the same order</li>
            <li>Order by the case on Bakery Packaging — watch the volume tiers</li>
            <li>Add cake cards, tissue or grab bags if one delivery can cover them</li>
            <li>Take nationwide delivery or collect from Ashbourne, Co. Meath</li>
          </ol>

          <div className="bg-slate-900 rounded-xl p-6 mb-8 text-white not-prose">
            <p className="font-semibold mb-1">Ready to restock white cake boxes?</p>
            <p className="text-slate-400 text-sm mb-4">
              Plain white 6×6×3″ to 12×12×4″ bakery cartons, case packs and tiered wholesale pricing —
              delivered across Ireland.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={HUB_HREF}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Shop Bakery Packaging →
              </Link>
              <Link
                href={BOX_8_HREF}
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                View 8″ White Cake Box
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
                q: 'Where can I buy white cake boxes wholesale in Ireland?',
                a: 'PrintNPack stocks plain white cake boxes by the case under Bakery Packaging — 6×6×3″, 8×8×3″, 10×10×4″ and 12×12×4″ — with tiered wholesale pricing from Ashbourne to Dublin, Cork, Galway and nationwide.',
              },
              {
                q: 'What white cake box sizes are available in Ireland?',
                a: 'Four sizes: 6×6×3″ (230007, 250/case), 8×8×3″ (230008, 250/case), 10×10×4″ (230009, 100/case) and 12×12×4″ (230010, 100/case).',
              },
              {
                q: 'Are these cake boxes plain or printed?',
                a: 'Plain white wholesale — unprinted bakery cartons. No custom-print MOQ. For branded window boxes, see custom cake boxes Ireland.',
              },
              {
                q: 'Should I buy white cake boxes or custom printed cake boxes?',
                a: 'Use plain white for everyday sponges and fast case restocking. Use custom print for gift and celebration ranges where the box carries your brand.',
              },
              {
                q: 'Do you deliver white cake boxes to Dublin, Cork and Galway?',
                a: 'Yes. We deliver Bakery Packaging to Dublin, Cork, Galway and all Irish counties, with collection available from Ashbourne, Co. Meath.',
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
              href: '/blog/cake-cards-ireland-sizes-buying-guide',
              src: '/images/plain-packaging/1022210.webp',
              title: 'Cake Cards Ireland: Round vs Square Sizes & Bakery Wholesale Buying Guide',
            },
            {
              href: '/blog/cupcake-boxes-ireland-sizes-buying-guide',
              src: '/images/plain-packaging/230000.webp',
              title: 'Cupcake Boxes Ireland: 6-Cavity Inserts, Cases & Wholesale Buying Guide',
            },
            {
              href: '/blog/custom-cake-boxes-ireland-buying-guide',
              src: '/images/products/custom-cake-boxes/custom-cake-boxes-ireland-luxury-navy-cupcake-window.jpg',
              title: 'Custom Cake Boxes Ireland: Window Styles, Luxury Finishes & Bakery Buying Guide',
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
