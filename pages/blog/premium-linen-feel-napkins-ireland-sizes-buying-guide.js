import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/premium-linen-feel-napkins-ireland-sizes-buying-guide`;
const HUB_HREF = '/products/premium-linen-feel-napkins';
const NAPKINS_HUB = '/napkins-ireland';
const HERO_IMAGE = '/images/products/premium-linen-feel-napkins/airlaid-kinetic-labs-ireland.jpg';
const CAVAN_IMAGE = '/images/products/premium-linen-feel-napkins/airlaid-cavan-court-ireland.jpg';
const OAKLINE_IMAGE = '/images/products/premium-linen-feel-napkins/airlaid-oakline-partners-ireland.jpg';
const GREENSTONE_IMAGE = '/images/products/premium-linen-feel-napkins/airlaid-greenstone-ireland.jpg';
const COCKTAIL_IMAGE = '/images/napkins/cocktail-napkin-tamarind-lane-ireland.webp';
const COASTER_IMAGE = '/images/coasters/coaster-harbour-bean-ireland.webp';
const WEDDING_IMAGE = '/images/wedding/wedding-napkins-20x20-airlaid-bar-ireland.webp';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Premium Linen-Feel Napkins Ireland: Sizes, From €0.24',
  description:
    'How to buy premium linen-feel napkins in Ireland — 10 × 10 cm cocktail, 10 × 20, 12 × 20, 15 × 20 and 20 × 20 cm, from €0.24 and from 25. The price depends on the quantity and the design.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-10-16',
  dateModified: '2026-10-16',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I order premium linen-feel napkins in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack prints premium airlaid linen-feel napkins in Ashbourne, Co. Meath and delivers across Ireland — Dublin, Cork, Galway and every county. Weekly scheduled delivery is available for hospitality accounts.',
      },
    },
    {
      '@type': 'Question',
      name: 'What sizes are available for linen-feel napkins?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '10 × 10 cm cocktail, 10 × 20 cm, 12 × 20 cm, 15 × 20 cm and 20 × 20 cm.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the minimum order for premium linen-feel napkins?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '25 napkins. The price is confirmed from the quantity and the design.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much do linen-feel napkins cost in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'From €0.24. The price depends on the quantity and the design. Add the size and quantity to the quote and we confirm it before printing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I print a logo on airlaid linen-feel napkins?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Up to 4-colour logo or design print is available without compromising the cloth-like airlaid texture.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do linen-feel napkins differ from 10 × 10 cm cocktail paper napkins?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Linen-feel napkins include a 10 × 10 cm cocktail size, plus 10 × 20, 12 × 20, 15 × 20 and 20 × 20 cm, from 25 and from €0.24. The separate cocktail napkin page is the white 10 × 10 cm napkin, open 20 × 40 cm, from 50, with no price on the page.',
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
      name: 'Premium Linen-Feel Napkins Ireland Buying Guide',
      item: PAGE_URL,
    },
  ],
};

const sizeRows = [
  { size: 'Cocktail', dims: '10 × 10 cm', use: 'Bars, drinks receptions and canapé service' },
  { size: '10 × 20 cm', dims: '10 × 20 cm', use: 'Cafés and smaller place settings' },
  { size: '12 × 20 cm', dims: '12 × 20 cm', use: 'Lunch service and casual dining' },
  { size: '15 × 20 cm', dims: '15 × 20 cm', use: 'Restaurants and hotel covers' },
  { size: '20 × 20 cm', dims: '20 × 20 cm', use: 'Dinner, weddings and banquet tables' },
];

const foldRows = [
  { fold: 'Quarter fold', tip: 'Compact place-setting fold for dinner and premium sizes' },
  { fold: 'Eighth fold', tip: 'Smaller finished footprint for bars and buffet stations' },
  { fold: 'Pocket fold', tip: 'Holds cutlery cards or menus for hotel and wedding covers' },
  { fold: 'Custom fold', tip: 'Quoted when your service style needs a specific presentation' },
];

export default function PremiumLinenFeelNapkinsIrelandSizesBuyingGuide() {
  const title =
    'Premium Linen-Feel Napkins Ireland: Sizes, From €0.24';
  const description =
    'Buy premium linen-feel napkins in Ireland — 10 × 10 cm cocktail, 10 × 20, 12 × 20, 15 × 20 and 20 × 20 cm, from €0.24 and from 25. The price depends on the quantity and the design.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="premium linen-feel napkins ireland, airlaid napkins ireland, printed linen feel napkins dublin, hotel napkins cork, wedding airlaid napkins galway, 40x40 dinner napkins ireland, 48x48 premium napkins ireland, branded hospitality napkins ashbourne, linen feel napkin moq ireland, cloth like disposable napkins ireland"
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
          content="Premium linen-feel napkins Ireland — white airlaid napkin with logo print"
        />
        <meta property="article:published_time" content="2026-10-16" />

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
          <span className="text-slate-900">Premium Linen-Feel Napkins Ireland</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            Retail Guide
          </span>
          <span className="text-slate-400 text-sm">16 Oct 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Premium Linen-Feel Napkins Ireland: five sizes, from €0.24
        </h1>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="relative rounded-2xl overflow-hidden h-48 col-span-2 bg-slate-50">
            <Image
              src={HERO_IMAGE}
              alt="Premium linen-feel napkins Ireland — white airlaid napkin with Kinetic Labs logo for Dublin hospitality"
              fill
              className="object-contain p-4"
              priority
              sizes="(max-width: 768px) 66vw, 512px"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={CAVAN_IMAGE}
                alt="Airlaid linen-feel guest napkin Ireland — Cavan Court Hotel crest print"
                fill
                className="object-contain p-3"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={OAKLINE_IMAGE}
                alt="Premium airlaid napkin Ireland — Oakline Partners oak leaf logo Cork"
                fill
                className="object-contain p-3"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Hotels in Dublin, restaurants in Cork and wedding venues in Galway often want a napkin that
            looks like cloth without the laundry bill. That is the job of{' '}
            <strong>premium linen-feel (airlaid) napkins</strong>: a soft, absorbent disposable stock
            that takes a logo and folds cleanly for place settings.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            This guide covers how to buy{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              premium linen-feel napkins in Ireland
            </Link>{' '}
            — 10 × 10 cm cocktail, 10 × 20, 12 × 20, 15 × 20 and 20 × 20 cm, from €0.24 and from 25.
            The price depends on the quantity and the design. The separate cocktail napkin page stays up for the white 10 × 10 cm napkin.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Why Irish hotels and restaurants choose airlaid linen-feel
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Airlaid paper has a cloth-like texture and higher absorbency than standard paper napkins.
            Guests notice the hand-feel at a hotel breakfast or a plated dinner, while kitchens keep
            the speed of a disposable. PrintNPack prints logos in up to four colours and offers
            biodegradable options for sites that need them.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Colours in the catalogue include white, cream, black, company blue and custom matches —
            useful when a Galway wedding wants cream airlaid or a Cork restaurant wants black bar
            stock with a white logo. For the wider napkin range (cocktail paper, wedding airlaid and
            kraft), start at{' '}
            <Link href={NAPKINS_HUB} className="text-blue-600 hover:underline">
              Napkins Ireland
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Linen-feel napkin sizes at a glance
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Pick the open size that matches the table, not the drinks rail. Cocktail airlaid is larger
            than a 10 × 10 cm beverage napkin; dinner and premium cover plate service.
          </p>

          <div className="overflow-x-auto mb-8 not-prose">
            <table className="min-w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
              <thead className="bg-slate-50 text-left">
                <tr>
                  <th className="px-4 py-3 font-semibold text-slate-900">Size</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">Dimensions</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">Best for</th>
                </tr>
              </thead>
              <tbody>
                {sizeRows.map((row) => (
                  <tr key={row.size} className="border-t border-slate-200">
                    <td className="px-4 py-3 text-slate-900 font-medium">{row.size}</td>
                    <td className="px-4 py-3 text-slate-700">{row.dims}</td>
                    <td className="px-4 py-3 text-slate-700">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="relative rounded-2xl overflow-hidden h-56 mb-8 bg-slate-50 not-prose">
            <Image
              src={GREENSTONE_IMAGE}
              alt="Linen-feel napkins Ireland — Greenstone Property Group airlaid guest napkin Ashbourne print"
              fill
              className="object-contain p-6"
              sizes="(max-width: 768px) 100vw, 720px"
            />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            10 × 10 cm cocktail through to 20 × 20 cm
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            <strong>10 × 10 cm</strong> is the cocktail size, for bars, drinks receptions and canapé service.
            The same size has its own cocktail napkin page, kept for search, with no price shown there.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            <strong>10 × 20, 12 × 20 and 15 × 20 cm</strong> cover cafés, lunch service and restaurant covers.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            <strong>20 × 20 cm</strong> is the dinner and wedding size. From €0.24, and the price depends on the quantity and the design.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Fold options that match Irish service styles
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Folding changes how the napkin sits on the plate or in a glass. The catalogue lists quarter
            fold, eighth fold, pocket fold and custom options.
          </p>

          <div className="overflow-x-auto mb-8 not-prose">
            <table className="min-w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
              <thead className="bg-slate-50 text-left">
                <tr>
                  <th className="px-4 py-3 font-semibold text-slate-900">Fold</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">When to use it</th>
                </tr>
              </thead>
              <tbody>
                {foldRows.map((row) => (
                  <tr key={row.fold} className="border-t border-slate-200">
                    <td className="px-4 py-3 text-slate-900 font-medium">{row.fold}</td>
                    <td className="px-4 py-3 text-slate-700">{row.tip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            MOQ, price and lead time — what the catalogue states
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Minimum order is <strong>25 napkins</strong>. Pricing starts at{' '}
            <strong>€0.24</strong>. The price depends on the quantity and the design.
            Add the size and quantity on the product page and we confirm it before printing.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Need a smaller printed run for a drinks reception? White paper cocktail napkins start from
            50 on the{' '}
            <Link href="/blog/custom-printed-napkins" className="text-blue-600 hover:underline">
              custom printed napkins
            </Link>{' '}
            line (10 × 10 cm closed). Linen-feel is the same family of sizes, from 25, with a starting price of €0.24.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Plain airlaid vs printed logo — which to order
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Unprinted airlaid still looks upscale; printed airlaid turns every cover into a brand
            touch. Up to four-colour logo or design print is available. Keep artwork centred — edge
            frames can clip when napkins are cut and folded, the same rule that applies to other
            printed napkin lines.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            For a broader overview of personalised paper vs linen-feel, see the{' '}
            <Link href="/blog/personalised-napkins-ireland-guide" className="text-blue-600 hover:underline">
              personalised napkins Ireland guide
            </Link>
            . UK and EU postage context for napkin orders is covered in{' '}
            <Link href="/blog/custom-napkins-uk-ireland-europe" className="text-blue-600 hover:underline">
              custom napkins UK, Ireland &amp; Europe
            </Link>
            . Pair hotel bars with{' '}
            <Link
              href="/blog/printed-coasters-ireland-9x9-moq-buying-guide"
              className="text-blue-600 hover:underline"
            >
              printed coasters
            </Link>{' '}
            when glassware needs a matching logo.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Delivery across Ireland from Ashbourne
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            PrintNPack is based in Ashbourne, Co. Meath. Orders go to Dublin, Cork, Galway and every
            Irish county. Hospitality accounts can use the weekly scheduled delivery service so linen-
            feel stock arrives on a fixed rhythm without oversized store-room orders.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            UK and EU postage for napkin lines is quoted on the order when you need it; this guide
            focuses on Irish hospitality delivery, which is the core route for airlaid restocks.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How to order premium linen-feel napkins in Ireland
          </h2>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-8">
            <li>Choose size — 10 × 10 cm cocktail, 10 × 20, 12 × 20, 15 × 20 or 20 × 20 cm</li>
            <li>Pick colour (white, cream, black, company blue or custom) and fold style</li>
            <li>Decide plain airlaid or up to 4-colour logo print</li>
            <li>Order from 25. The price starts at €0.24 and depends on the quantity and the design</li>
            <li>
              Order via the{' '}
              <Link href={HUB_HREF} className="text-blue-600 hover:underline">
                premium linen-feel napkins
              </Link>{' '}
              page — or ask for weekly delivery if you restock often
            </li>
            <li>Take nationwide delivery or collect from Ashbourne, Co. Meath</li>
          </ol>

          <div className="bg-slate-900 rounded-xl p-6 mb-8 text-white not-prose">
            <p className="font-semibold mb-1">Ready to order linen-feel napkins?</p>
            <p className="text-slate-400 text-sm mb-4">
              Five sizes, from €0.24 and from 25. The price depends on the quantity and the design.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={HUB_HREF}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Shop Linen-Feel Napkins →
              </Link>
              <Link
                href={NAPKINS_HUB}
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                All Napkins Ireland
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
                q: 'Where can I order premium linen-feel napkins in Ireland?',
                a: 'PrintNPack prints premium airlaid linen-feel napkins in Ashbourne, Co. Meath and delivers across Ireland — Dublin, Cork, Galway and every county. Weekly scheduled delivery is available for hospitality accounts.',
              },
              {
                q: 'What sizes are available for linen-feel napkins?',
                a: '10 × 10 cm cocktail, 10 × 20 cm, 12 × 20 cm, 15 × 20 cm and 20 × 20 cm.',
              },
              {
                q: 'What is the minimum order for premium linen-feel napkins?',
                a: '25 napkins. The price is confirmed from the quantity and the design.',
              },
              {
                q: 'How much do linen-feel napkins cost in Ireland?',
                a: 'From €0.24. The price depends on the quantity and the design. Add the size and quantity to the quote and we confirm it before printing.',
              },
              {
                q: 'Can I print a logo on airlaid linen-feel napkins?',
                a: 'Yes. Up to 4-colour logo or design print is available without compromising the cloth-like airlaid texture.',
              },
              {
                q: 'How do linen-feel napkins differ from 10 × 10 cm cocktail paper napkins?',
                a: 'Linen-feel napkins include a 10 × 10 cm cocktail size, plus 10 × 20, 12 × 20, 15 × 20 and 20 × 20 cm, from 25 and from €0.24. The separate cocktail napkin page is the white 10 × 10 cm napkin, from 50, with no price on the page.',
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
              href: '/blog/personalised-napkins-ireland-guide',
              src: WEDDING_IMAGE,
              title: 'Personalised Napkins Ireland | Printed Napkins from 25',
            },
            {
              href: '/blog/custom-printed-napkins',
              src: COCKTAIL_IMAGE,
              title: 'Custom Printed Napkins | 10×10 cm Cocktail, Wedding and Kraft',
            },
            {
              href: '/blog/printed-coasters-ireland-9x9-moq-buying-guide',
              src: COASTER_IMAGE,
              title: 'Printed Coasters Ireland: Round 9×9 cm, 8 Ply & MOQ Buying Guide',
            },
            {
              href: '/blog/custom-napkins-uk-ireland-europe',
              src: '/images/products/premium-linen-feel-napkins/Napkin Mock 1.jpg',
              title: 'Custom Napkins UK, Ireland & Europe: Printed, Personalised & Branded Guide',
            },
          ].map(({ href, src, title: relatedTitle }) => (
            <Link
              key={href}
              href={href}
              className="group flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors"
            >
              <div className="relative w-16 h-14 flex-shrink-0 rounded-lg overflow-hidden bg-slate-100">
                <Image src={src} alt={relatedTitle} fill className="object-contain p-1" sizes="64px" />
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
