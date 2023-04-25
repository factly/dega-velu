import gql from 'graphql-tag';
import { client } from 'store/client';
import getConfig from 'next/config';

function generateSiteMap(users) {
  const { publicRuntimeConfig } = getConfig();

  return `<?xml version="1.0" encoding="UTF-8"?>
  <?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
  
  <urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd http://www.google.com/schemas/sitemap-image/1.1 http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

    <!--We manually set the two URLs we know already-->
    ${users
      .map((user) => {
        return `
  <url>
      <loc>${`${publicRuntimeConfig.siteURL}/user/${user?.slug}/`}</loc>
      <lastmod>${user?.updated_at}</lastmod>
  </url>

    `;
      })
      .join('')}
</urlset>
`;
}

function SiteMapUser() {
}

export async function getServerSideProps({ params, res }) {

  const { data } = await client.query({
    query: gql`
      query SitemapQuery {
        sitemap {
          users {
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

  if (!data || (Math.ceil(data.sitemap.users.length / 1000) < params.page)) {
    return {
      notFound: true,
    }
  }

  const start = (params.page - 1) * 1000;
  const end = Math.ceil(data.sitemap.users.length / 1000) == params.page ? data.sitemap.users.length : params.page * 1000;
  const sitemap = await generateSiteMap([...data.sitemap.users].reverse().slice(start, end));

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMapUser