import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/curved-banner-stands-ireland-sizes-buying-guide`;
const HUB_HREF = '/curved-banner-stands-ireland';
const HERO_IMAGE =
  '/images/banners/curved-banner-stands/curved-banner-stand-ireland-curved-stretch-stand.jpg';
const MEDIA_WALL_IMAGE =
  '/images/banners/curved-banner-stands/curved-banner-stand-ireland-curved-media-wall.jpg';
const STRAIGHT_FABRIC_IMAGE =
  '/images/banners/fabric-banner-stands/fabric-banner-stand-ireland-exhibition-media-wall.jpg';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Curved Banner Stands Ireland: Sizes, Kits & Exhibition Buying Guide',
  description:
    'How to buy curved banner stands in Ireland — sizes from 3 m to 5 m, complete kit vs print only, curved vs straight fabric walls, and nationwide delivery from Ashbourne for exhibitions and photo walls.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-10-01',
  dateModified: '2026-10-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I order curved banner stands in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack supplies curved banner stands across Ireland — also called a curved stretch stand, curved media wall or curved exhibition backdrop — with dye-sublimation graphics on a curved aluminium frame. Delivery from Ashbourne, Co. Meath to Dublin, Cork, Galway and nationwide.',
      },
    },
    {
      '@type': 'Question',
      name: 'What curved banner stand sizes are available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standard sizes are 300×230 cm, 400×230 cm and 500×230 cm. Custom sizes can be quoted on request when a standard option does not fit your stand footprint.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I buy a complete kit or print only?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Order a complete set (printed stretch fabric plus curved aluminium frame and carry bag) for a first stand. Choose print only when you already own a matching curved frame and need a campaign or seasonal reprint.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is a curved banner stand different from a straight fabric stand?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A straight fabric banner stand is a flat media wall. A curved stand wraps the print so it reads from the sides as well as head-on — better for aisle traffic, selfie walls and softer stage-side branding.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the minimum order for curved banner stands?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'From one unit. Suitable for a single exhibition stand, photo wall or launch activation as well as multi-stand campaigns.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you deliver curved banner stands to Dublin, Cork and Galway?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. PrintNPack delivers curved banner stands to Dublin, Cork, Galway, Limerick and every Irish county from Ashbourne, Co. Meath. Local buyers can also collect.',
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
      name: 'Curved Banner Stands Ireland Buying Guide',
      item: PAGE_URL,
    },
  ],
};

const sizeRows = [
  {
    size: '300 × 230 cm',
    use: 'Standard exhibition curve — recommended starting size for most Irish booths',
  },
  {
    size: '400 × 230 cm',
    use: 'Wider trade-stand back wall and photo backdrop',
  },
  {
    size: '500 × 230 cm',
    use: 'Large indoor media wall or event branding span',
  },
  {
    size: 'Custom',
    use: 'Other widths quoted from Ashbourne when a standard kit does not fit',
  },
];

export default function CurvedBannerStandsIrelandSizesBuyingGuide() {
  const title = 'Curved Banner Stands Ireland: Sizes, Kits & Exhibition Buying Guide';
  const description =
    'Buy curved banner stands in Ireland with confidence — sizes from 3 m to 5 m, complete kit vs print only, single vs double-sided dye sublimation, MOQ from one unit, and delivery to Dublin, Cork, Galway and nationwide from Ashbourne.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="curved banner stands ireland, curved stretch stand dublin, curved media wall cork, curved exhibition backdrop galway, curved fabric display ireland, curved banner with stand ashbourne, photo wall backdrop ireland, curved tension fabric stand ireland, exhibition curved stand ireland, trade show curved backdrop ireland"
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
          content="Curved banner stands Ireland — curved stretch stand with printed fabric on a frame"
        />
        <meta property="article:published_time" content="2026-10-01" />

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
          <span className="text-slate-900">Curved Banner Stands Ireland</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            Retail Guide
          </span>
          <span className="text-slate-400 text-sm">1 Oct 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Curved Banner Stands Ireland: Sizes, Kits &amp; Exhibition Buying Guide
        </h1>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="relative rounded-2xl overflow-hidden h-48 col-span-2 bg-slate-50">
            <Image
              src={HERO_IMAGE}
              alt="Curved banner stands Ireland — curved stretch stand for Dublin exhibitions"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 66vw, 512px"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={MEDIA_WALL_IMAGE}
                alt="Curved media wall Ireland — stretch fabric backdrop for Cork events"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={STRAIGHT_FABRIC_IMAGE}
                alt="Straight fabric media wall Ireland — compare with curved stands Galway Ashbourne"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            A curved banner stand is the display Irish exhibitors choose when a flat fabric wall feels
            too rigid and a roll-up is too narrow for aisle traffic. Stretch fabric pulls over a
            curved aluminium frame — the same product people search as a curved stretch stand, curved
            banner with stand, curved media wall, curved fabric display or curved exhibition
            backdrop.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            This guide explains how to buy <strong>curved banner stands in Ireland</strong> —
            standard sizes from 3 m to 5 m, complete kit versus print only, single versus
            double-sided print, and how{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              PrintNPack&apos;s curved banner stands
            </Link>{' '}
            ship nationwide from Ashbourne. Pricing is quote-based; we do not invent unit rates here
            — configure size and kit type on the product page for a live quote.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Who buys curved banner stands in Ireland?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Typical buyers include SMEs on the RDS and regional trade-show circuit, agencies building
            selfie and photo walls, hotels and venues staging conferences, retailers launching
            seasonal activations, and brand teams who want a softer silhouette than a straight media
            wall. Dublin offices often start with a 3 m curve for lobby and stand branding; Cork and
            Galway exhibitors step to 4–5 m when the booth faces a busy aisle or needs a full photo
            backdrop.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Search terms vary — curved stretch stand, curved banner with stand, curved media wall,
            curved fabric display, curved exhibition backdrop, curved tension fabric stand or curved
            photo backdrop — but the product is the same: a printed stretch graphic tensioned over a
            curved aluminium frame. Knowing that vocabulary helps when you compare quotes or brief an
            agency that already owns frames from a previous show season.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Curved stands sit beside straight{' '}
            <Link
              href="/blog/fabric-banner-stands-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              fabric banner stands
            </Link>{' '}
            and portable{' '}
            <Link href="/blog/roll-up-banners-ireland-guide" className="text-blue-600 hover:underline">
              roll-up banners
            </Link>
            . Choose curved when you need wrap-around visibility from the sides, a friendlier photo
            wall arc and quick tool-free setup. Outdoor PVC with eyelets remains the better choice for
            wind-exposed sites; curved banner stands are specified here for indoor exhibitions,
            events and photo walls.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Curved banner stand sizes at a glance
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Match width to your stand footprint and viewing distance. Under-sizing leaves empty wall
            behind the counter; oversizing will not fit the allocated booth depth. Heights sit around
            2.3 m so artwork reads clearly for standing visitors.
          </p>

          <div className="overflow-x-auto mb-8 not-prose">
            <table className="min-w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
              <thead className="bg-slate-50 text-left">
                <tr>
                  <th className="px-4 py-3 font-semibold text-slate-900">Size</th>
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
            <strong>300 × 230 cm</strong> is the recommended starting size for most Irish trade
            stands and reception curves. Step to 400–500 cm when the brief is a wider photo wall or
            aisle-facing brand span. Custom widths are quoted on request when a standard option does
            not fit.
          </p>

          <div className="relative rounded-2xl overflow-hidden h-56 mb-8 bg-slate-50 not-prose">
            <Image
              src={MEDIA_WALL_IMAGE}
              alt="Curved media wall Ireland — zipped stretch fabric curved banner for Dublin events"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 720px"
            />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Complete kit vs print only
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Order a <strong>complete set</strong> when you need the printed stretch fabric, curved
            aluminium frame and carry bag together — the usual first purchase for a new exhibition
            programme. Setup needs no tools and typically takes under 10 minutes, so one person can
            build the wall before doors open. The frame packs down for van or courier travel between
            Dublin shows and regional dates without a full display-house crew.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Choose <strong>print only</strong> when you already own a matching curved frame and want
            a seasonal campaign, new logo or bilingual layout. Reusing the hardware keeps later
            orders lighter to ship and cheaper to quote. Confirm your existing frame size before
            ordering a replacement graphic so the stretch fit stays tight — a 300 cm graphic will not
            sit correctly on a 400 cm frame.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            A practical Irish buying pattern is one complete kit for the first show year, then
            print-only refreshes for Christmas, spring campaigns or new product lines. That keeps the
            capital cost in the reusable aluminium structure while artwork stays current.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Single-sided vs double-sided print
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Graphics are dye-sublimation printed on stretch fabric. <strong>Single-sided</strong>{' '}
            suits wall-backed booths and reception corners where only the front faces visitors.{' '}
            <strong>Double-sided</strong> is worth it for island stands, aisle walk-throughs and
            photo walls that people approach from both directions.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Stretch fabric for these stands folds into the carry bag and should not hold creases the
            way PVC does — useful when the same kit tours Dublin one week and Cork or Galway the
            next.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Curved vs straight fabric vs roll-up
          </h2>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
            <li>
              <strong>Curved banner stand</strong> — wraps brand around the stand for side-angle
              visibility; ideal for photo walls and aisle-facing exhibition curves
            </li>
            <li>
              <Link
                href="/blog/fabric-banner-stands-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                Straight fabric banner stand
              </Link>{' '}
              — flat media wall from 2.5 m to 6 m; best when you need a long straight back wall
            </li>
            <li>
              <Link href="/blog/roll-up-banners-ireland-guide" className="text-blue-600 hover:underline">
                Roll-up banners
              </Link>{' '}
              — fastest single-panel portable display; narrower face than a fabric wall
            </li>
            <li>
              <Link href="/blog/trade-show-banners-decals-ireland" className="text-blue-600 hover:underline">
                Trade show banners &amp; decals
              </Link>{' '}
              — broader event toolkit when you also need floor graphics or window vinyl
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-8">
            Many Irish SMEs tour with one curved media wall for the hero backdrop plus one or two
            roll-ups for side panels — that mix covers a standard booth without shipping rigid
            boards.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-8 not-prose">
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={HERO_IMAGE}
                alt="Curved stretch stand Ireland — exhibition curved banner Ashbourne print"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={STRAIGHT_FABRIC_IMAGE}
                alt="Fabric banner stand Ireland — straight media wall for comparison Cork Galway"
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
            Supply high-resolution artwork sized to the final graphic dimensions. Keep critical logos
            and text away from the extreme edges where the fabric wraps the curved frame — side
            panels are more visible on a curve than on a flat wall, so stretch important messaging
            across the arc rather than parking everything dead-centre. Soft gradients and full-bleed
            photography work well on dye sublimation; thin hairline rules near seams are easier to
            lose.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            PrintNPack issues a proof before production — treat that as the last chance to catch a
            wrong size or missing phone number. Rush changes after print starts are not assumed in
            the standard 3–5 day window.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            MOQ, lead time and how quoting works
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Curved banner stands start from <strong>one unit</strong>. Typical production is{' '}
            <strong>3–5 business days after proof</strong>. Always request a quote for your exact
            size, single or double-sided print, and kit versus print-only — we do not list
            speculative euro rates in this guide because those choices change the quote.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Use the product page on{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              curved banner stands Ireland
            </Link>{' '}
            or contact PrintNPack for custom spans. Build show-date buffer into artwork approval so
            the 3–5 day production window is not cut short — especially ahead of busy Dublin autumn
            exhibition weeks when courier slots fill early.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Delivery across Ireland from Ashbourne
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            PrintNPack is based in Ashbourne, Co. Meath — convenient for Dublin and Meath collections,
            with nationwide dispatch for Cork, Galway, Limerick and every other county. Complete kits
            ship in a carry bag; print-only orders travel lighter for reorders.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            UK or Europe shipping is only confirmed case-by-case on request; this guide focuses on
            Irish delivery, which is the core service for curved banner stands.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How to order curved banner stands in Ireland
          </h2>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-8">
            <li>Measure booth width and decide 300–500 cm (or note a custom size)</li>
            <li>Choose complete kit or print only based on whether you already own a curved frame</li>
            <li>Pick single-sided or double-sided dye sublimation for your stand layout</li>
            <li>Supply high-resolution artwork sized to the final graphic dimensions</li>
            <li>Approve the proof, then take nationwide delivery or collect from Ashbourne</li>
          </ol>

          <div className="bg-slate-900 rounded-xl p-6 mb-8 text-white not-prose">
            <p className="font-semibold mb-1">Ready to order curved banner stands?</p>
            <p className="text-slate-400 text-sm mb-4">
              Sizes from 3 m to 5 m, complete kits or print only, single or double-sided print —
              quoted and delivered across Ireland.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={HUB_HREF}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Shop Curved Banner Stands Ireland →
              </Link>
              <Link
                href="/fabric-banner-stands-ireland"
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Compare Straight Fabric Stands
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
                q: 'Where can I order curved banner stands in Ireland?',
                a: 'PrintNPack supplies curved banner stands — also called a curved stretch stand or curved media wall — with delivery from Ashbourne to Dublin, Cork, Galway and nationwide.',
              },
              {
                q: 'What curved banner stand sizes are available?',
                a: 'Standard sizes are 300×230 cm, 400×230 cm and 500×230 cm, with custom sizes quoted on request.',
              },
              {
                q: 'Should I buy a complete kit or print only?',
                a: 'Buy a complete set for a first stand. Choose print only when you already own a matching curved aluminium frame and need a campaign reprint.',
              },
              {
                q: 'How is a curved stand different from a straight fabric stand?',
                a: 'A straight fabric stand is a flat wall. A curved stand wraps the print so it is visible from the sides as well as head-on — better for aisle traffic and photo walls.',
              },
              {
                q: 'What is the minimum order and lead time?',
                a: 'From one unit. Typical production is 3–5 business days after proof approval — confirm the live schedule on your quote before a fixed show date.',
              },
              {
                q: 'Do you deliver curved banner stands to Dublin, Cork and Galway?',
                a: 'Yes. We deliver to Dublin, Cork, Galway and all Irish counties, with collection available from Ashbourne, Co. Meath.',
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
              src: '/images/banners/fabric-banner-stands/fabric-banner-stand-ireland-exhibition-media-wall.jpg',
              title: 'Fabric Banner Stands Ireland: Sizes, Kits & Trade Show Buying Guide',
            },
            {
              href: '/blog/custom-printed-flags-ireland-sizes-buying-guide',
              src: '/images/products/custom-printed-flags/custom-printed-flags-ireland-gaa-club.jpg',
              title: 'Custom Printed Flags Ireland: Sizes, Materials & Club Buying Guide',
            },
            {
              href: '/blog/roll-up-banners-ireland-guide',
              src: '/images/products/wide-format.png',
              title: 'Roll-Up Banners Ireland Guide',
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
