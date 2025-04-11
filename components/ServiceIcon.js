import React from 'react';

const ServiceIcon = ({ type, className = '' }) => {
  const icons = {
    posters: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path className="animate-draw" d="M3 3h18v18H3V3z" strokeDasharray="1000" strokeDashoffset="1000" />
        <path className="animate-draw" d="M7 7h10v10H7V7z" strokeDasharray="1000" strokeDashoffset="1000" />
        <circle className="animate-spin-slow" cx="12" cy="12" r="2" />
      </svg>
    ),
    vinyls: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle className="animate-spin-slow" cx="12" cy="12" r="10" />
        <path className="animate-draw" d="M12 2v20M2 12h20" strokeDasharray="1000" strokeDashoffset="1000" />
        <circle className="animate-bounce-slow" cx="12" cy="12" r="3" />
      </svg>
    ),
    leaflets: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path className="animate-draw" d="M4 4h16v16H4V4z" strokeDasharray="1000" strokeDashoffset="1000" />
        <path className="animate-draw" d="M8 8h8v8H8V8z" strokeDasharray="1000" strokeDashoffset="1000" />
        <path className="animate-draw" d="M12 12h4v4h-4v-4z" strokeDasharray="1000" strokeDashoffset="1000" />
      </svg>
    ),
    menus: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path className="animate-draw" d="M3 3h18v18H3V3z" strokeDasharray="1000" strokeDashoffset="1000" />
        <path className="animate-draw" d="M7 7h10v2H7V7z" strokeDasharray="1000" strokeDashoffset="1000" />
        <path className="animate-draw" d="M7 11h10v2H7v-2z" strokeDasharray="1000" strokeDashoffset="1000" />
        <path className="animate-draw" d="M7 15h10v2H7v-2z" strokeDasharray="1000" strokeDashoffset="1000" />
      </svg>
    ),
  };

  return icons[type] || null;
};

export default ServiceIcon; 