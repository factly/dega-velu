
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
  >
    <div className='flex flex-col text-base'
    >
      <div className='flex flex-row flex-wrap items-baseline'
      >
        {users &&
          users?.map((user, i, arr) => (
            <React.Fragment key={i}>
              <Link className='font-medium text-[#3B82F6] text-base px-1 first-of-type:pl-0 hover:text-[#ea364a]'
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
            >
              in
            </span>
            {categories?.map((category, i, arr) => (
              <React.Fragment key={i}>
                <Link className='px-1 font-medium text-[#3B82F6] text-base hover:text[#ea364a]'
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
      >
        <FaRegClock className='inline-block mr-1'
        />{' '}
        {parseDate(date)}
      </span>
    </div>
  </div>
);

export default PostInfo;
