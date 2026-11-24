import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/wedding-order-thank-you-cards-ireland-sizes-buying-guide`;
const HUB_HREF = '/wedding-order-thank-you-cards-ireland';
const HERO_IMAGE = '/images/wedding/wedding-order-of-day-sage-table-ireland.jpg';
const TERRACOTTA_IMAGE = '/images/wedding/wedding-order-of-day-terracotta-ireland.jpg';
const DESIGNS_IMAGE = '/images/wedding/wedding-order-of-day-designs-ireland.jpg';
const THANKS_SAGE_IMAGE = '/images/wedding/wedding-thank-you-sage-folded-ireland.jpg';
const THANKS_DESIGNS_IMAGE = '/images/wedding/wedding-thank-you-designs-ireland.jpg';
const THANKS_PHOTO_IMAGE = '/images/wedding/wedding-thank-you-photo-envelopes-ireland.jpg';
const MENU_IMAGE = '/images/wedding/wedding-menu-sage-dinner-ireland.jpg';
const ENVELOPE_IMAGE = '/images/wedding/wedding-envelope-floral-address-ireland.jpg';
const BOARD_IMAGE = '/images/wedding/wedding-foamex-welcome-board-ireland.jpg';
const NAPKIN_IMAGE = '/images/wedding/wedding-napkins-20x20-airlaid-bar-ireland.jpg';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Wedding Order of the Day & Thank-you Cards Ireland: A5, A6 & DL Sizes Buying Guide',
  description:
    'How to buy printed wedding order of the day and thank-you cards in Ireland — A5, A6 and DL on 350 gsm, full colour both sides, MOQ from 25, with nationwide delivery from Ashbourne.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-11-24',
  dateModified: '2026-11-24',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I buy wedding order of the day and thank-you cards in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack prints order of the day cards and wedding thank-you cards in Ashbourne, Co. Meath and delivers across Ireland — Dublin, Cork, Galway and every county. Cards are 350 gsm, full colour both sides, with a minimum of 25. The quote confirms the price before printing.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is an order of the day card?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It is the running order of the wedding, from the arrival time to the last dance. It is also called an order of service, a wedding programme or a timeline card. A5 is the usual size. DL is a long card, and A6 is the short one.',
      },
    },
    {
      '@type': 'Question',
      name: 'What size are wedding thank-you cards in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A6 (105 × 148 mm) is the usual short thank-you. DL (99 × 210 mm) gives a longer note, and A5 (148 × 210 mm) gives room for a letter. All are printed in full colour on both sides on 350 gsm card.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the minimum order for order of the day and thank-you cards?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The minimum is 25 cards. Quantity options include 25, 50, 75, 100, 150, 200 and 300 — or type your own number. Choose the order of the day or a thank-you format in the quote builder.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you deliver wedding thank-you cards across Ireland?',
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
      name: 'Wedding Order of the Day & Thank-you Cards Ireland Buying Guide',
      item: PAGE_URL,
    },
  ],
};

const orderRows = [
  {
    size: 'A5 order of the day',
    dims: '148 × 210 mm',
    use: 'Usual programme — ceremony through last dance; one per guest or shared between two',
  },
  {
    size: 'DL order of the day',
    dims: '99 × 210 mm',
    use: 'Long single-column timeline; easy to hold during the ceremony',
  },
  {
    size: 'A6 order of the day',
    dims: '105 × 148 mm',
    use: 'Short programme when the day has only a few lines',
  },
];

const thanksRows = [
  {
    size: 'A6 thank-you',
    dims: '105 × 148 mm',
    use: 'Short thank-you with names and a line on the front',
  },
  {
    size: 'DL thank-you',
    dims: '99 × 210 mm',
    use: 'Longer note with room for a few lines of thanks',
  },
  {
    size: 'A5 thank-you',
    dims: '148 × 210 mm',
    use: 'Letter-size thank-you when you want more than a line',
  },
];

const buyerRows = [
  {
    buyer: 'Couples planning the day',
    use: 'Matching programme and post-wedding notes in the same type as the invitation',
  },
  {
    buyer: 'Wedding planners',
    use: 'One proofed running order for Dublin, Cork and Galway venue timelines',
  },
  {
    buyer: 'Stationers & designers',
    use: 'Day-of and thank-you cards that continue the suite already drawn for the post',
  },
  {
    buyer: 'Hotels & venues',
    use: 'Consistent programme cards for in-house wedding packages across Ireland',
  },
];

export default function WeddingOrderThankYouCardsIrelandSizesBuyingGuide() {
  const title =
    'Wedding Order of the Day & Thank-you Cards Ireland: A5, A6 & DL Sizes Buying Guide';
  const description =
    'Buy printed wedding order of the day and thank-you cards in Ireland with confidence — A5, A6 and DL on 350 gsm, full colour both sides, MOQ from 25, with delivery to Dublin, Cork, Galway and nationwide from Ashbourne.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="wedding order of the day ireland, wedding thank you cards ireland, order of service cards dublin, A5 wedding programme cork, A6 thank you cards galway, DL timeline cards ashbourne, wedding stationery ireland, personalised thank you cards ireland, wedding programme card ireland, order of the day cards ireland"
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
          content="Wedding order of the day Ireland — sage programme card for a Dublin reception table"
        />
        <meta property="article:published_time" content="2026-11-24" />

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
          <span className="text-slate-900">Wedding Order of the Day &amp; Thank-you Cards Ireland</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            Wedding Guide
          </span>
          <span className="text-slate-400 text-sm">24 Nov 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Wedding Order of the Day &amp; Thank-you Cards Ireland: A5, A6 &amp; DL Sizes Buying
          Guide
        </h1>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="relative rounded-2xl overflow-hidden h-48 col-span-2">
            <Image
              src={HERO_IMAGE}
              alt="Wedding order of the day Ireland — sage programme card on a Dublin reception table"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 66vw, 512px"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative rounded-xl overflow-hidden flex-1">
              <Image
                src={THANKS_SAGE_IMAGE}
                alt="Wedding thank-you cards Ireland — folded sage note for Cork guest post"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden flex-1">
              <Image
                src={DESIGNS_IMAGE}
                alt="Order of the day designs Ireland — cream, blue and terracotta programmes for Irish weddings"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Guests need the times on the day, and a note of thanks afterwards. This guide explains
            how to buy{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              wedding order of the day and thank-you cards in Ireland
            </Link>
            : which size fits a full timeline versus a short note, what the minimum order is, and how
            delivery from Ashbourne covers Dublin, Cork, Galway and every county. Prices are
            confirmed on the quote before anything is printed — we do not invent catalogue rates here.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            PrintNPack prints both card types on 350 gsm stock in full colour on both sides, so the
            type and florals can match the invitation, the menu and the place cards. Pair them with{' '}
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
            so the paper story stays consistent from the ceremony to the thank-you post.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Who buys order of the day and thank-you cards in Ireland?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Most orders come from couples and planners who want the running order and the post-wedding
            notes printed in the same face as the invitation — not handwritten programmes the morning
            of the reception. Hotels and venues also use the same page when in-house packages need
            matching day-of stationery for Irish weddings.
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
            Order of the day sizes — A5, DL and A6
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            An order of the day card is the wedding programme: the ceremony, drinks, dinner and the
            first dance, with the times. People also call it an order of service, a wedding programme
            or a timeline card. Size is the first buying decision. Irish couples usually start with A5
            because it holds a full day without crowding. A long single column fits DL; a short day
            with only a few lines drops to A6.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Match the card to the wording, not to a mood-board label. A ceremony-plus-reception day
            with drinks, dinner and dancing often needs the A5 footprint. A civil ceremony with a short
            drinks hour can sit happily on A6. If guests will hold the card during the ceremony, DL’s
            narrow format is easy in the hand.
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
                {orderRows.map((row) => (
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
            <strong>A5 order of the day</strong> is recommended on the product page for the usual
            running order. <strong>DL</strong> suits a long single column. <strong>A6</strong> suits a
            short programme. Send the times and wording so we can proof the layout before print day.
          </p>

          <div className="relative rounded-2xl overflow-hidden h-56 mb-8 not-prose">
            <Image
              src={TERRACOTTA_IMAGE}
              alt="Wedding order of the day Ireland — terracotta timeline card for a Galway ceremony"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Thank-you card sizes — A6, DL and A5
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            A thank-you card goes out after the wedding, with the names and a line of thanks. A6 is
            the usual short thank-you. DL gives room for a longer note. A5 is letter-size when you want
            more than a line — useful for a photo on one side and a personal message on the other.
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
                {thanksRows.map((row) => (
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
            Order one thank-you for every guest household you plan to write to — often fewer than the
            day-of guest count when couples share a household. Intimate dinners often sit near the
            25–50 band for programmes; larger hotel and marquee weddings across Meath, Cork and Galway
            usually land in the 100–200 band once spares are counted.
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-8">
            <li>350 gsm card stock for order of the day and thank-you cards</li>
            <li>Full-colour print on both sides</li>
            <li>Type, flowers and colours that can match the invitation and menus</li>
            <li>Times and wording for the programme; names and a thanks line for the note</li>
          </ul>

          <div className="grid sm:grid-cols-2 gap-3 mb-8 not-prose">
            <div className="relative rounded-2xl overflow-hidden h-44">
              <Image
                src={THANKS_DESIGNS_IMAGE}
                alt="Wedding thank-you designs Ireland — photo, script and monogram cards for Dublin couples"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 384px"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden h-44">
              <Image
                src={THANKS_PHOTO_IMAGE}
                alt="Wedding thank-you cards Ireland — photo notes sealed for Cork and Galway guests"
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
            150, 200 and 300, or you can type your own number. Order a few extras for keepsakes,
            last-minute guests and a spare for the photographer’s desk.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Order of the day and thank-you cards can match each other — and the invitation — because
            both print full colour on the same 350 gsm card. Send the times, the names and the wording
            together so one proof covers the day-of set and the post-wedding notes. Nothing prints
            until you approve it.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Price depends on card format and quantity. Choose the size on the{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              wedding order of the day and thank-you cards Ireland
            </Link>{' '}
            page and we confirm the figure before printing — do not reuse rates from other printers or
            older quotes.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Build the day-of set: programmes, menus, envelopes and boards
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Day-of stationery works best as a set. Keep the same type and florals from the invitation
            through to the seating plan so guests recognise the wedding’s paper story.
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
              <Link
                href="/blog/wedding-menus-place-cards-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                wedding menus and place cards Ireland
              </Link>
            </li>
            <li>
              Order of the day and thank-you cards —{' '}
              <Link href={HUB_HREF} className="text-blue-600 hover:underline">
                order of the day and thank-you cards
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
            White airlaid or kraft wedding napkins round out the table — start from{' '}
            <Link href="/wedding-napkins-ireland" className="text-blue-600 hover:underline">
              wedding napkins Ireland
            </Link>{' '}
            once the cards are locked.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-8 not-prose">
            <div className="relative rounded-2xl overflow-hidden h-44">
              <Image
                src={MENU_IMAGE}
                alt="Wedding menus Ireland — sage dinner menu that pairs with order of the day cards"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 384px"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden h-44">
              <Image
                src={BOARD_IMAGE}
                alt="Wedding boards Ireland — foamex welcome sign matching programme colours from Ashbourne"
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
            hotels and country venues that need programmes ahead of the ceremony and thank-you cards
            ready for the weeks after.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Local collection works well when you are already collecting envelopes, menus, napkins or
            foamex boards on the same trip. Multi-county guest lists usually take nationwide dispatch
            so order of the day cards arrive before the table plan is set.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            UK and EU postage is available when planners or couples sit outside Ireland — the cost is
            confirmed on your quote, not assumed in an Ireland-only figure. Northern Ireland and Great
            Britain routes are handled the same way as other PrintNPack wedding print: ask on the
            quote so postage is visible before you confirm.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How to order wedding order of the day and thank-you cards in Ireland
          </h2>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-8">
            <li>Decide A5, DL or A6 for the programme — or A6, DL or A5 for thank-you cards</li>
            <li>Prepare the times and wording, or the names and thanks line</li>
            <li>Choose quantity from 25 (or type your own number)</li>
            <li>
              Open the{' '}
              <Link href={HUB_HREF} className="text-blue-600 hover:underline">
                wedding order of the day and thank-you cards Ireland
              </Link>{' '}
              page, or ask via the{' '}
              <Link href="/quote" className="text-blue-600 hover:underline">
                free quote form
              </Link>
            </li>
            <li>Approve the proof, then take Ireland delivery or Ashbourne collection</li>
          </ol>

          <div className="bg-slate-900 rounded-xl p-6 mb-8 text-white not-prose">
            <p className="font-semibold mb-1">Ready to print order of the day and thank-you cards?</p>
            <p className="text-slate-400 text-sm mb-4">
              A5, A6 and DL programmes and thank-you notes — 350 gsm, full colour both sides, from 25,
              printed in Ashbourne with nationwide Ireland delivery.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={HUB_HREF}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Order of the Day &amp; Thank-you Cards →
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
                q: 'Where can I buy wedding order of the day and thank-you cards in Ireland?',
                a: 'PrintNPack prints order of the day cards and wedding thank-you cards in Ashbourne, Co. Meath and delivers across Ireland — Dublin, Cork, Galway and every county. Cards are 350 gsm, full colour both sides, with a minimum of 25. The quote confirms the price before printing.',
              },
              {
                q: 'What is an order of the day card?',
                a: 'It is the running order of the wedding, from the arrival time to the last dance. It is also called an order of service, a wedding programme or a timeline card. A5 is the usual size. DL is a long card, and A6 is the short one.',
              },
              {
                q: 'What size are wedding thank-you cards in Ireland?',
                a: 'A6 (105 × 148 mm) is the usual short thank-you. DL (99 × 210 mm) gives a longer note, and A5 (148 × 210 mm) gives room for a letter. All are printed in full colour on both sides on 350 gsm card.',
              },
              {
                q: 'What is the minimum order for order of the day and thank-you cards?',
                a: 'The minimum is 25 cards. Quantity options include 25, 50, 75, 100, 150, 200 and 300 — or type your own number. Choose the order of the day or a thank-you format in the quote builder.',
              },
              {
                q: 'Do you deliver wedding thank-you cards across Ireland?',
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
              href: '/blog/wedding-boards-ireland-sizes-thickness-buying-guide',
              src: BOARD_IMAGE,
              title: 'Wedding Boards Ireland: Foamex Sizes, Thickness & Laminate Buying Guide',
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
