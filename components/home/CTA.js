import React from 'react';
import Link from 'next/link';

const CTA = () => {
  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Packaging?</h2>
        <p className="text-xl mb-10 max-w-3xl mx-auto">
          Contact our team today to discuss your packaging needs and get a customized quote for your business.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Link href="/contact" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-medium hover:bg-blue-100 transition duration-300">
            Get a Quote
          </Link>
          <Link href="/products" className="border-2 border-white px-8 py-3 rounded-lg font-medium hover:bg-blue-800 transition duration-300">
            Browse Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA; 