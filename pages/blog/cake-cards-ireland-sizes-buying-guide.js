import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/cake-cards-ireland-sizes-buying-guide`;
const HUB_HREF = '/plain-packaging?category=Bakery+Packaging';
const HERO_IMAGE = '/images/plain-packaging/1022210.webp';
const SQUARE_IMAGE = '/images/plain-packaging/1022211.webp';
const TEN_ROUND_IMAGE = '/images/plain-packaging/1022310.webp';
const TWELVE_ROUND_IMAGE = '/images/plain-packaging/102240.webp';
const SEVEN_ROUND_IMAGE = '/images/plain-packaging/102352.webp';
const CUPCAKE_IMAGE = '/images/plain-packaging/230000.webp';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Cake Cards Ireland: Round vs Square Sizes & Bakery Wholesale Buying Guide',
  description:
    'A practical buying guide to cake cards in Ireland — round and square boards from 7″ to 12″, 100-piece case packs, tiered wholesale pricing, and nationwide delivery from Ashbourne for bakeries and cafés.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-09-26',
  dateModified: '2026-09-26',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I buy cake cards wholesale in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack stocks plain cake cards by the case under Bakery Packaging — round and square boards from 7″ to 12″ with tiered wholesale pricing. Delivery from Ashbourne, Co. Meath to Dublin, Cork, Galway and nationwide.',
      },
    },
    {
      '@type': 'Question',
      name: 'What cake card sizes are available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Round cards: 7″, 8″, 10″, 11″ and 12″. Square cards: 8″, 10″ and 12″. Every line packs 100 per case so bakeries can match tin size without buying odd leftover packs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I buy round or square cake cards?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Match the board to the tin and finish. Round cards suit classic celebration and sponge cakes; square cards suit traybakes, brownie slabs and square celebration cakes. Many Irish bakeries stock both 8″ and 10″ in each shape for weekend volume.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are cake cards plain wholesale or custom printed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'These cake cards are plain wholesale bakery stock — no artwork proof and no custom-print minimum. Order by the case with four-tier volume pricing. For branded window cake boxes, see custom cake boxes Ireland.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you deliver cake cards to Dublin, Cork and Galway?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. PrintNPack delivers cake cards to Dublin, Cork, Galway and every Irish county from Ashbourne. Local buyers can also collect from Co. Meath.',
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
      name: 'Cake Cards Ireland Buying Guide',
      item: PAGE_URL,
    },
  ],
};

const sizeRows = [
  {
    size: '7″ round',
    pack: '100 per case',
    use: 'Small celebration sponges and café portion cakes',
  },
  {
    size: '8″ round / 8″ square',
    pack: '100 per case',
    use: 'Everyday birthday and traybake boards — highest bakery volume',
  },
  {
    size: '10″ round / 10″ square',
    pack: '100 per case',
    use: 'Standard celebration cakes and larger slab finishes',
  },
  {
    size: '11″ round',
    pack: '100 per case',
    use: 'In-between celebration sizes when 10″ feels tight',
  },
  {
    size: '12″ round / 12″ square',
    pack: '100 per case',
    use: 'Large celebration, wedding tiers and shared party cakes',
  },
];

export default function CakeCardsIrelandSizesBuyingGuide() {
  const title = 'Cake Cards Ireland: Round vs Square Sizes & Bakery Wholesale Buying Guide';
  const description =
    'Buy cake cards in Ireland with confidence — round vs square boards from 7″ to 12″, 100-piece case packs, tiered wholesale pricing, and delivery to Dublin, Cork, Galway and nationwide from Ashbourne.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="cake cards ireland, cake boards wholesale ireland, round cake card dublin, square cake board cork, bakery packaging ashbourne, 8 inch cake card ireland, 10 inch cake board wholesale, cake cards galway, plain cake boards ireland, bakery supplies wholesale ireland"
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
          content="Cake cards Ireland — 8 inch round cake board wholesale for bakeries"
        />
        <meta property="article:published_time" content="2026-09-26" />

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
          <span className="text-slate-900">Cake Cards Ireland</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            Wholesale Guide
          </span>
          <span className="text-slate-400 text-sm">26 Sep 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Cake Cards Ireland: Round vs Square Sizes &amp; Bakery Wholesale Buying Guide
        </h1>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="relative rounded-2xl overflow-hidden h-48 col-span-2 bg-slate-50">
            <Image
              src={HERO_IMAGE}
              alt="Cake cards Ireland — 8 inch round cake board wholesale for Dublin bakeries"
              fill
              className="object-contain p-6"
              priority
              sizes="(max-width: 768px) 66vw, 512px"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={SQUARE_IMAGE}
                alt="Square cake cards Ireland — 8 inch cake board wholesale Cork"
                fill
                className="object-contain p-3"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={TEN_ROUND_IMAGE}
                alt="10 inch round cake card Ireland — celebration cake board Galway wholesale"
                fill
                className="object-contain p-3"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Cake cards (cake boards) are the quiet essential every Irish bakery, café counter and
            home baker needs before a cake leaves the kitchen. The wrong size overhangs the box,
            squeezes the icing, or looks unfinished on the counter — and customers notice both.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            This guide explains how to buy <strong>cake cards in Ireland</strong> as plain wholesale
            bakery stock — round versus square, sizes from 7″ to 12″, how 100-piece cases fit weekly
            ordering, what to stock alongside boards, and how{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              PrintNPack&apos;s bakery packaging
            </Link>{' '}
            range works with tiered case pricing and delivery from Ashbourne.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Why Irish bakeries buy plain cake cards by the case
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Plain cake cards are warehouse stock: order by the case, no artwork proof, no print lead
            time. That matters when a Dublin bakery needs boards for Saturday collection cakes, or a
            Cork café restocks before a bank-holiday weekend. Boards sit under the cake inside a
            white box or window box — branding usually lives on the box, not the card.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            PrintNPack holds eight cake card lines — five round sizes and three square sizes — each
            packed <strong>100 per case</strong>. Orders ship nationwide; local buyers can collect
            from Ashbourne, Co. Meath. For the branded outer box rather than the board underneath,
            compare{' '}
            <Link href="/blog/custom-cake-boxes-ireland-buying-guide" className="text-blue-600 hover:underline">
              custom cake boxes Ireland
            </Link>{' '}
            and the plain white cake box sizes in the same Bakery Packaging category.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Cake card sizes at a glance
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Match the board to your tin and finished diameter. A card that is only slightly larger
            than the cake gives a clean edge for piping and a secure lift into the box. Use the table
            below, then confirm live case tiers on each product page.
          </p>

          <div className="overflow-x-auto mb-8 not-prose">
            <table className="min-w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
              <thead className="bg-slate-50 text-left">
                <tr>
                  <th className="px-4 py-3 font-semibold text-slate-900">Size / shape</th>
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
              src={TWELVE_ROUND_IMAGE}
              alt="12 inch round cake card Ireland — large celebration cake board wholesale Ashbourne"
              fill
              className="object-contain p-6"
              sizes="(max-width: 768px) 100vw, 720px"
            />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Round vs square: how bakeries choose
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Round cards cover classic sponge and celebration cakes — the 8″ and 10″ rounds are the
            bakery workhorses for birthday orders. The 7″ round suits café portion cakes and smaller
            gift sponges; 11″ fills the gap between standard celebration and large party cakes; 12″
            covers wedding tiers and shared celebration cakes.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Square cards (8″, 10″ and 12″) suit traybakes, brownie slabs, square celebration cakes and
            any finish that looks wrong on a round board. Many Galway and Dublin bakeries keep 8″
            square for weekday traybakes and 10″ square for weekend slabs, then add 12″ only when
            large orders justify the shelf space.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            If you bake both shapes, stock matching pairs — 8″ round with 8″ square, 10″ with 10″ —
            so the same white cake box footprint can cover either tin. Mixing board shapes under one
            box size is normal; buying random odd sizes is what creates leftover waste.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            A practical starter pack for most Irish bakeries is two cases of 8″ round, one case of
            8″ square, two cases of 10″ round and one case of 10″ square — then add 7″ or 12″ only
            when the order book proves the need. That mix covers weekday sponges, weekend
            celebrations and traybake slabs without overfilling the dry store.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-8 not-prose">
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={SEVEN_ROUND_IMAGE}
                alt="7 inch round cake card Ireland — small café sponge board wholesale"
                fill
                className="object-contain p-3"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={CUPCAKE_IMAGE}
                alt="6 cupcake box Ireland — bakery packaging with inserts wholesale Dublin"
                fill
                className="object-contain p-3"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Plain wholesale cake cards vs custom printed boxes
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            These cake cards are <strong>plain wholesale</strong> — food-safe boards with no logo
            print. That keeps MOQ at a case and restocking fast for Cork night bakes or Ashbourne
            collection. Branding sits on the outer cake box, sticker or tissue wrap rather than on
            every board.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            If you need a printed face on high-visibility cake packaging — window panels, logo print,
            luxury finishes — use{' '}
            <Link href="/custom-cake-boxes-ireland" className="text-blue-600 hover:underline">
              custom cake boxes
            </Link>
            . For everyday boards under plain white boxes, case-packed cake cards are the usual Irish
            mix: plain card + branded or plain outer box.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Case packs, MOQ and how pricing works
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Every cake card line packs <strong>100 per case</strong> with{' '}
            <strong>four-tier volume pricing</strong> — more cases lower the price per case. There is
            no custom-print MOQ on these plain lines. Round and square options at the same diameter
            share the same case structure, so you can balance shapes without changing how you order.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Always check the live tier table on each product in{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              Bakery Packaging
            </Link>{' '}
            — we do not reprint one-off unit rates here because case tiering is how wholesale buyers
            save money. A single-site bakery often starts on 1–3 cases of 8″ and 10″; multi-site
            groups consolidate into higher tiers.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            What to order alongside cake cards
          </h2>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
            <li>
              Plain white cake boxes (6×6×3″, 8×8×3″, 10×10×4″, 12×12×4″) — match box footprint to
              board size in the same Bakery Packaging category
            </li>
            <li>
              6-cupcake boxes with inserts (125 per case) for cupcake and muffin collections
            </li>
            <li>
              Rectangular hinged-lid cake containers for sliced traybakes and café portions
            </li>
            <li>
              <Link
                href="/blog/custom-printed-tissue-paper-ireland-buying-guide"
                className="text-blue-600 hover:underline"
              >
                Custom printed tissue paper
              </Link>{' '}
              for gift wrapping celebration cakes
            </li>
            <li>
              <Link
                href="/blog/sos-grab-bags-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                SOS grab bags
              </Link>{' '}
              for bakery counter takeaway
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-8">
            Pairing boards, boxes and bags on one Ashbourne dispatch keeps Dublin and nationwide
            bakeries stocked before Friday peaks.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Delivery across Ireland from Ashbourne
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            PrintNPack is based in Ashbourne, Co. Meath — convenient for Dublin and Meath collections,
            with nationwide dispatch for Cork, Galway, Limerick and every other county. Plain cake
            card orders move quickly because they are warehouse stock, not made-to-print jobs.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            UK or Europe shipping is only confirmed case-by-case on request; this guide focuses on
            Irish wholesale delivery, which is the core service for these bakery lines.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How to order cake cards in Ireland
          </h2>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-8">
            <li>List tin sizes and shapes — round celebration, square traybake, large party</li>
            <li>Match each to a cake card size using the table above</li>
            <li>Add white cake boxes, cupcake boxes or grab bags if the same delivery can cover them</li>
            <li>Order by the case on Bakery Packaging — watch the volume tiers</li>
            <li>Take nationwide delivery or collect from Ashbourne, Co. Meath</li>
          </ol>

          <div className="bg-slate-900 rounded-xl p-6 mb-8 text-white not-prose">
            <p className="font-semibold mb-1">Ready to restock cake cards?</p>
            <p className="text-slate-400 text-sm mb-4">
              Round and square boards from 7″ to 12″ with 100-piece cases and tiered wholesale pricing
              — delivered across Ireland.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={HUB_HREF}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Shop Cake Cards Ireland →
              </Link>
              <Link
                href="/plain-packaging"
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Browse Plain Packaging
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
                q: 'Where can I buy cake cards wholesale in Ireland?',
                a: 'PrintNPack stocks plain cake cards by the case under Bakery Packaging — round and square boards from 7″ to 12″ with tiered wholesale pricing from Ashbourne to Dublin, Cork, Galway and nationwide.',
              },
              {
                q: 'What cake card sizes are available?',
                a: 'Round: 7″, 8″, 10″, 11″ and 12″. Square: 8″, 10″ and 12″. Every line packs 100 per case.',
              },
              {
                q: 'Should I buy round or square cake cards?',
                a: 'Match the board to the tin — round for classic sponges and celebration cakes; square for traybakes, brownie slabs and square celebration cakes. Many bakeries stock both 8″ and 10″ in each shape.',
              },
              {
                q: 'Are cake cards plain wholesale or custom printed?',
                a: 'These lines are plain wholesale stock — no artwork proof and no custom-print minimum. Order by the case with four-tier volume pricing. For branded window boxes, see custom cake boxes.',
              },
              {
                q: 'Do you deliver cake cards to Dublin, Cork and Galway?',
                a: 'Yes. We deliver cake cards to Dublin, Cork, Galway and all Irish counties, with collection available from Ashbourne, Co. Meath.',
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
              href: '/blog/sos-grab-bags-ireland-sizes-buying-guide',
              src: '/images/products/sos-bags/1.png',
              title: 'SOS Grab Bags Ireland: Sizes, Plain vs Printed & Wholesale Buying Guide',
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
