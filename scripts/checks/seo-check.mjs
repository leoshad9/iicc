// SEO regression check (added 2026-09-17).
// Verifies the built site ships SEO essentials: robots.txt, sitemap.xml,
// and metadata/JSON-LD in dist/index.html. Routes in src/data/seo.ts marked
// noindex must NOT appear in sitemap.xml. Run: node scripts/checks/seo-check.mjs
import { readFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..', '..');
const dist = resolve(root, 'dist');

console.log('Root:', root);
console.log('Dist :', dist);

const problems = [];

if (!existsSync(resolve(dist, 'index.html'))) {
  console.error('FAIL dist/index.html missing — run "npm run build" first.');
  process.exit(1);
}

const index = readFileSync(resolve(dist, 'index.html'), 'utf8');
const checks = [
  ['<title> present', index.includes('<title>')],
  ['meta description (length)', /<meta\s+name="description"\s+content="[^"]{50,}/i.test(index)],
  ['canonical link', index.includes('rel="canonical"')],
  ['og:title', index.includes('property="og:title"')],
  ['og:image', index.includes('property="og:image"')],
  ['twitter:card', index.includes('name="twitter:card"')],
  ['JSON-LD structured data', index.includes('application/ld+json')],
];
for (const [label, ok] of checks) {
  console.log(`${ok ? 'PASS' : 'FAIL'} ${label}`);
  if (!ok) problems.push(label);
}

for (const file of ['robots.txt', 'sitemap.xml']) {
  const path = resolve(dist, file);
  const ok = existsSync(path);
  console.log(`${ok ? 'PASS' : 'FAIL'} dist/${file} exists (${path})`);
  if (!ok) problems.push(file);
}

const sitemapPath = resolve(dist, 'sitemap.xml');
if (existsSync(sitemapPath)) {
  const sitemap = readFileSync(sitemapPath, 'utf8');
  const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname.toLowerCase());
  const noindexRoutes = readFileSync(resolve(root, 'src', 'data', 'seo.ts'), 'utf8');
  const noindexPaths = [...noindexRoutes.matchAll(/'(\/[^']*)':\s*\{[^}]*noindex:\s*true/g)].map((m) => m[1].replace(/\/+$/, '').toLowerCase() || '/');
  for (const path of noindexPaths) {
    const ok = !sitemapUrls.includes(path);
    console.log(`${ok ? 'PASS' : 'FAIL'} noindex route /${path === '/' ? '' : path} absent from sitemap`);
    if (!ok) problems.push(`sitemap contains noindex route /${path === '/' ? '' : path}`);
  }
}

if (problems.length) {
  console.error(`\nSEO check failed: ${problems.join(', ')}`);
  process.exit(1);
}
console.log('\nAll SEO checks passed.');
