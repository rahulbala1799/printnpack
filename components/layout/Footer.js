import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">PrintNPack</h3>
            <p className="mb-4">
              We are dedicated to providing high-quality packaging solutions for businesses of all sizes.
              Our commitment to excellence and innovation makes us the preferred choice for packaging needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-300"><FaFacebook size={20} /></a>
              <a href="#" className="hover:text-blue-300"><FaTwitter size={20} /></a>
              <a href="#" className="hover:text-blue-300"><FaInstagram size={20} /></a>
              <a href="#" className="hover:text-blue-300"><FaLinkedin size={20} /></a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-blue-300">Home</Link></li>
              <li><Link href="/about" className="hover:text-blue-300">About Us</Link></li>
              <li><Link href="/services" className="hover:text-blue-300">Services</Link></li>
              <li><Link href="/products" className="hover:text-blue-300">Products</Link></li>
              <li><Link href="/contact" className="hover:text-blue-300">Contact Us</Link></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/cardboard-boxes" className="hover:text-blue-300">Cardboard Boxes</Link></li>
              <li><Link href="/services/plastic-packaging" className="hover:text-blue-300">Plastic Packaging</Link></li>
              <li><Link href="/services/custom-printing" className="hover:text-blue-300">Custom Printing</Link></li>
              <li><Link href="/services/eco-friendly" className="hover:text-blue-300">Eco-Friendly Options</Link></li>
              <li><Link href="/services/bulk-orders" className="hover:text-blue-300">Bulk Orders</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-blue-200 mt-1 mr-3 flex-shrink-0" />
                <span>123 Packaging Lane, Dublin, County Dublin, Ireland</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-2" />
                <span>+353 1 234 5678</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2" />
                <span>info@printnpack.ie</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-blue-800 mt-8 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} PrintNPack. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 