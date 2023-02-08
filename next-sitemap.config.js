module.exports = {
  siteUrl: process.env.SITE_URL || 'https://storied-sundae.netlify.app',
  generateRobotsTxt: true, // (optional)
  exclude: ['/server-sitemap-index.xml'], // <= exclude here
  transform: async (config, path) => {


    // Use default transformation for all other cases
    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  }
}