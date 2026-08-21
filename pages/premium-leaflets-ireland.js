import React from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { SITE_URL } from '../lib/site';
import { buildProductLd } from '../lib/schema';
import PremiumLeafletConfigurator from '../components/leaflets/PremiumLeafletConfigurator';
import RelatedSeoLinks from '../components/seo/RelatedSeoLinks';

const PAGE_URL = `${SITE_URL}/premium-leaflets-ireland`;
const HERO_IMAGE = '/images/products/premium-leaflets/premium-leaflets-ireland-metallic-gold.jpg';

const highlights = [
  'Unique materials guaranteed to make you stand out',
  'High-quality digital print',
  'White colours cannot be printed on metallic or pearl paper',
];

const seoSections = [
  {
    title: 'Premium Leaflet Printing on Special Materials',
    paragraphs: [
      'Make your marketing impossible to ignore with our **premium leaflet printing on special materials**, available for businesses, events and luxury brands throughout Ireland. Designed for customers who want something more distinctive than a standard paper leaflet, these high-quality printed leaflets combine striking materials, rich colours and specialist finishes to create a memorable first impression.',
      'Choose from an exclusive range of premium stocks, including **metallic gold paper, metallic silver paper, pearl-white card, marble-effect paper and natural sulphate board**. Each material has its own distinctive texture, colour and reflective finish, allowing you to create luxury leaflets that complement your brand and immediately communicate quality.',
    ],
  },
  {
    title: 'Metallic Leaflet Printing for Luxury Brands',
    paragraphs: [
      'Our **metallic leaflet printing** is ideal for wedding invitations, hotel and spa promotions, luxury property launches, premium product brochures, jewellery brands, restaurants, beauty businesses and exclusive events. Metallic gold and silver materials reflect light beautifully, while pearl and marble-white stocks create a softer, elegant sheen. Natural sulphate board offers a tactile, organic appearance that works particularly well for premium food, drinks, fashion and sustainable brands.',
      'Your design can be printed using carefully selected contrasting colours to ensure important information remains clear and easy to read. Dark black, deep emerald, navy, burgundy and rich teal inks work particularly well on metallic and pearlescent materials. Depending on your chosen specification, additional finishes such as **metallic ink, foil detailing, embossing, debossing or spot gloss** can be used to add further depth and visual impact.',
    ],
  },
  {
    title: 'Bespoke Leaflets — Sizes, Formats & Ireland Delivery',
    paragraphs: [
      'Available in a range of sizes and formats, our bespoke leaflets can be produced for small exclusive campaigns or larger promotional requirements. We will help you select the most suitable material, print finish and colour combination for your artwork, ensuring the finished product looks professional and performs exactly as intended.',
      'Whether you are launching a luxury development, promoting a five-star hotel, creating exclusive wedding stationery or presenting a premium product, our **special material leaflet printing in Ireland** gives your brand a finish that standard paper simply cannot achieve.',
    ],
  },
];

const productLd = buildProductLd({
  name: 'Premium Leaflets Ireland',
  description:
    'Premium leaflet printing on special materials in Ireland — metallic gold and silver, pearl-white, marble-effect and natural sulphate board. Luxury leaflet printing Dublin and nationwide.',
  image: `${SITE_URL}${HERO_IMAGE}`,
  url: PAGE_URL,
});

const webPageLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Premium Leaflet Printing Ireland | Special Material Flyers Dublin',
  description:
    'Premium leaflet printing on special materials in Ireland. Metallic gold and silver, pearl-white, marble-effect and sulphate board. Luxury leaflet printing Dublin and nationwide.',
  url: PAGE_URL,
  inLanguage: 'en-IE',
  isPartOf: { '@type': 'WebSite', name: 'PrintNPack Ireland', url: SITE_URL },
  about: { '@type': 'Thing', name: 'Premium leaflet printing Ireland' },
  dateModified: '2026-08-20',
};

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Products', item: `${SITE_URL}/products` },
    { '@type': 'ListItem', position: 3, name: 'Premium Leaflets', item: PAGE_URL },
  ],
};

export default function PremiumLeafletsIreland() {
  const title = 'Premium Leaflet Printing Ireland | Special Material Flyers Dublin';
  const description =
    'Premium leaflet printing on special materials in Ireland. Metallic gold and silver, pearl-white, marble-effect and sulphate board. Luxury leaflet printing Dublin and nationwide.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="premium leaflet printing ireland, luxury leaflet printing dublin, special material flyers ireland, metallic leaflet printing ireland, metallic gold paper leaflets, pearl marble leaflets ireland, sulphate board flyers, bespoke leaflets ireland"
        />
        <meta name="author" content="PrintNPack Ireland" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:site_name" content="PrintNPack Ireland" />
        <meta property="og:locale" content="en_IE" />
        <meta property="og:image" content={`${SITE_URL}${HERO_IMAGE}`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${SITE_URL}${HERO_IMAGE}`} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }} />
      </Head>

      <nav className="bg-violet-50 border-b border-violet-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-stone-500">
            <li><Link href="/" className="hover:text-stone-700">Home</Link></li>
            <li>/</li>
            <li><Link href="/products" className="hover:text-stone-700">Products</Link></li>
            <li>/</li>
            <li className="text-stone-800 font-medium">Premium Leaflets</li>
          </ol>
        </div>
      </nav>

      <section className="py-14 lg:py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-sm font-semibold text-violet-600 uppercase tracking-wider mb-2">Quote builder</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-3">Configure your premium leaflet</h2>
            <p className="text-stone-600 max-w-2xl leading-relaxed">
              Select your material, size and printing options, then request a quotation.
            </p>
          </div>
          <PremiumLeafletConfigurator />
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-violet-950 via-indigo-950 to-stone-950 border-b border-violet-900/50 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(167,139,250,0.18),_transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <p className="text-sm font-semibold text-violet-300 uppercase tracking-[0.2em] mb-4">
            Special Material Flyers
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 max-w-4xl">
            Premium Leaflet Printing Ireland
          </h1>
          <p className="text-lg text-stone-300 leading-relaxed max-w-3xl mb-8">
            Print to impress with Special Material Flyers! Command attention with our metallic flyer finishes in
            white, gold and silver. Exude an aura of sophistication with our pearl marble finish. Looking for
            something more subtle? Need something that can withstand the test of time? Our smoothed cardboard
            flyers are as sturdy as they get. Not a fan of paper? Our synthetic paper flyers are a great
            alternative to paper — they&apos;re 100% tree free, tear-resistant and even waterproof!
          </p>
          <ul className="space-y-3 max-w-2xl">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-stone-200">
                <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-violet-500/30 text-violet-200 flex items-center justify-center">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-white border-t border-stone-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {seoSections.map((section) => (
            <article key={section.title} className="mb-12 last:mb-0">
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">{section.title}</h2>
              <div className="space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)} className="text-stone-600 leading-relaxed">
                    {paragraph.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
                      part.startsWith('**') && part.endsWith('**') ? (
                        <strong key={i} className="font-semibold text-stone-800">{part.slice(2, -2)}</strong>
                      ) : (
                        part
                      ),
                    )}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <RelatedSeoLinks
        title="More print products"
        links={[
          { href: '/services/leaflets', label: 'Leaflets', desc: 'Flat leaflet printing Ireland' },
          { href: '/posters', label: 'Posters', desc: 'Custom poster printing' },
          { href: '/printing-ireland', label: 'Printing Services', desc: 'Print services across Ireland' },
          { href: '/products', label: 'All Products', desc: 'Full print and packaging catalogue' },
        ]}
      />

      <section className="py-14 bg-violet-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Request a quotation</h2>
          <p className="text-stone-300 mb-6 leading-relaxed">
            Contact Print n Pack today for a quotation on luxury leaflet printing in Dublin and throughout Ireland.
            Send us your artwork or design brief, and our team will help you create a truly distinctive printed leaflet.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/quote"
              className="inline-flex items-center bg-white text-violet-700 font-semibold px-6 py-3 rounded-xl hover:bg-violet-50 transition-colors"
            >
              Request a Quote
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center bg-transparent text-white font-semibold px-6 py-3 rounded-xl border border-white/20 hover:border-white/40 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
