import React from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_URL } from '../lib/site';
import { PLAIN_PRODUCTS, getPlainProductPath, getPlainProductPathById } from '../data/plain-products';
import PackagingIcon, { isPlaceholderImage } from '../components/PackagingIcon';
import { buildProductListItem } from '../lib/schema';
import RelatedSeoLinks from '../components/seo/RelatedSeoLinks';
import { getRelatedWholesaleLinks } from '../data/wholesale-hub-links';
import {
  NAPKINS_TABLEWARE_CATEGORY,
  NAPKINS_TABLEWARE_CATEGORY_QUERY,
  NAPKINS_TABLEWARE_FEATURED_IDS,
  NAPKINS_TABLEWARE_HUB_CONFIG,
  NAPKINS_TABLEWARE_HUB_FAQS,
  NAPKINS_TABLEWARE_HUB_PATH,
  getNapkinsTablewareDisplayName,
} from '../data/napkins-tableware-seo';

const PAGE_URL = `${SITE_URL}/plain-napkins-tableware-ireland`;
const HERO_IMAGE = '/images/plain-packaging/160006.webp';
const DISCOUNT = 0.95;
const CATEGORY_URL = `/plain-packaging?category=${NAPKINS_TABLEWARE_CATEGORY_QUERY}`;

const allProducts = PLAIN_PRODUCTS.filter((p) => p.category === NAPKINS_TABLEWARE_CATEGORY).sort((a, b) =>
  a.name.localeCompare(b.name)
);

const napkinProducts = allProducts.filter((p) => /napkin/i.test(p.name) && !/dispenser/i.test(p.name));
const tablewareProducts = allProducts.filter((p) => !napkinProducts.includes(p));

const sizeGuide = [
  { size: '24cm', use: 'Cocktail napkins — bars, cafes, canapés and events' },
  { size: '33cm', use: 'Lunch napkins — cafes, delis, takeaway and casual dining' },
  { size: '38–40cm', use: 'Dinner napkins — restaurants, hotels and formal catering' },
  { size: '30cm 1-ply', use: 'Economy single-ply for high-volume food service' },
  { size: 'Airlaid 40cm', use: 'Premium linen-feel napkins for upscale dining' },
];

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
  mainEntity: NAPKINS_TABLEWARE_HUB_FAQS.map(({ q, a }) => ({
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
    { '@type': 'ListItem', position: 2, name: 'Plain Napkins & Tableware Ireland', item: PAGE_URL },
  ],
};

const itemListLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Plain Napkins & Tableware Ireland',
  description: NAPKINS_TABLEWARE_HUB_CONFIG.metaDescription,
  itemListElement: allProducts
    .filter((p) => NAPKINS_TABLEWARE_FEATURED_IDS.has(p.id))
    .slice(0, 12)
    .map((p, i) => {
      const productUrl = `${SITE_URL}${getPlainProductPath(p)}`;
      return buildProductListItem({
        position: i + 1,
        name: getNapkinsTablewareDisplayName(p),
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
  name: NAPKINS_TABLEWARE_HUB_CONFIG.metaTitle,
  description: NAPKINS_TABLEWARE_HUB_CONFIG.metaDescription,
  url: PAGE_URL,
  inLanguage: 'en-IE',
  isPartOf: { '@type': 'WebSite', name: 'PrintNPack Ireland', url: SITE_URL },
  about: { '@type': 'Thing', name: 'Plain napkins and tableware Ireland' },
  dateModified: '2026-07-03',
};

function ProductCard({ product }) {
  return (
    <Link
      href={getPlainProductPath(product)}
      className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-amber-300 hover:shadow-lg transition-all"
    >
      <div className="relative h-44 bg-stone-50">
        {isPlaceholderImage(product.imageSrc) ? (
          <PackagingIcon category={product.category} className="w-full h-full" />
        ) : (
          <Image
            src={product.imageSrc}
            alt={getNapkinsTablewareDisplayName(product)}
            fill
            className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
            sizes="400px"
          />
        )}
      </div>
      <div className="p-5">
        <p className="text-xs text-gray-400 mb-1">#{product.code}</p>
        <h3 className="font-bold text-gray-900 text-sm leading-snug group-hover:text-amber-700 transition-colors mb-2 line-clamp-2">
          {getNapkinsTablewareDisplayName(product)}
        </h3>
        <p className="text-xs text-gray-500 mb-3">{product.qtyPerCase} / case</p>
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold text-gray-900">From {fromCasePrice(product)} / case</span>
          <span className="text-amber-700 text-xs font-semibold">View →</span>
        </div>
      </div>
    </Link>
  );
}

export default function PlainNapkinsTablewareIreland() {
  const { metaTitle, metaDescription, keywords, h1, heroLabel, intro } = NAPKINS_TABLEWARE_HUB_CONFIG;
  const lowestPrice = allProducts.reduce((min, p) => {
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
        <meta property="og:image:alt" content="Logic8 white lunch napkins Ireland — wholesale plain napkins by the case" />

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
            <li className="text-gray-800 font-medium">Plain Napkins &amp; Tableware Ireland</li>
          </ol>
        </div>
      </nav>

      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-semibold text-amber-700 uppercase tracking-wider mb-3">{heroLabel}</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">{h1}</h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">{intro}</p>
              <div className="flex flex-wrap gap-3 mb-6">
                {lowestPrice != null && (
                  <div className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-center">
                    <div className="text-sm font-bold text-gray-900">From €{lowestPrice.toFixed(2)}</div>
                    <div className="text-xs text-gray-500">per case</div>
                  </div>
                )}
                <div className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-center">
                  <div className="text-sm font-bold text-gray-900">{allProducts.length} SKUs</div>
                  <div className="text-xs text-gray-500">in stock</div>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-center">
                  <div className="text-sm font-bold text-gray-900">Nationwide</div>
                  <div className="text-xs text-gray-500">delivery</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={CATEGORY_URL}
                  className="inline-flex items-center gap-2 bg-amber-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-amber-700 transition-colors"
                >
                  Browse All Napkins &amp; Tableware
                </Link>
                <Link
                  href="/napkins-ireland"
                  className="inline-flex items-center gap-2 bg-white text-gray-800 font-semibold px-6 py-3 rounded-xl border border-gray-300 hover:border-gray-400 transition-colors"
                >
                  Custom Printed Napkins
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-stone-50">
              <Image
                src={HERO_IMAGE}
                alt="Logic8 white lunch napkins Ireland — wholesale plain napkins by the case"
                fill
                className="object-contain p-6"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Popular plain napkins</h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            White Logic8 and BulkySoft napkins, compostable kraft and premium airlaid — order by the case.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {allProducts.filter((p) => NAPKINS_TABLEWARE_FEATURED_IDS.has(p.id)).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Napkin sizes guide</h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Match napkin size to your service style — from cocktail bars to full-service restaurants.
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

      <section className="py-12 lg:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">White &amp; coloured paper napkins</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Logic8 and BulkySoft 2-ply napkins in white, black, navy, red, burgundy, cream and green.
                Available in 4-fold and 8-fold formats for lunch and dinner service. Economical 1-ply Logic8
                napkins for high-volume catering.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Compostable &amp; airlaid napkins</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Compostable kraft napkins for eco-conscious businesses. Premium airlaid napkins offer a
                linen-feel texture for hotels, weddings and upscale dining — also available in pocket and
                guest towel formats.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Doylies, placemats &amp; table covers</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                White round and rectangular doilies, paper placemats, Tamask table covers, silk slipcovers,
                banquet rolls and lace tray paper for professional table presentation.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Need branded napkins with your logo?</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Custom printed napkins start from €0.05 per unit on our{' '}
                <Link href="/napkins-ireland" className="text-amber-700 hover:underline font-medium">
                  napkins Ireland
                </Link>{' '}
                hub — cocktail, lunch and dinner sizes with full-colour logo print.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">All napkins ({napkinProducts.length})</h2>
            <Link href={CATEGORY_URL} className="text-sm text-amber-700 hover:text-amber-900 font-medium">
              View in Plain Packaging →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12">
            {napkinProducts.map((p) => (
              <Link
                key={p.id}
                href={getPlainProductPath(p)}
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-amber-300 hover:shadow-md transition-all group"
              >
                <p className="text-xs text-gray-400">#{p.code}</p>
                <p className="font-semibold text-gray-900 text-sm leading-snug mt-1 group-hover:text-amber-700 transition-colors line-clamp-2">
                  {getNapkinsTablewareDisplayName(p)}
                </p>
                <p className="text-xs text-gray-500 mt-1">{p.qtyPerCase} / case</p>
                <p className="text-sm font-bold text-gray-800 mt-2">From {fromCasePrice(p)} / case</p>
              </Link>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Tableware &amp; accessories ({tablewareProducts.length})</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {tablewareProducts.map((p) => (
              <Link
                key={p.id}
                href={getPlainProductPath(p)}
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-amber-300 hover:shadow-md transition-all group"
              >
                <p className="text-xs text-gray-400">#{p.code}</p>
                <p className="font-semibold text-gray-900 text-sm leading-snug mt-1 group-hover:text-amber-700 transition-colors line-clamp-2">
                  {getNapkinsTablewareDisplayName(p)}
                </p>
                <p className="text-xs text-gray-500 mt-1">{p.qtyPerCase} / case</p>
                <p className="text-sm font-bold text-gray-800 mt-2">From {fromCasePrice(p)} / case</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Plain napkins &amp; tableware FAQ</h2>
          <div className="space-y-6">
            {NAPKINS_TABLEWARE_HUB_FAQS.map(({ q, a }) => (
              <div key={q} className="bg-slate-50 rounded-xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedSeoLinks
        title="More wholesale catering supplies"
        links={getRelatedWholesaleLinks(NAPKINS_TABLEWARE_HUB_PATH)}
      />

      <section className="bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Order plain napkins wholesale today</h2>
          <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">
            Browse all {allProducts.length} napkins &amp; tableware SKUs with tiered case pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href={CATEGORY_URL}
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-xl transition-colors text-sm"
            >
              Browse Napkins &amp; Tableware
            </Link>
            <a
              href="tel:+353894157369"
              className="bg-gray-800 hover:bg-gray-700 text-gray-200 font-semibold py-3 px-8 rounded-xl border border-gray-700 transition-colors text-sm"
            >
              Call +353 89 415 7369
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
