import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/wedding-coasters-ireland-9x9-moq-buying-guide`;
const HUB_HREF = '/wedding-coasters-ireland';
const HERO_IMAGE = '/images/wedding/wedding-coaster-navy-oconnors-ireland.jpg';
const TERRACOTTA_IMAGE = '/images/wedding/wedding-coaster-terracotta-sophie-daniel-ireland.jpg';
const BLUSH_IMAGE = '/images/wedding/wedding-coaster-blush-ej-ireland.jpg';
const NAPKIN_IMAGE = '/images/wedding/wedding-napkins-20x20-airlaid-bar-ireland.jpg';
const MENU_IMAGE = '/images/wedding/wedding-menu-sage-dinner-ireland.jpg';
const HOSPITALITY_IMAGE = '/images/coasters/coaster-harbour-bean-ireland.jpg';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Wedding Coasters Ireland: Round 9×9 cm, 8 Ply & MOQ Buying Guide',
  description:
    'How to buy personalised wedding coasters in Ireland — round 9 × 9 cm on 8 ply board, full colour one or both sides, MOQ from 50, names date or monogram, with nationwide delivery from Ashbourne.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-11-28',
  dateModified: '2026-11-28',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I buy personalised wedding coasters in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack prints wedding coasters in Ashbourne, Co. Meath and delivers across Ireland — Dublin, Cork, Galway and every county. Coasters are round 9 × 9 cm on 8 ply board, full colour on one or both sides, from 50. The quote confirms the price before printing.',
      },
    },
    {
      '@type': 'Question',
      name: 'What size are wedding coasters?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'One size: round, 9 × 9 cm. That is the same footprint as PrintNPack hospitality printed coasters, so glassware and bar trays fit the same way.',
      },
    },
    {
      '@type': 'Question',
      name: 'What board are wedding coasters printed on?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '8 ply board, printed in full colour. Choose one side or both sides in the quote builder.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the minimum order for wedding coasters?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'From 50 coasters. Quantity options include 50, 100, 150, 200, 300 and 500 — or type the guest count for the drinks reception.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you print our names, date or monogram on wedding coasters?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Send the names, date, monogram or artwork and we set it up in full colour and send a proof before printing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you deliver wedding coasters across Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Coasters are printed in Ashbourne, Co. Meath. You can collect locally, or we deliver to Dublin, Cork, Galway and every county. UK and EU postage is quoted separately on the order.',
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
      name: 'Wedding Coasters Ireland Buying Guide',
      item: PAGE_URL,
    },
  ],
};

const qtyRows = [
  {
    qty: '50',
    use: 'Intimate drinks receptions and spare stacks for keepsakes',
  },
  {
    qty: '100–150',
    use: 'Most Irish hotel and country-house guest lists with a short bar window',
  },
  {
    qty: '200–300',
    use: 'Larger Cork and Galway marquees, or long Champagne service',
  },
  {
    qty: '500',
    use: 'High glass-turnover nights and multi-room Dublin venues',
  },
];

const buyerRows = [
  {
    buyer: 'Couples & planners',
    use: 'Names, date or monogram for Dublin, Cork and Galway drinks stations',
  },
  {
    buyer: 'Stationers & designers',
    use: 'Coasters that continue the invitation florals and type',
  },
  {
    buyer: 'Hotels & venues',
    use: 'Day-of bar mats for in-house wedding packages',
  },
  {
    buyer: 'Bars & drinks stations',
    use: 'Round 9 × 9 cm stacks for Champagne, soft drinks and late-night service',
  },
];

const sideRows = [
  {
    option: 'One side',
    use: 'Names, date or monogram facing up under every glass',
  },
  {
    option: 'Both sides',
    use: 'Artwork on the face and a short line, QR or thank-you on the reverse',
  },
];

export default function WeddingCoastersIreland9x9MoqBuyingGuide() {
  const title = 'Wedding Coasters Ireland: Round 9×9 cm, 8 Ply & MOQ Buying Guide';
  const description =
    'Buy personalised wedding coasters in Ireland with confidence — round 9 × 9 cm on 8 ply, full colour one or both sides, from 50, with names, date or monogram and delivery to Dublin, Cork, Galway and nationwide from Ashbourne.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="wedding coasters ireland, personalised wedding coasters ireland, wedding beer mats dublin, round 9x9 wedding coasters cork, 8 ply wedding coasters galway, monogram wedding coasters ireland, names and date coasters ashbourne, wedding drink coasters ireland, bar coasters wedding ireland, printed wedding coasters ireland"
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
          content="Wedding coasters Ireland — round navy monogram 9 × 9 cm coaster for a Dublin drinks reception"
        />
        <meta property="article:published_time" content="2026-11-28" />

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
          <span className="text-slate-900">Wedding Coasters Ireland</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            Wedding Guide
          </span>
          <span className="text-slate-400 text-sm">28 Nov 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Wedding Coasters Ireland: Round 9×9 cm, 8 Ply &amp; MOQ Buying Guide
        </h1>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="relative rounded-2xl overflow-hidden h-48 col-span-2">
            <Image
              src={HERO_IMAGE}
              alt="Wedding coasters Ireland — round navy A R monogram 9 × 9 cm coaster for a Dublin drinks reception"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 66vw, 512px"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative rounded-xl overflow-hidden flex-1">
              <Image
                src={TERRACOTTA_IMAGE}
                alt="Wedding coasters Ireland — terracotta names and wildflower wreath for Cork couples"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden flex-1">
              <Image
                src={BLUSH_IMAGE}
                alt="Wedding coasters Ireland — blush floral initials E and J for Galway bars"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Guests see the coaster the moment a glass hits the bar. This guide explains how to buy{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              wedding coasters in Ireland
            </Link>
            : the fixed round 9 × 9 cm size, 8 ply board, one-side versus both-sides print, how many to
            order from 50, and how delivery from Ashbourne covers Dublin, Cork, Galway and every county.
            Prices are confirmed on the quote before anything is printed — we do not invent catalogue
            rates here.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            PrintNPack prints wedding coasters in full colour so a monogram, couple names, date or
            small wreath sits cleanly under Champagne and soft drinks. Pair them with{' '}
            <Link
              href="/blog/wedding-napkins-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              wedding napkins
            </Link>{' '}
            and{' '}
            <Link
              href="/blog/wedding-menus-place-cards-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              menus and place cards
            </Link>{' '}
            so the paper story stays consistent from the bar to the table.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Who buys wedding coasters in Ireland?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Most orders come from couples and planners who want names, a date or a monogram on the mat
            — not a plain hotel stack beside the Champagne. Stationers match the coaster to the
            invitation florals; hotels and venues order the same page when in-house packages need
            day-of bar mats for Irish weddings.
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
            One size: round 9 × 9 cm on 8 ply
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Wedding coasters are a single catalogue size: <strong>round, 9 × 9 cm</strong>, on{' '}
            <strong>8 ply</strong> board. That footprint fits standard bar glassware and sits flat on
            trays at Dublin hotels, Cork marquees and Galway country houses. There is no square or
            rectangular wedding coaster option on this page — if you need that shape, ask on the quote
            rather than assuming it is listed.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            The board and diameter match PrintNPack{' '}
            <Link
              href="/blog/printed-coasters-ireland-9x9-moq-buying-guide"
              className="text-blue-600 hover:underline"
            >
              hospitality printed coasters
            </Link>
            . The difference is the buyer and the artwork: wedding coasters carry names, a date or a
            monogram for the drinks reception; hospitality coasters usually carry a café, hotel or bar
            logo for everyday service.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-8 not-prose">
            <div className="relative rounded-2xl overflow-hidden h-44">
              <Image
                src={TERRACOTTA_IMAGE}
                alt="Wedding coasters Ireland — Sophie and Daniel terracotta script coaster for Meath venues"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 384px"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden h-44">
              <Image
                src={HOSPITALITY_IMAGE}
                alt="Printed coasters Ireland — hospitality logo coaster contrasted with wedding monogram mats"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 384px"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            One side vs both sides — and what to print
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Print is <strong>full colour</strong>. Choose <strong>one side</strong> when the face
            carries the names, date, monogram or wreath and the reverse stays blank. Choose{' '}
            <strong>both sides</strong> when you want a short thank-you, a playlist QR or a second
            motif on the reverse for guests who flip the mat.
          </p>
          <div className="overflow-x-auto mb-6 not-prose">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-3 pr-4 font-semibold text-slate-900">Print</th>
                  <th className="py-3 font-semibold text-slate-900">Best for</th>
                </tr>
              </thead>
              <tbody>
                {sideRows.map((row) => (
                  <tr key={row.option} className="border-b border-slate-100">
                    <td className="py-3 pr-4 font-medium text-slate-800 whitespace-nowrap">
                      {row.option}
                    </td>
                    <td className="py-3 text-slate-700">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-700 leading-relaxed mb-8">
            Send the names, date and artwork; we set it up and send a proof before print day. Keep type
            large enough to read under soft bar lighting — a dense invitation pattern that works on A5
            can feel crowded on a 9 cm circle.
          </p>

          <div className="relative rounded-2xl overflow-hidden h-56 mb-8 not-prose">
            <Image
              src={BLUSH_IMAGE}
              alt="Wedding coasters Ireland — blush florals and initials for Ashbourne-printed bar mats"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Minimum order, quantities and how many to buy
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            The minimum order is <strong>50 coasters</strong>. The quote builder offers 50, 100, 150,
            200, 300 and 500, or you can type the guest count for the drinks reception. Intimate
            dinners often sit near 50–100; hotel and marquee weddings across Meath, Cork and Galway
            usually land in the 150–300 band once bar service and spare stacks are counted.
          </p>
          <div className="overflow-x-auto mb-6 not-prose">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-3 pr-4 font-semibold text-slate-900">Quantity</th>
                  <th className="py-3 font-semibold text-slate-900">Typical Irish use</th>
                </tr>
              </thead>
              <tbody>
                {qtyRows.map((row) => (
                  <tr key={row.qty} className="border-b border-slate-100">
                    <td className="py-3 pr-4 font-medium text-slate-800 whitespace-nowrap">
                      {row.qty}
                    </td>
                    <td className="py-3 text-slate-700">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-700 leading-relaxed mb-8">
            Plan for glass turnover, not only headcount. A long Champagne hour burns through mats
            faster than a short soft-drink station. Order a few extras for keepsakes, last-minute
            plus-ones and the photographer&apos;s desk. Price depends on quantity and one-side or
            both-sides print — confirm the live total on the{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              wedding coasters Ireland
            </Link>{' '}
            page before you order.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Build the day-of set: coasters, napkins, menus and boards
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Coasters work best as part of a set. Keep the same type and florals from the invitation
            through to the seating plan so guests recognise the wedding&apos;s paper story at the bar
            and at the table.
          </p>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-6">
            <li>
              White airlaid or kraft wedding napkins —{' '}
              <Link
                href="/blog/wedding-napkins-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                wedding napkins Ireland sizes guide
              </Link>
            </li>
            <li>
              Menu and place cards on 350 gsm —{' '}
              <Link
                href="/blog/wedding-menus-place-cards-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                wedding menus and place cards buying guide
              </Link>
            </li>
            <li>
              Round wedding coasters —{' '}
              <Link href={HUB_HREF} className="text-blue-600 hover:underline">
                wedding coasters Ireland
              </Link>
            </li>
            <li>
              Foamex welcome and seating boards —{' '}
              <Link
                href="/blog/wedding-boards-ireland-sizes-thickness-buying-guide"
                className="text-blue-600 hover:underline"
              >
                wedding boards Ireland sizes guide
              </Link>
            </li>
          </ol>
          <p className="text-slate-700 leading-relaxed mb-8">
            For everyday café and pub logo mats rather than wedding artwork, use the{' '}
            <Link
              href="/blog/printed-coasters-ireland-9x9-moq-buying-guide"
              className="text-blue-600 hover:underline"
            >
              printed coasters Ireland MOQ guide
            </Link>
            . Order-of-the-day and thank-you stationery is covered separately in the{' '}
            <Link
              href="/blog/wedding-order-thank-you-cards-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              wedding order and thank-you cards guide
            </Link>
            .
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-8 not-prose">
            <div className="relative rounded-2xl overflow-hidden h-44">
              <Image
                src={NAPKIN_IMAGE}
                alt="Wedding napkins Ireland — airlaid bar napkin that pairs with round coasters from Ashbourne"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 384px"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden h-44">
              <Image
                src={MENU_IMAGE}
                alt="Wedding menus Ireland — sage dinner menu that matches coaster colours for Dublin venues"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 384px"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Delivery across Ireland from Ashbourne
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Coasters are printed in Ashbourne, Co. Meath. Couples and planners can collect locally, or
            PrintNPack delivers to Dublin, Cork, Galway, Limerick and every county. That suits city
            hotels and country venues that need day-of bar mats ahead of the reception.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Local collection works well when you are already collecting napkins, menus, envelopes or
            foamex boards on the same trip. Multi-county guest lists usually take nationwide dispatch
            so the drinks station is stocked before the seating plan is locked.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            UK and EU postage is available when planners or couples sit outside Ireland — the cost is
            confirmed on your quote, not assumed in an Ireland-only figure. Northern Ireland and Great
            Britain routes are handled the same way as other PrintNPack wedding print: ask on the
            quote so postage is visible before you confirm.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How to order wedding coasters in Ireland
          </h2>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-8">
            <li>Confirm round 9 × 9 cm on 8 ply for the drinks reception</li>
            <li>Choose one-side or both-sides full-colour print</li>
            <li>Prepare names, date and artwork (monogram, wreath or initials)</li>
            <li>Choose quantity from 50 (or type the guest and bar count)</li>
            <li>
              Open the{' '}
              <Link href={HUB_HREF} className="text-blue-600 hover:underline">
                wedding coasters Ireland
              </Link>{' '}
              page, or ask via the{' '}
              <Link href="/quote" className="text-blue-600 hover:underline">
                free quote form
              </Link>
            </li>
            <li>Approve the proof, then take Ireland delivery or Ashbourne collection</li>
          </ol>

          <div className="bg-slate-900 rounded-xl p-6 mb-8 text-white not-prose">
            <p className="font-semibold mb-1">Ready to print wedding coasters?</p>
            <p className="text-slate-400 text-sm mb-4">
              Round 9 × 9 cm on 8 ply — full colour one or both sides from 50, printed in Ashbourne
              with nationwide Ireland delivery.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={HUB_HREF}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Wedding Coasters →
              </Link>
              <Link
                href="/quote"
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/wedding-napkins-ireland"
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Wedding Napkins
              </Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6 not-prose">
            {[
              {
                q: 'Where can I buy personalised wedding coasters in Ireland?',
                a: 'PrintNPack prints wedding coasters in Ashbourne, Co. Meath and delivers across Ireland — Dublin, Cork, Galway and every county. Coasters are round 9 × 9 cm on 8 ply board, full colour on one or both sides, from 50. The quote confirms the price before printing.',
              },
              {
                q: 'What size are wedding coasters?',
                a: 'One size: round, 9 × 9 cm. That is the same footprint as PrintNPack hospitality printed coasters, so glassware and bar trays fit the same way.',
              },
              {
                q: 'What board are wedding coasters printed on?',
                a: '8 ply board, printed in full colour. Choose one side or both sides in the quote builder.',
              },
              {
                q: 'What is the minimum order for wedding coasters?',
                a: 'From 50 coasters. Quantity options include 50, 100, 150, 200, 300 and 500 — or type the guest count for the drinks reception.',
              },
              {
                q: 'Can you print our names, date or monogram on wedding coasters?',
                a: 'Yes. Send the names, date, monogram or artwork and we set it up in full colour and send a proof before printing.',
              },
              {
                q: 'Do you deliver wedding coasters across Ireland?',
                a: 'Yes. Coasters are printed in Ashbourne, Co. Meath. You can collect locally, or we deliver to Dublin, Cork, Galway and every county. UK and EU postage is quoted separately on the order.',
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
              href: '/blog/wedding-napkins-ireland-sizes-buying-guide',
              src: NAPKIN_IMAGE,
              title: 'Wedding Napkins Ireland: 20×20 & 10×20 Airlaid Sizes Buying Guide',
            },
            {
              href: '/blog/printed-coasters-ireland-9x9-moq-buying-guide',
              src: HOSPITALITY_IMAGE,
              title: 'Printed Coasters Ireland: Round 9×9 cm, 8 Ply & MOQ Buying Guide',
            },
            {
              href: '/blog/wedding-menus-place-cards-ireland-sizes-buying-guide',
              src: MENU_IMAGE,
              title: 'Wedding Menus & Place Cards Ireland: Sizes Buying Guide',
            },
            {
              href: '/blog/wedding-boards-ireland-sizes-thickness-buying-guide',
              src: '/images/wedding/wedding-foamex-welcome-board-ireland.jpg',
              title: 'Wedding Boards Ireland: Foamex Sizes & Thickness Buying Guide',
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
