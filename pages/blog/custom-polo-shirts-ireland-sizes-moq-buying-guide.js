import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/custom-polo-shirts-ireland-sizes-moq-buying-guide`;
const HUB_HREF = '/clothing/custom-polo-shirts-ireland';
const HERO_IMAGE =
  '/images/apparel/custom-polo-shirts-ireland-embroidered-events-uniform.jpg';
const LANDSCAPE_IMAGE =
  '/images/apparel/custom-polo-shirts-ireland-landscaping-workwear.jpg';
const HOSPITALITY_IMAGE =
  '/images/apparel/custom-polo-shirts-ireland-hospitality-staff.jpg';
const GOLF_IMAGE = '/images/apparel/custom-polo-shirts-ireland-golf-club-kit.jpg';
const CLOTHING_GUIDE_IMAGE = '/images/apparel/POLO SHIRT MOCK UP 1.jpg';
const COASTER_IMAGE = '/images/coasters/coaster-harbour-bean-ireland.webp';
const NAPKIN_IMAGE =
  '/images/products/premium-linen-feel-napkins/airlaid-kinetic-labs-ireland.jpg';
const BUSINESS_CARD_IMAGE = '/images/products/business-cards/business-cards-ireland-stack.jpg';

const FROM_PRICE = '19.00';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Custom Polo Shirts Ireland: Sizes S–3XL, Embroidery vs Print & MOQ Buying Guide',
  description:
    'A practical buying guide to custom polo shirts in Ireland — Fruit of the Loom 65/35, embroidery or print from €19, same price S–3XL, MOQ from 5, with nationwide delivery from Ashbourne for hospitality, events, golf clubs and workwear.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-11-01',
  dateModified: '2026-11-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I buy custom polo shirts in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: `PrintNPack supplies embroidered and printed custom polo shirts across Ireland from Ashbourne, Co. Meath. Fruit of the Loom 65/35 polos, from €${FROM_PRICE} for a left-chest logo, same price S–3XL, minimum 5 pieces, with nationwide delivery.`,
      },
    },
    {
      '@type': 'Question',
      name: 'What sizes of custom polo shirts are available in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sizes run S, M, L, XL, XXL, 2XL and 3XL at the same unit price. Mix sizes in one order so hospitality floors, event crews and golf teams get a full size run without a surcharge on larger garments.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I choose embroidery or print on polo shirts?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Embroidery suits left-chest crests on hotels, cafés, golf clubs and corporate uniforms where a stitched logo looks more permanent. Screen or digital print suits multi-colour artwork, larger back or sleeve placements, and short-run event kits. PrintNPack proofs before stitch or print.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the minimum order for custom polo shirts in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: `The minimum order is 5 pieces. Quantity bands then step 5–10, 11–20, 21–30, 31–40, 41–50 and 51+, with 8% off each quantity step. Extra print areas are +€1.50. A single left-chest placement starts from €${FROM_PRICE}.`,
      },
    },
    {
      '@type': 'Question',
      name: 'Do you deliver custom polo shirts across Ireland?',
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
      name: 'Custom Polo Shirts Ireland Buying Guide',
      item: PAGE_URL,
    },
  ],
};

const colourRows = [
  { colour: 'Black · Deep Navy · Navy · White', use: 'Hotels, cafés, corporate and event staff uniforms' },
  { colour: 'Bottle Green · Kelly Green', use: 'Landscaping, grounds teams and outdoor workwear' },
  { colour: 'Royal Blue · Sky · Heather', use: 'Golf clubs, leisure and lighter summer uniforms' },
  { colour: 'Red · Burgundy · Purple · Orange · Sunflower', use: 'Retail, hospitality accent teams and branded event crews' },
];

const buyerRows = [
  {
    buyer: 'Hotels & cafés',
    use: 'Left-chest embroidery on black, navy or red for front-of-house staff',
  },
  {
    buyer: 'Events & retail',
    use: 'Short-run printed or embroidered kits for crews and pop-ups',
  },
  {
    buyer: 'Golf clubs & leisure',
    use: 'Royal blue or white club crest polos for staff and member retail',
  },
  {
    buyer: 'Landscaping & outdoor',
    use: 'Bottle green workwear polos that stay smart on site',
  },
];

const compareRows = [
  {
    style: 'Custom polo shirts',
    detail: 'Fruit of the Loom 65/35 · from €19 · embroidery or print · collared staff look',
  },
  {
    style: 'Custom t-shirts',
    detail: 'From €15 chest print · softer promotional feel · events and giveaways',
  },
  {
    style: 'Custom sportswear',
    detail: 'AWDis Cool T from €16.50 · moisture-wicking · clubs and training kits',
  },
  {
    style: 'Hi-viz workwear',
    detail: 'DMS tabards from €12 · EN ISO 20471 Class 2 · sites and event security',
  },
];

export default function CustomPoloShirtsIrelandSizesMoqBuyingGuide() {
  const title =
    'Custom Polo Shirts Ireland: Sizes S–3XL, Embroidery vs Print & MOQ Buying Guide';
  const description = `How to buy custom polo shirts in Ireland — Fruit of the Loom 65/35, embroidery or print from €${FROM_PRICE}, same price S–3XL, MOQ from 5, with nationwide delivery from Ashbourne for hospitality, events, golf clubs and workwear.`;

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="custom polo shirts ireland, embroidered polo shirts dublin, company polo shirts cork, staff uniform polos galway, hospitality polo shirts ireland, golf club polo ireland, fruit of the loom polo ashbourne, branded polo shirts ireland, polo shirt moq ireland, embroidered workwear ireland"
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
          content="Custom polo shirts Ireland — black embroidered staff uniform for Dublin events"
        />
        <meta property="article:published_time" content="2026-11-01" />

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
          <span className="text-slate-900">Custom Polo Shirts Ireland</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            Apparel Guide
          </span>
          <span className="text-slate-400 text-sm">1 Nov 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Custom Polo Shirts Ireland: Sizes S–3XL, Embroidery vs Print &amp; MOQ Buying Guide
        </h1>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="relative rounded-2xl overflow-hidden h-48 col-span-2">
            <Image
              src={HERO_IMAGE}
              alt="Custom polo shirts Ireland — black embroidered events and hospitality staff uniform for Dublin"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 66vw, 512px"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative rounded-xl overflow-hidden flex-1">
              <Image
                src={HOSPITALITY_IMAGE}
                alt="Embroidered café polo shirts Ireland — red hospitality staff uniform with company logo for Cork"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden flex-1">
              <Image
                src={GOLF_IMAGE}
                alt="Custom golf club polo shirts Ireland — royal blue embroidered staff kit for Galway"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            A collared polo is still the default staff uniform for Irish hotels, cafés, golf clubs and
            event crews — smarter than a t-shirt, cooler than a hoodie, and easy to brand with a
            left-chest crest. This guide explains how to buy{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              custom polo shirts in Ireland
            </Link>
            : Fruit of the Loom 65/35 stock, embroidery versus print, the S–3XL size run at one price,
            and what the five-piece MOQ includes. Live from-prices start at €{FROM_PRICE} for a single
            left-chest placement, with nationwide delivery from Ashbourne.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            What you get: Fruit of the Loom 65/35 with embroidery or print
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            PrintNPack polos are Fruit of the Loom 65/35 cotton/poly pique — the everyday hospitality
            and workwear staple. You can embroider or print on the left chest, back or sleeve. Collar
            options include standard, button-down, ribbed and flat knit. Fourteen stock colours cover
            black, white, deep navy, navy, royal blue, bottle green, kelly green, purple, burgundy,
            red, orange, sunflower, sky and heather.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Proofs go out before stitch or print so Dublin, Cork and Galway teams can check placement
            and colour. Extra print areas are +€1.50 on top of the single-placement from-price. For the
            wider apparel range — t-shirts, hoodies, sportswear and hi-viz — start with the{' '}
            <Link
              href="/blog/branded-clothing-ireland-guide"
              className="text-blue-600 hover:underline"
            >
              branded clothing Ireland guide
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Who buys custom polo shirts in Ireland?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Most orders come from businesses that need a polished daily uniform rather than a one-off
            event tee. PrintNPack supplies polos nationwide from Ashbourne, Co. Meath.
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
            Stock colours that match Irish uniforms
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Pick a colour that survives laundry cycles and matches brand guidelines. The 14 Fruit of
            the Loom 65/35 colours group naturally by sector:
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
            Outdoor grounds teams often lock bottle green; hotels stick to black or navy; golf clubs
            favour royal blue or white for crest embroidery. Confirm the exact stock shade on the{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              custom polo shirts Ireland
            </Link>{' '}
            page before you approve artwork.
          </p>

          <div className="relative rounded-2xl overflow-hidden h-56 mb-8 not-prose">
            <Image
              src={LANDSCAPE_IMAGE}
              alt="Custom polo shirts Ireland — bottle green landscaping and grounds team workwear for Ashbourne orders"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Sizes S–3XL at the same price
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Every polo in the run is priced the same from <strong>S through 3XL</strong> (including
            XXL and 2XL). That matters when you kit a mixed hospitality floor or event crew — you are
            not penalised for ordering more large and XL pieces.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Mix sizes in one order against the five-piece minimum. Reorders for leavers or seasonal
            staff can reuse the same proof and colour, so Cork and Galway sites stay consistent with
            the Dublin set.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Embroidery vs print on polo shirts
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            <strong>Embroidery</strong> is the usual choice for a left-chest company crest — hotels,
            cafés, golf clubs and corporate uniforms where the logo needs to look permanent after
            repeated washes. <strong>Screen print</strong> and <strong>digital print</strong> suit
            multi-colour artwork, larger back or sleeve placements, and short-run event kits where
            turnaround and colour matching matter more than a stitched finish.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Common placement combos include chest only, large front, large back, one sleeve, chest +
            back, and chest + sleeves. Each extra area adds €1.50. Send a vector or high-resolution PNG
            and approve the proof before production starts.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-8 not-prose">
            <div className="relative rounded-2xl overflow-hidden h-44">
              <Image
                src={HOSPITALITY_IMAGE}
                alt="Hospitality polo shirts Ireland — embroidered red café staff uniform for Dublin front of house"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 384px"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden h-44">
              <Image
                src={GOLF_IMAGE}
                alt="Golf club polo shirts Ireland — royal blue embroidered kit for Cork and Galway clubs"
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
            left-chest embroidery or print starts from €{FROM_PRICE}.
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
            <li>From €{FROM_PRICE} — single left-chest placement on Fruit of the Loom 65/35</li>
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
            Polo vs t-shirt vs sportswear vs hi-viz
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Pick the garment that matches the job. Polos are the collared staff option; other lines
            cover promo tees, club kits and site safety.
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
              href="/blog/branded-clothing-ireland-guide"
              className="text-blue-600 hover:underline"
            >
              branded clothing Ireland guide
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Pair polos with other branded touchpoints
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Hospitality and event buyers often kit staff and the customer-facing table together:
          </p>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-6">
            <li>Custom polo shirts for front-of-house and event crews</li>
            <li>
              Printed coasters for bars and hotel desks —{' '}
              <Link
                href="/blog/printed-coasters-ireland-9x9-moq-buying-guide"
                className="text-blue-600 hover:underline"
              >
                printed coasters Ireland 9×9 MOQ guide
              </Link>
            </li>
            <li>
              Premium linen-feel napkins for dining rooms —{' '}
              <Link
                href="/blog/premium-linen-feel-napkins-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                premium linen-feel napkins Ireland sizes guide
              </Link>
            </li>
            <li>
              Business cards for managers and sales teams —{' '}
              <Link
                href="/blog/business-cards-ireland-quantities-buying-guide"
                className="text-blue-600 hover:underline"
              >
                business cards Ireland quantities guide
              </Link>
            </li>
          </ol>

          <div className="relative rounded-2xl overflow-hidden h-52 mb-8 not-prose">
            <Image
              src={HERO_IMAGE}
              alt="Company polo shirts Ireland — embroidered black uniform ready for nationwide delivery from Ashbourne"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Delivery across Ireland from Ashbourne
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            PrintNPack ships custom polo shirts from Ashbourne, Co. Meath to Dublin, Cork, Galway,
            Limerick and every county. Typical production is 3–5 business days after you approve the
            proof. Local buyers can also discuss collection from Co. Meath.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            UK or Europe delivery is not assumed in the Ireland workflow — ask when you need a quote
            outside Ireland or Northern Ireland.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How to order custom polo shirts in Ireland
          </h2>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-8">
            <li>Choose colour from the 14 Fruit of the Loom 65/35 stock shades</li>
            <li>Pick sizes across S–3XL and set quantity from 5 upward</li>
            <li>Select embroidery or print, then chest, back and/or sleeve placements</li>
            <li>
              Open the{' '}
              <Link href={HUB_HREF} className="text-blue-600 hover:underline">
                custom polo shirts Ireland
              </Link>{' '}
              page or send artwork via the{' '}
              <Link href="/quote" className="text-blue-600 hover:underline">
                free quote form
              </Link>
            </li>
            <li>Approve the proof, then take nationwide Ireland delivery from Ashbourne</li>
          </ol>

          <div className="bg-slate-900 rounded-xl p-6 mb-8 text-white not-prose">
            <p className="font-semibold mb-1">Ready to kit your team in branded polos?</p>
            <p className="text-slate-400 text-sm mb-4">
              Custom polo shirts from €{FROM_PRICE} — Fruit of the Loom 65/35, embroidery or print,
              same price S–3XL, MOQ 5, Ireland delivery from Ashbourne.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={HUB_HREF}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Custom Polo Shirts Ireland →
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
                q: 'Where can I buy custom polo shirts in Ireland?',
                a: `PrintNPack supplies embroidered and printed custom polo shirts across Ireland from Ashbourne, Co. Meath. Fruit of the Loom 65/35 polos, from €${FROM_PRICE} for a left-chest logo, same price S–3XL, minimum 5 pieces, with nationwide delivery.`,
              },
              {
                q: 'What sizes of custom polo shirts are available in Ireland?',
                a: 'Sizes run S, M, L, XL, XXL, 2XL and 3XL at the same unit price. Mix sizes in one order so hospitality floors, event crews and golf teams get a full size run without a surcharge on larger garments.',
              },
              {
                q: 'Should I choose embroidery or print on polo shirts?',
                a: 'Embroidery suits left-chest crests on hotels, cafés, golf clubs and corporate uniforms where a stitched logo looks more permanent. Screen or digital print suits multi-colour artwork, larger back or sleeve placements, and short-run event kits. PrintNPack proofs before stitch or print.',
              },
              {
                q: 'What is the minimum order for custom polo shirts in Ireland?',
                a: `The minimum order is 5 pieces. Quantity bands then step 5–10, 11–20, 21–30, 31–40, 41–50 and 51+, with 8% off each quantity step. Extra print areas are +€1.50. A single left-chest placement starts from €${FROM_PRICE}.`,
              },
              {
                q: 'Do you deliver custom polo shirts across Ireland?',
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
              href: '/blog/printed-coasters-ireland-9x9-moq-buying-guide',
              src: COASTER_IMAGE,
              title: 'Printed Coasters Ireland: 9×9 & MOQ Buying Guide',
            },
            {
              href: '/blog/premium-linen-feel-napkins-ireland-sizes-buying-guide',
              src: NAPKIN_IMAGE,
              title: 'Premium Linen-Feel Napkins Ireland: Sizes & MOQ Guide',
            },
            {
              href: '/blog/business-cards-ireland-quantities-buying-guide',
              src: BUSINESS_CARD_IMAGE,
              title: 'Business Cards Ireland: Quantities Buying Guide',
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
