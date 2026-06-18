import React from 'react';

function SummaryRow({ row }) {
  if (!row) return null;
  return (
    <div
      className={`flex justify-between gap-3 py-1 ${
        row.emphasis || row.label?.includes('Sell') || row.label?.includes('total')
          ? 'font-semibold text-slate-900'
          : 'text-slate-600'
      }`}
    >
      <span>{row.label}</span>
      <span className="tabular-nums">{row.value}</span>
    </div>
  );
}

export default function PriceBreakdownCard({ breakdown, compact = false }) {
  if (!breakdown) return null;

  return (
    <div
      className={`mt-2 rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm ${
        compact ? 'text-[11px]' : 'text-xs'
      }`}
    >
      <div className="px-3 py-2.5 bg-gradient-to-r from-slate-50 to-white border-b border-slate-100">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="font-semibold text-slate-900 leading-snug">{breakdown.title}</p>
            {breakdown.subtitle && (
              <p className="text-slate-500 mt-0.5">{breakdown.subtitle}</p>
            )}
          </div>
          {breakdown.badge && (
            <span className="shrink-0 rounded-full bg-slate-900 text-white px-2 py-0.5 text-[10px] font-medium">
              {breakdown.badge}
            </span>
          )}
        </div>
        {breakdown.index != null && (
          <p className="text-[10px] text-blue-600 font-medium mt-1">Quote item #{breakdown.index}</p>
        )}
      </div>

      <div className="divide-y divide-slate-100">
        {(breakdown.sections || []).map((sec) => (
          <div key={sec.title} className="px-3 py-2">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400 mb-1.5">
              {sec.title}
            </p>
            <div className="space-y-1">
              {sec.rows.map((row) => (
                <div key={`${sec.title}-${row.label}`} className="flex justify-between gap-3 text-slate-700">
                  <span className="text-slate-500">{row.label}</span>
                  <span className="text-right tabular-nums">
                    {row.value}
                    {row.detail && (
                      <span className="block text-[10px] text-slate-400 font-normal">{row.detail}</span>
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {breakdown.summary?.length > 0 && (
        <div className="px-3 py-2.5 bg-blue-50/80 border-t border-blue-100 space-y-0.5">
          {breakdown.summary.map((row) => (
            <SummaryRow key={row.label} row={row} />
          ))}
        </div>
      )}
    </div>
  );
}

export function ChatMessage({ message }) {
  const isUser = message.role === 'user';

  return (
    <div className={`max-w-[95%] ${isUser ? 'ml-auto' : ''}`}>
      {message.content && (
        <div
          className={`text-sm rounded-xl px-3 py-2 whitespace-pre-wrap ${
            isUser ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-800'
          }`}
        >
          {message.content.replace(/\*\*(.*?)\*\*/g, '$1')}
        </div>
      )}
    </div>
  );
}
