import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/freestanding-led-frames-ireland-sizes-buying-guide`;
const HUB_HREF = '/freestanding-led-frames-ireland';
const HERO_IMAGE = '/images/banners/led-frames/led-frame-80x200.jpg';
const WIDE_IMAGE = '/images/banners/led-frames/led-frame-150x200.jpg';
const SQUARE_IMAGE = '/images/banners/led-frames/led-frame-200x200.jpg';
const DOUBLE_IMAGE = '/images/banners/led-frames/led-frame-double-sided.jpg';
const WHEELS_IMAGE = '/images/banners/led-frames/led-frame-wheels.jpg';
const BLACK_IMAGE = '/images/banners/led-frames/led-frame-black.jpg';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Freestanding LED Frames Ireland: 80–200 cm Sizes & Buying Guide',
  description:
    'How to buy freestanding LED frames in Ireland — 80×200, 150×200 and 200×200 cm sizes, 120 mm vs 160 mm depth, aluminium/black/white, flat feet or wheels, from €1,098.54 ex VAT with Ireland delivery included from Ashbourne.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-10-22',
  dateModified: '2026-10-22',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I order freestanding LED frames in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack supplies freestanding double-sided LED frames from Ashbourne, Co. Meath with Ireland delivery included (ex VAT) to Dublin, Cork, Galway and every Irish county. The frame is supplied unprinted as a construction kit.',
      },
    },
    {
      '@type': 'Question',
      name: 'What freestanding LED frame sizes are available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Three sizes: 80 × 200 cm, 150 × 200 cm and 200 × 200 cm. Each size is available in 120 mm or 160 mm depth, both double-sided.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is a graphic included with the LED frame?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. PrintNPack supplies the freestanding LED frame unprinted. A graphic is not included — product photos show example prints only. Order the frame kit, then fit your own lightbox graphic.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much do freestanding LED frames cost in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Freestanding LED frames start from €1,098.54 ex VAT for the 80 × 200 cm aluminium frame with 120 mm depth and flat feet, with Ireland delivery included. Size, depth, colour and base change the live quote on the product page.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I choose flat feet or wheels?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Flat feet suit reception desks, retail floors and fixed aisle positions. Wheels suit touring exhibitions and venues that move the lightbox between halls. Both bases are available on every size and depth.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you deliver LED frames to Dublin, Cork and Galway?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Ireland delivery is included in the quoted price (ex VAT). PrintNPack dispatches from Ashbourne, Co. Meath to Dublin, Cork, Galway, Limerick and nationwide.',
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
      name: 'Freestanding LED Frames Ireland Buying Guide',
      item: PAGE_URL,
    },
  ],
};

const sizeRows = [
  {
    size: '80 × 200 cm',
    use: 'Narrow aisle end, reception desk or doorway lightbox where floor width is tight',
  },
  {
    size: '150 × 200 cm',
    use: 'Most Irish retail and exhibition aisle positions — wider brand face without a full wall',
  },
  {
    size: '200 × 200 cm',
    use: 'Square backwall lightbox for launches, photo spots and double-sided hall messaging',
  },
];

const optionRows = [
  { option: 'Depth', choices: '120 mm or 160 mm — both double-sided edge-lit' },
  { option: 'Frame colour', choices: 'Aluminium, black or white' },
  { option: 'Base', choices: 'Flat feet or wheels' },
  { option: 'Light', choices: 'Bright white 6500K edge light with a 2 m black cable' },
  { option: 'Print', choices: 'Unprinted kit — a graphic is not included' },
  { option: 'Minimum order', choices: '1 frame' },
];

export default function FreestandingLedFramesIrelandSizesBuyingGuide() {
  const title = 'Freestanding LED Frames Ireland: 80–200 cm Sizes & Buying Guide';
  const description =
    'Buy freestanding LED frames in Ireland with confidence — 80×200, 150×200 and 200×200 cm sizes, 120 mm vs 160 mm depth, aluminium/black/white, flat feet or wheels, from €1,098.54 ex VAT with Ireland delivery included from Ashbourne.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="freestanding LED frames ireland, LED lightbox frame dublin, double sided LED frame ireland, illuminated display frame cork, edge lit frame galway, exhibition LED frame ashbourne, freestanding lightbox ireland, LED display frame ireland, trade show LED frame ireland, retail lightbox ireland"
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
          content="Freestanding LED frames Ireland — 80×200 cm aluminium lightbox for Dublin exhibitions"
        />
        <meta property="article:published_time" content="2026-10-22" />

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
          <span className="text-slate-900">Freestanding LED Frames Ireland</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            Retail Guide
          </span>
          <span className="text-slate-400 text-sm">22 Oct 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Freestanding LED Frames Ireland: 80–200 cm Sizes &amp; Buying Guide
        </h1>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="relative rounded-2xl overflow-hidden h-48 col-span-2 bg-slate-50">
            <Image
              src={HERO_IMAGE}
              alt="Freestanding LED frames Ireland — 80×200 cm aluminium lightbox for Dublin exhibitions"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 66vw, 512px"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={WIDE_IMAGE}
                alt="LED lightbox frame Cork Ireland — 150×200 cm freestanding display"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={SQUARE_IMAGE}
                alt="Double-sided LED frame Galway Ireland — 200×200 cm square lightbox"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            A freestanding LED frame is a rigid double-sided lightbox that stands on its own — brighter
            and more permanent than a folding fabric wall, and wider than a single roll-up. The buying
            decision in Ireland is which <strong>width</strong> fits your aisle, whether you need{' '}
            <strong>120 mm or 160 mm depth</strong>, and whether the frame should sit on{' '}
            <strong>flat feet</strong> or <strong>wheels</strong>.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            This guide covers <strong>freestanding LED frames in Ireland</strong> from PrintNPack —
            sizes, depth, colour, base options and when to choose a lightbox over a{' '}
            <Link
              href="/blog/pop-up-display-stands-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              pop-up display stand
            </Link>
            .{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              Freestanding LED frames Ireland
            </Link>{' '}
            quote from <strong>€1,098.54 ex VAT</strong> with Ireland delivery included from Ashbourne.
            Configure size and options on the product page for a live price — we only state the
            published from-price here.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Who buys freestanding LED frames in Ireland?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Typical buyers are retailers who want an illuminated end-of-aisle face, agencies staging
            Dublin product launches, hotels and venues that need a double-sided reception lightbox,
            and SMEs on the Cork and Galway exhibition circuit who prefer a rigid lit panel over a
            fabric pop-up. Ashbourne-based supply keeps Irish lead times practical when the hall date
            is fixed and the graphic is still being signed off.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            LED frames sit between portable{' '}
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
            . Choose a freestanding LED frame when you need edge-lit brightness on both faces and a
            rigid aluminium body. Choose a pop-up when you need a folding fabric wall that packs for
            touring; choose a roll-up for a single narrow portable panel.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Freestanding LED frame sizes at a glance
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Match width to your floor plan and viewing distance. All three sizes are 200 cm tall;
            width steps from a slim 80 cm to a square 200 cm face.
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
            <strong>80 × 200 cm</strong> suits tight Dublin retail and reception corners.{' '}
            <strong>150 × 200 cm</strong> covers most Irish aisle and booth allocations without
            claiming a full backwall. Step to <strong>200 × 200 cm</strong> when the brief is a
            square illuminated brand face for launches or photo moments.
          </p>

          <div className="relative rounded-2xl overflow-hidden h-56 mb-8 bg-slate-50 not-prose">
            <Image
              src={DOUBLE_IMAGE}
              alt="Double-sided freestanding LED frame Ireland — graphic on each face for exhibition aisles"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 720px"
            />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Depth, colour and base options
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Every size offers <strong>120 mm or 160 mm depth</strong> — both are double-sided and
            edge-lit. Frame colour is <strong>aluminium, black or white</strong>. Bases are{' '}
            <strong>flat feet</strong> for fixed positions or <strong>wheels</strong> when the unit
            must move between halls.
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
            The light is bright white <strong>6500K</strong> with a <strong>2 m black cable</strong>.
            Product photography on the shop page shows example prints — the frame itself ships{' '}
            <strong>unprinted</strong>. Plan your lightbox graphic separately and size it to the
            chosen frame face before the show date.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-8 not-prose">
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={WHEELS_IMAGE}
                alt="Wheeled freestanding LED frame Ireland — mobile lightbox base for trade shows"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={BLACK_IMAGE}
                alt="Black freestanding LED frame Ireland — edge-lit display for Cork retail"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            LED frame vs pop-up wall vs fabric stand
          </h2>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
            <li>
              <strong>Freestanding LED frame</strong> — rigid double-sided lightbox, unprinted kit,
              80–200 cm widths, flat feet or wheels, Ireland delivery included
            </li>
            <li>
              <Link
                href="/blog/pop-up-display-stands-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                Pop-up display stands
              </Link>{' '}
              — folding frame with printed fabric, optional LED on backlit cloth, packs for touring
            </li>
            <li>
              <Link
                href="/blog/fabric-banner-stands-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                Fabric banner stands
              </Link>{' '}
              — stretch fabric on a straight aluminium tension frame (wider spans, no edge-lit box)
            </li>
            <li>
              <Link href="/blog/roll-up-banners-ireland-guide" className="text-blue-600 hover:underline">
                Roll-up banners
              </Link>{' '}
              — fastest single-panel portable display; narrower and unlit compared with an LED frame
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-8">
            Many Irish SMEs pair one freestanding LED frame at the aisle with two roll-ups for side
            messaging — that mix covers a standard booth without shipping a full fabric wall. For
            larger curved photo walls, see the{' '}
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
            Freestanding LED frames start from <strong>€1,098.54 ex VAT</strong> for the{' '}
            <strong>80 × 200 cm</strong> aluminium frame with <strong>120 mm</strong> depth and{' '}
            <strong>flat feet</strong>, with Ireland delivery included. Wider sizes, 160 mm depth,
            black or white frames, and wheeled bases change the quote — use the live configurator
            rather than guessing.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Minimum order is <strong>one frame</strong>. Build show-date buffer into graphic
            production so courier slots are not cut short ahead of busy Dublin autumn exhibition
            weeks. Remember: the published price covers the unprinted construction kit, not a printed
            graphic.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Delivery across Ireland from Ashbourne
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            PrintNPack is based in Ashbourne, Co. Meath. Quoted Ireland delivery is included (ex VAT)
            to Dublin, Cork, Galway, Limerick and every other county. Local buyers can also arrange
            collection.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            UK or Europe shipping is only confirmed case-by-case on request; this guide focuses on
            Irish delivery, which is the core service for freestanding LED frames.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How to order freestanding LED frames in Ireland
          </h2>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-8">
            <li>Measure aisle or reception width and pick 80 × 200, 150 × 200 or 200 × 200 cm</li>
            <li>Choose 120 mm or 160 mm depth for the double-sided edge-lit body</li>
            <li>Pick aluminium, black or white, then flat feet or wheels</li>
            <li>Plan a separate lightbox graphic sized to the chosen face (not included with the kit)</li>
            <li>Approve the quote and take nationwide Ireland delivery or collect from Ashbourne</li>
          </ol>

          <div className="bg-slate-900 rounded-xl p-6 mb-8 text-white not-prose">
            <p className="font-semibold mb-1">Ready to order freestanding LED frames?</p>
            <p className="text-slate-400 text-sm mb-4">
              80–200 cm sizes, 120 mm or 160 mm depth, aluminium/black/white, flat feet or wheels —
              from €1,098.54 ex VAT with Ireland delivery included.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={HUB_HREF}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Shop Freestanding LED Frames Ireland →
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
                q: 'Where can I order freestanding LED frames in Ireland?',
                a: 'PrintNPack supplies unprinted freestanding LED frames with Ireland delivery included from Ashbourne to Dublin, Cork, Galway and nationwide.',
              },
              {
                q: 'What LED frame sizes are available?',
                a: '80 × 200 cm, 150 × 200 cm and 200 × 200 cm, each in 120 mm or 160 mm depth, both double-sided.',
              },
              {
                q: 'Is a graphic included?',
                a: 'No. The frame is supplied unprinted as a construction kit. Product photos show example prints only.',
              },
              {
                q: 'How much do freestanding LED frames cost?',
                a: 'From €1,098.54 ex VAT for the 80 × 200 cm aluminium frame with 120 mm depth and flat feet, Ireland delivery included. Other options are quote-based on the product page.',
              },
              {
                q: 'Do you deliver to Dublin, Cork and Galway?',
                a: 'Yes. Ireland delivery is included in the quoted price (ex VAT), with collection available from Ashbourne, Co. Meath.',
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
            {
              href: '/blog/curved-banner-stands-ireland-sizes-buying-guide',
              src: '/images/banners/curved-banner-stands/curved-banner-stand-ireland-curved-media-wall.jpg',
              title: 'Curved Banner Stands Ireland: Sizes & Exhibition Buying Guide',
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
