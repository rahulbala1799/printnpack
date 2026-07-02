import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import {
  FiEye,
  FiRefreshCw,
  FiMonitor,
  FiSmartphone,
  FiUsers,
  FiGlobe,
  FiClock,
  FiPhone,
} from 'react-icons/fi';

const PERIODS = [
  { id: 'today', label: 'Today' },
  { id: '7d', label: '7 days' },
  { id: '30d', label: '30 days' },
  { id: 'all', label: 'All time' },
];

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

function StatCard({ label, value, sub, icon: Icon = FiEye, color = 'blue' }) {
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
    return <p className="text-sm text-slate-400">No page views recorded for this period yet.</p>;
  }

  const max = Math.max(...data.map((d) => d.views), 1);

  return (
    <div className="flex items-end gap-1 h-28">
      {data.map((d) => (
        <div
          key={d.date}
          className="flex-1 bg-blue-200 hover:bg-blue-400 rounded-t transition-colors min-w-[6px]"
          style={{ height: `${Math.max((d.views / max) * 100, 6)}%` }}
          title={`${d.date}: ${d.views} views · ${d.visitors} visitors`}
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

function shortSession(id) {
  if (!id) return '—';
  return id.length > 12 ? `${id.slice(0, 12)}…` : id;
}

function formatDuration(seconds) {
  if (!seconds || seconds <= 0) return '—';
  if (seconds < 60) return `${seconds}s`;
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return secs ? `${mins}m ${secs}s` : `${mins}m`;
}

export default function PageViewDashboard() {
  const [period, setPeriod] = useState('30d');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchStats = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/admin/page-views/stats?period=${period}`, {
        credentials: 'include',
      });
      const json = await parseApiResponse(res);
      if (!res.ok) throw new Error(json.error || 'Failed to load page view stats');
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

  const periodMap = Object.fromEntries(
    (data?.periodTotals || []).map((p) => [p.period, p])
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className="text-sm text-slate-500">
            Anonymous visitor tracking — every page load on the public site is recorded
          </p>
          <p className="text-slate-600 text-sm mt-1">
            Visitors are identified by session ID (not personal name). IP addresses are hashed for privacy.
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
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-blue-300'
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
          <Link
            href="/admin/phone-clicks"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium border border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
          >
            <FiPhone size={14} />
            Phone clicks
          </Link>
        </div>
      </div>

      {error && (
        <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-amber-900 text-sm">
          {error}
        </div>
      )}

      {loading && !data ? (
        <div className="flex items-center justify-center py-16">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600" />
        </div>
      ) : (
        <>
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
            <StatCard
              label="Page views"
              value={data?.totals?.total_views ?? 0}
              sub={`${PERIODS.find((p) => p.id === period)?.label || period} selected`}
              color="blue"
            />
            <StatCard
              label="Unique visitors"
              value={data?.totals?.unique_visitors ?? 0}
              sub="Distinct sessions"
              icon={FiUsers}
              color="green"
            />
            <StatCard
              label="Pages viewed"
              value={data?.totals?.unique_pages ?? 0}
              sub="Different URLs"
              color="purple"
            />
            <StatCard
              label="Avg. time on page"
              value={`${data?.totals?.avg_time_on_page ?? 0}s`}
              sub={`Bounce rate: ${data?.totals?.bounce_rate ?? 0}% · Today: ${periodMap.today?.total_views ?? 0} views`}
              icon={FiClock}
              color="amber"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-1">Views over time</h3>
              <p className="text-xs text-slate-500 mb-4">Daily page views (hover for visitor count)</p>
              <MiniBarChart data={data?.byDay} />
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-4">Traffic sources</h3>
              <div className="space-y-3">
                {(data?.byReferrer || []).length === 0 && (
                  <p className="text-sm text-slate-400">No referrer data yet.</p>
                )}
                {(data?.byReferrer || []).map((row) => {
                  const total = data?.totals?.total_views || 1;
                  const pct = Math.round((row.views / total) * 100);
                  return (
                    <div key={row.source}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-slate-700">{row.source}</span>
                        <span className="font-medium text-slate-900">{row.views}</span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full" style={{ width: `${pct}%` }} />
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
                      <th className="pb-2 pr-3 font-medium text-right">Views</th>
                      <th className="pb-2 font-medium text-right">Visitors</th>
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
                        <td className="py-2 pr-3 text-right font-semibold text-blue-700">{row.views}</td>
                        <td className="py-2 text-right text-slate-600">{row.visitors}</td>
                      </tr>
                    ))}
                    {(data?.byPage || []).length === 0 && (
                      <tr>
                        <td colSpan={3} className="py-6 text-center text-slate-400">
                          No page views recorded yet.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-4">Device &amp; country</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">Devices</p>
                  {(data?.byDevice || []).map((row) => (
                    <div key={row.device_type} className="flex items-center justify-between text-sm py-1">
                      <span className="inline-flex items-center gap-2 text-slate-700 capitalize">
                        {row.device_type === 'mobile' ? <FiSmartphone size={14} /> : <FiMonitor size={14} />}
                        {row.device_type}
                      </span>
                      <span className="font-semibold">{row.views}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t border-slate-100">
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">Countries</p>
                  {(data?.byCountry || []).map((row) => (
                    <div key={row.country} className="flex items-center justify-between text-sm py-1">
                      <span className="inline-flex items-center gap-2 text-slate-700 uppercase">
                        <FiGlobe size={14} />
                        {row.country}
                      </span>
                      <span className="font-semibold">{row.views}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm overflow-hidden">
            <h3 className="font-semibold text-slate-900 mb-1">Visitors (sessions)</h3>
            <p className="text-xs text-slate-500 mb-4">Each row is one browsing session — entry page, exit page, and pages viewed</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-slate-500 border-b border-slate-100">
                    <th className="pb-2 pr-4 font-medium">When</th>
                    <th className="pb-2 pr-4 font-medium">Session</th>
                    <th className="pb-2 pr-4 font-medium">Entry → Exit</th>
                    <th className="pb-2 pr-4 font-medium">Pages</th>
                    <th className="pb-2 pr-4 font-medium">Time</th>
                    <th className="pb-2 font-medium">Device</th>
                  </tr>
                </thead>
                <tbody>
                  {(data?.visitors || []).map((row) => (
                    <tr key={row.session_id} className="border-b border-slate-50 align-top">
                      <td className="py-2 pr-4 text-slate-500 whitespace-nowrap">
                        {formatWhen(row.session_start)}
                      </td>
                      <td className="py-2 pr-4 font-mono text-xs text-slate-600">
                        {shortSession(row.session_id)}
                      </td>
                      <td className="py-2 pr-4">
                        <p className="text-slate-800">{row.entry_page}</p>
                        <p className="text-xs text-slate-400">→ {row.exit_page}</p>
                      </td>
                      <td className="py-2 pr-4 text-slate-700">{row.pages_visited}</td>
                      <td className="py-2 pr-4 text-slate-600">{formatDuration(row.total_time_seconds)}</td>
                      <td className="py-2 capitalize text-slate-600">{row.device_type || '—'}</td>
                    </tr>
                  ))}
                  {(data?.visitors || []).length === 0 && (
                    <tr>
                      <td colSpan={6} className="py-8 text-center text-slate-400">
                        No visitor sessions recorded yet.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm overflow-hidden">
            <h3 className="font-semibold text-slate-900 mb-4">Recent page views</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-slate-500 border-b border-slate-100">
                    <th className="pb-2 pr-4 font-medium">When</th>
                    <th className="pb-2 pr-4 font-medium">Page</th>
                    <th className="pb-2 pr-4 font-medium">Source</th>
                    <th className="pb-2 pr-4 font-medium">Session</th>
                    <th className="pb-2 pr-4 font-medium">On page</th>
                    <th className="pb-2 font-medium">Device</th>
                  </tr>
                </thead>
                <tbody>
                  {(data?.recentViews || []).map((row) => (
                    <tr key={row.id} className="border-b border-slate-50 align-top">
                      <td className="py-2 pr-4 text-slate-500 whitespace-nowrap">
                        {formatWhen(row.visit_timestamp)}
                      </td>
                      <td className="py-2 pr-4">
                        <p className="font-medium text-slate-800">{row.page_path}</p>
                        {row.page_title && (
                          <p className="text-xs text-slate-400 truncate max-w-[200px]">{row.page_title}</p>
                        )}
                      </td>
                      <td className="py-2 pr-4 text-slate-600">{row.referrer_source}</td>
                      <td className="py-2 pr-4 font-mono text-xs text-slate-500">
                        {shortSession(row.session_id)}
                      </td>
                      <td className="py-2 pr-4 text-slate-600">
                        {row.time_on_page_seconds ? `${row.time_on_page_seconds}s` : '—'}
                      </td>
                      <td className="py-2 capitalize text-slate-600">{row.device_type || '—'}</td>
                    </tr>
                  ))}
                  {(data?.recentViews || []).length === 0 && (
                    <tr>
                      <td colSpan={6} className="py-8 text-center text-slate-400">
                        No recent page views. Tracking is active on all public pages via analytics.js.
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
