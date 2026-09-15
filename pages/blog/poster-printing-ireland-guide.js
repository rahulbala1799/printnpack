import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/poster-printing-ireland-guide`;
const HERO_IMAGE = '/ifa/product/Poster/single_poster.jpg';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Poster Printing Ireland: Sizes A4–A0, Paper, Cost & Turnaround',
  description:
    'How to order poster prints in Ireland — A4, A3, A2, A1 and A0 sizes, 170gsm vs 200gsm, from €8, no minimum order, 1–3 day print from Ashbourne.',
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
      name: 'How much does poster printing cost in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Custom poster prints start from around €8 depending on size and paper. A4 and A3 are the lowest cost; A1 and A0 cost more. No minimum order — single posters are fine. Bulk discounts apply for larger runs.',
      },
    },
    {
      '@type': 'Question',
      name: 'What poster sizes can I print?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standard sizes are A4, A3, A2, A1 and A0, plus 40×60 cm, 50×70 cm, 60×90 cm and 70×100 cm. Custom widths up to 1.5 m. Printed in Ashbourne with nationwide Ireland delivery.',
      },
    },
  ],
};

const sizeRows = [
  { size: 'A4 (210 × 297 mm)', use: 'Notices, menus, small window posters' },
  { size: 'A3 (297 × 420 mm)', use: 'Retail displays, event flyers as posters' },
  { size: 'A2 (420 × 594 mm)', use: 'Shop windows and foyer advertising' },
  { size: 'A1 (594 × 841 mm)', use: 'Most popular event and retail poster' },
  { size: 'A0 (841 × 1189 mm)', use: 'Large indoor advertising and exhibitions' },
];

export default function PosterPrintingIrelandGuide() {
  const title = 'Poster Printing Ireland: Sizes A4–A0, Paper, Cost & Turnaround';
  const description =
    'Poster printing Ireland — custom poster prints from A4 to A0 on 170gsm or 200gsm paper. From €8, no minimum, 1–3 day turnaround from Ashbourne, nationwide delivery.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="poster printing ireland, poster prints ireland, print posters ireland, custom posters, customisable posters, A1 poster printing, A0 posters ireland" />
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
          <span className="text-slate-900">Poster Printing Guide</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">Print Guide</span>
          <span className="text-slate-400 text-sm">15 Sep 2026 · 6 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">{title}</h1>

        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-slate-50 mb-10">
          <Image src={HERO_IMAGE} alt="Poster printing Ireland — custom A1 poster print" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 672px" />
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-gray-600 leading-relaxed">
            Searches for <strong>poster printing Ireland</strong>, <strong>poster prints</strong> and{' '}
            <strong>print posters Ireland</strong> all need the same thing: sharp indoor posters on decent paper,
            in a size that fits a frame or window, without a huge minimum order. PrintNPack prints them in Ashbourne
            from a single copy.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Poster sizes we print</h2>
          <div className="overflow-x-auto my-6 not-prose">
            <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Size</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Typical use</th>
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
            Custom sizes up to 1.5 m wide are available. Configure a quote on{' '}
            <Link href="/posters" className="text-blue-600 hover:underline">poster printing</Link>.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Paper and finish</h2>
          <p className="text-gray-600 leading-relaxed">
            We print on 170gsm and 200gsm premium satin with eco-solvent inks. Matt or gloss lamination is optional
            for shop windows and high-traffic foyers. These posters are for indoor and short-term outdoor use — for
            long-life outdoor advertising use{' '}
            <Link href="/vinyl-banners" className="text-blue-600 hover:underline">PVC banners</Link> instead.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Cost and turnaround</h2>
          <p className="text-gray-600 leading-relaxed">
            Poster prints start from around <strong>€8</strong>. There is <strong>no minimum order</strong>. Standard
            production is 1–3 business days, with rush available. Delivery nationwide or collect in Ashbourne.
          </p>
        </div>

        <section className="mt-12 p-6 bg-blue-50 rounded-2xl border border-blue-100">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Print posters in Ireland</h2>
          <p className="text-gray-600 mb-4">A4 to A0, from €8, no minimum — configure a quote or call +353 89 415 7369.</p>
          <Link href="/posters" className="inline-flex items-center bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors">Order poster prints</Link>
        </section>
      </main>
    </Layout>
  );
}
