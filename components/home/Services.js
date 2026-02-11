"use client"
import React from 'react';
import { FaBox, FaPrint, FaLeaf, FaShippingFast, FaPencilRuler } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const Services = () => {
  const services = [
    {
      icon: FaBox,
      title: "Packaging Solutions",
      description: "Custom packaging tailored to your product specifications and brand requirements.",
      imageSrc: "/images/ifa/heroh/pizza.png"
    },
    {
      icon: FaPrint,
      title: "Custom Printing",
      description: "High-quality printing to make your packaging stand out with your brand identity.",
      imageSrc: "/images/ifa/heroh/bag.png"
    },
    {
      icon: FaLeaf,
      title: "Eco-Friendly Options",
      description: "Sustainable packaging alternatives that reduce environmental impact.",
      imageSrc: "/images/ifa/heroh/burger.png"
    },
    {
      icon: FaShippingFast,
      title: "Bulk Orders",
      description: "Efficient handling of large volume orders with competitive pricing.",
      imageSrc: "/images/ifa/heroh/napkin.png"
    },
    {
      icon: FaPencilRuler,
      title: "Custom Design",
      description: "Expert design services to create packaging that fits your brand perfectly.",
      imageSrc: "/images/ifa/heroh/leaflet.png"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">Our Services</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Comprehensive printing and packaging services from concept to delivery.
          </p>
        </div>

        {/* Featured service */}
        <div className="bg-white rounded-lg border border-slate-200 overflow-hidden mb-10">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 bg-slate-900 p-8 md:p-10 flex flex-col justify-center">
              <span className="inline-block text-xs font-medium text-blue-400 uppercase tracking-wide mb-3">Featured Service</span>
              <h3 className="text-2xl font-bold text-white mb-3">End-to-End Packaging</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                From material selection and structural design to printing, finishing, and logistics. We handle every aspect of your packaging needs.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {['Eco-Friendly Materials', 'Custom Branding', 'Expert Design', 'Fast Production'].map((item, i) => (
                  <div key={i} className="flex items-center text-sm text-slate-300">
                    <svg className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
              <Link 
                href="/services" 
                className="inline-flex items-center bg-blue-600 text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors self-start"
              >
                Learn More
              </Link>
            </div>
            <div className="md:w-1/2 bg-slate-100 flex items-center justify-center p-8 min-h-[250px]">
              <div className="relative w-48 h-48">
                <Image
                  src="/images/ifa/heroh/pizza.png"
                  alt="Packaging Solutions"
                  fill
                  className="object-contain"
                  unoptimized={process.env.NODE_ENV === 'production'}
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg border border-slate-200 p-6 hover:shadow-md hover:border-slate-300 transition-all duration-200">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="text-lg text-blue-600" />
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">{service.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">{service.description}</p>
              <Link 
                href="/services"
                className="text-sm font-medium text-blue-600 hover:text-blue-700 inline-flex items-center"
              >
                Learn more
                <svg className="w-3.5 h-3.5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
