"use client"
import React, { useState } from 'react';

const PrintingTimes = () => {
  const [activeTab, setActiveTab] = useState('packaging');

  const tabs = [
    { id: 'packaging', label: 'Packaging' },
    { id: 'wideFormat', label: 'Wide Format' },
    { id: 'leaflets', label: 'Leaflets & Flyers' }
  ];

  const timelineData = {
    packaging: [
      { title: 'Standard', time: '8-12 Days', description: 'Standard production for custom packaging orders.' },
      { title: 'Express', time: '4-7 Days', description: 'Accelerated production for urgent requirements.' },
      { title: 'Weekly Service', time: 'Every Week', description: 'Recurring weekly packaging deliveries. Exclusive to PrintNPack.', badge: 'EXCLUSIVE' }
    ],
    wideFormat: [
      { title: 'Same-Day', time: 'Today', description: 'Order by 10AM for same-day production.', badge: 'FASTEST' },
      { title: 'Next-Day', time: '24 Hours', description: 'Order by 3PM for next-day delivery.' },
      { title: 'Standard', time: '3-5 Days', description: 'Standard timeline with best value pricing.' }
    ],
    leaflets: [
      { title: 'Same-Day', time: 'Today', description: 'Order by 10AM for same-day dispatch.', badge: 'FASTEST' },
      { title: 'Next-Day', time: '24 Hours', description: 'Submit by 3PM for next business day delivery.' },
      { title: 'Standard', time: '3-5 Days', description: 'Standard production with best value pricing.' }
    ]
  };

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
            Production &amp; Delivery Times
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            From same-day dispatch to our exclusive weekly service, we offer flexible timelines to suit your needs.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-5 py-2.5 rounded-md text-sm font-medium transition-colors ${
                activeTab === tab.id 
                  ? 'bg-slate-900 text-white' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Timeline cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {timelineData[activeTab].map((item, index) => (
            <div
              key={`${activeTab}-${index}`}
              className="bg-white rounded-lg border border-slate-200 p-6 hover:shadow-md hover:border-slate-300 transition-all duration-200 relative"
            >
              {item.badge && (
                <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-medium px-2.5 py-0.5 rounded">
                  {item.badge}
                </span>
              )}
              <h3 className="text-base font-semibold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-2xl font-bold text-blue-600 mb-3">{item.time}</p>
              <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center text-xs text-slate-400">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></span>
                Available for all volumes
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-slate-50 border border-slate-200 rounded-lg p-4 max-w-2xl mx-auto">
          <p className="text-sm text-slate-600 text-center">
            <span className="font-medium">Need a custom timeline?</span> Contact us for special arrangements or rush orders.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrintingTimes;
