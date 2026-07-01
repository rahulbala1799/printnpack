"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight, FaCheck } from 'react-icons/fa';

const HeroSection = () => {
  const slides = [
    {
      title: "Custom Printed Pizza Boxes",
      subtitle: "Premium quality, fully customisable pizza boxes with low minimum orders. Weekly delivery available.",
      cta: "Get a Quote",
      product: "Pizza Box",
      benefits: ["From 100 units", "Full colour printing", "Weekly delivery service"],
      imageSrc: "/images/ifa/heroh/pizza.png"
    },
    {
      title: "Branded Paper Bags",
      subtitle: "Same-day printing available. Strengthen your brand with custom paper bags for retail and food service.",
      cta: "Request a Quote",
      product: "Paper Bag",
      benefits: ["Same-day dispatch", "Twisted & flat handles", "Eco-friendly materials"],
      imageSrc: "/images/ifa/heroh/bag.png"
    },
    {
      title: "Eco Bagasse Burger Boxes",
      subtitle: "Sustainable, biodegradable burger boxes that look great and protect the environment.",
      cta: "Get Pricing",
      product: "Bagasse Box",
      benefits: ["100% biodegradable", "Grease resistant", "Custom branding available"],
      imageSrc: "/images/ifa/heroh/burger.png"
    },
    {
      title: "Leaflets & Marketing Materials",
      subtitle: "Same-day printing on high-impact marketing materials. From flyers to brochures.",
      cta: "Order Now",
      product: "Leaflet",
      benefits: ["Same-day printing", "Multiple paper weights", "Folding options available"],
      imageSrc: "/images/ifa/heroh/leaflet.png"
    },
    {
      title: "Custom Printed Napkins",
      subtitle: "Turn everyday items into brand touchpoints. Custom napkins printed to your specification.",
      cta: "Get Started",
      product: "Napkin",
      benefits: ["Low minimum orders", "Full colour print", "Fast turnaround"],
      imageSrc: "/images/hero/napkin.png"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.04]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center py-12 md:py-20 lg:py-24 gap-8 md:gap-12">
          {/* Content */}
          <div className="md:w-1/2 text-white z-10 w-full order-2 md:order-1">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-1.5 mb-6 text-sm text-slate-300">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              Irish Owned &amp; Operated
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-4">
              {slides[currentSlide].title}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 mb-6 max-w-lg leading-relaxed">
              {slides[currentSlide].subtitle}
            </p>

            <ul className="space-y-2.5 mb-8">
              {slides[currentSlide].benefits.map((benefit, index) => (
                <li key={index} className="flex items-center text-sm sm:text-base text-slate-300">
                  <FaCheck className="text-blue-400 mr-2.5 flex-shrink-0 text-xs" />
                  {benefit}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-sm font-medium transition-colors"
              >
                {slides[currentSlide].cta}
                <FaArrowRight className="ml-2 text-xs" />
              </Link>
              <a
                href="tel:+353894157369"
                className="inline-flex items-center justify-center border border-white/20 text-white hover:bg-white/5 px-6 py-3 rounded-md text-sm font-medium transition-colors"
              >
                Call +353 89 415 7369
              </a>
            </div>
          </div>

          {/* Product Image */}
          <div className="md:w-1/2 z-10 flex items-center justify-center w-full order-1 md:order-2">
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-3xl"></div>
              <Image
                src={slides[currentSlide].imageSrc}
                alt={slides[currentSlide].product}
                fill
                className="object-contain drop-shadow-2xl"
                priority={currentSlide === 0}
                sizes="(max-width: 640px) 224px, (max-width: 768px) 288px, 384px"
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
                index === currentSlide ? 'w-8 bg-blue-500' : 'w-2 bg-white/20'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
