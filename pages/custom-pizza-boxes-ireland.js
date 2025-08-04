import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';
import PizzaBoxQuoteForm from '../components/PizzaBoxQuoteForm';

const CustomPizzaBoxesIreland = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  // Pizza box images
  const pizzaBoxImages = [
    '/images/pizza-boxes/PIZZA_BOX_1.jpg',
    '/images/pizza-boxes/PIZZA_BOX_2.jpg',
    '/images/pizza-boxes/PIZZA_BOX_3.jpg',
    '/images/pizza-boxes/PIZZA_BOX_4.jpg',
    '/images/pizza-boxes/PIZZA_BOX_5.jpg',
    '/images/pizza-boxes/PIZZA_BOX_6.jpg',
    '/images/pizza-boxes/PIZZA_BOX_7.jpg',
    '/images/pizza-boxes/PIZZA_BOX_8.jpg',
    '/images/pizza-boxes/PIZZA_BOX_9.jpg',
    '/images/pizza-boxes/PIZZA_BOX_10.jpg',
    '/images/pizza-boxes/PIZZA_BOX_11.jpg',
    '/images/pizza-boxes/PIZZA_BOX_12.jpg',
    '/images/pizza-boxes/PIZZA_BOX_13.jpg'
  ];

  // Auto-rotate hero images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % 6); // Use first 6 images for hero
    }, 4000);
    return () => clearInterval(interval);
  }, []);

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

  const features = [
    {
      icon: "🍕",
      title: "Custom Pizza Box Printing",
      description: "Full-color custom printing with your logo, branding, and unique designs to make your pizza boxes stand out."
    },
    {
      icon: "🏆",
      title: "Premium Quality Materials",
      description: "Food-safe corrugated cardboard that keeps pizzas hot, fresh, and prevents grease leakage."
    },
    {
      icon: "📏",
      title: "All Sizes Available",
      description: "From 7\" personal pizzas to 20\" family size - we have the perfect box size for every pizza."
    },
    {
      icon: "🚚",
      title: "Fast Ireland Delivery",
      description: "Quick turnaround times with reliable delivery across Dublin, Cork, Galway, and all of Ireland."
    },
    {
      icon: "💰",
      title: "Competitive Pricing",
      description: "Best prices in Ireland for custom pizza boxes with volume discounts for restaurants and takeaways."
    },
    {
      icon: "🌟",
      title: "Professional Design Service",
      description: "Our design team can create stunning pizza box artwork that promotes your brand and attracts customers."
    }
  ];

  const sizes = [
    { size: "7\"", description: "Personal Pizza", popular: false },
    { size: "9\"", description: "Small Pizza", popular: false },
    { size: "12\"", description: "Medium Pizza", popular: true },
    { size: "14\"", description: "Large Pizza", popular: true },
    { size: "16\"", description: "Family Pizza", popular: false },
    { size: "18\"", description: "Extra Large", popular: false },
    { size: "20\"", description: "Party Size", popular: false },
    { size: "Custom", description: "Any Size", popular: false }
  ];

  const applications = [
    {
      title: "Pizza Restaurants",
      description: "Enhance your brand with custom pizza boxes that customers remember",
      icon: "🏪"
    },
    {
      title: "Takeaway Services",
      description: "Professional packaging that keeps food hot and promotes your business",
      icon: "🥡"
    },
    {
      title: "Food Delivery",
      description: "Durable boxes that survive delivery while showcasing your brand",
      icon: "🛵"
    },
    {
      title: "Catering Companies",
      description: "Bulk pizza box orders for events, parties, and corporate catering",
      icon: "🎉"
    },
    {
      title: "Food Trucks",
      description: "Portable, branded packaging perfect for mobile food businesses",
      icon: "🚚"
    },
    {
      title: "Event Catering",
      description: "Custom pizza boxes for weddings, parties, and special events",
      icon: "🎊"
    }
  ];

  return (
    <Layout>
      <Head>
        <title>Custom Pizza Boxes Ireland | Printed Pizza Box Packaging | Print n Pack</title>
        <meta name="description" content="Premium custom pizza boxes in Ireland. Full-color printing, all sizes, fast delivery. Perfect for restaurants, takeaways & food delivery. Order your branded pizza boxes today!" />
        <meta name="keywords" content="custom pizza boxes Ireland, printed pizza boxes, pizza box printing Dublin, food packaging Ireland, restaurant packaging, takeaway boxes, pizza delivery boxes, branded pizza boxes, corrugated pizza boxes, food safe packaging Ireland" />
        <meta property="og:title" content="Custom Pizza Boxes Ireland | Premium Printed Pizza Box Packaging" />
        <meta property="og:description" content="High-quality custom pizza boxes with full-color printing. All sizes available. Fast delivery across Ireland. Perfect for restaurants, takeaways, and food delivery services." />
        <meta property="og:image" content="https://www.printnpack.ie/images/pizza-boxes/PIZZA_BOX_1.jpg" />
        <meta property="og:url" content="https://www.printnpack.ie/custom-pizza-boxes-ireland" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Custom Pizza Boxes Ireland | Print n Pack" />
        <meta name="twitter:description" content="Premium custom pizza boxes with full-color printing. All sizes, fast Ireland delivery." />
        <meta name="twitter:image" content="https://www.printnpack.ie/images/pizza-boxes/PIZZA_BOX_1.jpg" />
        <link rel="canonical" href="https://www.printnpack.ie/custom-pizza-boxes-ireland" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Print n Pack Ireland" />
        <meta name="geo.region" content="IE" />
        <meta name="geo.placename" content="Ireland" />
        <meta name="language" content="en-IE" />
      </Head>

      {/* Hero Section with Animated Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-red-600 via-orange-500 to-yellow-400">
        {/* Animated Background Images */}
        <div className="absolute inset-0">
          {pizzaBoxImages.slice(0, 6).map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-20' : 'opacity-0'
              }`}
            >
              <Image
                src={image}
                alt="Custom Pizza Box"
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        {/* Floating Pizza Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`absolute text-6xl opacity-10 animate-float`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${4 + Math.random() * 2}s`
              }}
            >
              🍕
            </div>
          ))}
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <div className="mb-6">
            <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold mb-4 animate-pulse">
              🇮🇪 Made in Ireland
            </span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-black mb-6 leading-tight">
            <span className="block bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">
              Custom Pizza Boxes
            </span>
            <span className="block text-2xl md:text-4xl font-bold mt-2">
              That Sell Your Brand
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed font-light">
            Premium printed pizza boxes that keep food hot, protect your brand, and guarantee customer satisfaction. 
            <span className="block mt-2 font-semibold">Fast delivery across Ireland 🚚</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button
              onClick={() => setQuoteModalOpen(true)}
              className="bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-100 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-yellow-200/50 min-w-[200px]"
            >
              Get Custom Quote 🍕
            </button>
            <a
              href="#gallery"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-red-600 transition-all duration-300 min-w-[200px]"
            >
              View Gallery 📸
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl font-black text-yellow-200">€0.45</div>
              <div className="text-sm font-semibold">Starting Price</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl font-black text-yellow-200">5-7</div>
              <div className="text-sm font-semibold">Days Delivery</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl font-black text-yellow-200">100+</div>
              <div className="text-sm font-semibold">Happy Restaurants</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white" data-animate>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">
              Why Choose Our Pizza Boxes?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're Ireland's leading custom pizza box manufacturer, trusted by restaurants across Dublin, Cork, Galway, and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-red-100 ${
                  isVisible.features ? 'animate-fadeInUp' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-red-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section id="gallery" className="py-20 bg-gradient-to-br from-gray-50 to-red-50" data-animate>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">
              Premium Pizza Box Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our stunning collection of custom printed pizza boxes. Each design showcases the quality and creativity that makes your brand unforgettable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {pizzaBoxImages.map((image, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isVisible.gallery ? 'animate-fadeInUp' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="aspect-square relative">
                  <Image
                    src={image}
                    alt={`Custom Pizza Box Design ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="text-sm font-semibold">Design #{index + 1}</div>
                      <div className="text-xs opacity-80">Custom Pizza Box</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => setQuoteModalOpen(true)}
              className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-red-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Get Your Custom Design 🎨
            </button>
          </div>
        </div>
      </section>

      {/* Pizza Box Sizes Section */}
      <section className="py-12 bg-white" data-animate>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">
              All Pizza Box Sizes Available
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From personal 7" pizzas to party-size 20" - we have the perfect box size for every pizza and every occasion.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {sizes.map((size, index) => (
              <div
                key={index}
                className={`relative bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 ${
                  size.popular ? 'border-red-300 bg-gradient-to-br from-red-50 to-orange-50' : 'border-orange-200'
                } ${isVisible.sizes ? 'animate-fadeInUp' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {size.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    POPULAR
                  </div>
                )}
                <div className="text-3xl font-black text-red-600 mb-2">{size.size}</div>
                <div className="text-sm font-semibold text-gray-700">{size.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-12 bg-gradient-to-br from-red-50 to-orange-50" data-animate>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">
              Perfect for Every Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our custom pizza boxes serve food businesses across Ireland, from Dublin city center to rural Cork.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 ${
                  isVisible.applications ? 'animate-fadeInUp' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{app.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{app.title}</h3>
                <p className="text-gray-600 leading-relaxed">{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-white" data-animate>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">
              Technical Specifications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional-grade pizza boxes built to keep food hot, fresh, and your brand looking amazing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-6 border border-red-100">
                <h3 className="font-bold text-lg text-gray-800 mb-4">Material & Construction</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Food-safe corrugated cardboard</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Grease-resistant coating</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Heat-retention design</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Stackable for easy storage</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-6 border border-orange-100">
                <h3 className="font-bold text-lg text-gray-800 mb-4">Printing & Design</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Full-color CMYK printing</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> High-resolution graphics</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Custom logo placement</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Food-safe inks</li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-red-100 to-orange-100 rounded-3xl p-8 text-center">
                <div className="text-6xl mb-4">📦</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Premium Quality Guaranteed</h3>
                <p className="text-gray-600 mb-6">Every pizza box is manufactured to the highest standards in Ireland, ensuring your food stays hot and your brand looks professional.</p>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white rounded-xl p-4">
                    <div className="text-2xl font-bold text-red-600">500</div>
                    <div className="text-sm text-gray-600">Minimum Order</div>
                  </div>
                  <div className="bg-white rounded-xl p-4">
                    <div className="text-2xl font-bold text-red-600">5-7</div>
                    <div className="text-sm text-gray-600">Days Production</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-red-900 text-white" data-animate>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Competitive Ireland Pricing
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Best prices for custom pizza boxes in Ireland. Volume discounts available for restaurants and takeaways.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4">Starter Package</h3>
              <div className="text-4xl font-black text-yellow-400 mb-2">€0.65</div>
              <div className="text-sm opacity-80 mb-6">per box (500-1,000 boxes)</div>
              <ul className="space-y-2 text-sm opacity-90">
                <li>✓ Single color printing</li>
                <li>✓ Standard sizes</li>
                <li>✓ 7-day delivery</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl p-8 text-center transform scale-105 shadow-2xl">
              <div className="bg-yellow-400 text-red-800 text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">
                MOST POPULAR
              </div>
              <h3 className="text-xl font-bold mb-4">Professional Package</h3>
              <div className="text-4xl font-black text-yellow-200 mb-2">€0.45</div>
              <div className="text-sm opacity-90 mb-6">per box (1,000-5,000 boxes)</div>
              <ul className="space-y-2 text-sm opacity-95">
                <li>✓ Full-color printing</li>
                <li>✓ All sizes available</li>
                <li>✓ 5-day delivery</li>
                <li>✓ Free design service</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4">Enterprise Package</h3>
              <div className="text-4xl font-black text-yellow-400 mb-2">€0.35</div>
              <div className="text-sm opacity-80 mb-6">per box (5,000+ boxes)</div>
              <ul className="space-y-2 text-sm opacity-90">
                <li>✓ Premium printing</li>
                <li>✓ Custom sizes</li>
                <li>✓ 3-day rush delivery</li>
                <li>✓ Dedicated account manager</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => setQuoteModalOpen(true)}
              className="bg-yellow-400 text-red-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Get Volume Pricing 💰
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-500 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Ready to Boost Your Brand?
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-95">
            Join hundreds of Irish restaurants using our custom pizza boxes to increase brand recognition and customer loyalty.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button
              onClick={() => setQuoteModalOpen(true)}
              className="bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-100 transform hover:scale-105 transition-all duration-300 shadow-2xl min-w-[250px]"
            >
              Get Custom Quote Now 🚀
            </button>
            <a
              href="tel:+353894400155"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-red-600 transition-all duration-300 min-w-[250px]"
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
        <PizzaBoxQuoteForm
          isOpen={quoteModalOpen}
          onClose={() => setQuoteModalOpen(false)}
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
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </Layout>
  );
};

export default CustomPizzaBoxesIreland;