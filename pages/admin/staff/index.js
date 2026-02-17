import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import AdminLayout from '../../../components/admin/AdminLayout';
import { FiUserPlus, FiUsers, FiAlertCircle, FiCheckCircle } from 'react-icons/fi';

export default function AdminStaffPage() {
  const router = useRouter();
  const [allowed, setAllowed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [staffList, setStaffList] = useState([]);
  const [form, setForm] = useState({ user_id: '', password: '', name: '' });
  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState('');
  const [submitting, setSubmitting] = useState(false);

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

  useEffect(() => {
    if (!allowed) return;
    fetch('/api/admin/staff', { credentials: 'include' })
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data) => setStaffList(data.staff || []))
      .catch(() => setStaffList([]));
  }, [allowed]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');
    setSubmitSuccess('');
    const { user_id, password, name } = form;
    if (!user_id?.trim() || !password || !name?.trim()) {
      setSubmitError('User ID, password, and name are required.');
      return;
    }
    if (password.length < 8) {
      setSubmitError('Password must be at least 8 characters.');
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch('/api/admin/staff', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          user_id: user_id.trim(),
          password,
          name: name.trim(),
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setSubmitError(data.error || 'Failed to create staff account.');
        return;
      }
      setSubmitSuccess(data.message || 'Staff account created. They must sign in at /staff/login and change their password on first login.');
      setForm({ user_id: '', password: '', name: '' });
      setStaffList((prev) => [
        { login_id: user_id.trim(), name: name.trim(), is_active: true, must_change_password: true, created_at: new Date().toISOString() },
        ...prev,
      ]);
    } catch (err) {
      setSubmitError('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading || !allowed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" />
      </div>
    );
  }

  return (
    <AdminLayout title="Staff">
      <Head>
        <title>Staff — PrintNPack Admin</title>
        <meta name="robots" content="noindex" />
      </Head>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900">Staff accounts</h2>
        <p className="text-slate-500 mt-1">
          Add staff who sign in with a User ID and password at <Link href="/staff/login" target="_blank" className="text-blue-600 hover:underline">/staff/login</Link>. They must change their password on first login.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Add staff form */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50">
            <h3 className="font-semibold text-slate-900 flex items-center gap-2">
              <FiUserPlus className="text-emerald-600" size={18} />
              Add staff
            </h3>
          </div>
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {submitError && (
              <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-100 rounded-xl text-red-700 text-sm">
                <FiAlertCircle className="shrink-0 mt-0.5" size={16} />
                {submitError}
              </div>
            )}
            {submitSuccess && (
              <div className="flex items-start gap-2 p-3 bg-emerald-50 border border-emerald-100 rounded-xl text-emerald-800 text-sm">
                <FiCheckCircle className="shrink-0 mt-0.5" size={16} />
                {submitSuccess}
              </div>
            )}
            <div>
              <label htmlFor="staff_user_id" className="block text-sm font-medium text-slate-700 mb-1">User ID</label>
              <input
                id="staff_user_id"
                type="text"
                value={form.user_id}
                onChange={(e) => setForm((f) => ({ ...f, user_id: e.target.value }))}
                className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="e.g. john.smith"
                required
                disabled={submitting}
              />
              <p className="text-slate-500 text-xs mt-1">Staff will use this to sign in at /staff/login</p>
            </div>
            <div>
              <label htmlFor="staff_password" className="block text-sm font-medium text-slate-700 mb-1">Temporary password</label>
              <input
                id="staff_password"
                type="password"
                value={form.password}
                onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))}
                className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Min 8 characters"
                required
                minLength={8}
                disabled={submitting}
              />
              <p className="text-slate-500 text-xs mt-1">They must change it on first login</p>
            </div>
            <div>
              <label htmlFor="staff_name" className="block text-sm font-medium text-slate-700 mb-1">Name</label>
              <input
                id="staff_name"
                type="text"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Full name"
                required
                disabled={submitting}
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full py-2.5 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? 'Creating…' : 'Create staff account'}
            </button>
          </form>
        </div>

        {/* List of staff */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50">
            <h3 className="font-semibold text-slate-900 flex items-center gap-2">
              <FiUsers className="text-slate-600" size={18} />
              Existing staff
            </h3>
          </div>
          <div className="overflow-x-auto">
            {staffList.length === 0 ? (
              <div className="p-8 text-center text-slate-500 text-sm">No staff accounts yet. Add one with the form.</div>
            ) : (
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-100">
                    <th className="text-left px-6 py-3 text-slate-500 font-semibold text-xs uppercase tracking-wider">User ID</th>
                    <th className="text-left px-6 py-3 text-slate-500 font-semibold text-xs uppercase tracking-wider">Name</th>
                    <th className="text-left px-6 py-3 text-slate-500 font-semibold text-xs uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {staffList.map((s) => (
                    <tr key={s.id || s.login_id} className="border-b border-slate-50">
                      <td className="px-6 py-3 font-medium text-slate-800">{s.login_id || '—'}</td>
                      <td className="px-6 py-3 text-slate-700">{s.name}</td>
                      <td className="px-6 py-3">
                        <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${s.is_active ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'}`}>
                          {s.is_active ? 'Active' : 'Inactive'}
                        </span>
                        {s.must_change_password && (
                          <span className="ml-1 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-amber-100 text-amber-800">
                            Must change password
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
