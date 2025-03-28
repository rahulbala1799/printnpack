import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Premium Packaging Solutions for Your Business
            </h1>
            <p className="text-xl mb-8">
              We provide high-quality packaging solutions that protect your products
              and enhance your brand. From custom designs to eco-friendly options,
              we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/products" className="bg-white text-blue-900 px-6 py-3 rounded-lg font-medium text-center hover:bg-blue-100 transition duration-300">
                Our Products
              </Link>
              <Link href="/contact" className="border-2 border-white px-6 py-3 rounded-lg font-medium text-center hover:bg-blue-800 transition duration-300">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white rounded-lg p-4 shadow-lg">
              {/* Replace with actual image in production */}
              <div className="h-64 w-full bg-gray-200 rounded flex items-center justify-center">
                <span className="text-gray-500">Packaging Image</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 