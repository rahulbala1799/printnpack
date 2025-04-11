import React from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { FaBoxOpen, FaShippingFast, FaPencilRuler, FaRecycle, FaChartLine, FaFileAlt } from 'react-icons/fa';

const ServicesPage = () => {
  const services = [
    {
      icon: <FaBoxOpen className="h-10 w-10 text-blue-600" />,
      title: 'Custom Packaging Design',
      description: 'Our team of expert designers will work closely with you to create packaging solutions that perfectly align with your brand identity and product requirements. From concept to execution, we ensure your packaging stands out on the shelf.',
      features: [
        'Brand-aligned packaging solutions',
        'Full mockups and prototypes',
        'Material recommendations',
        'Structural and graphic design',
        'Eco-friendly options'
      ]
    },
    {
      icon: <FaPencilRuler className="h-10 w-10 text-blue-600" />,
      title: 'Print Services',
      description: 'We offer high-quality printing services using the latest technology to ensure vibrant colors, sharp details, and consistent quality across all your packaging materials.',
      features: [
        'Digital and offset printing',
        'Same-day printing available',
        'Full-color process printing',
        'Specialty finishes and coatings',
        'Bulk order discounts'
      ]
    },
    {
      icon: <FaShippingFast className="h-10 w-10 text-blue-600" />,
      title: 'Packaging Production',
      description: 'From small batches to large-scale production runs, our manufacturing capabilities can accommodate your packaging needs with quick turnaround times and consistent quality.',
      features: [
        'Flexible production volumes',
        'Fast turnaround times',
        'Quality control at every stage',
        'Food-grade certified manufacturing',
        'Competitive pricing'
      ]
    },
    {
      icon: <FaRecycle className="h-10 w-10 text-blue-600" />,
      title: 'Sustainable Solutions',
      description: 'We are committed to environmental responsibility and offer a wide range of sustainable packaging options that minimize environmental impact without compromising on quality or functionality.',
      features: [
        'Biodegradable materials',
        'Recycled paper options',
        'Plastic-free alternatives',
        'Compostable packaging',
        'Carbon footprint reduction strategies'
      ]
    },
    {
      icon: <FaChartLine className="h-10 w-10 text-blue-600" />,
      title: 'Packaging Consultation',
      description: 'Our packaging experts provide tailored advice to help you make informed decisions about materials, designs, and production methods that meet your specific requirements and budget constraints.',
      features: [
        'Material selection guidance',
        'Cost optimization strategies',
        'Regulatory compliance support',
        'Supply chain optimization',
        'Packaging audit services'
      ]
    },
    {
      icon: <FaFileAlt className="h-10 w-10 text-blue-600" />,
      title: 'Packaging Logistics',
      description: 'We offer comprehensive packaging logistics services to streamline your supply chain and ensure efficient delivery of your packaging materials when and where you need them.',
      features: [
        'Inventory management',
        'Just-in-time delivery',
        'Warehousing solutions',
        'Distribution services',
        'Order tracking and reporting'
      ]
    }
  ];

  return (
    <Layout>
      <Head>
        <title>Services - PrintNPack Packaging Solutions</title>
        <meta 
          name="description" 
          content="Explore PrintNPack's comprehensive packaging services including custom design, printing, production, and sustainable solutions for businesses." 
        />
      </Head>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="absolute inset-0 bg-particles opacity-20"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl mb-8">
              Comprehensive packaging solutions to meet your business needs
            </p>
            <div className="w-24 h-1 bg-white mx-auto rounded"></div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Packaging Services That Deliver Results</h2>
            <p className="text-xl text-gray-600">
              We offer a comprehensive range of packaging services to help your business thrive
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="text-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <h4 className="font-semibold text-blue-600 mb-2">Key Features:</h4>
                <ul className="text-gray-600 space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">
              From concept to delivery, we follow a streamlined process to ensure your satisfaction
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
              
              {/* Process Steps */}
              <div className="space-y-12 md:space-y-0">
                {/* Step 1 */}
                <div className="relative md:flex items-center justify-between md:even:flex-row-reverse">
                  <div className="md:w-5/12"></div>
                  <div className="md:w-2/12 flex justify-center items-center">
                    <div className="bg-blue-600 rounded-full h-12 w-12 flex items-center justify-center text-white font-bold text-xl z-10">1</div>
                  </div>
                  <div className="md:w-5/12 bg-white p-6 rounded-lg shadow-md border border-gray-100 mt-4 md:mt-0">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Consultation & Discovery</h3>
                    <p className="text-gray-600">We begin by understanding your product, brand, and specific packaging requirements to develop a tailored solution.</p>
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="relative md:flex items-center justify-between md:even:flex-row-reverse">
                  <div className="md:w-5/12 bg-white p-6 rounded-lg shadow-md border border-gray-100 mt-4 md:mt-0">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Design & Prototyping</h3>
                    <p className="text-gray-600">Our design team creates concepts and prototypes for your approval, ensuring the packaging meets your expectations.</p>
                  </div>
                  <div className="md:w-2/12 flex justify-center items-center">
                    <div className="bg-blue-600 rounded-full h-12 w-12 flex items-center justify-center text-white font-bold text-xl z-10">2</div>
                  </div>
                  <div className="md:w-5/12"></div>
                </div>
                
                {/* Step 3 */}
                <div className="relative md:flex items-center justify-between md:even:flex-row-reverse">
                  <div className="md:w-5/12"></div>
                  <div className="md:w-2/12 flex justify-center items-center">
                    <div className="bg-blue-600 rounded-full h-12 w-12 flex items-center justify-center text-white font-bold text-xl z-10">3</div>
                  </div>
                  <div className="md:w-5/12 bg-white p-6 rounded-lg shadow-md border border-gray-100 mt-4 md:mt-0">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Production & Quality Control</h3>
                    <p className="text-gray-600">We manufacture your packaging materials with rigorous quality control at every stage of production.</p>
                  </div>
                </div>
                
                {/* Step 4 */}
                <div className="relative md:flex items-center justify-between md:even:flex-row-reverse">
                  <div className="md:w-5/12 bg-white p-6 rounded-lg shadow-md border border-gray-100 mt-4 md:mt-0">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Delivery & Support</h3>
                    <p className="text-gray-600">We deliver your packaging on time and provide ongoing support to ensure your continued satisfaction.</p>
                  </div>
                  <div className="md:w-2/12 flex justify-center items-center">
                    <div className="bg-blue-600 rounded-full h-12 w-12 flex items-center justify-center text-white font-bold text-xl z-10">4</div>
                  </div>
                  <div className="md:w-5/12"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  <span>★★★★★</span>
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">"PrintNPack delivered exceptional packaging solutions for our food products. Their attention to detail and commitment to quality has helped us enhance our brand image significantly."</p>
              <div className="flex items-center">
                <div className="rounded-full bg-blue-100 h-12 w-12 flex items-center justify-center text-blue-600 font-bold">SK</div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-800">Sanjay Kumar</h4>
                  <p className="text-gray-500 text-sm">CEO, Tasty Treats</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  <span>★★★★★</span>
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">"We've been working with PrintNPack for over 5 years now. Their sustainable packaging solutions have not only reduced our environmental footprint but also resonated well with our eco-conscious customers."</p>
              <div className="flex items-center">
                <div className="rounded-full bg-blue-100 h-12 w-12 flex items-center justify-center text-blue-600 font-bold">AM</div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-800">Anita Mehta</h4>
                  <p className="text-gray-500 text-sm">Marketing Director, GreenLife</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  <span>★★★★★</span>
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">"Their same-day printing service has been a game-changer for our business. PrintNPack consistently delivers high-quality marketing materials on tight deadlines, helping us respond quickly to market opportunities."</p>
              <div className="flex items-center">
                <div className="rounded-full bg-blue-100 h-12 w-12 flex items-center justify-center text-blue-600 font-bold">VP</div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-800">Vijay Patel</h4>
                  <p className="text-gray-500 text-sm">Owner, Quick Commerce</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Packaging?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your packaging needs and discover how our services can help your business grow.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/contact" className="bg-white text-blue-700 hover:bg-gray-100 py-3 px-6 rounded-md text-lg font-medium transition-colors">
              Get in Touch
            </Link>
            <Link href="/products" className="border border-white text-white hover:bg-white/10 py-3 px-6 rounded-md text-lg font-medium transition-colors">
              Explore Products
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ServicesPage; 