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
  HOT_CUPS_CATEGORY,
  HOT_CUPS_CATEGORY_QUERY,
  HOT_CUPS_HUB_PATH,
  PLAIN_HOT_CUPS_CONFIG,
  PLAIN_HOT_CUPS_HUB_PATH,
  getHotCupDisplayName,
  isPlainWhiteHotCup,
} from '../data/hot-cups-seo';

const PAGE_URL = `${SITE_URL}${PLAIN_HOT_CUPS_HUB_PATH}`;
const HERO_IMAGE = '/images/plain-packaging/100070.webp';
const DISCOUNT = 0.95;

const plainCups = PLAIN_PRODUCTS.filter(
  (p) => p.category === HOT_CUPS_CATEGORY && isPlainWhiteHotCup(p)
).sort((a, b) => a.name.localeCompare(b.name));

function fmtCase(n) {
  return `€${Number(n).toFixed(2)}`;
}

function fromCasePrice(product) {
  const price = product.caseTiers?.[0]?.pricePerCase;
  if (price == null) return null;
  return fmtCase(Math.round(price * DISCOUNT * 100) / 100);
}

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Disposable Coffee Cups Ireland', item: `${SITE_URL}${HOT_CUPS_HUB_PATH}` },
    { '@type': 'ListItem', position: 3, name: 'Plain Hot Cups Ireland', item: PAGE_URL },
  ],
};

const itemListLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Plain Hot Cups Ireland',
  description: PLAIN_HOT_CUPS_CONFIG.metaDescription,
  itemListElement: plainCups.map((p, i) => {
    const productUrl = `${SITE_URL}/plain-packaging/${p.id}`;
    return buildProductListItem({
      position: i + 1,
      name: getHotCupDisplayName(p),
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
  name: PLAIN_HOT_CUPS_CONFIG.metaTitle,
  description: PLAIN_HOT_CUPS_CONFIG.metaDescription,
  url: PAGE_URL,
  inLanguage: 'en-IE',
  isPartOf: { '@type': 'WebSite', name: 'PrintNPack Ireland', url: SITE_URL },
  about: { '@type': 'Thing', name: 'Plain white disposable coffee cups Ireland' },
  dateModified: '2026-07-04',
};

export default function PlainHotCupsIreland() {
  const { metaTitle, metaDescription, keywords, h1, intro } = PLAIN_HOT_CUPS_CONFIG;
  const lowestPrice = plainCups.reduce((min, p) => {
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
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={`${SITE_URL}${HERO_IMAGE}`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />
      </Head>

      <nav className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-gray-700">Home</Link></li>
            <li>/</li>
            <li><Link href={HOT_CUPS_HUB_PATH} className="hover:text-gray-700">Hot Cups Ireland</Link></li>
            <li>/</li>
            <li className="text-gray-800 font-medium">Plain Hot Cups</li>
          </ol>
        </div>
      </nav>

      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-semibold text-amber-700 uppercase tracking-wider mb-3">
                Plain white · double &amp; single wall · case pricing
              </p>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">{h1}</h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">{intro}</p>
              {lowestPrice != null && (
                <p className="text-sm text-gray-700 mb-6">
                  From <strong>€{lowestPrice.toFixed(2)}</strong> per case with tiered volume discounts.
                </p>
              )}
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/plain-packaging/100070"
                  className="inline-flex bg-amber-700 text-white font-semibold px-6 py-3 rounded-xl hover:bg-amber-800 transition-colors"
                >
                  8oz Double Wall Cups
                </Link>
                <Link
                  href={HOT_CUPS_HUB_PATH}
                  className="inline-flex bg-white text-gray-800 font-semibold px-6 py-3 rounded-xl border border-gray-300 hover:border-gray-400 transition-colors"
                >
                  All Hot Cups &amp; Lids
                </Link>
              </div>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-stone-50 border border-gray-200">
              <Image
                src={HERO_IMAGE}
                alt="Plain white 8oz double wall disposable coffee cups Ireland wholesale"
                fill
                className="object-contain p-8"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Plain white hot cups — all sizes</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {plainCups.map((p) => (
              <Link
                key={p.id}
                href={`/plain-packaging/${p.id}`}
                className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-amber-300 hover:shadow-lg transition-all"
              >
                <div className="relative h-40 bg-stone-50">
                  {isPlaceholderImage(p.imageSrc) ? (
                    <PackagingIcon category={p.category} className="w-full h-full" />
                  ) : (
                    <Image
                      src={p.imageSrc}
                      alt={getHotCupDisplayName(p)}
                      fill
                      className="object-contain p-4"
                      sizes="400px"
                    />
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 text-sm leading-snug group-hover:text-amber-700 mb-2">
                    {getHotCupDisplayName(p)}
                  </h3>
                  <p className="text-xs text-gray-500 mb-2">{p.qtyPerCase} / case</p>
                  <p className="text-sm font-bold text-gray-900">From {fromCasePrice(p)} / case</p>
                </div>
              </Link>
            ))}
          </div>
          <p className="text-sm text-gray-600 mt-8 max-w-2xl">
            Need compostable or kraft ripple cups instead? Browse our full{' '}
            <Link href={HOT_CUPS_HUB_PATH} className="text-amber-700 hover:underline font-medium">
              disposable coffee cups Ireland
            </Link>{' '}
            range including Greenspirit aqueous cups and matching lids.
          </p>
        </div>
      </section>

      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Match with hot cup lids</h2>
          <p className="text-gray-600 text-sm mb-4">
            Pair 80mm lids with 8oz cups and 90mm lids with 12oz and 16oz cups.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/plain-packaging/cl8wl" className="text-sm font-semibold text-amber-700 hover:underline">
              80mm White Lids
            </Link>
            <Link href="/plain-packaging/cl12wl" className="text-sm font-semibold text-amber-700 hover:underline">
              90mm White Lids
            </Link>
            <Link href={`/plain-packaging?category=${HOT_CUPS_CATEGORY_QUERY}`} className="text-sm font-semibold text-amber-700 hover:underline">
              All Hot Cups &amp; Lids
            </Link>
          </div>
        </div>
      </section>

      <RelatedSeoLinks
        title="More wholesale catering supplies"
        links={getRelatedWholesaleLinks(PLAIN_HOT_CUPS_HUB_PATH)}
      />
    </Layout>
  );
}
