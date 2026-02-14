import React, { useEffect, useState } from 'react';
import Layout from '../../components/layout/Layout';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FaUserShield, FaUsers, FaBoxOpen, FaCog, FaChartBar, FaSignOutAlt } from 'react-icons/fa';
import Link from 'next/link';

const AdminDashboard = () => {
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
      if (data.user.role !== 'admin') {
        router.push('/login');
        return;
      }
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
        <title>Admin Dashboard - PrintNPack</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
          <div className="container mx-auto px-4 py-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <FaUserShield className="text-3xl" />
                <div>
                  <h1 className="text-2xl font-bold">Admin Dashboard</h1>
                  <p className="text-blue-100">Welcome back, {user?.name}</p>
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

        {/* Dashboard Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Users Card */}
            <Link href="/admin/users" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-4 rounded-lg">
                  <FaUsers className="text-3xl text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Users</h3>
                  <p className="text-gray-600">Manage user accounts</p>
                </div>
              </div>
            </Link>

            {/* Orders Card */}
            <Link href="/admin/orders" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-4 rounded-lg">
                  <FaBoxOpen className="text-3xl text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Orders</h3>
                  <p className="text-gray-600">View all orders</p>
                </div>
              </div>
            </Link>

            {/* Reports Card */}
            <Link href="/admin/reports" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4">
                <div className="bg-purple-100 p-4 rounded-lg">
                  <FaChartBar className="text-3xl text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Reports</h3>
                  <p className="text-gray-600">View analytics</p>
                </div>
              </div>
            </Link>

            {/* Settings Card */}
            <Link href="/admin/settings" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4">
                <div className="bg-gray-100 p-4 rounded-lg">
                  <FaCog className="text-3xl text-gray-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Settings</h3>
                  <p className="text-gray-600">System configuration</p>
                </div>
              </div>
            </Link>
          </div>

          {/* Quick Info */}
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
              <div>
                <p className="text-gray-600 text-sm">Role</p>
                <p className="font-medium capitalize">{user?.role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
