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

  // Create structured data for product
  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "image": product.images[0],
    "brand": {
      "@type": "Brand",
      "name": "PrintNPack"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "EUR",
      "price": product.price.replace(/[^\d.-]/g, ''),
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <Layout>
      <Head>
        <title>{`${product.name} - Premium Packaging Solutions | PrintNPack`}</title>
        <meta name="description" content={`${product.description} Explore our high-quality ${product.name} with custom branding options, multiple sizes, and fast delivery. Perfect for restaurants and retail businesses.`} />
        <meta name="keywords" content={`${product.name}, packaging solutions, food packaging, retail packaging, custom packaging, sustainable packaging, branded packaging`} />
        <meta property="og:title" content={`${product.name} - PrintNPack`} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={product.images[0]} />
        <meta property="og:type" content="product" />
        <meta property="og:url" content={`https://printnpack.com/products/${product.id}`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <style jsx global>{`
          /* Custom scrollbar styling */
          .hide-scrollbar {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
          }
          .hide-scrollbar::-webkit-scrollbar {
            display: none; /* Chrome, Safari, Opera */
          }
          
          /* Image zoom animation */
          @keyframes zoomIn {
            from { transform: scale(1); }
            to { transform: scale(1.2); }
          }
          .zoom-animation {
            animation: zoomIn 0.3s ease-out forwards;
          }
          
          /* Mobile gallery styles */
          @media (max-width: 640px) {
            .thumbnail-container {
              display: flex;
              justify-content: center;
              flex-wrap: nowrap;
              overflow-x: auto;
              -webkit-overflow-scrolling: touch;
              scroll-snap-type: x mandatory;
              padding: 0.5rem 0;
            }
            
            .thumbnail-item {
              scroll-snap-align: center;
              flex: 0 0 auto;
            }
          }
          
          /* CSS Placeholder Images */
          .css-placeholder {
            background: linear-gradient(135deg, #3182ce 25%, #4299e1 25%, #4299e1 50%, #3182ce 50%, #3182ce 75%, #4299e1 75%);
            background-size: 40px 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
            box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.2);
          }
          
          .css-placeholder.banner {
            background: linear-gradient(45deg, #2c5282 25%, #2b6cb0 25%, #2b6cb0 50%, #2c5282 50%, #2c5282 75%, #2b6cb0 75%);
            background-size: 60px 60px;
          }
          
          .css-placeholder.poster {
            background: linear-gradient(45deg, #3182ce 25%, #4299e1 25%, #4299e1 50%, #3182ce 50%, #3182ce 75%, #4299e1 75%);
            background-size: 20px 20px;
          }
          
          .css-placeholder::after {
            content: 'Wide Format Print';
            font-size: 1.2rem;
          }
        `}</style>
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

      {/* Product Hero - Redesigned */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-12">
            <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
              {product.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight max-w-4xl">{product.name}</h1>
            <p className="text-xl text-gray-700 mb-6 max-w-3xl">{product.description}</p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-2">
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white py-4 px-8 rounded-lg font-medium text-center transition-colors transform hover:scale-105 inline-flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                Request a Quote
              </Link>
              <Link href="/contact?subject=Sample Request" className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 py-4 px-8 rounded-lg font-medium text-center transition-colors transform hover:scale-105 inline-flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
                Get Free Samples
              </Link>
            </div>
          </div>
          
          {/* Product showcase with visual impact - REDESIGNED GALLERY */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left column - Main product gallery - COMPLETELY REDESIGNED */}
            <div className="lg:col-span-7 relative">
              {/* Main large image display */}
              <div className="relative overflow-hidden rounded-xl shadow-xl border border-gray-200 bg-white">
                <div className="aspect-[4/3] relative">
                  {product.images.map((image, idx) => (
                    <div 
                      key={idx} 
                      id={`gallery-main-${idx}`}
                      className="absolute inset-0 transition-opacity duration-500 ease-in-out"
                      style={{ 
                        opacity: idx === 0 ? 1 : 0,
                        pointerEvents: idx === 0 ? 'auto' : 'none' 
                      }}
                    >
                      {image.includes('css-placeholder-image') ? (
                        <div className={`absolute inset-0 css-placeholder ${idx % 2 === 0 ? 'banner' : 'poster'}`}></div>
                      ) : (
                        <Image 
                          src={image}
                          alt={`${product.name} view ${idx + 1}`}
                          fill
                          className="object-contain p-6"
                        />
                      )}
                      
                      {/* Image navigation arrows */}
                      <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 hover:opacity-100 transition-opacity">
                        <button 
                          onClick={(e) => {
                            e.preventDefault();
                            const prevIdx = (idx - 1 + product.images.length) % product.images.length;
                            document.querySelector(`#gallery-main-${idx}`).style.opacity = 0;
                            document.querySelector(`#gallery-main-${idx}`).style.pointerEvents = 'none';
                            document.querySelector(`#gallery-main-${prevIdx}`).style.opacity = 1;
                            document.querySelector(`#gallery-main-${prevIdx}`).style.pointerEvents = 'auto';
                            document.querySelector(`#gallery-thumb-${prevIdx}`).scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                          }}
                          className="bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-colors"
                          aria-label="Previous image"
                        >
                          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button 
                          onClick={(e) => {
                            e.preventDefault();
                            const nextIdx = (idx + 1) % product.images.length;
                            document.querySelector(`#gallery-main-${idx}`).style.opacity = 0;
                            document.querySelector(`#gallery-main-${idx}`).style.pointerEvents = 'none';
                            document.querySelector(`#gallery-main-${nextIdx}`).style.opacity = 1;
                            document.querySelector(`#gallery-main-${nextIdx}`).style.pointerEvents = 'auto';
                            document.querySelector(`#gallery-thumb-${nextIdx}`).scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                          }}
                          className="bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-colors"
                          aria-label="Next image"
                        >
                          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                      
                      {/* Bottom zoom indicator */}
                      <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-gray-800 shadow-lg flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                        Click to zoom
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* The overlay badge */}
                <div className="absolute top-4 right-4 z-10 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Premium Quality
                </div>
              </div>
              
              {/* New enlarged thumbnail gallery */}
              <div className="mt-6 relative">
                <div className="overflow-x-auto pb-2 hide-scrollbar thumbnail-container">
                  <div className="flex justify-center md:justify-start gap-4 px-1 w-full">
                    {product.images.map((image, index) => (
                      <button
                        key={index}
                        id={`gallery-thumb-${index}`}
                        onClick={(e) => {
                          // Hide all main images
                          product.images.forEach((_, idx) => {
                            const mainEl = document.querySelector(`#gallery-main-${idx}`);
                            if (mainEl) {
                              mainEl.style.opacity = 0;
                              mainEl.style.pointerEvents = 'none';
                            }
                            
                            // Reset all thumbnail borders
                            const thumbEl = document.querySelector(`#gallery-thumb-${idx}`);
                            if (thumbEl) {
                              thumbEl.classList.remove('border-blue-500');
                              thumbEl.classList.add('border-gray-200');
                            }
                          });
                          
                          // Show current image
                          const currentMain = document.querySelector(`#gallery-main-${index}`);
                          if (currentMain) {
                            currentMain.style.opacity = 1;
                            currentMain.style.pointerEvents = 'auto';
                          }
                          
                          // Highlight current thumbnail
                          e.currentTarget.classList.remove('border-gray-200');
                          e.currentTarget.classList.add('border-blue-500');
                        }}
                        className={`relative flex-shrink-0 border-2 rounded-lg overflow-hidden transition-all h-28 w-28 md:h-32 md:w-32 focus:outline-none hover:shadow-md thumbnail-item ${index === 0 ? 'border-blue-500' : 'border-gray-200 hover:border-blue-300'}`}
                      >
                        <div className="absolute inset-0">
                          {image.includes('css-placeholder-image') ? (
                            <div className={`absolute inset-0 css-placeholder ${index % 2 === 0 ? 'banner' : 'poster'}`}></div>
                          ) : (
                            <Image 
                              src={image}
                              alt={`${product.name} thumbnail ${index + 1}`}
                              fill
                              className="object-contain p-2"
                            />
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Gallery controls */}
                <div className="absolute -top-3 right-0 flex space-x-1">
                  <button className="bg-white rounded-full p-1 shadow-md hover:bg-gray-100 border border-gray-200">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                  </button>
                  <button className="bg-white rounded-full p-1 shadow-md hover:bg-gray-100 border border-gray-200">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Product highlight badges - MOVED BELOW GALLERY */}
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <div className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium text-gray-700 flex items-center">
                  <svg className="w-4 h-4 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Premium Quality
                </div>
                <div className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium text-gray-700 flex items-center">
                  <svg className="w-4 h-4 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                  </svg>
                  Fast Shipping
                </div>
                <div className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium text-gray-700 flex items-center">
                  <svg className="w-4 h-4 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                  Customer Favorite
                </div>
              </div>
            </div>
            
            {/* Right column - Value proposition */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-4">Why Our {product.name} Stand Out</h2>
                
                <div className="space-y-6">
                  {/* Feature highlights with icons */}
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10 rounded-md bg-blue-100 flex items-center justify-center mr-4">
                        <svg className="h-6 w-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-base font-medium text-gray-900">{feature}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Order details and CTA */}
                <div className="mt-8 bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Starting Price:</span>
                    <span className="font-bold text-blue-600">{product.price}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Minimum Order:</span>
                    <span className="font-semibold">{product.moq ? `${product.moq} units` : 'Contact for details'}</span>
                  </div>
                  <div className="flex justify-between mb-4">
                    <span className="text-gray-600">Lead Time:</span>
                    <span className="font-semibold">{product.leadTime}</span>
                  </div>
                  
                  <Link href="/contact" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium text-center transition-colors block">
                    {product.quoteRequired ? 'Request Your Custom Quote' : 'Get Your Custom Quote Today'}
                  </Link>
                  <p className="text-xs text-center text-gray-500 mt-2">No obligation • Free consultation</p>
                </div>
              </div>
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
              {product.weeklyDelivery && (
                <button className="px-6 py-3 text-gray-500 hover:text-gray-700">
                  Weekly Delivery
                </button>
              )}
            </div>
          </div>
          
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold mb-4">Product Description</h2>
            <p className="mb-6">{product.detailedDescription}</p>
            
            {/* Wide Format Size Selector - Only for wide format products */}
            {product.id === 'wide-format-products' && (
              <div className="mb-10 border border-gray-200 rounded-lg p-6 bg-white shadow-md">
                <h3 className="text-xl font-bold mb-4">Common Formats & Sizes</h3>
                <p className="mb-4">Browse our most popular sizes for wide format printing or request a custom size for your specific needs.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                  {[
                    { name: 'Standard Poster A1', size: '594mm × 841mm', usage: 'Ideal for indoor promotional displays' },
                    { name: 'Standard Poster A0', size: '841mm × 1189mm', usage: 'Perfect for high-visibility areas' },
                    { name: 'Medium Banner', size: '24" × 36" (60cm × 91cm)', usage: 'Trade shows and retail displays' },
                    { name: 'Large Banner', size: '36" × 48" (91cm × 122cm)', usage: 'Exhibition and event signage' },
                    { name: 'X-Banner Stand', size: '31.5" × 71" (80cm × 180cm)', usage: 'Portable marketing display' },
                    { name: 'Billboard Poster', size: '48" × 72" (122cm × 183cm)', usage: 'High-impact outdoor advertising' },
                    { name: 'Roll-Up Banner', size: '33.5" × 79" (85cm × 200cm)', usage: 'Conferences and presentations' },
                    { name: 'Vinyl Banner', size: '4\' × 8\' (122cm × 244cm)', usage: 'Outdoor events and storefronts' },
                    { name: 'Custom Size', size: 'Your specifications', usage: 'Tailored to your exact requirements' },
                  ].map((format, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-md">{format.name}</h4>
                      <p className="text-sm text-gray-600 mt-1">{format.size}</p>
                      <p className="text-xs text-gray-500 mt-1">{format.usage}</p>
                      <Link 
                        href={`/contact?product=Wide Format - ${format.name}&subject=Wide Format Quote Request`}
                        className="mt-3 text-blue-600 text-sm font-medium hover:text-blue-800 inline-flex items-center"
                      >
                        Request Quote
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold mb-1">Need a different size?</h4>
                      <p className="text-sm text-gray-700">We can accommodate virtually any size for your project. Contact our team for custom dimensions.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Roll-Up Banner Product Models - Only for roll-up banner products */}
            {product.id === 'roll-up-banner-stands' && (
              <div className="mb-10">
                <h3 className="text-xl font-bold mb-6">Choose Your Perfect Roll-Up Banner Stand</h3>
                
                {/* Banner Stand Models */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {product.models.map((model, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="p-5 bg-white">
                        <div className="flex items-start justify-between">
                          <h4 className="text-lg font-bold text-blue-800">{model.name}</h4>
                          {index === 1 && (
                            <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full uppercase font-semibold">Most Popular</span>
                          )}
                        </div>
                        <p className="text-gray-700 mt-2">{model.description}</p>
                        
                        <ul className="mt-4 space-y-2">
                          {model.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <p className="text-sm text-gray-600"><span className="font-medium">Recommended for:</span> {model.recommendedFor}</p>
                        </div>
                        
                        <Link 
                          href={`/contact?product=Roll-Up Banner - ${model.name}&subject=Roll-Up Banner Quote Request`}
                          className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium text-center transition-colors block"
                        >
                          Request Personalized Quote
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Applications & Benefits */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 mb-10 border border-blue-100 shadow-md">
                  <h4 className="text-2xl font-bold mb-6 text-center text-blue-800 border-b border-blue-200 pb-3">Perfect For These Applications</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {product.applications && product.applications.map((application, idx) => {
                      // Define icons for common applications
                      let icon = (
                        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      );
                      
                      // Match icons to common application types
                      if (application.toLowerCase().includes('trade show') || application.toLowerCase().includes('exhibition')) {
                        icon = (
                          <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        );
                      } else if (application.toLowerCase().includes('retail') || application.toLowerCase().includes('store')) {
                        icon = (
                          <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                          </svg>
                        );
                      } else if (application.toLowerCase().includes('conference') || application.toLowerCase().includes('event')) {
                        icon = (
                          <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        );
                      } else if (application.toLowerCase().includes('corporate') || application.toLowerCase().includes('reception')) {
                        icon = (
                          <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        );
                      } else if (application.toLowerCase().includes('sales') || application.toLowerCase().includes('pitch')) {
                        icon = (
                          <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        );
                      } else if (application.toLowerCase().includes('lecture') || application.toLowerCase().includes('training')) {
                        icon = (
                          <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        );
                      } else if (application.toLowerCase().includes('pop-up') || application.toLowerCase().includes('temporary')) {
                        icon = (
                          <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        );
                      } else if (application.toLowerCase().includes('product') || application.toLowerCase().includes('launch')) {
                        icon = (
                          <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                          </svg>
                        );
                      }
                      
                      return (
                        <div key={idx} className="bg-white rounded-lg p-5 shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg border border-blue-200 flex items-center">
                          <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mr-4 text-blue-600">
                            {icon}
                          </div>
                          <div>
                            <p className="text-lg font-medium text-gray-800">{application}</p>
                            <div className="mt-1 w-12 h-1 bg-blue-500 rounded-full"></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                {/* FAQ Section */}
                <div className="mb-12 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-5">
                    <h4 className="text-xl font-bold text-white flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Frequently Asked Questions
                    </h4>
                  </div>
                  
                  <div className="divide-y divide-gray-200">
                    {product.faq && product.faq.map((item, idx) => (
                      <div key={idx} className="hover:bg-blue-50 transition-colors duration-150">
                        <details className="group">
                          <summary className="flex justify-between items-center font-medium cursor-pointer px-8 py-4">
                            <span className="text-gray-800 text-lg flex items-center">
                              <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center mr-3 font-semibold text-sm">{idx + 1}</span>
                              {item.question}
                            </span>
                            <span className="transition-transform duration-300 group-open:rotate-180">
                              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </span>
                          </summary>
                          <div className="px-8 pb-6 pt-2">
                            <div className="ml-11">
                              <div className="h-0.5 w-12 bg-blue-200 mb-3"></div>
                              <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                            </div>
                          </div>
                        </details>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-blue-50 px-8 py-5 border-t border-blue-100">
                    <p className="text-blue-800 flex items-center text-sm">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Have more questions? <a href="/contact" className="ml-1 font-medium underline">Contact our support team</a>
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            <h3 className="text-2xl font-bold mb-6 text-blue-800">Technical Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {product.specifications.map((spec, index) => {
                // Define icons for common specification types
                let icon = (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                );
                
                // Match icons to common specification types
                if (spec.name.toLowerCase().includes('size') || spec.name.toLowerCase().includes('dimension')) {
                  icon = (
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                  );
                } else if (spec.name.toLowerCase().includes('material')) {
                  icon = (
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm8-12V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2v-14z" />
                    </svg>
                  );
                } else if (spec.name.toLowerCase().includes('weight')) {
                  icon = (
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  );
                } else if (spec.name.toLowerCase().includes('color')) {
                  icon = (
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  );
                } else if (spec.name.toLowerCase().includes('print') || spec.name.toLowerCase().includes('resolution')) {
                  icon = (
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2v-14z" />
                    </svg>
                  );
                } else if (spec.name.toLowerCase().includes('time') || spec.name.toLowerCase().includes('setup')) {
                  icon = (
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  );
                } else if (spec.name.toLowerCase().includes('accessory') || spec.name.toLowerCase().includes('included')) {
                  icon = (
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2v-10z" />
                    </svg>
                  );
                } else if (spec.name.toLowerCase().includes('warranty')) {
                  icon = (
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  );
                } else if (spec.name.toLowerCase().includes('production') || spec.name.toLowerCase().includes('delivery')) {
                  icon = (
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                    </svg>
                  );
                } else if (spec.name.toLowerCase().includes('pole') || spec.name.toLowerCase().includes('system')) {
                  icon = (
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                  );
                }
                
                return (
                  <div key={index} className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:border-blue-300">
                    <div className="p-5">
                      <div className="flex items-center mb-3">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                          {icon}
                        </div>
                        <h4 className="font-bold text-gray-800">{spec.name}</h4>
                      </div>
                      <div className="ml-13 pl-3 border-l-2 border-blue-200">
                        <p className="text-gray-700">{spec.value}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Product Variants Section */}
            {product.variants && product.variants.length > 0 && (
              <div className="mt-16">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold mb-4">Choose Your Perfect Solution</h3>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    Select from our range of premium options to find the ideal packaging solution for your specific business needs.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {product.variants.map((variant, index) => (
                    <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <div className="flex flex-col h-full">
                        <div className="relative">
                          <div className="h-64 relative bg-gray-50">
                            <Image
                              src={variant.imageSrc}
                              alt={variant.name}
                              fill
                              className="object-contain p-4"
                            />
                          </div>
                          {/* Option label */}
                          <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                            {index === 0 ? 'Best Seller' : 'Popular Choice'}
                          </div>
                        </div>
                        
                        <div className="p-6 flex-grow flex flex-col">
                          <h4 className="text-xl font-bold mb-2">{variant.name}</h4>
                          <p className="text-gray-600 mb-4">{variant.description}</p>
                          
                          <div className="flex-grow">
                            <div className="border-t border-gray-100 pt-4 mb-4">
                              <h5 className="font-semibold text-gray-900 mb-3">Key Advantages:</h5>
                              <ul className="space-y-2">
                                {variant.features.map((feature, featureIdx) => (
                                  <li key={featureIdx} className="flex items-start text-sm">
                                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-gray-700">{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          
                          <div className="mt-auto">
                            <div className="flex flex-col sm:flex-row gap-3 mt-6">
                              <Link 
                                href={`/contact?product=${encodeURIComponent(variant.name)}`}
                                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium text-center transition-colors"
                              >
                                Request Quote
                              </Link>
                              <Link 
                                href={`/contact?product=${encodeURIComponent(variant.name)}&subject=Sample Request`}
                                className="flex-1 border border-blue-600 text-blue-600 hover:bg-blue-50 py-3 px-4 rounded-lg font-medium text-center transition-colors"
                              >
                                Get Samples
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Custom solutions banner */}
                <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white shadow-lg">
                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="md:flex-1">
                      <h3 className="text-2xl font-bold mb-2">Need a Custom Solution?</h3>
                      <p className="mb-4 md:mb-0 text-blue-100">
                        We can tailor our products to your exact specifications. Contact our team to discuss your unique requirements.
                      </p>
                    </div>
                    <div className="md:ml-8">
                      <Link 
                        href="/contact?subject=Custom Solution"
                        className="inline-block bg-white text-blue-600 hover:bg-blue-50 py-3 px-6 rounded-lg font-medium text-center transition-colors"
                      >
                        Get Custom Solution
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Weekly Delivery Service Section - Redesigned */}
            {product.weeklyDelivery && (
              <div className="mt-16 mb-20 overflow-hidden">
                {/* Header with wave design */}
                <div className="relative bg-blue-600 py-8 rounded-t-2xl">
                  <div className="absolute top-0 left-0 w-full overflow-hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 text-blue-500 opacity-20">
                      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
                    </svg>
                  </div>
                  <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col md:flex-row items-center">
                      <div className="mb-6 md:mb-0 md:mr-8">
                        <div className="h-20 w-20 rounded-full bg-white flex items-center justify-center shadow-lg">
                          <svg className="h-10 w-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                      </div>
                      <div className="text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Weekly Delivery Service</h2>
                        <p className="text-blue-100 max-w-3xl">Never worry about running out of packaging again</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Main content */}
                <div className="bg-gradient-to-b from-blue-500 to-blue-600 text-white p-6 md:p-10">
                  <div className="container mx-auto">
                    <div className="md:ml-28 mb-8">
                      <p className="text-lg leading-relaxed">
                        {product.weeklyDelivery}
                      </p>
                    </div>
                    
                    {/* Benefits grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 my-10">
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transform transition-transform hover:scale-105 hover:shadow-xl">
                        <div className="bg-white/20 w-16 h-16 rounded-lg mb-6 p-3 shadow-inner">
                          <svg className="h-full w-full text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-3">Inventory Management</h3>
                        <p className="text-blue-100">
                          Never run out of essential packaging supplies. Our system ensures you always have what you need.
                        </p>
                      </div>
                      
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transform transition-transform hover:scale-105 hover:shadow-xl">
                        <div className="bg-white/20 w-16 h-16 rounded-lg mb-6 p-3 shadow-inner">
                          <svg className="h-full w-full text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-3">Time Savings</h3>
                        <p className="text-blue-100">
                          Automated scheduling saves you time and hassle. Spend less time ordering and more time on your business.
                        </p>
                      </div>
                      
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transform transition-transform hover:scale-105 hover:shadow-xl">
                        <div className="bg-white/20 w-16 h-16 rounded-lg mb-6 p-3 shadow-inner">
                          <svg className="h-full w-full text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-3">Storage Optimization</h3>
                        <p className="text-blue-100">
                          Reduce storage space needs with regular deliveries. Optimize your valuable workspace for operations.
                        </p>
                      </div>
                    </div>
                    
                    {/* CTA */}
                    <div className="text-center mt-10 mb-6">
                      <Link 
                        href="/contact?subject=Weekly Delivery Service" 
                        className="inline-block bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-bold text-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl"
                      >
                        Schedule Your Weekly Deliveries
                      </Link>
                    </div>
                  </div>
                </div>
                
                {/* Bottom wave */}
                <div className="bg-blue-600 h-16 relative rounded-b-2xl">
                  <div className="absolute bottom-0 left-0 w-full overflow-hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 text-gray-50">
                      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
                    </svg>
                  </div>
                </div>
              </div>
            )}
            
            {/* Application Examples */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6">Common Applications</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-5 rounded-lg text-center">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2">Restaurants</h4>
                  <p className="text-sm text-gray-600">Perfect for takeout and delivery services</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg text-center">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2">Retail Stores</h4>
                  <p className="text-sm text-gray-600">Enhance customer experience with branded packaging</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg text-center">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2">Food Production</h4>
                  <p className="text-sm text-gray-600">Store and display food products safely and hygienically</p>
                </div>
              </div>
            </div>
            
            {/* Technical Diagram Section */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6">Technical Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h4 className="font-semibold mb-4">Material Composition</h4>
                  <div className="flex space-x-2 mb-4">
                    {['Durability', 'Eco-Friendly', 'Food Safe'].map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Our products are manufactured using premium materials that ensure durability,
                    reliability, and food safety while minimizing environmental impact.
                  </p>
                  <h5 className="font-medium text-sm mb-2">Certification Standards:</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• ISO 9001 Certified Manufacturing</li>
                    <li>• FDA Food-Safe Materials</li>
                    <li>• Sustainable Forestry Certified (for paper products)</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h4 className="font-semibold mb-4">Size & Dimensions</h4>
                  <div className="relative h-48 mb-4 bg-gray-50">
                    <Image
                      src="/images/product-dimensions.svg"
                      alt="Product dimensions diagram"
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <p className="text-sm text-gray-600">
                    Precise dimensions ensure a perfect fit for your products. All measurements
                    follow industry standards and can be customized to your specific requirements.
                  </p>
                </div>
              </div>
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
                {relatedProduct.imageSrc.includes('css-placeholder-image') ? (
                  <div className="absolute inset-0 css-placeholder banner"></div>
                ) : (
                  <Image
                    src={relatedProduct.imageSrc}
                    alt={relatedProduct.name}
                    fill
                    className="object-contain p-4"
                  />
                )}
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