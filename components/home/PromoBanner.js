"use client"
import React from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const PromoBanner = () => {
  return (
    <div className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3 text-center sm:text-left">
          <span className="text-sm font-medium">
            <span className="font-bold">15% OFF</span> your first order &mdash; Contact us today to claim this offer
          </span>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center bg-white text-blue-600 px-4 py-1.5 rounded text-sm font-medium hover:bg-blue-50 transition-colors flex-shrink-0"
        >
          Claim Offer
          <FaArrowRight className="ml-2 text-xs" />
        </Link>
      </div>
    </div>
  );
};

export default PromoBanner;
