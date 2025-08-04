import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FaTimes, FaUser, FaEnvelope, FaPhone, FaBuilding, FaLeaf } from 'react-icons/fa';

const BagasseQuoteForm = ({ isOpen, onClose }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Form validation schema
  const bagasseQuoteSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string(),
    company: Yup.string(),
    businessType: Yup.string().required('Please select your business type'),
    quantity: Yup.number().min(500, 'Minimum order is 500 units').required('Quantity is required'),
    boxSize: Yup.string().required('Please select a box size'),
    customPrinting: Yup.string().required('Please specify printing requirements'),
    deliveryFrequency: Yup.string(),
    additionalRequirements: Yup.string()
  });

  // Setup formik
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      businessType: '',
      quantity: '',
      boxSize: '',
      customPrinting: '',
      deliveryFrequency: '',
      weeklyDelivery: false,
      urgentOrder: false,
      sampleRequest: false,
      additionalRequirements: ''
    },
    validationSchema: bagasseQuoteSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        setErrorMessage('');
        
        // Create detailed message
        const message = `Eco-Friendly Bagasse Burger Box Quote Request:

Contact Information:
Name: ${values.name}
Email: ${values.email}
Phone: ${values.phone || 'Not provided'}
Company: ${values.company || 'Not provided'}
Business Type: ${values.businessType}

Order Specifications:
Product: Bagasse Burger Boxes
Quantity: ${values.quantity} units
Box Size: ${values.boxSize}
Custom Printing: ${values.customPrinting}
${values.deliveryFrequency ? `Delivery Frequency: ${values.deliveryFrequency}` : ''}

Service Options:
${values.weeklyDelivery ? '✓ Weekly Delivery Service Requested' : '✗ Standard Delivery'}
${values.sampleRequest ? '✓ Free Samples Requested' : '✗ No Samples Needed'}
${values.urgentOrder ? '✓ URGENT ORDER - Rush Service Needed' : '✗ Standard Lead Time OK'}

Additional Requirements:
${values.additionalRequirements || 'None specified'}

Sustainability Focus: Customer is interested in eco-friendly bagasse packaging solutions.

This is a quote request from the bagasse burger boxes page.`;

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
            productInterest: 'Bagasse Burger Boxes Quote Request'
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
        
        // Close modal after 4 seconds
        setTimeout(() => {
          setFormSubmitted(false);
          onClose();
        }, 4000);
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
              <h3 className="text-xl font-bold text-gray-800 mb-2">Quote Request Sent! 🌱</h3>
              <p className="text-gray-600 mb-4">
                Thank you for choosing eco-friendly packaging! We've received your bagasse burger box quote request and will get back to you within 24 hours with pricing and delivery details.
              </p>
              <p className="text-sm text-green-600 font-medium">
                Together, we're making a positive impact on the environment! 🌍
              </p>
            </div>
          ) : (
            // Form state
            <>
              {/* Header */}
              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaLeaf className="text-green-600 text-xl" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Bagasse Burger Box Quote
                </h2>
                <p className="text-gray-600">
                  Get a personalized quote for eco-friendly bagasse burger boxes with fast delivery across Ireland
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
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors ${
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
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors ${
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
                      placeholder="+353 1 234 5678"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
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
                      placeholder="Your business name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Business Information */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Business Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Business Type *
                      </label>
                      <select
                        name="businessType"
                        value={formik.values.businessType}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors ${
                          formik.touched.businessType && formik.errors.businessType ? 'border-red-500' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Select business type</option>
                        <option value="Restaurant">Restaurant</option>
                        <option value="Fast Food Chain">Fast Food Chain</option>
                        <option value="Food Truck">Food Truck</option>
                        <option value="Takeaway">Takeaway</option>
                        <option value="Catering Company">Catering Company</option>
                        <option value="Cafe">Cafe</option>
                        <option value="Delivery Service">Delivery Service</option>
                        <option value="Hotel/Hospitality">Hotel/Hospitality</option>
                        <option value="School/Hospital">School/Hospital</option>
                        <option value="Other">Other</option>
                      </select>
                      {formik.touched.businessType && formik.errors.businessType && (
                        <p className="text-red-500 text-xs mt-1">{formik.errors.businessType}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Quantity Needed *
                      </label>
                      <select
                        name="quantity"
                        value={formik.values.quantity}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors ${
                          formik.touched.quantity && formik.errors.quantity ? 'border-red-500' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Select quantity</option>
                        <option value="500">500 units (Minimum Order)</option>
                        <option value="1000">1,000 units</option>
                        <option value="2500">2,500 units</option>
                        <option value="5000">5,000 units</option>
                        <option value="10000">10,000 units</option>
                        <option value="25000">25,000+ units</option>
                        <option value="custom">Custom Quantity</option>
                      </select>
                      {formik.touched.quantity && formik.errors.quantity && (
                        <p className="text-red-500 text-xs mt-1">{formik.errors.quantity}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Product Specifications */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Product Specifications</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Box Size *
                      </label>
                      <select
                        name="boxSize"
                        value={formik.values.boxSize}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors ${
                          formik.touched.boxSize && formik.errors.boxSize ? 'border-red-500' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Select box size</option>
                        <option value="Standard Burger (4.5 inch)">Standard Burger (4.5 inch)</option>
                        <option value="Large Burger (5 inch)">Large Burger (5 inch)</option>
                        <option value="Gourmet Burger (5.5 inch)">Gourmet Burger (5.5 inch)</option>
                        <option value="XL Burger (6 inch)">XL Burger (6 inch)</option>
                        <option value="Sandwich Box">Sandwich Box</option>
                        <option value="Mixed Sizes">Mixed Sizes</option>
                        <option value="Custom Size">Custom Size</option>
                      </select>
                      {formik.touched.boxSize && formik.errors.boxSize && (
                        <p className="text-red-500 text-xs mt-1">{formik.errors.boxSize}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Custom Printing *
                      </label>
                      <select
                        name="customPrinting"
                        value={formik.values.customPrinting}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors ${
                          formik.touched.customPrinting && formik.errors.customPrinting ? 'border-red-500' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Select printing option</option>
                        <option value="No Printing (Plain)">No Printing (Plain)</option>
                        <option value="Logo Only">Logo Only</option>
                        <option value="Logo + Business Name">Logo + Business Name</option>
                        <option value="Full Branding Design">Full Branding Design</option>
                        <option value="Environmental Message">Environmental Message</option>
                        <option value="Custom Design Required">Custom Design Required</option>
                      </select>
                      {formik.touched.customPrinting && formik.errors.customPrinting && (
                        <p className="text-red-500 text-xs mt-1">{formik.errors.customPrinting}</p>
                      )}
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Delivery Frequency
                    </label>
                    <select
                      name="deliveryFrequency"
                      value={formik.values.deliveryFrequency}
                      onChange={formik.handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                    >
                      <option value="">Select delivery frequency</option>
                      <option value="One-time Order">One-time Order</option>
                      <option value="Weekly">Weekly</option>
                      <option value="Bi-weekly">Bi-weekly</option>
                      <option value="Monthly">Monthly</option>
                      <option value="Quarterly">Quarterly</option>
                      <option value="As Needed">As Needed</option>
                    </select>
                  </div>
                </div>

                {/* Service Options */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Service Options</h3>
                  
                  <div className="space-y-3">
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="weeklyDelivery"
                        checked={formik.values.weeklyDelivery}
                        onChange={formik.handleChange}
                        className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                      />
                      <span className="text-sm text-gray-700">
                        <strong>Weekly Delivery Service</strong> - Automated weekly deliveries to ensure you never run out
                      </span>
                    </label>

                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="sampleRequest"
                        checked={formik.values.sampleRequest}
                        onChange={formik.handleChange}
                        className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                      />
                      <span className="text-sm text-gray-700">
                        <strong>Free Samples</strong> - Request free samples to test quality before ordering
                      </span>
                    </label>

                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="urgentOrder"
                        checked={formik.values.urgentOrder}
                        onChange={formik.handleChange}
                        className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                      />
                      <span className="text-sm text-gray-700">
                        <strong>Rush Order</strong> - I need this order urgently (faster than 7-10 business days)
                      </span>
                    </label>
                  </div>
                </div>

                {/* Additional Requirements */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Additional Information</h3>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Additional Requirements or Questions
                    </label>
                    <textarea
                      name="additionalRequirements"
                      value={formik.values.additionalRequirements}
                      onChange={formik.handleChange}
                      rows="3"
                      placeholder="Any special requirements, deadlines, design details, sustainability goals, or questions about our bagasse burger boxes..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Environmental Message */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <div className="text-green-600 mt-1">
                      <FaLeaf className="text-lg" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-800 mb-1">Environmental Impact</h4>
                      <p className="text-sm text-green-700">
                        By choosing our bagasse burger boxes, you're helping reduce plastic waste and supporting sustainable packaging made from renewable sugarcane fiber. Every box is 100% biodegradable and compostable.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formik.isSubmitting}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 disabled:from-green-400 disabled:to-emerald-400 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                >
                  {formik.isSubmitting ? (
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    <FaLeaf className="mr-2" />
                  )}
                  Get Eco-Friendly Quote
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BagasseQuoteForm;