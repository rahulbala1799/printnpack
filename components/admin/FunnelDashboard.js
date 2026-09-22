import React, { useCallback, useEffect, useState } from 'react';
import { FiRefreshCw, FiUsers, FiPackage, FiSend, FiLogOut, FiInbox } from 'react-icons/fi';

const PERIODS = [
  { id: 'today', label: 'Today' },
  { id: '7d', label: '7 days' },
  { id: '30d', label: '30 days' },
  { id: 'all', label: 'All time' },
];

const FORM_LABELS = {
  quote_builder: 'Quote builder',
  quote_cart: 'Quote basket',
  leadgen: 'Lead popup',
  contact: 'Contact form',
};

const STEP_LABELS = {
  open: 'Opened',
  start: 'Started typing',
  product: 'Entered a product',
  send: 'Clicked send',
  success: 'Sent',
  dismiss: 'Closed without sending',
};

async function parseApiResponse(res) {
  const text = await res.text();
  if (!text) {
    if (!res.ok) throw new Error(`Request failed (${res.status})`);
    return {};
  }
  try {
    return JSON.parse(text);
  } catch {
    throw new Error(res.ok ? 'Invalid server response' : `Request failed (${res.status})`);
  }
}

function StatCard({ label, value, sub, icon: Icon = FiUsers, color = 'blue' }) {
  const colors = {
    blue: 'bg-blue-50 text-blue-700',
    green: 'bg-green-50 text-green-700',
    amber: 'bg-amber-50 text-amber-700',
    purple: 'bg-purple-50 text-purple-700',
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
      <p className="text-slate-500 text-sm">{label}</p>
      <p className={`text-3xl font-bold mt-1 ${colors[color]?.split(' ')[1] || 'text-slate-900'}`}>
        {value}
      </p>
      {sub && <p className="text-slate-400 text-xs mt-1">{sub}</p>}
      <div className={`w-10 h-10 ${colors[color]} rounded-xl flex items-center justify-center mt-3`}>
        <Icon size={18} />
      </div>
    </div>
  );
}

function FunnelCard({ title, hint, steps }) {
  const max = Math.max(...steps.map((step) => step.value), 1);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
      <h3 className="font-semibold text-slate-900">{title}</h3>
      {hint && <p className="text-slate-400 text-xs mt-1">{hint}</p>}
      <div className="mt-4 space-y-3">
        {steps.map((step) => (
          <div key={step.label}>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-slate-700">{step.label}</span>
              <span className="font-medium text-slate-900">
                {step.value}
                {step.rate != null && (
                  <span className="text-slate-400 font-normal"> · {step.rate}%</span>
                )}
              </span>
            </div>
            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-500 rounded-full"
                style={{ width: `${Math.max((step.value / max) * 100, step.value ? 6 : 0)}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SimpleTable({ rows, empty, columns }) {
  if (!rows?.length) {
    return <p className="text-sm text-slate-400">{empty}</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-slate-100 text-left text-xs uppercase tracking-wider text-slate-400">
            {columns.map((col) => (
              <th key={col.key} className={`px-3 py-2 ${col.align === 'right' ? 'text-right' : ''}`}>
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={`${row.key || index}`} className={index % 2 ? 'bg-slate-50/60' : ''}>
              {columns.map((col) => (
                <td
                  key={col.key}
                  className={`px-3 py-2 ${col.align === 'right' ? 'text-right font-medium text-slate-900' : 'text-slate-700'}`}
                >
                  {col.render ? col.render(row) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function formatWhen(value) {
  if (!value) return '—';
  return new Date(value).toLocaleString('en-IE', {
    day: 'numeric',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export default function FunnelDashboard() {
  const [period, setPeriod] = useState('30d');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchStats = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/admin/funnels/stats?period=${period}`, { credentials: 'include' });
      const json = await parseApiResponse(res);
      if (!res.ok) throw new Error(json.error || 'Failed to load funnel stats');
      setData(json);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [period]);

  useEffect(() => {
    fetchStats();
  }, [fetchStats]);

  const quote = data?.quote || {};
  const leadgen = data?.leadgen || {};
  const contact = data?.contact || {};

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {PERIODS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setPeriod(item.id)}
              className={`px-3 py-1.5 rounded-xl text-sm font-medium ${
                period === item.id ? 'bg-blue-600 text-white' : 'bg-white border border-slate-200 text-slate-600'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={fetchStats}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-medium hover:bg-slate-50"
        >
          <FiRefreshCw size={14} /> Refresh
        </button>
      </div>

      {error && (
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-sm text-amber-900">{error}</div>
      )}

      {loading && !data ? (
        <div className="flex justify-center py-16">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard label="Quote builder opened" value={quote.opened || 0} sub={`${quote.openToSend || 0}% sent a quote`} icon={FiInbox} />
            <StatCard label="Entered a product" value={quote.products || 0} sub={`${quote.openToProduct || 0}% of opens`} icon={FiPackage} color="purple" />
            <StatCard
              label="Clicked send"
              value={(quote.sent || 0) + (leadgen.sent || 0) + (contact.sent || 0)}
              sub="Quote, contact form, and popup"
              icon={FiSend}
              color="green"
            />
            <StatCard
              label="Left after opening a form"
              value={(data?.dropOffPages || []).reduce((sum, row) => sum + (row.sessions || 0), 0)}
              sub="Opened a form, never sent"
              icon={FiLogOut}
              color="amber"
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-4">
            <FunnelCard
              title="Quote builder"
              hint="Opened → added a product → clicked send"
              steps={[
                { label: 'Opened', value: quote.opened || 0, rate: 100 },
                { label: 'Entered a product', value: quote.products || 0, rate: quote.openToProduct || 0 },
                { label: 'Clicked send', value: quote.sent || 0, rate: quote.openToSend || 0 },
                { label: 'Quote sent', value: quote.success || 0, rate: quote.openToSend || 0 },
              ]}
            />
            <FunnelCard
              title="Lead popup"
              hint="Shown on home and products"
              steps={[
                { label: 'Opened', value: leadgen.opened || 0, rate: 100 },
                { label: 'Started typing', value: leadgen.started || 0, rate: leadgen.startToSend || 0 },
                { label: 'Clicked send', value: leadgen.sent || 0, rate: leadgen.openToSend || 0 },
                { label: 'Closed without sending', value: leadgen.dismissed || 0 },
              ]}
            />
            <FunnelCard
              title="Contact form"
              hint="/contact page"
              steps={[
                { label: 'Opened the page', value: contact.opened || 0, rate: 100 },
                { label: 'Started typing', value: contact.started || 0, rate: contact.startToSend || 0 },
                { label: 'Clicked send', value: contact.sent || 0, rate: contact.openToSend || 0 },
                { label: 'Message sent', value: contact.success || 0 },
              ]}
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-1">Where people leave the site</h3>
              <p className="text-slate-400 text-xs mb-4">Last page in the visit. Use this to see drop-off pages.</p>
              <SimpleTable
                empty="No exit pages yet for this period."
                rows={data?.exitPages}
                columns={[
                  { key: 'page_path', label: 'Last page' },
                  { key: 'exits', label: 'Exits', align: 'right' },
                  { key: 'google_exits', label: 'From Google', align: 'right' },
                ]}
              />
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-1">One-page visits</h3>
              <p className="text-slate-400 text-xs mb-4">Arrived and left without viewing another page or sending a quote.</p>
              <SimpleTable
                empty="No single-page exits yet."
                rows={data?.bouncePages}
                columns={[
                  { key: 'page_path', label: 'Landing page' },
                  { key: 'sessions', label: 'Left immediately', align: 'right' },
                ]}
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-1">Opened a form, then left</h3>
              <p className="text-slate-400 text-xs mb-4">They opened quote, popup, or contact and never clicked send.</p>
              <SimpleTable
                empty="No form drop-off yet. Numbers appear after people use the new tracking."
                rows={data?.dropOffPages}
                columns={[
                  { key: 'form_type', label: 'Form', render: (row) => FORM_LABELS[row.form_type] || row.form_type },
                  { key: 'page_path', label: 'Last page before leaving' },
                  { key: 'sessions', label: 'People', align: 'right' },
                ]}
              />
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-1">Where forms are opened</h3>
              <SimpleTable
                empty="No form opens recorded yet."
                rows={data?.openPages}
                columns={[
                  { key: 'form_type', label: 'Form', render: (row) => FORM_LABELS[row.form_type] || row.form_type },
                  { key: 'page_path', label: 'Page' },
                  { key: 'sessions', label: 'Opens', align: 'right' },
                ]}
              />
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
            <h3 className="font-semibold text-slate-900 mb-4">Recent form activity</h3>
            <SimpleTable
              empty="Nothing recorded yet. After deploy, new opens and sends will show here."
              rows={data?.recent}
              columns={[
                { key: 'created_at', label: 'When', render: (row) => formatWhen(row.created_at) },
                { key: 'form_type', label: 'Form', render: (row) => FORM_LABELS[row.form_type] || row.form_type },
                { key: 'step', label: 'Step', render: (row) => STEP_LABELS[row.step] || row.step },
                { key: 'page_path', label: 'Page' },
                { key: 'product_name', label: 'Product' },
                { key: 'traffic_source', label: 'Source' },
              ]}
            />
          </div>
        </>
      )}
    </div>
  );
}
