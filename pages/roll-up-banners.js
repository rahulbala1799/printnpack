import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';
import RollUpBannerQuoteForm from '../components/RollUpBannerQuoteForm';

const RollUpBannersPage = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  // Hero images rotation
  const heroImages = [
    '/ifa/product/rollup/roll-up-banner-1.png',
    '/ifa/product/rollup/roll-up-banner-2.png',
    '/ifa/product/rollup/roll-up-banner-3.png',
    '/ifa/product/rollup/roll-up-banner-4.png',
    '/ifa/product/rollup/roll-up-banner-5.png'
  ];

  // Auto-rotate hero images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const rollUpProducts = [
    {
      name: 'Roll Up Banners',
      slug: 'roll-up-banners',
      description: 'Professional roll-up banners perfect for trade shows, exhibitions, and corporate displays. Easy setup with premium vinyl printing.',
      features: ['Easy Setup & Transport', 'Premium Vinyl Printing', 'Professional Appearance', 'Multiple Sizes', 'Portable Design'],
      startingPrice: '€45',
      material: 'Premium Vinyl',
      applications: ['Trade shows', 'Exhibitions', 'Retail displays', 'Corporate events', 'Reception areas'],
      images: [
        '/ifa/product/rollup/roll-up-banner-1.png',
        '/ifa/product/rollup/roll-up-banner-2.png'
      ]
    },
    {
      name: 'Premium Roll Up',
      slug: 'premium-roll-up',
      description: 'High-end roll-up banners with aluminium frames for maximum durability and professional appearance. Perfect for premium venues.',
      features: ['Aluminium Frame', 'Maximum Durability', 'Premium Materials', 'Professional Finish', 'Long-term Use'],
      startingPrice: '€65',
      material: 'Premium Vinyl + Aluminium',
      applications: ['High-end exhibitions', 'Corporate headquarters', 'Premium retail', 'VIP events', 'Executive offices'],
      images: [
        '/ifa/product/rollup/roll-up-banner-3.png',
        '/ifa/product/rollup/roll-up-banner-4.png'
      ]
    },
    {
      name: 'Lightweight Roll Up',
      slug: 'lightweight-roll-up',
      description: 'Ultra-lightweight roll-up banners designed for easy transport and travel. Perfect for mobile sales and temporary displays.',
      features: ['Ultra-lightweight', 'Easy Transport', 'Quick Setup', 'Travel-friendly', 'Cost-effective'],
      startingPrice: '€35',
      material: 'Lightweight Vinyl',
      applications: ['Travel exhibitions', 'Mobile sales', 'Temporary displays', 'Event marketing', 'Portable displays'],
      images: [
        '/ifa/product/rollup/roll-up-banner-5.png',
        '/ifa/product/rollup/roll-up-banner-1.png'
      ]
    },
    {
      name: 'Custom Roll Up System',
      slug: 'custom-roll-up-system',
      description: 'Fully customized roll-up systems to your exact specifications. Special sizes, materials, and branding options available.',
      features: ['Custom Sizing', 'Specialty Materials', 'Branded Systems', 'Unique Applications', 'Professional Design'],
      startingPrice: '€85',
      material: 'Custom Materials',
      applications: ['Special events', 'Unique displays', 'Branded systems', 'Custom sizes', 'Specialty applications'],
      images: [
        '/ifa/product/rollup/roll-up-banner-2.png',
        '/ifa/product/rollup/roll-up-banner-3.png'
      ]
    }
  ];

  const sizeOptions = [
    { size: '800mm x 2000mm', dimensions: '800mm x 2000mm', idealFor: 'Standard trade shows and exhibitions' },
    { size: '850mm x 2000mm', dimensions: '850mm x 2000mm', idealFor: 'Wide format displays and premium venues' },
    { size: '1000mm x 2000mm', dimensions: '1000mm x 2000mm', idealFor: 'Extra wide displays for maximum impact' },
    { size: '1200mm x 2000mm', dimensions: '1200mm x 2000mm', idealFor: 'Large format displays and grand openings' },
    { size: 'Custom Sizes', dimensions: 'Up to 1500mm x 3000mm', idealFor: 'Specialty applications and unique requirements' }
  ];

  const materialOptions = [
    { material: 'Premium Vinyl', description: 'High-quality vinyl with excellent outdoor durability and vibrant colors', lifespan: '3-5 years outdoor' },
    { material: 'Economy Vinyl', description: 'Cost-effective vinyl for indoor applications and short-term use', lifespan: '1-2 years indoor' },
    { material: 'Mesh Vinyl', description: 'Wind-resistant mesh material perfect for outdoor events and windy conditions', lifespan: '2-4 years outdoor' },
    { material: 'Backlit Vinyl', description: 'Translucent vinyl for illuminated displays and backlit applications', lifespan: '2-3 years indoor' },
    { material: 'Fabric Material', description: 'Premium textile material for luxury displays and premium venues', lifespan: '3-5 years indoor' }
  ];

  const frameOptions = [
    { frame: 'Aluminium Frame', description: 'Premium aluminium construction for maximum durability and professional appearance' },
    { frame: 'Lightweight Frame', description: 'Lightweight materials for easy transport and setup' },
    { frame: 'Heavy Duty Frame', description: 'Reinforced construction for high-traffic areas and long-term use' },
    { frame: 'Travel Frame', description: 'Compact design for easy travel and storage' },
    { frame: 'Custom Frame', description: 'Specialty frames for unique applications and requirements' }
  ];

  const applications = [
    'Trade shows and exhibitions',
    'Corporate events and presentations',
    'Retail displays and promotions',
    'Reception areas and lobbies',
    'Conference and seminar venues',
    'Product launches and launches',
    'Mobile sales and marketing',
    'Temporary branding and displays'
  ];

  return (
    <Layout>
      <Head>
        <title>Roll Up Banners - Professional Exhibition & Trade Show Displays | printNpack Ireland</title>
        <meta name="description" content="Professional roll-up banners for trade shows, exhibitions, and corporate displays. Premium vinyl printing with easy setup and transport across Ireland." />
        <meta name="keywords" content="roll up banners, exhibition displays, trade show banners, corporate displays, Ireland" />
        <link rel="canonical" href="https://www.printnpack.ie/roll-up-banners" />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-900 via-orange-800 to-red-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        {/* Floating background elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-400 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-red-400 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-orange-300 rounded-full opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-animate id="hero-text">
              <div className={`transition-all duration-1000 ${isVisible['hero-text'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                  Professional
                  <span className="block text-orange-300">Roll Up Banners</span>
                  <span className="block text-2xl md:text-3xl lg:text-4xl text-orange-200 mt-4 font-normal">
                    Exhibition & Trade Show Displays
                  </span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-orange-100 leading-relaxed">
                  Professional roll-up banners perfect for trade shows, exhibitions, and corporate displays. 
                  Easy setup with premium vinyl printing and portable design.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <button
                    onClick={() => {
                      setSelectedProduct('Roll Up Banners');
                      setQuoteModalOpen(true);
                    }}
                    className="bg-yellow-400 text-orange-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transform hover:scale-105 transition-all duration-300 shadow-xl"
                  >
                    Get Custom Quote 🚀
                  </button>
                  <a
                    href="tel:+353894400155"
                    className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-orange-600 transition-colors duration-300 text-center"
                  >
                    Call +353 89 440 0155 📞
                  </a>
                </div>

                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-yellow-400">€35</div>
                    <div className="text-sm text-orange-200">Starting Price</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-yellow-400">1-3</div>
                    <div className="text-sm text-orange-200">Days Delivery</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-yellow-400">5</div>
                    <div className="text-sm text-orange-200">Size Options</div>
                  </div>
                </div>
              </div>
            </div>

            <div data-animate id="hero-image" className="relative">
              <div className={`transition-all duration-1000 delay-300 ${isVisible['hero-image'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={heroImages[currentImageIndex]}
                    alt="Roll Up Banners"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                {/* Image navigation dots */}
                <div className="flex justify-center mt-4 space-x-2">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentImageIndex ? 'bg-yellow-400 scale-125' : 'bg-white/50 hover:bg-white/75'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Roll Up Banners */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16" data-animate id="why-choose">
            <div className={`transition-all duration-1000 ${isVisible['why-choose'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">
                Why Our Roll Up Banners Stand Out
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional roll-up banners designed for easy setup, transport, and maximum visual impact
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🚀', title: 'Easy Setup', description: 'Quick 30-second setup with no tools required for instant professional displays' },
              { icon: '✈️', title: 'Portable Design', description: 'Lightweight and compact for easy transport to any location' },
              { icon: '🎨', title: 'Premium Printing', description: 'High-quality UV printing with vibrant colors and sharp graphics' },
              { icon: '🔧', title: 'Durable Construction', description: 'Robust frames and premium materials for long-lasting use' },
              { icon: '📏', title: 'Multiple Sizes', description: 'From standard 800mm to extra-wide 1200mm formats' },
              { icon: '💼', title: 'Professional Finish', description: 'Sleek, modern design perfect for corporate and business use' },
              { icon: '⚡', title: 'Fast Turnaround', description: '1-3 business days for most orders with rush options available' },
              { icon: '🇮🇪', title: 'Irish Made', description: 'Manufactured in Ireland with local support and quality assurance' }
            ].map((feature, index) => (
              <div key={index} data-animate id={`feature-${index}`} className="text-center">
                <div className={`transition-all duration-1000 delay-${index * 100} ${isVisible[`feature-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Range */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16" data-animate id="product-range">
            <div className={`transition-all duration-1000 ${isVisible['product-range'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">
                Our Premium Roll Up Range
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the perfect roll-up banner solution for your exhibition and display needs
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rollUpProducts.map((product, index) => (
              <div key={product.slug} data-animate id={`product-${index}`} className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className={`transition-all duration-1000 delay-${index * 200} ${isVisible[`product-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                        {product.material}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <span className="text-orange-500 mr-2">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-2">Ideal for:</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.applications.map((app, idx) => (
                          <span key={idx} className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-orange-600">
                        Starting at {product.startingPrice}
                      </div>
                      <button
                        onClick={() => {
                          setSelectedProduct(product.name);
                          setQuoteModalOpen(true);
                        }}
                        className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                      >
                        Get Quote
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Size Options */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16" data-animate id="size-options">
            <div className={`transition-all duration-1000 ${isVisible['size-options'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">
                Size Options & Specifications
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Standard sizes plus custom dimensions to perfectly fit your exhibition and display requirements
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sizeOptions.map((option, index) => (
              <div key={option.size} data-animate id={`size-${index}`} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className={`transition-all duration-1000 delay-${index * 100} ${isVisible[`size-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{option.size}</h3>
                  <p className="text-lg text-orange-600 font-medium mb-3">{option.dimensions}</p>
                  <p className="text-gray-600">{option.idealFor}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Material Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16" data-animate id="material-options">
            <div className={`transition-all duration-1000 ${isVisible['material-options'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">
                Material Types & Specifications
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from our range of premium materials to match your specific application needs
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {materialOptions.map((option, index) => (
              <div key={option.material} data-animate id={`material-${index}`} className="bg-gray-50 rounded-xl p-6">
                <div className={`transition-all duration-1000 delay-${index * 100} ${isVisible[`material-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{option.material}</h3>
                  <p className="text-lg text-orange-600 font-medium mb-3">{option.lifespan}</p>
                  <p className="text-gray-600">{option.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frame Options */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16" data-animate id="frame-options">
            <div className={`transition-all duration-1000 ${isVisible['frame-options'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">
                Frame Options & Construction
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Multiple frame options to match your durability and transport requirements
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {frameOptions.map((option, index) => (
              <div key={option.frame} data-animate id={`frame-${index}`} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className={`transition-all duration-1000 delay-${index * 200} ${isVisible[`frame-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{option.frame}</h3>
                  <p className="text-gray-600">{option.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-orange-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16" data-animate id="applications">
            <div className={`transition-all duration-1000 ${isVisible['applications'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Perfect for Every Application
              </h2>
              <p className="text-xl text-orange-200 max-w-3xl mx-auto">
                Our roll-up banners serve businesses across Ireland in various industries and applications
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {applications.map((application, index) => (
              <div key={index} data-animate id={`application-${index}`} className="text-center">
                <div className={`transition-all duration-1000 delay-${index * 100} ${isVisible[`application-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <div className="w-16 h-16 bg-orange-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <p className="text-orange-100">{application}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16" data-animate id="pricing">
            <div className={`transition-all duration-1000 ${isVisible['pricing'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">
                Competitive Ireland Pricing
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Best prices for roll-up banners in Ireland. Volume discounts available for bulk orders.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Starter Package</h3>
              <div className="text-4xl font-bold text-orange-600 mb-6">€35</div>
              <ul className="space-y-3 mb-8">
                <li>✓ Basic roll-up banner</li>
                <li>✓ Standard size</li>
                <li>✓ 3-day delivery</li>
              </ul>
              <button
                onClick={() => {
                  setSelectedProduct('Lightweight Roll Up');
                  setQuoteModalOpen(true);
                }}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 px-6 rounded-lg font-medium transition-colors"
              >
                Get Quote
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-orange-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold">MOST POPULAR</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Professional Package</h3>
              <div className="text-4xl font-bold text-orange-600 mb-6">€45</div>
              <ul className="space-y-3 mb-8">
                <li>✓ Premium roll-up banner</li>
                <li>✓ Multiple sizes available</li>
                <li>✓ 2-day delivery</li>
                <li>✓ Free design service</li>
              </ul>
              <button
                onClick={() => {
                  setSelectedProduct('Roll Up Banners');
                  setQuoteModalOpen(true);
                }}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 px-6 rounded-lg font-medium transition-colors"
              >
                Get Quote
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Enterprise Package</h3>
              <div className="text-4xl font-bold text-orange-600 mb-6">€65</div>
              <ul className="space-y-3 mb-8">
                <li>✓ Premium roll-up banner</li>
                <li>✓ Aluminium frame</li>
                <li>✓ 1-day rush delivery</li>
                <li>✓ Professional installation</li>
              </ul>
              <button
                onClick={() => {
                  setSelectedProduct('Premium Roll Up');
                  setQuoteModalOpen(true);
                }}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 px-6 rounded-lg font-medium transition-colors"
              >
                Get Quote
              </button>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => {
                setSelectedProduct('Roll Up Banners');
                setQuoteModalOpen(true);
              }}
              className="bg-yellow-400 text-orange-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Get Volume Pricing 💰
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-500 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Ready for Professional Displays?
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-95">
            Join hundreds of Irish businesses using our roll-up banners for professional exhibitions and displays.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button
              onClick={() => {
                setSelectedProduct('Roll Up Banners');
                setQuoteModalOpen(true);
              }}
              className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-100 transform hover:scale-105 transition-all duration-300 shadow-2xl min-w-[250px]"
            >
              Get Custom Quote Now 🚀
            </button>
            <a
              href="tel:+353894400155"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-orange-600 transition-colors duration-300 min-w-[250px]"
            >
              Call +353 89 440 0155 📞
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 opacity-90">
            <div className="text-center">
              <div className="text-3xl mb-2">🇮🇪</div>
              <div className="font-semibold">Made in Ireland</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">⚡</div>
              <div className="font-semibold">Fast Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">💯</div>
              <div className="font-semibold">Quality Guaranteed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Modal */}
      {quoteModalOpen && (
        <RollUpBannerQuoteForm
          isOpen={quoteModalOpen}
          onClose={() => setQuoteModalOpen(false)}
          productType={selectedProduct}
        />
      )}

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </Layout>
  );
};

export default RollUpBannersPage;
