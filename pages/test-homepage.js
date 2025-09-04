import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  FaTruck, 
  FaRecycle, 
  FaMedal, 
  FaRegClock, 
  FaCube, 
  FaHandshake,
  FaPrint,
  FaPizzaSlice,
  FaShoppingBag,
  FaUtensils,
  FaFileAlt,
  FaStickyNote,
  FaBookOpen,
  FaImage,
  FaArrowRight,
  FaCheck,
  FaStar,
  FaQuoteLeft,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaLeaf,
  FaAward,
  FaRuler,
  FaPaintBrush
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

  // Hero carousel data - showcasing main products
  const heroSlides = [
    {
      id: 1,
      title: "Premium Pizza Boxes",
      subtitle: "Custom printed pizza boxes with same-day dispatch",
      description: "High-quality, grease-resistant pizza boxes perfect for your restaurant. Custom sizes, designs, and branding available.",
      image: "/images/ifa/heroh/pizza.png",
      cta: "Order Pizza Boxes",
      link: "/custom-pizza-boxes-ireland",
      badge: "Same Day Dispatch",
      color: "from-red-500 to-orange-500"
    },
    {
      id: 2,
      title: "Eco-Friendly Paper Bags",
      subtitle: "Sustainable packaging solutions for retail",
      description: "Premium paper bags in various sizes and styles. Perfect for retail, food service, and promotional use.",
      image: "/images/ifa/heroh/bag.png",
      cta: "View Paper Bags",
      link: "/products",
      badge: "Eco-Friendly",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      title: "Burger Boxes & Food Packaging",
      subtitle: "Complete food packaging solutions",
      description: "Bagasse burger boxes, food containers, and takeaway packaging. Biodegradable and compostable options available.",
      image: "/images/ifa/heroh/burger.png",
      cta: "Explore Food Packaging",
      link: "/eco-bagasse-burger-boxes",
      badge: "Biodegradable",
      color: "from-amber-500 to-yellow-500"
    },
    {
      id: 4,
      title: "Professional Printing Services",
      subtitle: "Leaflets, posters, and marketing materials",
      description: "High-quality printing services for all your marketing needs. From business cards to large format displays.",
      image: "/images/ifa/heroh/leaflet.png",
      cta: "View Printing Services",
      link: "/services",
      badge: "Professional Quality",
      color: "from-blue-500 to-indigo-500"
    },
    {
      id: 5,
      title: "Wide Format & Signage",
      subtitle: "Large format printing and display solutions",
      description: "Roll-up banners, foamex boards, correx signs, and vinyl stickers. Perfect for exhibitions and outdoor advertising.",
      image: "/images/ifa/heroh/wide.png",
      cta: "View Wide Format",
      link: "/services",
      badge: "Large Format",
      color: "from-purple-500 to-pink-500"
    }
  ];

  // Product categories with images and links
  const productCategories = [
    {
      title: "Food Packaging",
      description: "Pizza boxes, burger boxes, and food containers",
      image: "/images/products/pizza-box.png",
      link: "/products",
      products: ["Pizza Boxes", "Burger Boxes", "Food Containers", "Takeaway Packaging"],
      icon: <FaPizzaSlice className="text-3xl text-red-500" />
    },
    {
      title: "Retail Packaging",
      description: "Paper bags, shopping bags, and retail solutions",
      image: "/images/products/paper-bag.png",
      link: "/products",
      products: ["Paper Bags", "SOS Bags", "Shopping Bags", "Gift Bags"],
      icon: <FaShoppingBag className="text-3xl text-green-500" />
    },
    {
      title: "Eco-Friendly Solutions",
      description: "Sustainable and biodegradable packaging options",
      image: "/images/products/bagasse-burger-box/1.png",
      link: "/eco-bagasse-burger-boxes",
      products: ["Bagasse Products", "Compostable Packaging", "Recycled Materials"],
      icon: <FaLeaf className="text-3xl text-emerald-500" />
    },
    {
      title: "Printing Services",
      description: "Professional printing for all your marketing needs",
      image: "/images/products/leaflet.png",
      link: "/services",
      products: ["Leaflets", "Posters", "Business Cards", "Flyers"],
      icon: <FaPrint className="text-3xl text-blue-500" />
    },
    {
      title: "Wide Format",
      description: "Large format printing and display solutions",
      image: "/images/products/rollup-banner.png",
      link: "/services",
      products: ["Roll-up Banners", "Foamex Boards", "Correx Signs", "Vinyl Stickers"],
      icon: <FaImage className="text-3xl text-purple-500" />
    },
    {
      title: "Apparel & Merchandise",
      description: "Custom clothing and promotional items",
      image: "/images/apparel/TSHIRT MOCK UP 1.jpg",
      link: "/clothing",
      products: ["T-Shirts", "Hoodies", "Polo Shirts", "Custom Apparel"],
      icon: <FaHandshake className="text-3xl text-indigo-500" />
    }
  ];

  // USP data - key benefits
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
      title: "Custom Design Service",
      description: "Professional design team to create unique packaging that represents your brand perfectly"
    }
  ];

  // Services data
  const services = [
    {
      icon: <FaFileAlt className="w-12 h-12 text-blue-600" />,
      title: "Posters & Large Format",
      description: "Professional poster designs and large format printing for events, promotions, and branding",
      link: "/services/posters"
    },
    {
      icon: <FaStickyNote className="w-12 h-12 text-green-600" />,
      title: "Vinyl Graphics",
      description: "Custom vinyl graphics, decals, and stickers for any surface or application",
      link: "/services/vinyls"
    },
    {
      icon: <FaBookOpen className="w-12 h-12 text-purple-600" />,
      title: "Leaflets & Flyers",
      description: "Eye-catching leaflet and flyer designs that engage your target audience effectively",
      link: "/services/leaflets"
    },
    {
      icon: <FaUtensils className="w-12 h-12 text-red-600" />,
      title: "Menu Design",
      description: "Appetizing menu designs that showcase your offerings and enhance customer experience",
      link: "/services/menus"
    },
    {
      icon: <FaImage className="w-12 h-12 text-amber-600" />,
      title: "Foamex Boards",
      description: "Premium PVC signage and display boards for indoor applications and exhibitions",
      link: "/foamex-boards"
    },
    {
      icon: <FaImage className="w-12 h-12 text-indigo-600" />,
      title: "Correx Boards",
      description: "Weather-resistant outdoor signage and display boards for all weather conditions",
      link: "/correx-boards"
    },
    {
      icon: <FaStickyNote className="w-12 h-12 text-pink-600" />,
      title: "Vinyl Stickers",
      description: "Custom vinyl graphics, decals, and stickers for all applications and surfaces",
      link: "/vinyl-stickers"
    },
    {
      icon: <FaImage className="w-12 h-12 text-teal-600" />,
      title: "Roll Up Banners",
      description: "Professional exhibition and trade show displays with easy setup and portability",
      link: "/roll-up-banners"
    }
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Sarah O'Connor",
      business: "Dublin Pizza Co.",
      text: "PrintNPack's pizza boxes are exceptional quality. The custom printing really makes our brand stand out, and the fast delivery is a game-changer for our business.",
      rating: 5,
      image: "/images/testimonials/customer1.png"
    },
    {
      name: "Michael Kelly",
      business: "Kelly's Bakery",
      text: "The paper bags we ordered are perfect for our bakery. Great quality, eco-friendly, and the team was incredibly helpful with our custom requirements.",
      rating: 5,
      image: "/images/testimonials/customer2.png"
    },
    {
      name: "Emma Murphy",
      business: "Murphy's Restaurant",
      text: "From burger boxes to marketing materials, PrintNPack has been our go-to supplier. Professional service and outstanding quality every time.",
      rating: 5,
      image: "/images/testimonials/customer3.png"
    }
  ];

  // Auto-rotate hero slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Layout>
      <Head>
        <title>PrintNPack - Ireland's Premier Packaging & Printing Solutions</title>
        <meta name="description" content="PrintNPack provides comprehensive packaging and printing solutions across Ireland. From pizza boxes to wide format printing, we deliver quality, speed, and sustainability." />
        <meta name="keywords" content="packaging ireland, printing services, pizza boxes, paper bags, wide format, custom design, fast delivery, eco-friendly" />
      </Head>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50">
        {/* Background Animation */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-green-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-purple-200 rounded-full opacity-20 animate-pulse delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Ireland's Premier
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                  Packaging & Printing
                </span>
                Solutions
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                From custom pizza boxes to wide format printing, we deliver exceptional quality, 
                fast turnaround times, and sustainable solutions for businesses across Ireland.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/quote">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Get Free Quote
                    <FaArrowRight />
                  </motion.button>
                </Link>
                <Link href="/products">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
                  >
                    View Products
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Hero Image Carousel */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                {heroSlides.map((slide, index) => (
                  <motion.div
                    key={slide.id}
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: index === currentSlide ? 1 : 0,
                      scale: index === currentSlide ? 1 : 0.9
                    }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${slide.color} opacity-10`}></div>
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-contain"
                      priority={index === 0}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-white text-xl font-bold mb-2">{slide.title}</h3>
                          <p className="text-white/90 text-sm">{slide.subtitle}</p>
                        </div>
                        <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                          {slide.badge}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Slide Indicators */}
              <div className="flex justify-center mt-4 space-x-2">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Complete Packaging & Printing Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From food packaging to marketing materials, we provide everything your business needs 
              under one roof with exceptional quality and service.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    {category.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{category.title}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {category.products.map((product, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {product}
                      </span>
                    ))}
                  </div>
                  <Link href={category.link}>
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2"
                    >
                      Explore {category.title}
                      <FaArrowRight className="text-sm" />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose PrintNPack?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to delivering exceptional value through quality, speed, and innovation 
              in every project we undertake.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {uspData.map((usp, index) => (
              <motion.div
                key={usp.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="flex justify-center mb-6">
                  {usp.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{usp.title}</h3>
                <p className="text-gray-600 leading-relaxed">{usp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Professional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive range of services covers all your printing and design needs, 
              backed by professional expertise and cutting-edge technology.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-center leading-relaxed text-sm">{service.description}</p>
                <Link href={service.link}>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-sm"
                  >
                    Learn More
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from the businesses that trust us 
              with their packaging and printing needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-lg" />
                  ))}
                </div>
                <FaQuoteLeft className="text-blue-600 text-2xl mb-4" />
                <p className="text-gray-600 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.business}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join hundreds of satisfied customers across Ireland who trust PrintNPack 
              for their packaging and printing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Get Free Quote
                  <FaArrowRight />
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <FaPhone className="text-blue-400" />
                  <span>+353 1 234 5678</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-blue-400" />
                  <span>info@printnpack.ie</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-blue-400" />
                  <span>Dublin, Ireland</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link href="/products" className="block text-gray-300 hover:text-white transition-colors">Products</Link>
                <Link href="/services" className="block text-gray-300 hover:text-white transition-colors">Services</Link>
                <Link href="/about" className="block text-gray-300 hover:text-white transition-colors">About</Link>
                <Link href="/contact" className="block text-gray-300 hover:text-white transition-colors">Contact</Link>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Services</h3>
              <div className="space-y-2">
                <Link href="/custom-pizza-boxes-ireland" className="block text-gray-300 hover:text-white transition-colors">Pizza Boxes</Link>
                <Link href="/eco-bagasse-burger-boxes" className="block text-gray-300 hover:text-white transition-colors">Burger Boxes</Link>
                <Link href="/foamex-boards" className="block text-gray-300 hover:text-white transition-colors">Foamex Boards</Link>
                <Link href="/vinyl-stickers" className="block text-gray-300 hover:text-white transition-colors">Vinyl Stickers</Link>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <FaFacebook className="text-xl" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <FaInstagram className="text-xl" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <FaTwitter className="text-xl" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <FaLinkedin className="text-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
