import React from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { FaFileAlt, FaStickyNote, FaBookOpen, FaUtensils } from 'react-icons/fa';

export default function Services() {
  const services = [
    {
      icon: <FaFileAlt className="w-12 h-12 text-primary" />,
      title: "Posters",
      description: "Professional poster designs for events, promotions, and branding",
      link: "/services/design/posters"
    },
    {
      icon: <FaStickyNote className="w-12 h-12 text-primary" />,
      title: "Vinyls",
      description: "Custom vinyl graphics and decals for any surface",
      link: "/services/design/vinyls"
    },
    {
      icon: <FaBookOpen className="w-12 h-12 text-primary" />,
      title: "Leaflets",
      description: "Eye-catching leaflet designs that engage your audience",
      link: "/services/design/leaflets"
    },
    {
      icon: <FaUtensils className="w-12 h-12 text-primary" />,
      title: "Menus",
      description: "Appetizing menu designs that showcase your offerings",
      link: "/services/design/menus"
    }
  ];

  return (
    <Layout>
      <Head>
        <title>Our Services - PrintNPack</title>
        <meta name="description" content="Explore our range of professional printing and design services at PrintNPack." />
      </Head>

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of printing and design services to help your business stand out.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                {service.icon}
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h2>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link href={service.link}>
                <a className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                  Learn More
                </a>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            All our services are designed to help your business grow and succeed. We use the latest technology and industry best practices to ensure the highest quality results.
          </p>
        </div>
      </div>
    </Layout>
  );
} 