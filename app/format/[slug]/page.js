
import React from 'react';
import gql from 'graphql-tag';
import { client } from 'store/client';
import FormatDetailsComponent from './Components/FormatDetailsComponent';

export default async function FormatPage({ params }) {
  const data = await getData({ params });

  return (
    <FormatDetailsComponent data={data} />
  )
}


export async function generateStaticParams() {
  const { data } = await client.query({
    query: gql`
      query  {
        sitemap {
          formats {
            slug
          }
        }
      }`
  })

  const params = data.sitemap.formats.map(format => ({ slug: format.slug }))
  return params
}

export async function getData({ params }) {
  const { data } = await client.query({
    query: gql`
      query ($slug: String!) {
        posts(formats: { slugs: [$slug] }) {
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


  return data

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
