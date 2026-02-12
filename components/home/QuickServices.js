import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const services = [
  {
    title: 'Custom Design Service',
    description: 'Our professional designers create bespoke packaging and print designs that make your brand stand out.',
    image: '/images/ifa/heroh/pizza.png',
    href: '/services',
    features: ['Free consultations', 'Unlimited revisions', 'Brand guidelines'],
  },
  {
    title: 'Weekly Delivery',
    description: 'Never run out of stock. We set up a recurring delivery schedule tailored to your business needs.',
    image: '/images/ifa/heroh/bag.png',
    href: '/contact',
    features: ['Scheduled deliveries', 'Flexible quantities', 'Priority support'],
  },
  {
    title: 'Same-Day Dispatch',
    description: 'Urgent orders? Selected products are available for same-day dispatch on orders placed before 12pm.',
    image: '/images/ifa/heroh/leaflet.png',
    href: '/products',
    features: ['Order before 12pm', 'Selected products', 'Dublin & nationwide'],
  },
];

const QuickServices = () => {
  return (
    <section className="py-8 sm:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
            Why Choose PrintNPack?
          </h2>
          <p className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-500">
            More than just printing — a complete packaging partner
          </p>
        </div>

        {/* Mobile: compact cards */}
        <div className="flex flex-col gap-3 sm:hidden">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group flex items-start gap-3 bg-gray-50 rounded-xl p-4 hover:bg-blue-50 transition-colors border border-gray-100"
            >
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-contain"
                  sizes="48px"
                  unoptimized={process.env.NODE_ENV === 'production'}
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">{service.description}</p>
                <div className="flex flex-wrap gap-x-3 gap-y-0.5 mt-2">
                  {service.features.map((feature) => (
                    <span key={feature} className="flex items-center gap-1 text-[10px] text-gray-400">
                      <svg className="w-3 h-3 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Desktop: 3-col cards */}
        <div className="hidden sm:grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group block bg-gray-50 rounded-2xl p-6 hover:bg-blue-50 hover:shadow-md transition-all duration-200 border border-gray-100 hover:border-blue-200"
            >
              <div className="relative w-16 h-16 mb-4">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-contain"
                  sizes="64px"
                  unoptimized={process.env.NODE_ENV === 'production'}
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                {service.description}
              </p>
              <ul className="mt-4 space-y-1.5">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-gray-500">
                    <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickServices;
