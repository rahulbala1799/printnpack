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
  GLOVES_CATEGORY,
  GLOVES_CATEGORY_QUERY,
  GLOVES_HUB_PATH,
  VINYL_GLOVES_CONFIG,
  VINYL_GLOVES_HUB_PATH,
  getGloveDisplayName,
  isVinylGlove,
} from '../data/gloves-seo';

const PAGE_URL = `${SITE_URL}${VINYL_GLOVES_HUB_PATH}`;
const HERO_IMAGE = '/images/plain-packaging/122090.webp';
const DISCOUNT = 0.95;

const vinylGloves = PLAIN_PRODUCTS.filter(
  (p) => p.category === GLOVES_CATEGORY && isVinylGlove(p)
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
    { '@type': 'ListItem', position: 2, name: 'Disposable Gloves Ireland', item: `${SITE_URL}${GLOVES_HUB_PATH}` },
    { '@type': 'ListItem', position: 3, name: 'Vinyl Gloves Ireland', item: PAGE_URL },
  ],
};

const itemListLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Vinyl Gloves Ireland',
  description: VINYL_GLOVES_CONFIG.metaDescription,
  itemListElement: vinylGloves.map((p, i) => {
    const productUrl = `${SITE_URL}${getPlainProductPath(p)}`;
    return buildProductListItem({
      position: i + 1,
      name: getGloveDisplayName(p),
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
  name: VINYL_GLOVES_CONFIG.metaTitle,
  description: VINYL_GLOVES_CONFIG.metaDescription,
  url: PAGE_URL,
  inLanguage: 'en-IE',
  isPartOf: { '@type': 'WebSite', name: 'PrintNPack Ireland', url: SITE_URL },
  about: { '@type': 'Thing', name: 'Vinyl disposable gloves Ireland wholesale' },
  dateModified: '2026-07-05',
};

export default function VinylGlovesIreland() {
  const { metaTitle, metaDescription, keywords, h1, intro } = VINYL_GLOVES_CONFIG;
  const blueVinyl = vinylGloves.filter((p) => p.name.toLowerCase().includes('blue'));
  const clearVinyl = vinylGloves.filter((p) => p.name.toLowerCase().includes('clear'));

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
            <li><Link href={GLOVES_HUB_PATH} className="hover:text-gray-700">Gloves Ireland</Link></li>
            <li>/</li>
            <li className="text-gray-800 font-medium">Vinyl Gloves</li>
          </ol>
        </div>
      </nav>

      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-semibold text-sky-700 uppercase tracking-wider mb-3">
                Spirit LP &amp; PF · clear &amp; blue · S to XL
              </p>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">{h1}</h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">{intro}</p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={getPlainProductPathById('122090')}
                  className="inline-flex bg-sky-700 text-white font-semibold px-6 py-3 rounded-xl hover:bg-sky-800 transition-colors"
                >
                  Blue Vinyl Medium
                </Link>
                <Link
                  href={GLOVES_HUB_PATH}
                  className="inline-flex bg-white text-gray-800 font-semibold px-6 py-3 rounded-xl border border-gray-300 hover:border-gray-400 transition-colors"
                >
                  All Disposable Gloves
                </Link>
              </div>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-stone-50 border border-gray-200">
              {isPlaceholderImage(HERO_IMAGE) ? (
                <PackagingIcon category={GLOVES_CATEGORY} className="w-full h-full" />
              ) : (
                <Image
                  src={HERO_IMAGE}
                  alt="Blue vinyl disposable gloves Ireland wholesale — Spirit catering gloves"
                  fill
                  className="object-contain p-8"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Blue vinyl gloves</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {blueVinyl.map((p) => (
              <Link
                key={p.id}
                href={getPlainProductPath(p)}
                className="group bg-white rounded-2xl border border-gray-200 p-5 hover:border-sky-300 hover:shadow-lg transition-all"
              >
                <h3 className="font-bold text-gray-900 text-sm leading-snug group-hover:text-sky-700 mb-2">
                  {getGloveDisplayName(p)}
                </h3>
                <p className="text-xs text-gray-500 mb-2">{p.qtyPerCase} / case</p>
                <p className="text-sm font-bold text-gray-900">From {fromCasePrice(p)} / case</p>
              </Link>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Clear vinyl gloves</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {clearVinyl.map((p) => (
              <Link
                key={p.id}
                href={getPlainProductPath(p)}
                className="group bg-white rounded-2xl border border-gray-200 p-5 hover:border-sky-300 hover:shadow-lg transition-all"
              >
                <h3 className="font-bold text-gray-900 text-sm leading-snug group-hover:text-sky-700 mb-2">
                  {getGloveDisplayName(p)}
                </h3>
                <p className="text-xs text-gray-500 mb-2">{p.qtyPerCase} / case</p>
                <p className="text-sm font-bold text-gray-900">From {fromCasePrice(p)} / case</p>
              </Link>
            ))}
          </div>

          <p className="text-sm text-gray-600 mt-8 max-w-2xl">
            Need stronger puncture resistance? Browse{' '}
            <Link href="/nitrile-gloves-ireland" className="text-sky-700 hover:underline font-medium">
              nitrile gloves Ireland
            </Link>{' '}
            or view all{' '}
            <Link href={`/plain-packaging?category=${GLOVES_CATEGORY_QUERY}`} className="text-sky-700 hover:underline font-medium">
              wholesale gloves
            </Link>
            .
          </p>
        </div>
      </section>

      <RelatedSeoLinks
        title="More wholesale catering supplies"
        links={getRelatedWholesaleLinks(VINYL_GLOVES_HUB_PATH)}
      />
    </Layout>
  );
}
