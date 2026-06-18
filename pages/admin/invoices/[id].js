import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import AdminLayout from '../../../components/admin/AdminLayout';
import { formatQtySize } from '../../../lib/invoices/line-item';

export default function InvoiceDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [allowed, setAllowed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [record, setRecord] = useState(null);
  const [sending, setSending] = useState(false);

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
    if (!allowed || !id) return;
    fetch(`/api/admin/invoices/${id}`, { credentials: 'include' })
      .then((r) => r.json())
      .then(setRecord)
      .catch(console.error);
  }, [allowed, id]);

  const sendEmail = async () => {
    setSending(true);
    try {
      const res = await fetch(`/api/admin/invoices/${id}?action=send`, {
        method: 'POST',
        credentials: 'include',
      });
      const data = await res.json();
      if (!res.ok) alert(data.error || 'Send failed');
      else {
        alert('Sent');
        const fresh = await fetch(`/api/admin/invoices/${id}`, { credentials: 'include' });
        setRecord(await fresh.json());
      }
    } finally {
      setSending(false);
    }
  };

  if (loading || !allowed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" />
      </div>
    );
  }

  if (!record?.id) {
    return (
      <AdminLayout title="Not found">
        <p className="text-slate-500">Record not found.</p>
        <Link href="/admin/invoices" className="text-blue-600 text-sm mt-2 inline-block">Back</Link>
      </AdminLayout>
    );
  }

  const isInvoice = record.type === 'invoice';
  const isCash = record.document_type === 'cash';
  const items = record.items || [];

  return (
    <AdminLayout title={isInvoice ? (record.invoice_number || 'Cash summary') : 'Quote'}>
      <Head>
        <title>{record.customer_name || 'Invoice'} — Admin</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="mb-4">
        <Link href="/admin/invoices" className="text-sm text-blue-600 hover:underline">← All invoices</Link>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-6">
        <div className="flex flex-wrap justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl font-bold text-slate-900">{record.customer_name || 'Customer'}</h2>
            <p className="text-slate-500 text-sm mt-1">
              {isInvoice
                ? isCash ? 'Cash price summary' : record.invoice_number
                : `${isCash ? 'Cash' : 'VAT'} quote · ${record.status}`}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {isInvoice && record.pdf_path && (
              <a
                href={record.pdf_path}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-slate-100 rounded-xl text-sm font-medium"
              >
                Download PDF
              </a>
            )}
            {isInvoice && (
              <button
                type="button"
                onClick={sendEmail}
                disabled={sending}
                className="px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-medium disabled:opacity-50"
              >
                Email customer
              </button>
            )}
            {!isInvoice && record.status !== 'converted' && (
              <button
                type="button"
                onClick={async () => {
                  const res = await fetch(`/api/admin/invoices/${id}?action=convert`, {
                    method: 'POST',
                    credentials: 'include',
                  });
                  const inv = await res.json();
                  if (res.ok) router.push(`/admin/invoices/${inv.id}`);
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-medium"
              >
                {isCash ? 'Generate cash summary' : 'Convert to invoice'}
              </button>
            )}
          </div>
        </div>

        <table className="w-full text-sm">
          <thead className="text-slate-500 text-left border-b border-slate-100">
            <tr>
              <th className="pb-2 font-medium">Description</th>
              <th className="pb-2 font-medium">Category</th>
              <th className="pb-2 font-medium">Qty / Size</th>
              <th className="pb-2 font-medium text-right">Unit</th>
              <th className="pb-2 font-medium text-right">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {items.map((line, i) => (
              <tr key={line.id || i}>
                <td className="py-2">{line.name}</td>
                <td className="py-2 text-slate-600">{line.category}</td>
                <td className="py-2 text-slate-600">{formatQtySize(line)}</td>
                <td className="py-2 text-right">€{Number(line.unit_price).toFixed(2)}</td>
                <td className="py-2 text-right font-medium">€{Number(line.line_total).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-6 pt-4 border-t border-slate-100 max-w-xs ml-auto space-y-1 text-sm">
          {!isCash && (
            <>
              <div className="flex justify-between text-slate-600">
                <span>Subtotal</span>
                <span>€{Number(record.subtotal).toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>VAT</span>
                <span>€{Number(record.vat_amount).toFixed(2)}</span>
              </div>
            </>
          )}
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>€{Number(record.total).toFixed(2)}</span>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
