import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import RelatedSeoLinks from '../../components/seo/RelatedSeoLinks';
import { SITE_URL as siteUrl } from '../../lib/site';

const slug = 'roll-up-banners-ireland-guide';
const PAGE_URL = `${siteUrl}/blog/${slug}`;
const heroImage = '/ifa/product/rollup/1.png';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Roll Up Banners Ireland: Sizes, Pull Up vs Roller Banners & Cost Guide',
  description:
    'How to choose roll up banners in Ireland — 850, 1000 and 1200 mm sizes, pull up vs roller banner names, complete units from €80 with a heavy cassette, artwork reprints from €35, and extra wide XXL up to €450.',
  image: `${siteUrl}${heroImage}`,
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
      name: 'What size roll up banner is most popular in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '1000 × 2000 mm is the standard Irish trade show size. 850 mm suits reception desks; 1200 mm is used for wider corporate displays.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is a pull up banner the same as a roll up banner?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Pull up banner, roll up banner and roller banner are the same retractable indoor stand. The graphic stores in an aluminium cassette with a carry bag.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much do roll up banners cost in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Complete roll up banners start from €80 with a heavy cassette included. Artwork reprints (graphic only) start from €35. Extra wide XXL banners go up to €450 for 3 m × 2 m.',
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
    { '@type': 'ListItem', position: 3, name: 'Roll Up Banners Ireland Guide', item: PAGE_URL },
  ],
};

export default function RollUpBannersIrelandGuide() {
  const title = 'Roll Up Banners Ireland: Sizes, Pull Up vs Roller Banners & Cost';
  const description =
    'Choose roll up banners in Ireland — 850, 1000 and 1200 mm, pull up vs roller banner names, complete units from €80 with a heavy cassette, artwork reprints from €35, and extra wide XXL up to €450 for 3 m × 2 m.';

  return (
    <Layout>
      <Head>
        <title>{title} | PrintNPack</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={`${siteUrl}${heroImage}`} />
        <meta property="og:locale" content="en_IE" />
        <meta property="article:published_time" content="2026-08-26" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      </Head>

      <article className="bg-white">
        <header className="border-b border-slate-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 lg:py-14">
            <p className="text-sm font-medium text-orange-600 mb-3">
              <Link href="/blog" className="hover:underline">Print Guide</Link>
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-4">{title}</h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">{description}</p>
            <p className="text-sm text-slate-400">Updated 26 August 2026 · 7 min read</p>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-50 mb-10">
            <Image
              src={heroImage}
              alt="Roll up banners Ireland — pull up banner with aluminium stand"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          <p className="text-slate-700 leading-relaxed mb-6">
            If you searched <strong>roll up banners Ireland</strong>, <strong>pull up banners</strong> or{' '}
            <strong>roller banners</strong>, you are looking at the same product: a retractable indoor display that
            sets up in under a minute. This guide covers the sizes Irish exhibitors actually order, what they cost,
            and when a 2 metre extra wide stand is the better buy.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Pull up vs roll up vs roller banner</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Irish printers and buyers use the three names interchangeably. The hardware is an aluminium cassette,
            a telescopic pole, a printed graphic and a carry bag. There is no functional difference between a
            “pull up banner Dublin” and a “roll up banner Ireland” listing — only the search term. PrintNPack prints
            them in Ashbourne, Co. Meath.{' '}
            <Link href="/roll-up-banners-ireland" className="text-orange-600 hover:underline font-medium">
              Order roll up banners from €80
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Standard roll up banner sizes in Ireland</h2>
          <ul className="list-disc pl-6 text-slate-700 mb-6 space-y-2">
            <li><strong>850 × 2000 mm</strong> — compact reception desks, clinics, small booths.</li>
            <li><strong>1000 × 2000 mm</strong> — the default Irish trade show size.</li>
            <li><strong>1200 × 2000 mm</strong> — wider corporate foyer and retail displays.</li>
            <li><strong>2000 mm extra wide</strong> — XL / XXL / XXXL up to 3 m high for exhibition halls.</li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-6">
            If you only remember one size, remember 1000 mm wide. It fits most shell-scheme stands at RDS and
            regional exhibitions without dominating a 3 m booth.{' '}
            <Link href="/blog/banner-sizes-ireland" className="text-orange-600 hover:underline font-medium">
              Full banner sizes guide
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">How much do roll up banners cost?</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Complete roll up banners start from <strong>€80 with a heavy cassette included</strong>. Artwork reprints
            (graphic only, no stand) start from <strong>€35</strong>. Extra wide XXL banners go up to{' '}
            <strong>€450 for 3 m × 2 m</strong>. There is no minimum order — one banner for one event is normal. For
            Dublin delivery, Ashbourne collection and 2–3 day print times see{' '}
            <Link href="/blog/roll-up-banner-printing-ireland" className="text-orange-600 hover:underline font-medium">
              roll up banner printing Ireland
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Dublin, Cork, Galway and nationwide</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            We deliver roll up banners across Dublin city and county, Cork, Galway, Limerick and every Republic
            county. Meath customers can collect from Unit 14 Ashbourne Business Centre. Standard print time is 2–3
            business days after you approve the proof; 24–48 hour rush is often possible when artwork is a
            print-ready PDF.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">When to order extra wide instead</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Choose extra wide when a standard 85–120 cm stand will disappear across a hall — product launches,
            6 m exhibition stands, hotel conference backdrops. Extra wide banners are indoor only and B1 fire
            certified.{' '}
            <Link href="/extra-wide-roll-up-banners-ireland" className="text-orange-600 hover:underline font-medium">
              Extra wide roll up banners Ireland
            </Link>
            . For fences and shop fronts use{' '}
            <Link href="/vinyl-banners" className="text-orange-600 hover:underline font-medium">PVC vinyl banners</Link>,
            not a roll up.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Artwork that prints cleanly</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Send a PDF at the final size, 150–300 dpi, with 20–30 mm of extra graphic at the bottom that tucks into
            the cassette. Keep logos and phone numbers out of the top 50 mm (pole rail) and the bottom roll. We send
            a proof before print.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">Roll up banners Ireland FAQs</h2>
          <div className="space-y-3 mb-10">
            <details className="group border border-slate-200 rounded-xl overflow-hidden bg-white">
              <summary className="cursor-pointer px-4 py-3 bg-slate-50 hover:bg-slate-100 font-semibold text-slate-900 text-sm">
                What size roll up banner is most popular in Ireland?
              </summary>
              <p className="px-4 py-3 text-sm text-slate-600 leading-relaxed">
                1000 × 2000 mm is the standard Irish trade show size. 850 mm suits reception desks; 1200 mm is used for wider corporate displays.
              </p>
            </details>
            <details className="group border border-slate-200 rounded-xl overflow-hidden bg-white">
              <summary className="cursor-pointer px-4 py-3 bg-slate-50 hover:bg-slate-100 font-semibold text-slate-900 text-sm">
                Is a pull up banner the same as a roll up banner?
              </summary>
              <p className="px-4 py-3 text-sm text-slate-600 leading-relaxed">
                Yes. Pull up banner, roll up banner and roller banner are the same retractable indoor stand. The graphic stores in an aluminium cassette with a carry bag.
              </p>
            </details>
            <details className="group border border-slate-200 rounded-xl overflow-hidden bg-white">
              <summary className="cursor-pointer px-4 py-3 bg-slate-50 hover:bg-slate-100 font-semibold text-slate-900 text-sm">
                How much do roll up banners cost in Ireland?
              </summary>
              <p className="px-4 py-3 text-sm text-slate-600 leading-relaxed">
                Complete roll up banners start from €80 with a heavy cassette included. Artwork reprints (graphic only) start from €35. Extra wide XXL banners go up to €450 for 3 m × 2 m.
              </p>
            </details>
          </div>

          <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6 mt-10">
            <h2 className="text-xl font-bold text-slate-900 mb-2">Order roll up banners in Ireland</h2>
            <p className="text-slate-700 mb-4">
              From €80 with a heavy cassette. Artwork reprints from €35. Printed in Ashbourne, delivered nationwide.
            </p>
            <Link
              href="/roll-up-banners-ireland"
              className="inline-flex items-center bg-orange-600 hover:bg-orange-700 text-white font-semibold px-5 py-3 rounded-xl"
            >
              View roll up banners
            </Link>
          </div>
        </div>
      </article>

      <RelatedSeoLinks
        links={[
          { href: '/blog/roll-up-banner-printing-ireland', label: 'Roll Up Banner Printing', desc: 'Cost, Dublin & turnaround' },
          { href: '/roll-up-banners-ireland', label: 'Roll Up Banners Ireland', desc: 'From €80 with heavy cassette' },
          { href: '/extra-wide-roll-up-banners-ireland', label: 'Extra Wide Roll Ups', desc: '2m XL to 3m high' },
          { href: '/banners-ireland', label: 'Banners Ireland', desc: 'PVC and exhibition printing' },
          { href: '/blog/banner-sizes-ireland', label: 'Banner Sizes Guide', desc: 'PVC and roll-up dimensions' },
        ]}
      />
    </Layout>
  );
}
