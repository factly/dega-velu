import gql from 'graphql-tag';
import { client } from 'store/client';
import getConfig from 'next/config';

function generateSiteMap(sitemap) {
  const { publicRuntimeConfig } = getConfig();
  const postPagesLength = Math.ceil(sitemap.posts.length / 1000);
  const postArray = new Array(postPagesLength).fill(0);

  const categoryPagesLength = Math.ceil(sitemap.categories.length / 1000);
  const categoryArray = new Array(categoryPagesLength).fill(0);

  const tagPagesLength = Math.ceil(sitemap.tags.length / 1000);
  const tagArray = new Array(tagPagesLength).fill(0);
  const authorPagesLength = sitemap.users && Math.ceil(sitemap.users.length / 1000);
  const authorArray = authorPagesLength && new Array(authorPagesLength).fill(0);


  return `<?xml version="1.0" encoding="UTF-8"?>
  
  <?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>


  <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  
  ${postArray.map((_, i) => {
    return `<sitemap>
      <loc>${`${publicRuntimeConfig.siteURL}/sitemap-posts-${i + 1}.xml/`}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>`
  })}
  ${authorPagesLength && authorArray.map((_, i) => {
    return `<sitemap>
      <loc>${`${publicRuntimeConfig.siteURL}/sitemap-authors-${i + 1}.xml/`}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>`
  })}
  ${categoryArray.map((_, i) => {
    return `<sitemap>
      <loc>${`${publicRuntimeConfig.siteURL}/sitemap-categories-${i + 1}.xml/`}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>`
  })}
  ${tagArray.map((_, i) => {
    return `<sitemap>
      <loc>${`${publicRuntimeConfig.siteURL}/sitemap-tags-${i + 1}.xml/`}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>`
  })}
  </sitemapindex>
`;
}

function SiteMapTag() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {

  const { data } = await client.query({
    query: gql`
      query SitemapQuery {
        sitemap {
          posts {
            slug
            id
            created_at
            published_date
            updated_at
          }
          categories {
            slug
            id
            created_at
            published_date
            updated_at
          }
          tags {
            slug
            id
            created_at
            published_date
            updated_at
          }
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


  const sitemap = await generateSiteMap(data.sitemap)

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();


  return {
    props: {},
  };
}

export default SiteMapTag;