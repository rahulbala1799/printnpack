import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';
import FoamexQuoteForm from '../components/FoamexQuoteForm';

const FoamexBoardsPage = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  // Hero images rotation
  const heroImages = [
    '/ifa/product/foamex/3mm-Printed-Foamex-Boards-XL-Displays.avif',
    '/ifa/product/foamex/foam-board-printing-1000x1000.webp',
    '/ifa/product/foamex/foam-board-photo-prints-1000x1000.webp',
    '/ifa/product/foamex/sign-boards-1000x1000.webp'
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

  const foamexProducts = [
    {
      name: '3mm Foamex',
      slug: '3mm-foamex',
      description: 'Lightweight and economical foamex boards perfect for temporary displays, short-term promotions, and lightweight signage. Easy to cut and modify.',
      features: ['Lightweight & Economical', 'Ideal for Temporary Displays', 'Easy to Cut & Modify', 'Perfect for Short-term Signage'],
      startingPrice: '€25',
      thickness: '3mm',
      applications: ['Temporary displays', 'Short-term promotions', 'Lightweight signage', 'Easy cutting applications'],
      images: [
        '/ifa/product/foamex/3mm-Printed-Foamex-Boards-XL-Displays.avif',
        '/ifa/product/foamex/foam-board-printing-1000x1000.webp'
      ]
    },
    {
      name: '5mm Foamex',
      slug: '5mm-foamex',
      description: 'Our most popular thickness offering excellent balance of rigidity and weight. Perfect for most general purpose signage applications.',
      features: ['Most Popular Thickness', 'Excellent Balance of Rigidity & Weight', 'Stays Flat & Stable', 'Great All-round Option'],
      startingPrice: '€35',
      thickness: '5mm',
      applications: ['General purpose signage', 'Retail displays', 'Exhibition graphics', 'POS materials'],
      images: [
        '/ifa/product/foamex/foam-board-photo-prints-1000x1000.webp',
        '/ifa/product/foamex/sign-boards-1000x1000.webp'
      ]
    },
    {
      name: '5.5mm Foamex',
      slug: '5-5mm-foamex',
      description: 'Enhanced durability with extra rigidity for larger displays. Premium appearance with very stable vertical displays.',
      features: ['Enhanced Durability', 'Extra Rigidity for Larger Displays', 'Very Stable in Vertical Displays', 'Premium Appearance'],
      startingPrice: '€45',
      thickness: '5.5mm',
      applications: ['Premium displays', 'Larger format graphics', 'Enhanced durability needs', 'Vertical displays'],
      images: [
        '/ifa/product/foamex/3mm-Printed-Foamex-Boards-XL-Displays.avif',
        '/ifa/product/foamex/foam-board-printing-1000x1000.webp'
      ]
    },
    {
      name: '10mm Foamex',
      slug: '10mm-foamex',
      description: 'Maximum rigidity and durability for premium signage and self-standing displays. Ideal for long-term installations.',
      features: ['Maximum Rigidity & Durability', 'Excellent for Free-standing Displays', 'Premium Heavyweight Feel', 'Ideal for Long-term Installations'],
      startingPrice: '€65',
      thickness: '10mm',
      applications: ['Free-standing displays', 'Long-term installations', 'Maximum rigidity needs', 'Premium signage'],
      images: [
        '/ifa/product/foamex/sign-boards-1000x1000.webp',
        '/ifa/product/foamex/foam-board-photo-prints-1000x1000.webp'
      ]
    }
  ];

  const sizeOptions = [
    { size: 'A0', dimensions: '841mm x 1189mm', idealFor: 'Large posters and exhibition graphics' },
    { size: 'A1', dimensions: '594mm x 841mm', idealFor: 'Medium posters and retail displays' },
    { size: 'A2', dimensions: '420mm x 594mm', idealFor: 'Counter displays and small signs' },
    { size: '60cm x 90cm', dimensions: '600mm x 900mm', idealFor: 'Popular standard size for displays' },
    { size: '70cm x 100cm', dimensions: '700mm x 1000mm', idealFor: 'Large format signage' },
    { size: 'Custom', dimensions: 'Up to 2440mm x 1220mm', idealFor: 'Precisely sized to your requirements' }
  ];

  const finishingOptions = [
    { name: 'Unlaminated', description: 'Standard finish perfect for most indoor applications' },
    { name: 'Matt Laminated', description: 'Anti-glare finish with added durability against scratches' },
    { name: 'Gloss Laminated', description: 'High-shine finish for vibrant colors and stronger visual impact' },
    { name: 'Double-Sided Printing', description: 'Different designs on each side for maximum visibility' }
  ];

  const applications = [
    'Retail displays and POS materials',
    'Exhibition stand graphics',
    'Interior signage',
    'Wayfinding signs',
    'Menu boards for restaurants',
    'Information displays',
    'Shop window displays',
    'Photo mounting'
  ];

  return (
    <Layout>
      <Head>
        <title>Foamex Boards - Premium PVC Signage | printNpack Ireland</title>
        <meta name="description" content="Premium quality foamex PVC boards for indoor signage, exhibitions, and displays. Available in 3mm, 5mm, 5.5mm, and 10mm thicknesses. Custom sizes and finishing options available." />
        <meta name="keywords" content="foamex boards, PVC signage, indoor displays, exhibition graphics, retail signage, Ireland" />
        <link rel="canonical" href="https://www.printnpack.ie/foamex-boards" />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        {/* Floating background elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-400 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-300 rounded-full opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-animate id="hero-text">
              <div className={`transition-all duration-1000 ${isVisible['hero-text'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                  Premium
                  <span className="block text-blue-300">Foamex Boards</span>
                  <span className="block text-2xl md:text-3xl lg:text-4xl text-blue-200 mt-4 font-normal">
                    Professional PVC Signage Solutions
                  </span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
                  High-quality foamex PVC boards perfect for indoor signage, exhibitions, and displays. 
                  Available in multiple thicknesses with custom sizes and professional finishing options.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <button
                    onClick={() => {
                      setSelectedProduct('5mm Foamex');
                      setQuoteModalOpen(true);
                    }}
                    className="bg-yellow-400 text-blue-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transform hover:scale-105 transition-all duration-300 shadow-xl"
                  >
                    Get Custom Quote 🚀
                  </button>
                  <a
                    href="tel:+353894400155"
                    className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 text-center"
                  >
                    Call +353 89 440 0155 📞
                  </a>
                </div>

                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-yellow-400">€25</div>
                    <div className="text-sm text-blue-200">Starting Price</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-yellow-400">3-5</div>
                    <div className="text-sm text-blue-200">Days Delivery</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-yellow-400">4</div>
                    <div className="text-sm text-blue-200">Thickness Options</div>
                  </div>
                </div>
              </div>
            </div>

            <div data-animate id="hero-image" className="relative">
              <div className={`transition-all duration-1000 delay-300 ${isVisible['hero-image'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={heroImages[currentImageIndex]}
                    alt="Foamex Boards"
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

      {/* Why Choose Our Foamex Boards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16" data-animate id="why-choose">
            <div className={`transition-all duration-1000 ${isVisible['why-choose'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">
                Why Our Foamex Boards Stand Out
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Premium quality foamex PVC boards designed for professional signage and display applications
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🔄', title: 'Lightweight & Durable', description: 'Perfect balance of weight and strength for easy handling and long-lasting performance' },
              { icon: '📏', title: 'Multiple Thicknesses', description: 'Choose from 3mm, 5mm, 5.5mm, and 10mm to match your specific needs' },
              { icon: '🎨', title: 'Direct UV Printing', description: 'Vibrant colors and sharp detail with our advanced printing technology' },
              { icon: '🏠', title: 'Indoor & Sheltered Use', description: 'Perfect for indoor applications with optional outdoor use for short-term events' },
              { icon: '✂️', title: 'Easy to Cut & Mount', description: 'Simple to work with for custom installations and mounting requirements' },
              { icon: '📐', title: 'Custom Sizes Available', description: 'Standard sizes plus custom dimensions up to 8ft x 4ft' },
              { icon: '🖼️', title: 'High-Resolution Quality', description: '1440dpi print quality for crisp, professional results' },
              { icon: '⚡', title: 'Fast Turnaround', description: 'Quick production and delivery to meet your project deadlines' }
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
                Our Premium Foamex Range
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the perfect thickness and specifications for your signage and display needs
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {foamexProducts.map((product, index) => (
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
                      <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                        {product.thickness}
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
                            <span className="text-green-500 mr-2">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-2">Ideal for:</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.applications.map((app, idx) => (
                          <span key={idx} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-blue-600">
                        Starting at {product.startingPrice}
                      </div>
                      <button
                        onClick={() => {
                          setSelectedProduct(product.name);
                          setQuoteModalOpen(true);
                        }}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
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
                Standard sizes plus custom dimensions to perfectly fit your requirements
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sizeOptions.map((option, index) => (
              <div key={option.size} data-animate id={`size-${index}`} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className={`transition-all duration-1000 delay-${index * 100} ${isVisible[`size-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{option.size}</h3>
                  <p className="text-lg text-blue-600 font-medium mb-3">{option.dimensions}</p>
                  <p className="text-gray-600">{option.idealFor}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Finishing Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16" data-animate id="finishing-options">
            <div className={`transition-all duration-1000 ${isVisible['finishing-options'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">
                Professional Finishing Options
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the perfect finish to enhance your signage and protect your investment
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {finishingOptions.map((option, index) => (
              <div key={option.name} data-animate id={`finishing-${index}`} className="bg-gray-50 rounded-xl p-6">
                <div className={`transition-all duration-1000 delay-${index * 200} ${isVisible[`finishing-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{option.name}</h3>
                  <p className="text-gray-600">{option.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16" data-animate id="applications">
            <div className={`transition-all duration-1000 ${isVisible['applications'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Perfect for Every Application
              </h2>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                Our foamex boards serve businesses across Ireland in various industries and applications
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {applications.map((application, index) => (
              <div key={index} data-animate id={`application-${index}`} className="text-center">
                <div className={`transition-all duration-1000 delay-${index * 100} ${isVisible[`application-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📋</span>
                  </div>
                  <p className="text-blue-100">{application}</p>
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
                Best prices for foamex boards in Ireland. Volume discounts available for corporate and bulk orders.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Starter Package</h3>
              <div className="text-4xl font-bold text-blue-600 mb-6">€25</div>
              <ul className="space-y-3 mb-8">
                <li>✓ Basic foamex boards</li>
                <li>✓ Standard sizes</li>
                <li>✓ 7-day delivery</li>
              </ul>
              <button
                onClick={() => {
                  setSelectedProduct('5mm Foamex');
                  setQuoteModalOpen(true);
                }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors"
              >
                Get Quote
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-blue-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold">MOST POPULAR</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Professional Package</h3>
              <div className="text-4xl font-bold text-blue-600 mb-6">€35</div>
              <ul className="space-y-3 mb-8">
                <li>✓ Premium foamex boards</li>
                <li>✓ Custom sizes available</li>
                <li>✓ 5-day delivery</li>
                <li>✓ Free design service</li>
              </ul>
              <button
                onClick={() => {
                  setSelectedProduct('5mm Foamex');
                  setQuoteModalOpen(true);
                }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors"
              >
                Get Quote
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Enterprise Package</h3>
              <div className="text-4xl font-bold text-blue-600 mb-6">€45</div>
              <ul className="space-y-3 mb-8">
                <li>✓ Premium foamex boards</li>
                <li>✓ Custom sizes & finishes</li>
                <li>✓ 3-day rush delivery</li>
                <li>✓ Dedicated account manager</li>
              </ul>
              <button
                onClick={() => {
                  setSelectedProduct('5.5mm Foamex');
                  setQuoteModalOpen(true);
                }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors"
              >
                Get Quote
              </button>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => {
                setSelectedProduct('5mm Foamex');
                setQuoteModalOpen(true);
              }}
              className="bg-yellow-400 text-blue-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Get Volume Pricing 💰
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-500 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Ready for Professional Signage?
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-95">
            Join hundreds of Irish businesses using our foamex boards for stunning displays and signage.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button
              onClick={() => {
                setSelectedProduct('5mm Foamex');
                setQuoteModalOpen(true);
              }}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-100 transform hover:scale-105 transition-all duration-300 shadow-2xl min-w-[250px]"
            >
              Get Custom Quote Now 🚀
            </button>
            <a
              href="tel:+353894400155"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 min-w-[250px]"
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
        <FoamexQuoteForm
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

export default FoamexBoardsPage;
