// Generates the static fallback Open Graph image (public/og-default.png).
// Per-article OG generation comes in M7; this is the site-wide fallback (§8).
// Run with: node scripts/make-og.mjs
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#14110f"/>
  <rect x="0" y="0" width="14" height="630" fill="#fb923c"/>
  <text x="80" y="250" fill="#f3efe9" font-family="Georgia, serif" font-size="84" font-weight="700">Iulian Malovanyi</text>
  <text x="80" y="330" fill="#fb923c" font-family="Helvetica, Arial, sans-serif" font-size="34" font-weight="600" letter-spacing="2">PRODUCT MANAGER</text>
  <text x="80" y="430" fill="#a89e90" font-family="Helvetica, Arial, sans-serif" font-size="30">Building at the intersection of software and hardware —</text>
  <text x="80" y="475" fill="#a89e90" font-family="Helvetica, Arial, sans-serif" font-size="30">regulated digital health to connected products.</text>
</svg>`;

const out = fileURLToPath(new URL('../public/og-default.png', import.meta.url));
await sharp(Buffer.from(svg)).png().toFile(out);
console.log('Wrote', out);
