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
      name: 'Rajesh Kumar',
      position: 'CEO & Founder',
      bio: 'Rajesh has over 20 years of experience in the packaging industry and founded PrintNPack with a vision to create sustainable packaging solutions.',
      imageSrc: '/images/team/placeholder.svg'
    },
    {
      name: 'Priya Sharma',
      position: 'Creative Director',
      bio: 'With a background in design, Priya leads our creative team to develop innovative and eye-catching packaging designs for our clients.',
      imageSrc: '/images/team/placeholder.svg'
    },
    {
      name: 'Amit Patel',
      position: 'Operations Manager',
      bio: 'Amit ensures that all production processes run smoothly and efficiently, maintaining our high standards of quality and timely delivery.',
      imageSrc: '/images/team/placeholder.svg'
    },
    {
      name: 'Sunita Reddy',
      position: 'Sustainability Officer',
      bio: 'Sunita oversees our eco-friendly initiatives and ensures that our production processes and materials meet the highest environmental standards.',
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
        <title>About Us - PrintNPack Packaging Solutions</title>
        <meta 
          name="description" 
          content="Learn about PrintNPack's journey, our commitment to sustainable packaging, and the team behind our innovative solutions." 
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

      {/* Our Story Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/about/history.svg"
                  alt="PrintNPack Company History"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
              <div className="w-20 h-1 bg-blue-600 mb-6"></div>
              <p className="text-gray-600 mb-4">
                Founded in 2010, PrintNPack began as a small family-owned business with a vision to revolutionize the packaging industry in Ireland. What started as a modest operation has now grown into one of the leading packaging solution providers in the country.
              </p>
              <p className="text-gray-600 mb-4">
                Our journey began when our founder, Rajesh Kumar, recognized the need for high-quality, sustainable packaging solutions in the Irish market. With an initial focus on food packaging, we quickly expanded our product range to serve various industries.
              </p>
              <p className="text-gray-600 mb-4">
                Today, PrintNPack operates a state-of-the-art manufacturing facility in Dublin, equipped with the latest technology to produce innovative packaging solutions. Our team of experienced professionals works tirelessly to deliver products that meet the highest standards of quality and sustainability.
              </p>
              <p className="text-gray-600">
                We take pride in our ability to combine traditional craftsmanship with modern technology, creating packaging solutions that not only protect products but also enhance brand value and customer experience.
              </p>
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
              <div className="text-4xl font-bold mb-2">12+</div>
              <div className="text-xl">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-xl">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50M+</div>
              <div className="text-xl">Products Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-xl">Team Members</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Elevate Your Packaging?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Partner with PrintNPack for innovative, sustainable, and high-quality packaging solutions tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md text-lg font-medium transition-colors">
                Contact Us
              </Link>
              <Link href="/products" className="border border-blue-600 text-blue-600 hover:bg-blue-50 py-3 px-6 rounded-md text-lg font-medium transition-colors">
                Explore Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage; 