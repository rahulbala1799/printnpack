import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FaTimes, FaUser, FaEnvelope, FaPhone, FaBuilding, FaBoxOpen } from 'react-icons/fa';

const LeadgenPopup = () => {
  const router = useRouter();
  const [showPopup, setShowPopup] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Check if we should show the popup
  useEffect(() => {
    const checkShowPopup = () => {
      // Only show on products page and home page
      if (router.pathname !== '/products' && router.pathname !== '/') return;

      // Check if user has already seen/dismissed popup
      const popupDismissed = localStorage.getItem('leadgen_popup_dismissed');
      const popupConverted = localStorage.getItem('leadgen_popup_converted');
      const lastShown = localStorage.getItem('leadgen_popup_last_shown');
      
      // Don't show if user converted or dismissed within 30 days
      if (popupConverted === 'true') return;
      if (popupDismissed && Date.now() - parseInt(popupDismissed) < 30 * 24 * 60 * 60 * 1000) return;
      if (lastShown && Date.now() - parseInt(lastShown) < 24 * 60 * 60 * 1000) return; // 24 hour gap

      // Show after 5 seconds
      const timer = setTimeout(() => {
        setShowPopup(true);
        localStorage.setItem('leadgen_popup_last_shown', Date.now().toString());
      }, 5000);

      return () => clearTimeout(timer);
    };

    checkShowPopup();
  }, [router.pathname]);

  // Form validation schema
  const leadgenSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string(),
    company: Yup.string(),
    productsInterested: Yup.string()
  });

  // Track conversion
  const trackConversion = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {'send_to': 'AW-17101649834/WakQCK-pt88aEKrv2do_'});
    }
  };

  // Handle popup close
  const handleClose = () => {
    setShowPopup(false);
    localStorage.setItem('leadgen_popup_dismissed', Date.now().toString());
  };

  // Setup formik
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      productsInterested: ''
    },
    validationSchema: leadgenSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        setErrorMessage('');
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...values,
            message: `Lead Generation Form Submission:
Name: ${values.name}
Email: ${values.email}
Phone: ${values.phone || 'Not provided'}
Company: ${values.company || 'Not provided'}
Products Interested In: ${values.productsInterested || 'Not specified'}

This is a lead from the website popup form.`,
            productInterest: 'Lead Generation Popup'
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || data.message || 'Failed to send message');
        }

        // Show success message
        setFormSubmitted(true);
        
        // Track conversion
        trackConversion();
        
        // Mark as converted
        localStorage.setItem('leadgen_popup_converted', 'true');
        
        // Reset form
        resetForm();
        
        // Hide popup after 3 seconds
        setTimeout(() => {
          setShowPopup(false);
        }, 3000);
      } catch (error) {
  
        setErrorMessage(error.message || 'Failed to send message. Please try again later.');
      } finally {
        setSubmitting(false);
      }
    },
  });

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        handleClose();
      }
    };
    
    if (showPopup) {
      document.addEventListener('keydown', handleEsc, false);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    }

    return () => {
      document.removeEventListener('keydown', handleEsc, false);
      document.body.style.overflow = 'unset';
    };
  }, [showPopup]);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
          aria-label="Close popup"
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
              <h3 className="text-xl font-bold text-gray-800 mb-2">Thank You!</h3>
              <p className="text-gray-600">
                We've received your information and will contact you soon regarding your packaging needs.
              </p>
            </div>
          ) : (
            // Form state
            <>
              {/* Header */}
              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaBoxOpen className="text-blue-600 text-xl" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Get Your Custom Quote
                </h2>
                <p className="text-gray-600">
                  Tell us about your packaging needs and we'll provide a personalized solution.
                </p>
              </div>

              {/* Error message */}
              {errorMessage && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
                  <p className="text-red-700 text-sm">{errorMessage}</p>
                </div>
              )}

              {/* Form */}
              <form onSubmit={formik.handleSubmit} className="space-y-4">
                {/* Name - Required */}
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
                    placeholder="Your full name"
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                      formik.touched.name && formik.errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {formik.touched.name && formik.errors.name && (
                    <p className="text-red-500 text-xs mt-1">{formik.errors.name}</p>
                  )}
                </div>

                {/* Email - Required */}
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
                    placeholder="your@email.com"
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                      formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>
                  )}
                </div>

                {/* Phone - Optional */}
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>

                {/* Company - Optional */}
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
                    placeholder="Your company name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>

                {/* Products Interested In - Optional */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <FaBoxOpen className="inline mr-2 text-gray-400" />
                    Products Interested In
                  </label>
                  <select
                    name="productsInterested"
                    value={formik.values.productsInterested}
                    onChange={formik.handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    <option value="">Select a category</option>
                    <option value="Packaging">Packaging</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Wide Format Printing">Wide Format Printing</option>
                    <option value="Foamex Boards">Foamex Boards</option>
                    <option value="Leaflets & Flyers">Leaflets & Flyers</option>
                  </select>
                </div>

                {/* Privacy Notice */}
                <div className="bg-gray-50 rounded-lg p-3 text-xs text-gray-600">
                  <p>
                    <strong>Privacy Notice:</strong> Your information will only be used to contact you regarding your packaging enquiry. 
                    We do not send marketing emails or process your data for any other purpose.
                  </p>
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
                  Get My Custom Quote
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeadgenPopup; 