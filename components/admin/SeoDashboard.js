import React, { useState, useEffect, useCallback } from 'react';
import {
  FiTrendingUp,
  FiSearch,
  FiAlertTriangle,
  FiTarget,
  FiUpload,
  FiMail,
  FiZap,
  FiRefreshCw,
  FiExternalLink,
} from 'react-icons/fi';

const PRIORITY_STYLES = {
  critical: 'bg-red-100 text-red-800 border-red-200',
  high: 'bg-orange-100 text-orange-800 border-orange-200',
  medium: 'bg-amber-100 text-amber-800 border-amber-200',
  low: 'bg-slate-100 text-slate-600 border-slate-200',
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
    const snippet = text.replace(/\s+/g, ' ').trim().slice(0, 160);
    throw new Error(
      res.ok
        ? 'Server returned an invalid response'
        : snippet || `Request failed (${res.status})`
    );
  }
}

function apiErrorMessage(json, fallback = 'Request failed') {
  return [json?.error, json?.details].filter(Boolean).join(' — ') || fallback;
}

function StatCard({ label, value, sub, color = 'blue' }) {
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
        <FiTrendingUp size={18} />
      </div>
    </div>
  );
}

function MiniChart({ data }) {
  if (!data?.length) return null;
  const max = Math.max(...data.map((d) => d.impressions));
  return (
    <div className="flex items-end gap-1 h-24">
      {data.slice(-30).map((d) => (
        <div
          key={d.date}
          className="flex-1 bg-blue-200 hover:bg-blue-400 rounded-t transition-colors"
          style={{ height: `${Math.max((d.impressions / max) * 100, 4)}%` }}
          title={`${d.date}: ${d.impressions} impressions`}
        />
      ))}
    </div>
  );
}

export default function SeoDashboard() {
  const [data, setData] = useState(null);
  const [period, setPeriod] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [actionLoading, setActionLoading] = useState(null);
  const [aiPlan, setAiPlan] = useState(null);

  const fetchAnalysis = useCallback(async (nextPeriod = period) => {
    setLoading(true);
    setError(null);
    try {
      const qs = nextPeriod ? `?period=${encodeURIComponent(nextPeriod)}` : '';
      const res = await fetch(`/api/admin/seo/analyze${qs}`, { credentials: 'include' });
      const json = await parseApiResponse(res);
      if (!res.ok && !json.periods) throw new Error(apiErrorMessage(json, 'Failed to load'));
      setData(json);
      if (!nextPeriod && json.period) setPeriod(json.period);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [period]);

  useEffect(() => {
    fetchAnalysis();
  }, [fetchAnalysis]);

  const handleUpload = async (file) => {
    const dataUrl = await readFileAsDataUrl(file);
    const zip = String(dataUrl).split(',')[1];
    if (!zip) throw new Error('Could not read that zip');

    setActionLoading('upload');
    try {
      const res = await fetch('/api/admin/seo/upload', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ zip }),
      });
      const json = await parseApiResponse(res);
      if (!res.ok) throw new Error(apiErrorMessage(json, 'Upload failed'));
      setPeriod(json.period);
      await fetchAnalysis(json.period);
      return json;
    } finally {
      setActionLoading(null);
    }
  };

  const handleEmailReport = async () => {
    setActionLoading('email');
    try {
      const res = await fetch('/api/admin/seo/report', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ period: data?.period }),
      });
      const json = await parseApiResponse(res);
      if (!res.ok) throw new Error(apiErrorMessage(json, 'Email failed'));
      alert(`SEO report sent to ${json.recipient}`);
    } catch (err) {
      alert(`Email failed: ${err.message}`);
    } finally {
      setActionLoading(null);
    }
  };

  const handleAiPlan = async () => {
    setActionLoading('ai');
    setAiPlan(null);
    try {
      const res = await fetch('/api/admin/seo/ai-recommendations', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ period: data?.period }),
      });
      const json = await parseApiResponse(res);
      if (!res.ok) throw new Error(apiErrorMessage(json, 'AI analysis failed'));
      setAiPlan(json.plan);
    } catch (err) {
      const message = /FUNCTION_INVOCATION_TIMEOUT|timeout|504/i.test(err.message)
        ? 'AI analysis timed out. Refresh and try again — the request is now shorter.'
        : err.message;
      alert(`AI analysis failed: ${message}`);
    } finally {
      setActionLoading(null);
    }
  };

  if (loading && !data) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" />
      </div>
    );
  }

  if (error && !data) {
    return (
      <div className="space-y-6">
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
          <div className="flex items-start gap-3">
            <FiAlertTriangle className="text-amber-500 shrink-0 mt-1" size={20} />
            <div>
              <h3 className="font-semibold text-amber-900">No Search Console Data</h3>
              <p className="text-amber-700 text-sm mt-1">{error}</p>
            </div>
          </div>
        </div>
        <ZipUpload onUpload={handleUpload} loading={actionLoading === 'upload'} />
      </div>
    );
  }

  const analysis = data?.analysis;
  const recommendations = data?.recommendations || [];
  const recSummary = data?.recSummary;
  const periods = data?.periods || [];
  const activePeriod = data?.period || period;

  return (
    <div className="space-y-6">
      <PeriodSwitcher
        periods={periods}
        activePeriod={activePeriod}
        onSelect={setPeriod}
      />
      <ZipUpload onUpload={handleUpload} loading={actionLoading === 'upload'} />

      {error && (
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-sm text-amber-900">
          {error}
        </div>
      )}

      {data?.available === false && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 text-sm text-slate-600">
          No {periods.find((item) => item.id === activePeriod)?.label || 'export'} uploaded yet.
          Export that date range from Search Console and upload the zip above.
        </div>
      )}

      {analysis && (
      <>
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-slate-500 text-sm">
            {analysis.meta.periodLabel || analysis.meta.dateRange}
            {formatChartRange(analysis.meta) && ` · ${formatChartRange(analysis.meta)}`}
            {' · '}{analysis.meta.searchType} search
            {analysis.meta.importedAt && (
              <> · Updated {new Date(analysis.meta.importedAt).toLocaleDateString('en-GB')}</>
            )}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={fetchAnalysis}
            disabled={!!actionLoading}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-medium hover:bg-slate-50"
          >
            <FiRefreshCw size={14} /> Refresh
          </button>
          <button
            onClick={handleEmailReport}
            disabled={!!actionLoading}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-medium hover:bg-blue-700 disabled:opacity-50"
          >
            <FiMail size={14} /> Email Report
          </button>
          <button
            onClick={handleAiPlan}
            disabled={!!actionLoading}
            className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-xl text-sm font-medium hover:bg-purple-700 disabled:opacity-50"
          >
            <FiZap size={14} /> {actionLoading === 'ai' ? 'Generating…' : 'AI Action Plan'}
          </button>
        </div>
      </div>

      {/* Summary stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Total Impressions" value={analysis.summary.totalImpressions.toLocaleString()} color="blue" />
        <StatCard label="Total Clicks" value={analysis.summary.totalClicks} color="green" />
        <StatCard label="Avg CTR" value={`${analysis.summary.avgCtr}%`} color="amber" />
        <StatCard label="Avg Position" value={analysis.summary.avgPosition} color="purple" />
      </div>

      {/* Impression trend */}
      {analysis.chartTrend?.length > 0 && (
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <h3 className="font-semibold text-slate-900 mb-3">Impression Trend (last 30 days)</h3>
          <MiniChart data={analysis.chartTrend} />
        </div>
      )}

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Top searched terms */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-5 py-4 border-b border-slate-100 flex items-center gap-2">
            <FiSearch className="text-blue-600" />
            <h3 className="font-semibold text-slate-900">Heavily Searched Terms</h3>
            <span className="text-xs text-slate-400 ml-auto">by impressions</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 text-slate-500 text-xs uppercase">
                  <th className="text-left px-4 py-2">Query</th>
                  <th className="text-right px-3 py-2">Imp</th>
                  <th className="text-right px-3 py-2">Clicks</th>
                  <th className="text-right px-3 py-2">Pos</th>
                </tr>
              </thead>
              <tbody>
                {analysis.topQueriesByImpressions.slice(0, 15).map((q, i) => (
                  <tr key={q.name} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                    <td className="px-4 py-2.5 font-medium text-slate-800 max-w-[200px] truncate">{q.name}</td>
                    <td className="px-3 py-2.5 text-right font-semibold text-blue-600">{q.impressions}</td>
                    <td className="px-3 py-2.5 text-right">{q.clicks}</td>
                    <td className="px-3 py-2.5 text-right text-slate-500">{q.position.toFixed(1)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* High demand zero clicks */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-5 py-4 border-b border-slate-100 flex items-center gap-2">
            <FiAlertTriangle className="text-amber-500" />
            <h3 className="font-semibold text-slate-900">High Demand, Zero Clicks</h3>
          </div>
          <div className="p-4 space-y-2">
            {analysis.highDemandZeroClicks.slice(0, 10).map((q) => (
              <div key={q.name} className="flex items-center justify-between py-2 border-b border-slate-50 last:border-0">
                <span className="text-sm font-medium text-slate-800 truncate flex-1 mr-3">&ldquo;{q.name}&rdquo;</span>
                <div className="text-right shrink-0">
                  <span className="text-sm font-semibold text-amber-600">{q.impressions} imp</span>
                  <span className="text-xs text-slate-400 ml-2">pos {q.position.toFixed(1)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-100 flex items-center gap-2">
          <FiTarget className="text-green-600" />
          <h3 className="font-semibold text-slate-900">SEO Action Items</h3>
          <div className="ml-auto flex gap-2 text-xs">
            <span className="px-2 py-1 bg-red-100 text-red-700 rounded-full">{recSummary?.critical || 0} critical</span>
            <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full">{recSummary?.high || 0} high</span>
            <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded-full">{recSummary?.contentGaps || 0} gaps</span>
          </div>
        </div>
        <div className="divide-y divide-slate-100">
          {recommendations.slice(0, 12).map((rec) => (
            <div key={rec.query} className="px-5 py-4 hover:bg-slate-50/50">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${PRIORITY_STYLES[rec.priority]}`}>
                      {rec.priority}
                    </span>
                    <span className="font-medium text-slate-900">&ldquo;{rec.query}&rdquo;</span>
                    <span className="text-xs text-slate-400">
                      {rec.impressions} imp · pos {rec.position.toFixed(1)}
                    </span>
                  </div>
                  {rec.targetPage && (
                    <a
                      href={rec.targetUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-blue-600 hover:underline mt-1"
                    >
                      {rec.targetPage} <FiExternalLink size={10} />
                    </a>
                  )}
                  <ul className="mt-2 space-y-1">
                    {rec.actions.slice(0, 2).map((action) => (
                      <li key={action} className="text-sm text-slate-600 flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        {action}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top pages + devices */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <h3 className="px-5 py-4 border-b border-slate-100 font-semibold text-slate-900">Top Pages by Impressions</h3>
          <div className="p-4 space-y-2">
            {analysis.topPagesByImpressions.slice(0, 8).map((p) => (
              <div key={p.name} className="flex items-center justify-between text-sm py-1.5">
                <span className="truncate flex-1 mr-2 text-slate-700">{p.path}</span>
                <span className="font-semibold text-blue-600 shrink-0">{p.impressions}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <h3 className="px-5 py-4 border-b border-slate-100 font-semibold text-slate-900">Device & Country Split</h3>
          <div className="p-4 space-y-4">
            <div>
              <p className="text-xs text-slate-500 uppercase mb-2">Devices</p>
              {analysis.devices.map((d) => (
                <div key={d.name} className="flex justify-between text-sm py-1">
                  <span>{d.name}</span>
                  <span className="font-medium">{d.impressions.toLocaleString()} imp ({d.ctr}% CTR)</span>
                </div>
              ))}
            </div>
            <div>
              <p className="text-xs text-slate-500 uppercase mb-2">Top Countries</p>
              {analysis.countries.slice(0, 5).map((c) => (
                <div key={c.name} className="flex justify-between text-sm py-1">
                  <span>{c.name}</span>
                  <span className="font-medium">{c.impressions.toLocaleString()} imp</span>
                </div>
              ))}
            </div>
            {analysis.searchAppearance?.length > 0 && (
              <div>
                <p className="text-xs text-slate-500 uppercase mb-2">Search appearance</p>
                {analysis.searchAppearance.map((row) => (
                  <div key={row.name} className="flex justify-between text-sm py-1">
                    <span>{row.name}</span>
                    <span className="font-medium">{row.impressions.toLocaleString()} imp ({row.ctr}% CTR)</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* AI Plan */}
      {aiPlan && (
        <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6">
          <h3 className="font-semibold text-purple-900 flex items-center gap-2 mb-4">
            <FiZap /> AI SEO Action Plan
          </h3>
          <div className="prose prose-sm max-w-none text-slate-700 whitespace-pre-wrap">{aiPlan}</div>
        </div>
      )}
      </>
      )}
    </div>
  );
}

function formatChartRange(meta) {
  if (!meta?.startDate) return '';
  const format = (value) => new Date(`${value}T00:00:00`).toLocaleDateString('en-IE', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
  if (!meta.endDate || meta.endDate === meta.startDate) return format(meta.startDate);
  return `${format(meta.startDate)} – ${format(meta.endDate)}`;
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error || new Error('Could not read that file'));
    reader.readAsDataURL(file);
  });
}

function PeriodSwitcher({ periods, activePeriod, onSelect }) {
  const tabs = [
    { id: '24h', label: '24 hours' },
    { id: '7d', label: '7 days' },
    { id: '28d', label: '28 days' },
    { id: '3m', label: '3 months' },
  ].filter((tab) => tab.id !== '3m' || periods.some((period) => period.id === '3m' && period.available));

  return (
    <div className="flex flex-wrap gap-2">
      {tabs.map((tab) => {
        const stored = periods.find((period) => period.id === tab.id);
        const active = activePeriod === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onSelect(tab.id)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors ${
              active
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-slate-600 border-slate-200 hover:border-blue-300'
            }`}
          >
            {tab.label}
            {stored?.available ? '' : ' · not uploaded'}
          </button>
        );
      })}
    </div>
  );
}

function ZipUpload({ onUpload, loading }) {
  const [file, setFile] = useState(null);
  const [notice, setNotice] = useState(null);
  const [uploadError, setUploadError] = useState(null);

  const handleSubmit = async () => {
    if (!file) {
      setUploadError('Choose the Search Console zip first');
      return;
    }
    setUploadError(null);
    setNotice(null);
    try {
      const result = await onUpload(file);
      const range = result.startDate
        ? `${result.startDate} to ${result.endDate || result.startDate}`
        : result.dateRange;
      setNotice(`Imported ${result.label}${range ? ` (${range})` : ''}. Analysis updated.`);
      setFile(null);
    } catch (err) {
      setUploadError(err.message);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
      <div className="flex items-center gap-2 mb-2">
        <FiUpload className="text-slate-500" />
        <h3 className="font-semibold text-slate-900">Upload Search Console zip</h3>
      </div>
      <p className="text-sm text-slate-500 mb-4">
        In Google Search Console, open Performance and choose Export. Upload that zip.
        A 24-hour, 7-day, and 28-day export are kept separately, and the date filter inside the zip decides which one it is.
      </p>
      <div className="flex flex-wrap items-center gap-3">
        <input
          type="file"
          accept=".zip,application/zip"
          onChange={(event) => {
            setFile(event.target.files?.[0] || null);
            setNotice(null);
            setUploadError(null);
          }}
          className="text-sm"
        />
        <button
          type="button"
          onClick={handleSubmit}
          disabled={loading || !file}
          className="px-4 py-2 bg-slate-900 text-white rounded-xl text-sm font-medium hover:bg-slate-800 disabled:opacity-50"
        >
          {loading ? 'Uploading…' : 'Upload and analyze'}
        </button>
      </div>
      {file && <p className="text-xs text-slate-500 mt-2">{file.name}</p>}
      {notice && <p className="text-sm text-green-700 mt-3">{notice}</p>}
      {uploadError && <p className="text-sm text-red-600 mt-3">{uploadError}</p>}
    </div>
  );
}
