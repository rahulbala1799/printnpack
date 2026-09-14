import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/disposable-gloves-ireland-nitrile-vs-vinyl-buying-guide`;
const HERO_IMAGE = '/images/plain-packaging/170054.webp';
const BLACK_NITRILE_IMAGE = '/images/plain-packaging/170065.webp';
const VINYL_IMAGE = '/images/plain-packaging/122090.webp';
const DELI_IMAGE = '/images/plain-packaging/122175.webp';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Disposable Gloves Ireland: Nitrile vs Vinyl, Sizes & Wholesale Buying Guide',
  description:
    'A practical buying guide to disposable gloves in Ireland — nitrile vs vinyl, powder-free options, S–XL sizes, case packs, and wholesale delivery from Ashbourne to Dublin, Cork, Galway and nationwide.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-09-14',
  dateModified: '2026-09-14',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I buy disposable gloves wholesale in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack supplies wholesale disposable gloves across Ireland — powder-free blue and black nitrile, Spirit vinyl, deli-fit and poly gloves in sizes S to XL — with tiered case pricing and delivery from Ashbourne, Co. Meath to Dublin, Cork, Galway and nationwide.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should Irish kitchens use nitrile or vinyl gloves?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nitrile gloves offer better puncture resistance and are preferred for food prep, catering and hygiene-critical tasks. Vinyl gloves are more economical for light food handling, sandwich prep and general counter work. Many Irish operators stock both.',
      },
    },
    {
      '@type': 'Question',
      name: 'What glove sizes are available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most PrintNPack nitrile and vinyl lines are stocked in Small, Medium, Large and Extra Large. Medium and Large cover the majority of catering teams; keep a small XL case for larger hands on busy prep lines.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are the gloves powder-free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SAFE TOUCH nitrile gloves, Spirit PF vinyl gloves and deli-fit gloves are powder-free. Spirit LP vinyl gloves are also suitable for food service. Check each product page for the exact specification.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you deliver disposable gloves to Dublin and Cork?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. PrintNPack delivers disposable gloves to Dublin, Cork, Galway and every Irish county. Plain stock orders dispatch quickly from Ashbourne, Co. Meath, with collection available for local buyers.',
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
      name: 'Disposable Gloves Ireland Buying Guide',
      item: PAGE_URL,
    },
  ],
};

const sizeRows = [
  { size: 'Small (S)', use: 'Tighter fit for smaller hands and precision food prep' },
  { size: 'Medium (M)', use: 'Most popular size for general catering and kitchen teams' },
  { size: 'Large (L)', use: 'Comfortable everyday fit for most adult hands on deli and prep lines' },
  { size: 'Extra Large (XL)', use: 'Larger hands and high-volume prep where Medium/Large feel tight' },
];

const typeRows = [
  {
    type: 'Blue nitrile (PF)',
    pack: '10 × 100',
    use: 'Food prep, catering and hygiene-critical tasks — best all-round puncture resistance',
  },
  {
    type: 'Black nitrile (PF)',
    pack: '10 × 100',
    use: 'High-visibility contrast for dark food, tattoos/beauty and heavy kitchen handling',
  },
  {
    type: 'Vinyl clear / blue (LP & PF)',
    pack: '10 × 100',
    use: 'Economical light food handling, sandwich counters and general kitchen use',
  },
  {
    type: 'Deli-fit (PF)',
    pack: '20 × 100',
    use: 'Loose-fit gloves for quick deli, sandwich and counter service changes',
  },
  {
    type: 'Poly embossed',
    pack: '100 × 100',
    use: 'Very light short tasks — sandwich wrapping and quick food contact jobs',
  },
];

export default function DisposableGlovesIrelandNitrileVsVinylBuyingGuide() {
  const title = 'Disposable Gloves Ireland: Nitrile vs Vinyl, Sizes & Wholesale Buying Guide';
  const description =
    'Buy disposable gloves in Ireland with confidence — nitrile vs vinyl, powder-free options, S–XL sizes, case packs, and wholesale delivery to Dublin, Cork, Galway and nationwide from Ashbourne.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="disposable gloves ireland, nitrile gloves ireland, vinyl gloves wholesale ireland, catering gloves dublin, powder free gloves ireland, blue nitrile gloves, food handling gloves cork, gloves wholesale galway, kitchen gloves ireland, wholesale disposable gloves"
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
          content="Disposable gloves Ireland — blue powder-free nitrile catering gloves wholesale"
        />
        <meta property="article:published_time" content="2026-09-14" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${siteUrl}${HERO_IMAGE}`} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
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
          <span className="text-slate-900">Disposable Gloves Ireland</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            Wholesale Guide
          </span>
          <span className="text-slate-400 text-sm">14 Sep 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Disposable Gloves Ireland: Nitrile vs Vinyl, Sizes &amp; Wholesale Buying Guide
        </h1>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="relative rounded-2xl overflow-hidden h-48 col-span-2 bg-slate-50">
            <Image
              src={HERO_IMAGE}
              alt="Disposable gloves Ireland — powder-free blue nitrile gloves for Dublin catering kitchens"
              fill
              className="object-contain p-6"
              priority
              sizes="(max-width: 768px) 66vw, 512px"
            />
          </div>
          <div className="relative rounded-2xl overflow-hidden h-48 bg-slate-50">
            <Image
              src={VINYL_IMAGE}
              alt="Vinyl gloves Ireland — blue Spirit vinyl gloves wholesale for Cork and Galway food service"
              fill
              className="object-contain p-4"
              sizes="(max-width: 768px) 33vw, 256px"
            />
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Disposable gloves are one of the highest-turnover consumables in Irish hospitality. Choose
            the wrong material and you either overspend on strength you never need, or watch thin gloves
            tear mid-service. Choose the wrong size and staff waste boxes changing pairs that do not fit.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            This guide explains how to buy <strong>disposable gloves in Ireland</strong> for catering and
            food service — when nitrile beats vinyl, which sizes to stock, how case packs work, and how{' '}
            <Link href="/gloves-ireland" className="text-blue-600 hover:underline">
              PrintNPack&apos;s gloves Ireland
            </Link>{' '}
            wholesale range ships from Ashbourne to Dublin, Cork, Galway and nationwide.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Why Irish kitchens buy gloves by the case
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Unlike custom printed packaging, disposable gloves are plain wholesale stock. There is no
            artwork proof or print minimum — you order cases of nitrile, vinyl, deli-fit or poly gloves
            and restock when service volume climbs. That suits restaurants in Dublin, delis in Cork,
            cafés in Galway, and catering kitchens that need reliable food-handling gloves without
            waiting on a special order.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            PrintNPack stocks powder-free blue and black nitrile, Spirit LP and PF vinyl, deli-fit
            gloves, embossed poly gloves and long-sleeve rubber gloves for heavy washing-up. Orders
            dispatch across Ireland; local buyers can also collect from Ashbourne, Co. Meath.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Nitrile vs vinyl — which glove for which job
          </h2>
          <div className="relative rounded-2xl overflow-hidden h-56 bg-slate-50 mb-6 not-prose">
            <Image
              src={BLACK_NITRILE_IMAGE}
              alt="Black nitrile gloves Ireland Ashbourne wholesale — powder-free catering gloves"
              fill
              className="object-contain p-8"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </div>
          <p className="text-slate-700 leading-relaxed mb-4">
            Material choice is the decision that most affects cost and performance. Match the glove to
            the task, not the cheapest box on the shelf.
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
            <li>
              <strong>Powder-free blue nitrile</strong> — the default for food prep and catering. Better
              puncture resistance than vinyl, and the familiar blue colour for kitchen hygiene zones.
              SAFE TOUCH lines typically pack <strong>10 × 100</strong> per case in S–XL.
            </li>
            <li>
              <strong>Powder-free black nitrile</strong> — same performance family with darker contrast,
              popular where grease or dark food needs a visible glove, or for multi-use catering teams.
            </li>
            <li>
              <strong>Vinyl (Spirit LP and PF)</strong> — the economical option for light food handling,
              sandwich prep and general counter work. Clear and blue options in S–XL, usually{' '}
              <strong>10 × 100</strong> per case.
            </li>
            <li>
              <strong>Deli-fit gloves</strong> — looser fit for fast counter changes; often{' '}
              <strong>20 × 100</strong> per case for busy sandwich and deli lines.
            </li>
            <li>
              <strong>Poly embossed gloves</strong> — for very light, short-contact tasks. High count
              cases (<strong>100 × 100</strong>) suit sites that go through pairs quickly on simple jobs.
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-8">
            A practical Irish stock mix is <strong>nitrile for hot prep and butchery-style tasks</strong>,
            plus a vinyl or deli-fit case for front counter work. Browse blue and black nitrile on the{' '}
            <Link href="/nitrile-gloves-ireland" className="text-blue-600 hover:underline">
              nitrile gloves Ireland
            </Link>{' '}
            hub, and Spirit vinyl on{' '}
            <Link href="/vinyl-gloves-ireland" className="text-blue-600 hover:underline">
              vinyl gloves Ireland
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Glove sizes Ireland — S to XL at a glance
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Fit drives waste. Gloves that are too tight tear; gloves that are too loose slow staff and
            catch on equipment. Stock the sizes your team actually wears.
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
            For most Irish food businesses, <strong>Medium and Large</strong> cover the majority of the
            team. Keep a smaller case of Small and XL so nobody is forced into the wrong size during a
            busy Friday service.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Case packs and how wholesale pricing works
          </h2>
          <div className="relative rounded-2xl overflow-hidden h-56 bg-slate-50 mb-6 not-prose">
            <Image
              src={DELI_IMAGE}
              alt="Deli-fit gloves Ireland — powder-free clear gloves for sandwich counters nationwide"
              fill
              className="object-contain p-8"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </div>
          <p className="text-slate-700 leading-relaxed mb-4">
            Gloves are sold by the case with <strong>tiered volume pricing</strong> — the more cases you
            take, the lower the price per case. There is no custom-print MOQ because these are plain
            stock lines. Typical packs:
          </p>
          <div className="overflow-x-auto my-6 not-prose">
            <table className="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">Type</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">Case pack</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">Best for</th>
                </tr>
              </thead>
              <tbody>
                {typeRows.map((row, i) => (
                  <tr key={row.type} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="px-4 py-3 font-medium text-slate-900">{row.type}</td>
                    <td className="px-4 py-3 text-slate-600 whitespace-nowrap">{row.pack}</td>
                    <td className="px-4 py-3 text-slate-600">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-700 leading-relaxed mb-4">
            On the gloves hubs, wholesale case pricing is shown from about <strong>€29 per case</strong>{' '}
            for popular nitrile lines and from about <strong>€15 per case</strong> for vinyl, depending
            on size, brand and the volume tier you hit. Always check the live tier table on each product
            page — case tiering is how wholesale buyers reduce cost per pair without inventing one-off
            unit prices.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            A useful buying habit for Irish kitchens is to lock Medium and Large nitrile on a standing
            reorder, then add vinyl or deli-fit only for counter roles. That keeps shelf space tidy and
            makes volume tiers easier to hit.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Powder-free gloves and food-service buying tips
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Most Irish food businesses prefer <strong>powder-free (PF)</strong> gloves for food contact.
            SAFE TOUCH nitrile, Spirit PF vinyl and deli-fit lines in the PrintNPack range are
            powder-free. Spirit LP vinyl remains a cost-effective option for lighter tasks — always
            confirm the specification on the product page before you set a standing order.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Colour coding helps busy kitchens. Blue nitrile is the familiar food-prep standard; black
            nitrile gives contrast on darker ingredients; clear vinyl suits front-counter work where a
            low-profile look matters. If your HACCP or brand standards call for a specific colour, lock
            that SKU on reorder so staff do not mix boxes mid-week.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Do not confuse disposable catering gloves with long-sleeve rubber gloves. The rubber pairs
            in the range are for washing-up and heavy wet work — useful back-of-house, but not a
            substitute for single-use nitrile or vinyl on the prep line.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Delivery across Ireland from Ashbourne
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            PrintNPack is based in Ashbourne, Co. Meath — convenient for Dublin and Meath collections,
            with nationwide dispatch for Cork, Galway, Limerick and every other county. Plain glove
            orders move quickly because they are stock PPE, not made-to-print jobs.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Pair gloves with other wholesale catering lines —{' '}
            <Link href="/blog/refuse-sacks-ireland-buying-guide" className="text-blue-600 hover:underline">
              refuse sacks
            </Link>
            ,{' '}
            <Link href="/blog/biobox-containers-ireland-sizes-buying-guide" className="text-blue-600 hover:underline">
              biobox containers
            </Link>
            , and{' '}
            <Link href="/blog/plain-packaging-wholesale-ireland" className="text-blue-600 hover:underline">
              plain packaging wholesale
            </Link>{' '}
            — so one delivery covers hygiene and takeaway stock.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How to order disposable gloves in Ireland
          </h2>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-8">
            <li>List prep vs counter tasks and decide nitrile, vinyl or a mix of both</li>
            <li>Count team sizes — stock Medium and Large first, then Small and XL as needed</li>
            <li>Confirm case pack (10×100, 20×100 or 100×100) fits your weekly volume</li>
            <li>Order by the case on the gloves hub — watch the volume tiers</li>
            <li>Take nationwide delivery or collect from Ashbourne, Co. Meath</li>
          </ol>

          <div className="bg-slate-900 rounded-xl p-6 mb-8 text-white not-prose">
            <p className="font-semibold mb-1">Ready to restock disposable gloves?</p>
            <p className="text-slate-400 text-sm mb-4">
              Powder-free nitrile, vinyl, deli-fit and poly gloves in S–XL with tiered case pricing —
              delivered across Ireland.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/gloves-ireland"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Shop Gloves Ireland →
              </Link>
              <Link
                href="/nitrile-gloves-ireland"
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Nitrile Gloves
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
                q: 'Where can I buy disposable gloves wholesale in Ireland?',
                a: 'PrintNPack supplies wholesale disposable gloves across Ireland — powder-free blue and black nitrile, Spirit vinyl, deli-fit and poly gloves in sizes S to XL — with tiered case pricing and delivery from Ashbourne, Co. Meath to Dublin, Cork, Galway and nationwide.',
              },
              {
                q: 'Should Irish kitchens use nitrile or vinyl gloves?',
                a: 'Nitrile gloves offer better puncture resistance and are preferred for food prep, catering and hygiene-critical tasks. Vinyl gloves are more economical for light food handling, sandwich prep and general counter work. Many Irish operators stock both.',
              },
              {
                q: 'What glove sizes are available?',
                a: 'Most PrintNPack nitrile and vinyl lines are stocked in Small, Medium, Large and Extra Large. Medium and Large cover the majority of catering teams; keep a small XL case for larger hands on busy prep lines.',
              },
              {
                q: 'Are the gloves powder-free?',
                a: 'SAFE TOUCH nitrile gloves, Spirit PF vinyl gloves and deli-fit gloves are powder-free. Spirit LP vinyl gloves are also suitable for food service. Check each product page for the exact specification.',
              },
              {
                q: 'Do you deliver disposable gloves to Dublin and Cork?',
                a: 'Yes. PrintNPack delivers disposable gloves to Dublin, Cork, Galway and every Irish county. Plain stock orders dispatch quickly from Ashbourne, Co. Meath, with collection available for local buyers.',
              },
            ].map(({ q, a }) => (
              <div key={q} className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-slate-900 mb-1">{q}</h3>
                <p className="text-slate-700 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Related guides</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                href: '/blog/plain-packaging-wholesale-ireland',
                title: 'Plain Packaging Wholesale Ireland',
                src: '/images/plain-packaging/100396.webp',
              },
              {
                href: '/blog/refuse-sacks-ireland-buying-guide',
                title: 'Refuse Sacks Ireland Buying Guide',
                src: '/images/plain-packaging/150003.webp',
              },
              {
                href: '/blog/biobox-containers-ireland-sizes-buying-guide',
                title: 'Biobox Containers Ireland Sizes Guide',
                src: '/images/plain-packaging/120090.webp',
              },
              {
                href: '/blog/coffee-cups-ireland-guide',
                title: 'Coffee Cups Ireland Buying Guide',
                src: '/images/plain-packaging/100070.webp',
              },
            ].map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="flex gap-3 p-3 rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50/40 transition-colors"
              >
                <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-slate-50 flex-shrink-0">
                  <Image src={post.src} alt={post.title} fill className="object-contain p-1" sizes="64px" />
                </div>
                <span className="text-sm font-medium text-slate-800 self-center">{post.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
