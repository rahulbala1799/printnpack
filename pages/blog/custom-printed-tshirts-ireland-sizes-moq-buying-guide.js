import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/custom-printed-tshirts-ireland-sizes-moq-buying-guide`;
const HUB_HREF = '/clothing/custom-printed-tshirts-ireland';
const HERO_IMAGE = '/images/apparel/TSHIRT MOCK UP 1.jpg';
const IMAGE_2 = '/images/apparel/TSHIRT MOCK UP 2.jpg';
const IMAGE_3 = '/images/apparel/TSHIRT MOCK UP 3.jpg';
const IMAGE_4 = '/images/apparel/TSHIRT MOCK UP 4.jpg';
const IMAGE_5 = '/images/apparel/TSHIRT MOCK UP 5.jpg';
const SWEATSHIRT_IMAGE = '/images/apparel/HOODIE MOCK UP 1.jpg';
const POLO_IMAGE =
  '/images/apparel/custom-polo-shirts-ireland-embroidered-events-uniform.jpg';
const SPORTSWEAR_IMAGE =
  '/images/apparel/custom-printed-sportswear-ireland-dublin-running-club.jpg';
const HOODIE_IMAGE = '/images/apparel/HOODIE MOCK UP 2.jpg';

const FROM_PRICE = '15.00';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Custom Printed T-Shirts Ireland: Super Premium, 13 Colours, Sizes S–3XL & MOQ Buying Guide',
  description:
    'A practical buying guide to custom printed t-shirts in Ireland — Fruit of the Loom Super Premium, 13 stock colours, screen or digital print from €15, same price S–3XL, MOQ from 5, with nationwide delivery from Ashbourne for events, staff uniforms, GAA clubs and giveaways.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-11-12',
  dateModified: '2026-11-12',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I buy custom printed t-shirts in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: `PrintNPack supplies custom printed t-shirts across Ireland from Ashbourne, Co. Meath. Fruit of the Loom Super Premium stock, 13 colours, screen or digital print from €${FROM_PRICE} for a chest print, same price S–3XL, minimum 5 pieces, with nationwide delivery.`,
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a custom t-shirt and sportswear Cool T?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Custom printed t-shirts use Fruit of the Loom Super Premium cotton for everyday staff wear, events and giveaways, from €15. AWDis Cool T sportswear is moisture-wicking performance fabric for GAA, soccer, running and gym kits, from €16.50. Both share the same S–3XL price ladder and five-piece MOQ.',
      },
    },
    {
      '@type': 'Question',
      name: 'What sizes of custom printed t-shirts are available in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sizes run S, M, L, XL, XXL, 2XL and 3XL at the same unit price. Mix sizes in one order so event crews, clubs and staff teams get a full size run without a surcharge on larger garments.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the minimum order for custom printed t-shirts in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: `The minimum order is 5 pieces. Quantity bands then step 5–10, 11–20, 21–30, 31–40, 41–50 and 51+, with 8% off each quantity step. Extra print areas are +€1.50. A single chest print starts from €${FROM_PRICE}.`,
      },
    },
    {
      '@type': 'Question',
      name: 'Do you deliver custom printed t-shirts across Ireland?',
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
      name: 'Custom Printed T-Shirts Ireland Buying Guide',
      item: PAGE_URL,
    },
  ],
};

const colourRows = [
  {
    group: 'Core neutrals',
    colours: 'White · Black · Heather Grey · Light Graphite · Zinc',
    use: 'Events, giveaways, retail staff and laundry-friendly everyday kits',
  },
  {
    group: 'Navy & blues',
    colours: 'Navy · Deep Navy · Royal Blue',
    use: 'Corporate teams, Dublin hospitality crews and club colours',
  },
  {
    group: 'Reds & greens',
    colours: 'Red · Burgundy · Bottle Green · Olive',
    use: 'Brand accents, GAA-adjacent club colours and charity kits',
  },
  {
    group: 'Earth tone',
    colours: 'Chocolate',
    use: 'Café, brewery and lifestyle merch that needs a warmer base',
  },
];

const buyerRows = [
  {
    buyer: 'Events & giveaways',
    use: 'Short-run promo tees for festivals, launches, sponsors and volunteer packs',
  },
  {
    buyer: 'Staff uniforms',
    use: 'Lightweight everyday kits for shops, cafés, warehouses and office floors',
  },
  {
    buyer: 'Clubs & schools',
    use: 'Crest or back-print daywear where moisture-wicking sportswear is not required',
  },
  {
    buyer: 'Merch & ecommerce',
    use: 'Soft promotional drops for online shops, bands and brand launches',
  },
];

const compareRows = [
  {
    style: 'Custom printed t-shirts',
    detail: 'Super Premium · 13 colours · from €15 chest print · everyday cotton feel',
  },
  {
    style: 'Custom sportswear',
    detail: 'AWDis Cool T from €16.50 · moisture-wicking club and gym kits',
  },
  {
    style: 'Custom polo shirts',
    detail: 'From €19 · collared hospitality, golf and smarter uniforms',
  },
  {
    style: 'Custom sweatshirts',
    detail: 'Set-in Sweats from €36 · crew-neck fleece without a hood',
  },
  {
    style: 'Custom hoodies',
    detail: 'Classic + Electric from €36 · hooded winter and merch staple',
  },
];

export default function CustomPrintedTshirtsIrelandSizesMoqBuyingGuide() {
  const title =
    'Custom Printed T-Shirts Ireland: Super Premium, 13 Colours, Sizes S–3XL & MOQ Buying Guide';
  const description = `How to buy custom printed t-shirts in Ireland — Fruit of the Loom Super Premium, 13 stock colours, screen or digital print from €${FROM_PRICE}, same price S–3XL, MOQ from 5, with nationwide delivery from Ashbourne for events, staff uniforms, GAA clubs and giveaways.`;

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="custom printed t-shirts ireland, printed t-shirts dublin, branded t-shirts cork, promotional t-shirts galway, fruit of the loom super premium ashbourne, company t-shirts ireland, t-shirt moq ireland, event t-shirts ireland, staff t-shirts ireland, gaa club t-shirts ireland"
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
          content="Custom printed t-shirts Ireland — branded Fruit of the Loom Super Premium for Dublin events"
        />
        <meta property="article:published_time" content="2026-11-12" />

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
          <span className="text-slate-900">Custom Printed T-Shirts Ireland</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            Apparel Guide
          </span>
          <span className="text-slate-400 text-sm">12 Nov 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Custom Printed T-Shirts Ireland: Super Premium, 13 Colours, Sizes S–3XL &amp; MOQ Buying
          Guide
        </h1>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="relative rounded-2xl overflow-hidden h-48 col-span-2">
            <Image
              src={HERO_IMAGE}
              alt="Custom printed t-shirts Ireland — branded Fruit of the Loom Super Premium for Dublin events"
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
                alt="Printed t-shirts Ireland — navy promotional tee with company logo for Cork staff kits"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden flex-1">
              <Image
                src={IMAGE_3}
                alt="Branded t-shirts Ireland — Super Premium event kit for Galway clubs and giveaways"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Custom printed t-shirts are the workhorse of Irish branded clothing — lighter than a
            sweatshirt, smarter than a throwaway giveaway, and easy to kit across a mixed size run.
            This guide explains how to buy{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              custom printed t-shirts in Ireland
            </Link>
            : Fruit of the Loom Super Premium stock, the thirteen colours, screen or digital print
            placements, the S–3XL size run at one price, and what the five-piece MOQ includes. Live
            from-prices start at €{FROM_PRICE} for a chest print, with nationwide delivery from
            Ashbourne.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            What you get: Super Premium cotton with screen or digital print
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            PrintNPack t-shirts are <strong>Fruit of the Loom Super Premium</strong> — the stock card
            covers thirteen colours from white, black and heather grey through navy, bottle green,
            burgundy, olive, zinc and chocolate. Screen print suits solid logos and high-volume runs;
            digital print suits multi-colour artwork and short-run merch where colour matching
            matters.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Place the print on the chest, large front, large back or sleeve. Proofs go out before
            production so Dublin, Cork and Galway teams can check placement and colour. Extra print
            areas are +€1.50 on top of the single-placement from-price. For the wider apparel range —
            polos, hoodies, sweatshirts, sportswear and hi-viz — start with the{' '}
            <Link
              href="/blog/branded-clothing-ireland-guide"
              className="text-blue-600 hover:underline"
            >
              branded clothing Ireland guide
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Who buys custom printed t-shirts in Ireland?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Most orders come from buyers who need a soft promotional tee or a lightweight staff kit
            without moving up to fleece or performance fabric. PrintNPack supplies t-shirts
            nationwide from Ashbourne, Co. Meath.
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
            Thirteen stock colours for Irish kits
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            The Super Premium card covers the everyday brand colours Irish teams actually reorder —
            useful when guidelines call for bottle green, deep navy, zinc or chocolate rather than a
            shortlist of white and black alone.
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
              custom printed t-shirts Ireland
            </Link>{' '}
            page before you approve artwork — heather grey and light graphite print differently under
            screen versus digital.
          </p>

          <div className="relative rounded-2xl overflow-hidden h-56 mb-8 not-prose">
            <Image
              src={IMAGE_4}
              alt="Custom printed t-shirts Ireland — branded Super Premium ready for Ashbourne nationwide orders"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Sizes S–3XL at the same price
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Every t-shirt in the run is priced the same from <strong>S through 3XL</strong>{' '}
            (including XXL and 2XL). That matters when you kit a mixed event crew or staff team — you
            are not penalised for ordering more large and XL pieces.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Mix sizes in one order against the five-piece minimum. Reorders for new starters or a
            second giveaway can reuse the same proof and colour, so Cork and Galway sites stay
            consistent with the Dublin set.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Screen print and digital print placements
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            <strong>Screen print</strong> suits solid logos, club crests and higher volumes where a
            durable ink layer is the priority. <strong>Digital print</strong> suits multi-colour
            artwork, photographic graphics and short-run merch where colour matching matters more
            than a long screen setup.
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
                alt="Company t-shirts Ireland — chest print placement for Dublin event staff"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 384px"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden h-44">
              <Image
                src={IMAGE_2}
                alt="Promotional t-shirts Ireland — printed Super Premium kit for Cork and Galway giveaways"
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
            chest print starts from €{FROM_PRICE}.
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
            <li>From €{FROM_PRICE} — single placement on Super Premium stock</li>
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
            T-shirt vs sportswear vs polo vs sweatshirt vs hoodie
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Pick the garment that matches the job. Super Premium t-shirts are the everyday cotton
            option; Cool T sportswear covers moisture-wicking kits; other lines cover collared
            uniforms and fleece.
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
              href="/blog/custom-sportswear-ireland-sizes-moq-buying-guide"
              className="text-blue-600 hover:underline"
            >
              custom sportswear Ireland guide
            </Link>{' '}
            and{' '}
            <Link
              href="/blog/custom-sweatshirts-ireland-sizes-moq-buying-guide"
              className="text-blue-600 hover:underline"
            >
              custom sweatshirts Ireland guide
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Pair t-shirts with other branded touchpoints
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Event and staff buyers often kit the tee with other PrintNPack lines:
          </p>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-6">
            <li>Custom printed t-shirts for events, giveaways and everyday staff kits</li>
            <li>
              Custom sportswear when moisture-wicking fabric is needed for training —{' '}
              <Link
                href="/blog/custom-sportswear-ireland-sizes-moq-buying-guide"
                className="text-blue-600 hover:underline"
              >
                custom sportswear Ireland sizes &amp; MOQ guide
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
              Custom sweatshirts or hoodies when sleeves and warmth are required —{' '}
              <Link
                href="/blog/custom-sweatshirts-ireland-sizes-moq-buying-guide"
                className="text-blue-600 hover:underline"
              >
                custom sweatshirts Ireland sizes &amp; MOQ guide
              </Link>
            </li>
          </ol>

          <div className="relative rounded-2xl overflow-hidden h-52 mb-8 not-prose">
            <Image
              src={HERO_IMAGE}
              alt="Custom printed t-shirts Ireland — branded Super Premium ready for nationwide delivery from Ashbourne"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Delivery across Ireland from Ashbourne
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            PrintNPack ships custom printed t-shirts from Ashbourne, Co. Meath to Dublin, Cork,
            Galway, Limerick and every county. Typical production is 3–5 business days after you
            approve the proof. Local buyers can also discuss collection from Co. Meath.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            UK or Europe delivery is not assumed in the Ireland workflow — ask when you need a quote
            outside Ireland or Northern Ireland.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How to order custom printed t-shirts in Ireland
          </h2>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-8">
            <li>Choose a colour from the thirteen Super Premium stock shades</li>
            <li>Pick sizes across S–3XL and set quantity from 5 upward</li>
            <li>Select screen or digital print, then chest, back and/or sleeve placements</li>
            <li>
              Open the{' '}
              <Link href={HUB_HREF} className="text-blue-600 hover:underline">
                custom printed t-shirts Ireland
              </Link>{' '}
              page or send artwork via the{' '}
              <Link href="/quote" className="text-blue-600 hover:underline">
                free quote form
              </Link>
            </li>
            <li>Approve the proof, then take nationwide Ireland delivery from Ashbourne</li>
          </ol>

          <div className="bg-slate-900 rounded-xl p-6 mb-8 text-white not-prose">
            <p className="font-semibold mb-1">Ready to kit your team in branded t-shirts?</p>
            <p className="text-slate-400 text-sm mb-4">
              Custom printed t-shirts from €{FROM_PRICE} — Fruit of the Loom Super Premium, 13
              colours, screen or digital print, same price S–3XL, MOQ 5, Ireland delivery from
              Ashbourne.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={HUB_HREF}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Custom Printed T-Shirts Ireland →
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
                q: 'Where can I buy custom printed t-shirts in Ireland?',
                a: `PrintNPack supplies custom printed t-shirts across Ireland from Ashbourne, Co. Meath. Fruit of the Loom Super Premium stock, 13 colours, screen or digital print from €${FROM_PRICE} for a chest print, same price S–3XL, minimum 5 pieces, with nationwide delivery.`,
              },
              {
                q: 'What is the difference between a custom t-shirt and sportswear Cool T?',
                a: 'Custom printed t-shirts use Fruit of the Loom Super Premium cotton for everyday staff wear, events and giveaways, from €15. AWDis Cool T sportswear is moisture-wicking performance fabric for GAA, soccer, running and gym kits, from €16.50. Both share the same S–3XL price ladder and five-piece MOQ.',
              },
              {
                q: 'What sizes of custom printed t-shirts are available in Ireland?',
                a: 'Sizes run S, M, L, XL, XXL, 2XL and 3XL at the same unit price. Mix sizes in one order so event crews, clubs and staff teams get a full size run without a surcharge on larger garments.',
              },
              {
                q: 'What is the minimum order for custom printed t-shirts in Ireland?',
                a: `The minimum order is 5 pieces. Quantity bands then step 5–10, 11–20, 21–30, 31–40, 41–50 and 51+, with 8% off each quantity step. Extra print areas are +€1.50. A single chest print starts from €${FROM_PRICE}.`,
              },
              {
                q: 'Do you deliver custom printed t-shirts across Ireland?',
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
              href: '/blog/custom-sportswear-ireland-sizes-moq-buying-guide',
              src: SPORTSWEAR_IMAGE,
              title: 'Custom Sportswear Ireland: AWDis Cool T Sizes & MOQ Buying Guide',
            },
            {
              href: '/blog/custom-polo-shirts-ireland-sizes-moq-buying-guide',
              src: POLO_IMAGE,
              title: 'Custom Polo Shirts Ireland: Sizes S–3XL & MOQ Buying Guide',
            },
            {
              href: '/blog/custom-sweatshirts-ireland-sizes-moq-buying-guide',
              src: SWEATSHIRT_IMAGE,
              title: 'Custom Sweatshirts Ireland: Crew Neck, 17 Colours & MOQ Buying Guide',
            },
            {
              href: '/blog/custom-hoodies-ireland-sizes-moq-buying-guide',
              src: HOODIE_IMAGE,
              title: 'Custom Hoodies Ireland: Classic vs Electric & MOQ Buying Guide',
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
