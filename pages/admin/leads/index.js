import React, { useEffect, useState, useMemo, useCallback } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import AdminLayout from '../../../components/admin/AdminLayout';
import {
  FiSearch, FiFilter, FiRefreshCw, FiTrendingUp,
  FiUsers, FiCheckCircle, FiClock, FiXCircle,
  FiMail, FiPhoneCall, FiArrowRight, FiStar,
  FiAlertCircle, FiCalendar, FiBarChart2,
} from 'react-icons/fi';

// ─── Stage config ────────────────────────────────────────────────────────────
const STAGES = [
  {
    id: 'new', label: 'New', emoji: '🆕',
    headerBg: 'bg-slate-100', headerText: 'text-slate-700', headerBorder: 'border-slate-200',
    cardBorder: 'border-l-slate-400', dotColor: 'bg-slate-400', barColor: 'bg-slate-400',
    emptyMsg: 'No new leads yet',
    nextStage: 'contacted',
  },
  {
    id: 'contacted', label: 'Contacted', emoji: '📞',
    headerBg: 'bg-blue-50', headerText: 'text-blue-700', headerBorder: 'border-blue-200',
    cardBorder: 'border-l-blue-500', dotColor: 'bg-blue-500', barColor: 'bg-blue-500',
    emptyMsg: 'No leads contacted yet',
    nextStage: 'qualified',
  },
  {
    id: 'qualified', label: 'Qualified', emoji: '✅',
    headerBg: 'bg-amber-50', headerText: 'text-amber-700', headerBorder: 'border-amber-200',
    cardBorder: 'border-l-amber-500', dotColor: 'bg-amber-500', barColor: 'bg-amber-500',
    emptyMsg: 'No qualified leads',
    nextStage: 'quote_sent',
  },
  {
    id: 'quote_sent', label: 'Quote Sent', emoji: '📄',
    headerBg: 'bg-purple-50', headerText: 'text-purple-700', headerBorder: 'border-purple-200',
    cardBorder: 'border-l-purple-500', dotColor: 'bg-purple-500', barColor: 'bg-purple-500',
    emptyMsg: 'No quotes sent yet',
    nextStage: 'won',
  },
  {
    id: 'won', label: 'Won', emoji: '🏆',
    headerBg: 'bg-emerald-50', headerText: 'text-emerald-700', headerBorder: 'border-emerald-200',
    cardBorder: 'border-l-emerald-500', dotColor: 'bg-emerald-500', barColor: 'bg-emerald-500',
    emptyMsg: 'No won deals yet',
    nextStage: null,
  },
  {
    id: 'lost', label: 'Lost', emoji: '❌',
    headerBg: 'bg-red-50', headerText: 'text-red-600', headerBorder: 'border-red-200',
    cardBorder: 'border-l-red-400', dotColor: 'bg-red-400', barColor: 'bg-red-400',
    emptyMsg: 'No lost deals',
    nextStage: null,
  },
];

const DATE_FILTERS = [
  { id: 'all', label: 'All Time' },
  { id: 'month', label: 'This Month' },
  { id: 'week', label: 'This Week' },
  { id: 'today', label: 'Today' },
];

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
  return GRADIENTS[(name || 'A').charCodeAt(0) % GRADIENTS.length];
}

function getAgeDays(dateStr) {
  return Math.floor((Date.now() - new Date(dateStr)) / 86400000);
}

function isWithinDateFilter(dateStr, filter) {
  if (filter === 'all') return true;
  const d = new Date(dateStr);
  const now = new Date();
  if (filter === 'today') return d.toDateString() === now.toDateString();
  if (filter === 'week') {
    const start = new Date(now);
    start.setDate(now.getDate() - 6);
    start.setHours(0, 0, 0, 0);
    return d >= start;
  }
  if (filter === 'month') {
    return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
  }
  return true;
}

function getUrgency(lead) {
  const age = getAgeDays(lead.created_at);
  if (['won', 'lost'].includes(lead.status)) return null;
  if (lead.status === 'new' && age >= 3) return 'hot';
  if (lead.status === 'contacted' && age >= 5) return 'warm';
  if (lead.status === 'qualified' && age >= 7) return 'warm';
  if (lead.status === 'quote_sent' && age >= 5) return 'hot';
  return null;
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function AgeBadge({ dateStr }) {
  const age = getAgeDays(dateStr);
  if (age === 0) return (
    <span className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold border border-emerald-100">
      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
      Today
    </span>
  );
  if (age <= 2) return (
    <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 font-semibold border border-emerald-100">{age}d</span>
  );
  if (age <= 7) return (
    <span className="text-xs px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 font-semibold border border-amber-100">{age}d</span>
  );
  return (
    <span className="text-xs px-2 py-0.5 rounded-full bg-red-50 text-red-600 font-semibold border border-red-100">{age}d</span>
  );
}

function UrgencyPip({ lead }) {
  const u = getUrgency(lead);
  if (!u) return null;
  if (u === 'hot') return (
    <span className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-red-50 text-red-600 font-bold border border-red-200">
      <FiAlertCircle size={9} /> Overdue
    </span>
  );
  return (
    <span className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-orange-50 text-orange-600 font-bold border border-orange-200">
      <FiStar size={9} /> Follow up
    </span>
  );
}

function SkeletonCard() {
  return (
    <div className="bg-white border border-slate-200 border-l-4 border-l-slate-200 rounded-xl p-3.5 animate-pulse">
      <div className="flex items-start gap-2.5 mb-3">
        <div className="w-9 h-9 bg-slate-200 rounded-xl shrink-0" />
        <div className="flex-1 space-y-2 pt-0.5">
          <div className="h-3 bg-slate-200 rounded w-2/3" />
          <div className="h-2 bg-slate-100 rounded w-full" />
        </div>
      </div>
      <div className="h-6 bg-slate-50 rounded w-full mb-2.5" />
      <div className="flex justify-between">
        <div className="h-5 bg-slate-100 rounded-full w-20" />
        <div className="h-5 bg-slate-100 rounded-full w-12" />
      </div>
    </div>
  );
}

function LeadCard({ lead, stage, onAdvance, advancing }) {
  const gradient = getGradient(lead.name);
  const initial = (lead.name || '?').charAt(0).toUpperCase();
  const nextStage = STAGES.find(s => s.id === stage.nextStage);
  const preview = lead.message
    ? lead.message.replace(/\s+/g, ' ').trim().slice(0, 90) + (lead.message.length > 90 ? '…' : '')
    : null;

  return (
    <div className="relative group">
      <Link
        href={`/admin/leads/${lead.id}`}
        className={`block bg-white border border-slate-200 border-l-4 ${stage.cardBorder} rounded-xl p-3.5 hover:shadow-lg hover:-translate-y-0.5 hover:border-slate-300 transition-all duration-150`}
      >
        {/* Header row */}
        <div className="flex items-start gap-2.5 mb-2.5">
          <div className={`w-9 h-9 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center shrink-0 shadow-sm`}>
            <span className="text-white font-extrabold text-sm">{initial}</span>
          </div>
          <div className="min-w-0 flex-1 pt-0.5">
            <p className="font-bold text-slate-900 text-sm truncate group-hover:text-blue-600 transition-colors leading-tight">
              {lead.name}
            </p>
            <p className="text-xs text-slate-500 truncate mt-0.5">{lead.email}</p>
            {lead.company && (
              <p className="text-xs text-slate-400 truncate mt-0.5">{lead.company}</p>
            )}
          </div>
          {lead.phone && (
            <div className="shrink-0 w-5 h-5 bg-slate-100 rounded-full flex items-center justify-center" title="Has phone number">
              <FiPhoneCall size={9} className="text-slate-500" />
            </div>
          )}
        </div>

        {/* Message preview */}
        {preview && (
          <p className="text-xs text-slate-500 leading-relaxed mb-2.5 line-clamp-2 bg-slate-50 rounded-lg px-2.5 py-2 border border-slate-100">
            {preview}
          </p>
        )}

        {/* Urgency + source + age */}
        <div className="flex flex-wrap items-center gap-1.5 mb-0">
          <span className="text-xs text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full truncate max-w-[110px] border border-slate-200">
            {lead.source}
          </span>
          <UrgencyPip lead={lead} />
          <AgeBadge dateStr={lead.created_at} />
        </div>

        {/* Quick contact on hover */}
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
          {nextStage && (
            <>
              <span className="text-slate-300 ml-auto">·</span>
              <button
                onClick={(e) => { e.preventDefault(); onAdvance(lead.id, nextStage.id); }}
                disabled={advancing === lead.id}
                className="flex items-center gap-1 text-xs text-emerald-700 hover:text-emerald-900 font-semibold ml-auto"
              >
                {advancing === lead.id ? (
                  <div className="w-3 h-3 border border-emerald-400 border-t-transparent rounded-full animate-spin" />
                ) : (
                  <FiArrowRight size={11} />
                )}
                {nextStage.label}
              </button>
            </>
          )}
        </div>
      </Link>
    </div>
  );
}

function StageColumn({ stage, leads, total, loading, onAdvance, advancing }) {
  const pct = total > 0 ? Math.round((leads.length / total) * 100) : 0;

  return (
    <div className="w-72 shrink-0 flex flex-col rounded-2xl overflow-hidden border border-slate-200 bg-white/70 backdrop-blur-sm shadow-sm" style={{ maxHeight: 'calc(100vh - 310px)' }}>
      {/* Column header */}
      <div className={`${stage.headerBg} border-b ${stage.headerBorder} px-4 py-3 shrink-0`}>
        <div className="flex items-center justify-between mb-1.5">
          <div className="flex items-center gap-2">
            <div className={`w-2.5 h-2.5 rounded-full ${stage.dotColor} shadow-sm`} />
            <span className={`font-bold text-sm ${stage.headerText}`}>{stage.label}</span>
          </div>
          <span className={`text-xs font-extrabold px-2.5 py-0.5 rounded-full ${stage.headerBg} ${stage.headerText} border ${stage.headerBorder}`}>
            {loading ? '—' : leads.length}
          </span>
        </div>
        {/* Mini progress bar */}
        <div className="h-1 bg-white/60 rounded-full overflow-hidden">
          <div
            className={`h-full ${stage.dotColor} rounded-full transition-all duration-700`}
            style={{ width: loading ? '0%' : `${pct}%` }}
          />
        </div>
        {!loading && total > 0 && (
          <p className="text-xs mt-1.5 opacity-60 font-medium" style={{ color: 'currentColor' }}>
            {pct}% of pipeline
          </p>
        )}
      </div>

      {/* Cards list */}
      <div className="flex-1 overflow-y-auto p-2 space-y-2 scrollbar-thin">
        {loading ? (
          <>
            <SkeletonCard />
            <SkeletonCard />
          </>
        ) : leads.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-10 text-center px-4">
            <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center mb-2.5 text-base">
              {stage.emoji}
            </div>
            <p className="text-xs text-slate-400 font-medium">{stage.emptyMsg}</p>
          </div>
        ) : (
          leads.map((lead) => (
            <LeadCard
              key={lead.id}
              lead={lead}
              stage={stage}
              onAdvance={onAdvance}
              advancing={advancing}
            />
          ))
        )}
      </div>
    </div>
  );
}

function StatCard({ icon: Icon, label, value, sub, bgColor, iconColor, highlight }) {
  return (
    <div className={`bg-white border rounded-2xl p-4 flex items-center gap-3 shadow-sm transition-all hover:shadow-md ${highlight ? 'border-emerald-200 ring-1 ring-emerald-100' : 'border-slate-200'}`}>
      <div className={`w-12 h-12 ${bgColor} rounded-2xl flex items-center justify-center shrink-0`}>
        <Icon size={20} className={iconColor} />
      </div>
      <div className="min-w-0">
        <p className="text-2xl font-extrabold text-slate-900 leading-none tracking-tight">{value}</p>
        <p className="text-xs text-slate-500 font-medium mt-0.5">{label}</p>
        {sub && <p className="text-xs text-slate-400 mt-0.5">{sub}</p>}
      </div>
    </div>
  );
}

function PipelineFunnel({ byStage, loading }) {
  const funnelStages = ['new', 'contacted', 'qualified', 'quote_sent', 'won'];
  const counts = funnelStages.map(id => byStage[id]?.length || 0);
  const maxCount = Math.max(...counts, 1);

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <FiBarChart2 size={14} className="text-slate-400" />
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Pipeline Funnel</h3>
        </div>
        <span className="text-xs text-slate-400">Conversion by stage</span>
      </div>
      <div className="flex items-end gap-2 h-20">
        {funnelStages.map((sid, idx) => {
          const stage = STAGES.find(s => s.id === sid);
          const count = counts[idx];
          const prevCount = idx > 0 ? counts[idx - 1] : count;
          const barPct = maxCount > 0 ? Math.max((count / maxCount) * 100, count > 0 ? 8 : 3) : 3;
          const conv = prevCount > 0 ? Math.round((count / prevCount) * 100) : 0;

          return (
            <div key={sid} className="flex-1 flex flex-col items-center gap-1">
              {!loading && count > 0 && (
                <span className="text-xs font-bold text-slate-600">{count}</span>
              )}
              {loading ? (
                <div className="w-full bg-slate-100 rounded-t-lg animate-pulse" style={{ height: '60%' }} />
              ) : (
                <div
                  className={`w-full ${stage.barColor} rounded-t-lg transition-all duration-700 opacity-80 hover:opacity-100 cursor-default`}
                  style={{ height: `${barPct}%` }}
                  title={`${stage.label}: ${count} leads`}
                />
              )}
              <span className={`text-xs font-semibold truncate w-full text-center ${stage.headerText.replace('text-', 'text-').replace('700', '600')}`}>
                {stage.label.replace('Quote Sent', 'Quoted')}
              </span>
              {idx > 0 && !loading && prevCount > 0 && (
                <span className={`text-xs font-bold ${conv >= 50 ? 'text-emerald-600' : conv >= 25 ? 'text-amber-600' : 'text-red-500'}`}>
                  {conv}%
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function AdminLeads() {
  const router = useRouter();
  const [allowed, setAllowed] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [leads, setLeads] = useState([]);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [filterSource, setFilterSource] = useState('all');
  const [filterDate, setFilterDate] = useState('all');
  const [advancing, setAdvancing] = useState(null); // lead id being advanced

  // Auth
  useEffect(() => {
    fetch('/api/auth/me', { credentials: 'include' })
      .then((r) => { if (!r.ok) throw new Error(); return r.json(); })
      .then((d) => { if (!['admin', 'staff'].includes(d.user?.role)) throw new Error(); setAllowed(true); })
      .catch(() => router.replace('/login'))
      .finally(() => setAuthLoading(false));
  }, [router]);

  // Fetch leads
  const fetchLeads = useCallback(async (silent = false) => {
    if (!silent) setRefreshing(true);
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
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (allowed) fetchLeads();
  }, [allowed, fetchLeads]);

  // Quick advance stage
  const handleAdvance = useCallback(async (leadId, newStatus) => {
    setAdvancing(leadId);
    try {
      const res = await fetch(`/api/leads/${leadId}`, {
        method: 'PATCH',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      if (!res.ok) throw new Error('Update failed');
      const updated = await res.json();
      setLeads(prev => prev.map(l => l.id === leadId ? updated : l));
    } catch (e) {
      setError(e.message);
    } finally {
      setAdvancing(null);
    }
  }, []);

  // Sources for filter dropdown
  const sources = useMemo(() => {
    const set = new Set(leads.map((l) => l.source).filter(Boolean));
    return ['all', ...Array.from(set).sort()];
  }, [leads]);

  // Filter + search
  const filtered = useMemo(() => {
    let list = leads;
    if (filterDate !== 'all') list = list.filter(l => isWithinDateFilter(l.created_at, filterDate));
    if (filterSource !== 'all') list = list.filter((l) => l.source === filterSource);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter((l) =>
        [l.name, l.email, l.company, l.source, l.subject, l.message]
          .some((v) => v?.toLowerCase().includes(q))
      );
    }
    return list;
  }, [leads, filterSource, filterDate, search]);

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
    const lost = leads.filter((l) => l.status === 'lost').length;
    const active = leads.filter((l) => !['won', 'lost'].includes(l.status)).length;
    const today = leads.filter((l) => getAgeDays(l.created_at) === 0).length;
    const winRate = (won + lost) > 0 ? Math.round((won / (won + lost)) * 100) : 0;
    const urgentCount = leads.filter(l => getUrgency(l) === 'hot').length;
    return { total, won, active, today, winRate, urgentCount };
  }, [leads]);

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" />
      </div>
    );
  }
  if (!allowed) return null;

  return (
    <AdminLayout title="Leads">
      <Head>
        <title>Lead Pipeline — PrintNPack Admin</title>
        <meta name="robots" content="noindex" />
      </Head>

      {/* ── HEADER ── */}
      <div className="mb-6">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Lead Pipeline</h2>
            <p className="text-slate-500 text-sm mt-0.5">
              Website enquiries tracked through your sales pipeline.
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {stats.urgentCount > 0 && (
              <span className="flex items-center gap-1.5 text-xs font-bold px-3 py-2 bg-red-50 border border-red-200 text-red-700 rounded-xl">
                <FiAlertCircle size={12} /> {stats.urgentCount} overdue
              </span>
            )}
            <button
              onClick={() => fetchLeads()}
              disabled={refreshing}
              className="flex items-center gap-2 text-sm font-semibold text-slate-600 bg-white border border-slate-200 px-4 py-2.5 rounded-xl hover:border-blue-300 hover:text-blue-600 shadow-sm transition-all disabled:opacity-50 shrink-0"
            >
              <FiRefreshCw size={14} className={refreshing ? 'animate-spin' : ''} />
              {refreshing ? 'Refreshing…' : 'Refresh'}
            </button>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
          <StatCard
            icon={FiUsers} label="Total Leads" value={loading ? '—' : stats.total}
            bgColor="bg-slate-100" iconColor="text-slate-600"
          />
          <StatCard
            icon={FiClock} label="Active" value={loading ? '—' : stats.active}
            sub="in pipeline"
            bgColor="bg-blue-100" iconColor="text-blue-600"
          />
          <StatCard
            icon={FiCheckCircle} label="Won" value={loading ? '—' : stats.won}
            sub={loading ? '' : `${stats.winRate}% close rate`}
            bgColor="bg-emerald-100" iconColor="text-emerald-600"
            highlight={stats.won > 0}
          />
          <StatCard
            icon={FiTrendingUp} label="New Today" value={loading ? '—' : stats.today}
            bgColor="bg-amber-100" iconColor="text-amber-600"
          />
        </div>

        {/* Pipeline funnel */}
        <div className="mb-4">
          <PipelineFunnel byStage={byStage} loading={loading} />
        </div>

        {/* Date filter tabs */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl shrink-0">
            {DATE_FILTERS.map(f => (
              <button
                key={f.id}
                onClick={() => setFilterDate(f.id)}
                className={`flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg transition-all ${
                  filterDate === f.id
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                {f.id === 'today' && <FiCalendar size={11} />}
                {f.label}
              </button>
            ))}
          </div>

          {/* Search */}
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

          {/* Source filter */}
          <div className="flex items-center gap-2 shrink-0">
            <FiFilter size={14} className="text-slate-400" />
            <select
              value={filterSource}
              onChange={(e) => setFilterSource(e.target.value)}
              className="px-3 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-700 focus:outline-none focus:border-blue-400 shadow-sm transition-all max-w-[200px]"
            >
              {sources.map((s) => (
                <option key={s} value={s}>{s === 'all' ? 'All sources' : s}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Active filter summary */}
        {(filterDate !== 'all' || filterSource !== 'all' || search) && (
          <div className="flex items-center gap-2 mt-3">
            <span className="text-xs text-slate-500">
              Showing <span className="font-bold text-slate-700">{filtered.length}</span> of {leads.length} leads
            </span>
            <button
              onClick={() => { setSearch(''); setFilterSource('all'); setFilterDate('all'); }}
              className="text-xs text-blue-600 hover:underline font-medium"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>

      {error && (
        <div className="mb-5 p-4 bg-red-50 border border-red-200 rounded-2xl text-red-800 text-sm shadow-sm flex items-center gap-2">
          <FiAlertCircle size={14} /> {error}
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
              loading={loading}
              onAdvance={handleAdvance}
              advancing={advancing}
            />
          ))}
        </div>
      </div>

      {/* Global empty state */}
      {!loading && filtered.length === 0 && (
        <div className="text-center py-16 text-slate-500 bg-white rounded-2xl border border-slate-200 mt-2">
          {leads.length === 0 ? (
            <div>
              <div className="text-5xl mb-3">📭</div>
              <p className="font-semibold text-slate-700 mb-1">No leads yet</p>
              <p className="text-sm text-slate-400">Contact and quote form submissions will appear here.</p>
            </div>
          ) : (
            <div>
              <div className="text-4xl mb-3">🔍</div>
              <p className="font-semibold text-slate-700 mb-1">No leads match your filters</p>
              <button
                onClick={() => { setSearch(''); setFilterSource('all'); setFilterDate('all'); }}
                className="text-sm text-blue-600 hover:underline mt-1 font-medium"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      )}
    </AdminLayout>
  );
}
