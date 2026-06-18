import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import AdminLayout from '../../../components/admin/AdminLayout';

export default function PricingRulesPage() {
  const router = useRouter();
  const [allowed, setAllowed] = useState(false);
  const [rules, setRules] = useState([]);

  useEffect(() => {
    fetch('/api/auth/me', { credentials: 'include' })
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((d) => {
        if (d.user?.role !== 'admin') throw new Error();
        setAllowed(true);
      })
      .catch(() => router.replace('/login'));
  }, [router]);

  useEffect(() => {
    if (!allowed) return;
    fetch('/api/admin/invoices/pricing-rules', { credentials: 'include' })
      .then((r) => r.json())
      .then((d) => setRules(d.rules || []));
  }, [allowed]);

  if (!allowed) return null;

  const byFamily = rules.reduce((acc, r) => {
    if (!acc[r.family]) acc[r.family] = [];
    acc[r.family].push(r);
    return acc;
  }, {});

  return (
    <AdminLayout title="Pricing Rules">
      <Head>
        <title>Pricing Rules — Admin</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Link href="/admin/invoices" className="text-sm text-blue-600 hover:underline">← Invoices</Link>
      <h2 className="text-xl font-bold mt-4 mb-6">Pricing rules</h2>
      <div className="space-y-6">
        {Object.entries(byFamily).map(([family, items]) => (
          <div key={family} className="bg-white rounded-2xl border border-slate-200 p-4">
            <h3 className="font-semibold text-slate-800 capitalize mb-3">{family.replace(/_/g, ' ')}</h3>
            <ul className="space-y-2 text-sm">
              {items.map((r) => (
                <li key={r.id} className="flex justify-between gap-4 border-b border-slate-50 pb-2">
                  <span className="text-slate-700">{r.label}</span>
                  <code className="text-xs text-slate-500 truncate max-w-md">
                    {JSON.stringify(r.rule_data)}
                  </code>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
}
