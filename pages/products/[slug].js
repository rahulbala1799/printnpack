import React from 'react';
import Layout from '../../components/layout/Layout';
import Head from 'next/head';
import Link from 'next/link';
import products, { getProductBySlug, getRelatedProducts } from '../../data/products';
import ProductPageTemplate from '../../components/ProductPageTemplate';
import CocktailNapkinConfigurator from '../../components/napkins/CocktailNapkinConfigurator';
import PrintedNapkinConfigurator from '../../components/napkins/PrintedNapkinConfigurator';
import RelatedSeoLinks from '../../components/seo/RelatedSeoLinks';
import { NAPKIN_PRODUCT_SEO } from '../../data/napkin-product-seo';
import { PRINTED_NAPKIN_PRICE_ROWS } from '../../data/printed-napkins';
import { SITE_URL } from '../../lib/site';
import { buildProductLd, parsePriceString } from '../../lib/schema';

/**
 * Dynamic product page. Uses ProductPageTemplate for all products so every
 * catalog product gets the same B2B template layout. Products with a dedicated
 * page (e.g. custom-pizza-boxes-ireland) redirect to that page.
 */
const ProductDetail = ({ product, relatedProducts }) => {
  if (!product) {
    return (
      <Layout>
        <Head><title>Product Not Found | Print n Pack</title></Head>
        <div className="max-w-2xl mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h1>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist or has been removed.</p>
          <Link href="/products" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700">
            Browse all products
          </Link>
        </div>
      </Layout>
    );
  }

  const napkinSeo = NAPKIN_PRODUCT_SEO[product.id];
  const productPath = product.id === 'premium-linen-feel-napkins'
    ? '/custom-printed-napkins'
    : `/products/${product.id}`;
  const pageUrl = `${SITE_URL}${productPath}`;
  const ogImage = product.images?.[0]
    ? (product.images[0].startsWith('http') ? product.images[0] : `${SITE_URL}${product.images[0]}`)
    : '';

  const pageTitle = napkinSeo?.title || `${product.name} - Premium Packaging & Print | Print n Pack`;
  const pageDescription = napkinSeo?.description || `${product.description} Custom branding, multiple sizes, fast delivery across Ireland.`;
  const pageKeywords = napkinSeo?.keywords || `${product.name}, packaging, print, Ireland, custom, branded`;

  const structuredData = buildProductLd({
    name: napkinSeo?.h1 || product.name,
    description: napkinSeo?.description || product.description,
    image: product.images?.[0] ? `${SITE_URL}${product.images[0]}` : undefined,
    url: pageUrl,
    price: napkinSeo?.price || parsePriceString(product.price),
    lowPrice: napkinSeo?.lowPrice,
    highPrice: napkinSeo?.highPrice,
  });

  const breadcrumbLd = napkinSeo ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Napkins Ireland', item: `${SITE_URL}/napkins-ireland` },
      { '@type': 'ListItem', position: 3, name: napkinSeo.h1, item: pageUrl },
    ],
  } : null;

  const faqLd = napkinSeo?.productFaqs?.length ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: napkinSeo.productFaqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  } : null;

  return (
    <Layout>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="product" />
        <link rel="canonical" href={pageUrl} />
        {structuredData ? (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          />
        ) : null}
        {breadcrumbLd && (
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
        )}
        {faqLd && (
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
        )}
      </Head>

      {napkinSeo && (
        <nav className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
              <li><Link href="/" className="hover:text-gray-700">Home</Link></li>
              <li>/</li>
              <li><Link href="/napkins-ireland" className="hover:text-gray-700">Napkins Ireland</Link></li>
              <li>/</li>
              <li className="text-gray-800 font-medium">{napkinSeo.h1}</li>
            </ol>
          </div>
        </nav>
      )}

      {product.id === 'premium-linen-feel-napkins' ? (
        <>
          <section className="bg-white py-12 lg:py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <PrintedNapkinConfigurator />
            </div>
          </section>
          <section className="bg-slate-50 border-t border-gray-100 py-12 lg:py-16">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Custom printed napkins for restaurants and caterers</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Custom printed napkins for restaurants, cafés and caterers. We print them in Ashbourne, Co. Meath, Ireland, and ship across Ireland and Europe. Choose 10 × 10 cm cocktail, 10 × 20 cm, 12 × 20 cm, 15 × 20 cm or 20 × 20 cm, then full colour or 1 colour. The minimum is 25 napkins. The napkins are linen-feel airlaid, printed with your logo. Delivery is confirmed on the quote. Usual print time is 3 to 5 working days after the artwork proof is approved.
              </p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Prices, ex VAT</h3>
              <div className="mb-8 overflow-x-auto rounded-xl border border-gray-200 bg-white">
                <table className="min-w-full text-sm">
                  <thead className="bg-slate-100 text-left text-gray-700">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Quantity</th>
                      <th className="px-4 py-3 font-semibold">10 × 20 cm and larger</th>
                      <th className="px-4 py-3 font-semibold">10 × 10 cm cocktail</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PRINTED_NAPKIN_PRICE_ROWS.map((row) => (
                      <tr key={row.qty} className="border-t border-gray-200">
                        <td className="px-4 py-3 font-medium text-gray-900">{row.qty.toLocaleString('en-IE')}</td>
                        <td className="px-4 py-3 text-gray-700">€{row.standardTotal.toFixed(2)} (€{row.standardUnit.toFixed(2)} each)</td>
                        <td className="px-4 py-3 text-gray-700">€{row.cocktailTotal.toFixed(2)} (€{row.cocktailUnit.toFixed(2)} each)</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">What's included</h3>
                  <ul className="space-y-2">
                    {product.features?.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-gray-600">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Specifications</h3>
                  <dl className="divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white overflow-hidden">
                    {product.specifications?.map((spec) => (
                      <div key={spec.name} className="flex justify-between gap-4 px-4 py-3 text-sm">
                        <dt className="font-medium text-gray-700">{spec.name}</dt>
                        <dd className="text-right text-gray-600">{spec.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <ProductPageTemplate
          product={product}
          seoOverride={napkinSeo}
          skipBreadcrumb={!!napkinSeo}
          belowHero={product.id === 'cocktail-napkins' ? <CocktailNapkinConfigurator /> : null}
        />
      )}

      {napkinSeo?.productFaqs?.length > 0 && (
        <section className="bg-white border-t border-gray-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Most asked questions</h2>
            <p className="text-gray-500 text-sm mb-6">
              <Link href="/napkin-faq-ireland" className="text-amber-600 hover:underline">View detailed FAQ →</Link>
            </p>
            <div className="space-y-4">
              {napkinSeo.productFaqs.map((faq) => (
                <details key={faq.q} className="group bg-slate-50 rounded-xl border border-gray-200 p-5 open:shadow-sm">
                  <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center gap-4">
                    {faq.q}
                    <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="text-gray-600 mt-3 text-sm leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {relatedProducts && relatedProducts.length > 0 && (
        <section className="bg-gray-50 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Related products</h2>
            <div className="flex flex-wrap gap-3">
              {relatedProducts.slice(0, 6).map((p) => (
                <Link
                  key={p.id}
                  href={p.url || `/products/${p.id}`}
                  className="px-4 py-2 bg-white border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-sm text-gray-700 text-sm font-medium"
                >
                  {p.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {napkinSeo?.relatedLinks && (
        <RelatedSeoLinks title="Related napkin pages" links={napkinSeo.relatedLinks} />
      )}
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths = products
    .filter((product) => product.id !== 'premium-linen-feel-napkins')
    .filter((product) => !product.url || product.url === `/products/${product.id}`)
    .map((product) => ({
      params: { slug: product.id },
    }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    return { notFound: true };
  }

  const relatedProducts = getRelatedProducts(product.id);

  return {
    props: { product, relatedProducts },
    revalidate: 3600,
  };
}

export default ProductDetail;
