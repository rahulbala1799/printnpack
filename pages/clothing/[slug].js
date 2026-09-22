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
import { CLOTHING_FAQS } from '../../data/clothing-faq';

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
  const pageTitle = product.seoTitle || `${product.name} Ireland | PrintNPack`;
  const pageDescription = product.seoDescription || product.description;
  const productImages = (product.images || []).map((src) => (src.startsWith('http') ? src : `${SITE_URL}${src}`));

  const structuredData = buildProductLd({
    name: product.h1 || product.name,
    description: pageDescription,
    image: productImages.length ? productImages : undefined,
    url: pageUrl,
    price: parsePriceString(product.price),
    sku: product.id,
    category: product.schemaCategory || product.category,
  });

  const pageFaqs = (product.faqIds || [])
    .map((id) => CLOTHING_FAQS.find((item) => item.id === id))
    .filter(Boolean);

  const faqLd = pageFaqs.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: pageFaqs.map(({ q, a }) => ({
          '@type': 'Question',
          name: q,
          acceptedAnswer: { '@type': 'Answer', text: a },
        })),
      }
    : null;

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
        {product.keywords && <meta name="keywords" content={product.keywords} />}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="product" />
        <link rel="canonical" href={pageUrl} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
        {faqLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />}
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

      <ProductPageTemplate
        product={product}
        skipBreadcrumb
        seoOverride={product.h1 ? { h1: product.h1, intro: product.detailedDescription } : undefined}
      />

      {pageFaqs.length > 0 && (
        <section className="bg-white border-t border-gray-200">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{product.faqHeading || `${product.name} — FAQs`}</h2>
            <dl className="space-y-5">
              {pageFaqs.map((item) => (
                <div key={item.id}>
                  <dt className="font-semibold text-gray-900">{item.q}</dt>
                  <dd className="mt-1 text-gray-600 text-sm leading-relaxed">{item.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

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
          { href: '/clothing', label: 'Branded Clothing Ireland', desc: 'T-shirts, polos, hoodies from €12' },
          { href: '/clothing/custom-polo-shirts-ireland', label: 'Custom polo shirts Ireland', desc: 'Embroidered staff polos from €19' },
          { href: '/clothing/custom-printed-tshirts-ireland', label: 'Custom printed t-shirts', desc: 'Cotton tees from €15' },
          { href: '/clothing-faq-ireland', label: 'Clothing FAQ Ireland', desc: 'Logos, sizes and pricing' },
          { href: '/blog/branded-clothing-ireland-guide', label: 'Branded clothing guide', desc: 'Clubs, workwear and merch' },
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
