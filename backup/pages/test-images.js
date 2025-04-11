import React from 'react';
import Layout from '../components/layout/Layout';
import Image from 'next/image';
import Link from 'next/link';

const TestImages = () => {
  // Define test images from different paths
  const testImages = [
    {
      path: '/images/ifa/heroh/rollup/1.png',
      name: 'Roll-Up Banner 1'
    },
    {
      path: '/images/ifa/heroh/rollup/2.png',
      name: 'Roll-Up Banner 2'
    },
    {
      path: '/images/ifa/heroh/rollup/3.png',
      name: 'Roll-Up Banner 3'
    },
    {
      path: '/images/hero/paper-bag.svg',
      name: 'Paper Bag SVG'
    },
    {
      path: '/images/hero/paper-bag.png',
      name: 'Paper Bag PNG'
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Image Loading Test Page</h1>
        <p className="mb-8">This page tests image loading from different paths in the project.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testImages.map((img, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 bg-white shadow">
              <div className="relative h-64 mb-4 bg-gray-50">
                <Image
                  src={img.path}
                  alt={img.name}
                  fill
                  className="object-contain p-4"
                  priority={index < 2}
                />
              </div>
              <h3 className="font-semibold">{img.name}</h3>
              <p className="text-sm text-gray-600 mt-2">Path: {img.path}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Image Loading Troubleshooting</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Next.js Image component is using the configuration from next.config.js</li>
            <li>Images should be properly optimized and cached</li>
            <li>SVG files should be loaded with dangerouslyAllowSVG enabled</li>
            <li>All images should be properly contained within their containers</li>
          </ul>
          <div className="mt-4">
            <Link href="/products/roll-up-banner-stands" className="text-blue-600 font-medium">
              Go to Roll-Up Banner Stands page
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TestImages; 