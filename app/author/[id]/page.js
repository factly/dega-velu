
import React from 'react'; // eslint-disable-line no-unused-vars
import FormatPageLayout from 'components/FormatPageLayout';
import gql from 'graphql-tag';
import { client } from 'store/client';
import Head from 'next/head';
import UserDetailsComponent from './components/UserDetailsComponent';

export default async function UserDetailsAll({ params }) {
  const data = await getData({ params });
  // const { dega } = data;
  return (
    <UserDetailsComponent data={data} />
  )
}
// export async function generateStaticParams() {
//   const { data } = await client.query({
//     query: gql`
//       query  {
//         sitemap {
//           users {
//             slug
//           }
//         }
//       }`
//   })

//   const params = data.sitemap.users.map(user => ({ slug: user.slug }))
//   return params
// }

export async function getData({ params }) {
  const { data } = await client.query({
    query: gql`
      query ($id: Int!) {
        user(id: $id) {
          id
          first_name
          last_name
          email
          display_name
          social_media_urls
          description
          medium {
            url
            dimensions
          }
        }
        formats {
          nodes {
            id
            slug
            name
          }
        }
        posts(users: { ids: [$id] }) {
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
            format {
              name
              slug
            }
            medium {
              alt_text
              url
              dimensions
            }
            published_date
            id
            status
            subtitle
            title
            excerpt
            slug
          }
        }
      }
    `,
    variables: {
      id: params.id,
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
