import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';
import BagasseQuoteForm from '../components/BagasseQuoteForm';

const EcoBagasseBurgerBoxes = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleQuoteClick = () => {
    setQuoteModalOpen(true);
  };

  const productImages = [
    "/images/products/bagasse-burger-box/1.png",
    "/images/products/bagasse-burger-box/2.png", 
    "/images/products/bagasse-burger-box/3.png",
    "/images/products/bagasse-burger-box/4.png",
    "/images/products/bagasse-burger-box/5.png",
    "/images/products/bagasse-burger-box/6.png"
  ];

  const features = [
    {
      icon: "🌱",
      title: "100% Biodegradable",
      description: "Made from sugarcane fiber, completely compostable and eco-friendly"
    },
    {
      icon: "🔥",
      title: "Heat Resistant",
      description: "Microwave safe and withstands temperatures from -20°C to +120°C"
    },
    {
      icon: "💧",
      title: "Oil & Water Resistant",
      description: "Grease-proof design keeps food fresh and packaging intact"
    },
    {
      icon: "💪",
      title: "Sturdy Construction",
      description: "Strong enough for the largest gourmet burgers and sandwiches"
    },
    {
      icon: "❄️",
      title: "Freezer Safe",
      description: "Perfect for storage and preparation, freezer to microwave ready"
    },
    {
      icon: "📦",
      title: "Stackable Design",
      description: "Space-efficient storage and transport with secure stacking"
    }
  ];

  const specifications = [
    { label: "Material", value: "100% Sugarcane Fiber (Bagasse)" },
    { label: "Color", value: "Natural White" },
    { label: "Temperature Range", value: "-20°C to +120°C" },
    { label: "Size Options", value: "Standard & Gourmet Burger Sizes" },
    { label: "Minimum Order", value: "500 units" },
    { label: "Lead Time", value: "7-10 business days" },
    { label: "Customization", value: "Custom printing available" },
    { label: "Certifications", value: "FDA Food Safe, Compostable" }
  ];

  const applications = [
    "Fast Food Restaurants",
    "Food Trucks & Mobile Vendors", 
    "Takeaway & Delivery Services",
    "Cafeterias & Canteens",
    "Catering Companies",
    "Event Food Services",
    "Hospital & School Food Services",
    "Corporate Dining"
  ];

  return (
    <Layout>
      <Head>
        <title>Eco-Friendly Bagasse Burger Boxes Ireland | Sustainable Food Packaging | Print n Pack</title>
        <meta name="description" content="Premium biodegradable bagasse burger boxes made from sugarcane fiber. Microwave safe, oil resistant, 100% compostable. Perfect for eco-conscious food businesses in Ireland." />
        <meta name="keywords" content="bagasse burger boxes Ireland, eco-friendly food packaging, biodegradable burger boxes, sugarcane fiber packaging, compostable food containers, sustainable packaging Dublin, green food packaging, eco burger boxes" />
        <meta property="og:title" content="Eco-Friendly Bagasse Burger Boxes | Sustainable Food Packaging Ireland" />
        <meta property="og:description" content="Premium biodegradable bagasse burger boxes. 100% compostable, microwave safe, oil resistant. Perfect for eco-conscious restaurants and food services." />
        <meta property="og:type" content="product" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="geo.region" content="IE" />
        <meta name="geo.placename" content="Ireland" />
        <link rel="canonical" href="https://printnpack.ie/eco-bagasse-burger-boxes" />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-emerald-700 to-teal-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0">
          <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="eco-pattern" width="80" height="80" patternUnits="userSpaceOnUse">
                <circle cx="40" cy="40" r="3" fill="currentColor" fillOpacity="0.1" />
                <path d="M20 20 Q40 10 60 20 Q50 40 60 60 Q40 50 20 60 Q30 40 20 20" fill="currentColor" fillOpacity="0.05" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#eco-pattern)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                  <span className="text-sm font-medium">🌱 100% Eco-Friendly</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Sustainable
                  <span className="block bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">
                    Bagasse Burger Boxes
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
                  Premium biodegradable burger boxes made from sugarcane fiber. The perfect eco-friendly packaging solution for environmentally conscious food businesses.
                </p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <span className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full font-medium">
                    ✓ 100% Biodegradable
                  </span>
                  <span className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full font-medium">
                    ✓ Microwave Safe
                  </span>
                  <span className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full font-medium">
                    ✓ Oil Resistant
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={handleQuoteClick}
                    className="bg-gradient-to-r from-yellow-500 to-green-500 hover:from-yellow-600 hover:to-green-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-2xl transform hover:scale-105 transition-all duration-300"
                  >
                    Get Custom Quote
                  </button>
                  <a 
                    href="#specifications"
                    className="border-2 border-white text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-white hover:text-green-600 transition-colors text-center"
                  >
                    View Specifications
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8">
                  <div className="aspect-square relative overflow-hidden rounded-2xl">
                    <Image
                      src={productImages[selectedImageIndex]}
                      alt="Eco-friendly bagasse burger box"
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="grid grid-cols-6 gap-2 mt-4">
                    {productImages.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImageIndex(index)}
                        className={`aspect-square relative overflow-hidden rounded-lg border-2 transition-all ${
                          selectedImageIndex === index 
                            ? 'border-yellow-400 scale-105' 
                            : 'border-white/30 hover:border-white/60'
                        }`}
                      >
                        <Image
                          src={image}
                          alt={`Bagasse burger box view ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Why Choose Our Bagasse Burger Boxes?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our eco-friendly bagasse burger boxes offer superior performance while protecting the environment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors">
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

      {/* Specifications */}
      <section id="specifications" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Technical Specifications
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Detailed specifications for our premium bagasse burger boxes
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                {specifications.map((spec, index) => (
                  <div key={index} className="flex justify-between items-center py-4 border-b border-gray-200">
                    <span className="font-semibold text-gray-800">{spec.label}</span>
                    <span className="text-gray-600 text-right">{spec.value}</span>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Pricing Information</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Starting Price:</span>
                    <span className="text-2xl font-bold text-green-600">€0.32 per unit</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Minimum Order:</span>
                    <span className="font-semibold">500 units</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Volume Discounts:</span>
                    <span className="font-semibold">Available</span>
                  </div>
                </div>
                
                <button 
                  onClick={handleQuoteClick}
                  className="w-full mt-6 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  Get Volume Pricing
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Perfect for Every Food Business
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our bagasse burger boxes serve food businesses across Ireland with sustainable packaging solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {applications.map((application, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-800">{application}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Environmental Impact
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Make a positive impact on the environment with every meal served
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🌱</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Renewable Resource</h3>
                <p className="text-gray-600 leading-relaxed">
                  Made from sugarcane bagasse, a renewable agricultural by-product that would otherwise be waste.
                </p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">♻️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">100% Compostable</h3>
                <p className="text-gray-600 leading-relaxed">
                  Breaks down completely in commercial composting facilities within 60-90 days, leaving no harmful residue.
                </p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🌍</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Carbon Neutral</h3>
                <p className="text-gray-600 leading-relaxed">
                  Lower carbon footprint compared to traditional plastic or foam packaging, helping fight climate change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Delivery Service */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Weekly Delivery Service
              </h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Never run out of eco-friendly packaging with our reliable weekly delivery service
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Scheduled Deliveries</h3>
                <p className="text-gray-200 leading-relaxed">
                  Regular weekly deliveries ensure you never run out of packaging supplies when you need them most.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H9a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Inventory Management</h3>
                <p className="text-gray-200 leading-relaxed">
                  We monitor your usage patterns and optimize order quantities to maintain perfect stock levels.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Cost Savings</h3>
                <p className="text-gray-200 leading-relaxed">
                  Volume discounts and reduced storage costs help you save money while maintaining sustainability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 via-green-500 to-emerald-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Go Green?
            </h2>
            <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
              Join thousands of Irish businesses making the switch to sustainable packaging. Get your custom quote today and start making a positive environmental impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleQuoteClick}
                className="bg-white text-green-600 font-bold py-4 px-8 rounded-full text-lg hover:bg-gray-100 transition-colors transform hover:scale-105 shadow-xl"
              >
                Get Custom Quote
              </button>
              <a 
                href="/contact" 
                className="border-2 border-white text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-white hover:text-green-600 transition-colors transform hover:scale-105"
              >
                Speak to Expert
              </a>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">€0.32</div>
                <div className="text-gray-200">Starting Price per Unit</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">7-10</div>
                <div className="text-gray-200">Business Days Delivery</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-gray-200">Biodegradable & Compostable</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Modal */}
      <BagasseQuoteForm 
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
      />
    </Layout>
  );
};

export default EcoBagasseBurgerBoxes;