import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/custom-table-covers-ireland-sizes-buying-guide`;
const HUB_HREF = '/custom-table-covers-ireland';
const HERO_IMAGE = '/images/table-covers/custom-table-cover-ireland.jpg';
const EXHIBITION_IMAGE =
  '/images/banners/fabric-banner-stands/fabric-banner-stand-ireland-exhibition-media-wall.jpg';
const CONFERENCE_IMAGE =
  '/images/banners/fabric-banner-stands/fabric-banner-stand-ireland-conference-backdrop.jpg';
const FRAME_IMAGE =
  '/images/banners/fabric-banner-stands/fabric-banner-stand-ireland-banner-with-frame.jpg';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Custom Table Covers Ireland: Sizes, MOQ & Exhibition Buying Guide',
  description:
    'How to buy custom printed table covers in Ireland — standard sizes from 1.2 × 0.6 m to 6 × 1.5 m, custom measurements up to 1.5 m × 6 m, MOQ from one cover, and nationwide delivery from Ashbourne for exhibitions and events.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-10-07',
  dateModified: '2026-10-07',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I order custom table covers in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack prints custom table covers in Ashbourne, Co. Meath and delivers to every county in Ireland, including Dublin, Cork, Galway, Limerick and Waterford. Collection is available from the Ashbourne unit.',
      },
    },
    {
      '@type': 'Question',
      name: 'What sizes of custom table covers are available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standard finished sizes are 1.2 × 0.6 m, 1.8 × 0.75 m, 2.4 × 0.75 m, 3 × 1.5 m and 6 × 1.5 m. For any other table, choose Custom and enter width and length — width up to 1.5 m, length up to 6 m.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the minimum order for a printed table cover?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can order from one cover. There is no multi-unit minimum — add the quantity in the quote builder and PrintNPack confirms the price before anything is printed.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is an exhibition table throw?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A table throw is a fitted printed cover that wraps the front and sides of an exhibition or conference table, with your logo and artwork on the cloth. It is also called a fitted table cover, stretch table cover or branded table cloth.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you deliver custom table covers to Dublin, Cork and Galway?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. PrintNPack delivers printed table covers to Dublin, Cork, Galway, Limerick, Waterford and every other Irish county from Ashbourne, Co. Meath.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I buy a table cover alone or with a banner stand?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A table cover brands the front of the stand. Pair it with a roll-up banner or fabric banner stand when you also need a wall graphic behind the table — many Irish exhibitors order both for the same show.',
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
      name: 'Custom Table Covers Ireland Buying Guide',
      item: PAGE_URL,
    },
  ],
};

const sizeRows = [
  {
    size: '1.2 × 0.6 m',
    use: 'Small display or registration table',
  },
  {
    size: '1.8 × 0.75 m',
    use: 'Standard 6 ft exhibition table',
  },
  {
    size: '2.4 × 0.75 m',
    use: '8 ft trade-show table',
  },
  {
    size: '3 × 1.5 m',
    use: 'Wide branded front for a larger stand',
  },
  {
    size: '6 × 1.5 m',
    use: 'Maximum length, full 1.5 m drop — joined table rows',
  },
];

export default function CustomTableCoversIrelandSizesBuyingGuide() {
  const title = 'Custom Table Covers Ireland: Sizes, MOQ & Exhibition Buying Guide';
  const description =
    'Buy custom printed table covers in Ireland with confidence — sizes from 1.2 × 0.6 m to 6 × 1.5 m, custom measurements up to 1.5 m × 6 m, MOQ from one cover, and delivery to Dublin, Cork, Galway and nationwide from Ashbourne.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="custom table covers ireland, printed table covers dublin, exhibition table throws ireland, fitted table covers cork, trade show table covers galway, branded table cloths ireland, stretch table covers ashbourne, conference table covers ireland, event table throws ireland, custom table cover sizes ireland"
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
          content="Custom printed table cover Ireland — fitted exhibition throw for event tables"
        />
        <meta property="article:published_time" content="2026-10-07" />

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
          <span className="text-slate-900">Custom Table Covers Ireland</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            Retail Guide
          </span>
          <span className="text-slate-400 text-sm">7 Oct 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Custom Table Covers Ireland: Sizes, MOQ &amp; Exhibition Buying Guide
        </h1>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="relative rounded-2xl overflow-hidden h-48 col-span-2 bg-slate-50">
            <Image
              src={HERO_IMAGE}
              alt="Custom table covers Ireland — fitted printed exhibition throw on a branded Dublin event table"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 66vw, 512px"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={EXHIBITION_IMAGE}
                alt="Exhibition media wall Ireland — fabric banner stand pairing with table covers Cork"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={CONFERENCE_IMAGE}
                alt="Conference backdrop Ireland — fabric display for Galway hotel and trade events"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            The first thing a visitor sees at most Irish stands is not the roll-up behind you — it is
            the cloth on the table. A blank hired throw wastes the aisle view; a fitted printed cover
            puts your name, logo and one short line where people actually look when they stop.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            This guide covers <strong>custom table covers in Ireland</strong> — finished sizes from{' '}
            <strong>1.2 × 0.6 m to 6 × 1.5 m</strong>, custom measurements up to{' '}
            <strong>1.5 m wide and 6 m long</strong>, ordering from <strong>one cover</strong>, and
            how{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              PrintNPack&apos;s custom table covers
            </Link>{' '}
            work for exhibitions, conferences and pop-ups with delivery from Ashbourne.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Why Irish exhibitors order printed table covers
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            A custom table cover — also called an exhibition table throw, fitted table cover, stretch
            table cover or branded table cloth — wraps the front and sides of a conference or trade
            table. Clubs, schools, publishers and SME stands use the same product at the RDS, hotel
            conferences, county shows and one-day Dublin pop-ups.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            PrintNPack prints these covers in Ashbourne, Co. Meath and delivers nationwide. You pick a
            listed size or enter your own measurements in the quote builder — one option at a time so
            the order is never mixed. Pricing is quoted per job; this guide does not invent euro rates.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Custom table cover sizes at a glance
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Start with the table you will actually hire or own. Most Irish exhibition halls use a 6 ft
            or 8 ft table; longer runs cover joined rows. Use the table below, then confirm the live
            quote on the product page.
          </p>

          <div className="overflow-x-auto mb-8 not-prose">
            <table className="min-w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
              <thead className="bg-slate-50 text-left">
                <tr>
                  <th className="px-4 py-3 font-semibold text-slate-900">Finished size</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">Best for</th>
                </tr>
              </thead>
              <tbody>
                {sizeRows.map((row) => (
                  <tr key={row.size} className="border-t border-slate-200">
                    <td className="px-4 py-3 text-slate-900 font-medium">{row.size}</td>
                    <td className="px-4 py-3 text-slate-700">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-slate-700 leading-relaxed mb-8">
            Custom limit: <strong>width up to 1.5 m</strong>, <strong>length up to 6 m</strong>. The
            1.5 m front drop is the widest side printed on this product — long enough for a full-height
            branded face on a standard exhibition table.
          </p>

          <div className="relative rounded-2xl overflow-hidden h-56 mb-8 bg-slate-50 not-prose">
            <Image
              src={FRAME_IMAGE}
              alt="Banner with frame Ireland — fabric stand often ordered with custom table covers Ashbourne"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 720px"
            />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Standard sizes vs made-to-measure
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Choose a <strong>standard size</strong> when your table matches a common hire footprint —
            especially <strong>1.8 × 0.75 m</strong> for a 6 ft table and <strong>2.4 × 0.75 m</strong>{' '}
            for an 8 ft table. Those two cover most Cork and Dublin hotel conference layouts.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Choose <strong>Custom</strong> when the venue supplies an odd width, you are joining two
            tables, or you need a longer branded run up to 6 m. Enter width and length in metres; the
            quote builder clears the preset chips so you do not send conflicting measurements.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            For a joined row or a wide branded front, the <strong>3 × 1.5 m</strong> and{' '}
            <strong>6 × 1.5 m</strong> standards are the usual starting points before you measure for
            a fully custom length.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            MOQ from one cover — how quoting works
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Custom table covers start from <strong>one unit</strong>. That suits a single RDS booth,
            a school open day in Galway, or a one-off Limerick conference as well as multi-stand tours.
            Add quantity in the quote builder; PrintNPack confirms price before print.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Lead time is quoted from Ashbourne once artwork is approved — build show-date buffer into
            proofing, especially ahead of busy Dublin autumn exhibition weeks. We do not list
            speculative euro prices here because size and quantity change the quote; use{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              custom table covers Ireland
            </Link>{' '}
            or the quote cart for a live figure.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Which size for which Irish event?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            <strong>Registration and info desks</strong> usually fit <strong>1.2 × 0.6 m</strong> or
            the 6 ft standard — keep the message to logo plus a short line so staff and badges stay
            visible. <strong>Standard trade booths</strong> at Dublin and Cork exhibitions almost always
            hire a 6 ft or 8 ft table, so <strong>1.8 × 0.75 m</strong> and{' '}
            <strong>2.4 × 0.75 m</strong> are the two sizes Irish buyers order most.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            <strong>Hotel conferences and product launches</strong> in Galway or Limerick often need a
            wider branded face — step up to <strong>3 × 1.5 m</strong> when the table is long or you
            want a deeper drop. <strong>Joined table rows</strong> at county shows and open days suit
            the <strong>6 × 1.5 m</strong> cover or a custom length up to 6 m measured on site.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            If the venue has not confirmed hire furniture yet, order against the most common 6 ft size
            and only switch to Custom once you have a written table measurement — changing artwork after
            proof for a different footprint costs more time than measuring twice.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Pairing table covers with banners and stands
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            The table cover brands the aisle-facing cloth. When the stand also needs a wall, pair it
            with a{' '}
            <Link href="/roll-up-banners-ireland" className="text-blue-600 hover:underline">
              roll-up banner
            </Link>{' '}
            or a{' '}
            <Link href="/fabric-banner-stands-ireland" className="text-blue-600 hover:underline">
              fabric banner stand
            </Link>
            . Many Irish SMEs tour with one fitted throw plus one media wall — that mix covers a
            standard booth without shipping rigid boards.
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
            <li>
              <Link href="/blog/fabric-banner-stands-ireland-sizes-buying-guide" className="text-blue-600 hover:underline">
                Fabric banner stands Ireland
              </Link>{' '}
              — 2.5–6 m kits or graphic only for the back wall
            </li>
            <li>
              <Link href="/blog/curved-banner-stands-ireland-sizes-buying-guide" className="text-blue-600 hover:underline">
                Curved banner stands
              </Link>{' '}
              — wider photo walls for larger footprints
            </li>
            <li>
              <Link href="/blog/roll-up-banners-ireland-guide" className="text-blue-600 hover:underline">
                Roll-up banner sizes
              </Link>{' '}
              — portable side panels for the same event
            </li>
            <li>
              <Link href="/blog/trade-show-banners-decals-ireland" className="text-blue-600 hover:underline">
                Trade show banners &amp; decals
              </Link>{' '}
              — broader toolkit when you also need floor or window graphics
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-8">
            Clubs and schools often add{' '}
            <Link href="/blog/custom-printed-flags-ireland-sizes-buying-guide" className="text-blue-600 hover:underline">
              custom printed flags
            </Link>{' '}
            for outdoor pitches while keeping the indoor stand on a printed table cover.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-8 not-prose">
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={EXHIBITION_IMAGE}
                alt="Exhibition media wall Ireland — stretch fabric display for Dublin trade shows"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={HERO_IMAGE}
                alt="Printed table throw Ireland — branded exhibition table cover for Cork conferences"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Artwork tips before you approve the proof
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Keep the logo and one short line large enough to read from the aisle. Avoid packing the
            front face with small paragraphs — visitors glance while walking. Leave breathing room at
            the edges where the cloth wraps the table corners, and place phone numbers or QR codes at
            standing eye height rather than in the lower skirting zone.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Supply high-resolution artwork sized to the finished cover. PrintNPack issues a proof
            before production — treat that as the last chance to catch a wrong size or missing contact
            detail. Rush changes after print starts are not assumed in a standard quote.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Delivery across Ireland from Ashbourne
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            PrintNPack is based in Ashbourne, Co. Meath — convenient for Dublin and Meath collections,
            with nationwide dispatch for Cork, Galway, Limerick, Waterford and every other county.
            RDS, Convention Centre Dublin and city hotel exhibitions are everyday Dublin routes; Cork
            and Munster venues, Galway and Connacht events, and Ulster counties in the Republic follow
            the same print run.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            UK or Europe shipping is only confirmed case-by-case on request; this guide focuses on
            Irish delivery, which is the core service for custom table covers.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How to order custom table covers in Ireland
          </h2>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-8">
            <li>Measure the table (or confirm the venue hire size — 6 ft or 8 ft is common)</li>
            <li>Pick a standard size or enter custom width (≤ 1.5 m) and length (≤ 6 m)</li>
            <li>Set quantity from one cover upward</li>
            <li>Supply high-resolution artwork and approve the proof</li>
            <li>Take nationwide delivery or collect from Ashbourne before show day</li>
          </ol>

          <div className="bg-slate-900 rounded-xl p-6 mb-8 text-white not-prose">
            <p className="font-semibold mb-1">Ready to order custom table covers?</p>
            <p className="text-slate-400 text-sm mb-4">
              Standard sizes from 1.2 × 0.6 m to 6 × 1.5 m, custom up to 1.5 m × 6 m, MOQ from one —
              quoted and delivered across Ireland.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={HUB_HREF}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Shop Custom Table Covers Ireland →
              </Link>
              <Link
                href="/banners-ireland"
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Browse Banners Ireland
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
                q: 'Where can I order custom table covers in Ireland?',
                a: 'PrintNPack prints custom table covers in Ashbourne, Co. Meath and delivers to every county, including Dublin, Cork, Galway, Limerick and Waterford. Collection is available from Ashbourne.',
              },
              {
                q: 'What sizes of custom table covers are available?',
                a: 'Standard finished sizes are 1.2 × 0.6 m, 1.8 × 0.75 m, 2.4 × 0.75 m, 3 × 1.5 m and 6 × 1.5 m. Custom width up to 1.5 m and length up to 6 m.',
              },
              {
                q: 'What is the minimum order for a printed table cover?',
                a: 'From one cover. There is no multi-unit minimum — quantity is set in the quote builder and price is confirmed before print.',
              },
              {
                q: 'What is an exhibition table throw?',
                a: 'A fitted printed cover that wraps the front and sides of an exhibition or conference table with your logo and artwork. Also called a fitted table cover, stretch table cover or branded table cloth.',
              },
              {
                q: 'Do you deliver custom table covers to Dublin, Cork and Galway?',
                a: 'Yes. We deliver to Dublin, Cork, Galway and all Irish counties, with collection available from Ashbourne, Co. Meath.',
              },
              {
                q: 'Should I buy a table cover alone or with a banner stand?',
                a: 'A table cover brands the front of the stand. Pair it with a roll-up or fabric banner stand when you also need a wall graphic — many Irish exhibitors order both for the same show.',
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
              href: '/blog/fabric-banner-stands-ireland-sizes-buying-guide',
              src: '/images/banners/fabric-banner-stands/fabric-banner-stand-ireland-banner-with-frame.jpg',
              title: 'Fabric Banner Stands Ireland: Sizes, Kits & Trade Show Buying Guide',
            },
            {
              href: '/blog/curved-banner-stands-ireland-sizes-buying-guide',
              src: '/images/banners/curved-banner-stands/curved-banner-stand-ireland-curved-media-wall.jpg',
              title: 'Curved Banner Stands Ireland: Sizes, Kits & Exhibition Buying Guide',
            },
            {
              href: '/blog/custom-printed-flags-ireland-sizes-buying-guide',
              src: '/images/products/custom-printed-flags/custom-printed-flags-ireland-gaa-club.jpg',
              title: 'Custom Printed Flags Ireland: Sizes, Materials & Club Buying Guide',
            },
            {
              href: '/blog/trade-show-banners-decals-ireland',
              src: '/images/banners/fabric-banner-stands/fabric-banner-stand-ireland-stretch-fabric-display.jpg',
              title: 'Trade Show Banners & Decals Ireland',
            },
          ].map(({ href, src, title: relatedTitle }) => (
            <Link
              key={href}
              href={href}
              className="group flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors"
            >
              <div className="relative w-16 h-14 flex-shrink-0 rounded-lg overflow-hidden bg-slate-100">
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
