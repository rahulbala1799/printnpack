import React from 'react';
import Layout from '../../components/layout/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const LeafletsPage = () => {
  return (
    <Layout>
      <Head>
        <title>Professional Leaflet Design & Printing Services | Print n Pack</title>
        <meta name="description" content="Eye-catching leaflet design and printing services in Ireland. Create impactful marketing materials with our professional leaflet solutions. High-quality, fast turnaround." />
        <meta name="keywords" content="leaflet printing, flyer design, marketing materials, business flyers, promotional leaflets, Ireland printing services" />
        <meta property="og:title" content="Professional Leaflet Design & Printing Services | Print n Pack" />
        <meta property="og:description" content="Eye-catching leaflet design and printing services in Ireland. Create impactful marketing materials with our professional leaflet solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.printnpack.ie/services/leaflets" />
        <link rel="canonical" href="https://www.printnpack.ie/services/leaflets" />
      </Head>

      <div className="bg-gradient-to-b from-blue-50 to-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Professional Leaflet Design & Printing</h1>
            <p className="text-xl text-gray-600 mb-8">Create engaging leaflets that effectively communicate your message. Our professional design and printing services help you reach your target audience with impact.</p>
            
            <Link 
              href="/quote"
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get a Quote <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Our Leaflet Services?</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Professional Design</h3>
                <p className="text-gray-600">Our experienced designers create eye-catching layouts that engage your audience and drive action.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Quality Printing</h3>
                <p className="text-gray-600">High-quality paper stocks and premium inks ensure your leaflets look professional and make a lasting impression.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Fast Turnaround</h3>
                <p className="text-gray-600">Quick printing and delivery services to meet your marketing campaign deadlines.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Flexible Options</h3>
                <p className="text-gray-600">Choose from various sizes, paper types, and finishing options to suit your needs and budget.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Leaflet Services Include:</h2>
            
            <ul className="space-y-4 mb-12">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Marketing and promotional leaflets</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Product catalogues and brochures</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Event flyers and handouts</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Information leaflets and guides</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Direct mail and distribution materials</span>
              </li>
            </ul>

            <div className="bg-gray-50 p-8 rounded-xl mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Create Your Leaflets?</h2>
              <p className="text-gray-600 mb-6">Contact us today to discuss your leaflet requirements or get a quote. Our team is ready to help you create effective marketing materials.</p>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/quote"
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Request a Quote <FaArrowRight className="ml-2" />
                </Link>
                
                <Link 
                  href="/contact"
                  className="inline-flex items-center bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Contact Us <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LeafletsPage; 