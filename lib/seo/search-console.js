import fs from 'fs';
import path from 'path';

const GSC_DIR = path.join(process.cwd(), 'data', 'search-console');

const FILE_PREFIXES = {
  queries: 'Queries',
  pages: 'Pages',
  chart: 'Chart',
  countries: 'Countries',
  devices: 'Devices',
  filters: 'Filters',
  searchAppearance: 'Search_appearance',
};

export const PERFORMANCE_PERIODS = [
  { id: '24h', label: 'Last 24 hours' },
  { id: '7d', label: 'Last 7 days' },
  { id: '28d', label: 'Last 28 days' },
  { id: '3m', label: 'Last 3 months' },
];

const PERIOD_THRESHOLDS = {
  '24h': { zeroClick: 2, opportunity: 2, quickWin: 2, lowCtrPage: 5, recOpportunity: 3, criticalImp: 8, highImp: 5, ctrImp: 5, mediumImp: 3 },
  '7d': { zeroClick: 5, opportunity: 5, quickWin: 5, lowCtrPage: 20, recOpportunity: 8, criticalImp: 15, highImp: 10, ctrImp: 8, mediumImp: 5 },
  '28d': { zeroClick: 15, opportunity: 10, quickWin: 8, lowCtrPage: 50, recOpportunity: 20, criticalImp: 40, highImp: 25, ctrImp: 15, mediumImp: 10 },
  '3m': { zeroClick: 30, opportunity: 20, quickWin: 15, lowCtrPage: 100, recOpportunity: 40, criticalImp: 80, highImp: 50, ctrImp: 30, mediumImp: 20 },
};

export function thresholdsForPeriod(periodId) {
  return PERIOD_THRESHOLDS[periodId] || PERIOD_THRESHOLDS['28d'];
}

export function detectPerformancePeriod({ dateFilter = '', chartDates = [] } = {}) {
  const value = String(dateFilter || '').trim();
  const lower = value.toLowerCase();
  const known = [
    [/24\s*hours?/, '24h', 'Last 24 hours'],
    [/7\s*days?/, '7d', 'Last 7 days'],
    [/28\s*days?/, '28d', 'Last 28 days'],
    [/3\s*months?/, '3m', 'Last 3 months'],
  ];

  for (const [pattern, id, label] of known) {
    if (pattern.test(lower)) return { id, label, filterValue: value || label };
  }

  const span = chartSpanDays(chartDates);
  if (span != null) {
    if (span <= 2) return { id: '24h', label: 'Last 24 hours', filterValue: value || 'Last 24 hours' };
    if (span <= 10) return { id: '7d', label: 'Last 7 days', filterValue: value || 'Last 7 days' };
    if (span <= 35) return { id: '28d', label: 'Last 28 days', filterValue: value || 'Last 28 days' };
    if (span <= 100) return { id: '3m', label: 'Last 3 months', filterValue: value || 'Last 3 months' };
  }

  return { id: 'custom', label: value || 'Custom range', filterValue: value || 'Custom range' };
}

function chartSpanDays(chartDates) {
  const days = [...new Set(
    (chartDates || [])
      .map((value) => String(value).slice(0, 10))
      .filter((value) => /^\d{4}-\d{2}-\d{2}$/.test(value))
  )].sort();
  if (!days.length) return null;
  const start = Date.parse(`${days[0]}T00:00:00Z`);
  const end = Date.parse(`${days[days.length - 1]}T00:00:00Z`);
  if (Number.isNaN(start) || Number.isNaN(end)) return null;
  return Math.round((end - start) / 86400000) + 1;
}

function periodFolder(periodId) {
  return path.join(GSC_DIR, periodId);
}

function readImportedAt(dir) {
  const stamp = path.join(dir, '.imported');
  return fs.existsSync(stamp) ? fs.readFileSync(stamp, 'utf8').trim() : null;
}

function readStoredMeta(dir) {
  const metaPath = path.join(dir, 'meta.json');
  if (!fs.existsSync(metaPath)) return null;
  try {
    return JSON.parse(fs.readFileSync(metaPath, 'utf8'));
  } catch {
    return null;
  }
}

function legacyPeriodId() {
  if (!hasSearchConsoleData(GSC_DIR)) return null;
  const filters = readCsv(resolveGscFile(GSC_DIR, 'filters'));
  const dateRange = filters.find((row) => row.filter === 'Date')?.value || '';
  return detectPerformancePeriod({ dateFilter: dateRange }).id;
}

export function resolvePeriodDir(periodId) {
  if (!periodId) return GSC_DIR;
  const folder = periodFolder(periodId);
  if (hasSearchConsoleData(folder)) return folder;
  if (legacyPeriodId() === periodId) return GSC_DIR;
  return folder;
}

export function listPerformancePeriods() {
  const legacyId = legacyPeriodId();

  return PERFORMANCE_PERIODS.map((period) => {
    const folder = periodFolder(period.id);
    const usesLegacy = !hasSearchConsoleData(folder) && legacyId === period.id;
    const dir = usesLegacy ? GSC_DIR : folder;
    const available = hasSearchConsoleData(dir);
    const stored = available ? readStoredMeta(dir) : null;
    const filters = available ? readCsv(resolveGscFile(dir, 'filters')) : [];
    const dateRange = filters.find((row) => row.filter === 'Date')?.value || stored?.filterValue || period.label;

    return {
      id: period.id,
      label: period.label,
      available,
      dateRange,
      searchType: filters.find((row) => row.filter === 'Search type')?.value || stored?.searchType || null,
      importedAt: stored?.importedAt || (available ? readImportedAt(dir) : null),
      startDate: stored?.startDate || null,
      endDate: stored?.endDate || null,
    };
  });
}

export function getDefaultPeriodId() {
  const available = listPerformancePeriods().filter((period) => period.available);
  if (!available.length) return null;
  available.sort((a, b) => String(b.importedAt || '').localeCompare(String(a.importedAt || '')));
  return available[0].id;
}

export function savePerformanceExport(fileContents, period, extra = {}) {
  const dir = periodFolder(period.id);
  fs.mkdirSync(dir, { recursive: true });

  let saved = 0;
  for (const [key, content] of Object.entries(fileContents)) {
    const prefix = FILE_PREFIXES[key];
    if (!prefix || typeof content !== 'string' || !content.trim()) continue;
    fs.writeFileSync(path.join(dir, `${prefix}.csv`), `${content.trim()}\n`, 'utf8');
    saved += 1;
  }

  const importedAt = new Date().toISOString();
  const meta = {
    id: period.id,
    label: period.label,
    filterValue: period.filterValue || period.label,
    importedAt,
    ...extra,
  };
  fs.writeFileSync(path.join(dir, '.imported'), importedAt);
  fs.writeFileSync(path.join(dir, 'meta.json'), `${JSON.stringify(meta, null, 2)}\n`);
  return { saved, meta };
}

function resolveGscFile(dir, key) {
  const standard = path.join(dir, `${FILE_PREFIXES[key]}.csv`);
  if (fs.existsSync(standard)) return standard;
  if (!fs.existsSync(dir)) return standard;

  const prefix = FILE_PREFIXES[key];
  const match = fs.readdirSync(dir).find((f) => f.startsWith(prefix) && f.endsWith('.csv'));
  return match ? path.join(dir, match) : standard;
}

/** Parse a single CSV line respecting quoted fields. */
function parseCsvLine(line) {
  const fields = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];
    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      fields.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  fields.push(current.trim());
  return fields;
}

function parsePercent(value) {
  if (!value) return 0;
  return parseFloat(String(value).replace('%', '')) || 0;
}

function parseMetricRow(fields, nameIndex = 0) {
  if (fields.length < 5) return null;
  return {
    name: fields[nameIndex].replace(/^"|"$/g, '').trim(),
    clicks: parseInt(fields[nameIndex + 1], 10) || 0,
    impressions: parseInt(fields[nameIndex + 2], 10) || 0,
    ctr: parsePercent(fields[nameIndex + 3]),
    position: parseFloat(fields[nameIndex + 4]) || 0,
  };
}

function readCsv(filePath) {
  if (!fs.existsSync(filePath)) return [];
  const content = fs.readFileSync(filePath, 'utf8').trim();
  if (!content) return [];

  const lines = content.split(/\r?\n/).filter(Boolean);
  if (lines.length < 2) return [];

  const header = parseCsvLine(lines[0]);
  const rows = [];

  for (let i = 1; i < lines.length; i += 1) {
    const fields = parseCsvLine(lines[i]);
    if (header[0] === 'Date') {
      rows.push({
        date: fields[0],
        clicks: parseInt(fields[1], 10) || 0,
        impressions: parseInt(fields[2], 10) || 0,
        ctr: parsePercent(fields[3]),
        position: parseFloat(fields[4]) || 0,
      });
    } else if (header[0] === 'Filter') {
      rows.push({ filter: fields[0], value: fields[1] });
    } else {
      const row = parseMetricRow(fields);
      if (row) rows.push(row);
    }
  }

  return rows;
}

export function getGscDataDir() {
  return GSC_DIR;
}

export function loadSearchConsoleData(dir = GSC_DIR) {
  const queries = readCsv(resolveGscFile(dir, 'queries'));
  const pages = readCsv(resolveGscFile(dir, 'pages'));
  const chart = readCsv(resolveGscFile(dir, 'chart'));
  const countries = readCsv(resolveGscFile(dir, 'countries'));
  const devices = readCsv(resolveGscFile(dir, 'devices'));
  const filters = readCsv(resolveGscFile(dir, 'filters'));
  const searchAppearance = readCsv(resolveGscFile(dir, 'searchAppearance'));

  const dateRange = filters.find((f) => f.filter === 'Date')?.value || 'Unknown';
  const searchType = filters.find((f) => f.filter === 'Search type')?.value || 'Web';
  const chartDates = chart.map((row) => row.date);
  const detected = detectPerformancePeriod({ dateFilter: dateRange, chartDates });
  const days = [...new Set(
    chartDates.map((value) => String(value).slice(0, 10)).filter((value) => /^\d{4}-\d{2}-\d{2}$/.test(value))
  )].sort();
  const stored = readStoredMeta(dir);

  return {
    meta: {
      periodId: stored?.id || detected.id,
      periodLabel: stored?.label || detected.label,
      dateRange: dateRange || detected.label,
      searchType,
      startDate: stored?.startDate || days[0] || null,
      endDate: stored?.endDate || days[days.length - 1] || null,
      dayCount: days.length || null,
      importedAt: stored?.importedAt || readImportedAt(dir),
      dataDir: dir,
    },
    queries,
    pages,
    chart,
    countries,
    devices,
    searchAppearance,
  };
}

function normalizeUrl(url) {
  return url
    .replace(/^https?:\/\/(www\.)?printnpack\.ie/i, '')
    .replace(/\/$/, '')
    .toLowerCase() || '/';
}

function opportunityScore(row) {
  // Higher impressions + worse position + lower CTR = bigger opportunity
  const impressionWeight = Math.log10(row.impressions + 1) * 30;
  const positionWeight = Math.min(row.position, 100) * 0.8;
  const ctrPenalty = Math.max(0, 5 - row.ctr) * 5;
  return Math.round(impressionWeight + positionWeight + ctrPenalty);
}

export function analyzeSearchConsole(data) {
  const { queries, pages, chart, countries, devices, searchAppearance, meta } = data;
  const thresholds = thresholdsForPeriod(meta?.periodId);

  const totalSource = chart.length ? chart : queries;
  const totalClicks = totalSource.reduce((sum, row) => sum + row.clicks, 0);
  const totalImpressions = totalSource.reduce((sum, row) => sum + row.impressions, 0);
  const avgCtr = totalImpressions > 0 ? (totalClicks / totalImpressions) * 100 : 0;
  const avgPosition = totalImpressions > 0
    ? totalSource.reduce((sum, row) => sum + row.position * row.impressions, 0) / totalImpressions
    : 0;

  const topQueriesByImpressions = [...queries]
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, 50);

  const topPagesByImpressions = [...pages]
    .map((p) => ({ ...p, path: normalizeUrl(p.name) }))
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, 30);

  const highDemandZeroClicks = queries
    .filter((q) => q.impressions >= thresholds.zeroClick && q.clicks === 0)
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, 30);

  const opportunities = queries
    .filter((q) => q.impressions >= thresholds.opportunity)
    .map((q) => ({ ...q, score: opportunityScore(q) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 40);

  const quickWins = queries
    .filter((q) => q.impressions >= thresholds.quickWin && q.position >= 4 && q.position <= 20)
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, 20);

  const brandedQueries = queries.filter((q) =>
    /print\s*n?\s*pack|printnpack/i.test(q.name)
  );

  const lowCtrPages = pages
    .filter((p) => p.impressions >= thresholds.lowCtrPage && p.ctr < 2)
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, 20)
    .map((p) => ({ ...p, path: normalizeUrl(p.name) }));

  const chartTrend = [...chart].sort((a, b) => a.date.localeCompare(b.date));

  return {
    meta,
    thresholds,
    summary: {
      totalQueries: queries.length,
      totalPages: pages.length,
      totalClicks,
      totalImpressions,
      avgCtr: Math.round(avgCtr * 100) / 100,
      avgPosition: Math.round(avgPosition * 100) / 100,
      brandedClicks: brandedQueries.reduce((s, q) => s + q.clicks, 0),
      brandedImpressions: brandedQueries.reduce((s, q) => s + q.impressions, 0),
    },
    topQueriesByImpressions,
    topPagesByImpressions,
    highDemandZeroClicks,
    opportunities,
    quickWins,
    lowCtrPages,
    countries: countries.slice(0, 15),
    devices,
    searchAppearance,
    chartTrend,
  };
}

export function hasSearchConsoleData(dir = GSC_DIR) {
  return fs.existsSync(resolveGscFile(dir, 'queries'));
}

export function loadPeriodBundle(periodId) {
  const periods = listPerformancePeriods();
  const selected = periodId || getDefaultPeriodId();
  if (!selected) return { periods, period: null, data: null };

  const dir = resolvePeriodDir(selected);
  if (!hasSearchConsoleData(dir)) return { periods, period: selected, data: null };
  return { periods, period: selected, data: loadSearchConsoleData(dir) };
}
