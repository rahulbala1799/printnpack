import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/zipper-walls-ireland-shapes-sizes-buying-guide`;
const HUB_HREF = '/zipper-walls-ireland';
const HERO_IMAGE = '/images/banners/zipper-walls/curved-horizontal-zipper-wall-ireland-technology.jpg';
const ARCH_IMAGE = '/images/banners/zipper-walls/arch-zipper-wall-ireland-oval-front-only.jpg';
const U_IMAGE = '/images/banners/zipper-walls/u-zipper-wall-ireland-botanical.jpg';
const WAVE_IMAGE = '/images/banners/zipper-walls/wave-zipper-wall-ireland-coffee.jpg';
const PILLAR_IMAGE = '/images/banners/zipper-walls/exhibition-pillar-ireland-healthcare.jpg';
const CURVED_VERTICAL_IMAGE =
  '/images/banners/zipper-walls/curved-vertical-zipper-wall-ireland-technology.jpg';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Zipper Walls Ireland: Arch, U, Wave, Curve & Pillar Shapes Sizes Buying Guide',
  description:
    'How to buy printed zipper walls in Ireland — arch, U-shaped, wave, curved vertical, curved horizontal and exhibition pillars, full set vs fabric only, from €491.31 ex VAT with Ireland delivery included from Ashbourne.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-11-16',
  dateModified: '2026-11-16',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I order zipper walls in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack supplies printed zipper walls from Ashbourne, Co. Meath — arch, U-shaped, wave, curved vertical, curved horizontal and exhibition pillars — with Ireland delivery included (ex VAT) to Dublin, Cork, Galway and every Irish county. Configure the shape on the product hub and request a quote.',
      },
    },
    {
      '@type': 'Question',
      name: 'What zipper wall shapes and sizes are available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Six families: square arch 240×240×100 cm or oval arch 270×230×100 cm; U walls 300×228×250 cm or 298×228×149 cm; wave walls 300×230×64 cm or 400×230×126 cm; curved vertical with feet 300×230×81 cm or 400×230×85 cm; curved horizontal 300–600 cm wide × 230 cm tall; exhibition pillars 70×200×50 cm or 80×300×80 cm. Sizes are width × height × depth in centimetres.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the frame included with a zipper wall?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Choose Full set for the printed stretch cloth, the 32 mm aluminium frame and the carry bag. Choose Fabric only if you already own that frame and only need a new print.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much do zipper walls cost in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Zipper walls start from €491.31 ex VAT for a curved horizontal full set printed on the front, with Ireland delivery included per wall. Shape, size, full set vs fabric only, front vs both sides and quantity change the live quote on each product page.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you deliver zipper walls to Dublin, Cork and Galway?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Ireland delivery is included once per wall in the quoted price (ex VAT). PrintNPack dispatches from Ashbourne, Co. Meath to Dublin, Cork, Galway, Limerick and nationwide.',
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
      name: 'Zipper Walls Ireland Buying Guide',
      item: PAGE_URL,
    },
  ],
};

const shapeRows = [
  {
    shape: 'Curved horizontal',
    sizes: '300×230×60 · 400×230×80 · 500×230×100 · 600×230×120 cm',
    use: 'Wide back walls and conference curves',
  },
  {
    shape: 'Curved vertical (with feet)',
    sizes: '300×230×81 · 400×230×85 cm',
    use: 'Freestanding bow curves and photo walls',
  },
  {
    shape: 'Wave',
    sizes: '300×230×64 · 400×230×126 cm',
    use: 'S-curve backdrops and retail feature walls',
  },
  {
    shape: 'U-shaped',
    sizes: '300×228×250 · 298×228×149 cm',
    use: 'Three-sided booths and sampling stands',
  },
  {
    shape: 'Arch (square / oval)',
    sizes: '240×240×100 · 270×230×100 cm',
    use: 'Entrances, launches and aisle photo arches',
  },
  {
    shape: 'Exhibition pillar',
    sizes: '70×200×50 · 80×300×80 cm',
    use: 'Branded columns and wayfinding totems',
  },
];

const optionRows = [
  { option: 'Cloth', choices: '210 gsm stretch cloth (90% polyamide / 10% spandex), dye sublimation' },
  { option: 'Frame', choices: '32 mm aluminium — included in Full set, or Fabric only if you already own it' },
  { option: 'Print', choices: 'Front only, or front and back (pillars are front only)' },
  { option: 'Kit', choices: 'Full set (cloth, frame and carry bag) or fabric only' },
  { option: 'Minimum order', choices: '1 wall' },
  { option: 'Delivery', choices: 'Included to Ireland, per wall, ex VAT' },
];

export default function ZipperWallsIrelandShapesSizesBuyingGuide() {
  const title =
    'Zipper Walls Ireland: Arch, U, Wave, Curve & Pillar Shapes Sizes Buying Guide';
  const description =
    'Buy printed zipper walls in Ireland with confidence — arch, U-shaped, wave, curved vertical, curved horizontal and exhibition pillars, full set vs fabric only, from €491.31 ex VAT with Ireland delivery included from Ashbourne.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="zipper walls ireland, fabric arch ireland, exhibition pillar dublin, u wall display cork, wave zipper wall galway, curved zipper wall ashbourne, portable exhibition wall ireland, zipper wall with feet ireland, fabric exhibition arch ireland, branded display pillar ireland"
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
          content="Zipper walls Ireland — curved horizontal fabric exhibition wall for Dublin trade shows"
        />
        <meta property="article:published_time" content="2026-11-16" />

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
          <span className="text-slate-900">Zipper Walls Ireland</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            Retail Guide
          </span>
          <span className="text-slate-400 text-sm">16 Nov 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Zipper Walls Ireland: Arch, U, Wave, Curve &amp; Pillar Shapes Sizes Buying Guide
        </h1>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="relative rounded-2xl overflow-hidden h-48 col-span-2 bg-slate-50">
            <Image
              src={HERO_IMAGE}
              alt="Zipper walls Ireland — curved horizontal fabric exhibition wall for Dublin trade shows"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 66vw, 512px"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={ARCH_IMAGE}
                alt="Arch zipper wall Cork Ireland — oval fabric exhibition arch printed front"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={PILLAR_IMAGE}
                alt="Exhibition pillars Galway Ireland — fabric zipper pillars for event aisles"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            A zipper wall is a printed stretch cloth that zips onto a 32 mm aluminium frame and packs
            into a carry bag. The buying decision in Ireland is which <strong>shape</strong> fits the
            stand — arch, U, wave, curved vertical, curved horizontal or pillar — then whether you
            need a <strong>full set</strong> or <strong>fabric only</strong>, and whether the graphic
            should print on the <strong>front only or both faces</strong>.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            This guide covers <strong>printed zipper walls in Ireland</strong> from PrintNPack —
            shapes, sizes (width × height × depth), kits and when to choose a zipper wall over an{' '}
            <Link
              href="/blog/inhaker-exhibition-walls-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              inhaker panel wall
            </Link>
            , a{' '}
            <Link
              href="/blog/pop-up-display-stands-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              pop-up display stand
            </Link>{' '}
            or a{' '}
            <Link
              href="/blog/fabric-banner-stands-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              fabric banner stand
            </Link>
            .{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              Zipper walls Ireland
            </Link>{' '}
            quote from <strong>€491.31 ex VAT</strong> for a curved horizontal full set printed on
            the front, with Ireland delivery included per wall from Ashbourne. Configure shape and
            options on the hub for a live price — we only state the published from-price here.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Who buys zipper walls in Ireland?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Typical buyers are agencies building Dublin product-launch arches, SMEs on the Cork and
            Galway exhibition circuit who need a wall that packs into a bag, retailers who want a
            freestanding curve or pillar without hook-in posts, and venues that swap fabric graphics
            between events. Ashbourne-based supply keeps Irish lead times practical when the hall date
            is fixed and artwork is still being signed off.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Zipper walls sit between rigid{' '}
            <Link
              href="/blog/inhaker-exhibition-walls-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              inhaker exhibition walls
            </Link>{' '}
            and folding{' '}
            <Link
              href="/blog/pop-up-display-stands-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              pop-up stands
            </Link>
            . Choose a zipper wall when you need stretch cloth on a tube frame that travels in a carry
            bag. Choose an inhaker when you already own posts and need a rigid hook-in panel. Choose a
            pop-up when the whole wall must fold as one unit; choose a{' '}
            <Link
              href="/blog/freestanding-led-frames-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              freestanding LED frame
            </Link>{' '}
            when you need an illuminated lightbox rather than dye-sublimated fabric.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Zipper wall shapes and sizes at a glance
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Every size is listed as <strong>width × height × depth</strong> in centimetres. Depth is
            the footprint of the curve, arch or pillar — not the cloth thickness. Cloth is{' '}
            <strong>210 gsm stretch</strong> (90% polyamide / 10% spandex) with dye sublimation.
          </p>

          <div className="overflow-x-auto mb-8 not-prose">
            <table className="min-w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
              <thead className="bg-slate-50 text-left">
                <tr>
                  <th className="px-4 py-3 font-semibold text-slate-900">Shape</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">Sizes (W × H × D)</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">Best for</th>
                </tr>
              </thead>
              <tbody>
                {shapeRows.map((row) => (
                  <tr key={row.shape} className="border-t border-slate-200">
                    <td className="px-4 py-3 text-slate-900 font-medium whitespace-nowrap">
                      {row.shape}
                    </td>
                    <td className="px-4 py-3 text-slate-700">{row.sizes}</td>
                    <td className="px-4 py-3 text-slate-700">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-slate-700 leading-relaxed mb-4">
            Start on the{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              zipper walls Ireland
            </Link>{' '}
            hub, then open the shape page you need — for example{' '}
            <Link
              href="/curved-horizontal-zipper-walls-ireland"
              className="text-blue-600 hover:underline"
            >
              curved horizontal
            </Link>
            ,{' '}
            <Link href="/arch-zipper-walls-ireland" className="text-blue-600 hover:underline">
              arch
            </Link>
            ,{' '}
            <Link href="/u-walls-ireland" className="text-blue-600 hover:underline">
              U-shaped
            </Link>
            ,{' '}
            <Link href="/wave-walls-ireland" className="text-blue-600 hover:underline">
              wave
            </Link>
            ,{' '}
            <Link
              href="/curved-vertical-zipper-walls-ireland"
              className="text-blue-600 hover:underline"
            >
              curved vertical with feet
            </Link>{' '}
            or{' '}
            <Link href="/exhibition-pillars-ireland" className="text-blue-600 hover:underline">
              exhibition pillars
            </Link>
            . Photographs on those pages are example prints only — your own artwork goes on the
            fabric.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3">
            Which shape for which stand?
          </h3>
          <p className="text-slate-700 leading-relaxed mb-4">
            <strong>Curved horizontal</strong> is the wide back wall — four widths from 3 m to 6 m,
            all 230 cm tall, with depth rising from 60 cm to 120 cm as the wall gets wider. Use it
            when the brand needs to fill a conference stage or a long exhibition rear.{" "}
            <strong>Curved vertical with feet</strong> (also searched as a zipper wall with standards
            or a bow zipper wall) stands freestanding at 300 or 400 cm wide — better when you need a
            side-readable photo curve without a separate base kit.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            A <strong>wave wall</strong> is the S-curve option: a shallow 64 cm wave at 3 m wide, or a
            deeper 126 cm wave at 4 m. Choose it when the plan view should look like a serpentine
            backdrop rather than a simple concave. A <strong>U wall</strong> wraps a small booth —
            deep 250 cm returns or shallower 149 cm returns — so the brand sits on the back and both
            sides as one cloth.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            An <strong>arch</strong> is the walk-under entrance: square at 240 × 240 × 100 cm, or oval
            at 270 × 230 × 100 cm. Couples, launches and aisle activations use it when guests need a
            photo frame they can walk through. An <strong>exhibition pillar</strong> is the branded
            column — 2 m or 3 m tall — for wayfinding, aisle markers and retail totems where a full
            wall would be too much floor.
          </p>

          <div className="relative rounded-2xl overflow-hidden h-56 mb-8 bg-slate-50 not-prose">
            <Image
              src={U_IMAGE}
              alt="U-shaped zipper wall Ireland — three-sided fabric booth wall for Dublin exhibitions"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 720px"
            />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Full set vs fabric only, front vs both sides
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            <strong>Full set</strong> is the printed cloth, the 32 mm aluminium frame and the carry
            bag — the usual first order for Irish exhibitors who do not already own hardware.{' '}
            <strong>Fabric only</strong> reprints the cloth for a frame you already have, which is the
            cheaper refresh when the campaign changes. Print is <strong>front only</strong> or{' '}
            <strong>front and back</strong> on every shape except pillars, which print on the front
            face only.
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

          <div className="grid sm:grid-cols-2 gap-3 mb-8 not-prose">
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={WAVE_IMAGE}
                alt="Wave zipper wall Ireland — S-curve fabric display for Cork retail launches"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={CURVED_VERTICAL_IMAGE}
                alt="Curved vertical zipper wall Ireland — freestanding fabric curve with feet for Galway shows"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Zipper wall vs inhaker vs pop-up vs fabric stand
          </h2>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
            <li>
              <strong>Zipper wall</strong> — stretch cloth on a 32 mm tube frame, six shape families,
              full set with carry bag or fabric only, Ireland delivery included per wall
            </li>
            <li>
              <Link
                href="/blog/inhaker-exhibition-walls-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                Inhaker exhibition walls
              </Link>{' '}
              — rigid 88 cm panels, Re-board or Forex, posts not included
            </li>
            <li>
              <Link
                href="/blog/pop-up-display-stands-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                Pop-up display stands
              </Link>{' '}
              — folding frame with printed fabric, packs for touring
            </li>
            <li>
              <Link
                href="/blog/fabric-banner-stands-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                Fabric banner stands
              </Link>{' '}
              — stretch fabric on a straight tension frame (wider spans, different kit)
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-8">
            Many Irish SMEs pair a curved zipper back wall with two{' '}
            <Link href="/blog/roll-up-banners-ireland-guide" className="text-blue-600 hover:underline">
              roll-up banners
            </Link>{' '}
            for side messaging — that mix covers a standard booth without shipping a rigid media wall.
            For illuminated freestanding kits, see the{' '}
            <Link
              href="/blog/freestanding-led-frames-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              freestanding LED frames Ireland
            </Link>{' '}
            guide.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Price, MOQ and how quoting works
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Zipper walls start from <strong>€491.31 ex VAT</strong> for a{' '}
            <strong>curved horizontal</strong> <strong>full set</strong> printed on the{' '}
            <strong>front only</strong>, with Ireland delivery included in that wall price. Arch, U,
            wave, curved vertical and pillar lines have their own from-prices on each shape page —
            use the live configurator rather than multiplying a unit guess.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Minimum order is <strong>one wall</strong>. Delivery is counted <strong>per wall</strong>,
            so two walls include two deliveries. Prices are ex VAT — an Irish VAT invoice adds 23%
            VAT. Build show-date buffer into artwork approval so courier slots are not cut short ahead
            of busy Dublin autumn exhibition weeks.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Delivery across Ireland from Ashbourne
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            PrintNPack is based in Ashbourne, Co. Meath. Quoted Ireland delivery is included once per
            wall (ex VAT) to Dublin, Cork, Galway, Limerick and every other county. Local buyers can
            also arrange collection.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            UK or Europe shipping is only confirmed case-by-case on request; this guide focuses on
            Irish delivery, which is the core service for printed zipper walls.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How to order zipper walls in Ireland
          </h2>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-8">
            <li>Pick the shape that fits the stand: arch, U, wave, curve or pillar</li>
            <li>Choose the size (width × height × depth) on that shape’s product page</li>
            <li>Select Full set or Fabric only, then front only or front and back (pillars: front only)</li>
            <li>Upload artwork sized to the cloth, approve the quote, and take Ireland delivery or collect from Ashbourne</li>
          </ol>

          <div className="bg-slate-900 rounded-xl p-6 mb-8 text-white not-prose">
            <p className="font-semibold mb-1">Ready to order zipper walls?</p>
            <p className="text-slate-400 text-sm mb-4">
              Arch, U, wave, curve and pillar shapes — from €491.31 ex VAT with Ireland delivery
              included per wall.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={HUB_HREF}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Shop Zipper Walls Ireland →
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
                q: 'Where can I order zipper walls in Ireland?',
                a: 'PrintNPack supplies printed zipper walls with Ireland delivery included from Ashbourne to Dublin, Cork, Galway and nationwide. Build the wall on the hub and request a quote.',
              },
              {
                q: 'What zipper wall shapes are available?',
                a: 'Arch (square or oval), U-shaped, wave, curved vertical with feet, curved horizontal from 3 m to 6 m wide, and exhibition pillars at 2 m or 3 m tall.',
              },
              {
                q: 'Is the frame included?',
                a: 'Full set includes the printed cloth, 32 mm aluminium frame and carry bag. Fabric only is a new print for a frame you already own.',
              },
              {
                q: 'How much do zipper walls cost?',
                a: 'From €491.31 ex VAT for a curved horizontal full set printed on the front, with Ireland delivery included per wall. Other shapes are quote-based on each product page.',
              },
              {
                q: 'Do you deliver to Dublin, Cork and Galway?',
                a: 'Yes. Ireland delivery is included once per wall in the quoted price (ex VAT), with collection available from Ashbourne, Co. Meath.',
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
              href: '/blog/inhaker-exhibition-walls-ireland-sizes-buying-guide',
              src: '/images/banners/inhaker/inhaker-hero.jpg',
              title: 'Exhibition Walls Ireland: Inhaker Panel Sizes 88×195–300 cm & Buying Guide',
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
              href: '/blog/freestanding-led-frames-ireland-sizes-buying-guide',
              src: '/images/banners/led-frames/led-frame-80x200.jpg',
              title: 'Freestanding LED Frames Ireland: 80–200 cm Sizes & Buying Guide',
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
