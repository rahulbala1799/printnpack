import React, { useState, useEffect, useRef } from 'react';

// ─── Step config ─────────────────────────────────────────────────────────────

const STEPS = [
  { id: 'product', label: 'Product' },
  { id: 'contact', label: 'Contact' },
  { id: 'details', label: 'Details' },
];

const SIZES = [
  { value: '7" Personal', label: '7"', sub: 'Personal' },
  { value: '9" Small', label: '9"', sub: 'Small' },
  { value: '12" Medium', label: '12"', sub: 'Medium' },
  { value: '14" Large', label: '14"', sub: 'Large' },
  { value: '16" Family', label: '16"', sub: 'Family' },
  { value: '18" Extra Large', label: '18"', sub: 'XL' },
  { value: '20" Party Size', label: '20"', sub: 'Party' },
  { value: 'Custom Size', label: 'Custom', sub: 'Any' },
];

const QUANTITIES = [
  { value: '500-1,000', label: '500-1K' },
  { value: '1,000-2,500', label: '1K-2.5K' },
  { value: '2,500-5,000', label: '2.5K-5K' },
  { value: '5,000-10,000', label: '5K-10K' },
  { value: '10,000+', label: '10K+' },
];

const PRINT_TYPES = [
  { value: 'Single Color', label: 'Single Colour' },
  { value: 'Two Color', label: 'Two Colour' },
  { value: 'Full Color CMYK', label: 'Full Colour CMYK' },
  { value: 'Premium Full Color', label: 'Premium + Effects' },
];

const BUSINESS_TYPES = [
  'Pizza Restaurant',
  'Takeaway Service',
  'Food Delivery',
  'Food Truck',
  'Catering Company',
  'Chain Restaurant',
  'Other',
];

const TIMEFRAMES = [
  { value: 'ASAP - Rush Order', label: 'ASAP (Rush)' },
  { value: 'Within 1 week', label: '1 Week' },
  { value: 'Within 2 weeks', label: '2 Weeks' },
  { value: 'Within 1 month', label: '1 Month' },
  { value: 'No rush - best price', label: 'No Rush' },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

const ChipSelect = ({ options, value, onChange, multi = false, columns = 4 }) => (
  <div className={`grid gap-2 ${columns === 3 ? 'grid-cols-3' : columns === 2 ? 'grid-cols-2' : 'grid-cols-4'}`}>
    {options.map((opt) => {
      const optValue = typeof opt === 'string' ? opt : opt.value;
      const optLabel = typeof opt === 'string' ? opt : opt.label;
      const optSub = typeof opt === 'object' ? opt.sub : null;
      const isSelected = multi
        ? (value || []).includes(optValue)
        : value === optValue;

      return (
        <button
          key={optValue}
          type="button"
          onClick={() => {
            if (multi) {
              const arr = value || [];
              onChange(isSelected ? arr.filter((v) => v !== optValue) : [...arr, optValue]);
            } else {
              onChange(optValue);
            }
          }}
          className={`relative py-3 px-2 rounded-xl border-2 text-center transition-all active:scale-95 ${
            isSelected
              ? 'border-blue-500 bg-blue-50 text-blue-700'
              : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
          }`}
        >
          {isSelected && (
            <span className="absolute top-1.5 right-1.5">
              <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </span>
          )}
          <span className="block text-sm font-semibold">{optLabel}</span>
          {optSub && <span className="block text-[11px] text-gray-400 mt-0.5">{optSub}</span>}
        </button>
      );
    })}
  </div>
);

const FormField = ({ label, required, error, children }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1.5">
      {label}{required && <span className="text-red-400 ml-0.5">*</span>}
    </label>
    {children}
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
);

const Input = ({ error, ...props }) => (
  <input
    {...props}
    className={`w-full px-4 py-3 rounded-xl border text-base transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400 ${
      error ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-gray-50'
    }`}
  />
);

const TextArea = ({ error, ...props }) => (
  <textarea
    {...props}
    className={`w-full px-4 py-3 rounded-xl border text-base transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400 resize-none ${
      error ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-gray-50'
    }`}
  />
);

// ─── Main Component ──────────────────────────────────────────────────────────

const PizzaBoxQuoteForm = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});
  const scrollRef = useRef(null);

  const [form, setForm] = useState({
    // Step 1 — Product
    pizzaBoxSizes: [],
    quantity: '',
    printingType: '',
    // Step 2 — Contact
    name: '',
    email: '',
    phone: '',
    businessName: '',
    businessType: '',
    // Step 3 — Details
    designService: '',
    deliveryLocation: '',
    timeframe: '',
    additionalInfo: '',
  });

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = ''; };
    }
  }, [isOpen]);

  // Scroll to top on step change
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }, [step]);

  const set = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: null }));
  };

  // ── Validation per step ──

  const validateStep = (stepIndex) => {
    const errs = {};

    if (stepIndex === 0) {
      if (!form.pizzaBoxSizes.length) errs.pizzaBoxSizes = 'Select at least one size';
      if (!form.quantity) errs.quantity = 'Select a quantity';
      if (!form.printingType) errs.printingType = 'Select a printing type';
    }

    if (stepIndex === 1) {
      if (!form.name.trim()) errs.name = 'Required';
      if (!form.email.trim()) errs.email = 'Required';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Invalid email';
      if (!form.phone.trim()) errs.phone = 'Required';
      if (!form.businessName.trim()) errs.businessName = 'Required';
      if (!form.businessType) errs.businessType = 'Select your business type';
    }

    if (stepIndex === 2) {
      if (!form.deliveryLocation.trim()) errs.deliveryLocation = 'Required';
      if (!form.timeframe) errs.timeframe = 'Select a timeframe';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const next = () => {
    if (validateStep(step)) setStep((s) => Math.min(s + 1, STEPS.length - 1));
  };
  const back = () => setStep((s) => Math.max(s - 1, 0));

  // ── Submit ──

  const handleSubmit = async () => {
    if (!validateStep(step)) return;
    setIsSubmitting(true);

    const detailedMessage = `
CUSTOM PIZZA BOXES QUOTE REQUEST - IRELAND

BUSINESS INFORMATION:
- Business Name: ${form.businessName}
- Business Type: ${form.businessType}
- Contact Person: ${form.name}
- Email: ${form.email}
- Phone: ${form.phone}

PIZZA BOX SPECIFICATIONS:
- Box Sizes Needed: ${form.pizzaBoxSizes.join(', ')}
- Quantity Required: ${form.quantity}
- Printing Type: ${form.printingType}
- Design Service: ${form.designService || 'Not specified'}

DELIVERY & TIMELINE:
- Delivery Location: ${form.deliveryLocation}
- Required Timeframe: ${form.timeframe}

ADDITIONAL INFORMATION:
${form.additionalInfo || 'None provided'}

---
Submitted via Custom Pizza Boxes quote form.
    `.trim();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          subject: `Custom Pizza Boxes Quote - ${form.businessName}`,
          message: detailedMessage,
          source: 'Pizza Box Quote Form',
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
      } else {
        throw new Error('Failed');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  // ── Success / Error screens ──

  if (submitStatus === 'success') {
    return (
      <div className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center p-6 text-center">
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-5">
          <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Quote Requested</h2>
        <p className="text-gray-500 mb-8 max-w-sm">
          We'll get back to you within 24 hours with a detailed quote for your custom pizza boxes.
        </p>
        <button
          onClick={() => { setSubmitStatus(null); setStep(0); setForm({ pizzaBoxSizes: [], quantity: '', printingType: '', name: '', email: '', phone: '', businessName: '', businessType: '', designService: '', deliveryLocation: '', timeframe: '', additionalInfo: '' }); onClose(); }}
          className="bg-gray-900 text-white font-semibold py-3 px-8 rounded-xl"
        >
          Done
        </button>
      </div>
    );
  }

  if (submitStatus === 'error') {
    return (
      <div className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center p-6 text-center">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-5">
          <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Something went wrong</h2>
        <p className="text-gray-500 mb-2 max-w-sm">
          We couldn't send your request. Please try again or call us directly.
        </p>
        <a href="tel:+353894400155" className="text-blue-600 font-medium mb-8">+353 89 440 0155</a>
        <div className="flex gap-3">
          <button
            onClick={() => setSubmitStatus(null)}
            className="bg-gray-900 text-white font-semibold py-3 px-6 rounded-xl"
          >
            Try Again
          </button>
          <button
            onClick={() => { setSubmitStatus(null); onClose(); }}
            className="border border-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-xl"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  // ── Form UI ──

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-white sm:bg-black/50 sm:items-center sm:justify-center sm:p-4">
      {/* Desktop backdrop click */}
      <div className="hidden sm:block absolute inset-0" onClick={onClose} />

      <div className="relative flex flex-col w-full h-full sm:h-auto sm:max-h-[90vh] sm:max-w-lg sm:rounded-2xl sm:shadow-2xl bg-white z-10">

        {/* ── Header ── */}
        <div className="flex-shrink-0 border-b border-gray-100 px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-900">Get a Quote</h2>
            <button
              onClick={onClose}
              className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-gray-400"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Progress */}
          <div className="flex items-center gap-1">
            {STEPS.map((s, i) => (
              <div key={s.id} className="flex-1 flex items-center gap-1">
                <div className="flex-1 flex flex-col items-center">
                  <div className={`w-full h-1.5 rounded-full transition-colors ${
                    i <= step ? 'bg-blue-500' : 'bg-gray-200'
                  }`} />
                  <span className={`text-[11px] mt-1 font-medium ${
                    i <= step ? 'text-blue-600' : 'text-gray-400'
                  }`}>
                    {s.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Scrollable content ── */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 sm:px-6 py-5">

          {/* Step 1 — Product */}
          {step === 0 && (
            <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-500 mb-4">Select the pizza box sizes and quantity you need.</p>
              </div>

              <FormField label="Pizza Box Sizes" required error={errors.pizzaBoxSizes}>
                <ChipSelect
                  options={SIZES}
                  value={form.pizzaBoxSizes}
                  onChange={(v) => set('pizzaBoxSizes', v)}
                  multi
                />
              </FormField>

              <FormField label="Quantity" required error={errors.quantity}>
                <ChipSelect
                  options={QUANTITIES}
                  value={form.quantity}
                  onChange={(v) => set('quantity', v)}
                  columns={3}
                />
              </FormField>

              <FormField label="Printing Type" required error={errors.printingType}>
                <ChipSelect
                  options={PRINT_TYPES}
                  value={form.printingType}
                  onChange={(v) => set('printingType', v)}
                  columns={2}
                />
              </FormField>
            </div>
          )}

          {/* Step 2 — Contact */}
          {step === 1 && (
            <div className="space-y-4">
              <p className="text-sm text-gray-500 mb-2">How can we reach you with your quote?</p>

              <FormField label="Your Name" required error={errors.name}>
                <Input
                  type="text"
                  value={form.name}
                  onChange={(e) => set('name', e.target.value)}
                  placeholder="Full name"
                  error={errors.name}
                  autoComplete="name"
                />
              </FormField>

              <FormField label="Email" required error={errors.email}>
                <Input
                  type="email"
                  value={form.email}
                  onChange={(e) => set('email', e.target.value)}
                  placeholder="you@business.com"
                  error={errors.email}
                  autoComplete="email"
                  inputMode="email"
                />
              </FormField>

              <FormField label="Phone" required error={errors.phone}>
                <Input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => set('phone', e.target.value)}
                  placeholder="+353 89 XXX XXXX"
                  error={errors.phone}
                  autoComplete="tel"
                  inputMode="tel"
                />
              </FormField>

              <FormField label="Business Name" required error={errors.businessName}>
                <Input
                  type="text"
                  value={form.businessName}
                  onChange={(e) => set('businessName', e.target.value)}
                  placeholder="Your restaurant or business"
                  error={errors.businessName}
                  autoComplete="organization"
                />
              </FormField>

              <FormField label="Business Type" required error={errors.businessType}>
                <ChipSelect
                  options={BUSINESS_TYPES}
                  value={form.businessType}
                  onChange={(v) => set('businessType', v)}
                  columns={3}
                />
              </FormField>
            </div>
          )}

          {/* Step 3 — Details */}
          {step === 2 && (
            <div className="space-y-5">
              <p className="text-sm text-gray-500 mb-2">Almost done — just a few more details.</p>

              <FormField label="Design Service">
                <ChipSelect
                  options={[
                    { value: 'Yes - Full Design Service', label: 'Full Design' },
                    { value: 'Yes - Minor Modifications', label: 'Minor Edits' },
                    { value: 'No - I have artwork ready', label: 'I Have Artwork' },
                  ]}
                  value={form.designService}
                  onChange={(v) => set('designService', v)}
                  columns={3}
                />
              </FormField>

              <FormField label="Delivery Location" required error={errors.deliveryLocation}>
                <Input
                  type="text"
                  value={form.deliveryLocation}
                  onChange={(e) => set('deliveryLocation', e.target.value)}
                  placeholder="City or county (e.g. Dublin, Cork)"
                  error={errors.deliveryLocation}
                />
              </FormField>

              <FormField label="Timeframe" required error={errors.timeframe}>
                <ChipSelect
                  options={TIMEFRAMES}
                  value={form.timeframe}
                  onChange={(v) => set('timeframe', v)}
                  columns={3}
                />
              </FormField>

              <FormField label="Anything else?">
                <TextArea
                  value={form.additionalInfo}
                  onChange={(e) => set('additionalInfo', e.target.value)}
                  placeholder="Special requirements, questions, or extra details..."
                  rows={3}
                />
              </FormField>
            </div>
          )}
        </div>

        {/* ── Footer / Actions ── */}
        <div className="flex-shrink-0 border-t border-gray-100 px-4 sm:px-6 py-4 bg-white">
          <div className="flex gap-3">
            {step > 0 && (
              <button
                type="button"
                onClick={back}
                className="py-3 px-5 rounded-xl border border-gray-300 text-gray-600 font-medium transition-colors hover:bg-gray-50 active:scale-95"
              >
                Back
              </button>
            )}

            {step < STEPS.length - 1 ? (
              <button
                type="button"
                onClick={next}
                className="flex-1 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors active:scale-95"
              >
                Continue
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="flex-1 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors disabled:opacity-50 active:scale-95"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Submit Quote Request'
                )}
              </button>
            )}
          </div>

          {/* Step hint */}
          <p className="text-center text-xs text-gray-400 mt-3">
            Step {step + 1} of {STEPS.length}
            {step === STEPS.length - 1 && ' — Free quote, no obligation'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PizzaBoxQuoteForm;
