

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

export default async function TagDetailsComponent({ data }) {

  // const { dega } = data;
  // const formatType = 'fact-check';
  //const filterPosts = dega.posts.nodes.filter((i) => i.format.slug !== formatType);

  const header = (item) => {
    return (
      <div className='mb-6 text-xl'
      // sx={{
      //   mb: (theme) => `${theme.space.spacing6}`,
      //   fontSize: (theme) => `${theme.fontSizes.h6}`,
      // }}
      >
        <h1 className='text-center capitalize mb-4 text-2xl sm:text-[2rem]'
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


