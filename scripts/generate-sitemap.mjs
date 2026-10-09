import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const BASE_URL = 'https://nexora.one';
const TODAY = new Date().toISOString().split('T')[0];

// Priorities and change frequencies based on architectural hierarchy
const ROUTE_CONFIG = {
  '/': { priority: '1.0', changefreq: 'weekly' },
  '/ecosystem': { priority: '0.9', changefreq: 'weekly' },
  '/beauty-ecosystem': { priority: '0.9', changefreq: 'weekly' },
  '/products': { priority: '0.9', changefreq: 'weekly' },
  '/investors': { priority: '0.9', changefreq: 'weekly' },
  '/vision-mission': { priority: '0.8', changefreq: 'monthly' },
  '/who-benefits': { priority: '0.8', changefreq: 'weekly' },
  '/verticals': { priority: '0.8', changefreq: 'weekly' },
  '/insights': { priority: '0.8', changefreq: 'weekly' },
  '/market-research': { priority: '0.7', changefreq: 'monthly' },
  '/about': { priority: '0.7', changefreq: 'monthly' },
  '/policies': { priority: '0.6', changefreq: 'monthly' },
  '/privacy-policy': { priority: '0.5', changefreq: 'monthly' },
  '/terms-and-conditions': { priority: '0.5', changefreq: 'monthly' },
  '/cookie-policy': { priority: '0.5', changefreq: 'monthly' },
  '/refund-cancellation-policy': { priority: '0.5', changefreq: 'monthly' },
  '/disclaimer': { priority: '0.5', changefreq: 'monthly' },
  '/grievance-support': { priority: '0.5', changefreq: 'monthly' },
};

// Aliases that redirect to canonical routes (excluded from sitemap to prevent duplicate indexing)
const EXCLUDED_ALIASES = new Set([
  '/legal',
  '/privacy',
  '/terms',
  '/cookies',
  '/refund-policy',
  '/refunds',
  '/grievance',
  '/support',
  '*',
]);

function extractRoutesFromApp() {
  const appPath = path.join(rootDir, 'src', 'App.tsx');
  if (!fs.existsSync(appPath)) {
    throw new Error(`App.tsx not found at ${appPath}`);
  }

  const appCode = fs.readFileSync(appPath, 'utf8');
  const routeRegex = /<Route\s+path=["']([^"']+)["']/g;
  const foundRoutes = new Set();
  let match;

  while ((match = routeRegex.exec(appCode)) !== null) {
    const routePath = match[1];
    if (!EXCLUDED_ALIASES.has(routePath)) {
      foundRoutes.add(routePath);
    }
  }

  // Ensure root '/' is always included
  foundRoutes.add('/');

  return Array.from(foundRoutes).sort((a, b) => {
    // Sort by priority desc, then alphabetically
    const pA = parseFloat(ROUTE_CONFIG[a]?.priority || '0.5');
    const pB = parseFloat(ROUTE_CONFIG[b]?.priority || '0.5');
    if (pB !== pA) return pB - pA;
    return a.localeCompare(b);
  });
}

function generateSitemapXml(routes) {
  const xmlLines = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ];

  for (const route of routes) {
    const config = ROUTE_CONFIG[route] || { priority: '0.5', changefreq: 'monthly' };
    const loc = route === '/' ? `${BASE_URL}/` : `${BASE_URL}${route}`;

    xmlLines.push('  <url>');
    xmlLines.push(`    <loc>${loc}</loc>`);
    xmlLines.push(`    <lastmod>${TODAY}</lastmod>`);
    xmlLines.push(`    <changefreq>${config.changefreq}</changefreq>`);
    xmlLines.push(`    <priority>${config.priority}</priority>`);
    xmlLines.push('  </url>');
  }

  xmlLines.push('</urlset>');
  xmlLines.push('');

  return xmlLines.join('\n');
}

function main() {
  console.log('[Sitemap] Scanning App.tsx for canonical routes...');
  const routes = extractRoutesFromApp();
  console.log(`[Sitemap] Extracted ${routes.length} canonical routes:`, routes);

  const sitemapXml = generateSitemapXml(routes);
  const outputPath = path.join(rootDir, 'public', 'sitemap.xml');

  fs.writeFileSync(outputPath, sitemapXml, 'utf8');
  console.log(`[Sitemap] Successfully wrote ${routes.length} URLs to ${outputPath}`);
}

main();
