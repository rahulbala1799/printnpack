"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { PLAIN_PRODUCTS, getProductById, getRelatedProducts } from '../../data/plain-products';
import { REFUSE_SACK_PRODUCT_IDS } from '../../data/refuse-sacks-seo';
import {
  NAPKINS_TABLEWARE_CATEGORY_QUERY,
  NAPKINS_TABLEWARE_HUB_PATH,
  NAPKINS_TABLEWARE_PRODUCT_IDS,
  getNapkinsTablewareDisplayName,
  getNapkinsTablewareProductSeo,
  isNapkinsTablewareProduct,
} from '../../data/napkins-tableware-seo';
import PackagingIcon, { isPlaceholderImage } from '../../components/PackagingIcon';
import { buildProductLd } from '../../lib/schema';
import { getBioboxProductSeo } from '../../data/biobox-cluster';
import {
  REFUSE_SACK_HUB_PATH,
  getRefuseSackDisplayName,
  getRefuseSackProductSeo,
  isRefuseSackProduct,
} from '../../data/refuse-sacks-seo';
import {
  HOT_CUPS_CATEGORY_QUERY,
  HOT_CUPS_HUB_PATH,
  HOT_CUPS_PRODUCT_IDS,
  getHotCupDisplayName,
  getHotCupProductSeo,
  isHotCupProduct,
} from '../../data/hot-cups-seo';
import {
  GLOVES_CATEGORY_QUERY,
  GLOVES_HUB_PATH,
  GLOVES_PRODUCT_IDS,
  getGloveDisplayName,
  getGloveProductSeo,
  isGloveProduct,
} from '../../data/gloves-seo';

const PLAIN_QUOTE_KEY = 'printnpack_plain_quote';

function addToPlainQuoteAndGo(product, tier, numCases) {
  if (typeof window === 'undefined') return;
  let items = [];
  try {
    const raw = window.localStorage.getItem(PLAIN_QUOTE_KEY);
    if (raw) items = JSON.parse(raw);
  } catch {}
  const productId = product.id;
  const casesLabel = tier.casesLabel;
  const idx = items.findIndex((it) => it.productId === productId && it.casesLabel === casesLabel);
  if (idx >= 0) items[idx].numCases = numCases;
  else items.push({ productId, casesLabel, numCases });
  try {
    window.localStorage.setItem(PLAIN_QUOTE_KEY, JSON.stringify(items));
  } catch {}
}

const fmtCase = (n) => `€${Number(n).toFixed(2)}`;
const DISCOUNT = 0.95;
const discountedPrice = (p) => Math.round(p * DISCOUNT * 100) / 100;
function getTierForCases(tiers, numCases) {
  if (!tiers?.length) return null;
  for (const t of tiers) {
    const L = t.casesLabel;
    const plus = L.match(/^(\d+)\+/);
    if (plus) { if (numCases >= parseInt(plus[1], 10)) return t; continue; }
    const range = L.match(/^(\d+)-(\d+)/);
    if (range) { const min = parseInt(range[1], 10); const max = parseInt(range[2], 10); if (numCases >= min && numCases <= max) return t; }
  }
  return tiers[tiers.length - 1];
}

function buildPlainProductLd(product, canonicalUrl) {
  const basePrice = product.caseTiers?.[0]?.pricePerCase;
  const image =
    product.imageSrc && !isPlaceholderImage(product.imageSrc)
      ? `https://www.printnpack.ie${product.imageSrc}`
      : undefined;

  let seoDescription = product.description;
  let seoName = product.name;

  if (isRefuseSackProduct(product)) {
    seoDescription = getRefuseSackProductSeo(product).pageDescription;
    seoName = getRefuseSackDisplayName(product);
  } else if (isNapkinsTablewareProduct(product)) {
    seoDescription = getNapkinsTablewareProductSeo(product).pageDescription;
    seoName = getNapkinsTablewareDisplayName(product);
  } else if (isHotCupProduct(product)) {
    seoDescription = getHotCupProductSeo(product).pageDescription;
    seoName = getHotCupDisplayName(product);
  } else if (isGloveProduct(product)) {
    seoDescription = getGloveProductSeo(product).pageDescription;
    seoName = getGloveDisplayName(product);
  }

  return buildProductLd({
    name: seoName,
    description: seoDescription,
    image,
    url: canonicalUrl,
    price: basePrice,
    sku: product.code,
    category: product.category,
  });
}

export default function PlainPackagingDetail({ product, relatedProducts }) {
  const router = useRouter();
  const [numCases, setNumCases] = useState(1);
  const selectedTier = product?.caseTiers ? getTierForCases(product.caseTiers, numCases) || product.caseTiers[0] : null;

  if (!product) {
    return (
      <Layout>
        <Head><title>Product Not Found | PrintNPack</title></Head>
        <div className="max-w-2xl mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-stone-900 mb-4">Product not found</h1>
          <Link href="/plain-packaging" className="inline-block bg-stone-800 text-white px-6 py-3 rounded-xl hover:bg-stone-900 transition-colors">
            Back to Plain Packaging
          </Link>
        </div>
      </Layout>
    );
  }

  const estimatedTotal = selectedTier
    ? `€${(numCases * discountedPrice(selectedTier.pricePerCase)).toFixed(2)}`
    : '—';

  const isPizzaBox = product.category === 'Pizza Boxes';
  const isHeatSealer = product.id === '220021';
  const isBiobox = product.category === 'Biobox';
  const isRefuseSack = isRefuseSackProduct(product);
  const isNapkinsTableware = isNapkinsTablewareProduct(product);
  const isHotCup = isHotCupProduct(product);
  const isGlove = isGloveProduct(product);
  const bioboxSeo = isBiobox ? getBioboxProductSeo(product) : null;
  const refuseSackSeo = isRefuseSack ? getRefuseSackProductSeo(product) : null;
  const napkinsTablewareSeo = isNapkinsTableware ? getNapkinsTablewareProductSeo(product) : null;
  const hotCupSeo = isHotCup ? getHotCupProductSeo(product) : null;
  const gloveSeo = isGlove ? getGloveProductSeo(product) : null;
  const displayName = isRefuseSack
    ? getRefuseSackDisplayName(product)
    : isNapkinsTableware
      ? getNapkinsTablewareDisplayName(product)
      : isHotCup
        ? getHotCupDisplayName(product)
        : isGlove
          ? getGloveDisplayName(product)
          : product.name;
  const pageTitle = isPizzaBox
    ? `${product.name} | Pizza Boxes Ireland | PrintNPack`
    : isHeatSealer
      ? 'Sealer Bar Ireland | 300mm Heat Sealer Bar — Catering Equipment'
      : isRefuseSack
        ? refuseSackSeo.pageTitle
        : isNapkinsTableware
          ? napkinsTablewareSeo.pageTitle
          : isHotCup
            ? hotCupSeo.pageTitle
            : isGlove
              ? gloveSeo.pageTitle
              : bioboxSeo?.pageTitle || `${product.name} — Plain Packaging | PrintNPack Ireland`;
  const metaDescription = isPizzaBox
    ? `${product.name} — wholesale kraft corrugated pizza box Ireland. Tiered case pricing, fast delivery to Dublin, Cork & nationwide. Order plain pizza boxes online.`
    : isHeatSealer
      ? 'Sealer bar Ireland — 300mm single bar heat sealer for catering and food packaging. Seals film bags and pouches. Wholesale catering equipment with tiered pricing and nationwide delivery.'
      : isRefuseSack
        ? refuseSackSeo.metaDescription
        : isNapkinsTableware
          ? napkinsTablewareSeo.metaDescription
          : isHotCup
            ? hotCupSeo.metaDescription
            : isGlove
              ? gloveSeo.metaDescription
              : bioboxSeo?.metaDescription || `${product.description?.slice(0, 155)} Fast delivery across Ireland.`;
  const visibleDescription = isRefuseSack
    ? refuseSackSeo.pageDescription
    : isNapkinsTableware
      ? napkinsTablewareSeo.pageDescription
      : isHotCup
        ? hotCupSeo.pageDescription
        : isGlove
          ? gloveSeo.pageDescription
          : product.description;
  const seoKeywords = isRefuseSack
    ? refuseSackSeo.keywords
    : isNapkinsTableware
      ? napkinsTablewareSeo.keywords
      : isHotCup
        ? hotCupSeo.keywords
        : isGlove
          ? gloveSeo.keywords
          : null;
  const canonicalUrl = `https://www.printnpack.ie/plain-packaging/${product.id}`;
  const productLd = buildPlainProductLd(product, canonicalUrl);

  const handleAddToQuote = () => {
    if (!selectedTier) return;
    addToPlainQuoteAndGo(product, selectedTier, numCases);
    router.push('/plain-packaging?openQuote=1');
  };

  return (
    <Layout>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="robots" content="index, follow" />
        {seoKeywords && (
          <meta name="keywords" content={seoKeywords} />
        )}
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="product" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="PrintNPack Ireland" />
        <meta property="og:locale" content="en_IE" />
        {product.imageSrc && !product.imageSrc.includes('logo.png') && (
          <meta property="og:image" content={`https://www.printnpack.ie${product.imageSrc}`} />
        )}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }}
        />
      </Head>

      {/* ── Breadcrumb ─────────────────────────────────────────────────────── */}
      <nav className="bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <ol className="flex items-center gap-2 text-xs text-stone-400">
            <li><Link href="/" className="hover:text-stone-600 transition-colors">Home</Link></li>
            <li>/</li>
            {isPizzaBox ? (
              <>
                <li><Link href="/pizza-boxes-ireland" className="hover:text-stone-600 transition-colors">Pizza Boxes Ireland</Link></li>
                <li>/</li>
                <li><Link href="/plain-packaging?category=Pizza+Boxes" className="hover:text-stone-600 transition-colors">Wholesale</Link></li>
              </>
            ) : isBiobox ? (
              <>
                <li><Link href="/biobox-containers-ireland" className="hover:text-stone-600 transition-colors">Biobox Containers Ireland</Link></li>
                <li>/</li>
                <li><Link href="/plain-packaging?category=Biobox" className="hover:text-stone-600 transition-colors">Wholesale</Link></li>
              </>
            ) : isRefuseSack ? (
              <>
                <li><Link href={REFUSE_SACK_HUB_PATH} className="hover:text-stone-600 transition-colors">Refuse Sacks Ireland</Link></li>
                <li>/</li>
                <li><Link href="/plain-packaging?category=Refuse+Sack" className="hover:text-stone-600 transition-colors">Wholesale</Link></li>
              </>
            ) : isNapkinsTableware ? (
              <>
                <li><Link href={NAPKINS_TABLEWARE_HUB_PATH} className="hover:text-stone-600 transition-colors">Plain Napkins &amp; Tableware</Link></li>
                <li>/</li>
                <li><Link href={`/plain-packaging?category=${NAPKINS_TABLEWARE_CATEGORY_QUERY}`} className="hover:text-stone-600 transition-colors">Wholesale</Link></li>
              </>
            ) : isHotCup ? (
              <>
                <li><Link href={HOT_CUPS_HUB_PATH} className="hover:text-stone-600 transition-colors">Disposable Coffee Cups Ireland</Link></li>
                <li>/</li>
                <li><Link href={`/plain-packaging?category=${HOT_CUPS_CATEGORY_QUERY}`} className="hover:text-stone-600 transition-colors">Wholesale</Link></li>
              </>
            ) : isGlove ? (
              <>
                <li><Link href={GLOVES_HUB_PATH} className="hover:text-stone-600 transition-colors">Disposable Gloves Ireland</Link></li>
                <li>/</li>
                <li><Link href={`/plain-packaging?category=${GLOVES_CATEGORY_QUERY}`} className="hover:text-stone-600 transition-colors">Wholesale</Link></li>
              </>
            ) : (
              <li><Link href="/plain-packaging" className="hover:text-stone-600 transition-colors">Plain Packaging</Link></li>
            )}
            <li>/</li>
            <li className="text-stone-700 font-medium truncate max-w-[200px]">{displayName}</li>
          </ol>
        </div>
      </nav>

      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start">

            {/* Image */}
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-stone-200">
              {isPlaceholderImage(product.imageSrc) ? (
                <PackagingIcon category={product.category} className="w-full h-full" />
              ) : (
                <Image
                  src={product.imageSrc}
                  alt={displayName}
                  fill
                  className="object-contain p-8"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              )}
              <div className="absolute top-4 left-4 z-10">
                <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/90 text-stone-700 border border-stone-200 shadow-sm">
                  {product.category}
                </span>
              </div>
            </div>

            {/* Product info */}
            <div className="lg:sticky lg:top-24 flex flex-col gap-5">

              {/* Title + code */}
              <div>
                <p className="text-xs text-stone-400 mb-1">Code: {product.code}</p>
                <h1 className="text-2xl sm:text-3xl font-bold text-stone-900 leading-tight">
                  {displayName}
                </h1>
                {product.qtyPerCase && (
                  <p className="text-sm text-stone-500 mt-1">{product.qtyPerCase} per case</p>
                )}
                {isPizzaBox && (
                  <p className="text-sm text-stone-600 mt-3 leading-relaxed">
                    Wholesale plain pizza box — part of our{' '}
                    <Link href="/pizza-boxes-ireland" className="text-blue-600 hover:underline font-medium">
                      pizza boxes Ireland
                    </Link>{' '}
                    range. Need branded boxes?{' '}
                    <Link href="/custom-pizza-boxes-ireland" className="text-blue-600 hover:underline font-medium">
                      Custom printing from 500 units
                    </Link>
                    .
                  </p>
                )}
                {isBiobox && (
                  <p className="text-sm text-stone-600 mt-3 leading-relaxed">
                    Wholesale biobox takeaway container — browse all sizes on our{' '}
                    <Link href="/biobox-containers-ireland" className="text-lime-700 hover:underline font-medium">
                      biobox containers Ireland
                    </Link>{' '}
                    hub. Order by the case with tiered B2B pricing and nationwide delivery.
                  </p>
                )}
                {isRefuseSack && (
                  <p className="text-sm text-stone-600 mt-3 leading-relaxed">
                    Wholesale refuse sack — part of our{' '}
                    <Link href={REFUSE_SACK_HUB_PATH} className="text-emerald-700 hover:underline font-medium">
                      refuse sacks Ireland
                    </Link>{' '}
                    range. Browse all{' '}
                    <Link href="/plain-packaging?category=Refuse+Sack" className="text-emerald-700 hover:underline font-medium">
                      refuse sacks &amp; bin bags
                    </Link>
                    .
                  </p>
                )}
                {isNapkinsTableware && (
                  <p className="text-sm text-stone-600 mt-3 leading-relaxed">
                    Wholesale napkins &amp; tableware — part of our{' '}
                    <Link href={NAPKINS_TABLEWARE_HUB_PATH} className="text-amber-700 hover:underline font-medium">
                      plain napkins Ireland
                    </Link>{' '}
                    range. Need branded napkins?{' '}
                    <Link href="/napkins-ireland" className="text-amber-700 hover:underline font-medium">
                      Custom printed napkins
                    </Link>
                    .
                  </p>
                )}
                {isHotCup && (
                  <p className="text-sm text-stone-600 mt-3 leading-relaxed">
                    Wholesale disposable hot cup — part of our{' '}
                    <Link href={HOT_CUPS_HUB_PATH} className="text-amber-700 hover:underline font-medium">
                      disposable coffee cups Ireland
                    </Link>{' '}
                    range. Browse all{' '}
                    <Link href={`/plain-packaging?category=${HOT_CUPS_CATEGORY_QUERY}`} className="text-amber-700 hover:underline font-medium">
                      hot cups &amp; lids
                    </Link>
                    .
                  </p>
                )}
                {isGlove && (
                  <p className="text-sm text-stone-600 mt-3 leading-relaxed">
                    Wholesale disposable glove — part of our{' '}
                    <Link href={GLOVES_HUB_PATH} className="text-sky-700 hover:underline font-medium">
                      disposable gloves Ireland
                    </Link>{' '}
                    range. Browse all{' '}
                    <Link href={`/plain-packaging?category=${GLOVES_CATEGORY_QUERY}`} className="text-sky-700 hover:underline font-medium">
                      nitrile &amp; vinyl gloves
                    </Link>
                    .
                  </p>
                )}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-stone-50 rounded-xl border border-stone-200 p-3 text-center">
                  <div className="text-stone-400 text-xs line-through">
                    {selectedTier ? fmtCase(selectedTier.pricePerCase) : fmtCase(product.caseTiers[0]?.pricePerCase ?? 0)}
                  </div>
                  <div className="text-base font-bold text-stone-900 leading-snug">
                    {selectedTier ? fmtCase(discountedPrice(selectedTier.pricePerCase)) : fmtCase(product.caseTiers[0] ? discountedPrice(product.caseTiers[0].pricePerCase) : 0)}
                  </div>
                  <div className="text-xs text-stone-400 mt-0.5">from / case</div>
                </div>
                <div className="bg-stone-50 rounded-xl border border-stone-200 p-3 text-center">
                  <div className="text-base font-bold text-stone-900">1 case</div>
                  <div className="text-xs text-stone-400 mt-0.5">min. order</div>
                </div>
                <div className="bg-stone-50 rounded-xl border border-stone-200 p-3 text-center">
                  <div className="text-base font-bold text-stone-900">1–2 days</div>
                  <div className="text-xs text-stone-400 mt-0.5">response</div>
                </div>
              </div>

              {/* Description */}
              {visibleDescription && (
                <p className="text-stone-600 text-sm leading-relaxed">{visibleDescription}</p>
              )}

              {/* Case tier pricing — selecting a tier sets numCases so tier stays in sync */}
              <div>
                <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">
                  Price per case — select volume
                </p>
                <div className="flex flex-col gap-2">
                  {product.caseTiers.map((tier) => {
                    const minCases = tier.casesLabel.includes('+') ? parseInt(tier.casesLabel, 10) : parseInt(tier.casesLabel, 10);
                    return (
                      <button
                        key={tier.casesLabel}
                        onClick={() => setNumCases(minCases)}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border text-sm transition-all ${
                          selectedTier?.casesLabel === tier.casesLabel
                            ? 'bg-stone-800 text-white border-stone-800 shadow-sm'
                            : 'bg-white text-stone-700 border-stone-200 hover:border-stone-300 hover:bg-stone-50'
                        }`}
                      >
                        <span className="font-semibold">{tier.casesLabel}</span>
                        <span className={`text-base font-bold ${selectedTier?.casesLabel === tier.casesLabel ? 'text-amber-300' : 'text-stone-900'}`}>
                          <span className="line-through opacity-70 text-sm font-normal mr-1">{fmtCase(tier.pricePerCase)}</span>
                          {fmtCase(discountedPrice(tier.pricePerCase))}
                          <span className={`text-xs font-normal ml-1 ${selectedTier?.casesLabel === tier.casesLabel ? 'text-stone-300' : 'text-stone-400'}`}>/ case</span>
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Cases stepper */}
              <div>
                <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">Number of cases</p>
                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-stone-200 rounded-xl overflow-hidden">
                    <button onClick={() => setNumCases(Math.max(1, numCases - 1))} className="px-4 py-3 text-stone-500 hover:bg-stone-50 font-bold text-lg">−</button>
                    <span className="px-4 py-3 font-semibold text-stone-900 min-w-[3rem] text-center">{numCases}</span>
                    <button onClick={() => setNumCases(numCases + 1)} className="px-4 py-3 text-stone-500 hover:bg-stone-50 font-bold text-lg">+</button>
                  </div>
                  {selectedTier && (
                    <div className="flex-1 text-right">
                      <p className="text-xs text-stone-400">Estimated total</p>
                      <p className="text-xl font-bold text-stone-900">{estimatedTotal}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* CTA — same quote flow as list page */}
              {selectedTier && (
                <button
                  onClick={handleAddToQuote}
                  className="w-full bg-stone-800 hover:bg-stone-900 text-white font-bold py-4 rounded-xl text-sm transition-colors active:scale-[0.98]"
                >
                  Add to Quote — {estimatedTotal}
                </button>
              )}

              {/* Trust row */}
              <div className="flex flex-wrap gap-4 text-xs text-stone-400 pt-2 border-t border-stone-100">
                <span>⚡ Fast dispatch</span>
                <span>🇮🇪 Ireland-wide delivery</span>
                <span>✉ Reply within 1–2 business days</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Products ──────────────────────────────────────────────────── */}
      {relatedProducts?.length > 0 && (
        <section className="bg-stone-50 border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-bold text-stone-900">More in {product.category}</h2>
              <Link href={`/plain-packaging?category=${encodeURIComponent(product.category)}`} className="text-xs text-stone-500 hover:text-stone-800 transition-colors">
                View all →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedProducts.map(p => (
                <Link
                  key={p.id}
                  href={`/plain-packaging/${p.id}`}
                  className="bg-white border border-stone-200 rounded-2xl overflow-hidden hover:border-stone-300 hover:shadow-md transition-all group"
                >
                  <div className="relative overflow-hidden" style={{ paddingBottom: '60%' }}>
                    {isPlaceholderImage(p.imageSrc) ? (
                      <PackagingIcon category={p.category} className="absolute inset-0 w-full h-full group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <Image
                        src={p.imageSrc}
                        alt={p.name}
                        fill
                        className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                      />
                    )}
                  </div>
                  <div className="p-3">
                    <p className="font-bold text-stone-900 text-xs leading-snug line-clamp-2">{p.name}</p>
                    <p className="text-xs text-stone-400 mt-1">{p.qtyPerCase} / case</p>
                    <p className="text-xs text-stone-500 mt-2">
                      From <span className="font-bold text-stone-800">{fmtCase(p.caseTiers[p.caseTiers.length - 1] ? discountedPrice(p.caseTiers[p.caseTiers.length - 1].pricePerCase) : 0)}</span> / case
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA Banner ───────────────────────────────────────────────────────── */}
      <section className="bg-stone-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 text-center">
          <h2 className="text-xl font-bold text-white mb-2">Need a larger order or custom quote?</h2>
          <p className="text-stone-400 text-sm mb-6 max-w-md mx-auto">
            Add items to your quote on the main Plain Packaging page, then submit one request for all.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/plain-packaging"
              className="bg-white hover:bg-stone-100 text-stone-900 font-bold py-3 px-8 rounded-xl transition-colors text-sm inline-flex items-center justify-center"
            >
              View Plain Packaging
            </Link>
            <a
              href="tel:+353894157369"
              className="bg-stone-800 hover:bg-stone-700 text-stone-200 font-semibold py-3 px-8 rounded-xl border border-stone-700 transition-colors text-sm"
            >
              Call +353 89 415 7369
            </a>
          </div>
        </div>
      </section>

      {/* ── Mobile sticky CTA (same Add to Quote flow) ─────────────────────────── */}
      {selectedTier && (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 p-3 bg-white border-t border-stone-200">
          <button
            onClick={handleAddToQuote}
            className="w-full flex items-center justify-between bg-stone-800 text-white font-bold py-4 px-5 rounded-2xl active:scale-[0.98] transition-transform"
          >
            <div>
              <p className="text-xs text-stone-400 font-normal">Estimated total</p>
              <p className="text-base font-bold">{estimatedTotal}</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm">Add to Quote</span>
              <svg className="w-4 h-4 text-stone-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        </div>
      )}
    </Layout>
  );
}

export async function getStaticPaths() {
  // Pre-build first 100 most-visited products plus priority SEO categories
  const priorityIds = new Set([
    ...PLAIN_PRODUCTS.slice(0, 100).map((p) => p.id),
    ...REFUSE_SACK_PRODUCT_IDS,
    ...NAPKINS_TABLEWARE_PRODUCT_IDS,
    ...HOT_CUPS_PRODUCT_IDS,
    ...GLOVES_PRODUCT_IDS,
  ]);
  const paths = [...priorityIds].map((id) => ({ params: { slug: id } }));
  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  const product = getProductById(params.slug);
  if (!product) return { notFound: true };
  const relatedProducts = getRelatedProducts(params.slug);
  return { props: { product, relatedProducts } };
}
