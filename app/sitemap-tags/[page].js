import gql from 'graphql-tag';
import { client } from 'store/client';
import getConfig from 'next/config';

function generateSiteMap(tags) {
  const { publicRuntimeConfig } = getConfig();

  return `<?xml version="1.0" encoding="UTF-8"?>
  <?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     ${tags
      .map((tag) => {
        return `
  <url>
      <loc>${`${publicRuntimeConfig.siteURL}/tag/${tag?.slug}/`}</loc>
      <lastmod>${tag?.updated_at}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
  </url>

     `;
      })
      .join('')}
   </urlset>
 `;
}

function SiteMapTag() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ params, res }) {

  const { data } = await client.query({
    query: gql`
      query SitemapQuery {
        sitemap {
          tags {
            slug
            id
            created_at
            published_date
            updated_at
          }
        }
      }
    `,
  });

  if (!data || (Math.ceil(data.sitemap.tags.length / 1000) < params.page)) {
    return {
      notFound: true,
    }
  }

  const start = (params.page - 1) * 1000;
  const end = Math.ceil(data.sitemap.tags.length / 1000) == params.page ? data.sitemap.tags.length : params.page * 1000;
  const sitemap = await generateSiteMap([...data.sitemap.tags].reverse().slice(start, end));

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMapTag;