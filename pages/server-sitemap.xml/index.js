import { getServerSideSitemap } from "next-sitemap";
import { client } from 'store/client';
import gql from 'graphql-tag';

export const getServerSideProps = async (context) => {
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
        
        }`});


  const fields = [...data?.sitemap.posts?.map((item) => ({
    loc: `https://storied-sundae.netlify.app/${item?.slug}/`,
    lastmod: item?.updated_at
  })), ...data?.sitemap.categories?.map((item) => ({
    loc: `https://storied-sundae.netlify.app/category/${item?.slug}`,
    lastmod: item?.updated_at
  })), ...data?.sitemap.tags?.map((item) => ({
    loc: `https://storied-sundae.netlify.app/tag/${item?.slug}`,
    lastmod: item?.updated_at
  })), ...data?.sitemap.users?.map((item) => ({
    loc: `https://storied-sundae.netlify.app/author/${item?.slug}`,
    lastmod: item?.updated_at
  }))
  ]
  return getServerSideSitemap(context, fields);
}

export default function Sitemap() { }