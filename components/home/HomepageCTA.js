import React from 'react';
import Link from 'next/link';

const HomepageCTA = () => {
  return (
    <section className="py-10 sm:py-16 bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
          Ready to Elevate Your Brand?
        </h2>
        <p className="text-sm sm:text-lg text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
          Get custom packaging and print solutions tailored to your business.
          Request a free quote today.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Link
            href="/quote"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 bg-white text-blue-800 font-semibold rounded-xl hover:bg-blue-50 transition-colors shadow-lg text-sm sm:text-base"
          >
            Get a Free Quote
            <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
          <a
            href="tel:+353894400155"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors text-sm sm:text-base"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Us Now
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-6 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-blue-200">
          {['No minimum design fees', 'Free delivery across Ireland', '100% Irish owned'].map((text) => (
            <div key={text} className="flex items-center gap-1.5 sm:gap-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomepageCTA;
