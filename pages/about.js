import React from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { FaLeaf, FaRecycle, FaAward, FaIndustry, FaUsers, FaHandshake } from 'react-icons/fa';

const AboutPage = () => {
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
        <title>About PrintNPack | Printing &amp; Packaging in Ashbourne, Meath</title>
        <meta name="description" content="PrintNPack is an Irish-owned printing & packaging company based in Ashbourne, Co. Meath. Custom pizza boxes, paper bags, banners, stickers & more — nationwide delivery." />
        <link rel="canonical" href="https://www.printnpack.ie/about" />
        <meta property="og:title" content="About PrintNPack | Ashbourne, Co. Meath" />
        <meta property="og:url" content="https://www.printnpack.ie/about" />
      </Head>

      {/* Hero Section */}
      <div className="relative bg-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 opacity-90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About PrintNPack — Ashbourne, Co. Meath</h1>
            <p className="text-xl text-blue-100">
              Your trusted partner for innovative and sustainable packaging solutions
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">About PrintNPack</h2>
            <div className="w-20 h-1 bg-blue-600 mb-6"></div>
            
            <p className="text-gray-700 text-lg mb-6">
              PrintNPack is Ireland&apos;s premier packaging and print specialist, delivering high-quality <strong>printed pizza boxes</strong>, <strong>custom paper bags</strong>, and <strong>burger boxes</strong> with industry-leading turnaround times. Based in <strong>Ashbourne, Co. Meath</strong>, we serve businesses across Dublin, Meath, and all of Ireland with <strong>low minimum order quantities</strong> that make professional packaging accessible to businesses of all sizes.
            </p>
            
            <p className="text-gray-700 text-lg mb-6">
              What sets us apart is our unique <strong>weekly printed packaging delivery service</strong> – a first in Ireland. This innovative approach allows our clients to maintain minimal inventory while ensuring they never run out of essential packaging supplies. From family-owned restaurants to national chains, businesses across Ireland rely on our <strong>fast lead times</strong> and competitive pricing.
            </p>
            
            <p className="text-gray-700 text-lg mb-6">
              Our manufacturing facility combines cutting-edge digital printing technology with sustainable materials, allowing us to produce <strong>eco-friendly food packaging</strong> that performs as well as it looks. We've optimized our production processes to offer some of the <strong>most affordable custom packaging in Ireland</strong> without compromising on quality.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
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

      {/* Popular products */}
      <div className="py-12 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Popular products &amp; services</h2>
            <div className="grid sm:grid-cols-2 gap-3 text-sm">
              {[
                { href: '/custom-pizza-boxes-ireland', label: 'Custom Pizza Boxes Ireland' },
                { href: '/printed-flat-handle-bags-ireland', label: 'Printed Flat Handle Bags' },
                { href: '/vinyl-banners', label: 'Printed Banners Ireland' },
                { href: '/roll-up-banners', label: 'Pull Up Banners Meath' },
                { href: '/vinyl-stickers', label: 'Custom Vinyl Stickers' },
                { href: '/posters', label: 'Custom Posters Ireland' },
                { href: '/services/leaflets', label: 'Leaflets Ireland' },
                { href: '/contact', label: 'Printing Ashbourne — Contact Us' },
              ].map(({ href, label }) => (
                <Link key={href} href={href} className="text-blue-600 hover:underline font-medium">
                  {label} →
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join over 1,000 Irish businesses that trust PrintNPack for their packaging needs.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Get A Quote
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage; 