import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaWhatsapp, FaComment, FaArrowRight, FaHeadset, FaPaperPlane, FaCalculator } from 'react-icons/fa';
import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const QuotePage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Form validation schema using Yup
  const quoteSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string(),
    productType: Yup.string().required('Please select a product type'),
    quantity: Yup.number().required('Quantity is required').min(1, 'Quantity must be at least 1'),
    specifications: Yup.string().required('Please provide product specifications').min(10, 'Specifications must be at least 10 characters'),
  });

  // Function to track conversion
  const trackConversion = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {'send_to': 'AW-17101649834/WakQCK-pt88aEKrv2do_'});
    }
  };

  // Function to handle WhatsApp click
  const handleWhatsAppClick = () => {
    trackConversion();
    // The link will still open normally
  };

  // Setup formik
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      productType: '',
      quantity: '',
      specifications: '',
    },
    validationSchema: quoteSchema,
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
            message: `Product Type: ${values.productType}\nQuantity: ${values.quantity}\nSpecifications: ${values.specifications}`,
            productInterest: 'Quote Request'
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || data.message || 'Failed to send message');
        }

        setFormSubmitted(true);
        
        // Track conversion
        trackConversion();
        
        resetForm();
        
        setTimeout(() => {
          setFormSubmitted(false);
        }, 5000);
      } catch (error) {
        console.error('Error sending message:', error);
        setErrorMessage(error.message || 'Failed to send message. Please try again later.');
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <Layout>
      <Head>
        <title>Get a Quote - Print n Pack</title>
        <meta name="description" content="Request a quote for your custom packaging needs. We offer competitive prices for pizza boxes, paper bags, wide format products, and more." />
      </Head>

      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Request a <span className="text-blue-600">Quote</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Live Chat Option */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="bg-blue-600 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 shadow-md">
                <FaComment className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Live Chat</h3>
              <p className="text-gray-600 mb-5">Chat with our experts for an instant quote on your packaging needs</p>
              <button 
                onClick={() => alert('Live chat would open here')} 
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors inline-flex items-center"
              >
                Start Chat Now
                <FaArrowRight className="ml-2" />
              </button>
            </div>
            
            {/* WhatsApp Option */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="bg-green-500 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 shadow-md">
                <FaWhatsapp className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">WhatsApp</h3>
              <p className="text-gray-600 mb-5">Get a quick quote via WhatsApp for faster response</p>
              <a 
                href="https://wa.me/353894400155" 
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
                className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg transition-colors inline-flex items-center"
              >
                WhatsApp Us
                <FaArrowRight className="ml-2" />
              </a>
            </div>
            
            {/* Call Option */}
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="bg-amber-500 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 shadow-md">
                <FaPhone className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Call Us</h3>
              <p className="text-gray-600 mb-5">Get an immediate quote over the phone</p>
              <a 
                href="tel:+35319128616" 
                className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-6 rounded-lg transition-colors inline-flex items-center"
              >
                +353 1 912 8616
                <FaArrowRight className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Form Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Contact Information */}
            <div className="w-full md:w-1/3 bg-gradient-to-b from-blue-800 to-blue-900 p-8 text-white">
              <h2 className="text-2xl font-bold mb-6">Why Choose Us</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <FaCalculator className="text-blue-300 mr-4 mt-1 text-xl" />
                  <div>
                    <h3 className="font-semibold mb-1">Competitive Pricing</h3>
                    <p>Get the best value for your packaging needs</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-blue-300 mr-4 mt-1 text-xl" />
                  <div>
                    <h3 className="font-semibold mb-1">Our Location</h3>
                    <p>Unit 14 Ashbourne Business Centre</p>
                    <p>Ashbourne, Co. Meath</p>
                    <p>A84 KV57</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FaPhone className="text-blue-300 mr-4 mt-1 text-xl" />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p>+353 1 912 8616</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FaClock className="text-blue-300 mr-4 mt-1 text-xl" />
                  <div>
                    <h3 className="font-semibold mb-1">Business Hours</h3>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 2:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Quote Form */}
            <div className="w-full md:w-2/3 p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Request a Quote</h2>
              <p className="text-gray-600 mb-8">Fill out the form below and we'll provide you with a competitive quote</p>
              
              {formSubmitted ? (
                <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg shadow-md mb-6 transition-all duration-500 ease-in-out">
                  <div className="flex items-center">
                    <div className="bg-green-100 rounded-full p-2 mr-4">
                      <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-green-800">Quote Request Sent!</h3>
                      <p className="text-green-700">Thank you for your request. We'll get back to you with a quote shortly.</p>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={formik.handleSubmit} className="space-y-6">
                  {errorMessage && (
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg shadow-md mb-6">
                      <div className="flex items-center">
                        <div className="bg-red-100 rounded-full p-2 mr-4">
                          <svg className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-lg font-medium text-red-800">Error</h3>
                          <p className="text-red-700">{errorMessage}</p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formik.values.name}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            formik.touched.name && formik.errors.name 
                              ? 'border-red-500 ring-1 ring-red-500' 
                              : 'border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500'
                          } transition-all duration-200`}
                          placeholder="John Smith"
                        />
                        {formik.touched.name && formik.errors.name && (
                          <p className="mt-1 text-sm text-red-600">{formik.errors.name}</p>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            formik.touched.email && formik.errors.email 
                              ? 'border-red-500 ring-1 ring-red-500' 
                              : 'border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500'
                          } transition-all duration-200`}
                          placeholder="your.email@example.com"
                        />
                        {formik.touched.email && formik.errors.email && (
                          <p className="mt-1 text-sm text-red-600">{formik.errors.email}</p>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                        placeholder="+353 87 123 4567"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="productType" className="block text-sm font-medium text-gray-700 mb-1">Product Type *</label>
                      <select
                        id="productType"
                        name="productType"
                        value={formik.values.productType}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          formik.touched.productType && formik.errors.productType 
                            ? 'border-red-500 ring-1 ring-red-500' 
                            : 'border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500'
                        } transition-all duration-200`}
                      >
                        <option value="">Select a product type</option>
                        <option value="Posters">Posters</option>
                        <option value="Vinyls">Vinyls</option>
                        <option value="Leaflets">Leaflets</option>
                        <option value="Menus">Menus</option>
                        <option value="Custom Design">Custom Design</option>
                      </select>
                      {formik.touched.productType && formik.errors.productType && (
                        <p className="mt-1 text-sm text-red-600">{formik.errors.productType}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">Quantity *</label>
                    <input
                      type="number"
                      id="quantity"
                      name="quantity"
                      value={formik.values.quantity}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        formik.touched.quantity && formik.errors.quantity 
                          ? 'border-red-500 ring-1 ring-red-500' 
                          : 'border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500'
                      } transition-all duration-200`}
                      placeholder="Enter quantity"
                      min="1"
                    />
                    {formik.touched.quantity && formik.errors.quantity && (
                      <p className="mt-1 text-sm text-red-600">{formik.errors.quantity}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="specifications" className="block text-sm font-medium text-gray-700 mb-1">Product Specifications *</label>
                    <div className="relative">
                      <textarea
                        id="specifications"
                        name="specifications"
                        value={formik.values.specifications}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        rows="5"
                        className={`w-full px-4 py-3 rounded-lg border ${
                          formik.touched.specifications && formik.errors.specifications 
                            ? 'border-red-500 ring-1 ring-red-500' 
                            : 'border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500'
                        } transition-all duration-200`}
                        placeholder="Please provide details about your product requirements (size, material, design, etc.)"
                      ></textarea>
                      {formik.touched.specifications && formik.errors.specifications && (
                        <p className="mt-1 text-sm text-red-600">{formik.errors.specifications}</p>
                      )}
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg"
                    disabled={formik.isSubmitting}
                  >
                    <span>Request Quote</span>
                    <FaPaperPlane />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Visit Our Location</h2>
          <div className="bg-white p-4 rounded-lg shadow-md h-96 flex justify-center items-center">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2374.3441666387522!2d-6.399543723897092!3d53.51128647242307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486717c0694c8b7f%3A0x90e678b64eb9a090!2sAshbourne%20Business%20Centre!5e0!3m2!1sen!2sie!4v1709754844330!5m2!1sen!2sie" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default QuotePage; 