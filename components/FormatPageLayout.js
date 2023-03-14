"use client"
import React from 'react'; // eslint-disable-line no-unused-vars

import StoryCard from './StoryCard';
import Link from 'next/link';
import ActiveLink from './ActiveLink';
const FormatPageLayout = ({ type, posts, formats, item, header, useSlug = true }) => {
  const slug = useSlug ? item.slug : item.id;
  const filteredPosts = posts.filter((post) => post.published_date !== null);
  const defaultHeader = (item) => (
    <h1 className='text-center text-2xl md:text-[2rem] mb-4 capitalize'
    >
      {item.name}
    </h1>
  );

  return (
    <div className='flex flex-col lg:flex-row justify-between border-b'
    >
      <div
        className="main-content max-w-[1560px] w-full mx-auto order-[2] xl:order[1]"
      >
        <div className='flex flex-col pb-6'
        >

          {header ? header(item) : defaultHeader(item)}
          <div
            className="tabs leading-[18.4px] overflow-auto overflowX-auto overflowY-auto text-center mb-4 whitespace-nowrap	border-b-[#919191] border-b"
          >
            <ul className='inline-flex m-0 p-0 border-0 list-none	max-w-[100vw] text-base font-[inherit] leading-[inherit] '
            >
              <li className='text-base font-bold leading-[16.8px] mb-0 mt-0 pl-0 pr-0 pb-3 pt-4 mx-4 whitespace-nowrap text-center uppercase'>
                {console.log({ type, slug })}
                <ActiveLink passHref href={`/${type}/${slug}`} activeClassName="active">
                  All
                </ActiveLink>
              </li>
              {formats?.map((tab, index) => (
                <li className='text-base font-bold leading-[16.8px] mb-0 mt-0 pl-0 pr-0 pb-3 pt-4 mx-4 whitespace-nowrap text-center uppercase' key={index}>
                  <ActiveLink
                    passHref
                    href={`/${type}/${slug}/format/${tab.slug}`}
                    activeClassName="active"
                  >
                    {tab.name}
                  </ActiveLink>
                </li>
              ))}
            </ul>
          </div>
          {/* <Tabs baseUrl={`/categories/${dega.category.slug}`} /> */}

          {filteredPosts.length > 0 ? (
            <div className='grid grid-cols-3 px-6 mt-8 gap-8'
            >
              {filteredPosts?.map((item, index) => (
                <StoryCard
                  key={index}
                  cardStyle="iframely"
                  storyData={item}
                  excerpt={item.format.slug !== 'fact-check'}
                />
              ))}
            </div>
          ) : (
            <h2 className='text-center'
            >No posts found</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormatPageLayout;
