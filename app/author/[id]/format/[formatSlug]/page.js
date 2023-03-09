

import React from 'react'; // eslint-disable-line no-unused-vars
import gql from 'graphql-tag';
// import { jsx } from 'theme-ui';
import {
  FaEnvelope,
  FaFacebookSquare,
  FaInstagramSquare,
  FaLink,
  FaLinkedin,
  FaTwitterSquare,
} from 'react-icons/fa';
import FormatPageLayout from 'components/FormatPageLayout';
import { client } from 'store/client';
import Head from 'next/head';
import UserDetailsComponent from '../../components/UserDetailsComponent'

export default async function UserDetailsFormat({ params }) {
  //const { dega } = data;
  const data = await getData({ params });
  return (
    <UserDetailsComponent data={data} />
  )
}
export async function getData({ params }) {
  const { data } = await client.query({
    query: gql`
      query ($id: Int!, $formatSlug: String!) {
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
        posts(users: { ids: [$id] }, formats: { slugs: [$formatSlug] }) {
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
      id: params.id,
      formatSlug: params.formatSlug,
    },
  });

  return data
  // if (!data || !data.user) {
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
