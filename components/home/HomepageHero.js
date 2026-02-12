import React, { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

const slides = [
  {
    title: 'Custom Packaging & Print',
    subtitle: 'for Irish Businesses',
    description: 'Premium quality packaging, wide format printing, leaflets & more. Low MOQs, fast delivery.',
    imageSrc: '/images/ifa/heroh/pizza.png',
    accentColor: '#2563eb',
  },
  {
    title: 'Paper Bags & Retail',
    subtitle: 'Packaging Solutions',
    description: 'Flat handle, twisted handle, and SOS bags. Fully customised with your branding.',
    imageSrc: '/images/ifa/heroh/bag.png',
    accentColor: '#059669',
  },
  {
    title: 'Wide Format Printing',
    subtitle: '& Signage',
    description: 'Roll-up banners, foamex boards, correx boards, vinyl stickers & posters.',
    imageSrc: '/images/ifa/heroh/wide.png',
    accentColor: '#7c3aed',
  },
];

const quickLinks = [
  { label: 'Pizza Boxes', href: '/custom-pizza-boxes-ireland' },
  { label: 'Paper Bags', href: '/products/flat-handle-paper-bags' },
  { label: 'Leaflets', href: '/services/leaflets' },
  { label: 'Roll-Up Banners', href: '/roll-up-banners' },
  { label: 'Foamex Boards', href: '/foamex-boards' },
];

const HomepageHero = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef(null);

  const goToSlide = useCallback((nextIndex) => {
    if (nextIndex === currentSlide) return;
    setIsTransitioning(true);
    // Wait for fade-out, then swap content, then fade-in
    timeoutRef.current = setTimeout(() => {
      setCurrentSlide(nextIndex);
      // Small delay before fade-in to allow React to render new content
      requestAnimationFrame(() => {
        setIsTransitioning(false);
      });
    }, 400);
  }, [currentSlide]);

  useEffect(() => {
    const interval = setInterval(() => {
      const next = (currentSlide + 1) % slides.length;
      goToSlide(next);
    }, 6000);
    return () => {
      clearInterval(interval);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentSlide, goToSlide]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #f0f4ff 0%, #e8eef9 30%, #f5f0ff 60%, #f0f4ff 100%)' }}>
      {/* Soft background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute rounded-full"
          style={{
            width: '500px',
            height: '500px',
            top: '-150px',
            right: '-100px',
            background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: '400px',
            height: '400px',
            bottom: '-100px',
            left: '-80px',
            background: 'radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)',
          }}
        />
        {/* Subtle dot pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.03) 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center py-10 lg:py-16 gap-8 lg:gap-12">
          {/* Left content */}
          <div className="lg:w-1/2 z-10 text-center lg:text-left">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-full px-4 py-1.5 mb-5 shadow-sm border border-gray-100">
              <span className="text-amber-400 text-sm">★★★★★</span>
              <span className="text-gray-600 text-sm font-medium">Trusted Irish Business</span>
              <span className="text-xs bg-emerald-500 text-white px-2 py-0.5 rounded-full">Irish Made</span>
            </div>

            {/* Animated text container */}
            <div
              style={{
                transition: 'opacity 0.4s ease, transform 0.4s ease',
                opacity: isTransitioning ? 0 : 1,
                transform: isTransitioning ? 'translateY(8px)' : 'translateY(0)',
              }}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-2 text-gray-800">
                {slides[currentSlide].title}
                <span
                  className="block mt-1"
                  style={{ color: slides[currentSlide].accentColor }}
                >
                  {slides[currentSlide].subtitle}
                </span>
              </h1>
              <p className="text-base sm:text-lg text-gray-500 mb-6 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                {slides[currentSlide].description}
              </p>
            </div>

            {/* Search bar */}
            <form onSubmit={handleSearch} className="relative max-w-lg mx-auto lg:mx-0 mb-5">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products... e.g. pizza boxes, leaflets"
                className="w-full px-5 py-3.5 pr-14 rounded-xl bg-white text-gray-900 placeholder-gray-400 shadow-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent text-sm sm:text-base"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white p-2.5 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>

            {/* Quick links */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              <span className="text-gray-400 text-sm py-1">Popular:</span>
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm bg-white/80 hover:bg-white text-gray-600 hover:text-gray-900 px-3 py-1 rounded-full transition-colors border border-gray-200 hover:border-gray-300 shadow-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* USP pills */}
            <div className="flex flex-wrap gap-3 sm:gap-4 mt-6 justify-center lg:justify-start">
              {['Low MOQs from 100', 'Fast Delivery', 'Same-Day Dispatch'].map((text) => (
                <div key={text} className="flex items-center gap-1.5 text-sm text-gray-500">
                  <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Right - Product images with crossfade */}
          <div className="lg:w-1/2 flex items-center justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {slides.map((slide, index) => (
                <div
                  key={slide.imageSrc}
                  className="absolute inset-0"
                  style={{
                    transition: 'opacity 0.8s ease',
                    opacity: index === currentSlide && !isTransitioning ? 1 : 0,
                  }}
                >
                  <Image
                    src={slide.imageSrc}
                    alt={slide.title}
                    fill
                    className="object-contain"
                    style={{ filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.1))' }}
                    priority={index === 0}
                    sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                    unoptimized={process.env.NODE_ENV === 'production'}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="flex justify-center gap-2 pb-6">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                index === currentSlide ? 'w-8 bg-blue-500' : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomepageHero;
