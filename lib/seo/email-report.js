import { SITE_URL } from '../site.js';

function priorityBadge(priority) {
  const colors = {
    critical: '#dc2626',
    high: '#ea580c',
    medium: '#ca8a04',
    low: '#64748b',
  };
  return `<span style="background:${colors[priority] || '#64748b'};color:white;padding:2px 8px;border-radius:4px;font-size:11px;font-weight:600;text-transform:uppercase">${priority}</span>`;
}

export function formatSeoReportForEmail(analysis, recommendations) {
  const { summary, meta, topQueriesByImpressions, lowCtrPages } = analysis;
  const topRecs = recommendations.slice(0, 15);

  const queryRows = topQueriesByImpressions
    .slice(0, 10)
    .map(
      (q, i) => `
      <tr style="border-bottom:1px solid #eee">
        <td style="padding:8px">${i + 1}</td>
        <td style="padding:8px">${q.name}</td>
        <td style="padding:8px;text-align:right;font-weight:600">${q.impressions.toLocaleString()}</td>
        <td style="padding:8px;text-align:right">${q.clicks}</td>
        <td style="padding:8px;text-align:right">${q.ctr}%</td>
        <td style="padding:8px;text-align:right">${q.position.toFixed(1)}</td>
      </tr>`
    )
    .join('');

  const recRows = topRecs
    .map(
      (r) => `
      <div style="background:#f8fafc;border-left:4px solid #2563eb;padding:12px 16px;margin:10px 0;border-radius:0 8px 8px 0">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
          <strong style="color:#1e293b">"${r.query}"</strong>
          ${priorityBadge(r.priority)}
        </div>
        <p style="margin:4px 0;color:#64748b;font-size:13px">
          ${r.impressions} impressions · ${r.clicks} clicks · pos ${r.position.toFixed(1)}
          ${r.targetPage ? ` · <a href="${r.targetUrl}">${r.targetPage}</a>` : ' · <em>No page mapped</em>'}
        </p>
        <ul style="margin:8px 0 0;padding-left:18px;color:#334155;font-size:13px">
          ${r.actions.map((a) => `<li>${a}</li>`).join('')}
        </ul>
      </div>`
    )
    .join('');

  const pageRows = lowCtrPages
    .slice(0, 5)
    .map(
      (p) => `
      <tr style="border-bottom:1px solid #eee">
        <td style="padding:8px;max-width:300px;overflow:hidden;text-overflow:ellipsis">${p.path}</td>
        <td style="padding:8px;text-align:right">${p.impressions}</td>
        <td style="padding:8px;text-align:right">${p.ctr}%</td>
        <td style="padding:8px;text-align:right">${p.position.toFixed(1)}</td>
      </tr>`
    )
    .join('');

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family:Arial,sans-serif;line-height:1.6;color:#333;margin:0;padding:0">
  <div style="max-width:680px;margin:0 auto;padding:20px">
    <div style="background:linear-gradient(135deg,#1e40af,#7c3aed);color:white;padding:24px;border-radius:12px;text-align:center">
      <h1 style="margin:0 0 8px">SEO Performance Report</h1>
      <p style="margin:0;opacity:0.9">${meta.dateRange} · ${SITE_URL}</p>
    </div>

    <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin:20px 0">
      <div style="background:#eff6ff;padding:16px;border-radius:8px;text-align:center">
        <div style="font-size:28px;font-weight:bold;color:#1d4ed8">${summary.totalImpressions.toLocaleString()}</div>
        <div style="color:#64748b;font-size:13px">Total Impressions</div>
      </div>
      <div style="background:#f0fdf4;padding:16px;border-radius:8px;text-align:center">
        <div style="font-size:28px;font-weight:bold;color:#16a34a">${summary.totalClicks}</div>
        <div style="color:#64748b;font-size:13px">Total Clicks</div>
      </div>
      <div style="background:#fef3c7;padding:16px;border-radius:8px;text-align:center">
        <div style="font-size:28px;font-weight:bold;color:#d97706">${summary.avgCtr}%</div>
        <div style="color:#64748b;font-size:13px">Avg CTR</div>
      </div>
      <div style="background:#fae8ff;padding:16px;border-radius:8px;text-align:center">
        <div style="font-size:28px;font-weight:bold;color:#9333ea">${summary.avgPosition}</div>
        <div style="color:#64748b;font-size:13px">Avg Position</div>
      </div>
    </div>

    <h2 style="color:#1e293b;border-bottom:2px solid #e2e8f0;padding-bottom:8px">Top Searched Terms (by Impressions)</h2>
    <table style="width:100%;border-collapse:collapse;font-size:13px;margin-bottom:24px">
      <thead>
        <tr style="background:#f1f5f9">
          <th style="padding:8px;text-align:left">#</th>
          <th style="padding:8px;text-align:left">Query</th>
          <th style="padding:8px;text-align:right">Impressions</th>
          <th style="padding:8px;text-align:right">Clicks</th>
          <th style="padding:8px;text-align:right">CTR</th>
          <th style="padding:8px;text-align:right">Position</th>
        </tr>
      </thead>
      <tbody>${queryRows}</tbody>
    </table>

    <h2 style="color:#1e293b;border-bottom:2px solid #e2e8f0;padding-bottom:8px">Priority Actions (${topRecs.length})</h2>
    ${recRows}

    <h2 style="color:#1e293b;border-bottom:2px solid #e2e8f0;padding-bottom:8px;margin-top:24px">Pages Needing CTR Improvement</h2>
    <table style="width:100%;border-collapse:collapse;font-size:13px">
      <thead>
        <tr style="background:#f1f5f9">
          <th style="padding:8px;text-align:left">Page</th>
          <th style="padding:8px;text-align:right">Impressions</th>
          <th style="padding:8px;text-align:right">CTR</th>
          <th style="padding:8px;text-align:right">Position</th>
        </tr>
      </thead>
      <tbody>${pageRows}</tbody>
    </table>

    <p style="text-align:center;color:#94a3b8;font-size:12px;margin-top:32px">
      Generated by PrintNPack SEO Automation · ${new Date().toLocaleString('en-GB', { timeZone: 'Europe/Dublin' })}
    </p>
  </div>
</body>
</html>`;
}
