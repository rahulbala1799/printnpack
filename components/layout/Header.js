import React from 'react';
import Link from 'next/link';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const Header = () => {
  return (
    <header>
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <FaPhone className="mr-2" />
              <span>+91 9843 141 313</span>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="mr-2" />
              <span>printnpack@gmail.com</span>
            </div>
          </div>
          <div>
            <button className="bg-blue-700 px-4 py-1 rounded">Contact Us</button>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <div className="bg-white shadow-md py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-900">PrintNPack</div>
          <nav>
            <ul className="flex space-x-6">
              <li><Link href="/" className="text-blue-900 hover:text-blue-700">Home</Link></li>
              <li><Link href="/about" className="text-blue-900 hover:text-blue-700">About</Link></li>
              <li><Link href="/services" className="text-blue-900 hover:text-blue-700">Services</Link></li>
              <li><Link href="/products" className="text-blue-900 hover:text-blue-700">Products</Link></li>
              <li><Link href="/contact" className="text-blue-900 hover:text-blue-700">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 