import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FaUser, FaLock, FaArrowRight, FaUserTie } from 'react-icons/fa';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const StaffLoginPage = () => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const schema = Yup.object().shape({
    user_id: Yup.string().required('User ID is required'),
    password: Yup.string().required('Password is required'),
  });

  const formik = useFormik({
    initialValues: { user_id: '', password: '' },
    validationSchema: schema,
    onSubmit: async (values) => {
      try {
        setErrorMessage('');
        setIsLoading(true);
        const apiUrl = typeof window !== 'undefined' ? `${window.location.origin}/api/auth/staff-login` : '/api/auth/staff-login';
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify({ user_id: values.user_id.trim(), password: values.password }),
        });

        let data = {};
        try {
          data = await response.json();
        } catch {}

        if (!response.ok) {
          const msg = response.status === 429
            ? (data.error || 'Too many attempts. Please try again later.')
            : (data.error || `Login failed (${response.status})`);
          throw new Error(msg);
        }

        if (data.mustChangePassword) {
          router.push('/staff/change-password');
        } else {
          router.push('/staff');
        }
      } catch (e) {
        setErrorMessage(e.message || 'Login failed. Please try again.');
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <Layout>
      <Head>
        <title>Staff Login - PrintNPack Ireland</title>
        <meta name="description" content="Staff portal sign in. Use your User ID and password." />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="relative bg-gradient-to-r from-green-900 to-green-700 text-white py-16">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <FaUserTie className="text-6xl mx-auto mb-4 opacity-90" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Staff Portal</h1>
            <p className="text-xl text-green-100">Sign in with your User ID and password</p>
          </div>
        </div>
      </div>

      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Staff Sign In</h2>
              <p className="text-gray-500 text-sm text-center mb-6">
                Use the User ID and password provided by your administrator. Do not use the main website login.
              </p>

              {errorMessage && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
                  {errorMessage}
                </div>
              )}

              <form onSubmit={formik.handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="user_id" className="block text-gray-700 font-medium mb-2">
                    User ID
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-3 top-3 text-gray-400" />
                    <input
                      type="text"
                      id="user_id"
                      name="user_id"
                      autoComplete="username"
                      className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                        formik.touched.user_id && formik.errors.user_id ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Your User ID"
                      value={formik.values.user_id}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      disabled={isLoading}
                    />
                  </div>
                  {formik.touched.user_id && formik.errors.user_id && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.user_id}</p>
                  )}
                </div>

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
                      autoComplete="current-password"
                      className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                        formik.touched.password && formik.errors.password ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Your password"
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

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full bg-green-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors ${
                    isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-700'
                  }`}
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
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
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StaffLoginPage;
