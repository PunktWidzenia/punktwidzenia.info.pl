import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const DIR = path.join(ROOT, "src", "articles");

// ————— helpers —————
const rxTitleFromHead =
  /<title>\{\s*(?:"([^"]+)"|'([^']+)')\s*\}<\/title>/i;

const rxOgTitle =
  /<meta[^>]+property\s*=\s*["']og:title["'][^>]+content\s*=\s*\{\s*(?:"([^"]+)"|'([^']+)')\s*\}/i;

const rxPublishedTime =
  /<meta[^>]+property\s*=\s*["']article:published_time["'][^>]+content\s*=\s*\{\s*(?:"([^"]+)"|'([^']+)')\s*\}/i;

function pick(...vals) {
  for (const v of vals) if (v && String(v).trim()) return String(v).trim();
  return "";
}

function humanFromFilename(fname) {
  const base = fname.replace(/^Article/i, "").replace(/\.js$/i, "");
  const withSpaces = base
    .replace(/[-_]+/g, " ")
    .replace(/([a-z])([A-Z0-9])/g, "$1 $2")
    .replace(/([0-9])([A-Za-z])/g, "$1 $2");
  return withSpaces.charAt(0).toUpperCase() + withSpaces.slice(1);
}

function extractTitle(src, fname) {
  const m1 = src.match(rxTitleFromHead);
  const t1 = pick(m1?.[1], m1?.[2]);
  if (t1) return t1;

  const m2 = src.match(rxOgTitle);
  const t2 = pick(m2?.[1], m2?.[2]);
  if (t2) return t2;

  return humanFromFilename(fname);
}

function extractIso(src) {
  const m = src.match(rxPublishedTime);
  return pick(m?.[1], m?.[2]);
}

function isoToYMD(iso) {
  try {
    const d = new Date(iso);
    if (isNaN(d.getTime())) return "";
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  } catch {
    return "";
  }
}

// ucieczka pod cudzysłów w JSX {"..."}
function escDq(str) {
  return String(str).replace(/"/g, '\\"');
}

function buildHeaderHTML({ title, iso, ymd }) {
  // Tytuł podajemy jako literał: {"..."} – bezpieczne dla znaków specjalnych
  const titleNode = title
    ? `{"${escDq(title)}"}`
    : `{/* UZUPEŁNIJ TYTUŁ */ ""}`;

  const timeLine = (iso && ymd)
    ? `
    <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
      <time dateTime="${escDq(iso)}">${ymd}</time>
    </div>`
    : "";

  return `
  <header className="mb-4">
    <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
      ${titleNode}
    </h1>${timeLine}
  </header>`.trim();
}

function inject(content, headerHTML) {
  if (/<h1[^>]*>/.test(content)) return null; // już jest
  const articleOpen = content.match(/<article[^>]*>/);
  if (!articleOpen) return null;
  const pos = articleOpen.index + articleOpen[0].length;
  return content.slice(0, pos) + "\n" + headerHTML + "\n" + content.slice(pos);
}

// ————— main —————
if (!fs.existsSync(DIR)) {
  console.error(`Brak katalogu: ${DIR}`);
  process.exit(1);
}

const files = fs.readdirSync(DIR).filter(f => /^Article.*\.js$/.test(f));
let changed = 0, skipped = 0;

for (const f of files) {
  const p = path.join(DIR, f);
  const src = fs.readFileSync(p, "utf8");

  const title = extractTitle(src, f);
  const iso = extractIso(src);
  const ymd = isoToYMD(iso);

  const headerHTML = buildHeaderHTML({ title, iso, ymd });
  const out = inject(src, headerHTML);
  if (out === null) { skipped++; continue; }

  fs.writeFileSync(p, out, "utf8");
  changed++;
}

console.log(`Zmieniono plików: ${changed}, pominięto (już mają <h1>): ${skipped}`);
