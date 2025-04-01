import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ServiceIcon from '../../components/ServiceIcon';

const DesignServices = () => {
  const [activeService, setActiveService] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowWidth, setWindowWidth] = useState(0);
  
  // Update window width on resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
    }
    
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);
  
  // Track mouse position for interactive elements
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);
  
  // Services data
  const services = [
    {
      id: 'posters',
      title: 'Posters',
      description: 'Eye-catching posters that demand attention and convey your message with impact.',
      image: '/images/ifa/heroh/wide.png',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
        </svg>
      ),
      color: 'from-purple-500 to-indigo-600',
      link: '/services/design/posters'
    },
    {
      id: 'vinyls',
      title: 'Vinyls',
      description: 'Premium vinyl stickers and graphics for branding that sticks with your customers.',
      image: '/images/ifa/heroh/9.png',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
      ),
      color: 'from-blue-500 to-cyan-600',
      link: '/services/design/vinyls'
    },
    {
      id: 'leaflets',
      title: 'Leaflets',
      description: 'Professional leaflets that put your information directly into customers\' hands.',
      image: '/images/ifa/heroh/leaflet.png',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
        </svg>
      ),
      color: 'from-teal-500 to-green-600',
      link: '/services/design/leaflets'
    },
    {
      id: 'menus',
      title: 'Menus',
      description: 'Appetizing menu designs that showcase your offerings and enhance the dining experience.',
      image: '/images/ifa/heroh/5.png',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
        </svg>
      ),
      color: 'from-amber-500 to-orange-600',
      link: '/services/design/menus'
    }
  ];
  
  // Calculate effects for active service
  const getSpotlightStyle = (serviceId) => {
    if (!isHovering || activeService !== serviceId || windowWidth < 768) return {};
    
    const x = mousePosition.x;
    const y = mousePosition.y;
    
    return {
      background: `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 60%)`,
    };
  };
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Creative Solutions</h2>
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">Professional Design Services</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We blend creativity with strategy to design materials that capture attention and communicate your message at affordable prices.
          </p>
          <p className="text-base text-gray-500 mt-4 max-w-2xl mx-auto">
            Our experienced design team uses industry-standard tools to create stunning visuals that represent your brand perfectly. From concept to final design, we handle everything in-house.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-24 h-24 mx-auto mb-4">
              <ServiceIcon type="posters" className="w-full h-full text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Posters</h3>
            <p className="text-gray-600">Professional poster designs for events, promotions, and branding</p>
            <p className="text-sm text-blue-600 mt-2">Custom layouts & artwork included</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-24 h-24 mx-auto mb-4">
              <ServiceIcon type="vinyls" className="w-full h-full text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Vinyls</h3>
            <p className="text-gray-600">Custom vinyl graphics and decals for any surface</p>
            <p className="text-sm text-blue-600 mt-2">Vector artwork & cutting files provided</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-24 h-24 mx-auto mb-4">
              <ServiceIcon type="leaflets" className="w-full h-full text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Leaflets</h3>
            <p className="text-gray-600">Eye-catching leaflet designs that engage your audience</p>
            <p className="text-sm text-blue-600 mt-2">Professional layout & typography</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-24 h-24 mx-auto mb-4">
              <ServiceIcon type="menus" className="w-full h-full text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Menus</h3>
            <p className="text-gray-600">Appetizing menu designs that showcase your offerings</p>
            <p className="text-sm text-blue-600 mt-2">Custom photography & styling available</p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            All designs are created using professional design software and follow industry best practices. We offer unlimited revisions to ensure you're completely satisfied with the final result.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DesignServices; 