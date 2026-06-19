import fs from 'fs';
import path from 'path';
import { withAuth } from '../../../../lib/withAuth.js';
import { getGscDataDir } from '../../../../lib/seo/search-console.js';

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

  const { files } = req.body || {};
  if (!files || typeof files !== 'object') {
    return res.status(400).json({
      error: 'Invalid payload. Expected { files: { queries: "csv content", ... } }',
    });
  }

  try {
    const dest = getGscDataDir();
    fs.mkdirSync(dest, { recursive: true });

    let uploaded = 0;
    for (const [key, content] of Object.entries(files)) {
      const prefix = ALLOWED_PREFIXES[key];
      if (!prefix || typeof content !== 'string') continue;

      const destPath = path.join(dest, `${prefix}.csv`);
      fs.writeFileSync(destPath, content.trim() + '\n', 'utf8');
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
    return res.status(500).json({
      error: 'Failed to save Search Console data',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
}

export default withAuth(handler, { roles: ['admin'] });
