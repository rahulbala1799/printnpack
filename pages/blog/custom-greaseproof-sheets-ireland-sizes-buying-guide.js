import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/custom-greaseproof-sheets-ireland-sizes-buying-guide`;
const HUB_HREF = '/greaseproof-sheets-ireland';
const HERO_IMAGE = '/images/products/greaseproof-sheets/greaseproof-sheets-ireland-branded-burger-wrap.jpg';
const BAKERY_IMAGE = '/images/products/greaseproof-sheets/greaseproof-sheets-ireland-bakery-tray-liner.jpg';
const TRAY_IMAGE = '/images/products/greaseproof-sheets/greaseproof-sheets-ireland-burger-tray-liner.png';
const SANDWICH_IMAGE = '/images/products/greaseproof-sheets/greaseproof-sheets-ireland-sandwich-wrap.png';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Custom Greaseproof Sheets Ireland: Sizes, MOQ & Buying Guide',
  description:
    'How to buy custom printed greaseproof sheets in Ireland — sheet sizes from 14×14 cm to 43×31.5 cm, 500-piece MOQ, 1/2/full colour food-safe print on 45 gsm white paper, and nationwide delivery from Ashbourne.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-09-19',
  dateModified: '2026-09-19',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I order custom printed greaseproof sheets in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack supplies custom printed greaseproof sheets for takeaways, restaurants, bakeries and delis across Ireland. Configure size, print colours and quantity on the greaseproof sheets product page — delivery from Ashbourne, Co. Meath to Dublin, Cork, Galway and nationwide.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the minimum order for printed greaseproof paper?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The minimum order quantity is 500 pieces. That MOQ applies across size and printing options — 1 colour PMS, 2 colour PMS or full colour digital.',
      },
    },
    {
      '@type': 'Question',
      name: 'What greaseproof sheet sizes are available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standard sizes include 14 × 14 cm, 15 × 30 cm, 21.5 × 31.5 cm, 30 × 45 cm, 35 × 45 cm and 43 × 31.5 cm. Circle sizes for plates are available on request. Pick the sheet that matches wrapping, tray lining or plating — not the largest option by default.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you print full-colour backgrounds on greaseproof sheets?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The stock is white 45 gsm greaseproof paper, so background colour printing is not possible. Artwork prints onto the white sheet in 1 colour PMS, 2 colour PMS or full colour digital using food-safe inks.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you deliver greaseproof sheets to Dublin, Cork and Galway?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. PrintNPack delivers custom printed greaseproof sheets to Dublin, Cork, Galway and every Irish county from Ashbourne, Co. Meath. Local buyers can also discuss collection.',
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
      name: 'Custom Greaseproof Sheets Ireland Buying Guide',
      item: PAGE_URL,
    },
  ],
};

const sizeRows = [
  {
    size: '14 × 14 cm',
    use: 'Small wraps, plate liners, compact burger or pastry portions',
  },
  {
    size: '15 × 30 cm',
    use: 'Sandwich wraps, longer deli rolls, narrow tray liners',
  },
  {
    size: '21.5 × 31.5 cm',
    use: 'Standard takeaway wraps and mid-size tray lining',
  },
  {
    size: '30 × 45 cm',
    use: 'Larger burgers, shared trays, bakery display liners',
  },
  {
    size: '35 × 45 cm',
    use: 'Wide trays, chip baskets, multi-item takeaway presentation',
  },
  {
    size: '43 × 31.5 cm',
    use: 'Wide rectangular trays and counter service lining',
  },
];

export default function CustomGreaseproofSheetsIrelandSizesBuyingGuide() {
  const title = 'Custom Greaseproof Sheets Ireland: Sizes, MOQ & Buying Guide';
  const description =
    'How to buy custom printed greaseproof sheets in Ireland — sizes from 14×14 cm to 43×31.5 cm, 500-piece MOQ, 1/2/full colour food-safe print on 45 gsm white paper, and nationwide delivery from Ashbourne.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="custom greaseproof sheets ireland, printed greaseproof paper ireland, branded greaseproof paper dublin, greaseproof sheet sizes ireland, greaseproof paper moq ireland, takeaway greaseproof wrap ireland, bakery greaseproof liner cork, custom food wrap galway, food safe printed greaseproof ashbourne"
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
          content="Custom greaseproof sheets Ireland — branded burger wrap on white greaseproof paper"
        />
        <meta property="article:published_time" content="2026-09-19" />

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
          <span className="text-slate-900">Custom Greaseproof Sheets Ireland</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            Retail Guide
          </span>
          <span className="text-slate-400 text-sm">19 Sep 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Custom Greaseproof Sheets Ireland: Sizes, MOQ &amp; Buying Guide
        </h1>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="relative rounded-2xl overflow-hidden h-48 col-span-2 bg-slate-50">
            <Image
              src={HERO_IMAGE}
              alt="Custom greaseproof sheets Ireland — branded white greaseproof burger wrap for Dublin takeaways"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 66vw, 512px"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={BAKERY_IMAGE}
                alt="Printed greaseproof sheets Ireland Cork — bakery tray liner with custom logo"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={TRAY_IMAGE}
                alt="Greaseproof paper Ireland Galway — custom pattern lining a burger tray"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Custom greaseproof sheets sit under the burger, around the sandwich and on the bakery tray —
            which means your logo travels with every order without the cost of a fully printed box.
            The buying mistake Irish kitchens make is ordering the wrong sheet size or treating print
            options as an afterthought.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            This guide explains how to buy <strong>custom printed greaseproof sheets in Ireland</strong>{' '}
            — which sizes suit wraps versus trays, how the 500-piece MOQ works, what 1 colour, 2 colour
            and full colour printing mean on white 45 gsm stock, and how{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              PrintNPack&apos;s greaseproof sheets
            </Link>{' '}
            quote builder fits takeaways, bakeries and restaurants from Ashbourne.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Who this guide is for
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            This is a branded food-wrap buying guide for Irish operators who already know they want
            print on the sheet — not a materials essay. It is written for:
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-8">
            <li>Burger and fast-food takeaways lining trays and baskets every service</li>
            <li>Delis and sandwich shops that wrap to go for Dublin, Cork and Galway lunch trade</li>
            <li>Bakeries and patisseries needing branded tray liners for counter and collection</li>
            <li>Cafés, food trucks and caterers who want logo visibility without a full packaging redesign</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Why printed greaseproof beats plain wrap for brand visibility
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Plain greaseproof still belongs in many kitchens — especially when you only need grease
            protection. Printed sheets earn their place when the wrap is visible on Instagram, in
            delivery photos or on the counter. One repeating logo pattern turns a disposable liner
            into a brand touchpoint.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Many Irish food businesses run a mixed pack: printed greaseproof for customer-facing wraps
            and trays, and plain wholesale wrap or{' '}
            <Link href="/blog/greenspirit-eco-packaging-ireland" className="text-blue-600 hover:underline">
              Greenspirit compostable greaseproof
            </Link>{' '}
            for back-of-house or high-volume unbranded lines. That split keeps brand spend focused where
            customers actually see it.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Greaseproof sheet sizes Ireland — match the sheet to the job
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Start with how you use the sheet, not the largest size on the list. Oversized liners waste
            paper and look crumpled; undersized wraps tear or leave tray edges uncovered.
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
            Circle sizes for plates are available on request — mention them in the quote if you dress
            plates rather than wrap. If your tray or wrap falls between listed sizes, ask the team
            before forcing an awkward fold; the right sheet saves time on the pass.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Material and print limits on white 45 gsm stock
          </h2>
          <div className="relative rounded-2xl overflow-hidden h-56 bg-slate-50 mb-6 not-prose">
            <Image
              src={SANDWICH_IMAGE}
              alt="Branded greaseproof sandwich wrap Ireland Ashbourne — custom printed deli sheets"
              fill
              className="object-contain p-6"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </div>
          <p className="text-slate-700 leading-relaxed mb-4">
            PrintNPack prints on <strong>white greaseproof paper at 45 gsm</strong> — food grade,
            microwaveable and resistant to heat or cold. That makes it suitable for hot burgers,
            chilled sandwiches and bakery items that move from oven to counter.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Artwork uses <strong>food-safe inks</strong> in three print routes:
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
            <li>
              <strong>1 colour PMS</strong> — clean single-logo branding when one brand colour is enough
            </li>
            <li>
              <strong>2 colour PMS</strong> — two spot colours for logos that need a second accent
            </li>
            <li>
              <strong>Full colour digital</strong> — multi-colour logos and patterns without plates
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-8">
            Important limit: because the material is white, <strong>background colour printing is not
            possible</strong>. Your design prints onto the white sheet — plan artwork as logos and
            patterns on white, not as a flooded colour field that replaces the paper.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            MOQ, quantities and how to quote without guessing prices
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            The <strong>minimum order is 500 pieces</strong>. That MOQ applies whether you choose 1
            colour, 2 colour or full colour. It is low enough for independent Dublin cafés and Cork
            bakeries to brand a core wrap line without committing to industrial carton volumes.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Unit pricing depends on size, print route and quantity — we do not invent list prices here.
            Use the quote builder on the{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              greaseproof sheets Ireland
            </Link>{' '}
            page to select size, printing and quantity from 500 upwards, then request a quotation.
            Contact the team if you need mixed sizes across one brand run.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Where greaseproof sits beside bags and boxes
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Greaseproof sheets wrap and line — they do not replace a carry bag or a rigid box. Pair
            branded liners with{' '}
            <Link href="/blog/burger-boxes-ireland-guide" className="text-blue-600 hover:underline">
              burger boxes
            </Link>{' '}
            for sealed mains, or with{' '}
            <Link href="/blog/sos-grab-bags-ireland-sizes-buying-guide" className="text-blue-600 hover:underline">
              SOS grab bags
            </Link>{' '}
            when the order leaves the counter. Many takeaways print the high-visibility wrap and keep
            outer bags plain until volume justifies custom bags.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            For a wider plain wholesale top-up — napkins, cups, foil and trays — see{' '}
            <Link href="/blog/plain-packaging-wholesale-ireland" className="text-blue-600 hover:underline">
              plain packaging wholesale Ireland
            </Link>
            . Printed greaseproof is the branding layer; plain case packs cover the rest of the pass.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Artwork tips that avoid reprint delays
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Supply a clear vector logo where possible and keep fine detail readable at the sheet size
            you choose — a tiny crest that works on a website can disappear on a folded 14 × 14 cm
            wrap. For repeating patterns, leave enough margin so folds do not cut through text.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Confirm PMS colours if you pick 1 or 2 colour printing; for full colour digital, send
            CMYK-ready artwork. Remember the white stock rule again at proof stage — if the mock-up
            shows a solid coloured background filling the sheet, that design will need adjusting before
            print.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Delivery across Ireland from Ashbourne
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            PrintNPack is based in Ashbourne, Co. Meath — convenient for Dublin and Meath collections,
            with nationwide dispatch for Cork, Galway, Limerick and every other county. Printed
            greaseproof is a made-to-order job, so allow production time after artwork approval rather
            than treating it like same-day warehouse stock.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Order greaseproof alongside other branded or plain lines when you can, so kitchen and brand
            stock arrive in a coordinated delivery rather than drip-fed cartons.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How to order custom greaseproof sheets in Ireland
          </h2>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-8">
            <li>Decide wrap versus tray versus plate use — that picks the sheet size</li>
            <li>Choose 1 colour PMS, 2 colour PMS or full colour digital for your logo</li>
            <li>Design for white stock — no flooded background colour</li>
            <li>Set quantity at 500 pieces or higher and request a quote on the product page</li>
            <li>Approve artwork, then take nationwide delivery or discuss Ashbourne collection</li>
          </ol>

          <div className="bg-slate-900 rounded-xl p-6 mb-8 text-white not-prose">
            <p className="font-semibold mb-1">Ready to brand your greaseproof wrap?</p>
            <p className="text-slate-400 text-sm mb-4">
              Configure size, print colours and quantity from 500 pieces — delivered across Ireland
              from Ashbourne.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={HUB_HREF}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Quote Greaseproof Sheets Ireland →
              </Link>
              <Link
                href="/products"
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Browse Products
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
                q: 'Where can I order custom printed greaseproof sheets in Ireland?',
                a: 'PrintNPack supplies custom printed greaseproof sheets for takeaways, restaurants, bakeries and delis across Ireland. Configure size, print colours and quantity on the greaseproof sheets product page — delivery from Ashbourne to Dublin, Cork, Galway and nationwide.',
              },
              {
                q: 'What is the minimum order for printed greaseproof paper?',
                a: 'The minimum order quantity is 500 pieces across size and printing options — 1 colour PMS, 2 colour PMS or full colour digital.',
              },
              {
                q: 'What greaseproof sheet sizes are available?',
                a: 'Standard sizes include 14 × 14 cm, 15 × 30 cm, 21.5 × 31.5 cm, 30 × 45 cm, 35 × 45 cm and 43 × 31.5 cm. Circle sizes for plates are available on request.',
              },
              {
                q: 'Can you print full-colour backgrounds on greaseproof sheets?',
                a: 'No. The stock is white 45 gsm greaseproof paper, so background colour printing is not possible. Artwork prints onto the white sheet with food-safe inks.',
              },
              {
                q: 'Do you deliver greaseproof sheets to Dublin, Cork and Galway?',
                a: 'Yes. We deliver custom printed greaseproof sheets to Dublin, Cork, Galway and all Irish counties from Ashbourne, Co. Meath.',
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
              href: '/blog/greenspirit-eco-packaging-ireland',
              src: '/images/plain-packaging/100103.webp',
              title: 'Greenspirit Eco Packaging Ireland: Compostable Cups, Cutlery & Greaseproof',
            },
            {
              href: '/blog/burger-boxes-ireland-guide',
              src: '/images/products/bagasse-burger-box/1.png',
              title: 'Burger Boxes Ireland: Plain vs Printed, Bagasse & Eco Options',
            },
            {
              href: '/blog/sos-grab-bags-ireland-sizes-buying-guide',
              src: '/images/products/sos-bags/1.png',
              title: 'SOS Grab Bags Ireland: Sizes, Plain vs Printed & Buying Guide',
            },
            {
              href: '/blog/plain-packaging-wholesale-ireland',
              src: '/images/products/food-container.png',
              title: 'Plain Packaging Wholesale Ireland: How to Buy Catering Supplies in Bulk',
            },
          ].map(({ href, src, title: relatedTitle }) => (
            <Link
              key={href}
              href={href}
              className="group flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors"
            >
              <div className="relative w-16 h-14 flex-shrink-0 rounded-lg overflow-hidden">
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
