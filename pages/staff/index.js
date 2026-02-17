import React, { useEffect, useState } from 'react';
import Layout from '../../components/layout/Layout';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FaUserTie, FaBoxOpen, FaClipboardList, FaSignOutAlt } from 'react-icons/fa';
import Link from 'next/link';

const StaffDashboard = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const response = await fetch('/api/auth/me', { credentials: 'include' });
      if (!response.ok) {
        router.replace('/staff/login');
        return;
      }
      const data = await response.json();
      if (data.user.role !== 'staff' && data.user.role !== 'admin') {
        router.replace('/staff/login');
        return;
      }
      if (data.user.role === 'staff' && data.user.must_change_password) {
        router.replace('/staff/change-password');
        return;
      }
      setUser(data.user);
    } catch (error) {
      router.replace('/staff/login');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST', credentials: 'include' });
    router.replace('/staff/login');
  };

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Head>
        <title>Staff Dashboard - PrintNPack</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-r from-green-900 to-green-700 text-white">
          <div className="container mx-auto px-4 py-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <FaUserTie className="text-3xl" />
                <div>
                  <h1 className="text-2xl font-bold">Staff Dashboard</h1>
                  <p className="text-green-100">Welcome, {user?.name}</p>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors"
              >
                <FaSignOutAlt />
                Logout
              </button>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/staff/orders" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-4 rounded-lg">
                  <FaBoxOpen className="text-3xl text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Orders</h3>
                  <p className="text-gray-600">Manage customer orders</p>
                </div>
              </div>
            </Link>

            <Link href="/staff/quotes" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-4 rounded-lg">
                  <FaClipboardList className="text-3xl text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Quotes</h3>
                  <p className="text-gray-600">Process quote requests</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StaffDashboard;
