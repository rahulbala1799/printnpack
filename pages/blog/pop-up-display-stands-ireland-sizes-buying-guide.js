import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/pop-up-display-stands-ireland-sizes-buying-guide`;
const HUB_HREF = '/pop-up-walls-ireland';
const HERO_IMAGE = '/images/banners/popup-walls/popup-wall-straight.jpg';
const CURVED_IMAGE = '/images/banners/popup-walls/popup-wall-curved.jpg';
const LED_IMAGE = '/images/banners/popup-walls/popup-wall-led.jpg';
const FABRIC_IMAGE = '/images/banners/popup-walls/popup-wall-fabric.jpg';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Pop-up Display Stands Ireland: Straight vs Curved Sizes & Buying Guide',
  description:
    'How to buy pop-up display stands in Ireland — straight sizes from 151×224 cm to 445×224 cm, one curved 233×224 cm option, full stand vs fabric only, optional LED, from €511.65 ex VAT with Ireland delivery included from Ashbourne.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-10-20',
  dateModified: '2026-10-20',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I order pop-up display stands in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack supplies pop-up display stands — also called pop-up walls or exhibition backwalls — with printed fabric on a folding frame. Delivery to Ireland is included, ex VAT, from Ashbourne, Co. Meath to Dublin, Cork, Galway and nationwide.',
      },
    },
    {
      '@type': 'Question',
      name: 'What pop-up wall sizes are available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Straight sizes are 151×224, 224×224, 298×224, 298×298, 371×224, 371×298 and 445×224 cm. There is one curved size at 233×224 cm (57 cm deep, front print only).',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I buy a full stand or fabric only?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Order a full stand (frame plus printed fabric) for a first exhibition wall. Choose fabric only when you already own a matching folding frame and need a campaign reprint.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much do pop-up display stands cost in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pop-up display stands start from €511.65 ex VAT for the smallest straight full stand with front-only print and no LED, with Ireland delivery included. Configure size, kit, print sides and lighting on the product page for a live quote.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I add LED lighting to a pop-up wall?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Optional LED on backlit fabric is available on the quote builder. Blockout cloth is offered when lighting is off and the print is front-only; LED and double-sided print do not use blockout.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you deliver pop-up stands to Dublin, Cork and Galway?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Ireland delivery is included in the quoted price (ex VAT). PrintNPack dispatches from Ashbourne, Co. Meath to Dublin, Cork, Galway, Limerick and every Irish county.',
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
      name: 'Pop-up Display Stands Ireland Buying Guide',
      item: PAGE_URL,
    },
  ],
};

const sizeRows = [
  {
    size: '151 × 224 cm',
    shape: 'Straight',
    use: 'Compact booths, reception corners and small product launches',
  },
  {
    size: '224 × 224 cm',
    shape: 'Straight',
    use: 'Square media wall — popular for photo backs and SME trade stands',
  },
  {
    size: '298 × 224 cm',
    shape: 'Straight',
    use: 'Standard Irish exhibition footprint and aisle-facing branding',
  },
  {
    size: '298 × 298 cm',
    shape: 'Straight',
    use: 'Taller square wall when you need more height behind a counter',
  },
  {
    size: '371 × 224 / 371 × 298 cm',
    shape: 'Straight',
    use: 'Wider stands and multi-brand backdrops at regional shows',
  },
  {
    size: '445 × 224 cm',
    shape: 'Straight',
    use: 'Maximum standard straight span for large hall footprints',
  },
  {
    size: '233 × 224 cm',
    shape: 'Curved (57 cm deep)',
    use: 'Softer silhouette for conferences and selfie walls — front print only',
  },
];

export default function PopUpDisplayStandsIrelandSizesBuyingGuide() {
  const title = 'Pop-up Display Stands Ireland: Straight vs Curved Sizes & Buying Guide';
  const description =
    'Buy pop-up display stands in Ireland — straight sizes from 151×224 cm to 445×224 cm, curved 233×224 cm, full stand vs fabric only, optional LED, from €511.65 ex VAT with Ireland delivery included from Ashbourne.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="pop-up display stands ireland, pop up wall ireland, exhibition pop-up dublin, fabric pop-up stand cork, pop-up backwall galway, LED pop-up display ireland, curved pop-up stand ireland, exhibition backwall ashbourne, pop-up stand fabric only, trade show pop-up ireland"
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
          content="Pop-up display stands Ireland — straight fabric pop-up wall for exhibitions"
        />
        <meta property="article:published_time" content="2026-10-20" />

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
          <span className="text-slate-900">Pop-up Display Stands Ireland</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            Retail Guide
          </span>
          <span className="text-slate-400 text-sm">20 Oct 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Pop-up Display Stands Ireland: Straight vs Curved Sizes &amp; Buying Guide
        </h1>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="relative rounded-2xl overflow-hidden h-48 col-span-2 bg-slate-50">
            <Image
              src={HERO_IMAGE}
              alt="Pop-up display stands Ireland — straight fabric exhibition wall for Dublin trade shows"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 66vw, 512px"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={CURVED_IMAGE}
                alt="Curved pop-up display stand Ireland — soft exhibition backwall for Cork conferences"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={LED_IMAGE}
                alt="LED pop-up display Ireland — backlit fabric stand for Galway events"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            A pop-up display stand is the folding exhibition wall Irish brands take from RDS halls to
            regional conferences — a printed fabric panel on a concertina frame that packs down for
            the van. Search terms include pop-up wall, pop-up stand, exhibition backwall and fabric
            pop-up stand; the product is the same.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            This guide explains how to buy <strong>pop-up display stands in Ireland</strong> —
            straight sizes from 151 × 224 cm to 445 × 224 cm, one curved option, full stand versus
            fabric only, optional LED, and how{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              PrintNPack&apos;s pop-up walls
            </Link>{' '}
            quote from <strong>€511.65 ex VAT</strong> with Ireland delivery included from Ashbourne.
            Configure size and options on the product page for a live price — we only state the
            published from-price here.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Who buys pop-up stands in Ireland?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Typical buyers are SMEs on the Dublin and regional trade-show circuit, agencies building
            photo walls, retailers who need a reusable launch backdrop, and venues staging AGMs or
            product reveals. Cork and Galway exhibitors often want a wall that folds into a car boot
            after the show; Ashbourne-based printing keeps Irish lead times practical when artwork
            lands late.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Pop-ups sit between portable{' '}
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
            . Choose a pop-up when you want a folding frame with a pillowcase-style graphic that
            builds quickly on the hall floor. Choose a fabric banner stand when you prefer a straight
            aluminium tension frame; choose a roll-up for a single narrow panel.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Pop-up display stand sizes at a glance
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Match width to your booth allocation and viewing distance. Straight walls are 36 cm deep;
            the curved option is 57 cm deep and prints on the front only.
          </p>

          <div className="overflow-x-auto mb-8 not-prose">
            <table className="min-w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
              <thead className="bg-slate-50 text-left">
                <tr>
                  <th className="px-4 py-3 font-semibold text-slate-900">Size</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">Shape</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">Best for</th>
                </tr>
              </thead>
              <tbody>
                {sizeRows.map((row) => (
                  <tr key={row.size} className="border-t border-slate-200">
                    <td className="px-4 py-3 text-slate-900 font-medium whitespace-nowrap">{row.size}</td>
                    <td className="px-4 py-3 text-slate-700">{row.shape}</td>
                    <td className="px-4 py-3 text-slate-700">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-slate-700 leading-relaxed mb-8">
            <strong>224 × 224 cm</strong> and <strong>298 × 224 cm</strong> cover most Irish SME
            stands. Step to 371–445 cm when the brief is a wide aisle-facing brand span. The curved{' '}
            <strong>233 × 224 cm</strong> wall softens a conference photo back without the larger
            footprint of a dedicated curved fabric stand range.
          </p>

          <div className="relative rounded-2xl overflow-hidden h-56 mb-8 bg-slate-50 not-prose">
            <Image
              src={FABRIC_IMAGE}
              alt="Pop-up wall fabric only Ireland — folded printed graphic without frame for Ashbourne reorders"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 720px"
            />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Full stand vs fabric only
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Order a <strong>full stand</strong> when you need the folding aluminium frame and printed
            fabric together — the usual first purchase. Optional silver, white or black foot plates
            can be added on a full-stand quote when you want a more finished base on carpeted halls.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Choose <strong>fabric only</strong> when you already own a matching frame and need a
            seasonal campaign, new logo or bilingual layout. Reusing the hardware keeps later orders
            lighter. Confirm your existing size ID before ordering a replacement graphic — a 298 cm
            fabric will not sit correctly on a 445 cm frame.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Front only, front and back, LED and blockout
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Straight walls can print <strong>front only</strong> or <strong>front and back</strong>.
            Double-sided suits island stands and walk-through aisles; wall-backed booths usually need
            front only. Curved walls are front print only.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Optional <strong>LED</strong> lights the graphic through backlit fabric — useful for dim
            halls and evening receptions. <strong>Blockout cloth</strong> is available when lighting
            is off and the print is front-only; LED and double-sided configurations do not use
            blockout.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            If you need a rigid illuminated frame rather than a folding fabric wall, compare{' '}
            <Link href="/freestanding-led-frames-ireland" className="text-blue-600 hover:underline">
              freestanding LED frames Ireland
            </Link>{' '}
            — those are unprinted construction kits, not pop-up walls.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-8 not-prose">
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={CURVED_IMAGE}
                alt="Curved pop-up stand Ireland — 233×224 cm conference backdrop Dublin Cork Galway"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={LED_IMAGE}
                alt="Backlit LED pop-up display Ireland — illuminated exhibition fabric wall"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Pop-up vs fabric banner stand vs roll-up
          </h2>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
            <li>
              <strong>Pop-up display stand</strong> — folding frame, fast hall build, straight or
              curved, optional LED, packs for touring Irish shows
            </li>
            <li>
              <Link
                href="/blog/fabric-banner-stands-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                Fabric banner stands
              </Link>{' '}
              — stretch fabric on a straight aluminium frame (2.5–6 m), reusable structure
            </li>
            <li>
              <Link href="/blog/roll-up-banners-ireland-guide" className="text-blue-600 hover:underline">
                Roll-up banners
              </Link>{' '}
              — fastest single-panel portable display; narrower face than a pop-up wall
            </li>
            <li>
              <Link
                href="/blog/curved-banner-stands-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                Curved banner stands
              </Link>{' '}
              — larger curved fabric spans (3–5 m) when a 233 cm pop-up curve is not wide enough
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-8">
            Many Irish SMEs tour with one pop-up wall plus two roll-ups for side messaging — that mix
            covers a standard booth without shipping rigid boards.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Artwork tips before you approve the quote
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Supply high-resolution artwork sized to the final graphic dimensions. Keep critical logos
            and phone numbers away from the extreme edges where fabric wraps the frame sides. Soft
            gradients and full-bleed photography suit dye-sublimation fabric; thin hairline rules
            near seams are easier to lose. Place QR codes or bilingual copy at standing eye height
            rather than in the lower skirting zone visitors rarely read.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            For outdoor festivals and stage-scale spans beyond a folding pop-up, see our{' '}
            <Link
              href="/blog/stage-backdrop-banners-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              stage backdrop banners Ireland
            </Link>{' '}
            guide — polyester backdrops up to much larger custom sizes with ring finishing.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Price, MOQ and how quoting works
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Pop-up display stands start from <strong>€511.65 ex VAT</strong> for the smallest straight
            full stand (151 × 224 cm) with front-only print and no LED, with Ireland delivery
            included. Larger sizes, double-sided print, LED, blockout and foot plates change the
            quote — use the live configurator rather than guessing.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Minimum order is <strong>one unit</strong>. Build show-date buffer into artwork approval
            so production and courier slots are not cut short ahead of busy Dublin autumn exhibition
            weeks.
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
            Irish delivery, which is the core service for pop-up display stands.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How to order pop-up display stands in Ireland
          </h2>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-8">
            <li>Measure booth width and pick a straight size or the 233 × 224 cm curved option</li>
            <li>Choose full stand or fabric only based on whether you already own a frame</li>
            <li>Pick front only or front and back (straight walls); add LED or blockout if needed</li>
            <li>Supply high-resolution artwork sized to the final graphic dimensions</li>
            <li>Approve the quote and take nationwide Ireland delivery or collect from Ashbourne</li>
          </ol>

          <div className="bg-slate-900 rounded-xl p-6 mb-8 text-white not-prose">
            <p className="font-semibold mb-1">Ready to order pop-up display stands?</p>
            <p className="text-slate-400 text-sm mb-4">
              Straight and curved sizes, full stands or fabric only, optional LED — from €511.65 ex
              VAT with Ireland delivery included.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={HUB_HREF}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Shop Pop-up Walls Ireland →
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
                q: 'Where can I order pop-up display stands in Ireland?',
                a: 'PrintNPack supplies pop-up walls and exhibition backwalls with Ireland delivery included from Ashbourne to Dublin, Cork, Galway and nationwide.',
              },
              {
                q: 'What pop-up wall sizes are available?',
                a: 'Straight sizes from 151×224 cm to 445×224 cm, plus one curved size at 233×224 cm (57 cm deep, front print only).',
              },
              {
                q: 'Should I buy a full stand or fabric only?',
                a: 'Buy a full stand for a first wall. Choose fabric only when you already own a matching folding frame and need a campaign reprint.',
              },
              {
                q: 'How much do pop-up display stands cost?',
                a: 'From €511.65 ex VAT for the smallest straight full stand with front-only print and no LED, Ireland delivery included. Larger options are quote-based on the product page.',
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
              href: '/blog/fabric-banner-stands-ireland-sizes-buying-guide',
              src: '/images/banners/fabric-banner-stands/fabric-banner-stand-ireland-exhibition-media-wall.jpg',
              title: 'Fabric Banner Stands Ireland: Sizes, Kits & Trade Show Buying Guide',
            },
            {
              href: '/blog/curved-banner-stands-ireland-sizes-buying-guide',
              src: '/images/banners/curved-banner-stands/curved-banner-stand-ireland-curved-media-wall.jpg',
              title: 'Curved Banner Stands Ireland: Sizes & Exhibition Buying Guide',
            },
            {
              href: '/blog/roll-up-banners-ireland-guide',
              src: '/images/products/wide-format.png',
              title: 'Roll-Up Banners Ireland Guide',
            },
            {
              href: '/blog/stage-backdrop-banners-ireland-sizes-buying-guide',
              src: '/images/products/stage-backdrop-banners/stage-backdrop-banners-ireland-open-air-festival.png',
              title: 'Stage Backdrop Banners Ireland: Sizes & Materials Buying Guide',
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
