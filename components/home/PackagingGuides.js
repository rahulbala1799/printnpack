import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const guides = [
  {
    href: '/custom-pizza-boxes-ireland',
    title: 'Custom Pizza Boxes Ireland',
    description: 'Full-colour branded boxes, MOQ from 500, 5–7 day production, nationwide delivery.',
    image: '/images/pizza-boxes/PIZZA_BOX_1.jpg',
    cta: 'View pizza boxes',
  },
  {
    href: '/blog/pizza-box-sizes-ireland',
    title: 'Pizza Box Sizes Guide',
    description: '7″ vs 12″ vs 14″ — which sizes Irish takeaways should stock first.',
    image: '/images/pizza-boxes/PIZZA_BOX_3.jpg',
    cta: 'Read the guide',
  },
];

export default function PackagingGuides() {
  return (
    <section className="py-8 sm:py-12 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
            Packaging guides
          </h2>
          <p className="mt-1 text-sm sm:text-base text-gray-500">
            Practical advice for Irish restaurants and takeaways
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {guides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group flex gap-4 bg-white rounded-xl border border-gray-200 p-4 sm:p-5 hover:border-blue-200 hover:shadow-md transition-all"
            >
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={guide.image}
                  alt=""
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="96px"
                  unoptimized={process.env.NODE_ENV === 'production'}
                />
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {guide.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1 line-clamp-2">{guide.description}</p>
                <span className="inline-block mt-2 text-sm font-medium text-blue-600">
                  {guide.cta} →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
