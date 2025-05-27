import React from 'react';
import Layout from '../../components/layout/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const VinylsPage = () => {
  return (
    <Layout>
      <Head>
        <title>Custom Vinyl Graphics & Decals | Print n Pack Ireland</title>
        <meta name="description" content="Professional vinyl graphics and decals for any surface. Custom designs, vehicle wraps, window graphics, and signage solutions in Ireland. Durable materials, expert installation." />
        <meta name="keywords" content="vinyl graphics, custom decals, vehicle wraps, window graphics, wall decals, business signage, Ireland vinyl printing" />
        <meta property="og:title" content="Custom Vinyl Graphics & Decals | Print n Pack Ireland" />
        <meta property="og:description" content="Professional vinyl graphics and decals for any surface. Custom designs, vehicle wraps, window graphics, and signage solutions in Ireland." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.printnpack.ie/services/vinyls" />
        <link rel="canonical" href="https://www.printnpack.ie/services/vinyls" />
      </Head>

      <div className="bg-gradient-to-b from-blue-50 to-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Custom Vinyl Graphics & Decals</h1>
            <p className="text-xl text-gray-600 mb-8">Transform any surface with our high-quality vinyl graphics and decals. From vehicle wraps to window displays, we create custom solutions that make your business stand out.</p>
            
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Our Vinyl Services?</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Premium Materials</h3>
                <p className="text-gray-600">We use high-quality vinyl materials that are durable, weather-resistant, and built to last.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Expert Installation</h3>
                <p className="text-gray-600">Our professional team ensures precise installation for a perfect finish every time.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Custom Design</h3>
                <p className="text-gray-600">From concept to creation, we work with you to design vinyl graphics that match your vision.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Versatile Applications</h3>
                <p className="text-gray-600">Suitable for vehicles, windows, walls, floors, and more - if there's a surface, we can wrap it.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Vinyl Services Include:</h2>
            
            <ul className="space-y-4 mb-12">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Vehicle wraps and graphics</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Window graphics and frosting</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Wall decals and murals</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Floor graphics and signage</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Business signage and branding</span>
              </li>
            </ul>

            <div className="bg-gray-50 p-8 rounded-xl mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Space?</h2>
              <p className="text-gray-600 mb-6">Contact us today to discuss your vinyl graphics requirements or get a quote. Our team is ready to help bring your vision to life.</p>
              
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

export default VinylsPage; 