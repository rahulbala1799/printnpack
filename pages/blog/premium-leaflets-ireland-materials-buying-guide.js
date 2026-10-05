import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/premium-leaflets-ireland-materials-buying-guide`;
const HUB_HREF = '/premium-leaflets-ireland';
const HERO_IMAGE = '/images/products/premium-leaflets/premium-leaflets-ireland-metallic-gold.jpg';
const SILVER_IMAGE = '/images/products/premium-leaflets/premium-leaflets-ireland-metallic-silver.jpg';
const WHITE_IMAGE = '/images/products/premium-leaflets/premium-leaflets-ireland-metallic-white.jpg';
const SULFATE_IMAGE = '/images/products/premium-leaflets/premium-leaflets-ireland-sulfate-cardboard.jpg';
const WEDDING_IMAGE = '/images/products/premium-leaflets/premium-leaflets-ireland-metallic-gold-wedding.jpg';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Premium Leaflets Ireland: Metallic, Pearl & PVC Materials Buying Guide',
  description:
    'How to buy premium leaflets in Ireland — metallic gold, silver and white, pearl marble, sulfate cardboard and waterproof PVC paper, sizes from A7 to A4, and nationwide delivery from Ashbourne.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-10-05',
  dateModified: '2026-10-05',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I order premium leaflets in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack prints premium special-material leaflets in Ireland — metallic gold, silver and white, pearl marble, sulfate cardboard and PVC paper — with high-quality digital print and nationwide delivery from Ashbourne, Co. Meath to Dublin, Cork, Galway and every county.',
      },
    },
    {
      '@type': 'Question',
      name: 'What premium leaflet materials are available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Materials include Metallic Gold, Metallic Silver and Metallic White at 300 gsm, Pearl Marble and Sulfate Cardboard at 290 gsm, and synthetic PVC paper at 158, 234 or 276 gsm. PVC options are tree-free, tear-resistant and waterproof.',
      },
    },
    {
      '@type': 'Question',
      name: 'What sizes of premium leaflets can I order?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sizes include A6 (105×148 mm), A5 (148×210 mm, commonly recommended), A4 (210×297 mm), DL | US (210×99 mm), Medium Square (148×148 mm) and A7 (74×105 mm). Single-sided or double-sided digital print is available.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I print white ink on metallic or pearl leaflets?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. White colours cannot be printed on metallic or pearl paper. Design with dark contrasting colours such as black, navy, burgundy or deep emerald so text stays readable on reflective stock.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should I choose PVC paper leaflets instead of metallic?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Choose PVC paper when leaflets need to survive outdoor handling, damp conditions or repeated use — the synthetic stock is waterproof and tear-resistant. Metallic and pearl stocks suit indoor luxury handouts, weddings, hotels and premium brand launches.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you deliver premium leaflets to Dublin, Cork and Galway?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. PrintNPack delivers premium leaflets to Dublin, Cork, Galway, Limerick and every Irish county from Ashbourne, Co. Meath.',
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
      name: 'Premium Leaflets Ireland Buying Guide',
      item: PAGE_URL,
    },
  ],
};

const materialRows = [
  {
    material: 'Metallic Gold',
    gsm: '300 gsm',
    use: 'Weddings, hotels, jewellery, luxury launches',
  },
  {
    material: 'Metallic Silver',
    gsm: '300 gsm',
    use: 'Tech, spa, property and modern luxury brands',
  },
  {
    material: 'Metallic White',
    gsm: '300 gsm',
    use: 'Soft sheen handouts, beauty and premium retail',
  },
  {
    material: 'Pearl Marble',
    gsm: '290 gsm',
    use: 'Elegant invitations and boutique promotions',
  },
  {
    material: 'Sulfate Cardboard',
    gsm: '290 gsm',
    use: 'Sturdy tactile flyers for food, fashion, eco brands',
  },
  {
    material: 'PVC paper',
    gsm: '158 / 234 / 276 gsm',
    use: 'Waterproof, tear-resistant outdoor or high-wear use',
  },
];

const sizeRows = [
  { size: 'A7', dims: '74 × 105 mm', use: 'Mini cards, samples, compact inserts' },
  { size: 'A6', dims: '105 × 148 mm', use: 'Pocket handouts, loyalty-style cards' },
  { size: 'Medium Square', dims: '148 × 148 mm', use: 'Square invites and boutique lookbooks' },
  { size: 'DL | US', dims: '210 × 99 mm', use: 'Rack cards and slim promo strips' },
  { size: 'A5', dims: '148 × 210 mm', use: 'Most common premium flyer size' },
  { size: 'A4', dims: '210 × 297 mm', use: 'Menus, property sheets, detailed offers' },
];

export default function PremiumLeafletsIrelandMaterialsBuyingGuide() {
  const title = 'Premium Leaflets Ireland: Metallic, Pearl & PVC Materials Buying Guide';
  const description =
    'Buy premium leaflets in Ireland with confidence — metallic gold, silver and white, pearl marble, sulfate cardboard and waterproof PVC paper, sizes from A7 to A4, and delivery to Dublin, Cork, Galway and nationwide from Ashbourne.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="premium leaflets ireland, metallic leaflet printing ireland, pearl marble leaflets dublin, PVC waterproof flyers cork, special material flyers ireland, sulfate cardboard leaflets galway, luxury leaflet printing ashbourne, metallic gold paper leaflets ireland, premium flyer materials ireland, bespoke leaflets ireland"
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
          content="Premium leaflets Ireland — metallic gold special material flyer stock"
        />
        <meta property="article:published_time" content="2026-10-05" />

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
          <span className="text-slate-900">Premium Leaflets Ireland</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            Retail Guide
          </span>
          <span className="text-slate-400 text-sm">5 Oct 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Premium Leaflets Ireland: Metallic, Pearl &amp; PVC Materials Buying Guide
        </h1>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="relative rounded-2xl overflow-hidden h-48 col-span-2 bg-slate-50">
            <Image
              src={HERO_IMAGE}
              alt="Premium leaflets Ireland — metallic gold special material flyer for Dublin luxury brands"
              fill
              className="object-contain p-4"
              priority
              sizes="(max-width: 768px) 66vw, 512px"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={SILVER_IMAGE}
                alt="Metallic silver premium leaflets Ireland — luxury flyer stock Cork"
                fill
                className="object-contain p-2"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={WHITE_IMAGE}
                alt="Metallic white premium leaflets Ireland — pearlescent flyer Galway"
                fill
                className="object-contain p-2"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Standard gloss leaflets work for door drops. When a wedding stationery set, hotel spa menu
            or jewellery launch needs to feel expensive in the hand, Irish buyers step up to{' '}
            <strong>premium special-material leaflets</strong> — metallic, pearl, sturdy sulfate board
            or waterproof PVC.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            This guide explains how to buy{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              premium leaflets in Ireland
            </Link>{' '}
            — which material suits which job, sizes from A7 to A4, the white-ink limit on metallic and
            pearl stocks, and how PrintNPack delivers from Ashbourne to Dublin, Cork, Galway and
            nationwide. For everyday A6–A3 paper stocks and folds, see our{' '}
            <Link href="/blog/leaflet-printing-ireland-guide" className="text-blue-600 hover:underline">
              leaflet printing Ireland guide
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Why Irish brands choose special-material leaflets
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Reflective and textured stocks change first impressions before anyone reads a word. A
            metallic gold A5 on a Dublin hotel concierge desk, or a pearl marble Medium Square for a
            Cork boutique, signals quality that silk-coated flyer stock cannot match. Guests keep them.
            Staff notice them. That is the point of a premium leaflet run.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Typical buyers in Ireland include wedding planners and venues, hotels and spas, jewellery
            and beauty brands, luxury property launches, premium restaurants, and event marketers who
            need a short run that feels exclusive rather than a 5,000-piece door drop. Galway and Cork
            boutique retailers often use the same stocks for seasonal lookbooks and pop-up invites.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            PrintNPack prints these leaflets with high-quality digital print — single-sided or
            double-sided — so short luxury runs and campaign top-ups stay practical. Pricing is quote-led
            because material, size, sides and quantity all move the cost; use the product configurator
            and request a quote rather than guessing a unit rate. We do not list fixed euro prices on
            this guide because those variables change every job.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Premium leaflet materials at a glance
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Match the stock to where the leaflet will live — indoor luxury handout, tactile food brand
            flyer, or outdoor waterproof piece.
          </p>

          <div className="overflow-x-auto mb-8 not-prose">
            <table className="min-w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
              <thead className="bg-slate-50 text-left">
                <tr>
                  <th className="px-4 py-3 font-semibold text-slate-900">Material</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">Weight</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">Best for</th>
                </tr>
              </thead>
              <tbody>
                {materialRows.map((row) => (
                  <tr key={row.material} className="border-t border-slate-200">
                    <td className="px-4 py-3 text-slate-900 font-medium">{row.material}</td>
                    <td className="px-4 py-3 text-slate-700">{row.gsm}</td>
                    <td className="px-4 py-3 text-slate-700">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="relative rounded-2xl overflow-hidden h-56 mb-8 bg-slate-50 not-prose">
            <Image
              src={WEDDING_IMAGE}
              alt="Metallic gold premium leaflets Ireland — wedding stationery flyer Ashbourne print"
              fill
              className="object-contain p-4"
              sizes="(max-width: 768px) 100vw, 720px"
            />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Metallic, pearl, sulfate or PVC — how to choose
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            <strong>Metallic Gold, Silver and White (300 gsm)</strong> are Sirio-style reflective
            stocks. Gold suits weddings, jewellery and warm luxury brands; silver reads modern for
            spa, tech and property; metallic white gives a softer pearlescent sheen for beauty and
            retail. Design with strong contrasting colours — black, navy, burgundy, deep emerald or
            teal — because white ink cannot print on metallic or pearl paper.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            <strong>Pearl Marble (290 gsm)</strong> adds an elegant stone-like sheen without full
            metallic flash — popular for boutique invitations and softer premium promotions.{' '}
            <strong>Sulfate Cardboard (290 gsm)</strong> is smoothed, sturdy board with a tactile,
            organic feel that suits premium food, drinks, fashion and sustainability-led brands.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            <strong>PVC paper (158, 234 or 276 gsm)</strong> is synthetic, 100% tree-free,
            tear-resistant and waterproof. Use it when leaflets will face damp outdoor venues,
            festival handouts or repeated handling that would ruin paper stock. Heavier PVC feels more
            substantial; lighter PVC suits high-volume waterproof pieces where bulk matters.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-8 not-prose">
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={SULFATE_IMAGE}
                alt="Sulfate cardboard premium leaflets Ireland — sturdy flyer stock for Dublin brands"
                fill
                className="object-contain p-3"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={SILVER_IMAGE}
                alt="Metallic silver premium leaflets Ireland — special material flyer Cork Galway"
                fill
                className="object-contain p-3"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Premium leaflet sizes in Ireland
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Special materials are available across the same practical formats Irish marketers already
            use. A5 is marked as the recommended default on the configurator for most luxury handouts —
            large enough for a clear offer, small enough to hand over at reception or a bridal fair.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            A6 and A7 suit pocket cards, sample inserts and compact loyalty-style pieces. Medium Square
            (148×148 mm) is a strong choice for boutique invites and lookbook covers. DL | US (210×99 mm)
            works on racks and slim promo holders. A4 carries menus, property sheets and detailed
            offers when the material itself is part of the brand story.
          </p>

          <div className="overflow-x-auto mb-8 not-prose">
            <table className="min-w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
              <thead className="bg-slate-50 text-left">
                <tr>
                  <th className="px-4 py-3 font-semibold text-slate-900">Size</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">Dimensions</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">Typical use</th>
                </tr>
              </thead>
              <tbody>
                {sizeRows.map((row) => (
                  <tr key={row.size} className="border-t border-slate-200">
                    <td className="px-4 py-3 text-slate-900 font-medium">{row.size}</td>
                    <td className="px-4 py-3 text-slate-700">{row.dims}</td>
                    <td className="px-4 py-3 text-slate-700">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Premium leaflets vs standard leaflet printing
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Standard{' '}
            <Link href="/blog/leaflet-printing-ireland-guide" className="text-blue-600 hover:underline">
              leaflet printing
            </Link>{' '}
            on uncoated, silk, gloss or matt paper (often 90–350 gsm with fold and lamination options)
            is the right buy for high-volume door drops and everyday takeaway menus. Premium special
            materials are a different job: fewer pieces, higher perceived value, and finishes that
            photography and letterbox campaigns rarely need.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Many Irish businesses mix both — standard A5 silk for a suburb door drop, then a short run
            of metallic or pearl leaflets for the launch night, hotel suite or bridal fair. Pair
            premium flyers with{' '}
            <Link href="/business-cards-ireland" className="text-blue-600 hover:underline">
              business cards
            </Link>{' '}
            or{' '}
            <Link href="/blog/poster-printing-ireland-guide" className="text-blue-600 hover:underline">
              poster printing
            </Link>{' '}
            when the same campaign needs desk and wall presence.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Artwork tips for metallic and pearl stocks
          </h2>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
            <li>Do not rely on white ink — it cannot print on metallic or pearl paper</li>
            <li>Prefer dark, saturated colours for body text and logos</li>
            <li>Leave busy photographic backgrounds for sulfate or PVC if contrast is weak</li>
            <li>Choose single-sided when the reverse of a metallic sheet would fight the design</li>
            <li>Request a quote with size, material, sides and quantity so the team can advise</li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-4">
            The online configurator defaults to Metallic Gold, A5 and double-sided printing with a
            quantity of 100 — a sensible starting point for a boutique launch or wedding stationery
            sample pack. Adjust from there; larger A4 property sheets or waterproof PVC festival cards
            need different specs.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            If your campaign also needs wall or exhibition presence, pair leaflets with{' '}
            <Link href="/blog/foamex-boards-ireland-guide" className="text-blue-600 hover:underline">
              foamex boards
            </Link>{' '}
            or{' '}
            <Link href="/blog/roll-up-banners-ireland-guide" className="text-blue-600 hover:underline">
              roll-up banners
            </Link>
            . Keep the same brand colours across all pieces so the metallic flyer and the stand graphic
            feel like one kit rather than three unrelated prints.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Quantities, quotes and what to send
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Premium leaflets are configured to order — there is no published case-pack price like plain
            wholesale packaging. Start with the material, size, printing sides and quantity you need,
            then request a quote through the product page. A 100-piece A5 metallic run is a common
            starting conversation for Irish boutiques and venues; larger campaigns scale from there.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Send print-ready artwork at the finished size, with bleed if your design goes edge-to-edge,
            and note which colours are critical on reflective stock. If you are unsure whether gold,
            silver, pearl or PVC fits the venue, say so in the quote — Ashbourne can advise from the
            same specification list used in this guide.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Delivery across Ireland from Ashbourne
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            PrintNPack is based in Ashbourne, Co. Meath — convenient for Dublin and Meath collections,
            with nationwide dispatch for Cork, Galway, Limerick and every other county. Premium leaflet
            jobs are made to your material and size choice, so lead time is confirmed with the quote
            rather than treated as same-day warehouse stock.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            UK or Europe shipping is only confirmed case-by-case on request; this guide focuses on Irish
            delivery, which is the core service for these special-material leaflets.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How to order premium leaflets in Ireland
          </h2>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-8">
            <li>Decide the job — wedding, hotel, luxury retail, outdoor waterproof handout</li>
            <li>Pick metallic, pearl, sulfate cardboard or PVC paper from the table above</li>
            <li>Choose A7, A6, Medium Square, DL, A5 or A4 and single- or double-sided print</li>
            <li>Design with dark contrast colours if using metallic or pearl</li>
            <li>
              Configure and quote on{' '}
              <Link href={HUB_HREF} className="text-blue-600 hover:underline">
                premium leaflets Ireland
              </Link>
              , then take delivery or collect from Ashbourne
            </li>
          </ol>

          <div className="bg-slate-900 rounded-xl p-6 mb-8 text-white not-prose">
            <p className="font-semibold mb-1">Ready to print premium leaflets?</p>
            <p className="text-slate-400 text-sm mb-4">
              Metallic, pearl, sulfate cardboard and waterproof PVC leaflets — configured for Irish
              brands and delivered nationwide from Ashbourne.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={HUB_HREF}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Shop Premium Leaflets Ireland →
              </Link>
              <Link
                href="/quote"
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/blog/leaflet-printing-ireland-guide"
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Standard Leaflet Guide
              </Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6 not-prose">
            {[
              {
                q: 'Where can I order premium leaflets in Ireland?',
                a: 'PrintNPack prints premium special-material leaflets — metallic gold, silver and white, pearl marble, sulfate cardboard and PVC paper — with nationwide delivery from Ashbourne to Dublin, Cork, Galway and every county.',
              },
              {
                q: 'What premium leaflet materials are available?',
                a: 'Metallic Gold, Silver and White at 300 gsm; Pearl Marble and Sulfate Cardboard at 290 gsm; and PVC paper at 158, 234 or 276 gsm. PVC is tree-free, tear-resistant and waterproof.',
              },
              {
                q: 'What sizes can I order?',
                a: 'A6, A5, A4, DL | US, Medium Square and A7. A5 is the usual recommended size for most premium handouts. Single- or double-sided digital print is available.',
              },
              {
                q: 'Can white be printed on metallic or pearl paper?',
                a: 'No. White colours cannot be printed on metallic or pearl paper — design with dark contrasting colours instead.',
              },
              {
                q: 'Do you deliver premium leaflets to Dublin, Cork and Galway?',
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
              href: '/blog/leaflet-printing-ireland-guide',
              src: '/images/products/a5-leaflet.png',
              title: 'Leaflet Printing Ireland: Sizes, Paper Stocks & Local Marketing',
            },
            {
              href: '/blog/poster-printing-ireland-guide',
              src: '/images/products/poster.png',
              title: 'Poster Printing Ireland Guide',
            },
            {
              href: '/blog/printing-ashbourne-guide',
              src: '/images/products/business-cards/business-cards-ireland-stack.jpg',
              title: 'Printing Ashbourne Guide — Local Print & Business Cards',
            },
            {
              href: '/blog/custom-printed-flags-ireland-sizes-buying-guide',
              src: '/images/products/custom-printed-flags/custom-printed-flags-ireland-gaa-club.jpg',
              title: 'Custom Printed Flags Ireland: Sizes & Club Buying Guide',
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
