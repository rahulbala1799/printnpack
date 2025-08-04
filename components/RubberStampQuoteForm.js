import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FaTimes, FaUser, FaEnvelope, FaPhone, FaBuilding, FaStamp } from 'react-icons/fa';

const RubberStampQuoteForm = ({ isOpen, onClose, stampType }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Stamp-specific form configurations
  const stampConfigs = {
    'Custom Business Stamps': {
      icon: FaStamp,
      title: 'Custom Business Stamp Quote',
      fields: {
        stampSizes: ['20mm x 20mm', '25mm x 25mm', '30mm x 30mm', '40mm x 40mm', '50mm x 50mm', '60mm x 60mm', 'Custom Size'],
        inkColors: ['Black', 'Blue', 'Red', 'Green', 'Purple', 'Custom Color'],
        stampTypes: ['Self-Inking', 'Traditional with Ink Pad', 'Pre-Inked'],
        textLines: ['1 Line', '2 Lines', '3 Lines', '4 Lines', '5+ Lines'],
        logoOptions: ['Text Only', 'Logo + Text', 'Logo Only', 'Complex Design']
      }
    },
    'Traditional Hand Stamps': {
      icon: FaStamp,
      title: 'Traditional Hand Stamp Quote',
      fields: {
        stampSizes: ['15mm x 15mm', '20mm x 20mm', '25mm x 25mm', '30mm x 30mm', '40mm x 40mm', 'Custom Size'],
        inkColors: ['Black', 'Blue', 'Red', 'Green', 'Purple'],
        handleTypes: ['Wooden Handle', 'Plastic Handle'],
        textLines: ['1 Line', '2 Lines', '3 Lines', '4 Lines'],
        logoOptions: ['Text Only', 'Logo + Text', 'Simple Logo']
      }
    },
    'Signature Stamps': {
      icon: FaStamp,
      title: 'Signature Stamp Quote',
      fields: {
        stampSizes: ['40mm x 15mm', '50mm x 20mm', '60mm x 25mm', '70mm x 30mm', 'Custom Size'],
        inkColors: ['Black', 'Blue', 'Red'],
        stampTypes: ['Self-Inking', 'Traditional with Ink Pad', 'Pre-Inked'],
        signatureTypes: ['Signature Only', 'Signature + Name', 'Signature + Title', 'Signature + Name + Title'],
        logoOptions: ['Signature Only', 'Signature + Company Logo']
      }
    }
  };

  const config = stampConfigs[stampType] || stampConfigs['Custom Business Stamps'];
  const IconComponent = config.icon;

  // Form validation schema
  const stampQuoteSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string(),
    company: Yup.string(),
    quantity: Yup.number().min(1, 'Minimum quantity is 1').required('Quantity is required'),
    stampSize: Yup.string().required('Please select a stamp size'),
    inkColor: Yup.string().required('Please select an ink color'),
    textContent: Yup.string().required('Please provide the text/content for your stamp'),
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
      stampSize: '',
      inkColor: '',
      textContent: '',
      textLines: '',
      logoOption: '',
      additionalRequirements: '',
      urgentOrder: false,
      ...(config.fields.stampTypes && { stampType: '' }),
      ...(config.fields.handleTypes && { handleType: '' }),
      ...(config.fields.signatureTypes && { signatureType: '' })
    },
    validationSchema: stampQuoteSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        setErrorMessage('');
        
        // Create detailed message
        const message = `${stampType} Quote Request:

Contact Information:
Name: ${values.name}
Email: ${values.email}
Phone: ${values.phone || 'Not provided'}
Company: ${values.company || 'Not provided'}

Stamp Specifications:
Stamp Type: ${stampType}
Quantity: ${values.quantity}
Size: ${values.stampSize}
Ink Color: ${values.inkColor}
${values.stampType ? `Stamp Type: ${values.stampType}` : ''}
${values.handleType ? `Handle Type: ${values.handleType}` : ''}
${values.signatureType ? `Signature Type: ${values.signatureType}` : ''}
${values.textLines ? `Number of Text Lines: ${values.textLines}` : ''}
${values.logoOption ? `Logo Option: ${values.logoOption}` : ''}

Text/Content for Stamp:
${values.textContent}

Additional Requirements:
${values.additionalRequirements || 'None specified'}

${values.urgentOrder ? 'URGENT ORDER - Customer needs this ASAP' : ''}

This is a quote request from the rubber stamps page.`;

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
            productInterest: `${stampType} Quote Request`
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
                We've received your {stampType.toLowerCase()} quote request and will get back to you within 24 hours with pricing and production details.
              </p>
            </div>
          ) : (
            // Form state
            <>
              {/* Header */}
              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="text-purple-600 text-xl" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {config.title}
                </h2>
                <p className="text-gray-600">
                  Get a personalized quote for your {stampType.toLowerCase()} with fast turnaround
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
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors ${
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
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors ${
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Stamp Specifications */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Stamp Specifications</h3>
                  
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
                        className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors ${
                          formik.touched.quantity && formik.errors.quantity ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {formik.touched.quantity && formik.errors.quantity && (
                        <p className="text-red-500 text-xs mt-1">{formik.errors.quantity}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Stamp Size *
                      </label>
                      <select
                        name="stampSize"
                        value={formik.values.stampSize}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors ${
                          formik.touched.stampSize && formik.errors.stampSize ? 'border-red-500' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Select stamp size</option>
                        {config.fields.stampSizes.map(size => (
                          <option key={size} value={size}>{size}</option>
                        ))}
                      </select>
                      {formik.touched.stampSize && formik.errors.stampSize && (
                        <p className="text-red-500 text-xs mt-1">{formik.errors.stampSize}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Ink Color *
                      </label>
                      <select
                        name="inkColor"
                        value={formik.values.inkColor}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors ${
                          formik.touched.inkColor && formik.errors.inkColor ? 'border-red-500' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Select ink color</option>
                        {config.fields.inkColors.map(color => (
                          <option key={color} value={color}>{color}</option>
                        ))}
                      </select>
                      {formik.touched.inkColor && formik.errors.inkColor && (
                        <p className="text-red-500 text-xs mt-1">{formik.errors.inkColor}</p>
                      )}
                    </div>

                    {config.fields.textLines && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Number of Text Lines
                        </label>
                        <select
                          name="textLines"
                          value={formik.values.textLines}
                          onChange={formik.handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                        >
                          <option value="">Select text lines</option>
                          {config.fields.textLines.map(lines => (
                            <option key={lines} value={lines}>{lines}</option>
                          ))}
                        </select>
                      </div>
                    )}
                  </div>

                  {/* Additional stamp-specific fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    {config.fields.stampTypes && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Stamp Type
                        </label>
                        <select
                          name="stampType"
                          value={formik.values.stampType}
                          onChange={formik.handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                        >
                          <option value="">Select stamp type</option>
                          {config.fields.stampTypes.map(type => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>
                    )}

                    {config.fields.handleTypes && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Handle Type
                        </label>
                        <select
                          name="handleType"
                          value={formik.values.handleType}
                          onChange={formik.handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                        >
                          <option value="">Select handle type</option>
                          {config.fields.handleTypes.map(type => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>
                    )}

                    {config.fields.signatureTypes && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Signature Type
                        </label>
                        <select
                          name="signatureType"
                          value={formik.values.signatureType}
                          onChange={formik.handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                        >
                          <option value="">Select signature type</option>
                          {config.fields.signatureTypes.map(type => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>
                    )}

                    {config.fields.logoOptions && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Logo/Design Option
                        </label>
                        <select
                          name="logoOption"
                          value={formik.values.logoOption}
                          onChange={formik.handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                        >
                          <option value="">Select logo option</option>
                          {config.fields.logoOptions.map(option => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                      </div>
                    )}
                  </div>
                </div>

                {/* Stamp Content */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Stamp Content</h3>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Text/Content for Stamp *
                    </label>
                    <textarea
                      name="textContent"
                      value={formik.values.textContent}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      rows="4"
                      placeholder="Enter the exact text you want on your stamp. Include line breaks, company name, address, phone, etc."
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors ${
                        formik.touched.textContent && formik.errors.textContent ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {formik.touched.textContent && formik.errors.textContent && (
                      <p className="text-red-500 text-xs mt-1">{formik.errors.textContent}</p>
                    )}
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
                      placeholder="Any special requirements, font preferences, logo details, deadlines, etc."
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="urgentOrder"
                        checked={formik.values.urgentOrder}
                        onChange={formik.handleChange}
                        className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                      />
                      <span className="text-sm text-gray-700">This is an urgent order (same day/next day service needed)</span>
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formik.isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 disabled:from-purple-400 disabled:to-indigo-400 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                >
                  {formik.isSubmitting ? (
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : null}
                  Get {stampType} Quote
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RubberStampQuoteForm;