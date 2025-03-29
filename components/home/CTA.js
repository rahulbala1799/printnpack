import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const CTA = () => {
  return (
    <section className="py-16 bg-blue-900 text-white relative overflow-hidden">
      {/* Background product images */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute -right-20 -bottom-10 w-96 h-96">
          <Image 
            src="/images/hero/pizza-box.png" 
            alt="Pizza Box" 
            width={400} 
            height={400}
            className="object-contain opacity-50"
          />
        </div>
        <div className="absolute -left-20 top-0 w-80 h-80">
          <Image 
            src="/images/hero/paper-bag.png" 
            alt="Paper Bag" 
            width={350} 
            height={350}
            className="object-contain opacity-50"
          />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center">
          <div className="w-64 h-64 md:w-96 md:h-96 relative">
            <Image 
              src="/images/hero/burger-box.png" 
              alt="Burger Box" 
              width={350} 
              height={350}
              className="object-contain opacity-30"
            />
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Packaging?</h2>
        <p className="text-xl mb-10 max-w-3xl mx-auto">
          Contact our team today to discuss your packaging needs and get a customized quote for your business.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Link href="/contact" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-medium hover:bg-blue-100 transition duration-300 shadow-glow">
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