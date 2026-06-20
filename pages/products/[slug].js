import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/layout/Layout';
import Head from 'next/head';
import Link from 'next/link';
import products, { getProductBySlug, getRelatedProducts } from '../../data/products';
import ProductPageTemplate from '../../components/ProductPageTemplate';
import { buildOffer } from '../../lib/schema';

/**
 * Dynamic product page. Uses ProductPageTemplate for all products so every
 * catalog product gets the same B2B template layout. Products with a dedicated
 * page (e.g. custom-pizza-boxes-ireland) redirect to that page.
 */
const ProductDetail = ({ product, relatedProducts }) => {
  const router = useRouter();

  // Redirect to dedicated page when product has a custom URL (e.g. /custom-pizza-boxes-ireland)
  useEffect(() => {
    if (!product) return;
    if (product.url && product.url !== `/products/${product.id}`) {
      router.replace(product.url);
    }
  }, [product, router]);

  if (router.isFallback) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600" />
        </div>
      </Layout>
    );
  }

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

  // If we're redirecting to dedicated page, show minimal content while redirect happens
  if (product.url && product.url !== `/products/${product.id}`) {
    return (
      <Layout>
        <Head><title>Redirecting... | Print n Pack</title></Head>
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-gray-500">Redirecting to {product.name}…</p>
        </div>
      </Layout>
    );
  }

  const baseUrl = 'https://www.printnpack.ie';
  const productPath = `/products/${product.id}`;
  const ogImage = product.images?.[0]
    ? (product.images[0].startsWith('http') ? product.images[0] : `${baseUrl}${product.images[0]}`)
    : '';

  const structuredData = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.images?.[0] ? `${baseUrl}${product.images[0]}` : undefined,
    url: `${baseUrl}${productPath}`,
    brand: { '@type': 'Brand', name: 'Print n Pack' },
    offers: buildOffer({
      url: `${baseUrl}${productPath}`,
      price: product.price ? product.price.replace(/[^\d.-]/g, '') || undefined : undefined,
    }),
  };

  return (
    <Layout>
      <Head>
        <title>{`${product.name} - Premium Packaging & Print | Print n Pack`}</title>
        <meta name="description" content={`${product.description} Custom branding, multiple sizes, fast delivery across Ireland.`} />
        <meta name="keywords" content={`${product.name}, packaging, print, Ireland, custom, branded`} />
        <meta property="og:title" content={`${product.name} - Print n Pack`} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={`${baseUrl}${productPath}`} />
        <meta property="og:type" content="product" />
        <link rel="canonical" href={`${baseUrl}${productPath}`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <ProductPageTemplate product={product} />

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
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths = products.map((product) => ({
    params: { slug: product.id },
  }));
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const product = getProductBySlug(params.slug);
  const relatedProducts = product ? getRelatedProducts(product.id) : [];

  if (!product) {
    return { notFound: true };
  }

  return {
    props: { product, relatedProducts },
    revalidate: 3600,
  };
}

export default ProductDetail;
