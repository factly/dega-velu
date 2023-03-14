// eslint-disable-line no-unused-vars

"use client"
import { jsx } from 'theme-ui';
import gql from 'graphql-tag';
import { client } from 'store/client';
import CategoryDetailsComponent from '../../components/CategoryDetailsComponent';

export default async function CategoryDetailsAll({ params }) {
  const data = await getData({ params });
  return (
    <CategoryDetailsComponent data={data} />
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
          categories {
            slug
          }
        }
      }`
  })

  const params = [...data.sitemap.formats.map(format => [...data.sitemap.categories.map(category => ({ slug: category.slug, formatSlug: format.slug }))])]
  return params
}


export async function getData({ params }) {
  const { data } = await client.query({
    query: gql`
      query ($slug: String!, $formatSlug: String!) {
        category(slug: $slug) {
          description
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
        posts(categories: { slugs: [$slug] }, formats: { slugs: [$formatSlug] }) {
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
      formatSlug: params.formatSlug,
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

