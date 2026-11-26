import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/wedding-napkins-ireland-sizes-buying-guide`;
const HUB_HREF = '/wedding-napkins-ireland';
const HERO_IMAGE = '/images/wedding/wedding-napkins-20x20-airlaid-bar-ireland.jpg';
const BLUE_20_IMAGE = '/images/wedding/wedding-napkin-20x20-airlaid-blue-ireland.jpg';
const COUPLE_20_IMAGE = '/images/wedding/wedding-napkin-20x20-airlaid-couple-cartoon-ireland.jpg';
const SAGE_10_IMAGE = '/images/wedding/wedding-napkin-10x20-airlaid-sage-ireland.jpg';
const TABLE_10_IMAGE = '/images/wedding/wedding-napkin-10x20-airlaid-table-ireland.jpg';
const KRAFT_IMAGE = '/images/wedding/wedding-napkin-20x20-kraft-ar-ireland.jpg';
const MENU_IMAGE = '/images/wedding/wedding-menu-sage-dinner-ireland.jpg';
const ENVELOPE_IMAGE = '/images/wedding/wedding-envelope-floral-address-ireland.jpg';
const BOARD_IMAGE = '/images/wedding/wedding-foamex-welcome-board-ireland.jpg';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Wedding Napkins Ireland: 20×20 & 10×20 Airlaid Sizes Buying Guide',
  description:
    'How to buy personalised wedding napkins in Ireland — white airlaid 20 × 20 cm and 10 × 20 cm, full colour, MOQ from 50, vs kraft and cocktail sizes, with nationwide delivery from Ashbourne.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-11-26',
  dateModified: '2026-11-26',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I buy personalised wedding napkins in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack prints white airlaid wedding napkins in Ashbourne, Co. Meath and delivers across Ireland — Dublin, Cork, Galway and every county. Napkins come in 20 × 20 cm and 10 × 20 cm, full colour, from 50. The quote confirms the price before printing.',
      },
    },
    {
      '@type': 'Question',
      name: 'What size wedding napkins should I order in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '20 × 20 cm is the square napkin for cocktails, canapés and the drinks reception — it is the recommended starting size. 10 × 20 cm is the slim napkin for the place setting on the plate or at the bar. Cocktail napkins are a separate size: 10 × 10 cm closed and 20 × 40 cm open.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the minimum order for wedding napkins?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'From 50 napkins. Quantity options include 50, 100, 200, 300, 500 and 1,000 — or type your own number in the quote builder.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I print a monogram, couple portrait, venue or pet on wedding napkins?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. White airlaid takes full-colour print well. Send the names, date and artwork — a wreath, peony, couple portrait, venue illustration or pet — and we set it up and send a proof before printing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you deliver wedding napkins across Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Napkins are printed in Ashbourne, Co. Meath. You can collect locally, or we deliver to Dublin, Cork, Galway and every county. UK and EU postage is quoted separately on the order.',
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
      name: 'Wedding Napkins Ireland Sizes Buying Guide',
      item: PAGE_URL,
    },
  ],
};

const sizeRows = [
  {
    size: '20 × 20 cm',
    use: 'Square napkin for cocktails, canapés and the drinks reception — recommended start',
  },
  {
    size: '10 × 20 cm',
    use: 'Slim napkin for the place setting on the plate or at the bar',
  },
  {
    size: 'Cocktail (separate)',
    use: '10 × 10 cm closed / 20 × 40 cm open — restaurant and wedding cocktail service',
  },
];

const buyerRows = [
  {
    buyer: 'Couples & planners',
    use: 'Names, date or monogram for Dublin, Cork and Galway receptions',
  },
  {
    buyer: 'Stationers & designers',
    use: 'Napkins that continue the invitation florals and type',
  },
  {
    buyer: 'Hotels & venues',
    use: 'Day-of napkins for in-house wedding packages',
  },
  {
    buyer: 'Bars & drinks stations',
    use: '20 × 20 cm stacks for Champagne and soft-drink service',
  },
];

export default function WeddingNapkinsIrelandSizesBuyingGuide() {
  const title = 'Wedding Napkins Ireland: 20×20 & 10×20 Airlaid Sizes Buying Guide';
  const description =
    'Buy personalised wedding napkins in Ireland with confidence — white airlaid 20 × 20 cm and 10 × 20 cm, full colour from 50, vs kraft and cocktail sizes, with delivery to Dublin, Cork, Galway and nationwide from Ashbourne.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="wedding napkins ireland, personalised wedding napkins ireland, airlaid wedding napkins dublin, 20x20 wedding napkins cork, 10x20 wedding napkins galway, custom wedding napkins ashbourne, monogram wedding napkins ireland, white airlaid napkins wedding, kraft wedding napkins ireland, printed wedding napkins ireland"
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
          content="Wedding napkins Ireland — white airlaid 20 × 20 cm bar napkin for a Dublin drinks reception"
        />
        <meta property="article:published_time" content="2026-11-26" />

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
          <span className="text-slate-900">Wedding Napkins Ireland</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            Wedding Guide
          </span>
          <span className="text-slate-400 text-sm">26 Nov 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Wedding Napkins Ireland: 20×20 &amp; 10×20 Airlaid Sizes Buying Guide
        </h1>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="relative rounded-2xl overflow-hidden h-48 col-span-2">
            <Image
              src={HERO_IMAGE}
              alt="Wedding napkins Ireland — white airlaid 20 × 20 cm wreath monogram napkin on a Dublin marble bar"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 66vw, 512px"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative rounded-xl overflow-hidden flex-1">
              <Image
                src={SAGE_10_IMAGE}
                alt="Wedding napkins Ireland — 10 × 20 cm sage laurel napkin for Cork place settings"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden flex-1">
              <Image
                src={BLUE_20_IMAGE}
                alt="Wedding napkins Ireland — 20 × 20 cm blue hearts airlaid napkin for Galway receptions"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Guests notice the napkin when they take a drink and again when they sit down. This guide
            explains how to buy{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              wedding napkins in Ireland
            </Link>
            : which size suits the bar versus the plate, what white airlaid can carry in full colour,
            what the minimum order is, and how delivery from Ashbourne covers Dublin, Cork, Galway and
            every county. Prices are confirmed on the quote before anything is printed — we do not
            invent catalogue rates here.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            PrintNPack prints white airlaid napkins in full colour so a wreath, peony, venue line or
            pet portrait comes out as drawn. Pair them with{' '}
            <Link
              href="/blog/wedding-menus-place-cards-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              menus and place cards
            </Link>{' '}
            and{' '}
            <Link
              href="/blog/wedding-envelopes-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              printed wedding envelopes
            </Link>{' '}
            so the paper story stays consistent from the postbox to the table.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Who buys wedding napkins in Ireland?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Most orders come from couples and planners who want the names, date or monogram on the
            napkin — not a plain hotel stack beside the Champagne. Stationers match the napkin to the
            invitation florals; hotels and venues order the same page when in-house packages need
            day-of napkins for Irish weddings.
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
            Wedding napkin sizes — 20 × 20 cm vs 10 × 20 cm
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Size is the first buying decision. Irish couples usually start with the square{' '}
            <strong>20 × 20 cm</strong> napkin for the drinks reception — it sits well on a bar tray
            and takes a monogram or couple portrait without crowding. The slim{' '}
            <strong>10 × 20 cm</strong> napkin is for the place setting on the plate, or for a
            narrower bar stack when space is tight.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Cocktail napkins are a separate product line: <strong>10 × 10 cm closed</strong> and{' '}
            <strong>20 × 40 cm open</strong>, used for weddings and for restaurants. Do not treat them
            as a substitute for the wedding airlaid sizes on this page — order cocktail when you want
            that closed footprint, and 20 × 20 or 10 × 20 when you want the wedding airlaid feel.
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
                    <td className="py-3 pr-4 font-medium text-slate-800 whitespace-nowrap">
                      {row.size}
                    </td>
                    <td className="py-3 text-slate-700">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-700 leading-relaxed mb-8">
            <strong>20 × 20 cm</strong> is recommended on the product page for cocktails and canapés.{' '}
            <strong>10 × 20 cm</strong> suits the plate. Many Irish receptions order both — square for
            the bar, slim for dinner — in the same artwork so guests see one design all day.
          </p>

          <div className="relative rounded-2xl overflow-hidden h-56 mb-8 not-prose">
            <Image
              src={TABLE_10_IMAGE}
              alt="Wedding napkins Ireland — 10 × 20 cm printed napkin on a Dublin dinner plate with peony"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            White airlaid, full colour — and kraft as the eco option
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            The wedding napkin page is white airlaid paper with full-colour print. Airlaid feels closer
            to cloth than a thin tissue napkin, which is why it works for wreaths, cartoon portraits,
            venue illustrations and pet designs as well as clean typography. Send the names, date and
            artwork; we proof before print day.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            If you want an unbleached look, brown{' '}
            <Link href="/wedding-kraft-napkins-ireland" className="text-blue-600 hover:underline">
              kraft wedding napkins
            </Link>{' '}
            use the same 20 × 20 cm and 10 × 20 cm sizes from 50, printed with names, a date or a
            monogram. Couples searching for eco-friendly or recycled wedding napkins usually land on
            that kraft line rather than white airlaid.
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-8">
            <li>White airlaid paper with full-colour print</li>
            <li>Names, initials, date, monogram, portrait, venue or pet artwork</li>
            <li>Proof before printing</li>
            <li>Matching kraft option in the same two sizes from 50</li>
          </ul>

          <div className="grid sm:grid-cols-2 gap-3 mb-8 not-prose">
            <div className="relative rounded-2xl overflow-hidden h-44">
              <Image
                src={COUPLE_20_IMAGE}
                alt="Wedding napkins Ireland — 20 × 20 cm full-colour couple portrait airlaid for Meath venues"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 384px"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden h-44">
              <Image
                src={KRAFT_IMAGE}
                alt="Kraft wedding napkins Ireland — brown eco-friendly 20 × 20 cm monogram for Cork couples"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 384px"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Minimum order, quantities and how many to buy
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            The minimum order is <strong>50 napkins</strong>. The quote builder offers 50, 100, 200,
            300, 500 and 1,000, or you can type your own number. Intimate dinners often sit near 50–100;
            hotel and marquee weddings across Meath, Cork and Galway usually land in the 200–500 band
            once bar service and spare stacks are counted.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Plan for the bar and the table separately if you use both sizes. A drinks reception can
            burn through 20 × 20 cm stacks faster than dinner uses 10 × 20 cm place napkins. Order a
            few extras for keepsakes, last-minute plus-ones and the photographer&apos;s desk.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Price depends on size and quantity. Choose the napkin on the{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              wedding napkins Ireland
            </Link>{' '}
            page and we confirm the figure before printing — do not reuse rates from other printers or
            older quotes.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Build the day-of set: napkins, menus, envelopes and boards
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Napkins work best as part of a set. Keep the same type and florals from the invitation
            through to the seating plan so guests recognise the wedding&apos;s paper story.
          </p>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-6">
            <li>
              Printed wedding envelopes for posting — see our{' '}
              <Link
                href="/blog/wedding-envelopes-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                wedding envelopes Ireland sizes guide
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
              White airlaid or kraft wedding napkins —{' '}
              <Link href={HUB_HREF} className="text-blue-600 hover:underline">
                wedding napkins Ireland
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
            For hospitality cutlery pockets beyond the wedding suite, see our{' '}
            <Link
              href="/blog/pocket-napkins-ireland-cutlery-moq-buying-guide"
              className="text-blue-600 hover:underline"
            >
              pocket napkins Ireland buying guide
            </Link>
            . Broader linen-feel hospitality sizes are covered in the{' '}
            <Link
              href="/blog/premium-linen-feel-napkins-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              premium linen-feel napkins sizes guide
            </Link>
            .
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-8 not-prose">
            <div className="relative rounded-2xl overflow-hidden h-44">
              <Image
                src={MENU_IMAGE}
                alt="Wedding menus Ireland — sage dinner menu that pairs with airlaid napkins from Ashbourne"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 384px"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden h-44">
              <Image
                src={BOARD_IMAGE}
                alt="Wedding boards Ireland — foamex welcome sign that matches napkin colours for Dublin venues"
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
            Napkins are printed in Ashbourne, Co. Meath. Couples and planners can collect locally, or
            PrintNPack delivers to Dublin, Cork, Galway, Limerick and every county. That suits city
            hotels and country venues that need day-of napkins ahead of the reception.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Local collection works well when you are already collecting envelopes, menus, coasters or
            foamex boards on the same trip. Multi-county guest lists usually take nationwide dispatch
            so bar and table napkins arrive before the seating plan is locked.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            UK and EU postage is available when planners or couples sit outside Ireland — the cost is
            confirmed on your quote, not assumed in an Ireland-only figure. Northern Ireland and Great
            Britain routes are handled the same way as other PrintNPack wedding print: ask on the
            quote so postage is visible before you confirm.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How to order wedding napkins in Ireland
          </h2>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-8">
            <li>Decide 20 × 20 cm for the bar, 10 × 20 cm for the plate — or both</li>
            <li>Prepare names, date and artwork (monogram, portrait, venue or pet)</li>
            <li>Choose quantity from 50 (or type the guest and bar count)</li>
            <li>
              Open the{' '}
              <Link href={HUB_HREF} className="text-blue-600 hover:underline">
                wedding napkins Ireland
              </Link>{' '}
              page, or ask via the{' '}
              <Link href="/quote" className="text-blue-600 hover:underline">
                free quote form
              </Link>
            </li>
            <li>Approve the proof, then take Ireland delivery or Ashbourne collection</li>
          </ol>

          <div className="bg-slate-900 rounded-xl p-6 mb-8 text-white not-prose">
            <p className="font-semibold mb-1">Ready to print wedding napkins?</p>
            <p className="text-slate-400 text-sm mb-4">
              White airlaid 20 × 20 cm and 10 × 20 cm — full colour from 50, printed in Ashbourne with
              nationwide Ireland delivery.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={HUB_HREF}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Wedding Napkins →
              </Link>
              <Link
                href="/quote"
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/wedding-kraft-napkins-ireland"
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Kraft Wedding Napkins
              </Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6 not-prose">
            {[
              {
                q: 'Where can I buy personalised wedding napkins in Ireland?',
                a: 'PrintNPack prints white airlaid wedding napkins in Ashbourne, Co. Meath and delivers across Ireland — Dublin, Cork, Galway and every county. Napkins come in 20 × 20 cm and 10 × 20 cm, full colour, from 50. The quote confirms the price before printing.',
              },
              {
                q: 'What size wedding napkins should I order in Ireland?',
                a: '20 × 20 cm is the square napkin for cocktails, canapés and the drinks reception — it is the recommended starting size. 10 × 20 cm is the slim napkin for the place setting on the plate or at the bar. Cocktail napkins are a separate size: 10 × 10 cm closed and 20 × 40 cm open.',
              },
              {
                q: 'What is the minimum order for wedding napkins?',
                a: 'From 50 napkins. Quantity options include 50, 100, 200, 300, 500 and 1,000 — or type your own number in the quote builder.',
              },
              {
                q: 'Can I print a monogram, couple portrait, venue or pet on wedding napkins?',
                a: 'Yes. White airlaid takes full-colour print well. Send the names, date and artwork — a wreath, peony, couple portrait, venue illustration or pet — and we set it up and send a proof before printing.',
              },
              {
                q: 'Do you deliver wedding napkins across Ireland?',
                a: 'Yes. Napkins are printed in Ashbourne, Co. Meath. You can collect locally, or we deliver to Dublin, Cork, Galway and every county. UK and EU postage is quoted separately on the order.',
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
              href: '/blog/wedding-menus-place-cards-ireland-sizes-buying-guide',
              src: MENU_IMAGE,
              title: 'Wedding Menus & Place Cards Ireland: Sizes Buying Guide',
            },
            {
              href: '/blog/wedding-envelopes-ireland-sizes-buying-guide',
              src: ENVELOPE_IMAGE,
              title: 'Wedding Envelopes Ireland: C6, C5 & DL Sizes Buying Guide',
            },
            {
              href: '/blog/wedding-boards-ireland-sizes-thickness-buying-guide',
              src: BOARD_IMAGE,
              title: 'Wedding Boards Ireland: Foamex Sizes & Thickness Buying Guide',
            },
            {
              href: '/blog/pocket-napkins-ireland-cutlery-moq-buying-guide',
              src: HERO_IMAGE,
              title: 'Pocket Napkins Ireland: Cutlery Pocket Fold Buying Guide',
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
