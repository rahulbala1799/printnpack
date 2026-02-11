import React from 'react';
import Link from 'next/link';
import { FaFileAlt, FaStickyNote, FaBookOpen, FaUtensils } from 'react-icons/fa';

const DesignServices = () => {
  const services = [
    {
      icon: FaFileAlt,
      title: 'Posters',
      description: 'Professional poster designs for events, promotions, and branding.',
      detail: 'Custom layouts & artwork',
      link: '/services/posters'
    },
    {
      icon: FaStickyNote,
      title: 'Vinyls',
      description: 'Custom vinyl graphics and decals for any surface.',
      detail: 'Vector artwork & cutting files',
      link: '/services/vinyls'
    },
    {
      icon: FaBookOpen,
      title: 'Leaflets',
      description: 'Eye-catching leaflet designs that engage your audience.',
      detail: 'Professional layout & typography',
      link: '/services/leaflets'
    },
    {
      icon: FaUtensils,
      title: 'Menus',
      description: 'Appetizing menu designs that showcase your offerings.',
      detail: 'Photography & styling available',
      link: '/services/menus'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
            Design &amp; Print Services
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Professional design and printing at affordable prices. From concept to final product, we handle everything in-house.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.link}
              className="bg-white rounded-lg border border-slate-200 p-5 text-center hover:shadow-md hover:border-slate-300 transition-all duration-200 group"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-slate-50 rounded-lg flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                <service.icon className="text-xl text-slate-600 group-hover:text-blue-600 transition-colors" />
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-slate-900 mb-1.5">{service.title}</h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-2">{service.description}</p>
              <p className="text-xs text-blue-600 font-medium">{service.detail}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignServices;
