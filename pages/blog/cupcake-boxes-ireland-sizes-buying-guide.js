import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/cupcake-boxes-ireland-sizes-buying-guide`;
const HUB_HREF = '/plain-packaging?category=Bakery+Packaging';
const CUSTOM_HREF = '/custom-cake-boxes-ireland';
const HERO_IMAGE = '/images/plain-packaging/230000.webp';
const TULIP_IMAGE = '/images/plain-packaging/230001.webp';
const HINGED_IMAGE = '/images/plain-packaging/230004.webp';
const WHITE_CASE_IMAGE = '/images/plain-packaging/230005.webp';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Cupcake Boxes Ireland: 6-Cavity Inserts, Cases & Wholesale Buying Guide',
  description:
    'A practical buying guide to plain cupcake boxes in Ireland — 6-cavity boxes with inserts, tulip and white muffin cases, hinged cake containers, case packs, and nationwide delivery from Ashbourne for bakeries and cafés.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-10-06',
  dateModified: '2026-10-06',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I buy cupcake boxes wholesale in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack stocks plain cupcake boxes with inserts and related bakery packaging by the case under Bakery Packaging — including the 6-cavity cupcake box 242×165×75 mm (125 per case) — with tiered wholesale pricing. Delivery from Ashbourne, Co. Meath to Dublin, Cork, Galway and nationwide.',
      },
    },
    {
      '@type': 'Question',
      name: 'What size is the 6-cupcake box with inserts?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The plain 6-cupcake box with inserts measures 242×165×75 mm and packs 125 per case. The insert holds six cupcakes or muffins securely for counter sales and delivery.',
      },
    },
    {
      '@type': 'Question',
      name: 'What muffin and cupcake cases are available wholesale?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bakery Packaging includes brown tulip muffin cases (10×200 per case) and white muffin cases (18×680 per case), plus fairy cake cases on related bakery lines. Order by the case with four-tier volume pricing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I buy plain cupcake boxes or custom printed cake boxes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Plain cupcake boxes with inserts suit fast restocking, café counters and cost-sensitive wholesale. Custom printed cake boxes add logo print, window colours and luxury finishes when branding is the priority. Many Irish bakeries use plain 6-cavity boxes for everyday trade and printed boxes for gifts and events.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you deliver cupcake boxes to Dublin, Cork and Galway?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. PrintNPack delivers Bakery Packaging — including cupcake boxes, muffin cases and hinged cake containers — to Dublin, Cork, Galway and every Irish county from Ashbourne. Local buyers can also collect from Co. Meath.',
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
      name: 'Cupcake Boxes Ireland Buying Guide',
      item: PAGE_URL,
    },
  ],
};

const sizeRows = [
  {
    size: '6-cupcake box with inserts',
    dims: '242 × 165 × 75 mm',
    pack: '125 per case',
    use: 'Six cupcakes or muffins for café and bakery collections',
  },
  {
    size: 'Brown tulip muffin cases',
    dims: 'Tulip-style liner',
    pack: '10 × 200 per case',
    use: 'Premium muffin and cupcake presentation in the tin',
  },
  {
    size: 'White muffin cases',
    dims: 'Standard pleated liner',
    pack: '18 × 680 per case',
    use: 'High-volume everyday cupcakes and fairy cakes',
  },
  {
    size: 'Rectangular hinged cake container',
    dims: '206 × 115 × 80 mm',
    pack: '6 × 40 per case',
    use: 'Sliced traybakes, brownies and café dessert portions',
  },
  {
    size: 'White cake boxes',
    dims: '6″, 8″, 10″, 12″',
    pack: '250 or 100 per case',
    use: 'Whole sponges and celebration cakes beside cupcake packs',
  },
];

export default function CupcakeBoxesIrelandSizesBuyingGuide() {
  const title = 'Cupcake Boxes Ireland: 6-Cavity Inserts, Cases & Wholesale Buying Guide';
  const description =
    'Buy cupcake boxes in Ireland with confidence — 6-cavity boxes with inserts (242×165×75 mm), tulip and white muffin cases, hinged cake containers, case packs, and delivery to Dublin, Cork, Galway and nationwide from Ashbourne.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="cupcake boxes ireland, 6 cupcake box wholesale ireland, cupcake boxes with inserts dublin, muffin cases wholesale cork, bakery packaging ireland, plain cupcake boxes ashbourne, tulip muffin cases ireland, white muffin cases galway, hinged cake container ireland, wholesale bakery boxes ireland"
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
          content="Cupcake boxes Ireland — 6-cavity white cupcake box with inserts wholesale for bakeries"
        />
        <meta property="article:published_time" content="2026-10-06" />

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
          <span className="text-slate-900">Cupcake Boxes Ireland</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            Wholesale Guide
          </span>
          <span className="text-slate-400 text-sm">6 Oct 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Cupcake Boxes Ireland: 6-Cavity Inserts, Cases &amp; Wholesale Buying Guide
        </h1>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="relative rounded-2xl overflow-hidden h-48 col-span-2 bg-slate-50">
            <Image
              src={HERO_IMAGE}
              alt="Cupcake boxes Ireland — 6-cavity white cupcake box with inserts for Dublin bakeries"
              fill
              className="object-contain p-4"
              priority
              sizes="(max-width: 768px) 66vw, 512px"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={TULIP_IMAGE}
                alt="Brown tulip muffin cases Ireland — wholesale bakery liners Cork"
                fill
                className="object-contain p-3"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={WHITE_CASE_IMAGE}
                alt="White muffin cases Ireland — plain cupcake liners wholesale Galway"
                fill
                className="object-contain p-3"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Cupcakes sell on look as much as taste. A six-pack that arrives with frosting smeared on the
            lid — or muffins that tip in transit — costs more than a few euro of packaging. Irish
            bakeries and cafés need plain wholesale boxes that hold product firmly, restock quickly,
            and sit cleanly on a Dublin counter or Cork collection shelf.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            This guide covers <strong>cupcake boxes in Ireland</strong> as plain bakery stock — the
            6-cavity box with inserts, tulip and white muffin cases, hinged cake containers, case
            packs, and how{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              PrintNPack&apos;s Bakery Packaging
            </Link>{' '}
            range works with tiered pricing and delivery from Ashbourne.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Why Irish bakeries buy plain cupcake boxes by the case
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Plain cupcake boxes are warehouse stock: order by the case, no artwork proof, no print
            lead time. That matters when a Galway café sells out of weekend six-packs or an Ashbourne
            bakery needs inserts before a collection rush. Branding can sit on a sticker, tissue wrap
            or a separate printed line — the box itself only has to protect and present.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            PrintNPack holds the 6-cupcake box with inserts alongside muffin cases, hinged cake
            containers and white cake boxes in Bakery Packaging. Orders ship nationwide; local buyers
            can collect from Ashbourne, Co. Meath. For branded window boxes, compare{' '}
            <Link href="/blog/custom-cake-boxes-ireland-buying-guide" className="text-blue-600 hover:underline">
              custom cake boxes Ireland
            </Link>{' '}
            and the{' '}
            <Link href={CUSTOM_HREF} className="text-blue-600 hover:underline">
              custom cake boxes product page
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Cupcake box and case sizes at a glance
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Start with the six-pack box if cupcakes and muffins are a regular SKU, then match liners
            and slice containers to how you bake. Use the table below, then confirm live case tiers
            on each product page.
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
              src={HINGED_IMAGE}
              alt="Rectangular hinged cake container Ireland — clear bakery portion box wholesale Ashbourne"
              fill
              className="object-contain p-6"
              sizes="(max-width: 768px) 100vw, 720px"
            />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            The 6-cavity cupcake box with inserts
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            The workhorse line is the <strong>6-cupcake box with inserts</strong> at{' '}
            <strong>242 × 165 × 75 mm</strong>, packed <strong>125 per case</strong>. The white board
            box includes a window lid and a cut-out insert so each cupcake sits in its own cavity —
            far less frosting damage than a loose tray in a plain bag.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Use it for mixed six-packs, muffin collections and gift-style café orders. The footprint
            fits fridge and counter shelves without the bulk of a celebration cake box. Dublin and
            Cork bakeries often keep this case as standing stock for weekend peaks.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Pair it with{' '}
            <Link href="/blog/cake-cards-ireland-sizes-buying-guide" className="text-blue-600 hover:underline">
              cake cards
            </Link>{' '}
            for whole sponges, and with plain white cake boxes (6×6×3″ through 12×12×4″) when
            celebration cakes share the same dispatch.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Tulip cases, white liners and hinged containers
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            <strong>Brown tulip muffin cases</strong> (10 × 200 per case) give a bakery-café finish —
            the flared kraft petals frame the bake in the tin. <strong>White muffin cases</strong>{' '}
            (18 × 680 per case) suit high-volume fairy cakes and everyday cupcakes with a clean,
            neutral liner and a large case pack.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            The <strong>rectangular hinged-lid cake container</strong> (206 × 115 × 80 mm, 6 × 40 per
            case) covers sliced traybakes, brownies and dessert portions that do not need a six-cavity
            insert. Clear walls help chilled displays in delis and hotel cafés.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            A practical starter mix is one or two cases of 6-cupcake boxes, one case of white muffin
            cases for volume, and tulip cases if presentation is part of the brand. Add hinged
            containers when traybake slices outsell six-packs.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-8 not-prose">
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={TULIP_IMAGE}
                alt="Brown tulip muffin cases Ireland — kraft bakery liners wholesale Dublin"
                fill
                className="object-contain p-3"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={WHITE_CASE_IMAGE}
                alt="White muffin cases Ireland — plain cupcake liners for Cork and nationwide bakeries"
                fill
                className="object-contain p-3"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Plain wholesale cupcake boxes vs custom printed cake boxes
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            These lines are <strong>plain wholesale</strong> — no logo print on the box or liner. That
            keeps MOQ at a case and restocking fast for Cork night bakes or Ashbourne collection.
            Branding usually lives on a sticker, tissue wrap or a separate printed cake box range.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Choose{' '}
            <Link href={CUSTOM_HREF} className="text-blue-600 hover:underline">
              custom printed cake boxes
            </Link>{' '}
            when the outer pack is the brand moment — coloured boards, foil, embossing or windows for
            weddings and gift sets. Everyday six-packs stay plain so you are not waiting on artwork
            for restock. Many operators run both: plain for weekday trade, printed for premium
            weekends.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Case packs, MOQ and how pricing works
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            The 6-cupcake box packs <strong>125 per case</strong>; tulip cases pack{' '}
            <strong>10 × 200</strong>; white muffin cases pack <strong>18 × 680</strong>; hinged cake
            containers pack <strong>6 × 40</strong>. All use{' '}
            <strong>four-tier volume pricing</strong> — more cases lower the price per case. There is
            no custom-print MOQ on these plain lines.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Always check the live tier table on each product in{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              Bakery Packaging
            </Link>
            . A single-site bakery often starts on 1–3 cases of six-packs; multi-site groups
            consolidate boxes and liners into higher tiers on one Ashbourne order.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            What to order alongside cupcake boxes
          </h2>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
            <li>
              <Link href="/blog/cake-cards-ireland-sizes-buying-guide" className="text-blue-600 hover:underline">
                Cake cards
              </Link>{' '}
              — round and square boards from 7″ to 12″ for whole cakes
            </li>
            <li>Plain white cake boxes (6×6×3″, 8×8×3″, 10×10×4″, 12×12×4″) in the same category</li>
            <li>
              <Link href="/blog/custom-printed-tissue-paper-ireland-buying-guide" className="text-blue-600 hover:underline">
                Custom printed tissue paper
              </Link>{' '}
              for gift wrapping cupcake six-packs
            </li>
            <li>
              <Link href="/blog/sos-grab-bags-ireland-sizes-buying-guide" className="text-blue-600 hover:underline">
                SOS grab bags
              </Link>{' '}
              for bakery counter takeaway
            </li>
            <li>
              <Link href="/blog/kraft-carriers-ireland-sizes-buying-guide" className="text-blue-600 hover:underline">
                Kraft carriers
              </Link>{' '}
              when customers carry drinks with dessert boxes
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-8">
            Pairing boxes, boards, bags and tissue on one dispatch keeps Dublin and nationwide bakeries
            stocked before Friday peaks. For wider context, see our{' '}
            <Link href="/blog/plain-packaging-wholesale-ireland" className="text-blue-600 hover:underline">
              plain packaging wholesale Ireland
            </Link>{' '}
            overview.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Delivery across Ireland from Ashbourne
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            PrintNPack is based in Ashbourne, Co. Meath — convenient for Dublin and Meath collections,
            with nationwide dispatch for Cork, Galway, Limerick and every other county. Plain cupcake
            box and muffin case orders move quickly because they are warehouse stock, not
            made-to-print jobs.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            UK or Europe shipping is only confirmed case-by-case on request; this guide focuses on
            Irish wholesale delivery, which is the core service for these bakery lines.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How to order cupcake boxes in Ireland
          </h2>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-8">
            <li>List what you sell most — six-packs, muffins, fairy cakes or traybake slices</li>
            <li>Match each to the 6-cavity box, tulip or white cases, or hinged container</li>
            <li>Add cake cards, white cake boxes, tissue or grab bags if one delivery can cover them</li>
            <li>Order by the case on Bakery Packaging — watch the volume tiers</li>
            <li>Take nationwide delivery or collect from Ashbourne, Co. Meath</li>
          </ol>

          <div className="bg-slate-900 rounded-xl p-6 mb-8 text-white not-prose">
            <p className="font-semibold mb-1">Ready to restock cupcake boxes?</p>
            <p className="text-slate-400 text-sm mb-4">
              6-cavity boxes with inserts, muffin cases and hinged cake containers with tiered
              wholesale pricing — delivered across Ireland.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={HUB_HREF}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Shop Bakery Packaging Ireland →
              </Link>
              <Link
                href={CUSTOM_HREF}
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Custom Cake Boxes
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
                q: 'Where can I buy cupcake boxes wholesale in Ireland?',
                a: 'PrintNPack stocks plain cupcake boxes with inserts and related bakery packaging by the case under Bakery Packaging — including the 6-cavity cupcake box 242×165×75 mm (125 per case) — with tiered wholesale pricing from Ashbourne to Dublin, Cork, Galway and nationwide.',
              },
              {
                q: 'What size is the 6-cupcake box with inserts?',
                a: 'The plain 6-cupcake box with inserts measures 242×165×75 mm and packs 125 per case. The insert holds six cupcakes or muffins securely for counter sales and delivery.',
              },
              {
                q: 'What muffin and cupcake cases are available wholesale?',
                a: 'Bakery Packaging includes brown tulip muffin cases (10×200 per case) and white muffin cases (18×680 per case). Order by the case with four-tier volume pricing.',
              },
              {
                q: 'Should I buy plain cupcake boxes or custom printed cake boxes?',
                a: 'Plain cupcake boxes with inserts suit fast restocking and everyday café trade. Custom printed cake boxes add logo print and luxury finishes when branding is the priority. Many Irish bakeries use both.',
              },
              {
                q: 'Do you deliver cupcake boxes to Dublin, Cork and Galway?',
                a: 'Yes. We deliver Bakery Packaging — including cupcake boxes, muffin cases and hinged cake containers — to Dublin, Cork, Galway and all Irish counties, with collection available from Ashbourne, Co. Meath.',
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
              href: '/blog/custom-cake-boxes-ireland-buying-guide',
              src: '/images/products/custom-cake-boxes/custom-cake-boxes-ireland-luxury-navy-cupcake-window.jpg',
              title: 'Custom Cake Boxes Ireland: Window Styles, Luxury Finishes & Bakery Buying Guide',
            },
            {
              href: '/blog/custom-printed-tissue-paper-ireland-buying-guide',
              src: '/images/products/custom-printed-tissue-paper/luxury-custom-printed-tissue-paper-black-gold-ireland.jpg',
              title: 'Custom Printed Tissue Paper Ireland: Ecommerce Unboxing & Buying Guide',
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
