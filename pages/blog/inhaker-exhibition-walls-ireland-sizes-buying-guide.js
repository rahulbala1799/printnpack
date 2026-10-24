import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/inhaker-exhibition-walls-ireland-sizes-buying-guide`;
const HUB_HREF = '/inhaker-stands-ireland';
const HERO_IMAGE = '/images/banners/inhaker/inhaker-hero.jpg';
const SIZE_195 = '/images/banners/inhaker/inhaker-195.jpg';
const SIZE_300 = '/images/banners/inhaker/inhaker-300.jpg';
const REBOARD = '/images/banners/inhaker/inhaker-reboard.jpg';
const FOREX = '/images/banners/inhaker/inhaker-forex.jpg';
const BOTH = '/images/banners/inhaker/inhaker-both.jpg';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Exhibition Walls Ireland: Inhaker Panel Sizes 88×195–300 cm & Buying Guide',
  description:
    'How to buy printed inhaker exhibition walls in Ireland — 88×195, 88×247.5 and 88×300 cm panels, 10 mm Re-board vs Forex, front or both sides, from €97.44 ex VAT with Ireland delivery included from Ashbourne.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-10-24',
  dateModified: '2026-10-24',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I order inhaker exhibition walls in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack supplies printed inhaker exhibition wall panels from Ashbourne, Co. Meath with Ireland delivery included (ex VAT) to Dublin, Cork, Galway and every Irish county. Build the wall on the product page and request a quote.',
      },
    },
    {
      '@type': 'Question',
      name: 'What inhaker exhibition wall sizes are available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Three visible panel sizes: 88 × 195 cm, 88 × 247.5 cm and 88 × 300 cm. Every panel is cut at 95.8 cm wide so the edges hook into upright posts.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are posts and foot plates included with an inhaker panel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. PrintNPack prices the printed panel only. Upright posts, foot plates and wheels are not included. Panels hook into hardware you already have or source separately.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much do inhaker exhibition walls cost in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Printed inhaker panels start from €97.44 ex VAT for one 88 × 195 cm 10 mm Re-board panel printed on the front only, with one Ireland delivery of €39.95 included in that line total. Size, material, print sides and quantity change the live quote on the product page.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I choose Re-board or Forex?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '10 mm Re-board is a light honeycomb board that is easier to carry between Irish trade shows. 10 mm Forex is a solid foam board — heavier and stiffer when the wall must hold a flatter face for longer stand periods.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you deliver exhibition wall panels to Dublin, Cork and Galway?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Ireland delivery is included once per order line in the quoted price (ex VAT). PrintNPack dispatches from Ashbourne, Co. Meath to Dublin, Cork, Galway, Limerick and nationwide.',
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
      name: 'Exhibition Walls Ireland Buying Guide',
      item: PAGE_URL,
    },
  ],
};

const sizeRows = [
  {
    size: '88 × 195 cm',
    use: 'Standard booth backwall height for most Irish trade-show shells and retail runs',
  },
  {
    size: '88 × 247.5 cm',
    use: 'Taller face when the venue allows a higher brand stack above desk height',
  },
  {
    size: '88 × 300 cm',
    use: 'Full-height panel for halls and launches that need a dominant vertical wall',
  },
];

const optionRows = [
  { option: 'Visible width', choices: '88 cm on every size (cut width 95.8 cm for the hook-in edges)' },
  { option: 'Material', choices: '10 mm Re-board or 10 mm Forex' },
  { option: 'Print', choices: 'Front only (4/0) or both sides (4/4)' },
  { option: 'Quantity', choices: '1 to 10 panels in one order line' },
  { option: 'Hardware', choices: 'Posts and foot plates are not included' },
  { option: 'Minimum order', choices: '1 printed panel' },
];

export default function InhakerExhibitionWallsIrelandSizesBuyingGuide() {
  const title = 'Exhibition Walls Ireland: Inhaker Panel Sizes 88×195–300 cm & Buying Guide';
  const description =
    'Buy printed inhaker exhibition walls in Ireland with confidence — 88×195, 88×247.5 and 88×300 cm panels, 10 mm Re-board vs Forex, front or both sides, from €97.44 ex VAT with Ireland delivery included from Ashbourne.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="exhibition walls ireland, inhaker stand ireland, inhaker panel dublin, trade show wall cork, printed exhibition panel galway, re-board display ireland, forex exhibition panel ashbourne, modular booth wall ireland, hook-in display panel ireland, printed display wall ireland"
        />
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
          content="Exhibition walls Ireland — printed inhaker panels hooked into a trade show wall for Dublin"
        />
        <meta property="article:published_time" content="2026-10-24" />

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
          <span className="text-slate-900">Exhibition Walls Ireland</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            Retail Guide
          </span>
          <span className="text-slate-400 text-sm">24 Oct 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Exhibition Walls Ireland: Inhaker Panel Sizes 88×195–300 cm &amp; Buying Guide
        </h1>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="relative rounded-2xl overflow-hidden h-48 col-span-2 bg-slate-50">
            <Image
              src={HERO_IMAGE}
              alt="Exhibition walls Ireland — printed inhaker panels hooked into a trade show wall for Dublin"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 66vw, 512px"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={SIZE_195}
                alt="Inhaker panel Cork Ireland — 88×195 cm printed exhibition wall"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={SIZE_300}
                alt="Inhaker panel Galway Ireland — 88×300 cm full-height exhibition wall"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            An inhaker exhibition wall is a rigid printed panel that hooks between upright posts —
            modular enough to run as a short brand face or a longer booth wall, and reprintable when
            the campaign changes. The buying decision in Ireland is which <strong>height</strong> fits
            the venue, whether you need <strong>10 mm Re-board or Forex</strong>, and whether the
            graphic should print on the <strong>front only or both sides</strong>.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            This guide covers <strong>printed exhibition walls in Ireland</strong> from PrintNPack —
            panel sizes, materials, print options and when to choose an inhaker over a{' '}
            <Link
              href="/blog/pop-up-display-stands-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              pop-up display stand
            </Link>{' '}
            or a{' '}
            <Link
              href="/blog/freestanding-led-frames-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              freestanding LED frame
            </Link>
            .{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              Exhibition walls Ireland
            </Link>{' '}
            quote from <strong>€97.44 ex VAT</strong> for one 88 × 195 cm Re-board panel printed on
            the front, with Ireland delivery included from Ashbourne. Configure size and options on
            the product page for a live price — we only state the published from-price here.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Who buys inhaker exhibition walls in Ireland?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Typical buyers are agencies building Dublin product-launch walls, SMEs on the Cork and
            Galway exhibition circuit who already own post-and-foot hardware, retailers who need a
            rigid aisle run without a folding fabric frame, and venues that swap graphics between
            events. Ashbourne-based supply keeps Irish lead times practical when the hall date is
            fixed and artwork is still being signed off.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Inhaker panels sit between portable{' '}
            <Link href="/blog/roll-up-banners-ireland-guide" className="text-blue-600 hover:underline">
              roll-up banners
            </Link>{' '}
            and stretch{' '}
            <Link
              href="/blog/fabric-banner-stands-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              fabric banner stands
            </Link>
            . Choose an inhaker when you need a rigid printed face that hooks into posts and can be
            extended panel by panel. Choose a pop-up when the whole wall must fold into a bag; choose
            an LED frame when you need an illuminated freestanding lightbox rather than a hook-in
            board.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Inhaker panel sizes at a glance
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Every panel shows an <strong>88 cm</strong> visible width. The board is cut at{' '}
            <strong>95.8 cm</strong> wide so the edges hook into the posts. Height is the main choice
            — 195 cm, 247.5 cm or 300 cm.
          </p>

          <div className="overflow-x-auto mb-8 not-prose">
            <table className="min-w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
              <thead className="bg-slate-50 text-left">
                <tr>
                  <th className="px-4 py-3 font-semibold text-slate-900">Visible size</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">Best for</th>
                </tr>
              </thead>
              <tbody>
                {sizeRows.map((row) => (
                  <tr key={row.size} className="border-t border-slate-200">
                    <td className="px-4 py-3 text-slate-900 font-medium whitespace-nowrap">
                      {row.size}
                    </td>
                    <td className="px-4 py-3 text-slate-700">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-slate-700 leading-relaxed mb-8">
            <strong>88 × 195 cm</strong> covers most Irish shell-scheme and retail runs.{' '}
            <strong>88 × 247.5 cm</strong> adds height when the venue allows a taller brand stack.
            Step to <strong>88 × 300 cm</strong> for a full-height launch wall. Add panels side by
            side — order <strong>1 to 10</strong> in one line — to build a longer display wall without
            switching to a stretch fabric media wall.
          </p>

          <div className="relative rounded-2xl overflow-hidden h-56 mb-8 bg-slate-50 not-prose">
            <Image
              src={BOTH}
              alt="Double-sided inhaker exhibition wall Ireland — printed panel front and back for aisles"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 720px"
            />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Re-board vs Forex, front vs both sides
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Every size is offered in <strong>10 mm Re-board</strong> or <strong>10 mm Forex</strong>.
            Re-board is a light honeycomb board that is easier to carry to the next show. Forex is a
            solid foam board — heavier and stiffer when the wall must stay flatter for longer stand
            periods. Print is <strong>front only</strong> (full colour on the face, plain back) or{' '}
            <strong>both sides</strong> when the aisle reads the wall from behind.
          </p>

          <div className="overflow-x-auto mb-8 not-prose">
            <table className="min-w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
              <thead className="bg-slate-50 text-left">
                <tr>
                  <th className="px-4 py-3 font-semibold text-slate-900">Option</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">Choices</th>
                </tr>
              </thead>
              <tbody>
                {optionRows.map((row) => (
                  <tr key={row.option} className="border-t border-slate-200">
                    <td className="px-4 py-3 text-slate-900 font-medium whitespace-nowrap">
                      {row.option}
                    </td>
                    <td className="px-4 py-3 text-slate-700">{row.choices}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-slate-700 leading-relaxed mb-8">
            You supply the artwork. Photographs on the shop page are example prints only — including
            sample brand graphics — and are not the print you receive. Plan safe margins inside the
            visible 88 cm face so logo type does not sit on the hooked edges.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-8 not-prose">
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={REBOARD}
                alt="10 mm Re-board inhaker panel Ireland — light honeycomb exhibition board"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={FOREX}
                alt="10 mm Forex inhaker panel Ireland — rigid foam exhibition board for Cork shows"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Inhaker vs pop-up vs LED frame vs fabric stand
          </h2>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
            <li>
              <strong>Inhaker exhibition wall</strong> — rigid printed panel, 88 cm visible width,
              three heights, Re-board or Forex, posts not included, Ireland delivery included
            </li>
            <li>
              <Link
                href="/blog/pop-up-display-stands-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                Pop-up display stands
              </Link>{' '}
              — folding frame with printed fabric, packs for touring, optional LED on backlit cloth
            </li>
            <li>
              <Link
                href="/blog/freestanding-led-frames-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                Freestanding LED frames
              </Link>{' '}
              — unprinted illuminated kit with flat feet or wheels; graphic ordered separately
            </li>
            <li>
              <Link
                href="/blog/fabric-banner-stands-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                Fabric banner stands
              </Link>{' '}
              — stretch fabric on a straight aluminium tension frame (wider spans, no hook-in board)
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-8">
            Many Irish SMEs pair three or five inhaker panels for the backwall with two{' '}
            <Link href="/blog/roll-up-banners-ireland-guide" className="text-blue-600 hover:underline">
              roll-up banners
            </Link>{' '}
            for side messaging — that mix covers a standard booth without shipping a full fabric
            media wall. For curved photo walls, see the{' '}
            <Link
              href="/blog/curved-banner-stands-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              curved banner stands Ireland
            </Link>{' '}
            guide.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Price, MOQ and how quoting works
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Printed inhaker panels start from <strong>€97.44 ex VAT</strong> for one{' '}
            <strong>88 × 195 cm</strong> <strong>10 mm Re-board</strong> panel printed on the{' '}
            <strong>front only</strong>, with one Ireland delivery of <strong>€39.95</strong> included
            in that line total. Taller sizes, Forex, both-sides print and extra panels change the
            quote — use the live configurator rather than multiplying a unit guess.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Minimum order is <strong>one panel</strong>; you can order up to <strong>ten</strong> in
            one line. Delivery is counted once per order line, not once per panel. Prices are ex VAT —
            an Irish VAT invoice adds 23% VAT. Posts and foot plates are never in the panel price.
            Build show-date buffer into artwork approval so courier slots are not cut short ahead of
            busy Dublin autumn exhibition weeks.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Delivery across Ireland from Ashbourne
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            PrintNPack is based in Ashbourne, Co. Meath. Quoted Ireland delivery is included once per
            order line (ex VAT) to Dublin, Cork, Galway, Limerick and every other county. Local buyers
            can also arrange collection.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            UK or Europe shipping is only confirmed case-by-case on request; this guide focuses on
            Irish delivery, which is the core service for printed inhaker exhibition walls.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How to order exhibition walls in Ireland
          </h2>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-8">
            <li>Confirm you have (or can source) upright posts and foot plates — they are not included</li>
            <li>Pick visible height: 88 × 195, 88 × 247.5 or 88 × 300 cm</li>
            <li>Choose 10 mm Re-board or 10 mm Forex, then front only or both sides</li>
            <li>Set quantity from 1 to 10 panels for the wall run you need</li>
            <li>Upload artwork sized to the visible face, approve the quote, and take Ireland delivery or collect from Ashbourne</li>
          </ol>

          <div className="bg-slate-900 rounded-xl p-6 mb-8 text-white not-prose">
            <p className="font-semibold mb-1">Ready to order exhibition walls?</p>
            <p className="text-slate-400 text-sm mb-4">
              88 × 195–300 cm inhaker panels, Re-board or Forex, front or both sides — from €97.44
              ex VAT with Ireland delivery included.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={HUB_HREF}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Shop Exhibition Walls Ireland →
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
                q: 'Where can I order inhaker exhibition walls in Ireland?',
                a: 'PrintNPack supplies printed inhaker panels with Ireland delivery included from Ashbourne to Dublin, Cork, Galway and nationwide. Build the wall on the product page and request a quote.',
              },
              {
                q: 'What exhibition wall sizes are available?',
                a: '88 × 195 cm, 88 × 247.5 cm and 88 × 300 cm visible sizes. Panels are cut at 95.8 cm wide to hook into posts.',
              },
              {
                q: 'Are posts included?',
                a: 'No. The price is the printed panel only. Upright posts, foot plates and wheels are not included.',
              },
              {
                q: 'How much do inhaker panels cost?',
                a: 'From €97.44 ex VAT for one 88 × 195 cm 10 mm Re-board panel printed on the front only, with €39.95 Ireland delivery included in that line total. Other options are quote-based on the product page.',
              },
              {
                q: 'Do you deliver to Dublin, Cork and Galway?',
                a: 'Yes. Ireland delivery is included once per order line in the quoted price (ex VAT), with collection available from Ashbourne, Co. Meath.',
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
              href: '/blog/freestanding-led-frames-ireland-sizes-buying-guide',
              src: '/images/banners/led-frames/led-frame-80x200.jpg',
              title: 'Freestanding LED Frames Ireland: 80–200 cm Sizes & Buying Guide',
            },
            {
              href: '/blog/pop-up-display-stands-ireland-sizes-buying-guide',
              src: '/images/banners/popup-walls/popup-wall-straight.jpg',
              title: 'Pop-up Display Stands Ireland: Straight vs Curved Sizes & Buying Guide',
            },
            {
              href: '/blog/fabric-banner-stands-ireland-sizes-buying-guide',
              src: '/images/banners/fabric-banner-stands/fabric-banner-stand-ireland-exhibition-media-wall.jpg',
              title: 'Fabric Banner Stands Ireland: Sizes, Kits & Trade Show Buying Guide',
            },
            {
              href: '/blog/roll-up-banners-ireland-guide',
              src: '/images/products/wide-format.png',
              title: 'Roll-Up Banners Ireland Guide',
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
