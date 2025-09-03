import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';
import VinylStickerQuoteForm from '../components/VinylStickerQuoteForm';

const VinylStickersPage = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  // Hero images rotation
  const heroImages = [
    '/ifa/product/vinylstk/vinyl-stickers-ireland.jpg',
    '/ifa/product/vinylstk/vinyl-stickers-dublin.jpg',
    '/ifa/product/vinylstk/vinyl-stickers-cork.jpg',
    '/ifa/product/vinylstk/vinyl-stickers-galway.jpg',
    '/ifa/product/vinylstk/vinyl-stickers-limerick.jpg'
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

  const vinylProducts = [
    {
      name: 'Vinyl Stickers',
      slug: 'vinyl-stickers',
      description: 'High-quality vinyl stickers with excellent outdoor durability and vibrant colors. Perfect for vehicle graphics, window decals, and wall murals.',
      features: ['Premium Vinyl Material', 'Outdoor Durability', 'Vibrant Colors', 'Easy Application', 'Custom Shapes'],
      startingPrice: '€2',
      material: 'Premium Vinyl',
      applications: ['Vehicle graphics', 'Window decals', 'Wall murals', 'Product labels', 'Signage'],
      images: [
        '/ifa/product/vinylstk/vinyl-stickers-ireland.jpg',
        '/ifa/product/vinylstk/vinyl-stickers-dublin.jpg'
      ]
    },
    {
      name: 'Vinyl Decals',
      slug: 'vinyl-decals',
      description: 'Professional vinyl decals perfect for indoor and outdoor applications. Easy to apply with excellent adhesion and print quality.',
      features: ['Professional Finish', 'Easy Application', 'Excellent Adhesion', 'High Print Quality', 'Versatile Use'],
      startingPrice: '€3',
      material: 'Premium Vinyl',
      applications: ['Window decals', 'Wall graphics', 'Floor graphics', 'Equipment marking', 'Safety signs'],
      images: [
        '/ifa/product/vinylstk/vinyl-stickers-cork.jpg',
        '/ifa/product/vinylstk/vinyl-stickers-galway.jpg'
      ]
    },
    {
      name: 'Vinyl Labels',
      slug: 'vinyl-labels',
      description: 'Custom vinyl labels for product packaging, asset tags, and equipment marking. Professional appearance with long-lasting durability.',
      features: ['Custom Shapes', 'Professional Appearance', 'Long-lasting Durability', 'High Adhesion', 'Multiple Finishes'],
      startingPrice: '€1.50',
      material: 'Premium Vinyl',
      applications: ['Product labels', 'Asset tags', 'Equipment marking', 'Inventory labels', 'Custom stickers'],
      images: [
        '/ifa/product/vinylstk/vinyl-stickers-limerick.jpg',
        '/ifa/product/vinylstk/vinyl-stickers-ireland.jpg'
      ]
    },
    {
      name: 'Vinyl Graphics',
      slug: 'vinyl-graphics',
      description: 'Large format vinyl graphics for maximum visual impact. Perfect for vehicle wraps, exhibition graphics, and retail displays.',
      features: ['Large Format Capability', 'Maximum Visual Impact', 'Professional Installation', 'Custom Sizing', 'Premium Materials'],
      startingPrice: '€25',
      material: 'Premium Vinyl',
      applications: ['Vehicle wraps', 'Large format graphics', 'Exhibition graphics', 'Retail displays', 'Event branding'],
      images: [
        '/ifa/product/vinylstk/vinyl-stickers-dublin.jpg',
        '/ifa/product/vinylstk/vinyl-stickers-cork.jpg'
      ]
    }
  ];

  const materialOptions = [
    { material: 'Premium Vinyl', description: 'High-quality outdoor vinyl with excellent durability and vibrant colors', lifespan: '3-7 years outdoor' },
    { material: 'Economy Vinyl', description: 'Cost-effective vinyl for indoor applications and short-term use', lifespan: '1-2 years indoor' },
    { material: 'Reflective Vinyl', description: 'Safety vinyl with high visibility for road signs and safety applications', lifespan: '5-8 years outdoor' },
    { material: 'Fluorescent Vinyl', description: 'Bright, eye-catching vinyl for maximum visibility and attention', lifespan: '2-4 years outdoor' },
    { material: 'Metallic Vinyl', description: 'Premium metallic finish for luxury applications and premium branding', lifespan: '3-5 years outdoor' },
    { material: 'Chrome Vinyl', description: 'Mirror-like chrome effect for premium vehicle graphics and displays', lifespan: '2-4 years outdoor' }
  ];

  const finishOptions = [
    { finish: 'Gloss', description: 'Shiny, vibrant finish that enhances colors and provides premium appearance' },
    { finish: 'Matte', description: 'Non-reflective, subtle finish for professional and understated look' },
    { finish: 'Satin', description: 'Semi-gloss finish offering elegant appearance with reduced glare' },
    { finish: 'Transparent', description: 'See-through background allowing surface to show through' },
    { finish: 'White Backing', description: 'Opaque white background for maximum color vibrancy' },
    { finish: 'Die Cut', description: 'Custom shape cutting for unique and creative designs' }
  ];

  const applications = [
    'Vehicle graphics and wraps',
    'Window decals and graphics',
    'Wall murals and graphics',
    'Floor graphics and safety signs',
    'Product labels and packaging',
    'Equipment marking and identification',
    'Safety and warning signs',
    'Event branding and displays'
  ];

  return (
    <Layout>
      <Head>
        <title>Vinyl Stickers - Custom Vinyl Graphics & Decals | printNpack Ireland</title>
        <meta name="description" content="High-quality vinyl stickers, decals, and graphics for vehicles, windows, walls, and more. Custom designs with premium materials and professional installation across Ireland." />
        <meta name="keywords" content="vinyl stickers, vinyl decals, vinyl graphics, vehicle wraps, window decals, wall graphics, Ireland" />
        <link rel="canonical" href="https://www.printnpack.ie/vinyl-stickers" />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        {/* Floating background elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-400 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-indigo-400 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-300 rounded-full opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-animate id="hero-text">
              <div className={`transition-all duration-1000 ${isVisible['hero-text'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                  Custom
                  <span className="block text-purple-300">Vinyl Stickers</span>
                  <span className="block text-2xl md:text-3xl lg:text-4xl text-purple-200 mt-4 font-normal">
                    Premium Graphics & Decals
                  </span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-purple-100 leading-relaxed">
                  High-quality vinyl stickers, decals, and graphics for vehicles, windows, walls, and more. 
                  Custom designs with premium materials and professional installation.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <button
                    onClick={() => {
                      setSelectedProduct('Vinyl Stickers');
                      setQuoteModalOpen(true);
                    }}
                    className="bg-yellow-400 text-purple-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transform hover:scale-105 transition-all duration-300 shadow-xl"
                  >
                    Get Custom Quote 🚀
                  </button>
                  <a
                    href="tel:+353894400155"
                    className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-600 transition-colors duration-300 text-center"
                  >
                    Call +353 89 440 0155 📞
                  </a>
                </div>

                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-yellow-400">€2</div>
                    <div className="text-sm text-purple-200">Starting Price</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-yellow-400">1-3</div>
                    <div className="text-sm text-purple-200">Days Delivery</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-yellow-400">6</div>
                    <div className="text-sm text-purple-200">Material Types</div>
                  </div>
                </div>
              </div>
            </div>

            <div data-animate id="hero-image" className="relative">
              <div className={`transition-all duration-1000 delay-300 ${isVisible['hero-image'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={heroImages[currentImageIndex]}
                    alt="Vinyl Stickers"
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

      {/* Why Choose Our Vinyl Stickers */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16" data-animate id="why-choose">
            <div className={`transition-all duration-1000 ${isVisible['why-choose'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">
                Why Our Vinyl Stickers Stand Out
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Premium vinyl materials with professional printing and installation for maximum impact and durability
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🎨', title: 'Premium Materials', description: 'High-quality vinyl with excellent outdoor durability and vibrant color retention' },
              { icon: '✂️', title: 'Custom Cutting', description: 'Precise die-cutting for unique shapes and professional finishes' },
              { icon: '🔧', title: 'Easy Application', description: 'Professional installation with transfer tape for bubble-free application' },
              { icon: '🌞', title: 'UV Resistant', description: 'Long-lasting colors that resist fading from sunlight and weather' },
              { icon: '💧', title: 'Waterproof', description: 'Waterproof materials perfect for outdoor and vehicle applications' },
              { icon: '📏', title: 'Multiple Sizes', description: 'From small labels to large vehicle wraps and wall graphics' },
              { icon: '🎯', title: 'Versatile Use', description: 'Suitable for vehicles, windows, walls, floors, and equipment' },
              { icon: '⚡', title: 'Fast Turnaround', description: '1-3 business days for most orders with rush options available' }
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
                Our Premium Vinyl Range
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the perfect vinyl solution for your specific application and design requirements
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {vinylProducts.map((product, index) => (
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
                      <span className="bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
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
                            <span className="text-purple-500 mr-2">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-2">Ideal for:</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.applications.map((app, idx) => (
                          <span key={idx} className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-purple-600">
                        Starting at {product.startingPrice}
                      </div>
                      <button
                        onClick={() => {
                          setSelectedProduct(product.name);
                          setQuoteModalOpen(true);
                        }}
                        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
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

      {/* Material Options */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16" data-animate id="material-options">
            <div className={`transition-all duration-1000 ${isVisible['material-options'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">
                Material Types & Specifications
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from our range of premium vinyl materials to match your specific application needs
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {materialOptions.map((option, index) => (
              <div key={option.material} data-animate id={`material-${index}`} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className={`transition-all duration-1000 delay-${index * 100} ${isVisible[`material-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{option.material}</h3>
                  <p className="text-lg text-purple-600 font-medium mb-3">{option.lifespan}</p>
                  <p className="text-gray-600">{option.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Finish Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16" data-animate id="finish-options">
            <div className={`transition-all duration-1000 ${isVisible['finish-options'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">
                Finish Options & Effects
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Multiple finish options to achieve the perfect look for your vinyl graphics and decals
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {finishOptions.map((option, index) => (
              <div key={option.finish} data-animate id={`finish-${index}`} className="bg-gray-50 rounded-xl p-6">
                <div className={`transition-all duration-1000 delay-${index * 200} ${isVisible[`finish-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{option.finish}</h3>
                  <p className="text-gray-600">{option.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16" data-animate id="applications">
            <div className={`transition-all duration-1000 ${isVisible['applications'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Perfect for Every Application
              </h2>
              <p className="text-xl text-purple-200 max-w-3xl mx-auto">
                Our vinyl solutions serve businesses across Ireland in various industries and applications
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {applications.map((application, index) => (
              <div key={index} data-animate id={`application-${index}`} className="text-center">
                <div className={`transition-all duration-1000 delay-${index * 100} ${isVisible[`application-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <div className="w-16 h-16 bg-purple-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <p className="text-purple-100">{application}</p>
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
                Best prices for vinyl stickers and graphics in Ireland. Volume discounts available for bulk orders.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Starter Package</h3>
              <div className="text-4xl font-bold text-purple-600 mb-6">€2</div>
              <ul className="space-y-3 mb-8">
                <li>✓ Basic vinyl stickers</li>
                <li>✓ Standard sizes</li>
                <li>✓ 3-day delivery</li>
              </ul>
              <button
                onClick={() => {
                  setSelectedProduct('Vinyl Stickers');
                  setQuoteModalOpen(true);
                }}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg font-medium transition-colors"
              >
                Get Quote
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-purple-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold">MOST POPULAR</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Professional Package</h3>
              <div className="text-4xl font-bold text-purple-600 mb-6">€3</div>
              <ul className="space-y-3 mb-8">
                <li>✓ Premium vinyl materials</li>
                <li>✓ Custom sizes available</li>
                <li>✓ 2-day delivery</li>
                <li>✓ Free design service</li>
              </ul>
              <button
                onClick={() => {
                  setSelectedProduct('Vinyl Decals');
                  setQuoteModalOpen(true);
                }}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg font-medium transition-colors"
              >
                Get Quote
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Enterprise Package</h3>
              <div className="text-4xl font-bold text-purple-600 mb-6">€25</div>
              <ul className="space-y-3 mb-8">
                <li>✓ Large format graphics</li>
                <li>✓ Premium materials & finishes</li>
                <li>✓ 1-day rush delivery</li>
                <li>✓ Professional installation</li>
              </ul>
              <button
                onClick={() => {
                  setSelectedProduct('Vinyl Graphics');
                  setQuoteModalOpen(true);
                }}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg font-medium transition-colors"
              >
                Get Quote
              </button>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => {
                setSelectedProduct('Vinyl Stickers');
                setQuoteModalOpen(true);
              }}
              className="bg-yellow-400 text-purple-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Get Volume Pricing 💰
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-500 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Ready for Custom Vinyl?
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-95">
            Join hundreds of Irish businesses using our vinyl solutions for professional graphics and branding.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button
              onClick={() => {
                setSelectedProduct('Vinyl Stickers');
                setQuoteModalOpen(true);
              }}
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-100 transform hover:scale-105 transition-all duration-300 shadow-2xl min-w-[250px]"
            >
              Get Custom Quote Now 🚀
            </button>
            <a
              href="tel:+353894400155"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-600 transition-colors duration-300 min-w-[250px]"
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
        <VinylStickerQuoteForm
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

export default VinylStickersPage;
