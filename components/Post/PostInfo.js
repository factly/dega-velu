
'use client'

import React from 'react'; // eslint-disable-line no-unused-vars

import { jsx } from 'theme-ui';
import { FaRegClock } from 'react-icons/fa';
import parseDate from 'src/utils/parseDate';
import Link from 'next/link';

/* 
 TODO 1. Add Author image above their names
 TODO 2. Improve multiple authors and categories
 TODO 3. Check for layout spacing issues
 */

const PostInfo = ({ users, categories, date }) => (
  <div className='flex flex-col justify-start items-start'
  // sx={{
  //   display: 'flex',
  //   flexDirection: 'column',
  //   justifyContent: 'flex-start',
  //   alignItems: 'flex-start',
  //   // py: (theme) => `${theme.space.layout1}`,
  // }}
  >
    <div className='flex flex-col text-base'
    // sx={{
    //   display: 'flex',
    //   flexDirection: 'column',
    //   // py: (theme) => `${theme.space.layout1}`,
    //   fontSize: (theme) => `${theme.fontSizes.h7}`,
    // }}
    >
      <div className='flex flex-row flex-wrap items-baseline	'
      // sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'baseline' }}
      >
        {users &&
          users?.map((user, i, arr) => (
            <React.Fragment key={i}>
              <Link className='font-medium text-[#3B82F6] text-base px-1 first-of-type:pl-0 hover:text-[#ea364a]'
                // sx={{
                //   fontWeight: 'medium',
                //   color: (theme) => `${theme.colors.textLinkPrimary}`,
                //   fontSize: (theme) => `${theme.fontSizes.h7}`,
                //   px: (theme) => `${theme.space.spacing2}`,
                //   '&:first-of-type': { pl: 0 },
                //   '&:hover': {
                //     color: (theme) => `${theme.colors.textLinkHoverPrimary}`,
                //   },
                // }}
                passHref href={`/author/${user.id}`}>
                {' '}
                {`${user?.first_name} ${user?.last_name}`}
              </Link>
              {arr.length - i > 1 && (user?.first_name || user?.last_name) && ','}
            </React.Fragment>
          ))}

        {categories.length > 0 && (
          <>
            <span className='font-medium text-base'
            // sx={{
            //   fontWeight: 'medium',
            //   fontSize: (theme) => `${theme.fontSizes.h7}`,
            // }}
            >
              in
            </span>
            {categories?.map((category, i, arr) => (
              <React.Fragment key={i}>
                <Link className='px-1 font-medium text-[#3B82F6] text-base hover:text[#ea364a]'
                  // sx={{
                  //   px: (theme) => `${theme.space.spacing2}`,
                  //   fontWeight: 'medium',
                  //   color: (theme) => `${theme.colors.textLinkPrimary}`,
                  //   fontSize: (theme) => `${theme.fontSizes.h7}`,
                  //   '&:hover': {
                  //     color: (theme) => `${theme.colors.textLinkHoverPrimary}`,
                  //   },
                  // }}
                  passHref href={`/category/${category.slug}`}>
                  {' '}
                  {category.name}
                </Link>
                {arr.length - i > 1 && ', '}
              </React.Fragment>
            ))}
          </>
        )}
      </div>
      <span className='text-[#718096] text-xs flex items-center'
      // sx={{
      //   color: (theme) => `${theme.colors.textSecondary}`,
      //   fontSize: (theme) => `${theme.fontSizes.h8}`,
      //   display: 'flex',
      //   alignItems: 'center',
      // }}
      >
        <FaRegClock className='inline-block mr-1'
        // sx={{ display: 'inline-block', mr: (theme) => `${theme.space.spacing2}` }} 
        />{' '}
        {parseDate(date)}
      </span>
    </div>
  </div>
);

export default PostInfo;
