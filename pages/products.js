import React from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

// Product data
const products = [
  {
    id: 'pizza-boxes',
    name: 'Pizza Boxes',
    category: 'Food Packaging',
    description: 'Premium pizza boxes that keep your food hot and enhance your brand image.',
    features: [
      'Made from food-grade materials',
      'Custom printing options',
      'Stackable design for easy storage',
      'Available in various sizes',
      'Fast turnaround times'
    ],
    imageSrc: '/images/hero/pizza-box.svg'
  },
  {
    id: 'paper-bags',
    name: 'Paper Bags',
    category: 'Retail Packaging',
    description: 'Eco-friendly paper bags that elevate your brand and customer experience.',
    features: [
      'Sustainable kraft paper options',
      'Custom handles and closures',
      'Reinforced bottom for durability',
      'Multiple size options',
      'Bulk order discounts'
    ],
    imageSrc: '/images/hero/paper-bag.svg'
  },
  {
    id: 'burger-boxes',
    name: 'Burger Boxes',
    category: 'Food Packaging',
    description: 'Sustainable and sturdy burger boxes perfect for takeaway and food delivery.',
    features: [
      'Made from bagasse (sugarcane fiber)',
      'Oil and water resistant',
      'Microwave safe options',
      'Biodegradable and compostable',
      'Custom branding available'
    ],
    imageSrc: '/images/hero/burger-box.svg'
  },
  {
    id: 'marketing-materials',
    name: 'Marketing Materials',
    category: 'Promotional',
    description: 'High-quality printed materials to promote your business and generate leads.',
    features: [
      'Flyers and leaflets',
      'Brochures and catalogs',
      'Business cards',
      'Posters and banners',
      'Same-day printing available'
    ],
    imageSrc: '/images/hero/leaflet.svg'
  },
  {
    id: 'napkins',
    name: 'Custom Napkins',
    category: 'Food Service',
    description: 'Premium napkins with your branding that enhance the dining experience.',
    features: [
      'Multiple ply options',
      'Eco-friendly materials',
      'Full-color printing',
      'Various folding styles',
      'Fast production times'
    ],
    imageSrc: '/images/hero/napkin.svg'
  },
  {
    id: 'corrugated-boxes',
    name: 'Corrugated Boxes',
    category: 'Shipping',
    description: 'Durable corrugated boxes for shipping and storage needs.',
    features: [
      'Custom sizes and strength options',
      'Sustainable materials',
      'Printed branding options',
      'Bulk order discounts',
      'Fast production times'
    ],
    imageSrc: '/images/hero/pizza-box.svg' // Placeholder
  },
];

const ProductsPage = () => {
  return (
    <Layout>
      <Head>
        <title>Products - PrintNPack Premium Packaging Solutions</title>
        <meta 
          name="description" 
          content="Explore PrintNPack's range of premium packaging solutions including food containers, retail bags, marketing materials and more." 
        />
      </Head>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="absolute inset-0 bg-particles opacity-20"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Product Range</h1>
            <p className="text-xl mb-8">
              High-quality packaging solutions designed to help your business stand out
            </p>
            <div className="w-24 h-1 bg-white mx-auto rounded"></div>
          </div>
        </div>
      </div>

      {/* Filter Bar (future enhancement) */}
      <div className="bg-gray-100 py-4 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between">
            <div className="text-lg font-medium text-gray-700 mb-2 md:mb-0">
              Showing all <span className="text-blue-700">{products.length}</span> products
            </div>
            <div className="flex space-x-2">
              <span className="text-gray-600">Sort by:</span>
              <select className="bg-white border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Popularity</option>
                <option>Newest first</option>
                <option>Price: Low to high</option>
                <option>Price: High to low</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1 duration-300">
              <div className="relative h-56 bg-blue-50">
                <Image
                  src={product.imageSrc}
                  alt={product.name}
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-blue-600 bg-blue-50 last:mr-0 mr-1">
                  {product.category}
                </span>
                <h2 className="text-xl font-bold mt-3 mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <ul className="mb-6 text-sm text-gray-700">
                  {product.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-center mb-1">
                      <svg className="h-4 w-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                  <Link href={`/products/${product.id}`} className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                    View Details
                  </Link>
                  <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors">
                    Request Quote
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Packaging Solution?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            We specialize in creating custom packaging solutions tailored to your specific requirements.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50 transition duration-200">
            Contact Our Design Team
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default ProductsPage; 