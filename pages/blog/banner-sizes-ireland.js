import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/banner-sizes-ireland`;

const pvcSizes = [
  { size: '2ft × 4ft (60 × 120 cm)', use: 'Shop window, small sale sign, directional signage', from: '€25' },
  { size: '3ft × 6ft (90 × 180 cm)', use: 'Most popular outdoor size — shop fronts, events, sports', from: '€45' },
  { size: '4ft × 8ft (120 × 240 cm)', use: 'Large shop-front, building wrap, festival backdrops', from: '€70' },
  { size: '5ft × 10ft (150 × 300 cm)', use: 'Extra-large outdoor advertising, scaffolding', from: '€120' },
  { size: 'Custom up to 5m wide', use: 'Bespoke widths and lengths — quote on request', from: 'Quote' },
];

const rollUpSizes = [
  { size: '850mm × 2000mm', use: 'Compact roll-up — reception desks, small exhibitions', from: '€80' },
  { size: '1000mm × 2000mm', use: 'Standard trade show width — most popular', from: '€80' },
  { size: '1200mm × 2000mm', use: 'Wide roll-up — corporate events, retail displays', from: '€80' },
  { size: '2000 × 2000 mm (XL extra wide)', use: '2m extra-wide exhibition backdrop', from: '€398.96' },
  { size: '2000 × 3000 mm (XXXL extra wide)', use: '3 m × 2 m extra-wide hall backdrop', from: '€450' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Banner Sizes Ireland: PVC Outdoor & Roll-Up Banner Size Guide',
  description:
    'Standard PVC banner sizes (2×4, 3×6, 4×8, 5×10) and roll-up banner dimensions for Irish shops, schools, and events — with pricing guide and size recommendations.',
  image: `${siteUrl}/ifa/product/banner/20221019_184306722822_e66498_Promo-banner.webp`,
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
      name: 'What is the most common outdoor banner size in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The 3ft × 6ft (90 × 180 cm) PVC banner is the most popular outdoor size for Irish shop fronts, events, and sports clubs. The 2ft × 4ft size is common for smaller window and directional signs.',
      },
    },
    {
      '@type': 'Question',
      name: 'What size roll-up banner do I need for a trade show?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The 1000mm × 2000mm roll-up banner is the standard trade show size in Ireland. Use 850mm width for compact stands or 1200mm for a wider corporate display.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I order a custom banner size?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. PrintNPack prints PVC banners in custom sizes up to 5m wide, and roll-up banners up to 1500mm × 3000mm. Contact us with your exact dimensions for a quote.',
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
    { '@type': 'ListItem', position: 3, name: 'Banner Sizes Ireland', item: PAGE_URL },
  ],
};

export default function BannerSizesIreland() {
  const title = 'Banner Sizes Ireland: PVC Outdoor & Roll-Up Banner Size Guide';
  const description =
    'Which banner size do you need? Standard PVC sizes (2×4, 3×6, 4×8, 5×10) and roll-up dimensions (850mm, 1000mm, 1200mm) for Irish shops, schools, GAA clubs, and trade shows — with pricing from €25.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="banner sizes ireland, outdoor banner sizes, PVC banner sizes, 3x6 banner, 4x8 banner, roll up banner sizes, common banner sizes ireland, printed banner dimensions" />
        <meta name="author" content="PrintNPack Ireland" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:site_name" content="PrintNPack Ireland" />
        <meta property="og:locale" content="en_IE" />
        <meta property="og:image" content={`${siteUrl}/ifa/product/banner/20221019_184306722822_e66498_Promo-banner.webp`} />
        <meta property="article:published_time" content="2026-06-21" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${siteUrl}/ifa/product/banner/20221019_184306722822_e66498_Promo-banner.webp`} />
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
          <span className="text-slate-900">Banner Sizes Ireland</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">Print Guide</span>
          <span className="text-slate-400 text-sm">21 Jun 2026 · 6 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">{title}</h1>

        <div className="relative rounded-2xl overflow-hidden h-64 sm:h-80 mb-8 border border-slate-100">
          <Image
            src="/ifa/product/banner/20221019_184306722822_e66498_Promo-banner.webp"
            alt="Standard banner sizes Ireland — PVC outdoor and roll-up banners"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Ordering the wrong banner size is one of the most common mistakes Irish businesses make.
            A banner that is too small disappears on a shop front; one that is too large costs more
            than necessary and is harder to hang. This guide covers every standard{' '}
            <strong>outdoor PVC banner size</strong> and <strong>roll-up banner dimension</strong> we
            print for customers across Ireland.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Browse our{' '}
            <Link href="/banners-ireland" className="text-blue-600 hover:underline font-medium">banners Ireland</Link>{' '}
            hub, order{' '}
            <Link href="/vinyl-banners" className="text-blue-600 hover:underline font-medium">PVC banners</Link>{' '}
            or{' '}
            <Link href="/roll-up-banners-ireland" className="text-blue-600 hover:underline font-medium">roll-up banners</Link>, or
            read the full{' '}
            <Link href="/banner-faq-ireland" className="text-blue-600 hover:underline font-medium">banner FAQ</Link>{' '}
            for pricing, materials, and artwork tips.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Standard outdoor PVC banner sizes</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            These are the most common PVC banner sizes for Irish shop fronts, events, sports clubs,
            and outdoor advertising. All sizes include hemmed edges and reinforced eyelets as standard.
          </p>

          <div className="overflow-x-auto mb-8 not-prose">
            <table className="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">Size</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">Best for</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">From</th>
                </tr>
              </thead>
              <tbody>
                {pvcSizes.map((row, i) => (
                  <tr key={row.size} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="px-4 py-3 font-medium text-slate-900">{row.size}</td>
                    <td className="px-4 py-3 text-slate-600">{row.use}</td>
                    <td className="px-4 py-3 text-slate-700 font-medium">{row.from}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-slate-700 leading-relaxed mb-8">
            The <strong>3ft × 6ft banner</strong> is the sweet spot for most Irish outdoor use — large
            enough to read from across a car park or street, but affordable for single-event orders.
            For windy locations (fences, scaffolding, GAA grounds), ask about{' '}
            <Link href="/vinyl-banners" className="text-blue-600 hover:underline font-medium">mesh PVC banners</Link>{' '}
            which let wind pass through without tearing.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Roll-up banner sizes</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Roll-up (pull-up) banners are measured by width × height. The graphic retracts into a
            base for easy transport — ideal for trade shows, reception areas, and corporate events.
          </p>

          <div className="overflow-x-auto mb-8 not-prose">
            <table className="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">Size</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">Best for</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">From</th>
                </tr>
              </thead>
              <tbody>
                {rollUpSizes.map((row, i) => (
                  <tr key={row.size} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="px-4 py-3 font-medium text-slate-900">{row.size}</td>
                    <td className="px-4 py-3 text-slate-600">{row.use}</td>
                    <td className="px-4 py-3 text-slate-700 font-medium">{row.from}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">How to choose the right banner size</h2>
          <ul className="list-disc pl-6 text-slate-700 mb-6 space-y-2">
            <li><strong>Shop sale or window sign:</strong> 2ft × 4ft — readable from the pavement</li>
            <li><strong>Shop front or event entrance:</strong> 3ft × 6ft — the most versatile outdoor size</li>
            <li><strong>Large building or festival:</strong> 4ft × 8ft or 5ft × 10ft</li>
            <li><strong>Trade show or exhibition:</strong> 1000mm roll-up — or a 2m extra wide roll up for large booths</li>
            <li><strong>Reception desk or clinic:</strong> 850mm roll-up — compact and portable</li>
            <li><strong>GAA club or sports sponsor board:</strong> 3ft × 6ft PVC or 4ft × 8ft mesh for windy pitches</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Metric vs imperial — what Irish printers use</h2>
          <p className="text-slate-700 leading-relaxed mb-8">
            Irish banner printers typically quote in feet (2×4, 3×6, 4×8) for outdoor PVC banners,
            and millimetres (850mm, 1000mm, 1200mm) for roll-up banners. If you have a space measured
            in metres, divide by 0.3048 to convert to feet — or send us the dimensions and we will
            recommend the closest standard size.
          </p>

          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-8 not-prose">
            <h3 className="text-lg font-bold text-slate-900 mb-2">Not sure which size to order?</h3>
            <p className="text-slate-700 text-sm leading-relaxed mb-4">
              Tell us where the banner will hang and what message you need to display — we will
              recommend the right size and material. No minimum order, artwork help included.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/quote?product=Vinyl+Banners" className="inline-flex items-center bg-blue-600 text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-blue-700 transition-colors text-sm">
                Get a Free Quote
              </Link>
              <Link href="/banner-faq-ireland" className="inline-flex items-center bg-white text-blue-700 font-semibold px-5 py-2.5 rounded-xl border border-blue-200 hover:border-blue-300 transition-colors text-sm">
                Browse Banner FAQ
              </Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Related guides</h2>
          <ul className="list-disc pl-6 text-slate-700 mb-8 space-y-2">
            <li><Link href="/blog/banner-printing-ireland-guide" className="text-blue-600 hover:underline font-medium">Banner printing cost, materials &amp; turnaround guide</Link></li>
            <li><Link href="/blog/roll-up-banner-printing-ireland" className="text-blue-600 hover:underline font-medium">Roll up banner printing Ireland</Link> — from €80 with cassette, artwork from €35</li>
            <li><Link href="/roll-up-banners-ireland" className="text-blue-600 hover:underline font-medium">Roll up banners Ireland</Link> — pull up &amp; roller banners with stand</li>
            <li><Link href="/extra-wide-roll-up-banners-ireland" className="text-blue-600 hover:underline font-medium">Extra wide 2m roll up banners</Link> — XL to 3m high for exhibitions</li>
            <li><Link href="/blog/extra-wide-roll-up-banners-ireland-guide" className="text-blue-600 hover:underline font-medium">Extra wide roll up banner size &amp; delivery guide</Link></li>
            <li><Link href="/blog/trade-show-banners-decals-ireland" className="text-blue-600 hover:underline font-medium">Trade show banners &amp; custom decals guide</Link></li>
            <li><Link href="/banner-printing-ashbourne" className="text-blue-600 hover:underline font-medium">Banner printing Ashbourne</Link> — local collection from our Meath unit</li>
            <li><Link href="/banner-printing-dublin" className="text-blue-600 hover:underline font-medium">Banner printing Dublin</Link> — delivery across Dublin city &amp; county</li>
          </ul>
        </div>

        <div className="mt-10 pt-8 border-t border-slate-200">
          <Link href="/blog" className="text-slate-500 hover:text-slate-700 text-sm font-medium">← Back to all articles</Link>
        </div>
      </main>
    </Layout>
  );
}
