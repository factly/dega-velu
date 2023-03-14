
import React from 'react'; // eslint-disable-line no-unused-vars
import { jsx } from 'theme-ui';
import parseDate from 'src/utils/parseDate';
import Link from 'next/link';
const StoryLinks = ({ post, postActiveIndex, categories = true, index }) => {
  /**
   * TODO: Add post progress and active styles
   */
  return (
    <article className='flex flex-col leading-tight border-b last:border-b py-2 px-6 cursor-pointer border-[#edf2f7]'
    >
      <Link className="horizontal w-full flex no-underline hover:no-underline"
        passHref href={`/${post.slug}`}>
        <div className='w-full flex flex-col'
        >
          {/* {post.categories && (
            <p
              sx={{
                width: 'full',
                color: (theme) => `${theme.colors.gray[6]}`,
                fontSize: [0, null, 1],
                pb: 1,
                my: 1,
              }}
            >
              {post.categories?.map((category, i, arr) => {
                return category.name + (arr.length - i > 1 ? ', ' : '');
              })}
            </p>
          )} */}
          <div
            id={`nav-${index}`}
            className={`w-full font-bold text-base text-[#2d3748] active:text-[#3B82F6] ${postActiveIndex === post.slug ? 'active' : ''}`}
          >
            {post.title}
          </div>
          <div className='flex'
          >
            <span className='text-xs'
            >
              {parseDate(post.published_date)}
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default StoryLinks;
