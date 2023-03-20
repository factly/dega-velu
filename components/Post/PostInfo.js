
/** @jsx jsx */
/** @jsxRuntime classic */

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
  <div
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      // py: (theme) => `${theme.space.layout1}`,
    }}
  >
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        // py: (theme) => `${theme.space.layout1}`,
        fontSize: (theme) => `${theme.fontSizes.h7}`,
      }}
    >
      <div sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'baseline' }}>
        {users &&
          users?.map((user, i, arr) => (
            <React.Fragment key={i}>
              <Link sx={{
                fontWeight: 'medium',
                color: (theme) => `${theme.colors.textLinkPrimary}`,
                fontSize: (theme) => `${theme.fontSizes.h7}`,
                px: (theme) => `${theme.space.spacing2}`,
                '&:first-of-type': { pl: 0 },
                '&:hover': {
                  color: (theme) => `${theme.colors.textLinkHoverPrimary}`,
                },
              }}
                passHref href={`/author/${user.id}`}>
                {' '}
                {`${user?.first_name} ${user?.last_name}`}
              </Link>
              {arr.length - i > 1 && (user?.first_name || user?.last_name) && ','}
            </React.Fragment>
          ))}

        {categories.length > 0 && (
          <>
            <span
              sx={{
                fontWeight: 'medium',
                fontSize: (theme) => `${theme.fontSizes.h7}`,
              }}
            >
              in
            </span>
            {categories?.map((category, i, arr) => (
              <React.Fragment key={i}>
                <Link sx={{
                  px: (theme) => `${theme.space.spacing2}`,
                  fontWeight: 'medium',
                  color: (theme) => `${theme.colors.textLinkPrimary}`,
                  fontSize: (theme) => `${theme.fontSizes.h7}`,
                  '&:hover': {
                    color: (theme) => `${theme.colors.textLinkHoverPrimary}`,
                  },
                }}
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
      <span
        sx={{
          color: (theme) => `${theme.colors.textSecondary}`,
          fontSize: (theme) => `${theme.fontSizes.h8}`,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <FaRegClock sx={{ display: 'inline-block', mr: (theme) => `${theme.space.spacing2}` }} />{' '}
        {parseDate(date)}
      </span>
    </div>
  </div>
);

export default PostInfo;
