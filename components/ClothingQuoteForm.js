import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FaTimes, FaUser, FaEnvelope, FaPhone, FaBuilding, FaTshirt } from 'react-icons/fa';

const ClothingQuoteForm = ({ isOpen, onClose, productType }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Product-specific form configurations
  const productConfigs = {
    'T-Shirts': {
      icon: FaTshirt,
      title: 'T-Shirt Quote Request',
      fields: {
        placements: ['Front Only', 'Back Only', 'Front & Back', 'Left Chest', 'Right Chest', 'Sleeve', 'Full Wrap'],
        colors: ['White', 'Black', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Yellow', 'Custom Color'],
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
        materials: ['100% Cotton', 'Cotton Blend', 'Polyester', 'Organic Cotton', 'Performance Fabric']
      }
    },
    'Polo T-Shirts': {
      icon: FaTshirt,
      title: 'Polo Shirt Quote Request',
      fields: {
        placements: ['Left Chest', 'Right Chest', 'Front Center', 'Back', 'Sleeve', 'Collar'],
        colors: ['White', 'Black', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Burgundy', 'Custom Color'],
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
        materials: ['Cotton Pique', 'Cotton Blend', 'Performance Polyester', 'Organic Cotton'],
        collarTypes: ['Standard Collar', 'Button-Down Collar', 'Ribbed Collar', 'Flat Knit Collar']
      }
    },
    'Hoodies': {
      icon: FaTshirt,
      title: 'Hoodie Quote Request',
      fields: {
        placements: ['Front Center', 'Back', 'Left Chest', 'Hood', 'Sleeve', 'Kangaroo Pocket'],
        colors: ['Black', 'Grey', 'Navy', 'White', 'Red', 'Blue', 'Green', 'Burgundy', 'Custom Color'],
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
        materials: ['Cotton Blend', '100% Cotton', 'Fleece', 'French Terry', 'Performance Fabric'],
        hoodieTypes: ['Pullover', 'Zip-Up', 'Quarter Zip', 'Cropped']
      }
    },
    'Hi-Viz Jackets': {
      icon: FaTshirt,
      title: 'Hi-Viz Jacket Quote Request',
      fields: {
        placements: ['Front Left', 'Front Right', 'Back', 'Sleeve', 'Chest Pocket'],
        colors: ['Hi-Viz Yellow', 'Hi-Viz Orange', 'Hi-Viz Green', 'Hi-Viz Pink'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL', 'XXXXL'],
        materials: ['Polyester with Reflective Strips', 'Mesh Fabric', 'Waterproof', 'Breathable Fabric'],
        safetyStandards: ['EN ISO 20471 Class 2', 'EN ISO 20471 Class 3', 'ANSI/ISEA 107-2015 Class 2', 'ANSI/ISEA 107-2015 Class 3']
      }
    },
    'Sweat Shirts': {
      icon: FaTshirt,
      title: 'Sweatshirt Quote Request',
      fields: {
        placements: ['Front Center', 'Back', 'Left Chest', 'Sleeve', 'All Over Print'],
        colors: ['Black', 'Grey', 'Navy', 'White', 'Red', 'Blue', 'Green', 'Burgundy', 'Custom Color'],
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
        materials: ['Cotton Blend', '100% Cotton', 'Fleece', 'French Terry'],
        neckTypes: ['Crew Neck', 'V-Neck', 'Mock Neck']
      }
    }
  };

  const config = productConfigs[productType] || productConfigs['T-Shirts'];
  const IconComponent = config.icon;

  // Form validation schema
  const quoteSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string(),
    company: Yup.string(),
    quantity: Yup.number().min(1, 'Minimum quantity is 1').required('Quantity is required'),
    colors: Yup.array().min(1, 'Please select at least one color'),
    sizes: Yup.array().min(1, 'Please select at least one size'),
    placements: Yup.array().min(1, 'Please select at least one placement'),
    material: Yup.string().required('Please select a material'),
    designDetails: Yup.string(),
    additionalRequirements: Yup.string()
  });

  // Setup formik
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      quantity: '',
      colors: [],
      sizes: [],
      placements: [],
      material: '',
      designDetails: '',
      additionalRequirements: '',
      ...(config.fields.collarTypes && { collarType: '' }),
      ...(config.fields.hoodieTypes && { hoodieType: '' }),
      ...(config.fields.safetyStandards && { safetyStandard: '' }),
      ...(config.fields.neckTypes && { neckType: '' })
    },
    validationSchema: quoteSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        setErrorMessage('');
        
        // Create detailed message
        const message = `${productType} Quote Request:

Contact Information:
Name: ${values.name}
Email: ${values.email}
Phone: ${values.phone || 'Not provided'}
Company: ${values.company || 'Not provided'}

Product Details:
Product Type: ${productType}
Quantity: ${values.quantity}
Colors: ${values.colors.join(', ')}
Sizes: ${values.sizes.join(', ')}
Print Placements: ${values.placements.join(', ')}
Material: ${values.material}
${values.collarType ? `Collar Type: ${values.collarType}` : ''}
${values.hoodieType ? `Hoodie Type: ${values.hoodieType}` : ''}
${values.safetyStandard ? `Safety Standard: ${values.safetyStandard}` : ''}
${values.neckType ? `Neck Type: ${values.neckType}` : ''}

Design Details:
${values.designDetails || 'No specific design details provided'}

Additional Requirements:
${values.additionalRequirements || 'None specified'}

This is a quote request from the clothing page.`;

        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: values.name,
            email: values.email,
            phone: values.phone,
            company: values.company,
            message: message,
            productInterest: `${productType} Quote Request`
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || data.message || 'Failed to send quote request');
        }

        // Show success message
        setFormSubmitted(true);
        
        // Reset form
        resetForm();
        
        // Close modal after 3 seconds
        setTimeout(() => {
          setFormSubmitted(false);
          onClose();
        }, 3000);
      } catch (error) {
        setErrorMessage(error.message || 'Failed to send quote request. Please try again later.');
      } finally {
        setSubmitting(false);
      }
    },
  });

  // Handle checkbox changes
  const handleCheckboxChange = (field, value) => {
    const currentValues = formik.values[field];
    const newValues = currentValues.includes(value)
      ? currentValues.filter(item => item !== value)
      : [...currentValues, value];
    formik.setFieldValue(field, newValues);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
          aria-label="Close modal"
        >
          <FaTimes className="text-xl" />
        </button>

        {/* Content */}
        <div className="p-6">
          {formSubmitted ? (
            // Success state
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Quote Request Sent!</h3>
              <p className="text-gray-600">
                We've received your {productType.toLowerCase()} quote request and will get back to you within 24 hours with pricing and details.
              </p>
            </div>
          ) : (
            // Form state
            <>
              {/* Header */}
              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="text-blue-600 text-xl" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {config.title}
                </h2>
                <p className="text-gray-600">
                  Get a personalized quote for your {productType.toLowerCase()} with design included
                </p>
              </div>

              {/* Error message */}
              {errorMessage && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
                  <p className="text-red-700 text-sm">{errorMessage}</p>
                </div>
              )}

              {/* Form */}
              <form onSubmit={formik.handleSubmit} className="space-y-6">
                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      <FaUser className="inline mr-2 text-gray-400" />
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                        formik.touched.name && formik.errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {formik.touched.name && formik.errors.name && (
                      <p className="text-red-500 text-xs mt-1">{formik.errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      <FaEnvelope className="inline mr-2 text-gray-400" />
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                        formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {formik.touched.email && formik.errors.email && (
                      <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      <FaPhone className="inline mr-2 text-gray-400" />
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      <FaBuilding className="inline mr-2 text-gray-400" />
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formik.values.company}
                      onChange={formik.handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Product Specifications */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Product Specifications</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Quantity *
                      </label>
                      <input
                        type="number"
                        name="quantity"
                        min="1"
                        value={formik.values.quantity}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                          formik.touched.quantity && formik.errors.quantity ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {formik.touched.quantity && formik.errors.quantity && (
                        <p className="text-red-500 text-xs mt-1">{formik.errors.quantity}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Material *
                      </label>
                      <select
                        name="material"
                        value={formik.values.material}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                          formik.touched.material && formik.errors.material ? 'border-red-500' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Select material</option>
                        {config.fields.materials.map(material => (
                          <option key={material} value={material}>{material}</option>
                        ))}
                      </select>
                      {formik.touched.material && formik.errors.material && (
                        <p className="text-red-500 text-xs mt-1">{formik.errors.material}</p>
                      )}
                    </div>
                  </div>

                  {/* Additional product-specific fields */}
                  {config.fields.collarTypes && (
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Collar Type
                      </label>
                      <select
                        name="collarType"
                        value={formik.values.collarType}
                        onChange={formik.handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      >
                        <option value="">Select collar type</option>
                        {config.fields.collarTypes.map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  )}

                  {config.fields.hoodieTypes && (
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Hoodie Type
                      </label>
                      <select
                        name="hoodieType"
                        value={formik.values.hoodieType}
                        onChange={formik.handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      >
                        <option value="">Select hoodie type</option>
                        {config.fields.hoodieTypes.map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  )}

                  {config.fields.safetyStandards && (
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Safety Standard
                      </label>
                      <select
                        name="safetyStandard"
                        value={formik.values.safetyStandard}
                        onChange={formik.handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      >
                        <option value="">Select safety standard</option>
                        {config.fields.safetyStandards.map(standard => (
                          <option key={standard} value={standard}>{standard}</option>
                        ))}
                      </select>
                    </div>
                  )}

                  {config.fields.neckTypes && (
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Neck Type
                      </label>
                      <select
                        name="neckType"
                        value={formik.values.neckType}
                        onChange={formik.handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      >
                        <option value="">Select neck type</option>
                        {config.fields.neckTypes.map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  )}

                  {/* Colors */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Colors * (Select all that apply)
                    </label>
                    <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
                      {config.fields.colors.map(color => (
                        <label key={color} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formik.values.colors.includes(color)}
                            onChange={() => handleCheckboxChange('colors', color)}
                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="text-sm">{color}</span>
                        </label>
                      ))}
                    </div>
                    {formik.touched.colors && formik.errors.colors && (
                      <p className="text-red-500 text-xs mt-1">{formik.errors.colors}</p>
                    )}
                  </div>

                  {/* Sizes */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Sizes * (Select all that apply)
                    </label>
                    <div className="grid grid-cols-4 md:grid-cols-7 gap-2">
                      {config.fields.sizes.map(size => (
                        <label key={size} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formik.values.sizes.includes(size)}
                            onChange={() => handleCheckboxChange('sizes', size)}
                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="text-sm">{size}</span>
                        </label>
                      ))}
                    </div>
                    {formik.touched.sizes && formik.errors.sizes && (
                      <p className="text-red-500 text-xs mt-1">{formik.errors.sizes}</p>
                    )}
                  </div>

                  {/* Print Placements */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Print Placements * (Select all that apply)
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {config.fields.placements.map(placement => (
                        <label key={placement} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formik.values.placements.includes(placement)}
                            onChange={() => handleCheckboxChange('placements', placement)}
                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="text-sm">{placement}</span>
                        </label>
                      ))}
                    </div>
                    {formik.touched.placements && formik.errors.placements && (
                      <p className="text-red-500 text-xs mt-1">{formik.errors.placements}</p>
                    )}
                  </div>
                </div>

                {/* Design Details */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Design Details</h3>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Design Details
                    </label>
                    <textarea
                      name="designDetails"
                      value={formik.values.designDetails}
                      onChange={formik.handleChange}
                      rows="3"
                      placeholder="Describe your design requirements, logo details, text, colors, etc."
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Additional Requirements
                    </label>
                    <textarea
                      name="additionalRequirements"
                      value={formik.values.additionalRequirements}
                      onChange={formik.handleChange}
                      rows="2"
                      placeholder="Any special requirements, deadlines, packaging needs, etc."
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formik.isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                >
                  {formik.isSubmitting ? (
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : null}
                  Get {productType} Quote
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClothingQuoteForm;