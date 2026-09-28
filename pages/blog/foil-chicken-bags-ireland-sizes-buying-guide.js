import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/foil-chicken-bags-ireland-sizes-buying-guide`;
const HUB_HREF = '/plain-packaging?category=Foil+Bags';
const HERO_IMAGE = '/images/plain-packaging/120705.webp';
const PORTION_IMAGE = '/images/plain-packaging/120704.webp';
const STANDARD_IMAGE = '/images/plain-packaging/120705.webp';
const LARGE_IMAGE = '/images/plain-packaging/180010.webp';
const FOIL_TRAY_IMAGE = '/images/plain-packaging/10928.webp';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Foil Chicken Bags Ireland: Portion vs Standard vs Large & Wholesale Buying Guide',
  description:
    'A practical buying guide to foil chicken bags in Ireland — portion, standard and large flat sizes, 500-piece case packs, tiered wholesale pricing, and nationwide delivery from Ashbourne for rotisserie and takeaway kitchens.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-09-28',
  dateModified: '2026-09-28',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I buy foil chicken bags wholesale in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack stocks plain foil chicken bags by the case under Foil Bags — portion, standard and large flat sizes with tiered wholesale pricing. Delivery from Ashbourne, Co. Meath to Dublin, Cork, Galway and nationwide.',
      },
    },
    {
      '@type': 'Question',
      name: 'What foil chicken bag sizes are available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Three lines are stocked: Portion 175×230×200 mm, Standard 175×230×300 mm, and Large Flat 200×250×360 mm. Every line packs 500 per case so rotisserie and takeaway kitchens can match portion size without odd leftover packs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I buy portion, standard or large foil chicken bags?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use portion for half-chicken or snack packs, standard for a full rotisserie bird or large meal, and large flat for family shares, whole birds with sides, or wider takeaway trays. Many Irish takeaways stock portion and standard as the weekly mix, then add large flat for weekend peaks.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are foil chicken bags plain wholesale or custom printed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'These foil chicken bags are plain wholesale stock — no artwork proof and no custom-print minimum. Order by the case with four-tier volume pricing. For branded wraps or bags alongside plain foil, see custom greaseproof sheets or printed paper bags.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you deliver foil chicken bags to Dublin, Cork and Galway?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. PrintNPack delivers foil chicken bags to Dublin, Cork, Galway and every Irish county from Ashbourne. Local buyers can also collect from Co. Meath.',
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
      name: 'Foil Chicken Bags Ireland Buying Guide',
      item: PAGE_URL,
    },
  ],
};

const sizeRows = [
  {
    size: 'Portion',
    dims: '175 × 230 × 200 mm',
    pack: '500 per case',
    use: 'Half-chicken, snack packs and smaller takeaway portions',
  },
  {
    size: 'Standard',
    dims: '175 × 230 × 300 mm',
    pack: '500 per case',
    use: 'Full rotisserie bird or standard chicken meal',
  },
  {
    size: 'Large flat',
    dims: '200 × 250 × 360 mm',
    pack: '500 per case',
    use: 'Family shares, whole bird with sides, wider trays',
  },
];

export default function FoilChickenBagsIrelandSizesBuyingGuide() {
  const title = 'Foil Chicken Bags Ireland: Portion vs Standard vs Large & Wholesale Buying Guide';
  const description =
    'Buy foil chicken bags in Ireland with confidence — portion, standard and large flat sizes, 500-piece case packs, tiered wholesale pricing, and delivery to Dublin, Cork, Galway and nationwide from Ashbourne.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="foil chicken bags ireland, portion foil chicken bags wholesale ireland, standard foil chicken bags dublin, large flat foil chicken bags cork, foil bags ashbourne, rotisserie packaging ireland, takeaway foil bags galway, plain foil chicken bags ireland, wholesale foil bags ireland, chicken takeaway packaging ireland"
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
          content="Foil chicken bags Ireland — standard foil rotisserie bag wholesale for takeaways"
        />
        <meta property="article:published_time" content="2026-09-28" />

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
          <span className="text-slate-900">Foil Chicken Bags Ireland</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            Wholesale Guide
          </span>
          <span className="text-slate-400 text-sm">28 Sep 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Foil Chicken Bags Ireland: Portion vs Standard vs Large &amp; Wholesale Buying Guide
        </h1>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="relative rounded-2xl overflow-hidden h-48 col-span-2 bg-slate-50">
            <Image
              src={HERO_IMAGE}
              alt="Foil chicken bags Ireland — standard foil rotisserie bag wholesale for Dublin takeaways"
              fill
              className="object-contain p-6"
              priority
              sizes="(max-width: 768px) 66vw, 512px"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={PORTION_IMAGE}
                alt="Portion foil chicken bags Ireland — half-chicken takeaway bag wholesale Cork"
                fill
                className="object-contain p-3"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={LARGE_IMAGE}
                alt="Large flat foil chicken bags Ireland — family share packaging Galway wholesale"
                fill
                className="object-contain p-3"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Foil chicken bags are the workhorse wrap for Irish rotisserie counters, chicken shops and
            hot-food takeaways. Too small and grease escapes onto the counter bag; too large and you
            pay for empty foil on every half-chicken order. Matching portion size to the bag is the
            whole buying decision.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            This guide explains how to buy <strong>foil chicken bags in Ireland</strong> as plain
            wholesale Foil Bags stock — portion versus standard versus large flat, how 500-piece cases
            fit weekly ordering, what to stock alongside them, and how{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              PrintNPack&apos;s Foil Bags
            </Link>{' '}
            range works with tiered case pricing and delivery from Ashbourne.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Why Irish takeaways buy plain foil chicken bags by the case
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Plain foil chicken bags are warehouse stock: order by the case, no artwork proof, no print
            lead time. That matters when a Dublin rotisserie needs bags before Friday evening, or a
            Cork chicken counter restocks after a bank-holiday weekend. Heat retention and grease
            control sit in the foil itself — branding usually lives on a sticker, outer paper bag or
            receipt rather than on every foil wrap.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            PrintNPack holds three foil chicken bag lines — portion, standard and large flat — each
            packed <strong>500 per case</strong>. Orders ship nationwide; local buyers can collect from
            Ashbourne, Co. Meath. For rigid aluminium trays rather than bags, compare{' '}
            <Link href="/blog/foil-containers-ireland-sizes-buying-guide" className="text-blue-600 hover:underline">
              foil containers Ireland
            </Link>{' '}
            in the Foil Containers category.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Foil chicken bag sizes at a glance
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Match the bag to the bird and sides you pack most often. Dimensions below are the stocked
            Foil Bags lines — confirm live case tiers on each product page before you consolidate an
            order.
          </p>

          <div className="overflow-x-auto mb-8 not-prose">
            <table className="min-w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
              <thead className="bg-slate-50 text-left">
                <tr>
                  <th className="px-4 py-3 font-semibold text-slate-900">Size</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">Dimensions</th>
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
              src={LARGE_IMAGE}
              alt="Large flat foil chicken bags Ireland — 200×250×360 mm family share bag wholesale Ashbourne"
              fill
              className="object-contain p-6"
              sizes="(max-width: 768px) 100vw, 720px"
            />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Portion vs standard vs large: how kitchens choose
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            <strong>Portion bags</strong> (175×230×200 mm) suit half-chicken, kids meals and snack
            packs where a standard bag leaves too much empty foil. Dublin and Galway lunch counters
            often burn through portion sizes faster than full-bird bags on weekday trade.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            <strong>Standard bags</strong> (175×230×300 mm) are the rotisserie workhorse — tall enough
            for a full bird without the width of a family share pack. Most Irish chicken shops make
            this the default line and keep portion bags for the half-chicken menu.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            <strong>Large flat bags</strong> (200×250×360 mm) cover family shares, whole bird with
            potatoes or coleslaw, and wider trays that would stress a standard bag. Cork weekend trade
            and supermarket-style hot counters usually justify a case of large flat beside standard
            stock rather than forcing every order into one size.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            A practical starter mix for most Irish takeaways is two cases of standard, one case of
            portion, and one case of large flat — then adjust once ticket mix is clear. That covers
            weekday halves, full birds and weekend family orders without overfilling the dry store.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-8 not-prose">
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={PORTION_IMAGE}
                alt="Portion foil chicken bags Ireland — 175×230×200 mm half-chicken bag wholesale"
                fill
                className="object-contain p-3"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={FOIL_TRAY_IMAGE}
                alt="Foil containers Ireland — aluminium trays with lids for sides and gravy wholesale"
                fill
                className="object-contain p-3"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Plain wholesale foil bags vs custom printed packaging
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            These foil chicken bags are <strong>plain wholesale</strong> — no logo print on the foil.
            That keeps MOQ at a case and restocking fast for Cork night service or Ashbourne
            collection. Branding sits on a sticker, outer kraft bag or receipt rather than on every
            foil wrap.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            If you need a printed face on high-visibility wraps, use{' '}
            <Link href="/blog/custom-greaseproof-sheets-ireland-sizes-buying-guide" className="text-blue-600 hover:underline">
              custom greaseproof sheets
            </Link>{' '}
            or{' '}
            <Link href="/blog/sos-grab-bags-ireland-sizes-buying-guide" className="text-blue-600 hover:underline">
              SOS grab bags
            </Link>{' '}
            for the carry-out layer. The usual Irish mix is plain foil chicken bag + branded outer bag
            or sticker.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Case packs, MOQ and how pricing works
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Every foil chicken bag line packs <strong>500 per case</strong> with{' '}
            <strong>four-tier volume pricing</strong> — more cases lower the price per case. There is
            no custom-print MOQ on these plain lines. Portion, standard and large flat share the same
            case structure, so you can balance sizes without changing how you order.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Always check the live tier table on each product in{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              Foil Bags
            </Link>{' '}
            — we do not reprint one-off unit rates here because case tiering is how wholesale buyers
            save money. A single-site takeaway often starts on 1–3 cases of standard; multi-site groups
            consolidate into higher tiers across portion and large flat as well.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            What to order alongside foil chicken bags
          </h2>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
            <li>
              <Link href="/blog/foil-containers-ireland-sizes-buying-guide" className="text-blue-600 hover:underline">
                Foil containers
              </Link>{' '}
              (4×5, 4×8, 6×9, 9×9) for sides, gravy and rice portions
            </li>
            <li>
              <Link href="/blog/wooden-cutlery-ireland-sizes-buying-guide" className="text-blue-600 hover:underline">
                Wooden cutlery
              </Link>{' '}
              — knives, forks and chip forks for eat-in and takeaway
            </li>
            <li>
              <Link href="/blog/fish-and-chip-boxes-ireland-sizes-buying-guide" className="text-blue-600 hover:underline">
                Fish &amp; chip boxes
              </Link>{' '}
              if the same counter runs a chipper menu
            </li>
            <li>
              SOS grab bags or kraft food bags for the outer carry layer
            </li>
            <li>
              Greaseproof sheets for lining trays or wrapping sides
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-8">
            Pairing bags, trays and cutlery on one Ashbourne dispatch keeps Dublin and nationwide
            chicken counters stocked before Friday peaks.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Delivery across Ireland from Ashbourne
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            PrintNPack is based in Ashbourne, Co. Meath — convenient for Dublin and Meath collections,
            with nationwide dispatch for Cork, Galway, Limerick and every other county. Plain foil
            chicken bag orders move quickly because they are warehouse stock, not made-to-print jobs.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            UK or Europe shipping is only confirmed case-by-case on request; this guide focuses on
            Irish wholesale delivery, which is the core service for these Foil Bags lines.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How to order foil chicken bags in Ireland
          </h2>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-8">
            <li>List your menu portions — half, full bird, family share with sides</li>
            <li>Match each to portion, standard or large flat using the table above</li>
            <li>Add foil containers, cutlery or grab bags if the same delivery can cover them</li>
            <li>Order by the case on Foil Bags — watch the volume tiers</li>
            <li>Take nationwide delivery or collect from Ashbourne, Co. Meath</li>
          </ol>

          <div className="bg-slate-900 rounded-xl p-6 mb-8 text-white not-prose">
            <p className="font-semibold mb-1">Ready to restock foil chicken bags?</p>
            <p className="text-slate-400 text-sm mb-4">
              Portion, standard and large flat sizes with 500-piece cases and tiered wholesale pricing
              — delivered across Ireland.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={HUB_HREF}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Shop Foil Chicken Bags Ireland →
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
                q: 'Where can I buy foil chicken bags wholesale in Ireland?',
                a: 'PrintNPack stocks plain foil chicken bags by the case under Foil Bags — portion, standard and large flat sizes with tiered wholesale pricing from Ashbourne to Dublin, Cork, Galway and nationwide.',
              },
              {
                q: 'What foil chicken bag sizes are available?',
                a: 'Portion 175×230×200 mm, Standard 175×230×300 mm, and Large Flat 200×250×360 mm. Every line packs 500 per case.',
              },
              {
                q: 'Should I buy portion, standard or large foil chicken bags?',
                a: 'Match the bag to the portion — portion for half-chicken and snacks, standard for a full bird, large flat for family shares and wider trays. Many takeaways stock portion and standard weekly, then add large flat for weekend peaks.',
              },
              {
                q: 'Are foil chicken bags plain wholesale or custom printed?',
                a: 'These lines are plain wholesale stock — no artwork proof and no custom-print minimum. Order by the case with four-tier volume pricing. For branded wraps or outer bags, see custom greaseproof sheets or SOS grab bags.',
              },
              {
                q: 'Do you deliver foil chicken bags to Dublin, Cork and Galway?',
                a: 'Yes. We deliver foil chicken bags to Dublin, Cork, Galway and all Irish counties, with collection available from Ashbourne, Co. Meath.',
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
              href: '/blog/fish-and-chip-boxes-ireland-sizes-buying-guide',
              src: '/images/plain-packaging/1206643.webp',
              title: 'Fish & Chip Boxes Ireland: Small vs Large Sizes & Wholesale Buying Guide',
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
