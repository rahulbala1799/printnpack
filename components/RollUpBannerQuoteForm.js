import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FaTimes, FaUser, FaEnvelope, FaPhone, FaBuilding, FaImage } from 'react-icons/fa';

const RollUpBannerQuoteForm = ({ isOpen, onClose, productType }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Product-specific form configurations
  const productConfigs = {
    'Roll Up Banners': {
      icon: FaImage,
      title: 'Roll Up Banner Quote Request',
      fields: {
        material: 'Premium Vinyl',
        applications: ['Trade Shows', 'Exhibitions', 'Retail Displays', 'Corporate Events', 'Reception Areas'],
        recommended: 'Professional roll-up banners perfect for trade shows and corporate displays'
      }
    },
    'Premium Roll Up': {
      icon: FaImage,
      title: 'Premium Roll Up Banner Quote Request',
      fields: {
        material: 'Premium Vinyl + Aluminium',
        applications: ['High-end Exhibitions', 'Corporate Headquarters', 'Premium Retail', 'VIP Events', 'Executive Offices'],
        recommended: 'Premium quality with aluminium frame for maximum durability and professional appearance'
      }
    },
    'Lightweight Roll Up': {
      icon: FaImage,
      title: 'Lightweight Roll Up Banner Quote Request',
      fields: {
        material: 'Lightweight Vinyl',
        applications: ['Travel Exhibitions', 'Mobile Sales', 'Temporary Displays', 'Event Marketing', 'Portable Displays'],
        recommended: 'Lightweight and portable for easy transport and setup'
      }
    },
    'Custom Roll Up System': {
      icon: FaImage,
      title: 'Custom Roll Up System Quote Request',
      fields: {
        material: 'Custom Materials',
        applications: ['Special Events', 'Unique Displays', 'Branded Systems', 'Custom Sizes', 'Specialty Applications'],
        recommended: 'Fully customized roll-up system to your exact specifications'
      }
    }
  };

  const config = productConfigs[productType] || productConfigs['Roll Up Banners'];
  const IconComponent = config.icon;

  // Form validation schema
  const quoteSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string(),
    company: Yup.string(),
    quantity: Yup.number().min(1, 'Minimum quantity is 1').required('Quantity is required'),
    size: Yup.string().required('Please select a size'),
    material: Yup.string().required('Please select a material type'),
    frame: Yup.string().required('Please select a frame type'),
    printing: Yup.string().required('Please select a printing option'),
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
      size: '',
      material: '',
      frame: '',
      printing: '',
      designDetails: '',
      additionalRequirements: ''
    },
    validationSchema: quoteSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        setErrorMessage('');
        
        // Create detailed message
        const message = `Roll Up Banner Quote Request:

Contact Information:
Name: ${values.name}
Email: ${values.email}
Phone: ${values.phone || 'Not provided'}
Company: ${values.company || 'Not provided'}

Product Details:
Product Type: ${productType}
Quantity: ${values.quantity}
Size: ${values.size}
Material: ${values.material}
Frame: ${values.frame}
Printing: ${values.printing}

Design Details:
${values.designDetails || 'No specific design details provided'}

Additional Requirements:
${values.additionalRequirements || 'None specified'}

This is a quote request from the Roll Up Banners page.`;

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
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="text-orange-600 text-xl" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {config.title}
                </h2>
                <p className="text-gray-600">
                  Get a personalized quote for your {productType.toLowerCase()} with design included
                </p>
                <p className="text-sm text-orange-600 mt-2 font-medium">
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
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors ${
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
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors ${
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
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
                        className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors ${
                          formik.touched.quantity && formik.errors.quantity ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {formik.touched.quantity && formik.errors.quantity && (
                        <p className="text-red-500 text-xs mt-1">{formik.errors.quantity}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Size *
                      </label>
                      <select
                        name="size"
                        value={formik.values.size}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors ${
                          formik.touched.size && formik.errors.size ? 'border-red-500' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Select size</option>
                        <option value="800mm x 2000mm">800mm x 2000mm - Standard Size</option>
                        <option value="850mm x 2000mm">850mm x 2000mm - Wide Format</option>
                        <option value="1000mm x 2000mm">1000mm x 2000mm - Extra Wide</option>
                        <option value="1200mm x 2000mm">1200mm x 2000mm - Large Format</option>
                        <option value="Custom Size">Custom Size - Specify dimensions</option>
                      </select>
                      {formik.touched.size && formik.errors.size && (
                        <p className="text-red-500 text-xs mt-1">{formik.errors.size}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Material Type *
                      </label>
                      <select
                        name="material"
                        value={formik.values.material}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors ${
                          formik.touched.material && formik.errors.material ? 'border-red-500' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Select material</option>
                        <option value="Premium Vinyl">Premium Vinyl - High-quality outdoor durability</option>
                        <option value="Economy Vinyl">Economy Vinyl - Cost-effective indoor use</option>
                        <option value="Mesh Vinyl">Mesh Vinyl - Wind-resistant for outdoor events</option>
                        <option value="Backlit Vinyl">Backlit Vinyl - Illuminated displays</option>
                        <option value="Fabric Material">Fabric Material - Premium textile finish</option>
                      </select>
                      {formik.touched.material && formik.errors.material && (
                        <p className="text-red-500 text-xs mt-1">{formik.errors.material}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Frame Type *
                      </label>
                      <select
                        name="frame"
                        value={formik.values.frame}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors ${
                          formik.touched.frame && formik.errors.frame ? 'border-red-500' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Select frame type</option>
                        <option value="Aluminium Frame">Aluminium Frame - Premium durability</option>
                        <option value="Lightweight Frame">Lightweight Frame - Easy transport</option>
                        <option value="Heavy Duty Frame">Heavy Duty Frame - Maximum stability</option>
                        <option value="Travel Frame">Travel Frame - Compact for travel</option>
                        <option value="Custom Frame">Custom Frame - Special requirements</option>
                      </select>
                      {formik.touched.frame && formik.errors.frame && (
                        <p className="text-red-500 text-xs mt-1">{formik.errors.frame}</p>
                      )}
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Printing Option *
                    </label>
                    <select
                      name="printing"
                      value={formik.values.printing}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors ${
                        formik.touched.printing && formik.errors.printing ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select printing option</option>
                      <option value="UV Printing">UV Printing - High-quality outdoor durability</option>
                      <option value="Latex Printing">Latex Printing - Eco-friendly water-based inks</option>
                      <option value="Solvent Printing">Solvent Printing - Traditional outdoor printing</option>
                      <option value="Dye Sublimation">Dye Sublimation - Premium fabric printing</option>
                      <option value="Digital Printing">Digital Printing - Fast turnaround</option>
                    </select>
                    {formik.touched.printing && formik.errors.printing && (
                      <p className="text-red-500 text-xs mt-1">{formik.errors.printing}</p>
                    )}
                  </div>

                  {/* Applications */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Common Applications
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {config.fields.applications.map(application => (
                        <div key={application} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
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
                      placeholder="Any special requirements, deadlines, event details, setup needs, etc."
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formik.isSubmitting}
                  className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-orange-400 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
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

export default RollUpBannerQuoteForm;
