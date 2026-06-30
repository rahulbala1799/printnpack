import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/personalised-napkins-ireland-guide`;
const HERO_IMAGE = '/images/hero/napkin.svg';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Personalised Napkins Ireland: Sizes, Materials & Wedding Napkin Guide',
  description:
    'A practical guide to personalised napkins in Ireland — cocktail vs dinner sizes, paper vs linen-feel, wedding napkins, restaurant branding, and how to order custom printed napkins.',
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
      name: 'What size napkins do restaurants use in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most Irish restaurants use 33cm lunch napkins (2-ply) for everyday dining and 40cm dinner napkins for full-service meals. Cocktail napkins (around 25cm) are used for bar service and appetisers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are linen-feel napkins worth it for weddings?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Linen-feel airlaid napkins offer a cloth-like texture and upscale appearance at a fraction of the cost of real linen. They are popular for wedding receptions, hotels, and fine dining in Ireland.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much do personalised napkins cost in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Custom printed paper napkins start from around €0.05 per unit (1,000 MOQ). Premium linen-feel napkins start from €0.10 per unit. Price depends on size, ply, material, and print colours.',
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
    { '@type': 'ListItem', position: 3, name: 'Personalised Napkins Guide', item: PAGE_URL },
  ],
};

export default function PersonalisedNapkinsIrelandGuide() {
  const title = 'Personalised Napkins Ireland: Sizes, Materials & Wedding Napkin Guide';
  const description =
    'Everything Irish restaurants and event planners need to know about personalised napkins — cocktail vs dinner sizes, paper vs linen-feel, wedding napkins, branding tips, and how to order.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="personalised napkins ireland, printed napkins, wedding napkins ireland, cocktail napkins, linen feel napkins, branded napkins, napkin printing ireland, restaurant napkins" />
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
          <span className="text-slate-900">Personalised Napkins Guide</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-amber-50 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full">Hospitality Guide</span>
          <span className="text-slate-400 text-sm">21 Jun 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">{title}</h1>

        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-amber-50 mb-10 flex items-center justify-center p-16">
          <Image src={HERO_IMAGE} alt="Personalised napkins Ireland — branded restaurant and wedding napkins" width={280} height={280} className="object-contain" priority />
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-gray-600 leading-relaxed">
            Whether you run a busy takeaway in Dublin, a hotel in Meath, or you are planning a wedding in Ireland,
            personalised napkins are one of the simplest ways to reinforce your brand at every table.
            This guide covers sizes, materials, costs, and how to order custom printed napkins from an Irish supplier.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Napkin sizes: cocktail, lunch, and dinner</h2>
          <p className="text-gray-600 leading-relaxed">
            Choosing the right size matters for both cost and presentation.{' '}
            <strong>Cocktail napkins</strong> (around 25×25cm) are used under drinks, with appetisers, and at bar service.{' '}
            <strong>Lunch napkins</strong> (33cm, typically 2-ply) are the workhorse for casual restaurants and cafes.{' '}
            <strong>Dinner napkins</strong> (40cm or 48cm) suit full-service dining, hotels, and weddings where a larger napkin looks more premium on the table.
          </p>
          <p className="text-gray-600 leading-relaxed">
            If you are unsure, start with a 33cm 2-ply lunch napkin for everyday service and upgrade to dinner or linen-feel for special events.
            See our <Link href="/napkin-faq-ireland" className="text-amber-600 hover:underline">napkin FAQ</Link> for more size guidance.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Paper napkins vs linen-feel napkins</h2>
          <p className="text-gray-600 leading-relaxed">
            <strong>Standard printed paper napkins</strong> are the most economical choice for high-volume restaurants and takeaways.
            They work well with a simple one- or two-colour logo print and start from around €0.05 per unit.
          </p>
          <p className="text-gray-600 leading-relaxed">
            <strong>Premium linen-feel napkins</strong> use airlaid paper with a cloth-like texture. They are softer, more absorbent,
            and look significantly more upscale — popular for hotels, fine dining, and wedding receptions.
            Linen-feel napkins start from around €0.10 per unit.{' '}
            <Link href="/products/premium-linen-feel-napkins" className="text-amber-600 hover:underline">View linen-feel napkins</Link>.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Branded napkins for restaurants and cafes</h2>
          <p className="text-gray-600 leading-relaxed">
            A branded napkin puts your logo in front of every customer at the table. Irish restaurants use them for:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Table settings with logo or tagline</li>
            <li>Takeaway bags alongside branded packaging</li>
            <li>Bar service with cocktail napkins featuring your pub or restaurant mark</li>
            <li>Seasonal promotions or limited-edition designs</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mt-4">
            Minimum order is typically 1,000 units. For high-volume venues, consider{' '}
            <Link href="/plain-packaging" className="text-amber-600 hover:underline">plain wholesale napkins</Link>{' '}
            for everyday use and branded napkins for dine-in service.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Wedding napkins in Ireland</h2>
          <p className="text-gray-600 leading-relaxed">
            Personalised wedding napkins are a popular detail for Irish receptions. Common designs include couple names,
            wedding date, monogram, or a custom illustration. Linen-feel napkins are the most popular material for weddings
            because they photograph well and feel premium on the table.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Order at least 3–4 weeks before your event to allow for artwork approval and production (typically 5–10 business days).
            Cocktail napkins work well at the bar; dinner-size napkins for the meal service.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How much do personalised napkins cost?</h2>
          <p className="text-gray-600 leading-relaxed">
            Custom printed paper napkins start from around <strong>€0.05 per unit</strong> with a 1,000-unit minimum.
            Premium linen-feel napkins start from <strong>€0.10 per unit</strong>.
            Final price depends on size, ply, material, number of print colours, and quantity.
            Larger orders reduce the per-unit cost.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How to order printed napkins in Ireland</h2>
          <ol className="list-decimal pl-6 text-gray-600 space-y-2">
            <li>Choose your napkin type — printed paper, linen-feel, or plain wholesale</li>
            <li>Select size (cocktail, lunch, or dinner) and ply (1-ply or 2-ply)</li>
            <li>Send your logo as PDF, PNG, or AI</li>
            <li>Approve the proof before production</li>
            <li>Receive delivery nationwide or collect from Ashbourne, Co. Meath</li>
          </ol>
          <p className="text-gray-600 leading-relaxed mt-4">
            PrintNPack prints custom napkins from our Ashbourne unit with delivery across Dublin, Meath, and all Irish counties.
            Based locally? See <Link href="/napkin-printing-ashbourne" className="text-amber-600 hover:underline">napkin printing Ashbourne</Link> or{' '}
            <Link href="/napkin-printing-dublin" className="text-amber-600 hover:underline">napkin printing Dublin</Link>.
          </p>
        </div>

        <section className="mt-12 p-6 bg-amber-50 rounded-2xl border border-amber-100">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Ready to order personalised napkins?</h2>
          <p className="text-gray-600 mb-4">Printed napkins from €0.05 per unit. Free quote, artwork support, and weekly delivery available.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/products/printed-napkins" className="inline-flex items-center bg-amber-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-amber-700 transition-colors">Order Printed Napkins</Link>
            <Link href="/napkins-ireland" className="inline-flex items-center bg-white text-gray-800 font-semibold px-6 py-3 rounded-xl border border-gray-300 hover:border-gray-400 transition-colors">Napkins Ireland Hub</Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
