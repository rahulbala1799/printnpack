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
  FaPause
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
  RiGlobalLine
} from 'react-icons/ri';

export default function TestHomepage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Hero carousel data
  const heroSlides = [
    {
      id: 1,
      title: "Premium Pizza Boxes",
      subtitle: "Custom printed pizza boxes for Irish restaurants",
      description: "High-quality, eco-friendly pizza boxes with your branding. Fast delivery across Ireland.",
      image: "/images/ifa/heroh/pizza.png",
      cta: "Order Pizza Boxes",
      link: "/custom-pizza-boxes-ireland"
    },
    {
      id: 2,
      title: "Eco-Friendly Burger Boxes",
      subtitle: "Sustainable bagasse burger boxes",
      description: "Biodegradable burger boxes made from bagasse. Perfect for eco-conscious restaurants.",
      image: "/images/ifa/heroh/burger.png",
      cta: "Order Burger Boxes",
      link: "/eco-bagasse-burger-boxes"
    },
    {
      id: 3,
      title: "Paper Bags & Shopping Bags",
      subtitle: "Custom printed paper bags for retail",
      description: "Professional paper bags with your logo. Flat handle, twisted handle, and SOS bags available.",
      image: "/images/ifa/heroh/bag.png",
      cta: "Order Paper Bags",
      link: "/products"
    },
    {
      id: 4,
      title: "Leaflets & Flyers",
      subtitle: "High-quality printing services",
      description: "A4, A5, A6 leaflets and flyers. Perfect for marketing campaigns and promotions.",
      image: "/images/ifa/heroh/leaflet.png",
      cta: "Order Leaflets",
      link: "/services/leaflets"
    },
    {
      id: 5,
      title: "Wide Format Printing",
      subtitle: "Banners, posters, and signage",
      description: "Large format printing for banners, posters, and outdoor signage. Professional quality guaranteed.",
      image: "/images/ifa/heroh/wide.png",
      cta: "Order Wide Format",
      link: "/services/posters"
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

      {/* Hero Carousel Section */}
      <section className="relative h-screen overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        
        {/* Carousel */}
        <div className="relative h-full">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="flex items-center justify-center h-full px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Content */}
                  <div className="text-white z-10">
                    <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                      {slide.title}
                    </h1>
                    <h2 className="text-2xl lg:text-3xl text-blue-200 mb-6">
                      {slide.subtitle}
                    </h2>
                    <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                      {slide.description}
                    </p>
                    <Link href={slide.link}>
                      <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-3">
                        {slide.cta}
                        <FaArrowRight />
                      </button>
                    </Link>
                  </div>
                  
                  {/* Image */}
                  <div className="relative z-10">
                    <div className="relative w-full h-96 lg:h-[500px]">
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-contain"
                        priority={index === 0}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
          <button
            onClick={prevSlide}
            className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300"
          >
            <FaChevronLeft />
          </button>
          
          <button
            onClick={togglePlayPause}
            className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300"
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          
          <button
            onClick={nextSlide}
            className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="absolute bottom-8 right-8 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-40'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Product Range
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From pizza boxes to paper bags, we provide comprehensive packaging solutions for businesses across Ireland
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <Link key={index} href={category.link}>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <span className="bg-red-600 px-3 py-1 rounded-full text-sm font-semibold">
                        {category.count}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {category.description}
                    </p>
                    <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                      Explore Products
                      <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose PrintNPack?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to providing the best packaging solutions with exceptional service and quality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {uspData.map((usp, index) => (
              <div key={index} className="text-center p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
                <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {usp.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {usp.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {usp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive packaging and printing services tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 text-center">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <FaCheck className="text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers across Ireland
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
                <FaQuoteLeft className="text-blue-600 text-2xl mb-4" />
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.business}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Get a free quote for your custom packaging needs. Fast delivery, low minimums, and premium quality guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote">
              <button className="bg-white text-red-600 px-8 py-4 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3">
                Get Free Quote
                <FaArrowRight />
              </button>
            </Link>
            <Link href="/contact">
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-white hover:text-red-600 transition-all duration-300 flex items-center justify-center gap-3">
                <FaPhone className="mr-2" />
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-blue-600 p-4 rounded-full mb-4">
                <FaPhone className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600">+353 1 234 5678</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-green-600 p-4 rounded-full mb-4">
                <FaEnvelope className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600">info@printnpack.ie</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-purple-600 p-4 rounded-full mb-4">
                <FaMapMarkerAlt className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600">Dublin, Ireland</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
