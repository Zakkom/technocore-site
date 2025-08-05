/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.technocore.ie',  // ⚠️ Укажи свой домен
  generateRobotsTxt: true,               // Автоматически сгенерирует robots.txt
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 1.0,
  exclude: [],                           // Можешь указать пути, которые не хочешь индексировать
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://www.technocore.ie/sitemap.xml',
    ],
  },
}