/** @type {import('next-sitemap').IConfig} */
const siteUrl = 'https://punktwidzenia.info.pl';

function loadArticles() {
  const mod = require('./src/data/articles.js');
  const arr = Array.isArray(mod) ? mod : (mod.default || []);
  return arr;
}
const articles = loadArticles();
const ARTICLE_MAP = new Map(articles.map(a => [a.link, a])); // np. "/manewry-zapad-2025-..."

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  trailingSlash: false,
  exclude: ['/404', '/ArticleGenerator'],
  autoLastmod: false, // nie nadpisuj datą buildu

  // ZERO additionalPaths – unikamy duplikowania wpisów

  // Ustal lastmod/priority dla ścieżek zebranych automatycznie z buildu (w tym [slug])
  transform: async (config, path) => {
    const a = ARTICLE_MAP.get(path);
    return {
      loc: `${siteUrl}${path}`,
      lastmod: a?.date ? new Date(`${a.date}T12:00:00Z`).toISOString() : undefined,
      changefreq: a ? 'daily' : 'weekly',
      priority: a ? 0.7 : 0.5,
    };
  },
};
