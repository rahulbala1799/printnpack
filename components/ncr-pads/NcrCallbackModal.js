import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FaTimes, FaUser, FaEnvelope, FaPhone } from 'react-icons/fa';
import {
  NCR_PAD_NAME,
  formatNcrPadSummary,
  getNcrBind,
  getNcrBundle,
  getNcrColour,
  getNcrNumbering,
  getNcrPrint,
  getNcrSize,
} from '../../data/ncr-pads-options';

const schema = Yup.object().shape({
  name: Yup.string().trim().required('Name is required'),
  email: Yup.string().trim().email('Invalid email').required('Email is required'),
  phone: Yup.string().trim().min(6, 'Enter a valid phone number').required('Phone number is required'),
});

export default function NcrCallbackModal({ isOpen, onClose, config }) {
  const rows = [
    ['Size', getNcrSize(config.sizeId).short],
    ['Printing', getNcrPrint(config.printId).label],
    ['Colour', getNcrColour(config.colourId).label],
    ['Bundle', getNcrBundle(config.bundleId).label],
    ['Bind', getNcrBind(config.bindId).label],
    ['Numbering', getNcrNumbering(config.numberingId).label],
  ];

  const formik = useFormik({
    initialValues: { name: '', email: '', phone: '' },
    validationSchema: schema,
    onSubmit: async (values, { resetForm, setSubmitting, setStatus }) => {
      setStatus(null);
      try {
        const message = `Call / email back request for ${NCR_PAD_NAME}.

── Selected specification ──
${formatNcrPadSummary(config)}

── Contact ──
Name: ${values.name}
Email: ${values.email}
Phone: ${values.phone}

Submitted from the NCR Pads page (${typeof window !== 'undefined' ? window.location.href : ''}).`;

        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: values.name,
            email: values.email,
            phone: values.phone,
            message,
            productInterest: `${NCR_PAD_NAME} - Call/Email Back`,
            source: 'NCR Pads Callback',
            subject: `Call/Email back request - ${NCR_PAD_NAME} (Invoice / Docket Books)`,
          }),
        });
        const data = await response.json().catch(() => ({}));
        if (!response.ok) throw new Error(data.error || data.message || 'Failed to send request');
        resetForm();
        onClose({ submitted: true });
      } catch (error) {
        setStatus(error.message || 'Something went wrong. Please try again or call us.');
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

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const field = (id, name, label, type, Icon, placeholder) => (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-slate-700 mb-1">
        {label} <span className="text-red-500">*</span>
      </label>
      <div className="relative">
        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
        <input
          id={id}
          name={name}
          type={type}
          value={formik.values[name]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder={placeholder}
        />
      </div>
      {formik.touched[name] && formik.errors[name] && (
        <p className="mt-1 text-xs text-red-600">{formik.errors[name]}</p>
      )}
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm" onClick={() => onClose()} aria-hidden="true" />
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="ncr-callback-title"
      >
        <div className="sticky top-0 bg-slate-900 px-6 py-4 flex items-center justify-between rounded-t-2xl z-10">
          <h2 id="ncr-callback-title" className="text-lg font-bold text-white">
            Get a call or email back
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
          <p className="text-sm text-slate-600 mb-4">
            Leave your details and we&apos;ll call or email you back with a price for your NCR pads.
          </p>
          <dl className="mb-6 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 space-y-2 text-sm">
            {rows.map(([label, value]) => (
              <div key={label} className="flex justify-between gap-4">
                <dt className="text-slate-500 shrink-0">{label}</dt>
                <dd className="font-medium text-slate-900 text-right">{value}</dd>
              </div>
            ))}
          </dl>

          <form onSubmit={formik.handleSubmit} className="space-y-4" noValidate>
            {field('ncr-name', 'name', 'Name', 'text', FaUser, 'Your name')}
            {field('ncr-email', 'email', 'Email', 'email', FaEnvelope, 'you@example.com')}
            {field('ncr-phone', 'phone', 'Phone number', 'tel', FaPhone, '+353 ...')}

            {formik.status && (
              <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">{formik.status}</p>
            )}

            <button
              type="submit"
              disabled={formik.isSubmitting}
              className="w-full rounded-xl bg-blue-600 text-white font-semibold py-3 hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
            >
              {formik.isSubmitting ? 'Sending...' : 'Call / email me back'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
