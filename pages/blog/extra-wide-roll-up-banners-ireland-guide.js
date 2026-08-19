import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import RelatedSeoLinks from '../../components/seo/RelatedSeoLinks';
import { SITE_URL as siteUrl } from '../../lib/site';

const slug = 'extra-wide-roll-up-banners-ireland-guide';
const PAGE_URL = `${siteUrl}/blog/${slug}`;
const heroImage = '/ifa/product/extra-wide-rollup/hero-standout-3m.jpg';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Extra Wide Roll Up Banners Ireland: 2m XL Sizes, NI Delivery & Trade Show Guide',
  description:
    'How to choose XL, XXL and XXXL extra wide roll up banners in Ireland — 2m width, 3m height, B1 indoor venues, Northern Ireland and UK shipping, and when to use a standard roll up instead.',
  image: `${siteUrl}${heroImage}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: { '@type': 'Organization', name: 'PrintNPack Ireland', logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` } },
  datePublished: '2026-08-19',
  dateModified: '2026-08-19',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What size is an extra wide roll up banner?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Extra wide roll up banners from PrintNPack are 200 cm (2 metres) wide. Heights are XL 200 cm, XXL 250 cm and XXXL 300 cm (3 metres).',
      },
    },
    {
      '@type': 'Question',
      name: 'Do extra wide roller banners ship to Northern Ireland and the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. PrintNPack delivers extra wide roll up banners across Ireland and Northern Ireland, and can courier to the UK and EU. Units weigh about 14 kg so carriage is confirmed on the quote.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are extra wide pull up banners allowed in exhibition centres?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'These banners are indoor only and printed on B1 fire-certified Airtex 330, which most Irish, UK and European indoor venues require. Always check the venue spec sheet.',
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
    { '@type': 'ListItem', position: 3, name: 'Extra Wide Roll Up Banners Guide', item: PAGE_URL },
  ],
};

export default function ExtraWideRollUpGuide() {
  const title = 'Extra Wide Roll Up Banners Ireland: 2m XL Sizes, NI Delivery & Trade Shows';
  const description =
    'Choose 2m extra wide roll up banners for Irish, Northern Ireland and UK exhibitions — XL, XXL, XXXL sizes, B1 indoor material, and when a standard roll up is enough.';

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
        <meta property="article:published_time" content="2026-08-19" />
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
            <p className="text-sm text-slate-400">Updated 19 August 2026 · 7 min read</p>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-50 mb-10">
            <Image
              src={heroImage}
              alt="Extra wide 2m x 3m roll up banner Ireland — XXXL roller banner with Silver XL stand"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          <p className="text-slate-700 leading-relaxed mb-6">
            Standard roll up banners still win for reception desks and small booths. When the brief is a{' '}
            <strong>2 metre wide backdrop</strong> — a 3 metre-high wall at the RDS, a Belfast conference foyer, or a
            UK trade-show stand — you need an <strong>extra wide roll up banner</strong> (also searched as XL roller
            banner, giant pull up banner, or 200 cm roll up). This guide explains sizes, venues, and shipping from
            PrintNPack in Ashbourne, Co. Meath.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Extra wide roll up banner sizes</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            PrintNPack extra wide banners are all <strong>200 cm wide</strong>. Height is the variable:
          </p>
          <ul className="list-disc pl-6 text-slate-700 mb-6 space-y-2">
            <li><strong>XL — 200 × 200 cm</strong> from €398.96. Square footprint for compact exhibition booths and retail atriums.</li>
            <li><strong>XXL — 200 × 250 cm</strong> from €418.49. Taller conference and hotel foyer backdrops.</li>
            <li><strong>XXXL — 200 × 300 cm</strong> from €436.62. Full 3 metre extra wide roll up banner for large indoor halls.</li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-6">
            Every size includes the Silver XL aluminium stand, carry bag, and single-sided UV print on wrinkle-free
            Airtex 330. Order from one piece.{' '}
            <Link href="/extra-wide-roll-up-banners-ireland" className="text-orange-600 hover:underline font-medium">
              View extra wide roll up banners and prices
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Ireland, Northern Ireland, UK and Europe</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            We deliver extra wide roller banners across the Republic — Dublin, Cork, Galway, Limerick, Waterford and
            every county — with collection from Ashbourne for Meath and north Dublin. Northern Ireland is a regular
            route: Belfast, Derry, Newry, Lisburn and BT postcodes. UK mainland and EU courier is quoted per job
            because each unit is about 14 kg.
          </p>
          <p className="text-slate-700 leading-relaxed mb-6">
            If you are comparing printers in Belfast, Manchester or Amsterdam, you are still buying an indoor B1
            display — not an outdoor PVC banner. For fences and shop fronts use{' '}
            <Link href="/vinyl-banners" className="text-orange-600 hover:underline font-medium">PVC vinyl banners</Link>.
            For 85–120 cm portable stands use{' '}
            <Link href="/roll-up-banners" className="text-orange-600 hover:underline font-medium">standard roll up banners</Link>.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Where extra wide pull up banners work</h2>
          <ul className="list-disc pl-6 text-slate-700 mb-6 space-y-2">
            <li>Trade shows and exhibitions (RDS, Convention Centre Dublin, Belfast venues)</li>
            <li>Product launches and 6 m shell-scheme backdrops</li>
            <li>Shopping centre and hotel conference branding</li>
            <li>University open days and corporate AGMs</li>
            <li>Indoor retail promotions that need a 2 m visual wall</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">B1 fire rating and indoor-only use</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Extra wide roll ups are <strong>indoor only</strong>. Airtex 330 is B1 certified so venue managers in
            Ireland, the UK and much of Europe will typically accept them. Wind, rain and UV outdoors will damage the
            cassette and graphic — that job belongs to hemmed PVC or mesh.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Artwork tips for 2 m graphics</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Supply a print-ready PDF at 100% size (or 1:10 with 300 dpi equivalent), CMYK, fonts outlined, 3–5 mm
            bleed. Keep key logos above the bottom 20 cm so they are not lost in the cassette. We send a proof before
            UV print. More on dimensions:{' '}
            <Link href="/blog/banner-sizes-ireland" className="text-orange-600 hover:underline font-medium">banner sizes Ireland</Link>.
          </p>

          <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6 mb-10">
            <h3 className="text-lg font-bold text-slate-900 mb-2">Order a 2m extra wide roller banner</h3>
            <p className="text-slate-700 text-sm leading-relaxed mb-4">
              XL, XXL or XXXL — Silver XL stand included. Delivery across Ireland, Northern Ireland, UK and EU.
            </p>
            <Link
              href="/extra-wide-roll-up-banners-ireland"
              className="inline-flex items-center bg-orange-600 text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-orange-700 transition-colors text-sm"
            >
              Shop extra wide roll up banners
            </Link>
          </div>
        </div>
      </article>

      <RelatedSeoLinks
        links={[
          { href: '/extra-wide-roll-up-banners-ireland', label: 'Extra Wide Roll Up Banners', desc: '2m XL–XXXL from €398.96' },
          { href: '/roll-up-banners', label: 'Standard Roll Up Banners', desc: 'From €35 with stand' },
          { href: '/banners-ireland', label: 'Banners Ireland', desc: 'PVC and roll-up hub' },
          { href: '/blog/trade-show-banners-decals-ireland', label: 'Trade Show Banners Guide', desc: 'Exhibition marketing' },
          { href: '/banner-printing-dublin', label: 'Banner Printing Dublin', desc: 'City & county delivery' },
        ]}
      />
    </Layout>
  );
}
