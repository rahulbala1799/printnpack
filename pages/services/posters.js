import React from 'react';
import Layout from '../../components/layout/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const PostersPage = () => {
  return (
    <Layout>
      <Head>
        <title>Professional Poster Design & Printing Services | Print n Pack</title>
        <meta name="description" content="Transform your message into eye-catching posters. Professional poster design and printing services for events, promotions, and branding in Ireland. High-quality, fast turnaround." />
        <meta name="keywords" content="poster printing, poster design, event posters, promotional posters, business posters, Dublin posters, Ireland poster printing" />
        <meta property="og:title" content="Professional Poster Design & Printing Services | Print n Pack" />
        <meta property="og:description" content="Transform your message into eye-catching posters. Professional poster design and printing services for events, promotions, and branding in Ireland." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.printnpack.ie/services/posters" />
        <link rel="canonical" href="https://www.printnpack.ie/services/posters" />
      </Head>

      <div className="bg-gradient-to-b from-blue-50 to-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Professional Poster Design & Printing Services</h1>
            <p className="text-xl text-gray-600 mb-8">Create stunning posters that capture attention and deliver your message with impact. Our professional poster design and printing services help your business stand out.</p>
            
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Our Poster Services?</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">High-Quality Materials</h3>
                <p className="text-gray-600">We use premium paper stocks and inks to ensure your posters look professional and last longer.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Professional Design</h3>
                <p className="text-gray-600">Our experienced designers create eye-catching layouts that effectively communicate your message.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Quick Turnaround</h3>
                <p className="text-gray-600">Fast printing and delivery services to meet your deadlines without compromising quality.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Custom Sizes</h3>
                <p className="text-gray-600">Available in various sizes to suit your needs, from A4 to large format posters.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Poster Services Include:</h2>
            
            <ul className="space-y-4 mb-12">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Event promotion posters</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Business advertising posters</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Retail display posters</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Exhibition and trade show posters</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Educational and informational posters</span>
              </li>
            </ul>

            <div className="bg-gray-50 p-8 rounded-xl mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Order Your Posters?</h2>
              <p className="text-gray-600 mb-6">Contact us today to discuss your poster requirements or get a quote. Our team is ready to help you create the perfect posters for your needs.</p>
              
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

export default PostersPage; 