import React, { useEffect, useState, useMemo } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import AdminLayout from '../../../components/admin/AdminLayout';
import { FiUsers, FiRefreshCw } from 'react-icons/fi';

const STAGES = [
  { id: 'new', label: 'New', color: 'bg-slate-100 border-slate-200 text-slate-700' },
  { id: 'contacted', label: 'Contacted', color: 'bg-blue-50 border-blue-200 text-blue-700' },
  { id: 'qualified', label: 'Qualified', color: 'bg-amber-50 border-amber-200 text-amber-700' },
  { id: 'quote_sent', label: 'Quote Sent', color: 'bg-purple-50 border-purple-200 text-purple-700' },
  { id: 'won', label: 'Won', color: 'bg-emerald-50 border-emerald-200 text-emerald-700' },
  { id: 'lost', label: 'Lost', color: 'bg-red-50 border-red-200 text-red-600' },
];

function formatDate(d) {
  if (!d) return '—';
  const dt = new Date(d);
  const now = new Date();
  const sameDay = dt.toDateString() === now.toDateString();
  return sameDay ? dt.toLocaleTimeString('en-IE', { hour: '2-digit', minute: '2-digit' }) : dt.toLocaleDateString('en-IE', { day: 'numeric', month: 'short', year: 'numeric' });
}

export default function AdminLeads() {
  const router = useRouter();
  const [allowed, setAllowed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [leads, setLeads] = useState([]);
  const [error, setError] = useState(null);
  const [filterSource, setFilterSource] = useState('all');

  useEffect(() => {
    fetch('/api/auth/me', { credentials: 'include' })
      .then((res) => {
        if (!res.ok) throw new Error('Not authenticated');
        return res.json();
      })
      .then((data) => {
        if (data.user?.role !== 'admin' && data.user?.role !== 'staff') throw new Error('Forbidden');
        setAllowed(true);
      })
      .catch(() => router.replace('/login'))
      .finally(() => setLoading(false));
  }, [router]);

  useEffect(() => {
    if (!allowed) return;
    setLoading(true);
    setError(null);
    fetch('/api/leads', { credentials: 'include' })
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load leads');
        return res.json();
      })
      .then((data) => setLeads(data.leads || []))
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [allowed]);

  const sources = useMemo(() => {
    const set = new Set(leads.map((l) => l.source).filter(Boolean));
    return ['all', ...Array.from(set).sort()];
  }, [leads]);

  const filtered = useMemo(() => {
    if (filterSource === 'all') return leads;
    return leads.filter((l) => l.source === filterSource);
  }, [leads, filterSource]);

  const byStage = useMemo(() => {
    const map = {};
    STAGES.forEach((s) => { map[s.id] = []; });
    filtered.forEach((l) => {
      if (map[l.status]) map[l.status].push(l);
    });
    STAGES.forEach((s) => { map[s.id].sort((a, b) => new Date(b.created_at) - new Date(a.created_at)); });
    return map;
  }, [filtered]);

  if (loading && !leads.length) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" />
      </div>
    );
  }
  if (!allowed) return null;

  return (
    <AdminLayout title="Leads">
      <Head>
        <title>Leads — PrintNPack Admin</title>
        <meta name="robots" content="noindex" />
      </Head>

      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Lead pipeline</h2>
          <p className="text-slate-500 text-sm mt-0.5">
            Form submissions from the website (contact, quote, plain packaging, etc.) are saved here and emailed to Gmail.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-slate-500">Source:</span>
          <select
            value={filterSource}
            onChange={(e) => setFilterSource(e.target.value)}
            className="px-3 py-2 bg-white border border-slate-200 rounded-xl text-sm text-slate-700 focus:outline-none focus:border-blue-400"
          >
            {sources.map((s) => (
              <option key={s} value={s}>{s === 'all' ? 'All sources' : s}</option>
            ))}
          </select>
        </div>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl text-red-800 text-sm">{error}</div>
      )}

      <div className="overflow-x-auto pb-4">
        <div className="flex gap-4 min-w-max">
          {STAGES.map((stage) => (
            <div
              key={stage.id}
              className="w-72 shrink-0 bg-slate-100/50 rounded-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[70vh]"
            >
              <div className={`px-4 py-3 border-b border-slate-200 ${stage.color} flex items-center justify-between`}>
                <span className="font-semibold text-sm">{stage.label}</span>
                <span className="text-xs opacity-80">{byStage[stage.id].length}</span>
              </div>
              <div className="flex-1 overflow-y-auto p-2 space-y-2">
                {byStage[stage.id].map((lead) => (
                  <Link
                    key={lead.id}
                    href={`/admin/leads/${lead.id}`}
                    className="block bg-white border border-slate-200 rounded-xl p-3 hover:border-blue-300 hover:shadow-sm transition-all"
                  >
                    <p className="font-semibold text-slate-900 truncate text-sm">{lead.name}</p>
                    <p className="text-xs text-slate-500 truncate mt-0.5">{lead.email}</p>
                    {lead.company && <p className="text-xs text-slate-400 truncate mt-0.5">{lead.company}</p>}
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full truncate max-w-[120px]">{lead.source}</span>
                      <span className="text-xs text-slate-400">{formatDate(lead.created_at)}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-slate-500 bg-white rounded-2xl border border-slate-200">
          {leads.length === 0 ? 'No leads yet. Submissions from contact/quote forms will appear here.' : 'No leads match the selected source.'}
        </div>
      )}

    </AdminLayout>
  );
}
