import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FaTruck, 
  FaRecycle, 
  FaMedal, 
  FaRegClock, 
  FaCube, 
  FaHandshake,
  FaPrint,
  FaArrowRight,
  FaCheck,
  FaStar,
  FaQuoteLeft,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronLeft,
  FaChevronRight,
  FaPlay,
  FaPause,
  FaAward,
  FaShieldAlt,
  FaUsers,
  FaRocket,
  FaPalette,
  FaCog,
  FaHeart,
  FaGlobe,
  FaIndustry,
  FaLeaf,
  FaClock,
  FaEuroSign
} from 'react-icons/fa';
import { 
  RiTimerFlashLine, 
  RiLeafLine, 
  RiAwardLine, 
  RiNumbersLine, 
  RiRulerLine, 
  RiPaintBrushLine,
  RiCustomerService2Line,
  RiShieldCheckLine,
  RiGlobalLine,
  RiPrinterLine,
  RiTruckLine,
  RiQualityLine,
  RiTeamLine,
  RiLightbulbLine,
  RiMagicLine
} from 'react-icons/ri';

export default function TestHomepage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Hero carousel data
  const heroSlides = [
    {
      id: 1,
      title: "Premium Packaging Solutions",
      subtitle: "Ireland's Leading Custom Printing & Packaging Company",
      description: "Transform your brand with our exceptional packaging solutions. From pizza boxes to paper bags, we deliver quality that exceeds expectations.",
      image: "/images/ifa/heroh/pizza.png",
      cta: "Explore Our Products",
      link: "/products",
      stats: ["500+ Happy Clients", "24hr Turnaround", "Eco-Friendly Materials"]
    },
    {
      id: 2,
      title: "Custom Design Excellence",
      subtitle: "Professional Design Services for Every Business",
      description: "Our expert design team creates stunning visuals that make your brand stand out. From concept to completion, we bring your vision to life.",
      image: "/images/ifa/heroh/leaflet.png",
      cta: "View Design Services",
      link: "/services",
      stats: ["Free Design Consultation", "Unlimited Revisions", "Brand Guidelines"]
    },
    {
      id: 3,
      title: "Fast & Reliable Delivery",
      subtitle: "Nationwide Delivery Across Ireland",
      description: "Get your orders delivered quickly and safely. Our efficient logistics ensure your packaging arrives exactly when you need it.",
      image: "/images/ifa/heroh/bag.png",
      cta: "Get Quote",
      link: "/quote",
      stats: ["Same Day Dispatch", "Nationwide Coverage", "Tracking Included"]
    }
  ];

  // Product categories
  const productCategories = [
    {
      title: "Pizza Boxes",
      description: "Custom printed pizza boxes in various sizes",
      image: "/images/pizza-boxes/PIZZA_BOX_1.jpg",
      link: "/custom-pizza-boxes-ireland",
      count: "13 designs"
    },
    {
      title: "Burger Boxes",
      description: "Eco-friendly bagasse burger boxes",
      image: "/images/products/bagasse-burger-box/1.png",
      link: "/eco-bagasse-burger-boxes",
      count: "6 designs"
    },
    {
      title: "Paper Bags",
      description: "Custom printed paper bags and shopping bags",
      image: "/images/products/flat-handle-bags/1.png",
      link: "/products",
      count: "7+ types"
    },
    {
      title: "Leaflets & Flyers",
      description: "A4, A5, A6 leaflets and marketing materials",
      image: "/images/ifa/heroh/leaflet.png",
      link: "/services/leaflets",
      count: "Multiple sizes"
    },
    {
      title: "Vinyl Stickers",
      description: "Custom vinyl stickers and decals",
      image: "/images/products/vinyl-sticker.png",
      link: "/services/vinyls",
      count: "Various sizes"
    },
    {
      title: "Rubber Stamps",
      description: "Custom rubber stamps for businesses",
      image: "/images/rubber-stamps/RubberStamp_10.jpg",
      link: "/rubber-stamps",
      count: "10+ designs"
    }
  ];

  // USP data
  const uspData = [
    {
      icon: <RiTimerFlashLine className="text-4xl text-blue-600" />,
      title: "Fast Delivery",
      description: "Industry-leading turnaround times with our unique weekly delivery system across Ireland"
    },
    {
      icon: <RiLeafLine className="text-4xl text-green-600" />,
      title: "Eco-Friendly",
      description: "Sustainable materials and production methods for environmentally conscious packaging"
    },
    {
      icon: <RiAwardLine className="text-4xl text-amber-600" />,
      title: "Premium Quality",
      description: "High-quality materials and precision printing for exceptional results every time"
    },
    {
      icon: <RiNumbersLine className="text-4xl text-purple-600" />,
      title: "Low MOQ",
      description: "Minimum orders as low as 100 units, making custom packaging accessible to all businesses"
    },
    {
      icon: <RiRulerLine className="text-4xl text-red-600" />,
      title: "Custom Sizes",
      description: "Tailored dimensions to perfectly fit your specific product requirements"
    },
    {
      icon: <RiPaintBrushLine className="text-4xl text-blue-800" />,
      title: "Design Service",
      description: "Professional design team to create unique packaging that represents your brand perfectly"
    }
  ];

  // Services data
  const servicesData = [
    {
      title: "Custom Printing",
      description: "High-quality custom printing on all our packaging products",
      icon: <FaPrint className="text-3xl text-blue-600" />,
      features: ["CMYK printing", "Custom designs", "Brand colors", "High resolution"]
    },
    {
      title: "Fast Delivery",
      description: "Quick turnaround times with reliable delivery across Ireland",
      icon: <FaTruck className="text-3xl text-green-600" />,
      features: ["Weekly delivery", "Nationwide coverage", "Tracking included", "On-time guarantee"]
    },
    {
      title: "Eco Solutions",
      description: "Sustainable packaging options for environmentally conscious businesses",
      icon: <FaRecycle className="text-3xl text-amber-600" />,
      features: ["Recyclable materials", "Biodegradable options", "Eco-friendly inks", "Sustainable sourcing"]
    },
    {
      title: "Low Minimums",
      description: "Accessible minimum order quantities for businesses of all sizes",
      icon: <FaCube className="text-3xl text-purple-600" />,
      features: ["100 unit minimums", "Flexible quantities", "No hidden fees", "Transparent pricing"]
    },
    {
      title: "Quality Guarantee",
      description: "Premium quality materials and craftsmanship in every product",
      icon: <FaMedal className="text-3xl text-red-600" />,
      features: ["Quality materials", "Precision printing", "Durability tested", "Satisfaction guarantee"]
    },
    {
      title: "Customer Support",
      description: "Dedicated support team to help with your packaging needs",
      icon: <RiCustomerService2Line className="text-3xl text-indigo-600" />,
      features: ["Expert advice", "Design assistance", "Technical support", "Account management"]
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      name: "Sarah O'Brien",
      business: "Dublin Pizza Co.",
      content: "PrintNPack delivered exceptional pizza boxes that perfectly represent our brand. The quality is outstanding and delivery was super fast!",
      rating: 5,
      image: "/images/testimonials/customer1.png"
    },
    {
      name: "Michael Kelly",
      business: "Eco Burger Bar",
      content: "The bagasse burger boxes are exactly what we needed for our eco-friendly restaurant. Great quality and fast service!",
      rating: 5,
      image: "/images/testimonials/customer2.png"
    },
    {
      name: "Emma Murphy",
      business: "Retail Plus",
      content: "Our custom paper bags have been a huge hit with customers. The design service was fantastic and the quality is top-notch.",
      rating: 5,
      image: "/images/testimonials/customer3.png"
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <Layout>
      <Head>
        <title>PrintNPack - Premium Irish Packaging Solutions | Test Homepage</title>
        <meta name="description" content="PrintNPack provides high-quality pizza boxes, paper bags, burger boxes, leaflets, and custom printing services across Ireland with fast delivery and low minimum orders." />
        <meta name="keywords" content="packaging ireland, pizza boxes, paper bags, food packaging, custom printing, leaflets, vinyl stickers, rubber stamps" />
      </Head>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-green-500 rounded-full opacity-20 animate-pulse delay-2000"></div>

        <div className="relative z-10 flex items-center min-h-screen">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Content */}
              <div className="text-white space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-200 text-sm font-medium">
                    <FaAward className="mr-2" />
                    Ireland's Premier Printing Company
                  </div>
                  
                  <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                    <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      Premium
                    </span>
                    <br />
                    <span className="text-white">Packaging</span>
                    <br />
                    <span className="text-4xl lg:text-5xl text-gray-300">Solutions</span>
                  </h1>
                  
                  <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                    Transform your brand with exceptional packaging that tells your story. 
                    From concept to delivery, we craft solutions that exceed expectations.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 py-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400">500+</div>
                    <div className="text-sm text-gray-400">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400">24hr</div>
                    <div className="text-sm text-gray-400">Turnaround</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400">100%</div>
                    <div className="text-sm text-gray-400">Eco-Friendly</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/quote">
                    <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center">
                      Get Free Quote
                      <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </Link>
                  <Link href="/products">
                    <button className="group border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-white/10 flex items-center justify-center">
                      <FaPrint className="mr-2" />
                      View Products
                    </button>
                  </Link>
                </div>
              </div>

              {/* Image Showcase */}
              <div className="relative">
                <div className="relative w-full h-[600px] lg:h-[700px]">
                  {/* Main Product Image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl p-8">
                    <div className="relative w-full h-full">
                      <Image
                        src="/images/ifa/heroh/pizza.png"
                        alt="Premium Packaging Solutions"
                        fill
                        className="object-contain drop-shadow-2xl"
                        priority
                      />
                    </div>
                  </div>
                  
                  {/* Floating Product Cards */}
                  <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-2xl transform rotate-12 hover:rotate-0 transition-transform duration-300">
                    <div className="w-20 h-20 relative">
                      <Image
                        src="/images/ifa/heroh/bag.png"
                        alt="Paper Bags"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-2xl transform -rotate-12 hover:rotate-0 transition-transform duration-300">
                    <div className="w-20 h-20 relative">
                      <Image
                        src="/images/ifa/heroh/leaflet.png"
                        alt="Printing Services"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2">Scroll to explore</span>
            <FaArrowRight className="rotate-90" />
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <FaCube className="mr-2" />
              Our Product Range
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Premium Packaging
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From pizza boxes to paper bags, we provide comprehensive packaging solutions 
              that elevate your brand and delight your customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <Link key={index} href={category.link}>
                <div className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 overflow-hidden border border-gray-100">
                  {/* Image Container */}
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    
                    {/* Overlay Content */}
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <div className="flex items-center justify-between mb-3">
                        <span className="bg-gradient-to-r from-blue-500 to-purple-500 px-3 py-1 rounded-full text-sm font-semibold">
                          {category.count}
                        </span>
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                          <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {category.description}
                    </p>
                    
                    {/* Features */}
                    <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-300">
                      <span>Explore Collection</span>
                      <FaArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300"></div>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <Link href="/products">
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center mx-auto">
                View All Products
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <FaAward className="mr-2" />
              Why Choose PrintNPack
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Excellence in Every
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Detail
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're committed to providing the best packaging solutions with exceptional service, 
              quality, and innovation that sets us apart from the competition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {uspData.map((usp, index) => (
              <div key={index} className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                {/* Icon Container */}
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {usp.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <FaCheck className="text-white text-xs" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {usp.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {usp.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* Bottom Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">24hr</div>
              <div className="text-gray-600">Fast Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-gray-600">Quality Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">5★</div>
              <div className="text-gray-600">Customer Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-green-500/10 to-blue-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
              <FaCog className="mr-2" />
              Our Services
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Complete
              <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Service Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From design to delivery, we provide comprehensive packaging and printing services 
              that cover every aspect of your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <div key={index} className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100 overflow-hidden">
                {/* Background Gradient */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                
                {/* Icon */}
                <div className="relative mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                      <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <FaCheck className="text-white text-xs" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-200 text-sm font-medium mb-6">
              <FaHeart className="mr-2" />
              Customer Stories
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              What Our Customers
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Say About Us
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it - hear from our satisfied customers across Ireland 
              who trust us with their packaging needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6">
                  <FaQuoteLeft className="text-blue-400 text-2xl opacity-50" />
                </div>
                
                {/* Rating */}
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-lg" />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-gray-200 mb-8 leading-relaxed text-lg">
                  "{testimonial.content}"
                </p>
                
                {/* Author */}
                <div className="flex items-center">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden mr-4 ring-2 ring-blue-400/50">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                    <p className="text-blue-200">{testimonial.business}</p>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-20 text-center">
            <p className="text-gray-400 mb-8">Trusted by businesses across Ireland</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">500+</div>
                <div className="text-gray-400 text-sm">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">4.9★</div>
                <div className="text-gray-400 text-sm">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">24hr</div>
                <div className="text-gray-400 text-sm">Fast Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-gray-400 text-sm">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 border border-white/30 rounded-full text-white text-sm font-medium mb-8">
              <FaRocket className="mr-2" />
              Ready to Transform Your Brand?
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Let's Create Something
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Amazing Together
              </span>
            </h2>
            
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Get a free quote for your custom packaging needs. Fast delivery, low minimums, 
              and premium quality guaranteed. Join hundreds of satisfied customers across Ireland.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link href="/quote">
                <button className="group bg-white text-blue-600 px-10 py-5 rounded-2xl text-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center gap-3">
                  Get Free Quote
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </Link>
              <Link href="/contact">
                <button className="group border-2 border-white text-white px-10 py-5 rounded-2xl text-xl font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center gap-3">
                  <FaPhone className="mr-2" />
                  Contact Us
                </button>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-80">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-blue-200 text-sm">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">24hr</div>
                <div className="text-blue-200 text-sm">Fast Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-blue-200 text-sm">Quality Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">5★</div>
                <div className="text-blue-200 text-sm">Customer Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to start your next project? We're here to help bring your vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaPhone className="text-white text-2xl" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3">Call Us</h4>
              <p className="text-gray-600 mb-4">Speak directly with our team</p>
              <p className="text-blue-600 font-semibold text-lg">+353 1 234 5678</p>
            </div>

            <div className="group text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaEnvelope className="text-white text-2xl" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3">Email Us</h4>
              <p className="text-gray-600 mb-4">Send us your requirements</p>
              <p className="text-green-600 font-semibold text-lg">info@printnpack.ie</p>
            </div>

            <div className="group text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaMapMarkerAlt className="text-white text-2xl" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3">Visit Us</h4>
              <p className="text-gray-600 mb-4">Come see our facilities</p>
              <p className="text-purple-600 font-semibold text-lg">Dublin, Ireland</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
