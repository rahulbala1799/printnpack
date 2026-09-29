import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/fabric-banner-stands-ireland-sizes-buying-guide`;
const HUB_HREF = '/fabric-banner-stands-ireland';
const HERO_IMAGE =
  '/images/banners/fabric-banner-stands/fabric-banner-stand-ireland-exhibition-media-wall.jpg';
const FRAME_IMAGE =
  '/images/banners/fabric-banner-stands/fabric-banner-stand-ireland-banner-with-frame.jpg';
const CONFERENCE_IMAGE =
  '/images/banners/fabric-banner-stands/fabric-banner-stand-ireland-conference-backdrop.jpg';
const STRETCH_IMAGE =
  '/images/banners/fabric-banner-stands/fabric-banner-stand-ireland-stretch-fabric-display.jpg';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Fabric Banner Stands Ireland: Sizes, Kits & Trade Show Buying Guide',
  description:
    'How to buy fabric banner stands in Ireland — sizes from 2.5 m to 6 m, complete kit vs graphic only, single vs double-sided print, and nationwide delivery from Ashbourne for exhibitions and retail.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-09-29',
  dateModified: '2026-09-29',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I order fabric banner stands in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack supplies fabric banner stands across Ireland — also called a banner with frame, stretch fabric display or media wall — with dye-sublimation graphics on a reusable aluminium frame. Delivery from Ashbourne, Co. Meath to Dublin, Cork, Galway and nationwide.',
      },
    },
    {
      '@type': 'Question',
      name: 'What fabric banner stand sizes are available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standard sizes are 250×228 cm, 300×230 cm, 400×230 cm, 500×230 cm and 600×230 cm. Custom sizes can be quoted on request when a standard option does not fit your stand footprint.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I buy a complete kit or graphic only?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Order a complete set (printed stretch fabric plus aluminium frame and carry bag) for a first stand. Choose graphic only when you already own a matching frame and need a seasonal or campaign reprint.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the minimum order for fabric banner stands?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'From one unit. Suitable for a single exhibition stand, retail media wall or conference backdrop as well as multi-stand campaigns.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does production take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Typical production is 3–5 business days after artwork proof approval. Confirm the live schedule on your quote before a fixed show date.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you deliver fabric banner stands to Dublin, Cork and Galway?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. PrintNPack delivers fabric banner stands to Dublin, Cork, Galway, Limerick and every Irish county from Ashbourne, Co. Meath. Local buyers can also collect.',
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
      name: 'Fabric Banner Stands Ireland Buying Guide',
      item: PAGE_URL,
    },
  ],
};

const sizeRows = [
  {
    size: '250 × 228 cm',
    use: 'Compact booths, retail corners and small conference backdrops',
  },
  {
    size: '300 × 230 cm',
    use: 'Most Irish trade stands and reception media walls — high demand',
  },
  {
    size: '400 × 230 cm',
    use: 'Wider exhibition footprints and photo walls',
  },
  {
    size: '500 × 230 cm',
    use: 'Large aisle-facing stands and multi-brand backdrops',
  },
  {
    size: '600 × 230 cm',
    use: 'Maximum standard span for major shows and stage-side branding',
  },
];

export default function FabricBannerStandsIrelandSizesBuyingGuide() {
  const title = 'Fabric Banner Stands Ireland: Sizes, Kits & Trade Show Buying Guide';
  const description =
    'Buy fabric banner stands in Ireland with confidence — sizes from 2.5 m to 6 m, complete kit vs graphic only, single vs double-sided dye sublimation, MOQ from one unit, and delivery to Dublin, Cork, Galway and nationwide from Ashbourne.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="fabric banner stands ireland, banner with frame ireland, stretch fabric display dublin, tension fabric stand cork, media wall ireland, exhibition backdrop galway, fabric banner stand ashbourne, trade show fabric display ireland, pillowcase banner ireland, banner with structure ireland"
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
          content="Fabric banner stands Ireland — exhibition media wall stretch fabric on aluminium frame"
        />
        <meta property="article:published_time" content="2026-09-29" />

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
          <span className="text-slate-900">Fabric Banner Stands Ireland</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            Retail Guide
          </span>
          <span className="text-slate-400 text-sm">29 Sep 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Fabric Banner Stands Ireland: Sizes, Kits &amp; Trade Show Buying Guide
        </h1>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="relative rounded-2xl overflow-hidden h-48 col-span-2 bg-slate-50">
            <Image
              src={HERO_IMAGE}
              alt="Fabric banner stands Ireland — exhibition media wall for Dublin trade shows"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 66vw, 512px"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={FRAME_IMAGE}
                alt="Banner with frame Ireland — fabric banner stand for Cork exhibition branding"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={CONFERENCE_IMAGE}
                alt="Conference backdrop Ireland — fabric media wall Galway Ashbourne delivery"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            A fabric banner stand is the display Irish exhibitors reach for when a roll-up feels too
            narrow and a rigid board wall is too heavy to tour. Stretch fabric pulls over a straight
            aluminium frame — the same product people search as a banner with frame, banner with
            structure, tension fabric display, media wall or pillowcase banner.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            This guide explains how to buy <strong>fabric banner stands in Ireland</strong> —
            standard sizes from 2.5 m to 6 m, complete kit versus graphic only, single versus
            double-sided print, and how{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              PrintNPack&apos;s fabric banner stands
            </Link>{' '}
            ship nationwide from Ashbourne. Pricing is quote-based; we do not invent unit rates here
            — configure size and kit type on the product page for a live quote.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Who buys fabric banner stands in Ireland?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Typical buyers include SMEs on the RDS and regional trade-show circuit, retailers who
            need a reusable reception media wall, hotels and venues staging AGMs, agencies building
            photo walls, and brand teams who refresh graphics seasonally without buying a new frame
            every time. Dublin offices often start with a 3 m stand for lobby branding; Cork and
            Galway exhibitors step up to 4–5 m when the booth faces a busy aisle.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Search terms vary — banner with frame, banner with structure, stretch fabric display,
            tension fabric stand, media wall, fabric backdrop, exhibition backdrop or pillowcase
            banner — but the product is the same: a printed stretch graphic tensioned over a
            straight aluminium frame. Knowing that vocabulary helps when you compare quotes or brief
            an agency that already owns frames from a previous show season.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Fabric stands sit between portable{' '}
            <Link href="/blog/roll-up-banners-ireland-guide" className="text-blue-600 hover:underline">
              roll-up banners
            </Link>{' '}
            and large-format PVC or stage graphics covered in our{' '}
            <Link href="/blog/banner-printing-ireland-guide" className="text-blue-600 hover:underline">
              banner printing Ireland
            </Link>{' '}
            guide. Choose fabric when you need a seamless indoor backdrop, quick tool-free setup and
            a frame you can reuse for years. Outdoor PVC with eyelets remains the better choice for
            wind-exposed sites; fabric banner stands are specified here for indoor exhibitions,
            retail and conference use.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Fabric banner stand sizes at a glance
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
            <strong>300 × 230 cm</strong> is the workhorse for most Irish trade stands and reception
            walls. Step to 400–600 cm when the brief is a full photo wall or aisle-facing brand span.
            Custom sizes are quoted on request when a standard option does not fit.
          </p>

          <div className="relative rounded-2xl overflow-hidden h-56 mb-8 bg-slate-50 not-prose">
            <Image
              src={STRETCH_IMAGE}
              alt="Stretch fabric display Ireland — fabric banner stand photo wall for Dublin events"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 720px"
            />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Complete kit vs graphic only
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Order a <strong>complete set</strong> when you need the printed stretch fabric, aluminium
            frame and carry bag together — the usual first purchase for a new exhibition programme.
            Setup needs no tools and typically takes under 15 minutes, so one person can build the
            wall before doors open. The frame packs down for van or courier travel between Dublin
            shows and regional dates without a full display-house crew.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Choose <strong>graphic only</strong> when you already own a matching frame and want a
            seasonal campaign, new logo or bilingual layout. Reusing the hardware keeps later orders
            lighter to ship and cheaper to quote. Confirm your existing frame size before ordering a
            replacement pillowcase graphic so the stretch fit stays tight — a 300 cm graphic will not
            sit correctly on a 400 cm frame.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            A practical Irish buying pattern is one complete kit for the first show year, then
            graphic-only refreshes for Christmas, spring campaigns or new product lines. That keeps
            the capital cost in the reusable aluminium structure while artwork stays current.
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
            If your brief is a curved silhouette rather than a straight span, compare{' '}
            <Link href="/curved-banner-stands-ireland" className="text-blue-600 hover:underline">
              curved banner stands Ireland
            </Link>{' '}
            — same fabric-and-frame idea with a soft curve for softer stage and selfie setups.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-8 not-prose">
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={FRAME_IMAGE}
                alt="Banner with frame Ireland — coffee brand fabric stand for exhibition halls"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={CONFERENCE_IMAGE}
                alt="Fabric media wall Ireland — conference backdrop with structure Ashbourne print"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Fabric banner stand vs roll-up vs Foamex
          </h2>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
            <li>
              <strong>Fabric banner stand</strong> — seamless indoor media wall, reusable frame,
              packs in a carry bag, best for exhibitions and receptions
            </li>
            <li>
              <Link href="/blog/roll-up-banners-ireland-guide" className="text-blue-600 hover:underline">
                Roll-up banners
              </Link>{' '}
              — fastest single-panel portable display; narrower face than a fabric wall
            </li>
            <li>
              <Link href="/blog/foamex-boards-ireland-guide" className="text-blue-600 hover:underline">
                Foamex boards
              </Link>{' '}
              — rigid mounted graphics for walls, windows and fixed retail points
            </li>
            <li>
              <Link href="/blog/trade-show-banners-decals-ireland" className="text-blue-600 hover:underline">
                Trade show banners &amp; decals
              </Link>{' '}
              — broader event toolkit when you also need floor graphics or window vinyl
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-8">
            Many Irish SMEs tour with one fabric media wall plus two roll-ups for side panels — that
            mix covers a standard booth without shipping rigid boards.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Artwork tips before you approve the proof
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Supply high-resolution artwork sized to the final graphic dimensions. Keep critical logos
            and text away from the extreme edges where the fabric wraps the frame. Soft gradients and
            full-bleed photography work well on dye sublimation; thin hairline rules near seams are
            easier to lose. If you need a second language panel or QR code for lead capture, place it
            at standing eye height rather than in the lower skirting zone visitors rarely read.
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
            Fabric banner stands start from <strong>one unit</strong>. Typical production is{' '}
            <strong>3–5 business days after proof</strong>. Always request a quote for your exact
            size, single or double-sided print, and kit versus graphic-only — we do not list
            speculative euro rates in this guide because those choices change the quote.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Use the product page on{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              fabric banner stands Ireland
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
            ship in a carry bag; graphic-only orders travel lighter for reorders.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            UK or Europe shipping is only confirmed case-by-case on request; this guide focuses on
            Irish delivery, which is the core service for fabric banner stands.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How to order fabric banner stands in Ireland
          </h2>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-8">
            <li>Measure booth width and decide 250–600 cm (or note a custom size)</li>
            <li>Choose complete kit or graphic only based on whether you already own a frame</li>
            <li>Pick single-sided or double-sided dye sublimation for your stand layout</li>
            <li>Supply high-resolution artwork sized to the final graphic dimensions</li>
            <li>Approve the proof, then take nationwide delivery or collect from Ashbourne</li>
          </ol>

          <div className="bg-slate-900 rounded-xl p-6 mb-8 text-white not-prose">
            <p className="font-semibold mb-1">Ready to order fabric banner stands?</p>
            <p className="text-slate-400 text-sm mb-4">
              Sizes from 2.5 m to 6 m, complete kits or graphic only, single or double-sided print —
              quoted and delivered across Ireland.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={HUB_HREF}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Shop Fabric Banner Stands Ireland →
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
                q: 'Where can I order fabric banner stands in Ireland?',
                a: 'PrintNPack supplies fabric banner stands — also called a banner with frame or stretch fabric display — with delivery from Ashbourne to Dublin, Cork, Galway and nationwide.',
              },
              {
                q: 'What fabric banner stand sizes are available?',
                a: 'Standard sizes are 250×228 cm, 300×230 cm, 400×230 cm, 500×230 cm and 600×230 cm, with custom sizes quoted on request.',
              },
              {
                q: 'Should I buy a complete kit or graphic only?',
                a: 'Buy a complete set for a first stand. Choose graphic only when you already own a matching aluminium frame and need a campaign reprint.',
              },
              {
                q: 'What is the minimum order and lead time?',
                a: 'From one unit. Typical production is 3–5 business days after proof approval — confirm the live schedule on your quote before a fixed show date.',
              },
              {
                q: 'Do you deliver fabric banner stands to Dublin, Cork and Galway?',
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
              href: '/blog/banner-printing-ireland-guide',
              src: '/images/banners/fabric-banner-stands/fabric-banner-stand-ireland-banner-with-frame.jpg',
              title: 'Banner Printing Ireland: Cost, Materials and Turnaround Guide',
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
