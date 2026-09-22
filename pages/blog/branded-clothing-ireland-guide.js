import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/branded-clothing-ireland-guide`;
const HERO_IMAGE = '/images/apparel/POLO SHIRT MOCK UP 1.jpg';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Branded Clothing Ireland: Promotional Wear, Workwear & Company Logos',
  description:
    'How Irish businesses buy branded clothing — promotional t-shirts, corporate polos, sports wear, company clothing with logo, embroidery vs print, pricing from €12, and nationwide delivery.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: { '@type': 'Organization', name: 'PrintNPack Ireland', logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` } },
  datePublished: '2026-09-15',
  dateModified: '2026-09-15',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the difference between promotional clothing and corporate workwear?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Promotional clothing is usually t-shirts and hoodies for events, merch and giveaways. Corporate branded clothing is typically polos and embroidered workwear worn daily by staff. PrintNPack supplies both from Ashbourne with nationwide Ireland delivery.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I get company clothing with a logo in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Screen print, digital print and embroidery are available on t-shirts, polos, sports wear, hoodies and hi-viz. T-shirts start from €15 for a chest print, minimum 5, same price S–3XL.',
      },
    },
  ],
};

export default function BrandedClothingIrelandGuide() {
  const title = 'Branded Clothing Ireland: Promotional Wear, Workwear & Company Logos';
  const description =
    'Buy branded clothing in Ireland — t-shirts from €15, polos from €19, sports wear from €16.50, hi-viz from €12. Same price S–3XL, 3–5 day turnaround from Ashbourne.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="branded clothing ireland, promotional clothing, company clothing with logo, branded clothing for business, custom workwear ireland, corporate branded clothing"
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
      </Head>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <Link href="/" className="hover:text-slate-700">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-slate-700">Blog</Link>
          <span>/</span>
          <span className="text-slate-900">Branded Clothing Guide</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">Apparel Guide</span>
          <span className="text-slate-400 text-sm">15 Sep 2026 · 7 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">{title}</h1>

        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-blue-50 mb-10">
          <Image src={HERO_IMAGE} alt="Branded clothing Ireland — custom polo with company logo" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 672px" />
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-gray-600 leading-relaxed">
            Irish searches for <strong>branded clothing</strong>, <strong>promotional clothing</strong> and{' '}
            <strong>company clothing with logo</strong> all land on the same need: garments that carry your brand
            for staff, events or merch. This guide explains what to order and how PrintNPack prints and embroiders
            clothing from Ashbourne for delivery nationwide.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Promotional clothing vs corporate workwear</h2>
          <p className="text-gray-600 leading-relaxed">
            <strong>Promotional clothing</strong> is usually cotton t-shirts and hoodies for launches, festivals,
            GAA clubs and giveaways — high-visibility print, often short-run. <strong>Corporate branded clothing</strong>{' '}
            is polos and embroidered workwear worn every day. Many Irish businesses order both: polos for the floor
            team and t-shirts for events. See{' '}
            <Link href="/clothing" className="text-blue-600 hover:underline">custom clothing Ireland</Link>.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Company clothing with a logo — print or embroidery?</h2>
          <p className="text-gray-600 leading-relaxed">
            Screen print suits large, colourful logos on t-shirts. Digital print is flexible for photos and small
            quantities. Embroidery suits polos and jackets where a stitched crest looks more professional. Send a
            vector logo if you have one; we proof before production.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What garments to stock first</h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li><strong>T-shirts</strong> — Fruit of the Loom Super Premium, from €15. <Link href="/clothing/custom-printed-tshirts-ireland" className="text-blue-600 hover:underline">Custom printed t-shirts</Link>.</li>
            <li><strong>Polo shirts</strong> — the default company clothing for retail, hospitality and offices. <Link href="/clothing/custom-polo-shirts-ireland" className="text-blue-600 hover:underline">Custom polo shirts</Link>.</li>
            <li><strong>Sportswear</strong> — GAA, soccer and running club kits from €16.50. <Link href="/clothing/custom-sportswear-ireland" className="text-blue-600 hover:underline">Custom sportswear Ireland</Link>.</li>
            <li><strong>Hoodies / sweatshirts</strong> — merch and winter staff wear. <Link href="/clothing/custom-hoodies-ireland" className="text-blue-600 hover:underline">Hoodies</Link> and <Link href="/clothing/custom-sweatshirts-ireland" className="text-blue-600 hover:underline">sweatshirts</Link>.</li>
            <li><strong>Hi-viz</strong> — site teams and outdoor events. <Link href="/clothing/custom-hiviz-workwear-ireland" className="text-blue-600 hover:underline">Hi-viz workwear</Link>.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Pricing and turnaround in Ireland</h2>
          <p className="text-gray-600 leading-relaxed">
            T-shirts start from <strong>€15</strong> for a chest print. Extra print areas +€1.50, 8% off each quantity step.
            Production is typically <strong>3–5 business days</strong> after proof
            approval, with delivery across Ireland from Ashbourne, Co. Meath. Full answers:{' '}
            <Link href="/clothing-faq-ireland" className="text-blue-600 hover:underline">clothing FAQ</Link>.
          </p>
        </div>

        <section className="mt-12 p-6 bg-blue-50 rounded-2xl border border-blue-100">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Ready to brand your team?</h2>
          <p className="text-gray-600 mb-4">T-shirts, polos, hoodies and hi-viz — free quote, Ireland-wide delivery.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/clothing" className="inline-flex items-center bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors">Order branded clothing</Link>
            <Link href="/clothing-faq-ireland" className="inline-flex items-center bg-white text-gray-800 font-semibold px-6 py-3 rounded-xl border border-gray-300">Clothing FAQ</Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
