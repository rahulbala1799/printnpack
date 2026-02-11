import React from 'react';
import Link from 'next/link';
import { FaArrowRight, FaCheck } from 'react-icons/fa';

const CTA = () => {
  return (
    <section className="py-16 md:py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to Order?
            </h2>
            <p className="text-slate-300 mb-8 max-w-lg leading-relaxed">
              Get custom printed packaging and marketing materials with fast turnaround and competitive pricing. Request a quote today.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-sm font-medium transition-colors"
              >
                Get a Free Quote
                <FaArrowRight className="ml-2 text-xs" />
              </Link>
              <Link 
                href="/products" 
                className="inline-flex items-center justify-center border border-white/20 text-white hover:bg-white/5 px-6 py-3 rounded-md text-sm font-medium transition-colors"
              >
                Browse Products
              </Link>
            </div>
          </div>
          
          {/* Right content */}
          <div className="lg:w-1/2">
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <span className="inline-block text-xs font-medium text-blue-400 uppercase tracking-wide mb-3">Why PrintNPack</span>
              <h3 className="text-lg font-semibold text-white mb-4">Quality Packaging, Delivered</h3>
              <ul className="space-y-3">
                {[
                  'Eco-friendly, sustainable materials',
                  'Full colour custom branding',
                  'Same-day dispatch available',
                  'Low minimum order quantities',
                  'Competitive B2B pricing'
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-sm text-slate-300">
                    <FaCheck className="text-blue-400 mr-3 flex-shrink-0 text-xs" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
