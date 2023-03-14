

import React from 'react';
import gql from 'graphql-tag';
import StoryCard from 'components/StoryCard';
import { client } from 'store/client';
import { jsx } from 'theme-ui';
import Head from 'next/head';
// import { notFound } from 'next/navigation';

export default async function FormatDetailsComponent({ data }) {

  // if (!data.format) {
  //   notFound();
  // }
  const filteredPosts = data.posts.nodes.filter((post) => post.published_date !== null);
  return (
    <>
      <Head>
        <title> {filteredPosts[0]?.format.name} </title>
      </Head>
      <div className='mx-auto max-w-[1560px]'
      >
        <h1 className='mt-12 mb-6 text-center text-2xl sm:text-[2rem]'
        >
          {filteredPosts[0]?.format.name}
        </h1>
        <div className='flex flex-col pb-6 pt-8'
        >
          {filteredPosts.length > 0 ? (
            <div className='grid gap-6 px-6 md:grid-cols-2 lg:grid-cols-3	 '
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
            >No posts found</h2>
          )}
        </div>
      </div>
    </>
  );
}

