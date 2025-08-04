import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import ClothingQuoteForm from '../components/ClothingQuoteForm';

const ClothingPage = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');

  const handleQuoteClick = (productTitle) => {
    setSelectedProduct(productTitle);
    setQuoteModalOpen(true);
  };

  const clothingProducts = [
    {
      title: "T-Shirts",
      description: "High-quality custom printed t-shirts with your design. Perfect for events, promotions, and team wear.",
      images: [
        "/images/apparel/TSHIRT MOCK UP 1.jpg",
        "/images/apparel/TSHIRT MOCK UP 2.jpg",
        "/images/apparel/TSHIRT MOCK UP 3.jpg",
        "/images/apparel/TSHIRT MOCK UP 4.jpg",
        "/images/apparel/TSHIRT MOCK UP 5.jpg"
      ]
    },
    {
      title: "Polo T-Shirts",
      description: "Professional polo shirts with custom embroidery or printing. Ideal for corporate wear and uniforms.",
      images: [
        "/images/apparel/POLO SHIRT MOCK UP 1.jpg",
        "/images/apparel/POLO SHIRT MOCK UP 2.jpg",
        "/images/apparel/POLO SHIRT MOCK UP 3.jpg",
        "/images/apparel/POLO SHIRT MOCK UP 4.jpg",
        "/images/apparel/POLO SHIRT MOCK UP 5.jpg",
        "/images/apparel/POLO SHIRT MOCK UP 6.jpg"
      ]
    },
    {
      title: "Hoodies",
      description: "Comfortable custom hoodies with your logo or design. Perfect for casual wear and promotional items.",
      images: [
        "/images/apparel/HOODIE MOCK UP 1.jpg",
        "/images/apparel/HOODIE MOCK UP 2.jpg",
        "/images/apparel/HOODIE MOCK UP 3.jpg",
        "/images/apparel/HOODIE MOCK UP 4.jpg",
        "/images/apparel/HOODIE MOCK UP 5.jpg"
      ]
    },
    {
      title: "Hi-Viz Jackets",
      description: "High-visibility safety jackets with custom printing. Essential for construction, security, and outdoor work.",
      images: [] // Add images when available
    },
    {
      title: "Sweat Shirts",
      description: "Cozy custom sweatshirts perfect for team wear, events, and promotional merchandise.",
      images: [] // Add images when available
    }
  ];

  return (
    <Layout>
      <Head>
        <title>Custom Clothing & Apparel | Print n Pack</title>
        <meta name="description" content="Custom printed clothing including t-shirts, polo shirts, hoodies, hi-viz jackets, and sweatshirts. Quick turnaround with design included." />
        <meta name="keywords" content="custom clothing, printed t-shirts, polo shirts, hoodies, hi-viz jackets, sweatshirts, corporate wear, promotional clothing" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Custom Clothing & Apparel
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Professional custom printed clothing with quick turnaround times and design included
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="bg-white/20 px-4 py-2 rounded-full">✓ Design Included</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">✓ Quick Turnaround</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">✓ High Quality</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Clothing Range
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From corporate wear to promotional items, we offer a complete range of custom clothing solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {clothingProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{product.title}</h3>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  
                  {product.images.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                      {product.images.map((image, imgIndex) => (
                        <div key={imgIndex} className="aspect-square overflow-hidden rounded-lg">
                          <img 
                            src={image} 
                            alt={`${product.title} ${imgIndex + 1}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="bg-gray-100 rounded-lg p-8 mb-6 text-center">
                      <p className="text-gray-500">Product images coming soon</p>
                    </div>
                  )}

                  <button 
                    onClick={() => handleQuoteClick(product.title)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                  >
                    Get Quote for {product.title}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose Our Clothing Services?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Quick Turnaround</h3>
              <p className="text-gray-600">Fast production times to meet your deadlines</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Design Included</h3>
              <p className="text-gray-600">Professional design services included in every order</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Premium Quality</h3>
              <p className="text-gray-600">High-quality materials and printing techniques</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Custom Solutions</h3>
              <p className="text-gray-600">Tailored to your specific needs and requirements</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a custom quote on your clothing needs. We'll help bring your vision to life!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/quote" 
              className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get Custom Quote
            </a>
            <a 
              href="/contact" 
              className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Quote Modal */}
      <ClothingQuoteForm 
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        productType={selectedProduct}
      />
    </Layout>
  );
};

export default ClothingPage;