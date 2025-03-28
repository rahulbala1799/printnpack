"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const HeroSection = () => {
  const slides = [
    {
      title: "Premium Pizza Boxes That Boost Sales",
      subtitle: "Locally sourced packaging that enhances your brand value & customer experience",
      cta: "Get Your Custom Quote Today",
      product: "Pizza Box",
      color: "from-red-600 to-red-900",
      benefits: ["Elevates your product presentation", "Boosts perceived value", "Enhances customer experience"],
      imageSrc: "Pizza Box Image" // Replace with actual image path in production
    },
    {
      title: "Paper Bags That Close More Sales",
      subtitle: "SAME-DAY PRINTING available - Irish-made bags that turn customers into loyal fans",
      cta: "Request Free Samples Now",
      product: "Paper Bag",
      color: "from-green-600 to-green-900",
      benefits: ["Increases repeat purchases", "Strengthens brand perception", "Eco-friendly marketing tool"],
      imageSrc: "Paper Bag Image" // Replace with actual image path in production
    },
    {
      title: "Sustainable Burger Boxes Customers Love",
      subtitle: "Stand out from competitors with premium eco-friendly packaging",
      cta: "Elevate Your Packaging Today",
      product: "Bagasse Box",
      color: "from-amber-500 to-amber-700",
      benefits: ["Improves customer perception", "Supports your green initiatives", "Creates Instagram-worthy presentations"],
      imageSrc: "Burger Box Image" // Replace with actual image path in production
    },
    {
      title: "Marketing Materials That Generate Leads",
      subtitle: "SAME-DAY PRINTING available - Convert prospects into customers with high-impact designs",
      cta: "Boost Your Marketing Now",
      product: "Leaflet",
      color: "from-blue-500 to-blue-800",
      benefits: ["Increases response rates", "Drives store traffic", "Boosts campaign ROI"],
      imageSrc: "Leaflet Image" // Replace with actual image path in production
    },
    {
      title: "Premium Napkins That Elevate Your Brand",
      subtitle: "SAME-DAY PRINTING available - Turn everyday items into powerful marketing tools",
      cta: "Enhance Your Brand Today",
      product: "Napkin",
      color: "from-purple-500 to-purple-800",
      benefits: ["Improves customer experience", "Reinforces brand identity", "Low cost, high impact marketing"],
      imageSrc: "Napkin Image" // Replace with actual image path in production
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [countdown, setCountdown] = useState(23 * 60 * 60 + 59 * 60 + 59); // 23h 59m 59s

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(countdown / 3600);
  const minutes = Math.floor((countdown % 3600) / 60);
  const seconds = countdown % 60;

  return (
    <div className="relative w-full overflow-hidden">
      {/* Urgent offer banner */}
      <div className="bg-red-600 text-white py-2 px-4 text-center font-bold text-sm animate-pulse">
        🔥 FLASH SALE: 15% OFF ALL ORDERS TODAY • ENDS IN: {hours}h {minutes}m {seconds}s • ORDER NOW 🔥
      </div>
      
      {/* Gradient background that changes with slides */}
      <div className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].color} opacity-90 transition-all duration-1000 ease-in-out`} />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center py-12 md:py-24">
          <div className="md:w-1/2 text-white z-10 space-y-6 mt-8 md:mt-0 text-center md:text-left w-full">
            <div className="animate-fade-in">
              {/* Social proof banner */}
              <div className="bg-black/40 backdrop-blur-sm rounded-lg py-2 px-4 inline-block mb-4">
                <div className="flex items-center space-x-1">
                  <span className="text-yellow-400">★★★★★</span>
                  <span className="text-white text-sm font-medium">Trusted by Indian and Global Businesses</span>
                </div>
              </div>
              
              {/* Company Name Banner */}
              <div className="bg-white/30 backdrop-blur-sm rounded-lg py-2 px-4 inline-block mb-4">
                <h2 className="text-xl md:text-2xl font-bold text-white">PrintNPack Limited</h2>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{slides[currentSlide].title}</h1>
              <p className="mt-4 text-xl">{slides[currentSlide].subtitle}</p>
              
              {/* Key benefits */}
              <ul className="mt-4 space-y-2">
                {slides[currentSlide].benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center justify-center md:justify-start">
                    <svg className="h-5 w-5 text-green-300 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              
              {/* Same-Day Banner - Only show for products that offer it */}
              {(currentSlide === 1 || currentSlide === 3 || currentSlide === 4) && (
                <div className="bg-white text-black font-bold py-2 px-4 rounded-lg mt-4 inline-block animate-pulse mx-auto md:mx-0">
                  <span className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    ORDER BY 10AM FOR SAME-DAY DISPATCH
                  </span>
                </div>
              )}
              
              <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link href="/quote" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black shadow-sm hover:bg-gray-900 transition transform hover:scale-105 duration-200">
                  {slides[currentSlide].cta}
                </Link>
                <a href="tel:+919843141313" className="inline-flex items-center justify-center px-5 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-gray-900 transition transform hover:scale-105 duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Get Expert Advice Now
                </a>
              </div>
              
              {/* Risk reversal message */}
              <p className="text-sm text-white/80 mt-2">
                <svg className="inline-block h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                100% Satisfaction Guarantee • No Risk • Free Quote
              </p>
            </div>
            
            {/* USP Pills */}
            <div className="flex flex-wrap gap-2 mt-8 animate-fade-in-delayed justify-center md:justify-start">
              <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">🇮🇳 Made in India</span>
              {(currentSlide === 1 || currentSlide === 3 || currentSlide === 4) ? (
                <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-bold">⚡ SAME-DAY PRINTING</span>
              ) : (
                <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">📦 3-Day Standard</span>
              )}
              <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">🌿 Locally Sourced</span>
              <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">💰 No Hidden Costs</span>
              <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">📉 Lowest MOQs</span>
            </div>
          </div>
          
          {/* Stylized product visualization */}
          <div className="md:w-1/2 z-10 flex items-center justify-center overflow-visible w-full">
            <div className="relative transform scale-110 md:scale-130">
              <div className="h-64 w-64 md:h-80 md:w-80 bg-white rounded-lg shadow-xl flex items-center justify-center">
                <div className="text-lg text-gray-500">{slides[currentSlide].imageSrc}</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Slide indicators */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 