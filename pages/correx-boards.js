import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';
import CorrexQuoteForm from '../components/CorrexQuoteForm';

const CorrexBoardsPage = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  // Hero images rotation
  const heroImages = [
    '/ifa/product/corriboard/4-x-8-corrugated-plastic-sheets.jpg',
    '/ifa/product/corriboard/corrugated-plastic-signs.jpg',
    '/ifa/product/corriboard/corrugated-plastic-signs-3.jpg',
    '/ifa/product/corriboard/coroplast-yard-signs.jpg',
    '/ifa/product/corriboard/4-x-8-corrugated-plastic-sheets-1.jpg'
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

  const correxProducts = [
    {
      name: '2mm/3mm Correx',
      slug: '2mm-3mm-correx',
      description: 'Ultra-lightweight and economical correx boards perfect for indoor displays, short-term promotions, and high-volume campaigns. Most cost-effective option.',
      features: ['Ultra-lightweight Construction', 'Most Economical Option', 'High-volume Campaigns', 'Indoor & Sheltered Use'],
      startingPrice: '€15',
      thickness: '2mm/3mm',
      applications: ['Indoor displays', 'Short-term promotions', 'Lightweight signs', 'High-volume campaigns'],
      images: [
        '/ifa/product/corriboard/4-x-8-corrugated-plastic-sheets.jpg',
        '/ifa/product/corriboard/corrugated-plastic-signs.jpg'
      ]
    },
    {
      name: '4mm Correx',
      slug: '4mm-correx',
      description: 'Our most popular option offering the perfect balance of durability and value. Ideal for most outdoor applications including election signs and real estate boards.',
      features: ['Most Popular Option', 'Perfect Balance of Durability & Value', 'Ideal for Outdoor Use', 'Pre-drilled Holes Available'],
      startingPrice: '€18',
      thickness: '4mm',
      applications: ['Outdoor applications', 'Election signs', 'Real estate boards', 'Construction site info'],
      images: [
        '/ifa/product/corriboard/corrugated-plastic-signs-3.jpg',
        '/ifa/product/corriboard/coroplast-yard-signs.jpg'
      ]
    },
    {
      name: '5mm/8mm Correx',
      slug: '5mm-8mm-correx',
      description: 'Heavy-duty correx boards with enhanced rigidity and wind resistance. Perfect for long-term outdoor installations and exposed locations.',
      features: ['Enhanced Rigidity & Wind Resistance', 'Superior Performance in Exposed Locations', 'Reinforced Edge Options', 'Larger Format Applications'],
      startingPrice: '€25',
      thickness: '5mm/8mm',
      applications: ['Long-term outdoor signage', 'Exposed locations', 'Larger format displays', 'Premium property signs'],
      images: [
        '/ifa/product/corriboard/4-x-8-corrugated-plastic-sheets-1.jpg',
        '/ifa/product/corriboard/4-x-8-corrugated-plastic-sheets.jpg'
      ]
    },
    {
      name: 'Staked Correx System',
      slug: 'staked-correx-system',
      description: 'Complete ready-to-install system with mounting hardware included. Perfect for election campaigns, real estate yard signs, and directional signage.',
      features: ['Complete System with Hardware', 'Pre-cut Stake Slots', 'All Thickness Options', 'Double or Single-sided Printing'],
      startingPrice: '€22',
      thickness: 'All thicknesses',
      applications: ['Election campaigns', 'Real estate yard signs', 'Directional signage', 'Event announcements'],
      images: [
        '/ifa/product/corriboard/coroplast-yard-signs.jpg',
        '/ifa/product/corriboard/corrugated-plastic-signs.jpg'
      ]
    }
  ];

  const sizeOptions = [
    { size: 'A0', dimensions: '841mm x 1189mm', idealFor: 'Large outdoor displays and exhibition graphics' },
    { size: 'A1', dimensions: '594mm x 841mm', idealFor: 'Medium outdoor signs and real estate boards' },
    { size: 'A2', dimensions: '420mm x 594mm', idealFor: 'Standard election signs and construction info' },
    { size: '600mm x 450mm', dimensions: '600mm x 450mm', idealFor: 'Popular size for election campaigns' },
    { size: '800mm x 600mm', dimensions: '800mm x 600mm', idealFor: 'Real estate and directional signage' },
    { size: '1220mm x 813mm', dimensions: '1220mm x 813mm', idealFor: 'Large format outdoor displays' },
    { size: 'Custom', dimensions: 'Up to 2440mm x 1220mm', idealFor: 'Precisely sized to your requirements' }
  ];

  const mountingOptions = [
    { name: 'H-Stakes', description: 'Metal H-stakes for lawn and ground installation' },
    { name: 'Wire Frames', description: 'Flexible wire frames for various mounting surfaces' },
    { name: 'Cable Ties', description: 'Secure mounting to fences, posts, or railings' },
    { name: 'Screws with Washers', description: 'Permanent wall mounting with professional finish' },
    { name: 'Double-Sided Tape', description: 'Temporary indoor mounting solution' },
    { name: 'Pre-drilled Holes', description: 'Ready for your preferred mounting method' },
    { name: 'Stake Slots', description: 'Integrated slots for easy stake insertion' }
  ];

  const applications = [
    'Election and political campaign signs',
    'Construction site safety information',
    'Real estate and property signage',
    'Outdoor event directional signage',
    'Temporary parking and traffic management',
    'Retail pavement and promotional signs',
    'Agricultural field markers',
    'Festival and event announcements'
  ];

  return (
    <Layout>
      <Head>
        <title>Correx Boards - Weather-Resistant Outdoor Signage | printNpack Ireland</title>
        <meta name="description" content="Weather-resistant correx boards for durable outdoor signage. Available in 2mm to 8mm thicknesses with UV printing. Perfect for elections, construction, real estate, and outdoor events across Ireland." />
        <meta name="keywords" content="correx boards, corriboard, outdoor signage, weather-resistant signs, election signs, real estate boards, construction signage, Ireland" />
        <link rel="canonical" href="https://www.printnpack.ie/correx-boards" />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        {/* Floating background elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-400 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-blue-400 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-300 rounded-full opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-animate id="hero-text">
              <div className={`transition-all duration-1000 ${isVisible['hero-text'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                  Weather-Resistant
                  <span className="block text-green-300">Correx Boards</span>
                  <span className="block text-2xl md:text-3xl lg:text-4xl text-green-200 mt-4 font-normal">
                    Durable Outdoor Signage Solutions
                  </span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-green-100 leading-relaxed">
                  Ultra-lightweight yet highly durable correx boards perfect for outdoor signage, 
                  elections, construction sites, and real estate. Weather-resistant with UV printing.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <button
                    onClick={() => {
                      setSelectedProduct('4mm Correx');
                      setQuoteModalOpen(true);
                    }}
                    className="bg-yellow-400 text-green-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transform hover:scale-105 transition-all duration-300 shadow-xl"
                  >
                    Get Custom Quote 🚀
                  </button>
                  <a
                    href="tel:+353894400155"
                    className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-green-600 transition-all duration-300 text-center"
                  >
                    Call +353 89 440 0155 📞
                  </a>
                </div>

                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-yellow-400">€15</div>
                    <div className="text-sm text-green-200">Starting Price</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-yellow-400">1-3</div>
                    <div className="text-sm text-green-200">Days Delivery</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-yellow-400">5</div>
                    <div className="text-sm text-green-200">Thickness Options</div>
                  </div>
                </div>
              </div>
            </div>

            <div data-animate id="hero-image" className="relative">
              <div className={`transition-all duration-1000 delay-300 ${isVisible['hero-image'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={heroImages[currentImageIndex]}
                    alt="Correx Boards"
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

      {/* Why Choose Our Correx Boards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16" data-animate id="why-choose">
            <div className={`transition-all duration-1000 ${isVisible['why-choose'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">
                Why Our Correx Boards Stand Out
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Weather-resistant correx boards designed for outdoor durability and professional signage applications
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🌧️', title: 'Weather-Resistant', description: 'Waterproof and UV-resistant construction for outdoor durability in all conditions' },
              { icon: '⚡', title: 'Ultra-Lightweight', description: 'Twin-wall fluted structure provides strength while maintaining easy handling' },
              { icon: '💰', title: 'Cost-Effective', description: 'Significant price breaks at 10, 25, 50, and 100+ units for bulk orders' },
              { icon: '🔧', title: 'Easy Installation', description: 'Multiple mounting options including H-stakes, wire frames, and cable ties' },
              { icon: '🎨', title: 'Direct UV Printing', description: 'UV-stable inks that bond with plastic surface for long-lasting graphics' },
              { icon: '📏', title: 'Multiple Thicknesses', description: 'Choose from 2mm to 8mm to match your specific durability needs' },
              { icon: '♻️', title: 'Environmentally Friendly', description: 'Recyclable polypropylene (code 5) with less material usage' },
              { icon: '⚡', title: 'Fast Turnaround', description: '1-3 business days standard delivery to meet your project deadlines' }
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
                Our Premium Correx Range
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the perfect thickness and specifications for your outdoor signage and display needs
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {correxProducts.map((product, index) => (
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
                      <span className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
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
                          <span key={idx} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-green-600">
                        Starting at {product.startingPrice}
                      </div>
                      <button
                        onClick={() => {
                          setSelectedProduct(product.name);
                          setQuoteModalOpen(true);
                        }}
                        className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
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
                Standard sizes plus custom dimensions to perfectly fit your outdoor signage requirements
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sizeOptions.map((option, index) => (
              <div key={option.size} data-animate id={`size-${index}`} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className={`transition-all duration-1000 delay-${index * 100} ${isVisible[`size-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{option.size}</h3>
                  <p className="text-lg text-green-600 font-medium mb-3">{option.dimensions}</p>
                  <p className="text-gray-600">{option.idealFor}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mounting Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16" data-animate id="mounting-options">
            <div className={`transition-all duration-1000 ${isVisible['mounting-options'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">
                Professional Mounting Options
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the perfect mounting solution for your specific installation requirements
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mountingOptions.map((option, index) => (
              <div key={option.name} data-animate id={`mounting-${index}`} className="bg-gray-50 rounded-xl p-6">
                <div className={`transition-all duration-1000 delay-${index * 200} ${isVisible[`mounting-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{option.name}</h3>
                  <p className="text-gray-600">{option.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16" data-animate id="applications">
            <div className={`transition-all duration-1000 ${isVisible['applications'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Perfect for Every Outdoor Application
              </h2>
              <p className="text-xl text-green-200 max-w-3xl mx-auto">
                Our correx boards serve businesses across Ireland in various industries and outdoor applications
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {applications.map((application, index) => (
              <div key={index} data-animate id={`application-${index}`} className="text-center">
                <div className={`transition-all duration-1000 delay-${index * 100} ${isVisible[`application-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <div className="w-16 h-16 bg-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📋</span>
                  </div>
                  <p className="text-green-100">{application}</p>
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
                Best prices for correx boards in Ireland. Volume discounts available for corporate and bulk orders.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Starter Package</h3>
              <div className="text-4xl font-bold text-green-600 mb-6">€15</div>
              <ul className="space-y-3 mb-8">
                <li>✓ Basic correx boards</li>
                <li>✓ Standard sizes</li>
                <li>✓ 3-day delivery</li>
              </ul>
              <button
                onClick={() => {
                  setSelectedProduct('4mm Correx');
                  setQuoteModalOpen(true);
                }}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-medium transition-colors"
              >
                Get Quote
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-green-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold">MOST POPULAR</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Professional Package</h3>
              <div className="text-4xl font-bold text-green-600 mb-6">€18</div>
              <ul className="space-y-3 mb-8">
                <li>✓ Premium correx boards</li>
                <li>✓ Custom sizes available</li>
                <li>✓ 2-day delivery</li>
                <li>✓ Free design service</li>
              </ul>
              <button
                onClick={() => {
                  setSelectedProduct('4mm Correx');
                  setQuoteModalOpen(true);
                }}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-medium transition-colors"
              >
                Get Quote
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Enterprise Package</h3>
              <div className="text-4xl font-bold text-green-600 mb-6">€25</div>
              <ul className="space-y-3 mb-8">
                <li>✓ Heavy-duty correx boards</li>
                <li>✓ Custom sizes & finishes</li>
                <li>✓ 1-day rush delivery</li>
                <li>✓ Dedicated account manager</li>
              </ul>
              <button
                onClick={() => {
                  setSelectedProduct('5mm/8mm Correx');
                  setQuoteModalOpen(true);
                }}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-medium transition-colors"
              >
                Get Quote
              </button>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => {
                setSelectedProduct('4mm Correx');
                setQuoteModalOpen(true);
              }}
              className="bg-yellow-400 text-green-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Get Volume Pricing 💰
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-500 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Ready for Outdoor Signage?
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-95">
            Join hundreds of Irish businesses using our correx boards for durable outdoor displays and signage.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button
              onClick={() => {
                setSelectedProduct('4mm Correx');
                setQuoteModalOpen(true);
              }}
              className="bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-100 transform hover:scale-105 transition-all duration-300 shadow-2xl min-w-[250px]"
            >
              Get Custom Quote Now 🚀
            </button>
            <a
              href="tel:+353894400155"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-green-600 transition-all duration-300 min-w-[250px]"
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
        <CorrexQuoteForm
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

export default CorrexBoardsPage;
