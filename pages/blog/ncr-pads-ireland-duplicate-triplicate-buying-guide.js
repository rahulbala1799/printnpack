import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/ncr-pads-ireland-duplicate-triplicate-buying-guide`;
const HUB_HREF = '/ncr-pads-ireland';
const HERO_IMAGE = '/images/products/ncr-pads/ncr-pads-ireland-triplicate-book.webp';
const DESK_IMAGE = '/images/products/ncr-pads/ncr-pads-ireland-duplicate-pad-desk.webp';
const INVOICE_IMAGE = '/images/products/ncr-pads/ncr-pads-ireland-invoice-book.webp';
const CARD_IMAGE = '/images/products/business-cards/business-cards-ireland-stack.jpg';
const STAMP_IMAGE = '/images/rubber-stamps/RubberStamp_10.jpg';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'NCR Pads Ireland: Duplicate vs Triplicate, A6–A4 & Sets Buying Guide',
  description:
    'How to buy custom printed NCR pads in Ireland — duplicate vs triplicate, A6, A5 and A4 sizes, 25–100 sets per pad, PMS numbering, and delivery nationwide from Ashbourne.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-10-11',
  dateModified: '2026-10-11',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I order NCR pads in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack prints custom NCR invoice and docket books from Ashbourne, Co. Meath and delivers across Ireland, including Dublin, Cork, Galway and nationwide. Choose your options on the NCR pads product page and request a call or email back for a price.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between duplicate and triplicate NCR pads?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Duplicate (2-part) pads have an original plus one copy sheet. Triplicate (3-part) pads have an original plus two colour-coded copy sheets so each party can keep a clear set.',
      },
    },
    {
      '@type': 'Question',
      name: 'What sizes of NCR pads can I buy in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack offers A6 Portrait (105 × 148 mm), A5 Portrait (148 × 210 mm) and A4 Portrait (210 × 297 mm). Other sizes can be discussed when you request a quote.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many sets per pad can I order?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bundles are 25, 50 or 100 sets per pad. Fifty sets is the recommended starting point for many Irish trades and hospitality counters.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can NCR pads be numbered?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Numbering is available with PMS (spot colour) printing only. If you need numbering with full-colour CMYK print, ask PrintNPack for a quote.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get a price for NCR pads?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Prices are not listed as fixed pack rates. Choose size, print, copy colours, sets, binding and numbering on the product page, then request a call or email back. PrintNPack confirms price and artwork requirements before printing.',
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
      name: 'NCR Pads Ireland Buying Guide',
      item: PAGE_URL,
    },
  ],
};

const sizeRows = [
  { size: 'A6 Portrait', mm: '105 × 148 mm', use: 'Compact dockets, van pads, quick receipts' },
  { size: 'A5 Portrait', mm: '148 × 210 mm', use: 'Order books with room for line items' },
  { size: 'A4 Portrait', mm: '210 × 297 mm', use: 'Full invoices, delivery notes, job sheets (recommended)' },
];

const partRows = [
  {
    parts: '2-part (duplicate)',
    copies: 'One copy sheet — yellow, blue, pink, green or white',
    use: 'Customer + you, or site + office',
  },
  {
    parts: '3-part (triplicate)',
    copies: 'Two copy sheets — yellow & pink, yellow & blue, or blue & pink',
    use: 'Customer, accounts and driver / kitchen / archive',
  },
];

export default function NcrPadsIrelandDuplicateTriplicateBuyingGuide() {
  const title = 'NCR Pads Ireland: Duplicate vs Triplicate, A6–A4 & Sets Buying Guide';
  const description =
    'Buy custom NCR pads in Ireland with confidence — duplicate vs triplicate, A6, A5 and A4 sizes, 25–100 sets per pad, PMS numbering options, and nationwide delivery from Ashbourne.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="ncr pads ireland, duplicate books ireland, triplicate invoice books ireland, docket books dublin, carbonless pads cork, ncr books galway, invoice pads ashbourne, custom ncr pads ireland, numbered ncr pads ireland, a4 ncr pads ireland"
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
          content="NCR pads Ireland — triplicate invoice book with colour copy sheets"
        />
        <meta property="article:published_time" content="2026-10-11" />

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
          <span className="text-slate-900">NCR Pads Ireland</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            Retail Guide
          </span>
          <span className="text-slate-400 text-sm">11 Oct 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          NCR Pads Ireland: Duplicate vs Triplicate, A6–A4 &amp; Sets Buying Guide
        </h1>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="relative rounded-2xl overflow-hidden h-48 col-span-2 bg-slate-50">
            <Image
              src={HERO_IMAGE}
              alt="NCR pads Ireland — triplicate invoice book with white, blue and pink copies for Dublin trades"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 66vw, 512px"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={DESK_IMAGE}
                alt="Duplicate NCR pad Ireland — yellow copy sheet on a Cork café desk"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={INVOICE_IMAGE}
                alt="NCR invoice book Ireland — printed docket pad for Galway and nationwide delivery"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Handwritten invoices and dockets still run a large share of Irish trades, takeaways and
            service vans. When the customer needs a copy and the office needs another, a carbonless{' '}
            <strong>NCR pad</strong> beats a phone photo of a scribble pad.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            This guide covers <strong>custom printed NCR pads in Ireland</strong> from PrintNPack —
            <strong> duplicate vs triplicate</strong>, <strong>A6, A5 and A4</strong> sizes,{' '}
            <strong>25, 50 or 100 sets per pad</strong>, full colour or PMS print, optional numbering,
            and upper or left binding. Configure and request a price on the{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              NCR pads Ireland
            </Link>{' '}
            product page. Fixed pack prices are not listed online — you get a call or email back with
            the quote.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            What NCR pads are (and why Irish buyers still use them)
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            NCR pads — also called carbonless duplicate or triplicate books — transfer what you write
            on the top sheet to the copy sheets underneath, with no carbon paper. They suit invoice
            books, docket books, delivery notes and job sheets where a pen at the counter or on site
            still beats a tablet.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            PrintNPack personalises the pads with your logo or layout so Dublin plumbers, Cork
            takeaways and Galway service firms look consistent from the first line. Copy sheets are
            printed in black; if your design has a coloured background, that background prints on the
            second page in grey.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Duplicate vs triplicate: which parts do you need?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            The first buying decision is how many copies leave the pad. PrintNPack offers{' '}
            <strong>2-part (duplicate)</strong> and <strong>3-part (triplicate)</strong> options with
            colour-coded copy sheets so each party can tell their set apart.
          </p>

          <div className="overflow-x-auto mb-8 not-prose">
            <table className="min-w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
              <thead className="bg-slate-50 text-left">
                <tr>
                  <th className="px-4 py-3 font-semibold text-slate-900">Parts</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">Copy sheets</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">Best for</th>
                </tr>
              </thead>
              <tbody>
                {partRows.map((row) => (
                  <tr key={row.parts} className="border-t border-slate-200">
                    <td className="px-4 py-3 text-slate-900 font-medium">{row.parts}</td>
                    <td className="px-4 py-3 text-slate-700">{row.copies}</td>
                    <td className="px-4 py-3 text-slate-700">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-slate-700 leading-relaxed mb-8">
            Choose <strong>duplicate</strong> when two parties are enough — customer and business, or
            site and office. Choose <strong>triplicate</strong> when a third copy goes to accounts, a
            driver, a kitchen or an archive. The recommended 2-part default in the configurator is a
            yellow copy sheet; the recommended 3-part mix is yellow and pink.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Sizes: A6, A5 and A4 for Irish desks and vans
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Standard sizes are portrait <strong>A6, A5 and A4</strong>. A4 is marked recommended in the
            product options for full invoices and job sheets. Other sizes can be discussed when you
            request a callback.
          </p>

          <div className="overflow-x-auto mb-8 not-prose">
            <table className="min-w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
              <thead className="bg-slate-50 text-left">
                <tr>
                  <th className="px-4 py-3 font-semibold text-slate-900">Size</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">Dimensions</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">Typical use</th>
                </tr>
              </thead>
              <tbody>
                {sizeRows.map((row) => (
                  <tr key={row.size} className="border-t border-slate-200">
                    <td className="px-4 py-3 text-slate-900 font-medium">{row.size}</td>
                    <td className="px-4 py-3 text-slate-700">{row.mm}</td>
                    <td className="px-4 py-3 text-slate-700">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-slate-700 leading-relaxed mb-8">
            Match size to writing space. A6 suits short dockets; A5 fits mid-length orders; A4 leaves
            room for tables, terms and signatures. Include any lines or tables in your artwork —
            PrintNPack does not add ruling for you.
          </p>

          <div className="relative rounded-2xl overflow-hidden h-56 mb-8 bg-slate-50 not-prose">
            <Image
              src={DESK_IMAGE}
              alt="Custom NCR pads Ireland — duplicate pad on a desk for Ashbourne print buyers"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 720px"
            />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Sets per pad: 25, 50 or 100
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Each pad is bundled as <strong>25, 50 or 100 sets</strong>. Fifty sets per pad is the
            recommended default — enough for a busy week without a brick of unused books if your
            layout or VAT details change.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Smaller 25-set pads suit seasonal pop-ups or a new logo trial. One hundred sets suit high
            volume counters and multi-van fleets that refill the same artwork for months. Binding is{' '}
            <strong>upper bound</strong> (recommended) or <strong>left bound</strong>, depending on
            how staff tear and write.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Print options and numbering (PMS only)
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Front print can be <strong>full colour (CMYK)</strong> or <strong>1–3 colour PMS</strong>.
            Back options include unprinted or black (on the full-colour front + black-back path). The
            configurator recommends full colour on the front with an unprinted back for most first
            orders.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            <strong>Numbering is only available with PMS printing.</strong> If you need sequential
            invoice numbers with full-colour CMYK artwork, ask for a quote — do not assume numbering
            is available on every print path. Leave clear writing space: pressure transfers to the
            copies, so avoid dark or busy areas where people will write.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Who should buy which NCR setup in Ireland?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            <strong>Trades and service vans</strong> in Dublin and Meath often start with A5 or A4
            duplicate pads, 50 sets, upper bound — customer copy plus office copy.{' '}
            <strong>Takeaways and cafés</strong> in Cork or Galway may prefer A6 or A5 triplicate when
            kitchen, till and customer each need a slip.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            <strong>Accountants&apos; clients and B2B suppliers</strong> usually want A4 triplicate with
            PMS numbering so invoice sequences stay tidy. Pair pads with{' '}
            <Link href="/business-cards-ireland" className="text-blue-600 hover:underline">
              business cards
            </Link>{' '}
            and a{' '}
            <Link href="/rubber-stamps" className="text-blue-600 hover:underline">
              rubber stamp
            </Link>{' '}
            when the same brand needs to show on the desk and the docket.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Pricing, ordering and Ireland delivery
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            PrintNPack does not publish fixed euro pack prices for NCR pads on the product data —
            pricing is confirmed by <strong>call or email back</strong> after you choose size,
            printing, copy colours, sets, binding and numbering. Artwork is preferably a print-ready
            PDF; you approve before printing.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Pads are printed and delivered for Irish buyers from the Ashbourne, Co. Meath base —
            Dublin, Cork, Galway and nationwide. This guide does not claim UK or Europe shipping for
            NCR pads; ask if you need delivery outside Ireland. For local collection context, see our{' '}
            <Link href="/blog/printing-ashbourne-guide" className="text-blue-600 hover:underline">
              printing in Ashbourne guide
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Pair with cards, stamps and leaflets
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            An NCR pad rarely works alone at a launch. Many Irish SMEs order the same logo on cards
            for networking, stamps for paid dockets, and short leaflets for door drops.
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
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
              <Link href="/blog/business-stamps-ireland-guide" className="text-blue-600 hover:underline">
                Business stamps Ireland
              </Link>{' '}
              — company and loyalty stamps for the same desk
            </li>
            <li>
              <Link href="/blog/leaflet-printing-ireland-guide" className="text-blue-600 hover:underline">
                Leaflet printing Ireland
              </Link>{' '}
              — sizes, stocks and folds when you need more than a docket
            </li>
            <li>
              <Link href="/blog/printing-ashbourne-guide" className="text-blue-600 hover:underline">
                Printing in Ashbourne
              </Link>{' '}
              — local print mix and collection
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-8">
            Keep logo colours consistent across pad, card and stamp so a customer meeting you twice in
            a week sees one brand system.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-8 not-prose">
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={CARD_IMAGE}
                alt="Business cards Ireland — often ordered with NCR invoice pads from Ashbourne"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={STAMP_IMAGE}
                alt="Rubber stamps Ireland — company stamp paired with NCR docket books nationwide"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How to order NCR pads in Ireland
          </h2>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-8">
            <li>Choose size — A6, A5 or A4 (or request another)</li>
            <li>Pick duplicate or triplicate and copy sheet colours</li>
            <li>Select print path (CMYK or PMS), sets per pad and binding</li>
            <li>Add numbering only if you chose PMS printing</li>
            <li>Request a call or email back, approve artwork, then print and delivery</li>
          </ol>

          <div className="bg-slate-900 rounded-xl p-6 mb-8 text-white not-prose">
            <p className="font-semibold mb-1">Ready to order NCR pads?</p>
            <p className="text-slate-400 text-sm mb-4">
              Duplicate or triplicate · A6–A4 · 25–100 sets · PMS numbering option · quote by call or
              email · Ireland delivery from Ashbourne.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={HUB_HREF}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Configure NCR Pads Ireland →
              </Link>
              <Link
                href="/business-cards-ireland"
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Shop Business Cards
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
                q: 'Where can I order NCR pads in Ireland?',
                a: 'PrintNPack prints custom NCR invoice and docket books from Ashbourne, Co. Meath and delivers across Ireland, including Dublin, Cork, Galway and nationwide. Choose options on the product page and request a call or email back for a price.',
              },
              {
                q: 'What is the difference between duplicate and triplicate NCR pads?',
                a: 'Duplicate (2-part) pads have an original plus one copy sheet. Triplicate (3-part) pads have an original plus two colour-coded copy sheets so each party can keep a clear set.',
              },
              {
                q: 'What sizes of NCR pads can I buy in Ireland?',
                a: 'A6 Portrait (105 × 148 mm), A5 Portrait (148 × 210 mm) and A4 Portrait (210 × 297 mm). Other sizes can be discussed on quote.',
              },
              {
                q: 'How many sets per pad can I order?',
                a: 'Bundles are 25, 50 or 100 sets per pad. Fifty sets is the recommended starting point for many Irish trades and hospitality counters.',
              },
              {
                q: 'Can NCR pads be numbered?',
                a: 'Numbering is available with PMS (spot colour) printing only. If you need numbering with full-colour CMYK print, ask PrintNPack for a quote.',
              },
              {
                q: 'How do I get a price for NCR pads?',
                a: 'Prices are not listed as fixed pack rates. Configure size, print, copy colours, sets, binding and numbering, then request a call or email back. PrintNPack confirms price and artwork before printing.',
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
              href: '/blog/business-stamps-ireland-guide',
              src: '/images/rubber-stamps/RubberStamp_10.jpg',
              title: 'Business Stamps Ireland Guide',
            },
            {
              href: '/blog/leaflet-printing-ireland-guide',
              src: '/images/products/a6-leaflet.png',
              title: 'Leaflet Printing Ireland Guide',
            },
            {
              href: '/blog/printing-ashbourne-guide',
              src: '/ifa/product/Poster/single_poster.jpg',
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
