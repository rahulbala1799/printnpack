import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PaperOptionsExplorer = ({ paperWeights, paperFinishes, laminationOptions }) => {
  const [activeTab, setActiveTab] = useState('configurator');
  const [selectedWeight, setSelectedWeight] = useState('170gsm');
  const [selectedFinish, setSelectedFinish] = useState('Silk');
  const [selectedLamination, setSelectedLamination] = useState('No Lamination');

  // Get the currently selected options
  const currentWeight = paperWeights?.find(w => w.weight === selectedWeight) || paperWeights?.[2];
  const currentFinish = paperFinishes?.find(f => f.name === selectedFinish) || paperFinishes?.[1];
  const currentLamination = laminationOptions?.find(l => l.name === selectedLamination) || laminationOptions?.[0];

  return (
    <div className="mb-12">
      {/* Tab navigation */}
      <div className="mb-8 flex border-b border-gray-200">
        <button 
          className={`py-2 px-4 font-medium text-sm mr-2 ${activeTab === 'configurator' 
            ? 'text-blue-600 border-b-2 border-blue-600' 
            : 'text-gray-500 hover:text-gray-700'}`}
          onClick={() => setActiveTab('configurator')}
        >
          Paper Configurator
        </button>
        <button 
          className={`py-2 px-4 font-medium text-sm ${activeTab === 'weights' 
            ? 'text-blue-600 border-b-2 border-blue-600' 
            : 'text-gray-500 hover:text-gray-700'}`}
          onClick={() => setActiveTab('weights')}
        >
          Weight Comparison
        </button>
        <button 
          className={`py-2 px-4 font-medium text-sm ${activeTab === 'finishes' 
            ? 'text-blue-600 border-b-2 border-blue-600' 
            : 'text-gray-500 hover:text-gray-700'}`}
          onClick={() => setActiveTab('finishes')}
        >
          Finish Options
        </button>
        <button 
          className={`py-2 px-4 font-medium text-sm ${activeTab === 'chart' 
            ? 'text-blue-600 border-b-2 border-blue-600' 
            : 'text-gray-500 hover:text-gray-700'}`}
          onClick={() => setActiveTab('chart')}
        >
          Comparison Chart
        </button>
      </div>

      {/* Paper Configurator */}
      {activeTab === 'configurator' && (
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 shadow-md mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Build Your Perfect Paper Combination</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1: Choose Weight */}
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-semibold text-gray-800 mb-3">1. Select Paper Weight</h4>
              <div className="space-y-2">
                {paperWeights?.map(option => (
                  <button
                    key={option.weight}
                    onClick={() => setSelectedWeight(option.weight)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm ${
                      selectedWeight === option.weight 
                        ? 'bg-blue-50 text-blue-700 font-medium border border-blue-200' 
                        : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span>{option.weight}</span>
                      <span className="text-xs bg-gray-200 px-2 py-1 rounded-full">{option.category}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Step 2: Choose Finish */}
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-semibold text-gray-800 mb-3">2. Select Paper Finish</h4>
              <div className="space-y-2">
                {paperFinishes?.map(finish => (
                  <button
                    key={finish.name}
                    onClick={() => setSelectedFinish(finish.name)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm ${
                      selectedFinish === finish.name 
                        ? 'bg-blue-50 text-blue-700 font-medium border border-blue-200' 
                        : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    {finish.name}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Step 3: Choose Lamination */}
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-semibold text-gray-800 mb-3">3. Select Lamination (Optional)</h4>
              <div className="space-y-2">
                {laminationOptions?.map(lamination => (
                  <button
                    key={lamination.name}
                    onClick={() => setSelectedLamination(lamination.name)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm ${
                      selectedLamination === lamination.name 
                        ? 'bg-blue-50 text-blue-700 font-medium border border-blue-200' 
                        : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    {lamination.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Paper Preview Card */}
          <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
            <h4 className="font-bold text-lg text-gray-800 mb-4">Your Selected Paper</h4>
            
            <div className="flex flex-wrap md:flex-nowrap gap-4">
              {/* Paper Summary */}
              <div className="w-full md:w-2/3">
                <div className="bg-gradient-to-r from-blue-50 to-gray-50 p-4 rounded-lg">
                  <div className="text-lg font-semibold text-gray-900 mb-1">
                    {selectedWeight} {selectedFinish} {selectedLamination !== 'No Lamination' ? `with ${selectedLamination}` : ''}
                  </div>
                  <div className="text-sm text-gray-600 mb-4">
                    {currentWeight?.description} {currentFinish?.description} 
                    {selectedLamination !== 'No Lamination' ? ` ${currentLamination?.description}` : ''}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div>
                      <h5 className="text-xs font-semibold uppercase text-gray-500 mb-1">WEIGHT</h5>
                      <p className="text-sm">{currentWeight?.category} ({selectedWeight})</p>
                    </div>
                    <div>
                      <h5 className="text-xs font-semibold uppercase text-gray-500 mb-1">FINISH</h5>
                      <p className="text-sm">{selectedFinish}</p>
                    </div>
                    <div>
                      <h5 className="text-xs font-semibold uppercase text-gray-500 mb-1">PROTECTION</h5>
                      <p className="text-sm">{selectedLamination}</p>
                    </div>
                  </div>
                  
                  {/* Best Uses */}
                  <div className="mt-6">
                    <h5 className="text-xs font-semibold uppercase text-gray-500 mb-2">BEST FOR</h5>
                    <p className="text-sm text-gray-700">
                      {currentWeight?.best_for}
                    </p>
                  </div>
                  
                  {/* Features */}
                  <div className="mt-6">
                    <h5 className="text-xs font-semibold uppercase text-gray-500 mb-2">FEATURES</h5>
                    <div className="flex flex-wrap gap-2">
                      {currentWeight?.features?.map((feature, idx) => (
                        <span key={idx} className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Visual Representation */}
              <div className="w-full md:w-1/3 flex flex-col items-center justify-center bg-gray-50 p-4 rounded-lg">
                <div className="relative w-full max-w-[200px] aspect-[1/1.414] mb-4">
                  <div 
                    className={`absolute inset-0 shadow-md rounded-md ${
                      selectedFinish === 'Gloss' ? 'bg-white' : 
                      selectedFinish === 'Matt' ? 'bg-gray-50' :
                      selectedFinish === 'Silk' ? 'bg-blue-50' : 'bg-yellow-50'
                    } ${
                      selectedLamination.includes('Gloss') ? 'ring-4 ring-blue-200' :
                      selectedLamination.includes('Matt') ? 'ring-4 ring-gray-200' : ''
                    }`}
                    style={{
                      transform: `perspective(1000px) rotateY(15deg)`,
                      boxShadow: selectedWeight === '350gsm' ? '0 10px 25px -5px rgba(0, 0, 0, 0.2)' :
                                selectedWeight === '300gsm' ? '0 8px 20px -5px rgba(0, 0, 0, 0.18)' :
                                selectedWeight === '250gsm' ? '0 6px 15px -5px rgba(0, 0, 0, 0.15)' :
                                selectedWeight === '170gsm' ? '0 4px 10px -5px rgba(0, 0, 0, 0.12)' :
                                selectedWeight === '130gsm' ? '0 2px 5px -3px rgba(0, 0, 0, 0.1)' : '0 1px 3px -2px rgba(0, 0, 0, 0.08)'
                    }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-gray-400 opacity-20">A5</span>
                    </div>
                  </div>
                </div>
                
                {/* Thickness Indicator */}
                <div className="w-full flex justify-center items-center mb-2">
                  <div className="h-6 w-[150px] bg-gray-200 rounded-full relative">
                    <div 
                      className={`h-6 rounded-full bg-gradient-to-r from-blue-400 to-blue-500`}
                      style={{
                        width: selectedWeight === '350gsm' ? '100%' :
                              selectedWeight === '300gsm' ? '85%' :
                              selectedWeight === '250gsm' ? '70%' :
                              selectedWeight === '170gsm' ? '50%' :
                              selectedWeight === '130gsm' ? '35%' : '15%'
                      }}
                    ></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs font-medium text-white">Thickness</span>
                    </div>
                  </div>
                </div>
                <span className="text-xs text-gray-500">Weight: {selectedWeight}</span>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="mt-6 flex justify-center">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Request This Paper Sample
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Weight Comparison View */}
      {activeTab === 'weights' && (
        <div className="bg-white rounded-lg p-6 shadow-md mb-6">
          <h4 className="font-semibold text-gray-700 mb-6">Paper Weight Comparison</h4>
          <div className="relative h-20 flex items-center mb-8 overflow-hidden">
            <div className="absolute h-20 w-full bg-gradient-to-r from-blue-50 to-blue-100 rounded-md"></div>
            <div className="z-10 w-full flex justify-between px-4">
              {paperWeights?.map((option, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div 
                    className={`h-${index + 2} w-12 bg-blue-${300 + (index * 100)} rounded-full mb-1`}
                    style={{ height: `${(index + 1) * 4 + 8}px` }}
                  ></div>
                  <span className="text-xs font-medium text-gray-700">{option.weight}</span>
                  <span className="text-xs text-gray-500">{option.category}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Weight Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            {paperWeights?.map((weight, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <h5 className="font-bold text-gray-800">{weight.weight}</h5>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    {weight.category}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3">{weight.description}</p>
                <div className="text-xs text-gray-500">
                  <strong>Best for:</strong> {weight.best_for}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-sm text-gray-600 bg-blue-50 p-4 rounded-lg">
            <p className="italic">
              <strong>GSM</strong> (grams per square meter) measures paper thickness and weight. 
              Higher GSM indicates thicker, more substantial paper. All our weights can be combined 
              with any paper finish to suit your specific needs.
            </p>
          </div>
        </div>
      )}
      
      {/* Finish Options View */}
      {activeTab === 'finishes' && (
        <div className="bg-white rounded-lg p-6 shadow-md mb-6">
          <h4 className="font-semibold text-gray-700 mb-6">Paper Finish Comparison</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {paperFinishes?.map((finish, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                <div className="h-24 bg-white rounded-lg mb-4 border border-gray-200 flex items-center justify-center">
                  <div 
                    className={`w-3/4 h-3/4 rounded-md shadow-sm ${
                      finish.name === 'Gloss' ? 'bg-gradient-to-br from-white to-gray-100' :
                      finish.name === 'Matt' ? 'bg-gray-200' :
                      finish.name === 'Silk' ? 'bg-blue-50' : 'bg-yellow-50'
                    }`}
                  ></div>
                </div>
                <h5 className="font-bold text-lg text-gray-800 mb-2">{finish.name}</h5>
                <p className="text-sm text-gray-600 mb-3">{finish.description}</p>
                
                <div className="bg-white p-3 rounded-md">
                  <h6 className="font-medium text-sm text-gray-700 mb-2">Benefits:</h6>
                  <p className="text-sm text-gray-600">{finish.benefits}</p>
                </div>
                
                <div className="mt-4">
                  <h6 className="font-medium text-sm text-gray-700 mb-1">Best For:</h6>
                  <p className="text-sm text-gray-600">{finish.best_for}</p>
                </div>
                
                <div className="mt-6 text-center">
                  <p className="text-xs text-blue-700">
                    Available with all paper weights (90gsm - 350gsm)
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Lamination Options */}
          <h4 className="font-semibold text-gray-700 mb-4 mt-8">Lamination Options</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {laminationOptions?.map((option, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <h5 className="font-bold text-gray-800 mb-2">{option.name}</h5>
                <p className="text-sm text-gray-600 mb-3">{option.description}</p>
                
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-green-50 p-2 rounded">
                    <p className="font-medium text-green-800 mb-1">Pros:</p>
                    <p className="text-green-700">{option.pros}</p>
                  </div>
                  <div className="bg-red-50 p-2 rounded">
                    <p className="font-medium text-red-800 mb-1">Cons:</p>
                    <p className="text-red-700">{option.cons}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Chart View */}
      {activeTab === 'chart' && <PaperComparisonChart />}
      
      {/* Paper Sample Request */}
      <div className="mt-12 bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl shadow-inner">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="md:flex-1">
            <h3 className="font-bold text-xl text-blue-900 mb-3">Not sure which paper to choose?</h3>
            <p className="text-blue-800 mb-4 md:mb-0">
              Request our premium sample pack featuring all paper weights and finishes to touch and feel the quality before placing your order.
            </p>
          </div>
          <div className="md:ml-8 flex flex-col sm:flex-row gap-3">
            <Link href="/contact?subject=Paper Sample Request" className="inline-flex items-center justify-center text-white bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg font-medium transition-colors shadow-md">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
              Get Free Samples
            </Link>
            <button 
              onClick={() => setActiveTab('chart')} 
              className="inline-flex items-center justify-center text-blue-700 bg-white hover:bg-blue-50 px-5 py-3 rounded-lg font-medium transition-colors border border-blue-200 shadow-sm"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Compare All Papers
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Paper Comparison Chart Component
export const PaperComparisonChart = () => {
  return (
    <div id="paper-comparison-chart" className="bg-white rounded-lg p-6 shadow-md mb-6">
      <h3 className="text-xl font-bold mb-6">Paper Weight & Finish Comparison Chart</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-gray-50">
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Weight</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Category</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Available Finishes</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Thickness Feel</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Best For</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 text-sm font-medium text-gray-900">90gsm</td>
              <td className="py-3 px-4 text-sm text-gray-500">Ultra-Light</td>
              <td className="py-3 px-4 text-sm text-gray-500">All finishes available</td>
              <td className="py-3 px-4 text-sm text-gray-500">Very thin, like printer paper</td>
              <td className="py-3 px-4 text-sm text-gray-500">Mass distribution, inserts</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 text-sm font-medium text-gray-900">130gsm</td>
              <td className="py-3 px-4 text-sm text-gray-500">Light</td>
              <td className="py-3 px-4 text-sm text-gray-500">All finishes available</td>
              <td className="py-3 px-4 text-sm text-gray-500">Thin but sturdy</td>
              <td className="py-3 px-4 text-sm text-gray-500">Flyers, promotional materials</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 text-sm font-medium text-gray-900">170gsm</td>
              <td className="py-3 px-4 text-sm text-gray-500">Medium</td>
              <td className="py-3 px-4 text-sm text-gray-500">All finishes available</td>
              <td className="py-3 px-4 text-sm text-gray-500">Substantial, professional</td>
              <td className="py-3 px-4 text-sm text-gray-500">Brochures, menus, leaflets</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 text-sm font-medium text-gray-900">250gsm</td>
              <td className="py-3 px-4 text-sm text-gray-500">Heavy</td>
              <td className="py-3 px-4 text-sm text-gray-500">All finishes available</td>
              <td className="py-3 px-4 text-sm text-gray-500">Thick, card-like</td>
              <td className="py-3 px-4 text-sm text-gray-500">Premium catalogs, covers</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 text-sm font-medium text-gray-900">300gsm</td>
              <td className="py-3 px-4 text-sm text-gray-500">Premium</td>
              <td className="py-3 px-4 text-sm text-gray-500">All finishes available</td>
              <td className="py-3 px-4 text-sm text-gray-500">Very thick, luxury feel</td>
              <td className="py-3 px-4 text-sm text-gray-500">Luxury brochures, folders</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 text-sm font-medium text-gray-900">350gsm</td>
              <td className="py-3 px-4 text-sm text-gray-500">Ultra Premium</td>
              <td className="py-3 px-4 text-sm text-gray-500">All finishes available</td>
              <td className="py-3 px-4 text-sm text-gray-500">Card-like, extremely durable</td>
              <td className="py-3 px-4 text-sm text-gray-500">Premium marketing materials</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <div className="flex items-start">
          <div className="flex-shrink-0 pt-1">
            <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-blue-700">
              <strong>Important Note:</strong> All paper weights can be combined with any finish option (Uncoated, Silk, Gloss, Matt).
              Additionally, any paper weight and finish combination can have lamination applied for enhanced durability and protection.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaperOptionsExplorer; 