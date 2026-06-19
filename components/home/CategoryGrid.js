import React from 'react';
import Link from 'next/link';
import {
  FaBoxOpen,
  FaShoppingBag,
  FaLeaf,
  FaPrint,
  FaUtensils,
  FaFileAlt,
  FaTags
} from 'react-icons/fa';

const categories = [
  {
    name: 'Food Packaging',
    description: 'Pizza boxes, burger boxes, grab bags',
    icon: FaUtensils,
    color: 'bg-orange-50 text-orange-600 border-orange-200',
    iconBg: 'bg-orange-100',
    href: '/pizza-boxes-ireland',
    productCount: 3,
  },
  {
    name: 'Retail Packaging',
    description: 'Flat handle, twisted handle & flat bags',
    icon: FaShoppingBag,
    color: 'bg-blue-50 text-blue-600 border-blue-200',
    iconBg: 'bg-blue-100',
    href: '/printed-flat-handle-bags-ireland',
    productCount: 3,
  },
  {
    name: 'Eco-Friendly',
    description: 'Sustainable bagasse packaging',
    icon: FaLeaf,
    color: 'bg-green-50 text-green-600 border-green-200',
    iconBg: 'bg-green-100',
    href: '/products?group=packaging&category=Eco-Friendly+Packaging',
    productCount: 1,
  },
  {
    name: 'Wide Format',
    description: 'Banners, boards, stickers, posters',
    icon: FaPrint,
    color: 'bg-purple-50 text-purple-600 border-purple-200',
    iconBg: 'bg-purple-100',
    href: '/products?group=wide-format',
    productCount: 6,
  },
  {
    name: 'Leaflets & Flyers',
    description: 'A3, A4, A5, A6 leaflets & flyers',
    icon: FaFileAlt,
    color: 'bg-sky-50 text-sky-600 border-sky-200',
    iconBg: 'bg-sky-100',
    href: '/products?group=leaflets',
    productCount: 4,
  },
  {
    name: 'Hospitality',
    description: 'Napkins & branded items',
    icon: FaBoxOpen,
    color: 'bg-amber-50 text-amber-600 border-amber-200',
    iconBg: 'bg-amber-100',
    href: '/products?group=packaging&category=Hospitality+Products',
    productCount: 2,
  },
];

const CategoryGrid = () => {
  return (
    <section className="py-8 sm:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
            Browse by Category
          </h2>
          <p className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-500">
            Find exactly what you need for your business
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-4">
          {categories.map((cat) => {
            const IconComponent = cat.icon;
            return (
              <Link
                key={cat.name}
                href={cat.href}
                className={`group flex flex-col items-center p-3 sm:p-5 rounded-xl border ${cat.color} hover:shadow-md transition-all duration-200 hover:-translate-y-0.5`}
              >
                <div className={`w-9 h-9 sm:w-12 sm:h-12 rounded-xl ${cat.iconBg} flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-110 transition-transform`}>
                  <IconComponent className="w-4 h-4 sm:w-6 sm:h-6" />
                </div>
                <h3 className="font-semibold text-[10px] sm:text-sm text-gray-900 text-center leading-tight">
                  {cat.name}
                </h3>
                <p className="text-[9px] sm:text-xs text-gray-500 text-center mt-0.5 sm:mt-1 line-clamp-2 hidden sm:block">
                  {cat.description}
                </p>
                <span className="mt-1 sm:mt-2 text-[9px] sm:text-xs font-medium opacity-70">
                  {cat.productCount} {cat.productCount === 1 ? 'product' : 'products'}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
