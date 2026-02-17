import React, { useEffect, useState, useCallback } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import AdminLayout from '../../../components/admin/AdminLayout';
import {
  FiArrowLeft, FiMail, FiPhone, FiUser, FiBriefcase,
  FiMessageSquare, FiTag, FiCalendar, FiEdit3,
  FiCheck, FiX, FiExternalLink, FiChevronRight, FiPackage,
  FiSave, FiCopy, FiShoppingCart, FiInfo, FiClock,
  FiAlertCircle, FiZap, FiActivity,
} from 'react-icons/fi';

// ─── Stage config ─────────────────────────────────────────────────────────────
const STAGES = [
  {
    id: 'new', label: 'New', icon: '🆕',
    color: 'bg-slate-100 text-slate-700 border-slate-200',
    dot: 'bg-slate-400', activeBg: 'bg-slate-700 text-white',
    bannerBg: 'from-slate-700 to-slate-800',
    bannerAccent: 'bg-slate-500/20',
  },
  {
    id: 'contacted', label: 'Contacted', icon: '📞',
    color: 'bg-blue-50 text-blue-700 border-blue-200',
    dot: 'bg-blue-500', activeBg: 'bg-blue-600 text-white',
    bannerBg: 'from-blue-600 to-blue-700',
    bannerAccent: 'bg-blue-400/20',
  },
  {
    id: 'qualified', label: 'Qualified', icon: '✅',
    color: 'bg-amber-50 text-amber-700 border-amber-200',
    dot: 'bg-amber-500', activeBg: 'bg-amber-500 text-white',
    bannerBg: 'from-amber-500 to-amber-600',
    bannerAccent: 'bg-amber-300/20',
  },
  {
    id: 'quote_sent', label: 'Quote Sent', icon: '📄',
    color: 'bg-purple-50 text-purple-700 border-purple-200',
    dot: 'bg-purple-500', activeBg: 'bg-purple-600 text-white',
    bannerBg: 'from-purple-600 to-purple-700',
    bannerAccent: 'bg-purple-400/20',
  },
  {
    id: 'won', label: 'Won', icon: '🏆',
    color: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    dot: 'bg-emerald-500', activeBg: 'bg-emerald-600 text-white',
    bannerBg: 'from-emerald-600 to-emerald-700',
    bannerAccent: 'bg-emerald-400/20',
  },
  {
    id: 'lost', label: 'Lost', icon: '❌',
    color: 'bg-red-50 text-red-600 border-red-200',
    dot: 'bg-red-400', activeBg: 'bg-red-500 text-white',
    bannerBg: 'from-red-500 to-red-600',
    bannerAccent: 'bg-red-400/20',
  },
];

const PIPELINE_STAGES = ['new', 'contacted', 'qualified', 'quote_sent'];
const END_STAGES = ['won', 'lost'];

const GRADIENTS = [
  'from-blue-500 to-indigo-600', 'from-violet-500 to-purple-700',
  'from-emerald-500 to-teal-700', 'from-amber-500 to-orange-600',
  'from-pink-500 to-rose-600', 'from-cyan-500 to-blue-600',
];
function getGradient(name) {
  return GRADIENTS[(name || 'A').charCodeAt(0) % GRADIENTS.length];
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function formatDateFull(d) {
  if (!d) return '—';
  return new Date(d).toLocaleDateString('en-IE', {
    weekday: 'short', day: 'numeric', month: 'long', year: 'numeric',
    hour: '2-digit', minute: '2-digit',
  });
}

function formatDateShort(d) {
  if (!d) return '—';
  return new Date(d).toLocaleDateString('en-IE', {
    day: 'numeric', month: 'short', year: 'numeric',
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
  if (days === 1) return 'yesterday';
  return `${days}d ago`;
}

function getAgeDays(dateStr) {
  return Math.floor((Date.now() - new Date(dateStr)) / 86400000);
}

function fmt(n) {
  return `€${Number(n).toFixed(2)}`;
}

function getUrgency(lead) {
  if (!lead) return null;
  const age = getAgeDays(lead.created_at);
  if (['won', 'lost'].includes(lead.status)) return null;
  if (lead.status === 'new' && age >= 3) return 'critical';
  if (lead.status === 'quote_sent' && age >= 5) return 'critical';
  if (lead.status === 'contacted' && age >= 5) return 'high';
  if (lead.status === 'qualified' && age >= 7) return 'high';
  if (age >= 2) return 'medium';
  return 'low';
}

function UrgencyBadge({ lead }) {
  const u = getUrgency(lead);
  if (!u || u === 'low') return null;
  if (u === 'critical') return (
    <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full bg-red-100 text-red-700 border border-red-200">
      <FiAlertCircle size={11} /> Needs immediate follow-up
    </span>
  );
  if (u === 'high') return (
    <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full bg-orange-100 text-orange-700 border border-orange-200">
      <FiZap size={11} /> Follow up soon
    </span>
  );
  return (
    <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
      <FiClock size={11} /> Follow up recommended
    </span>
  );
}

// ─── Activity log (localStorage) ─────────────────────────────────────────────
function loadActivity(leadId) {
  try {
    const raw = localStorage.getItem(`lead_activity_${leadId}`);
    return raw ? JSON.parse(raw) : [];
  } catch { return []; }
}

function saveActivity(leadId, events) {
  try {
    localStorage.setItem(`lead_activity_${leadId}`, JSON.stringify(events.slice(0, 20)));
  } catch {}
}

function addActivityEvent(leadId, event) {
  const existing = loadActivity(leadId);
  const updated = [{ ...event, ts: new Date().toISOString() }, ...existing];
  saveActivity(leadId, updated);
  return updated;
}

// ─── Parse plain-text quote message (legacy fallback) ─────────────────────────
function parseQuoteLines(message) {
  if (!message) return null;
  const lines = message.split('\n');
  const items = [];
  let subtotal = '', vat = '', total = '', notes = '';
  let inLines = false;
  for (const line of lines) {
    if (line.startsWith('Quote Lines:')) { inLines = true; continue; }
    if (inLines && line.includes(' | ')) {
      const parts = line.split(' | ');
      if (parts.length === 4) {
        items.push({ nameCode: parts[0], qtyPerCase: parts[1], casesAtTier: parts[2], priceTotal: parts[3] });
      }
    }
    if (line.startsWith('Subtotal')) subtotal = line.split(': ')[1] || '';
    if (line.startsWith('VAT')) vat = line.split(': ')[1] || '';
    if (line.startsWith('Total (inc')) total = line.split(': ')[1] || '';
    if (line.startsWith('Notes:')) notes = line.replace('Notes: ', '').trim();
  }
  return items.length > 0 ? { items, subtotal, vat, total, notes } : null;
}

// ─── Section card wrapper ──────────────────────────────────────────────────────
function SectionCard({ title, icon: Icon, badge, children, className = '' }) {
  return (
    <div className={`bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm ${className}`}>
      <div className="flex items-center justify-between gap-2 px-5 py-3.5 border-b border-slate-100 bg-slate-50/60">
        <div className="flex items-center gap-2">
          {Icon && <Icon size={14} className="text-slate-400" />}
          <h3 className="text-xs font-bold text-slate-600 uppercase tracking-wider">{title}</h3>
        </div>
        {badge && (
          <span className="text-xs font-semibold px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full">{badge}</span>
        )}
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

// ─── Contact info row ─────────────────────────────────────────────────────────
function InfoRow({ icon: Icon, label, value, href, mono, onCopy }) {
  const [copied, setCopied] = useState(false);
  if (!value) return null;

  const handleCopy = () => {
    navigator.clipboard?.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <div className="flex items-start gap-3 py-3 border-b border-slate-100 last:border-0 group">
      <div className="w-8 h-8 bg-slate-100 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
        <Icon size={13} className="text-slate-500" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-xs text-slate-400 font-medium mb-0.5">{label}</p>
        {href ? (
          <a href={href} className={`text-sm font-semibold text-blue-600 hover:underline break-all ${mono ? 'font-mono text-xs' : ''}`}>
            {value}
          </a>
        ) : (
          <p className={`text-sm font-semibold text-slate-900 break-words ${mono ? 'font-mono text-xs' : ''}`}>{value}</p>
        )}
      </div>
      {onCopy !== false && (
        <button
          onClick={handleCopy}
          className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 rounded-lg hover:bg-slate-100 shrink-0"
          title="Copy"
        >
          {copied
            ? <FiCheck size={12} className="text-emerald-500" />
            : <FiCopy size={12} className="text-slate-400" />}
        </button>
      )}
    </div>
  );
}

// ─── Quote table ──────────────────────────────────────────────────────────────
function QuoteTable({ lead }) {
  const p = lead.payload || {};

  if (p.quoteItems && p.quoteItems.length > 0) {
    return (
      <SectionCard title="Quote Request" icon={FiShoppingCart} badge={`${p.quoteItems.length} line${p.quoteItems.length !== 1 ? 's' : ''}`}>
        <div className="overflow-x-auto -mx-1">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="text-left px-2 py-2 text-xs font-bold text-slate-500 uppercase tracking-wider">Product</th>
                <th className="text-center px-2 py-2 text-xs font-bold text-slate-500 uppercase tracking-wider hidden sm:table-cell">Qty/Case</th>
                <th className="text-center px-2 py-2 text-xs font-bold text-slate-500 uppercase tracking-wider">Cases</th>
                <th className="text-center px-2 py-2 text-xs font-bold text-slate-500 uppercase tracking-wider hidden sm:table-cell">Tier</th>
                <th className="text-right px-2 py-2 text-xs font-bold text-slate-500 uppercase tracking-wider">Unit</th>
                <th className="text-right px-2 py-2 text-xs font-bold text-slate-500 uppercase tracking-wider">Total</th>
              </tr>
            </thead>
            <tbody>
              {p.quoteItems.map((item, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                  <td className="px-2 py-2.5">
                    <p className="font-semibold text-slate-900 text-sm leading-tight">{item.name}</p>
                    <p className="text-xs text-slate-400 font-mono mt-0.5">[{item.code}]</p>
                  </td>
                  <td className="px-2 py-2.5 text-center text-xs text-slate-600 hidden sm:table-cell">
                    {item.qtyPerCase?.toLocaleString()}
                  </td>
                  <td className="px-2 py-2.5 text-center">
                    <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-50 border border-blue-100 rounded-lg text-sm font-bold text-blue-700">
                      {item.numCases}
                    </span>
                  </td>
                  <td className="px-2 py-2.5 text-center text-xs text-slate-500 hidden sm:table-cell">{item.tier}</td>
                  <td className="px-2 py-2.5 text-right text-sm text-slate-600 font-medium">{fmt(item.unitPrice)}</td>
                  <td className="px-2 py-2.5 text-right">
                    <span className="font-bold text-slate-900">{fmt(item.lineTotal)}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 pt-4 border-t border-slate-100 space-y-1.5">
          <div className="flex justify-between text-sm">
            <span className="text-slate-500">Subtotal (ex. VAT)</span>
            <span className="font-semibold text-slate-900">{fmt(p.quoteSubtotal)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-slate-500">VAT (23%)</span>
            <span className="font-semibold text-slate-900">{fmt(p.quoteVat)}</span>
          </div>
          <div className="flex justify-between text-base font-extrabold pt-1.5 border-t border-slate-200">
            <span className="text-slate-900">Total (inc. VAT)</span>
            <span className="text-emerald-700">{fmt(p.quoteTotal)}</span>
          </div>
        </div>
        {p.quoteNotes && (
          <div className="mt-4 p-3 bg-amber-50 border border-amber-100 rounded-xl">
            <p className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-1">Customer Notes</p>
            <p className="text-sm text-amber-900 leading-relaxed">{p.quoteNotes}</p>
          </div>
        )}
      </SectionCard>
    );
  }

  const parsed = parseQuoteLines(lead.message);
  if (parsed) {
    return (
      <SectionCard title="Quote Request" icon={FiShoppingCart} badge={`${parsed.items.length} lines`}>
        <div className="space-y-2 mb-4">
          {parsed.items.map((item, i) => (
            <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-3">
              <p className="text-sm font-semibold text-slate-900">{item.nameCode}</p>
              <div className="flex flex-wrap gap-2 mt-1.5">
                <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full border border-blue-100">{item.qtyPerCase}</span>
                <span className="text-xs bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full border border-purple-100">{item.casesAtTier}</span>
                <span className="text-xs bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full border border-emerald-100 font-bold">{item.priceTotal}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="pt-3 border-t border-slate-100 space-y-1">
          {parsed.subtotal && <div className="flex justify-between text-sm"><span className="text-slate-500">Subtotal (ex. VAT)</span><span className="font-semibold">{parsed.subtotal}</span></div>}
          {parsed.vat && <div className="flex justify-between text-sm"><span className="text-slate-500">VAT (23%)</span><span className="font-semibold">{parsed.vat}</span></div>}
          {parsed.total && <div className="flex justify-between text-base font-extrabold pt-1 border-t border-slate-200"><span>Total (inc. VAT)</span><span className="text-emerald-700">{parsed.total}</span></div>}
        </div>
        {parsed.notes && parsed.notes !== 'None' && (
          <div className="mt-3 p-3 bg-amber-50 border border-amber-100 rounded-xl">
            <p className="text-xs font-bold text-amber-700 mb-1">Customer Notes</p>
            <p className="text-sm text-amber-900">{parsed.notes}</p>
          </div>
        )}
      </SectionCard>
    );
  }

  return <MessageSection lead={lead} />;
}

// ─── Outbound visit section (shop visit + products interested) ─────────────────
function OutboundVisitSection({ lead }) {
  const p = lead.payload || {};
  const visits = Array.isArray(p.visits) ? p.visits : (p.shopName ? [p] : []);

  const plain = p.productsInterestedPlain || (visits[0] && visits[0].productsInterestedPlain);
  const printed = p.productsInterestedPrinted || (visits[0] && visits[0].productsInterestedPrinted);
  const hasProducts = (Array.isArray(plain) && plain.length > 0) || (Array.isArray(printed) && printed.length > 0);

  const staffName = p.staffName || visits[0]?.staffName;

  return (
    <>
      <SectionCard title="Outbound Visit" icon={FiPackage} badge={staffName ? `By ${staffName}` : null}>
        <div className="space-y-4">
          {visits.map((v, i) => (
            <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                {v.metOwnerOrKdm && (
                  <>
                    {v.interested === 'yes' && <span className="text-xs font-semibold px-2 py-1 rounded-full bg-emerald-100 text-emerald-800">Interested</span>}
                    {v.interested === 'no' && <span className="text-xs font-semibold px-2 py-1 rounded-full bg-red-100 text-red-800">Not interested</span>}
                    {v.interested === 'follow-up' && <span className="text-xs font-semibold px-2 py-1 rounded-full bg-amber-100 text-amber-800">Follow-up later</span>}
                  </>
                )}
                {v.metOwnerOrKdm === false && (
                  <span className="text-xs font-semibold px-2 py-1 rounded-full bg-slate-200 text-slate-700">
                    {v.leafletOrMaterialDropped ? 'Leaflet dropped' : 'No leaflet'}
                  </span>
                )}
              </div>
              {v.displayAddress && (
                <p className="text-sm text-slate-600 mb-1">
                  <span className="text-slate-400">Address:</span> {v.displayAddress}
                </p>
              )}
              {v.visitAt && (
                <p className="text-xs text-slate-500">Visit: {new Date(v.visitAt).toLocaleString('en-IE')}</p>
              )}
              {v.notes && (
                <p className="text-sm text-slate-700 mt-2 pt-2 border-t border-slate-200">{v.notes}</p>
              )}
            </div>
          ))}
        </div>
      </SectionCard>

      {hasProducts && (
        <SectionCard title="Products interested in" icon={FiShoppingCart}>
          <div className="grid sm:grid-cols-2 gap-4">
            {Array.isArray(plain) && plain.length > 0 && (
              <div className="rounded-xl border border-amber-200 bg-amber-50/50 overflow-hidden">
                <div className="px-3.5 py-2 bg-amber-100/80 border-b border-amber-200">
                  <p className="text-xs font-bold text-amber-800 uppercase tracking-wider">Plain Packaging</p>
                </div>
                <ul className="p-3 space-y-2">
                  {plain.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <span className="w-6 h-6 rounded-lg bg-amber-200/60 flex items-center justify-center text-amber-800 text-xs font-bold shrink-0">
                        {i + 1}
                      </span>
                      <span className="font-medium text-slate-900">{item.name || item.id}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {Array.isArray(printed) && printed.length > 0 && (
              <div className="rounded-xl border border-blue-200 bg-blue-50/50 overflow-hidden">
                <div className="px-3.5 py-2 bg-blue-100/80 border-b border-blue-200">
                  <p className="text-xs font-bold text-blue-800 uppercase tracking-wider">Printed / Main catalogue</p>
                </div>
                <ul className="p-3 space-y-2">
                  {printed.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <span className="w-6 h-6 rounded-lg bg-blue-200/60 flex items-center justify-center text-blue-800 text-xs font-bold shrink-0">
                        {i + 1}
                      </span>
                      <span className="font-medium text-slate-900">{item.name || item.id}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </SectionCard>
      )}
    </>
  );
}

// ─── Message section ──────────────────────────────────────────────────────────
function MessageSection({ lead }) {
  return (
    <SectionCard title="Enquiry Details" icon={FiMessageSquare}>
      {lead.subject && (
        <div className="mb-4 pb-4 border-b border-slate-100">
          <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">Subject</p>
          <p className="text-sm font-bold text-slate-900">{lead.subject}</p>
        </div>
      )}
      {lead.message ? (
        <div>
          <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-3">Message</p>
          <div className="relative">
            <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl rounded-tl-sm p-5 shadow-sm">
              <p className="text-sm text-slate-800 leading-relaxed whitespace-pre-wrap">{lead.message}</p>
            </div>
            <div className="absolute top-0 -left-1.5 w-3 h-3 bg-slate-50 border-l border-t border-slate-200 rotate-[-45deg] rounded-sm" />
          </div>
          <div className="flex items-center gap-2 mt-3 pl-2">
            <div className={`w-7 h-7 bg-gradient-to-br ${getGradient(lead.name)} rounded-lg flex items-center justify-center`}>
              <span className="text-white text-xs font-bold">{(lead.name || '?').charAt(0)}</span>
            </div>
            <p className="text-xs text-slate-400">
              <span className="font-semibold text-slate-600">{lead.name}</span>
              {lead.company && <span> · {lead.company}</span>}
              <span> · {timeAgo(lead.created_at)}</span>
            </p>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-dashed border-slate-300">
          <FiInfo size={16} className="text-slate-400 shrink-0" />
          <p className="text-sm text-slate-400 italic">No message was provided with this enquiry.</p>
        </div>
      )}
    </SectionCard>
  );
}

// ─── Pipeline stepper ─────────────────────────────────────────────────────────
function PipelineStepper({ lead, onUpdate, saving }) {
  const currentStage = STAGES.find((s) => s.id === lead.status) || STAGES[0];
  const pipelineIdx = PIPELINE_STAGES.indexOf(lead.status);
  const isEnd = END_STAGES.includes(lead.status);
  const progressPct = isEnd
    ? lead.status === 'won' ? 100 : 0
    : Math.round(((pipelineIdx + 1) / PIPELINE_STAGES.length) * 100);

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 mb-5 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xs font-bold text-slate-600 uppercase tracking-wider">Pipeline Stage</h3>
        <div className="flex items-center gap-2">
          {saving && (
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <div className="w-3 h-3 border border-slate-400 border-t-transparent rounded-full animate-spin" />
              Updating…
            </span>
          )}
          <span className={`inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full border ${currentStage.color}`}>
            {currentStage.icon} {currentStage.label}
          </span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-2 bg-slate-100 rounded-full mb-5 overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-700 ${lead.status === 'won' ? 'bg-emerald-500' : lead.status === 'lost' ? 'bg-red-400' : 'bg-blue-500'}`}
          style={{ width: `${progressPct}%` }}
        />
      </div>

      {/* Stage steps */}
      <div className="flex items-center overflow-x-auto pb-1 gap-0">
        {PIPELINE_STAGES.map((sid, idx) => {
          const stage = STAGES.find((s) => s.id === sid);
          const isCurrent = lead.status === sid;
          const isPast = !isEnd && pipelineIdx > idx;
          const isClickable = !isEnd && sid !== lead.status && !saving;
          return (
            <React.Fragment key={sid}>
              {idx > 0 && (
                <div className={`h-0.5 flex-1 min-w-4 transition-colors ${isPast ? 'bg-emerald-300' : isCurrent ? 'bg-blue-200' : 'bg-slate-200'}`} />
              )}
              <button
                onClick={() => isClickable && onUpdate(sid)}
                disabled={!isClickable}
                title={isClickable ? `Move to ${stage.label}` : undefined}
                className={`flex flex-col items-center gap-1 px-3 py-2.5 rounded-xl transition-all shrink-0 min-w-[72px] ${
                  isCurrent
                    ? `${stage.activeBg} shadow-md scale-105`
                    : isPast
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 cursor-pointer hover:border-emerald-400'
                    : isClickable
                    ? 'bg-slate-50 text-slate-600 border border-slate-200 cursor-pointer hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700'
                    : 'bg-slate-50 text-slate-400 border border-slate-200 cursor-default'
                }`}
              >
                <span className="text-base leading-none">{isPast ? '✓' : stage.icon}</span>
                <span className="text-xs font-bold whitespace-nowrap leading-none mt-0.5">{stage.label}</span>
              </button>
            </React.Fragment>
          );
        })}

        <div className="h-0.5 w-4 shrink-0 bg-slate-200 mx-1" />

        <div className="flex gap-1.5 shrink-0">
          {END_STAGES.map((sid) => {
            const stage = STAGES.find((s) => s.id === sid);
            const isCurrent = lead.status === sid;
            return (
              <button
                key={sid}
                onClick={() => !isCurrent && !saving && onUpdate(sid)}
                disabled={isCurrent || saving}
                className={`flex flex-col items-center gap-1 px-3 py-2.5 rounded-xl border transition-all shrink-0 min-w-[64px] ${
                  isCurrent
                    ? `${stage.activeBg} border-transparent shadow-md scale-105`
                    : sid === 'won'
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-200 cursor-pointer hover:border-emerald-500 hover:bg-emerald-100'
                    : 'bg-red-50 text-red-600 border-red-200 cursor-pointer hover:border-red-400 hover:bg-red-100'
                }`}
              >
                <span className="text-base leading-none">{stage.icon}</span>
                <span className="text-xs font-bold whitespace-nowrap leading-none mt-0.5">{stage.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {isEnd && (
        <button
          onClick={() => onUpdate('new')}
          disabled={saving}
          className="mt-4 text-xs text-blue-600 hover:underline font-medium flex items-center gap-1"
        >
          ↩ Reopen as New
        </button>
      )}
    </div>
  );
}

// ─── Activity timeline ────────────────────────────────────────────────────────
function ActivityTimeline({ events, lead }) {
  if (events.length === 0) {
    return (
      <div className="flex items-start gap-3 py-3">
        <div className="w-7 h-7 bg-slate-100 rounded-full flex items-center justify-center shrink-0">
          <FiActivity size={12} className="text-slate-400" />
        </div>
        <div className="pt-1">
          <p className="text-xs text-slate-500">Lead created</p>
          <p className="text-xs text-slate-400 mt-0.5">{timeAgo(lead.created_at)}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-0">
      {events.map((event, i) => {
        const stage = STAGES.find(s => s.id === event.toStage);
        return (
          <div key={i} className="flex items-start gap-3 py-2.5 relative">
            {i < events.length - 1 && (
              <div className="absolute left-3.5 top-9 bottom-0 w-px bg-slate-100" />
            )}
            <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-xs ${
              event.type === 'stage_change'
                ? stage ? `${stage.activeBg}` : 'bg-slate-200'
                : 'bg-blue-100'
            }`}>
              {event.type === 'stage_change' ? (stage?.icon || '→') : '📝'}
            </div>
            <div className="pt-0.5 min-w-0">
              <p className="text-xs font-semibold text-slate-700">
                {event.type === 'stage_change'
                  ? `Moved to ${stage?.label || event.toStage}`
                  : event.label}
              </p>
              <p className="text-xs text-slate-400 mt-0.5">{timeAgo(event.ts)}</p>
            </div>
          </div>
        );
      })}
      <div className="flex items-start gap-3 py-2.5">
        <div className="w-7 h-7 bg-slate-100 rounded-full flex items-center justify-center shrink-0">
          <FiActivity size={12} className="text-slate-400" />
        </div>
        <div className="pt-0.5">
          <p className="text-xs text-slate-500">Lead received</p>
          <p className="text-xs text-slate-400 mt-0.5">{formatDateShort(lead.created_at)} · {timeAgo(lead.created_at)}</p>
        </div>
      </div>
    </div>
  );
}

// ─── Notes card ───────────────────────────────────────────────────────────────
function NotesCard({ notes, setNotes, onSave, saving, saved, original }) {
  const isDirty = notes !== original;
  const charCount = notes.length;

  const handleKeyDown = (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault();
      if (isDirty) onSave();
    }
  };

  return (
    <SectionCard title="Internal Notes" icon={FiEdit3}>
      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        onKeyDown={handleKeyDown}
        rows={7}
        placeholder="Add private notes — follow-up actions, budget discussed, customer preferences, artwork status…"
        className="w-full text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl p-3.5 resize-none focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all placeholder-slate-400 leading-relaxed"
      />
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-400">
            <kbd className="px-1.5 py-0.5 bg-slate-100 border border-slate-200 rounded text-xs font-mono">
              {typeof window !== 'undefined' && navigator.platform?.includes('Mac') ? '⌘' : 'Ctrl'}
            </kbd>
            {' + '}
            <kbd className="px-1.5 py-0.5 bg-slate-100 border border-slate-200 rounded text-xs font-mono">↵</kbd>
            {' to save'}
          </span>
          {charCount > 0 && (
            <span className="text-xs text-slate-400">{charCount} chars</span>
          )}
        </div>
        <button
          onClick={onSave}
          disabled={saving || !isDirty}
          className="flex items-center gap-2 bg-slate-900 text-white text-xs font-bold px-4 py-2 rounded-xl hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          {saving ? (
            <><div className="w-3.5 h-3.5 border border-white/40 border-t-white rounded-full animate-spin" /> Saving…</>
          ) : saved ? (
            <><FiCheck size={13} className="text-emerald-400" /> Saved</>
          ) : (
            <><FiSave size={13} /> Save Notes</>
          )}
        </button>
      </div>
    </SectionCard>
  );
}

// ─── Quick reply templates ────────────────────────────────────────────────────
function QuickReplyCard({ lead, isQuote }) {
  const [expanded, setExpanded] = useState(null);

  const templates = [
    {
      id: 'followup',
      label: 'Initial Follow-Up',
      icon: '👋',
      subject: `Re: Your enquiry to PrintNPack`,
      body: `Hi ${lead.name},\n\nThank you for reaching out to PrintNPack Ireland. I'd be happy to help with your packaging requirements.\n\nCould you let me know:\n- Approximate quantities you need\n- Any artwork/branding you have ready\n- Your preferred timeline\n\nLooking forward to hearing from you.\n\nBest regards,\nPrintNPack Ireland`,
    },
    {
      id: 'quote',
      label: 'Send Quote',
      icon: '📋',
      subject: `Quote from PrintNPack — ${lead.subject || 'Your Enquiry'}`,
      body: `Hi ${lead.name},\n\nPlease find attached your quote from PrintNPack Ireland.\n\nDon't hesitate to get in touch if you have any questions.\n\nBest regards,\nPrintNPack Ireland`,
    },
    ...(isQuote ? [{
      id: 'quote_followup',
      label: 'Quote Follow-Up',
      icon: '🔄',
      subject: `Re: ${lead.subject || 'Plain Packaging Quote'}`,
      body: `Hi ${lead.name},\n\nThank you for submitting your plain packaging quote request. We're reviewing your requirements and will have a formal quote ready shortly.\n\nIf you have any questions in the meantime, feel free to reply to this email.\n\nKind regards,\nPrintNPack Ireland`,
    }] : []),
    {
      id: 'artwork',
      label: 'Request Artwork',
      icon: '🎨',
      subject: `Artwork Required — PrintNPack`,
      body: `Hi ${lead.name},\n\nTo proceed with your order we need your artwork files.\n\nPlease send:\n- PDF or AI file (300 DPI minimum)\n- Brand colour references (Pantone / CMYK / HEX)\n\nThanks,\nPrintNPack Ireland`,
    },
  ];

  const selected = templates.find(t => t.id === expanded);

  return (
    <SectionCard title="Quick Reply Templates" icon={FiMail}>
      <div className="flex flex-wrap gap-2 mb-3">
        {templates.map(({ id, label, icon }) => (
          <button
            key={id}
            onClick={() => setExpanded(expanded === id ? null : id)}
            className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-xl border transition-all ${
              expanded === id
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700'
            }`}
          >
            <span>{icon}</span> {label}
          </button>
        ))}
      </div>

      {selected && (
        <div className="border border-slate-200 rounded-xl overflow-hidden">
          <div className="bg-slate-50 border-b border-slate-200 px-3.5 py-2.5">
            <p className="text-xs text-slate-500 font-medium">To: <span className="text-slate-700">{lead.email}</span></p>
            <p className="text-xs text-slate-500 font-medium mt-0.5">Subject: <span className="text-slate-700">{selected.subject}</span></p>
          </div>
          <div className="p-3.5 bg-white">
            <p className="text-xs text-slate-700 leading-relaxed whitespace-pre-wrap font-mono">{selected.body}</p>
          </div>
          <div className="bg-slate-50 border-t border-slate-200 px-3.5 py-2.5">
            <a
              href={`mailto:${lead.email}?subject=${encodeURIComponent(selected.subject)}&body=${encodeURIComponent(selected.body)}`}
              className="flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors"
            >
              <FiMail size={12} /> Open in email client <FiExternalLink size={10} />
            </a>
          </div>
        </div>
      )}

      {!selected && (
        <p className="text-xs text-slate-400">Select a template above to preview and send.</p>
      )}
    </SectionCard>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
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
  const [activity, setActivity] = useState([]);

  // Auth
  useEffect(() => {
    fetch('/api/auth/me', { credentials: 'include' })
      .then((r) => { if (!r.ok) throw new Error(); return r.json(); })
      .then((d) => { if (!['admin', 'staff'].includes(d.user?.role)) throw new Error(); })
      .catch(() => router.replace('/login'));
  }, [router]);

  // Load lead
  useEffect(() => {
    if (!id) return;
    setLoading(true);
    fetch(`/api/leads/${id}`, { credentials: 'include' })
      .then((r) => { if (!r.ok) throw new Error('Lead not found'); return r.json(); })
      .then((data) => {
        setLead(data);
        setNotes(data.notes || '');
        setActivity(loadActivity(id));
      })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [id]);

  const updateStage = useCallback(async (newStatus) => {
    if (!lead || stageSaving) return;
    const prevStatus = lead.status;
    setStageSaving(true);
    try {
      const res = await fetch(`/api/leads/${id}`, {
        method: 'PATCH', credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      if (!res.ok) throw new Error('Update failed');
      const updated = await res.json();
      setLead(updated);
      // Track in activity log
      const events = addActivityEvent(id, { type: 'stage_change', fromStage: prevStatus, toStage: newStatus });
      setActivity(events);
    } catch (e) { setError(e.message); }
    finally { setStageSaving(false); }
  }, [lead, id, stageSaving]);

  const saveNotes = useCallback(async () => {
    if (!lead || savingNotes) return;
    setSavingNotes(true);
    setNotesSaved(false);
    try {
      const res = await fetch(`/api/leads/${id}`, {
        method: 'PATCH', credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ notes }),
      });
      if (!res.ok) throw new Error('Failed to save');
      setLead(await res.json());
      setNotesSaved(true);
      setTimeout(() => setNotesSaved(false), 2000);
    } catch (e) { setError(e.message); }
    finally { setSavingNotes(false); }
  }, [lead, id, notes, savingNotes]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600" />
      </div>
    );
  }

  if (error || !lead) {
    return (
      <AdminLayout title="Lead Not Found">
        <div className="text-center py-24">
          <div className="text-5xl mb-4">🔍</div>
          <p className="text-slate-700 font-semibold mb-1">{error || 'Lead not found'}</p>
          <Link href="/admin/leads" className="text-blue-600 hover:underline text-sm mt-2 inline-block">
            ← Back to pipeline
          </Link>
        </div>
      </AdminLayout>
    );
  }

  const currentStage = STAGES.find((s) => s.id === lead.status) || STAGES[0];
  const isQuote = lead.source === 'Plain Packaging Quote Builder';
  const ageDays = getAgeDays(lead.created_at);

  return (
    <AdminLayout title={lead.name}>
      <Head>
        <title>{lead.name} — Lead — PrintNPack Admin</title>
        <meta name="robots" content="noindex" />
      </Head>

      {/* ── BACK ── */}
      <Link
        href="/admin/leads"
        className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-800 mb-5 transition-colors group"
      >
        <FiArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
        Back to pipeline
      </Link>

      {/* ── STAGE BANNER HEADER ── */}
      <div className={`bg-gradient-to-r ${currentStage.bannerBg} rounded-2xl p-5 mb-5 text-white shadow-md relative overflow-hidden`}>
        {/* Decorative background blob */}
        <div className={`absolute top-0 right-0 w-48 h-48 ${currentStage.bannerAccent} rounded-full -translate-y-1/2 translate-x-1/4`} />
        <div className={`absolute bottom-0 left-1/3 w-32 h-32 ${currentStage.bannerAccent} rounded-full translate-y-1/2`} />

        <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            {/* Avatar */}
            <div className={`w-16 h-16 bg-gradient-to-br ${getGradient(lead.name)} rounded-2xl flex items-center justify-center shrink-0 shadow-lg ring-4 ring-white/20`}>
              <span className="text-white font-extrabold text-2xl">
                {(lead.name || '?').charAt(0).toUpperCase()}
              </span>
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full bg-white/20 text-white border border-white/20">
                  {currentStage.icon} {currentStage.label}
                </span>
                <UrgencyBadge lead={lead} />
              </div>

              <h1 className="text-2xl font-extrabold text-white leading-tight">{lead.name}</h1>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1.5">
                <a href={`mailto:${lead.email}`} className="flex items-center gap-1 text-white/80 text-sm hover:text-white transition-colors">
                  <FiMail size={12} /> {lead.email}
                </a>
                {lead.phone && (
                  <a href={`tel:${lead.phone}`} className="flex items-center gap-1 text-white/80 text-sm hover:text-white transition-colors">
                    <FiPhone size={12} /> {lead.phone}
                  </a>
                )}
                {lead.company && (
                  <span className="flex items-center gap-1 text-white/70 text-sm">
                    <FiBriefcase size={12} /> {lead.company}
                  </span>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-2 mt-2">
                <span className="text-xs text-white/60">
                  {ageDays === 0 ? 'Received today' : `${ageDays}d ago`} · {lead.source}
                </span>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-2 shrink-0">
            {lead.phone && (
              <a
                href={`tel:${lead.phone}`}
                className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white text-sm font-semibold px-4 py-2.5 rounded-xl border border-white/20 transition-colors backdrop-blur-sm"
              >
                <FiPhone size={14} /> Call
              </a>
            )}
            <a
              href={`mailto:${lead.email}?subject=Re: ${encodeURIComponent(lead.subject || 'Your enquiry to PrintNPack')}`}
              className="flex items-center gap-2 bg-white text-slate-800 text-sm font-bold px-4 py-2.5 rounded-xl hover:bg-white/90 transition-colors shadow-sm"
            >
              <FiMail size={14} /> Email
            </a>
          </div>
        </div>
      </div>

      {/* ── PIPELINE STEPPER ── */}
      <PipelineStepper lead={lead} onUpdate={updateStage} saving={stageSaving} />

      {error && (
        <div className="mb-5 p-4 bg-red-50 border border-red-200 rounded-2xl text-red-800 text-sm flex items-center gap-2">
          <FiAlertCircle size={14} /> {error}
        </div>
      )}

      {/* ── TWO-COLUMN LAYOUT ── */}
      <div className="grid lg:grid-cols-3 gap-5">

        {/* ── LEFT COLUMN ── */}
        <div className="lg:col-span-2 space-y-5">

          {/* Contact info */}
          <SectionCard title="Contact Information" icon={FiUser}>
            <InfoRow icon={FiUser}       label="Full Name"  value={lead.name} />
            <InfoRow icon={FiMail}       label="Email"      value={lead.email}  href={`mailto:${lead.email}`} />
            <InfoRow icon={FiPhone}      label="Phone"      value={lead.phone}  href={lead.phone ? `tel:${lead.phone}` : undefined} />
            <InfoRow icon={FiBriefcase}  label="Company"    value={lead.company} />
            <InfoRow icon={FiTag}        label="Source"     value={lead.source} onCopy={false} />
          </SectionCard>

          {/* Outbound visit + products interested (when source is Outbound Sales Visit) */}
          {lead.source === 'Outbound Sales Visit' && <OutboundVisitSection lead={lead} />}

          {/* Quote table or message */}
          {isQuote ? <QuoteTable lead={lead} /> : <MessageSection lead={lead} />}

          {/* Quick reply templates */}
          <QuickReplyCard lead={lead} isQuote={isQuote} />
        </div>

        {/* ── RIGHT COLUMN ── */}
        <div className="space-y-5">

          {/* Notes */}
          <NotesCard
            notes={notes}
            setNotes={setNotes}
            onSave={saveNotes}
            saving={savingNotes}
            saved={notesSaved}
            original={lead.notes || ''}
          />

          {/* Activity timeline */}
          <SectionCard title="Activity" icon={FiActivity}>
            <ActivityTimeline events={activity} lead={lead} />
          </SectionCard>

          {/* Lead metadata */}
          <SectionCard title="Lead Info" icon={FiCalendar}>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-slate-400 font-medium mb-1">Lead ID</p>
                <p className="text-xs font-mono text-slate-600 break-all bg-slate-50 px-2 py-1.5 rounded-lg border border-slate-200">{lead.id}</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-xs text-slate-400 font-medium mb-0.5">Received</p>
                  <p className="text-sm text-slate-700 font-medium">{formatDateShort(lead.created_at)}</p>
                  <p className="text-xs text-slate-400">{timeAgo(lead.created_at)}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium mb-0.5">Age</p>
                  <p className="text-sm font-bold text-slate-900">{ageDays === 0 ? 'Today' : `${ageDays} day${ageDays !== 1 ? 's' : ''}`}</p>
                </div>
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium mb-0.5">Last Updated</p>
                <p className="text-sm text-slate-700">{formatDateFull(lead.updated_at)}</p>
              </div>
            </div>
          </SectionCard>

          {/* Related products */}
          <SectionCard title="Related Products" icon={FiPackage}>
            <div className="space-y-1.5">
              {[
                { href: '/admin/products',      label: 'Custom Printed Products' },
                { href: '/admin/plain-products', label: 'Plain Packaging (DB)' },
                { href: '/plain-packaging',      label: 'Plain Packaging (live site)', external: true },
              ].map(({ href, label, external }) => (
                <Link
                  key={href}
                  href={href}
                  target={external ? '_blank' : undefined}
                  className="flex items-center justify-between gap-2 text-xs text-blue-600 font-medium px-3 py-2.5 bg-blue-50 border border-blue-100 rounded-xl hover:bg-blue-100 hover:border-blue-300 transition-colors"
                >
                  {label}
                  <FiChevronRight size={12} />
                </Link>
              ))}
            </div>
          </SectionCard>

          {/* Close deal */}
          <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
            <p className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-3">Close Deal</p>
            <div className="space-y-2">
              <button
                onClick={() => updateStage('won')}
                disabled={lead.status === 'won' || stageSaving}
                className="w-full flex items-center justify-center gap-2 text-sm font-bold py-3 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors shadow-sm"
              >
                <FiCheck size={14} /> Mark as Won
              </button>
              <button
                onClick={() => updateStage('lost')}
                disabled={lead.status === 'lost' || stageSaving}
                className="w-full flex items-center justify-center gap-2 text-sm font-bold py-3 rounded-xl bg-white text-red-600 border border-red-200 hover:bg-red-50 hover:border-red-400 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                <FiX size={14} /> Mark as Lost
              </button>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
