
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
import FormatPageLayout from 'components/FormatPageLayout';
import { client } from 'store/client';
import Head from 'next/head';
import Header from './Header';

export default async function UserDetailsFormat({ data }) {
  //const { dega } = data;

  const name = data.user.display_name
    ? `${data.user.display_name}`
    : `${data.user.first_name} ${data.user.last_name}`;

  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <FormatPageLayout
        type="author"
        posts={data.posts.nodes}
        formats={data.formats.nodes}
        item={data.user}
        // header={<Header item={item} />}
        useSlug={false}
      />
    </>
  );
}

