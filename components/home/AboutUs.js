import React from 'react';
import Link from 'next/link';
import { FaTrophy, FaUsers, FaRecycle } from 'react-icons/fa';

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="text-blue-600 mb-4">
        <Icon size={40} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const AboutUs = () => {
  const features = [
    {
      icon: FaTrophy,
      title: "Quality Excellence",
      description: "We pride ourselves on delivering the highest quality packaging solutions that meet international standards.",
    },
    {
      icon: FaUsers,
      title: "Customer Focused",
      description: "Our dedicated team works closely with clients to understand their unique needs and deliver personalized solutions.",
    },
    {
      icon: FaRecycle,
      title: "Sustainability",
      description: "We are committed to environmentally responsible practices and offering sustainable packaging alternatives.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
            {/* Replace with actual image in production */}
            <div className="rounded-lg bg-gray-200 h-80 flex items-center justify-center">
              <span className="text-gray-500">Company Image</span>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">About PrintNPack</h2>
            <p className="text-lg text-gray-600 mb-6">
              PrintNPack was founded in 2010 with a vision to become a 
              leader in providing innovative and sustainable packaging solutions for businesses across Ireland.
            </p>
            <p className="text-gray-600 mb-6">
              Our state-of-the-art facility in Chennai combined with our expert team allows us to deliver 
              high-quality products that meet the unique requirements of our diverse clientele, from small 
              businesses to large corporations.
            </p>
            <Link href="/about" className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition duration-300">
              Learn More About Us
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs; 