import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/rpet-hinged-salad-containers-ireland-sizes-buying-guide`;
const HUB_HREF = '/plain-packaging?category=Containersandtaway';
const SALAD_HUB_HREF = '/plain-packaging?category=Salad+Container';
const HERO_IMAGE = '/images/plain-packaging/120336.webp';
const SQUARE_IMAGE = '/images/plain-packaging/120335.webp';
const ROUND_IMAGE = '/images/plain-packaging/120339.webp';
const ROUND_LARGE_IMAGE = '/images/plain-packaging/120340.webp';
const OVAL_IMAGE = '/images/plain-packaging/120343.webp';
const OVAL_SMALL_IMAGE = '/images/plain-packaging/120345.webp';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'rPET Hinged Salad Containers Ireland: Round vs Square vs Oval & Wholesale Buying Guide',
  description:
    'A practical buying guide to rPET hinged salad containers in Ireland — round, square and oval sizes from 250cc to 1000cc, case packs, and nationwide delivery from Ashbourne.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-10-02',
  dateModified: '2026-10-02',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I buy rPET hinged salad containers wholesale in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack stocks plain rPET hinged salad containers by the case under Containersandtaway and Salad Container — round, square and oval formats from 250cc to 1000cc, with tiered wholesale pricing. Delivery from Ashbourne, Co. Meath to Dublin, Cork, Galway and nationwide.',
      },
    },
    {
      '@type': 'Question',
      name: 'What rPET salad container sizes are available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Stocked hinged lines include square 750cc and 1000cc, round 250cc, 375cc, 500cc and 1000cc, and oval 250cc, 500cc, 750cc and 1000cc. Most pack as 8×50 (400 per case); 1000cc round packs 4×50 and 250cc round packs 10×50.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I buy round, square or oval salad containers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Choose round for classic bowl salads and poke-style builds, square for deli counters and fridge-shelf stacking, and oval for longer pasta salads, grain bowls and plated cold meals. Many Irish delis stock one hero shape plus a smaller side size.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are rPET salad containers plain wholesale or custom printed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'These hinged salad containers are plain wholesale stock — no artwork proof and no custom-print minimum. Order by the case with four-tier volume pricing. Branding usually sits on a label, sticker or outer bag rather than on the clear tub.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you deliver salad containers to Dublin, Cork and Galway?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. PrintNPack delivers rPET hinged salad containers to Dublin, Cork, Galway and every Irish county from Ashbourne. Local buyers can also collect from Co. Meath.',
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
      name: 'rPET Hinged Salad Containers Ireland Buying Guide',
      item: PAGE_URL,
    },
  ],
};

const sizeRows = [
  {
    size: 'Square 750cc',
    shape: 'Square',
    pack: '8×50 (400 per case)',
    use: 'Standard lunch salads, coleslaw and deli mixes',
  },
  {
    size: 'Square 1000cc',
    shape: 'Square',
    pack: '8×50 (400 per case)',
    use: 'Large salad meals and fridge-display portions',
  },
  {
    size: 'Round 250cc',
    shape: 'Round',
    pack: '10×50 (500 per case)',
    use: 'Sides, fruit pots and kids salad portions',
  },
  {
    size: 'Round 375cc',
    shape: 'Round',
    pack: '8×50 (400 per case)',
    use: 'Small salads, protein pots and snack bowls',
  },
  {
    size: 'Round 500cc',
    shape: 'Round',
    pack: '8×50 (400 per case)',
    use: 'Everyday café salads and poke-style builds',
  },
  {
    size: 'Round 1000cc',
    shape: 'Round',
    pack: '4×50 (200 per case)',
    use: 'Sharing salads and large cold meal bowls',
  },
  {
    size: 'Oval 250cc',
    shape: 'Oval',
    pack: '8×50 (400 per case)',
    use: 'Side salads, dips and compact cold sides',
  },
  {
    size: 'Oval 500cc',
    shape: 'Oval',
    pack: '8×50 (400 per case)',
    use: 'Pasta salads and mid-size grain bowls',
  },
  {
    size: 'Oval 750cc',
    shape: 'Oval',
    pack: '8×50 (400 per case)',
    use: 'Full cold meals with longer ingredients',
  },
  {
    size: 'Oval 1000cc',
    shape: 'Oval',
    pack: '8×50 (400 per case)',
    use: 'Family or catering cold salad portions',
  },
];

export default function RpetHingedSaladContainersIrelandSizesBuyingGuide() {
  const title =
    'rPET Hinged Salad Containers Ireland: Round vs Square vs Oval & Wholesale Buying Guide';
  const description =
    'Buy rPET hinged salad containers in Ireland with confidence — round, square and oval sizes from 250cc to 1000cc, case packs, tiered wholesale pricing, and delivery to Dublin, Cork, Galway and nationwide from Ashbourne.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="rpet salad containers ireland, hinged salad containers wholesale ireland, round salad pots dublin, square salad containers cork, oval salad tubs galway, clear salad boxes ashbourne, takeaway salad packaging ireland, plain rpet containers ireland, wholesale salad containers ireland, deli salad boxes ireland"
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
          content="rPET hinged salad containers Ireland — clear 1000cc square salad tub wholesale"
        />
        <meta property="article:published_time" content="2026-10-02" />

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
          <span className="text-slate-900">rPET Hinged Salad Containers Ireland</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            Wholesale Guide
          </span>
          <span className="text-slate-400 text-sm">2 Oct 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          rPET Hinged Salad Containers Ireland: Round vs Square vs Oval &amp; Wholesale Buying Guide
        </h1>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="relative rounded-2xl overflow-hidden h-48 col-span-2 bg-slate-50">
            <Image
              src={HERO_IMAGE}
              alt="rPET hinged salad containers Ireland — 1000cc square clear salad tub wholesale Dublin"
              fill
              className="object-contain p-6"
              priority
              sizes="(max-width: 768px) 66vw, 512px"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={ROUND_IMAGE}
                alt="Round rPET salad containers Ireland — 500cc hinged bowl wholesale Cork"
                fill
                className="object-contain p-3"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={OVAL_IMAGE}
                alt="Oval rPET salad containers Ireland — 500cc hinged tub wholesale Galway"
                fill
                className="object-contain p-3"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Clear hinged salad containers are the fridge-facing pack for Irish delis, cafés, juice bars
            and supermarket-style cold counters. Too small and dressings overflow; too large and a
            lunch salad looks sparse under the lid. Matching volume and shape to the menu is the real
            buying decision.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            This guide explains how to buy <strong>rPET hinged salad containers in Ireland</strong> as
            plain wholesale stock — round versus square versus oval, how 250cc–1000cc case packs fit
            weekly ordering, what to stock alongside them, and how{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              PrintNPack&apos;s Containersandtaway
            </Link>{' '}
            and{' '}
            <Link href={SALAD_HUB_HREF} className="text-blue-600 hover:underline">
              Salad Container
            </Link>{' '}
            ranges work with tiered case pricing and delivery from Ashbourne.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Why Irish delis buy plain rPET salad tubs by the case
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Plain rPET hinged containers are warehouse stock: order by the case, no artwork proof, no
            print lead time. That matters when a Dublin salad bar needs tubs before lunch prep, or a
            Cork deli restocks after a bank-holiday weekend. The hinged lid keeps cold food closed for
            fridge display and takeaway; branding usually lives on a label or sticker rather than on
            every clear pack.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            PrintNPack holds square, round and oval hinged lines from <strong>250cc to 1000cc</strong>.
            Orders ship nationwide; local buyers can collect from Ashbourne, Co. Meath. Clear rPET is
            also the practical choice when customers need to see freshness through the lid — something
            opaque kraft boxes cannot do on a grab-and-go shelf.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            For kraft or cardboard meal boxes rather than clear cold pots, compare{' '}
            <Link href="/blog/biobox-containers-ireland-sizes-buying-guide" className="text-blue-600 hover:underline">
              biobox containers Ireland
            </Link>{' '}
            or{' '}
            <Link href="/blog/bagasse-meal-boxes-ireland-sizes-buying-guide" className="text-blue-600 hover:underline">
              bagasse meal boxes Ireland
            </Link>
            . Many multi-site Irish operators stock clear rPET for cold display and biobox or bagasse
            for hot takeaway on the same Ashbourne order.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            rPET salad container sizes at a glance
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Match the tub to the salad or cold meal you pack most often. Dimensions below are the
            stocked Containersandtaway hinged lines — confirm live case tiers on each product page
            before you consolidate an order.
          </p>

          <div className="overflow-x-auto mb-8 not-prose">
            <table className="min-w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
              <thead className="bg-slate-50 text-left">
                <tr>
                  <th className="px-4 py-3 font-semibold text-slate-900">Size</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">Shape</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">Case pack</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">Best for</th>
                </tr>
              </thead>
              <tbody>
                {sizeRows.map((row) => (
                  <tr key={row.size} className="border-t border-slate-200">
                    <td className="px-4 py-3 text-slate-900 font-medium">{row.size}</td>
                    <td className="px-4 py-3 text-slate-700">{row.shape}</td>
                    <td className="px-4 py-3 text-slate-700">{row.pack}</td>
                    <td className="px-4 py-3 text-slate-700">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="relative rounded-2xl overflow-hidden h-56 mb-8 bg-slate-50 not-prose">
            <Image
              src={SQUARE_IMAGE}
              alt="Square rPET salad containers Ireland — 750cc hinged clear tub wholesale Ashbourne"
              fill
              className="object-contain p-6"
              sizes="(max-width: 768px) 100vw, 720px"
            />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Round vs square vs oval: how kitchens choose
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            <strong>Round tubs</strong> (250–1000cc) suit classic bowl salads, poke-style builds and
            fruit pots. Dublin and Galway lunch counters often run 500cc as the weekday hero and keep
            250cc or 375cc for sides. The 1000cc round packs <strong>4×50</strong> — useful when large
            bowls move slower than mid-size lunch pots.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            <strong>Square tubs</strong> (750cc and 1000cc) stack neatly on deli fridges and look tidy
            in grab-and-go rows. Cork supermarket-style counters and meal-prep kitchens often prefer
            square for shelf efficiency when every centimetre of cold display counts.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            <strong>Oval tubs</strong> (250–1000cc) give length for pasta salads, grain bowls and
            plated cold meals that look cramped in a round pot. Weekend catering and hotel cold buffets
            usually justify oval 750cc or 1000cc beside a smaller 250cc or 500cc side size.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            A practical starter mix for most Irish delis is two cases of a mid-size hero (round 500cc
            or square 750cc), one case of a small side size, and one case of 1000cc for large meals —
            then adjust once ticket mix is clear.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Hotel and catering buyers often lean heavier on oval 750cc and 1000cc for buffet prep,
            while high-street cafés burn through round 500cc and square 750cc on weekday lunch. If you
            sell both sides and full meals, keep the side size on a separate SKU so staff do not
            overfill small salads into lunch tubs — that is how case counts get distorted.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-8 not-prose">
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={ROUND_LARGE_IMAGE}
                alt="Round 1000cc rPET salad containers Ireland — large hinged bowl wholesale"
                fill
                className="object-contain p-3"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={OVAL_SMALL_IMAGE}
                alt="Oval 250cc rPET salad containers Ireland — side salad tub wholesale"
                fill
                className="object-contain p-3"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Plain wholesale salad tubs vs custom printed packaging
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            These rPET hinged containers are <strong>plain wholesale</strong> — clear plastic with no
            logo print. That keeps MOQ at a case and restocking fast for Cork night prep or Ashbourne
            collection. Branding sits on a label, sticker or outer kraft bag rather than on every tub.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            If you need a printed face on high-visibility cold packs, use{' '}
            <Link href="/blog/labels-on-a-roll-ireland-buying-guide" className="text-blue-600 hover:underline">
              labels on a roll
            </Link>{' '}
            or{' '}
            <Link href="/blog/sos-grab-bags-ireland-sizes-buying-guide" className="text-blue-600 hover:underline">
              SOS grab bags
            </Link>{' '}
            for the carry-out layer. The usual Irish mix is plain clear salad tub + branded label or
            outer bag.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Case packs, MOQ and how pricing works
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Most hinged salad lines pack as <strong>8×50 (400 per case)</strong>. Exceptions on the
            Containersandtaway range are <strong>1000cc round at 4×50</strong> and{' '}
            <strong>250cc round at 10×50</strong>. All lines use <strong>four-tier volume pricing</strong>{' '}
            — more cases lower the price per case. There is no custom-print MOQ on these plain lines.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Always check the live tier table on each product in{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              Containersandtaway
            </Link>{' '}
            or{' '}
            <Link href={SALAD_HUB_HREF} className="text-blue-600 hover:underline">
              Salad Container
            </Link>{' '}
            — we do not reprint one-off unit rates here because case tiering is how wholesale buyers
            save money. A single-site café often starts on 1–3 cases of a mid-size hero; multi-site
            groups consolidate into higher tiers across shapes and volumes.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            What to order alongside salad containers
          </h2>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
            <li>
              <Link href="/blog/wooden-cutlery-ireland-sizes-buying-guide" className="text-blue-600 hover:underline">
                Wooden cutlery
              </Link>{' '}
              — forks and teaspoons for salad and dessert pots
            </li>
            <li>
              <Link href="/blog/biobox-containers-ireland-sizes-buying-guide" className="text-blue-600 hover:underline">
                Biobox containers
              </Link>{' '}
              for kraft hot or cold meals that sit beside clear tubs
            </li>
            <li>
              <Link href="/blog/bagasse-meal-boxes-ireland-sizes-buying-guide" className="text-blue-600 hover:underline">
                Bagasse meal boxes
              </Link>{' '}
              when compostable fibre matters more than clear display
            </li>
            <li>
              <Link href="/blog/sos-grab-bags-ireland-sizes-buying-guide" className="text-blue-600 hover:underline">
                SOS grab bags
              </Link>{' '}
              for the outer carry layer
            </li>
            <li>
              Labels on a roll for best-before dates, allergens and brand marks
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-8">
            Pairing tubs, cutlery and outer bags on one Ashbourne dispatch keeps Dublin and nationwide
            salad counters stocked before Friday peaks. For wider eco context, see our{' '}
            <Link href="/blog/eu-ppwr-packaging-regulation-ireland-2026" className="text-blue-600 hover:underline">
              EU packaging regulation Ireland 2026
            </Link>{' '}
            overview.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Delivery across Ireland from Ashbourne
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            PrintNPack is based in Ashbourne, Co. Meath — convenient for Dublin and Meath collections,
            with nationwide dispatch for Cork, Galway, Limerick and every other county. Plain rPET
            salad container orders move quickly because they are warehouse stock, not made-to-print
            jobs.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Multi-site groups serving Dublin, Cork and Galway can consolidate shapes into one
            wholesale order so fridge stock and dry-store space stay aligned across branches. Case
            packs nest well for storage; hinge strength matters more than brand print when tubs are
            stacked in a cold room overnight.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            UK or Europe shipping is only confirmed case-by-case on request; this guide focuses on
            Irish wholesale delivery, which is the core service for these salad container lines.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How to order rPET salad containers in Ireland
          </h2>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-8">
            <li>List your cold menu — lunch salad, side, pasta bowl, sharing size</li>
            <li>Match each to round, square or oval using the table above</li>
            <li>Add cutlery, labels, bioboxes or grab bags if the same delivery can cover them</li>
            <li>Order by the case on Containersandtaway or Salad Container — watch the volume tiers</li>
            <li>Take nationwide delivery or collect from Ashbourne, Co. Meath</li>
          </ol>

          <div className="bg-slate-900 rounded-xl p-6 mb-8 text-white not-prose">
            <p className="font-semibold mb-1">Ready to restock salad containers?</p>
            <p className="text-slate-400 text-sm mb-4">
              Round, square and oval rPET hinged sizes from 250cc to 1000cc with case packs and tiered
              wholesale pricing — delivered across Ireland.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={HUB_HREF}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Shop Salad Containers Ireland →
              </Link>
              <Link
                href={SALAD_HUB_HREF}
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Browse Salad Container Range
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
                q: 'Where can I buy rPET hinged salad containers wholesale in Ireland?',
                a: 'PrintNPack stocks plain rPET hinged salad containers by the case under Containersandtaway and Salad Container — round, square and oval formats from 250cc to 1000cc, with tiered wholesale pricing from Ashbourne to Dublin, Cork, Galway and nationwide.',
              },
              {
                q: 'What rPET salad container sizes are available?',
                a: 'Square 750cc and 1000cc; round 250cc, 375cc, 500cc and 1000cc; oval 250cc, 500cc, 750cc and 1000cc. Most pack 8×50; 1000cc round packs 4×50 and 250cc round packs 10×50.',
              },
              {
                q: 'Should I buy round, square or oval salad containers?',
                a: 'Match the shape to the menu — round for bowl salads, square for fridge-shelf stacking, oval for longer pasta and grain bowls. Many delis stock one hero shape plus a smaller side size.',
              },
              {
                q: 'Are rPET salad containers plain wholesale or custom printed?',
                a: 'These lines are plain wholesale stock — no artwork proof and no custom-print minimum. Order by the case with four-tier volume pricing. For branding, use labels on a roll or printed outer bags.',
              },
              {
                q: 'Do you deliver salad containers to Dublin, Cork and Galway?',
                a: 'Yes. We deliver rPET hinged salad containers to Dublin, Cork, Galway and all Irish counties, with collection available from Ashbourne, Co. Meath.',
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
              href: '/blog/biobox-containers-ireland-sizes-buying-guide',
              src: '/images/plain-packaging/120090.webp',
              title: 'Biobox Containers Ireland: Sizes No.1–No.12, Kraft vs White & Wholesale Buying Guide',
            },
            {
              href: '/blog/bagasse-meal-boxes-ireland-sizes-buying-guide',
              src: '/images/plain-packaging/120158.webp',
              title: 'Bagasse Meal Boxes Ireland: Sizes, Compartments & Wholesale Buying Guide',
            },
            {
              href: '/blog/wooden-cutlery-ireland-sizes-buying-guide',
              src: '/images/plain-packaging/140046.webp',
              title: 'Wooden Cutlery Ireland: Chip Forks, Sets & Wholesale Buying Guide',
            },
            {
              href: '/blog/plain-packaging-wholesale-ireland',
              src: '/images/products/food-container.png',
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
