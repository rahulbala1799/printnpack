import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

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
      image: '/images/ifa/heroh/posters.png',
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
      image: '/images/ifa/heroh/vinyls.png',
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
      image: '/images/ifa/heroh/leaflets.png',
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
      image: '/images/ifa/heroh/menus.png',
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
    <section className="py-16 relative overflow-hidden">
      {/* Background with design elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-blue-600/5 -translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-blue-600/5 translate-x-1/3 translate-y-1/3"></div>
        <motion.div 
          className="absolute top-20 right-10 w-6 h-6 rounded-full bg-blue-300/30"
          animate={{ 
            y: [0, 15, 0],
            opacity: [0.5, 0.8, 0.5] 
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-40 left-10 w-4 h-4 rounded-full bg-purple-300/30"
          animate={{ 
            y: [0, -10, 0],
            opacity: [0.3, 0.7, 0.3] 
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-[linear-gradient(to_right,#8884_1px,transparent_1px),linear-gradient(to_bottom,#8884_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            <span className="text-blue-600">CREATIVE SOLUTIONS</span>
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">DESIGN SERVICES</h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We blend creativity with strategy to design materials that capture attention and communicate your message at affordable prices.
          </p>
        </motion.div>
        
        {/* Services Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="relative group overflow-hidden"
              onMouseEnter={() => {setActiveService(service.id); setIsHovering(true);}}
              onMouseLeave={() => {setActiveService(null); setIsHovering(false);}}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div 
                className={`
                  rounded-xl overflow-hidden h-full bg-white shadow-md hover:shadow-xl 
                  transition-all duration-300 transform group-hover:scale-[1.02]
                  border border-gray-100 flex flex-col relative
                `}
              >
                {/* Spotlight effect */}
                <div 
                  className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                  style={getSpotlightStyle(service.id)}
                />
                
                {/* Card Header with Gradient Background */}
                <div className={`bg-gradient-to-r ${service.color} p-5 relative h-48`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative z-10">
                    <div className="p-2 bg-white/20 backdrop-blur-sm rounded-full inline-flex mb-3">
                      <div className="bg-white text-blue-600 rounded-full p-1.5">
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{service.title}</h3>
                    <div className="w-10 h-1 bg-white/50 rounded-full mb-2"></div>
                  </div>
                  
                  {/* Floating design elements */}
                  <motion.div 
                    className="absolute top-2 right-2 w-20 h-20 text-white/10"
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                      <path d="M46.5,-77.5C59.2,-71.3,68.5,-57.6,74.5,-43.1C80.5,-28.5,83.2,-13.3,81.5,1C79.8,15.3,73.7,28.5,65.2,39.7C56.7,50.9,45.7,59.9,33.4,66.9C21.1,73.9,7.4,78.8,-5.6,76.6C-18.6,74.4,-31,65.1,-40.2,54.6C-49.5,44.1,-55.5,32.4,-62.5,19.1C-69.5,5.9,-77.5,-9,-75.1,-21.9C-72.7,-34.9,-60,-45.9,-46.4,-51.6C-32.8,-57.3,-18.4,-57.8,-2.2,-60C14,-62.2,28,-63.1,41.4,-65.8C54.9,-68.6,67.9,-74.1,81.3,-74.7" transform="translate(100 100)" />
                    </svg>
                  </motion.div>
                </div>
                
                {/* Card Content */}
                <div className="p-5 flex-grow flex flex-col">
                  <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
                  <Link 
                    href={service.link} 
                    className="
                      text-sm font-medium inline-flex items-center
                      text-blue-600 hover:text-blue-800 transition-colors
                      group-hover:underline
                    "
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* CTA Section */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="inline-block mb-6">
            <div className="flex items-center justify-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
              <span className="bg-blue-600 w-2 h-2 rounded-full animate-pulse"></span>
              <span className="text-blue-600 font-medium text-sm">Starting from just €49</span>
            </div>
          </div>
          
          <Link 
            href="/services/design" 
            className="
              relative inline-flex items-center justify-center px-8 py-3.5
              overflow-hidden font-medium text-white bg-blue-600 rounded-lg
              group hover:bg-blue-700 transition-all duration-300
              shadow-md hover:shadow-lg
            "
          >
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative font-semibold">View Design Portfolio</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default DesignServices; 