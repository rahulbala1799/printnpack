import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import products, { getProductBySlug, getRelatedProducts } from '../../data/products';
import PaperOptionsExplorer, { PaperComparisonChart } from '../../components/PaperOptionsExplorer';
import PizzaBoxExplorer from '../../components/PizzaBoxExplorer';

// Page component
const ProductDetail = ({ product, relatedProducts }) => {
  const router = useRouter();
  const [selectedPaperWeight, setSelectedPaperWeight] = useState(null);
  const [selectedPaperFinish, setSelectedPaperFinish] = useState(null);
  const [selectedLamination, setSelectedLamination] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Set up image rotation for pizza boxes
    if (product && product.id === 'brown-pizza-boxes' && product.images && product.images.length > 1) {
      const intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000); // Rotate every 3 seconds
      
      return () => clearInterval(intervalId);
    }
  }, [product]);

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
      
      {/* Hero section for Brown Pizza Boxes */}
      {product && product.id === 'brown-pizza-boxes' && (
        <div className="relative overflow-hidden bg-gradient-to-br from-amber-800 via-amber-700 to-amber-900 border-b border-gray-200">
          <div className="absolute inset-0 opacity-20">
            <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="pizza-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#pizza-grid)" />
            </svg>
          </div>
          
          <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
            {/* Desktop layout - side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="text-white order-2 md:order-1">
                <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm font-medium mb-6">
                  {product.category}
                </span>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Eco-Friendly <span className="text-yellow-300">Pizza Boxes</span><br />With Style & Substance
                </h1>
                <p className="text-xl text-amber-100 mb-8 max-w-lg">
                  Premium kraft pizza boxes that keep your delicious creations hot while showcasing your commitment to sustainability.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="#pizza-box-options" 
                    className="inline-flex items-center bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-bold transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                    Explore Sizes
                  </a>
                  <Link 
                    href="/contact?subject=Pizza Box Quote" 
                    className="inline-flex items-center bg-transparent hover:bg-white/10 text-white border-2 border-white px-6 py-3 rounded-lg font-bold transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Request Quote
                  </Link>
                </div>
                
                {/* Size markers */}
                <div className="mt-10 flex items-center space-x-3">
                  <span className="text-sm text-amber-200">Available sizes: </span>
                  {['7"', '9"', '10"', '12"', '14"'].map((size, idx) => (
                    <span 
                      key={idx} 
                      className="inline-block px-2 py-1 rounded-full text-xs font-bold bg-amber-900 text-amber-300 border border-amber-600"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="relative h-96 md:h-auto order-1 md:order-2">
                {/* Rotating Image with Animation */}
                <div className="relative aspect-square max-w-md mx-auto">
                  {product.images.map((img, idx) => (
                    <div 
                      key={idx}
                      className={`absolute inset-0 transition-all duration-1000 transform ${
                        currentImageIndex === idx 
                          ? 'opacity-100 scale-100 rotate-0' 
                          : 'opacity-0 scale-90 rotate-6'
                      }`}
                    >
                      <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                        <Image 
                          src={img} 
                          alt={`${product.name} - Image ${idx + 1}`} 
                          fill
                          className="object-contain"
                          priority={idx === 0}
                        />
                      </div>
                      
                      {/* Decorative elements */}
                      <div className="absolute -top-6 -right-6 w-12 h-12 bg-orange-500 rounded-full opacity-80 animate-pulse"></div>
                      <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-yellow-400 rounded-full opacity-70 animate-bounce"></div>
                      
                      {/* Size indicator */}
                      <div className="absolute bottom-4 right-4 bg-white text-amber-800 px-3 py-1 rounded-full font-bold shadow-lg transform -rotate-3">
                        {idx === 0 ? '10"' : idx === 1 ? '14"' : idx === 2 ? '7"' : '12"'}
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Image Navigation Dots */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {product.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        currentImageIndex === idx ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'
                      }`}
                      aria-label={`View image ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom decoration */}
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900"></div>
        </div>
      )}
      
      {/* Hero section for Vinyl Banners */}
      {product && product.id === 'vinyl-banners' && (
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-800 via-indigo-700 to-purple-800 border-b border-gray-200">
          <div className="absolute inset-0 opacity-20">
            <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="banner-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#banner-grid)" />
            </svg>
          </div>
          
          <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
            {/* Mobile hero image - top position */}
            <div className="md:hidden mb-8">
              <div className="relative h-64 rounded-xl overflow-hidden shadow-2xl mx-auto max-w-sm">
                <Image 
                  src="/ifa/product/banner/20221019_184306722822_e66498_Promo-banner.webp"
                  alt="High-impact vinyl banner" 
                  fill 
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold mb-2">
                    OUTDOOR DURABLE
                  </span>
                </div>
              </div>
            </div>
            
            {/* Desktop layout - side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="text-white">
                <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm font-medium mb-6">
                  {product.category}
                </span>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Command <span className="text-yellow-300">Attention</span><br />With High-Impact Banners
                </h1>
                <p className="text-xl text-blue-100 mb-8 max-w-lg">
                  Weather-resistant, vibrant banners that make your message impossible to miss - indoors or outdoors.
                </p>
                
                {/* Feature badges */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {product.features.slice(0, 4).map((feature, i) => (
                    <span key={i} className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-white inline-flex items-center">
                      <svg className="w-4 h-4 mr-2 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature.replace(/^(Premium |Vibrant |Custom |Reinforced )/, '')}
                    </span>
                  ))}
                </div>
                
                {/* CTA buttons */}
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-semibold py-3 px-6 rounded-lg transition duration-300 inline-flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                    Get Custom Quote
                  </Link>
                  <Link href="/contact?subject=Banner%20Design" className="bg-transparent hover:bg-white/10 text-white border-2 border-white/30 font-medium py-3 px-6 rounded-lg transition duration-300 inline-flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                    </svg>
                    Design Service
                  </Link>
                </div>
              </div>
              
              {/* Desktop hero image - right side */}
              <div className="hidden md:block relative">
                <div className="relative h-[28rem] w-full rounded-2xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-700">
                  <Image 
                    src="/ifa/product/banner/20221019_184306722822_e66498_Promo-banner.webp"
                    alt="High-impact vinyl banner" 
                    fill 
                    className="object-cover hover:scale-105 transition-transform duration-1000"
                    priority
                    sizes="(max-width: 1280px) 50vw, 600px"
                  />
                  {/* Overlaid highlight */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent"></div>
                  
                  {/* Floating features */}
                  <div className="absolute -left-4 top-1/4 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-xl transform -rotate-3 animate-pulse">
                    <div className="flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span className="font-semibold">Vibrant UV Printing</span>
                    </div>
                  </div>
                  
                  <div className="absolute right-4 bottom-20 bg-yellow-500 text-blue-900 px-6 py-3 rounded-lg shadow-xl transform rotate-3">
                    <div className="flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                      </svg>
                      <span className="font-semibold">Weather Resistant</span>
                    </div>
                  </div>
                  
                  {/* Badge in corner */}
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm text-blue-900 px-4 py-2 rounded-full font-bold shadow-lg">
                    Fast 3-Day Turnaround
                  </div>
                </div>
                
                {/* Floating secondary image */}
                <div className="absolute -bottom-12 -left-12 w-64 h-48 rounded-lg overflow-hidden shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-700 border-4 border-white">
                  <Image 
                    src="/ifa/product/banner/20221019_184301869688_fcc9a6_Automobiles.webp"
                    alt="Automobile advertising banner" 
                    fill 
                    className="object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-8 -right-8 w-16 h-16 rounded-full bg-yellow-400"></div>
                <div className="absolute bottom-24 -right-6 w-12 h-12 rounded-full bg-purple-500 opacity-70"></div>
              </div>
            </div>
          </div>
          
          {/* Wave separator */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 text-white">
              <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor"></path>
            </svg>
          </div>
        </div>
      )}
      
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
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-blue-900/70 to-transparent"></div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 opacity-10">
            <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="mesh-gradient" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="100%" height="100%" fill="none" />
                  <path d="M0 20 L40 20 M20 0 L20 40" stroke="currentColor" strokeWidth="1" />
                </pattern>
              </defs>
              <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#mesh-gradient)" />
            </svg>
          </div>
        </div>
      )}

      {/* Special Hero Banner for Posters */}
      {product.id === 'posters' && (
        <div className="relative bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-900 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="poster-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" opacity="0.5" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#poster-grid)" />
            </svg>
          </div>
          
          <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="text-white space-y-6 relative z-10">
                <span className="inline-block bg-pink-500/30 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                  Premium Quality Prints
                </span>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">Custom Posters That <span className="text-pink-300">Demand Attention</span></h2>
                <p className="text-xl text-indigo-100">Make your message impossible to miss with our vibrant eco-solvent poster prints on premium 170gsm and 200gsm paper.</p>
                
                {/* Flashy feature cards */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {[
                    { icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', title: 'Premium Quality', desc: '170-200gsm paper' },
                    { icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01', title: 'Eco-Solvent', desc: 'Vibrant colors' },
                    { icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z', title: 'Custom Sizes', desc: 'A4 to A0 & beyond' },
                    { icon: 'M13 10V3L4 14h7v7l9-11h-7z', title: 'Fast Turnaround', desc: '1-3 business days' },
                  ].map((feature, i) => (
                    <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-colors group">
                      <div className="flex items-center mb-2">
                        <svg className="w-6 h-6 text-pink-300 group-hover:text-pink-200 transition-colors mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                        </svg>
                        <h3 className="font-semibold">{feature.title}</h3>
                      </div>
                      <p className="text-indigo-200 text-sm">{feature.desc}</p>
                    </div>
                  ))}
                </div>
                
                {/* CTA buttons */}
                <div className="flex flex-wrap gap-4 mt-8">
                  <Link href="/contact" className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 inline-flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    Get Quote Now
                  </Link>
                  <Link href="#sizes" className="bg-transparent border-2 border-white/30 hover:border-white/60 text-white font-medium py-3 px-6 rounded-lg transition duration-300 inline-flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                    Explore Sizes
                  </Link>
                </div>
              </div>
              
              {/* Interactive Poster Display */}
              <div className="relative">
                {/* Main poster */}
                <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl transform rotate-3 z-10 transition-transform duration-500 hover:rotate-0 border-8 border-white">
                  <Image 
                    src="/ifa/product/Poster/PosterPrinting-4.jpg"
                    alt="Poster Printing"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <span className="text-white font-semibold">Premium Poster Printing</span>
                  </div>
                </div>
                
                {/* Secondary posters in stack */}
                <div className="absolute top-20 -right-10 w-48 h-64 rounded-lg overflow-hidden shadow-xl transform -rotate-6 z-20 transition-transform duration-500 hover:rotate-0 border-4 border-white">
                  <Image 
                    src="/ifa/product/Poster/1.webp"
                    alt="A4 Poster"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="absolute -bottom-10 -left-10 w-48 h-64 rounded-lg overflow-hidden shadow-xl transform rotate-12 z-0 transition-transform duration-500 hover:rotate-0 border-4 border-white">
                  <Image 
                    src="/ifa/product/Poster/2.webp"
                    alt="A3 Poster"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="absolute top-10 -left-20 w-40 h-56 rounded-lg overflow-hidden shadow-xl transform -rotate-12 transition-transform duration-500 hover:rotate-0 border-4 border-white">
                  <Image 
                    src="/ifa/product/Poster/single_poster.jpg"
                    alt="Single Poster"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Floating size indicators */}
                <div className="absolute -right-2 top-0 bg-white text-indigo-900 px-3 py-1 rounded-full text-sm font-bold shadow-lg z-30">
                  A0 - A4 Sizes
                </div>
                
                <div className="absolute bottom-8 right-8 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg z-30 animate-pulse">
                  Custom Dimensions
                </div>
              </div>
            </div>
          </div>

          {/* Creative wave divider */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 text-white">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
            </svg>
          </div>
        </div>
      )}

      {/* Hero section for Posters */}
      {product && product.id === 'custom-posters' && (
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-sky-500 border-b border-gray-200">
          <div className="absolute inset-0 opacity-20">
            <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="leaflet-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#leaflet-grid)" />
            </svg>
          </div>
          
          <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
            {/* Mobile hero image - top position */}
            <div className="md:hidden mb-8">
              <div className="relative h-64 rounded-xl overflow-hidden shadow-2xl mx-auto max-w-sm">
                <Image 
                  src={product.imageSrc || '/ifa/product/Leaflet/leaflet-hero.jpg'}
                  alt={`${product.name} printing services`}
                  fill 
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold mb-2">
                    {product.id.includes('a6') ? 'A6 SIZE' : 
                     product.id.includes('a5') ? 'A5 SIZE' : 
                     product.id.includes('a4') ? 'A4 SIZE' : 'A3 SIZE'}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Desktop layout - side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="text-white">
                <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm font-medium mb-6">
                  {product.category}
                </span>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  <span className="text-yellow-300">Professional</span><br />
                  {product.name}
                </h1>
                <p className="text-xl text-blue-100 mb-8 max-w-lg">
                  High-quality printed leaflets and flyers with premium paper options, vibrant colors, and fast turnaround.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {product.features.slice(0, 6).map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 mr-2">
                        <svg className="w-5 h-5 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-blue-50">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link href="#paper-options" className="bg-white hover:bg-gray-100 text-blue-700 py-3 px-6 rounded-lg font-medium inline-flex items-center transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-white">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Paper Options
                  </Link>
                  <Link href="#fold-calculator" className="bg-yellow-300 hover:bg-yellow-400 text-blue-900 py-3 px-6 rounded-lg font-medium inline-flex items-center transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    Fold Calculator
                  </Link>
                </div>
              </div>
              
              {/* Interactive Leaflet Display */}
              <div className="relative hidden md:block">
                <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl z-10 bg-white p-6">
                  <div className="relative h-full w-full">
                    <Image 
                      src={product.imageSrc || '/ifa/product/Leaflet/leaflet-hero.jpg'}
                      alt={`${product.name} printing example`}
                      fill 
                      className="object-contain"
                    />
                  </div>
                </div>
                
                {/* Floating size indicators */}
                <div className="absolute -right-2 top-0 bg-white text-blue-900 px-3 py-1 rounded-full text-sm font-bold shadow-lg z-30">
                  {product.id.includes('a6') ? 'A6 Size' : 
                   product.id.includes('a5') ? 'A5 Size' : 
                   product.id.includes('a4') ? 'A4 Size' : 'A3 Size'}
                </div>
                
                <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 bg-white text-blue-900 px-3 py-1 rounded-full text-sm font-bold shadow-lg z-30">
                  {product.id.includes('a6') ? '105 × 148mm' : 
                   product.id.includes('a5') ? '148 × 210mm' : 
                   product.id.includes('a4') ? '210 × 297mm' : '297 × 420mm'}
                </div>
                
                {/* Paper stack effect */}
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-[85%] h-[10px] bg-gray-300 rounded-b-xl z-0"></div>
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-[70%] h-[10px] bg-gray-400 rounded-b-xl z-0"></div>
              </div>
            </div>
          </div>

          {/* Creative wave divider */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 text-white">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
            </svg>
          </div>
        </div>
      )}

      {/* Hero section for Leaflets */}
      {product && (product.id === 'leaflets-a6' || product.id === 'leaflets-a5' || product.id === 'leaflets-a4' || product.id === 'leaflets-a3') && (
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-sky-500 border-b border-gray-200">
          <div className="absolute inset-0 opacity-20">
            <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="leaflet-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#leaflet-grid)" />
            </svg>
          </div>
          
          <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
            {/* Mobile hero image - top position */}
            <div className="md:hidden mb-8">
              <div className="relative h-64 rounded-xl overflow-hidden shadow-2xl mx-auto max-w-sm">
                <Image 
                  src={product.imageSrc || '/ifa/product/leaflet/leaflet-hero.jpg'}
                  alt={`${product.name} printing services`}
                  fill 
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold mb-2">
                    {product.id.includes('a6') ? 'A6 SIZE' : 
                     product.id.includes('a5') ? 'A5 SIZE' : 
                     product.id.includes('a4') ? 'A4 SIZE' : 'A3 SIZE'}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Desktop layout - side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="text-white">
                <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm font-medium mb-6">
                  {product.category}
                </span>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  <span className="text-yellow-300">Professional</span><br />
                  {product.name}
                </h1>
                <p className="text-xl text-blue-100 mb-8 max-w-lg">
                  High-quality printed leaflets and flyers with premium paper options, vibrant colors, and fast turnaround.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {product.features.slice(0, 6).map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 mr-2">
                        <svg className="w-5 h-5 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-blue-50">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link href="#paper-options" className="bg-white hover:bg-gray-100 text-blue-700 py-3 px-6 rounded-lg font-medium inline-flex items-center transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-white">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Paper Options
                  </Link>
                  <Link href="#fold-calculator" className="bg-yellow-300 hover:bg-yellow-400 text-blue-900 py-3 px-6 rounded-lg font-medium inline-flex items-center transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    Fold Calculator
                  </Link>
                </div>
              </div>
              
              {/* Interactive Leaflet Display */}
              <div className="relative hidden md:block">
                <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl z-10 bg-white p-6">
                  <div className="relative h-full w-full">
                    <Image 
                      src={product.imageSrc || '/ifa/product/leaflet/leaflet-hero.jpg'}
                      alt={`${product.name} printing example`}
                      fill 
                      className="object-contain"
                    />
                  </div>
                </div>
                
                {/* Floating size indicators */}
                <div className="absolute -right-2 top-0 bg-white text-blue-900 px-3 py-1 rounded-full text-sm font-bold shadow-lg z-30">
                  {product.id.includes('a6') ? 'A6 Size' : 
                   product.id.includes('a5') ? 'A5 Size' : 
                   product.id.includes('a4') ? 'A4 Size' : 'A3 Size'}
                </div>
                
                <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 bg-white text-blue-900 px-3 py-1 rounded-full text-sm font-bold shadow-lg z-30">
                  {product.id.includes('a6') ? '105 × 148mm' : 
                   product.id.includes('a5') ? '148 × 210mm' : 
                   product.id.includes('a4') ? '210 × 297mm' : '297 × 420mm'}
                </div>
                
                {/* Paper stack effect */}
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-[85%] h-[10px] bg-gray-300 rounded-b-xl z-0"></div>
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-[70%] h-[10px] bg-gray-400 rounded-b-xl z-0"></div>
              </div>
            </div>
          </div>

          {/* Creative wave divider */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 text-white">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
            </svg>
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
            {relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 relative bg-gray-50">
                  {!relatedProduct.imageSrc || relatedProduct.imageSrc.includes('css-placeholder-image') ? (
                    <div className="absolute inset-0 css-placeholder banner"></div>
                  ) : (
                    <Image
                      src={relatedProduct.imageSrc}
                      alt={relatedProduct.name}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  <div className="absolute top-2 left-2">
                    <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                      {relatedProduct.category}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900">{relatedProduct.name}</h3>
                  <p className="mt-1 text-sm text-gray-500 line-clamp-2">{relatedProduct.description}</p>
                  <Link href={`/products/${relatedProduct.id}`} className="mt-3 inline-flex items-center text-blue-600 hover:text-blue-800">
                    View Details
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
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

      {/* End of FAQ section */}
      <div className="border-t border-gray-200 mt-16 pt-16"></div>

      {/* Size Guide for Posters */}
      {product && product.id === 'posters' && (
        <div id="sizes" className="container mx-auto px-4 py-16 scroll-mt-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Poster Sizing Guide</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Choose the perfect size for your promotional needs or create custom dimensions for your unique space</p>
            </div>
            
            {/* Poster Size Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                { 
                  name: 'A4 Poster', 
                  dimensions: '210mm × 297mm', 
                  idealFor: 'Close-up viewing, tabletop displays, information sheets', 
                  image: '/ifa/product/Poster/1.webp',
                  popular: false
                },
                { 
                  name: 'A3 Poster', 
                  dimensions: '297mm × 420mm', 
                  idealFor: 'Retail counter displays, meeting room notices, small ads', 
                  image: '/ifa/product/Poster/5.webp',
                  popular: false
                },
                { 
                  name: 'A2 Poster', 
                  dimensions: '420mm × 594mm', 
                  idealFor: 'Small shop windows, conference signage, menu displays', 
                  image: '/ifa/product/Poster/3.webp',
                  popular: true
                },
                { 
                  name: 'A1 Poster', 
                  dimensions: '594mm × 841mm', 
                  idealFor: 'Retail promotions, event announcements, exhibition displays', 
                  image: '/ifa/product/Poster/PosterPrinting-5.jpg',
                  popular: true
                },
                { 
                  name: 'A0 Poster', 
                  dimensions: '841mm × 1189mm', 
                  idealFor: 'Maximum impact displays, trade shows, large format advertising', 
                  image: '/ifa/product/Poster/PosterPrinting-4.jpg',
                  popular: false
                },
                { 
                  name: 'Custom Sizes', 
                  dimensions: 'Up to 1.5m width', 
                  idealFor: 'Specialized displays, non-standard frames, unique spaces', 
                  image: '/ifa/product/Poster/100-GSM-Map-Print-Spot-Vertical-Poster_05-1024x1024.webp',
                  popular: false
                }
              ].map((size, i) => (
                <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105 group relative">
                  {size.popular && (
                    <div className="absolute top-4 right-4 z-20">
                      <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                        POPULAR
                      </span>
                    </div>
                  )}
                  
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={size.image}
                      alt={size.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-xl">{size.name}</h3>
                      <p className="text-white/80 text-sm">{size.dimensions}</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-4">
                      <h4 className="text-gray-700 font-medium text-sm mb-2">IDEAL FOR:</h4>
                      <p className="text-gray-600">{size.idealFor}</p>
                    </div>
                    <Link href="/contact" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 group-hover:translate-x-1 transition-transform">
                      Request Quote
                      <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Eco-solvent printing info */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl overflow-hidden shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="p-8 md:p-12">
                  <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-medium mb-6">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                    </svg>
                    Eco-Friendly Technology
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Vibrant Eco-Solvent Printing</h3>
                  <p className="text-gray-700 mb-6">
                    Our eco-solvent printing technology delivers exceptional color reproduction and durability while being kinder to the environment than traditional methods. These inks provide:
                  </p>
                  <ul className="space-y-3 text-gray-600 mb-8">
                    {[
                      'Vibrant, true-to-life colors that pop',
                      'Excellent UV resistance for longer-lasting prints',
                      'Reduced environmental impact with lower VOCs',
                      'Superior adhesion and durability on our premium papers',
                      'Suitability for both indoor and short-term outdoor use'
                    ].map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                    Request Samples
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
                <div className="relative h-full min-h-[300px] md:min-h-[400px]">
                  <Image
                    src="/ifa/product/Poster/single_poster.jpg"
                    alt="Eco-solvent poster printing"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-blue-900/40 md:bg-gradient-to-l"></div>
                </div>
              </div>
            </div>
            
            {/* Application Cards */}
            <div className="mt-20">
              <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">Popular Poster Applications</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[
                  { icon: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z', title: 'Retail Promotions', desc: 'Boost in-store sales with eye-catching promotional posters' },
                  { icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z', title: 'Event Announcements', desc: 'Promote concerts, exhibitions, and special events' },
                  { icon: 'M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z', title: 'Cinema & Theater', desc: 'Display movie listings and show times' },
                  { icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253', title: 'Educational Displays', desc: 'Create informative posters for schools and colleges' },
                  { icon: 'M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z', title: 'Restaurant Menus', desc: 'Display specials and menu items with appetizing visuals' },
                  { icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', title: 'Corporate Messaging', desc: 'Communicate company values and announcements' },
                  { icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', title: 'Trade Shows', desc: 'Create impactful booth graphics and information displays' },
                  { icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z', title: 'Art Reproductions', desc: 'High-quality art prints for galleries and home decoration' }
                ].map((app, i) => (
                  <div key={i} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={app.icon} />
                      </svg>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">{app.title}</h4>
                    <p className="text-gray-600 text-sm">{app.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Related Products */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-8">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 relative bg-gray-50">
                  {!relatedProduct.imageSrc || relatedProduct.imageSrc.includes('css-placeholder-image') ? (
                    <div className="absolute inset-0 css-placeholder banner"></div>
                  ) : (
                    <Image
                      src={relatedProduct.imageSrc}
                      alt={relatedProduct.name}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  <div className="absolute top-2 left-2">
                    <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                      {relatedProduct.category}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900">{relatedProduct.name}</h3>
                  <p className="mt-1 text-sm text-gray-500 line-clamp-2">{relatedProduct.description}</p>
                  <Link href={`/products/${relatedProduct.id}`} className="mt-3 inline-flex items-center text-blue-600 hover:text-blue-800">
                    View Details
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product Specifications - Modern List Style */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Product Specifications</h2>
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md">
              <div className="divide-y divide-gray-200">
                {product.specifications && product.specifications.map((spec, index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-3 text-sm sm:text-base">
                    <div className="bg-gray-50 p-4 md:p-6 flex items-center font-medium text-gray-700">
                      {spec.name}
                    </div>
                    <div className="col-span-2 p-4 md:p-6 text-gray-600">
                      {spec.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fold Calculator Section for Leaflets */}
      {product && (product.id === 'leaflets-a6' || product.id === 'leaflets-a5' || product.id === 'leaflets-a4' || product.id === 'leaflets-a3') && (
        <div id="fold-calculator" className="bg-gray-50 py-16 border-t border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">Leaflet Size & Fold Calculator</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Visualize different fold options and understand exactly how your final printed piece will look and fold.
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Interactive Fold Preview */}
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                  <h3 className="text-xl font-bold mb-4 text-gray-700">Interactive Preview</h3>
                  
                  {/* A6 Leaflet Preview */}
                  {product.id === 'leaflets-a6' && (
                    <div className="relative aspect-[105/148] bg-blue-50 border-2 border-blue-300 rounded-sm mx-auto max-w-[260px] mb-6">
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                        <span className="text-3xl font-bold text-blue-800 mb-1">A6</span>
                        <span className="text-sm text-blue-700 font-medium">105mm × 148mm</span>
                        <span className="text-xs text-blue-600 mt-2">Single sheet</span>
                      </div>
                    </div>
                  )}
                  
                  {/* A5 Leaflet Preview */}
                  {product.id === 'leaflets-a5' && (
                    <div>
                      <div className="relative aspect-[148/210] bg-blue-50 border-2 border-blue-300 rounded-sm mx-auto max-w-[260px] mb-6">
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                          <span className="text-3xl font-bold text-blue-800 mb-1">A5</span>
                          <span className="text-sm text-blue-700 font-medium">148mm × 210mm</span>
                          <span className="text-xs text-blue-600 mt-2">Single sheet</span>
                          {/* Half-fold indicator line */}
                          <div className="absolute left-0 right-0 top-1/2 border-t-2 border-blue-400 border-dashed"></div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg mb-6">
                        <h4 className="font-medium text-gray-800 mb-2">Half-fold dimensions:</h4>
                        <p className="text-gray-700">When folded: 105mm × 148mm (A6 size)</p>
                      </div>
                    </div>
                  )}
                  
                  {/* A4 Leaflet Preview */}
                  {product.id === 'leaflets-a4' && (
                    <div>
                      <div className="relative aspect-[210/297] bg-blue-50 border-2 border-blue-300 rounded-sm mx-auto max-w-[260px] mb-6">
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                          <span className="text-3xl font-bold text-blue-800 mb-1">A4</span>
                          <span className="text-sm text-blue-700 font-medium">210mm × 297mm</span>
                          
                          {/* Fold indicator lines */}
                          <div className="absolute left-0 right-0 top-1/2 border-t-2 border-blue-400 border-dashed"></div>
                          <div className="absolute left-1/3 top-0 bottom-0 border-l-2 border-blue-400 border-dashed"></div>
                          <div className="absolute left-2/3 top-0 bottom-0 border-l-2 border-blue-400 border-dashed"></div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg mb-6">
                        <h4 className="font-medium text-gray-800 mb-2">Fold dimensions:</h4>
                        <p className="text-gray-700">Half-fold: 148mm × 210mm (A5 size)</p>
                        <p className="text-gray-700 mt-1">Tri-fold: 99mm × 210mm</p>
                        <p className="text-gray-700 mt-1">Z-fold: 99mm × 210mm</p>
                      </div>
                    </div>
                  )}
                  
                  {/* A3 Leaflet Preview */}
                  {product.id === 'leaflets-a3' && (
                    <div>
                      <div className="relative aspect-[297/420] bg-blue-50 border-2 border-blue-300 rounded-sm mx-auto max-w-[260px] mb-6">
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                          <span className="text-3xl font-bold text-blue-800 mb-1">A3</span>
                          <span className="text-sm text-blue-700 font-medium">297mm × 420mm</span>
                          
                          {/* Fold indicator lines */}
                          <div className="absolute left-0 right-0 top-1/2 border-t-2 border-blue-400 border-dashed"></div>
                          <div className="absolute left-0 right-0 top-1/4 border-t-2 border-blue-400 border-dashed"></div>
                          <div className="absolute left-0 right-0 top-3/4 border-t-2 border-blue-400 border-dashed"></div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg mb-6">
                        <h4 className="font-medium text-gray-800 mb-2">Fold dimensions:</h4>
                        <p className="text-gray-700">Half-fold: 210mm × 297mm (A4 size)</p>
                        <p className="text-gray-700 mt-1">Quarter-fold: 148mm × 210mm (A5 size)</p>
                        <p className="text-gray-700 mt-1">Roll-fold: Variable depending on number of folds</p>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Fold Options */}
                <div>
                  <h3 className="text-xl font-bold mb-6 text-gray-700">Available Fold Options</h3>
                  
                  <div className="space-y-6">
                    {product.foldOptions && product.foldOptions.map((option, index) => (
                      <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                        <h4 className="text-lg font-bold text-gray-800 mb-2">{option.name}</h4>
                        <p className="text-gray-600 mb-3">{option.description}</p>
                        <div className="bg-blue-50 p-3 rounded-md">
                          <p className="text-sm font-medium text-blue-800">Dimensions:</p>
                          <p className="text-sm text-blue-700">{option.dimensions}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h5 className="text-sm font-medium text-yellow-800">Pro Tip</h5>
                        <p className="text-sm text-yellow-700 mt-1">
                          When designing folded leaflets, remember to account for the fold line and ensure important content isn't positioned where it will be affected by the fold.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Paper Options Section for Leaflets */}
      {product && (product.id === 'leaflets-a6' || product.id === 'leaflets-a5' || product.id === 'leaflets-a4' || product.id === 'leaflets-a3') && (
        <div id="paper-options" className="bg-white py-16 border-t border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">Paper Options</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Choose from a range of high-quality paper stocks to find the perfect match for your leaflet design and purpose.
                </p>
              </div>
              
              {/* Enhanced Paper Options Explorer */}
              {product.paperWeights && product.paperFinishes && (
                <PaperOptionsExplorer 
                  paperWeights={product.paperWeights} 
                  paperFinishes={product.paperFinishes}
                  laminationOptions={product.laminationOptions}
                />
              )}
              
              {/* Legacy implementation - fallback if new structure not available */}
              {!product.paperWeights && product.paperOptions && (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {product.paperOptions.map((option, index) => (
                    <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                      <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-700"></div>
                      <div className="p-6">
                        <h3 className="font-bold text-lg text-gray-800 mb-2">{option.name}</h3>
                        <p className="text-gray-600 text-sm mb-4">{option.description}</p>
                        <div className="mt-auto">
                          <p className="text-sm font-medium text-blue-700 mt-3">{option.recommended}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {/* Paper Sample Request Section */}
              <div className="mt-12 bg-blue-50 p-6 rounded-xl">
                <h3 className="font-bold text-xl text-blue-900 mb-3">Not sure which paper to choose?</h3>
                <p className="text-blue-800 mb-4">
                  We can send you a sample pack with all our paper options so you can feel the quality before placing your order.
                </p>
                <Link href="/contact?subject=Paper Sample Request" className="inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg font-medium transition-colors">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  </svg>
                  Request Paper Samples
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Pizza Box Size Explorer Section */}
      {product && product.id === 'brown-pizza-boxes' && (
        <div id="pizza-box-options" className="bg-white py-16 border-t border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">Box Size Options</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Explore our eco-friendly pizza box sizes to find the perfect fit for your pizzas. All boxes feature 4.5-5cm height for optimal pizza protection.
                </p>
              </div>
              
              {/* Pizza Box Size Explorer Component */}
              <PizzaBoxExplorer />
              
              {/* Order Information */}
              <div className="mt-12 bg-blue-50 p-6 rounded-xl">
                <div className="flex flex-col md:flex-row items-start justify-between">
                  <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                    <h3 className="font-bold text-xl text-blue-900 mb-3">Ready to Order?</h3>
                    <p className="text-blue-800 mb-4">
                      With a minimum order quantity of just 100 pieces, our brown pizza boxes are perfect for businesses of all sizes.
                    </p>
                    <ul className="space-y-2 mb-4 text-blue-800">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Quick 7-10 day turnaround time</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Custom branding with your logo and colors</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Volume discounts available for larger orders</span>
                      </li>
                    </ul>
                  </div>
                  <div className="md:w-1/3 bg-white p-5 rounded-lg shadow-sm border border-blue-100">
                    <h4 className="font-bold text-gray-800 mb-4">Quick Specs</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Minimum Order:</span>
                        <span className="font-medium text-gray-900">100 pieces</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Material:</span>
                        <span className="font-medium text-gray-900">Recycled Kraft</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Lead Time:</span>
                        <span className="font-medium text-gray-900">7-10 Days</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Box Height:</span>
                        <span className="font-medium text-gray-900">4.5-5cm</span>
                      </div>
                    </div>
                    <div className="mt-6">
                      <Link href="/contact?subject=Pizza Box Quote" className="block w-full bg-orange-600 hover:bg-orange-700 text-white text-center py-3 rounded-lg font-bold transition-colors">
                        Request Quote
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Applications Section */}
      {product.applications && product.applications.length > 0 && (
        <div className="bg-gray-50 py-16 border-t border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Ideal Applications</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.applications.map((application, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex items-center">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{application}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Related Products Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-8">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 relative bg-gray-50">
                  {!relatedProduct.imageSrc || relatedProduct.imageSrc.includes('css-placeholder-image') ? (
                    <div className="absolute inset-0 css-placeholder banner"></div>
                  ) : (
                    <Image
                      src={relatedProduct.imageSrc}
                      alt={relatedProduct.name}
                      fill
                      className="object-contain p-4"
                    />
                  )}
                  <div className="absolute top-2 left-2">
                    <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                      {relatedProduct.category}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900">{relatedProduct.name}</h3>
                  <p className="mt-1 text-sm text-gray-500 line-clamp-2">{relatedProduct.description}</p>
                  <Link href={`/products/${relatedProduct.id}`} className="mt-3 inline-flex items-center text-blue-600 hover:text-blue-800">
                    View Details
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {product.foldOptions && product.foldOptions.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Available Fold Options
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Choose the perfect fold style for your leaflet
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {product.foldOptions.map((option, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
                >
                  <div className="relative h-64">
                    <Image
                      src={option.image}
                      alt={`${product.name} - ${option.name}`}
                      layout="fill"
                      objectFit="cover"
                      className="group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {option.name}
                    </h3>
                    <p className="mt-2 text-gray-500">{option.description}</p>
                    <div className="mt-4">
                      <span className="text-sm font-medium text-gray-500">
                        Folded dimensions: {option.dimensions}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 bg-blue-50 rounded-lg p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-blue-900">
                    Pro Tip: Designing for Folded Leaflets
                  </h3>
                  <div className="mt-2 text-sm text-blue-700">
                    <p>
                      When designing your leaflet, remember to account for the fold lines
                      in your layout. For best results:
                    </p>
                    <ul className="mt-2 list-disc list-inside">
                      <li>Keep important content away from fold lines</li>
                      <li>Use the front panel for your main message</li>
                      <li>Consider the reading order of folded sections</li>
                      <li>Test your design with a physical mockup</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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