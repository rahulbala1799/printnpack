import React from 'react';
import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              print<span className="text-blue-400">N</span>pack
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Ireland&apos;s trusted printing and packaging specialist. Quality products, competitive pricing, reliable delivery.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-300 mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Services', href: '/services' },
                { label: 'Products', href: '/products' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-300 mb-4">Products</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Pizza Boxes', href: '/custom-pizza-boxes-ireland' },
                { label: 'Paper Bags', href: '/products' },
                { label: 'Burger Boxes', href: '/eco-bagasse-burger-boxes' },
                { label: 'Foamex Boards', href: '/foamex-boards' },
                { label: 'Correx Boards', href: '/correx-boards' },
                { label: 'Vinyl Stickers', href: '/vinyl-stickers' },
                { label: 'Roll Up Banners', href: '/roll-up-banners' },
                { label: 'Leaflets', href: '/products' },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-300 mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start text-sm">
                <FaMapMarkerAlt className="text-slate-500 mt-1 mr-3 flex-shrink-0 text-xs" />
                <span className="text-slate-400">Unit 14 Ashbourne Business Centre, Ashbourne, Co. Meath, A84 KV57</span>
              </li>
              <li className="flex items-center text-sm">
                <FaPhone className="text-slate-500 mr-3 flex-shrink-0 text-xs" />
                <a href="tel:+353894400155" className="text-slate-400 hover:text-white transition-colors">+353 89 440 0155</a>
              </li>
              <li className="flex items-center text-sm">
                <FaEnvelope className="text-slate-500 mr-3 flex-shrink-0 text-xs" />
                <a href="mailto:info@printnpack.ie" className="text-slate-400 hover:text-white transition-colors">info@printnpack.ie</a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="border-t border-slate-800 py-6 text-center">
          <p className="text-xs text-slate-500">&copy; {new Date().getFullYear()} PrintNPack. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
