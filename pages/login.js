import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import { FaUser, FaLock, FaArrowRight, FaUserPlus } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const LoginPage = () => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Form validation schema
  const loginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required')
  });

  // Setup formik
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      try {
        setErrorMessage('');
        setIsLoading(true);

        const response = await fetch('/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify(values),
        });

        let data;
        try {
          data = await response.json();
        } catch {
          data = {};
        }

        if (!response.ok) {
          throw new Error(data.error || `Login failed (${response.status})`);
        }

        // Redirect based on role
        const { role } = data.user;
        if (role === 'admin') {
          router.push('/admin');
        } else if (role === 'staff') {
          router.push('/staff');
        } else {
          router.push('/customer');
        }
      } catch (error) {
        setErrorMessage(error.message || 'Login failed. Please try again.');
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <Layout>
      <Head>
        <title>Login - PrintNPack Ireland</title>
        <meta name="description" content="Login to your PrintNPack account to manage orders, quotes, and account settings." />
        <link rel="canonical" href="https://printnpack.ie/login" />
        <meta property="og:title" content="Login - PrintNPack Ireland" />
        <meta property="og:url" content="https://printnpack.ie/login" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="absolute inset-0 bg-particles opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <FaUser className="text-6xl mx-auto mb-4 opacity-90" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Welcome Back
            </h1>
            <p className="text-xl text-blue-100">
              Login to access your account
            </p>
          </div>
        </div>
      </div>

      {/* Login Form Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Sign In
              </h2>

              {errorMessage && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
                  {errorMessage}
                </div>
              )}

              <form onSubmit={formik.handleSubmit}>
                {/* Email */}
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-3 top-3 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="your@email.com"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      disabled={isLoading}
                    />
                  </div>
                  {formik.touched.email && formik.errors.email && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
                  )}
                </div>

                {/* Password */}
                <div className="mb-6">
                  <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <FaLock className="absolute left-3 top-3 text-gray-400" />
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        formik.touched.password && formik.errors.password ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      disabled={isLoading}
                    />
                  </div>
                  {formik.touched.password && formik.errors.password && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full bg-blue-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors ${
                    isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
                  }`}
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Signing in...
                    </>
                  ) : (
                    <>
                      Sign In
                      <FaArrowRight />
                    </>
                  )}
                </button>
              </form>

              {/* Register Link */}
              <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                <p className="text-gray-600 mb-3">
                  Don't have an account?
                </p>
                <Link
                  href="/register"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                >
                  <FaUserPlus />
                  Create Account
                </Link>
              </div>
            </div>

            {/* Help Text */}
            <div className="mt-8 text-center text-sm text-gray-600">
              <p>
                Need help? <Link href="/contact" className="text-blue-600 hover:text-blue-700">Contact us</Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-particles {
          background-image: radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.15) 1px, transparent 0);
          background-size: 40px 40px;
        }
      `}</style>
    </Layout>
  );
};

export default LoginPage;
