import React from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FaLeaf, FaRecycle, FaAward, FaIndustry, FaUsers, FaHandshake } from 'react-icons/fa';

const AboutPage = () => {
  // Team members data
  const teamMembers = [
    {
      name: 'James Murphy',
      position: 'CEO & Founder',
      bio: 'With over 20 years of experience in the packaging industry, James founded PrintNPack to revolutionize food packaging in Ireland with a focus on quality and sustainability.',
      imageSrc: '/images/team/placeholder.svg'
    },
    {
      name: 'Sarah O\'Connor',
      position: 'Creative Director',
      bio: 'Sarah brings extensive design expertise to create innovative packaging solutions that help Irish businesses stand out while maintaining product integrity and brand identity.',
      imageSrc: '/images/team/placeholder.svg'
    },
    {
      name: 'Michael Byrne',
      position: 'Operations Manager',
      bio: 'Michael oversees our Dublin facility, ensuring efficient production and our unique weekly delivery system operates smoothly to meet our clients\' tight deadlines.',
      imageSrc: '/images/team/placeholder.svg'
    },
    {
      name: 'Emma Ryan',
      position: 'Sustainability Lead',
      bio: 'Emma champions our eco-friendly initiatives, sourcing sustainable materials and developing packaging solutions that minimize environmental impact without compromising performance.',
      imageSrc: '/images/team/placeholder.svg'
    }
  ];

  // Core values
  const coreValues = [
    {
      icon: <FaLeaf className="h-6 w-6 text-green-500" />,
      title: 'Sustainability',
      description: 'We are committed to minimizing our environmental impact through sustainable practices and materials.'
    },
    {
      icon: <FaAward className="h-6 w-6 text-yellow-500" />,
      title: 'Quality',
      description: 'We maintain the highest standards of quality in all our products and services.'
    },
    {
      icon: <FaUsers className="h-6 w-6 text-blue-500" />,
      title: 'Customer Focus',
      description: "Our customers' needs and satisfaction are at the center of everything we do."
    },
    {
      icon: <FaRecycle className="h-6 w-6 text-green-600" />,
      title: 'Innovation',
      description: 'We continuously explore new materials, designs, and processes to stay ahead of the curve.'
    },
    {
      icon: <FaIndustry className="h-6 w-6 text-gray-600" />,
      title: 'Efficiency',
      description: 'We optimize our operations to deliver cost-effective solutions without compromising quality.'
    },
    {
      icon: <FaHandshake className="h-6 w-6 text-blue-600" />,
      title: 'Integrity',
      description: 'We conduct our business with honesty, transparency, and ethical practices.'
    }
  ];

  return (
    <Layout>
      <Head>
        <title>About PrintNPack | Custom Pizza Boxes & Paper Bags in Ireland</title>
        <meta 
          name="description" 
          content="PrintNPack offers premium printed pizza boxes, paper bags & burger boxes in Ireland with low MOQs, fast lead times & weekly deliveries. Affordable food packaging solutions." 
        />
        <meta
          name="keywords"
          content="pizza boxes Ireland, printed paper bags, burger boxes, food packaging Dublin, low MOQ packaging, fast turnaround packaging, weekly printed packaging delivery, Irish packaging manufacturer"
        />
      </Head>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="absolute inset-0 bg-particles opacity-20"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About PrintNPack</h1>
            <p className="text-xl mb-8">
              Your trusted partner for innovative and sustainable packaging solutions
            </p>
            <div className="w-24 h-1 bg-white mx-auto rounded"></div>
          </div>
        </div>
      </div>

      {/* About PrintNPack Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">About PrintNPack</h2>
            <div className="w-20 h-1 bg-blue-600 mb-6"></div>
            
            <p className="text-gray-700 text-lg mb-6">
              PrintNPack is Ireland's premier packaging specialist, delivering high-quality <strong>printed pizza boxes</strong>, <strong>custom paper bags</strong>, and <strong>burger boxes</strong> with industry-leading turnaround times. Based in Dublin, we've revolutionized the Irish packaging industry by offering <strong>low minimum order quantities</strong> that make professional packaging accessible to businesses of all sizes.
            </p>
            
            <p className="text-gray-700 text-lg mb-6">
              What sets us apart is our unique <strong>weekly printed packaging delivery service</strong> – a first in Ireland. This innovative approach allows our clients to maintain minimal inventory while ensuring they never run out of essential packaging supplies. From family-owned restaurants to national chains, businesses across Ireland rely on our <strong>fast lead times</strong> and competitive pricing.
            </p>
            
            <p className="text-gray-700 text-lg mb-6">
              Our manufacturing facility combines cutting-edge digital printing technology with sustainable materials, allowing us to produce <strong>eco-friendly food packaging</strong> that performs as well as it looks. We've optimized our production processes to offer some of the <strong>most affordable custom packaging in Ireland</strong> without compromising on quality.
            </p>
            
            <p className="text-gray-700 text-lg mb-6">
              Whether you need <strong>branded pizza boxes</strong> delivered next week, <strong>custom printed paper bags</strong> for your business, or a reliable partner for all your <strong>food packaging solutions</strong>, PrintNPack delivers superior products, exceptional value, and unmatched convenience.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="text-xl font-bold text-blue-800 mb-2">Low MOQ</h3>
                <p className="text-gray-700">Custom printed packaging accessible to businesses of all sizes with low minimum order quantities.</p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="text-xl font-bold text-blue-800 mb-2">Fast Turnaround</h3>
                <p className="text-gray-700">Industry-leading production times with our unique weekly delivery service for printed packaging.</p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="text-xl font-bold text-blue-800 mb-2">Irish Made</h3>
                <p className="text-gray-700">Proudly manufacturing quality food packaging solutions in Ireland for Irish businesses.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission & Vision</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-4">
                To provide innovative, eco-friendly packaging solutions that help businesses thrive while minimizing environmental impact. We are committed to delivering products that meet the highest standards of quality, functionality, and design.
              </p>
              <p className="text-gray-600">
                We aim to be a catalyst for positive change in the packaging industry by promoting sustainable practices and educating our clients about the importance of responsible packaging choices.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Our Vision</h3>
              <p className="text-gray-600 mb-4">
                To become the leading provider of sustainable packaging solutions in Ireland and beyond, recognized for our innovation, quality, and commitment to environmental stewardship.
              </p>
              <p className="text-gray-600">
                We envision a future where all packaging is designed with both performance and planet in mind, and we are dedicated to making this vision a reality through continuous improvement and technological advancement.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide our decisions and actions as we strive to deliver exceptional packaging solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="rounded-full bg-blue-50 p-3 mr-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{value.title}</h3>
                </div>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate professionals behind PrintNPack's success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64 bg-blue-50">
                  <Image
                    src={member.imageSrc}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                  <p className="text-blue-600 mb-4">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">7 Days</div>
              <div className="text-xl">Average Lead Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">1,000+</div>
              <div className="text-xl">Irish Businesses Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">52</div>
              <div className="text-xl">Weekly Deliveries Per Year</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100</div>
              <div className="text-xl">MOQ for Custom Printing</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Need Custom Pizza Boxes or Paper Bags Fast?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join over 1,000 Irish businesses that rely on PrintNPack's weekly delivery service for high-quality printed packaging with low minimum orders and industry-leading turnaround times.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <div className="bg-gray-100 px-6 py-3 rounded-lg text-center">
                <span className="block text-2xl font-bold text-blue-600">7 Day</span>
                <span className="text-gray-700">Standard Delivery</span>
              </div>
              <div className="bg-gray-100 px-6 py-3 rounded-lg text-center">
                <span className="block text-2xl font-bold text-blue-600">100 Units</span>
                <span className="text-gray-700">Minimum Order</span>
              </div>
              <div className="bg-gray-100 px-6 py-3 rounded-lg text-center">
                <span className="block text-2xl font-bold text-blue-600">Weekly</span>
                <span className="text-gray-700">Delivery Schedule</span>
              </div>
            </div>
            <Link 
              href="/contact" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage; 