// scripts/generateRegistry.js
const fs = require("fs");
const path = require("path");

const ARTICLES_DIR = path.join(__dirname, "../src/articles");
const REGISTRY_FILE = path.join(__dirname, "../src/articles/registry.js");

function ensureDir(p) {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

function main() {
  ensureDir(ARTICLES_DIR);

  // Złapemy .js i .jsx zaczynające się od "Article"
  const files = fs
    .readdirSync(ARTICLES_DIR)
    .filter((f) => /^Article.*\.(jsx?|tsx?)$/.test(f))
    .sort((a, b) => a.localeCompare(b, "pl"));

  if (files.length === 0) {
    console.warn("⚠️  Brak plików artykułów w src/articles/*.js[x]. Generuję pusty registry.js");
  }

  let imports = "";
  let mapEntries = "";

  for (const file of files) {
    const base = file.replace(/\.(jsx?|tsx?)$/, ""); // np. Articlemanewry...
    imports += `import ${base} from "@/articles/${base}";\n`;
    mapEntries += `  "${base}": ${base},\n`;
  }

  const banner =
    "// ⚠️ AUTO-GENERATED FILE — nie edytuj ręcznie. Edytuj scripts/generateRegistry.js\n";

  const content =
    `${banner}\n` +
    `${imports}\n` +
    `export const ARTICLE_COMPONENTS = {\n${mapEntries}};\n`;

  fs.writeFileSync(REGISTRY_FILE, content, "utf8");
  console.log(`✅ Wygenerowano registry.js dla artykułów: ${files.length}`);
}

try {
  main();
} catch (e) {
  console.error("❌ Błąd generowania registry.js:", e);
  process.exit(1);
}
