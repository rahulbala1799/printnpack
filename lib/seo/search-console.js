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

function resolveGscFile(dir, key) {
  const standard = path.join(dir, `${FILE_PREFIXES[key]}.csv`);
  if (fs.existsSync(standard)) return standard;

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

  return {
    meta: {
      dateRange,
      searchType,
      importedAt: fs.existsSync(path.join(dir, '.imported'))
        ? fs.readFileSync(path.join(dir, '.imported'), 'utf8').trim()
        : null,
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

  const totalClicks = queries.reduce((sum, q) => sum + q.clicks, 0);
  const totalImpressions = queries.reduce((sum, q) => sum + q.impressions, 0);
  const avgCtr = totalImpressions > 0 ? (totalClicks / totalImpressions) * 100 : 0;
  const avgPosition =
    queries.length > 0
      ? queries.reduce((sum, q) => sum + q.position * q.impressions, 0) / totalImpressions
      : 0;

  const topQueriesByImpressions = [...queries]
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, 50);

  const topPagesByImpressions = [...pages]
    .map((p) => ({ ...p, path: normalizeUrl(p.name) }))
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, 30);

  const highDemandZeroClicks = queries
    .filter((q) => q.impressions >= 30 && q.clicks === 0)
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, 30);

  const opportunities = queries
    .filter((q) => q.impressions >= 20)
    .map((q) => ({ ...q, score: opportunityScore(q) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 40);

  const quickWins = queries
    .filter((q) => q.impressions >= 15 && q.position >= 4 && q.position <= 20)
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, 20);

  const brandedQueries = queries.filter((q) =>
    /print\s*n?\s*pack|printnpack/i.test(q.name)
  );

  const lowCtrPages = pages
    .filter((p) => p.impressions >= 100 && p.ctr < 2)
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, 20)
    .map((p) => ({ ...p, path: normalizeUrl(p.name) }));

  const chartTrend = [...chart].sort((a, b) => a.date.localeCompare(b.date));

  return {
    meta,
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
