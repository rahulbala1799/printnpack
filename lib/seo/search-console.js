import fs from 'fs';
import path from 'path';
import { getRow, getRows, query } from '../database.js';

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

function diskPeriodSummary(period) {
  const folder = periodFolder(period.id);
  const usesLegacy = !hasSearchConsoleData(folder) && legacyPeriodId() === period.id;
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
}

function rowToPeriod(row, fallbackLabel) {
  return {
    id: row.period_id,
    label: row.label || fallbackLabel || row.filter_value || row.period_id,
    available: true,
    dateRange: row.filter_value || row.label || fallbackLabel || row.period_id,
    searchType: row.search_type || null,
    importedAt: row.imported_at ? new Date(row.imported_at).toISOString() : null,
    startDate: row.start_date || null,
    endDate: row.end_date || null,
  };
}

export async function listPerformancePeriods() {
  const dbRows = await listDbExports();
  const dbById = new Map(dbRows.map((row) => [row.period_id, row]));

  const known = PERFORMANCE_PERIODS.map((period) => {
    const db = dbById.get(period.id);
    return db ? rowToPeriod(db, period.label) : diskPeriodSummary(period);
  });

  const extras = dbRows
    .filter((row) => !PERFORMANCE_PERIODS.some((period) => period.id === row.period_id))
    .map((row) => rowToPeriod(row));

  return [...known, ...extras];
}

export async function getDefaultPeriodId() {
  const available = (await listPerformancePeriods()).filter((period) => period.available);
  if (!available.length) return null;
  available.sort((a, b) => String(b.importedAt || '').localeCompare(String(a.importedAt || '')));
  return available[0].id;
}

function collectSavedFiles(fileContents) {
  const files = {};
  let saved = 0;
  for (const [key, content] of Object.entries(fileContents || {})) {
    const prefix = FILE_PREFIXES[key];
    if (!prefix || typeof content !== 'string' || !content.trim()) continue;
    files[key] = `${content.trim()}\n`;
    saved += 1;
  }
  return { files, saved };
}

function writeExportToDisk(periodId, files, meta) {
  const dir = periodFolder(periodId);
  fs.mkdirSync(dir, { recursive: true });
  for (const [key, content] of Object.entries(files)) {
    fs.writeFileSync(path.join(dir, `${FILE_PREFIXES[key]}.csv`), content, 'utf8');
  }
  fs.writeFileSync(path.join(dir, '.imported'), meta.importedAt);
  fs.writeFileSync(path.join(dir, 'meta.json'), `${JSON.stringify(meta, null, 2)}\n`);
}

export async function savePerformanceExport(fileContents, period, extra = {}) {
  const { files, saved } = collectSavedFiles(fileContents);
  const importedAt = new Date().toISOString();
  const meta = {
    id: period.id,
    label: period.label,
    filterValue: period.filterValue || period.label,
    importedAt,
    ...extra,
  };

  await persistExportToDb(period.id, files, meta);

  try {
    writeExportToDisk(period.id, files, meta);
  } catch (error) {
    if (error.code !== 'EROFS' && error.code !== 'EACCES') throw error;
  }

  return { saved, meta };
}

async function ensureExportTable() {
  await query('CREATE SCHEMA IF NOT EXISTS analytics');
  await query(`
    CREATE TABLE IF NOT EXISTS analytics.search_console_exports (
      period_id VARCHAR(32) PRIMARY KEY,
      label TEXT,
      filter_value TEXT,
      search_type TEXT,
      start_date TEXT,
      end_date TEXT,
      day_count INTEGER,
      imported_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      files JSONB NOT NULL DEFAULT '{}'::jsonb
    )
  `);
}

async function persistExportToDb(periodId, files, meta) {
  if (!process.env.DATABASE_URL) return;
  await ensureExportTable();
  await query(
    `
    INSERT INTO analytics.search_console_exports (
      period_id, label, filter_value, search_type, start_date, end_date, day_count, imported_at, files
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9::jsonb)
    ON CONFLICT (period_id) DO UPDATE SET
      label = EXCLUDED.label,
      filter_value = EXCLUDED.filter_value,
      search_type = EXCLUDED.search_type,
      start_date = EXCLUDED.start_date,
      end_date = EXCLUDED.end_date,
      day_count = EXCLUDED.day_count,
      imported_at = EXCLUDED.imported_at,
      files = EXCLUDED.files
    `,
    [
      periodId,
      meta.label || null,
      meta.filterValue || null,
      meta.searchType || null,
      meta.startDate || null,
      meta.endDate || null,
      meta.dayCount || null,
      meta.importedAt,
      JSON.stringify(files),
    ]
  );
}

async function listDbExports() {
  if (!process.env.DATABASE_URL) return [];
  try {
    await ensureExportTable();
    return await getRows(`
      SELECT period_id, label, filter_value, search_type, start_date, end_date, day_count, imported_at
      FROM analytics.search_console_exports
    `);
  } catch (error) {
    console.error('Search Console list error:', error);
    return [];
  }
}

async function fetchDbExport(periodId) {
  if (!process.env.DATABASE_URL || !periodId) return null;
  try {
    await ensureExportTable();
    return await getRow(
      `
      SELECT period_id, label, filter_value, search_type, start_date, end_date, day_count, imported_at, files
      FROM analytics.search_console_exports
      WHERE period_id = $1
      `,
      [periodId]
    );
  } catch (error) {
    console.error('Search Console load error:', error);
    return null;
  }
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

function parseCsvContent(content) {
  const trimmed = String(content || '').trim();
  if (!trimmed) return [];

  const lines = trimmed.split(/\r?\n/).filter(Boolean);
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

function readCsv(filePath) {
  if (!fs.existsSync(filePath)) return [];
  return parseCsvContent(fs.readFileSync(filePath, 'utf8'));
}

export function getGscDataDir() {
  return GSC_DIR;
}

function assembleSearchConsoleData({ queries, pages, chart, countries, devices, filters, searchAppearance, stored, dataDir }) {
  const dateRange = filters.find((f) => f.filter === 'Date')?.value || 'Unknown';
  const searchType = filters.find((f) => f.filter === 'Search type')?.value || stored?.searchType || 'Web';
  const chartDates = chart.map((row) => row.date);
  const detected = detectPerformancePeriod({ dateFilter: dateRange, chartDates });
  const days = [...new Set(
    chartDates.map((value) => String(value).slice(0, 10)).filter((value) => /^\d{4}-\d{2}-\d{2}$/.test(value))
  )].sort();

  return {
    meta: {
      periodId: stored?.id || detected.id,
      periodLabel: stored?.label || detected.label,
      dateRange: dateRange || detected.label,
      searchType,
      startDate: stored?.startDate || days[0] || null,
      endDate: stored?.endDate || days[days.length - 1] || null,
      dayCount: days.length || null,
      importedAt: stored?.importedAt || null,
      dataDir,
    },
    queries,
    pages,
    chart,
    countries,
    devices,
    searchAppearance,
  };
}

export function loadSearchConsoleData(dir = GSC_DIR) {
  return assembleSearchConsoleData({
    queries: readCsv(resolveGscFile(dir, 'queries')),
    pages: readCsv(resolveGscFile(dir, 'pages')),
    chart: readCsv(resolveGscFile(dir, 'chart')),
    countries: readCsv(resolveGscFile(dir, 'countries')),
    devices: readCsv(resolveGscFile(dir, 'devices')),
    filters: readCsv(resolveGscFile(dir, 'filters')),
    searchAppearance: readCsv(resolveGscFile(dir, 'searchAppearance')),
    stored: readStoredMeta(dir),
    dataDir: dir,
  });
}

function loadSearchConsoleDataFromFiles(files = {}, stored = null) {
  return assembleSearchConsoleData({
    queries: parseCsvContent(files.queries),
    pages: parseCsvContent(files.pages),
    chart: parseCsvContent(files.chart),
    countries: parseCsvContent(files.countries),
    devices: parseCsvContent(files.devices),
    filters: parseCsvContent(files.filters),
    searchAppearance: parseCsvContent(files.searchAppearance),
    stored,
    dataDir: 'database',
  });
}

export async function loadSearchConsoleDataForPeriod(periodId) {
  const db = await fetchDbExport(periodId);
  if (db?.files) {
    return loadSearchConsoleDataFromFiles(db.files, {
      id: db.period_id,
      label: db.label,
      filterValue: db.filter_value,
      searchType: db.search_type,
      startDate: db.start_date,
      endDate: db.end_date,
      importedAt: db.imported_at ? new Date(db.imported_at).toISOString() : null,
    });
  }

  const dir = resolvePeriodDir(periodId);
  if (!hasSearchConsoleData(dir)) return null;
  return loadSearchConsoleData(dir);
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

export async function loadPeriodBundle(periodId) {
  const periods = await listPerformancePeriods();
  const selected = periodId || await getDefaultPeriodId();
  if (!selected) return { periods, period: null, data: null };

  const data = await loadSearchConsoleDataForPeriod(selected);
  if (!data) return { periods, period: selected, data: null };
  return { periods, period: selected, data };
}
