import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

const HomepageHero = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Custom Packaging & Print',
      subtitle: 'for Irish Businesses',
      description: 'Premium quality packaging, wide format printing, leaflets & more. Low MOQs, fast delivery.',
      imageSrc: '/images/ifa/heroh/pizza.png',
      accent: 'from-blue-600 to-blue-800',
    },
    {
      title: 'Paper Bags & Retail',
      subtitle: 'Packaging Solutions',
      description: 'Flat handle, twisted handle, and SOS bags. Fully customised with your branding.',
      imageSrc: '/images/ifa/heroh/bag.png',
      accent: 'from-emerald-600 to-emerald-800',
    },
    {
      title: 'Wide Format Printing',
      subtitle: '& Signage',
      description: 'Roll-up banners, foamex boards, correx boards, vinyl stickers & posters.',
      imageSrc: '/images/ifa/heroh/wide.png',
      accent: 'from-purple-600 to-purple-800',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const quickLinks = [
    { label: 'Pizza Boxes', href: '/custom-pizza-boxes-ireland' },
    { label: 'Paper Bags', href: '/products/flat-handle-paper-bags' },
    { label: 'Leaflets', href: '/services/leaflets' },
    { label: 'Roll-Up Banners', href: '/roll-up-banners' },
    { label: 'Foamex Boards', href: '/foamex-boards' },
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center py-10 lg:py-16 gap-8">
          {/* Left content */}
          <div className="lg:w-1/2 text-white z-10 text-center lg:text-left">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-4">
              <span className="text-yellow-400 text-sm">★★★★★</span>
              <span className="text-white/90 text-sm font-medium">Trusted Irish Business</span>
              <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded-full">🇮🇪 Irish Made</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-2">
              {slides[currentSlide].title}
              <span className={`block text-transparent bg-clip-text bg-gradient-to-r ${slides[currentSlide].accent}`}>
                {slides[currentSlide].subtitle}
              </span>
            </h1>
            <p className="text-lg text-blue-100 mb-6 max-w-lg mx-auto lg:mx-0">
              {slides[currentSlide].description}
            </p>

            {/* Search bar */}
            <form onSubmit={handleSearch} className="relative max-w-lg mx-auto lg:mx-0 mb-5">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products... e.g. pizza boxes, leaflets"
                className="w-full px-5 py-3.5 pr-14 rounded-xl bg-white text-gray-900 placeholder-gray-400 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-2.5 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>

            {/* Quick links */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              <span className="text-blue-200 text-sm py-1">Popular:</span>
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm bg-white/10 hover:bg-white/20 text-white px-3 py-1 rounded-full transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* USP pills */}
            <div className="flex flex-wrap gap-3 mt-6 justify-center lg:justify-start">
              <div className="flex items-center gap-1.5 text-sm text-blue-100">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                Low MOQs from 100
              </div>
              <div className="flex items-center gap-1.5 text-sm text-blue-100">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                Fast Delivery
              </div>
              <div className="flex items-center gap-1.5 text-sm text-blue-100">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                Same-Day Dispatch
              </div>
            </div>
          </div>

          {/* Right - Product image */}
          <div className="lg:w-1/2 flex items-center justify-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <Image
                src={slides[currentSlide].imageSrc}
                alt="Featured product"
                fill
                className="object-contain drop-shadow-2xl"
                priority
                sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
                unoptimized={process.env.NODE_ENV === 'production'}
              />
            </div>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="flex justify-center gap-2 pb-6">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomepageHero;
