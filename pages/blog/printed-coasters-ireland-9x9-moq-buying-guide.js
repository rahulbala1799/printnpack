import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/printed-coasters-ireland-9x9-moq-buying-guide`;
const HUB_HREF = '/printed-coasters-ireland';
const HERO_IMAGE = '/images/coasters/coaster-harbour-bean-ireland.webp';
const DUBLIN_IMAGE = '/images/coasters/coaster-willow-house-ireland.webp';
const ADVISORY_IMAGE = '/images/coasters/coaster-northbridge-advisory-ireland.webp';
const LUMEN_IMAGE = '/images/coasters/coaster-lumen-grid-ireland.webp';
const CARD_IMAGE = '/images/products/business-card.png';
const NAPKIN_IMAGE = '/images/napkins/cocktail-napkin-tamarind-lane-ireland.webp';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Printed Coasters Ireland: Round 9×9 cm, 8 Ply & MOQ Buying Guide',
  description:
    'How to buy printed coasters in Ireland — fixed round 9 × 9 cm on 8 ply board, full colour on one or both sides, quantities from 50, and delivery from Ashbourne for bars, cafés and hotels.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-10-13',
  dateModified: '2026-10-13',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I order printed coasters in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack prints coasters in Ashbourne, Co. Meath and delivers across Ireland — Dublin, Cork, Galway and every county. Postage to the UK and the EU is quoted on the order when you need it.',
      },
    },
    {
      '@type': 'Question',
      name: 'What size are PrintNPack printed coasters?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every coaster is round, 9 × 9 cm. That is the only shape and the only size in the catalogue.',
      },
    },
    {
      '@type': 'Question',
      name: 'What board are the coasters made from?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '8 ply board, printed in full colour on one side or both sides.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the minimum order for printed coasters?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'From 50 coasters. Listed tiers include 50, 100, 250, 500, 1,000 and 2,000, or you can type your own quantity from 50 upwards.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much do printed coasters cost in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pricing is quote online for your quantity and one-side or both-sides print. Lead time is quoted with the order. Confirm the live total on the printed coasters product page before you order.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you also print wedding coasters?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The same round 9 × 9 cm, 8 ply coasters can be printed with names, a date or a monogram for a wedding via the wedding coasters page.',
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
      name: 'Printed Coasters Ireland Buying Guide',
      item: PAGE_URL,
    },
  ],
};

const qtyRows = [
  { qty: '50', use: 'Soft launch, pop-up bar or first logo trial' },
  { qty: '100–250', use: 'Single-site café, hotel lounge or boutique bar' },
  { qty: '500–1,000', use: 'Busy Dublin pubs and multi-room venues' },
  { qty: '2,000+', use: 'Groups, festivals and high glass-turnover nights' },
];

const buyerRows = [
  {
    buyer: 'Bars & pubs',
    tip: 'One-side logo under every pint; both sides when you want a drink special or QR on the reverse',
  },
  {
    buyer: 'Cafés & coffee shops',
    tip: 'Round 9 × 9 cm fits latte and filter glassware; start from 50 while you settle artwork',
  },
  {
    buyer: 'Hotels & events',
    tip: 'Brand the lounge or conference bar; pair with napkins and cards for the same guest journey',
  },
];

export default function PrintedCoastersIreland9x9MoqBuyingGuide() {
  const title = 'Printed Coasters Ireland: Round 9×9 cm, 8 Ply & MOQ Buying Guide';
  const description =
    'Buy printed coasters in Ireland with confidence — fixed round 9 × 9 cm on 8 ply, full colour one or both sides, from 50 units, printed in Ashbourne with nationwide Ireland delivery.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="printed coasters ireland, custom coasters ireland, beer mats ireland, 8 ply coasters, round 9x9 coasters, logo coasters dublin, branded coasters cork, bar coasters galway, coaster printing ashbourne, custom beer mats ireland"
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
          content="Printed coasters Ireland — round 8 ply coaster with coffee logo for Galway cafés"
        />
        <meta property="article:published_time" content="2026-10-13" />

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
          <span className="text-slate-900">Printed Coasters Ireland</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            Retail Guide
          </span>
          <span className="text-slate-400 text-sm">13 Oct 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Printed Coasters Ireland: Round 9×9 cm, 8 Ply &amp; MOQ Buying Guide
        </h1>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="relative rounded-2xl overflow-hidden h-48 col-span-2 bg-slate-50">
            <Image
              src={HERO_IMAGE}
              alt="Printed coasters Ireland — round 8 ply Harbour and Bean logo coaster for Galway cafés"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 66vw, 512px"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={DUBLIN_IMAGE}
                alt="Custom coasters Ireland — round 8 ply Willow House hotel coaster for Dublin lounges"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={ADVISORY_IMAGE}
                alt="Logo coasters Ireland — round 8 ply branded coaster printed in Ashbourne"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            A printed coaster is still one of the cheapest permanent brand surfaces in Irish hospitality
            — under a pint in Temple Bar, a flat white in Cork or a lobby glass in Galway. The buying
            decision is not about inventing a new shape; it is about board, print sides, how many you
            burn through each week, and whether Ireland delivery from Ashbourne fits the opening date.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            This guide covers <strong>printed coasters in Ireland</strong> from PrintNPack — a fixed{' '}
            <strong>round 9 × 9 cm</strong> size on <strong>8 ply</strong> board,{' '}
            <strong>full colour on one side or both</strong>, quantities <strong>from 50</strong>, with
            delivery across Ireland and UK/EU postage quoted on the order when needed. Configure yours
            on the{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              printed coasters Ireland
            </Link>{' '}
            product page.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Why Irish bars and cafés still order printed coasters
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Coasters (beer mats) sit where guests look for twenty minutes at a time. A clear logo beats
            a blank mat for recall, and a short line of type on the reverse can push a cocktail list,
            Wi‑Fi note or QR without another print job.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            PrintNPack keeps the specification simple: one round size, one board weight, full-colour
            print, and a low minimum so a single-site café in Meath can trial artwork before a
            multi-venue Dublin group scales up.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Size and board: round 9 × 9 cm on 8 ply
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Every PrintNPack printed coaster is <strong>round, 9 × 9 cm</strong> — the only shape and
            size in the catalogue. Artwork should be built for that finished footprint with safe
            margins inside the trim. There is no square option and no custom diameter in the standard
            configurator.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            The board is <strong>8 ply</strong> — thick enough for wet glasses on a busy bar rail
            without feeling like cardboard packaging. Full-colour print sits on that board on the face
            you choose; send logo, wording or artwork and PrintNPack sets it up and sends a proof
            before printing.
          </p>

          <div className="relative rounded-2xl overflow-hidden h-56 mb-8 bg-slate-50 not-prose">
            <Image
              src={LUMEN_IMAGE}
              alt="Branded coasters Ireland — round 8 ply Lumen Grid logo coaster for Cork events"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 720px"
            />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            One side vs both sides: which print path?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            The configurator offers <strong>one side</strong> or <strong>both sides</strong> in full
            colour. One side is enough when the logo alone does the work under every glass. Both sides
            earn their keep when you want a second message — seasonal drink, loyalty QR, venue address
            or sponsor mark — without a separate leaflet.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Keep the reverse quiet enough to read at arm&apos;s length. Busy photography that works on
            a poster can muddy a 9 cm circle once condensation hits. Solid brand colour with a crisp
            logo usually outperforms a dense collage on a bar top.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            MOQ and quantities: from 50 to 2,000+
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            The minimum order is <strong>50 coasters</strong>. Listed quantity chips include{' '}
            <strong>50, 100, 250, 500, 1,000 and 2,000</strong>, and you can type any number from 50
            upwards if your stock plan sits between those tiers.
          </p>

          <div className="overflow-x-auto mb-8 not-prose">
            <table className="min-w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
              <thead className="bg-slate-50 text-left">
                <tr>
                  <th className="px-4 py-3 font-semibold text-slate-900">Quantity</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">Typical Irish use</th>
                </tr>
              </thead>
              <tbody>
                {qtyRows.map((row) => (
                  <tr key={row.qty} className="border-t border-slate-200">
                    <td className="px-4 py-3 text-slate-900 font-medium">{row.qty}</td>
                    <td className="px-4 py-3 text-slate-700">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-slate-700 leading-relaxed mb-8">
            Start smaller if your logo or bar name is still moving; coasters outlive a soft rebrand and
            leftover stock with the old wordmark is wasted spend. Scale to 500–2,000 when glass
            turnover is high and the artwork is locked.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Who should buy which setup in Ireland?
          </h2>
          <div className="overflow-x-auto mb-8 not-prose">
            <table className="min-w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
              <thead className="bg-slate-50 text-left">
                <tr>
                  <th className="px-4 py-3 font-semibold text-slate-900">Buyer</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">Buying tip</th>
                </tr>
              </thead>
              <tbody>
                {buyerRows.map((row) => (
                  <tr key={row.buyer} className="border-t border-slate-200">
                    <td className="px-4 py-3 text-slate-900 font-medium">{row.buyer}</td>
                    <td className="px-4 py-3 text-slate-700">{row.tip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-700 leading-relaxed mb-8">
            Wedding parties use the same round 9 × 9 cm, 8 ply coasters with names, a date or a
            monogram — order those on the{' '}
            <Link href="/wedding-coasters-ireland" className="text-blue-600 hover:underline">
              wedding coasters Ireland
            </Link>{' '}
            page rather than forcing wedding artwork through a bar logo brief.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Pricing, lead time and Ireland delivery
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Catalogue pricing is <strong>quote online</strong> for your quantity and print sides —
            PrintNPack does not publish a fixed euro pack price for coasters in the product data. Lead
            time is <strong>quoted with the order</strong> after you confirm artwork. Approve the proof
            before anything goes to press.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Coasters are printed in <strong>Ashbourne, Co. Meath</strong> and delivered across Ireland
            — Dublin, Cork, Galway and nationwide. Postage to the <strong>UK and the EU</strong> is
            available and quoted on the order; it is not a fixed catalogue rate in this guide. For
            local print mix and collection context, see our{' '}
            <Link href="/blog/printing-ashbourne-guide" className="text-blue-600 hover:underline">
              printing in Ashbourne guide
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Pair with napkins, cards and table print
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            A coaster rarely works alone on a guest table. Many Irish venues order the same logo on
            cocktail napkins and hand a business card at the till or hotel desk.
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
            <li>
              <Link
                href="/blog/personalised-napkins-ireland-guide"
                className="text-blue-600 hover:underline"
              >
                Personalised napkins Ireland
              </Link>{' '}
              — logo napkins for bars and cafés
            </li>
            <li>
              <Link
                href="/blog/business-cards-ireland-quantities-buying-guide"
                className="text-blue-600 hover:underline"
              >
                Business cards Ireland
              </Link>{' '}
              — 85 × 55 mm, 350 gsm, pack quantities
            </li>
            <li>
              <Link
                href="/blog/custom-napkins-uk-ireland-europe"
                className="text-blue-600 hover:underline"
              >
                Custom napkins UK, Ireland &amp; Europe
              </Link>{' '}
              — when napkin stock needs a wider shipping brief
            </li>
            <li>
              <Link href="/blog/printing-ashbourne-guide" className="text-blue-600 hover:underline">
                Printing in Ashbourne
              </Link>{' '}
              — local print and collection
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-8">
            Keep logo colours consistent across coaster, napkin and card so a guest meeting your brand
            twice in a night sees one system.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-8 not-prose">
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={NAPKIN_IMAGE}
                alt="Cocktail napkins Ireland — often ordered with printed coasters for Dublin bars"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={CARD_IMAGE}
                alt="Business cards Ireland — paired with branded coasters for Ashbourne print buyers"
                fill
                className="object-contain p-2"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How to order printed coasters in Ireland
          </h2>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-8">
            <li>Open the printed coasters configurator — size is fixed at round 9 × 9 cm</li>
            <li>Confirm 8 ply board and choose one side or both sides in full colour</li>
            <li>Pick a quantity from 50 (or type your own number from 50 up)</li>
            <li>Upload logo or artwork, approve the proof, then confirm the online quote and lead time</li>
            <li>Take Ireland delivery from Ashbourne — or ask for UK/EU postage on the order</li>
          </ol>

          <div className="bg-slate-900 rounded-xl p-6 mb-8 text-white not-prose">
            <p className="font-semibold mb-1">Ready to order printed coasters?</p>
            <p className="text-slate-400 text-sm mb-4">
              Round 9 × 9 cm · 8 ply · full colour one or both sides · from 50 · quote online · Ireland
              delivery from Ashbourne.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={HUB_HREF}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Shop Printed Coasters Ireland →
              </Link>
              <Link
                href="/wedding-coasters-ireland"
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Wedding Coasters
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
                q: 'Where can I order printed coasters in Ireland?',
                a: 'PrintNPack prints coasters in Ashbourne, Co. Meath and delivers across Ireland — Dublin, Cork, Galway and every county. Postage to the UK and the EU is quoted on the order when you need it.',
              },
              {
                q: 'What size are PrintNPack printed coasters?',
                a: 'Every coaster is round, 9 × 9 cm. That is the only shape and the only size in the catalogue.',
              },
              {
                q: 'What board are the coasters made from?',
                a: '8 ply board, printed in full colour on one side or both sides.',
              },
              {
                q: 'What is the minimum order for printed coasters?',
                a: 'From 50 coasters. Listed tiers include 50, 100, 250, 500, 1,000 and 2,000, or you can type your own quantity from 50 upwards.',
              },
              {
                q: 'How much do printed coasters cost in Ireland?',
                a: 'Pricing is quote online for your quantity and one-side or both-sides print. Lead time is quoted with the order. Confirm the live total on the printed coasters product page before you order.',
              },
              {
                q: 'Do you also print wedding coasters?',
                a: 'Yes. The same round 9 × 9 cm, 8 ply coasters can be printed with names, a date or a monogram for a wedding via the wedding coasters page.',
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
              href: '/blog/business-cards-ireland-quantities-buying-guide',
              src: '/images/products/business-cards/business-cards-ireland-stack.jpg',
              title: 'Business Cards Ireland: Quantities, 350 gsm & Dublin Delivery Buying Guide',
            },
            {
              href: '/blog/personalised-napkins-ireland-guide',
              src: '/images/products/napkin.png',
              title: 'Personalised Napkins Ireland Guide',
            },
            {
              href: '/blog/custom-napkins-uk-ireland-europe',
              src: '/images/blog/custom-napkins/custom-cocktail-napkins-bar-uk.jpg',
              title: 'Custom Napkins UK, Ireland & Europe',
            },
            {
              href: '/blog/printing-ashbourne-guide',
              src: '/images/coasters/coaster-harbour-bean-ireland.webp',
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
