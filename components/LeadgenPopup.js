import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const LeadgenPopup = () => {
  const router = useRouter();
  const [showPopup, setShowPopup] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showOptional, setShowOptional] = useState(false);
  const modalRef = useRef(null);

  // Check if we should show the popup
  useEffect(() => {
    const checkShowPopup = () => {
      if (router.pathname !== '/products' && router.pathname !== '/') return;

      const popupDismissed = localStorage.getItem('leadgen_popup_dismissed');
      const popupConverted = localStorage.getItem('leadgen_popup_converted');
      const lastShown = localStorage.getItem('leadgen_popup_last_shown');

      if (popupConverted === 'true') return;
      if (popupDismissed && Date.now() - parseInt(popupDismissed) < 30 * 24 * 60 * 60 * 1000) return;
      if (lastShown && Date.now() - parseInt(lastShown) < 24 * 60 * 60 * 1000) return;

      const timer = setTimeout(() => {
        setShowPopup(true);
        localStorage.setItem('leadgen_popup_last_shown', Date.now().toString());
        // Trigger entrance animation
        requestAnimationFrame(() => {
          requestAnimationFrame(() => setIsVisible(true));
        });
      }, 5000);

      return () => clearTimeout(timer);
    };

    checkShowPopup();
  }, [router.pathname]);

  const leadgenSchema = Yup.object().shape({
    name: Yup.string().required('Please enter your name'),
    email: Yup.string().email('Please enter a valid email').required('Please enter your email'),
    phone: Yup.string(),
    company: Yup.string(),
    productsInterested: Yup.string()
  });

  const trackConversion = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', { 'send_to': 'AW-17101649834/WakQCK-pt88aEKrv2do_' });
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      setShowPopup(false);
      localStorage.setItem('leadgen_popup_dismissed', Date.now().toString());
    }, 300);
  };

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
          headers: { 'Content-Type': 'application/json' },
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
        if (!response.ok) throw new Error(data.message || 'Something went wrong. Please try again or email us at info@printnpack.ie');

        setFormSubmitted(true);
        trackConversion();
        localStorage.setItem('leadgen_popup_converted', 'true');
        resetForm();

        setTimeout(() => {
          setIsVisible(false);
          setTimeout(() => setShowPopup(false), 300);
        }, 3000);
      } catch (error) {
        setErrorMessage(error.message || 'Failed to send. Please try again.');
      } finally {
        setSubmitting(false);
      }
    },
  });

  // ESC key and body scroll lock
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') handleClose();
    };

    if (showPopup) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [showPopup]);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={handleClose}
      />

      {/* Modal - bottom sheet on mobile, centered on desktop */}
      <div
        ref={modalRef}
        className={`relative w-full sm:max-w-lg bg-white sm:rounded-2xl rounded-t-2xl shadow-2xl transform transition-all duration-300 ease-out ${
          isVisible
            ? 'translate-y-0 opacity-100 sm:scale-100'
            : 'translate-y-full sm:translate-y-0 opacity-0 sm:scale-95'
        }`}
      >
        {/* Drag indicator - mobile only */}
        <div className="flex justify-center pt-3 sm:hidden">
          <div className="w-10 h-1 bg-gray-300 rounded-full" />
        </div>

        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-700 transition-colors z-10"
          aria-label="Close"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="px-5 pb-5 pt-4 sm:p-6 max-h-[85vh] sm:max-h-[90vh] overflow-y-auto">
          {formSubmitted ? (
            /* ===== Success State ===== */
            <div className="text-center py-6 sm:py-10">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
              <p className="text-gray-500 text-sm max-w-xs mx-auto">
                We'll be in touch shortly with your personalised packaging quote.
              </p>
            </div>
          ) : (
            /* ===== Form State ===== */
            <>
              {/* Header - compact on mobile */}
              <div className="mb-5 sm:mb-6 sm:text-center pr-8 sm:pr-0">
                <div className="hidden sm:flex w-12 h-12 bg-blue-50 rounded-xl items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Get a Free Quote
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Custom packaging tailored to your business needs
                </p>
              </div>

              {/* Offer banner */}
              <div className="flex items-center gap-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-3 mb-5 border border-blue-100">
                <div className="flex-shrink-0 w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-bold">%</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">15% off your first order</p>
                  <p className="text-xs text-gray-500">Plus free design consultation</p>
                </div>
              </div>

              {/* Error message */}
              {errorMessage && (
                <div className="flex items-center gap-2 bg-red-50 border border-red-100 rounded-xl p-3 mb-4">
                  <svg className="w-4 h-4 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <p className="text-red-700 text-sm">{errorMessage}</p>
                </div>
              )}

              {/* Form */}
              <form onSubmit={formik.handleSubmit} className="space-y-3.5">
                {/* Name & Email - side by side on desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* Name */}
                  <div>
                    <label htmlFor="leadgen-name" className="block text-xs font-medium text-gray-600 mb-1.5">
                      Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="leadgen-name"
                      type="text"
                      name="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder="John Smith"
                      className={`w-full px-3.5 py-2.5 bg-gray-50 border rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none ${
                        formik.touched.name && formik.errors.name
                          ? 'border-red-300 bg-red-50/50'
                          : 'border-gray-200'
                      }`}
                    />
                    {formik.touched.name && formik.errors.name && (
                      <p className="text-red-500 text-xs mt-1">{formik.errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="leadgen-email" className="block text-xs font-medium text-gray-600 mb-1.5">
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="leadgen-email"
                      type="email"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder="john@company.com"
                      className={`w-full px-3.5 py-2.5 bg-gray-50 border rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none ${
                        formik.touched.email && formik.errors.email
                          ? 'border-red-300 bg-red-50/50'
                          : 'border-gray-200'
                      }`}
                    />
                    {formik.touched.email && formik.errors.email && (
                      <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Product interest */}
                <div>
                  <label htmlFor="leadgen-product" className="block text-xs font-medium text-gray-600 mb-1.5">
                    What are you looking for?
                  </label>
                  <select
                    id="leadgen-product"
                    name="productsInterested"
                    value={formik.values.productsInterested}
                    onChange={formik.handleChange}
                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none appearance-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                      backgroundPosition: 'right 0.75rem center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: '1.25rem',
                    }}
                  >
                    <option value="">Select a category</option>
                    <option value="Packaging">Food & Retail Packaging</option>
                    <option value="Wide Format Printing">Wide Format Printing</option>
                    <option value="Leaflets & Flyers">Leaflets & Flyers</option>
                    <option value="Foamex Boards">Foamex Boards</option>
                    <option value="Correx Boards">Correx Boards</option>
                    <option value="Vinyl Stickers">Vinyl Stickers</option>
                    <option value="Roll Up Banners">Roll Up Banners</option>
                    <option value="Extra Wide Roll Up Banners">Extra Wide Roll Up Banners</option>
                    <option value="Clothing">Branded Clothing</option>
                  </select>
                </div>

                {/* Optional fields toggle */}
                {!showOptional && (
                  <button
                    type="button"
                    onClick={() => setShowOptional(true)}
                    className="text-xs text-blue-600 hover:text-blue-800 font-medium transition-colors"
                  >
                    + Add phone & company (optional)
                  </button>
                )}

                {/* Optional fields - collapsible */}
                {showOptional && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 animate-fade-in">
                    <div>
                      <label htmlFor="leadgen-phone" className="block text-xs font-medium text-gray-600 mb-1.5">
                        Phone
                      </label>
                      <input
                        id="leadgen-phone"
                        type="tel"
                        name="phone"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        placeholder="+353 1 234 5678"
                        className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="leadgen-company" className="block text-xs font-medium text-gray-600 mb-1.5">
                        Company
                      </label>
                      <input
                        id="leadgen-company"
                        type="text"
                        name="company"
                        value={formik.values.company}
                        onChange={formik.handleChange}
                        placeholder="Company name"
                        className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none"
                      />
                    </div>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={formik.isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 disabled:bg-blue-400 text-white font-semibold py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm shadow-blue-600/25"
                >
                  {formik.isSubmitting ? (
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                  ) : (
                    <>
                      Get My Free Quote
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>

                {/* Privacy - minimal */}
                <p className="text-[11px] text-gray-400 text-center leading-relaxed">
                  Your info is used only for this quote. No spam, no marketing emails.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeadgenPopup;
