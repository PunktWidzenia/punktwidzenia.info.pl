const fs = require("fs");
const path = require("path");

const ARTICLES_DIR = path.join(__dirname, "../src/articles");

const files = fs.readdirSync(ARTICLES_DIR).filter(f => f.endsWith(".js"));

for (const file of files) {
  const filePath = path.join(ARTICLES_DIR, file);
  let content = fs.readFileSync(filePath, "utf8");

  // usuń linię import Head from "next/head";
  const newContent = content.replace(/^import\s+Head\s+from\s+["']next\/head["'];\s*\n?/m, "");

  if (newContent !== content) {
    fs.writeFileSync(filePath, newContent, "utf8");
    console.log(`✅ Usunięto import Head w: ${file}`);
  }
}
