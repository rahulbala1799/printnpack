import React, { useEffect, useState, useMemo } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import AdminLayout from '../../../components/admin/AdminLayout';
import { FiPlus, FiFileText } from 'react-icons/fi';

export default function AdminInvoicesPage() {
  const router = useRouter();
  const [allowed, setAllowed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [quotes, setQuotes] = useState([]);
  const [invoices, setInvoices] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetch('/api/auth/me', { credentials: 'include' })
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((d) => {
        if (d.user?.role !== 'admin') throw new Error();
        setAllowed(true);
      })
      .catch(() => router.replace('/login'))
      .finally(() => setLoading(false));
  }, [router]);

  useEffect(() => {
    if (!allowed) return;
    fetch('/api/admin/invoices', { credentials: 'include' })
      .then((r) => r.json())
      .then((d) => {
        setQuotes(d.quotes || []);
        setInvoices(d.invoices || []);
      })
      .catch(console.error);
  }, [allowed]);

  const rows = useMemo(() => {
    const q = quotes.map((x) => ({ ...x, kind: 'quote' }));
    const i = invoices.map((x) => ({ ...x, kind: 'invoice' }));
    let all = [...q, ...i].sort((a, b) => new Date(b.updated_at || b.created_at) - new Date(a.updated_at || a.created_at));
    if (filter === 'draft') all = all.filter((r) => r.kind === 'quote' && r.status === 'draft');
    if (filter === 'quotes') all = all.filter((r) => r.kind === 'quote');
    if (filter === 'vat') all = all.filter((r) => r.kind === 'invoice' && r.document_type === 'vat');
    if (filter === 'cash') all = all.filter((r) => r.kind === 'invoice' && r.document_type === 'cash');
    return all;
  }, [quotes, invoices, filter]);

  if (loading || !allowed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" />
      </div>
    );
  }

  return (
    <AdminLayout title="Invoices">
      <Head>
        <title>Invoices — Admin — PrintNPack</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Quotes & Invoices</h2>
          <p className="text-slate-500 text-sm mt-1">AI quote builder with VAT and cash summaries</p>
        </div>
        <Link
          href="/admin/invoices/new"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-xl font-medium text-sm"
        >
          <FiPlus /> New Quote
        </Link>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {['all', 'draft', 'quotes', 'vat', 'cash'].map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium capitalize ${
              filter === f ? 'bg-slate-900 text-white' : 'bg-white text-slate-600 border border-slate-200'
            }`}
          >
            {f === 'vat' ? 'VAT Invoices' : f === 'cash' ? 'Cash' : f}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
        {rows.length === 0 ? (
          <div className="p-12 text-center text-slate-500">
            <FiFileText className="mx-auto text-4xl mb-3 opacity-40" />
            <p>No quotes or invoices yet.</p>
            <Link href="/admin/invoices/new" className="text-blue-600 text-sm mt-2 inline-block">Create your first quote</Link>
          </div>
        ) : (
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-slate-500 text-left">
              <tr>
                <th className="px-4 py-3 font-medium">Customer</th>
                <th className="px-4 py-3 font-medium">Type</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium text-right">Total</th>
                <th className="px-4 py-3 font-medium">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {rows.map((row) => (
                <tr
                  key={`${row.kind}-${row.id}`}
                  className="hover:bg-slate-50 cursor-pointer"
                  onClick={() => {
                    if (row.kind === 'quote' && row.status === 'draft') {
                      router.push(`/admin/invoices/new?quote_id=${row.id}`);
                    } else {
                      router.push(`/admin/invoices/${row.id}`);
                    }
                  }}
                >
                  <td className="px-4 py-3 font-medium text-slate-900">{row.customer_name || '—'}</td>
                  <td className="px-4 py-3 text-slate-600">
                    {row.kind === 'invoice'
                      ? row.document_type === 'cash' ? 'Cash summary' : row.invoice_number
                      : `${row.document_type === 'cash' ? 'Cash' : 'VAT'} quote`}
                  </td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-0.5 rounded-full text-xs bg-slate-100 text-slate-700">{row.status}</span>
                  </td>
                  <td className="px-4 py-3 text-right font-medium">€{Number(row.total).toFixed(2)}</td>
                  <td className="px-4 py-3 text-slate-500">
                    {new Date(row.updated_at || row.created_at).toLocaleDateString('en-IE')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div className="mt-4 flex gap-4 text-sm">
        <Link href="/admin/invoices/pricing-rules" className="text-blue-600 hover:underline">Pricing rules</Link>
      </div>
    </AdminLayout>
  );
}
