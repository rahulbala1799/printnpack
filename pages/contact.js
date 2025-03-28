import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaWhatsapp } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    productInterest: 'General Inquiry'
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, we would submit the form data to a backend
    console.log('Form submitted:', formData);
    
    // Simulate form submission success
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thank you! Your message has been sent successfully. We will contact you shortly.'
    });
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
      productInterest: 'General Inquiry'
    });
  };

  return (
    <Layout>
      <Head>
        <title>Contact Us - PrintNPack Packaging Solutions</title>
        <meta 
          name="description" 
          content="Get in touch with PrintNPack for all your packaging needs. Request a quote, order samples, or speak to our packaging experts." 
        />
      </Head>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="absolute inset-0 bg-particles opacity-20"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl mb-8">
              Get in touch with our team for custom packaging solutions
            </p>
            <div className="w-24 h-1 bg-white mx-auto rounded"></div>
          </div>
        </div>
      </div>

      {/* Contact Information & Form */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            {/* Contact Information */}
            <div className="w-full md:w-1/3 bg-gradient-to-b from-blue-800 to-blue-900 p-8 text-white">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-blue-300 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Our Office</h3>
                    <p>123 Packaging Street, Chennai</p>
                    <p>Tamil Nadu, India 600001</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FaPhone className="text-blue-300 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p>+91 9843 141 313</p>
                    <p>+91 44 2345 6789</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FaEnvelope className="text-blue-300 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p>sales@printnpack.com</p>
                    <p>support@printnpack.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FaClock className="text-blue-300 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Business Hours</h3>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 2:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              {/* Connect Socials */}
              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
                    <FaWhatsapp className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="w-full md:w-2/3 p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
              
              {formStatus.submitted && formStatus.success ? (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded relative mb-6" role="alert">
                  <p>{formStatus.message}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-gray-700 font-medium mb-2">Company Name</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="productInterest" className="block text-gray-700 font-medium mb-2">Product Interest</label>
                    <select
                      id="productInterest"
                      name="productInterest"
                      value={formData.productInterest}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Pizza Boxes">Pizza Boxes</option>
                      <option value="Paper Bags">Paper Bags</option>
                      <option value="Burger Boxes">Burger Boxes</option>
                      <option value="Marketing Materials">Marketing Materials</option>
                      <option value="Napkins">Napkins</option>
                      <option value="Corrugated Boxes">Corrugated Boxes</option>
                      <option value="Custom Packaging">Custom Packaging</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    ></textarea>
                  </div>
                  
                  <div className="flex items-center mb-6">
                    <input
                      id="privacy"
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      required
                    />
                    <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                      I agree to the <a href="#" className="text-blue-600 hover:underline">privacy policy</a> and consent to being contacted.
                    </label>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md text-lg font-medium transition-colors inline-flex items-center"
                    >
                      <span>Send Message</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
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
            <p className="text-gray-500">Google Maps integration would go here</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage; 