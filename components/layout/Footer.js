import React, { useState } from 'react';
import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const QUICK_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products' },
  { label: 'Contact', href: '/contact' },
];

const PRODUCT_LINKS = [
  { label: 'Printing Ireland', href: '/printing-ireland' },
  { label: 'Printing Ashbourne', href: '/printing-ashbourne' },
  { label: 'Pizza Boxes', href: '/pizza-boxes-ireland' },
  { label: 'Custom Pizza Boxes', href: '/custom-pizza-boxes-ireland' },
  { label: 'Banners Ireland', href: '/banners-ireland' },
  { label: 'Banner FAQ', href: '/banner-faq-ireland' },
  { label: 'Printed Flat Handle Bags', href: '/printed-flat-handle-bags-ireland' },
  { label: 'Vinyl Banners', href: '/vinyl-banners' },
  { label: 'Roll Up Banners', href: '/roll-up-banners' },
  { label: 'Rubber Stamps', href: '/rubber-stamps-ireland' },
  { label: 'Stamp FAQ', href: '/rubber-stamp-faq-ireland' },
  { label: 'Custom Posters', href: '/posters' },
  { label: 'Vinyl Stickers', href: '/vinyl-stickers' },
  { label: 'Leaflets Ireland', href: '/services/leaflets' },
  { label: 'Plain Packaging', href: '/plain-packaging' },
  { label: 'Correx Boards', href: '/correx-boards' },
];

// Accordion section for mobile
const FooterAccordion = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-800 lg:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 lg:hidden"
      >
        <span className="text-sm font-semibold uppercase tracking-wide text-slate-300">{title}</span>
        <svg
          className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {/* Desktop: always visible */}
      <h4 className="hidden lg:block text-sm font-semibold uppercase tracking-wide text-slate-300 mb-4">{title}</h4>
      <div className={`overflow-hidden transition-all duration-300 lg:!max-h-none lg:!opacity-100 lg:!pb-0 ${open ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'}`}>
        {children}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">

      {/* ── Mobile contact CTA card ──────────────────────────────── */}
      <div className="lg:hidden bg-gradient-to-br from-slate-800 to-slate-900 border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h3 className="text-base font-bold text-white mb-1">Need help with your order?</h3>
          <p className="text-xs text-slate-400 mb-4">Get in touch — we reply fast.</p>

          <div className="flex gap-2">
            <a
              href="tel:+353894400155"
              className="flex-1 flex items-center justify-center gap-2 bg-white text-slate-900 font-bold text-sm py-3 rounded-xl active:scale-[0.97] transition-transform"
            >
              <FaPhone className="text-xs" />
              Call Us
            </a>
            <a
              href="mailto:info@printnpack.ie"
              className="flex-1 flex items-center justify-center gap-2 bg-slate-700 text-white font-bold text-sm py-3 rounded-xl active:scale-[0.97] transition-transform"
            >
              <FaEnvelope className="text-xs" />
              Email Us
            </a>
          </div>

          <div className="flex items-start gap-2 mt-4 pt-3 border-t border-slate-700/50">
            <FaMapMarkerAlt className="text-slate-500 text-xs mt-0.5 flex-shrink-0" />
            <p className="text-xs text-slate-400 leading-relaxed">
              Unit 14 Ashbourne Business Centre, Ashbourne, Co. Meath, A84 KV57
            </p>
          </div>
        </div>
      </div>

      {/* ── Main footer content ──────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Desktop: classic 4-column grid */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-8 py-12">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold mb-3">
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
              {QUICK_LINKS.map((link) => (
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
              {PRODUCT_LINKS.map((link) => (
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

        {/* Mobile: brand + accordion sections */}
        <div className="lg:hidden">
          {/* Brand */}
          <div className="py-5 border-b border-slate-800">
            <h3 className="text-lg font-bold mb-1.5">
              print<span className="text-blue-400">N</span>pack
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Ireland&apos;s trusted printing and packaging specialist. Quality products, competitive pricing, reliable delivery.
            </p>
          </div>

          {/* Quick Links accordion */}
          <FooterAccordion title="Quick Links">
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {QUICK_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </FooterAccordion>

          {/* Products accordion */}
          <FooterAccordion title="Products">
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {PRODUCT_LINKS.map((link) => (
                <Link key={link.label} href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </FooterAccordion>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 py-4 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[10px] sm:text-xs text-slate-500">&copy; {new Date().getFullYear()} PrintNPack. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <a href="tel:+353894400155" className="text-[10px] sm:text-xs text-slate-500 hover:text-slate-300 transition-colors hidden sm:inline">+353 89 440 0155</a>
            <span className="text-slate-700 hidden sm:inline">·</span>
            <a href="mailto:info@printnpack.ie" className="text-[10px] sm:text-xs text-slate-500 hover:text-slate-300 transition-colors hidden sm:inline">info@printnpack.ie</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
