import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const PizzaBoxQuoteForm = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string().required('Phone number is required'),
    businessName: Yup.string().required('Business name is required'),
    businessType: Yup.string().required('Please select your business type'),
    pizzaBoxSizes: Yup.array().min(1, 'Please select at least one pizza box size'),
    quantity: Yup.string().required('Please specify quantity needed'),
    printingType: Yup.string().required('Please select printing type'),
    designService: Yup.string().required('Please specify if you need design service'),
    deliveryLocation: Yup.string().required('Delivery location is required'),
    timeframe: Yup.string().required('Please specify your timeframe'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      businessName: '',
      businessType: '',
      pizzaBoxSizes: [],
      quantity: '',
      printingType: '',
      colors: '',
      designService: '',
      logoFile: '',
      specialRequirements: '',
      deliveryLocation: '',
      timeframe: '',
      weeklyDelivery: '',
      samples: '',
      additionalInfo: ''
    },
    validationSchema,
    onSubmit: async (values) => {
      setIsSubmitting(true);
      try {
        // Create detailed message
        const pizzaBoxDetails = {
          personalInfo: {
            name: values.name,
            email: values.email,
            phone: values.phone,
            businessName: values.businessName,
            businessType: values.businessType
          },
          productSpecs: {
            pizzaBoxSizes: values.pizzaBoxSizes,
            quantity: values.quantity,
            printingType: values.printingType,
            colors: values.colors,
            designService: values.designService,
            logoFile: values.logoFile,
            specialRequirements: values.specialRequirements
          },
          deliveryInfo: {
            location: values.deliveryLocation,
            timeframe: values.timeframe,
            weeklyDelivery: values.weeklyDelivery,
            samples: values.samples
          },
          additionalInfo: values.additionalInfo
        };

        const detailedMessage = `
CUSTOM PIZZA BOXES QUOTE REQUEST - IRELAND

BUSINESS INFORMATION:
• Business Name: ${values.businessName}
• Business Type: ${values.businessType}
• Contact Person: ${values.name}
• Email: ${values.email}
• Phone: ${values.phone}

PIZZA BOX SPECIFICATIONS:
• Box Sizes Needed: ${values.pizzaBoxSizes.join(', ')}
• Quantity Required: ${values.quantity}
• Printing Type: ${values.printingType}
• Colors: ${values.colors || 'Not specified'}
• Design Service Needed: ${values.designService}
• Logo/Artwork: ${values.logoFile || 'To be provided separately'}
• Special Requirements: ${values.specialRequirements || 'None specified'}

DELIVERY & TIMELINE:
• Delivery Location: ${values.deliveryLocation}
• Required Timeframe: ${values.timeframe}
• Weekly Delivery Service: ${values.weeklyDelivery || 'Not requested'}
• Sample Request: ${values.samples || 'Not requested'}

ADDITIONAL INFORMATION:
${values.additionalInfo || 'None provided'}

---
This quote request was submitted through the Custom Pizza Boxes Ireland page.
Please respond with detailed pricing and specifications.
        `;

        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: values.name,
            email: values.email,
            phone: values.phone,
            subject: `Custom Pizza Boxes Quote - ${values.businessName}`,
            message: detailedMessage,
            source: 'Pizza Box Quote Form'
          }),
        });

        if (response.ok) {
          setSubmitStatus('success');
          // Reset form after successful submission
          setTimeout(() => {
            formik.resetForm();
            onClose();
            setSubmitStatus(null);
          }, 2000);
        } else {
          throw new Error('Failed to submit');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  const handleSizeChange = (size) => {
    const currentSizes = formik.values.pizzaBoxSizes;
    if (currentSizes.includes(size)) {
      formik.setFieldValue('pizzaBoxSizes', currentSizes.filter(s => s !== size));
    } else {
      formik.setFieldValue('pizzaBoxSizes', [...currentSizes, size]);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-gradient-to-r from-red-600 to-orange-500 text-white p-6 rounded-t-2xl">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">Custom Pizza Box Quote</h2>
              <p className="opacity-90">Get your personalized quote in 24 hours</p>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <form onSubmit={formik.handleSubmit} className="p-6 space-y-6">
          {/* Business Information */}
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="text-2xl mr-2">🏪</span>
              Business Information
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Business Name *
                </label>
                <input
                  type="text"
                  name="businessName"
                  value={formik.values.businessName}
                  onChange={formik.handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                  placeholder="Your restaurant/business name"
                />
                {formik.touched.businessName && formik.errors.businessName && (
                  <p className="text-red-500 text-sm mt-1">{formik.errors.businessName}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Business Type *
                </label>
                <select
                  name="businessType"
                  value={formik.values.businessType}
                  onChange={formik.handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                >
                  <option value="">Select business type</option>
                  <option value="Pizza Restaurant">Pizza Restaurant</option>
                  <option value="Takeaway Service">Takeaway Service</option>
                  <option value="Food Delivery">Food Delivery Service</option>
                  <option value="Food Truck">Food Truck</option>
                  <option value="Catering Company">Catering Company</option>
                  <option value="Chain Restaurant">Chain Restaurant</option>
                  <option value="Other Food Business">Other Food Business</option>
                </select>
                {formik.touched.businessType && formik.errors.businessType && (
                  <p className="text-red-500 text-sm mt-1">{formik.errors.businessType}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Contact Person *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                  placeholder="Your full name"
                />
                {formik.touched.name && formik.errors.name && (
                  <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                  placeholder="your@email.com"
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
                )}
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                  placeholder="+353 XX XXX XXXX"
                />
                {formik.touched.phone && formik.errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{formik.errors.phone}</p>
                )}
              </div>
            </div>
          </div>

          {/* Pizza Box Specifications */}
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="text-2xl mr-2">🍕</span>
              Pizza Box Specifications
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Pizza Box Sizes Needed * (Select all that apply)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['7" Personal', '9" Small', '12" Medium', '14" Large', '16" Family', '18" Extra Large', '20" Party Size', 'Custom Size'].map((size) => (
                    <label key={size} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formik.values.pizzaBoxSizes.includes(size)}
                        onChange={() => handleSizeChange(size)}
                        className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                      />
                      <span className="text-sm font-medium text-gray-700">{size}</span>
                    </label>
                  ))}
                </div>
                {formik.touched.pizzaBoxSizes && formik.errors.pizzaBoxSizes && (
                  <p className="text-red-500 text-sm mt-1">{formik.errors.pizzaBoxSizes}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Quantity Needed *
                  </label>
                  <select
                    name="quantity"
                    value={formik.values.quantity}
                    onChange={formik.handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                  >
                    <option value="">Select quantity range</option>
                    <option value="500-1,000 boxes">500-1,000 boxes</option>
                    <option value="1,000-2,500 boxes">1,000-2,500 boxes</option>
                    <option value="2,500-5,000 boxes">2,500-5,000 boxes</option>
                    <option value="5,000-10,000 boxes">5,000-10,000 boxes</option>
                    <option value="10,000+ boxes">10,000+ boxes</option>
                    <option value="Custom quantity">Custom quantity</option>
                  </select>
                  {formik.touched.quantity && formik.errors.quantity && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.quantity}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Printing Type *
                  </label>
                  <select
                    name="printingType"
                    value={formik.values.printingType}
                    onChange={formik.handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                  >
                    <option value="">Select printing type</option>
                    <option value="Single Color">Single Color Printing</option>
                    <option value="Two Color">Two Color Printing</option>
                    <option value="Full Color CMYK">Full Color CMYK</option>
                    <option value="Premium Full Color">Premium Full Color + Special Effects</option>
                  </select>
                  {formik.touched.printingType && formik.errors.printingType && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.printingType}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Color Preferences
                  </label>
                  <input
                    type="text"
                    name="colors"
                    value={formik.values.colors}
                    onChange={formik.handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                    placeholder="e.g., Red, White, Gold"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Design Service Needed? *
                  </label>
                  <select
                    name="designService"
                    value={formik.values.designService}
                    onChange={formik.handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                  >
                    <option value="">Select option</option>
                    <option value="Yes - Full Design Service">Yes - Full Design Service</option>
                    <option value="Yes - Minor Modifications">Yes - Minor Modifications</option>
                    <option value="No - I have artwork ready">No - I have artwork ready</option>
                  </select>
                  {formik.touched.designService && formik.errors.designService && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.designService}</p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Logo/Artwork Information
                  </label>
                  <input
                    type="text"
                    name="logoFile"
                    value={formik.values.logoFile}
                    onChange={formik.handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                    placeholder="Describe your logo or mention if you'll email artwork separately"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Special Requirements
                  </label>
                  <textarea
                    name="specialRequirements"
                    value={formik.values.specialRequirements}
                    onChange={formik.handleChange}
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                    placeholder="Any special printing effects, finishes, or requirements..."
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Delivery & Timeline */}
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="text-2xl mr-2">🚚</span>
              Delivery & Timeline
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Delivery Location *
                </label>
                <input
                  type="text"
                  name="deliveryLocation"
                  value={formik.values.deliveryLocation}
                  onChange={formik.handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                  placeholder="City, County (e.g., Dublin, Cork, Galway)"
                />
                {formik.touched.deliveryLocation && formik.errors.deliveryLocation && (
                  <p className="text-red-500 text-sm mt-1">{formik.errors.deliveryLocation}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Required Timeframe *
                </label>
                <select
                  name="timeframe"
                  value={formik.values.timeframe}
                  onChange={formik.handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                >
                  <option value="">Select timeframe</option>
                  <option value="ASAP - Rush Order">ASAP - Rush Order</option>
                  <option value="Within 1 week">Within 1 week</option>
                  <option value="Within 2 weeks">Within 2 weeks</option>
                  <option value="Within 1 month">Within 1 month</option>
                  <option value="No rush - best price">No rush - best price</option>
                </select>
                {formik.touched.timeframe && formik.errors.timeframe && (
                  <p className="text-red-500 text-sm mt-1">{formik.errors.timeframe}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Weekly Delivery Service
                </label>
                <select
                  name="weeklyDelivery"
                  value={formik.values.weeklyDelivery}
                  onChange={formik.handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                >
                  <option value="">Select option</option>
                  <option value="Yes - I'm interested">Yes - I'm interested</option>
                  <option value="Maybe - tell me more">Maybe - tell me more</option>
                  <option value="No - one-time order">No - one-time order</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Sample Request
                </label>
                <select
                  name="samples"
                  value={formik.values.samples}
                  onChange={formik.handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                >
                  <option value="">Select option</option>
                  <option value="Yes - please send samples">Yes - please send samples</option>
                  <option value="No samples needed">No samples needed</option>
                </select>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Additional Information
            </label>
            <textarea
              name="additionalInfo"
              value={formik.values.additionalInfo}
              onChange={formik.handleChange}
              rows="4"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
              placeholder="Any additional details, questions, or specific requirements..."
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300 font-bold disabled:opacity-50 disabled:cursor-not-allowed min-w-[150px]"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </div>
              ) : (
                'Get My Quote 🍕'
              )}
            </button>
          </div>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Quote request sent successfully! We'll respond within 24 hours.
              </div>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                Error sending quote request. Please try again or call us directly.
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default PizzaBoxQuoteForm;