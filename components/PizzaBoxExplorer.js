import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const PizzaBoxExplorer = () => {
  const [activeSize, setActiveSize] = useState('10inch');
  const [animating, setAnimating] = useState(false);
  
  // Define pizza box sizes with their dimensions and info
  const boxSizes = [
    {
      id: '7inch',
      name: '7"',
      dimension: '7" (18cm)',
      height: '4.5cm',
      bestFor: 'Personal pizzas, dessert pizzas, kids meals',
      capacity: 'Single small pizza (6-7 inches)',
      boxColor: 'bg-amber-100',
      labelColor: 'text-amber-800',
      borderColor: 'border-amber-300',
      accent: 'from-amber-500 to-amber-700'
    },
    {
      id: '9inch',
      name: '9"',
      dimension: '9" (23cm)',
      height: '4.5cm',
      bestFor: 'Small pizzas, specialty appetizer pizzas',
      capacity: 'Single small pizza (8-9 inches)',
      boxColor: 'bg-amber-50',
      labelColor: 'text-amber-900',
      borderColor: 'border-amber-400',
      accent: 'from-amber-600 to-amber-800'
    },
    {
      id: '10inch',
      name: '10"',
      dimension: '10" (25cm)',
      height: '4.5cm',
      bestFor: 'Medium pizzas, most popular size for delivery',
      capacity: 'Single medium pizza (9-10 inches)',
      boxColor: 'bg-orange-50',
      labelColor: 'text-orange-900',
      borderColor: 'border-orange-400',
      accent: 'from-orange-600 to-orange-800'
    },
    {
      id: '12inch',
      name: '12"',
      dimension: '12" (30.5cm)',
      height: '5cm',
      bestFor: 'Large pizzas, family size pizzas',
      capacity: 'Single large pizza (11-12 inches)',
      boxColor: 'bg-orange-100',
      labelColor: 'text-orange-800',
      borderColor: 'border-orange-500',
      accent: 'from-orange-700 to-red-700'
    },
    {
      id: '14inch',
      name: '14"',
      dimension: '14" (35.5cm)',
      height: '5cm',
      bestFor: 'Extra-large pizzas, party size pizzas',
      capacity: 'Single extra-large pizza (13-14 inches)',
      boxColor: 'bg-red-100',
      labelColor: 'text-red-800',
      borderColor: 'border-red-500',
      accent: 'from-red-700 to-red-900'
    }
  ];
  
  // Get current box
  const currentBox = boxSizes.find(box => box.id === activeSize);
  
  // Handle size click with animation
  const handleSizeClick = (size) => {
    if (size === activeSize) return;
    setAnimating(true);
    setActiveSize(size);
    setTimeout(() => setAnimating(false), 600);
  };

  return (
    <div className="mb-16">
      <div className="mb-6 sm:mb-8 text-center px-2">
        <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-gray-800">Pizza Box Size Explorer</h3>
        <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
          Choose from 5 different box sizes to perfectly fit your pizza offerings. Each eco-friendly kraft box can be customized with your branding.
        </p>
      </div>
      
      {/* Size selector - flashy tabs */}
      <div className="relative mb-6 sm:mb-8">
        <div className="flex justify-center space-x-1 sm:space-x-2 md:space-x-4 overflow-x-auto pb-4 -mx-4 px-4 no-scrollbar">
          {boxSizes.map((size) => (
            <button
              key={size.id}
              onClick={() => handleSizeClick(size.id)}
              className={`relative min-w-0 px-3 sm:px-5 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 transform ${
                activeSize === size.id 
                  ? `text-white bg-gradient-to-r ${size.accent} shadow-lg scale-105 sm:scale-110` 
                  : 'text-gray-600 bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {size.name}
              {activeSize === size.id && (
                <span className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-yellow-400 text-xs font-bold rounded-full w-4 h-4 sm:w-6 sm:h-6 flex items-center justify-center animate-pulse">
                  ✓
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
      
      {/* Interactive Pizza Box Display */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-6 mb-8">
        {/* Box Visualization */}
        <div className="lg:col-span-3 bg-white p-4 sm:p-6 rounded-xl border border-gray-200 shadow-md">
          <div className="relative aspect-square max-w-sm mx-auto">
            {/* 3D Pizza Box with Lid */}
            <div 
              className={`absolute inset-0 ${currentBox.boxColor} ${currentBox.borderColor} border-2 rounded-lg shadow-xl transition-all duration-500 transform ${
                animating ? 'scale-90 rotate-3 opacity-0' : 'scale-100 rotate-0 opacity-100'
              }`}
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px',
                transform: `perspective(1000px) rotateX(20deg) rotateZ(-5deg)`
              }}
            >
              {/* Box Top */}
              <div 
                className="absolute inset-0 flex flex-col items-center justify-center"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: 'translateZ(2px)'
                }}
              >
                {/* Box Logo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-2/3 h-2/3 flex items-center justify-center">
                    <div className="absolute inset-0 bg-blue-600 opacity-10 rounded-full transform -rotate-12"></div>
                    <div className="text-blue-800 font-extrabold text-2xl sm:text-3xl md:text-4xl transform -rotate-12">
                      PRINT<span className="text-orange-600">N</span>PACK
                    </div>
                  </div>
                </div>
                
                {/* Box Size Indicator */}
                <div 
                  className="absolute bottom-4 right-4 bg-white px-2 py-0.5 sm:px-3 sm:py-1 rounded-full font-bold text-xs sm:text-sm shadow-md transform rotate-3"
                >
                  {currentBox.dimension}
                </div>
              </div>
              
              {/* Box Side Edges */}
              <div 
                className={`absolute left-0 right-0 bottom-0 h-6 ${currentBox.boxColor} ${currentBox.borderColor} border-t-2 rounded-b-lg transform origin-top`}
                style={{
                  transform: 'rotateX(-90deg) translateZ(-10px)',
                  backgroundColor: '#d4a76a'
                }}
              >
                <div className="absolute top-1/4 w-full text-center text-xs font-medium text-amber-800 px-2 truncate">
                  Eco-Friendly • Kraft Material • {currentBox.height} Height
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Box Details */}
        <div className="lg:col-span-2 flex flex-col space-y-4">
          <div className={`bg-gradient-to-r ${currentBox.accent} text-white p-4 rounded-xl shadow-md`}>
            <h4 className="text-xl font-bold mb-2">{currentBox.name} Pizza Box</h4>
            <p className="text-white/90 text-sm">
              Dimensions: {currentBox.dimension} × {currentBox.dimension} × {currentBox.height}
            </p>
          </div>
          
          <div className="flex-1 grid grid-cols-1 gap-4">
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <h5 className="font-bold text-gray-700 mb-2">
                <span className="bg-blue-100 text-blue-700 w-6 h-6 inline-flex items-center justify-center rounded-full mr-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                Best For
              </h5>
              <p className="text-gray-600 pl-8">{currentBox.bestFor}</p>
            </div>
            
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <h5 className="font-bold text-gray-700 mb-2">
                <span className="bg-green-100 text-green-700 w-6 h-6 inline-flex items-center justify-center rounded-full mr-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </span>
                Features
              </h5>
              <ul className="text-gray-600 pl-8 space-y-1 text-sm sm:text-base">
                <li>✓ Recycled kraft corrugated cardboard</li>
                <li>✓ Stackable design for easy storage</li>
                <li>✓ Customizable with your branding</li>
                <li>✓ Excellent heat retention</li>
                <li>✓ Eco-friendly and biodegradable</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Size Comparison - REMOVED FROM HERE, MOVING TO MAIN PRODUCT PAGE */}
      
      {/* Call to Action */}
      <div className="mt-8 bg-blue-50 rounded-xl p-4 sm:p-6 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h4 className="text-xl font-bold text-blue-900">Need Custom Sizes?</h4>
          <p className="text-blue-700 text-sm sm:text-base">We can produce custom box sizes tailored to your specific requirements.</p>
        </div>
        <button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-3 rounded-lg font-bold transition-colors flex items-center justify-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          Request Quote
        </button>
      </div>
    </div>
  );
};

export default PizzaBoxExplorer; 