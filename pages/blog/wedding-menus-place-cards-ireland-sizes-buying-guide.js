import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/wedding-menus-place-cards-ireland-sizes-buying-guide`;
const HUB_HREF = '/wedding-menus-place-cards-ireland';
const HERO_IMAGE = '/images/wedding/wedding-menu-sage-dinner-ireland.jpg';
const BURGUNDY_IMAGE = '/images/wedding/wedding-menu-burgundy-table-ireland.jpg';
const DESIGNS_IMAGE = '/images/wedding/wedding-menu-designs-ireland.jpg';
const PLACE_BLUE_IMAGE = '/images/wedding/wedding-place-card-blue-table-ireland.jpg';
const PLACE_SET_IMAGE = '/images/wedding/wedding-place-cards-floral-set-ireland.jpg';
const PLACE_SAGE_IMAGE = '/images/wedding/wedding-place-card-sage-ireland.jpg';
const ENVELOPE_IMAGE = '/images/wedding/wedding-envelope-floral-address-ireland.jpg';
const NAPKIN_IMAGE = '/images/wedding/wedding-napkins-20x20-airlaid-bar-ireland.jpg';
const COASTER_IMAGE = '/images/wedding/wedding-coaster-blush-ej-ireland.jpg';
const BOARD_IMAGE = '/images/wedding/wedding-foamex-welcome-board-ireland.jpg';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Wedding Menus & Place Cards Ireland: A5, Tent, A6 & DL Sizes Buying Guide',
  description:
    'How to buy printed wedding menu cards and place cards in Ireland — A5, A5 tent, A6 and DL menus, tent and flat place cards on 350 gsm, MOQ from 25, with nationwide delivery from Ashbourne.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-11-20',
  dateModified: '2026-11-20',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I buy printed wedding menus and place cards in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack prints wedding menu cards and place cards in Ashbourne, Co. Meath and delivers across Ireland — Dublin, Cork, Galway and every county. Cards are 350 gsm, full colour both sides, with a minimum of 25. The quote confirms the price before printing.',
      },
    },
    {
      '@type': 'Question',
      name: 'What size is a wedding menu card in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A5 (148 × 210 mm) is the usual dinner menu. A6 (105 × 148 mm) and DL (99 × 210 mm) suit a shorter or single-column menu. An A5 tent menu stands at 148 × 105 mm without a holder.',
      },
    },
    {
      '@type': 'Question',
      name: 'What size is a wedding place card?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A tent place card stands at 105 × 70 mm with the guest’s name on the front. A flat place card is 85 × 55 mm for the plate or napkin. Order one for every guest. Some couples call the name card an escort card.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the minimum order for wedding menus and place cards?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The minimum is 25 cards. Quantity options include 25, 50, 75, 100, 150, 200 and 300 — or type the number of guests. Choose a menu size or a place-card format in the quote builder.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you deliver wedding menus across Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Cards are printed in Ashbourne, Co. Meath. You can collect locally, or we deliver to Dublin, Cork, Galway and every county. UK and EU postage is quoted separately on the order.',
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
      name: 'Wedding Menus & Place Cards Ireland Buying Guide',
      item: PAGE_URL,
    },
  ],
};

const menuRows = [
  {
    size: 'A5 menu',
    dims: '148 × 210 mm',
    use: 'Usual dinner menu — lies beside the setting or stands in a holder',
  },
  {
    size: 'A5 tent menu',
    dims: '148 × 105 mm standing',
    use: 'Folded so the menu stands on the table without a holder',
  },
  {
    size: 'A6 menu',
    dims: '105 × 148 mm',
    use: 'Shorter menu for a few courses or a drinks list',
  },
  {
    size: 'DL menu',
    dims: '99 × 210 mm',
    use: 'Long single-column menu for courses down the page',
  },
];

const placeRows = [
  {
    size: 'Tent place card',
    dims: '105 × 70 mm standing',
    use: 'Folded name card with the guest’s name on the front — one per place',
  },
  {
    size: 'Flat place card',
    dims: '85 × 55 mm',
    use: 'Flat name card for the plate, or to tie onto the napkin',
  },
];

const buyerRows = [
  {
    buyer: 'Couples setting the table',
    use: 'Matching menus and place cards in the same type as the invitation',
  },
  {
    buyer: 'Wedding planners',
    use: 'One proofed design for Dublin, Cork and Galway venue guest lists',
  },
  {
    buyer: 'Stationers & designers',
    use: 'Day-of cards that continue the suite already drawn for the post',
  },
  {
    buyer: 'Hotels & venues',
    use: 'Consistent table stationery for in-house wedding packages',
  },
];

export default function WeddingMenusPlaceCardsIrelandSizesBuyingGuide() {
  const title =
    'Wedding Menus & Place Cards Ireland: A5, Tent, A6 & DL Sizes Buying Guide';
  const description =
    'Buy printed wedding menu cards and place cards in Ireland with confidence — A5, A5 tent, A6 and DL menus, tent and flat place cards on 350 gsm, MOQ from 25, with delivery to Dublin, Cork, Galway and nationwide from Ashbourne.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="wedding menu cards ireland, wedding place cards ireland, A5 wedding menu dublin, tent place cards cork, personalised wedding menus galway, wedding dinner menu cards ashbourne, flat place cards ireland, escort cards wedding ireland, DL wedding menu ireland, printed table stationery ireland"
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
          content="Wedding menus Ireland — sage dinner menu card for a Dublin reception table"
        />
        <meta property="article:published_time" content="2026-11-20" />

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
          <span className="text-slate-900">Wedding Menus &amp; Place Cards Ireland</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            Wedding Guide
          </span>
          <span className="text-slate-400 text-sm">20 Nov 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Wedding Menus &amp; Place Cards Ireland: A5, Tent, A6 &amp; DL Sizes Buying Guide
        </h1>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="relative rounded-2xl overflow-hidden h-48 col-span-2">
            <Image
              src={HERO_IMAGE}
              alt="Wedding menus Ireland — sage dinner menu card on a Dublin reception table"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 66vw, 512px"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative rounded-xl overflow-hidden flex-1">
              <Image
                src={PLACE_BLUE_IMAGE}
                alt="Wedding place cards Ireland — blue botanical tent card for Cork guest seating"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden flex-1">
              <Image
                src={DESIGNS_IMAGE}
                alt="Wedding menu designs Ireland — cream, blue and terracotta cards for Irish tables"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Guests meet the stationery twice: once in the post, and again when they sit down. This
            guide explains how to buy{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              wedding menus and place cards in Ireland
            </Link>
            : which menu size fits the courses, whether a tent or flat place card suits the setting,
            what the minimum order is, and how delivery from Ashbourne covers Dublin, Cork, Galway
            and every county. Prices are confirmed on the quote before anything is printed — we do
            not invent catalogue rates here.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            PrintNPack prints menus and place cards on 350 gsm card in full colour on both sides, so
            the type and florals can match the invitation and the napkins. Pair them with{' '}
            <Link
              href="/blog/wedding-envelopes-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              printed wedding envelopes
            </Link>{' '}
            and day-of stationery so the paper story stays consistent from the postbox to the table.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Who buys wedding menus and place cards in Ireland?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Most orders come from couples and planners who want the dinner menu and every guest name
            printed in the same face as the invitation — not handwritten cards the night before the
            reception. Hotels and venues also use the same page when in-house packages need matching
            table stationery for Irish weddings.
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
            Wedding menu sizes — A5, tent, A6 and DL
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Size is the first buying decision for the menu. Irish couples usually start with A5
            because it holds a full dinner list without crowding. Shorter menus and drinks lists drop
            to A6; a long single column fits DL. An A5 tent folds so the card stands on the table
            without a holder — useful when place settings are already busy with glassware and
            florals.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Match the card to the wording, not to a mood-board label. A tasting menu with wine
            pairings often needs the A5 footprint. A two-course lunch or canapé list can sit happily
            on A6. If you want the menu to stand alone at every place, choose the A5 tent rather than
            relying on a separate holder from the venue.
          </p>
          <div className="overflow-x-auto mb-6 not-prose">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-3 pr-4 font-semibold text-slate-900">Card</th>
                  <th className="py-3 pr-4 font-semibold text-slate-900">Dimensions</th>
                  <th className="py-3 font-semibold text-slate-900">Best for</th>
                </tr>
              </thead>
              <tbody>
                {menuRows.map((row) => (
                  <tr key={row.size} className="border-b border-slate-100">
                    <td className="py-3 pr-4 font-medium text-slate-800 whitespace-nowrap">
                      {row.size}
                    </td>
                    <td className="py-3 pr-4 text-slate-700 whitespace-nowrap">{row.dims}</td>
                    <td className="py-3 text-slate-700">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-700 leading-relaxed mb-8">
            <strong>A5 menu</strong> is recommended on the product page for the usual dinner list.{' '}
            <strong>A5 tent</strong> stands without a holder. <strong>A6</strong> and{' '}
            <strong>DL</strong> suit shorter or single-column layouts. Send the courses and wording
            so we can proof the layout before print day.
          </p>

          <div className="relative rounded-2xl overflow-hidden h-56 mb-8 not-prose">
            <Image
              src={BURGUNDY_IMAGE}
              alt="Wedding dinner menu Ireland — burgundy peony menu at a Galway place setting"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Place cards — tent vs flat, and escort cards
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Place cards carry the guest&apos;s name at the setting. A tent place card folds and stands
            at 105 × 70 mm with the name on the front. A flat place card is 85 × 55 mm — the same
            footprint many Irish couples already know from business cards — for the plate or to tie
            onto a napkin. Some people call the name card an escort card; the product page covers both
            tent and flat formats under the same quote builder.
          </p>
          <div className="overflow-x-auto mb-6 not-prose">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-3 pr-4 font-semibold text-slate-900">Card</th>
                  <th className="py-3 pr-4 font-semibold text-slate-900">Dimensions</th>
                  <th className="py-3 font-semibold text-slate-900">Best for</th>
                </tr>
              </thead>
              <tbody>
                {placeRows.map((row) => (
                  <tr key={row.size} className="border-b border-slate-100">
                    <td className="py-3 pr-4 font-medium text-slate-800 whitespace-nowrap">
                      {row.size}
                    </td>
                    <td className="py-3 pr-4 text-slate-700 whitespace-nowrap">{row.dims}</td>
                    <td className="py-3 text-slate-700">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-700 leading-relaxed mb-4">
            Order one place card for every guest. Intimate dinners often sit near the 25–50 band;
            larger hotel and marquee weddings across Meath, Cork and Galway usually land in the
            100–200 band once plus-ones and spare cards are counted. Menus are often ordered per
            place as well, or shared one per couple — decide that before you type the quantity.
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-8">
            <li>350 gsm card stock for menus and place cards</li>
            <li>Full-colour print on both sides</li>
            <li>Type, flowers and colours that can match the invitation</li>
            <li>Guest names supplied for place cards; courses and wording for menus</li>
          </ul>

          <div className="grid sm:grid-cols-2 gap-3 mb-8 not-prose">
            <div className="relative rounded-2xl overflow-hidden h-44">
              <Image
                src={PLACE_SET_IMAGE}
                alt="Wedding place cards Ireland — floral tent name cards for Dublin guest lists"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 384px"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden h-44">
              <Image
                src={PLACE_SAGE_IMAGE}
                alt="Wedding place card Ireland — sage eucalyptus card for Cork and Galway tables"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 384px"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Minimum order, quantities and matching the suite
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            The minimum order is <strong>25 cards</strong>. The quote builder offers 25, 50, 75, 100,
            150, 200 and 300, or you can type the number of guests. Order a few extras for keepsakes,
            last-minute plus-ones and a spare for the photographer&apos;s desk.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Menus and place cards can match each other — and the invitation — because both print full
            colour on the same 350 gsm card. Send the courses, the guest names and the wording
            together so one proof covers the table set. Nothing prints until you approve it.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Price depends on card format and quantity. Choose the size on the{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              wedding menus and place cards Ireland
            </Link>{' '}
            page and we confirm the figure before printing — do not reuse rates from other printers or
            older quotes.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Build the day-of set: menus, place cards, napkins and boards
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Table stationery works best as a set. Keep the same type and florals from the invitation
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
              Menu and place cards on 350 gsm for the table —{' '}
              <Link href={HUB_HREF} className="text-blue-600 hover:underline">
                wedding menus and place cards
              </Link>
            </li>
            <li>
              White airlaid or kraft wedding napkins —{' '}
              <Link href="/wedding-napkins-ireland" className="text-blue-600 hover:underline">
                wedding napkins Ireland
              </Link>
            </li>
            <li>
              Foamex welcome and seating boards —{' '}
              <Link href="/wedding-boards-ireland" className="text-blue-600 hover:underline">
                wedding boards Ireland
              </Link>
            </li>
          </ol>
          <p className="text-slate-700 leading-relaxed mb-4">
            Order-of-the-day and thank-you cards share the same Ashbourne print path if you want the
            running order and post-wedding notes to match. Start from{' '}
            <Link
              href="/wedding-order-thank-you-cards-ireland"
              className="text-blue-600 hover:underline"
            >
              order of the day and thank-you cards
            </Link>{' '}
            once the table cards are locked.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            For drinks service branding beyond the wedding suite, printed coasters are covered in our{' '}
            <Link
              href="/blog/printed-coasters-ireland-9x9-moq-buying-guide"
              className="text-blue-600 hover:underline"
            >
              printed coasters Ireland buying guide
            </Link>
            .
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-8 not-prose">
            <div className="relative rounded-2xl overflow-hidden h-44">
              <Image
                src={NAPKIN_IMAGE}
                alt="Wedding napkins Ireland — airlaid bar napkins that pair with menus from Ashbourne"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 384px"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden h-44">
              <Image
                src={BOARD_IMAGE}
                alt="Wedding boards Ireland — foamex welcome sign that matches menu and place card colours"
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
            Cards are printed in Ashbourne, Co. Meath. Couples and planners can collect locally, or
            PrintNPack delivers to Dublin, Cork, Galway, Limerick and every county. That suits city
            hotels and country venues that need table stationery ahead of the reception.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Local collection works well when you are already collecting envelopes, napkins, coasters
            or foamex boards on the same trip. Multi-county guest lists usually take nationwide
            dispatch so menus and place cards arrive before the table plan is set.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            UK and EU postage is available when planners or couples sit outside Ireland — the cost is
            confirmed on your quote, not assumed in an Ireland-only figure. Northern Ireland and Great
            Britain routes are handled the same way as other PrintNPack wedding print: ask on the
            quote so postage is visible before you confirm.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How to order wedding menus and place cards in Ireland
          </h2>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-8">
            <li>Decide A5, A5 tent, A6 or DL for the menu — or tent vs flat for place cards</li>
            <li>Prepare courses, guest names and the wording in the invitation type</li>
            <li>Choose quantity from 25 (or type the guest count)</li>
            <li>
              Open the{' '}
              <Link href={HUB_HREF} className="text-blue-600 hover:underline">
                wedding menus and place cards Ireland
              </Link>{' '}
              page, or ask via the{' '}
              <Link href="/quote" className="text-blue-600 hover:underline">
                free quote form
              </Link>
            </li>
            <li>Approve the proof, then take Ireland delivery or Ashbourne collection</li>
          </ol>

          <div className="bg-slate-900 rounded-xl p-6 mb-8 text-white not-prose">
            <p className="font-semibold mb-1">Ready to print wedding menus and place cards?</p>
            <p className="text-slate-400 text-sm mb-4">
              A5, tent, A6 and DL menus plus tent and flat place cards — 350 gsm, full colour both
              sides, from 25, printed in Ashbourne with nationwide Ireland delivery.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={HUB_HREF}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Wedding Menus &amp; Place Cards →
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
                q: 'Where can I buy printed wedding menus and place cards in Ireland?',
                a: 'PrintNPack prints wedding menu cards and place cards in Ashbourne, Co. Meath and delivers across Ireland — Dublin, Cork, Galway and every county. Cards are 350 gsm, full colour both sides, with a minimum of 25. The quote confirms the price before printing.',
              },
              {
                q: 'What size is a wedding menu card in Ireland?',
                a: 'A5 (148 × 210 mm) is the usual dinner menu. A6 (105 × 148 mm) and DL (99 × 210 mm) suit a shorter or single-column menu. An A5 tent menu stands at 148 × 105 mm without a holder.',
              },
              {
                q: 'What size is a wedding place card?',
                a: 'A tent place card stands at 105 × 70 mm with the guest’s name on the front. A flat place card is 85 × 55 mm for the plate or napkin. Order one for every guest. Some couples call the name card an escort card.',
              },
              {
                q: 'What is the minimum order for wedding menus and place cards?',
                a: 'The minimum is 25 cards. Quantity options include 25, 50, 75, 100, 150, 200 and 300 — or type the number of guests. Choose a menu size or a place-card format in the quote builder.',
              },
              {
                q: 'Do you deliver wedding menus across Ireland?',
                a: 'Yes. Cards are printed in Ashbourne, Co. Meath. You can collect locally, or we deliver to Dublin, Cork, Galway and every county. UK and EU postage is quoted separately on the order.',
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
              href: '/blog/wedding-envelopes-ireland-sizes-buying-guide',
              src: ENVELOPE_IMAGE,
              title: 'Wedding Envelopes Ireland: C6, C5 & DL Sizes Buying Guide',
            },
            {
              href: '/blog/custom-printed-napkins',
              src: NAPKIN_IMAGE,
              title: 'Custom Printed Napkins | Cocktail, Wedding and Kraft',
            },
            {
              href: '/blog/printed-coasters-ireland-9x9-moq-buying-guide',
              src: COASTER_IMAGE,
              title: 'Printed Coasters Ireland: 9×9 cm & MOQ Buying Guide',
            },
            {
              href: '/blog/pocket-napkins-ireland-cutlery-moq-buying-guide',
              src: NAPKIN_IMAGE,
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
