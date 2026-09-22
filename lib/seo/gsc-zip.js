import zlib from 'zlib';
import { detectPerformancePeriod } from './search-console.js';

const FILE_KEYS = {
  queries: 'queries',
  pages: 'pages',
  chart: 'chart',
  countries: 'countries',
  devices: 'devices',
  filters: 'filters',
  searchappearance: 'searchAppearance',
};

function canonicalKey(filename) {
  const base = filename
    .split(/[/\\]/)
    .pop()
    .toLowerCase()
    .replace(/\.csv$/, '')
    .replace(/[^a-z0-9]+/g, '');
  return FILE_KEYS[base] || null;
}

function findEocd(buffer) {
  const min = Math.max(0, buffer.length - 22 - 65535);
  for (let offset = buffer.length - 22; offset >= min; offset -= 1) {
    if (buffer.readUInt32LE(offset) === 0x06054b50) return offset;
  }
  return -1;
}

export function extractGscZip(buffer) {
  if (!Buffer.isBuffer(buffer) || buffer.length < 22) {
    throw new Error('Upload a Search Console .zip export');
  }

  const eocd = findEocd(buffer);
  if (eocd < 0) throw new Error('That file is not a valid zip archive');

  const cdSize = buffer.readUInt32LE(eocd + 12);
  const cdOffset = buffer.readUInt32LE(eocd + 16);
  const files = {};
  let offset = cdOffset;
  const end = cdOffset + cdSize;

  while (offset + 46 <= end) {
    if (buffer.readUInt32LE(offset) !== 0x02014b50) break;

    const method = buffer.readUInt16LE(offset + 10);
    const compSize = buffer.readUInt32LE(offset + 20);
    const nameLen = buffer.readUInt16LE(offset + 28);
    const extraLen = buffer.readUInt16LE(offset + 30);
    const commentLen = buffer.readUInt16LE(offset + 32);
    const localOffset = buffer.readUInt32LE(offset + 42);
    const name = buffer.slice(offset + 46, offset + 46 + nameLen).toString('utf8');
    const key = canonicalKey(name);

    if (key && localOffset + 30 <= buffer.length) {
      const localNameLen = buffer.readUInt16LE(localOffset + 26);
      const localExtraLen = buffer.readUInt16LE(localOffset + 28);
      const dataStart = localOffset + 30 + localNameLen + localExtraLen;
      const compressed = buffer.slice(dataStart, dataStart + compSize);
      let content = '';
      if (method === 0) content = compressed.toString('utf8');
      else if (method === 8) content = zlib.inflateRawSync(compressed).toString('utf8');
      else throw new Error(`Cannot read ${name} from this zip`);
      files[key] = content;
    }

    offset += 46 + nameLen + extraLen + commentLen;
  }

  if (!files.queries || !files.filters) {
    throw new Error('Zip must be a Performance on Search export, including Queries.csv and Filters.csv');
  }

  return files;
}

function csvRows(content) {
  return String(content || '')
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
}

function filterValue(content, name) {
  for (const line of csvRows(content).slice(1)) {
    const comma = line.indexOf(',');
    if (comma < 0) continue;
    const filter = line.slice(0, comma).trim();
    const value = line.slice(comma + 1).trim();
    if (filter.toLowerCase() === name.toLowerCase()) return value;
  }
  return '';
}

function chartDates(content) {
  return csvRows(content)
    .slice(1)
    .map((line) => line.split(',')[0]?.trim())
    .filter(Boolean);
}

export function describePerformanceExport(files) {
  const dateFilter = filterValue(files.filters, 'Date');
  const searchType = filterValue(files.filters, 'Search type') || 'Web';
  const dates = chartDates(files.chart);
  const days = [...new Set(dates.map((value) => value.slice(0, 10)).filter((value) => /^\d{4}-\d{2}-\d{2}$/.test(value)))].sort();
  const period = detectPerformancePeriod({ dateFilter, chartDates: dates });

  return {
    period,
    searchType,
    startDate: days[0] || null,
    endDate: days[days.length - 1] || null,
    dayCount: days.length || null,
  };
}
