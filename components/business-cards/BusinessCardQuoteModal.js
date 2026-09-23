import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FaTimes, FaUser, FaEnvelope, FaPhone, FaBuilding } from 'react-icons/fa';
import {
  BUSINESS_CARD_GSM,
  BUSINESS_CARD_SIZE,
  formatBusinessCardQuoteSummary,
  getBusinessCardDelivery,
  getBusinessCardTier,
} from '../../data/business-cards-options';

const quoteSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string(),
  company: Yup.string(),
  additionalNotes: Yup.string(),
});

export default function BusinessCardQuoteModal({ isOpen, onClose, config }) {
  const tier = getBusinessCardTier(config?.qty);
  const delivery = getBusinessCardDelivery(config?.deliveryId);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      additionalNotes: '',
    },
    validationSchema: quoteSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        const configSummary = formatBusinessCardQuoteSummary(config);
        const message = `${configSummary}

── Contact information ──
Name: ${values.name}
Email: ${values.email}
Phone: ${values.phone || 'Not provided'}
Company: ${values.company || 'Not provided'}

── Additional notes ──
${values.additionalNotes?.trim() || 'None provided'}

Submitted from the Business Cards quote form.`;

        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: values.name,
            email: values.email,
            phone: values.phone,
            company: values.company,
            message,
            productInterest: 'Business Cards Quote Request',
            source: 'Business Card Quote',
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || data.message || 'Failed to send quote request');
        }

        resetForm();
        onClose({ submitted: true });
      } catch (error) {
        formik.setStatus(error.message || 'Failed to send quote request. Please try again.');
      } finally {
        setSubmitting(false);
      }
    },
  });

  useEffect(() => {
    if (isOpen) {
      formik.resetForm();
      formik.setStatus(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm" onClick={() => onClose()} aria-hidden="true" />

      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="business-card-quote-modal-title"
      >
        <div className="sticky top-0 bg-slate-900 px-6 py-4 flex items-center justify-between rounded-t-2xl z-10">
          <h2 id="business-card-quote-modal-title" className="text-lg font-bold text-white">
            Request a business card quote
          </h2>
          <button
            type="button"
            onClick={() => onClose()}
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close"
          >
            <FaTimes />
          </button>
        </div>

        <div className="px-6 py-5">
          <dl className="mb-6 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 space-y-2 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-slate-500">Size</dt>
              <dd className="font-medium text-slate-900">{BUSINESS_CARD_SIZE}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-slate-500">Stock</dt>
              <dd className="font-medium text-slate-900">{BUSINESS_CARD_GSM}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-slate-500">Quantity</dt>
              <dd className="font-medium text-slate-900">{tier ? `${tier.qty} — €${tier.price}` : '—'}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-slate-500">Delivery</dt>
              <dd className="font-medium text-slate-900 text-right">{delivery.summary}</dd>
            </div>
          </dl>

          <form onSubmit={formik.handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="card-quote-name" className="block text-sm font-medium text-slate-700 mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
                <input
                  id="card-quote-name"
                  name="name"
                  type="text"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                />
              </div>
              {formik.touched.name && formik.errors.name && (
                <p className="mt-1 text-xs text-red-600">{formik.errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="card-quote-email" className="block text-sm font-medium text-slate-700 mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
                <input
                  id="card-quote-email"
                  name="email"
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="you@example.com"
                />
              </div>
              {formik.touched.email && formik.errors.email && (
                <p className="mt-1 text-xs text-red-600">{formik.errors.email}</p>
              )}
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="card-quote-phone" className="block text-sm font-medium text-slate-700 mb-1">
                  Phone
                </label>
                <div className="relative">
                  <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
                  <input
                    id="card-quote-phone"
                    name="phone"
                    type="tel"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="+353 ..."
                  />
                </div>
              </div>
              <div>
                <label htmlFor="card-quote-company" className="block text-sm font-medium text-slate-700 mb-1">
                  Company
                </label>
                <div className="relative">
                  <FaBuilding className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
                  <input
                    id="card-quote-company"
                    name="company"
                    type="text"
                    value={formik.values.company}
                    onChange={formik.handleChange}
                    className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Optional"
                  />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="card-quote-notes" className="block text-sm font-medium text-slate-700 mb-1">
                Artwork or delivery notes
              </label>
              <textarea
                id="card-quote-notes"
                name="additionalNotes"
                rows={3}
                value={formik.values.additionalNotes}
                onChange={formik.handleChange}
                className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
                placeholder="Tell us if artwork is ready, and the delivery address."
              />
            </div>

            {formik.status && (
              <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
                {formik.status}
              </p>
            )}

            <button
              type="submit"
              disabled={formik.isSubmitting}
              className="w-full rounded-xl bg-blue-600 text-white font-semibold py-3 hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
            >
              {formik.isSubmitting ? 'Sending...' : 'Request quote'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
