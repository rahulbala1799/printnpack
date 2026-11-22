import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/wedding-boards-ireland-sizes-thickness-buying-guide`;
const HUB_HREF = '/wedding-boards-ireland';
const HERO_IMAGE = '/images/wedding/wedding-foamex-welcome-board-ireland.jpg';
const SEATING_IMAGE = '/images/wedding/wedding-foamex-seating-plan-ireland.jpg';
const ORDER_BOARD_IMAGE = '/images/wedding/wedding-foamex-order-of-day-ireland.jpg';
const PHOTO_BOARD_IMAGE = '/images/wedding/wedding-foamex-photo-story-board-ireland.jpg';
const MENU_IMAGE = '/images/wedding/wedding-menu-sage-dinner-ireland.jpg';
const ENVELOPE_IMAGE = '/images/wedding/wedding-envelope-floral-address-ireland.jpg';
const NAPKIN_IMAGE = '/images/wedding/wedding-napkins-20x20-airlaid-bar-ireland.jpg';
const ORDER_CARD_IMAGE = '/images/wedding/wedding-order-of-day-sage-table-ireland.jpg';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Wedding Boards Ireland: Foamex Sizes, Thickness & Laminate Buying Guide',
  description:
    'How to buy printed foamex wedding boards in Ireland — A2, A1, A0, 60×90 cm, 70×100 cm and 8×4 ft sizes, 3 mm to 10 mm thickness, laminated or unlaminated, MOQ from 1, with nationwide delivery from Ashbourne.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-11-22',
  dateModified: '2026-11-22',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I buy printed wedding boards in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack prints foamex wedding boards in Ashbourne, Co. Meath and delivers across Ireland — Dublin, Cork, Galway and every county. Boards are full colour on foamex, cut to size, with a minimum of 1. The quote confirms the price before printing.',
      },
    },
    {
      '@type': 'Question',
      name: 'What size wedding board should I order?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A1 (594 × 841 mm) is the usual welcome board. A2 suits smaller signs such as cards and gifts or an unplugged ceremony. A0, 60 × 90 cm and 70 × 100 cm suit large seating plans or entrance boards. Custom sizes are fine if they fit the 8 × 4 ft sheet (2440 × 1220 mm).',
      },
    },
    {
      '@type': 'Question',
      name: 'What foamex thickness should I choose for a wedding board?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '5 mm is the usual choice for a welcome board or seating plan. 3 mm is lighter for a board that hangs or leans. 5.5 mm is a little stiffer for a larger board. 10 mm is the stiffest sheet for a freestanding entrance board. These match our standard foamex thicknesses.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can wedding boards be laminated?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Choose unlaminated or laminated on the quote. Lamination gives a wipeable finish, which helps if the board sits near a door or outdoors for part of the day.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you deliver wedding boards across Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Boards are printed in Ashbourne, Co. Meath. You can collect locally, or we deliver to Dublin, Cork, Galway and every county. UK and EU postage is quoted separately on the order.',
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
      name: 'Wedding Boards Ireland Buying Guide',
      item: PAGE_URL,
    },
  ],
};

const sizeRows = [
  {
    size: 'A1',
    dims: '594 × 841 mm',
    use: 'Usual welcome board at the door, porch or ceremony entrance',
  },
  {
    size: 'A2',
    dims: '420 × 594 mm',
    use: 'Smaller sign — cards and gifts, unplugged ceremony, favour table',
  },
  {
    size: 'A0',
    dims: '841 × 1189 mm',
    use: 'Large seating plan or wide entrance board',
  },
  {
    size: '60 × 90 cm',
    dims: '600 × 900 mm',
    use: 'Portrait board for a door or easel',
  },
  {
    size: '70 × 100 cm',
    dims: '700 × 1000 mm',
    use: 'Room for a long seating plan with many tables',
  },
  {
    size: '8 × 4 ft sheet',
    dims: '2440 × 1220 mm',
    use: 'Full foamex sheet — or the limit for a custom cut',
  },
];

const thicknessRows = [
  {
    thickness: '5 mm',
    use: 'Usual welcome board or seating plan',
  },
  {
    thickness: '3 mm',
    use: 'Lighter sheet that hangs or leans for the day',
  },
  {
    thickness: '5.5 mm',
    use: 'A little stiffer than 5 mm for a larger board',
  },
  {
    thickness: '10 mm',
    use: 'Stiffest sheet for a freestanding entrance board',
  },
];

const useRows = [
  {
    use: 'Welcome sign',
    detail: 'Names and date at the venue entrance or porch',
  },
  {
    use: 'Seating plan / table plan',
    detail: 'Guest names and table numbers on one foamex board',
  },
  {
    use: 'Order of the day board',
    detail: 'Ceremony, drinks, dinner and first dance on an easel',
  },
  {
    use: 'Cards & gifts / unplugged',
    detail: 'Smaller A2 signs beside the gift table or ceremony',
  },
  {
    use: 'Photo story board',
    detail: 'Our story so far — photos on a reception table or wall',
  },
];

const buyerRows = [
  {
    buyer: 'Couples',
    use: 'Matching welcome, seating and day-of boards in one suite',
  },
  {
    buyer: 'Wedding planners',
    use: 'Venue-ready foamex signs for Dublin, Cork and Galway hotels',
  },
  {
    buyer: 'Stationers & designers',
    use: 'Large-format boards that continue the invitation artwork',
  },
  {
    buyer: 'Hotels & venues',
    use: 'Reusable board sizes for in-house wedding packages',
  },
];

export default function WeddingBoardsIrelandSizesThicknessBuyingGuide() {
  const title =
    'Wedding Boards Ireland: Foamex Sizes, Thickness & Laminate Buying Guide';
  const description =
    'Buy printed foamex wedding boards in Ireland with confidence — A2, A1, A0, 60×90 cm, 70×100 cm and 8×4 ft sizes, 3 mm to 10 mm thickness, laminated or unlaminated, MOQ from 1, with delivery to Dublin, Cork, Galway and nationwide from Ashbourne.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="wedding boards ireland, foamex wedding welcome board dublin, wedding seating plan board cork, foam board wedding sign galway, 5mm foamex wedding sign ashbourne, order of the day board ireland, laminated wedding board ireland, A1 wedding welcome sign ireland, PVC foam wedding board ireland, personalised wedding sign ireland"
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
          content="Wedding boards Ireland — foamex welcome board at a Dublin venue entrance"
        />
        <meta property="article:published_time" content="2026-11-22" />

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
          <span className="text-slate-900">Wedding Boards Ireland</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            Wedding Guide
          </span>
          <span className="text-slate-400 text-sm">22 Nov 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Wedding Boards Ireland: Foamex Sizes, Thickness &amp; Laminate Buying Guide
        </h1>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="relative rounded-2xl overflow-hidden h-48 col-span-2">
            <Image
              src={HERO_IMAGE}
              alt="Wedding boards Ireland — foamex welcome board at a Dublin venue entrance"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 66vw, 512px"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative rounded-xl overflow-hidden flex-1">
              <Image
                src={SEATING_IMAGE}
                alt="Wedding seating plan Ireland — foamex find-your-seat board for Cork receptions"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden flex-1">
              <Image
                src={ORDER_BOARD_IMAGE}
                alt="Order of the day board Ireland — foamex easel sign for Galway marquees"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Guests meet the stationery on the table — and the boards at the door. This guide explains
            how to buy{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              wedding boards in Ireland
            </Link>
            : which foamex size fits a welcome sign or seating plan, which thickness stands on an
            easel, when to laminate, what the minimum order is, and how delivery from Ashbourne covers
            Dublin, Cork, Galway and every county. Prices are confirmed on the quote before anything
            is printed — we do not invent catalogue rates here.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            PrintNPack prints wedding boards on foamex (also called foam board, Forex or PVC foam
            board) in full colour, cut to size. Pair them with{' '}
            <Link
              href="/blog/wedding-menus-place-cards-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              wedding menus and place cards
            </Link>{' '}
            and{' '}
            <Link
              href="/blog/wedding-envelopes-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              printed wedding envelopes
            </Link>{' '}
            so the paper story stays consistent from the postbox to the porch.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Who buys wedding boards in Ireland?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Most orders come from couples and planners who need a welcome sign, seating plan or order
            of the day that matches the invitation — not a hand-lettered board the morning of the
            reception. Hotels and venues also use the same foamex sizes when in-house packages need
            clear guest wayfinding for Irish weddings.
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
            What a wedding board is used for
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            One foamex sheet becomes the sign you need. Irish couples use the same product page for
            welcome boards, seating charts, order-of-the-day boards, cards-and-gifts signs, unplugged
            ceremony notices and photo story boards — the difference is size, thickness and artwork,
            not a separate product line.
          </p>
          <div className="overflow-x-auto mb-8 not-prose">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-3 pr-4 font-semibold text-slate-900">Use</th>
                  <th className="py-3 font-semibold text-slate-900">What goes on it</th>
                </tr>
              </thead>
              <tbody>
                {useRows.map((row) => (
                  <tr key={row.use} className="border-b border-slate-100">
                    <td className="py-3 pr-4 font-medium text-slate-800 whitespace-nowrap">
                      {row.use}
                    </td>
                    <td className="py-3 text-slate-700">{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Wedding board sizes — A2, A1, A0 and cut sheets
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Size is the first buying decision. A1 is recommended on the product page for the usual
            welcome board. Drop to A2 for a cards-and-gifts or unplugged sign. Step up to A0, 60 × 90
            cm or 70 × 100 cm when a seating plan needs room for every table. Custom widths and
            lengths are fine as long as the board fits an 8 × 4 ft sheet — long side up to 2440 mm,
            short side up to 1220 mm, with each side at least 100 mm.
          </p>
          <div className="overflow-x-auto mb-6 not-prose">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-3 pr-4 font-semibold text-slate-900">Size</th>
                  <th className="py-3 pr-4 font-semibold text-slate-900">Dimensions</th>
                  <th className="py-3 font-semibold text-slate-900">Best for</th>
                </tr>
              </thead>
              <tbody>
                {sizeRows.map((row) => (
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
            Match the footprint to the venue space, not to a mood-board label. A hotel foyer often
            takes A1 on an easel. A long marquee aisle or barn wall may need 70 × 100 cm or A0 so
            guests can read the seating plan without crowding. Measure the easel or wall before you
            lock the size on the quote.
          </p>

          <div className="relative rounded-2xl overflow-hidden h-56 mb-8 not-prose">
            <Image
              src={SEATING_IMAGE}
              alt="Wedding seating chart Ireland — foamex table plan board for Dublin hotels"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Foamex thickness — 3 mm, 5 mm, 5.5 mm and 10 mm
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Thickness decides how the board stands and travels. These are the same thicknesses as
            PrintNPack&apos;s standard{' '}
            <Link
              href="/blog/foamex-boards-ireland-guide"
              className="text-blue-600 hover:underline"
            >
              foamex boards in Ireland
            </Link>
            , chosen here for wedding day use.
          </p>
          <div className="overflow-x-auto mb-6 not-prose">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-3 pr-4 font-semibold text-slate-900">Thickness</th>
                  <th className="py-3 font-semibold text-slate-900">Best for</th>
                </tr>
              </thead>
              <tbody>
                {thicknessRows.map((row) => (
                  <tr key={row.thickness} className="border-b border-slate-100">
                    <td className="py-3 pr-4 font-medium text-slate-800 whitespace-nowrap">
                      {row.thickness}
                    </td>
                    <td className="py-3 text-slate-700">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-700 leading-relaxed mb-8">
            <strong>5 mm</strong> is the usual pick for a welcome board or seating plan.{' '}
            <strong>3 mm</strong> suits a lighter board that hangs or leans.{' '}
            <strong>5.5 mm</strong> adds a little stiffness on larger cuts.{' '}
            <strong>10 mm</strong> stands more firmly at an entrance when the board is freestanding.
            If the venue supplies a sturdy easel, 5 mm on A1 is enough for most Irish hotel and barn
            weddings.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Laminated vs unlaminated finish
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Every wedding board is full-colour print on foamex. Finish is a second choice on the quote
            builder: <strong>unlaminated</strong> or <strong>laminated</strong>. Lamination gives a
            wipeable surface — useful when the board sits near a door, a porch or outdoors for part of
            the day, or when planners want to clean fingerprints between ceremonies.
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-8">
            <li>Unlaminated — standard print finish for indoor easels and dry rooms</li>
            <li>Laminated — wipeable finish for doors, porches and high-touch seating plans</li>
            <li>Material fixed as foamex; print fixed as full colour</li>
            <li>Artwork proofed before anything is cut</li>
          </ul>

          <div className="grid sm:grid-cols-2 gap-3 mb-8 not-prose">
            <div className="relative rounded-2xl overflow-hidden h-44">
              <Image
                src={ORDER_BOARD_IMAGE}
                alt="Order of the day wedding board Ireland — foamex easel outside an Irish marquee"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 384px"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden h-44">
              <Image
                src={PHOTO_BOARD_IMAGE}
                alt="Wedding photo board Ireland — foamex our-story board for Ashbourne couples"
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
            The minimum order is <strong>1 board</strong>. The quote builder offers quantities of 1,
            2, 3, 5 and 10 — or type the number you need. Many couples order one welcome board plus one
            seating plan; planners often add an order-of-the-day board and a small A2 for cards and
            gifts.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Keep the same type and florals as the invitation so guests recognise the wedding&apos;s
            paper story from the envelope to the easel. Send names, date, seating list and wording
            together so one proof covers the set. Nothing prints until you approve it.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Price depends on size, thickness, finish and quantity. Choose the options on the{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              wedding boards Ireland
            </Link>{' '}
            page and we confirm the figure before printing — do not reuse rates from other printers or
            older quotes.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Build the day-of set: boards, menus, napkins and envelopes
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Foamex boards work best as part of a matching day-of set. Keep colour and type consistent
            from the post to the porch.
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
                wedding menus and place cards Ireland
              </Link>
            </li>
            <li>
              Foamex welcome and seating boards —{' '}
              <Link href={HUB_HREF} className="text-blue-600 hover:underline">
                wedding boards Ireland
              </Link>
            </li>
            <li>
              White airlaid or kraft wedding napkins —{' '}
              <Link href="/wedding-napkins-ireland" className="text-blue-600 hover:underline">
                wedding napkins Ireland
              </Link>
            </li>
          </ol>
          <p className="text-slate-700 leading-relaxed mb-4">
            Need a handheld order of the day as well as an easel board? Card formats (A5, A6, DL) sit
            on a separate page at{' '}
            <Link
              href="/wedding-order-thank-you-cards-ireland"
              className="text-blue-600 hover:underline"
            >
              order of the day and thank-you cards
            </Link>
            . Use the foamex board for the shared display and the card for each guest seat if you want
            both.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            For general foamex thickness and commercial uses beyond weddings, see our{' '}
            <Link
              href="/blog/foamex-boards-ireland-guide"
              className="text-blue-600 hover:underline"
            >
              foamex boards Ireland guide
            </Link>
            .
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-8 not-prose">
            <div className="relative rounded-2xl overflow-hidden h-44">
              <Image
                src={MENU_IMAGE}
                alt="Wedding menus Ireland — sage dinner menu that matches foamex board colours"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 384px"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden h-44">
              <Image
                src={ORDER_CARD_IMAGE}
                alt="Order of the day cards Ireland — sage programme cards alongside foamex boards"
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
            Boards are printed in Ashbourne, Co. Meath. Couples and planners can collect locally, or
            PrintNPack delivers to Dublin, Cork, Galway, Limerick and every county. That suits city
            hotels and country venues that need welcome and seating boards ahead of the reception.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Local collection works well when you are already collecting envelopes, menus, napkins or
            coasters on the same trip. Multi-county guest lists usually take nationwide dispatch so
            boards arrive before the table plan is finalised.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            UK and EU postage is available when planners or couples sit outside Ireland — the cost is
            confirmed on your quote, not assumed in an Ireland-only figure. Northern Ireland and Great
            Britain routes are handled the same way as other PrintNPack wedding print: ask on the
            quote so postage is visible before you confirm.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How to order wedding boards in Ireland
          </h2>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-8">
            <li>Decide the use — welcome, seating plan, order of the day or a smaller sign</li>
            <li>Choose A2, A1, A0, 60 × 90 cm, 70 × 100 cm, full sheet or a custom cut</li>
            <li>Pick thickness (5 mm is the usual start) and laminated or unlaminated</li>
            <li>Prepare names, seating list and artwork in the invitation colours</li>
            <li>
              Open the{' '}
              <Link href={HUB_HREF} className="text-blue-600 hover:underline">
                wedding boards Ireland
              </Link>{' '}
              page, or ask via the{' '}
              <Link href="/quote" className="text-blue-600 hover:underline">
                free quote form
              </Link>
            </li>
            <li>Approve the proof, then take Ireland delivery or Ashbourne collection</li>
          </ol>

          <div className="bg-slate-900 rounded-xl p-6 mb-8 text-white not-prose">
            <p className="font-semibold mb-1">Ready to print wedding boards?</p>
            <p className="text-slate-400 text-sm mb-4">
              Foamex welcome signs, seating plans and order-of-the-day boards — A2 to 8 × 4 ft, 3 mm
              to 10 mm, laminated or unlaminated, from 1 board, printed in Ashbourne with nationwide
              Ireland delivery.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={HUB_HREF}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Wedding Boards →
              </Link>
              <Link
                href="/quote"
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/wedding-menus-place-cards-ireland"
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Menus &amp; Place Cards
              </Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6 not-prose">
            {[
              {
                q: 'Where can I buy printed wedding boards in Ireland?',
                a: 'PrintNPack prints foamex wedding boards in Ashbourne, Co. Meath and delivers across Ireland — Dublin, Cork, Galway and every county. Boards are full colour on foamex, cut to size, with a minimum of 1. The quote confirms the price before printing.',
              },
              {
                q: 'What size wedding board should I order?',
                a: 'A1 (594 × 841 mm) is the usual welcome board. A2 suits smaller signs such as cards and gifts or an unplugged ceremony. A0, 60 × 90 cm and 70 × 100 cm suit large seating plans or entrance boards. Custom sizes are fine if they fit the 8 × 4 ft sheet (2440 × 1220 mm).',
              },
              {
                q: 'What foamex thickness should I choose for a wedding board?',
                a: '5 mm is the usual choice for a welcome board or seating plan. 3 mm is lighter for a board that hangs or leans. 5.5 mm is a little stiffer for a larger board. 10 mm is the stiffest sheet for a freestanding entrance board. These match our standard foamex thicknesses.',
              },
              {
                q: 'Can wedding boards be laminated?',
                a: 'Yes. Choose unlaminated or laminated on the quote. Lamination gives a wipeable finish, which helps if the board sits near a door or outdoors for part of the day.',
              },
              {
                q: 'Do you deliver wedding boards across Ireland?',
                a: 'Yes. Boards are printed in Ashbourne, Co. Meath. You can collect locally, or we deliver to Dublin, Cork, Galway and every county. UK and EU postage is quoted separately on the order.',
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
              title: 'Wedding Menus & Place Cards Ireland: A5, Tent, A6 & DL Sizes Buying Guide',
            },
            {
              href: '/blog/wedding-envelopes-ireland-sizes-buying-guide',
              src: ENVELOPE_IMAGE,
              title: 'Wedding Envelopes Ireland: C6, C5 & DL Sizes Buying Guide',
            },
            {
              href: '/blog/foamex-boards-ireland-guide',
              src: HERO_IMAGE,
              title: 'Foamex Boards Ireland Guide',
            },
            {
              href: '/blog/custom-printed-napkins',
              src: NAPKIN_IMAGE,
              title: 'Custom Printed Napkins | Cocktail, Wedding and Kraft',
            },
          ].map(({ href, src, title: relatedTitle }) => (
            <Link
              key={href}
              href={href}
              className="group flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors"
            >
              <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                <Image src={src} alt="" fill className="object-cover" sizes="64px" />
              </div>
              <span className="text-sm font-medium text-slate-800 group-hover:text-blue-600 leading-snug">
                {relatedTitle}
              </span>
            </Link>
          ))}
        </div>
      </main>
    </Layout>
  );
}
