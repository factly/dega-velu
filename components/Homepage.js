'use client'

import React from 'react'; // eslint-disable-line no-unused-vars
import { jsx } from 'theme-ui';
// import Seo from './Seo';
import StoryCard from './StoryCard';
import CategoriesGroup from './CategoriesGroup';

function Homepage({ data }) {
  return (
    <>
      {/* <Seo title={dega.space.site_title} canonical={dega.space.site_address} type="website" /> */}
      <div className='flex flex-row justify-center lg:border-b gap-4'
      >
        {/* Left sidebar */}
        {/* <div
          className="sidebar"
          sx={{
            display: [null, null, null, null, 'flex'],
            width: [null, null, null, null, '1/4'],
            borderRightWidth: 'px',
            position: 'sticky',
          }}
        >
          <div sx={{ display: 'block' }}>
            <div
              sx={{
                mb: (theme) => `${theme.space.spacing5}`,
                py: (theme) => `${theme.space.spacing5}`,
                px: (theme) => `${theme.space.spacing6}`,
                borderBottomWidth: 'px',
              }}
            >
              <h5 className="heading">Categories</h5>
              <CategoriesGroup categories={data.categories.nodes} />
            </div>
          </div>
        </div> */}
        {/* Main/ Middle part of the homepage */}
        <div className="main-content w-full md:w-3/4 xl:w-2/4"
        >
          {/* Featured Card */}
          {data.posts.nodes.length > 0 ? (
            <div
              className="featured transition-all hover:no-underline hover:scale-105"
            >
              <StoryCard
                cardStyle="featured"
                storyData={data.posts.nodes[0]}
                // imageSize="w-full h-64"
                imageSize='w-full h-64'
              />
            </div>
          ) : null}

          {/* Articles list */}
          <div className='flex flex-col py-6'
          >
            {data?.posts.nodes.slice(1, 20)?.map((item, index) => (
              <StoryCard
                key={`homepage-post-${index}`}
                cardStyle="card"
                storyData={item}
                imageSize={'width-full md:w-1/3 h-[12rem] md:h-full py-6 md:py-0'}

              />
            ))}
          </div>
        </div>
        {/* Right sidebar */}
        <div
          className="sidebar lg:flex border-l sticky lg:w-2/6 xl:w-1/4"
        >
          <div className='block'
          >
            <div className='mb-4 py-4 px-6 border-b'
            >
              <h5 className='text-xl'
              // sx={{ fontSize: '1.25rem' }}
              >Recent In Factchecks</h5>
            </div>
            {data?.factchecks.nodes?.map((item, index) => (
              <StoryCard
                key={`homepage-factcheck-${index}`}
                cardStyle="vertical"
                storyData={item}
                imageSize='h-40'
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default Homepage;
