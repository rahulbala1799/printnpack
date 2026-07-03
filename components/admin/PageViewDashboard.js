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
  FiTrendingUp,
  FiMapPin,
  FiPackage,
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

function SourceBars({ rows, total }) {
  if (!rows?.length) {
    return <p className="text-sm text-slate-400">No traffic source data yet.</p>;
  }

  const denom = total || Math.max(...rows.map((r) => r.views), 1);

  return (
    <div className="space-y-3">
      {rows.map((row) => {
        const pct = Math.round((row.views / denom) * 100);
        return (
          <div key={`${row.source}-${row.views}`}>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-slate-700">{row.source}</span>
              <span className="font-medium text-slate-900">
                {row.views}
                {row.visitors != null && (
                  <span className="text-slate-400 font-normal"> · {row.visitors} visitors</span>
                )}
              </span>
            </div>
            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 rounded-full" style={{ width: `${pct}%` }} />
            </div>
          </div>
        );
      })}
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
            Product views, landing pages, and traffic sources across the public site
          </p>
          <p className="text-slate-600 text-sm mt-1">
            See which products get attention, where visitors land first, and how they found you.
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
          <div className="grid sm:grid-cols-2 xl:grid-cols-5 gap-4">
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
              label="Landing sessions"
              value={data?.totals?.landing_sessions ?? 0}
              sub="First page in a visit"
              icon={FiMapPin}
              color="purple"
            />
            <StatCard
              label="Product families"
              value={data?.byProductFamily?.length ?? 0}
              sub="With tracked views"
              icon={FiPackage}
              color="amber"
            />
            <StatCard
              label="Avg. time on page"
              value={`${data?.totals?.avg_time_on_page ?? 0}s`}
              sub={`Bounce: ${data?.totals?.bounce_rate ?? 0}% · Today: ${periodMap.today?.total_views ?? 0} views`}
              icon={FiClock}
              color="amber"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-1 flex items-center gap-2">
                <FiPackage size={16} />
                Top product families
              </h3>
              <p className="text-xs text-slate-500 mb-4">Which product lines get the most attention</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-slate-500 border-b border-slate-100">
                      <th className="pb-2 pr-3 font-medium">Product family</th>
                      <th className="pb-2 pr-3 font-medium text-right">Views</th>
                      <th className="pb-2 pr-3 font-medium text-right">Visitors</th>
                      <th className="pb-2 font-medium text-right">Avg time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(data?.byProductFamily || []).map((row) => (
                      <tr key={row.product_family} className="border-b border-slate-50">
                        <td className="py-2 pr-3 font-medium text-slate-800">{row.product_family}</td>
                        <td className="py-2 pr-3 text-right font-semibold text-blue-700">{row.views}</td>
                        <td className="py-2 pr-3 text-right text-slate-600">{row.visitors}</td>
                        <td className="py-2 text-right text-slate-600">{row.avg_time_on_page || 0}s</td>
                      </tr>
                    ))}
                    {(data?.byProductFamily || []).length === 0 && (
                      <tr>
                        <td colSpan={4} className="py-6 text-center text-slate-400">
                          No product views yet — data appears as visitors browse product pages.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-1 flex items-center gap-2">
                <FiMapPin size={16} />
                Top landing pages
              </h3>
              <p className="text-xs text-slate-500 mb-4">Where customers first arrive on your site</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-slate-500 border-b border-slate-100">
                      <th className="pb-2 pr-3 font-medium">Landing page</th>
                      <th className="pb-2 pr-3 font-medium">Source</th>
                      <th className="pb-2 pr-3 font-medium text-right">Sessions</th>
                      <th className="pb-2 font-medium text-right">Pages/session</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(data?.byLandingPage || []).map((row, index) => (
                      <tr key={`${row.landing_page}-${row.traffic_source}-${index}`} className="border-b border-slate-50">
                        <td className="py-2 pr-3">
                          <p className="font-medium text-slate-800">{row.landing_page}</p>
                          {row.product_family && row.product_family !== 'Uncategorised' && (
                            <p className="text-xs text-slate-400">{row.product_family}</p>
                          )}
                        </td>
                        <td className="py-2 pr-3 text-slate-600">{row.traffic_source}</td>
                        <td className="py-2 pr-3 text-right font-semibold text-blue-700">{row.sessions}</td>
                        <td className="py-2 text-right text-slate-600">{row.avg_pages_per_session || '—'}</td>
                      </tr>
                    ))}
                    {(data?.byLandingPage || []).length === 0 && (
                      <tr>
                        <td colSpan={4} className="py-6 text-center text-slate-400">
                          No landing page data yet.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-1 flex items-center gap-2">
                <FiTrendingUp size={16} />
                Top product pages
              </h3>
              <p className="text-xs text-slate-500 mb-4">Individual product and hub pages ranked by views</p>
              <div className="overflow-x-auto max-h-80 overflow-y-auto">
                <table className="w-full text-sm">
                  <thead className="sticky top-0 bg-white">
                    <tr className="text-left text-slate-500 border-b border-slate-100">
                      <th className="pb-2 pr-3 font-medium">Page</th>
                      <th className="pb-2 pr-3 font-medium text-right">Views</th>
                      <th className="pb-2 font-medium text-right">Visitors</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(data?.byProductPage || []).map((row) => (
                      <tr key={row.page_path} className="border-b border-slate-50">
                        <td className="py-2 pr-3">
                          <p className="font-medium text-slate-800">{row.page_path}</p>
                          <p className="text-xs text-slate-400 truncate max-w-xs">
                            {row.product_name}
                            {row.product_family ? ` · ${row.product_family}` : ''}
                          </p>
                        </td>
                        <td className="py-2 pr-3 text-right font-semibold text-blue-700">{row.views}</td>
                        <td className="py-2 text-right text-slate-600">{row.visitors}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-4">Where traffic comes from</h3>
              <SourceBars rows={data?.byReferrer} total={data?.totals?.total_views} />
              <div className="mt-6 pt-4 border-t border-slate-100">
                <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-3">
                  Referring domains
                </p>
                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {(data?.byReferrerDomain || []).map((row, index) => (
                    <div
                      key={`${row.referrer_domain}-${index}`}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="text-slate-700 truncate pr-3">
                        {row.referrer_domain}
                        <span className="text-slate-400"> · {row.traffic_source}</span>
                      </span>
                      <span className="font-semibold shrink-0">{row.views}</span>
                    </div>
                  ))}
                  {(data?.byReferrerDomain || []).length === 0 && (
                    <p className="text-sm text-slate-400">No referrer domains yet.</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm overflow-hidden">
            <h3 className="font-semibold text-slate-900 mb-1">Product views by traffic source</h3>
            <p className="text-xs text-slate-500 mb-4">
              See which channels drive interest in each product line
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-slate-500 border-b border-slate-100">
                    <th className="pb-2 pr-4 font-medium">Product family</th>
                    <th className="pb-2 pr-4 font-medium">Source</th>
                    <th className="pb-2 pr-4 font-medium text-right">Views</th>
                    <th className="pb-2 font-medium text-right">Visitors</th>
                  </tr>
                </thead>
                <tbody>
                  {(data?.byProductSource || []).map((row, index) => (
                    <tr key={`${row.product_family}-${row.traffic_source}-${index}`} className="border-b border-slate-50">
                      <td className="py-2 pr-4 font-medium text-slate-800">{row.product_family}</td>
                      <td className="py-2 pr-4 text-slate-600">{row.traffic_source}</td>
                      <td className="py-2 pr-4 text-right font-semibold text-blue-700">{row.views}</td>
                      <td className="py-2 text-right text-slate-600">{row.visitors}</td>
                    </tr>
                  ))}
                  {(data?.byProductSource || []).length === 0 && (
                    <tr>
                      <td colSpan={4} className="py-6 text-center text-slate-400">
                        No product × source data yet.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-1">Views over time</h3>
              <p className="text-xs text-slate-500 mb-4">Daily page views (hover for visitor count)</p>
              <MiniBarChart data={data?.byDay} />
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
            <p className="text-xs text-slate-500 mb-4">
              Entry page, traffic source, and browsing path per session
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-slate-500 border-b border-slate-100">
                    <th className="pb-2 pr-4 font-medium">When</th>
                    <th className="pb-2 pr-4 font-medium">Landed on</th>
                    <th className="pb-2 pr-4 font-medium">Source</th>
                    <th className="pb-2 pr-4 font-medium">Exit page</th>
                    <th className="pb-2 pr-4 font-medium">Pages</th>
                    <th className="pb-2 font-medium">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {(data?.visitors || []).map((row) => (
                    <tr key={row.session_id} className="border-b border-slate-50 align-top">
                      <td className="py-2 pr-4 text-slate-500 whitespace-nowrap">
                        {formatWhen(row.session_start)}
                      </td>
                      <td className="py-2 pr-4">
                        <p className="text-slate-800">{row.entry_page}</p>
                        {row.entry_product_family && row.entry_product_family !== '—' && (
                          <p className="text-xs text-slate-400">{row.entry_product_family}</p>
                        )}
                      </td>
                      <td className="py-2 pr-4 text-slate-600">
                        <p>{row.entry_source}</p>
                        {row.entry_referrer_domain && row.entry_referrer_domain !== '—' && (
                          <p className="text-xs text-slate-400">{row.entry_referrer_domain}</p>
                        )}
                      </td>
                      <td className="py-2 pr-4 text-slate-600">{row.exit_page}</td>
                      <td className="py-2 pr-4 text-slate-700">{row.pages_visited}</td>
                      <td className="py-2 text-slate-600">{formatDuration(row.total_time_seconds)}</td>
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
                    <th className="pb-2 pr-4 font-medium">Page / Product</th>
                    <th className="pb-2 pr-4 font-medium">Source</th>
                    <th className="pb-2 pr-4 font-medium">Landing?</th>
                    <th className="pb-2 font-medium">On page</th>
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
                        <p className="text-xs text-slate-400">
                          {row.product_name || row.page_title}
                          {row.product_family && row.product_family !== '—' ? ` · ${row.product_family}` : ''}
                        </p>
                      </td>
                      <td className="py-2 pr-4 text-slate-600">
                        <p>{row.referrer_source}</p>
                        {row.referrer_domain && row.referrer_domain !== '—' && (
                          <p className="text-xs text-slate-400">{row.referrer_domain}</p>
                        )}
                      </td>
                      <td className="py-2 pr-4 text-slate-600">
                        {row.is_landing_page ? (
                          <span className="inline-flex px-2 py-0.5 rounded-full text-xs bg-purple-50 text-purple-700">
                            Landing
                          </span>
                        ) : '—'}
                      </td>
                      <td className="py-2 text-slate-600">
                        {row.time_on_page_seconds ? `${row.time_on_page_seconds}s` : '—'}
                      </td>
                    </tr>
                  ))}
                  {(data?.recentViews || []).length === 0 && (
                    <tr>
                      <td colSpan={5} className="py-8 text-center text-slate-400">
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
