import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import AdminLayout from '../../../components/admin/AdminLayout';
import {
  FiArrowLeft, FiMail, FiPhone, FiUser, FiBriefcase,
  FiMessageSquare, FiTag, FiCalendar, FiClock, FiEdit3,
  FiCheck, FiX, FiExternalLink, FiChevronRight, FiPackage,
  FiDatabase, FiSave,
} from 'react-icons/fi';

const STAGES = [
  { id: 'new',         label: 'New',         icon: '🆕', color: 'bg-slate-100 text-slate-700 border-slate-300',    dot: 'bg-slate-400'    },
  { id: 'contacted',   label: 'Contacted',   icon: '📞', color: 'bg-blue-100 text-blue-700 border-blue-300',       dot: 'bg-blue-500'     },
  { id: 'qualified',   label: 'Qualified',   icon: '✅', color: 'bg-amber-100 text-amber-700 border-amber-300',    dot: 'bg-amber-500'    },
  { id: 'quote_sent',  label: 'Quote Sent',  icon: '📄', color: 'bg-purple-100 text-purple-700 border-purple-300', dot: 'bg-purple-500'   },
  { id: 'won',         label: 'Won',         icon: '🏆', color: 'bg-emerald-100 text-emerald-700 border-emerald-300', dot: 'bg-emerald-500' },
  { id: 'lost',        label: 'Lost',        icon: '❌', color: 'bg-red-100 text-red-600 border-red-300',          dot: 'bg-red-400'      },
];

const PIPELINE_STAGES = ['new', 'contacted', 'qualified', 'quote_sent']; // linear path
const END_STAGES = ['won', 'lost'];

function formatDateFull(d) {
  if (!d) return '—';
  return new Date(d).toLocaleDateString('en-IE', {
    weekday: 'short', day: 'numeric', month: 'long', year: 'numeric',
    hour: '2-digit', minute: '2-digit',
  });
}

function timeAgo(d) {
  if (!d) return '';
  const diff = Date.now() - new Date(d).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return 'just now';
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  return `${days}d ago`;
}

function SectionCard({ title, icon: Icon, children, className = '' }) {
  return (
    <div className={`bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm ${className}`}>
      <div className="flex items-center gap-2 px-5 py-3.5 border-b border-slate-100 bg-slate-50/50">
        {Icon && <Icon size={15} className="text-slate-400" />}
        <h3 className="text-xs font-bold text-slate-600 uppercase tracking-wider">{title}</h3>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

function InfoRow({ icon: Icon, label, value, href, mono }) {
  if (!value) return null;
  return (
    <div className="flex items-start gap-3 py-2.5 border-b border-slate-100 last:border-0">
      <div className="w-7 h-7 bg-slate-100 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
        <Icon size={13} className="text-slate-500" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-xs text-slate-400 font-medium">{label}</p>
        {href ? (
          <a href={href} className={`text-sm font-semibold text-blue-600 hover:underline break-all ${mono ? 'font-mono' : ''}`}>
            {value}
          </a>
        ) : (
          <p className={`text-sm font-semibold text-slate-900 break-words ${mono ? 'font-mono text-xs' : ''}`}>{value}</p>
        )}
      </div>
    </div>
  );
}

export default function LeadDetail() {
  const router = useRouter();
  const { id } = router.query;

  const [lead, setLead] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [notes, setNotes] = useState('');
  const [savingNotes, setSavingNotes] = useState(false);
  const [notesSaved, setNotesSaved] = useState(false);
  const [stageSaving, setStageSaving] = useState(false);

  useEffect(() => {
    fetch('/api/auth/me', { credentials: 'include' })
      .then((r) => { if (!r.ok) throw new Error(); return r.json(); })
      .then((d) => { if (!['admin', 'staff'].includes(d.user?.role)) throw new Error(); })
      .catch(() => router.replace('/login'));
  }, [router]);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    fetch(`/api/leads/${id}`, { credentials: 'include' })
      .then((r) => { if (!r.ok) throw new Error('Lead not found'); return r.json(); })
      .then((data) => { setLead(data); setNotes(data.notes || ''); })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [id]);

  const updateStage = async (newStatus) => {
    if (!lead || stageSaving) return;
    setStageSaving(true);
    try {
      const res = await fetch(`/api/leads/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ status: newStatus }),
      });
      if (!res.ok) throw new Error('Update failed');
      const updated = await res.json();
      setLead(updated);
    } catch (e) {
      setError(e.message);
    } finally {
      setStageSaving(false);
    }
  };

  const saveNotes = async () => {
    if (!lead || savingNotes) return;
    setSavingNotes(true);
    setNotesSaved(false);
    try {
      const res = await fetch(`/api/leads/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ notes }),
      });
      if (!res.ok) throw new Error('Failed to save notes');
      const updated = await res.json();
      setLead(updated);
      setNotesSaved(true);
      setTimeout(() => setNotesSaved(false), 2000);
    } catch (e) {
      setError(e.message);
    } finally {
      setSavingNotes(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600" />
      </div>
    );
  }

  if (error || !lead) {
    return (
      <AdminLayout title="Lead Not Found">
        <div className="text-center py-24">
          <p className="text-slate-500 mb-4">{error || 'Lead not found'}</p>
          <Link href="/admin/leads" className="text-blue-600 hover:underline text-sm">
            ← Back to leads
          </Link>
        </div>
      </AdminLayout>
    );
  }

  const currentStage = STAGES.find((s) => s.id === lead.status) || STAGES[0];
  const currentPipelineIdx = PIPELINE_STAGES.indexOf(lead.status);
  const hasPayload = lead.payload && Object.keys(lead.payload).length > 0;
  const isEndStage = END_STAGES.includes(lead.status);

  return (
    <AdminLayout title={lead.name}>
      <Head>
        <title>{lead.name} — Lead Detail — PrintNPack Admin</title>
        <meta name="robots" content="noindex" />
      </Head>

      {/* ── HEADER ── */}
      <div className="mb-6">
        <Link
          href="/admin/leads"
          className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-800 mb-4 transition-colors"
        >
          <FiArrowLeft size={14} /> Back to pipeline
        </Link>

        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            {/* Avatar */}
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shrink-0 shadow-md">
              <span className="text-white font-extrabold text-xl">
                {lead.name?.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <h1 className="text-2xl font-extrabold text-slate-900 leading-tight">{lead.name}</h1>
              <div className="flex flex-wrap items-center gap-2 mt-1.5">
                <a href={`mailto:${lead.email}`} className="text-blue-600 text-sm hover:underline flex items-center gap-1">
                  <FiMail size={13} /> {lead.email}
                </a>
                {lead.phone && (
                  <>
                    <span className="text-slate-300">·</span>
                    <a href={`tel:${lead.phone}`} className="text-slate-600 text-sm hover:text-slate-900 flex items-center gap-1">
                      <FiPhone size={13} /> {lead.phone}
                    </a>
                  </>
                )}
                {lead.company && (
                  <>
                    <span className="text-slate-300">·</span>
                    <span className="text-slate-600 text-sm flex items-center gap-1">
                      <FiBriefcase size={13} /> {lead.company}
                    </span>
                  </>
                )}
              </div>
              <div className="flex items-center gap-2 mt-2">
                <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold border ${currentStage.color}`}>
                  <span>{currentStage.icon}</span> {currentStage.label}
                </span>
                <span className="bg-slate-100 text-slate-600 text-xs px-2.5 py-1 rounded-full font-medium">
                  {lead.source}
                </span>
                <span className="text-slate-400 text-xs">{timeAgo(lead.created_at)}</span>
              </div>
            </div>
          </div>

          {/* Quick email action */}
          <div className="flex gap-2 shrink-0">
            <a
              href={`mailto:${lead.email}?subject=Re: ${encodeURIComponent(lead.subject || 'Your enquiry to PrintNPack')}`}
              className="flex items-center gap-2 bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors shadow-sm"
            >
              <FiMail size={14} /> Send Email
            </a>
          </div>
        </div>
      </div>

      {/* ── PIPELINE PROGRESS BAR ── */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 mb-6 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xs font-bold text-slate-600 uppercase tracking-wider">Pipeline Stage</h3>
          {stageSaving && (
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <div className="w-3 h-3 border border-slate-400 border-t-transparent rounded-full animate-spin" />
              Saving…
            </span>
          )}
        </div>

        {/* Linear stages */}
        <div className="flex items-center gap-0 mb-4 overflow-x-auto pb-1">
          {PIPELINE_STAGES.map((sid, idx) => {
            const stage = STAGES.find((s) => s.id === sid);
            const isCurrent = lead.status === sid;
            const isPast = !isEndStage && currentPipelineIdx > idx;
            const isClickable = !isEndStage && sid !== lead.status;
            return (
              <React.Fragment key={sid}>
                <button
                  onClick={() => isClickable && updateStage(sid)}
                  disabled={!isClickable || stageSaving}
                  className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all shrink-0 ${
                    isCurrent
                      ? 'bg-blue-600 text-white shadow-md scale-105'
                      : isPast
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 cursor-pointer hover:border-emerald-400'
                      : isClickable
                      ? 'bg-slate-50 text-slate-600 border border-slate-200 cursor-pointer hover:border-blue-300 hover:text-blue-600'
                      : 'bg-slate-50 text-slate-400 border border-slate-200 cursor-default'
                  }`}
                >
                  <span className="text-base">{isPast ? '✓' : stage.icon}</span>
                  <span className={`text-xs font-bold whitespace-nowrap ${isCurrent ? 'text-white' : ''}`}>{stage.label}</span>
                </button>
                {idx < PIPELINE_STAGES.length - 1 && (
                  <div className={`h-0.5 w-6 shrink-0 mx-0.5 ${isPast || (isCurrent && !isEndStage) ? 'bg-emerald-300' : 'bg-slate-200'}`} />
                )}
              </React.Fragment>
            );
          })}

          {/* Connector to end stages */}
          <div className="h-0.5 w-6 shrink-0 mx-0.5 bg-slate-200" />

          {/* Won / Lost */}
          <div className="flex gap-2 shrink-0">
            {END_STAGES.map((sid) => {
              const stage = STAGES.find((s) => s.id === sid);
              const isCurrent = lead.status === sid;
              return (
                <button
                  key={sid}
                  onClick={() => !isCurrent && !stageSaving && updateStage(sid)}
                  disabled={isCurrent || stageSaving}
                  className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl border transition-all shrink-0 ${
                    isCurrent
                      ? sid === 'won'
                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-md scale-105'
                        : 'bg-red-500 text-white border-red-500 shadow-md scale-105'
                      : sid === 'won'
                      ? 'bg-emerald-50 text-emerald-700 border-emerald-200 cursor-pointer hover:border-emerald-500'
                      : 'bg-red-50 text-red-600 border-red-200 cursor-pointer hover:border-red-400'
                  }`}
                >
                  <span className="text-base">{stage.icon}</span>
                  <span className="text-xs font-bold whitespace-nowrap">{stage.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <p className="text-xs text-slate-400">
          Click a stage to move this lead. Current:{' '}
          <span className="font-semibold text-slate-600">{currentStage.label}</span>
          {isEndStage && (
            <button
              onClick={() => updateStage('new')}
              className="ml-3 text-blue-600 hover:underline"
            >
              Reopen as New →
            </button>
          )}
        </p>
      </div>

      {/* ── TWO-COLUMN LAYOUT ── */}
      <div className="grid lg:grid-cols-3 gap-5">

        {/* ── LEFT COLUMN (main) ── */}
        <div className="lg:col-span-2 space-y-5">

          {/* Contact info */}
          <SectionCard title="Contact Information" icon={FiUser}>
            <InfoRow icon={FiUser}     label="Full Name"  value={lead.name} />
            <InfoRow icon={FiMail}     label="Email"      value={lead.email}   href={`mailto:${lead.email}`} />
            <InfoRow icon={FiPhone}    label="Phone"      value={lead.phone}   href={lead.phone ? `tel:${lead.phone}` : undefined} />
            <InfoRow icon={FiBriefcase}label="Company"    value={lead.company} />
            <InfoRow icon={FiTag}      label="Source"     value={lead.source}  />
          </SectionCard>

          {/* Message / Inquiry */}
          <SectionCard title="Enquiry Details" icon={FiMessageSquare}>
            {lead.subject && (
              <div className="mb-4 pb-4 border-b border-slate-100">
                <p className="text-xs text-slate-400 font-medium mb-1">Subject</p>
                <p className="text-sm font-semibold text-slate-900">{lead.subject}</p>
              </div>
            )}
            <div>
              <p className="text-xs text-slate-400 font-medium mb-2">Message</p>
              {lead.message ? (
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <p className="text-sm text-slate-800 leading-relaxed whitespace-pre-wrap">{lead.message}</p>
                </div>
              ) : (
                <p className="text-sm text-slate-400 italic">No message provided</p>
              )}
            </div>
          </SectionCard>

          {/* Extra payload */}
          {hasPayload && (
            <SectionCard title="Additional Form Data" icon={FiDatabase}>
              <div className="space-y-0">
                {Object.entries(lead.payload).map(([key, val]) => (
                  <div key={key} className="flex items-start gap-3 py-2.5 border-b border-slate-100 last:border-0">
                    <div className="min-w-0 flex-1 grid grid-cols-2 gap-2">
                      <p className="text-xs text-slate-400 font-medium capitalize">{key.replace(/_/g, ' ')}</p>
                      <p className="text-xs text-slate-800 font-mono break-all">
                        {typeof val === 'object' ? JSON.stringify(val) : String(val)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </SectionCard>
          )}

          {/* Quick reply template */}
          <SectionCard title="Quick Reply" icon={FiMail}>
            <p className="text-xs text-slate-500 mb-3">
              Click to open your email client with a pre-filled reply to this lead.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                { label: 'Initial Follow-Up', subject: `Re: Your enquiry to PrintNPack`, body: `Hi ${lead.name},\n\nThank you for reaching out to PrintNPack Ireland. I'd be happy to help with your packaging requirements.\n\nCould you let me know:\n- Approximate quantities you need\n- Any artwork/branding you have ready\n- Your timeline\n\nLooking forward to hearing from you.\n\nBest regards,\nPrintNPack Ireland` },
                { label: 'Send Quote',        subject: `Quote from PrintNPack — ${lead.subject || 'Your Enquiry'}`, body: `Hi ${lead.name},\n\nPlease find attached your quote from PrintNPack Ireland.\n\nDon't hesitate to get in touch if you have any questions.\n\nBest regards,\nPrintNPack Ireland` },
                { label: 'Request Artwork',   subject: `Artwork Required — PrintNPack`, body: `Hi ${lead.name},\n\nTo proceed with your order we need your artwork files.\n\nPlease send:\n- PDF or AI file (300 DPI minimum)\n- Any brand colour references (Pantone / CMYK / HEX)\n\nThanks,\nPrintNPack Ireland` },
              ].map(({ label, subject, body }) => (
                <a
                  key={label}
                  href={`mailto:${lead.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
                  className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 hover:border-blue-300 hover:text-blue-600 transition-colors"
                >
                  <FiExternalLink size={11} /> {label}
                </a>
              ))}
            </div>
          </SectionCard>
        </div>

        {/* ── RIGHT COLUMN (sidebar) ── */}
        <div className="space-y-5">

          {/* Notes */}
          <SectionCard title="Internal Notes" icon={FiEdit3}>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={6}
              placeholder="Add private notes about this lead — follow-up actions, customer preferences, budget discussed…"
              className="w-full text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl p-3 resize-none focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors placeholder-slate-400 leading-relaxed"
            />
            <button
              onClick={saveNotes}
              disabled={savingNotes || notes === (lead.notes || '')}
              className="mt-2 w-full flex items-center justify-center gap-2 bg-slate-900 text-white text-sm font-semibold py-2.5 rounded-xl hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              {savingNotes ? (
                <>
                  <div className="w-3.5 h-3.5 border border-white/40 border-t-white rounded-full animate-spin" />
                  Saving…
                </>
              ) : notesSaved ? (
                <>
                  <FiCheck size={14} className="text-emerald-400" /> Saved
                </>
              ) : (
                <>
                  <FiSave size={14} /> Save Notes
                </>
              )}
            </button>
          </SectionCard>

          {/* Lead metadata */}
          <SectionCard title="Lead Metadata" icon={FiCalendar}>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-slate-400 font-medium mb-0.5">Lead ID</p>
                <p className="text-xs font-mono text-slate-600 break-all bg-slate-50 px-2 py-1.5 rounded-lg border border-slate-200">{lead.id}</p>
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium mb-0.5">Created</p>
                <p className="text-xs text-slate-700">{formatDateFull(lead.created_at)}</p>
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium mb-0.5">Last Updated</p>
                <p className="text-xs text-slate-700">{formatDateFull(lead.updated_at)}</p>
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium mb-0.5">Current Status</p>
                <span className={`inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full border ${currentStage.color}`}>
                  {currentStage.icon} {currentStage.label}
                </span>
              </div>
            </div>
          </SectionCard>

          {/* Related products link */}
          <SectionCard title="Related Products" icon={FiPackage}>
            <p className="text-xs text-slate-500 mb-3">
              Browse products to help build a quote for this lead.
            </p>
            <div className="space-y-1.5">
              {[
                { href: '/admin/products',       label: 'Custom Products' },
                { href: '/admin/plain-products',  label: 'Plain Packaging' },
                { href: '/quote',                 label: 'Get a Quote (live site)', external: true },
              ].map(({ href, label, external }) => (
                <Link
                  key={href}
                  href={href}
                  target={external ? '_blank' : undefined}
                  className="flex items-center justify-between gap-2 text-xs text-blue-600 font-medium px-3 py-2 bg-blue-50 border border-blue-100 rounded-xl hover:bg-blue-100 hover:border-blue-300 transition-colors"
                >
                  {label}
                  <FiChevronRight size={12} />
                </Link>
              ))}
            </div>
          </SectionCard>

          {/* Danger zone */}
          <div className="bg-red-50 border border-red-200 rounded-2xl p-4">
            <p className="text-xs font-bold text-red-700 uppercase tracking-wider mb-2">Stage Actions</p>
            <div className="flex gap-2">
              <button
                onClick={() => updateStage('won')}
                disabled={lead.status === 'won' || stageSaving}
                className="flex-1 flex items-center justify-center gap-1.5 text-xs font-bold py-2 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 disabled:opacity-40 transition-colors"
              >
                <FiCheck size={12} /> Mark Won
              </button>
              <button
                onClick={() => updateStage('lost')}
                disabled={lead.status === 'lost' || stageSaving}
                className="flex-1 flex items-center justify-center gap-1.5 text-xs font-bold py-2 rounded-xl bg-red-500 text-white hover:bg-red-600 disabled:opacity-40 transition-colors"
              >
                <FiX size={12} /> Mark Lost
              </button>
            </div>
          </div>

        </div>
      </div>
    </AdminLayout>
  );
}
