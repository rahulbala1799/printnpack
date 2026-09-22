import { withAuth } from '../../../../lib/withAuth.js';
import { getGscDataDir, savePerformanceExport } from '../../../../lib/seo/search-console.js';
import { describePerformanceExport, extractGscZip } from '../../../../lib/seo/gsc-zip.js';
import fs from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '8mb',
    },
  },
};

const ALLOWED_PREFIXES = {
  queries: 'Queries',
  pages: 'Pages',
  chart: 'Chart',
  countries: 'Countries',
  devices: 'Devices',
  filters: 'Filters',
  searchAppearance: 'Search_appearance',
};

async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    if (req.body?.zip) {
      const buffer = Buffer.from(String(req.body.zip), 'base64');
      const files = extractGscZip(buffer);
      const described = describePerformanceExport(files);
      const { saved, meta } = savePerformanceExport(files, described.period, {
        searchType: described.searchType,
        startDate: described.startDate,
        endDate: described.endDate,
        dayCount: described.dayCount,
      });

      return res.status(200).json({
        success: true,
        uploaded: saved,
        period: meta.id,
        label: meta.label,
        dateRange: meta.filterValue,
        startDate: meta.startDate,
        endDate: meta.endDate,
        searchType: meta.searchType,
        importedAt: meta.importedAt,
      });
    }

    const { files } = req.body || {};
    if (!files || typeof files !== 'object') {
      return res.status(400).json({
        error: 'Upload the Search Console zip export',
      });
    }

    const dest = getGscDataDir();
    fs.mkdirSync(dest, { recursive: true });

    let uploaded = 0;
    for (const [key, content] of Object.entries(files)) {
      const prefix = ALLOWED_PREFIXES[key];
      if (!prefix || typeof content !== 'string') continue;
      fs.writeFileSync(path.join(dest, `${prefix}.csv`), `${content.trim()}\n`, 'utf8');
      uploaded += 1;
    }

    if (uploaded === 0) {
      return res.status(400).json({
        error: 'No valid files uploaded',
        acceptedKeys: Object.keys(ALLOWED_PREFIXES),
      });
    }

    fs.writeFileSync(path.join(dest, '.imported'), new Date().toISOString());
    return res.status(200).json({
      success: true,
      uploaded,
      importedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error('SEO upload error:', error);
    const message = error.message || 'Failed to save Search Console data';
    const clientError = /zip|Queries\.csv|Filters\.csv|valid zip/i.test(message);
    return res.status(clientError ? 400 : 500).json({
      error: clientError ? message : 'Failed to save Search Console data',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
}

export default withAuth(handler, { roles: ['admin'] });
