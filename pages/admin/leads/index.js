import React, { useEffect, useState, useMemo, useCallback } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import AdminLayout from '../../../components/admin/AdminLayout';
import {
  FiSearch, FiFilter, FiRefreshCw, FiTrendingUp,
  FiUsers, FiCheckCircle, FiClock, FiXCircle,
  FiMail, FiPhoneCall,
} from 'react-icons/fi';

// ─── Stage config ────────────────────────────────────────────────────────────
const STAGES = [
  {
    id: 'new', label: 'New', emoji: '🆕',
    headerBg: 'bg-slate-100', headerText: 'text-slate-700', headerBorder: 'border-slate-200',
    cardBorder: 'border-l-slate-400', dotColor: 'bg-slate-400',
    emptyMsg: 'No new leads yet',
  },
  {
    id: 'contacted', label: 'Contacted', emoji: '📞',
    headerBg: 'bg-blue-50', headerText: 'text-blue-700', headerBorder: 'border-blue-200',
    cardBorder: 'border-l-blue-500', dotColor: 'bg-blue-500',
    emptyMsg: 'No leads contacted yet',
  },
  {
    id: 'qualified', label: 'Qualified', emoji: '✅',
    headerBg: 'bg-amber-50', headerText: 'text-amber-700', headerBorder: 'border-amber-200',
    cardBorder: 'border-l-amber-500', dotColor: 'bg-amber-500',
    emptyMsg: 'No qualified leads',
  },
  {
    id: 'quote_sent', label: 'Quote Sent', emoji: '📄',
    headerBg: 'bg-purple-50', headerText: 'text-purple-700', headerBorder: 'border-purple-200',
    cardBorder: 'border-l-purple-500', dotColor: 'bg-purple-500',
    emptyMsg: 'No quotes sent yet',
  },
  {
    id: 'won', label: 'Won', emoji: '🏆',
    headerBg: 'bg-emerald-50', headerText: 'text-emerald-700', headerBorder: 'border-emerald-200',
    cardBorder: 'border-l-emerald-500', dotColor: 'bg-emerald-500',
    emptyMsg: 'No won deals yet',
  },
  {
    id: 'lost', label: 'Lost', emoji: '❌',
    headerBg: 'bg-red-50', headerText: 'text-red-600', headerBorder: 'border-red-200',
    cardBorder: 'border-l-red-400', dotColor: 'bg-red-400',
    emptyMsg: 'No lost deals',
  },
];

// ─── Avatar gradient palette ──────────────────────────────────────────────────
const GRADIENTS = [
  'from-blue-500 to-indigo-600',
  'from-violet-500 to-purple-700',
  'from-emerald-500 to-teal-700',
  'from-amber-500 to-orange-600',
  'from-pink-500 to-rose-600',
  'from-cyan-500 to-blue-600',
  'from-red-500 to-rose-700',
  'from-indigo-500 to-blue-700',
];

function getGradient(name) {
  const code = (name || 'A').charCodeAt(0);
  return GRADIENTS[code % GRADIENTS.length];
}

function getAgeDays(dateStr) {
  return Math.floor((Date.now() - new Date(dateStr)) / 86400000);
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function AgeBadge({ dateStr }) {
  const age = getAgeDays(dateStr);
  if (age === 0) return (
    <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold border border-emerald-100">
      Today
    </span>
  );
  if (age <= 2) return (
    <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 font-semibold border border-emerald-100">
      {age}d
    </span>
  );
  if (age <= 7) return (
    <span className="text-xs px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 font-semibold border border-amber-100">
      {age}d
    </span>
  );
  return (
    <span className="text-xs px-2 py-0.5 rounded-full bg-red-50 text-red-600 font-semibold border border-red-100">
      {age}d
    </span>
  );
}

function LeadCard({ lead, stage }) {
  const gradient = getGradient(lead.name);
  const initial = (lead.name || '?').charAt(0).toUpperCase();

  return (
    <Link
      href={`/admin/leads/${lead.id}`}
      className={`group block bg-white border border-slate-200 border-l-4 ${stage.cardBorder} rounded-xl p-3.5 hover:shadow-md hover:-translate-y-px hover:border-slate-300 transition-all duration-150`}
    >
      <div className="flex items-start gap-2.5 mb-3">
        {/* Avatar */}
        <div className={`w-9 h-9 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center shrink-0 shadow-sm`}>
          <span className="text-white font-extrabold text-sm">{initial}</span>
        </div>

        <div className="min-w-0 flex-1 pt-0.5">
          <p className="font-bold text-slate-900 text-sm truncate group-hover:text-blue-600 transition-colors leading-tight">
            {lead.name}
          </p>
          <p className="text-xs text-slate-500 truncate mt-0.5">{lead.email}</p>
          {lead.company && (
            <p className="text-xs text-slate-400 truncate mt-0.5 italic">{lead.company}</p>
          )}
        </div>
      </div>

      {/* Footer row */}
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full truncate max-w-[110px] border border-slate-200">
          {lead.source}
        </span>
        <AgeBadge dateStr={lead.created_at} />
      </div>

      {/* Quick-contact overlay on hover */}
      <div className="flex items-center gap-2 mt-2.5 pt-2.5 border-t border-slate-100 opacity-0 group-hover:opacity-100 transition-opacity">
        <a
          href={`mailto:${lead.email}`}
          onClick={(e) => e.stopPropagation()}
          className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 font-medium"
        >
          <FiMail size={11} /> Email
        </a>
        {lead.phone && (
          <>
            <span className="text-slate-300">·</span>
            <a
              href={`tel:${lead.phone}`}
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1 text-xs text-slate-600 hover:text-slate-800 font-medium"
            >
              <FiPhoneCall size={11} /> Call
            </a>
          </>
        )}
      </div>
    </Link>
  );
}

function StageColumn({ stage, leads, total }) {
  const pct = total > 0 ? Math.round((leads.length / total) * 100) : 0;

  return (
    <div className="w-72 shrink-0 flex flex-col rounded-2xl overflow-hidden border border-slate-200 bg-white/60 backdrop-blur-sm shadow-sm max-h-[calc(100vh-300px)]">
      {/* Column header */}
      <div className={`${stage.headerBg} border-b ${stage.headerBorder} px-4 py-3 shrink-0`}>
        <div className="flex items-center justify-between mb-1.5">
          <div className="flex items-center gap-2">
            <div className={`w-2.5 h-2.5 rounded-full ${stage.dotColor} shadow-sm`} />
            <span className={`font-bold text-sm ${stage.headerText}`}>{stage.label}</span>
          </div>
          <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${stage.headerBg} ${stage.headerText} border ${stage.headerBorder}`}>
            {leads.length}
          </span>
        </div>
        {/* Mini progress bar */}
        <div className="h-1 bg-white/60 rounded-full overflow-hidden">
          <div
            className={`h-full ${stage.dotColor} rounded-full transition-all duration-500`}
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      {/* Cards list */}
      <div className="flex-1 overflow-y-auto p-2 space-y-2 scrollbar-thin">
        {leads.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-10 text-center px-4">
            <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center mb-2.5 text-base">
              {stage.emoji}
            </div>
            <p className="text-xs text-slate-400 font-medium">{stage.emptyMsg}</p>
          </div>
        ) : (
          leads.map((lead) => (
            <LeadCard key={lead.id} lead={lead} stage={stage} />
          ))
        )}
      </div>
    </div>
  );
}

function StatCard({ icon: Icon, label, value, sub, bgColor, iconColor }) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-4 flex items-center gap-3 shadow-sm">
      <div className={`w-11 h-11 ${bgColor} rounded-xl flex items-center justify-center shrink-0`}>
        <Icon size={18} className={iconColor} />
      </div>
      <div className="min-w-0">
        <p className="text-2xl font-extrabold text-slate-900 leading-none tracking-tight">{value}</p>
        <p className="text-xs text-slate-500 font-medium mt-0.5">{label}</p>
        {sub && <p className="text-xs text-slate-400">{sub}</p>}
      </div>
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function AdminLeads() {
  const router = useRouter();
  const [allowed, setAllowed] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [leads, setLeads] = useState([]);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [filterSource, setFilterSource] = useState('all');

  // Auth
  useEffect(() => {
    fetch('/api/auth/me', { credentials: 'include' })
      .then((r) => { if (!r.ok) throw new Error(); return r.json(); })
      .then((d) => { if (!['admin', 'staff'].includes(d.user?.role)) throw new Error(); setAllowed(true); })
      .catch(() => router.replace('/login'))
      .finally(() => setAuthLoading(false));
  }, [router]);

  // Fetch leads
  const fetchLeads = useCallback(async () => {
    setRefreshing(true);
    setError(null);
    try {
      const r = await fetch('/api/leads', { credentials: 'include' });
      if (!r.ok) throw new Error('Failed to load leads');
      const d = await r.json();
      setLeads(d.leads || []);
    } catch (e) {
      setError(e.message);
    } finally {
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    if (allowed) fetchLeads();
  }, [allowed, fetchLeads]);

  // Sources for filter dropdown
  const sources = useMemo(() => {
    const set = new Set(leads.map((l) => l.source).filter(Boolean));
    return ['all', ...Array.from(set).sort()];
  }, [leads]);

  // Filter + search
  const filtered = useMemo(() => {
    let list = leads;
    if (filterSource !== 'all') list = list.filter((l) => l.source === filterSource);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter((l) =>
        [l.name, l.email, l.company, l.source, l.subject, l.message]
          .some((v) => v?.toLowerCase().includes(q))
      );
    }
    return list;
  }, [leads, filterSource, search]);

  // Bucket by stage
  const byStage = useMemo(() => {
    const map = {};
    STAGES.forEach((s) => { map[s.id] = []; });
    filtered.forEach((l) => { if (map[l.status]) map[l.status].push(l); });
    STAGES.forEach((s) => {
      map[s.id].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    });
    return map;
  }, [filtered]);

  // Pipeline stats
  const stats = useMemo(() => {
    const total = leads.length;
    const won = leads.filter((l) => l.status === 'won').length;
    const active = leads.filter((l) => !['won', 'lost'].includes(l.status)).length;
    const today = leads.filter((l) => getAgeDays(l.created_at) === 0).length;
    const winRate = total > 0 ? Math.round((won / total) * 100) : 0;
    return { total, won, active, today, winRate };
  }, [leads]);

  if (authLoading) {
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

      {/* ── HEADER ── */}
      <div className="mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Lead Pipeline</h2>
            <p className="text-slate-500 text-sm mt-0.5">
              Website enquiries tracked through your sales pipeline.
            </p>
          </div>
          <button
            onClick={fetchLeads}
            disabled={refreshing}
            className="flex items-center gap-2 text-sm font-semibold text-slate-600 bg-white border border-slate-200 px-4 py-2.5 rounded-xl hover:border-blue-300 hover:text-blue-600 shadow-sm transition-all disabled:opacity-50 shrink-0"
          >
            <FiRefreshCw size={14} className={refreshing ? 'animate-spin' : ''} />
            {refreshing ? 'Refreshing…' : 'Refresh'}
          </button>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
          <StatCard
            icon={FiUsers} label="Total Leads" value={stats.total}
            bgColor="bg-slate-100" iconColor="text-slate-600"
          />
          <StatCard
            icon={FiClock} label="Active" value={stats.active}
            bgColor="bg-blue-100" iconColor="text-blue-600"
          />
          <StatCard
            icon={FiCheckCircle} label="Won" value={stats.won}
            sub={`${stats.winRate}% win rate`}
            bgColor="bg-emerald-100" iconColor="text-emerald-600"
          />
          <StatCard
            icon={FiTrendingUp} label="New Today" value={stats.today}
            bgColor="bg-amber-100" iconColor="text-amber-600"
          />
        </div>

        {/* Search + Source filter */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <FiSearch size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Search by name, email, company, message…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-10 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 placeholder-slate-400 shadow-sm transition-all"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
              >
                <FiXCircle size={15} />
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <FiFilter size={14} className="text-slate-400" />
            <select
              value={filterSource}
              onChange={(e) => setFilterSource(e.target.value)}
              className="px-3 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-700 focus:outline-none focus:border-blue-400 shadow-sm transition-all"
            >
              {sources.map((s) => (
                <option key={s} value={s}>{s === 'all' ? 'All sources' : s}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {error && (
        <div className="mb-5 p-4 bg-red-50 border border-red-200 rounded-2xl text-red-800 text-sm shadow-sm">
          {error}
        </div>
      )}

      {/* ── KANBAN BOARD ── */}
      <div className="overflow-x-auto pb-6 -mx-1 px-1">
        <div className="flex gap-4 min-w-max pb-2">
          {STAGES.map((stage) => (
            <StageColumn
              key={stage.id}
              stage={stage}
              leads={byStage[stage.id]}
              total={filtered.length}
            />
          ))}
        </div>
      </div>

      {/* Global empty state */}
      {filtered.length === 0 && (
        <div className="text-center py-16 text-slate-500 bg-white rounded-2xl border border-slate-200 mt-2">
          {leads.length === 0 ? (
            <div>
              <div className="text-4xl mb-3">📭</div>
              <p className="font-semibold text-slate-700 mb-1">No leads yet</p>
              <p className="text-sm text-slate-400">Contact and quote form submissions will appear here.</p>
            </div>
          ) : (
            <div>
              <div className="text-4xl mb-3">🔍</div>
              <p className="font-semibold text-slate-700 mb-1">No leads match your search</p>
              <button
                onClick={() => { setSearch(''); setFilterSource('all'); }}
                className="text-sm text-blue-600 hover:underline mt-1"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      )}
    </AdminLayout>
  );
}
