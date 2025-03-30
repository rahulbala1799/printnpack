import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import products, { getProductBySlug, getRelatedProducts } from '../../data/products';

// Page component
const ProductDetail = ({ product, relatedProducts }) => {
  const router = useRouter();
  const [showThicknessGuide, setShowThicknessGuide] = useState(false);
  
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
        <meta name="description" content={
          product.id === 'foamex-boards' 
            ? `Professional PVC foam board printing for durable indoor signage and displays. Also known as Forex, foam PVC, foam board, or expanded PVC. Available in multiple thicknesses (3mm, 5mm, 5.5mm, 10mm) with custom sizes and finishes.`
            : `${product.description} Explore our high-quality ${product.name} with custom branding options, multiple sizes, and fast delivery. Perfect for restaurants and retail businesses.`
        } />
        <meta name="keywords" content={
          product.id === 'foamex-boards'
            ? `${product.name}, Forex board, PVC foam sheet, Expanded PVC, Foam board, Rigid foam PVC, Display board, Exhibition board, Signage material, Lightweight rigid board, Mounting board, Indoor signage, POS display, Foam PVC sheet, Sign board material, Rigid PVC panel`
            : `${product.name}, packaging solutions, food packaging, retail packaging, custom packaging, sustainable packaging, branded packaging`
        } />
        <meta property="og:title" content={`${product.name} - PrintNPack`} />
        <meta property="og:description" content={
          product.id === 'foamex-boards'
            ? `Professional PVC foam board printing (also known as Forex or expanded PVC) for durable indoor signage and displays. Available in multiple thicknesses with custom sizes and finishes.`
            : product.description
        } />
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

      {/* Debug info - will only show in development */}
      {process.env.NODE_ENV === 'development' && (
        <div className="bg-yellow-100 p-2 text-xs">
          <div><strong>Debug:</strong> Product ID: {product?.id}</div>
          <div>Shape showcase should show: {product?.id === 'vinyl-stickers' ? 'YES' : 'NO'}</div>
        </div>
      )}

      {/* Breadcrumbs */}
      <div className="bg-gray-100 py-3 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/products" className="hover:text-blue-600">Products</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">{product?.name}</span>
          </div>
        </div>
      </div>
      
      {/* Hero section for Vinyl Stickers */}
      {product && product.id === 'vinyl-stickers' && (
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-purple-800 to-indigo-900 border-b border-gray-200">
          <div className="absolute inset-0 opacity-20 mix-blend-overlay">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
                  <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.5" opacity="0.5" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>
          
          <div className="container mx-auto px-4 py-16 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Premium Vinyl Stickers
                </h1>
                <p className="text-xl text-blue-100">
                  Transform your ideas into eye-catching stickers cut into virtually any shape imaginable.
                </p>
                
                <div className="flex flex-wrap gap-3 mt-6">
                  {['Custom Shapes', 'Waterproof', 'Indoor & Outdoor', 'High-Resolution', 'Quick Turnaround'].map((tag, i) => (
                    <span key={i} className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-4 pt-6">
                  <a href="#request-quote" className="bg-white hover:bg-gray-100 text-blue-800 font-semibold py-3 px-6 rounded-lg shadow-lg transition transform hover:-translate-y-1">
                    Request a Quote
                  </a>
                  <a href="#samples" className="bg-transparent hover:bg-white/10 border border-white/30 text-white font-semibold py-3 px-6 rounded-lg transition transform hover:-translate-y-1">
                    Get Free Samples
                  </a>
                </div>
              </div>
              
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-500 h-48 relative">
                      <Image 
                        src="/ifa/product/vinylstk/Window_Sticker_2_01041803202404.png.webp"
                        alt="Storefront window vinyl sticker" 
                        fill 
                        className="object-cover hover:opacity-90"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-500 h-48 relative">
                      <Image 
                        src="/ifa/product/vinylstk/Vinyl-Decals-_-Stickers.jpg"
                        alt="Custom shape vinyl stickers" 
                        fill 
                        className="object-cover hover:opacity-90"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-500 h-48 relative">
                      <Image 
                        src="/ifa/product/vinylstk/carstk.webp"
                        alt="Vehicle vinyl decal" 
                        fill 
                        className="object-cover hover:opacity-90"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-500 h-48 relative">
                      <Image 
                        src="/ifa/product/vinylstk/Transperent_Sticker_low_03281303202404.png.webp"
                        alt="Transparent vinyl sticker" 
                        fill 
                        className="object-cover hover:opacity-90"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-white py-2 px-6 rounded-lg shadow-xl transform rotate-3 z-20 font-bold text-sm">
                  Customer Favorite
                </div>
                
                <div className="absolute -bottom-2 -left-2 flex items-center gap-2 z-20">
                  <div className="bg-white/90 backdrop-blur shadow-lg rounded-full px-3 py-1 text-sm font-medium text-indigo-800 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-amber-500" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Premium Quality
                  </div>
                  <div className="bg-white/90 backdrop-blur shadow-lg rounded-full px-3 py-1 text-sm font-medium text-indigo-800 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                      <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-1M3 4h8a1 1 0 011 1v5m0 0l-3-3m3 3h5.5a1 1 0 011 1v5a1 1 0 01-1 1h-1.05a2.5 2.5 0 00-4.9 0H10" />
                    </svg>
                    Fast Shipping
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Move vinyl stickers showcase to appear right after hero section */}
      {product && product.id === 'vinyl-stickers' && (
        <div className="bg-gray-50 py-12 border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Unlimited Shape Possibilities</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our vinyl stickers can be <span className="font-semibold text-cyan-700">kiss-cut into any shape</span> you can imagine. 
                From simple geometrics to complex custom designs - if you can dream it, we can cut it!
              </p>
            </div>

            <div className="relative" id="vinyl-sticker-shape-showcase">
              <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200 p-6 mb-8">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/2">
                    <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-lg border border-blue-100 mb-4">
                      <h3 className="text-xl font-bold text-gray-800 mb-3">Interactive Shape Showcase</h3>
                      <p className="text-gray-600 mb-4">Click on any shape to see how vinyl stickers can be precision cut to match your design requirements.</p>
                      
                      <div className="relative h-80 bg-white rounded-lg border-2 border-dashed border-blue-300 flex items-center justify-center overflow-hidden" id="shape-display-area">
                        {/* Default shape display */}
                        <div className="text-center text-gray-400 absolute inset-0 flex items-center justify-center" id="default-message">
                          <p>Click a shape to preview<br />↓</p>
                        </div>
                        
                        {/* Shape will be displayed here by JavaScript */}
                        <div id="shape-preview" className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500">
                          <div id="shape-container" className="relative">
                            <div id="shape-element" className="bg-gradient-to-br from-cyan-500 to-blue-600 transition-all duration-500 shadow-lg"></div>
                            <div id="shape-label" className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-full text-sm font-medium shadow-md border border-gray-200 text-gray-700"></div>
                          </div>
                        </div>
                        
                        {/* Highlight flash effect */}
                        <div id="shape-flash" className="absolute inset-0 bg-cyan-400 opacity-0 pointer-events-none"></div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-4 rounded-lg border border-amber-100 flex items-center">
                      <div className="text-amber-500 mr-3">
                        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-amber-800 font-semibold">What is kiss-cutting?</h4>
                        <p className="text-amber-700 text-sm">A precision cutting method that cuts through the vinyl layer but not the backing paper, allowing for easy peeling of complex shapes.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:w-1/2">
                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3">
                        <h3 className="font-bold">Select a Shape</h3>
                      </div>
                      
                      <div className="p-5 bg-white">
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                          {/* Shape options will be arranged in a grid */}
                          <button id="shape-circle" className="shape-option bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-lg p-4 transition-colors flex flex-col items-center justify-center h-28">
                            <div className="w-12 h-12 bg-blue-500 rounded-full mb-2"></div>
                            <span className="text-sm font-medium text-gray-700">Circle</span>
                          </button>
                          
                          <button id="shape-star" className="shape-option bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-lg p-4 transition-colors flex flex-col items-center justify-center h-28">
                            <div className="w-12 h-12 relative mb-2">
                              <svg viewBox="0 0 24 24" className="w-full h-full text-blue-500" fill="currentColor">
                                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                              </svg>
                            </div>
                            <span className="text-sm font-medium text-gray-700">Star</span>
                          </button>
                          
                          <button id="shape-heart" className="shape-option bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-lg p-4 transition-colors flex flex-col items-center justify-center h-28">
                            <div className="w-12 h-12 relative mb-2">
                              <svg viewBox="0 0 24 24" className="w-full h-full text-blue-500" fill="currentColor">
                                <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
                              </svg>
                            </div>
                            <span className="text-sm font-medium text-gray-700">Heart</span>
                          </button>
                          
                          <button id="shape-hexagon" className="shape-option bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-lg p-4 transition-colors flex flex-col items-center justify-center h-28">
                            <div className="w-12 h-12 relative mb-2">
                              <svg viewBox="0 0 24 24" className="w-full h-full text-blue-500" fill="currentColor">
                                <path d="M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5Z" />
                              </svg>
                            </div>
                            <span className="text-sm font-medium text-gray-700">Hexagon</span>
                          </button>
                          
                          <button id="shape-custom" className="shape-option bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-lg p-4 transition-colors flex flex-col items-center justify-center h-28">
                            <div className="w-12 h-12 relative mb-2">
                              <svg viewBox="0 0 24 24" className="w-full h-full text-blue-500" fill="currentColor">
                                <path d="M15,4A8,8 0 0,1 23,12A8,8 0 0,1 15,20C13.5,20 12.1,19.5 10.9,18.7L3.7,21L6,13.8C5.2,12.6 4.7,11.2 4.7,9.7C4.7,5.7 8.1,2.3 12.1,2.3C13.6,2.3 15,2.7 16.2,3.6C15.4,3.2 14.4,3 13.5,3C9.5,3 6.2,6.3 6.2,10.3C6.2,11.5 6.5,12.7 7.1,13.7L5.3,19.4L11,17.6C12,18.2 13.2,18.5 14.4,18.5C18.4,18.5 21.7,15.2 21.7,11.2C21.7,10.3 21.5,9.3 21.1,8.5C22,9.7 22.4,11.1 22.4,12.6C22.5,16.6 19.1,20 15,20" />
                              </svg>
                            </div>
                            <span className="text-sm font-medium text-gray-700">Custom Shape</span>
                          </button>
                          
                          <button id="shape-logo" className="shape-option bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-lg p-4 transition-colors flex flex-col items-center justify-center h-28">
                            <div className="w-12 h-12 relative mb-2">
                              <svg viewBox="0 0 24 24" className="w-full h-full text-blue-500" fill="currentColor">
                                <path d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z" />
                              </svg>
                            </div>
                            <span className="text-sm font-medium text-gray-700">Logo</span>
                          </button>
                        </div>
                        
                        <div className="mt-6 p-3 bg-cyan-50 rounded-lg border border-cyan-100">
                          <p className="text-sm text-cyan-800">
                            <span className="font-semibold">Custom shapes available:</span> Our cutting technology allows us to create precise contours matching your exact design specifications, from simple to highly complex shapes.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Size range highlight */}
              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl shadow-xl p-6 text-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Versatile Size Options</h3>
                    <p className="mb-6">
                      Our vinyl stickers can be produced in virtually any size, from tiny labels to massive displays:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <svg className="w-5 h-5 mr-2 text-purple-300" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Small stickers from 20mm diameter
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 mr-2 text-purple-300" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Standard sizes: 1m x 1m to 6m x 1.5m
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 mr-2 text-purple-300" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Large format up to 1.5m width x 50m length
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 mr-2 text-purple-300" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Custom dimensions to fit your exact needs
                      </li>
                    </ul>
                  </div>
                  <div className="relative h-48 md:h-64">
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-indigo-900/50 to-transparent"></div>
                    <div className="flex justify-between items-end absolute inset-0">
                      <div className="h-12 w-12 bg-white/20 rounded-lg backdrop-blur-sm flex items-center justify-center border border-white/30">
                        <span className="text-xs font-bold">20mm</span>
                      </div>
                      <div className="h-full w-3/4 bg-white/20 rounded-lg backdrop-blur-sm flex items-center justify-center border border-white/30">
                        <span className="text-xl font-bold">Up to 50m</span>
                      </div>
                    </div>
                    <div className="absolute -top-4 right-0 bg-yellow-400 text-yellow-800 px-3 py-1 rounded-full text-sm font-bold shadow-lg transform rotate-3">
                      Any Size Possible!
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <script dangerouslySetInnerHTML={{
              __html: `
                // Interactive shape showcase logic
                document.addEventListener('DOMContentLoaded', function() {
                  const shapeOptions = document.querySelectorAll('.shape-option');
                  const shapePreview = document.getElementById('shape-preview');
                  const shapeElement = document.getElementById('shape-element');
                  const shapeLabel = document.getElementById('shape-label');
                  const defaultMessage = document.getElementById('default-message');
                  const shapeFlash = document.getElementById('shape-flash');
                  
                  // Shape definitions
                  const shapes = {
                    'shape-circle': {
                      style: 'width: 180px; height: 180px; border-radius: 50%;',
                      label: 'Perfect Circle Stickers'
                    },
                    'shape-star': {
                      style: 'width: 180px; height: 180px; clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);',
                      label: 'Star Shaped Stickers'
                    },
                    'shape-heart': {
                      style: 'width: 180px; height: 180px; clip-path: path("M180,60 A30,30,0,0,1,120,60 A30,30,0,0,1,60,60 Q60,120,120,180 Q180,120,180,60Z");',
                      label: 'Heart Shaped Stickers'
                    },
                    'shape-hexagon': {
                      style: 'width: 180px; height: 180px; clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);',
                      label: 'Hexagon Stickers'
                    },
                    'shape-custom': {
                      style: 'width: 180px; height: 180px; clip-path: path("M90,10 C130,30,170,50,160,90 C150,130,130,150,90,150 C50,150,30,130,20,90 C10,50,50,30,90,10Z");',
                      label: 'Custom Shape Stickers'
                    },
                    'shape-logo': {
                      style: 'width: 180px; height: 180px; clip-path: path("M90,20 L20,50 L20,110 L90,150 L160,110 L160,50 Z M50,60 L90,80 L130,60 L130,100 L90,120 L50,100 Z");',
                      label: 'Logo Shaped Stickers'
                    }
                  };
                  
                  // Show flash effect
                  function showFlash() {
                    shapeFlash.style.opacity = '0.5';
                    setTimeout(() => {
                      shapeFlash.style.opacity = '0';
                    }, 150);
                  }
                  
                  // Handle shape selection
                  function handleShapeSelection(shapeId) {
                    const shapeConfig = shapes[shapeId];
                    if (!shapeConfig) return;
                    
                    console.log('Selecting shape:', shapeId);
                    
                    // Hide default message
                    defaultMessage.style.opacity = '0';
                    
                    // Apply shape style
                    shapeElement.setAttribute('style', shapeConfig.style);
                    shapeLabel.textContent = shapeConfig.label;
                    
                    // Show shape with animation
                    shapePreview.style.opacity = '1';
                    
                    // Highlight flash effect
                    showFlash();
                    
                    // Highlight selected button
                    shapeOptions.forEach(btn => btn.classList.remove('ring-2', 'ring-blue-500'));
                    document.getElementById(shapeId).classList.add('ring-2', 'ring-blue-500');
                  }
                  
                  // Add both click and touch events to all shape options
                  shapeOptions.forEach(option => {
                    // Click event for desktop
                    option.addEventListener('click', function(e) {
                      e.preventDefault();
                      handleShapeSelection(this.id);
                    });
                    
                    // Touch events for mobile
                    option.addEventListener('touchstart', function(e) {
                      e.preventDefault();
                      handleShapeSelection(this.id);
                    }, {passive: false});
                  });
                  
                  // Randomly select a shape on page load after a short delay
                  setTimeout(() => {
                    try {
                      const randomIndex = Math.floor(Math.random() * shapeOptions.length);
                      if (shapeOptions[randomIndex]) {
                        console.log('Auto-selecting shape at index:', randomIndex);
                        handleShapeSelection(shapeOptions[randomIndex].id);
                      }
                    } catch (err) {
                      console.error('Error auto-selecting shape:', err);
                    }
                  }, 1000);
                  
                  console.log('Shape showcase script loaded');
                });
              `
            }} />
          </div>
        </div>
      )}
      
      {/* Special Hero Banner for Roll-Up Banner Stands */}
      {product?.id === 'roll-up-banner-stands' && (
        <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 overflow-hidden">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="text-white space-y-6 relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">Professional Roll-Up Banner Stands</h2>
                <p className="text-xl text-blue-100">Make a lasting impression at your next exhibition or event with our premium quality portable display systems.</p>
                <div className="flex flex-wrap gap-4 mt-8">
                  {[
                    'Quick 60-second setup',
                    'High-resolution graphics',
                    'Lightweight & portable',
                    'Multiple sizes available',
                    'Includes carry case'
                  ].map((feature, i) => (
                    <span key={i} className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-white flex items-center">
                      <svg className="w-4 h-4 mr-2 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative h-80 md:h-96 flex justify-center overflow-hidden rounded-xl shadow-2xl">
                <div className="absolute inset-0 flex">
                  <Image 
                    src="/images/ifa/heroh/rollup/3.png"
                    alt="Professional Roll-Up Banner"
                    fill
                    className="object-cover"
                    priority={true}
                    onError={(e) => {
                      // Fallback for image loading errors
                      console.error('Error loading image:', e);
                      e.target.style.display = 'none';
                      e.target.parentNode.classList.add('bg-gray-200');
                      e.target.parentNode.innerHTML += '<div class="flex items-center justify-center h-full text-gray-500">Image loading error</div>';
                    }}
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-blue-900/70 to-transparent"></div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 opacity-10">
            <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#mesh-gradient)" />
            </svg>
            <defs>
              <pattern id="mesh-gradient" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="100%" height="100%" fill="none" />
                <path d="M0 20 L40 20 M20 0 L20 40" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
          </div>
        </div>
      )}

      {/* Special Hero Banner for Foamex PVC Boards */}
      {product?.id === 'foamex-boards' && (
        <div className="relative bg-gradient-to-br from-purple-800 via-blue-700 to-blue-900 overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0" style={{ 
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
              backgroundSize: "60px 60px"
            }}></div>
          </div>
          
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-3 text-white space-y-6 relative z-10">
                <div className="inline-block bg-blue-500 px-4 py-1 rounded-full mb-2 font-semibold text-sm uppercase tracking-wide">Premium Indoor Signage</div>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">Foamex PVC Boards</h2>
                <p className="text-xl text-blue-100">Lightweight yet durable rigid PVC foam sheets perfect for stunning high-impact visual displays.</p>
                
                <p className="text-md text-blue-200">Also known as: Forex, Expanded PVC, Foam PVC, or Display Board</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                  {product.models.map((model, i) => (
                    <div key={i} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 transform transition-all hover:scale-105 hover:bg-white/20 cursor-pointer border border-white/20">
                      <span className="text-xl font-bold text-white">{model.name}</span>
                      <p className="text-xs text-blue-200 mt-1">{model.features[0]}</p>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-3 mt-8">
                  <button className="bg-white text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                    Request a Quote
                  </button>
                  <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                    View Size Options
                  </button>
                </div>
              </div>
              
              <div className="md:col-span-2 relative">
                <div className="relative h-80 md:h-[500px] perspective">
                  {/* 3D foamex board display */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full h-full transform rotate-y-10 rotate-x-5 rotate-z-0">
                      <div className="absolute top-0 left-0 w-4/5 h-4/5 bg-blue-200 rounded-lg shadow-2xl transform translate-x-5 translate-y-5 rotate-z-2">
                        <div className="absolute inset-0 m-2 bg-white rounded-md">
                          <div className="absolute inset-0 m-3 bg-gradient-to-br from-purple-500 to-blue-600 rounded flex items-center justify-center">
                            <div className="text-white text-center p-6">
                              <div className="text-2xl font-bold">3mm</div>
                              <div className="text-sm">Lightweight</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="absolute top-10 left-10 w-4/5 h-4/5 bg-purple-200 rounded-lg shadow-2xl transform -translate-x-5 translate-y-5 rotate-z-5">
                        <div className="absolute inset-0 m-2 bg-white rounded-md">
                          <div className="absolute inset-0 m-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded flex items-center justify-center">
                            <div className="text-white text-center p-6">
                              <div className="text-2xl font-bold">5mm</div>
                              <div className="text-sm">Most Popular</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="absolute top-20 left-20 w-4/5 h-4/5 bg-indigo-200 rounded-lg shadow-2xl transform translate-x-2 translate-y-2 rotate-z--3">
                        <div className="absolute inset-0 m-2 bg-white rounded-md">
                          <div className="absolute inset-0 m-5 bg-gradient-to-br from-blue-500 to-indigo-600 rounded flex items-center justify-center">
                            <div className="text-white text-center p-6">
                              <div className="text-2xl font-bold">10mm</div>
                              <div className="text-sm">Premium</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-[-30px] right-[-30px] w-40 h-40 bg-yellow-500 rounded-full filter blur-3xl opacity-20"></div>
                  <div className="absolute bottom-[-50px] left-[-20px] w-60 h-60 bg-pink-500 rounded-full filter blur-3xl opacity-20"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom highlights bar */}
          <div className="relative z-10 bg-gradient-to-r from-purple-900/90 via-blue-900/90 to-purple-900/90 backdrop-blur-sm border-t border-white/10">
            <div className="container mx-auto py-4 px-4">
              <div className="flex flex-wrap justify-between items-center gap-4">
                <div className="flex items-center text-white">
                  <svg className="w-6 h-6 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-sm font-medium">Premium Quality</span>
                </div>
                
                <div className="flex items-center text-white">
                  <svg className="w-6 h-6 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium">Custom Sizes Available</span>
                </div>
                
                <div className="flex items-center text-white">
                  <svg className="w-6 h-6 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-5h2a2 2 0 011.664.89l.83 1.25A1 1 0 0016.33 12H17a1 1 0 001-1v-1a1 1 0 00-1-1h-1.05a2.5 2.5 0 01-4.9 0H3V5a1 1 0 00-1-1h.5M10 5a1 1 0 011 1v3H9V6a1 1 0 011-1z" />
                  </svg>
                  <span className="text-sm font-medium">Fast 2-3 Day Production</span>
                </div>
                
                <div className="flex items-center text-white">
                  <svg className="w-6 h-6 mr-2 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium">High-Quality Vinyl Application</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Vinyl Stickers Shape Showcase - add more explicit condition */}
      {product && product.id === 'vinyl-stickers' && (
        <div className="relative bg-gradient-to-br from-cyan-800 via-blue-600 to-indigo-800 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{ 
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
              backgroundSize: "60px 60px"
            }}></div>
          </div>
          
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-3 text-white space-y-6 relative z-10">
                <div className="inline-block bg-cyan-500 px-4 py-1 rounded-full mb-2 font-semibold text-sm uppercase tracking-wide">Premium Vinyl Solutions</div>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-white">Custom Vinyl Stickers</h2>
                <p className="text-xl text-blue-100">High-quality vinyl stickers and decals for business branding, promotions, and creative applications in any size or shape.</p>
                
                <p className="text-md text-blue-200">Transform your ideas into eye-catching stickers cut into virtually any shape imaginable.</p>
              </div>
              
              <div className="md:col-span-2 relative h-64 md:h-80 rounded-xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent z-10"></div>
                {/* Replace image with CSS placeholder */}
                <div className="absolute inset-0 css-placeholder banner flex items-center justify-center">
                  <span className="text-xl font-bold text-white">Custom Vinyl Stickers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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
                          priority={idx === 0}
                          onError={(e) => {
                            console.error(`Error loading image: ${image}`);
                            e.target.style.display = 'none';
                            e.target.parentNode.classList.add('bg-gray-100');
                            const placeholder = document.createElement('div');
                            placeholder.className = 'absolute inset-0 flex items-center justify-center';
                            placeholder.innerHTML = `
                              <div class="text-center p-4">
                                <svg class="w-12 h-12 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <p class="mt-2 text-gray-500">Image could not be loaded</p>
                                <p class="text-xs text-gray-400 mt-1">${image}</p>
                              </div>
                            `;
                            e.target.parentNode.appendChild(placeholder);
                          }}
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
                              onError={(e) => {
                                console.error(`Error loading thumbnail: ${image}`);
                                e.target.style.display = 'none';
                                e.target.parentNode.classList.add('bg-gray-100');
                                e.target.parentNode.innerHTML += `
                                  <div class="flex items-center justify-center h-full text-xs text-gray-500">
                                    <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                  </div>
                                `;
                              }}
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
                  {product.features && product.features.length > 0 && product.features.map((feature, index) => (
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
            {product.id === 'roll-up-banner-stands' && product.models && product.models.length > 0 && (
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
                          {model.features && model.features.map((feature, idx) => (
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
                    {product.applications && product.applications.length > 0 && product.applications.map((application, idx) => {
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
                      }
                      
                      return (
                        <div key={idx} className="flex items-start p-4 bg-white/50 rounded-lg border border-blue-50">
                          <div className="text-blue-600 mr-4 mt-1">
                            {icon}
                          </div>
                          <div>
                            <p className="font-medium text-gray-800">{application}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
            
            {/* Applications & Benefits */}
            {product.applications && product.applications.length > 0 && (
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 mb-10 border border-blue-100 shadow-md">
              <h4 className="text-2xl font-bold mb-6 text-center text-blue-800 border-b border-blue-200 pb-3">Perfect For These Applications</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {product.applications && product.applications.length > 0 && product.applications.map((application, idx) => {
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
            )}
            
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
        </div>
      </div>
      
      {/* Technical Specifications */}
      {product.specifications && product.specifications.length > 0 && (
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Technical Specifications</h2>
              <p className="text-gray-600 text-lg">Detailed specifications and requirements for our high-quality {product.name}.</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                {product.specifications.slice(0, 3).map((spec, index) => (
                  <div key={index} className="p-6">
                    <h3 className="font-medium text-gray-900 mb-2">{spec.name}</h3>
                    <p className="text-gray-600">{spec.value}</p>
                  </div>
                ))}
              </div>
              
              {product.specifications.length > 3 && (
                <div className="border-t border-gray-200 px-6 py-4 bg-gray-50">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {product.specifications.slice(3).map((spec, index) => (
                      <div key={index} className="flex">
                        <div className="text-blue-600 mr-3">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                        </div>
                        <div>
                          <span className="block text-sm font-medium text-gray-700">{spec.name}</span>
                          <span className="block text-sm text-gray-500">{spec.value}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      
      {/* Special Visual Showcase for Foamex PVC Boards */}
      {product.id === 'foamex-boards' && (
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Premium Foamex PVC Board Options</h2>
              <p className="text-gray-600 text-lg">Versatile, durable and perfect for creating eye-catching displays for any indoor application.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-xl overflow-hidden shadow-lg relative group text-white">
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Multiple Thickness Options</h3>
                  <div className="space-y-4">
                    {[
                      { size: '3mm', desc: 'Lightweight and economical' },
                      { size: '5mm', desc: 'Most popular option', highlight: true },
                      { size: '5.5mm', desc: 'Enhanced durability' },
                      { size: '10mm', desc: 'Premium rigid display panels' }
                    ].map((item, i) => (
                      <div key={i} className={`p-4 rounded-lg ${item.highlight ? 'bg-white/20 border border-white/30' : 'bg-white/10'}`}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-lg sm:text-xl font-bold bg-white/20 text-white px-3 py-1 rounded">{item.size}</span>
                          {item.highlight && (
                            <span className="bg-yellow-400 text-indigo-900 text-xs font-bold px-3 py-1.5 rounded-full">BEST SELLER</span>
                          )}
                        </div>
                        <p className="font-medium text-sm sm:text-base text-white/90">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <button 
                      onClick={() => {
                        document.getElementById('thickness-guide-modal').classList.remove('hidden');
                      }}
                      className="bg-white text-indigo-700 hover:bg-indigo-50 px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                      View Thickness Guide
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200">
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Finishing Options</h3>
                  <div className="space-y-4">
                    <div className="flex p-4 border border-gray-100 rounded-lg">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Standard Unlaminated</h4>
                        <p className="text-sm text-gray-600">Perfect for indoor use with vibrant color reproduction</p>
                      </div>
                    </div>
                    
                    <div className="flex p-4 border border-gray-100 rounded-lg">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Matt Laminated</h4>
                        <p className="text-sm text-gray-600">Anti-glare finish with added protection against scratches</p>
                      </div>
                    </div>
                    
                    <div className="flex p-4 border border-gray-100 rounded-lg">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Gloss Laminated</h4>
                        <p className="text-sm text-gray-600">High-shine finish for vibrant colors and maximum impact</p>
                      </div>
                    </div>
                    
                    <div className="flex p-4 border border-gray-100 rounded-lg">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Double-Sided Printing</h4>
                        <p className="text-sm text-gray-600">Different designs on each side for maximum visibility</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-16 bg-gray-50 rounded-xl overflow-hidden shadow-md">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">Available Size Options</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
                    <h4 className="font-bold text-lg mb-4 text-gray-900">Standard Template Sizes</h4>
                    <ul className="space-y-2">
                      {['A0 (841mm × 1189mm)', 'A1 (594mm × 841mm)', 'A2 (420mm × 594mm)', '60cm × 90cm', '70cm × 100cm'].map((size, i) => (
                        <li key={i} className="flex items-center text-gray-700">
                          <svg className="w-5 h-5 mr-2 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {size}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
                    <h4 className="font-bold text-lg mb-4 text-gray-900">Maximum Size</h4>
                    <div className="flex justify-center mb-4">
                      <div className="relative w-48 h-24 bg-indigo-100 rounded-lg border-2 border-indigo-300 flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <div className="font-bold text-indigo-800">8ft × 4ft</div>
                            <div className="text-xs text-indigo-700">(2440mm × 1220mm)</div>
                          </div>
                        </div>
                        <div className="absolute top-0 left-0 right-0 h-2 bg-indigo-500"></div>
                        <div className="absolute bottom-0 left-0 right-0 h-2 bg-indigo-500"></div>
                        <div className="absolute left-0 top-0 bottom-0 w-2 bg-indigo-500"></div>
                        <div className="absolute right-0 top-0 bottom-0 w-2 bg-indigo-500"></div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 text-center">Our largest available size for maximum impact. Perfect for exhibition backgrounds and large displays.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
                    <h4 className="font-bold text-lg mb-4 text-gray-900">Custom Sizing</h4>
                    <div className="flex items-center justify-center mb-4">
                      <svg className="w-20 h-20 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-600 text-center">Need a specific size? We offer custom cutting to your exact specifications with no minimum order quantity.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl overflow-hidden shadow-lg relative group border border-indigo-100">
                <div className="p-8">
                  <div className="flex items-center justify-center mb-6">
                    <svg className="w-16 h-16 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center text-gray-900">Durable & Long-Lasting</h3>
                  <p className="text-gray-600 text-center mb-4">Our Foamex boards are designed for longevity, maintaining their appearance over time in indoor environments.</p>
                  <ul className="space-y-2">
                    {['Resistant to warping', 'Waterproof material', 'Impact resistant', 'UV stable inks'].map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-700 text-sm">
                        <svg className="w-4 h-4 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl overflow-hidden shadow-lg relative group border border-purple-100">
                <div className="p-8">
                  <div className="flex items-center justify-center mb-6">
                    <svg className="w-16 h-16 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center text-gray-900">High-Quality Vinyl Printing</h3>
                  <p className="text-gray-600 text-center mb-4">Premium vinyl applied to Foamex boards for vibrant, long-lasting graphics.</p>
                  <ul className="space-y-2">
                    {['Superior vinyl adhesion', 'Sharp text and fine details', 'Anti-fade technology', 'Even color application'].map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-700 text-sm">
                        <svg className="w-4 h-4 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl overflow-hidden shadow-lg relative group border border-green-100">
                <div className="p-8">
                  <div className="flex items-center justify-center mb-6">
                    <svg className="w-16 h-16 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center text-gray-900">Fast Production</h3>
                  <p className="text-gray-600 text-center mb-4">Quick turnaround times with production in just 2-3 working days for standard orders.</p>
                  <ul className="space-y-2">
                    {['2-3 day standard production', 'Next day express available', 'Free digital proofing', 'Bulk order discounts'].map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-700 text-sm">
                        <svg className="w-4 h-4 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Link href="/contact" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white py-4 px-8 rounded-lg font-medium text-center transition-colors transform hover:scale-105">
                Request Your Custom Foamex Board Quote
              </Link>
            </div>
          </div>
        </div>
      )}
      
      {/* Special Visual Showcase for Roll-Up Banner Stands */}
      {product.id === 'roll-up-banner-stands' && (
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Make an Impact with Roll-Up Banners</h2>
              <p className="text-gray-600 text-lg">Our premium roll-up banner stands offer exceptional quality and versatility for any promotional event.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg relative group">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src="/images/ifa/heroh/rollup/1.png"
                    alt="Premium Roll-Up Banner"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Premium Quality Hardware</h3>
                    <p>Durable aluminum cassette with stable base design for professional presentations.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg relative group">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src="/images/ifa/heroh/rollup/4.png"
                    alt="Versatile Roll-Up Banner"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">High-Resolution Graphics</h3>
                    <p>Crystal-clear printing with vibrant colors that catch attention from every angle.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg relative group">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src="/images/ifa/heroh/rollup/2.png"
                    alt="Easy Setup Roll-Up Banner"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Quick 60-Second Setup</h3>
                    <p>No tools required - simple and fast assembly for busy events.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg relative group">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src="/images/ifa/heroh/rollup/5.png"
                    alt="Portable Roll-Up Banner"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Lightweight & Portable</h3>
                    <p>Includes padded carry case for easy transportation between events.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg relative group">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src="/images/ifa/heroh/rollup/6.png"
                    alt="Multiple Sizes Roll-Up Banner"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Multiple Size Options</h3>
                    <p>Available in standard, economy, wide and desktop variants to suit your needs.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Link href="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-4 px-8 rounded-lg font-medium text-center transition-colors transform hover:scale-105">
                Request Your Custom Roll-Up Banner Today
              </Link>
            </div>
          </div>
        </div>
      )}
      
      {/* Product Variants */}
      <div className="mt-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">Choose Your Perfect Solution</h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Select from our range of premium options to find the ideal packaging solution for your specific business needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {product.variants && product.variants.length > 0 ? product.variants.map((variant, index) => (
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
          )) : null}
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
            {product.id === 'foamex-boards' ? (
              <div className="mb-4">
                <div className="flex justify-between items-center mb-4">
                  <h5 className="text-sm font-medium">Select a size to visualize:</h5>
                  <select 
                    id="foamex-size-selector" 
                    className="rounded-md border-gray-300 shadow-sm text-sm focus:border-blue-500 focus:ring-blue-500"
                    defaultValue="a1"
                  >
                    <option value="a0">A0 (841mm × 1189mm)</option>
                    <option value="a1">A1 (594mm × 841mm)</option>
                    <option value="a2">A2 (420mm × 594mm)</option>
                    <option value="60x90">60cm × 90cm</option>
                    <option value="70x100">70cm × 100cm</option>
                    <option value="custom">Custom Size</option>
                  </select>
                </div>
                
                <div className="relative h-80 bg-gray-50 border border-gray-200 rounded-md overflow-hidden mb-4">
                  <div id="foamex-dimension-display" className="absolute inset-0 flex items-center justify-center">
                    <div id="size-visualization" className="relative">
                      {/* Size visualization will be rendered here by JS */}
                      <div id="size-container" className="relative bg-blue-100 border-2 border-blue-500 transition-all duration-300">
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                          <span id="width-label" className="bg-white text-xs font-medium px-2 py-1 rounded border border-gray-300 shadow-sm">594mm</span>
                        </div>
                        <div className="absolute -left-12 top-1/2 transform -translate-y-1/2 whitespace-nowrap rotate-90">
                          <span id="height-label" className="bg-white text-xs font-medium px-2 py-1 rounded border border-gray-300 shadow-sm">841mm</span>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span id="size-name" className="text-lg font-bold text-blue-800 bg-white bg-opacity-70 px-3 py-1 rounded">A1</span>
                        </div>
                      </div>
                      <div id="human-silhouette" className="absolute bottom-0 right-4" style={{height: '170px', width: '60px'}}>
                        <svg viewBox="0 0 24 60" fill="currentColor" className="h-full text-gray-400">
                          <path d="M12,5 a5,5 0 1,0 0,0.1 M7,14 h10 l1.5,17 h-4 l-1,15 h-3 l-1,-15 h-4 Z" />
                        </svg>
                        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                          <span className="bg-white text-xs font-medium px-2 py-1 rounded border border-gray-300 shadow-sm">Person (170cm)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div id="custom-size-controls" className="grid grid-cols-2 gap-4 mb-4 hidden">
                  <div>
                    <label htmlFor="custom-width" className="block text-sm font-medium text-gray-700 mb-1">Width (mm)</label>
                    <input
                      type="number"
                      id="custom-width"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      placeholder="Width in mm"
                      min="100"
                      max="2440"
                      defaultValue="594"
                    />
                  </div>
                  <div>
                    <label htmlFor="custom-height" className="block text-sm font-medium text-gray-700 mb-1">Height (mm)</label>
                    <input
                      type="number"
                      id="custom-height"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      placeholder="Height in mm"
                      min="100"
                      max="1220"
                      defaultValue="841"
                    />
                  </div>
                </div>
                
                <div className="text-sm text-gray-600 mt-3">
                  <p className="mb-2">Visualize the actual size of our Foamex PVC boards with this interactive tool. The human figure (170cm) provides scale reference.</p>
                  <p>All boards can be cut to custom sizes up to a maximum of 8ft × 4ft (2440mm × 1220mm).</p>
                </div>
                
                <script dangerouslySetInnerHTML={{ __html: `
                  // Size visualization logic
                  document.addEventListener('DOMContentLoaded', function() {
                    const sizeSelector = document.getElementById('foamex-size-selector');
                    const customControls = document.getElementById('custom-size-controls');
                    const sizeContainer = document.getElementById('size-container');
                    const widthLabel = document.getElementById('width-label');
                    const heightLabel = document.getElementById('height-label');
                    const sizeName = document.getElementById('size-name');
                    const customWidth = document.getElementById('custom-width');
                    const customHeight = document.getElementById('custom-height');
                    
                    // Scale factor (pixels per mm) - will adjust based on container size
                    let scaleFactor = 0.25;
                    
                    // Size presets
                    const sizes = {
                      'a0': { width: 841, height: 1189, name: 'A0' },
                      'a1': { width: 594, height: 841, name: 'A1' },
                      'a2': { width: 420, height: 594, name: 'A2' },
                      '60x90': { width: 600, height: 900, name: '60×90cm' },
                      '70x100': { width: 700, height: 1000, name: '70×100cm' },
                      'custom': { width: 594, height: 841, name: 'Custom' }
                    };
                    
                    // Calculate appropriate scale factor based on container size
                    function calculateScaleFactor(width, height) {
                      const container = document.getElementById('foamex-dimension-display');
                      const containerWidth = container.clientWidth - 100; // leave margin
                      const containerHeight = container.clientHeight - 100;
                      
                      const widthScale = containerWidth / width;
                      const heightScale = containerHeight / height;
                      
                      // Use the smaller scale factor to ensure the entire board fits
                      return Math.min(widthScale, heightScale);
                    }
                    
                    // Update the visualization
                    function updateVisualization(width, height, name) {
                      // Calculate new scale factor
                      scaleFactor = calculateScaleFactor(width, height);
                      
                      // Update the container size
                      sizeContainer.style.width = \`\${width * scaleFactor}px\`;
                      sizeContainer.style.height = \`\${height * scaleFactor}px\`;
                      
                      // Update labels
                      widthLabel.textContent = \`\${width}mm\`;
                      heightLabel.textContent = \`\${height}mm\`;
                      sizeName.textContent = name;
                    }
                    
                    // Handle size selection change
                    sizeSelector.addEventListener('change', function() {
                      const selectedSize = sizes[this.value];
                      
                      // Show/hide custom controls
                      if (this.value === 'custom') {
                        customControls.classList.remove('hidden');
                        // Initialize custom inputs with current values
                        customWidth.value = selectedSize.width;
                        customHeight.value = selectedSize.height;
                      } else {
                        customControls.classList.add('hidden');
                        updateVisualization(selectedSize.width, selectedSize.height, selectedSize.name);
                      }
                    });
                    
                    // Handle custom size inputs
                    function handleCustomSizeChange() {
                      const width = parseInt(customWidth.value, 10) || 594;
                      const height = parseInt(customHeight.value, 10) || 841;
                      
                      // Enforce max dimensions
                      const constrainedWidth = Math.min(width, 2440);
                      const constrainedHeight = Math.min(height, 1220);
                      
                      // Update visualization
                      updateVisualization(constrainedWidth, constrainedHeight, 'Custom');
                    }
                    
                    customWidth.addEventListener('input', handleCustomSizeChange);
                    customHeight.addEventListener('input', handleCustomSizeChange);
                    
                    // Initialize with default size (A1)
                    const defaultSize = sizes['a1'];
                    updateVisualization(defaultSize.width, defaultSize.height, defaultSize.name);
                    
                    // Handle window resize
                    window.addEventListener('resize', function() {
                      const currentSize = sizeSelector.value;
                      if (currentSize === 'custom') {
                        handleCustomSizeChange();
                      } else {
                        const selectedSize = sizes[currentSize];
                        updateVisualization(selectedSize.width, selectedSize.height, selectedSize.name);
                      }
                    });
                  });
                `}} />
              </div>
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>
      </div>
      
      {/* Related Products */}
      {relatedProducts && relatedProducts.length > 0 && (
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
                      onError={(e) => {
                        console.error(`Error loading related product image: ${relatedProduct.imageSrc}`);
                        e.target.style.display = 'none';
                        e.target.parentNode.classList.add('bg-gray-100');
                        e.target.parentNode.innerHTML += `
                          <div class="flex items-center justify-center h-full text-center">
                            <div>
                              <svg class="w-10 h-10 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              <p class="mt-1 text-sm text-gray-500">${relatedProduct.name}</p>
                            </div>
                          </div>
                        `;
                      }}
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
      )}
      
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
      
      {/* Thickness Guide Modal */}
      <div id="thickness-guide-modal" className="fixed inset-0 z-50 hidden overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
          </div>
          
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
          
          <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full sm:p-6">
            <div className="absolute top-0 right-0 pt-4 pr-4">
              <button 
                type="button" 
                className="text-gray-400 hover:text-gray-500 focus:outline-none"
                onClick={() => {
                  document.getElementById('thickness-guide-modal').classList.add('hidden');
                }}
              >
                <span className="sr-only">Close</span>
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div>
              <div className="mt-3 text-center sm:mt-0 sm:text-left">
                <h3 className="text-2xl leading-6 font-bold text-gray-900 mb-4 pb-2 border-b">
                  Foamex PVC Board Thickness Guide
                </h3>
                
                <div className="mt-6">
                  <p className="text-sm text-gray-500 mb-6">
                    Choosing the right thickness is crucial for your specific application. This guide provides honest insights about each option to help you make the best decision.
                  </p>
                  
                  <div className="grid grid-cols-1 gap-6">
                    <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                      <div className="flex items-center mb-3">
                        <div className="bg-blue-100 text-blue-800 font-bold rounded-lg px-3 py-1 mr-3">3mm</div>
                        <h4 className="text-lg font-semibold text-gray-900">Lightweight & Economical</h4>
                      </div>
                      
                      <div className="space-y-3 text-gray-700">
                        <p><span className="font-medium">Best for:</span> Temporary indoor displays, short-term promotions, small to medium-sized signs</p>
                        <p><span className="font-medium">Honest assessment:</span> This is our thinnest option and is somewhat flexible/flimsy. For best results, we recommend mounting it to a rigid surface using strong double-sided tape or adhesive. It's lightweight enough that tape mounting works very well.</p>
                        <p><span className="font-medium">Weight:</span> Approximately 1.8kg per square meter</p>
                        <p><span className="font-medium">Ideal environments:</span> Indoor use only, away from high-traffic areas where it might get bumped or bent</p>
                        <div className="flex items-center mt-2 text-sm text-amber-700">
                          <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                          </svg>
                          <span>Not recommended for self-standing applications without proper support</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-200">
                      <div className="flex items-center mb-3">
                        <div className="bg-indigo-100 text-indigo-800 font-bold rounded-lg px-3 py-1 mr-3">5mm</div>
                        <h4 className="text-lg font-semibold text-gray-900">Most Popular</h4>
                        <span className="ml-auto bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-1 rounded-full">BEST SELLER</span>
                      </div>
                      
                      <div className="space-y-3 text-gray-700">
                        <p><span className="font-medium">Best for:</span> General signage, medium-term displays, exhibition panels, information boards</p>
                        <p><span className="font-medium">Honest assessment:</span> This offers a good balance between rigidity and economy. It's firm enough to stand on its own for medium-sized displays but may still benefit from support for larger sizes. Our most versatile and popular option.</p>
                        <p><span className="font-medium">Weight:</span> Approximately 3kg per square meter</p>
                        <p><span className="font-medium">Ideal environments:</span> Indoor use in retail environments, offices, exhibitions</p>
                        <div className="flex items-center mt-2 text-sm text-green-700">
                          <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Best all-around choice for most applications</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-purple-50 p-5 rounded-lg border border-purple-200">
                      <div className="flex items-center mb-3">
                        <div className="bg-purple-100 text-purple-800 font-bold rounded-lg px-3 py-1 mr-3">5.5mm</div>
                        <h4 className="text-lg font-semibold text-gray-900">Enhanced Durability</h4>
                      </div>
                      
                      <div className="space-y-3 text-gray-700">
                        <p><span className="font-medium">Best for:</span> Premium displays, larger format signs, long-term installations</p>
                        <p><span className="font-medium">Honest assessment:</span> The extra 0.5mm makes a noticeable difference in rigidity compared to standard 5mm boards. Offers enhanced durability while maintaining a relatively lightweight profile. Good for vertical displays and more premium applications.</p>
                        <p><span className="font-medium">Weight:</span> Approximately 3.3kg per square meter</p>
                        <p><span className="font-medium">Ideal environments:</span> Indoor retail environments, corporate settings, premium exhibitions</p>
                        <div className="flex items-center mt-2 text-sm text-purple-700">
                          <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Good balance of durability and weight</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
                      <div className="flex items-center mb-3">
                        <div className="bg-blue-100 text-blue-800 font-bold rounded-lg px-3 py-1 mr-3">10mm</div>
                        <h4 className="text-lg font-semibold text-gray-900">Premium Rigid Display</h4>
                      </div>
                      
                      <div className="space-y-3 text-gray-700">
                        <p><span className="font-medium">Best for:</span> Free-standing displays, premium signage, long-term installations, larger format applications</p>
                        <p><span className="font-medium">Honest assessment:</span> This is our most substantial option and is definitely not flimsy. It's quite rigid and may be too heavy for certain adhesive mounting applications. The additional weight makes it very stable for self-standing displays but requires more robust mounting hardware when wall-mounted.</p>
                        <p><span className="font-medium">Weight:</span> Approximately 6kg per square meter (an 8ft × 4ft sheet weighs around 17.5kg)</p>
                        <p><span className="font-medium">Ideal environments:</span> Indoor premium retail environments, exhibitions, long-term installations</p>
                        <div className="flex items-center mt-2 text-sm text-amber-700">
                          <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                          </svg>
                          <span>Too heavy for standard adhesive mounting - requires mechanical fixings</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Selection Tips</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>For temporary displays or cost-sensitive projects, 3mm is adequate but will need proper support</li>
                      <li>For general signage and medium-term use, 5mm provides the best value and versatility</li>
                      <li>For premium appearance or self-standing applications, choose 5.5mm or 10mm</li>
                      <li>Consider the mounting method: lighter boards (3mm, 5mm) work well with adhesives, while heavier boards (5.5mm, 10mm) may require mechanical fixings</li>
                      <li>Larger sizes benefit from thicker boards to maintain structural integrity</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-5 sm:mt-6">
              <button 
                type="button"
                className="w-full inline-flex justify-center rounded-lg border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 sm:w-auto"
                onClick={() => {
                  document.getElementById('thickness-guide-modal').classList.add('hidden');
                }}
              >
                Close Guide
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Special hero banner for Premium Linen Feel Napkins */}
      {product && product.id === 'premium-linen-feel-napkins' && (
        <div className="bg-gradient-to-br from-slate-50 via-white to-slate-100 py-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-repeat" style={{ backgroundImage: 'url(/images/pattern-light.svg)', backgroundSize: '200px' }}></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Elevate Your Dining Experience</h2>
                <p className="text-lg text-slate-700 mb-8">Our Premium Linen Feel Napkins combine the luxury of cloth with the convenience of disposable products. Experience the difference that superior absorbency and elegant presentation make.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white rounded-lg p-5 shadow-sm border border-slate-100 transform transition hover:shadow-md hover:-translate-y-1">
                    <div className="flex items-start mb-2">
                      <span className="bg-blue-100 text-blue-600 p-2 rounded-full mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <h3 className="font-bold text-slate-800">Premium Texture</h3>
                    </div>
                    <p className="text-slate-600 ml-11">Cloth-like feel for upscale dining experiences</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-5 shadow-sm border border-slate-100 transform transition hover:shadow-md hover:-translate-y-1">
                    <div className="flex items-start mb-2">
                      <span className="bg-blue-100 text-blue-600 p-2 rounded-full mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      </span>
                      <h3 className="font-bold text-slate-800">3x Absorbency</h3>
                    </div>
                    <p className="text-slate-600 ml-11">Absorbs up to three times more than paper napkins</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-5 shadow-sm border border-slate-100 transform transition hover:shadow-md hover:-translate-y-1">
                    <div className="flex items-start mb-2">
                      <span className="bg-blue-100 text-blue-600 p-2 rounded-full mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </span>
                      <h3 className="font-bold text-slate-800">Perfect Fold</h3>
                    </div>
                    <p className="text-slate-600 ml-11">Pre-folded to 20cm × 10cm for elegant place settings</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-5 shadow-sm border border-slate-100 transform transition hover:shadow-md hover:-translate-y-1">
                    <div className="flex items-start mb-2">
                      <span className="bg-blue-100 text-blue-600 p-2 rounded-full mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                      </span>
                      <h3 className="font-bold text-slate-800">Cutlery Option</h3>
                    </div>
                    <p className="text-slate-600 ml-11">Special pocket fold for silverware presentation</p>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2 relative">
                <div className="bg-gradient-to-br from-blue-600/10 to-slate-100 rounded-2xl p-8 shadow-lg">
                  <div id="napkin-folding-demo" className="aspect-square w-full relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img 
                        src="/images/placeholders/napkins/airlaid-main.jpg" 
                        alt="Premium Linen Feel Napkin" 
                        className="object-cover rounded-lg shadow-lg transform transition-all duration-700 ease-in-out"
                        id="napkin-state-image"
                      />
                    </div>
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 z-10">
                      <button 
                        className="bg-white px-4 py-2 rounded-lg shadow-sm text-slate-800 font-medium hover:bg-blue-50 transform transition active:scale-95 border border-slate-200"
                        id="fold-button-1"
                      >
                        Step 1
                      </button>
                      <button 
                        className="bg-white px-4 py-2 rounded-lg shadow-sm text-slate-800 font-medium hover:bg-blue-50 transform transition active:scale-95 border border-slate-200"
                        id="fold-button-2"
                      >
                        Step 2
                      </button>
                      <button 
                        className="bg-white px-4 py-2 rounded-lg shadow-sm text-slate-800 font-medium hover:bg-blue-50 transform transition active:scale-95 border border-slate-200"
                        id="fold-button-3"
                      >
                        Step 3
                      </button>
                      <button 
                        className="bg-white px-4 py-2 rounded-lg shadow-sm text-slate-800 font-medium hover:bg-blue-50 transform transition active:scale-95 border border-slate-200"
                        id="fold-button-reset"
                      >
                        Reset
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <script dangerouslySetInnerHTML={{
            __html: `
              // Interactive napkin folding demonstration
              document.addEventListener('DOMContentLoaded', function() {
                const napkinImage = document.getElementById('napkin-state-image');
                const foldButton1 = document.getElementById('fold-button-1');
                const foldButton2 = document.getElementById('fold-button-2');
                const foldButton3 = document.getElementById('fold-button-3');
                const resetButton = document.getElementById('fold-button-reset');
                
                // Image paths for different folding states
                const napkinStates = {
                  'unfolded': '/images/placeholders/napkins/airlaid-main.jpg',
                  'fold1': '/images/placeholders/napkins/airlaid-fold-1.jpg',
                  'fold2': '/images/placeholders/napkins/airlaid-fold-2.jpg',
                  'fold3': '/images/placeholders/napkins/airlaid-cutlery-pocket.jpg'
                };
                
                // Set initial state
                let currentState = 'unfolded';
                
                // Highlight active button
                function highlightButton(activeButton) {
                  [foldButton1, foldButton2, foldButton3, resetButton].forEach(btn => {
                    btn.classList.remove('bg-blue-100', 'text-blue-700');
                    btn.classList.add('bg-white', 'text-slate-800');
                  });
                  
                  if (activeButton) {
                    activeButton.classList.remove('bg-white', 'text-slate-800');
                    activeButton.classList.add('bg-blue-100', 'text-blue-700');
                  }
                }
                
                // Create event handlers with both click and touch support
                function handleStep1() {
                  currentState = 'fold1';
                  napkinImage.style.transform = 'rotate(-90deg)';
                  napkinImage.src = napkinStates.fold1;
                  highlightButton(foldButton1);
                }
                
                function handleStep2() {
                  currentState = 'fold2';
                  napkinImage.style.transform = 'rotate(0deg) scale(0.9)';
                  napkinImage.src = napkinStates.fold2;
                  highlightButton(foldButton2);
                }
                
                function handleStep3() {
                  currentState = 'fold3';
                  napkinImage.style.transform = 'rotate(0deg) scale(1)';
                  napkinImage.src = napkinStates.fold3;
                  highlightButton(foldButton3);
                }
                
                function handleReset() {
                  currentState = 'unfolded';
                  napkinImage.style.transform = 'rotate(0deg) scale(1)';
                  napkinImage.src = napkinStates.unfolded;
                  highlightButton(null);
                }
                
                // Add event listeners for both click and touch
                if (foldButton1) {
                  foldButton1.addEventListener('click', handleStep1);
                  foldButton1.addEventListener('touchstart', function(e) {
                    e.preventDefault();
                    handleStep1();
                  }, { passive: false });
                }
                
                if (foldButton2) {
                  foldButton2.addEventListener('click', handleStep2);
                  foldButton2.addEventListener('touchstart', function(e) {
                    e.preventDefault();
                    handleStep2();
                  }, { passive: false });
                }
                
                if (foldButton3) {
                  foldButton3.addEventListener('click', handleStep3);
                  foldButton3.addEventListener('touchstart', function(e) {
                    e.preventDefault();
                    handleStep3();
                  }, { passive: false });
                }
                
                if (resetButton) {
                  resetButton.addEventListener('click', handleReset);
                  resetButton.addEventListener('touchstart', function(e) {
                    e.preventDefault();
                    handleReset();
                  }, { passive: false });
                }
                
                // Auto demonstrate folding on load after a delay
                setTimeout(() => {
                  handleStep1();
                  
                  setTimeout(() => {
                    handleStep2();
                    
                    setTimeout(() => {
                      handleStep3();
                      
                      setTimeout(() => {
                        handleReset();
                      }, 2000);
                    }, 2000);
                  }, 2000);
                }, 1000);
                
                console.log('Napkin folding demo initialized');
              });
            `
          }} />
        </div>
      )}
      
      {/* Napkin Texture Comparison for Premium Linen Feel Napkins */}
      {product && product.id === 'premium-linen-feel-napkins' && (
        <div className="py-16 bg-slate-50 mt-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Feel the Difference</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl overflow-hidden shadow-md transform transition hover:shadow-lg hover:-translate-y-1">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: 'url(/images/placeholders/napkins/standard-napkin.jpg)' }}></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Standard Paper Napkin</h3>
                  <ul className="space-y-2 mb-4 text-slate-700">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                      <span>Rough texture</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                      <span>Limited absorbency</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                      <span>Falls apart when wet</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                      <span>Budget appearance</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-xl overflow-hidden shadow-lg ring-2 ring-blue-500 transform transition scale-105 relative z-10">
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">RECOMMENDED</span>
                </div>
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: 'url(/images/placeholders/napkins/airlaid-texture-detail.jpg)' }}></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Premium Linen Feel Napkin</h3>
                  <ul className="space-y-2 mb-4 text-slate-700">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Cloth-like texture</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>3x more absorbent</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Maintains structure when wet</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Premium presentation</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-xl overflow-hidden shadow-md transform transition hover:shadow-lg hover:-translate-y-1">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: 'url(/images/placeholders/napkins/linen-napkin.jpg)' }}></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Cloth Linen Napkin</h3>
                  <ul className="space-y-2 mb-4 text-slate-700">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Premium texture</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Excellent absorbency</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                      <span>High laundry costs</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                      <span>Storage & logistics complexity</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-lg text-slate-700 max-w-3xl mx-auto mb-6">
                Our Premium Linen Feel Napkins offer the perfect balance of quality and convenience. 
                Get the luxurious feel of cloth napkins without the hassle and expense of laundering.
              </p>
              <a href="#inquiry" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transform transition hover:scale-105 shadow-md">
                Request Sample Pack
              </a>
            </div>
          </div>
        </div>
      )}
      
      {/* Custom Napkin Calculator for Premium Linen Feel Napkins */}
      {product && product.id === 'premium-linen-feel-napkins' && (
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Napkin Quantity Calculator</h2>
              <p className="text-lg text-slate-700 text-center mb-10">Determine exactly how many napkins you need for your establishment or event.</p>
              
              <div className="bg-slate-50 rounded-xl shadow-lg p-8 border border-slate-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="establishment-type" className="block text-sm font-medium text-slate-700 mb-1">Type of Establishment</label>
                      <select 
                        id="establishment-type" 
                        className="w-full rounded-lg border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        onChange={e => {
                          const customFactorInput = document.getElementById('custom-factor');
                          if (e.target.value === 'custom') {
                            customFactorInput.classList.remove('hidden');
                          } else {
                            customFactorInput.classList.add('hidden');
                          }
                        }}
                      >
                        <option value="restaurant">Restaurant (4 napkins per seat per day)</option>
                        <option value="cafe">Café (2 napkins per seat per day)</option>
                        <option value="bar">Bar (3 napkins per seat per day)</option>
                        <option value="event">Event/Wedding (2 napkins per guest)</option>
                        <option value="hotel">Hotel (5 napkins per room per day)</option>
                        <option value="custom">Custom Usage</option>
                      </select>
                    </div>
                    
                    <div id="custom-factor" className="hidden">
                      <label htmlFor="napkins-per-unit" className="block text-sm font-medium text-slate-700 mb-1">Napkins per Person/Seat</label>
                      <input 
                        type="number" 
                        id="napkins-per-unit" 
                        className="w-full rounded-lg border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" 
                        min="1" 
                        defaultValue="3"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="capacity" className="block text-sm font-medium text-slate-700 mb-1">Number of Seats/Guests/Rooms</label>
                      <input 
                        type="number" 
                        id="capacity" 
                        className="w-full rounded-lg border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" 
                        min="1"
                        placeholder="e.g., 50"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="duration" className="block text-sm font-medium text-slate-700 mb-1">Duration (days)</label>
                      <input 
                        type="number" 
                        id="duration" 
                        className="w-full rounded-lg border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" 
                        min="1" 
                        defaultValue="7"
                        placeholder="e.g., 7 for one week"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="buffer" className="block text-sm font-medium text-slate-700 mb-1">Safety Buffer (%)</label>
                      <input 
                        type="number" 
                        id="buffer" 
                        className="w-full rounded-lg border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" 
                        min="0" 
                        max="100" 
                        defaultValue="10"
                      />
                    </div>
                    
                    <button 
                      id="calculate-napkins" 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transform transition hover:scale-105 shadow-md"
                    >
                      Calculate
                    </button>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6 border border-slate-200 h-min">
                    <h3 className="text-xl font-bold mb-4 text-slate-800">Your Estimate</h3>
                    
                    <div className="mb-6">
                      <div className="text-sm text-slate-500 mb-1">Recommended Quantity</div>
                      <div className="text-3xl font-bold text-blue-600" id="result-quantity">—</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <div className="text-sm text-slate-500 mb-1">Daily Usage</div>
                        <div className="text-xl font-semibold" id="result-daily">—</div>
                      </div>
                      <div>
                        <div className="text-sm text-slate-500 mb-1">Packages</div>
                        <div className="text-xl font-semibold" id="result-packages">—</div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 rounded-lg p-4 text-sm text-blue-800">
                      <p className="mb-2">
                        <strong>Recommendation:</strong> <span id="result-recommendation">Enter your details to calculate napkin quantity.</span>
                      </p>
                      <p id="result-cutlery-tip" className="hidden">
                        <strong>Pro Tip:</strong> Consider our cutlery pocket napkins to enhance your table presentation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <script dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('DOMContentLoaded', function() {
                const calculateButton = document.getElementById('calculate-napkins');
                const typeSelect = document.getElementById('establishment-type');
                const customFactorInput = document.getElementById('napkins-per-unit');
                const capacityInput = document.getElementById('capacity');
                const durationInput = document.getElementById('duration');
                const bufferInput = document.getElementById('buffer');
                
                const resultQuantity = document.getElementById('result-quantity');
                const resultDaily = document.getElementById('result-daily');
                const resultPackages = document.getElementById('result-packages');
                const resultRecommendation = document.getElementById('result-recommendation');
                const resultCutleryTip = document.getElementById('result-cutlery-tip');
                
                // Mapping of establishment types to napkin usage factors
                const usageFactors = {
                  'restaurant': 4,
                  'cafe': 2,
                  'bar': 3,
                  'event': 2,
                  'hotel': 5,
                  'custom': 3
                };
                
                // Standard package size
                const packageSize = 100;
                
                function calculateNapkins() {
                  // Get input values
                  const establishmentType = typeSelect.value;
                  let napkinsPerUnit = usageFactors[establishmentType];
                  
                  if (establishmentType === 'custom') {
                    napkinsPerUnit = parseInt(customFactorInput.value) || 3;
                  }
                  
                  const capacity = parseInt(capacityInput.value) || 0;
                  const duration = parseInt(durationInput.value) || 7;
                  const buffer = parseInt(bufferInput.value) || 10;
                  
                  if (capacity <= 0) {
                    alert('Please enter a valid number of seats/guests/rooms.');
                    return;
                  }
                  
                  // Calculate daily usage
                  const dailyUsage = capacity * napkinsPerUnit;
                  
                  // Calculate total with buffer
                  const totalWithoutBuffer = dailyUsage * duration;
                  const totalWithBuffer = Math.ceil(totalWithoutBuffer * (1 + buffer / 100));
                  
                  // Calculate packages needed
                  const packagesNeeded = Math.ceil(totalWithBuffer / packageSize);
                  const actualQuantity = packagesNeeded * packageSize;
                  
                  // Update results
                  resultDaily.textContent = dailyUsage.toLocaleString();
                  resultQuantity.textContent = actualQuantity.toLocaleString();
                  resultPackages.textContent = packagesNeeded.toLocaleString();
                  
                  // Set recommendation
                  if (capacity > 50) {
                    resultRecommendation.textContent = 'Based on your volume, we recommend setting up a regular delivery schedule.';
                    resultCutleryTip.classList.remove('hidden');
                  } else {
                    resultRecommendation.textContent = 'For your needs, a single order with a ' + buffer + '% buffer should be sufficient.';
                    resultCutleryTip.classList.remove('hidden');
                  }
                  
                  // Analytics event
                  try {
                    if (window.dataLayer) {
                      window.dataLayer.push({
                        event: 'napkinCalculation',
                        napkinCalculatorData: {
                          establishmentType,
                          capacity,
                          duration,
                          result: actualQuantity
                        }
                      });
                    }
                  } catch (e) {
                    console.error('Analytics error:', e);
                  }
                }
                
                if (calculateButton) {
                  calculateButton.addEventListener('click', calculateNapkins);
                  calculateButton.addEventListener('touchstart', function(e) {
                    e.preventDefault();
                    calculateNapkins();
                  }, { passive: false });
                }
                
                // Also calculate on Enter key in inputs
                const allInputs = [capacityInput, durationInput, bufferInput, customFactorInput];
                allInputs.forEach(input => {
                  if (input) {
                    input.addEventListener('keyup', function(e) {
                      if (e.key === 'Enter') {
                        calculateNapkins();
                      }
                    });
                  }
                });
                
                console.log('Napkin calculator initialized');
              });
            `
          }} />
        </div>
      )}
      
      {/* Special hero banner for Correx Boards */}
      {product && product.id === 'correx-boards' && (
        <div className="bg-gradient-to-r from-blue-50 to-slate-100 py-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-repeat" style={{ backgroundImage: 'url(/images/pattern-light.svg)', backgroundSize: '120px' }}></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Durable Outdoor Signage Solutions</h2>
                <p className="text-lg text-slate-700 mb-8">Correx Fluted Boards provide weather-resistant, lightweight, and cost-effective signage for any outdoor application.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                  <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-100 hover:shadow-md transition">
                    <div className="text-blue-600 mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-slate-800">Weather-Resistant</h3>
                    <p className="text-slate-600 text-sm">Waterproof and UV-resistant for outdoor durability</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-100 hover:shadow-md transition">
                    <div className="text-blue-600 mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-slate-800">Lightweight</h3>
                    <p className="text-slate-600 text-sm">Easy to transport, install and relocate</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-100 hover:shadow-md transition">
                    <div className="text-blue-600 mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-slate-800">Quick Production</h3>
                    <p className="text-slate-600 text-sm">Fast 1-3 day turnaround on standard orders</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-100 hover:shadow-md transition">
                    <div className="text-blue-600 mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-slate-800">Cost-Effective</h3>
                    <p className="text-slate-600 text-sm">Affordable for both small and large quantities</p>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-2/5">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="relative aspect-square">
                    <img 
                      src="/images/placeholders/correx/correx-main.jpg" 
                      alt="Correx Fluted Board" 
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent flex items-end">
                      <div className="p-6 text-white">
                        <div className="font-bold text-xl mb-1">Multiple Thickness Options</div>
                        <p className="text-sm text-white/90">2mm, 3mm, 4mm, 5mm, and 8mm available</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Corriboard Thickness Comparison */}
      {product && product.id === 'correx-boards' && (
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-3">Corriboard Thickness Comparison</h2>
              <p className="text-lg text-slate-600 text-center mb-12 max-w-3xl mx-auto">Choose the right thickness for your application based on durability needs and installation environment.</p>
              
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {/* 2mm */}
                <div className="relative group">
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 h-full flex flex-col items-center text-center transition group-hover:border-blue-300 group-hover:shadow-md">
                    <div className="w-full bg-white rounded border border-slate-200 flex justify-center items-center mb-3 relative" style={{height: "80px"}}>
                      <div className="absolute h-[2mm] w-20 bg-blue-500 rounded-sm"></div>
                    </div>
                    <h3 className="font-bold">2mm</h3>
                    <p className="text-xs text-slate-500 mt-1">Ultra-lightweight</p>
                    <div className="mt-2 text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">Short-term use</div>
                  </div>
                </div>
                
                {/* 3mm */}
                <div className="relative group">
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 h-full flex flex-col items-center text-center transition group-hover:border-blue-300 group-hover:shadow-md">
                    <div className="w-full bg-white rounded border border-slate-200 flex justify-center items-center mb-3 relative" style={{height: "80px"}}>
                      <div className="absolute h-[3mm] w-20 bg-blue-500 rounded-sm"></div>
                    </div>
                    <h3 className="font-bold">3mm</h3>
                    <p className="text-xs text-slate-500 mt-1">Economical option</p>
                    <div className="mt-2 text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">Indoor/sheltered use</div>
                  </div>
                </div>
                
                {/* 4mm */}
                <div className="relative group">
                  <div className="bg-slate-50 p-4 rounded-lg border border-blue-300 shadow-md h-full flex flex-col items-center text-center">
                    <div className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">Popular</div>
                    <div className="w-full bg-white rounded border border-slate-200 flex justify-center items-center mb-3 relative" style={{height: "80px"}}>
                      <div className="absolute h-[4mm] w-20 bg-blue-500 rounded-sm"></div>
                    </div>
                    <h3 className="font-bold">4mm</h3>
                    <p className="text-xs text-slate-500 mt-1">Standard strength</p>
                    <div className="mt-2 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Most versatile</div>
                  </div>
                </div>
                
                {/* 5mm */}
                <div className="relative group">
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 h-full flex flex-col items-center text-center transition group-hover:border-blue-300 group-hover:shadow-md">
                    <div className="w-full bg-white rounded border border-slate-200 flex justify-center items-center mb-3 relative" style={{height: "80px"}}>
                      <div className="absolute h-[5mm] w-20 bg-blue-500 rounded-sm"></div>
                    </div>
                    <h3 className="font-bold">5mm</h3>
                    <p className="text-xs text-slate-500 mt-1">Enhanced rigidity</p>
                    <div className="mt-2 text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">Outdoor durability</div>
                  </div>
                </div>
                
                {/* 8mm */}
                <div className="relative group">
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 h-full flex flex-col items-center text-center transition group-hover:border-blue-300 group-hover:shadow-md">
                    <div className="w-full bg-white rounded border border-slate-200 flex justify-center items-center mb-3 relative" style={{height: "80px"}}>
                      <div className="absolute h-[8mm] w-20 bg-blue-500 rounded-sm"></div>
                    </div>
                    <h3 className="font-bold">8mm</h3>
                    <p className="text-xs text-slate-500 mt-1">Maximum strength</p>
                    <div className="mt-2 text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">Long-term exterior</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 bg-blue-50 rounded-lg p-6 border border-blue-100">
                <h3 className="font-bold text-lg mb-3">Need help choosing?</h3>
                <p className="text-slate-700 mb-4">Our recommendation depends on your specific application:</p>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span><strong>2-3mm:</strong> Indoor displays, temporary signage, high-volume campaigns</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span><strong>4mm:</strong> General outdoor signage, real estate boards, election signs (our most popular option)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span><strong>5mm-8mm:</strong> Large format displays, exposed locations, premium installations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Corriboard Applications Showcase */}
      {product && product.id === 'correx-boards' && (
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-3">Real-World Applications</h2>
              <p className="text-lg text-slate-600 text-center mb-12 max-w-3xl mx-auto">From construction sites to retail displays, explore the versatility of Corriboard signage.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Application 1 */}
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
                  <div className="h-40 overflow-hidden">
                    <img src="/images/products/correx/correx-signage.jpg" alt="Real Estate Sign" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2">Real Estate Signs</h3>
                    <p className="text-slate-600 text-sm mb-4">Weatherproof signage for property sales, open houses, and directional information.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs px-3 py-1 bg-blue-100 text-blue-800 rounded-full">4-5mm thickness</span>
                      <span className="text-xs px-3 py-1 bg-gray-100 text-gray-800 rounded-full">Ground stakes</span>
                    </div>
                  </div>
                </div>
                
                {/* Application 2 */}
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
                  <div className="h-40 overflow-hidden">
                    <img src="/images/products/correx/correx-main.jpg" alt="Construction Site" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2">Construction Sites</h3>
                    <p className="text-slate-600 text-sm mb-4">Safety information, warning signs, and directional guidance for workers and visitors.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs px-3 py-1 bg-blue-100 text-blue-800 rounded-full">4-8mm thickness</span>
                      <span className="text-xs px-3 py-1 bg-gray-100 text-gray-800 rounded-full">Fence mounting</span>
                    </div>
                  </div>
                </div>
                
                {/* Application 3 */}
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
                  <div className="h-40 overflow-hidden">
                    <img src="/images/products/correx/correx-closeup.jpg" alt="Event Directional Signs" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2">Event Signage</h3>
                    <p className="text-slate-600 text-sm mb-4">Directional signs, information boards, and promotional displays for events and exhibitions.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs px-3 py-1 bg-blue-100 text-blue-800 rounded-full">3-5mm thickness</span>
                      <span className="text-xs px-3 py-1 bg-gray-100 text-gray-800 rounded-full">Freestanding</span>
                    </div>
                  </div>
                </div>
                
                {/* Application 4 */}
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
                  <div className="h-40 overflow-hidden">
                    <img src="/images/products/correx/correx-election-signs.jpg" alt="Election Campaign" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2">Election Campaigns</h3>
                    <p className="text-slate-600 text-sm mb-4">Candidate promotion, polling station directions, and campaign information displays.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs px-3 py-1 bg-blue-100 text-blue-800 rounded-full">3-4mm thickness</span>
                      <span className="text-xs px-3 py-1 bg-gray-100 text-gray-800 rounded-full">Stakes & wall mounting</span>
                    </div>
                  </div>
                </div>
                
                {/* Application 5 */}
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
                  <div className="h-40 overflow-hidden">
                    <img src="/images/products/correx/correx-yard-signs.jpg" alt="Retail Display" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2">Retail Displays</h3>
                    <p className="text-slate-600 text-sm mb-4">Point-of-sale displays, product information, and promotional signage for retail environments.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs px-3 py-1 bg-blue-100 text-blue-800 rounded-full">5mm thickness</span>
                      <span className="text-xs px-3 py-1 bg-gray-100 text-gray-800 rounded-full">Freestanding</span>
                    </div>
                  </div>
                </div>
                
                {/* Application 6 */}
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
                  <div className="h-40 overflow-hidden">
                    <img src="/images/products/correx/correx-signage.jpg" alt="Agricultural Marker" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2">Agricultural Markers</h3>
                    <p className="text-slate-600 text-sm mb-4">Field markers, crop identification, and farm safety signage for agricultural settings.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs px-3 py-1 bg-blue-100 text-blue-800 rounded-full">3-5mm thickness</span>
                      <span className="text-xs px-3 py-1 bg-gray-100 text-gray-800 rounded-full">Ground stakes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Corriboard Mounting Options */}
      {product && product.id === 'correx-boards' && (
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-3">Installation Methods</h2>
              <p className="text-lg text-slate-600 text-center mb-12 max-w-3xl mx-auto">Multiple ways to mount your Corriboard signage for any environment.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Method 1 */}
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-md transition">
                  <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 17l-4 4m0 0l-4-4m4 4V3" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Ground Stakes</h3>
                  <p className="text-slate-600 text-sm mb-3">Metal H-stakes or wire frames for quick installation into soft ground.</p>
                  <ul className="text-xs space-y-1 text-slate-700">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-1">•</span>
                      <span>No tools required</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-1">•</span>
                      <span>Best for lawn display</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-1">•</span>
                      <span>Easily repositionable</span>
                    </li>
                  </ul>
                </div>
                
                {/* Method 2 */}
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-md transition">
                  <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Fence Mounting</h3>
                  <p className="text-slate-600 text-sm mb-3">Secure to fences, posts, and railings using cable ties through pre-drilled holes.</p>
                  <ul className="text-xs space-y-1 text-slate-700">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-1">•</span>
                      <span>Wind resistant</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-1">•</span>
                      <span>Construction sites</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-1">•</span>
                      <span>Temporary events</span>
                    </li>
                  </ul>
                </div>
                
                {/* Method 3 */}
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-md transition">
                  <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Wall Mounting</h3>
                  <p className="text-slate-600 text-sm mb-3">Attach to walls using screws with washers or strong double-sided tape.</p>
                  <ul className="text-xs space-y-1 text-slate-700">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-1">•</span>
                      <span>Most secure option</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-1">•</span>
                      <span>Indoor/outdoor use</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-1">•</span>
                      <span>Permanent display</span>
                    </li>
                  </ul>
                </div>
                
                {/* Method 4 */}
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-md transition">
                  <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Freestanding</h3>
                  <p className="text-slate-600 text-sm mb-3">Create self-supporting displays with thicker boards or supporting feet.</p>
                  <ul className="text-xs space-y-1 text-slate-700">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-1">•</span>
                      <span>No hardware needed</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-1">•</span>
                      <span>Point-of-sale displays</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-1">•</span>
                      <span>Exhibition stands</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-12 bg-blue-50 p-6 rounded-lg border border-blue-100">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/4 flex justify-center mb-6 md:mb-0">
                    <div className="bg-white p-3 rounded-full w-16 h-16 flex items-center justify-center shadow-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="font-bold text-lg mb-2 text-center md:text-left">Installation Assistance</h3>
                    <p className="text-slate-700">Not sure which mounting option is best for your application? We can provide pre-drilled holes, eyelets, stake slots, or custom installation hardware to meet your specific needs. Just let us know your environment and requirements when ordering.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Product Image Gallery - for Foamex boards */}
      {product?.id === 'foamex-boards' && (
        <div className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="mb-8 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Product Gallery</h2>
              <p className="text-gray-600 text-lg">Explore our high-quality Foamex PVC board solutions for a variety of applications.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.images && product.images.map((image, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all transform hover:scale-105 duration-300">
                  <div className="h-64 relative">
                    <img 
                      src={image} 
                      alt={`Foamex PVC Board - Image ${index + 1}`} 
                      className="w-full h-full object-contain p-4" 
                    />
                  </div>
                  <div className="p-4 border-t border-gray-100">
                    <h3 className="font-semibold text-lg text-gray-800">
                      {index === 0 && "Premium 3mm Foamex Board Display"}
                      {index === 1 && "Photo Printing on Foamex Board"}
                      {index === 2 && "Commercial Foamex Applications"}
                      {index === 3 && "Foamex Signage Solutions"}
                      {index === 4 && "Retail Display Signboards"}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      {index === 0 && "Professional 3mm Foamex boards perfect for indoor displays"}
                      {index === 1 && "High-definition photo prints on premium Foamex material"}
                      {index === 2 && "Versatile Foamex applications for business signage"}
                      {index === 3 && "Custom-sized signage solutions for any indoor environment"}
                      {index === 4 && "Retail-ready Foamex boards with professional finish"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
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