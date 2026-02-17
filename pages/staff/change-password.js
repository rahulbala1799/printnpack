import React, { useState, useEffect } from 'react';
import Layout from '../../components/layout/Layout';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FaLock, FaCheck } from 'react-icons/fa';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ChangePasswordPage = () => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('/api/auth/me', { credentials: 'include' });
        if (!res.ok) {
          router.replace('/staff/login');
          return;
        }
        const data = await res.json();
        if (data.user?.role !== 'staff') {
          router.replace('/staff/login');
          return;
        }
      } catch {
        router.replace('/staff/login');
      } finally {
        setAuthChecked(true);
      }
    })();
  }, [router]);

  const schema = Yup.object().shape({
    current_password: Yup.string().required('Current password is required'),
    new_password: Yup.string().min(8, 'At least 8 characters').required('New password is required'),
    confirm_password: Yup.string()
      .oneOf([Yup.ref('new_password')], 'Passwords must match')
      .required('Please confirm your new password'),
  });

  const formik = useFormik({
    initialValues: { current_password: '', new_password: '', confirm_password: '' },
    validationSchema: schema,
    onSubmit: async (values) => {
      try {
        setErrorMessage('');
        setIsLoading(true);
        const res = await fetch('/api/auth/staff/change-password', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify({
            current_password: values.current_password,
            new_password: values.new_password,
          }),
        });
        const data = await res.json().catch(() => ({}));
        if (!res.ok) throw new Error(data.error || 'Failed to update password');
        router.push('/staff');
      } catch (e) {
        setErrorMessage(e.message || 'Something went wrong. Please try again.');
      } finally {
        setIsLoading(false);
      }
    },
  });

  if (!authChecked) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600" />
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Head>
        <title>Change Password - Staff - PrintNPack Ireland</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h1 className="text-2xl font-bold text-gray-900 mb-2 text-center">Change your password</h1>
              <p className="text-gray-500 text-sm text-center mb-6">
                You must set a new password before you can use the staff dashboard.
              </p>

              {errorMessage && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
                  {errorMessage}
                </div>
              )}

              <form onSubmit={formik.handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="current_password" className="block text-gray-700 font-medium mb-2">
                    Current password
                  </label>
                  <div className="relative">
                    <FaLock className="absolute left-3 top-3 text-gray-400" />
                    <input
                      type="password"
                      id="current_password"
                      name="current_password"
                      autoComplete="current-password"
                      className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 ${
                        formik.touched.current_password && formik.errors.current_password ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter current password"
                      value={formik.values.current_password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      disabled={isLoading}
                    />
                  </div>
                  {formik.touched.current_password && formik.errors.current_password && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.current_password}</p>
                  )}
                </div>

                <div className="mb-4">
                  <label htmlFor="new_password" className="block text-gray-700 font-medium mb-2">
                    New password
                  </label>
                  <input
                    type="password"
                    id="new_password"
                    name="new_password"
                    autoComplete="new-password"
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 ${
                      formik.touched.new_password && formik.errors.new_password ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="At least 8 characters"
                    value={formik.values.new_password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    disabled={isLoading}
                  />
                  {formik.touched.new_password && formik.errors.new_password && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.new_password}</p>
                  )}
                </div>

                <div className="mb-6">
                  <label htmlFor="confirm_password" className="block text-gray-700 font-medium mb-2">
                    Confirm new password
                  </label>
                  <input
                    type="password"
                    id="confirm_password"
                    name="confirm_password"
                    autoComplete="new-password"
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 ${
                      formik.touched.confirm_password && formik.errors.confirm_password ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Confirm new password"
                    value={formik.values.confirm_password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    disabled={isLoading}
                  />
                  {formik.touched.confirm_password && formik.errors.confirm_password && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.confirm_password}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full bg-green-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 ${
                    isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-700'
                  }`}
                >
                  {isLoading ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                  ) : (
                    <>
                      <FaCheck /> Update password
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

export default ChangePasswordPage;
