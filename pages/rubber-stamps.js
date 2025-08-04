import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';

const RubberStampsPage = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedStampType, setSelectedStampType] = useState('');

  const handleQuoteClick = (stampType) => {
    setSelectedStampType(stampType);
    setQuoteModalOpen(true);
  };

  const stampTypes = [
    {
      title: "Custom Business Stamps",
      description: "Professional business rubber stamps for company logos, addresses, and official documentation. Perfect for invoices, letterheads, and corporate branding.",
      features: ["Company Logo Stamps", "Address Stamps", "Date & Time Stamps", "Invoice & Receipt Stamps"],
      seoKeywords: "business rubber stamps, company logo stamps, address stamps, professional stamps"
    },
    {
      title: "Traditional Hand Stamps",
      description: "Classic wooden handle rubber stamps requiring a separate ink pad. Ideal for occasional use and traditional stamping applications.",
      features: ["Wooden Handle", "Separate Ink Pad", "Traditional Design", "Cost Effective"],
      seoKeywords: "traditional rubber stamps, wooden handle stamps, classic stamps, hand stamps"
    },
    {
      title: "Signature Stamps",
      description: "Personalized signature rubber stamps for authorized document signing. Streamline your approval process with professional signature stamps.",
      features: ["Personal Signatures", "Authorization Stamps", "Document Approval", "Professional Use"],
      seoKeywords: "signature stamps, authorization stamps, approval stamps, document signing"
    }
  ];

  const stampImages = [
    "/images/rubber-stamps/Rubberstam_6.jpg",
    "/images/rubber-stamps/Rubberstam_7.jpg",
    "/images/rubber-stamps/Rubberstam_8.jpg",
    "/images/rubber-stamps/Rubberstam_9.jpg",
    "/images/rubber-stamps/RubberStamp_10.jpg",
    "/images/rubber-stamps/RubberStamp_11.jpg",
    "/images/rubber-stamps/RubberStamp_12.jpg",
    "/images/rubber-stamps/RubberStamp_13.jpg",
    "/images/rubber-stamps/RubberStamp_14.jpg",
    "/images/rubber-stamps/RubberStamp_15.jpg"
  ];

  return (
    <Layout>
      <Head>
        <title>Custom Rubber Stamps Ireland | Business & Personal Stamps | Print n Pack</title>
        <meta name="description" content="Professional custom rubber stamps in Ireland. Business stamps, traditional hand stamps, and signature stamps. Fast turnaround, high quality. Order online today!" />
        <meta name="keywords" content="rubber stamps Ireland, custom stamps, business stamps, traditional hand stamps, signature stamps, company logo stamps, address stamps, professional stamps, Dublin stamps" />
        <meta property="og:title" content="Custom Rubber Stamps Ireland | Professional Business Stamps" />
        <meta property="og:description" content="High-quality custom rubber stamps for business and personal use. Business stamps, traditional hand stamps, and signature stamps available. Fast delivery across Ireland." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="geo.region" content="IE" />
        <meta name="geo.placename" content="Ireland" />
        <link rel="canonical" href="https://printnpack.ie/rubber-stamps" />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0">
          <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="stamp-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="2" fill="currentColor" fillOpacity="0.1" />
                <circle cx="10" cy="10" r="1" fill="currentColor" fillOpacity="0.05" />
                <circle cx="50" cy="50" r="1" fill="currentColor" fillOpacity="0.05" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#stamp-pattern)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-medium">🇮🇪 Made in Ireland</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Professional
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Rubber Stamps
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Custom rubber stamps for business and personal use. From self-inking stamps to traditional wooden handles - we create professional stamps that make an impression.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-lg mb-8">
              <span className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full font-medium">
                ✓ Same Day Service Available
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full font-medium">
                ✓ Professional Quality
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full font-medium">
                ✓ Custom Designs
              </span>
            </div>

            <button 
              onClick={() => handleQuoteClick('Custom Rubber Stamp')}
              className="bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Get Custom Quote Now
            </button>
          </div>
        </div>
      </section>

      {/* Image Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Stamp Gallery
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse our collection of high-quality rubber stamps designed for various business and personal applications
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {stampImages.map((image, index) => (
              <div key={index} className="group relative aspect-square overflow-hidden rounded-xl shadow-lg bg-white">
                <Image
                  src={image}
                  alt={`Professional rubber stamp ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-semibold">Stamp #{index + 1}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stamp Types Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Choose Your Perfect Stamp
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From business stamps to personal signatures, we offer a complete range of professional rubber stamp solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stampTypes.map((stamp, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                    {stamp.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {stamp.description}
                  </p>
                  
                  <div className="space-y-2 mb-8">
                    {stamp.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <button 
                    onClick={() => handleQuoteClick(stamp.title)}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform group-hover:scale-105"
                  >
                    Get Quote for {stamp.title}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Why Choose Our Rubber Stamps?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're Ireland's trusted rubber stamp specialists with years of experience creating professional stamping solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Lightning Fast</h3>
              <p className="text-gray-600 leading-relaxed">Same day and next day service available for urgent orders. We understand your business can't wait.</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Premium Quality</h3>
              <p className="text-gray-600 leading-relaxed">Professional-grade materials and precision manufacturing ensure crisp, clear impressions every time.</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Custom Design</h3>
              <p className="text-gray-600 leading-relaxed">Fully customizable designs including logos, text, graphics, and special formatting to match your brand.</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Expert Support</h3>
              <p className="text-gray-600 leading-relaxed">Our design team helps you create the perfect stamp with professional advice and technical support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Perfect for Every Business
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our rubber stamps serve businesses across Ireland in various industries and applications
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Legal & Professional Services</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Solicitor signature stamps</li>
                  <li>• Court document stamps</li>
                  <li>• Notary public stamps</li>
                  <li>• Legal firm address stamps</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Healthcare & Medical</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Doctor signature stamps</li>
                  <li>• Prescription stamps</li>
                  <li>• Medical practice stamps</li>
                  <li>• Patient record stamps</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Education & Schools</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Teacher marking stamps</li>
                  <li>• School address stamps</li>
                  <li>• Student record stamps</li>
                  <li>• Library date stamps</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-orange-100 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Retail & Commerce</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Invoice & receipt stamps</li>
                  <li>• Return address stamps</li>
                  <li>• Quality control stamps</li>
                  <li>• Inventory stamps</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-rose-100 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Government & Public Sector</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Official document stamps</li>
                  <li>• Department stamps</li>
                  <li>• Authorization stamps</li>
                  <li>• Date received stamps</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-cyan-100 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Manufacturing & Industry</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Quality assurance stamps</li>
                  <li>• Inspection stamps</li>
                  <li>• Serial number stamps</li>
                  <li>• Date code stamps</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Create Your Custom Stamp?
            </h2>
            <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
              Get professional rubber stamps made to your exact specifications. Fast turnaround, competitive prices, and exceptional quality guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => handleQuoteClick('Custom Rubber Stamp')}
                className="bg-white text-blue-600 font-bold py-4 px-8 rounded-full text-lg hover:bg-gray-100 transition-colors transform hover:scale-105 shadow-xl"
              >
                Get Custom Quote
              </button>
              <a 
                href="/contact" 
                className="border-2 border-white text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-white hover:text-blue-600 transition-colors transform hover:scale-105"
              >
                Speak to Expert
              </a>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">24hr</div>
                <div className="text-gray-300">Express Service</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">1000+</div>
                <div className="text-gray-300">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">15+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Modal Placeholder - You can integrate with ClothingQuoteForm or create a specific RubberStampQuoteForm */}
      {quoteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={() => setQuoteModalOpen(false)}
          />
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
            <h3 className="text-xl font-bold mb-4">Get Your {selectedStampType} Quote</h3>
            <p className="text-gray-600 mb-4">
              Contact us for a personalized quote on your rubber stamp requirements.
            </p>
            <div className="flex gap-4">
              <a 
                href="/contact" 
                className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Contact Us
              </a>
              <button 
                onClick={() => setQuoteModalOpen(false)}
                className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default RubberStampsPage;