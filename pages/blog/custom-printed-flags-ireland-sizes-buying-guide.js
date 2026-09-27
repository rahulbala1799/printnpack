import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/custom-printed-flags-ireland-sizes-buying-guide`;
const HUB_HREF = '/custom-printed-flags-ireland';
const HERO_IMAGE = '/images/products/custom-printed-flags/custom-printed-flags-ireland-gaa-club.jpg';
const CRICKET_IMAGE = '/images/products/custom-printed-flags/custom-printed-flags-ireland-cricket-club.jpg';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Custom Printed Flags Ireland: Sizes, Materials & Club Buying Guide',
  description:
    'How to buy custom printed flags in Ireland — sizes from Extra Small to Extra Large, polyester vs recycled vs mesh, finishing options, MOQ from one flag, and nationwide delivery from Ashbourne.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-09-27',
  dateModified: '2026-09-27',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I order custom printed flags in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack supplies custom printed flags across Ireland for GAA clubs, cricket and rugby clubs, schools, businesses and events — full-colour sublimation printing from one flag, with nationwide delivery from Ashbourne, Co. Meath to Dublin, Cork, Galway and every county.',
      },
    },
    {
      '@type': 'Question',
      name: 'What sizes of custom printed flags are available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standard sizes run Extra Small 100×70 cm, Small 100×90 cm, Standard 150×90 cm, Large 150×100 cm and Extra Large 200×100 cm. Custom and oversized flags can be made to measure, with multiple printed sections stitched together when needed.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the minimum order for custom printed flags?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Flags can be ordered from just one piece — suitable for a single club crest, school banner or small business promo as well as larger campaign runs.',
      },
    },
    {
      '@type': 'Question',
      name: 'What materials and finishing options are available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Materials include polyester 110gsm, recycled polyester 110gsm and mesh polyester 115gsm, all dye-sublimation printed. Finishing options include eyelets, reinforced edges, pole sleeves, outrigger tunnels, cord and loop, white or black hooks, and ring reinforcement layouts.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the flagpole included with a custom printed flag?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. PrintNPack supplies the custom printed flag only — choose finishing to match your existing pole or mounting hardware.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you deliver custom flags to Dublin, Cork and Galway?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. PrintNPack delivers custom printed flags to Dublin, Cork, Galway, Limerick and every Irish county from Ashbourne, Co. Meath.',
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
      name: 'Custom Printed Flags Ireland Buying Guide',
      item: PAGE_URL,
    },
  ],
};

const sizeRows = [
  {
    size: 'Extra Small — 100 × 70 cm',
    use: 'Indoor displays, reception desks, small club rooms',
  },
  {
    size: 'Small — 100 × 90 cm',
    use: 'Compact outdoor poles, school yards, shopfront brackets',
  },
  {
    size: 'Standard — 150 × 90 cm',
    use: 'Most club crest and business brand flags',
  },
  {
    size: 'Large — 150 × 100 cm',
    use: 'Default pitch-side and festival size — highest demand',
  },
  {
    size: 'Extra Large — 200 × 100 cm',
    use: 'Wide outdoor poles, events and high-visibility sites',
  },
];

export default function CustomPrintedFlagsIrelandSizesBuyingGuide() {
  const title = 'Custom Printed Flags Ireland: Sizes, Materials & Club Buying Guide';
  const description =
    'Buy custom printed flags in Ireland with confidence — sizes from Extra Small to Extra Large, polyester vs recycled vs mesh, finishing options, MOQ from one flag, and delivery to Dublin, Cork, Galway and nationwide from Ashbourne.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="custom printed flags ireland, personalised flags dublin, GAA club flags ireland, custom sports flags cork, polyester flags galway, recycled polyester flags ireland, mesh flags ireland, custom flags ashbourne, club flags wholesale ireland, event flags ireland"
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
          content="Custom printed flags Ireland — full-colour GAA club flag for sports pitches"
        />
        <meta property="article:published_time" content="2026-09-27" />

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
          <span className="text-slate-900">Custom Printed Flags Ireland</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            Retail Guide
          </span>
          <span className="text-slate-400 text-sm">27 Sep 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Custom Printed Flags Ireland: Sizes, Materials &amp; Club Buying Guide
        </h1>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="relative rounded-2xl overflow-hidden h-48 col-span-2 bg-slate-50">
            <Image
              src={HERO_IMAGE}
              alt="Custom printed flags Ireland — GAA club crest flag flying at a Dublin sports pitch"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 66vw, 512px"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={CRICKET_IMAGE}
                alt="Custom printed cricket club flag Ireland — branded sports flag Cork and nationwide"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={HERO_IMAGE}
                alt="Personalised flags Ireland — full-colour sublimation club flag Galway delivery"
                fill
                className="object-cover object-bottom"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            A custom printed flag is one of the clearest ways an Irish club, school or business can
            show colours outdoors — on a GAA pitch, cricket ground, festival site or shopfront pole.
            The wrong size flaps weakly on a tall pole; the wrong finishing will not fit your
            hardware; and waiting for a large MOQ is unnecessary when you only need one crest flag.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            This guide explains how to buy <strong>custom printed flags in Ireland</strong> —
            standard sizes, polyester versus recycled versus mesh, finishing that matches your pole,
            ordering from one flag, and how{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              PrintNPack&apos;s custom printed flags
            </Link>{' '}
            ship nationwide from Ashbourne. Pricing is quote-based; we do not invent unit rates here —
            configure size, material and finishing on the product page for a live quote.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Who buys custom printed flags in Ireland?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            PrintNPack flags are built for outdoor-facing brand and club identity. Typical buyers
            include GAA clubs and sports teams, cricket and rugby clubs, schools and colleges,
            community organisations, businesses and retail sites, and festivals or promotional
            events. Dublin clubs often need a single crest flag for a new pole; Cork and Galway
            schools order a small run for sports day; festival organisers in Meath and beyond order
            oversized pieces stitched from multiple sections.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Flags differ from indoor display products such as{' '}
            <Link href="/blog/roll-up-banners-ireland-guide" className="text-blue-600 hover:underline">
              roll-up banners
            </Link>{' '}
            or{' '}
            <Link href="/blog/foamex-boards-ireland-guide" className="text-blue-600 hover:underline">
              Foamex boards
            </Link>
            . A flag moves in wind, needs washable fabric, and must match pole sleeves, hooks or
            eyelets — so material and finishing matter as much as artwork.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Flag sizes at a glance
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Match the flag to pole height and viewing distance. Under-sizing on a tall outdoor pole
            looks sparse; oversizing on a short bracket can snag. Use the table below, then confirm
            any custom dimensions on the quote configurator.
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
            Large (150 × 100 cm) is the default configuration for many Irish club and event orders.
            Extra Large (200 × 100 cm) suits wider poles and high-visibility sites. For oversized
            flags beyond the listed sizes, multiple printed sections can be professionally stitched
            together into one bespoke piece. Custom size notes are accepted on the quote form when
            a standard option does not fit.
          </p>

          <div className="relative rounded-2xl overflow-hidden h-56 mb-8 bg-slate-50 not-prose">
            <Image
              src={CRICKET_IMAGE}
              alt="Custom sports flags Ireland — cricket club flag on pole for outdoor club grounds"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 720px"
            />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Materials: polyester, recycled polyester and mesh
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            All PrintNPack custom flags use dye sublimation for bright, long-lasting full colour on
            a single-sided print with approximately <strong>95% show-through</strong> on the reverse
            — so crest and logo remain readable from both sides without a second print pass.
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
            <li>
              <strong>Polyester 110gsm</strong> — durable standard fabric for everyday outdoor club
              and business use
            </li>
            <li>
              <strong>Recycled polyester 110gsm</strong> — same weight class with a recycled fibre
              option when sustainability messaging matters to the club or brand
            </li>
            <li>
              <strong>Mesh polyester 115gsm (Longlife)</strong> — better airflow in exposed outdoor
              sites where solid fabric catches more wind
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-8">
            Flags are suitable for rain and demanding outdoor weather; take them indoors during very
            strong winds. Care is simple: machine wash at a maximum of 30°C and do not tumble dry.
            Recycled polyester is the recommended material default on the online configurator when
            you want an eco-forward option without changing size or finishing.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Finishing options: match the flag to your pole
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            The flagpole is <strong>not included</strong> — PrintNPack supplies the printed flag
            only. Finishing must match the hardware you already have (or plan to buy separately).
            Options include eyelets, reinforced edges, pole sleeves, outrigger tunnels, cord and
            loop, white or black hooks, tunnel with white or black band plus hooks, rings every
            30 cm with reinforcement, hemmed corner rings, or a plain edge without reinforced
            edges or rings when your mount does not need them.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            White hooks are the recommended finishing default for many bracket and pole setups.
            Measure your existing sleeve diameter, hook spacing or eyelet pattern before ordering —
            that single check avoids a beautifully printed flag that cannot hoist. For wide-format
            event graphics that sit on frames rather than poles, compare{' '}
            <Link href="/blog/banner-printing-ireland-guide" className="text-blue-600 hover:underline">
              banner printing Ireland
            </Link>{' '}
            and trade-show display options.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            MOQ from one flag — when quantity still matters
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Custom printed flags start from <strong>one piece</strong>. That suits a single GAA
            crest for a new Ashbourne clubhouse pole, a Dublin café brand flag, or a Galway school
            sports-day display. Larger campaigns — festival runs, multi-site retail, county board
            programmes — simply increase quantity on the same size and finishing; there is no plate
            fee structure like traditional screen print.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Always request a quote for your exact size, material and finishing. We do not list
            speculative euro rates in this guide because quotes depend on those choices. Use the
            product configurator on{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              custom printed flags Ireland
            </Link>{' '}
            or contact PrintNPack for bespoke oversized work.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Delivery across Ireland from Ashbourne
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            PrintNPack is based in Ashbourne, Co. Meath — convenient for Dublin and Meath collections,
            with nationwide dispatch for Cork, Galway, Limerick and every other county. Lead time is
            confirmed on each quote after artwork approval; contact us for the current schedule on
            your order.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            UK or Europe shipping is only confirmed case-by-case on request; this guide focuses on
            Irish delivery, which is the core service for custom printed flags.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How to order custom printed flags in Ireland
          </h2>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-8">
            <li>Measure your pole height and viewing distance — pick Extra Small through Extra Large or note a custom size</li>
            <li>Choose polyester, recycled polyester or mesh based on wind exposure and sustainability goals</li>
            <li>Match finishing (hooks, sleeves, eyelets, tunnels, rings) to your existing hardware</li>
            <li>Supply artwork — full-colour crest, logo or brand design suitable for sublimation</li>
            <li>Order from one flag upward and take nationwide delivery or collect from Ashbourne</li>
          </ol>

          <div className="bg-slate-900 rounded-xl p-6 mb-8 text-white not-prose">
            <p className="font-semibold mb-1">Ready to order custom printed flags?</p>
            <p className="text-slate-400 text-sm mb-4">
              Sizes from Extra Small to Extra Large, polyester and mesh options, finishing to match
              your pole — quoted and delivered across Ireland.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={HUB_HREF}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Configure Custom Flags Ireland →
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
                q: 'Where can I order custom printed flags in Ireland?',
                a: 'PrintNPack supplies custom printed flags to businesses, GAA clubs, cricket and rugby clubs, schools and events throughout Ireland — configure size, material and finishing online or request a quote, with delivery from Ashbourne to Dublin, Cork, Galway and nationwide.',
              },
              {
                q: 'What custom flag sizes are available?',
                a: 'Extra Small 100×70 cm, Small 100×90 cm, Standard 150×90 cm, Large 150×100 cm and Extra Large 200×100 cm, plus custom and oversized options with sections stitched together when required.',
              },
              {
                q: 'What is the minimum order for custom flags?',
                a: 'From one flag. Suitable for individual clubs and small businesses as well as larger promotional campaigns.',
              },
              {
                q: 'What materials and finishing can I choose?',
                a: 'Polyester 110gsm, recycled polyester 110gsm and mesh polyester 115gsm with dye sublimation print. Finishing includes eyelets, reinforced edges, pole sleeves, outrigger tunnels, cord and loop, hooks, tunnels with bands, and ring reinforcement layouts.',
              },
              {
                q: 'Is the flagpole included?',
                a: 'No. We supply the custom printed flag only — select finishing to match your existing pole or mounting hardware.',
              },
              {
                q: 'Do you deliver custom flags to Dublin, Cork and Galway?',
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
              href: '/blog/banner-printing-ireland-guide',
              src: '/ifa/product/banner/20221019_184306722822_e66498_Promo-banner.webp',
              title: 'Banner Printing Ireland: Cost, Materials and Turnaround Guide',
            },
            {
              href: '/blog/roll-up-banners-ireland-guide',
              src: '/images/products/rollup-banner.png',
              title: 'Roll-Up Banners Ireland Guide',
            },
            {
              href: '/blog/foamex-boards-ireland-guide',
              src: '/images/products/foamex.png',
              title: 'Foamex Boards Ireland Guide',
            },
            {
              href: '/blog/trade-show-banners-decals-ireland',
              src: '/ifa/product/banner/1666183881.webp',
              title: 'Trade Show Banners & Decals Ireland',
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
