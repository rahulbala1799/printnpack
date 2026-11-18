import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/pocket-napkins-ireland-cutlery-moq-buying-guide`;
const HUB_HREF = '/pocket-napkins-ireland';
const HERO_IMAGE = '/images/pocket-napkins/pocket-napkin-riverdale-christmas-ireland.jpg';
const IVY_IMAGE = '/images/pocket-napkins/pocket-napkin-ivy-crest-christmas-ireland.jpg';
const BELFRY_IMAGE = '/images/pocket-napkins/pocket-napkin-belfry-christmas-ireland.jpg';
const OAKRIDGE_POCKET_IMAGE =
  '/images/pocket-napkins/pocket-napkin-oakridge-cutlery-christmas-ireland.jpg';
const OAKRIDGE_STAG_IMAGE =
  '/images/pocket-napkins/pocket-napkin-oakridge-stag-christmas-ireland.jpg';
const COCKTAIL_IMAGE = '/images/napkins/cocktail-napkin-tamarind-lane-ireland.jpg';
const LINEN_IMAGE =
  '/images/products/premium-linen-feel-napkins/airlaid-kinetic-labs-ireland.jpg';
const COASTER_IMAGE = '/images/coasters/coaster-harbour-bean-ireland.jpg';
const CUSTOM_NAPKIN_IMAGE =
  '/images/blog/custom-napkins/custom-napkins-uk-ireland-restaurant-table.jpg';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Pocket Napkins Ireland: Cutlery Pocket Fold, MOQ & Price Buying Guide',
  description:
    'How to buy printed pocket napkins in Ireland — linen-feel cutlery pocket fold, MOQ from 25, priced 10% above 10 × 10 cm cocktail napkins, with delivery from Ashbourne for restaurants, hotels and Christmas tables.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-11-18',
  dateModified: '2026-11-18',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I buy printed pocket napkins in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack prints pocket napkins in Ashbourne, Co. Meath and ships across Ireland — Dublin, Cork, Galway and every county — plus Europe when the quote confirms delivery. The napkin folds into a pocket for a fork and knife, with your restaurant name on the front. Minimum order is 25.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much are printed pocket napkins in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pocket napkins are priced at 10% above the 10 × 10 cm cocktail napkin total for the same quantity, ex VAT. 25 are €36.03. 100 are €92.40. 500 are €286.00. 1,000 are €478.50. 10,000 are €2,860.00. Full colour and 1 colour use the same price. The full table is on the pocket napkins Ireland page.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a pocket napkin?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A pocket napkin is a linen-feel airlaid napkin folded into a pocket that holds a fork and knife. The restaurant or hotel name sits on the front of the fold. Guests pull the cutlery from the pocket at the place setting.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the minimum order for pocket napkins in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The minimum is 25 pocket napkins. The price table lists 25, 50, 100, 150, 250, 500, 1,000, 2,000, 5,000 and 10,000. You can also type another quantity — the total updates from the same 10% rule above cocktail napkins.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you deliver pocket napkins across Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We print them in Ashbourne, Co. Meath, and ship across Ireland and Europe. Delivery is confirmed on the quote. Usual print time is 3 to 5 working days after the artwork proof is approved.',
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
      name: 'Pocket Napkins Ireland Buying Guide',
      item: PAGE_URL,
    },
  ],
};

const priceRows = [
  { qty: '25', total: '€36.03', unit: '€1.44' },
  { qty: '100', total: '€92.40', unit: '€0.92' },
  { qty: '500', total: '€286.00', unit: '€0.57' },
  { qty: '1,000', total: '€478.50', unit: '€0.48' },
  { qty: '10,000', total: '€2,860.00', unit: '€0.29' },
];

const buyerRows = [
  {
    buyer: 'Restaurants & hotels',
    use: 'Named place settings with fork and knife already in the fold',
  },
  {
    buyer: 'Christmas lunch tables',
    use: 'Seasonal pine, stag or holly artwork for December service in Dublin and Cork',
  },
  {
    buyer: 'Pubs & cafés',
    use: 'Cutlery stays with the napkin when tables turn quickly',
  },
  {
    buyer: 'Caterers & events',
    use: 'Branded pocket instead of a loose napkin plus a separate sleeve',
  },
];

export default function PocketNapkinsIrelandCutleryMoqBuyingGuide() {
  const title =
    'Pocket Napkins Ireland: Cutlery Pocket Fold, MOQ & Price Buying Guide';
  const description =
    'Buy printed pocket napkins in Ireland with confidence — linen-feel cutlery pocket fold, MOQ from 25, priced 10% above 10 × 10 cm cocktail napkins (€36.03 / €286 / €478.50), with delivery to Dublin, Cork, Galway and nationwide from Ashbourne.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="pocket napkins ireland, printed pocket napkins dublin, cutlery pocket napkins ireland, restaurant pocket napkins cork, christmas pocket napkins galway, napkin with fork and knife ireland, branded pocket napkins ashbourne, pocket napkin MOQ ireland, linen feel pocket napkins ireland, hospitality pocket napkins ireland"
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
          content="Pocket napkins Ireland — printed cutlery pocket napkin for Dublin restaurants"
        />
        <meta property="article:published_time" content="2026-11-18" />

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
          <span className="text-slate-900">Pocket Napkins Ireland</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            Hospitality Guide
          </span>
          <span className="text-slate-400 text-sm">18 Nov 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Pocket Napkins Ireland: Cutlery Pocket Fold, MOQ &amp; Price Buying Guide
        </h1>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="relative rounded-2xl overflow-hidden h-48 col-span-2">
            <Image
              src={HERO_IMAGE}
              alt="Pocket napkins Ireland — Riverdale printed cutlery pocket napkin for Dublin Christmas tables"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 66vw, 512px"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative rounded-xl overflow-hidden flex-1">
              <Image
                src={IVY_IMAGE}
                alt="Printed pocket napkins Ireland — Ivy Crest restaurant napkin for Cork hospitality"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden flex-1">
              <Image
                src={OAKRIDGE_POCKET_IMAGE}
                alt="Cutlery pocket napkins Ireland — Oakridge fold holding fork and knife for Galway hotels"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            A loose napkin and a separate cutlery sleeve slow the place setting. This guide explains
            how to buy{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              printed pocket napkins in Ireland
            </Link>{' '}
            — linen-feel airlaid stock folded so a fork and knife sit in the pocket, with your name on
            the front, from 25 pieces, priced clearly against cocktail napkins.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            PrintNPack prints them in Ashbourne, Co. Meath and delivers to Dublin, Cork, Galway and
            every county. Europe shipping is available when the quote confirms it. The figures below
            come from the live pocket napkin price table — do not invent or reuse rates from other
            printers.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            What is a pocket napkin?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            A pocket napkin is not a different paper size to invent from scratch. It is a printed
            linen-feel airlaid napkin folded into a cutlery pocket. The restaurant or hotel name sits
            on the front of the fold. Guests pull the fork and knife from the pocket at the place
            setting — the fold does the job of a cutlery sleeve, and the print does the job of a
            small logo card.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Pricing is tied to our{' '}
            <Link href="/products/cocktail-napkins" className="text-blue-600 hover:underline">
              10 × 10 cm cocktail napkin
            </Link>
            : take that order total for the same quantity and add 10%. Full colour and 1 colour use
            the same pocket price. Keep artwork in the middle of the pocket so the fold edge does not
            cut the name off.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Pocket napkin prices in Ireland (ex VAT)
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            The order total is the price. Selected steps from the pocket napkin table:
          </p>
          <div className="overflow-x-auto mb-6 not-prose">
            <table className="min-w-full text-sm text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead className="bg-slate-100 text-slate-900">
                <tr>
                  <th className="px-4 py-3 font-semibold">Quantity</th>
                  <th className="px-4 py-3 font-semibold">Order total</th>
                  <th className="px-4 py-3 font-semibold">Each</th>
                </tr>
              </thead>
              <tbody>
                {priceRows.map((row, index) => (
                  <tr
                    key={row.qty}
                    className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}
                  >
                    <td className="px-4 py-3 font-semibold text-slate-900">{row.qty}</td>
                    <td className="px-4 py-3 text-slate-700">{row.total}</td>
                    <td className="px-4 py-3 text-slate-700">{row.unit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-700 leading-relaxed mb-8">
            The full ladder — including 50, 150, 250, 2,000 and 5,000 — is on the{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              pocket napkins Ireland
            </Link>{' '}
            page. Type another quantity in the quote builder and the total still follows the same
            cocktail-plus-10% rule.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Pocket vs cocktail vs linen-feel napkins
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Choose the format that matches how cutlery reaches the table — not a generic napkin
            essay.
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
            <li>
              <strong>Pocket napkins</strong> — cutlery in the fold, name on the front; priced 10%
              above cocktail for the same quantity
            </li>
            <li>
              <strong>Cocktail / beverage napkins</strong> — flat 10 × 10 cm closed (20 × 40 cm
              open); the price base pocket napkins sit on — see our{' '}
              <Link href="/blog/custom-printed-napkins" className="text-blue-600 hover:underline">
                custom printed napkins guide
              </Link>
            </li>
            <li>
              <strong>Larger linen-feel sizes</strong> — 10 × 20 to 20 × 20 cm for plate and dinner
              service without a cutlery pocket — covered in the{' '}
              <Link
                href="/blog/premium-linen-feel-napkins-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                premium linen-feel napkins Ireland buying guide
              </Link>
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-8">
            Wedding airlaid and kraft napkins are a separate suite for couples and planners. Pocket
            napkins are the hospitality SKU when the fork and knife need to travel with the branded
            fold.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-8 not-prose">
            <div className="relative rounded-2xl overflow-hidden h-44">
              <Image
                src={BELFRY_IMAGE}
                alt="Pocket napkins Ireland — Belfry stag Christmas print for Dublin hotel lunch"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 384px"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden h-44">
              <Image
                src={OAKRIDGE_STAG_IMAGE}
                alt="Printed pocket napkins Ireland — Oakridge stag and holly artwork for Cork restaurants"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 384px"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Who buys pocket napkins in Ireland
          </h2>
          <div className="overflow-x-auto mb-6 not-prose">
            <table className="min-w-full text-sm text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead className="bg-slate-100 text-slate-900">
                <tr>
                  <th className="px-4 py-3 font-semibold">Buyer</th>
                  <th className="px-4 py-3 font-semibold">Typical use</th>
                </tr>
              </thead>
              <tbody>
                {buyerRows.map((row, index) => (
                  <tr
                    key={row.buyer}
                    className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}
                  >
                    <td className="px-4 py-3 font-semibold text-slate-900">{row.buyer}</td>
                    <td className="px-4 py-3 text-slate-700">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-700 leading-relaxed mb-8">
            Example Christmas prints on the product page — Riverdale, Ivy Crest, The Belfry and
            Oakridge — are sample names only. Send your own logo or seasonal artwork and we set a
            proof before printing.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Minimum order and lead time
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            The minimum order is <strong>25 pocket napkins</strong>. Small pop-ups and tasting menus
            often sit near 25–100. Busy restaurant and hotel Christmas runs usually land in the
            500–1,000 band once spare covers and second sittings are counted. Type the exact cover
            count if it does not match a preset step.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Usual print time is <strong>3 to 5 working days</strong> after you approve the artwork
            proof. Build that window into December menus so Ashbourne dispatch reaches Dublin, Cork
            and Galway venues before service starts.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Pair pocket napkins with coasters and table branding
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Pocket napkins carry the cutlery. Keep drinks branding consistent with printed coasters
            and the wider napkin range so the table reads as one supplier, not three different
            stocks.
          </p>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-8">
            <li>
              Pocket napkins for the place setting —{' '}
              <Link href={HUB_HREF} className="text-blue-600 hover:underline">
                pocket napkins Ireland
              </Link>
            </li>
            <li>
              Cocktail or larger linen-feel napkins where no cutlery pocket is needed —{' '}
              <Link href="/custom-printed-napkins" className="text-blue-600 hover:underline">
                custom printed napkins
              </Link>
            </li>
            <li>
              Round printed coasters for the bar — see our{' '}
              <Link
                href="/blog/printed-coasters-ireland-9x9-moq-buying-guide"
                className="text-blue-600 hover:underline"
              >
                printed coasters Ireland buying guide
              </Link>
            </li>
            <li>
              Napkins Ireland hub for the full hospitality napkin map —{' '}
              <Link href="/napkins-ireland" className="text-blue-600 hover:underline">
                napkins Ireland
              </Link>
            </li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Delivery across Ireland from Ashbourne
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Pocket napkins are printed in Ashbourne, Co. Meath. Hotels and restaurants can collect
            locally, or PrintNPack ships to Dublin, Cork, Galway, Limerick and every county. That
            suits city dining rooms and country houses that need Christmas stock ahead of the first
            lunch sitting.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Europe shipping is available when the quote confirms delivery cost and timing — do not
            assume an Ireland-only figure covers UK or EU routes. Northern Ireland and Great Britain
            orders follow the same quote path as other PrintNPack napkin print.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How to order pocket napkins in Ireland
          </h2>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-8">
            <li>Decide cover count and whether you need Christmas or year-round artwork</li>
            <li>Keep the logo or name centred in the pocket area</li>
            <li>
              Pick a quantity from 25 on the{' '}
              <Link href={HUB_HREF} className="text-blue-600 hover:underline">
                pocket napkins Ireland
              </Link>{' '}
              page, or ask via the{' '}
              <Link href="/quote" className="text-blue-600 hover:underline">
                free quote form
              </Link>
            </li>
            <li>Approve the proof (usual print window 3–5 working days after approval)</li>
            <li>Take Ireland delivery or Ashbourne collection</li>
          </ol>

          <div className="bg-slate-900 rounded-xl p-6 mb-8 text-white not-prose">
            <p className="font-semibold mb-1">Ready to print pocket napkins?</p>
            <p className="text-slate-400 text-sm mb-4">
              Linen-feel cutlery pocket napkins — MOQ from 25, 10% above cocktail pricing, printed in
              Ashbourne with nationwide Ireland delivery.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={HUB_HREF}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Pocket Napkins Ireland →
              </Link>
              <Link
                href="/quote"
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/products/cocktail-napkins"
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Cocktail Napkins
              </Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6 not-prose">
            {[
              {
                q: 'Where can I buy printed pocket napkins in Ireland?',
                a: 'PrintNPack prints pocket napkins in Ashbourne, Co. Meath and ships across Ireland — Dublin, Cork, Galway and every county — plus Europe when the quote confirms delivery. The napkin folds into a pocket for a fork and knife, with your restaurant name on the front. Minimum order is 25.',
              },
              {
                q: 'How much are printed pocket napkins in Ireland?',
                a: 'Pocket napkins are priced at 10% above the 10 × 10 cm cocktail napkin total for the same quantity, ex VAT. 25 are €36.03. 100 are €92.40. 500 are €286.00. 1,000 are €478.50. 10,000 are €2,860.00. Full colour and 1 colour use the same price. The full table is on the pocket napkins Ireland page.',
              },
              {
                q: 'What is a pocket napkin?',
                a: 'A pocket napkin is a linen-feel airlaid napkin folded into a pocket that holds a fork and knife. The restaurant or hotel name sits on the front of the fold. Guests pull the cutlery from the pocket at the place setting.',
              },
              {
                q: 'What is the minimum order for pocket napkins in Ireland?',
                a: 'The minimum is 25 pocket napkins. The price table lists 25, 50, 100, 150, 250, 500, 1,000, 2,000, 5,000 and 10,000. You can also type another quantity — the total updates from the same 10% rule above cocktail napkins.',
              },
              {
                q: 'Do you deliver pocket napkins across Ireland?',
                a: 'Yes. We print them in Ashbourne, Co. Meath, and ship across Ireland and Europe. Delivery is confirmed on the quote. Usual print time is 3 to 5 working days after the artwork proof is approved.',
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
              href: '/blog/custom-printed-napkins',
              src: CUSTOM_NAPKIN_IMAGE,
              title: 'Custom Printed Napkins | Cocktail, Wedding and Kraft',
            },
            {
              href: '/blog/premium-linen-feel-napkins-ireland-sizes-buying-guide',
              src: LINEN_IMAGE,
              title: 'Premium Linen-Feel Napkins Ireland Sizes Buying Guide',
            },
            {
              href: '/blog/printed-coasters-ireland-9x9-moq-buying-guide',
              src: COASTER_IMAGE,
              title: 'Printed Coasters Ireland: 9×9 cm & MOQ Buying Guide',
            },
            {
              href: '/blog/personalised-napkins-ireland-guide',
              src: COCKTAIL_IMAGE,
              title: 'Personalised Napkins Ireland Guide',
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
