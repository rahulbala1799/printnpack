import React from 'react';
import Link from 'next/link';
import { FaBox, FaShippingFast, FaLeaf, FaRegCalendarCheck } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50 overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full -mr-32 -mt-32 opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100 rounded-full -ml-32 -mb-32 opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About PrintNPack</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
        </div>
        
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-lg text-center text-gray-700 mb-6">
            PrintNPack is Ireland's premier packaging specialist, delivering high-quality <strong>printed pizza boxes</strong>, <strong>custom paper bags</strong>, and <strong>burger boxes</strong> with industry-leading turnaround times. What sets us apart is our unique <strong>weekly printed packaging delivery service</strong> – a first in Ireland.
          </p>
          
          <p className="text-lg text-center text-gray-700 mb-8">
            Our manufacturing facility combines cutting-edge digital printing technology with sustainable materials, allowing us to offer <strong>low minimum order quantities</strong> and some of the <strong>most affordable custom packaging in Ireland</strong> without compromising on quality.
          </p>
          
          <div className="flex justify-center">
            <Link href="/about" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
              Learn More About Us
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 text-center">
            <div className="flex justify-center mb-4">
              <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600">
                <FaBox size={28} />
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">Low MOQ</h3>
            <p className="text-gray-600">Custom printed packaging accessible to businesses of all sizes with order minimums as low as 100 units.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 text-center">
            <div className="flex justify-center mb-4">
              <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600">
                <FaLeaf size={28} />
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">Eco-Friendly</h3>
            <p className="text-gray-600">Sustainable materials and production processes that reduce environmental impact without compromising quality.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 text-center">
            <div className="flex justify-center mb-4">
              <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 text-amber-600">
                <FaShippingFast size={28} />
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">Fast Turnaround</h3>
            <p className="text-gray-600">Industry-leading production times with standard 7-day delivery and express options available when you need it faster.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 text-center">
            <div className="flex justify-center mb-4">
              <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 text-purple-600">
                <FaRegCalendarCheck size={28} />
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">Weekly Deliveries</h3>
            <p className="text-gray-600">Our unique weekly printed packaging delivery service keeps your inventory manageable without ever running out.</p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block px-6 py-3 bg-blue-50 border border-blue-100 rounded-lg text-blue-800">
            <span className="font-bold">100% Irish Owned & Operated</span> • Proudly serving businesses across Ireland
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;