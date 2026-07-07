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
  HOT_CUPS_CATEGORY,
  HOT_CUPS_CATEGORY_QUERY,
  HOT_CUPS_FEATURED_IDS,
  HOT_CUPS_HUB_CONFIG,
  HOT_CUPS_HUB_FAQS,
  HOT_CUPS_HUB_PATH,
  PLAIN_HOT_CUPS_HUB_PATH,
  getHotCupDisplayName,
} from '../data/hot-cups-seo';

const PAGE_URL = `${SITE_URL}${HOT_CUPS_HUB_PATH}`;
const HERO_IMAGE = '/images/plain-packaging/100070.webp';
const DISCOUNT = 0.95;

const featuredOrder = ['100070', '100071', '100072', '100102', '100103', '100104', 'cl8wl', 'cl12wl', '100396', '100397'];

const hotCups = PLAIN_PRODUCTS.filter((p) => p.category === HOT_CUPS_CATEGORY).sort((a, b) => {
  const ai = featuredOrder.indexOf(a.id);
  const bi = featuredOrder.indexOf(b.id);
  if (ai !== -1 || bi !== -1) return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
  return a.name.localeCompare(b.name);
});

const sizeGuide = [
  { size: '4oz', use: 'Espresso and short coffee — single wall and branded stock cups' },
  { size: '7oz', use: 'Vending machine cups for offices and workplaces' },
  { size: '8oz', use: 'Regular coffee — most popular takeaway size for cafes' },
  { size: '10oz', use: 'Large regular or small latte — compostable aqueous options' },
  { size: '12oz', use: 'Latte, cappuccino and large regular — best-selling café size' },
  { size: '16oz', use: 'Large hot drinks, tea and extra-large coffee servings' },
];

const cupTypes = [
  {
    title: 'Plain white double wall',
    desc: 'Matt PE-lined insulated cups in 8oz, 12oz and 16oz — reliable everyday takeaway stock.',
    link: PLAIN_HOT_CUPS_HUB_PATH,
    ids: ['100070', '100071', '100072'],
  },
  {
    title: 'Compostable Greenspirit aqueous',
    desc: 'Aqueous-coated double wall cups — eco takeaway option for Irish food service.',
    link: getPlainProductPathById('100102'),
    ids: ['100102', '100103', '100104', '100253'],
  },
  {
    title: 'Kraft ripple & embossed',
    desc: 'Triple ripple and embossed kraft cups — premium look with extra insulation.',
    link: getPlainProductPathById('100396'),
    ids: ['100396', '100397', '100389', '100390'],
  },
  {
    title: 'Single wall economical',
    desc: 'Lower-cost single wall paper cups for high-volume or budget-conscious outlets.',
    link: getPlainProductPathById('104391'),
    ids: ['104391', '104392', '104393', '104394'],
  },
];

const lidGuide = [
  { lid: '80mm white / black PP', fits: '8oz hot cups', ids: ['cl8wl', 'cl8bl'] },
  { lid: '90mm white / black PP', fits: '10oz, 12oz & 16oz cups', ids: ['cl12wl', 'cl12bl', 'cl12br'] },
  { lid: 'Compostable CPLA & bagasse', fits: 'Matched compostable cup sizes', ids: ['100328', '100329', '100337', '100338'] },
  { lid: 'Greenspirit aqueous paper', fits: 'Eco cup lines — sip-through & domed', ids: ['100340', '100341', '100347', '100348'] },
];

function fmtCase(n) {
  return `€${Number(n).toFixed(2)}`;
}

function fromCasePrice(product) {
  const price = product.caseTiers?.[0]?.pricePerCase;
  if (price == null) return null;
  return fmtCase(Math.round(price * DISCOUNT * 100) / 100);
}

function isLid(name) {
  return /\blid/i.test(name);
}

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: HOT_CUPS_HUB_FAQS.map(({ q, a }) => ({
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
    { '@type': 'ListItem', position: 2, name: 'Disposable Coffee Cups Ireland', item: PAGE_URL },
  ],
};

const itemListLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Disposable Coffee Cups Ireland',
  description: HOT_CUPS_HUB_CONFIG.metaDescription,
  itemListElement: hotCups.slice(0, 12).map((p, i) => {
    const productUrl = `${SITE_URL}${getPlainProductPath(p)}`;
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
  name: HOT_CUPS_HUB_CONFIG.metaTitle,
  description: HOT_CUPS_HUB_CONFIG.metaDescription,
  url: PAGE_URL,
  inLanguage: 'en-IE',
  isPartOf: { '@type': 'WebSite', name: 'PrintNPack Ireland', url: SITE_URL },
  about: { '@type': 'Thing', name: 'Disposable coffee cups and hot cup lids Ireland' },
  dateModified: '2026-07-04',
};

export default function HotCupsIreland() {
  const { metaTitle, metaDescription, keywords, h1, heroLabel, intro } = HOT_CUPS_HUB_CONFIG;
  const lowestPrice = hotCups.reduce((min, p) => {
    const price = p.caseTiers?.[0]?.pricePerCase;
    if (price == null) return min;
    const discounted = Math.round(price * DISCOUNT * 100) / 100;
    return min == null || discounted < min ? discounted : min;
  }, null);

  const cupProducts = hotCups.filter((p) => !isLid(p.name));
  const lidProducts = hotCups.filter((p) => isLid(p.name));

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
        <meta property="og:image:alt" content="8oz white double wall disposable coffee cups Ireland — wholesale hot cups" />

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
            <li className="text-gray-800 font-medium">Disposable Coffee Cups Ireland</li>
          </ol>
        </div>
      </nav>

      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-semibold text-amber-700 uppercase tracking-wider mb-3">
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
                  <div className="text-sm font-bold text-gray-900">71 SKUs</div>
                  <div className="text-xs text-gray-500">cups &amp; lids</div>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-center">
                  <div className="text-sm font-bold text-gray-900">Nationwide</div>
                  <div className="text-xs text-gray-500">delivery</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={`/plain-packaging?category=${HOT_CUPS_CATEGORY_QUERY}`}
                  className="inline-flex items-center gap-2 bg-amber-700 text-white font-semibold px-6 py-3 rounded-xl hover:bg-amber-800 transition-colors"
                >
                  Browse All Hot Cups
                </Link>
                <Link
                  href={PLAIN_HOT_CUPS_HUB_PATH}
                  className="inline-flex items-center gap-2 bg-white text-gray-800 font-semibold px-6 py-3 rounded-xl border border-gray-300 hover:border-gray-400 transition-colors"
                >
                  Plain White Cups
                </Link>
                <Link
                  href={getPlainProductPathById('100070')}
                  className="inline-flex items-center gap-2 bg-white text-gray-800 font-semibold px-6 py-3 rounded-xl border border-gray-300 hover:border-gray-400 transition-colors"
                >
                  8oz Double Wall
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-stone-50">
              <Image
                src={HERO_IMAGE}
                alt="8oz white matt double wall disposable coffee cups Ireland — wholesale takeaway cups"
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
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Popular disposable coffee cups &amp; lids
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Best-selling 8oz, 12oz and 16oz takeaway cups plus matching lids — order plain stock by the case with tiered wholesale pricing.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {hotCups.filter((p) => HOT_CUPS_FEATURED_IDS.has(p.id)).map((p) => (
              <Link
                key={p.id}
                href={getPlainProductPath(p)}
                className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-amber-300 hover:shadow-lg transition-all"
              >
                <div className="relative h-44 bg-stone-50">
                  {isPlaceholderImage(p.imageSrc) ? (
                    <PackagingIcon category={p.category} className="w-full h-full" />
                  ) : (
                    <Image
                      src={p.imageSrc}
                      alt={getHotCupDisplayName(p)}
                      fill
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                      sizes="400px"
                    />
                  )}
                </div>
                <div className="p-5">
                  <p className="text-xs text-gray-400 mb-1">#{p.code}</p>
                  <h3 className="font-bold text-gray-900 text-sm leading-snug group-hover:text-amber-700 transition-colors mb-2">
                    {getHotCupDisplayName(p)}
                  </h3>
                  <p className="text-xs text-gray-500 mb-3">{p.qtyPerCase} / case</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-gray-900">
                      From {fromCasePrice(p)} / case
                    </span>
                    <span className="text-amber-700 text-xs font-semibold">View →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Coffee cup sizes guide — Ireland
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Choose the right oz size for your menu. Most Irish cafes stock 8oz, 12oz and 16oz as their core takeaway range.
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
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Cup types we stock</h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            From economical single wall to insulated double wall, compostable aqueous and kraft ripple — plain wholesale stock ready to dispatch.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {cupTypes.map(({ title, desc, link, ids }) => (
              <div key={title} className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 text-lg mb-2">{title}</h3>
                <p className="text-sm text-gray-600 mb-4">{desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {ids.map((id) => {
                    const p = hotCups.find((x) => x.id === id);
                    if (!p) return null;
                    return (
                      <Link
                        key={id}
                        href={getPlainProductPathById(id)}
                        className="text-xs bg-amber-50 text-amber-800 px-2 py-1 rounded-lg hover:bg-amber-100 transition-colors"
                      >
                        {getHotCupDisplayName(p).replace(/\(.*\)/, '').trim().slice(0, 40)}
                      </Link>
                    );
                  })}
                </div>
                <Link href={link} className="text-sm font-semibold text-amber-700 hover:text-amber-900">
                  View range →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Hot cup lids — size matching guide</h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Match 80mm lids to 8oz cups and 90mm lids to 10oz, 12oz and 16oz cups. White, black, compostable and aqueous options available.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Lid type</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Fits</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Products</th>
                </tr>
              </thead>
              <tbody>
                {lidGuide.map(({ lid, fits, ids }) => (
                  <tr key={lid} className="border-t border-gray-100">
                    <td className="px-4 py-3 font-medium text-gray-900">{lid}</td>
                    <td className="px-4 py-3 text-gray-600">{fits}</td>
                    <td className="px-4 py-3">
                      <div className="flex flex-wrap gap-2">
                        {ids.map((id) => (
                          <Link
                            key={id}
                            href={getPlainProductPathById(id)}
                            className="text-amber-700 hover:underline text-xs font-medium"
                          >
                            #{id}
                          </Link>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Why order wholesale hot cups from PrintNPack?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-600 leading-relaxed">
            <div>
              <p className="mb-4">
                Irish cafes and coffee shops need reliable disposable cup supply without waiting weeks for a custom print run.
                PrintNPack stocks plain 8oz, 12oz and 16oz double wall cups, compostable Greenspirit aqueous cups, kraft ripple cups
                and matching lids — all with tiered case pricing and nationwide delivery from Ashbourne, Co. Meath.
              </p>
              <p>
                Unlike custom-print specialists with 1,000+ unit MOQs, you can order a single case of plain takeaway cups
                and scale up with volume discounts. Need branded cups?{' '}
                <Link href="/contact" className="text-amber-700 hover:underline font-medium">Contact us</Link>{' '}
                for a quote on larger print orders.
              </p>
            </div>
            <div>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-2"><span className="text-amber-600 font-bold">✓</span> 71 hot cup &amp; lid SKUs in one place</li>
                <li className="flex gap-2"><span className="text-amber-600 font-bold">✓</span> Plain stock — no print MOQ on standard lines</li>
                <li className="flex gap-2"><span className="text-amber-600 font-bold">✓</span> Double wall, single wall, compostable &amp; kraft</li>
                <li className="flex gap-2"><span className="text-amber-600 font-bold">✓</span> 80mm &amp; 90mm lids matched to cup sizes</li>
                <li className="flex gap-2"><span className="text-amber-600 font-bold">✓</span> Tiered B2B case pricing — order online</li>
                <li className="flex gap-2"><span className="text-amber-600 font-bold">✓</span> Delivery Dublin, Cork, Galway &amp; nationwide</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">All disposable cups ({cupProducts.length})</h2>
            <Link
              href={`/plain-packaging?category=${HOT_CUPS_CATEGORY_QUERY}`}
              className="text-sm text-amber-700 hover:text-amber-900 font-medium"
            >
              View in Plain Packaging →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {cupProducts.map((p) => (
              <Link
                key={p.id}
                href={getPlainProductPath(p)}
                className="bg-slate-50 border border-gray-200 rounded-xl p-4 hover:border-amber-300 hover:shadow-md transition-all group"
              >
                <p className="text-xs text-gray-400">#{p.code}</p>
                <p className="font-semibold text-gray-900 text-sm leading-snug mt-1 group-hover:text-amber-700 transition-colors line-clamp-2">
                  {getHotCupDisplayName(p)}
                </p>
                <p className="text-xs text-gray-500 mt-1">{p.qtyPerCase} / case</p>
                <p className="text-sm font-bold text-gray-800 mt-2">From {fromCasePrice(p)} / case</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">All hot cup lids ({lidProducts.length})</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {lidProducts.map((p) => (
              <Link
                key={p.id}
                href={getPlainProductPath(p)}
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-amber-300 hover:shadow-md transition-all group"
              >
                <p className="text-xs text-gray-400">#{p.code}</p>
                <p className="font-semibold text-gray-900 text-sm leading-snug mt-1 group-hover:text-amber-700 transition-colors line-clamp-2">
                  {getHotCupDisplayName(p)}
                </p>
                <p className="text-xs text-gray-500 mt-1">{p.qtyPerCase} / case</p>
                <p className="text-sm font-bold text-gray-800 mt-2">From {fromCasePrice(p)} / case</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
            Disposable coffee cups — FAQs
          </h2>
          <div className="space-y-6">
            {HOT_CUPS_HUB_FAQS.map(({ q, a }) => (
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
        links={getRelatedWholesaleLinks(HOT_CUPS_HUB_PATH)}
      />

      <section className="py-12 bg-amber-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Order disposable coffee cups wholesale</h2>
          <p className="text-amber-100 mb-6">
            Browse 71 hot cup &amp; lid SKUs with tiered case pricing. Plain stock ready to ship across Ireland.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href={`/plain-packaging?category=${HOT_CUPS_CATEGORY_QUERY}`}
              className="inline-block bg-white text-amber-900 font-semibold px-8 py-3 rounded-xl hover:bg-amber-50 transition-colors"
            >
              Browse Hot Cups &amp; Lids
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-amber-900 text-white font-semibold px-8 py-3 rounded-xl border border-amber-700 hover:bg-amber-950 transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
