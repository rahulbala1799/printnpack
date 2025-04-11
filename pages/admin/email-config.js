import React, { useState, useEffect } from 'react';
import Layout from '../../components/layout/Layout';
import Head from 'next/head';
import { FaEnvelope, FaKey, FaCheck, FaPaperPlane } from 'react-icons/fa';

const EmailConfig = () => {
  const [config, setConfig] = useState({
    email: '',
    appPassword: '',
  });

  const [testEmail, setTestEmail] = useState({
    to: '',
    subject: 'Test Email from printNpack',
    message: 'This is a test email to verify your email configuration.',
  });

  const [status, setStatus] = useState({
    saving: false,
    testing: false,
    success: '',
    error: '',
  });

  const handleConfigChange = (e) => {
    setConfig({
      ...config,
      [e.target.name]: e.target.value,
    });
  };

  const handleTestEmailChange = (e) => {
    setTestEmail({
      ...testEmail,
      [e.target.name]: e.target.value,
    });
  };

  const saveConfig = async (e) => {
    e.preventDefault();
    setStatus({ ...status, saving: true, success: '', error: '' });

    try {
      const response = await fetch('/api/admin/save-email-config', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(config),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to save configuration');
      }

      setStatus({
        ...status,
        saving: false,
        success: 'Configuration saved successfully!',
        error: '',
      });
    } catch (error) {
      setStatus({
        ...status,
        saving: false,
        success: '',
        error: error.message,
      });
    }
  };

  const sendTestEmail = async (e) => {
    e.preventDefault();
    setStatus({ ...status, testing: true, success: '', error: '' });

    try {
      const response = await fetch('/api/admin/test-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(testEmail),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send test email');
      }

      setStatus({
        ...status,
        testing: false,
        success: 'Test email sent successfully!',
        error: '',
      });
    } catch (error) {
      setStatus({
        ...status,
        testing: false,
        success: '',
        error: error.message,
      });
    }
  };

  return (
    <Layout>
      <Head>
        <title>Email Configuration - printNpack Admin</title>
      </Head>

      <div className="min-h-screen bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Email Configuration</h1>

            {/* Configuration Form */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Gmail Settings</h2>
              <form onSubmit={saveConfig} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Gmail Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaEnvelope className="text-gray-400" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={config.email}
                      onChange={handleConfigChange}
                      className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="printnpackireland@gmail.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    App Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaKey className="text-gray-400" />
                    </div>
                    <input
                      type="password"
                      name="appPassword"
                      value={config.appPassword}
                      onChange={handleConfigChange}
                      className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your Gmail App Password"
                    />
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    Generate an App Password from your Google Account settings
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={status.saving}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center space-x-2"
                >
                  {status.saving ? (
                    <span>Saving...</span>
                  ) : (
                    <>
                      <FaCheck />
                      <span>Save Configuration</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Test Email Form */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Send Test Email</h2>
              <form onSubmit={sendTestEmail} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Test Email Address
                  </label>
                  <input
                    type="email"
                    name="to"
                    value={testEmail.to}
                    onChange={handleTestEmailChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter email address for testing"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status.testing}
                  className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 flex items-center justify-center space-x-2"
                >
                  {status.testing ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <FaPaperPlane />
                      <span>Send Test Email</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Status Messages */}
            {status.success && (
              <div className="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-md">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <FaCheck className="h-5 w-5 text-green-400" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-green-700">{status.success}</p>
                  </div>
                </div>
              </div>
            )}

            {status.error && (
              <div className="mt-4 p-4 bg-red-50 border-l-4 border-red-500 rounded-md">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <FaCheck className="h-5 w-5 text-red-400" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-red-700">{status.error}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EmailConfig; 