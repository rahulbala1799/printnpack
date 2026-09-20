import React from 'react';
import Layout from '../../components/layout/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { clothingProducts, clothingHref } from '../../data/clothing-products';
import { getRelatedProducts } from '../../data/products';
import ProductPageTemplate from '../../components/ProductPageTemplate';
import RelatedSeoLinks from '../../components/seo/RelatedSeoLinks';
import { SITE_URL } from '../../lib/site';
import { buildProductLd, parsePriceString } from '../../lib/schema';

export default function ClothingProductPage({ product, relatedProducts }) {
  if (!product) {
    return (
      <Layout>
        <Head><title>Product Not Found | Print n Pack</title></Head>
        <div className="max-w-2xl mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h1>
          <p className="text-gray-600 mb-6">That clothing product is not available.</p>
          <Link href="/clothing" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700">
            Back to clothing
          </Link>
        </div>
      </Layout>
    );
  }

  const productPath = clothingHref(product);
  const pageUrl = `${SITE_URL}${productPath}`;
  const ogImage = product.images?.[0]
    ? (product.images[0].startsWith('http') ? product.images[0] : `${SITE_URL}${product.images[0]}`)
    : '';
  const pageTitle = `${product.name} Ireland | PrintNPack`;
  const pageDescription = product.description;

  const structuredData = buildProductLd({
    name: product.name,
    description: product.description,
    image: product.images?.[0] ? `${SITE_URL}${product.images[0]}` : undefined,
    url: pageUrl,
    price: parsePriceString(product.price),
  });

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Branded Clothing', item: `${SITE_URL}/clothing` },
      { '@type': 'ListItem', position: 3, name: product.name, item: pageUrl },
    ],
  };

  return (
    <Layout>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="product" />
        <link rel="canonical" href={pageUrl} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      </Head>

      <nav className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-gray-700">Home</Link></li>
            <li>/</li>
            <li><Link href="/clothing" className="hover:text-gray-700">Clothing</Link></li>
            <li>/</li>
            <li className="text-gray-800 font-medium">{product.name}</li>
          </ol>
        </div>
      </nav>

      <ProductPageTemplate product={product} skipBreadcrumb />

      {relatedProducts?.length > 0 && (
        <section className="bg-gray-50 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Related clothing</h2>
            <div className="flex flex-wrap gap-3">
              {relatedProducts.map((p) => (
                <Link
                  key={p.id}
                  href={clothingHref(p)}
                  className="px-4 py-2 bg-white border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-sm text-gray-700 text-sm font-medium"
                >
                  {p.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <RelatedSeoLinks
        title="Related clothing pages"
        links={[
          { href: '/clothing', label: 'Branded Clothing Ireland', desc: 'All garments, from €12' },
          { href: '/clothing-faq-ireland', label: 'Clothing FAQ', desc: 'Logos, sizes and pricing' },
          { href: '/blog/branded-clothing-ireland-guide', label: 'Buying guide', desc: 'Workwear vs promotional clothing' },
        ]}
      />
    </Layout>
  );
}

export async function getStaticPaths() {
  return {
    paths: clothingProducts.map((product) => ({ params: { slug: product.id } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const product = clothingProducts.find((item) => item.id === params.slug) || null;
  if (!product) return { notFound: true };

  return {
    props: {
      product,
      relatedProducts: getRelatedProducts(product.id, 5),
    },
    revalidate: 3600,
  };
}
