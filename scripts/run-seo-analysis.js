#!/usr/bin/env node
/**
 * Run SEO analysis on imported Search Console data.
 * Usage: node scripts/run-seo-analysis.js
 */

import {
  loadSearchConsoleData,
  analyzeSearchConsole,
  hasSearchConsoleData,
} from '../lib/seo/search-console.js';
import {
  generateRecommendations,
  summarizeRecommendations,
} from '../lib/seo/recommendations.js';

function main() {
  if (!hasSearchConsoleData()) {
    console.error('No Search Console data found. Run: node scripts/import-search-console.js');
    process.exit(1);
  }

  const data = loadSearchConsoleData();
  const analysis = analyzeSearchConsole(data);
  const recommendations = generateRecommendations(analysis);
  const recSummary = summarizeRecommendations(recommendations);

  console.log('\n═══════════════════════════════════════════');
  console.log('  PrintNPack SEO Analysis');
  console.log(`  Period: ${analysis.meta.dateRange}`);
  console.log('═══════════════════════════════════════════\n');

  console.log('SUMMARY');
  console.log(`  Impressions: ${analysis.summary.totalImpressions.toLocaleString()}`);
  console.log(`  Clicks:      ${analysis.summary.totalClicks}`);
  console.log(`  Avg CTR:     ${analysis.summary.avgCtr}%`);
  console.log(`  Avg Position: ${analysis.summary.avgPosition}`);
  console.log(`  Queries tracked: ${analysis.summary.totalQueries}`);

  console.log('\n── TOP 10 HEAVILY SEARCHED TERMS ──');
  analysis.topQueriesByImpressions.slice(0, 10).forEach((q, i) => {
    console.log(
      `  ${String(i + 1).padStart(2)}. ${q.name.padEnd(35)} imp: ${String(q.impressions).padStart(4)}  clicks: ${q.clicks}  pos: ${q.position.toFixed(1)}`
    );
  });

  console.log('\n── HIGH DEMAND, ZERO CLICKS ──');
  analysis.highDemandZeroClicks.slice(0, 10).forEach((q, i) => {
    console.log(`  ${i + 1}. "${q.name}" — ${q.impressions} impressions, position ${q.position.toFixed(1)}`);
  });

  console.log('\n── PRIORITY RECOMMENDATIONS ──');
  console.log(`  Critical: ${recSummary.critical} | High: ${recSummary.high} | Content gaps: ${recSummary.contentGaps}`);
  recommendations.slice(0, 10).forEach((r, i) => {
    console.log(`\n  ${i + 1}. [${r.priority.toUpperCase()}] "${r.query}"`);
    console.log(`     ${r.impressions} impressions · pos ${r.position.toFixed(1)}`);
    if (r.targetPage) console.log(`     → ${r.targetPage}`);
    r.actions.slice(0, 2).forEach((a) => console.log(`     • ${a}`));
  });

  console.log('\n');
}

main();
