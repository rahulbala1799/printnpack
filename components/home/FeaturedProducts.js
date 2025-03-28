import React from 'react';
import Link from 'next/link';

const ProductCard = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      {/* Replace with actual image in production */}
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <span className="text-gray-500">{imageUrl}</span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-blue-900">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link href={`/products/${title.toLowerCase().replace(/\s+/g, '-')}`} className="text-blue-700 font-medium hover:text-blue-800">
          Learn More →
        </Link>
      </div>
    </div>
  );
};

const FeaturedProducts = () => {
  const products = [
    {
      title: "Cardboard Boxes",
      description: "High-quality cardboard boxes available in various sizes and strengths for all your shipping needs.",
      imageUrl: "Cardboard Box Image",
    },
    {
      title: "Custom Printed Boxes",
      description: "Showcase your brand with custom printed packaging that makes a lasting impression.",
      imageUrl: "Custom Box Image",
    },
    {
      title: "Eco-Friendly Packaging",
      description: "Sustainable packaging solutions that are kind to the environment without compromising on quality.",
      imageUrl: "Eco-Friendly Package Image",
    },
    {
      title: "Protective Packaging",
      description: "Keep your products safe with our range of protective packaging materials and solutions.",
      imageUrl: "Protective Package Image",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most popular packaging solutions designed to meet your business needs.
            Quality, durability, and sustainability are at the core of everything we offer.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/products" className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition duration-300">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts; 