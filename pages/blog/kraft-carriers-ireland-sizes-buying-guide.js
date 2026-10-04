import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/kraft-carriers-ireland-sizes-buying-guide`;
const HUB_HREF = '/plain-packaging?category=Handled+Carrier+Bags';
const BAGS_HUB_HREF = '/plain-packaging?category=Bags';
const HERO_IMAGE = '/images/plain-packaging/180021.webp';
const LARGE_IMAGE = '/images/plain-packaging/180024.webp';
const KRAFT_BAG_IMAGE = '/images/products/paper-bag.png';
const SOS_COMPARE_IMAGE = '/images/products/sos-bags/1.png';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Kraft Carriers Ireland: Small–XL Internal Handle Sizes & Wholesale Buying Guide',
  description:
    'A practical buying guide to kraft carriers in Ireland — Small to XL internal-handle sizes, case packs, plain vs printed bags, and nationwide delivery from Ashbourne for cafés, takeaways and retailers.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-10-04',
  dateModified: '2026-10-04',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I buy kraft carriers wholesale in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack stocks plain kraft carriers with internal handles by the case under Handled Carrier Bags — Small, Medium, Large and XL sizes — with tiered wholesale pricing. Delivery from Ashbourne, Co. Meath to Dublin, Cork, Galway and nationwide.',
      },
    },
    {
      '@type': 'Question',
      name: 'What kraft carrier sizes are available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Internal-handle kraft carriers are stocked in Small 190×80×250 mm, Medium 220×100×240 mm, Large 260×140×290 mm (250 per case) and XL 320×240×320 mm (200 per case). Close Medium and Large sizes also appear under Bags.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between internal-handle kraft carriers and flat or twisted handle bags?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Internal-handle kraft carriers have paper handles fixed inside the rim for a clean retail look and strong lift on takeaway loads. Flat-handle and twisted-handle paper bags are separate printed or plain lines with different MOQs and branding options.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are kraft carriers plain wholesale or custom printed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'These kraft carriers are plain wholesale stock — no artwork proof and no custom-print minimum. Order by the case with four-tier volume pricing. For logo print, use printed paper bag lines such as flat-handle, twisted-handle or SOS grab bags.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you deliver kraft carriers to Dublin, Cork and Galway?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. PrintNPack delivers kraft carriers to Dublin, Cork, Galway and every Irish county from Ashbourne. Local buyers can also collect from Co. Meath.',
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
      name: 'Kraft Carriers Ireland Buying Guide',
      item: PAGE_URL,
    },
  ],
};

const sizeRows = [
  {
    size: 'Small internal handle',
    dims: '190 × 80 × 250 mm',
    pack: '250 per case',
    use: 'Single drinks, small bakery bags, light retail',
  },
  {
    size: 'Medium internal handle',
    dims: '220 × 100 × 240 mm',
    pack: '250 per case',
    use: 'Café takeaway, sandwich + drink, everyday retail',
  },
  {
    size: 'Large internal handle',
    dims: '260 × 140 × 290 mm',
    pack: '250 per case',
    use: 'Multi-item takeaway, deli bags, gift and grocery loads',
  },
  {
    size: 'XL internal handle',
    dims: '320 × 240 × 320 mm',
    pack: '200 per case',
    use: 'Bulkier meal bags, larger retail carriers',
  },
];

export default function KraftCarriersIrelandSizesBuyingGuide() {
  const title = 'Kraft Carriers Ireland: Small–XL Internal Handle Sizes & Wholesale Buying Guide';
  const description =
    'Buy kraft carriers in Ireland with confidence — Small to XL internal-handle sizes, 200–250 case packs, plain vs printed options, and delivery to Dublin, Cork, Galway and nationwide from Ashbourne.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="kraft carriers ireland, kraft carrier bags wholesale ireland, internal handle kraft bags dublin, brown kraft takeaway bags cork, handled carrier bags ashbourne, XL kraft carrier ireland, plain kraft bags galway, kraft paper carrier wholesale ireland, takeaway carrier bags ireland, paper shopping bags wholesale ireland"
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
          content="Kraft carriers Ireland — medium kraft internal handle bag wholesale for takeaways"
        />
        <meta property="article:published_time" content="2026-10-04" />

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
          <span className="text-slate-900">Kraft Carriers Ireland</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            Wholesale Guide
          </span>
          <span className="text-slate-400 text-sm">4 Oct 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Kraft Carriers Ireland: Small–XL Internal Handle Sizes &amp; Wholesale Buying Guide
        </h1>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="relative rounded-2xl overflow-hidden h-48 col-span-2 bg-slate-50">
            <Image
              src={HERO_IMAGE}
              alt="Kraft carriers Ireland — medium kraft internal handle bag wholesale for Dublin takeaways"
              fill
              className="object-contain p-6"
              priority
              sizes="(max-width: 768px) 66vw, 512px"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={LARGE_IMAGE}
                alt="Large kraft carrier Ireland — internal handle takeaway bag wholesale Cork"
                fill
                className="object-contain p-3"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={KRAFT_BAG_IMAGE}
                alt="Brown kraft paper carrier bag Ireland — plain wholesale packaging Galway"
                fill
                className="object-contain p-3"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Kraft carriers are the everyday brown paper bags Irish cafés, takeaways and retailers hand
            customers at the till. Pick the wrong footprint and drinks tip, meal boxes jam, or you
            burn through XL stock when Medium would have done — and staff notice both.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            This guide explains how to buy <strong>kraft carriers in Ireland</strong> as plain
            wholesale stock — Small to XL internal-handle sizes, how case packs fit weekly ordering,
            when to stay plain versus print a logo bag, and how{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              PrintNPack&apos;s handled carrier bags
            </Link>{' '}
            range works with tiered case pricing and delivery from Ashbourne.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Why Irish cafés and takeaways buy plain kraft carriers by the case
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Plain kraft carriers are warehouse stock: order by the case, no artwork proof, no print
            lead time. That matters when a Dublin coffee shop needs bags before Saturday brunch, or a
            Cork takeaway restocks before a match-day rush. The brown kraft look already reads as
            food-friendly; branding can sit on a sticker, napkin or receipt instead of every bag.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            PrintNPack holds internal-handle kraft carriers from Small through XL under Handled
            Carrier Bags, plus close Medium and Large sizes under{' '}
            <Link href={BAGS_HUB_HREF} className="text-blue-600 hover:underline">
              Bags
            </Link>
            . Orders ship nationwide; local buyers can collect from Ashbourne, Co. Meath. For logo
            print on high-visibility bags, compare{' '}
            <Link href="/blog/flat-handle-paper-bags-ireland-sizes-buying-guide" className="text-blue-600 hover:underline">
              flat handle paper bags
            </Link>{' '}
            and{' '}
            <Link href="/blog/twisted-handle-paper-bags-ireland-sizes-buying-guide" className="text-blue-600 hover:underline">
              twisted handle paper bags
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Kraft carrier sizes at a glance
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Match the bag to what leaves the counter most often — a single hot drink, a sandwich plus
            side, or a multi-box takeaway. Use the table below, then confirm live case tiers on each
            product page.
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
              alt="Large kraft carriers Ireland — 250×140×300 mm internal handle bag wholesale Ashbourne"
              fill
              className="object-contain p-6"
              sizes="(max-width: 768px) 100vw, 720px"
            />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Small to XL: how buyers choose
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Small (190×80×250 mm) covers single drinks, pastry bags and light retail — useful for
            café counters that do not want a Medium bag swallowing one cup. Medium (220×100×240 mm on
            the Handled Carrier Bags line; a close 220×100×250 mm Medium also sits under Bags) is the
            workhorse for sandwich-plus-drink and everyday takeaway.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Large (260×140×290 mm, with a close 250×140×300 mm Large under Bags) suits multi-item
            meals, deli bags and gift-style retail loads. XL (320×240×320 mm, 200 per case) is for
            bulkier meal bags and larger shopping carriers — keep it as a minority size unless your
            menu regularly needs the footprint.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Handled Carrier Bags also includes Small and Medium kraft bags with external handles
            (about 7×10.5×9″ and 8.5×13×10″, 250 per case). Those suit buyers who prefer an external
            handle feel; internal-handle carriers give a cleaner rim and a strong lift on denser
            takeaway loads.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            A practical starter pack for most Irish cafés and takeaways is two cases of Medium, one
            case of Large, and a single case of Small for drinks-only — then add XL only when the
            order book proves the need. That mix covers weekday coffee runs and weekend meal bags
            without overfilling the dry store.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-8 not-prose">
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={HERO_IMAGE}
                alt="Medium kraft carrier Ireland — café takeaway bag wholesale Dublin"
                fill
                className="object-contain p-3"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={SOS_COMPARE_IMAGE}
                alt="SOS grab bags Ireland — plain kraft bag style for comparison with kraft carriers"
                fill
                className="object-contain p-3"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Plain kraft carriers vs custom printed bags
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            These kraft carriers are <strong>plain wholesale</strong> — natural brown kraft with no
            logo print. That keeps MOQ at a case and restocking fast for Galway weekend prep or
            Ashbourne collection. Branding usually sits on a sticker, napkin or receipt rather than on
            every carrier.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            If you need a printed face on high-visibility carry-out, use{' '}
            <Link href="/blog/flat-handle-paper-bags-ireland-sizes-buying-guide" className="text-blue-600 hover:underline">
              flat handle paper bags
            </Link>
            ,{' '}
            <Link href="/blog/twisted-handle-paper-bags-ireland-sizes-buying-guide" className="text-blue-600 hover:underline">
              twisted handle paper bags
            </Link>{' '}
            or{' '}
            <Link href="/blog/sos-grab-bags-ireland-sizes-buying-guide" className="text-blue-600 hover:underline">
              SOS grab bags
            </Link>
            . The usual Irish mix is plain kraft carriers for volume days plus a printed bag line for
            brand moments.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Case packs, MOQ and how pricing works
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Small, Medium and Large internal-handle kraft carriers pack as{' '}
            <strong>250 per case</strong>. XL packs as <strong>200 per case</strong>. All lines use{' '}
            <strong>four-tier volume pricing</strong> — more cases lower the price per case. There is
            no custom-print MOQ on these plain lines.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Always check the live tier table on each product in{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              Handled Carrier Bags
            </Link>{' '}
            or{' '}
            <Link href={BAGS_HUB_HREF} className="text-blue-600 hover:underline">
              Bags
            </Link>{' '}
            — we do not reprint one-off unit rates here because case tiering is how wholesale buyers
            save money. A single-site café often starts on 1–3 cases of Medium; multi-site groups
            consolidate into higher tiers across Small, Large and XL.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            What to order alongside kraft carriers
          </h2>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
            <li>
              <Link href="/blog/sos-grab-bags-ireland-sizes-buying-guide" className="text-blue-600 hover:underline">
                SOS grab bags
              </Link>{' '}
              — no-handle kraft bags for lighter bakery and food wraps
            </li>
            <li>
              <Link href="/blog/flat-handle-paper-bags-ireland-sizes-buying-guide" className="text-blue-600 hover:underline">
                Flat handle paper bags
              </Link>{' '}
              when you want digital CMYK branding from 20 bags
            </li>
            <li>
              <Link href="/blog/coffee-cups-ireland-guide" className="text-blue-600 hover:underline">
                Coffee cups Ireland
              </Link>{' '}
              — match Small carriers to drink-led orders
            </li>
            <li>
              <Link href="/blog/wooden-cutlery-ireland-sizes-buying-guide" className="text-blue-600 hover:underline">
                Wooden cutlery
              </Link>{' '}
              for meal bags that need forks and napkins inside
            </li>
            <li>
              Napkins and greaseproof sheets for the same Ashbourne dispatch
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-8">
            Pairing carriers, cups and cutlery on one dispatch keeps Dublin and nationwide counters
            stocked before Friday peaks. For wider packaging context, see our{' '}
            <Link href="/blog/plain-packaging-wholesale-ireland" className="text-blue-600 hover:underline">
              plain packaging wholesale Ireland
            </Link>{' '}
            overview and the{' '}
            <Link href="/blog/eu-ppwr-packaging-regulation-ireland-2026" className="text-blue-600 hover:underline">
              EU packaging regulation Ireland 2026
            </Link>{' '}
            guide.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Delivery across Ireland from Ashbourne
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            PrintNPack is based in Ashbourne, Co. Meath — convenient for Dublin and Meath collections,
            with nationwide dispatch for Cork, Galway, Limerick and every other county. Plain kraft
            carrier orders move quickly because they are warehouse stock, not made-to-print jobs.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Multi-site groups serving Dublin, Cork and Galway can consolidate sizes into one wholesale
            order so dry-store space stays aligned across branches. Flat-packed cases store neatly;
            handle strength matters more than brand print when bags are stacked overnight.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            UK or Europe shipping is only confirmed case-by-case on request; this guide focuses on
            Irish wholesale delivery, which is the core service for these kraft carrier lines.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How to order kraft carriers in Ireland
          </h2>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-8">
            <li>List your busiest carry-out — drink only, sandwich meal, multi-box takeaway</li>
            <li>Match each to Small, Medium, Large or XL using the table above</li>
            <li>Add SOS bags, printed bags, cups or cutlery if the same delivery can cover them</li>
            <li>Order by the case on Handled Carrier Bags or Bags — watch the volume tiers</li>
            <li>Take nationwide delivery or collect from Ashbourne, Co. Meath</li>
          </ol>

          <div className="bg-slate-900 rounded-xl p-6 mb-8 text-white not-prose">
            <p className="font-semibold mb-1">Ready to restock kraft carriers?</p>
            <p className="text-slate-400 text-sm mb-4">
              Small to XL internal-handle kraft carriers with case packs and tiered wholesale pricing
              — delivered across Ireland.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={HUB_HREF}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Shop Kraft Carriers Ireland →
              </Link>
              <Link
                href={BAGS_HUB_HREF}
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Browse Bags Range
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
                q: 'Where can I buy kraft carriers wholesale in Ireland?',
                a: 'PrintNPack stocks plain kraft carriers with internal handles by the case under Handled Carrier Bags — Small, Medium, Large and XL — with tiered wholesale pricing from Ashbourne to Dublin, Cork, Galway and nationwide.',
              },
              {
                q: 'What kraft carrier sizes are available?',
                a: 'Internal-handle lines: Small 190×80×250 mm, Medium 220×100×240 mm, Large 260×140×290 mm (250 per case) and XL 320×240×320 mm (200 per case). Close Medium and Large sizes also appear under Bags.',
              },
              {
                q: 'Should I buy Small, Medium, Large or XL kraft carriers?',
                a: 'Match the bag to the load — Small for drinks and light bakery, Medium for everyday café takeaway, Large for multi-item meals, XL for bulkier carriers. Most Irish sites start with Medium plus one larger size.',
              },
              {
                q: 'Are kraft carriers plain wholesale or custom printed?',
                a: 'These lines are plain wholesale stock — no artwork proof and no custom-print minimum. Order by the case with four-tier volume pricing. For logo print, use flat-handle, twisted-handle or SOS printed bag lines.',
              },
              {
                q: 'Do you deliver kraft carriers to Dublin, Cork and Galway?',
                a: 'Yes. We deliver kraft carriers to Dublin, Cork, Galway and all Irish counties, with collection available from Ashbourne, Co. Meath.',
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
              href: '/blog/flat-handle-paper-bags-ireland-sizes-buying-guide',
              src: '/images/products/flat-handle-bags/1.png',
              title: 'Flat Handle Paper Bags Ireland: Sizes, MOQ & Café Buying Guide',
            },
            {
              href: '/blog/twisted-handle-paper-bags-ireland-sizes-buying-guide',
              src: '/images/products/twisted-handle-bags/1.png',
              title: 'Twisted Handle Paper Bags Ireland: Sizes, MOQ & Retail Buying Guide',
            },
            {
              href: '/blog/sos-grab-bags-ireland-sizes-buying-guide',
              src: '/images/products/sos-bags/1.png',
              title: 'SOS Grab Bags Ireland: Sizes & Wholesale Buying Guide',
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
