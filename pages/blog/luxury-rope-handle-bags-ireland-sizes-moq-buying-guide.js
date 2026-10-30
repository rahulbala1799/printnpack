import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';
import { ropeBagFromPrice } from '../../data/luxury-rope-handle-bags';

const PAGE_URL = `${siteUrl}/blog/luxury-rope-handle-bags-ireland-sizes-moq-buying-guide`;
const HUB_HREF = '/luxury-rope-handle-bags-ireland';
const HERO_IMAGE = '/images/products/luxury-rope-handle-bags/hero.jpg';
const LENGTH_IMAGE = '/images/products/luxury-rope-handle-bags/rope-length.jpg';
const RIBBON_IMAGE = '/images/products/luxury-rope-handle-bags/closing-ribbons.jpg';
const FOIL_IMAGE = '/images/products/luxury-rope-handle-bags/gold-foil.jpg';
const DIE_CUT_IMAGE =
  '/images/products/luxury-paper-bags/luxury-paper-bags-ireland-premium-die-cut.jpg';
const TISSUE_IMAGE =
  '/images/products/custom-printed-tissue-paper/luxury-custom-printed-tissue-paper-black-gold-ireland.jpg';
const RIBBON_PRODUCT_IMAGE = '/images/products/printed-ribbon/printed-ribbon-white.jpg';
const TWISTED_IMAGE = '/images/products/twisted-handle-bags/1.png';

const FROM_PRICE = ropeBagFromPrice().toFixed(2);

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Luxury Rope Handle Bags Ireland: 13 Sizes, Short vs Shoulder & MOQ Buying Guide',
  description:
    'A practical buying guide to luxury rope handle paper bags in Ireland — 13 sizes from 15×8×20 cm to 54×14×45 cm, short vs shoulder cotton rope, 1–2 colour or full-colour print, MOQ from 250, with Ireland delivery included from Ashbourne.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-10-30',
  dateModified: '2026-10-30',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I buy luxury rope handle bags in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: `PrintNPack supplies printed luxury rope handle bags across Ireland from Ashbourne, Co. Meath. White kraft carrier bags with a cotton rope handle, 13 sizes, from €${FROM_PRICE} ex VAT for 250 bags, with delivery to Ireland included.`,
      },
    },
    {
      '@type': 'Question',
      name: 'What rope handle bag sizes are available in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Thirteen sizes measured width × depth × height, from 15 × 8 × 20 cm up to 54 × 14 × 45 cm. The range includes vertical shoppers, one wine bag (11.5 × 9.5 × 35 cm) and wide horizontal bags for boutiques and gift retail.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I choose a short rope or a shoulder rope?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Short rope is about 50 cm and sits in the hand. Shoulder rope is about 80 cm so the bag hangs on the shoulder. Rope colour does not change the price — there are 18 cotton colours. The longer rope is an optional upgrade on the quote.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the minimum order for rope handle bags in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: `The smallest order is 250 bags. Quantities then step in 250s up to 5,000, then in 500s up to 10,500. Unprinted bags are not available — every run is printed in 1 colour, 2 colours or full colour.`,
      },
    },
    {
      '@type': 'Question',
      name: 'Is delivery included for rope handle bags in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Quoted prices are ex VAT and include one delivery to Ireland. A bigger bag or a larger quantity includes a higher delivery rate. PrintNPack ships from Ashbourne to Dublin, Cork, Galway and nationwide.',
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
      name: 'Luxury Rope Handle Bags Ireland Buying Guide',
      item: PAGE_URL,
    },
  ],
};

const sizeRows = [
  {
    size: '15 × 8 × 20 cm · 16 × 7 × 25 cm',
    use: 'Small vertical — jewellery, cosmetics, café retail and favour bags',
  },
  {
    size: '11.5 × 9.5 × 35 cm',
    use: 'Wine bag — bottles, gift bottles and tall packaging',
  },
  {
    size: '20 × 16 × 20 cm · 24 × 10 × 30 cm',
    use: 'Everyday vertical shoppers for fashion and gift retail',
  },
  {
    size: '26 × 12 × 36 cm · 31 × 10 × 40 cm',
    use: 'Taller vertical bags for garments and larger boxed gifts',
  },
  {
    size: '35 × 10 × 24 cm · 42 × 12 × 32 cm',
    use: 'Horizontal bags — wider footprint for fashion and hampers',
  },
  {
    size: '32 × 18 × 39 cm · 42 × 20 × 30 cm · 44 × 14 × 36 cm',
    use: 'Large vertical and horizontal shoppers for boutiques',
  },
  {
    size: '54 × 14 × 45 cm',
    use: 'Largest horizontal — oversized retail and presentation packs',
  },
];

const compareRows = [
  {
    style: 'Luxury rope handle',
    detail: 'Cotton rope · 13 sizes · MOQ 250 · printed only · Ireland delivery included',
  },
  {
    style: 'Luxury die-cut',
    detail: 'Handle cut from the paper · lower MOQ from 20 · no rope attachment',
  },
  {
    style: 'Twisted handle',
    detail: 'Twisted paper handles · sizes Small–Large · MOQ from 20 · digital print',
  },
];

const buyerRows = [
  {
    buyer: 'Boutiques & fashion retail',
    use: 'Walk-out carrier that matches rope colour to brand and season',
  },
  {
    buyer: 'Gift shops & florists',
    use: 'Wine bag and mid sizes with optional closing ribbons for tied gifts',
  },
  {
    buyer: 'Ecommerce & cosmetics',
    use: 'Printed bag plus tissue and ribbon for a full unboxing kit',
  },
  {
    buyer: 'Corporate & hospitality',
    use: 'Full-colour or foil finishes for client gifts and hotel retail',
  },
];

export default function LuxuryRopeHandleBagsIrelandSizesMoqBuyingGuide() {
  const title =
    'Luxury Rope Handle Bags Ireland: 13 Sizes, Short vs Shoulder & MOQ Buying Guide';
  const description = `How to buy luxury rope handle paper bags in Ireland — 13 sizes from 15×8×20 cm to 54×14×45 cm, short vs shoulder cotton rope, 1–2 colour or full-colour print, MOQ from 250, from €${FROM_PRICE} ex VAT with Ireland delivery included from Ashbourne.`;

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="luxury rope handle bags ireland, cotton rope paper bags dublin, printed rope handle bags cork, boutique carrier bags galway, shoulder rope bags ireland, wine paper bag ireland, white kraft rope bags ashbourne, branded shopping bags ireland, rope handle bags moq, luxury paper bags ireland"
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
          content="Luxury rope handle bags Ireland — white kraft bag with black cotton rope for Dublin boutiques"
        />
        <meta property="article:published_time" content="2026-10-30" />

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
          <span className="text-slate-900">Luxury Rope Handle Bags Ireland</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            Retail Guide
          </span>
          <span className="text-slate-400 text-sm">30 Oct 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Luxury Rope Handle Bags Ireland: 13 Sizes, Short vs Shoulder &amp; MOQ Buying Guide
        </h1>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="relative rounded-2xl overflow-hidden h-48 col-span-2">
            <Image
              src={HERO_IMAGE}
              alt="Luxury rope handle bags Ireland — white kraft shopping bag with short black cotton rope for Dublin boutiques"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 66vw, 512px"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative rounded-xl overflow-hidden flex-1">
              <Image
                src={LENGTH_IMAGE}
                alt="Rope handle bags Ireland — short hand rope versus shoulder length cotton cord for Cork retail"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden flex-1">
              <Image
                src={FOIL_IMAGE}
                alt="Printed rope handle bag Ireland — white kraft with gold foil wordmark for Galway gift shops"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            A cotton rope handle turns a white kraft carrier into the bag Irish boutiques and gift
            retailers reach for when twisted paper feels too light and a die-cut handle is not enough.
            This guide explains how to buy{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              luxury rope handle bags in Ireland
            </Link>
            : which of the 13 sizes to pick, when a short rope beats a shoulder rope, how print and
            finishes work, and what the 250-bag MOQ includes. Prices below are ex VAT from the live
            quote — from €{FROM_PRICE} for 250 bags, with Ireland delivery included from Ashbourne.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            What you get: 170gsm white kraft with a cotton rope
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            PrintNPack rope handle bags are printed on 170gsm white kraft — standard or FSC at the
            same price. The handle is cotton rope in 18 colours; choosing white, black, navy, cream or
            another shade does not change the price. Print is 1 colour (one PMS), 2 colours or full
            colour. Unprinted bags are not available on this line.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Optional finishes include gloss or matt lamination (same price as each other), partial
            gloss, gold or silver foil (same price as each other), and white or black closing ribbons
            glued at the opening so the bag can be tied shut. Closing ribbons are not the handle —
            the cotton rope still carries the bag. Pair the bag with{' '}
            <Link
              href="/custom-printed-tissue-paper-ireland"
              className="text-blue-600 hover:underline"
            >
              custom printed tissue paper
            </Link>{' '}
            and{' '}
            <Link href="/printed-ribbon-ireland" className="text-blue-600 hover:underline">
              custom printed satin ribbon
            </Link>{' '}
            for a complete Dublin, Cork or Galway retail finish.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Who buys rope handle bags in Ireland?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Most orders come from brands that want a heavier, more premium walk-out bag than twisted
            or flat-handle kraft. PrintNPack supplies rope bags for fashion, gifts, cosmetics and
            hospitality nationwide.
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
            Thirteen sizes: width × depth × height
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Every size is listed as width × depth × height. The range runs from a compact 15 × 8 × 20
            cm vertical bag to a 54 × 14 × 45 cm horizontal shopper, with a dedicated wine bag at 11.5
            × 9.5 × 35 cm. Quote the exact size on the product page — larger bags raise both print
            and delivery on the live line total.
          </p>
          <div className="overflow-x-auto mb-6 not-prose">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-3 pr-4 font-semibold text-slate-900">Size</th>
                  <th className="py-3 font-semibold text-slate-900">Best for</th>
                </tr>
              </thead>
              <tbody>
                {sizeRows.map((row) => (
                  <tr key={row.size} className="border-b border-slate-100">
                    <td className="py-3 pr-4 font-medium text-slate-800">{row.size}</td>
                    <td className="py-3 text-slate-700">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-700 leading-relaxed mb-8">
            Vertical bags suit hanging garments and tall gifts; horizontal bags give a wider base for
            folded fashion and hampers. Use the wine bag when the product is a bottle — do not force a
            standard shopper to stand in for it.
          </p>

          <div className="relative rounded-2xl overflow-hidden h-56 mb-8 not-prose">
            <Image
              src={LENGTH_IMAGE}
              alt="Short vs shoulder rope bags Ireland — hand-length and 80 cm cotton cord compared for Ashbourne orders"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Short rope vs shoulder rope
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Choose a <strong>short rope</strong> (about 50 cm) when customers carry the bag in one
            hand from the till to the car — the classic boutique walk-out. Choose a{' '}
            <strong>shoulder rope</strong> (about 80 cm) when the bag needs to hang free for markets,
            shopping streets or larger loads.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Rope colour is free to choose across 18 options. The longer cord is priced as an optional
            upgrade on the quote; gloss, foil and closing ribbons are separate finish lines. Check the
            live total on the{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              luxury rope handle bags Ireland
            </Link>{' '}
            page rather than estimating from this guide.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            MOQ, print colours and from-price
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            The smallest order is <strong>250 bags</strong>. Quantities then climb in steps of 250 up
            to 5,000, then in steps of 500 up to 10,500. Every bag is printed — 1 colour, 2 colours or
            full colour — so plan artwork before you lock quantity.
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
            <li>
              From €{FROM_PRICE} ex VAT — 250 bags at the starting size and print on the live quote,
              Ireland delivery included
            </li>
            <li>FSC white kraft is the same price as standard 170gsm white kraft</li>
            <li>All 18 rope colours are the same price; white and black closing ribbons match each other</li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-8">
            Bigger sizes, longer ropes, lamination and foil change the line total. Use the
            configurator on the product page for your exact run — do not invent catalogue rates from
            this guide.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-8 not-prose">
            <div className="relative rounded-2xl overflow-hidden h-44">
              <Image
                src={RIBBON_IMAGE}
                alt="Rope handle bags with closing ribbons Ireland — white kraft tied shut for Dublin gift retail"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 384px"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden h-44">
              <Image
                src={FOIL_IMAGE}
                alt="Gold foil rope handle bag Ireland — premium finish for Cork and Galway boutiques"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 384px"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Rope vs die-cut vs twisted handle
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Pick the handle style that matches MOQ, look and budget. Rope is the premium cotton-cord
            option; die-cut and twisted handle lines suit smaller reprint runs.
          </p>
          <div className="overflow-x-auto mb-6 not-prose">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-3 pr-4 font-semibold text-slate-900">Style</th>
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
            For die-cut details see our{' '}
            <Link
              href="/blog/luxury-die-cut-paper-bags-ireland-buying-guide"
              className="text-blue-600 hover:underline"
            >
              luxury die-cut paper bags Ireland buying guide
            </Link>
            . For twisted paper handles and lower MOQs, read the{' '}
            <Link
              href="/blog/twisted-handle-paper-bags-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              twisted handle paper bags Ireland sizes guide
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Build a branded retail kit
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Rope bags work best as part of a set Irish retailers can reorder together:
          </p>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-6">
            <li>Luxury rope handle bag for the walk-out carrier</li>
            <li>
              Custom printed tissue as the first branded layer —{' '}
              <Link
                href="/blog/custom-printed-tissue-paper-ireland-buying-guide"
                className="text-blue-600 hover:underline"
              >
                custom printed tissue paper Ireland buying guide
              </Link>
            </li>
            <li>
              Printed satin ribbon for bows and seals —{' '}
              <Link
                href="/blog/custom-printed-ribbon-ireland-widths-moq-buying-guide"
                className="text-blue-600 hover:underline"
              >
                custom printed ribbon Ireland widths &amp; MOQ guide
              </Link>
            </li>
            <li>Optional closing ribbons on the bag itself when gifts leave the shop tied shut</li>
          </ol>

          <div className="relative rounded-2xl overflow-hidden h-52 mb-8 not-prose">
            <Image
              src={DIE_CUT_IMAGE}
              alt="Luxury paper bags Ireland — compare die-cut carriers with cotton rope handle bags for nationwide retail"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Delivery across Ireland from Ashbourne
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Quoted rope bag prices include one delivery to Ireland. PrintNPack ships from Ashbourne,
            Co. Meath to Dublin, Cork, Galway, Limerick and every county. A bigger bag or a larger
            quantity includes a higher delivery rate — the figure updates when you change the
            configurator.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            UK or Europe delivery is not assumed in the Ireland-included price — ask when you need a
            quote outside Ireland. Local buyers can also discuss collection from Co. Meath.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How to order luxury rope handle bags in Ireland
          </h2>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-8">
            <li>Pick size (width × depth × height) from the 13 options</li>
            <li>Choose short or shoulder rope and one of 18 rope colours</li>
            <li>Select 1 colour, 2 colours or full-colour print, plus any lamination, foil or ribbons</li>
            <li>
              Set quantity from 250 upward on the{' '}
              <Link href={HUB_HREF} className="text-blue-600 hover:underline">
                luxury rope handle bags Ireland
              </Link>{' '}
              page, or request help via the{' '}
              <Link href="/quote" className="text-blue-600 hover:underline">
                free quote form
              </Link>
            </li>
            <li>Approve artwork, then take Ireland delivery included in the price</li>
          </ol>

          <div className="bg-slate-900 rounded-xl p-6 mb-8 text-white not-prose">
            <p className="font-semibold mb-1">Ready to brand your carrier bags?</p>
            <p className="text-slate-400 text-sm mb-4">
              Luxury rope handle bags from €{FROM_PRICE} ex VAT — 13 sizes, short or shoulder cotton
              rope, MOQ 250, Ireland delivery included from Ashbourne.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={HUB_HREF}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Rope Handle Bags Ireland →
              </Link>
              <Link
                href="/quote"
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/luxury-paper-bags-ireland"
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Luxury Die-Cut Bags
              </Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6 not-prose">
            {[
              {
                q: 'Where can I buy luxury rope handle bags in Ireland?',
                a: `PrintNPack supplies printed luxury rope handle bags across Ireland from Ashbourne, Co. Meath. White kraft carrier bags with a cotton rope handle, 13 sizes, from €${FROM_PRICE} ex VAT for 250 bags, with delivery to Ireland included.`,
              },
              {
                q: 'What rope handle bag sizes are available in Ireland?',
                a: 'Thirteen sizes measured width × depth × height, from 15 × 8 × 20 cm up to 54 × 14 × 45 cm. The range includes vertical shoppers, one wine bag (11.5 × 9.5 × 35 cm) and wide horizontal bags for boutiques and gift retail.',
              },
              {
                q: 'Should I choose a short rope or a shoulder rope?',
                a: 'Short rope is about 50 cm and sits in the hand. Shoulder rope is about 80 cm so the bag hangs on the shoulder. Rope colour does not change the price — there are 18 cotton colours. The longer rope is an optional upgrade on the quote.',
              },
              {
                q: 'What is the minimum order for rope handle bags in Ireland?',
                a: 'The smallest order is 250 bags. Quantities then step in 250s up to 5,000, then in 500s up to 10,500. Unprinted bags are not available — every run is printed in 1 colour, 2 colours or full colour.',
              },
              {
                q: 'Is delivery included for rope handle bags in Ireland?',
                a: 'Yes. Quoted prices are ex VAT and include one delivery to Ireland. A bigger bag or a larger quantity includes a higher delivery rate. PrintNPack ships from Ashbourne to Dublin, Cork, Galway and nationwide.',
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
              href: '/blog/luxury-die-cut-paper-bags-ireland-buying-guide',
              src: DIE_CUT_IMAGE,
              title: 'Luxury Die-Cut Paper Bags Ireland Buying Guide',
            },
            {
              href: '/blog/twisted-handle-paper-bags-ireland-sizes-buying-guide',
              src: TWISTED_IMAGE,
              title: 'Twisted Handle Paper Bags Ireland: Sizes Buying Guide',
            },
            {
              href: '/blog/custom-printed-ribbon-ireland-widths-moq-buying-guide',
              src: RIBBON_PRODUCT_IMAGE,
              title: 'Custom Printed Ribbon Ireland: Widths & MOQ Buying Guide',
            },
            {
              href: '/blog/custom-printed-tissue-paper-ireland-buying-guide',
              src: TISSUE_IMAGE,
              title: 'Custom Printed Tissue Paper Ireland: Ecommerce Unboxing Guide',
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
