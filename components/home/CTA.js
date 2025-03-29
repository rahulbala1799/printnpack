import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const CTA = () => {
  return (
    <section className="py-16 bg-blue-900 text-white relative overflow-hidden">
      {/* Background product images with new photos */}
      <div className="absolute inset-0 z-0 opacity-10">
        {/* Right side decorative image */}
        <div className="absolute -right-20 -bottom-10 w-96 h-96">
          <Image 
            src="/images/ifa/heroh/8.png" 
            alt="Product Showcase" 
            width={400} 
            height={400}
            className="object-contain opacity-60"
          />
        </div>
        {/* Left side decorative image */}
        <div className="absolute -left-20 top-0 w-80 h-80">
          <Image 
            src="/images/ifa/heroh/9.png" 
            alt="Product Showcase" 
            width={350} 
            height={350}
            className="object-contain opacity-60"
          />
        </div>
        {/* Center decorative image */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center">
          <div className="w-64 h-64 md:w-96 md:h-96 relative">
            <Image 
              src="/images/ifa/heroh/logos/logo.png" 
              alt="PrintNPack Logo" 
              width={350} 
              height={350}
              className="object-contain opacity-20"
            />
          </div>
        </div>
      </div>
      
      {/* Additional decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-950 to-transparent"></div>
        <div className="absolute top-0 right-0 w-full h-32 bg-gradient-to-b from-blue-950 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left content */}
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Packaging Experience?</h2>
            <p className="text-xl mb-10 max-w-xl">
              Our premium packaging solutions are designed to elevate your brand and create a memorable experience for your customers.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
              <Link 
                href="/contact" 
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-medium hover:bg-blue-100 transition duration-300 shadow-glow hover:scale-105 transform"
              >
                Get a Custom Quote
              </Link>
              <Link 
                href="/products" 
                className="border-2 border-white px-8 py-4 rounded-lg font-medium hover:bg-blue-800 transition duration-300 hover:scale-105 transform"
              >
                Browse Products
              </Link>
            </div>
          </div>
          
          {/* Right image showcase */}
          <div className="md:w-1/2 md:pl-8">
            <div className="relative">
              {/* Main image */}
              <div className="rounded-xl overflow-hidden shadow-2xl transform hover:scale-102 transition-transform duration-500 relative">
                <Image 
                  src="/images/ifa/heroh/5 2.png" 
                  alt="Premium Packaging Solutions" 
                  width={600} 
                  height={400}
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <div className="bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-2">
                    Premium Quality
                  </div>
                  <h3 className="text-white text-xl font-bold">Award-Winning Packaging Solutions</h3>
                </div>
              </div>
              
              {/* Small floating images */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-lg overflow-hidden shadow-xl border-4 border-blue-800 hidden md:block">
                <Image 
                  src="/images/ifa/heroh/6 2.png" 
                  alt="Product Detail" 
                  width={100} 
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-6 -left-6 w-24 h-24 rounded-lg overflow-hidden shadow-xl border-4 border-blue-800 hidden md:block">
                <Image 
                  src="/images/ifa/heroh/7.png" 
                  alt="Product Detail" 
                  width={100} 
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA; 