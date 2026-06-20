"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { PLAIN_PRODUCTS, getProductById, getRelatedProducts } from '../../data/plain-products';
import PackagingIcon, { isPlaceholderImage } from '../../components/PackagingIcon';
import { buildProductLd } from '../../lib/schema';

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

  return buildProductLd({
    name: product.name,
    description: product.description,
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
  const pageTitle = isPizzaBox
    ? `${product.name} | Pizza Boxes Ireland | PrintNPack`
    : `${product.name} — Plain Packaging | PrintNPack Ireland`;
  const metaDescription = isPizzaBox
    ? `${product.name} — wholesale kraft corrugated pizza box Ireland. Tiered case pricing, fast delivery to Dublin, Cork & nationwide. Order plain pizza boxes online.`
    : `${product.description?.slice(0, 155)} Fast delivery across Ireland.`;
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
            ) : (
              <li><Link href="/plain-packaging" className="hover:text-stone-600 transition-colors">Plain Packaging</Link></li>
            )}
            <li>/</li>
            <li className="text-stone-700 font-medium truncate max-w-[200px]">{product.name}</li>
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
                  alt={product.name}
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
                  {product.name}
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
              {product.description && (
                <p className="text-stone-600 text-sm leading-relaxed">{product.description}</p>
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
              href="tel:+353894400155"
              className="bg-stone-800 hover:bg-stone-700 text-stone-200 font-semibold py-3 px-8 rounded-xl border border-stone-700 transition-colors text-sm"
            >
              Call +353 89 440 0155
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
  // Pre-build first 100 most-visited products; the rest build on-demand
  const paths = PLAIN_PRODUCTS.slice(0, 100).map(p => ({ params: { slug: p.id } }));
  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  const product = getProductById(params.slug);
  if (!product) return { notFound: true };
  const relatedProducts = getRelatedProducts(params.slug);
  return { props: { product, relatedProducts } };
}
