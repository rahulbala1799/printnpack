import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/custom-printed-coffee-cups-ireland-sizes-moq-buying-guide`;
const HUB_HREF = '/custom-printed-coffee-cups-ireland';
const HERO_IMAGE =
  '/images/products/custom-printed-coffee-cups/branded-coffee-cups-dublin-ireland-matte-black-gold.jpg';
const ORANGE_IMAGE =
  '/images/products/custom-printed-coffee-cups/custom-printed-coffee-cups-dublin-ireland-orange.jpg';
const KRAFT_IMAGE =
  '/images/products/custom-printed-coffee-cups/printed-takeaway-coffee-cups-dublin-kraft.jpg';
const PLAIN_IMAGE = '/images/plain-packaging/100070.webp';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Custom Printed Coffee Cups Ireland: 8–16oz Sizes, Low MOQ & Buying Guide',
  description:
    'How to buy custom printed coffee cups in Ireland — 8oz, 10oz, 12oz and 16oz takeaway sizes, one-colour vs full-colour logo print, low MOQ, and delivery from Ashbourne across Ireland and Northern Ireland.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-10-18',
  dateModified: '2026-10-18',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I order custom printed coffee cups in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack prints branded takeaway coffee cups in Ashbourne, Co. Meath and delivers across Ireland — Dublin, Cork, Galway and every county — plus Northern Ireland including Belfast, Derry and Newry. Send your logo, preferred cup size and quantity for a tailored quote.',
      },
    },
    {
      '@type': 'Question',
      name: 'What sizes of custom printed coffee cups are available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Popular printed takeaway sizes are 8oz, 10oz, 12oz and 16oz, with other styles and finishes available to match your menu. The custom printed coffee cups page highlights 8oz, 12oz and 16oz as the core café set.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the minimum order for branded coffee cups?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack offers low minimum order quantities for custom printed coffee cups, so smaller cafés, start-ups, pop-ups and event organisers can brand cups without a factory-size run. Confirm the live MOQ on your quote.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I print one colour or full colour on coffee cups?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Options include one-colour logo printing and premium full-colour artwork — logo, brand colours and promotional messaging — on food-safe paper cups with reliable heat insulation.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much do custom printed coffee cups cost in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pricing is quote-based for your size, print path and quantity. PrintNPack does not publish a fixed euro unit price for custom printed cups in the product data — request a quote or use the quote form before ordering.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you deliver branded coffee cups to Northern Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Custom printed coffee cups ship throughout the Republic of Ireland and Northern Ireland, including Belfast, Derry, Newry and surrounding areas.',
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
      name: 'Custom Printed Coffee Cups Ireland Buying Guide',
      item: PAGE_URL,
    },
  ],
};

const sizeRows = [
  { size: '8oz', use: 'Regular takeaway coffee — the everyday café size most Irish shops print first' },
  { size: '10oz', use: 'Large regular or small latte — useful when your board sits between 8oz and 12oz' },
  { size: '12oz', use: 'Latte, cappuccino and large regular — the best-selling printed café size' },
  { size: '16oz', use: 'Large hot drinks, tea and extra-large coffee servings' },
];

const buyerRows = [
  {
    buyer: 'Independent cafés',
    tip: 'Start with 8oz + 12oz in one print path; add 16oz only if your large drinks move daily',
  },
  {
    buyer: 'Coffee shops & roasteries',
    tip: 'Full-colour artwork suits kraft or coloured cups when the brand needs more than a one-spot logo',
  },
  {
    buyer: 'Hotels & events',
    tip: 'Low MOQ suits conference days and seasonal promotions without warehouse overstock',
  },
  {
    buyer: 'Mobile / pop-up coffee',
    tip: 'One size (often 8oz or 12oz) keeps stock simple on a van or festival stall',
  },
];

export default function CustomPrintedCoffeeCupsIrelandSizesMoqBuyingGuide() {
  const title = 'Custom Printed Coffee Cups Ireland: 8–16oz Sizes, Low MOQ & Buying Guide';
  const description =
    'Buy custom printed coffee cups in Ireland with confidence — 8oz, 10oz, 12oz and 16oz sizes, one-colour or full-colour logo print, low MOQ, food-safe cups from Ashbourne with Ireland and Northern Ireland delivery.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="custom printed coffee cups ireland, branded coffee cups dublin, printed takeaway cups ireland, coffee cup printing ireland, 8oz 12oz 16oz coffee cups, low moq coffee cups ireland, logo coffee cups cork, branded cups galway, personalised coffee cups ashbourne, custom coffee cups northern ireland"
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
          content="Custom printed coffee cups Ireland — matte black takeaway cup with gold logo for Dublin cafés"
        />
        <meta property="article:published_time" content="2026-10-18" />

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
          <span className="text-slate-900">Custom Printed Coffee Cups Ireland</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            Retail Guide
          </span>
          <span className="text-slate-400 text-sm">18 Oct 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Custom Printed Coffee Cups Ireland: 8–16oz Sizes, Low MOQ &amp; Buying Guide
        </h1>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="relative rounded-2xl overflow-hidden h-48 col-span-2 bg-slate-50">
            <Image
              src={HERO_IMAGE}
              alt="Custom printed coffee cups Ireland — matte black takeaway cup with gold logo for Dublin cafés"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 66vw, 512px"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={ORANGE_IMAGE}
                alt="Branded coffee cups Cork Ireland — orange full-colour printed takeaway cup"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={KRAFT_IMAGE}
                alt="Printed takeaway coffee cups Galway Ireland — kraft paper cup with custom logo"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            A branded cup is still the loudest bit of packaging most Irish cafés put in a customer&apos;s
            hand. The buying decision is not whether to print at all — it is which{' '}
            <strong>oz size</strong> matches your menu, whether you need a{' '}
            <strong>one-colour logo</strong> or <strong>full-colour artwork</strong>, and how low a
            minimum order you can start on before you commit warehouse space in Dublin, Cork or Galway.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            This guide covers <strong>custom printed coffee cups in Ireland</strong> from PrintNPack —
            popular takeaway sizes from <strong>8oz to 16oz</strong>, food-safe paper cups with
            reliable heat insulation, <strong>low MOQ</strong> printing, and delivery across Ireland
            and Northern Ireland from Ashbourne. Configure yours on the{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              custom printed coffee cups Ireland
            </Link>{' '}
            product page. For a plain-stock versus printed overview, see our earlier{' '}
            <Link href="/blog/coffee-cups-ireland-guide" className="text-blue-600 hover:underline">
              coffee cups Ireland guide
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Why Irish cafés print takeaway cups
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Every latte that leaves the counter is a walking billboard on Grafton Street, Patrick
            Street or Shop Street. A clear logo on an 8oz or 12oz cup beats a blank white wall for
            recall — and a short line of type can push Instagram, a loyalty note or a seasonal drink
            without another print job.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            PrintNPack keeps the path practical for Irish hospitality: popular sizes, one-colour or
            full-colour print, eco and recyclable options where they fit the brief, and a low minimum
            so a single-site café in Meath can trial artwork before a multi-venue Dublin group scales
            up.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Sizes: 8oz, 10oz, 12oz and 16oz
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            The custom printed range focuses on popular takeaway sizes —{' '}
            <strong>8oz, 10oz, 12oz, 16oz and more</strong> — with styles and finishes to match coffee,
            tea, hot chocolate and other hot drinks. The product page leads with{' '}
            <strong>8oz, 12oz and 16oz</strong> as the core café set most Irish shops print first.
          </p>

          <div className="overflow-x-auto mb-8 not-prose">
            <table className="min-w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
              <thead className="bg-slate-50 text-left">
                <tr>
                  <th className="px-4 py-3 font-semibold text-slate-900">Size</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">Typical Irish use</th>
                </tr>
              </thead>
              <tbody>
                {sizeRows.map((row) => (
                  <tr key={row.size} className="border-t border-slate-200">
                    <td className="px-4 py-3 text-slate-900 font-medium">{row.size}</td>
                    <td className="px-4 py-3 text-slate-700">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-slate-700 leading-relaxed mb-8">
            Match print artwork to the finished cup footprint — a logo that reads on 12oz can look
            cramped on 8oz if the safe margins are ignored. Ask for a proof before anything goes to
            press. If you only need plain stock by the case with no logo, order from{' '}
            <Link href="/hot-cups-ireland" className="text-blue-600 hover:underline">
              hot cups Ireland
            </Link>{' '}
            instead of forcing a print run.
          </p>

          <div className="relative rounded-2xl overflow-hidden h-56 mb-8 bg-slate-50 not-prose">
            <Image
              src={ORANGE_IMAGE}
              alt="Coffee cup printing Ireland — full-colour orange branded cup for Cork coffee shops"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 720px"
            />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            One-colour vs full-colour: which print path?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Print options include <strong>one-colour logo printing</strong> and{' '}
            <strong>premium full-colour designs</strong>. One colour is enough when a crisp mark on a
            white, black or kraft wall does the brand work. Full colour earns its keep when you need
            brand colours, photography-style artwork or a richer seasonal design on the same cup.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Cups are produced with <strong>food-safe materials</strong> and designed for reliable heat
            retention and everyday handling. Eco-friendly and recyclable cup options are available
            when sustainability is part of the brief — confirm the exact finish on your quote rather
            than assuming every printed SKU is compostable.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Low MOQ: print without a factory-size run
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            You do not need a factory-scale order to brand takeaway cups. PrintNPack offers{' '}
            <strong>low minimum order quantities</strong> so smaller cafés, start-ups, pop-up shops,
            corporate events and seasonal promotions can order professionally printed cups without
            holding unnecessary stock.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Low MOQ also suits established groups testing a new design, limited-edition cups or a
            campaign run. The live minimum for your size and print path is confirmed on the quote —
            PrintNPack does not publish a single fixed unit MOQ number in the product catalogue
            beyond &quot;low MOQ available&quot;.
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

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Pricing, lead time and Ireland delivery
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Custom printed cup pricing is <strong>quote-based</strong> for your size, print path and
            quantity — PrintNPack does not list a fixed euro unit price for branded cups in the
            product data. Request a tailored quote with logo, preferred cup size and quantity, or use
            the{' '}
            <Link href="/quote" className="text-blue-600 hover:underline">
              quote form
            </Link>
            . Approve artwork before press.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Cups are supplied from <strong>Ashbourne, Co. Meath</strong> with delivery throughout
            Ireland — Dublin, Cork, Galway, Limerick, Waterford and nationwide — and{' '}
            <strong>Northern Ireland</strong> including Belfast, Derry and Newry. A weekly delivery
            schedule is available for busy cafés that prefer recurring branded stock without large
            on-site storage. For local print and collection context, see our{' '}
            <Link href="/blog/printing-ashbourne-guide" className="text-blue-600 hover:underline">
              printing in Ashbourne guide
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Pair with lids, cold cups and counter print
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            A printed hot cup rarely works alone on the counter. Many Irish cafés match lids from
            plain wholesale stock and brand napkins or coasters for the same guest journey.
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
            <li>
              <Link href="/hot-cups-ireland" className="text-blue-600 hover:underline">
                Hot cups Ireland
              </Link>{' '}
              — plain wholesale cups and lids by the case when you are not printing
            </li>
            <li>
              <Link
                href="/blog/cold-cups-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                Cold cups Ireland sizes guide
              </Link>{' '}
              — Chill paper and rPET juice sizes for iced drinks
            </li>
            <li>
              <Link
                href="/blog/printed-coasters-ireland-9x9-moq-buying-guide"
                className="text-blue-600 hover:underline"
              >
                Printed coasters Ireland
              </Link>{' '}
              — round 9 × 9 cm, 8 ply, from 50
            </li>
            <li>
              <Link
                href="/blog/premium-linen-feel-napkins-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                Premium linen-feel napkins Ireland
              </Link>{' '}
              — airlaid sizes and logo print for hospitality
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-8">
            Keep logo colours consistent across cup, napkin and coaster so a guest meeting your brand
            twice in a morning sees one system.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-8 not-prose">
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={PLAIN_IMAGE}
                alt="Plain hot cups Ireland — 8oz double wall wholesale cup often paired with branded runs"
                fill
                className="object-contain p-4"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={KRAFT_IMAGE}
                alt="Branded kraft coffee cups Ashbourne Ireland — printed takeaway cups for cafés"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How to order custom printed coffee cups in Ireland
          </h2>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-8">
            <li>Open the custom printed coffee cups page and note your menu sizes (8oz–16oz)</li>
            <li>Choose one-colour logo or full-colour artwork — and any eco or recyclable preference</li>
            <li>Send logo, preferred cup size and quantity for a low-MOQ quote</li>
            <li>Approve the proof, then confirm lead time and Ireland or Northern Ireland delivery</li>
            <li>Reorder on a weekly schedule from Ashbourne when usage is steady</li>
          </ol>

          <div className="bg-slate-900 rounded-xl p-6 mb-8 text-white not-prose">
            <p className="font-semibold mb-1">Ready to order branded coffee cups?</p>
            <p className="text-slate-400 text-sm mb-4">
              8oz–16oz · one-colour or full-colour · low MOQ · food-safe cups · Ireland &amp; NI
              delivery from Ashbourne.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={HUB_HREF}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Shop Custom Printed Coffee Cups →
              </Link>
              <Link
                href="/hot-cups-ireland"
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Plain Hot Cups
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
                q: 'Where can I order custom printed coffee cups in Ireland?',
                a: 'PrintNPack prints branded takeaway coffee cups in Ashbourne, Co. Meath and delivers across Ireland — Dublin, Cork, Galway and every county — plus Northern Ireland including Belfast, Derry and Newry. Send your logo, preferred cup size and quantity for a tailored quote.',
              },
              {
                q: 'What sizes of custom printed coffee cups are available?',
                a: 'Popular printed takeaway sizes are 8oz, 10oz, 12oz and 16oz, with other styles and finishes available to match your menu. The custom printed coffee cups page highlights 8oz, 12oz and 16oz as the core café set.',
              },
              {
                q: 'What is the minimum order for branded coffee cups?',
                a: 'PrintNPack offers low minimum order quantities for custom printed coffee cups, so smaller cafés, start-ups, pop-ups and event organisers can brand cups without a factory-size run. Confirm the live MOQ on your quote.',
              },
              {
                q: 'Can I print one colour or full colour on coffee cups?',
                a: 'Yes. Options include one-colour logo printing and premium full-colour artwork — logo, brand colours and promotional messaging — on food-safe paper cups with reliable heat insulation.',
              },
              {
                q: 'How much do custom printed coffee cups cost in Ireland?',
                a: 'Pricing is quote-based for your size, print path and quantity. PrintNPack does not publish a fixed euro unit price for custom printed cups in the product data — request a quote or use the quote form before ordering.',
              },
              {
                q: 'Do you deliver branded coffee cups to Northern Ireland?',
                a: 'Yes. Custom printed coffee cups ship throughout the Republic of Ireland and Northern Ireland, including Belfast, Derry, Newry and surrounding areas.',
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
              href: '/blog/coffee-cups-ireland-guide',
              src: PLAIN_IMAGE,
              title: 'Coffee Cups Ireland: Plain vs Custom Printed Buying Guide',
            },
            {
              href: '/blog/cold-cups-ireland-sizes-buying-guide',
              src: '/images/plain-packaging/10427.webp',
              title: 'Cold Cups Ireland: Chill Paper & rPET Juice Sizes Buying Guide',
            },
            {
              href: '/blog/printed-coasters-ireland-9x9-moq-buying-guide',
              src: '/images/coasters/coaster-harbour-bean-ireland.webp',
              title: 'Printed Coasters Ireland: Round 9×9 cm, 8 Ply & MOQ Buying Guide',
            },
            {
              href: '/blog/premium-linen-feel-napkins-ireland-sizes-buying-guide',
              src: '/images/products/premium-linen-feel-napkins/airlaid-kinetic-labs-ireland.jpg',
              title: 'Premium Linen-Feel Napkins Ireland: Sizes & MOQ Buying Guide',
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
