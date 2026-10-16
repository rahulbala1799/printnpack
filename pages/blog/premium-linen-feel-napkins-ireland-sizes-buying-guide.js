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
  headline: 'Premium Linen-Feel Napkins Ireland: 25×25–48×48 cm Sizes & MOQ Buying Guide',
  description:
    'How to buy premium linen-feel (airlaid) napkins in Ireland — cocktail 25×25 cm, dinner 40×40 cm and premium 48×48 cm, fold options, 1,000 MOQ, logo print from €0.10, and delivery from Ashbourne.',
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
        text: 'Three airlaid sizes: cocktail 25 × 25 cm, dinner 40 × 40 cm, and premium 48 × 48 cm.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the minimum order for premium linen-feel napkins?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '1,000 units. Lead time is typically 7–10 business days after artwork is agreed.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much do linen-feel napkins cost in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Premium linen-feel napkins start at €0.10 per unit. Final pricing depends on size, colour, fold and print coverage — confirm the live quote on the product page before you order.',
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
        text: 'Linen-feel napkins are thicker airlaid stock in 25 × 25 cm, 40 × 40 cm or 48 × 48 cm, with a 1,000-piece MOQ. Standard printed cocktail napkins are white paper at 10 × 10 cm closed (20 × 40 cm open) and can start from 50.',
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
  {
    size: 'Cocktail linen-feel',
    dims: '25 × 25 cm',
    use: 'Drinks receptions, hotel bars, canapé service',
  },
  {
    size: 'Dinner linen-feel',
    dims: '40 × 40 cm',
    use: 'Restaurant covers, hotel dining rooms, catering tables',
  },
  {
    size: 'Premium linen-feel',
    dims: '48 × 48 cm',
    use: 'Fine dining, wedding plates, luxury hotel banquet',
  },
];

const foldRows = [
  { fold: 'Quarter fold', tip: 'Compact place-setting fold for dinner and premium sizes' },
  { fold: 'Eighth fold', tip: 'Smaller finished footprint for bars and buffet stations' },
  { fold: 'Pocket fold', tip: 'Holds cutlery cards or menus for hotel and wedding covers' },
  { fold: 'Custom fold', tip: 'Quoted when your service style needs a specific presentation' },
];

export default function PremiumLinenFeelNapkinsIrelandSizesBuyingGuide() {
  const title =
    'Premium Linen-Feel Napkins Ireland: 25×25–48×48 cm Sizes & MOQ Buying Guide';
  const description =
    'Buy premium linen-feel napkins in Ireland — airlaid cocktail 25×25 cm, dinner 40×40 cm and premium 48×48 cm, folds, logo print from €0.10, 1,000 MOQ, and delivery to Dublin, Cork, Galway from Ashbourne.';

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
          Premium Linen-Feel Napkins Ireland: 25×25–48×48 cm Sizes &amp; MOQ Buying Guide
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
            — the three catalogue sizes (25 × 25 cm, 40 × 40 cm, 48 × 48 cm), fold options, colours,
            1,000-piece MOQ, print from €0.10 per unit, and delivery from Ashbourne. It is not a guide
            to thin 10 × 10 cm cocktail paper napkins; those sit on a different product line.
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
            Cocktail 25 × 25 cm vs dinner 40 × 40 cm vs premium 48 × 48 cm
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            <strong>25 × 25 cm cocktail linen-feel</strong> suits drinks receptions, hotel lounges and
            canapé trays where you want airlaid quality without a full dinner square. It is still a
            hospitality napkin — not the same SKU as white paper cocktail napkins at 10 × 10 cm closed.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            <strong>40 × 40 cm dinner</strong> is the everyday restaurant and hotel dining size: large
            enough for a place setting, easy to quarter-fold, and the most common airlaid order for
            Ashbourne accounts that restock weekly.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            <strong>48 × 48 cm premium</strong> is the luxury cover — fine dining, wedding plate
            service and banquet tables where the napkin should read as cloth from across the room.
            If you only stock one airlaid size for mixed service, dinner 40 × 40 cm is usually the
            safest first order.
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
            Minimum order is <strong>1,000 units</strong>. Pricing starts at{' '}
            <strong>€0.10 per unit</strong>; size, colour, fold and ink coverage move the quote.
            Production is typically <strong>7–10 business days</strong> after artwork is agreed. Confirm
            the live total on the product page — this guide does not invent pack prices beyond that
            published starting figure.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Need a smaller printed run for a drinks reception? White paper cocktail napkins start from
            50 on the{' '}
            <Link href="/blog/custom-printed-napkins" className="text-blue-600 hover:underline">
              custom printed napkins
            </Link>{' '}
            line (10 × 10 cm closed). Linen-feel is the upgrade when the table must feel premium and you
            can meet the 1,000 MOQ.
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
            <li>Choose size — 25 × 25 cm cocktail, 40 × 40 cm dinner, or 48 × 48 cm premium</li>
            <li>Pick colour (white, cream, black, company blue or custom) and fold style</li>
            <li>Decide plain airlaid or up to 4-colour logo print</li>
            <li>Plan for the 1,000-piece MOQ and 7–10 business day lead time</li>
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
              Airlaid cocktail, dinner and premium sizes with logo print from €0.10 — delivered across
              Ireland from Ashbourne.
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
                a: 'Three airlaid sizes: cocktail 25 × 25 cm, dinner 40 × 40 cm, and premium 48 × 48 cm.',
              },
              {
                q: 'What is the minimum order for premium linen-feel napkins?',
                a: '1,000 units. Lead time is typically 7–10 business days after artwork is agreed.',
              },
              {
                q: 'How much do linen-feel napkins cost in Ireland?',
                a: 'Premium linen-feel napkins start at €0.10 per unit. Final pricing depends on size, colour, fold and print coverage — confirm the live quote on the product page before you order.',
              },
              {
                q: 'Can I print a logo on airlaid linen-feel napkins?',
                a: 'Yes. Up to 4-colour logo or design print is available without compromising the cloth-like airlaid texture.',
              },
              {
                q: 'How do linen-feel napkins differ from 10 × 10 cm cocktail paper napkins?',
                a: 'Linen-feel napkins are thicker airlaid stock in 25 × 25 cm, 40 × 40 cm or 48 × 48 cm, with a 1,000-piece MOQ. Standard printed cocktail napkins are white paper at 10 × 10 cm closed (20 × 40 cm open) and can start from 50.',
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
              title: 'Personalised Napkins Ireland | Printed Napkins from €0.05',
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
