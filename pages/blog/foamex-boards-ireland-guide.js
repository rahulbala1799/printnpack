import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/foamex-boards-ireland-guide`;
const HERO_IMAGE = '/ifa/product/foamex/3mm-Printed-Foamex-Boards-XL-Displays.avif';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Foamex Boards Ireland: Thickness, Sizes & Signage Guide',
  description:
    'A practical guide to foamex boards in Ireland — 3mm vs 5mm vs 10mm, standard sheet sizes, indoor vs outdoor use, foamex vs correx, and how to order custom PVC foam signage.',
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
      name: 'What thickness foamex should I use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '3mm for lightweight wall signs, 5mm for exhibitions and retail (most popular), 10mm for freestanding displays needing maximum rigidity.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can foamex boards be used outdoors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Foamex is designed for indoor use. It can be used outdoors for 1–2 days in dry conditions. For permanent outdoor signage, use Correx boards or PVC banners.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the standard foamex sheet size in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The standard foamex sheet size is 2440mm × 1220mm (8ft × 4ft). Boards are cut to custom sizes within this maximum.',
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
    { '@type': 'ListItem', position: 3, name: 'Foamex Boards Guide', item: PAGE_URL },
  ],
};

export default function FoamexBoardsIrelandGuide() {
  const title = 'Foamex Boards Ireland: Thickness, Sizes & Signage Guide';
  const description =
    'Everything Irish businesses need to know about foamex boards — 3mm vs 5mm vs 10mm, sheet sizes, indoor vs outdoor, foamex vs correx, and how to order custom PVC foam signage.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="foamex boards ireland, foamex printing, 5mm foamex, foam board printing, pvc foamex, foamex signs, foamex panels, exhibition panels ireland, foamex thickness" />
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
          <span className="text-slate-900">Foamex Boards Guide</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-violet-50 text-violet-700 text-xs font-semibold px-3 py-1 rounded-full">Signage Guide</span>
          <span className="text-slate-400 text-sm">21 Jun 2026 · 7 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">{title}</h1>

        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-gray-100 mb-10">
          <Image src={HERO_IMAGE} alt="Foamex boards Ireland — custom PVC foam board signage" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 672px" />
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-gray-600 leading-relaxed">
            Foamex boards are one of the most versatile signage materials for Irish businesses — lightweight,
            rigid, and print-ready for shop displays, exhibition panels, and office graphics.
            This guide covers thickness, sizes, materials, and how to order from an Irish printer.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What is foamex?</h2>
          <p className="text-gray-600 leading-relaxed">
            Foamex (also sold as Forex or PVC foam board) is expanded polyvinyl chloride foam — a lightweight,
            rigid white sheet with a smooth surface ideal for direct UV printing. It is easy to cut, drill, and mount,
            making it the go-to material for indoor signage and exhibition graphics in Ireland.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Choosing the right thickness</h2>
          <p className="text-gray-600 leading-relaxed">
            <strong>3mm foamex</strong> is the lightest option — good for wall-mounted signs, menu boards,
            and short-term displays where weight matters.{' '}
            <strong>5mm foamex</strong> is the most popular choice for exhibition panels and retail signage —
            stiff enough to stand upright without bending.{' '}
            <strong>10mm foamex</strong> offers maximum rigidity for freestanding displays and premium presentations.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Not sure? <Link href="/foamex-boards" className="text-violet-600 hover:underline">Request a quote</Link> and
            we will recommend the best thickness for your application. See our{' '}
            <Link href="/foamex-faq-ireland" className="text-violet-600 hover:underline">foamex FAQ</Link> for more detail.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Standard sheet sizes</h2>
          <p className="text-gray-600 leading-relaxed">
            The maximum foamex sheet size is <strong>2440mm × 1220mm (8ft × 4ft)</strong>.
            We cut to custom dimensions within this — popular sizes include A0, A1, A2, and bespoke panels
            for retail displays and exhibition stands.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Foamex vs correx — which to choose?</h2>
          <p className="text-gray-600 leading-relaxed">
            <Link href="/foamex-boards" className="text-violet-600 hover:underline">Foamex</Link> is rigid PVC foam —
            best for indoor signage with sharp, photo-quality graphics.{' '}
            <Link href="/correx-boards" className="text-violet-600 hover:underline">Correx</Link> is fluted corrugated
            plastic — weather-resistant and better for permanent outdoor estate agent boards and site signage.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Rule of thumb: foamex for indoor exhibitions and retail; correx for outdoor durability.
            Foamex can be used outdoors for 1–2 days at dry events.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Common foamex applications</h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Exhibition stand panels and trade show graphics</li>
            <li>Shop point-of-sale displays and window boards</li>
            <li>Office reception signs and directional boards</li>
            <li>Menu boards and promotional displays</li>
            <li>Event branding and conference signage</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mt-4">
            Pair foamex panels with <Link href="/roll-up-banners" className="text-violet-600 hover:underline">roll-up banners</Link> for
            a complete exhibition package.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How much do foamex boards cost?</h2>
          <p className="text-gray-600 leading-relaxed">
            Printed foamex boards in Ireland typically start from around <strong>€15–€28 per sheet</strong> depending
            on thickness and size. 5mm is the most commonly ordered thickness. Contact PrintNPack for a
            free quote on your specific dimensions and quantity.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How to order foamex boards in Ireland</h2>
          <ol className="list-decimal pl-6 text-gray-600 space-y-2">
            <li>Choose thickness (3mm, 5mm, or 10mm) and dimensions</li>
            <li>Send print-ready artwork as PDF, AI, or high-res PNG</li>
            <li>Approve the proof before production</li>
            <li>Receive delivery nationwide or collect from Ashbourne, Co. Meath</li>
          </ol>
          <p className="text-gray-600 leading-relaxed mt-4">
            Based in Meath or Dublin? See{' '}
            <Link href="/foamex-printing-ashbourne" className="text-violet-600 hover:underline">foamex printing Ashbourne</Link> or{' '}
            <Link href="/foamex-printing-dublin" className="text-violet-600 hover:underline">foamex printing Dublin</Link>.
          </p>
        </div>

        <section className="mt-12 p-6 bg-violet-50 rounded-2xl border border-violet-100">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Ready to order foamex boards?</h2>
          <p className="text-gray-600 mb-4">3mm, 5mm & 10mm foamex. UV print with optional laminate. Free quote and design support.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/foamex-boards" className="inline-flex items-center bg-violet-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-violet-700 transition-colors">Order Foamex Boards</Link>
            <Link href="/foamex-ireland" className="inline-flex items-center bg-white text-gray-800 font-semibold px-6 py-3 rounded-xl border border-gray-300 hover:border-gray-400 transition-colors">Foamex Ireland Hub</Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
