

import React, { useState, useEffect } from 'react'; // eslint-disable-line no-unused-vars
import { jsx } from 'theme-ui';
import gql from 'graphql-tag';
import parseEditorJsData from 'src/utils/parseEditorJsData';
import FormatPageLayout from 'components/FormatPageLayout';
import { client } from 'store/client';
import Head from 'next/head';
import parseTiptapContent from 'src/utils/parseTiptapEditorData';

export default async function CategoryDetailsComponent({ data }) {
  //  const { dega } = data;
  // const formatType = 'fact-check';
  // const filterPosts = dega.posts.nodes.filter((i) => i.format.slug !== formatType);

  const [readMore, setReadMore] = React.useState(true);
  const [isReadMoreNeeded, setIsReadMoreNeeded] = useState(false);

  useEffect(() => {
    if (process.browser) {
      const el = document.getElementById('category-description');
      setIsReadMoreNeeded(el?.clientHeight < el?.scrollHeight);
    }
  }, []);

  const header = (item) => {
    return (
      <div className='mb-6 text-xl'
      // sx={{
      //   mb: (theme) => `${theme.space.spacing6}`,
      //   fontSize: (theme) => `${theme.fontSizes.h6}`,
      // }}
      >
        <h1 className='text-center mb-6 text-2xl sm:text-[2rem] capitalize'
        // sx={{
        //   textAlign: 'center',
        //   fontSize: [(theme) => `${theme.fontSizes.h5}`, (theme) => `${theme.fontSizes.h4}`],
        //   mb: (theme) => `${theme.space.spacing5}`,
        //   textTransform: 'capitalize',
        // }}
        >
          {item.name}
        </h1>
        <div className='px-4 overflow-hidden'
          id="category-description"
          sx={{
            maxHeight: (theme) => (readMore ? `calc(${theme.lineHeights.normal}em * 6 )` : '100%'),
            overflow: 'hidden',
            px: (theme) => `${theme.space.spacing5}`,
          }}
        >
          {process.browser && parseTiptapContent(item.description_html)}
        </div>
        {item.description && isReadMoreNeeded && (
          <button className='px-4 text-xl text-[#3B82F6]'
            type="button"
            onClick={() => setReadMore((prev) => !prev)}
          // sx={{
          //   px: (theme) => `${theme.space.spacing5}`,
          //   color: (theme) => `${theme.colors.textLinkPrimary}`,
          //   fontSize: (theme) => `${theme.fontSizes.h6}`,
          // }}
          >
            {readMore ? 'Read more' : 'Read less'}
          </button>
        )}
      </div>
    );
  };
  return (
    <>
      <Head>
        <title> {data.category.name} </title>
      </Head>
      <FormatPageLayout
        type="category"
        posts={data.posts.nodes}
        formats={data.formats.nodes}
        item={data.category}
        header={header}
      />
    </>
  );
}

