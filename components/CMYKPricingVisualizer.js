import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CMYKPricingVisualizer = () => {
  const [printSize, setPrintSize] = useState(50); // percentage of coverage
  const [bagSize, setBagSize] = useState('medium'); // small, medium, large
  const [estimatedPrice, setEstimatedPrice] = useState(0);

  // Base prices by bag size
  const basePrices = {
    small: 0.38,
    medium: 0.45,
    large: 0.52
  };

  // Calculate price based on bag size and print coverage
  useEffect(() => {
    // Calculate price: base price + (coverage percentage * scaling factor)
    const scalingFactor = bagSize === 'small' ? 0.005 : bagSize === 'medium' ? 0.007 : 0.009;
    const price = basePrices[bagSize] + (printSize * scalingFactor);
    setEstimatedPrice(price.toFixed(2));
  }, [printSize, bagSize]);

  // CMYK color values
  const cmykColors = [
    { name: 'Cyan', color: '#00AEEF', shortName: 'C' },
    { name: 'Magenta', color: '#EC008C', shortName: 'M' },
    { name: 'Yellow', color: '#FFF200', shortName: 'Y' },
    { name: 'Key (Black)', color: '#000000', shortName: 'K' }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Digital CMYK Printing Pricing</h3>
      <p className="text-gray-600 mb-6">
        Our digital printing costs scale proportionally with the size of your printed design. Adjust the sliders below to see how coverage area affects pricing.
      </p>

      {/* CMYK Color blocks with animation */}
      <div className="flex justify-center mb-8">
        {cmykColors.map((color, index) => (
          <motion.div
            key={index}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            className="flex flex-col items-center mx-3"
          >
            <div 
              className="w-12 h-16 rounded-sm shadow-md transform hover:scale-110 transition-transform duration-300"
              style={{ backgroundColor: color.color }}
            ></div>
            <div className="mt-2 text-center">
              <div className="font-bold text-lg">{color.shortName}</div>
              <div className="text-xs text-gray-500">{color.name}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bag size selector */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Bag Size</label>
        <div className="flex flex-wrap gap-3">
          {['small', 'medium', 'large'].map((size) => (
            <button
              key={size}
              onClick={() => setBagSize(size)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                bagSize === size
                  ? 'bg-amber-600 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {size.charAt(0).toUpperCase() + size.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Print coverage slider */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <label className="block text-sm font-medium text-gray-700">Print Coverage Area</label>
          <span className="text-amber-600 font-medium">{printSize}%</span>
        </div>
        <input
          type="range"
          min="10"
          max="100"
          value={printSize}
          onChange={(e) => setPrintSize(parseInt(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>Minimal</span>
          <span>Full Coverage</span>
        </div>
      </div>

      {/* Visual representation */}
      <div className="flex items-center justify-center mb-6">
        <div className="relative w-48 h-64 border border-gray-300 rounded-lg bg-amber-50 overflow-hidden">
          {/* Bag outline */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg viewBox="0 0 100 140" width="90%" height="90%" className="text-amber-800/10">
              <rect x="10" y="10" width="80" height="120" rx="2" />
              <line x1="30" y1="10" x2="30" y2="0" stroke="currentColor" strokeWidth="3" />
              <line x1="70" y1="10" x2="70" y2="0" stroke="currentColor" strokeWidth="3" />
              <rect x="25" y="0" width="10" height="2" fill="currentColor" />
              <rect x="65" y="0" width="10" height="2" fill="currentColor" />
            </svg>
          </div>
          
          {/* Colored print area */}
          <div 
            className="absolute left-1/2 top-1/2 bg-gradient-to-br from-cyan-500/80 via-fuchsia-500/80 to-amber-500/80 transition-all duration-300 ease-in-out"
            style={{ 
              width: `${printSize}%`, 
              height: `${printSize}%`,
              transform: 'translate(-50%, -50%)',
              borderRadius: '4px'
            }}
          ></div>
        </div>
      </div>

      {/* Price estimate */}
      <div className="text-center bg-amber-50 p-4 rounded-lg">
        <div className="text-sm text-amber-700 mb-1">Estimated Price Per Unit</div>
        <div className="text-3xl font-bold text-amber-800">€{estimatedPrice}</div>
        <div className="text-xs text-amber-600 mt-1">Based on minimum order quantity</div>
      </div>

      {/* Explanation text */}
      <div className="mt-6 text-sm text-gray-600">
        <p className="mb-2"><span className="font-semibold">How it works:</span> Digital CMYK printing allows for unlimited colors with pricing based on coverage area rather than number of colors.</p>
        <p>The larger the printed area, the higher the cost. This gives you flexibility to choose between bold, full-coverage designs or more cost-effective minimalist branding.</p>
      </div>
    </div>
  );
};

export default CMYKPricingVisualizer; 