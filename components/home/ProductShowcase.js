import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ProductShowcase = () => {
  // Product data
  const products = [
    {
      id: 'pizza-boxes',
      name: 'Pizza Boxes',
      description: 'Premium pizza boxes that keep your food hot and enhance your brand image.',
      features: ['Custom branding', 'Heat retention', 'Eco-friendly options'],
      imageSrc: '/images/hero/pizza-box.png',
      textColor: 'text-red-600'
    },
    {
      id: 'paper-bags',
      name: 'Paper Bags',
      description: 'Eco-friendly paper bags for retail and food delivery applications.',
      features: ['Customizable handles', 'Various sizes', 'Sustainable materials'],
      imageSrc: '/images/hero/paper-bag.png',
      textColor: 'text-green-600'
    },
    {
      id: 'burger-boxes',
      name: 'Burger Boxes',
      description: 'Sustainable and sturdy burger boxes perfect for takeaway and food delivery.',
      features: ['Grease-resistant', 'Ventilation options', 'Custom printing'],
      imageSrc: '/images/hero/burger-box.png',
      textColor: 'text-amber-600'
    },
    {
      id: 'marketing-materials',
      name: 'Marketing Materials',
      description: 'High-quality printed materials to promote your business and generate leads.',
      features: ['Flyers & leaflets', 'Brochures', 'Business cards'],
      imageSrc: '/images/hero/leaflet.png',
      textColor: 'text-blue-600'
    },
    {
      id: 'napkins',
      name: 'Napkins',
      description: 'Premium napkins with your branding that enhance the dining experience.',
      features: ['Multiple ply options', 'Custom printing', 'Eco-friendly options'],
      imageSrc: '/images/hero/napkin.png',
      textColor: 'text-purple-600'
    },
    {
      id: 'wide-format-printing',
      name: 'Wide Format Printing',
      description: 'Eye-catching large format prints for banners, posters, and promotional displays.',
      features: ['High resolution', 'Weather-resistant', 'Indoor & outdoor options'],
      imageSrc: '/images/hero/napkin.png',
      textColor: 'text-indigo-600'
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Our Products</h2>
          <p className="mt-2 text-xl text-gray-600">Explore our range of premium packaging solutions</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
              <div className="p-6">
                <div className="flex justify-center items-center h-40 mb-4">
                  {product.imageSrc ? (
                    <div className="relative w-full h-full">
                      <Image
                        src={product.imageSrc}
                        alt={product.name}
                        width={240}
                        height={240}
                        className="object-contain max-h-full drop-shadow-md transform scale-120"
                      />
                    </div>
                  ) : (
                    <div className={`text-6xl sm:text-8xl font-bold ${product.textColor} opacity-30`}>
                      {product.name.charAt(0)}
                    </div>
                  )}
                </div>
                <h3 className={`text-lg sm:text-xl font-bold ${product.textColor} text-center`}>{product.name}</h3>
                <p className="mt-2 text-sm sm:text-base text-gray-600 text-center">{product.description}</p>
                
                <ul className="mt-3 sm:mt-4 space-y-1 sm:space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start justify-center md:justify-start">
                      <svg className={`h-4 w-4 sm:h-5 sm:w-5 ${product.textColor} mr-1 sm:mr-2 mt-0.5 flex-shrink-0`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-5 sm:mt-6 flex justify-center space-x-3 sm:space-x-4">
                  <Link href={`/products/${product.id}`} className={`flex-1 text-center py-2 px-3 sm:px-4 border border-transparent rounded-md shadow-sm text-xs sm:text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 transition-colors duration-200`}>
                    Learn More
                  </Link>
                  <Link href="/contact" className={`flex-1 text-center py-2 px-3 sm:px-4 border border-gray-300 rounded-md shadow-sm text-xs sm:text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200`}>
                    Get Quote
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase; 