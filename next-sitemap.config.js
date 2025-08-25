/** @type {import('next-sitemap').IConfig} */
const siteUrl = 'https://punktwidzenia.info.pl';

function loadArticles() {
  const mod = require('./src/data/articles.js');
  return Array.isArray(mod) ? mod : (mod.default || []);
}

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  trailingSlash: false,
  exclude: ['/404', '/ArticleGenerator'],

  // KLUCZ: nie nadpisuj lastmod datą builda
  autoLastmod: false,

  // KLUCZ: wstrzykuj lastmod z articles.js
  additionalPaths: async () => {
    const articles = loadArticles();
    return articles.map((a) => ({
      loc: `${siteUrl}${a.link}`,
      lastmod: a.date ? new Date(`${a.date}T12:00:00Z`).toISOString() : undefined,
      changefreq: 'daily',
      priority: 0.7,
    }));
  },

  // WAŻNE: nie definiuj tu własnego `transform` (albo jeśli musisz,
  // nie ustawiaj w nim `lastmod`).
};
