const fs = require("fs");
const path = require("path");

const ARTICLES_DIR = path.join(__dirname, "../src/articles");
const files = fs.readdirSync(ARTICLES_DIR).filter(f => f.endsWith(".js"));

for (const file of files) {
  const filePath = path.join(ARTICLES_DIR, file);
  let content = fs.readFileSync(filePath, "utf8");

  // regex usuwający <Head>...</Head> razem z zawartością
  const newContent = content.replace(/<Head>[\s\S]*?<\/Head>\s*/g, "");

  if (newContent !== content) {
    fs.writeFileSync(filePath, newContent, "utf8");
    console.log(`✅ Usunięto blok <Head> w: ${file}`);
  }
}
