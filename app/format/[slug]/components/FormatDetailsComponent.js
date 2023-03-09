

import React from 'react';
import gql from 'graphql-tag';
import StoryCard from 'components/StoryCard';
import { client } from 'store/client';
import { jsx } from 'theme-ui';
import Head from 'next/head';

export default async function FormatDetailsComponent({ data }) {
  const filteredPosts = data.posts.nodes.filter((post) => post.published_date !== null);
  return (
    <>
      <Head>
        <title> {filteredPosts[0]?.format.name} </title>
      </Head>
      <div className='mx-auto max-w-[1560]'
      // sx={{ mx: 'auto', maxWidth: 1560 }}
      >
        <h1 className='mt-12 mb-6 text-center text-2xl sm:text-[2rem]'
        // sx={{
        //    mt: (theme) => `${theme.space.layout4}`,
        //    mb: (theme) => `${theme.space.layout2}`,
        //   textAlign: 'center',
        //    fontSize: [(theme) => `${theme.fontSizes.h5}`, (theme) => `${theme.fontSizes.h4}`],
        // }}
        >
          {filteredPosts[0]?.format.name}
        </h1>
        <div className='flex flex-col pb-6 pt-8'
        // sx={{
        //   display: 'flex',
        //   flexDirection: 'column',
        //    pb: (theme) => `${theme.space.spacing6}`,
        //    pt: [null, null, null, (theme) => `${theme.space.spacing7}`],
        // }}
        >
          {filteredPosts.length > 0 ? (
            <div className='grid gap-6 px-6 grid-cols-[1fr] md:grid-cols-[repeat(2, 1fr) lg:repeat(3,1fr)] '
            // sx={{
            //   display: 'grid',
            //   gridTemplateColumns: ['1fr', null, 'repeat(2, 1fr)', 'repeat(3,1fr)'],
            //   gridGap: (theme) => `${theme.space.spacing6}`,
            //   px: [null, null, (theme) => `${theme.space.spacing6}`],
            // }}
            >
              {filteredPosts?.map((item, index) => (
                <StoryCard
                  key={index}
                  cardStyle="iframely"
                  storyData={item}
                  excerpt={item.format.slug !== 'fact-check'}
                  imageSize="w-full md:w-1/3 h-48 md:h-full py-4 md:py-4"
                />
              ))}
            </div>
          ) : (
            <h2 className='text-center'
            // sx={{ textAlign: 'center' }}
            >No posts found</h2>
          )}
        </div>
      </div>
    </>
  );
}

