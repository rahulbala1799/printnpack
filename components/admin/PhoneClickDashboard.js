import React, { useCallback, useEffect, useState } from 'react';
import {
  FiPhone,
  FiRefreshCw,
  FiMonitor,
  FiSmartphone,
  FiMapPin,
  FiClock,
} from 'react-icons/fi';

const PERIODS = [
  { id: 'today', label: 'Today' },
  { id: '7d', label: '7 days' },
  { id: '30d', label: '30 days' },
  { id: 'all', label: 'All time' },
];

const LOCATION_LABELS = {
  header: 'Header',
  footer: 'Footer',
  navigation: 'Navigation / breadcrumbs',
  'page-content': 'Page content',
  other: 'Other',
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

function StatCard({ label, value, sub, icon: Icon = FiPhone, color = 'blue' }) {
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

function MiniBarChart({ data }) {
  if (!data?.length) {
    return <p className="text-sm text-slate-400">No clicks recorded for this period yet.</p>;
  }

  const max = Math.max(...data.map((d) => d.clicks), 1);

  return (
    <div className="flex items-end gap-1 h-28">
      {data.map((d) => (
        <div
          key={d.date}
          className="flex-1 bg-emerald-200 hover:bg-emerald-400 rounded-t transition-colors min-w-[6px]"
          style={{ height: `${Math.max((d.clicks / max) * 100, 6)}%` }}
          title={`${d.date}: ${d.clicks} clicks`}
        />
      ))}
    </div>
  );
}

function formatWhen(value) {
  if (!value) return '—';
  return new Date(value).toLocaleString('en-IE', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

function locationLabel(location) {
  return LOCATION_LABELS[location] || location.replace(/-/g, ' ');
}

export default function PhoneClickDashboard() {
  const [period, setPeriod] = useState('30d');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchStats = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/admin/phone-clicks/stats?period=${period}`, {
        credentials: 'include',
      });
      const json = await parseApiResponse(res);
      if (!res.ok) throw new Error(json.error || 'Failed to load phone click stats');
      setData(json);
    } catch (err) {
      setError(err.message);
      setData(null);
    } finally {
      setLoading(false);
    }
  }, [period]);

  useEffect(() => {
    fetchStats();
  }, [fetchStats]);

  const periodMap = Object.fromEntries((data?.periodTotals || []).map((p) => [p.period, p.total_clicks]));

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className="text-sm text-slate-500">
            Tracking every <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">tel:</code> link click site-wide
          </p>
          <p className="text-slate-900 font-semibold mt-1">
            Call number: {data?.phoneNumber || '+353 89 415 7369'}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {PERIODS.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setPeriod(p.id)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors ${
                period === p.id
                  ? 'bg-emerald-600 text-white border-emerald-600'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-emerald-300'
              }`}
            >
              {p.label}
            </button>
          ))}
          <button
            type="button"
            onClick={fetchStats}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
          >
            <FiRefreshCw size={14} className={loading ? 'animate-spin' : ''} />
            Refresh
          </button>
        </div>
      </div>

      {error && (
        <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-amber-900 text-sm">
          {error}
        </div>
      )}

      {loading && !data ? (
        <div className="flex items-center justify-center py-16">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-emerald-600" />
        </div>
      ) : (
        <>
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
            <StatCard
              label="Phone clicks"
              value={data?.totals?.total_clicks ?? 0}
              sub={`${PERIODS.find((p) => p.id === period)?.label || period} selected`}
              color="green"
            />
            <StatCard
              label="Unique sessions"
              value={data?.totals?.unique_sessions ?? 0}
              sub="Visitors who tapped call"
              color="blue"
            />
            <StatCard
              label="Pages with clicks"
              value={data?.totals?.unique_pages ?? 0}
              sub="Different URLs"
              color="purple"
            />
            <StatCard
              label="Today"
              value={periodMap.today ?? 0}
              sub={`7d: ${periodMap['7d'] ?? 0} · All: ${periodMap.all ?? 0}`}
              icon={FiClock}
              color="amber"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-1">Clicks over time</h3>
              <p className="text-xs text-slate-500 mb-4">Daily call-link taps</p>
              <MiniBarChart data={data?.byDay} />
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-4">Clicks by page area</h3>
              <div className="space-y-3">
                {(data?.byLocation || []).length === 0 && (
                  <p className="text-sm text-slate-400">No location data yet.</p>
                )}
                {(data?.byLocation || []).map((row) => {
                  const total = data?.totals?.total_clicks || 1;
                  const pct = Math.round((row.clicks / total) * 100);
                  return (
                    <div key={row.location}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-slate-700">{locationLabel(row.location)}</span>
                        <span className="font-medium text-slate-900">{row.clicks}</span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${pct}%` }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm overflow-hidden">
              <h3 className="font-semibold text-slate-900 mb-4">Top pages</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-slate-500 border-b border-slate-100">
                      <th className="pb-2 pr-3 font-medium">Page</th>
                      <th className="pb-2 font-medium text-right">Clicks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(data?.byPage || []).map((row) => (
                      <tr key={row.page_path} className="border-b border-slate-50">
                        <td className="py-2 pr-3">
                          <p className="font-medium text-slate-800">{row.page_path}</p>
                          {row.page_title && (
                            <p className="text-xs text-slate-400 truncate max-w-xs">{row.page_title}</p>
                          )}
                        </td>
                        <td className="py-2 text-right font-semibold text-emerald-700">{row.clicks}</td>
                      </tr>
                    ))}
                    {(data?.byPage || []).length === 0 && (
                      <tr>
                        <td colSpan={2} className="py-6 text-center text-slate-400">
                          No page clicks recorded yet.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-4">Device breakdown</h3>
              <div className="space-y-3">
                {(data?.byDevice || []).map((row) => (
                  <div key={row.device_type} className="flex items-center justify-between text-sm">
                    <span className="inline-flex items-center gap-2 text-slate-700 capitalize">
                      {row.device_type === 'mobile' ? <FiSmartphone size={14} /> : <FiMonitor size={14} />}
                      {row.device_type}
                    </span>
                    <span className="font-semibold text-slate-900">{row.clicks}</span>
                  </div>
                ))}
                {(data?.byDevice || []).length === 0 && (
                  <p className="text-sm text-slate-400">No device data yet.</p>
                )}
              </div>

              {(data?.byPhoneHref || []).length > 0 && (
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <h4 className="font-medium text-slate-900 mb-3">Numbers clicked</h4>
                  <div className="space-y-2">
                    {data.byPhoneHref.map((row) => (
                      <div key={row.phone_href} className="flex justify-between text-sm">
                        <code className="text-slate-600">{row.phone_href}</code>
                        <span className="font-semibold">{row.clicks}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm overflow-hidden">
            <h3 className="font-semibold text-slate-900 mb-4">Recent call clicks</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-slate-500 border-b border-slate-100">
                    <th className="pb-2 pr-4 font-medium">When</th>
                    <th className="pb-2 pr-4 font-medium">Page</th>
                    <th className="pb-2 pr-4 font-medium">Area</th>
                    <th className="pb-2 pr-4 font-medium">Link text</th>
                    <th className="pb-2 font-medium">Device</th>
                  </tr>
                </thead>
                <tbody>
                  {(data?.recent || []).map((row) => (
                    <tr key={row.id} className="border-b border-slate-50 align-top">
                      <td className="py-2 pr-4 text-slate-500 whitespace-nowrap">
                        {formatWhen(row.clicked_at)}
                      </td>
                      <td className="py-2 pr-4">
                        <p className="font-medium text-slate-800">{row.page_path || '/'}</p>
                      </td>
                      <td className="py-2 pr-4 text-slate-600">
                        <span className="inline-flex items-center gap-1">
                          <FiMapPin size={12} />
                          {locationLabel(row.location)}
                        </span>
                      </td>
                      <td className="py-2 pr-4 text-slate-600 max-w-xs truncate">
                        {row.link_text || '—'}
                      </td>
                      <td className="py-2 capitalize text-slate-600">{row.device_type || '—'}</td>
                    </tr>
                  ))}
                  {(data?.recent || []).length === 0 && (
                    <tr>
                      <td colSpan={5} className="py-8 text-center text-slate-400">
                        No recent clicks. Every <code>tel:</code> link on the site is tracked automatically.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
