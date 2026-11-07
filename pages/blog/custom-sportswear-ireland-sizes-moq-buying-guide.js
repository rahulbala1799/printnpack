import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/custom-sportswear-ireland-sizes-moq-buying-guide`;
const HUB_HREF = '/clothing/custom-sportswear-ireland';
const HERO_IMAGE =
  '/images/apparel/custom-printed-sportswear-ireland-dublin-running-club.jpg';
const IMAGE_2 =
  '/images/apparel/custom-printed-sportswear-ireland-soccer-team-kit.jpg';
const IMAGE_3 =
  '/images/apparel/custom-printed-sportswear-ireland-club-kit-navy-white.jpg';
const IMAGE_4 =
  '/images/apparel/custom-printed-sportswear-ireland-gym-performance-tshirt.jpg';
const HOODIE_IMAGE = '/images/apparel/HOODIE MOCK UP 1.jpg';
const POLO_IMAGE =
  '/images/apparel/custom-polo-shirts-ireland-embroidered-events-uniform.jpg';
const TSHIRT_IMAGE = '/images/apparel/TSHIRT MOCK UP 1.jpg';

const FROM_PRICE = '16.50';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Custom Sportswear Ireland: AWDis Cool T Sizes S–3XL & MOQ Buying Guide',
  description:
    'A practical buying guide to custom sportswear in Ireland — AWDis Cool T moisture-wicking kits, nine stock colours, print or embroidery from €16.50, same price S–3XL, MOQ from 5, with nationwide delivery from Ashbourne for GAA, soccer, running clubs and gyms.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-11-07',
  dateModified: '2026-11-07',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I buy custom sportswear in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: `PrintNPack supplies printed and embroidered custom sportswear across Ireland from Ashbourne, Co. Meath. AWDis Cool T moisture-wicking shirts, from €${FROM_PRICE} for a single chest placement, same price S–3XL, minimum 5 pieces, with nationwide delivery.`,
      },
    },
    {
      '@type': 'Question',
      name: 'What fabric is used for custom sportswear in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack sportswear is printed on AWDis Cool T performance fabric — moisture-wicking shirts built for training and match day. Nine stock colours include white, black, charcoal, heather grey, royal blue, electric yellow, electric green, oxford navy and fire red.',
      },
    },
    {
      '@type': 'Question',
      name: 'What sizes of custom sportswear are available in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sizes run S, M, L, XL, XXL, 2XL and 3XL at the same unit price. Mix sizes in one order so GAA, soccer, running and gym kits get a full size run without a surcharge on larger shirts.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the minimum order for custom sportswear in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: `The minimum order is 5 pieces. Quantity bands then step 5–10, 11–20, 21–30, 31–40, 41–50 and 51+, with 8% off each quantity step. Extra print areas are +€1.50. A single placement starts from €${FROM_PRICE}.`,
      },
    },
    {
      '@type': 'Question',
      name: 'Do you deliver custom sportswear across Ireland?',
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
      name: 'Custom Sportswear Ireland Buying Guide',
      item: PAGE_URL,
    },
  ],
};

const colourRows = [
  {
    colours: 'White · Black · Charcoal · Heather Grey',
    use: 'Gym staff, school PE kits and everyday training tops',
  },
  {
    colours: 'Royal Blue · Oxford Navy · Fire Red',
    use: 'Club colours for soccer, GAA and supporter retail',
  },
  {
    colours: 'Electric Yellow · Electric Green',
    use: 'Running crews, high-visibility warm-ups and outdoor sessions',
  },
];

const buyerRows = [
  {
    buyer: 'GAA clubs',
    use: 'Crested training tops for panels, schools and county camps',
  },
  {
    buyer: 'Soccer teams',
    use: 'Match-day warm-ups, academy kits and squad numbers on the back',
  },
  {
    buyer: 'Running clubs',
    use: 'Lightweight club shirts for parkruns, relays and winter sessions',
  },
  {
    buyer: 'Gyms & coaches',
    use: 'Staff performance tees and short-run client merch drops',
  },
];

const compareRows = [
  {
    style: 'Custom sportswear',
    detail: 'AWDis Cool T · from €16.50 · moisture-wicking club kits',
  },
  {
    style: 'Custom t-shirts',
    detail: 'Fruit of the Loom cotton · from €15 · softer promo and event tees',
  },
  {
    style: 'Custom polo shirts',
    detail: 'From €19 · collared hospitality and golf uniforms',
  },
  {
    style: 'Custom hoodies',
    detail: 'From €36 · hooded winter/merch staple for cold sidelines',
  },
  {
    style: 'Hi-viz workwear',
    detail: 'DMS tabards from €12 · EN ISO 20471 Class 2 · sites and security',
  },
];

export default function CustomSportswearIrelandSizesMoqBuyingGuide() {
  const title =
    'Custom Sportswear Ireland: AWDis Cool T Sizes S–3XL & MOQ Buying Guide';
  const description = `How to buy custom sportswear in Ireland — AWDis Cool T moisture-wicking kits, nine stock colours, print or embroidery from €${FROM_PRICE}, same price S–3XL, MOQ from 5, with nationwide delivery from Ashbourne for GAA, soccer, running clubs and gyms.`;

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="custom sportswear ireland, printed sports t-shirts dublin, gaa club kit printing, soccer team t-shirts cork, running club merch galway, awdis cool t ireland, gym staff t-shirts ireland, sportswear moq ireland, embroidered sports kits ashbourne, moisture wicking club shirts ireland"
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
          content="Custom sportswear Ireland — printed AWDis Cool T for Dublin running clubs"
        />
        <meta property="article:published_time" content="2026-11-07" />

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
          <span className="text-slate-900">Custom Sportswear Ireland</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            Apparel Guide
          </span>
          <span className="text-slate-400 text-sm">7 Nov 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Custom Sportswear Ireland: AWDis Cool T Sizes S–3XL &amp; MOQ Buying Guide
        </h1>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="relative rounded-2xl overflow-hidden h-48 col-span-2">
            <Image
              src={HERO_IMAGE}
              alt="Custom sportswear Ireland — Dublin running club moisture-wicking AWDis Cool T"
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
                alt="Custom soccer team kit Ireland — printed sports t-shirt with club crest for Cork squads"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden flex-1">
              <Image
                src={IMAGE_3}
                alt="Custom club sportswear Ireland — navy and white printed team t-shirts for Galway GAA"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Cotton event tees are fine for a giveaway — they are the wrong fabric for a wet pitch or a
            winter parkrun. This guide explains how to buy{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              custom sportswear in Ireland
            </Link>
            : AWDis Cool T moisture-wicking stock, nine colours, print or embroidery placements, the
            S–3XL size run at one price, and what the five-piece MOQ includes. Live from-prices start
            at €{FROM_PRICE} for a single chest placement, with nationwide delivery from Ashbourne.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            What you get: AWDis Cool T with print or embroidery
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            PrintNPack sportswear is built on <strong>AWDis Cool T</strong> performance fabric —
            moisture-wicking shirts for training and match day rather than heavy cotton merch. Nine
            stock colours cover white, black, charcoal, heather grey, royal blue, electric yellow,
            electric green, oxford navy and fire red, all on the same from-price ladder.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            You can screen print, digitally print or embroider on the chest, back and sleeves. Proofs
            go out before production so Dublin, Cork and Galway clubs can check crest size and
            colour. Extra print areas are +€1.50 on top of the single-placement from-price. For the
            wider apparel range — cotton t-shirts, polos, hoodies and hi-viz — start with the{' '}
            <Link
              href="/blog/branded-clothing-ireland-guide"
              className="text-blue-600 hover:underline"
            >
              branded clothing Ireland guide
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Who buys custom sportswear in Ireland?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Most orders come from clubs and coaches who need a lighter, faster-drying shirt than a
            promotional tee. PrintNPack supplies sportswear nationwide from Ashbourne, Co. Meath.
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
            Nine Cool T colours for Irish club kits
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Match the stock shade to your crest and wash cycle. Neutral greys and navy suit gyms and
            school PE; royal, fire red and oxford navy cover most soccer and GAA strip colours;
            electric yellow and green read from a distance on dark winter mornings.
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
                  <tr key={row.colours} className="border-b border-slate-100">
                    <td className="py-3 pr-4 font-medium text-slate-800">{row.colours}</td>
                    <td className="py-3 text-slate-700">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-700 leading-relaxed mb-8">
            Confirm the exact stock shade on the{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              custom sportswear Ireland
            </Link>{' '}
            page before you approve artwork — heather grey and electric yellow print very differently
            under screen versus embroidery.
          </p>

          <div className="relative rounded-2xl overflow-hidden h-56 mb-8 not-prose">
            <Image
              src={IMAGE_4}
              alt="Custom gym performance t-shirt Ireland — printed sportswear in electric yellow for Ashbourne nationwide orders"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Sizes S–3XL at the same price
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Every shirt in the run is priced the same from <strong>S through 3XL</strong> (including
            XXL and 2XL). That matters when you kit a mixed adult squad — you are not penalised for
            ordering more large and XL pieces for the panel or coaching staff.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Mix sizes in one order against the five-piece minimum. Reorders for new players or a
            second training drop can reuse the same proof and colour, so Cork and Galway clubs stay
            consistent with the Dublin set.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Print and embroidery placements
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            <strong>Embroidery</strong> suits a left-chest crest that needs to survive weekly washes —
            club committees, gym staff and coach kits. <strong>Screen print</strong> and{' '}
            <strong>digital print</strong> suit multi-colour crests, large back numbers, sleeve
            sponsor marks and short-run race day kits where colour matching matters more than a
            stitched finish.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Common placement combos include chest only, large front, large back, one sleeve, chest +
            back, and chest + sleeves. Each extra area adds €1.50. Send a vector or high-resolution PNG
            and approve the proof before production starts.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-8 not-prose">
            <div className="relative rounded-2xl overflow-hidden h-44">
              <Image
                src={IMAGE_2}
                alt="Printed sports kits Ireland — soccer team crest on moisture-wicking shirt for Dublin clubs"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 384px"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden h-44">
              <Image
                src={IMAGE_3}
                alt="GAA sportswear Ireland — navy and white club kit for Cork and Galway panels"
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
            <li>From €{FROM_PRICE} — single chest placement on AWDis Cool T stock</li>
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
            Sportswear vs cotton tee vs polo vs hoodie vs hi-viz
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Pick the garment that matches the session. Sportswear is the moisture-wicking club option;
            cotton t-shirts suit giveaways; polos cover smarter daytime uniforms; hoodies handle cold
            sidelines; hi-viz covers site and event safety.
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
              href="/blog/custom-polo-shirts-ireland-sizes-moq-buying-guide"
              className="text-blue-600 hover:underline"
            >
              custom polo shirts Ireland guide
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Pair sportswear with other branded touchpoints
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Clubs often kit the performance shirt with other PrintNPack lines:
          </p>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-6">
            <li>Custom sportswear for training, match warm-ups and gym staff</li>
            <li>
              Custom hoodies for cold sidelines and supporter merch —{' '}
              <Link
                href="/blog/custom-hoodies-ireland-sizes-moq-buying-guide"
                className="text-blue-600 hover:underline"
              >
                custom hoodies Ireland sizes &amp; MOQ guide
              </Link>
            </li>
            <li>
              Custom polo shirts for clubhouse and committee kits —{' '}
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
              alt="Custom sportswear Ireland — printed Cool T ready for nationwide delivery from Ashbourne"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Delivery across Ireland from Ashbourne
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            PrintNPack ships custom sportswear from Ashbourne, Co. Meath to Dublin, Cork, Galway,
            Limerick and every county. Typical production is 3–5 business days after you approve the
            proof. Local buyers can also discuss collection from Co. Meath.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            UK or Europe delivery is not assumed in the Ireland workflow — ask when you need a quote
            outside Ireland or Northern Ireland.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How to order custom sportswear in Ireland
          </h2>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-8">
            <li>Choose an AWDis Cool T colour from the nine stock shades</li>
            <li>Pick sizes across S–3XL and set quantity from 5 upward</li>
            <li>Select print or embroidery, then chest, back and/or sleeve placements</li>
            <li>
              Open the{' '}
              <Link href={HUB_HREF} className="text-blue-600 hover:underline">
                custom sportswear Ireland
              </Link>{' '}
              page or send artwork via the{' '}
              <Link href="/quote" className="text-blue-600 hover:underline">
                free quote form
              </Link>
            </li>
            <li>Approve the proof, then take nationwide Ireland delivery from Ashbourne</li>
          </ol>

          <div className="bg-slate-900 rounded-xl p-6 mb-8 text-white not-prose">
            <p className="font-semibold mb-1">Ready to kit your club in branded sportswear?</p>
            <p className="text-slate-400 text-sm mb-4">
              Custom sportswear from €{FROM_PRICE} — AWDis Cool T stock, print or embroidery, same
              price S–3XL, MOQ 5, Ireland delivery from Ashbourne.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={HUB_HREF}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Custom Sportswear Ireland →
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
                q: 'Where can I buy custom sportswear in Ireland?',
                a: `PrintNPack supplies printed and embroidered custom sportswear across Ireland from Ashbourne, Co. Meath. AWDis Cool T moisture-wicking shirts, from €${FROM_PRICE} for a single chest placement, same price S–3XL, minimum 5 pieces, with nationwide delivery.`,
              },
              {
                q: 'What fabric is used for custom sportswear in Ireland?',
                a: 'PrintNPack sportswear is printed on AWDis Cool T performance fabric — moisture-wicking shirts built for training and match day. Nine stock colours include white, black, charcoal, heather grey, royal blue, electric yellow, electric green, oxford navy and fire red.',
              },
              {
                q: 'What sizes of custom sportswear are available in Ireland?',
                a: 'Sizes run S, M, L, XL, XXL, 2XL and 3XL at the same unit price. Mix sizes in one order so GAA, soccer, running and gym kits get a full size run without a surcharge on larger shirts.',
              },
              {
                q: 'What is the minimum order for custom sportswear in Ireland?',
                a: `The minimum order is 5 pieces. Quantity bands then step 5–10, 11–20, 21–30, 31–40, 41–50 and 51+, with 8% off each quantity step. Extra print areas are +€1.50. A single placement starts from €${FROM_PRICE}.`,
              },
              {
                q: 'Do you deliver custom sportswear across Ireland?',
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
              src: POLO_IMAGE,
              title: 'Branded Clothing Ireland: Promotional Wear & Workwear Guide',
            },
            {
              href: '/blog/custom-hoodies-ireland-sizes-moq-buying-guide',
              src: HOODIE_IMAGE,
              title: 'Custom Hoodies Ireland: Classic vs Electric & MOQ Buying Guide',
            },
            {
              href: '/blog/custom-polo-shirts-ireland-sizes-moq-buying-guide',
              src: POLO_IMAGE,
              title: 'Custom Polo Shirts Ireland: Sizes S–3XL & MOQ Buying Guide',
            },
            {
              href: '/clothing/custom-printed-tshirts-ireland',
              src: TSHIRT_IMAGE,
              title: 'Custom Printed T-Shirts Ireland — from €15',
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
