import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import AdminLayout from '../../../components/admin/AdminLayout';
import PhoneClickDashboard from '../../../components/admin/PhoneClickDashboard';

export default function AdminPhoneClicksPage() {
  const router = useRouter();
  const [allowed, setAllowed] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/auth/me', { credentials: 'include' })
      .then((res) => {
        if (!res.ok) throw new Error('Not authenticated');
        return res.json();
      })
      .then((data) => {
        if (data.user?.role !== 'admin') throw new Error('Not admin');
        setAllowed(true);
      })
      .catch(() => router.replace('/login'))
      .finally(() => setLoading(false));
  }, [router]);

  if (loading || !allowed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600" />
      </div>
    );
  }

  return (
    <AdminLayout title="Phone Clicks">
      <Head>
        <title>Phone Click Tracking — PrintNPack Admin</title>
        <meta name="robots" content="noindex" />
      </Head>

      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900">Phone Click Tracking</h2>
        <p className="text-slate-500 mt-1">
          See how many visitors tapped your call number across every page — header, footer, product pages, and FAQs.
        </p>
      </div>

      <PhoneClickDashboard />
    </AdminLayout>
  );
}
