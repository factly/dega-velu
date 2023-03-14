"use client"

import React from 'react'; // eslint-disable-line no-unused-vars
import gql from 'graphql-tag';
import { jsx } from 'theme-ui';
import {
  FaEnvelope,
  FaFacebookSquare,
  FaInstagramSquare,
  FaLink,
  FaLinkedin,
  FaTwitterSquare,
} from 'react-icons/fa';
import { client } from 'store/client';
import FormatPageLayout from 'components/FormatPageLayout';
import Head from 'next/head';
import TagDetailsComponent from '../../components/TagDetailsComponent';

export default async function TagDetailsAll({ params }) {
  const data = await getData({ params })

  return (
    <TagDetailsComponent data={data} />
  );
}

export async function generateStaticParams() {
  const { data } = await client.query({
    query: gql`
      query  {
        sitemap {
          formats {
            slug
          }
          tags {
            slug
          }
        }
      }`
  })

  const params = [...data.sitemap.formats.map(format => [...data.sitemap.tags.map(tag => ({ slug: tag.slug, formatSlug: format.slug }))])]
  return params
}

export async function getData({ params }) {
  const { data } = await client.query({
    query: gql`
      query ($slug: String!, $formatSlug: String!) {
        tag(slug: $slug) {
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
        posts(tags: { slugs: [$slug] }, formats: { slugs: [$formatSlug] }) {
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

  return data;
  // if (!data || !data.tag) {
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
