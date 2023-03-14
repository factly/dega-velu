
import React from 'react';
import gql from 'graphql-tag';
import { client } from 'store/client';
import CategoryDetailsComponent from './components/CategoryDetailsComponent'

export default async function CategoryPage({ params }) {
  const data = await getData({ params });
  return <CategoryDetailsComponent data={data} />
}

export async function generateStaticParams() {
  const { data } = await client.query({
    query: gql`
      query  {
        sitemap {
          categories {
            slug
          }
        }
      }`
  })

  const params = data.sitemap.categories.map(category => ({ slug: category.slug }))
  return params
}

export async function getData({ params }) {
  const { data } = await client.query({
    query: gql`
      query ($slug: String!) {
        category(slug: $slug) {
          description
          description_html
          id
          medium {
            alt_text
            url
            dimensions
          }
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
        posts(categories: { slugs: [$slug] }) {
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
  // if (!data || !data.category) {
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
