import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBox, FaShippingFast, FaLeaf, FaRegCalendarCheck } from 'react-icons/fa';

const AboutUs = () => {
  const features = [
    {
      icon: FaBox,
      title: "Low MOQ",
      description: "Custom printed packaging with minimums as low as 100 units.",
    },
    {
      icon: FaShippingFast,
      title: "Fast Turnaround",
      description: "7-day standard turnaround with express options available.",
    },
    {
      icon: FaRegCalendarCheck,
      title: "Weekly Deliveries",
      description: "Unique weekly delivery service so you never run out of packaging.",
    },
    {
      icon: FaLeaf,
      title: "Eco-Friendly",
      description: "Sustainable materials that reduce environmental impact.",
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-48 sm:h-56 rounded-lg overflow-hidden">
              <Image
                src="/images/products/bagasse-burger-box/1.png"
                alt="Eco-Friendly Packaging"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 sm:h-56 rounded-lg overflow-hidden">
              <Image
                src="/images/products/flat-handle-bags/1.png"
                alt="Premium Paper Bags"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              About PrintNPack
            </h2>
            <p className="text-slate-500 mb-6 leading-relaxed">
              Ireland&apos;s premier packaging specialist, delivering high-quality printed pizza boxes, paper bags, and burger boxes with industry-leading turnaround times and low minimum order quantities.
            </p>
            <p className="text-slate-500 mb-8 leading-relaxed">
              We serve restaurants, retailers, and businesses across Ireland with reliable, high-quality printing and packaging solutions. Our commitment to quality materials and customer service sets us apart.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/about"
                className="inline-flex items-center justify-center bg-slate-900 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-slate-800 transition-colors"
              >
                Learn More About Us
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center border border-slate-300 text-slate-700 px-6 py-3 rounded-md text-sm font-medium hover:bg-slate-50 transition-colors"
              >
                View Products
              </Link>
            </div>
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-slate-50 rounded-lg p-5 text-center">
              <div className="w-10 h-10 mx-auto bg-white rounded-lg flex items-center justify-center mb-3 shadow-sm">
                <feature.icon className="text-lg text-blue-600" />
              </div>
              <h3 className="text-sm font-semibold text-slate-900 mb-1.5">{feature.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-md px-5 py-2.5">
            <span className="text-sm font-medium text-slate-700">100% Irish Owned &amp; Operated</span>
            <span className="text-slate-300">|</span>
            <span className="text-sm text-slate-500">Serving businesses across Ireland</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
