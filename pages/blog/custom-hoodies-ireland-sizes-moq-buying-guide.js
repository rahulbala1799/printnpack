import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/custom-hoodies-ireland-sizes-moq-buying-guide`;
const HUB_HREF = '/clothing/custom-hoodies-ireland';
const HERO_IMAGE = '/images/apparel/HOODIE MOCK UP 1.jpg';
const IMAGE_2 = '/images/apparel/HOODIE MOCK UP 2.jpg';
const IMAGE_3 = '/images/apparel/HOODIE MOCK UP 3.jpg';
const IMAGE_4 = '/images/apparel/HOODIE MOCK UP 4.jpg';
const IMAGE_5 = '/images/apparel/HOODIE MOCK UP 5.jpg';
const POLO_IMAGE =
  '/images/apparel/custom-polo-shirts-ireland-embroidered-events-uniform.jpg';
const HIVIZ_IMAGE =
  '/images/apparel/custom-hiviz-workwear-ireland-construction-site.jpg';
const CLOTHING_GUIDE_IMAGE = '/images/apparel/POLO SHIRT MOCK UP 1.jpg';
const TSHIRT_IMAGE = '/images/apparel/TSHIRT MOCK UP 1.jpg';

const FROM_PRICE = '36.00';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Custom Hoodies Ireland: Classic vs Electric, Sizes S–3XL & MOQ Buying Guide',
  description:
    'A practical buying guide to custom hoodies in Ireland — Fruit of the Loom Classic and AWDis Electric stock, print or embroidery from €36, same price S–3XL, MOQ from 5, with nationwide delivery from Ashbourne for merch, clubs and winter staff wear.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-11-05',
  dateModified: '2026-11-05',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I buy custom hoodies in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: `PrintNPack supplies printed and embroidered custom hoodies across Ireland from Ashbourne, Co. Meath. Fruit of the Loom Classic and AWDis Electric stock, from €${FROM_PRICE} for a single placement, same price S–3XL, minimum 5 pieces, with nationwide delivery.`,
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between Classic and Electric hoodies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fruit of the Loom Classic covers ten everyday colours such as black, navy, graphite, bottle green and heather for merch and winter staff wear. AWDis Electric adds four fluorescent shades — pink, yellow, green and orange — for clubs, festivals and high-visibility brand kits. Both ranges share the same from-price, size run and MOQ.',
      },
    },
    {
      '@type': 'Question',
      name: 'What sizes of custom hoodies are available in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sizes run S, M, L, XL, XXL, 2XL and 3XL at the same unit price. Mix sizes in one order so merch shops, clubs and winter staff teams get a full size run without a surcharge on larger garments.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the minimum order for custom hoodies in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: `The minimum order is 5 pieces. Quantity bands then step 5–10, 11–20, 21–30, 31–40, 41–50 and 51+, with 8% off each quantity step. Extra print areas are +€1.50. A single placement starts from €${FROM_PRICE}.`,
      },
    },
    {
      '@type': 'Question',
      name: 'Do you deliver custom hoodies across Ireland?',
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
      name: 'Custom Hoodies Ireland Buying Guide',
      item: PAGE_URL,
    },
  ],
};

const colourRows = [
  {
    range: 'Fruit of the Loom Classic',
    colours: 'Black · Graphite · Deep Navy · Navy · White · Heather',
    use: 'Merch shops, ecommerce unboxing kits and winter staff uniforms',
  },
  {
    range: 'Fruit of the Loom Classic',
    colours: 'Royal Blue · Red · Pink · Bottle Green',
    use: 'Club colours, retail teams and branded seasonal campaigns',
  },
  {
    range: 'AWDis Electric',
    colours: 'Electric Pink · Yellow · Green · Orange',
    use: 'Festivals, youth clubs, running crews and high-visibility brand kits',
  },
];

const buyerRows = [
  {
    buyer: 'Merch & ecommerce',
    use: 'Logo hoodies for online shops, launches and subscriber drops',
  },
  {
    buyer: 'Clubs & teams',
    use: 'Crest or back-print kits for training, travel and supporter retail',
  },
  {
    buyer: 'Winter staff wear',
    use: 'Warehouse, delivery and outdoor crews who need sleeves and a hood',
  },
  {
    buyer: 'Events & festivals',
    use: 'Short-run Electric colours for crews, volunteers and promo giveaways',
  },
];

const compareRows = [
  {
    style: 'Custom hoodies',
    detail: 'Classic + Electric · from €36 · hooded winter/merch staple',
  },
  {
    style: 'Custom sweatshirts',
    detail: 'From €36 · crew neck without a hood · lighter staff option',
  },
  {
    style: 'Custom polo shirts',
    detail: 'From €19 · collared hospitality and golf uniforms',
  },
  {
    style: 'Custom t-shirts',
    detail: 'From €15 chest print · softer promotional feel for events',
  },
  {
    style: 'Hi-viz workwear',
    detail: 'DMS tabards from €12 · EN ISO 20471 Class 2 · sites and security',
  },
];

export default function CustomHoodiesIrelandSizesMoqBuyingGuide() {
  const title =
    'Custom Hoodies Ireland: Classic vs Electric, Sizes S–3XL & MOQ Buying Guide';
  const description = `How to buy custom hoodies in Ireland — Fruit of the Loom Classic and AWDis Electric, print or embroidery from €${FROM_PRICE}, same price S–3XL, MOQ from 5, with nationwide delivery from Ashbourne for merch, clubs and winter staff wear.`;

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="custom hoodies ireland, printed hoodies dublin, branded hoodies cork, company hoodies galway, fruit of the loom hoodie ashbourne, awdis electric hoodie ireland, merch hoodies ireland, hoodie moq ireland, embroidered hoodies ireland, winter staff hoodies ireland"
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
          content="Custom hoodies Ireland — branded pullover hoodie for Dublin merch and winter staff"
        />
        <meta property="article:published_time" content="2026-11-05" />

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
          <span className="text-slate-900">Custom Hoodies Ireland</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            Apparel Guide
          </span>
          <span className="text-slate-400 text-sm">5 Nov 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Custom Hoodies Ireland: Classic vs Electric, Sizes S–3XL &amp; MOQ Buying Guide
        </h1>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="relative rounded-2xl overflow-hidden h-48 col-span-2">
            <Image
              src={HERO_IMAGE}
              alt="Custom hoodies Ireland — branded Fruit of the Loom pullover for Dublin merch shops"
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
                alt="Printed hoodies Ireland — classic navy hoodie with company logo for Cork clubs"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden flex-1">
              <Image
                src={IMAGE_3}
                alt="Branded hoodies Ireland — winter staff hoodie kit for Galway warehouses"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            A hoodie is the warm middle ground between a t-shirt and a jacket — the default for Irish
            merch drops, club kits and winter staff wear. This guide explains how to buy{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              custom hoodies in Ireland
            </Link>
            : Fruit of the Loom Classic versus AWDis Electric colours, print or embroidery placements,
            the S–3XL size run at one price, and what the five-piece MOQ includes. Live from-prices
            start at €{FROM_PRICE} for a single placement, with nationwide delivery from Ashbourne.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            What you get: Classic and Electric stock with print or embroidery
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            PrintNPack hoodies cover two stock ranges. <strong>Fruit of the Loom Classic</strong>{' '}
            pullovers hold ten everyday colours — white, black, graphite, deep navy, navy, royal blue,
            red, pink, bottle green and heather. <strong>AWDis Electric</strong> adds fluorescent pink,
            yellow, green and orange for festival crews and high-visibility brand kits. That is fourteen
            stock colours in total, all on the same from-price ladder.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            You can screen print, digitally print or embroider on the front, back, hood, sleeve or
            pocket. Proofs go out before production so Dublin, Cork and Galway teams can check
            placement and colour. Extra print areas are +€1.50 on top of the single-placement
            from-price. For the wider apparel range — t-shirts, polos, sportswear and hi-viz — start
            with the{' '}
            <Link
              href="/blog/branded-clothing-ireland-guide"
              className="text-blue-600 hover:underline"
            >
              branded clothing Ireland guide
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Who buys custom hoodies in Ireland?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Most orders come from brands that need a warmer garment than a tee, without jumping to
            outerwear. PrintNPack supplies hoodies nationwide from Ashbourne, Co. Meath.
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
            Classic vs Electric colours for Irish kits
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Choose Classic when you need laundry-friendly navy, black or heather that matches brand
            guidelines. Choose Electric when the kit must read from a distance at an outdoor event or
            youth club.
          </p>
          <div className="overflow-x-auto mb-6 not-prose">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-3 pr-4 font-semibold text-slate-900">Range</th>
                  <th className="py-3 pr-4 font-semibold text-slate-900">Colours</th>
                  <th className="py-3 font-semibold text-slate-900">Best for</th>
                </tr>
              </thead>
              <tbody>
                {colourRows.map((row) => (
                  <tr key={`${row.range}-${row.colours}`} className="border-b border-slate-100">
                    <td className="py-3 pr-4 font-medium text-slate-800 whitespace-nowrap">
                      {row.range}
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
              custom hoodies Ireland
            </Link>{' '}
            page before you approve artwork — Classic heather and Electric yellow print very
            differently under screen versus embroidery.
          </p>

          <div className="relative rounded-2xl overflow-hidden h-56 mb-8 not-prose">
            <Image
              src={IMAGE_4}
              alt="Custom hoodies Ireland — classic black branded hoodie for Ashbourne nationwide orders"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Sizes S–3XL at the same price
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Every hoodie in the run is priced the same from <strong>S through 3XL</strong> (including
            XXL and 2XL). That matters when you kit a mixed club or warehouse team — you are not
            penalised for ordering more large and XL pieces.
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
            repeated washes — clubs, corporate winter wear and retail staff. <strong>Screen print</strong>{' '}
            and <strong>digital print</strong> suit multi-colour artwork, large back prints, hood or
            sleeve placements, and short-run festival kits where colour matching matters more than a
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
                src={IMAGE_5}
                alt="Company hoodies Ireland — embroidered front placement for Dublin staff merch"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 384px"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden h-44">
              <Image
                src={IMAGE_2}
                alt="Festival hoodies Ireland — printed Electric colour kit for Cork and Galway events"
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
            <li>From €{FROM_PRICE} — single placement on Classic or Electric stock</li>
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
            Hoodie vs sweatshirt vs polo vs t-shirt vs hi-viz
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Pick the garment that matches the job. Hoodies are the hooded winter and merch option;
            sweatshirts drop the hood at the same from-price; other lines cover collared uniforms,
            promo tees and site safety.
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
              href="/blog/custom-polo-shirts-ireland-sizes-moq-buying-guide"
              className="text-blue-600 hover:underline"
            >
              custom polo shirts Ireland guide
            </Link>{' '}
            and{' '}
            <Link
              href="/blog/custom-hiviz-workwear-ireland-sizes-moq-buying-guide"
              className="text-blue-600 hover:underline"
            >
              hi-viz workwear Ireland guide
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Pair hoodies with other branded touchpoints
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Merch and club buyers often kit the garment with other PrintNPack lines:
          </p>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-6">
            <li>Custom hoodies for winter drops, clubs and staff wear</li>
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
              Hi-viz workwear for outdoor crews and event security —{' '}
              <Link
                href="/blog/custom-hiviz-workwear-ireland-sizes-moq-buying-guide"
                className="text-blue-600 hover:underline"
              >
                hi-viz workwear Ireland sizes &amp; MOQ guide
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
              alt="Custom hoodies Ireland — branded pullover ready for nationwide delivery from Ashbourne"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Delivery across Ireland from Ashbourne
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            PrintNPack ships custom hoodies from Ashbourne, Co. Meath to Dublin, Cork, Galway,
            Limerick and every county. Typical production is 3–5 business days after you approve the
            proof. Local buyers can also discuss collection from Co. Meath.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            UK or Europe delivery is not assumed in the Ireland workflow — ask when you need a quote
            outside Ireland or Northern Ireland.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How to order custom hoodies in Ireland
          </h2>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-8">
            <li>Choose Classic or Electric colour from the fourteen stock shades</li>
            <li>Pick sizes across S–3XL and set quantity from 5 upward</li>
            <li>Select print or embroidery, then front, back, hood, sleeve and/or pocket placements</li>
            <li>
              Open the{' '}
              <Link href={HUB_HREF} className="text-blue-600 hover:underline">
                custom hoodies Ireland
              </Link>{' '}
              page or send artwork via the{' '}
              <Link href="/quote" className="text-blue-600 hover:underline">
                free quote form
              </Link>
            </li>
            <li>Approve the proof, then take nationwide Ireland delivery from Ashbourne</li>
          </ol>

          <div className="bg-slate-900 rounded-xl p-6 mb-8 text-white not-prose">
            <p className="font-semibold mb-1">Ready to kit your team in branded hoodies?</p>
            <p className="text-slate-400 text-sm mb-4">
              Custom hoodies from €{FROM_PRICE} — Classic or Electric stock, print or embroidery,
              same price S–3XL, MOQ 5, Ireland delivery from Ashbourne.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={HUB_HREF}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Custom Hoodies Ireland →
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
                q: 'Where can I buy custom hoodies in Ireland?',
                a: `PrintNPack supplies printed and embroidered custom hoodies across Ireland from Ashbourne, Co. Meath. Fruit of the Loom Classic and AWDis Electric stock, from €${FROM_PRICE} for a single placement, same price S–3XL, minimum 5 pieces, with nationwide delivery.`,
              },
              {
                q: 'What is the difference between Classic and Electric hoodies?',
                a: 'Fruit of the Loom Classic covers ten everyday colours such as black, navy, graphite, bottle green and heather for merch and winter staff wear. AWDis Electric adds four fluorescent shades — pink, yellow, green and orange — for clubs, festivals and high-visibility brand kits. Both ranges share the same from-price, size run and MOQ.',
              },
              {
                q: 'What sizes of custom hoodies are available in Ireland?',
                a: 'Sizes run S, M, L, XL, XXL, 2XL and 3XL at the same unit price. Mix sizes in one order so merch shops, clubs and winter staff teams get a full size run without a surcharge on larger garments.',
              },
              {
                q: 'What is the minimum order for custom hoodies in Ireland?',
                a: `The minimum order is 5 pieces. Quantity bands then step 5–10, 11–20, 21–30, 31–40, 41–50 and 51+, with 8% off each quantity step. Extra print areas are +€1.50. A single placement starts from €${FROM_PRICE}.`,
              },
              {
                q: 'Do you deliver custom hoodies across Ireland?',
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
              title: 'Custom Polo Shirts Ireland: Sizes S–3XL & MOQ Buying Guide',
            },
            {
              href: '/blog/custom-hiviz-workwear-ireland-sizes-moq-buying-guide',
              src: HIVIZ_IMAGE,
              title: 'Hi-Viz Workwear Ireland: Sizes, Colours & MOQ Buying Guide',
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
