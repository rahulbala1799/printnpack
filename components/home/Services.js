import React from 'react';
import { FaBox, FaPrint, FaLeaf, FaShippingFast, FaPencilRuler } from 'react-icons/fa';
import Link from 'next/link';

const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 border-t-4 border-blue-700">
      <div className="text-blue-700 mb-4">
        <Icon size={40} />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-blue-900">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link 
        href={`/services/${title.toLowerCase().replace(/\s+/g, '-')}`} 
        className="text-blue-700 font-medium hover:text-blue-800"
      >
        Learn More →
      </Link>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: FaBox,
      title: "Packaging Solutions",
      description: "Comprehensive packaging solutions tailored to your product specifications and brand requirements.",
    },
    {
      icon: FaPrint,
      title: "Custom Printing",
      description: "High-quality printing services to make your packaging stand out with your unique brand identity.",
    },
    {
      icon: FaLeaf,
      title: "Eco-Friendly Options",
      description: "Sustainable packaging alternatives that reduce environmental impact without compromising quality.",
    },
    {
      icon: FaShippingFast,
      title: "Bulk Orders",
      description: "Efficient handling of large volume orders with competitive pricing and timely delivery.",
    },
    {
      icon: FaPencilRuler,
      title: "Custom Design",
      description: "Expert design services to create packaging that perfectly fits your product and enhances brand appeal.",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of packaging and printing services to meet all your business needs.
            From concept to delivery, we ensure quality at every step.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/services" className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition duration-300">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services; 