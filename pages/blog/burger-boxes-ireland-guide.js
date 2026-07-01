import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/burger-boxes-ireland-guide`;
const HERO_IMAGE = '/images/products/bagasse-burger-box/1.png';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Burger Boxes Ireland: Plain vs Printed, Bagasse & Wholesale Guide',
  description:
    'A practical guide to burger boxes in Ireland — plain wholesale bagasse and corrugated clamshells, custom printed compostable boxes, materials, and how to order.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: { '@type': 'Organization', name: 'PrintNPack Ireland', logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` } },
  datePublished: '2026-06-21',
  dateModified: '2026-06-21',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best eco-friendly burger box in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bagasse burger boxes made from sugarcane fibre are the most popular eco-friendly option — compostable, oil-resistant, and microwave-safe. Corrugated cardboard clamshells are recyclable and often lower cost for high volume.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I get burger boxes with my logo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Custom printed bagasse burger boxes with your logo start from 500 units. Plain wholesale burger boxes are available by the case for faster stock orders.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I buy plain burger boxes wholesale in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack supplies plain bagasse burger boxes and corrugated clamshells by the case with tiered wholesale pricing and delivery across Ireland.',
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
    { '@type': 'ListItem', position: 3, name: 'Burger Boxes Guide', item: PAGE_URL },
  ],
};

export default function BurgerBoxesIrelandGuide() {
  const title = 'Burger Boxes Ireland: Plain vs Printed, Bagasse & Wholesale Guide';
  const description =
    'Everything Irish takeaways and burger restaurants need to know about burger boxes — plain wholesale, custom printed bagasse, compostable materials, and how to order.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="burger boxes ireland, plain burger boxes, bagasse burger box, printed burger boxes, biodegradable burger boxes, burger boxes wholesale, compostable burger boxes" />
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
          <span className="text-slate-900">Burger Boxes Guide</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full">Packaging Guide</span>
          <span className="text-slate-400 text-sm">21 Jun 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">{title}</h1>

        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-emerald-50 mb-10">
          <Image src={HERO_IMAGE} alt="Burger boxes Ireland — plain and printed bagasse packaging" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 672px" />
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-gray-600 leading-relaxed">
            Burger boxes are essential packaging for Irish takeaways, burger restaurants, food trucks, and catering operators.
            This guide covers plain wholesale options, custom printed bagasse boxes, materials, and how to choose the right box for your business.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Plain vs printed burger boxes</h2>
          <p className="text-gray-600 leading-relaxed">
            <strong>Plain burger boxes</strong> are sold by the case for fast restocking — ideal for busy kitchens that need reliable wholesale supply without print lead times.{' '}
            <strong>Custom printed burger boxes</strong> add your logo to every takeaway order — compostable bagasse construction with full-colour print from 500 units.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Many operators use plain boxes for everyday volume and printed boxes for branded delivery. See{' '}
            <Link href="/plain-burger-boxes-ireland" className="text-emerald-600 hover:underline">plain burger boxes</Link> and{' '}
            <Link href="/custom-burger-boxes-ireland" className="text-emerald-600 hover:underline">custom printed burger boxes</Link>.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Bagasse burger boxes — compostable eco packaging</h2>
          <p className="text-gray-600 leading-relaxed">
            Bagasse is sugarcane fibre — a renewable by-product of sugar production. Bagasse burger boxes are compostable,
            oil-resistant, microwave-safe, and a popular replacement for plastic and polystyrene foam in Ireland.
            They suit eco-conscious brands and help meet customer demand for sustainable takeaway packaging.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Corrugated clamshell burger boxes</h2>
          <p className="text-gray-600 leading-relaxed">
            Corrugated cardboard clamshell burger boxes are recyclable and often the most economical option for high-volume takeaways.
            Available in standard burger clamshell sizes (#8–#12) with case pricing. Good for operators prioritising cost and recyclability over compostable credentials.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How much do burger boxes cost?</h2>
          <p className="text-gray-600 leading-relaxed">
            Plain wholesale burger boxes typically cost around <strong>€0.15–€0.35 per box</strong> depending on material and case size.
            Custom printed bagasse burger boxes start from around <strong>€0.22 per unit</strong> with a 500-unit minimum order.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How to order burger boxes in Ireland</h2>
          <ol className="list-decimal pl-6 text-gray-600 space-y-2">
            <li>Choose plain wholesale or custom printed bagasse</li>
            <li>Select size — 6" bagasse burger box, clamshell, or meal box</li>
            <li>For printed boxes, send your logo artwork</li>
            <li>Approve proof before production (printed orders)</li>
            <li>Receive delivery nationwide or collect from Ashbourne, Co. Meath</li>
          </ol>
        </div>

        <section className="mt-12 p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Ready to order burger boxes?</h2>
          <p className="text-gray-600 mb-4">Plain wholesale cases or custom printed bagasse — free quote and delivery across Ireland.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/plain-burger-boxes-ireland" className="inline-flex items-center bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-emerald-700 transition-colors">Plain Burger Boxes</Link>
            <Link href="/burger-boxes-ireland" className="inline-flex items-center bg-white text-gray-800 font-semibold px-6 py-3 rounded-xl border border-gray-300 hover:border-gray-400 transition-colors">Burger Boxes Hub</Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
