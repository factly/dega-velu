
import React from 'react';
import gql from 'graphql-tag';
import { client } from 'store/client';
import PostDetailsComponent from './components/PostDetailsComponent';

export default async function PostDetailsPage({ params }) {
  const data = await getData({ params });
  //posts.unshift(dega.post);

  return (
    <PostDetailsComponent data={data} />
  )
}

export async function getData({ params }) {
  const { data } = await client.query({
    query: gql`
      query PostQuery($slug: String) {
        post(slug: $slug) {
          published_date
          description
          description_html
          excerpt
          id
          schemas
          slug
          status
          subtitle
          title
          updated_at
          users {
            email
            first_name
            last_name
            id
          }
          tags {
            id
            name
            slug
            description
          }
          medium {
            alt_text
            id
            url
            dimensions
          }
          format {
            name
            slug
            id
            description
          }
          claims {
            checked_date
            claim_date
            claim_sources
            claimant {
              description
              id
              name
              slug
              tag_line
            }
            description
            id
            fact
            review_sources
            slug
            claim
            rating {
              description
              id
              name
              numeric_value
              slug
              medium {
                alt_text
                id
                url
                dimensions
              }
            }
          }
          categories {
            description
            created_at
            id
            name
            slug
            medium {
              alt_text
              id
              url
              dimensions
            }
          }
        }
        posts {
          nodes {
            published_date
            description
            excerpt
            id
            slug
            status
            subtitle
            title
            updated_at
            users {
              email
              first_name
              last_name
              display_name
              slug
              id
            }
            tags {
              id
              name
              slug
              description
            }
            medium {
              alt_text
              id
              url
              dimensions
            }
            format {
              name
              slug
              id
              description
            }
          }
        }
      }
    `,
    variables: {
      slug: params.slug,
    },
  });

  return data;

  // if (!data || !data.post) {
  //   return {
  //     notFound: true,
  //   };
  // }

  // return {
  //   props: {
  //     post: data.post,
  //     posts: data.posts,
  //   },
  // };
}
