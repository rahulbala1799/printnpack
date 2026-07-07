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
  GLOVES_FEATURED_IDS,
  GLOVES_HUB_CONFIG,
  GLOVES_HUB_FAQS,
  GLOVES_HUB_PATH,
  NITRILE_GLOVE_IDS,
  NITRILE_GLOVES_HUB_PATH,
  VINYL_GLOVE_IDS,
  VINYL_GLOVES_HUB_PATH,
  getGloveDisplayName,
  isVinylGlove,
} from '../data/gloves-seo';

const PAGE_URL = `${SITE_URL}${GLOVES_HUB_PATH}`;
const HERO_IMAGE = '/images/plain-packaging/170054.webp';
const DISCOUNT = 0.95;

const featuredOrder = [
  '170054', '170055', '170056', '170058', '170065', '170066', '122090', '122094', '170043', '170046',
];

const gloves = PLAIN_PRODUCTS.filter((p) => p.category === GLOVES_CATEGORY).sort((a, b) => {
  const ai = featuredOrder.indexOf(a.id);
  const bi = featuredOrder.indexOf(b.id);
  if (ai !== -1 || bi !== -1) return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
  return a.name.localeCompare(b.name);
});

const sizeGuide = [
  { size: 'Small (S)', use: 'Tighter fit — smaller hands, precision food prep' },
  { size: 'Medium (M)', use: 'Most popular size for general catering and kitchen use' },
  { size: 'Large (L)', use: 'Comfortable fit for most adult hands — delis and food prep' },
  { size: 'Extra Large (XL)', use: 'Larger hands — busy kitchens and high-volume prep' },
];

const gloveTypes = [
  {
    title: 'Blue & black nitrile',
    desc: 'Powder-free nitrile gloves — best puncture resistance for food prep, catering and hygiene.',
    link: NITRILE_GLOVES_HUB_PATH,
    ids: ['170054', '170055', '170056', '170058', '170065', '170066'],
  },
  {
    title: 'Vinyl — clear & blue',
    desc: 'Economical Spirit LP and PF vinyl gloves for food service, delis and light handling.',
    link: VINYL_GLOVES_HUB_PATH,
    ids: ['122090', '122094', '170043', '170046'],
  },
  {
    title: 'Deli-fit & poly',
    desc: 'Loose-fit deli gloves and embossed poly gloves for sandwich counters and quick tasks.',
    link: getPlainProductPathById('122175'),
    ids: ['122175', '122176', '122177', '122178', '122173', '122174'],
  },
  {
    title: 'Heavy-duty rubber',
    desc: 'Long-sleeve black rubber gloves for washing up and heavy kitchen tasks.',
    link: getPlainProductPathById('122180'),
    ids: ['122180'],
  },
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
  mainEntity: GLOVES_HUB_FAQS.map(({ q, a }) => ({
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
    { '@type': 'ListItem', position: 2, name: 'Disposable Gloves Ireland', item: PAGE_URL },
  ],
};

const itemListLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Disposable Gloves Ireland',
  description: GLOVES_HUB_CONFIG.metaDescription,
  itemListElement: gloves.slice(0, 12).map((p, i) => {
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
  name: GLOVES_HUB_CONFIG.metaTitle,
  description: GLOVES_HUB_CONFIG.metaDescription,
  url: PAGE_URL,
  inLanguage: 'en-IE',
  isPartOf: { '@type': 'WebSite', name: 'PrintNPack Ireland', url: SITE_URL },
  about: { '@type': 'Thing', name: 'Disposable gloves Ireland wholesale' },
  dateModified: '2026-07-05',
};

export default function GlovesIreland() {
  const { metaTitle, metaDescription, keywords, h1, heroLabel, intro } = GLOVES_HUB_CONFIG;
  const lowestPrice = gloves.reduce((min, p) => {
    const price = p.caseTiers?.[0]?.pricePerCase;
    if (price == null) return min;
    const discounted = Math.round(price * DISCOUNT * 100) / 100;
    return min == null || discounted < min ? discounted : min;
  }, null);

  const nitrileProducts = gloves.filter((p) => NITRILE_GLOVE_IDS.has(p.id));
  const vinylProducts = gloves.filter((p) => isVinylGlove(p));
  const otherProducts = gloves.filter((p) => !NITRILE_GLOVE_IDS.has(p.id) && !isVinylGlove(p));

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
        <meta property="og:image:alt" content="Blue nitrile disposable gloves Ireland — wholesale catering gloves" />

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
            <li className="text-gray-800 font-medium">Disposable Gloves Ireland</li>
          </ol>
        </div>
      </nav>

      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-semibold text-sky-700 uppercase tracking-wider mb-3">{heroLabel}</p>
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
                  <div className="text-sm font-bold text-gray-900">38 SKUs</div>
                  <div className="text-xs text-gray-500">nitrile &amp; vinyl</div>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-center">
                  <div className="text-sm font-bold text-gray-900">Powder-free</div>
                  <div className="text-xs text-gray-500">options</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={`/plain-packaging?category=${GLOVES_CATEGORY_QUERY}`}
                  className="inline-flex items-center gap-2 bg-sky-700 text-white font-semibold px-6 py-3 rounded-xl hover:bg-sky-800 transition-colors"
                >
                  Browse All Gloves
                </Link>
                <Link
                  href={NITRILE_GLOVES_HUB_PATH}
                  className="inline-flex items-center gap-2 bg-white text-gray-800 font-semibold px-6 py-3 rounded-xl border border-gray-300 hover:border-gray-400 transition-colors"
                >
                  Nitrile Gloves
                </Link>
                <Link
                  href={VINYL_GLOVES_HUB_PATH}
                  className="inline-flex items-center gap-2 bg-white text-gray-800 font-semibold px-6 py-3 rounded-xl border border-gray-300 hover:border-gray-400 transition-colors"
                >
                  Vinyl Gloves
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-stone-50">
              <Image
                src={HERO_IMAGE}
                alt="Blue nitrile disposable gloves Ireland — wholesale powder-free catering gloves"
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
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Popular disposable gloves</h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Best-selling nitrile and vinyl gloves for Irish catering — order by the case with tiered wholesale pricing.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {gloves.filter((p) => GLOVES_FEATURED_IDS.has(p.id)).map((p) => (
              <Link
                key={p.id}
                href={getPlainProductPath(p)}
                className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-sky-300 hover:shadow-lg transition-all"
              >
                <div className="relative h-44 bg-stone-50">
                  {isPlaceholderImage(p.imageSrc) ? (
                    <PackagingIcon category={p.category} className="w-full h-full" />
                  ) : (
                    <Image
                      src={p.imageSrc}
                      alt={getGloveDisplayName(p)}
                      fill
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                      sizes="400px"
                    />
                  )}
                </div>
                <div className="p-5">
                  <p className="text-xs text-gray-400 mb-1">#{p.code}</p>
                  <h3 className="font-bold text-gray-900 text-sm leading-snug group-hover:text-sky-700 transition-colors mb-2">
                    {getGloveDisplayName(p)}
                  </h3>
                  <p className="text-xs text-gray-500 mb-3">{p.qtyPerCase} / case</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-gray-900">From {fromCasePrice(p)} / case</span>
                    <span className="text-sky-700 text-xs font-semibold">View →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Glove sizes guide</h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Choose the right fit for your team. Most Irish kitchens stock Medium and Large as core sizes.
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
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Glove types we stock</h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Nitrile for food prep, vinyl for economical handling, deli-fit and poly for sandwich counters.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {gloveTypes.map(({ title, desc, link, ids }) => (
              <div key={title} className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 text-lg mb-2">{title}</h3>
                <p className="text-sm text-gray-600 mb-4">{desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {ids.map((id) => {
                    const p = gloves.find((x) => x.id === id);
                    if (!p) return null;
                    return (
                      <Link
                        key={id}
                        href={getPlainProductPathById(id)}
                        className="text-xs bg-sky-50 text-sky-800 px-2 py-1 rounded-lg hover:bg-sky-100 transition-colors"
                      >
                        {getGloveDisplayName(p).slice(0, 36)}
                      </Link>
                    );
                  })}
                </div>
                <Link href={link} className="text-sm font-semibold text-sky-700 hover:text-sky-900">
                  View range →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Nitrile vs vinyl — quick comparison</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">Nitrile gloves</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Better puncture and tear resistance</li>
                <li>✓ Preferred for food prep and hygiene-critical tasks</li>
                <li>✓ Blue and black powder-free options</li>
                <li>✓ SAFE TOUCH, Kingfa &amp; Touch Guard brands</li>
              </ul>
              <Link href={NITRILE_GLOVES_HUB_PATH} className="inline-block mt-4 text-sm font-semibold text-sky-700 hover:underline">
                Browse nitrile gloves →
              </Link>
            </div>
            <div className="border border-gray-200 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">Vinyl gloves</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ More economical per case</li>
                <li>✓ Ideal for light food handling and deli work</li>
                <li>✓ Clear and blue — LP and powder-free PF lines</li>
                <li>✓ Spirit brand — trusted food service supply</li>
              </ul>
              <Link href={VINYL_GLOVES_HUB_PATH} className="inline-block mt-4 text-sm font-semibold text-sky-700 hover:underline">
                Browse vinyl gloves →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Nitrile gloves ({nitrileProducts.length})</h2>
            <Link href={NITRILE_GLOVES_HUB_PATH} className="text-sm text-sky-700 hover:text-sky-900 font-medium">
              Nitrile hub →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12">
            {nitrileProducts.map((p) => (
              <Link
                key={p.id}
                href={getPlainProductPath(p)}
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-sky-300 hover:shadow-md transition-all group"
              >
                <p className="text-xs text-gray-400">#{p.code}</p>
                <p className="font-semibold text-gray-900 text-sm leading-snug mt-1 group-hover:text-sky-700 transition-colors line-clamp-2">
                  {getGloveDisplayName(p)}
                </p>
                <p className="text-xs text-gray-500 mt-1">{p.qtyPerCase} / case</p>
                <p className="text-sm font-bold text-gray-800 mt-2">From {fromCasePrice(p)} / case</p>
              </Link>
            ))}
          </div>

          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Vinyl gloves ({vinylProducts.length})</h2>
            <Link href={VINYL_GLOVES_HUB_PATH} className="text-sm text-sky-700 hover:text-sky-900 font-medium">
              Vinyl hub →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12">
            {vinylProducts.map((p) => (
              <Link
                key={p.id}
                href={getPlainProductPath(p)}
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-sky-300 hover:shadow-md transition-all group"
              >
                <p className="text-xs text-gray-400">#{p.code}</p>
                <p className="font-semibold text-gray-900 text-sm leading-snug mt-1 group-hover:text-sky-700 transition-colors line-clamp-2">
                  {getGloveDisplayName(p)}
                </p>
                <p className="text-xs text-gray-500 mt-1">{p.qtyPerCase} / case</p>
                <p className="text-sm font-bold text-gray-800 mt-2">From {fromCasePrice(p)} / case</p>
              </Link>
            ))}
          </div>

          {otherProducts.length > 0 && (
            <>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Poly, deli-fit &amp; rubber ({otherProducts.length})</h2>
                <Link
                  href={`/plain-packaging?category=${GLOVES_CATEGORY_QUERY}`}
                  className="text-sm text-sky-700 hover:text-sky-900 font-medium"
                >
                  View in Plain Packaging →
                </Link>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {otherProducts.map((p) => (
                  <Link
                    key={p.id}
                    href={getPlainProductPath(p)}
                    className="bg-white border border-gray-200 rounded-xl p-4 hover:border-sky-300 hover:shadow-md transition-all group"
                  >
                    <p className="text-xs text-gray-400">#{p.code}</p>
                    <p className="font-semibold text-gray-900 text-sm leading-snug mt-1 group-hover:text-sky-700 transition-colors line-clamp-2">
                      {getGloveDisplayName(p)}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{p.qtyPerCase} / case</p>
                    <p className="text-sm font-bold text-gray-800 mt-2">From {fromCasePrice(p)} / case</p>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">Disposable gloves — FAQs</h2>
          <div className="space-y-6">
            {GLOVES_HUB_FAQS.map(({ q, a }) => (
              <div key={q} className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-gray-900 mb-2">{q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedSeoLinks
        title="More wholesale catering supplies"
        links={getRelatedWholesaleLinks(GLOVES_HUB_PATH)}
      />

      <section className="py-12 bg-sky-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Order disposable gloves wholesale</h2>
          <p className="text-sky-100 mb-6">
            Browse 38 nitrile, vinyl and poly glove SKUs with tiered case pricing. Nationwide delivery across Ireland.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href={`/plain-packaging?category=${GLOVES_CATEGORY_QUERY}`}
              className="inline-block bg-white text-sky-900 font-semibold px-8 py-3 rounded-xl hover:bg-sky-50 transition-colors"
            >
              Browse All Gloves
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-sky-900 text-white font-semibold px-8 py-3 rounded-xl border border-sky-700 hover:bg-sky-950 transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
