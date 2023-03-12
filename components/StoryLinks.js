/** @jsx jsx */
/** @jsxRuntime classic */
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
    // sx={{
    //   display: 'flex',
    //   flexDirection: 'column',
    //   lineHeight: 'tight',
    //   borderBottomWidth: '1px',
    //   '&:last-child': { borderBottomWidth: '1px' },
    //   py: (theme) => `${theme.space.spacing3}`,
    //   px: (theme) => `${theme.space.spacing6}`,
    //   cursor: 'pointer',
    //   borderColor: (theme) => `${theme.colors.borderPrimary}`,
    // }}
    >
      <Link className="horizontal w-full flex no-underline hover:no-underline"
        // sx={{
        //   width: 'full',
        //   display: 'flex',
        //   textDecoration: 'none',
        //   '&:hover': { textDecoration: 'none' },
        // }}
        passHref href={`/${post.slug}`}>
        <div className='w-full flex flex-col'
        // sx={{ width: 'full', display: 'flex', flexDirection: 'column' }}
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
          // sx={{
          //   width: 'full',
          //   fontWeight: 'bold',
          //   fontSize: (theme) => `${theme.fontSizes.h7}`,
          //   color: (theme) => `${theme.colors.textPrimary}`,
          //   '&.active': {
          //     color: (theme) => `${theme.colors.textLinkPrimary}`,
          //   },
          // }}
          >
            {post.title}
          </div>
          <div className='flex'
          // sx={{ display: 'flex' }}
          >
            <span className='text-xs'
            // sx={{ fontSize: (theme) => `${theme.fontSizes.h8}` }}
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
