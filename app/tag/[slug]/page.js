
// eslint-disable-line no-unused-vars

"use client"

import { jsx } from 'theme-ui';
import gql from 'graphql-tag';
import parseEditorJsData from 'src/utils/parseEditorJsData';
import FormatPageLayout from 'components/FormatPageLayout';

import { client } from 'store/client';
import Head from 'next/head';
import TagDetailsComponent from './components/TagDetailsComponent';

export async function TagDetailsAll({ params }) {
  const data = await getData({ params });
  //  const { dega } = data;
  // const formatType = 'fact-check';
  // const filterPosts = dega.posts.nodes.filter((i) => i.format.slug !== formatType);

  return (
    <TagDetailsComponent data={data} />
  )
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
