import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FaTimes, FaUser, FaEnvelope, FaPhone, FaBuilding, FaImage } from 'react-icons/fa';

const CorrexQuoteForm = ({ isOpen, onClose, productType }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Product-specific form configurations
  const productConfigs = {
    '2mm/3mm Correx': {
      icon: FaImage,
      title: '2mm/3mm Correx Board Quote Request',
      fields: {
        thickness: '2mm/3mm',
        applications: ['Indoor Displays', 'Short-term Promotions', 'Lightweight Signs', 'High-volume Campaigns'],
        recommended: 'Most economical option for large quantities and short-term use'
      }
    },
    '4mm Correx': {
      icon: FaImage,
      title: '4mm Correx Board Quote Request',
      fields: {
        thickness: '4mm',
        applications: ['Outdoor Applications', 'Election Signs', 'Real Estate Boards', 'Construction Site Info'],
        recommended: 'Our most popular option - perfect balance of durability and value'
      }
    },
    '5mm/8mm Correx': {
      icon: FaImage,
      title: '5mm/8mm Correx Board Quote Request',
      fields: {
        thickness: '5mm/8mm',
        applications: ['Long-term Outdoor', 'Exposed Locations', 'Larger Format Displays', 'Premium Property Signs'],
        recommended: 'Maximum durability for long-term outdoor installations'
      }
    },
    'Staked Correx System': {
      icon: FaImage,
      title: 'Staked Correx System Quote Request',
      fields: {
        thickness: 'All thicknesses available',
        applications: ['Election Campaigns', 'Real Estate Yard Signs', 'Directional Signage', 'Event Announcements'],
        recommended: 'Complete ready-to-install system with mounting hardware included'
      }
    }
  };

  const config = productConfigs[productType] || productConfigs['4mm Correx'];
  const IconComponent = config.icon;

  // Form validation schema
  const quoteSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string(),
    company: Yup.string(),
    quantity: Yup.number().min(1, 'Minimum quantity is 1').required('Quantity is required'),
    thickness: Yup.string().required('Please select a thickness'),
    size: Yup.string().required('Please select a size'),
    mounting: Yup.string().required('Please select a mounting option'),
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
      thickness: '',
      size: '',
      mounting: '',
      designDetails: '',
      additionalRequirements: ''
    },
    validationSchema: quoteSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        setErrorMessage('');
        
        // Create detailed message
        const message = `Correx Board Quote Request:

Contact Information:
Name: ${values.name}
Email: ${values.email}
Phone: ${values.phone || 'Not provided'}
Company: ${values.company || 'Not provided'}

Product Details:
Product Type: ${productType}
Quantity: ${values.quantity}
Thickness: ${values.thickness}
Size: ${values.size}
Mounting: ${values.mounting}

Design Details:
${values.designDetails || 'No specific design details provided'}

Additional Requirements:
${values.additionalRequirements || 'None specified'}

This is a quote request from the Correx Boards page.`;

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
                <p className="text-sm text-blue-600 mt-2 font-medium">
                  {config.recommended}
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
                        Thickness *
                      </label>
                      <select
                        name="thickness"
                        value={formik.values.thickness}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                          formik.touched.thickness && formik.errors.thickness ? 'border-red-500' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Select thickness</option>
                        <option value="2mm">2mm - Lightweight & Economical</option>
                        <option value="3mm">3mm - Lightweight & Economical</option>
                        <option value="4mm">4mm - Standard (Most Popular)</option>
                        <option value="5mm">5mm - Heavy-Duty</option>
                        <option value="8mm">8mm - Maximum Durability</option>
                      </select>
                      {formik.touched.thickness && formik.errors.thickness && (
                        <p className="text-red-500 text-xs mt-1">{formik.errors.thickness}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Size *
                      </label>
                      <select
                        name="size"
                        value={formik.values.size}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                          formik.touched.size && formik.errors.size ? 'border-red-500' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Select size</option>
                        <option value="A0">A0 - 841mm x 1189mm</option>
                        <option value="A1">A1 - 594mm x 841mm</option>
                        <option value="A2">A2 - 420mm x 594mm</option>
                        <option value="600mm x 450mm">600mm x 450mm</option>
                        <option value="800mm x 600mm">800mm x 600mm</option>
                        <option value="1220mm x 813mm">1220mm x 813mm</option>
                        <option value="Custom">Custom Size (Up to 2440mm x 1220mm)</option>
                      </select>
                      {formik.touched.size && formik.errors.size && (
                        <p className="text-red-500 text-xs mt-1">{formik.errors.size}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Mounting Option *
                      </label>
                      <select
                        name="mounting"
                        value={formik.values.mounting}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                          formik.touched.mounting && formik.errors.mounting ? 'border-red-500' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Select mounting option</option>
                        <option value="H-Stakes">H-Stakes (Lawn/Ground Installation)</option>
                        <option value="Wire Frames">Wire Frames</option>
                        <option value="Cable Ties">Cable Ties (Fence/Post Mounting)</option>
                        <option value="Screws">Screws with Washers (Wall Mounting)</option>
                        <option value="Double-Sided Tape">Double-Sided Tape (Temporary Indoor)</option>
                        <option value="Pre-drilled Holes">Pre-drilled Holes</option>
                        <option value="Stake Slots">Stake Slots</option>
                      </select>
                      {formik.touched.mounting && formik.errors.mounting && (
                        <p className="text-red-500 text-xs mt-1">{formik.errors.mounting}</p>
                      )}
                    </div>
                  </div>

                  {/* Applications */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Intended Application
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {config.fields.applications.map(application => (
                        <div key={application} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-sm text-gray-700">{application}</span>
                        </div>
                      ))}
                    </div>
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
                      placeholder="Describe your design requirements, logo details, text, colors, images, etc."
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
                      placeholder="Any special requirements, deadlines, installation needs, outdoor conditions, etc."
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

export default CorrexQuoteForm;
