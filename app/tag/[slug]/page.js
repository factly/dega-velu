
// eslint-disable-line no-unused-vars

"use client"

import { jsx } from 'theme-ui';
import gql from 'graphql-tag';
import parseEditorJsData from 'src/utils/parseEditorJsData';
import FormatPageLayout from 'components/FormatPageLayout';

import { client } from 'store/client';
import Head from 'next/head';

export async function TagDetailsAll({ params }) {
  const data = await getData({params});
  //  const { dega } = data;
  // const formatType = 'fact-check';
  // const filterPosts = dega.posts.nodes.filter((i) => i.format.slug !== formatType);

  const header = (item) => {
    return (
      <div
        sx={{
          mb: (theme) => `${theme.space.spacing6}`,
          fontSize: (theme) => `${theme.fontSizes.h6}`,
        }}
      >
        <h1
          sx={{
            textAlign: 'center',
            fontSize: [(theme) => `${theme.fontSizes.h5}`, (theme) => `${theme.fontSizes.h4}`],
            mb: (theme) => `${theme.space.spacing5}`,
            textTransform: 'capitalize',
          }}
        >
          {item.name}
        </h1>
      </div>
    );
  };
  return (
    <>
      <Head>
        <title> {data.tag.name} </title>
      </Head>
      <FormatPageLayout
        type="tag"
        posts={data.posts.nodes}
        formats={data.formats.nodes}
        item={data.tag}
        header={header}
      />
    </>
  );
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

  // if (!data) {
  //   return {
  //     notFound: true,
  //   };
  // }

  return {
    props: {
      data,
    },
  };
}
