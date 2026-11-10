import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/custom-sweatshirts-ireland-sizes-moq-buying-guide`;
const HUB_HREF = '/clothing/custom-sweatshirts-ireland';
const HERO_IMAGE = '/images/apparel/HOODIE MOCK UP 1.jpg';
const IMAGE_2 = '/images/apparel/HOODIE MOCK UP 2.jpg';
const IMAGE_3 = '/images/apparel/HOODIE MOCK UP 3.jpg';
const IMAGE_4 = '/images/apparel/HOODIE MOCK UP 4.jpg';
const IMAGE_5 = '/images/apparel/HOODIE MOCK UP 5.jpg';
const HOODIE_GUIDE_IMAGE = '/images/apparel/HOODIE MOCK UP 2.jpg';
const POLO_IMAGE =
  '/images/apparel/custom-polo-shirts-ireland-embroidered-events-uniform.jpg';
const SPORTSWEAR_IMAGE =
  '/images/apparel/custom-printed-sportswear-ireland-dublin-running-club.jpg';
const TSHIRT_IMAGE = '/images/apparel/TSHIRT MOCK UP 1.jpg';

const FROM_PRICE = '36.00';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Custom Sweatshirts Ireland: Crew Neck, 17 Colours, Sizes S–3XL & MOQ Buying Guide',
  description:
    'A practical buying guide to custom sweatshirts in Ireland — Fruit of the Loom Set-in Sweats crew neck, 17 stock colours, print or embroidery from €36, same price S–3XL, MOQ from 5, with nationwide delivery from Ashbourne for staff uniforms, merch and clubs.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-11-10',
  dateModified: '2026-11-10',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I buy custom sweatshirts in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: `PrintNPack supplies printed and embroidered custom sweatshirts across Ireland from Ashbourne, Co. Meath. Fruit of the Loom Set-in Sweats crew neck, 17 stock colours, from €${FROM_PRICE} for a single placement, same price S–3XL, minimum 5 pieces, with nationwide delivery.`,
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a sweatshirt and a hoodie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A sweatshirt is a crew-neck fleece with sleeves and no hood. A hoodie adds a hood and usually a pouch pocket. PrintNPack prices both from €36 for a single placement, but sweatshirts suit indoor staff uniforms and lighter merch where a hood is unnecessary.',
      },
    },
    {
      '@type': 'Question',
      name: 'What sizes of custom sweatshirts are available in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sizes run S, M, L, XL, XXL, 2XL and 3XL at the same unit price. Mix sizes in one order so staff teams, clubs and merch shops get a full size run without a surcharge on larger garments.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the minimum order for custom sweatshirts in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: `The minimum order is 5 pieces. Quantity bands then step 5–10, 11–20, 21–30, 31–40, 41–50 and 51+, with 8% off each quantity step. Extra print areas are +€1.50. A single placement starts from €${FROM_PRICE}.`,
      },
    },
    {
      '@type': 'Question',
      name: 'Do you deliver custom sweatshirts across Ireland?',
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
      name: 'Custom Sweatshirts Ireland Buying Guide',
      item: PAGE_URL,
    },
  ],
};

const colourRows = [
  {
    group: 'Core neutrals',
    colours: 'White · Heather · Black · Steel Grey',
    use: 'Office staff, retail floors and laundry-friendly everyday kits',
  },
  {
    group: 'Navy & blues',
    colours: 'Deep Navy · Navy · Royal Blue · Sapphire Blue',
    use: 'Corporate teams, club colours and Dublin hospitality crews',
  },
  {
    group: 'Reds & pinks',
    colours: 'Burgundy · Red · Fire Red · Hot Pink · Baby Pink · Plum',
    use: 'Brand accents, charity kits and youth club merch',
  },
  {
    group: 'Greens & orange',
    colours: 'Bottle Green · Kelly Green · Orange Crush',
    use: 'GAA-adjacent club colours, landscaping teams and event crews',
  },
];

const buyerRows = [
  {
    buyer: 'Staff uniforms',
    use: 'Indoor crews who need sleeves without a hood for warehouses, shops and offices',
  },
  {
    buyer: 'Merch & ecommerce',
    use: 'Crew-neck drops that sit lighter than a hoodie for online shops and launches',
  },
  {
    buyer: 'Clubs & schools',
    use: 'Crest or back-print training kits where a hood is not required indoors',
  },
  {
    buyer: 'Events & giveaways',
    use: 'Short-run branded fleeces for volunteers, sponsors and promo packs',
  },
];

const compareRows = [
  {
    style: 'Custom sweatshirts',
    detail: 'Crew neck Set-in Sweats · 17 colours · from €36 · no hood',
  },
  {
    style: 'Custom hoodies',
    detail: 'Classic + Electric · from €36 · hooded winter and merch staple',
  },
  {
    style: 'Custom polo shirts',
    detail: 'From €19 · collared hospitality and golf uniforms',
  },
  {
    style: 'Custom sportswear',
    detail: 'AWDis Cool T from €16.50 · moisture-wicking club kits',
  },
  {
    style: 'Custom t-shirts',
    detail: 'From €15 chest print · softer promotional feel for events',
  },
];

export default function CustomSweatshirtsIrelandSizesMoqBuyingGuide() {
  const title =
    'Custom Sweatshirts Ireland: Crew Neck, 17 Colours, Sizes S–3XL & MOQ Buying Guide';
  const description = `How to buy custom sweatshirts in Ireland — Fruit of the Loom Set-in Sweats crew neck, 17 stock colours, print or embroidery from €${FROM_PRICE}, same price S–3XL, MOQ from 5, with nationwide delivery from Ashbourne for staff uniforms, merch and clubs.`;

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="custom sweatshirts ireland, printed sweatshirts dublin, branded sweatshirts cork, crew neck sweatshirts galway, fruit of the loom set-in sweats ashbourne, company sweatshirts ireland, sweatshirt moq ireland, embroidered sweatshirts ireland, staff sweatshirts ireland, merch sweatshirts ireland"
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
          content="Custom sweatshirts Ireland — branded Fruit of the Loom crew neck for Dublin staff and merch"
        />
        <meta property="article:published_time" content="2026-11-10" />

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
          <span className="text-slate-900">Custom Sweatshirts Ireland</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            Apparel Guide
          </span>
          <span className="text-slate-400 text-sm">10 Nov 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Custom Sweatshirts Ireland: Crew Neck, 17 Colours, Sizes S–3XL &amp; MOQ Buying Guide
        </h1>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="relative rounded-2xl overflow-hidden h-48 col-span-2">
            <Image
              src={HERO_IMAGE}
              alt="Custom sweatshirts Ireland — branded Fruit of the Loom crew neck for Dublin staff uniforms"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 66vw, 512px"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative rounded-xl overflow-hidden flex-1">
              <Image
                src={IMAGE_2}
                alt="Printed sweatshirts Ireland — navy crew neck with company logo for Cork retail teams"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden flex-1">
              <Image
                src={IMAGE_3}
                alt="Branded sweatshirts Ireland — crew neck merch kit for Galway clubs and offices"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            A sweatshirt sits between a t-shirt and a hoodie — sleeves and warmth, without the hood.
            This guide explains how to buy{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              custom sweatshirts in Ireland
            </Link>
            : Fruit of the Loom Set-in Sweats crew necks, the seventeen stock colours, print or
            embroidery placements, the S–3XL size run at one price, and what the five-piece MOQ
            includes. Live from-prices start at €{FROM_PRICE} for a single placement, with nationwide
            delivery from Ashbourne.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            What you get: Set-in Sweats crew neck with print or embroidery
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            PrintNPack sweatshirts are <strong>Fruit of the Loom Set-in Sweats</strong> — a 280gsm
            cotton/poly crew neck with set-in sleeves. The stock card covers seventeen colours from
            white and heather through navy, burgundy, kelly green, sapphire blue, hot pink and orange
            crush. V-neck and mock neck are available on request when a crew neck is not the right
            finish.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            You can screen print, digitally print or embroider on the chest, back and sleeve. Proofs
            go out before production so Dublin, Cork and Galway teams can check placement and colour.
            Extra print areas are +€1.50 on top of the single-placement from-price. For the wider
            apparel range — t-shirts, polos, hoodies, sportswear and hi-viz — start with the{' '}
            <Link
              href="/blog/branded-clothing-ireland-guide"
              className="text-blue-600 hover:underline"
            >
              branded clothing Ireland guide
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Who buys custom sweatshirts in Ireland?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Most orders come from buyers who want a warmer garment than a tee, without the bulk or
            outdoor look of a hood. PrintNPack supplies sweatshirts nationwide from Ashbourne, Co.
            Meath.
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
            Seventeen stock colours for Irish kits
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            The Set-in Sweats card is wider than many hoodie Classic ranges — useful when brand
            guidelines call for plum, sapphire, steel grey or kelly green rather than a shortlist of
            navy and black.
          </p>
          <div className="overflow-x-auto mb-6 not-prose">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-3 pr-4 font-semibold text-slate-900">Group</th>
                  <th className="py-3 pr-4 font-semibold text-slate-900">Colours</th>
                  <th className="py-3 font-semibold text-slate-900">Best for</th>
                </tr>
              </thead>
              <tbody>
                {colourRows.map((row) => (
                  <tr key={row.group} className="border-b border-slate-100">
                    <td className="py-3 pr-4 font-medium text-slate-800 whitespace-nowrap">
                      {row.group}
                    </td>
                    <td className="py-3 pr-4 text-slate-700">{row.colours}</td>
                    <td className="py-3 text-slate-700">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-700 leading-relaxed mb-8">
            Confirm the exact stock shade on the{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              custom sweatshirts Ireland
            </Link>{' '}
            page before you approve artwork — heather and baby pink print differently under screen
            versus embroidery.
          </p>

          <div className="relative rounded-2xl overflow-hidden h-56 mb-8 not-prose">
            <Image
              src={IMAGE_4}
              alt="Custom sweatshirts Ireland — branded crew neck ready for Ashbourne nationwide orders"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Sizes S–3XL at the same price
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Every sweatshirt in the run is priced the same from <strong>S through 3XL</strong>{' '}
            (including XXL and 2XL). That matters when you kit a mixed office or club team — you are
            not penalised for ordering more large and XL pieces.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Mix sizes in one order against the five-piece minimum. Reorders for new starters or a
            second merch drop can reuse the same proof and colour, so Cork and Galway sites stay
            consistent with the Dublin set.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Print and embroidery placements
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            <strong>Embroidery</strong> suits a left-chest crest that needs to look permanent after
            repeated washes — corporate staff, retail floors and club kits.{' '}
            <strong>Screen print</strong> and <strong>digital print</strong> suit multi-colour
            artwork, large back prints, sleeve placements, and short-run merch where colour matching
            matters more than a stitched finish.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Common placement combos include chest only, large front, large back, one sleeve, chest +
            back, and chest + sleeves. Each extra area adds €1.50. Send a vector or high-resolution PNG
            and approve the proof before production starts.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-8 not-prose">
            <div className="relative rounded-2xl overflow-hidden h-44">
              <Image
                src={IMAGE_5}
                alt="Company sweatshirts Ireland — embroidered chest placement for Dublin office staff"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 384px"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden h-44">
              <Image
                src={IMAGE_2}
                alt="Merch sweatshirts Ireland — printed crew neck kit for Cork and Galway clubs"
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
            placement starts from €{FROM_PRICE}.
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
            <li>From €{FROM_PRICE} — single placement on Set-in Sweats stock</li>
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
            Sweatshirt vs hoodie vs polo vs sportswear vs t-shirt
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Pick the garment that matches the job. Sweatshirts are the crew-neck fleece option;
            hoodies add a hood at the same from-price; other lines cover collared uniforms, club
            performance kits and promo tees.
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
            hub, or compare garment types in the{' '}
            <Link
              href="/blog/custom-hoodies-ireland-sizes-moq-buying-guide"
              className="text-blue-600 hover:underline"
            >
              custom hoodies Ireland guide
            </Link>{' '}
            and{' '}
            <Link
              href="/blog/custom-sportswear-ireland-sizes-moq-buying-guide"
              className="text-blue-600 hover:underline"
            >
              custom sportswear Ireland guide
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Pair sweatshirts with other branded touchpoints
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Staff and club buyers often kit the garment with other PrintNPack lines:
          </p>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-6">
            <li>Custom sweatshirts for indoor staff, merch and crew-neck club kits</li>
            <li>
              Custom hoodies when a hood is needed for winter or outdoor drops —{' '}
              <Link
                href="/blog/custom-hoodies-ireland-sizes-moq-buying-guide"
                className="text-blue-600 hover:underline"
              >
                custom hoodies Ireland sizes &amp; MOQ guide
              </Link>
            </li>
            <li>
              Custom polo shirts for smarter daytime uniforms —{' '}
              <Link
                href="/blog/custom-polo-shirts-ireland-sizes-moq-buying-guide"
                className="text-blue-600 hover:underline"
              >
                custom polo shirts Ireland sizes &amp; MOQ guide
              </Link>
            </li>
            <li>
              Branded clothing overview for pricing across the full range —{' '}
              <Link
                href="/blog/branded-clothing-ireland-guide"
                className="text-blue-600 hover:underline"
              >
                branded clothing Ireland guide
              </Link>
            </li>
          </ol>

          <div className="relative rounded-2xl overflow-hidden h-52 mb-8 not-prose">
            <Image
              src={HERO_IMAGE}
              alt="Custom sweatshirts Ireland — branded crew neck ready for nationwide delivery from Ashbourne"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Delivery across Ireland from Ashbourne
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            PrintNPack ships custom sweatshirts from Ashbourne, Co. Meath to Dublin, Cork, Galway,
            Limerick and every county. Typical production is 3–5 business days after you approve the
            proof. Local buyers can also discuss collection from Co. Meath.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            UK or Europe delivery is not assumed in the Ireland workflow — ask when you need a quote
            outside Ireland or Northern Ireland.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How to order custom sweatshirts in Ireland
          </h2>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-8">
            <li>Choose a colour from the seventeen Set-in Sweats stock shades</li>
            <li>Pick sizes across S–3XL and set quantity from 5 upward</li>
            <li>Select print or embroidery, then chest, back and/or sleeve placements</li>
            <li>
              Open the{' '}
              <Link href={HUB_HREF} className="text-blue-600 hover:underline">
                custom sweatshirts Ireland
              </Link>{' '}
              page or send artwork via the{' '}
              <Link href="/quote" className="text-blue-600 hover:underline">
                free quote form
              </Link>
            </li>
            <li>Approve the proof, then take nationwide Ireland delivery from Ashbourne</li>
          </ol>

          <div className="bg-slate-900 rounded-xl p-6 mb-8 text-white not-prose">
            <p className="font-semibold mb-1">Ready to kit your team in branded sweatshirts?</p>
            <p className="text-slate-400 text-sm mb-4">
              Custom sweatshirts from €{FROM_PRICE} — Set-in Sweats crew neck, 17 colours, print or
              embroidery, same price S–3XL, MOQ 5, Ireland delivery from Ashbourne.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={HUB_HREF}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Custom Sweatshirts Ireland →
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
                q: 'Where can I buy custom sweatshirts in Ireland?',
                a: `PrintNPack supplies printed and embroidered custom sweatshirts across Ireland from Ashbourne, Co. Meath. Fruit of the Loom Set-in Sweats crew neck, 17 stock colours, from €${FROM_PRICE} for a single placement, same price S–3XL, minimum 5 pieces, with nationwide delivery.`,
              },
              {
                q: 'What is the difference between a sweatshirt and a hoodie?',
                a: 'A sweatshirt is a crew-neck fleece with sleeves and no hood. A hoodie adds a hood and usually a pouch pocket. PrintNPack prices both from €36 for a single placement, but sweatshirts suit indoor staff uniforms and lighter merch where a hood is unnecessary.',
              },
              {
                q: 'What sizes of custom sweatshirts are available in Ireland?',
                a: 'Sizes run S, M, L, XL, XXL, 2XL and 3XL at the same unit price. Mix sizes in one order so staff teams, clubs and merch shops get a full size run without a surcharge on larger garments.',
              },
              {
                q: 'What is the minimum order for custom sweatshirts in Ireland?',
                a: `The minimum order is 5 pieces. Quantity bands then step 5–10, 11–20, 21–30, 31–40, 41–50 and 51+, with 8% off each quantity step. Extra print areas are +€1.50. A single placement starts from €${FROM_PRICE}.`,
              },
              {
                q: 'Do you deliver custom sweatshirts across Ireland?',
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
              href: '/blog/custom-hoodies-ireland-sizes-moq-buying-guide',
              src: HOODIE_GUIDE_IMAGE,
              title: 'Custom Hoodies Ireland: Classic vs Electric & MOQ Buying Guide',
            },
            {
              href: '/blog/custom-polo-shirts-ireland-sizes-moq-buying-guide',
              src: POLO_IMAGE,
              title: 'Custom Polo Shirts Ireland: Sizes S–3XL & MOQ Buying Guide',
            },
            {
              href: '/blog/custom-sportswear-ireland-sizes-moq-buying-guide',
              src: SPORTSWEAR_IMAGE,
              title: 'Custom Sportswear Ireland: AWDis Cool T Sizes & MOQ Buying Guide',
            },
            {
              href: '/blog/branded-clothing-ireland-guide',
              src: TSHIRT_IMAGE,
              title: 'Branded Clothing Ireland: Promotional Wear & Workwear Guide',
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
