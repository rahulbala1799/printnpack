import React from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_URL } from '../lib/site';
import { PLAIN_PRODUCTS } from '../data/plain-products';
import PackagingIcon, { isPlaceholderImage } from '../components/PackagingIcon';
import { buildProductListItem } from '../lib/schema';
import RelatedSeoLinks from '../components/seo/RelatedSeoLinks';
import { getRelatedWholesaleLinks } from '../data/wholesale-hub-links';
import {
  REFUSE_SACK_CATEGORY,
  REFUSE_SACK_HUB_CONFIG,
  REFUSE_SACK_HUB_FAQS,
  REFUSE_SACK_HUB_PATH,
  getRefuseSackDisplayName,
} from '../data/refuse-sacks-seo';

const PAGE_URL = `${SITE_URL}/refuse-sacks-ireland`;
const HERO_IMAGE = '/images/plain-packaging/150003.webp';
const DISCOUNT = 0.95;

const refuseSacks = PLAIN_PRODUCTS.filter((p) => p.category === REFUSE_SACK_CATEGORY).sort((a, b) => {
  const featured = ['150003', '150004', '150006', '150005'];
  const ai = featured.indexOf(a.id);
  const bi = featured.indexOf(b.id);
  if (ai !== -1 || bi !== -1) return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
  return a.name.localeCompare(b.name);
});

const sizeGuide = [
  { size: '26 × 44"', use: 'Standard wheelie bin & commercial waste — most popular size' },
  { size: '29 × 46"', use: 'Large heavy-duty sacks for bulky or wet waste' },
  { size: '38 × 42–43"', use: 'Compactor sacks for industrial compactors' },
  { size: '18 × 29 × 37"', use: 'Medium Greensack sacks for catering & hospitality' },
  { size: '13 × 25 × 20"', use: 'Office desk bin liners' },
  { size: '30" swing', use: 'Pedal bin & swing-top kitchen liners (500/case)' },
];

const featuredIds = new Set(['150003', '150004', '150006', '150005', '150008', '101102']);

function fmtCase(n) {
  return `€${Number(n).toFixed(2)}`;
}

function fromCasePrice(product) {
  const price = product.caseTiers?.[0]?.pricePerCase;
  if (price == null) return null;
  return fmtCase(Math.round(price * DISCOUNT * 100) / 100);
}

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: REFUSE_SACK_HUB_FAQS.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Refuse Sacks Ireland', item: PAGE_URL },
  ],
};

const itemListLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Refuse Sacks Ireland',
  description: REFUSE_SACK_HUB_CONFIG.metaDescription,
  itemListElement: refuseSacks.slice(0, 12).map((p, i) => {
    const productUrl = `${SITE_URL}/plain-packaging/${p.id}`;
    return buildProductListItem({
      position: i + 1,
      name: getRefuseSackDisplayName(p),
      url: productUrl,
      price: p.caseTiers?.[0]?.pricePerCase,
      image:
        p.imageSrc && !isPlaceholderImage(p.imageSrc) ? `${SITE_URL}${p.imageSrc}` : undefined,
    });
  }),
};

const webPageLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: REFUSE_SACK_HUB_CONFIG.metaTitle,
  description: REFUSE_SACK_HUB_CONFIG.metaDescription,
  url: PAGE_URL,
  inLanguage: 'en-IE',
  isPartOf: { '@type': 'WebSite', name: 'PrintNPack Ireland', url: SITE_URL },
  about: { '@type': 'Thing', name: 'Refuse sacks and bin bags Ireland' },
  dateModified: '2026-07-03',
};

export default function RefuseSacksIreland() {
  const { metaTitle, metaDescription, keywords, h1, heroLabel, intro } = REFUSE_SACK_HUB_CONFIG;
  const lowestPrice = refuseSacks.reduce((min, p) => {
    const price = p.caseTiers?.[0]?.pricePerCase;
    if (price == null) return min;
    const discounted = Math.round(price * DISCOUNT * 100) / 100;
    return min == null || discounted < min ? discounted : min;
  }, null);

  return (
    <Layout>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="PrintNPack Ireland" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:site_name" content="PrintNPack Ireland" />
        <meta property="og:locale" content="en_IE" />
        <meta property="og:image" content={`${SITE_URL}${HERO_IMAGE}`} />
        <meta property="og:image:alt" content="26 x 44 hi grade black refuse sacks Ireland — wholesale bin bags" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={`${SITE_URL}${HERO_IMAGE}`} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />
      </Head>

      <nav className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-gray-700">Home</Link></li>
            <li>/</li>
            <li className="text-gray-800 font-medium">Refuse Sacks Ireland</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-semibold text-emerald-700 uppercase tracking-wider mb-3">
                {heroLabel}
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                {h1}
              </h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">{intro}</p>
              <div className="flex flex-wrap gap-3 mb-6">
                {lowestPrice != null && (
                  <div className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-center">
                    <div className="text-sm font-bold text-gray-900">From €{lowestPrice.toFixed(2)}</div>
                    <div className="text-xs text-gray-500">per case</div>
                  </div>
                )}
                <div className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-center">
                  <div className="text-sm font-bold text-gray-900">21 SKUs</div>
                  <div className="text-xs text-gray-500">in stock</div>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-center">
                  <div className="text-sm font-bold text-gray-900">Nationwide</div>
                  <div className="text-xs text-gray-500">delivery</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/plain-packaging?category=Refuse+Sack"
                  className="inline-flex items-center gap-2 bg-emerald-700 text-white font-semibold px-6 py-3 rounded-xl hover:bg-emerald-800 transition-colors"
                >
                  Browse All Refuse Sacks
                </Link>
                <Link
                  href="/plain-packaging/150003"
                  className="inline-flex items-center gap-2 bg-white text-gray-800 font-semibold px-6 py-3 rounded-xl border border-gray-300 hover:border-gray-400 transition-colors"
                >
                  26×44 Black Hi-Grade
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-stone-50">
              <Image
                src={HERO_IMAGE}
                alt="26 x 44 hi grade black refuse sacks Ireland — wholesale bin bags by the case"
                fill
                className="object-contain p-6"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="py-12 lg:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Popular refuse sacks &amp; bin bags
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Black hi-grade, clear, Greensack and compactor sacks — order by the case with tiered volume pricing.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {refuseSacks.filter((p) => featuredIds.has(p.id)).map((p) => (
                <Link
                  key={p.id}
                  href={`/plain-packaging/${p.id}`}
                  className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-emerald-300 hover:shadow-lg transition-all"
                >
                  <div className="relative h-44 bg-stone-50">
                    {isPlaceholderImage(p.imageSrc) ? (
                      <PackagingIcon category={p.category} className="w-full h-full" />
                    ) : (
                      <Image
                        src={p.imageSrc}
                        alt={getRefuseSackDisplayName(p)}
                        fill
                        className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                        sizes="400px"
                      />
                    )}
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-gray-400 mb-1">#{p.code}</p>
                    <h3 className="font-bold text-gray-900 text-sm leading-snug group-hover:text-emerald-700 transition-colors mb-2">
                      {getRefuseSackDisplayName(p)}
                    </h3>
                    <p className="text-xs text-gray-500 mb-3">{p.qtyPerCase} / case</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-gray-900">
                        From {fromCasePrice(p)} / case
                      </span>
                      <span className="text-emerald-700 text-xs font-semibold">View →</span>
                    </div>
                  </div>
                </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Size guide */}
      <section className="py-12 lg:py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Refuse sack sizes guide
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Match the right sack size to your bin type — from office desk liners to wheelie bins and compactors.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Size</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Best for</th>
                </tr>
              </thead>
              <tbody>
                {sizeGuide.map(({ size, use }) => (
                  <tr key={size} className="border-t border-gray-100">
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{size}</td>
                    <td className="px-4 py-3 text-gray-600">{use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Full product list */}
      <section className="py-12 lg:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">All refuse sacks &amp; bin bags</h2>
            <Link
              href="/plain-packaging?category=Refuse+Sack"
              className="text-sm text-emerald-700 hover:text-emerald-900 font-medium"
            >
              View in Plain Packaging →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {refuseSacks.map((p) => (
              <Link
                key={p.id}
                href={`/plain-packaging/${p.id}`}
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-emerald-300 hover:shadow-md transition-all group"
              >
                <p className="text-xs text-gray-400">#{p.code}</p>
                <p className="font-semibold text-gray-900 text-sm leading-snug mt-1 group-hover:text-emerald-700 transition-colors line-clamp-2">
                  {getRefuseSackDisplayName(p)}
                </p>
                <p className="text-xs text-gray-500 mt-1">{p.qtyPerCase} / case</p>
                <p className="text-sm font-bold text-gray-800 mt-2">From {fromCasePrice(p)} / case</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Content sections */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Black hi-grade refuse sacks</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our 26 × 44 black hi-grade refuse sacks are the go-to choice for Irish catering, hospitality
                and facilities teams. Thicker polythene handles heavier commercial waste. Also available in
                clear hi-grade, standard economy and SuperSack heavy-duty grades.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Greensack recyclable sacks</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Greensack green and clear refuse sacks offer a recyclable alternative for businesses
                prioritising sustainability. Available in standard 26 × 44 and compactor sizes for
                industrial waste compactors.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Compactor &amp; specialty bags</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Large 38 × 42–43 compactor sacks suit industrial compactors and high-volume waste streams.
                We also stock swing bin liners, office desk bin bags and clear outside bin bags.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Wholesale case pricing</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                All refuse sacks are sold by the case with tiered volume pricing — the more cases you order,
                the lower the per-case cost. Add items to your quote on the{' '}
                <Link href="/plain-packaging?category=Refuse+Sack" className="text-emerald-700 hover:underline">
                  Plain Packaging
                </Link>{' '}
                page and submit one request for all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 lg:py-16 bg-slate-50 border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Refuse sacks FAQ</h2>
          <div className="space-y-6">
            {REFUSE_SACK_HUB_FAQS.map(({ q, a }) => (
              <div key={q} className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedSeoLinks
        title="More wholesale catering supplies"
        links={getRelatedWholesaleLinks(REFUSE_SACK_HUB_PATH)}
      />

      {/* CTA */}
      <section className="bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Order refuse sacks wholesale today</h2>
          <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">
            Browse all {refuseSacks.length} refuse sack SKUs with tiered case pricing, or call for bulk account pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/plain-packaging?category=Refuse+Sack"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-xl transition-colors text-sm"
            >
              Browse Refuse Sacks
            </Link>
            <a
              href="tel:+353894400155"
              className="bg-gray-800 hover:bg-gray-700 text-gray-200 font-semibold py-3 px-8 rounded-xl border border-gray-700 transition-colors text-sm"
            >
              Call +353 89 440 0155
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
