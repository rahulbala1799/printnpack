import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const CTA = () => {
  return (
    <section className="py-16 bg-blue-900 text-white relative overflow-hidden">
      {/* Simple background pattern instead of images */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-grid-pattern opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-blue-950"></div>
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
          
          {/* Right content card instead of images */}
          <div className="md:w-1/2 md:pl-8">
            <div className="relative bg-blue-800 rounded-xl p-6 shadow-2xl">
              <div className="bg-blue-700/50 rounded-lg p-5">
                <div className="bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-3">
                  Premium Quality
                </div>
                <h3 className="text-white text-xl font-bold mb-4">Award-Winning Packaging Solutions</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start text-white">
                    <svg className="h-5 w-5 text-blue-300 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Eco-friendly materials</span>
                  </li>
                  <li className="flex items-start text-white">
                    <svg className="h-5 w-5 text-blue-300 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Custom branding solutions</span>
                  </li>
                  <li className="flex items-start text-white">
                    <svg className="h-5 w-5 text-blue-300 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Fast turnaround times</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA; 