import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/custom-hiviz-workwear-ireland-sizes-moq-buying-guide`;
const HUB_HREF = '/clothing/custom-hiviz-workwear-ireland';
const HERO_IMAGE =
  '/images/apparel/custom-hiviz-workwear-ireland-construction-site.jpg';
const WAREHOUSE_IMAGE =
  '/images/apparel/custom-hiviz-vest-ireland-warehouse-logistics.jpg';
const EVENT_IMAGE = '/images/apparel/custom-hiviz-vest-ireland-event-crew.jpg';
const ROAD_IMAGE = '/images/apparel/custom-hiviz-vest-ireland-roadworks.jpg';
const SECURITY_IMAGE =
  '/images/apparel/custom-hiviz-vest-ireland-event-security.jpg';
const CLOTHING_GUIDE_IMAGE = '/images/apparel/POLO SHIRT MOCK UP 1.jpg';
const POLO_IMAGE =
  '/images/apparel/custom-polo-shirts-ireland-embroidered-events-uniform.jpg';
const GLOVES_IMAGE = '/images/plain-packaging/170054.webp';
const REFUSE_IMAGE = '/images/plain-packaging/150003.webp';

const FROM_PRICE = '12.00';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Hi-Viz Workwear Ireland: EN ISO 20471 Class 2, Colours, Sizes S–3XL & MOQ Buying Guide',
  description:
    'A practical buying guide to custom hi-viz workwear in Ireland — DMS tabards, EN ISO 20471 Class 2, yellow to black stock colours, print or embroidery from €12, same price S–3XL, MOQ from 5, with nationwide delivery from Ashbourne for sites, warehouses, road crews and events.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-11-03',
  dateModified: '2026-11-03',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I buy custom hi-viz workwear in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: `PrintNPack supplies printed and embroidered hi-viz workwear across Ireland from Ashbourne, Co. Meath. DMS hi-vis tabards, EN ISO 20471 Class 2, from €${FROM_PRICE} for a chest logo, same price S–3XL, minimum 5 pieces, with nationwide delivery.`,
      },
    },
    {
      '@type': 'Question',
      name: 'What colours of hi-viz vests are available in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'DMS stock colours are Yellow, Orange, Pink, Royal Blue, Red and Black. Yellow and orange suit construction and roadworks; pink is common for event crews; royal blue, red and black suit warehouses, traffic roles and event security.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are PrintNPack hi-viz vests EN ISO 20471 compliant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The DMS hi-vis tabards are EN ISO 20471 Class 2 with 50 mm reflective tape. Class 3 options can be quoted on request when a higher visibility class is required for the site.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the minimum order for custom hi-viz workwear in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: `The minimum order is 5 pieces. Quantity bands then step 5–10, 11–20, 21–30, 31–40, 41–50 and 51+, with 8% off each quantity step. Extra print areas are +€1.50. A single chest placement starts from €${FROM_PRICE}.`,
      },
    },
    {
      '@type': 'Question',
      name: 'Do you deliver hi-viz workwear across Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. PrintNPack ships from Ashbourne, Co. Meath to Dublin, Cork, Galway and every county, typically within a 3–5 business day turnaround after proof approval. UK or Europe delivery is quoted separately on request.',
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
      name: 'Hi-Viz Workwear Ireland Buying Guide',
      item: PAGE_URL,
    },
  ],
};

const colourRows = [
  {
    colour: 'Yellow · Orange',
    use: 'Construction sites, roadworks and traffic management where high contrast is required',
  },
  {
    colour: 'Pink',
    use: 'Festival, race and event crews who need to stand out from site yellow',
  },
  {
    colour: 'Royal Blue · Red',
    use: 'Warehouses, logistics teams and roles that need colour coding by department',
  },
  {
    colour: 'Black',
    use: 'Event security and dark-uniform brands that still need reflective tape',
  },
];

const buyerRows = [
  {
    buyer: 'Construction & fit-out',
    use: 'Yellow Class 2 tabards with a chest company logo for site visitors and trades',
  },
  {
    buyer: 'Warehouses & logistics',
    use: 'Orange or royal blue vests for pickers, drivers and yard teams',
  },
  {
    buyer: 'Roadworks & traffic',
    use: 'Orange or yellow with back print so crews stay visible on Irish roads',
  },
  {
    buyer: 'Festivals & event security',
    use: 'Pink crew tabards or black security vests with short-run printed logos',
  },
];

const compareRows = [
  {
    style: 'Hi-viz workwear',
    detail: 'DMS tabards from €12 · EN ISO 20471 Class 2 · sites, roads and event security',
  },
  {
    style: 'Custom polo shirts',
    detail: 'Fruit of the Loom 65/35 · from €19 · embroidery or print · collared staff look',
  },
  {
    style: 'Custom sportswear',
    detail: 'AWDis Cool T from €16.50 · moisture-wicking · clubs and training kits',
  },
  {
    style: 'Custom t-shirts',
    detail: 'From €15 chest print · softer promotional feel · events and giveaways',
  },
];

export default function CustomHivizWorkwearIrelandSizesMoqBuyingGuide() {
  const title =
    'Hi-Viz Workwear Ireland: EN ISO 20471 Class 2, Colours, Sizes S–3XL & MOQ Buying Guide';
  const description = `How to buy custom hi-viz workwear in Ireland — DMS tabards, EN ISO 20471 Class 2, yellow to black colours, print or embroidery from €${FROM_PRICE}, same price S–3XL, MOQ from 5, with nationwide delivery from Ashbourne for sites, warehouses, road crews and events.`;

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="hi viz workwear ireland, custom hi vis vests dublin, printed safety vests cork, branded hi viz tabards galway, event hi vis ireland, construction hi viz ashbourne, en iso 20471 class 2 ireland, hi viz printing ireland, company safety vest ireland, hi viz moq ireland"
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
          content="Custom hi-viz workwear Ireland — yellow printed safety vest on a Dublin construction site"
        />
        <meta property="article:published_time" content="2026-11-03" />

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
          <span className="text-slate-900">Hi-Viz Workwear Ireland</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            Apparel Guide
          </span>
          <span className="text-slate-400 text-sm">3 Nov 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Hi-Viz Workwear Ireland: EN ISO 20471 Class 2, Colours, Sizes S–3XL &amp; MOQ Buying
          Guide
        </h1>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="relative rounded-2xl overflow-hidden h-48 col-span-2">
            <Image
              src={HERO_IMAGE}
              alt="Custom hi-viz workwear Ireland — yellow printed safety vest on a construction site for Dublin"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 66vw, 512px"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative rounded-xl overflow-hidden flex-1">
              <Image
                src={WAREHOUSE_IMAGE}
                alt="Custom hi-vis vest Ireland — orange warehouse and logistics workwear with company logo for Cork"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden flex-1">
              <Image
                src={EVENT_IMAGE}
                alt="Printed pink hi-viz vest Ireland — event crew safety tabard for Galway festivals"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Hi-viz is the garment Irish sites, warehouses, road crews and event teams put on first —
            then brand with a company name so visitors, contractors and security are easy to spot.
            This guide explains how to buy{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              custom hi-viz workwear in Ireland
            </Link>
            : DMS tabards, EN ISO 20471 Class 2 reflective tape, the six stock colours, print versus
            embroidery, and the S–3XL size run at one price. Live from-prices start at €{FROM_PRICE}{' '}
            for a single chest placement, with nationwide delivery from Ashbourne.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            What you get: DMS Class 2 tabards with print or embroidery
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            PrintNPack hi-viz is supplied as DMS hi-vis tabards / safety vests with 50 mm reflective
            tape to <strong>EN ISO 20471 Class 2</strong>. Class 3 can be quoted on request when a
            site specification asks for a higher class. You can print or embroider on the chest, back
            or sleeve. Six stock colours cover yellow, orange, pink, royal blue, red and black.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Proofs go out before stitch or print so Dublin, Cork and Galway teams can check placement
            and colour. Extra print areas are +€1.50 on top of the single-placement from-price. For
            the wider apparel range — t-shirts, polos, sportswear and hoodies — start with the{' '}
            <Link
              href="/blog/branded-clothing-ireland-guide"
              className="text-blue-600 hover:underline"
            >
              branded clothing Ireland guide
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Who buys custom hi-viz workwear in Ireland?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Most orders come from businesses that need visible, branded PPE for daily site access
            rather than a one-off promo tee. PrintNPack supplies hi-viz nationwide from Ashbourne,
            Co. Meath.
          </p>
          <div className="overflow-x-auto mb-8 not-prose">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-3 pr-4 font-semibold text-slate-900">Buyer</th>
                  <th className="py-3 font-semibold text-slate-900">Typical use</th>
                </tr>
              </thead>
              <tbody>
                {buyerRows.map((row) => (
                  <tr key={row.buyer} className="border-b border-slate-100">
                    <td className="py-3 pr-4 font-medium text-slate-800 whitespace-nowrap">
                      {row.buyer}
                    </td>
                    <td className="py-3 text-slate-700">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Stock colours for Irish sites and events
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Pick a colour that matches site rules and makes your logo readable. The six DMS colours
            group naturally by sector:
          </p>
          <div className="overflow-x-auto mb-6 not-prose">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-3 pr-4 font-semibold text-slate-900">Colours</th>
                  <th className="py-3 font-semibold text-slate-900">Best for</th>
                </tr>
              </thead>
              <tbody>
                {colourRows.map((row) => (
                  <tr key={row.colour} className="border-b border-slate-100">
                    <td className="py-3 pr-4 font-medium text-slate-800">{row.colour}</td>
                    <td className="py-3 text-slate-700">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-700 leading-relaxed mb-8">
            Construction and roadworks usually lock yellow or orange; festival crews often want pink
            so they are not mistaken for site contractors; security teams favour black with
            reflective tape. Confirm the exact stock shade on the{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              hi-viz workwear Ireland
            </Link>{' '}
            page before you approve artwork.
          </p>

          <div className="relative rounded-2xl overflow-hidden h-56 mb-8 not-prose">
            <Image
              src={ROAD_IMAGE}
              alt="Custom hi-viz vest Ireland — royal blue roadworks and traffic management vest for Ashbourne orders"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Sizes S–3XL at the same price
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Every vest in the run is priced the same from <strong>S through 3XL</strong> (including
            XXL and 2XL). That matters when you kit a mixed site crew or festival team — you are not
            penalised for ordering more large and XL pieces.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Mix sizes in one order against the five-piece minimum. Reorders for new starters or
            seasonal event staff can reuse the same proof and colour, so Cork and Galway sites stay
            consistent with the Dublin set.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Print vs embroidery on hi-viz vests
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            <strong>Print</strong> is the usual choice for multi-colour logos, larger back text such
            as “SITE TEAM” or “SECURITY”, and short-run event kits where turnaround matters.{' '}
            <strong>Embroidery</strong> suits a compact left-chest company crest that needs to look
            permanent after repeated washes on warehouse and logistics uniforms.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Common placement combos include chest only, large front, large back, one sleeve, chest +
            back, and chest + sleeves. Each extra area adds €1.50. Send a vector or high-resolution PNG
            and approve the proof before production starts.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-8 not-prose">
            <div className="relative rounded-2xl overflow-hidden h-44">
              <Image
                src={EVENT_IMAGE}
                alt="Event hi-viz Ireland — pink printed festival crew tabard for Dublin and Cork events"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 384px"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden h-44">
              <Image
                src={SECURITY_IMAGE}
                alt="Black hi-viz vest Ireland — event security printed safety workwear for Galway venues"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 384px"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            MOQ, quantity steps and from-price
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            The smallest order is <strong>5 pieces</strong>. Quantity bands then step 5–10, 11–20,
            21–30, 31–40, 41–50 and 51+, with <strong>8% off each quantity step</strong>. A single
            chest print or embroidery starts from €{FROM_PRICE}.
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
            <li>From €{FROM_PRICE} — single chest placement on a DMS hi-vis tabard</li>
            <li>Extra print areas +€1.50 each</li>
            <li>Same unit price on every size S–3XL</li>
            <li>Typical turnaround 3–5 business days after proof</li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-8">
            Multi-placement kits and larger bands change the line total. Use the live quote on the
            product page or the{' '}
            <Link href="/quote" className="text-blue-600 hover:underline">
              free quote form
            </Link>{' '}
            — do not invent catalogue rates from this guide beyond the published from-prices.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Hi-viz vs polo vs sportswear vs t-shirt
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Pick the garment that matches the job. Hi-viz covers site visibility; other lines cover
            collared staff uniforms, club kits and promo tees.
          </p>
          <div className="overflow-x-auto mb-6 not-prose">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-3 pr-4 font-semibold text-slate-900">Garment</th>
                  <th className="py-3 font-semibold text-slate-900">How it differs</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row) => (
                  <tr key={row.style} className="border-b border-slate-100">
                    <td className="py-3 pr-4 font-medium text-slate-800 whitespace-nowrap">
                      {row.style}
                    </td>
                    <td className="py-3 text-slate-700">{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-700 leading-relaxed mb-8">
            Browse the full range on the{' '}
            <Link href="/clothing" className="text-blue-600 hover:underline">
              branded clothing Ireland
            </Link>{' '}
            hub, or compare collared staff kits in the{' '}
            <Link
              href="/blog/custom-polo-shirts-ireland-sizes-moq-buying-guide"
              className="text-blue-600 hover:underline"
            >
              custom polo shirts Ireland buying guide
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Pair hi-viz with other site and event supplies
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Site and event buyers often kit visibility and day-to-day consumables together:
          </p>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-6">
            <li>Custom hi-viz tabards for crews, visitors and security</li>
            <li>
              Disposable gloves for warehouses and catering yards —{' '}
              <Link
                href="/blog/disposable-gloves-ireland-nitrile-vs-vinyl-buying-guide"
                className="text-blue-600 hover:underline"
              >
                disposable gloves Ireland nitrile vs vinyl guide
              </Link>
            </li>
            <li>
              Refuse sacks for site and venue clean-down —{' '}
              <Link
                href="/blog/refuse-sacks-ireland-buying-guide"
                className="text-blue-600 hover:underline"
              >
                refuse sacks Ireland buying guide
              </Link>
            </li>
            <li>
              Custom polo shirts for office or front-of-house staff —{' '}
              <Link
                href="/blog/custom-polo-shirts-ireland-sizes-moq-buying-guide"
                className="text-blue-600 hover:underline"
              >
                custom polo shirts Ireland sizes &amp; MOQ guide
              </Link>
            </li>
          </ol>

          <div className="relative rounded-2xl overflow-hidden h-52 mb-8 not-prose">
            <Image
              src={WAREHOUSE_IMAGE}
              alt="Branded hi-viz Ireland — orange warehouse logistics vest ready for nationwide delivery from Ashbourne"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Delivery across Ireland from Ashbourne
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            PrintNPack ships custom hi-viz workwear from Ashbourne, Co. Meath to Dublin, Cork,
            Galway, Limerick and every county. Typical production is 3–5 business days after you
            approve the proof. Local buyers can also discuss collection from Co. Meath.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            UK or Europe delivery is not assumed in the Ireland workflow — ask when you need a quote
            outside Ireland or Northern Ireland.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How to order custom hi-viz workwear in Ireland
          </h2>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-8">
            <li>Choose colour from the six DMS stock shades</li>
            <li>Pick sizes across S–3XL and set quantity from 5 upward</li>
            <li>Select print or embroidery, then chest, back and/or sleeve placements</li>
            <li>
              Open the{' '}
              <Link href={HUB_HREF} className="text-blue-600 hover:underline">
                hi-viz workwear Ireland
              </Link>{' '}
              page or send artwork via the{' '}
              <Link href="/quote" className="text-blue-600 hover:underline">
                free quote form
              </Link>
            </li>
            <li>Approve the proof, then take nationwide Ireland delivery from Ashbourne</li>
          </ol>

          <div className="bg-slate-900 rounded-xl p-6 mb-8 text-white not-prose">
            <p className="font-semibold mb-1">Ready to kit your crew in branded hi-viz?</p>
            <p className="text-slate-400 text-sm mb-4">
              Custom hi-viz workwear from €{FROM_PRICE} — DMS Class 2 tabards, print or embroidery,
              same price S–3XL, MOQ 5, Ireland delivery from Ashbourne.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={HUB_HREF}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Hi-Viz Workwear Ireland →
              </Link>
              <Link
                href="/quote"
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/clothing"
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                All Branded Clothing
              </Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6 not-prose">
            {[
              {
                q: 'Where can I buy custom hi-viz workwear in Ireland?',
                a: `PrintNPack supplies printed and embroidered hi-viz workwear across Ireland from Ashbourne, Co. Meath. DMS hi-vis tabards, EN ISO 20471 Class 2, from €${FROM_PRICE} for a chest logo, same price S–3XL, minimum 5 pieces, with nationwide delivery.`,
              },
              {
                q: 'What colours of hi-viz vests are available in Ireland?',
                a: 'DMS stock colours are Yellow, Orange, Pink, Royal Blue, Red and Black. Yellow and orange suit construction and roadworks; pink is common for event crews; royal blue, red and black suit warehouses, traffic roles and event security.',
              },
              {
                q: 'Are PrintNPack hi-viz vests EN ISO 20471 compliant?',
                a: 'Yes. The DMS hi-vis tabards are EN ISO 20471 Class 2 with 50 mm reflective tape. Class 3 options can be quoted on request when a higher visibility class is required for the site.',
              },
              {
                q: 'What is the minimum order for custom hi-viz workwear in Ireland?',
                a: `The minimum order is 5 pieces. Quantity bands then step 5–10, 11–20, 21–30, 31–40, 41–50 and 51+, with 8% off each quantity step. Extra print areas are +€1.50. A single chest placement starts from €${FROM_PRICE}.`,
              },
              {
                q: 'Do you deliver hi-viz workwear across Ireland?',
                a: 'Yes. PrintNPack ships from Ashbourne, Co. Meath to Dublin, Cork, Galway and every county, typically within a 3–5 business day turnaround after proof approval. UK or Europe delivery is quoted separately on request.',
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
              href: '/blog/branded-clothing-ireland-guide',
              src: CLOTHING_GUIDE_IMAGE,
              title: 'Branded Clothing Ireland: Promotional Wear & Workwear Guide',
            },
            {
              href: '/blog/custom-polo-shirts-ireland-sizes-moq-buying-guide',
              src: POLO_IMAGE,
              title: 'Custom Polo Shirts Ireland: Sizes, Embroidery & MOQ Guide',
            },
            {
              href: '/blog/disposable-gloves-ireland-nitrile-vs-vinyl-buying-guide',
              src: GLOVES_IMAGE,
              title: 'Disposable Gloves Ireland: Nitrile vs Vinyl Buying Guide',
            },
            {
              href: '/blog/refuse-sacks-ireland-buying-guide',
              src: REFUSE_IMAGE,
              title: 'Refuse Sacks Ireland: Sizes & Wholesale Buying Guide',
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
