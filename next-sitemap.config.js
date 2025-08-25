/** @type {import('next-sitemap').IConfig} */
const siteUrl = 'https://punktwidzenia.info.pl';

function loadArticles() {
  // articles.js ma export default (array)
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

  // KLUCZ: doładowujemy ścieżki artykułów z pliku danych
  additionalPaths: async (config) => {
    const articles = loadArticles();

    return articles.map((a) => ({
      loc: `${siteUrl}${a.link}`,                                  // np. https://.../manewry-zapad-2025...
      lastmod: a.date ? new Date(`${a.date}T12:00:00`).toISOString() : undefined,
      changefreq: 'daily',
      priority: 0.7,
    }));
  },

  // (opcjonalnie) dopisanie linku do sitemapy w robots.txt explicite
  robotsTxtOptions: {
    additionalSitemaps: [`${siteUrl}/sitemap.xml`],
  },
};
