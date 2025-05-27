import React from 'react';
import Layout from '../../components/layout/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const MenusPage = () => {
  return (
    <Layout>
      <Head>
        <title>Professional Menu Design & Printing Services | Print n Pack</title>
        <meta name="description" content="Create appetizing menu designs that showcase your offerings. Professional menu design and printing services for restaurants, cafes, and food businesses in Ireland." />
        <meta name="keywords" content="menu printing, restaurant menus, cafe menus, food menu design, takeaway menus, Ireland menu printing" />
        <meta property="og:title" content="Professional Menu Design & Printing Services | Print n Pack" />
        <meta property="og:description" content="Create appetizing menu designs that showcase your offerings. Professional menu design and printing services for restaurants, cafes, and food businesses in Ireland." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.printnpack.ie/services/menus" />
        <link rel="canonical" href="https://www.printnpack.ie/services/menus" />
      </Head>

      <div className="bg-gradient-to-b from-blue-50 to-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Professional Menu Design & Printing</h1>
            <p className="text-xl text-gray-600 mb-8">Create appetizing menus that showcase your culinary offerings. Our professional design and printing services help your food business make a lasting impression.</p>
            
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Our Menu Services?</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Expert Design</h3>
                <p className="text-gray-600">Our designers create visually appealing menus that highlight your dishes and enhance your brand.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Quality Materials</h3>
                <p className="text-gray-600">Durable, food-safe materials that withstand daily use and maintain their professional appearance.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Customization</h3>
                <p className="text-gray-600">Tailored designs that match your restaurant's style and brand identity.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Quick Service</h3>
                <p className="text-gray-600">Fast turnaround times to ensure you have your menus when you need them.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Menu Services Include:</h2>
            
            <ul className="space-y-4 mb-12">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Restaurant table menus</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Takeaway menus</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Cafe and bistro menus</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Drinks and wine lists</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Special event and seasonal menus</span>
              </li>
            </ul>

            <div className="bg-gray-50 p-8 rounded-xl mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Create Your Menu?</h2>
              <p className="text-gray-600 mb-6">Contact us today to discuss your menu requirements or get a quote. Our team is ready to help you create menus that showcase your culinary offerings.</p>
              
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

export default MenusPage; 