import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';
import ClothingQuoteForm from '../components/ClothingQuoteForm';

const CustomClothingIreland = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  // Hero images rotation
  const heroImages = [
    '/images/apparel/1.png',
    '/images/apparel/6.png',
    '/images/apparel/12.png',
    '/images/apparel/2.png',
    '/images/apparel/7.png'
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

  const clothingProducts = [
    {
      name: 'T-Shirts',
      slug: 't-shirts',
      description: 'Premium custom printed t-shirts perfect for corporate events, team building, promotional campaigns, and brand awareness. High-quality cotton with vibrant, long-lasting prints.',
      features: ['100% Cotton Options', 'Screen & Digital Printing', 'All Sizes Available', 'Fast 3-5 Day Turnaround'],
      startingPrice: '€8.50',
      images: [
        '/images/apparel/1.png',
        '/images/apparel/2.png',
        '/images/apparel/3.png',
        '/images/apparel/4.png',
        '/images/apparel/5.png'
      ]
    },
    {
      name: 'Polo T-Shirts',
      slug: 'polo-shirts',
      description: 'Professional polo shirts with custom embroidery or printing. Perfect for corporate uniforms, hospitality staff, and professional team wear across Ireland.',
      features: ['Embroidery & Printing', 'Corporate Quality', 'Moisture-Wicking Fabric', 'Professional Appearance'],
      startingPrice: '€12.99',
      images: [
        '/images/apparel/6.png',
        '/images/apparel/7.png',
        '/images/apparel/8.png',
        '/images/apparel/9.png',
        '/images/apparel/10.png',
        '/images/apparel/11.png'
      ]
    },
    {
      name: 'Hoodies',
      slug: 'hoodies',
      description: 'Comfortable custom hoodies with your logo or design. Ideal for casual corporate wear, promotional merchandise, and team events. Premium materials for Irish weather.',
      features: ['Heavy-Weight Cotton', 'Custom Printing', 'Pullover & Zip Options', 'Weather Resistant'],
      startingPrice: '€18.50',
      images: [
        '/images/apparel/12.png',
        '/images/apparel/13.png',
        '/images/apparel/14.png',
        '/images/apparel/15.png',
        '/images/apparel/16.png'
      ]
    },
    {
      name: 'Hi-Viz Jackets',
      slug: 'hi-viz-jackets',
      description: 'High-visibility safety jackets with custom printing. Essential for construction, security, event staff, and outdoor work. Compliant with Irish safety standards.',
      features: ['EN ISO 20471 Compliant', 'Reflective Strips', 'Custom Company Logos', 'Durable Construction'],
      startingPrice: '€15.99',
      images: [] // No images available yet
    },
    {
      name: 'Sweatshirts',
      slug: 'sweatshirts',
      description: 'Cozy custom sweatshirts perfect for team wear, corporate events, and promotional merchandise. Premium quality materials designed for Irish climate.',
      features: ['Fleece-Lined Interior', 'Custom Embroidery', 'Crew & V-Neck Options', 'Bulk Discounts Available'],
      startingPrice: '€16.50',
      images: [] // No images available yet
    }
  ];

  const features = [
    {
      icon: "👕",
      title: "Premium Irish Clothing Printing",
      description: "High-quality custom clothing printing and embroidery services across Dublin, Cork, Galway, and all of Ireland."
    },
    {
      icon: "🎨",
      title: "Professional Design Service",
      description: "Our expert design team creates stunning artwork for your custom clothing at no extra charge."
    },
    {
      icon: "⚡",
      title: "Fast Ireland Delivery",
      description: "Quick 3-5 day turnaround with reliable delivery across all Irish counties."
    },
    {
      icon: "🏢",
      title: "Corporate & Business Solutions",
      description: "Specialized services for Irish businesses, from startups to large corporations."
    },
    {
      icon: "💰",
      title: "Competitive Irish Pricing",
      description: "Best prices in Ireland with volume discounts for bulk orders and corporate accounts."
    },
    {
      icon: "🌟",
      title: "Quality Guaranteed",
      description: "Premium materials and printing techniques with satisfaction guarantee on every order."
    }
  ];

  const applications = [
    {
      title: "Corporate Uniforms",
      description: "Professional branded clothing for Irish businesses and organizations",
      icon: "🏢"
    },
    {
      title: "Event Merchandise",
      description: "Custom clothing for festivals, conferences, and corporate events across Ireland",
      icon: "🎉"
    },
    {
      title: "Sports Teams",
      description: "Team jerseys, training wear, and supporter merchandise",
      icon: "⚽"
    },
    {
      title: "Promotional Clothing",
      description: "Branded apparel for marketing campaigns and brand awareness",
      icon: "📢"
    },
    {
      title: "Safety Workwear",
      description: "Hi-viz and safety clothing for construction and industrial work",
      icon: "🦺"
    },
    {
      title: "Hospitality Uniforms",
      description: "Professional clothing for restaurants, hotels, and service industries",
      icon: "🍽️"
    }
  ];

  const handleGetQuote = (productName) => {
    setSelectedProduct(productName);
    setQuoteModalOpen(true);
  };

  return (
    <Layout>
      <Head>
        <title>Custom Clothing Ireland | Printed T-Shirts, Hoodies, Uniforms | Print n Pack</title>
        <meta name="description" content="Premium custom clothing printing in Ireland. T-shirts, hoodies, polo shirts, hi-viz jackets & corporate uniforms. Fast delivery across Dublin, Cork, Galway. Free design service included!" />
        <meta name="keywords" content="custom clothing Ireland, printed t-shirts Dublin, corporate uniforms Ireland, custom hoodies Cork, promotional clothing Galway, embroidered polo shirts, hi-viz jackets Ireland, workwear printing, team clothing Ireland, branded apparel" />
        <meta property="og:title" content="Custom Clothing Ireland | Professional Printed Apparel & Uniforms" />
        <meta property="og:description" content="High-quality custom clothing printing across Ireland. Corporate uniforms, promotional t-shirts, hoodies, and workwear. Free design service, fast delivery." />
        <meta property="og:image" content="https://www.printnpack.ie/images/apparel/1.png" />
        <meta property="og:url" content="https://www.printnpack.ie/clothing" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Custom Clothing Ireland | Print n Pack" />
        <meta name="twitter:description" content="Premium custom clothing printing and embroidery services across Ireland. Corporate uniforms, promotional apparel, and team wear." />
        <meta name="twitter:image" content="https://www.printnpack.ie/images/apparel/1.png" />
        <link rel="canonical" href="https://www.printnpack.ie/clothing" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Print n Pack Ireland" />
        <meta name="geo.region" content="IE" />
        <meta name="geo.placename" content="Ireland" />
        <meta name="language" content="en-IE" />
      </Head>

      {/* Hero Section with Animated Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">
        {/* Animated Background Images */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-20' : 'opacity-0'
              }`}
            >
              <Image
                src={image}
                alt="Custom Clothing"
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        {/* Floating Clothing Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
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
              {['👕', '👔', '🧥', '👕', '🦺', '👕'][i]}
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
              Custom Clothing
            </span>
            <span className="block text-2xl md:text-4xl font-bold mt-2">
              That Builds Your Brand
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed font-light">
            Premium printed clothing and corporate uniforms across Ireland. From t-shirts to hi-viz jackets, we create professional apparel that represents your brand.
            <span className="block mt-2 font-semibold">Free design service included 🎨</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button
              onClick={() => setQuoteModalOpen(true)}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-100 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-yellow-200/50 min-w-[200px]"
            >
              Get Custom Quote 👕
            </button>
            <a
              href="#products"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 min-w-[200px]"
            >
              View Products 📸
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl font-black text-yellow-200">€8.50</div>
              <div className="text-sm font-semibold">Starting Price</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl font-black text-yellow-200">3-5</div>
              <div className="text-sm font-semibold">Days Delivery</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl font-black text-yellow-200">500+</div>
              <div className="text-sm font-semibold">Happy Customers</div>
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
              Why Choose Our Clothing Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ireland's leading custom clothing provider, trusted by businesses across Dublin, Cork, Galway, and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100 ${
                  isVisible.features ? 'animate-fadeInUp' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
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

      {/* Products Section */}
      <section id="products" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" data-animate>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">
              Our Premium Clothing Range
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From corporate uniforms to promotional merchandise, we offer Ireland's most comprehensive custom clothing solutions.
            </p>
          </div>

          <div className="space-y-12">
            {clothingProducts.map((product, index) => (
              <div
                key={index}
                className={`bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 ${
                  isVisible.products ? 'animate-fadeInUp' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                  {/* Product Info */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl font-black text-gray-800 mb-4">{product.name}</h3>
                      <p className="text-gray-600 text-lg leading-relaxed mb-6">{product.description}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-gray-700">
                          <span className="text-green-500 mr-2">✓</span>
                          <span className="font-medium text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                      <div>
                        <div className="text-3xl font-black text-blue-600">{product.startingPrice}</div>
                        <div className="text-sm text-gray-500">Starting price per item</div>
                      </div>
                      <button
                        onClick={() => handleGetQuote(product.name)}
                        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-xl"
                      >
                        Get Quote 📝
                      </button>
                    </div>
                  </div>

                  {/* Product Images */}
                  <div className="space-y-4">
                    {product.images.length > 0 ? (
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {product.images.slice(0, 6).map((image, imgIndex) => (
                          <div key={imgIndex} className="aspect-square relative rounded-xl overflow-hidden group">
                            <Image
                              src={image}
                              alt={`${product.name} ${imgIndex + 1}`}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="absolute bottom-2 left-2 text-white text-xs font-semibold">
                                {product.name}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl p-12 text-center">
                        <div className="text-6xl mb-4">👕</div>
                        <p className="text-gray-500 font-medium">Premium {product.name} Available</p>
                        <p className="text-gray-400 text-sm mt-2">Contact us for samples and catalog</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-white" data-animate>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">
              Perfect for Every Irish Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our custom clothing serves businesses across Ireland, from Dublin startups to Cork corporations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100 ${
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

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white" data-animate>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Competitive Ireland Pricing
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Best prices for custom clothing in Ireland. Volume discounts available for corporate and bulk orders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4">Starter Package</h3>
              <div className="text-4xl font-black text-yellow-400 mb-2">€8.50</div>
              <div className="text-sm opacity-80 mb-6">per item (25-100 items)</div>
              <ul className="space-y-2 text-sm opacity-90">
                <li>✓ Basic custom printing</li>
                <li>✓ Standard materials</li>
                <li>✓ 7-day delivery</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl p-8 text-center transform scale-105 shadow-2xl">
              <div className="bg-yellow-400 text-blue-800 text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">
                MOST POPULAR
              </div>
              <h3 className="text-xl font-bold mb-4">Professional Package</h3>
              <div className="text-4xl font-black text-yellow-200 mb-2">€6.99</div>
              <div className="text-sm opacity-90 mb-6">per item (100-500 items)</div>
              <ul className="space-y-2 text-sm opacity-95">
                <li>✓ Premium printing & embroidery</li>
                <li>✓ High-quality materials</li>
                <li>✓ 5-day delivery</li>
                <li>✓ Free design service</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4">Enterprise Package</h3>
              <div className="text-4xl font-black text-yellow-400 mb-2">€5.50</div>
              <div className="text-sm opacity-80 mb-6">per item (500+ items)</div>
              <ul className="space-y-2 text-sm opacity-90">
                <li>✓ Premium printing & embroidery</li>
                <li>✓ Luxury materials</li>
                <li>✓ 3-day rush delivery</li>
                <li>✓ Dedicated account manager</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => setQuoteModalOpen(true)}
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
            Ready to Build Your Brand?
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-95">
            Join hundreds of Irish businesses using our custom clothing to increase brand recognition and team unity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button
              onClick={() => setQuoteModalOpen(true)}
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
        <ClothingQuoteForm
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

export default CustomClothingIreland;