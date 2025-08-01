/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://punktwidzenia.info.pl',
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/404', '/generator-artykulow'],
};
