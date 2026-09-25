import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/flat-handle-paper-bags-ireland-sizes-buying-guide`;
const HUB_HREF = '/printed-flat-handle-bags-ireland';
const HERO_IMAGE = '/images/products/flat-handle-bags/1.png';
const SIZE_IMAGE = '/images/products/flat-handle-bags/2.png';
const DELI_IMAGE = '/images/products/flat-handle-bags/3.png';
const LINING_IMAGE = '/images/products/flat-handle-bags/5.png';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Flat Handle Paper Bags Ireland: Sizes, MOQ & Café Buying Guide',
  description:
    'How to buy flat handle paper bags in Ireland — Small, Medium and Large sizes, 500-unit MOQ, grease-proof lining, digital CMYK print, and nationwide delivery from Ashbourne.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-09-25',
  dateModified: '2026-09-25',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I order flat handle paper bags in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack supplies custom printed flat handle paper bags across Ireland — full-colour logo printing from 500 units with nationwide delivery from Ashbourne, Co. Meath to Dublin, Cork, Galway and every county.',
      },
    },
    {
      '@type': 'Question',
      name: 'What sizes of flat handle paper bags are available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Three sizes: Small 8″×5″×10″ for coffee, pastries and small retail, Medium 10″×6″×12″ for most café and deli takeaway, and Large 12″×7″×14″ for multi-item orders and grocery-style retail. You can mix sizes in one order.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the minimum order for flat handle paper bags?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Flat handle paper bags start from 500 units. Digital CMYK printing has no plate fees, and sizes can be mixed within the same order provided each size meets the minimum for that variant.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do flat handle bags offer grease-proof lining?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. PrintNPack flat handle bags are available with standard or grease-proof lining — useful for hot food, sandwiches and oily takeaway where kraft alone can blot through.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you deliver flat handle bags to Dublin, Cork and Galway?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. PrintNPack delivers flat handle paper bags to Dublin, Cork, Galway, Limerick and every Irish county from Ashbourne, Co. Meath. Production is typically 10–14 business days after artwork approval.',
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
      name: 'Flat Handle Paper Bags Ireland Buying Guide',
      item: PAGE_URL,
    },
  ],
};

const sizeRows = [
  {
    size: 'Small — 8″ × 5″ × 10″',
    use: 'Coffee, pastries, single sandwiches, small retail gifts',
  },
  {
    size: 'Medium — 10″ × 6″ × 12″',
    use: 'Most popular — café, deli and takeaway multi-item orders',
  },
  {
    size: 'Large — 12″ × 7″ × 14″',
    use: 'Larger food orders, grocery-style retail, event giveaways',
  },
];

export default function FlatHandlePaperBagsIrelandSizesBuyingGuide() {
  const title = 'Flat Handle Paper Bags Ireland: Sizes, MOQ & Café Buying Guide';
  const description =
    'Buy flat handle paper bags in Ireland with confidence — Small, Medium and Large sizes, 500-unit MOQ, grease-proof lining options, and delivery to Dublin, Cork, Galway and nationwide from Ashbourne.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="flat handle paper bags ireland, printed flat handle bags, flat handle paper bags dublin, branded takeaway bags cork, café paper bags galway, custom flat handle bags ashbourne, grease proof paper bags ireland, paper carrier bags with logo, flat handle bags MOQ, printed kraft bags ireland"
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
          content="Flat handle paper bags Ireland — branded café and takeaway carrier bags"
        />
        <meta property="article:published_time" content="2026-09-25" />

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
          <span className="text-slate-900">Flat Handle Paper Bags Ireland</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            Retail Guide
          </span>
          <span className="text-slate-400 text-sm">25 Sep 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Flat Handle Paper Bags Ireland: Sizes, MOQ &amp; Café Buying Guide
        </h1>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="relative rounded-2xl overflow-hidden h-48 col-span-2 bg-slate-50">
            <Image
              src={HERO_IMAGE}
              alt="Flat handle paper bags Ireland — branded café takeaway carriers for Dublin food businesses"
              fill
              className="object-contain p-6"
              priority
              sizes="(max-width: 768px) 66vw, 512px"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={SIZE_IMAGE}
                alt="Custom flat handle paper bags Ireland — Small Medium Large sizes Cork wholesale"
                fill
                className="object-contain p-3"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={DELI_IMAGE}
                alt="Printed flat handle bags Ireland — deli and café branded kraft bag Galway"
                fill
                className="object-contain p-3"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Flat handle paper bags are the everyday branded carrier Irish cafés, delis and takeaways
            reach for when customers need a comfortable handle — without stepping up to boutique twisted
            rope or luxury die-cut stock. Die-cut flat paper loops, 100–120 gsm kraft and full-colour
            print make them the volume workhorse of food retail packaging.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            This guide explains how to buy <strong>flat handle paper bags in Ireland</strong> — Small,
            Medium and Large dimensions, the 500-unit MOQ, grease-proof lining, digital CMYK printing,
            when to choose flat over twisted or SOS, and how{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              PrintNPack&apos;s printed flat handle range
            </Link>{' '}
            ships from Ashbourne to Dublin, Cork, Galway and nationwide.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Why Irish cafés choose flat handle bags
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Twisted handles win on gift-shop perception. SOS bags win when you do not need a handle at
            all. Flat handles sit in the middle: practical for hot drinks and sandwiches, comfortable to
            carry, and economical enough for daily takeaway volume. White or brown kraft with company
            blue accents are the usual stock options, printed digitally with no plate fees.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            PrintNPack prints flat handle bags on premium kraft paper (100–120 gsm) with durable flat
            paper handles. Orders are custom printed from 500 units, with production typically 10–14
            business days after artwork approval. Catalogue pricing starts at{' '}
            <strong>€0.18 per unit</strong>. For a wider paper-bag overview, see the{' '}
            <Link href="/paper-bags-ireland" className="text-blue-600 hover:underline">
              paper bags Ireland hub
            </Link>{' '}
            and our{' '}
            <Link href="/blog/printed-paper-bag-cost-ireland" className="text-blue-600 hover:underline">
              printed paper bag cost guide
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Who this guide is for</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            This is a café and takeaway packaging buying guide, not a materials essay. It is written for:
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-8">
            <li>Cafés and coffee shops that need a branded carrier for cups, pastries and lunch deals</li>
            <li>Delis, sandwich bars and bakeries packing multi-item takeaway orders</li>
            <li>Food-led retail counters that want a handle without boutique twisted-rope pricing</li>
            <li>Multi-site Irish brands standardising one everyday bag across Dublin, Cork and Galway</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Flat handle paper bag sizes Ireland — Small, Medium, Large
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Start with what leaves the counter most often, not the largest bag on the price list. A
            Small bag looks intentional for a single coffee and pastry; a Large bag looks empty if you
            only sell one sandwich. Medium is the workhorse for most Irish cafés and delis.
          </p>
          <div className="overflow-x-auto my-6 not-prose">
            <table className="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">Size</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">Best for</th>
                </tr>
              </thead>
              <tbody>
                {sizeRows.map((row, i) => (
                  <tr key={row.size} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="px-4 py-3 font-medium text-slate-900 whitespace-nowrap">{row.size}</td>
                    <td className="px-4 py-3 text-slate-600">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-700 leading-relaxed mb-8">
            You can <strong>mix sizes in one order</strong> provided you meet the minimum for each size
            variant — useful when a Dublin café needs mostly Medium bags plus a short run of Small for
            coffee-only orders. Confirm the live mix rules on the product page before you send artwork.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            MOQ, print method, lining and what drives cost
          </h2>
          <div className="relative rounded-2xl overflow-hidden h-56 bg-slate-50 mb-6 not-prose">
            <Image
              src={LINING_IMAGE}
              alt="Grease-proof flat handle paper bags Ireland — branded takeaway bag for Ashbourne cafés"
              fill
              className="object-contain p-8"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </div>
          <p className="text-slate-700 leading-relaxed mb-4">
            Custom flat handle bags start from a <strong>500-unit MOQ</strong>. PrintNPack uses digital
            CMYK printing — no plates and no setup fees — so pricing is driven by ink coverage, design
            complexity, size and quantity rather than by colour count alone. Catalogue pricing starts at{' '}
            <strong>€0.18 per unit</strong>; your quote will reflect artwork coverage and the mix of
            Small, Medium and Large.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Choose <strong>standard or grease-proof lining</strong>. Grease-proof is the practical option
            for hot sandwiches, bakery items and oily takeaway where unlined kraft can blot through.
            Standard lining suits dry retail and lighter café packs.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            For a broader cost comparison across bag styles, use the{' '}
            <Link href="/blog/printed-paper-bag-cost-ireland" className="text-blue-600 hover:underline">
              printed paper bag cost Ireland
            </Link>{' '}
            guide — we do not invent one-off rates here beyond the published starting price.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Flat vs twisted handle vs SOS vs luxury die-cut
          </h2>
          <div className="relative rounded-2xl overflow-hidden h-56 bg-slate-50 mb-6 not-prose">
            <Image
              src={DELI_IMAGE}
              alt="White flat handle paper bags Ireland — custom printed deli carrier for Cork cafés"
              fill
              className="object-contain p-8"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </div>
          <p className="text-slate-700 leading-relaxed mb-4">
            Irish buyers often ask which bag style to standardise on. Use this split:
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
            <li>
              <strong>Flat handle</strong> — die-cut paper loop for cafés, delis and everyday takeaway
              volume (this guide)
            </li>
            <li>
              <strong>Twisted handle</strong> — rope-style paper handles for boutiques, gift shops and
              premium retail (
              <Link
                href="/blog/twisted-handle-paper-bags-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                twisted handle sizes guide
              </Link>
              )
            </li>
            <li>
              <strong>Luxury die-cut</strong> — integrated handle cut from 170–250 gsm stock for events
              and high-end campaigns (
              <Link
                href="/blog/luxury-die-cut-paper-bags-ireland-buying-guide"
                className="text-blue-600 hover:underline"
              >
                luxury die-cut buying guide
              </Link>
              )
            </li>
            <li>
              <strong>SOS grab bags</strong> — no-handle self-opening kraft for food takeaway (
              <Link href="/blog/sos-grab-bags-ireland-sizes-buying-guide" className="text-blue-600 hover:underline">
                SOS sizes guide
              </Link>
              )
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-8">
            Many multi-site Irish brands run flat handles on the café counter and twisted or die-cut bags
            in the retail floor — one supplier, two jobs.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            What to stock with flat handle bags
          </h2>
          <div className="relative rounded-2xl overflow-hidden h-56 bg-slate-50 mb-6 not-prose">
            <Image
              src={SIZE_IMAGE}
              alt="Flat handle paper bag sizes Ireland — Medium café carrier for Galway takeaway"
              fill
              className="object-contain p-8"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </div>
          <p className="text-slate-700 leading-relaxed mb-4">
            Carrier bags rarely work alone. Build a simple branded takeaway kit:
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-8">
            <li>
              <Link href="/blog/sos-grab-bags-ireland-sizes-buying-guide" className="text-blue-600 hover:underline">
                SOS grab bags
              </Link>{' '}
              for no-handle chip and burger runs when a flat loop is unnecessary
            </li>
            <li>
              <Link
                href="/blog/custom-greaseproof-sheets-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                Custom greaseproof sheets
              </Link>{' '}
              for wrapping burgers, sandwiches and bakery items before they go in the bag
            </li>
            <li>
              <Link href="/blog/paper-bags-with-logo-ireland" className="text-blue-600 hover:underline">
                Paper bags with logo
              </Link>{' '}
              overview if you are still choosing between handle styles
            </li>
            <li>
              <Link
                href="/blog/kerala-cafe-printed-paper-bags-dublin"
                className="text-blue-600 hover:underline"
              >
                Kerala Cafe Dublin case study
              </Link>{' '}
              — how a Coolmine café used a short branded paper-bag run from 500 units
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Delivery across Ireland from Ashbourne
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            PrintNPack is based in Ashbourne, Co. Meath — convenient for Dublin and Meath collections,
            with nationwide dispatch for Cork, Galway, Limerick and every other county. Weekly scheduled
            delivery is available for cafés and delis that prefer a steady restock without over-ordering
            into the stockroom.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Allow 10–14 business days after artwork approval for production, then add transit. Plan
            Christmas, festival and new-site openings early so bags arrive before the first till rush.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How to order flat handle paper bags in Ireland
          </h2>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-8">
            <li>List your top three counter products and match Small, Medium or Large</li>
            <li>Decide white or brown kraft and whether you need grease-proof lining</li>
            <li>Send logo artwork for digital CMYK — mix sizes if you need more than one</li>
            <li>Approve the proof and place from 500 units on the flat handle product page</li>
            <li>Take nationwide delivery or collect from Ashbourne, Co. Meath</li>
          </ol>

          <div className="bg-slate-900 rounded-xl p-6 mb-8 text-white not-prose">
            <p className="font-semibold mb-1">Ready to order flat handle bags?</p>
            <p className="text-slate-400 text-sm mb-4">
              Custom printed Small, Medium and Large flat handle carriers from 500 units — delivered
              across Ireland from Ashbourne.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={HUB_HREF}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Shop Flat Handle Bags Ireland →
              </Link>
              <Link
                href="/paper-bags-ireland"
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Browse Paper Bags
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
                q: 'Where can I order flat handle paper bags in Ireland?',
                a: 'PrintNPack supplies custom printed flat handle paper bags across Ireland — full-colour logo printing from 500 units with delivery from Ashbourne, Co. Meath to Dublin, Cork, Galway and nationwide.',
              },
              {
                q: 'What sizes of flat handle paper bags are available?',
                a: 'Small 8″×5″×10″, Medium 10″×6″×12″ and Large 12″×7″×14″. Medium is the most popular café and deli size; Large suits multi-item orders and grocery-style retail.',
              },
              {
                q: 'What is the minimum order for flat handle paper bags?',
                a: 'Orders start from 500 units. You can mix Small, Medium and Large within the same order subject to each size variant meeting its minimum.',
              },
              {
                q: 'Do flat handle bags offer grease-proof lining?',
                a: 'Yes. Choose standard or grease-proof lining — grease-proof is best for hot sandwiches, bakery and oily takeaway where kraft alone can blot through.',
              },
              {
                q: 'Do you deliver flat handle bags to Dublin, Cork and Galway?',
                a: 'Yes. We deliver to Dublin, Cork, Galway and all Irish counties, with collection available from Ashbourne, Co. Meath. Production is typically 10–14 business days after artwork approval.',
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
              href: '/blog/twisted-handle-paper-bags-ireland-sizes-buying-guide',
              src: '/images/products/twisted-handle-bags/1.png',
              title: 'Twisted Handle Paper Bags Ireland: Sizes, MOQ & Retail Buying Guide',
            },
            {
              href: '/blog/printed-paper-bag-cost-ireland',
              src: '/images/products/flat-handle-bags/1.png',
              title: 'Printed Paper Bag Cost Ireland: What Affects Pricing',
            },
            {
              href: '/blog/sos-grab-bags-ireland-sizes-buying-guide',
              src: '/images/products/sos-bags/1.png',
              title: 'SOS Grab Bags Ireland: Sizes, Plain vs Printed & Wholesale Buying Guide',
            },
            {
              href: '/blog/paper-bags-with-logo-ireland',
              src: '/images/products/flat-handle-bags/3.png',
              title: 'Paper Bags with Logo Ireland: Twisted, Flat Handle & SOS Guide',
            },
          ].map(({ href, src, title: relatedTitle }) => (
            <Link
              key={href}
              href={href}
              className="group flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors"
            >
              <div className="relative w-16 h-14 flex-shrink-0 rounded-lg overflow-hidden">
                <Image src={src} alt={relatedTitle} fill className="object-cover" sizes="64px" />
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
