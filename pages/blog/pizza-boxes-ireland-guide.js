import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/pizza-boxes-ireland-guide`;
const HERO_IMAGE = '/images/pizza-boxes/PIZZA_BOX_5.jpg';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Pizza Boxes Ireland: Plain vs Custom Printed, Sizes & Wholesale Guide',
  description:
    'A practical guide to pizza boxes in Ireland — plain kraft wholesale boxes, custom printed pizza boxes with logo, popular sizes, and how to order for takeaways and pizzerias.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: { '@type': 'Organization', name: 'PrintNPack Ireland', logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` } },
  datePublished: '2026-08-27',
  dateModified: '2026-08-27',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the most popular pizza box size in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The 12-inch pizza box is the most popular size for Irish takeaways, followed by 14-inch for large and family orders. Most operators stock 12" and 14" as their core sizes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I get custom pizza boxes with my logo in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Custom printed pizza boxes with your logo start from 500 units with full-colour CMYK print. Plain kraft pizza boxes are available by the case for faster stock orders.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I buy plain pizza boxes wholesale in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack supplies plain kraft corrugated pizza boxes by the case in 7", 9", 10", 12", 14" and 16" sizes with tiered wholesale pricing and delivery across Ireland.',
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
    { '@type': 'ListItem', position: 3, name: 'Pizza Boxes Guide', item: PAGE_URL },
  ],
};

export default function PizzaBoxesIrelandGuide() {
  const title = 'Pizza Boxes Ireland: Plain vs Custom Printed, Sizes & Wholesale Guide';
  const description =
    'Everything Irish takeaways and pizzerias need to know about pizza boxes — plain kraft wholesale, custom printed boxes with logo, popular sizes, and how to order.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="pizza boxes ireland, pizza box ireland, custom pizza boxes, plain pizza boxes, wholesale pizza boxes, pizza box sizes, branded pizza boxes, pizza box printing dublin" />
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
          <span className="text-slate-900">Pizza Boxes Guide</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-orange-50 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full">Packaging Guide</span>
          <span className="text-slate-400 text-sm">27 Aug 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">{title}</h1>

        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-orange-50 mb-10">
          <Image src={HERO_IMAGE} alt="Pizza boxes Ireland — plain kraft and custom printed packaging" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 672px" unoptimized={process.env.NODE_ENV === 'production'} />
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-gray-600 leading-relaxed">
            A <strong>pizza box</strong> is essential packaging for Irish takeaways, pizzerias, restaurants, ghost kitchens, and catering operators.
            This guide covers plain wholesale kraft boxes, <strong>custom pizza boxes</strong> with your logo, popular sizes, and how to choose the right option for your business.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Plain vs custom printed pizza boxes</h2>
          <p className="text-gray-600 leading-relaxed">
            <strong>Plain pizza boxes</strong> are sold by the case for fast restocking — ideal for busy kitchens that need reliable wholesale supply without print lead times. Kraft brown corrugated board is the standard choice for Irish takeaways.{' '}
            <strong>Custom printed pizza boxes</strong> add your logo to every delivery order — full-colour CMYK print from 500 units with 5–7 day production.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Many operators use plain boxes for everyday volume and printed boxes for branded delivery. See{' '}
            <Link href="/plain-pizza-boxes-ireland" className="text-blue-600 hover:underline">plain pizza boxes</Link> and{' '}
            <Link href="/custom-pizza-boxes-ireland" className="text-blue-600 hover:underline">custom printed pizza boxes</Link>.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Pizza box sizes for Irish takeaways</h2>
          <p className="text-gray-600 leading-relaxed">
            The <strong>12-inch pizza box</strong> is the most popular size in Ireland, followed by 14-inch for large and family orders.
            Smaller 7", 9" and 10" boxes suit personal pizzas and lunch specials. 16" boxes handle extra-large and sharing pizzas.
            Read our detailed{' '}
            <Link href="/blog/pizza-box-sizes-ireland" className="text-blue-600 hover:underline">pizza box sizes guide</Link> for stocking advice.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Kraft corrugated pizza boxes</h2>
          <p className="text-gray-600 leading-relaxed">
            Kraft corrugated pizza boxes are food-safe, recyclable, and suited to hot takeaway use. Brown kraft is the standard for plain wholesale orders — typically sold in cases of 100 on popular sizes.
            They keep pizzas secure during delivery and stack efficiently in busy kitchens.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How much do pizza boxes cost in Ireland?</h2>
          <p className="text-gray-600 leading-relaxed">
            Plain wholesale pizza boxes typically cost around <strong>€0.10–€0.25 per box</strong> depending on size and case quantity.
            Custom printed pizza boxes start from around <strong>€0.17 per unit</strong> with a 500-unit minimum order.
            See our{' '}
            <Link href="/blog/custom-pizza-box-cost-ireland" className="text-blue-600 hover:underline">custom pizza box cost guide</Link> for detailed pricing.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Pizza box delivery in Dublin and nationwide</h2>
          <p className="text-gray-600 leading-relaxed">
            PrintNPack is based in Ashbourne, Co. Meath, and delivers pizza boxes across Dublin, Cork, Galway, and all Irish counties.
            Plain cases ship quickly; custom print runs take 5–7 business days after artwork approval.
            Local supply pages:{' '}
            <Link href="/pizza-box-printing-dublin" className="text-blue-600 hover:underline">pizza boxes Dublin</Link> and{' '}
            <Link href="/pizza-box-printing-ashbourne" className="text-blue-600 hover:underline">pizza boxes Ashbourne</Link>.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How to order pizza boxes in Ireland</h2>
          <ol className="list-decimal pl-6 text-gray-600 space-y-2">
            <li>Choose plain wholesale or custom printed boxes</li>
            <li>Select size — 12" and 14" are the most popular for takeaways</li>
            <li>For printed boxes, send your logo artwork</li>
            <li>Approve proof before production (printed orders)</li>
            <li>Receive delivery nationwide or collect from Ashbourne, Co. Meath</li>
          </ol>
        </div>

        <section className="mt-12 p-6 bg-orange-50 rounded-2xl border border-orange-100">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Ready to order pizza boxes?</h2>
          <p className="text-gray-600 mb-4">Plain wholesale cases or custom printed boxes — free quote and delivery across Ireland.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/plain-pizza-boxes-ireland" className="inline-flex items-center bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors">Plain Pizza Boxes</Link>
            <Link href="/pizza-boxes-ireland" className="inline-flex items-center bg-white text-gray-800 font-semibold px-6 py-3 rounded-xl border border-gray-300 hover:border-gray-400 transition-colors">Pizza Boxes Hub</Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
