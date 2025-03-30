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
      
      {/* Special Hero Banner for Roll-Up Banner Stands */}
      {product.id === 'roll-up-banner-stands' && (
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
      {product.id === 'foamex-boards' && (
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
                  <span className="text-sm font-medium">1440dpi High-Definition Printing</span>
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
                      <div key={i} className={`flex items-center p-3 rounded-lg ${item.highlight ? 'bg-white/20 border border-white/30' : 'bg-white/10'}`}>
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
                          <span className="text-xl font-bold text-indigo-700">{item.size}</span>
                        </div>
                        <div>
                          <p className="font-medium">{item.desc}</p>
                        </div>
                        {item.highlight && <span className="ml-auto bg-yellow-400 text-indigo-900 text-xs font-bold px-2 py-1 rounded-full">BEST SELLER</span>}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <button className="bg-white text-indigo-700 hover:bg-indigo-50 px-6 py-3 rounded-lg font-medium transition-colors">
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
                  <h3 className="text-xl font-bold mb-3 text-center text-gray-900">Vibrant High-Def Printing</h3>
                  <p className="text-gray-600 text-center mb-4">Ultra-sharp 1440dpi resolution ensures your graphics look stunning from any distance.</p>
                  <ul className="space-y-2">
                    {['True color reproduction', 'Sharp text and fine details', 'Anti-fade technology', 'Consistent quality'].map((feature, i) => (
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