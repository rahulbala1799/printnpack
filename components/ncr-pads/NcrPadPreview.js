import React from 'react';
import { NCR_SHEET_HEX, getNcrColour } from '../../data/ncr-pads-options';

/** Simple illustration: stacked sheets in the chosen copy colours with the chosen binding. */
export default function NcrPadPreview({ colourId, bindId, sizeId, numbered }) {
  const colour = getNcrColour(colourId);
  const ratio = sizeId === 'a6' ? 0.72 : 1; // A6 shown slightly smaller
  const w = 220 * ratio;
  const h = 300 * ratio;
  const x0 = (400 - w) / 2 - 10;
  const y0 = (400 - h) / 2 + 10;
  // back-most sheet first
  const layers = [...colour.sheets].reverse().map((s) => NCR_SHEET_HEX[s]);
  const step = 7;

  return (
    <svg viewBox="0 0 400 400" className="h-full w-full" role="img" aria-label={`${colour.label} NCR pad, ${bindId} bound`}>
      <rect width="400" height="400" fill="#f5f5f4" />
      <ellipse cx="200" cy="372" rx={w / 1.6} ry="9" fill="#0f172a" opacity="0.08" />
      {layers.map((fill, i) => {
        const offset = (layers.length - i) * step;
        const x = x0 + offset;
        const y = y0 + offset;
        return (
          <rect
            key={i}
            x={x}
            y={y}
            width={w}
            height={h}
            rx="3"
            fill={fill}
            stroke="#cbd5e1"
            strokeWidth="1"
          />
        );
      })}
      {/* top sheet content (original) */}
      <g>
        <rect x={x0 + 0} y={y0} width={w} height={h} rx="3" fill="#ffffff" stroke="#94a3b8" strokeWidth="1" />
        <rect x={x0 + 14} y={y0 + (bindId === 'upper' ? 30 : 16)} width={w * 0.38} height="10" rx="2" fill="#1e293b" />
        <rect x={x0 + 14} y={y0 + (bindId === 'upper' ? 46 : 32)} width={w * 0.24} height="5" rx="2" fill="#94a3b8" />
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <line
            key={i}
            x1={x0 + 14}
            x2={x0 + w - 14}
            y1={y0 + h * 0.34 + i * (h * 0.075)}
            y2={y0 + h * 0.34 + i * (h * 0.075)}
            stroke="#e2e8f0"
            strokeWidth="1.5"
          />
        ))}
        {numbered && (
          <text x={x0 + w - 16} y={y0 + (bindId === 'upper' ? 38 : 26)} textAnchor="end" fontSize="13" fontWeight="700" fill="#dc2626" fontFamily="monospace">
            No. 0001
          </text>
        )}
        {/* binding strip */}
        {bindId === 'upper' ? (
          <rect x={x0} y={y0} width={w} height="14" rx="3" fill="#334155" />
        ) : (
          <rect x={x0} y={y0} width="14" height={h} rx="3" fill="#334155" />
        )}
      </g>
    </svg>
  );
}
