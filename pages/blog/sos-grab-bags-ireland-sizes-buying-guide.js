import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/sos-grab-bags-ireland-sizes-buying-guide`;
const HERO_IMAGE = '/images/products/sos-bags/1.png';
const SIZE_IMAGE = '/images/products/sos-bags/3.png';
const PRINTED_IMAGE = '/images/products/sos-bags/5.png';
const BULK_IMAGE = '/images/products/sos-bags/9.png';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'SOS Grab Bags Ireland: Sizes, Plain vs Printed & Wholesale Buying Guide',
  description:
    'A practical buying guide to SOS grab bags in Ireland — kraft takeaway sizes, plain case packs vs custom print from 500 units, tiered wholesale pricing, and delivery from Ashbourne to Dublin, Cork, Galway and nationwide.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-09-16',
  dateModified: '2026-09-16',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are SOS grab bags?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SOS (self-opening square / stand-up square bottom) grab bags are gusseted kraft paper bags with a flat base that stands upright when filled. They are the standard takeaway carry bag for Irish cafés, delis, bakeries and restaurants.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I buy SOS grab bags wholesale in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack stocks plain kraft SOS takeaway bags by the case with tiered B2B pricing on the plain paper bags Ireland hub, and custom printed SOS grab bags from 500 units. Delivery runs from Ashbourne, Co. Meath to Dublin, Cork, Galway and nationwide.',
      },
    },
    {
      '@type': 'Question',
      name: 'What SOS bag sizes are available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Plain wholesale lines include compact kraft SOS bags such as 5×8.5×9.75 in (500 per case) and mid sizes such as 7×11×13 and 26×12×30 cm / 10×15×12 (typically 250 per case), plus a taller 26×12×40 cm / 10×15×16 option for larger takeaway orders.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I buy plain or custom printed SOS bags?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Plain kraft SOS bags are best for everyday high-volume takeaway — no artwork proof and fast restock by the case. Custom printed SOS grab bags suit brand-led cafés and retailers that want a logo on every bag; printed runs start from 500 units with a typical 10–14 business day lead time.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you deliver SOS bags to Dublin, Cork and Galway?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. PrintNPack delivers SOS grab bags to Dublin, Cork, Galway and every Irish county. Local buyers can also collect from Ashbourne, Co. Meath.',
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
      name: 'SOS Grab Bags Ireland Buying Guide',
      item: PAGE_URL,
    },
  ],
};

const sizeRows = [
  {
    size: '5 × 8.5 × 9.75 in',
    dims: 'Compact SOS',
    pack: '500 / case',
    use: 'Sandwiches, bakery, light café takeaway',
  },
  {
    size: '7 × 11 × 13 in',
    dims: 'Medium SOS',
    pack: '250 / case',
    use: 'Everyday deli and multi-item takeaway',
  },
  {
    size: '26 × 12 × 30 cm (10 × 15 × 12)',
    dims: 'Standard takeaway',
    pack: '250 / case',
    use: 'Most Irish takeaways — containers + sides',
  },
  {
    size: '26 × 12 × 40 cm (10 × 15 × 16)',
    dims: 'Tall takeaway',
    pack: '250 / case',
    use: 'Larger orders, taller boxes, sharing meals',
  },
];

const priceRows = [
  {
    size: '26 × 12 × 30 cm (250)',
    band: '€24.44 → €18.87',
    note: '1–3 cases down to 10+ cases',
  },
  {
    size: '26 × 12 × 40 cm (250)',
    band: '€26.43 → €20.40',
    note: 'Taller bag — higher case price',
  },
  {
    size: '7 × 11 × 13 (250)',
    band: '€26.60 → €20.53',
    note: 'Medium SOS wholesale band',
  },
  {
    size: '5 × 8.5 × 9.75 (500)',
    band: '€40.25 → €31.07',
    note: 'Larger pack count per case',
  },
];

export default function SosGrabBagsIrelandSizesBuyingGuide() {
  const title = 'SOS Grab Bags Ireland: Sizes, Plain vs Printed & Wholesale Buying Guide';
  const description =
    'How to buy SOS grab bags in Ireland — kraft takeaway sizes, plain case packs vs custom print from 500 units, tiered wholesale pricing, and nationwide delivery from Ashbourne.';
  const keywords =
    'SOS grab bags Ireland, kraft SOS bags wholesale Ireland, plain takeaway bags Ireland, brown paper bags Dublin, SOS bags Cork, SOS bags Galway, custom printed SOS bags Ireland, plain paper bags Ireland, takeaway bags Ashbourne, wholesale SOS bags Ireland';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
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
          content="SOS grab bags Ireland — kraft takeaway paper bags wholesale"
        />
        <meta property="article:published_time" content="2026-09-16" />

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
          <span className="text-slate-900">SOS Grab Bags Ireland</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            Wholesale Guide
          </span>
          <span className="text-slate-400 text-sm">16 Sep 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          SOS Grab Bags Ireland: Sizes, Plain vs Printed &amp; Wholesale Buying Guide
        </h1>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="relative rounded-2xl overflow-hidden h-48 col-span-2 bg-slate-50">
            <Image
              src={HERO_IMAGE}
              alt="SOS grab bags Ireland — kraft takeaway paper bags for Dublin wholesale"
              fill
              className="object-contain p-6"
              priority
              sizes="(max-width: 768px) 66vw, 512px"
            />
          </div>
          <div className="relative rounded-2xl overflow-hidden h-48 bg-slate-50">
            <Image
              src={SIZE_IMAGE}
              alt="Brown kraft SOS bags Ireland — stand-up square bottom takeaway bags Cork and Galway"
              fill
              className="object-contain p-4"
              sizes="(max-width: 768px) 33vw, 256px"
            />
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            SOS grab bags are the workhorse takeaway carrier for Irish food businesses. Get the size
            wrong and containers tip, grease stains show through, or you pay for bag volume you never
            fill. Get the plain-versus-printed decision wrong and you either overspend on branding or
            miss an easy brand touchpoint on every order that leaves the counter.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            This guide explains how to buy <strong>SOS grab bags in Ireland</strong> — which kraft
            sizes suit common menus, how case packs and tiered wholesale pricing work, when plain stock
            beats a print run, and how{' '}
            <Link href="/plain-paper-bags-ireland" className="text-blue-600 hover:underline">
              PrintNPack&apos;s plain paper bags Ireland
            </Link>{' '}
            range ships from Ashbourne to Dublin, Cork, Galway and nationwide.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            What SOS grab bags are — and why Irish takeaways use them
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            SOS means self-opening square (or stand-up square bottom). The bag has gusseted sides and a
            flat base, so it stands upright when filled — ideal for bioboxes, coffee cups, burger boxes
            and bakery trays. Unlike handled carrier bags, most SOS lines have no handles; staff load
            from the top and customers carry by the folded rim or body.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            PrintNPack stocks plain kraft SOS takeaway bags by the case for everyday restock, plus{' '}
            <Link href="/products/sos-grab-bags" className="text-blue-600 hover:underline">
              custom printed SOS grab bags
            </Link>{' '}
            for operators who want a logo on the bag. Material on printed lines is food-grade kraft
            paper (typically 80–100gsm), with optional grease-proof lining for hotter or oilier food.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            SOS bag sizes Ireland — pick for the order, not the catalogue name
          </h2>
          <div className="relative rounded-2xl overflow-hidden h-56 bg-slate-50 mb-6 not-prose">
            <Image
              src={BULK_IMAGE}
              alt="Plain SOS bags wholesale Ireland Ashbourne — bulk kraft takeaway bags"
              fill
              className="object-contain p-8"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </div>
          <p className="text-slate-700 leading-relaxed mb-4">
            Match the bag to how you pack: one compact sandwich order does not need a tall 40 cm bag,
            and a double meal with sides will crush in a small café size. Dimensions below follow the
            plain wholesale SOS lines stocked for Ireland.
          </p>
          <div className="overflow-x-auto my-6 not-prose">
            <table className="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">Size</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">Role</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">Case pack</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">Best for</th>
                </tr>
              </thead>
              <tbody>
                {sizeRows.map((row, i) => (
                  <tr key={row.size} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="px-4 py-3 font-medium text-slate-900 whitespace-nowrap">{row.size}</td>
                    <td className="px-4 py-3 text-slate-600">{row.dims}</td>
                    <td className="px-4 py-3 text-slate-600 whitespace-nowrap">{row.pack}</td>
                    <td className="px-4 py-3 text-slate-600">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-700 leading-relaxed mb-8">
            For most Dublin and nationwide takeaways, the <strong>26 × 12 × 30 cm</strong> (10 × 15 ×
            12) kraft SOS is the default. Keep a compact 5 × 8.5 × 9.75 case for bakery and sandwich
            counters, and step up to 26 × 12 × 40 cm when tall boxes or sharing orders regularly
            overflow the standard height.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Plain vs printed SOS bags — cost, MOQ and when each wins
          </h2>
          <div className="relative rounded-2xl overflow-hidden h-56 bg-slate-50 mb-6 not-prose">
            <Image
              src={PRINTED_IMAGE}
              alt="Custom printed SOS grab bags Ireland — branded kraft takeaway bags with logo"
              fill
              className="object-contain p-8"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-4 mb-6 not-prose">
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
              <p className="font-bold text-slate-900 mb-3">Plain kraft SOS</p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex gap-2">
                  <span className="text-slate-400">→</span>Order by the case — no artwork proof
                </li>
                <li className="flex gap-2">
                  <span className="text-slate-400">→</span>Fast restock for Dublin, Cork and Galway
                  kitchens
                </li>
                <li className="flex gap-2">
                  <span className="text-slate-400">→</span>Tiered case pricing rewards volume
                </li>
                <li className="flex gap-2">
                  <span className="text-slate-400">→</span>Best for high-volume everyday takeaway
                </li>
              </ul>
            </div>
            <div className="bg-amber-50 rounded-xl p-5 border border-amber-200">
              <p className="font-bold text-slate-900 mb-3">Custom printed SOS</p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex gap-2">
                  <span className="text-amber-600">→</span>MOQ from 500 units
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600">→</span>Printed pricing from €0.25 per unit
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600">→</span>Typical lead time 10–14 business days
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600">→</span>Small and medium print sizes available
                </li>
              </ul>
            </div>
          </div>
          <p className="text-slate-700 leading-relaxed mb-8">
            Many Irish operators mix both: plain SOS cases for routine delivery volume, and a printed
            run for brand-led café counters or retail. Handled carrier bags remain the better printed
            choice when customers expect a gift-style carry — SOS stays the cheaper no-handle format
            for food service. Compare styles in our{' '}
            <Link href="/blog/paper-bags-with-logo-ireland" className="text-blue-600 hover:underline">
              paper bags with logo Ireland guide
            </Link>{' '}
            and{' '}
            <Link href="/blog/printed-paper-bag-cost-ireland" className="text-blue-600 hover:underline">
              printed paper bag cost Ireland
            </Link>{' '}
            overview.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Wholesale case pricing — what the tiers look like
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Plain SOS bags are sold by the case with four-tier B2B pricing (1–3, 4–6, 7–9 and 10+
            cases). Live wholesale bands on core kraft lines currently sit around:
          </p>
          <div className="overflow-x-auto my-6 not-prose">
            <table className="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">Plain SOS line</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">Case price band</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">Notes</th>
                </tr>
              </thead>
              <tbody>
                {priceRows.map((row, i) => (
                  <tr key={row.size} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="px-4 py-3 font-medium text-slate-900 whitespace-nowrap">{row.size}</td>
                    <td className="px-4 py-3 text-slate-600 whitespace-nowrap">{row.band}</td>
                    <td className="px-4 py-3 text-slate-600">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-700 leading-relaxed mb-8">
            Always confirm the live tier table on each product page before ordering — bands move with
            the wholesale list. Hitting the next case tier is usually cheaper than splitting tiny
            top-ups across the month. Browse current SOS case prices under{' '}
            <Link
              href="/plain-packaging?category=SOS+Bags"
              className="text-blue-600 hover:underline"
            >
              plain packaging → SOS Bags
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Delivery across Ireland from Ashbourne
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            PrintNPack is based in Ashbourne, Co. Meath — convenient for Dublin and Meath collections,
            with nationwide dispatch for Cork, Galway, Limerick and every other county. Plain SOS
            orders move quickly because they are stock packaging, not made-to-print jobs.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Pair SOS bags with other wholesale catering lines —{' '}
            <Link
              href="/blog/biobox-containers-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              biobox containers
            </Link>
            ,{' '}
            <Link href="/blog/coffee-cups-ireland-guide" className="text-blue-600 hover:underline">
              coffee cups
            </Link>
            , and{' '}
            <Link
              href="/blog/plain-packaging-wholesale-ireland"
              className="text-blue-600 hover:underline"
            >
              plain packaging wholesale
            </Link>{' '}
            — so one delivery covers bags and the food packaging that goes inside them.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How to order SOS grab bags in Ireland
          </h2>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-8">
            <li>List your top takeaway builds and match each to a compact, medium or tall SOS size</li>
            <li>Choose plain kraft for everyday volume, or printed SOS from 500 units for branding</li>
            <li>Confirm case pack (250 or 500) fits your weekly bag count</li>
            <li>Order plain cases on the paper bags hub — watch the volume tiers</li>
            <li>Take nationwide delivery or collect from Ashbourne, Co. Meath</li>
          </ol>

          <div className="bg-slate-900 rounded-xl p-6 mb-8 text-white not-prose">
            <p className="font-semibold mb-1">Ready to restock SOS grab bags?</p>
            <p className="text-slate-400 text-sm mb-4">
              Plain kraft takeaway bags by the case with tiered pricing — plus custom printed SOS from
              500 units — delivered across Ireland.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/plain-paper-bags-ireland"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Shop Plain Paper Bags Ireland →
              </Link>
              <Link
                href="/plain-packaging?category=SOS+Bags"
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Browse SOS Bag Prices
              </Link>
              <Link
                href="/products/sos-grab-bags"
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Custom Printed SOS Bags
              </Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6 not-prose">
            {[
              {
                q: 'What are SOS grab bags?',
                a: 'SOS (self-opening square / stand-up square bottom) grab bags are gusseted kraft paper bags with a flat base that stands upright when filled — the standard takeaway carry bag for Irish cafés, delis, bakeries and restaurants.',
              },
              {
                q: 'Where can I buy SOS grab bags wholesale in Ireland?',
                a: 'PrintNPack stocks plain kraft SOS takeaway bags by the case with tiered B2B pricing on the plain paper bags Ireland hub, and custom printed SOS grab bags from 500 units. Delivery runs from Ashbourne, Co. Meath to Dublin, Cork, Galway and nationwide.',
              },
              {
                q: 'What SOS bag sizes are available?',
                a: 'Plain wholesale lines include compact kraft SOS bags such as 5×8.5×9.75 in (500 per case) and mid sizes such as 7×11×13 and 26×12×30 cm / 10×15×12 (typically 250 per case), plus a taller 26×12×40 cm / 10×15×16 option for larger takeaway orders.',
              },
              {
                q: 'Should I buy plain or custom printed SOS bags?',
                a: 'Plain kraft SOS bags are best for everyday high-volume takeaway — no artwork proof and fast restock by the case. Custom printed SOS grab bags suit brand-led cafés and retailers that want a logo on every bag; printed runs start from 500 units with a typical 10–14 business day lead time.',
              },
              {
                q: 'Do you deliver SOS bags to Dublin, Cork and Galway?',
                a: 'Yes. PrintNPack delivers SOS grab bags to Dublin, Cork, Galway and all Irish counties, with collection available from Ashbourne, Co. Meath.',
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
              href: '/blog/plain-packaging-wholesale-ireland',
              src: '/images/plain-packaging/100396.webp',
              title: 'Plain Packaging Wholesale Ireland: How to Buy Catering Supplies in Bulk',
            },
            {
              href: '/blog/paper-bags-with-logo-ireland',
              src: '/images/products/twisted-handle-bags/1.png',
              title: 'Paper Bags with Logo Ireland: A Guide for Retailers, Cafés & Food Businesses',
            },
            {
              href: '/blog/printed-paper-bag-cost-ireland',
              src: '/images/products/flat-handle-bags/1.png',
              title: 'How Much Do Printed Paper Bags Cost in Ireland?',
            },
            {
              href: '/blog/biobox-containers-ireland-sizes-buying-guide',
              src: '/images/plain-packaging/120090.webp',
              title: 'Biobox Containers Ireland: Sizes No.1–No.12 & Wholesale Buying Guide',
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
              <p className="text-sm font-medium text-slate-800 group-hover:text-blue-700 leading-snug">
                {relatedTitle}
              </p>
            </Link>
          ))}
        </div>
      </main>
    </Layout>
  );
}
