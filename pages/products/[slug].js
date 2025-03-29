import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import products, { getProductBySlug, getRelatedProducts } from '../../data/products';

// Page component
const ProductDetail = ({ product, relatedProducts }) => {
  const router = useRouter();
  
  // If the page is not yet generated, this will be displayed initially until getStaticProps() runs
  if (router.isFallback) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <div className="flex justify-center items-center h-96">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-600"></div>
          </div>
        </div>
      </Layout>
    );
  }

  // If product not found
  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-bold mb-6">Product Not Found</h1>
          <p className="mb-8">The product you're looking for doesn't exist or has been removed.</p>
          <Link href="/products" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg">
            Browse All Products
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Head>
        <title>{product.name} - PrintNPack</title>
        <meta name="description" content={product.description} />
      </Head>

      {/* Breadcrumbs */}
      <div className="bg-gray-100 py-3 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/products" className="hover:text-blue-600">Products</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Hero */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="relative">
            <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm h-96 relative mb-6">
              <Image 
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-contain"
              />
            </div>
            
            {/* Thumbnail gallery */}
            <div className="flex space-x-4">
              {product.images.map((image, index) => (
                <div key={index} className="w-24 h-24 border border-gray-200 rounded-md p-2 cursor-pointer hover:border-blue-500">
                  <div className="relative w-full h-full">
                    <Image 
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Product Info */}
          <div>
            <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
              {product.category}
            </span>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
            
            <p className="text-xl text-gray-700 mb-6">{product.description}</p>
            
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-3">Key Features:</h2>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="border-t border-b border-gray-200 py-4 mb-6">
              <div className="flex flex-wrap gap-y-2">
                <div className="w-full md:w-1/2 flex items-center">
                  <span className="text-gray-600 mr-2">Price:</span>
                  <span className="font-semibold">{product.price}</span>
                </div>
                <div className="w-full md:w-1/2 flex items-center">
                  <span className="text-gray-600 mr-2">Min. Order:</span>
                  <span className="font-semibold">{product.moq} units</span>
                </div>
                <div className="w-full md:w-1/2 flex items-center">
                  <span className="text-gray-600 mr-2">Lead Time:</span>
                  <span className="font-semibold">{product.leadTime}</span>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <Link href="/contact" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium text-center transition-colors">
                Request a Quote
              </Link>
              <Link href="/contact?subject=Sample Request" className="flex-1 border border-blue-600 text-blue-600 hover:bg-blue-50 py-3 px-6 rounded-lg font-medium text-center transition-colors">
                Get Samples
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Product Details Tabs */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="border-b border-gray-200 mb-8">
            <div className="flex overflow-x-auto">
              <button className="px-6 py-3 border-b-2 border-blue-600 text-blue-600 font-medium">
                Description
              </button>
              <button className="px-6 py-3 text-gray-500 hover:text-gray-700">
                Specifications
              </button>
              <button className="px-6 py-3 text-gray-500 hover:text-gray-700">
                Customization
              </button>
              <button className="px-6 py-3 text-gray-500 hover:text-gray-700">
                Shipping
              </button>
            </div>
          </div>
          
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold mb-4">Product Description</h2>
            <p className="mb-6">{product.detailedDescription}</p>
            
            <h3 className="text-xl font-bold mb-3">Technical Specifications</h3>
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-8">
              <table className="w-full">
                <tbody>
                  {product.specifications.map((spec, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="py-3 px-4 border-b border-gray-200 font-medium">{spec.name}</td>
                      <td className="py-3 px-4 border-b border-gray-200">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related Products */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8">Related Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedProducts.map(relatedProduct => (
            <div key={relatedProduct.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 relative bg-gray-50">
                <Image
                  src={relatedProduct.imageSrc}
                  alt={relatedProduct.name}
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">{relatedProduct.name}</h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{relatedProduct.description}</p>
                <Link 
                  href={`/products/${relatedProduct.id}`}
                  className="text-blue-600 text-sm font-medium hover:text-blue-800"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Custom {product.name}?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact our team today to discuss your specific requirements and get a customized quote.
          </p>
          <Link href="/contact" className="inline-block bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </Layout>
  );
};

// This function gets called at build time
export async function getStaticPaths() {
  // Get the paths we want to pre-render based on products
  const paths = products.map((product) => ({
    params: { slug: product.id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  // { fallback: true } would generate the page on-demand
  return { paths, fallback: true };
}

// This function gets called at build time
export async function getStaticProps({ params }) {
  const product = getProductBySlug(params.slug);
  
  // Get related products
  const relatedProducts = product ? getRelatedProducts(product.id) : [];
  
  // If no product is found, return 404 page
  if (!product) {
    return {
      notFound: true,
    };
  }

  // Pass product data to the page via props
  return {
    props: { 
      product,
      relatedProducts
    },
    // Re-generate the page at most once per hour
    revalidate: 3600,
  };
}

export default ProductDetail; 