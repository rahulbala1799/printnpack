import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/wedding-envelopes-ireland-sizes-buying-guide`;
const HUB_HREF = '/wedding-envelopes-ireland';
const HERO_IMAGE = '/images/wedding/wedding-envelope-floral-address-ireland.jpg';
const DESIGNS_IMAGE = '/images/wedding/wedding-envelope-designs-ireland.jpg';
const WORKSHOP_IMAGE = '/images/wedding/wedding-envelopes-printed-workshop-ireland.jpg';
const SUITE_IMAGE = '/images/wedding/wedding-invitation-suite-ireland.jpg';
const NAPKIN_IMAGE = '/images/wedding/wedding-napkins-20x20-airlaid-bar-ireland.jpg';
const COASTER_IMAGE = '/images/wedding/wedding-coaster-blush-ej-ireland.jpg';
const CARDS_IMAGE = '/images/products/business-cards/business-cards-ireland-stack.jpg';
const BOARD_IMAGE = '/images/wedding/wedding-foamex-welcome-board-ireland.jpg';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Wedding Envelopes Ireland: C6, C5 & DL Sizes Buying Guide',
  description:
    'How to buy printed wedding envelopes in Ireland — C6, C5 and DL sizes, guest addressing and return address, MOQ from 25, with nationwide delivery from Ashbourne for Irish couples and planners.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-11-14',
  dateModified: '2026-11-14',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I buy printed wedding envelopes in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack prints wedding envelopes in Ashbourne, Co. Meath and delivers across Ireland — Dublin, Cork, Galway and every county. Choose C6, C5 or DL, with colour print, guest addressing and an optional return address on the flap. Minimum order is 25 envelopes. The quote confirms the price before printing.',
      },
    },
    {
      '@type': 'Question',
      name: 'What wedding envelope sizes are available in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standard sizes are C6 (114 × 162 mm) for A6 or RSVP cards, C5 (162 × 229 mm) for an A5 invitation, and DL (110 × 220 mm) for a long or folded invitation. Match the envelope to the card you are posting.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you print the guest’s name and address on wedding envelopes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The design can include each guest’s name and address on the front, plus a return address on the flap, so invitations leave ready to post.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the minimum order for wedding envelopes in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The minimum is 25 envelopes. Quantity options in the quote builder include 25, 50, 100, 150, 200, 300 and 500 — or type the number of guests you need.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you deliver wedding envelopes across Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Envelopes are printed in Ashbourne, Co. Meath. You can collect locally, or we deliver to Dublin, Cork, Galway and every county. UK and EU postage is quoted separately on the order.',
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
      name: 'Wedding Envelopes Ireland Buying Guide',
      item: PAGE_URL,
    },
  ],
};

const sizeRows = [
  {
    size: 'C6',
    dims: '114 × 162 mm',
    use: 'Fits an A6 card — usual for RSVP cards, details cards and smaller invitations',
  },
  {
    size: 'C5',
    dims: '162 × 229 mm',
    use: 'Fits an A5 card — the usual size for the main invitation',
  },
  {
    size: 'DL',
    dims: '110 × 220 mm',
    use: 'A long envelope for a DL card or a folded invitation',
  },
];

const buyerRows = [
  {
    buyer: 'Couples posting invitations',
    use: 'Colour envelopes with names and addresses ready for the post',
  },
  {
    buyer: 'Wedding planners',
    use: 'One proofed design across guest lists for Dublin, Cork and Galway venues',
  },
  {
    buyer: 'Stationers & designers',
    use: 'Match envelope colour and type to the invitation suite already designed',
  },
  {
    buyer: 'UK or EU guests lists',
    use: 'Ireland print first; UK and EU postage confirmed on the quote when needed',
  },
];

export default function WeddingEnvelopesIrelandSizesBuyingGuide() {
  const title = 'Wedding Envelopes Ireland: C6, C5 & DL Sizes Buying Guide';
  const description =
    'Buy printed wedding envelopes in Ireland with confidence — C6, C5 and DL sizes, guest addressing and return address, MOQ from 25, with delivery to Dublin, Cork, Galway and nationwide from Ashbourne.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="wedding envelopes ireland, printed wedding envelopes dublin, C6 wedding envelopes ireland, C5 invitation envelopes cork, DL wedding envelopes galway, personalised wedding envelopes ireland, addressed wedding envelopes ashbourne, guest addressing envelopes ireland, wedding invitation envelopes ireland, colour printed envelopes wedding"
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
          content="Wedding envelopes Ireland — floral addressed C6 envelope for Dublin invitations"
        />
        <meta property="article:published_time" content="2026-11-14" />

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
          <span className="text-slate-900">Wedding Envelopes Ireland</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            Wedding Guide
          </span>
          <span className="text-slate-400 text-sm">14 Nov 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Wedding Envelopes Ireland: C6, C5 &amp; DL Sizes Buying Guide
        </h1>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="relative rounded-2xl overflow-hidden h-48 col-span-2">
            <Image
              src={HERO_IMAGE}
              alt="Wedding envelopes Ireland — floral guest-addressed C6 envelope for Dublin invitation posting"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 66vw, 512px"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative rounded-xl overflow-hidden flex-1">
              <Image
                src={DESIGNS_IMAGE}
                alt="Printed wedding envelopes Ireland — C5 design options for Cork invitation suites"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden flex-1">
              <Image
                src={WORKSHOP_IMAGE}
                alt="Wedding envelope printing Ireland — colour envelopes prepared in Ashbourne workshop"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            The invitation suite is only half the job if the envelope still looks blank. This guide
            explains how to buy{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              printed wedding envelopes in Ireland
            </Link>
            : which size fits your card, how guest addressing and return addresses work, what the
            minimum order is, and how delivery from Ashbourne covers Dublin, Cork, Galway and every
            county. Prices are confirmed on the quote before anything is printed — we do not invent
            catalogue rates here.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            PrintNPack prints white, blush and kraft envelopes in full colour so the envelope matches
            the invitation. Pair envelopes with{' '}
            <Link
              href="/blog/custom-printed-napkins"
              className="text-blue-600 hover:underline"
            >
              custom printed napkins
            </Link>{' '}
            and day-of stationery so the paper story stays consistent from the postbox to the table.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Who buys printed wedding envelopes in Ireland?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Most orders come from couples and planners who want invitations to leave ready to post —
            not a last-minute handwriting session the week before the RSVP date. Designers also use
            the same page when the suite is already drawn and only the envelope still needs print.
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
            C6, C5 and DL — which wedding envelope size to order
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Size is the first buying decision. Irish stationers talk in C-series and DL because those
            sizes map cleanly to A6, A5 and long cards. Match the envelope to the card you are
            posting — including any belly band, RSVP card or details insert stacked inside — not to a
            vague &quot;invitation&quot; label on a mood board.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            If the stack is thicker than a single card, check that the chosen envelope still closes
            cleanly. Couples who add a map card or accommodation note often move from a tight C6 to
            C5 rather than forcing a bulky pack into a smaller pocket.
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
            <strong>C6</strong> is recommended on the product page for smaller cards and RSVPs.{' '}
            <strong>C5</strong> is the usual main invitation. <strong>DL</strong> suits long or
            folded formats. If you are unsure, measure the finished card including any belly band or
            insert stack before you quote.
          </p>

          <div className="relative rounded-2xl overflow-hidden h-56 mb-8 not-prose">
            <Image
              src={DESIGNS_IMAGE}
              alt="Wedding envelope sizes Ireland — C6, C5 and DL colour designs for Irish invitation suites"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Guest addressing, return address and colour print
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Envelopes print in full colour. The couple&apos;s design can sit on the front with each
            guest&apos;s name and address, and a return address can sit on the flap. That is the
            difference between a printed wedding envelope and a plain pack you address by hand at the
            kitchen table the week before the RSVP deadline.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Guest addressing is useful when the list is long, when several households share a surname,
            or when overseas guests need clear Irish return details on the flap. Planners in Dublin
            and Cork often send one spreadsheet with names and addresses so every envelope proofs as
            a set before print day.
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
            <li>White, blush and kraft stocks to match invitation paper</li>
            <li>Full-colour print for florals, monograms and type</li>
            <li>Guest name and address on the front when you supply the list</li>
            <li>Optional return address on the flap</li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-8">
            Supply artwork and the guest list early enough for a proof. Nothing prints until you
            approve it — the same proof-first approach used across PrintNPack wedding stationery, from
            napkins to foamex boards.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-8 not-prose">
            <div className="relative rounded-2xl overflow-hidden h-44">
              <Image
                src={WORKSHOP_IMAGE}
                alt="Printed wedding envelopes Ireland — workshop proofing and colour print in Ashbourne"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 384px"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden h-44">
              <Image
                src={SUITE_IMAGE}
                alt="Wedding invitation suite Ireland — envelopes that match cards for Galway and Cork weddings"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 384px"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Minimum order and quantities
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            The minimum order is <strong>25 envelopes</strong>. The quote builder offers 25, 50, 100,
            150, 200, 300 and 500, or you can type the number of guests on your list. Order a few
            extras for keepsakes, last-minute plus-ones and a spare for the photographer&apos;s desk.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Small elopements and intimate dinners often sit near the 25–50 band. Larger hotel and
            marquee weddings across Meath, Galway and Cork usually land in the 100–200 band once
            household addresses and spare envelopes are counted. Type the exact guest count if your
            list does not match a preset step.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Price depends on size, design and quantity. Choose the size and quantity on the{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              wedding envelopes Ireland
            </Link>{' '}
            page and we confirm the figure before printing — do not reuse rates from other printers or
            older quotes.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Build the stationery set: envelopes, napkins, menus and boards
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Envelopes sit at the start of the guest journey. Keep the same type and florals on the
            day so the suite feels intentional rather than pieced together from separate suppliers.
          </p>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-6">
            <li>Printed wedding envelopes for posting the invitation</li>
            <li>
              White airlaid or kraft wedding napkins — see our{' '}
              <Link
                href="/blog/custom-printed-napkins"
                className="text-blue-600 hover:underline"
              >
                custom printed napkins guide
              </Link>
            </li>
            <li>
              Menu and place cards on 350 gsm for the table —{' '}
              <Link href="/wedding-menus-place-cards-ireland" className="text-blue-600 hover:underline">
                wedding menus and place cards
              </Link>
            </li>
            <li>
              Foamex welcome and seating boards for the venue —{' '}
              <Link href="/wedding-boards-ireland" className="text-blue-600 hover:underline">
                wedding boards Ireland
              </Link>
            </li>
          </ol>
          <p className="text-slate-700 leading-relaxed mb-4">
            Order-of-the-day and thank-you cards share the same Ashbourne print path if you want the
            running order and post-wedding notes to match the invitation type. Start from{' '}
            <Link
              href="/wedding-order-thank-you-cards-ireland"
              className="text-blue-600 hover:underline"
            >
              order of the day and thank-you cards
            </Link>{' '}
            once envelopes are locked.
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
                alt="Wedding napkins Ireland — airlaid bar napkins that pair with printed envelopes from Ashbourne"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 384px"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden h-44">
              <Image
                src={BOARD_IMAGE}
                alt="Wedding boards Ireland — foamex welcome sign that matches invitation envelope colours"
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
            Envelopes are printed in Ashbourne, Co. Meath. Couples and planners can collect locally, or
            PrintNPack delivers to Dublin, Cork, Galway, Limerick and every county. That suits city
            weddings and country venues that need stationery ahead of the guest list mail-out.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Local collection works well when you are already collecting napkins, coasters or foamex
            boards on the same trip. Multi-county guest lists usually take nationwide dispatch so
            envelopes arrive before you start stuffing invitations at home.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            UK and EU postage is available when guest lists or planners sit outside Ireland — the cost
            is confirmed on your quote, not assumed in an Ireland-only figure. Northern Ireland and
            Great Britain routes are handled the same way as other PrintNPack wedding print: ask on
            the quote so postage is visible before you confirm.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How to order wedding envelopes in Ireland
          </h2>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-8">
            <li>Measure your invitation card and pick C6, C5 or DL</li>
            <li>Choose white, blush or kraft and prepare the design colours</li>
            <li>Decide if guests need names and addresses printed on the front</li>
            <li>Add an optional return address on the flap</li>
            <li>
              Set quantity from 25 on the{' '}
              <Link href={HUB_HREF} className="text-blue-600 hover:underline">
                wedding envelopes Ireland
              </Link>{' '}
              page, or ask via the{' '}
              <Link href="/quote" className="text-blue-600 hover:underline">
                free quote form
              </Link>
            </li>
            <li>Approve the proof, then take Ireland delivery or Ashbourne collection</li>
          </ol>

          <div className="bg-slate-900 rounded-xl p-6 mb-8 text-white not-prose">
            <p className="font-semibold mb-1">Ready to print wedding envelopes?</p>
            <p className="text-slate-400 text-sm mb-4">
              C6, C5 and DL wedding envelopes — full colour, guest addressing from 25, printed in
              Ashbourne with nationwide Ireland delivery.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={HUB_HREF}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Wedding Envelopes Ireland →
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
                q: 'Where can I buy printed wedding envelopes in Ireland?',
                a: 'PrintNPack prints wedding envelopes in Ashbourne, Co. Meath and delivers across Ireland — Dublin, Cork, Galway and every county. Choose C6, C5 or DL, with colour print, guest addressing and an optional return address on the flap. Minimum order is 25 envelopes. The quote confirms the price before printing.',
              },
              {
                q: 'What wedding envelope sizes are available in Ireland?',
                a: 'Standard sizes are C6 (114 × 162 mm) for A6 or RSVP cards, C5 (162 × 229 mm) for an A5 invitation, and DL (110 × 220 mm) for a long or folded invitation. Match the envelope to the card you are posting.',
              },
              {
                q: 'Can you print the guest’s name and address on wedding envelopes?',
                a: 'Yes. The design can include each guest’s name and address on the front, plus a return address on the flap, so invitations leave ready to post.',
              },
              {
                q: 'What is the minimum order for wedding envelopes in Ireland?',
                a: 'The minimum is 25 envelopes. Quantity options in the quote builder include 25, 50, 100, 150, 200, 300 and 500 — or type the number of guests you need.',
              },
              {
                q: 'Do you deliver wedding envelopes across Ireland?',
                a: 'Yes. Envelopes are printed in Ashbourne, Co. Meath. You can collect locally, or we deliver to Dublin, Cork, Galway and every county. UK and EU postage is quoted separately on the order.',
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
              src: NAPKIN_IMAGE,
              title: 'Custom Printed Napkins | Cocktail, Wedding and Kraft',
            },
            {
              href: '/blog/printed-coasters-ireland-9x9-moq-buying-guide',
              src: COASTER_IMAGE,
              title: 'Printed Coasters Ireland: 9×9 cm & MOQ Buying Guide',
            },
            {
              href: '/blog/premium-linen-feel-napkins-ireland-sizes-buying-guide',
              src: NAPKIN_IMAGE,
              title: 'Premium Linen-Feel Napkins Ireland Sizes Buying Guide',
            },
            {
              href: '/blog/business-cards-ireland-quantities-buying-guide',
              src: CARDS_IMAGE,
              title: 'Business Cards Ireland Quantities Buying Guide',
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
