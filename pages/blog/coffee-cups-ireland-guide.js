import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/coffee-cups-ireland-guide`;
const HERO_IMAGE = '/images/plain-packaging/100070.webp';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Coffee Cups Ireland: Plain vs Custom Printed Buying Guide',
  description:
    'A practical guide to coffee cups in Ireland — plain wholesale double wall cups, custom printed branded cups, sizes, compostable options, and how to order.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: { '@type': 'Organization', name: 'PrintNPack Ireland', logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` } },
  datePublished: '2026-08-26',
  dateModified: '2026-08-26',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What size coffee cup should I use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '8oz is the most popular size for regular takeaway coffee, 12oz suits lattes and large regular coffees, and 16oz covers large hot drinks. Espresso bars often add a 4oz size, and offices use 7oz vending cups.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I buy plain or custom printed coffee cups?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Plain coffee cups are cheaper and available with no print minimum order — ideal for fast wholesale restocking. Custom printed cups put your logo in front of every customer and now start from low minimum order quantities, suiting cafés that want a branded takeaway experience.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I buy coffee cups in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack supplies both plain wholesale and custom printed coffee cups across Ireland and Northern Ireland from our Ashbourne, Co. Meath warehouse, with nationwide delivery to Dublin, Cork, Galway, Belfast and beyond.',
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
    { '@type': 'ListItem', position: 3, name: 'Coffee Cups Guide', item: PAGE_URL },
  ],
};

const sizeRows = [
  { size: '4oz', use: 'Espresso bars and short coffee — single wall stock cups' },
  { size: '7oz', use: 'Vending machine cups for offices and workplaces' },
  { size: '8oz', use: 'Regular coffee — most popular takeaway size for cafés' },
  { size: '10oz', use: 'Large regular or small latte — compostable aqueous options' },
  { size: '12oz', use: 'Latte, cappuccino and large regular — best-selling café size' },
  { size: '16oz', use: 'Large hot drinks, tea and extra-large coffee servings' },
];

export default function CoffeeCupsIrelandGuide() {
  const title = 'Coffee Cups Ireland: Plain vs Custom Printed Buying Guide';
  const description =
    'Everything Irish cafés and coffee shops need to know about coffee cups — plain wholesale double wall cups, custom printed branded cups, sizes, compostable options, and how to order.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="coffee cups ireland, disposable coffee cups ireland, custom printed coffee cups ireland, plain coffee cups ireland, coffee cup sizes, compostable coffee cups ireland, wholesale coffee cups"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={`${siteUrl}${HERO_IMAGE}`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      </Head>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <Link href="/" className="hover:text-slate-700">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-slate-700">Blog</Link>
          <span>/</span>
          <span className="text-slate-900">Coffee Cups Guide</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-amber-50 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full">Hospitality Guide</span>
          <span className="text-slate-400 text-sm">26 Aug 2026 · 7 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">{title}</h1>

        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-amber-50 mb-10">
          <Image src={HERO_IMAGE} alt="Coffee cups Ireland — plain and custom printed takeaway cups" fill className="object-contain p-8" priority sizes="(max-width: 768px) 100vw, 672px" />
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-gray-600 leading-relaxed">
            Coffee cups are one of the highest-volume packaging items any Irish café, restaurant or office buys.
            This guide covers plain wholesale cups, custom printed branded cups, sizes, materials and how to
            choose and order the right coffee cup for your business.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Plain vs custom printed coffee cups</h2>
          <p className="text-gray-600 leading-relaxed">
            <strong>Plain coffee cups</strong> are sold by the case for fast restocking — ideal for busy kitchens
            and cafés that want reliable wholesale stock with no minimum print run.{' '}
            <strong>Custom printed coffee cups</strong> add your logo, brand colours and artwork to every takeaway
            drink, with low minimum order quantities now available so smaller cafés, start-ups and pop-up shops
            can order branded cups without committing to huge volumes.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Many cafés use plain cups for high-volume or backup stock and printed cups for their main service —
            see{' '}
            <Link href="/hot-cups-ireland" className="text-amber-700 hover:underline">plain coffee cups Ireland</Link>{' '}
            and{' '}
            <Link href="/custom-printed-coffee-cups-ireland" className="text-amber-700 hover:underline">custom printed coffee cups</Link>.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Coffee cup sizes — which one to stock</h2>
          <div className="overflow-x-auto my-6 not-prose">
            <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Size</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Best for</th>
                </tr>
              </thead>
              <tbody>
                {sizeRows.map((row, i) => (
                  <tr key={row.size} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-medium text-gray-900">{row.size}</td>
                    <td className="px-4 py-3 text-gray-600">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 leading-relaxed">
            8oz and 12oz are by far the best-selling sizes for Irish cafés — most stock both alongside matching
            80mm and 90mm lids.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Double wall, single wall and compostable materials</h2>
          <p className="text-gray-600 leading-relaxed">
            Double wall cups have an insulating air gap that keeps drinks hotter for longer and stays comfortable
            to hold without a sleeve — the standard choice for most Irish cafés. Single wall cups are a
            lower-cost, economical alternative for high-volume or budget-conscious outlets. Compostable Greenspirit
            aqueous-coated cups and kraft ripple cups are available for businesses that want a more sustainable
            takeaway option, in both plain and custom printed formats.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How much do coffee cups cost in Ireland?</h2>
          <p className="text-gray-600 leading-relaxed">
            Plain wholesale coffee cups typically cost from around <strong>€17–€30 per case of 500</strong> depending
            on size and material. Custom printed coffee cups are quoted per unit based on size, print colours and
            quantity — contact PrintNPack for a free tailored quote with low minimum order quantities.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How to order coffee cups in Ireland</h2>
          <ol className="list-decimal pl-6 text-gray-600 space-y-2">
            <li>Decide plain wholesale or custom printed with your logo</li>
            <li>Choose your size — 8oz and 12oz cover most café needs</li>
            <li>Pick double wall, single wall or compostable material</li>
            <li>For printed cups, send your logo artwork for a proof</li>
            <li>Receive delivery nationwide or collect from Ashbourne, Co. Meath</li>
          </ol>
        </div>

        <section className="mt-12 p-6 bg-amber-50 rounded-2xl border border-amber-100">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Ready to order coffee cups?</h2>
          <p className="text-gray-600 mb-4">Plain wholesale cases or custom printed cups with your logo — free quote and delivery across Ireland &amp; Northern Ireland.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/hot-cups-ireland" className="inline-flex items-center bg-amber-700 text-white font-semibold px-6 py-3 rounded-xl hover:bg-amber-800 transition-colors">Plain Coffee Cups</Link>
            <Link href="/custom-printed-coffee-cups-ireland" className="inline-flex items-center bg-white text-gray-800 font-semibold px-6 py-3 rounded-xl border border-gray-300 hover:border-gray-400 transition-colors">Custom Printed Cups</Link>
            <Link href="/coffee-cup-faq-ireland" className="inline-flex items-center bg-white text-gray-800 font-semibold px-6 py-3 rounded-xl border border-gray-300 hover:border-gray-400 transition-colors">Coffee Cup FAQ</Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
