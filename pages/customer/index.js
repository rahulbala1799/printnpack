import React, { useEffect, useState } from 'react';
import Layout from '../../components/layout/Layout';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FaUser, FaBoxOpen, FaClipboardList, FaCog, FaSignOutAlt } from 'react-icons/fa';
import Link from 'next/link';

const CustomerDashboard = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const response = await fetch('/api/auth/me');
      if (!response.ok) {
        router.push('/login');
        return;
      }
      const data = await response.json();
      setUser(data.user);
    } catch (error) {
      router.push('/login');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/login');
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
        <title>My Account - PrintNPack</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-r from-purple-900 to-purple-700 text-white">
          <div className="container mx-auto px-4 py-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <FaUser className="text-3xl" />
                <div>
                  <h1 className="text-2xl font-bold">My Account</h1>
                  <p className="text-purple-100">Welcome, {user?.name}</p>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/customer/orders" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-4 rounded-lg">
                  <FaBoxOpen className="text-3xl text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">My Orders</h3>
                  <p className="text-gray-600">View order history</p>
                </div>
              </div>
            </Link>

            <Link href="/customer/quotes" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-4 rounded-lg">
                  <FaClipboardList className="text-3xl text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">My Quotes</h3>
                  <p className="text-gray-600">View quote requests</p>
                </div>
              </div>
            </Link>

            <Link href="/customer/account" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4">
                <div className="bg-purple-100 p-4 rounded-lg">
                  <FaCog className="text-3xl text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Settings</h3>
                  <p className="text-gray-600">Update your profile</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Account Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600 text-sm">Name</p>
                <p className="font-medium">{user?.name}</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Email</p>
                <p className="font-medium">{user?.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CustomerDashboard;
