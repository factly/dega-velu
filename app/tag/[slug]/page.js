
// eslint-disable-line no-unused-vars

"use client"

import { jsx } from 'theme-ui';
import gql from 'graphql-tag';
import { client } from 'store/client';
import Head from 'next/head';
import TagDetailsComponent from './components/TagDetailsComponent';

export async function TagDetailsAll({ params }) {
  const data = await getData({ params });

  return (
    <TagDetailsComponent data={data} />
  )
}

export async function generateStaticParams() {
  const { data } = await client.query({
    query: gql`
      query  {
        sitemap {
          tags {
            slug
          }
        }
      }`
  })

  const params = data.sitemap.tags.map(tag => ({ slug: tag.slug }))
  return params
}

export async function getData({ params }) {
  const { data } = await client.query({
    query: gql`
      query ($slug: String!) {
        tag(slug: $slug) {
          description
          id
          name
          slug
        }
        formats {
          nodes {
            id
            slug
            name
          }
        }
        posts(tags: { slugs: [$slug] }) {
          nodes {
            users {
              id
              first_name
              last_name
            }
            categories {
              slug
              name
            }
            medium {
              alt_text
              url
              dimensions
            }
            format {
              name
              slug
            }
            published_date
            id
            excerpt
            status
            subtitle
            title
            slug
          }
        }
      }
    `,
    variables: {
      slug: params.slug,
    },
  });

  return data;
  // if (!data) {
  //   return {
  //     notFound: true,
  //   };
  // }

  // return {
  //   props: {
  //     data,
  //   },
  // };
}
