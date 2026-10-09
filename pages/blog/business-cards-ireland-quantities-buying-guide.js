import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/business-cards-ireland-quantities-buying-guide`;
const HUB_HREF = '/business-cards-ireland';
const HERO_IMAGE = '/images/products/business-cards/business-cards-ireland-stack.jpg';
const FAN_IMAGE = '/images/products/business-cards/business-cards-ireland-fan.jpg';
const CARD_IMAGE = '/images/products/business-card.png';
const STAMP_IMAGE = '/images/rubber-stamps/RubberStamp_10.jpg';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Business Cards Ireland: Quantities, 350 gsm & Dublin Delivery Buying Guide',
  description:
    'How to buy business cards in Ireland — fixed 85 × 55 mm size on 350 gsm stock, quantities from 100 to 1,000 with clear pack prices, 2 day Dublin delivery and 4–6 days nationwide from Ashbourne.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-10-09',
  dateModified: '2026-10-09',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I order business cards in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack prints business cards in Ashbourne, Co. Meath and delivers across Ireland. Dublin is 2 day delivery; the rest of Ireland, including Cork, Galway, Limerick and Waterford, is 4–6 days. Collection is available from Ashbourne.',
      },
    },
    {
      '@type': 'Question',
      name: 'What size and stock are PrintNPack business cards?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every card is a fixed 85 × 55 mm on 350 gsm card. You do not choose alternate lengths or widths — artwork is built for that standard Irish business-card footprint.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much do business cards cost in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Catalogue pack prices are €35 for 100, €60 for 200, €75 for 300 and €160 for 1,000. Confirm the live total on the business cards product page before you order.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the minimum order for business cards?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The smallest listed pack is 100 cards. Larger tiers are 200, 300 and 1,000.',
      },
    },
    {
      '@type': 'Question',
      name: 'How fast is Dublin business card delivery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dublin is 2 day delivery. The rest of Ireland is 4–6 days from Ashbourne, Co. Meath.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I order business cards with leaflets or stamps?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Many Irish SMEs order cards with leaflets for the same launch or with a rubber stamp for dockets and loyalty cards. Pair products when you need the same brand touch across desk, door drop and paperwork.',
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
      name: 'Business Cards Ireland Buying Guide',
      item: PAGE_URL,
    },
  ],
};

const qtyRows = [
  { qty: '100', price: '€35', use: 'Sole traders, first stock or a small team refresh' },
  { qty: '200', price: '€60', use: 'Two-person offices, salons and consultancy pairs' },
  { qty: '300', price: '€75', use: 'Busy counters, sales staff and networking seasons' },
  { qty: '1,000', price: '€160', use: 'Larger teams, exhibitions and high hand-out volume' },
];

export default function BusinessCardsIrelandQuantitiesBuyingGuide() {
  const title = 'Business Cards Ireland: Quantities, 350 gsm & Dublin Delivery Buying Guide';
  const description =
    'Buy business cards in Ireland with confidence — fixed 85 × 55 mm on 350 gsm, packs from 100 (€35) to 1,000 (€160), 2 day Dublin delivery and 4–6 days nationwide from Ashbourne.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="business cards ireland, business card printing dublin, 350 gsm business cards ireland, 85x55 business cards, business cards cork, business cards galway, cheap business cards ireland, business card quantities ireland, print business cards ashbourne, dublin 2 day business cards"
        />
        <meta name="author" content="PrintNPack Ireland" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
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
          content="Business cards Ireland — 350 gsm stack of 85 × 55 mm cards"
        />
        <meta property="article:published_time" content="2026-10-09" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${siteUrl}${HERO_IMAGE}`} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
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
          <span className="text-slate-900">Business Cards Ireland</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            Retail Guide
          </span>
          <span className="text-slate-400 text-sm">9 Oct 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Business Cards Ireland: Quantities, 350 gsm &amp; Dublin Delivery Buying Guide
        </h1>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="relative rounded-2xl overflow-hidden h-48 col-span-2 bg-slate-50">
            <Image
              src={HERO_IMAGE}
              alt="Business cards Ireland — stacked 350 gsm 85 × 55 mm cards for Dublin offices"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 66vw, 512px"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={FAN_IMAGE}
                alt="Business cards Ireland — fanned 85 × 55 mm cards for Cork and Galway SMEs"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={CARD_IMAGE}
                alt="Business card printing Ireland — standard card artwork layout Ashbourne"
                fill
                className="object-contain p-2"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            A clear business card still earns its keep in Ireland — at the RDS, a Cork networking
            breakfast, a Galway salon desk or a tradesperson&apos;s van. The buying decision is rarely
            about fancy shapes; it is about stock weight, how many you actually hand out, and whether
            Dublin or nationwide delivery fits the deadline.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            This guide covers <strong>business cards in Ireland</strong> from PrintNPack — a fixed{' '}
            <strong>85 × 55 mm</strong> size on <strong>350 gsm</strong> card, pack prices from{' '}
            <strong>€35 for 100</strong> to <strong>€160 for 1,000</strong>,{' '}
            <strong>2 day delivery in Dublin</strong> and <strong>4–6 days</strong> for the rest of
            Ireland. Order on the{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              business cards Ireland
            </Link>{' '}
            product page.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Why Irish SMEs still order printed business cards
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Consultants, estate agents, barbers, accountants, restaurants and sales teams still need
            something physical when a phone number or QR code has to leave the room with the customer.
            Digital contact shares help; they do not replace a card at a site visit or a hotel
            conference badge line.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            PrintNPack keeps the specification simple so you are not choosing between six board weights
            and three non-standard sizes. One footprint, one stock, four quantity tiers — then Dublin
            or rest-of-Ireland delivery from Ashbourne, Co. Meath.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Size and stock: 85 × 55 mm on 350 gsm
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Every PrintNPack business card is <strong>85 × 55 mm</strong> — the standard Irish and UK
            business-card size — on <strong>350 gsm</strong> card. You do not specify length or width
            in the quote builder; artwork should be built for that finished size with safe margins
            inside the trim.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            350 gsm feels substantial in the hand without stepping into ultra-thick luxury board. It
            suits logos, short taglines, mobile numbers and QR codes that need to stay readable after a
            week in a wallet. If you need a larger promotional piece, step up to{' '}
            <Link href="/blog/leaflet-printing-ireland-guide" className="text-blue-600 hover:underline">
              leaflet printing
            </Link>{' '}
            or{' '}
            <Link
              href="/blog/premium-leaflets-ireland-materials-buying-guide"
              className="text-blue-600 hover:underline"
            >
              premium leaflets
            </Link>{' '}
            rather than forcing a booklet of text onto a card.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Quantity tiers and pack prices
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Catalogue quantities are <strong>100, 200, 300 and 1,000</strong>. Listed pack prices from
            the product data are below — confirm the live total on the product page before you pay or
            request a quote confirmation.
          </p>

          <div className="overflow-x-auto mb-8 not-prose">
            <table className="min-w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
              <thead className="bg-slate-50 text-left">
                <tr>
                  <th className="px-4 py-3 font-semibold text-slate-900">Quantity</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">Pack price</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">Best for</th>
                </tr>
              </thead>
              <tbody>
                {qtyRows.map((row) => (
                  <tr key={row.qty} className="border-t border-slate-200">
                    <td className="px-4 py-3 text-slate-900 font-medium">{row.qty}</td>
                    <td className="px-4 py-3 text-slate-900 font-medium">{row.price}</td>
                    <td className="px-4 py-3 text-slate-700">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-slate-700 leading-relaxed mb-8">
            The <strong>minimum order is 100</strong>. Per-card cost falls as you move up the tiers —
            1,000 at €160 is the usual choice when a full sales floor or exhibition stand will empty a
            300 pack in weeks. Order the next tier up if a role title or mobile number is about to
            change; reprinting a wrong line costs more time than a spare box of correct cards.
          </p>

          <div className="relative rounded-2xl overflow-hidden h-56 mb-8 bg-slate-50 not-prose">
            <Image
              src={FAN_IMAGE}
              alt="Fanned business cards Ireland — 350 gsm stock for Ashbourne print and nationwide delivery"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 720px"
            />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Dublin 2 day delivery vs rest of Ireland
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Delivery is split clearly: <strong>Dublin — 2 day delivery</strong>;{' '}
            <strong>rest of Ireland — 4–6 days</strong>. That covers Cork, Galway, Limerick, Waterford
            and every other county from the Ashbourne print base. Collection from Unit 14 Ashbourne
            Business Centre is available when you are nearby — see our{' '}
            <Link href="/blog/printing-ashbourne-guide" className="text-blue-600 hover:underline">
              printing in Ashbourne guide
            </Link>{' '}
            for local context.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Build proofing time into the calendar. A Dublin launch next week usually fits the 2 day
            window once artwork is approved; a Cork or Galway office should allow the full 4–6 day
            band plus a buffer for revisions. UK or Europe shipping is not listed on this product —
            this guide only covers Irish delivery as published.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Which quantity for which Irish buyer?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            <strong>Sole traders and freelancers</strong> in Dublin or Meath often start at{' '}
            <strong>100 (€35)</strong> — enough for a quarter of meetings without a warehouse of
            outdated titles. <strong>Two-person practices and salons</strong> usually land on{' '}
            <strong>200 (€60)</strong> so each person has a working stock.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            <strong>Busy counters and sales teams</strong> — estate agents, recruiters, hospitality
            managers — typically choose <strong>300 (€75)</strong> ahead of networking season.{' '}
            <strong>Larger teams and exhibitors</strong> step to <strong>1,000 (€160)</strong> when
            cards leave the stand as fast as leaflets.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            If half the company is changing job titles in January, print a smaller tier now and reorder
            after the restructure. Cards with wrong names travel further than you expect.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Artwork tips for a readable Irish card
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Keep the name, role and one phone number large. Put the website or QR code where a thumb
            will not cover it. Avoid packing the face with every social handle — a card is not a
            brochure. Leave quiet space at the edges for trim, and supply high-resolution artwork
            sized to <strong>85 × 55 mm</strong>.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Dark full-bleed backgrounds look sharp on 350 gsm but need light text with enough contrast.
            Check the proof carefully for swapped digits in mobile numbers — that is the most common
            expensive mistake on Irish card reprints.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Pairing cards with leaflets, stamps and NCR pads
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            A card rarely works alone at a launch. Many Irish SMEs order the same brand on a short{' '}
            <Link href="/services/leaflets" className="text-blue-600 hover:underline">
              A6 leaflet
            </Link>{' '}
            for door drops, a{' '}
            <Link href="/rubber-stamps" className="text-blue-600 hover:underline">
              rubber stamp
            </Link>{' '}
            for loyalty cards or paid dockets, and{' '}
            <Link href="/ncr-pads-ireland" className="text-blue-600 hover:underline">
              NCR invoice pads
            </Link>{' '}
            for the van or till.
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
            <li>
              <Link href="/blog/leaflet-printing-ireland-guide" className="text-blue-600 hover:underline">
                Leaflet printing Ireland
              </Link>{' '}
              — sizes, stocks and folds when you need more than a card
            </li>
            <li>
              <Link
                href="/blog/premium-leaflets-ireland-materials-buying-guide"
                className="text-blue-600 hover:underline"
              >
                Premium leaflets
              </Link>{' '}
              — metallic, pearl and PVC stocks for luxury brands
            </li>
            <li>
              <Link href="/blog/business-stamps-ireland-guide" className="text-blue-600 hover:underline">
                Business stamps Ireland
              </Link>{' '}
              — company and loyalty stamps for the same desk
            </li>
            <li>
              <Link href="/blog/printing-ashbourne-guide" className="text-blue-600 hover:underline">
                Printing in Ashbourne
              </Link>{' '}
              — local collection and wider print mix
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-8">
            Keep logo colours consistent across card, leaflet and stamp so the brand reads as one
            system when a customer meets you twice in a week.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-8 not-prose">
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={STAMP_IMAGE}
                alt="Rubber stamps Ireland — company stamp often ordered with business cards Ashbourne"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={HERO_IMAGE}
                alt="Printed business cards Ireland — 350 gsm pack for nationwide Irish delivery"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How to order business cards in Ireland
          </h2>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-8">
            <li>Confirm the fixed size: 85 × 55 mm on 350 gsm</li>
            <li>Pick a quantity tier — 100, 200, 300 or 1,000</li>
            <li>Choose Dublin (2 day) or rest of Ireland (4–6 days) delivery</li>
            <li>Upload artwork and approve the proof</li>
            <li>Take delivery nationwide or collect from Ashbourne</li>
          </ol>

          <div className="bg-slate-900 rounded-xl p-6 mb-8 text-white not-prose">
            <p className="font-semibold mb-1">Ready to order business cards?</p>
            <p className="text-slate-400 text-sm mb-4">
              85 × 55 mm · 350 gsm · from €35 for 100 · Dublin 2 day delivery · rest of Ireland 4–6
              days.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={HUB_HREF}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Shop Business Cards Ireland →
              </Link>
              <Link
                href="/ncr-pads-ireland"
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Browse NCR Pads
              </Link>
              <Link
                href="/quote"
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6 not-prose">
            {[
              {
                q: 'Where can I order business cards in Ireland?',
                a: 'PrintNPack prints business cards in Ashbourne, Co. Meath and delivers across Ireland. Dublin is 2 day delivery; Cork, Galway and all other counties are 4–6 days. Collection is available from Ashbourne.',
              },
              {
                q: 'What size and stock are PrintNPack business cards?',
                a: 'Every card is 85 × 55 mm on 350 gsm card. The size is fixed — you do not choose alternate lengths or widths.',
              },
              {
                q: 'How much do business cards cost in Ireland?',
                a: 'Catalogue pack prices are €35 for 100, €60 for 200, €75 for 300 and €160 for 1,000. Confirm the live total on the product page.',
              },
              {
                q: 'What is the minimum order for business cards?',
                a: 'The smallest listed pack is 100 cards. Larger tiers are 200, 300 and 1,000.',
              },
              {
                q: 'How fast is Dublin business card delivery?',
                a: 'Dublin is 2 day delivery. The rest of Ireland is 4–6 days from Ashbourne, Co. Meath.',
              },
              {
                q: 'Should I order business cards with leaflets or stamps?',
                a: 'Many Irish SMEs order cards with leaflets for the same launch or with a rubber stamp for dockets and loyalty cards — useful when the brand needs to show up on desk, door drop and paperwork.',
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
              href: '/blog/leaflet-printing-ireland-guide',
              src: '/images/products/a6-leaflet.png',
              title: 'Leaflet Printing Ireland Guide',
            },
            {
              href: '/blog/premium-leaflets-ireland-materials-buying-guide',
              src: '/images/products/premium-leaflets/premium-leaflets-ireland-metallic-gold.jpg',
              title: 'Premium Leaflets Ireland: Metallic, Pearl & PVC Materials Buying Guide',
            },
            {
              href: '/blog/business-stamps-ireland-guide',
              src: '/images/rubber-stamps/RubberStamp_10.jpg',
              title: 'Business Stamps Ireland Guide',
            },
            {
              href: '/blog/printing-ashbourne-guide',
              src: '/images/products/business-cards/business-cards-ireland-fan.jpg',
              title: 'Printing Ashbourne Guide',
            },
          ].map(({ href, src, title: relatedTitle }) => (
            <Link
              key={href}
              href={href}
              className="group flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors"
            >
              <div className="relative w-16 h-14 flex-shrink-0 rounded-lg overflow-hidden bg-slate-100">
                <Image src={src} alt={relatedTitle} fill className="object-cover" sizes="64px" />
              </div>
              <p className="text-sm font-medium text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                {relatedTitle}
              </p>
            </Link>
          ))}
        </div>
      </main>
    </Layout>
  );
}
