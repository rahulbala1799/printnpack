import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FaTimes, FaUser, FaEnvelope, FaPhone, FaBuilding } from 'react-icons/fa';

const SIZE_OPTIONS = [
  { id: 'xl', label: 'XL', dimensions: '200 × 200 cm' },
  { id: 'xxl', label: 'XXL', dimensions: '200 × 250 cm' },
  { id: 'xxxl', label: 'XXXL', dimensions: '200 × 300 cm' },
];

const BASE_OPTIONS = [{ id: 'silver-xl', label: 'Silver XL stand' }];

const quoteSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string(),
  company: Yup.string(),
  quantity: Yup.number().min(1, 'Minimum quantity is 1').required('Quantity is required'),
  size: Yup.string().required('Please select a size'),
  base: Yup.string().required('Please select a base'),
  designDetails: Yup.string(),
  additionalRequirements: Yup.string(),
});

const ExtraWideRollUpBannerQuoteForm = ({ isOpen, onClose, initialSize = 'xl', initialBase = 'silver-xl' }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      quantity: 1,
      size: initialSize,
      base: initialBase,
      designDetails: '',
      additionalRequirements: '',
    },
    validationSchema: quoteSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        setErrorMessage('');

        const sizeOption = SIZE_OPTIONS.find((s) => s.id === values.size);
        const baseOption = BASE_OPTIONS.find((b) => b.id === values.base);

        const message = `Extra Wide Roll Up Banner Quote Request:

Contact Information:
Name: ${values.name}
Email: ${values.email}
Phone: ${values.phone || 'Not provided'}
Company: ${values.company || 'Not provided'}

Product Details:
Product: Extra Wide Roll Up Banner
Quantity: ${values.quantity}
Size: ${sizeOption?.label || values.size} (${sizeOption?.dimensions || ''})
Base: ${baseOption?.label || values.base}
Material: Airtex 330
Print: Single-sided UV, full colour

Design Details:
${values.designDetails || 'No specific design details provided'}

Additional Requirements:
${values.additionalRequirements || 'None specified'}

This is a quote request from the Extra Wide Roll Up Banners page.`;

        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: values.name,
            email: values.email,
            phone: values.phone,
            company: values.company,
            message,
            productInterest: 'Extra Wide Roll Up Banner Quote Request',
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || data.message || 'Failed to send quote request');
        }

        setFormSubmitted(true);
        resetForm();
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

  useEffect(() => {
    if (isOpen) {
      formik.setFieldValue('size', initialSize);
      formik.setFieldValue('base', initialBase);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, initialSize, initialBase]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={onClose} />

      <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
          aria-label="Close modal"
        >
          <FaTimes className="text-xl" />
        </button>

        <div className="p-6">
          {formSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Quote Request Sent!</h3>
              <p className="text-gray-600">
                We&apos;ve received your extra wide roll up banner quote request and will get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <>
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Extra Wide Roll Up Banner Quote</h2>
                <p className="text-gray-600">
                  XL, XXL and XXXL sizes — Silver XL stand — UV full-colour print on Airtex 330
                </p>
              </div>

              {errorMessage && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
                  <p className="text-red-700 text-sm">{errorMessage}</p>
                </div>
              )}

              <form onSubmit={formik.handleSubmit} className="space-y-5">
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
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${
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
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                </div>

                <div className="border-t pt-5">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Product Options</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Quantity *</label>
                      <input
                        type="number"
                        name="quantity"
                        min="1"
                        value={formik.values.quantity}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${
                          formik.touched.quantity && formik.errors.quantity ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {formik.touched.quantity && formik.errors.quantity && (
                        <p className="text-red-500 text-xs mt-1">{formik.errors.quantity}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Size *</label>
                      <select
                        name="size"
                        value={formik.values.size}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${
                          formik.touched.size && formik.errors.size ? 'border-red-500' : 'border-gray-300'
                        }`}
                      >
                        {SIZE_OPTIONS.map((s) => (
                          <option key={s.id} value={s.id}>
                            {s.label} — {s.dimensions}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Base *</label>
                    <select
                      name="base"
                      value={formik.values.base}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    >
                      {BASE_OPTIONS.map((b) => (
                        <option key={b.id} value={b.id}>
                          {b.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Design Details</label>
                  <textarea
                    name="designDetails"
                    value={formik.values.designDetails}
                    onChange={formik.handleChange}
                    rows="3"
                    placeholder="Logo, artwork, text, colours, or attach file links..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Additional Requirements</label>
                  <textarea
                    name="additionalRequirements"
                    value={formik.values.additionalRequirements}
                    onChange={formik.handleChange}
                    rows="2"
                    placeholder="Event date, delivery address, assembly help, etc."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formik.isSubmitting}
                  className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-orange-400 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  {formik.isSubmitting ? 'Sending…' : 'Get Extra Wide Roll Up Banner Quote'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExtraWideRollUpBannerQuoteForm;
