
'use client'

import React from 'react'; // eslint-disable-line no-unused-vars
import { jsx } from 'theme-ui';
import Link from 'next/link';

const Categories = ({ categories }) => {
  const list =
    categories &&
    categories?.map((category, index) => (
      <div className='flex flex-col leading-tight border-b last:border-b-0 py-2 border-[#edf2f7]'
        key={`category${index}`}
      // sx={{
      //   display: 'flex',
      //   flexDirection: 'column',
      //   lineHeight: 'tight',
      //   py: (theme) => `${theme.space.spacing3}`,
      //   borderBottomWidth: '1px',
      //   '&:last-child': {
      //     borderBottomWidth: 0,
      //   },
      //   borderColor: (theme) => `${theme.colors.borderPrimary}`,
      // }}
      >
        <Link className='w-full flex no-underline hover:no-underline font-bold text-[#2d3748] hover:#ea364a text-base'
          // sx={{
          //   width: 'full',
          //   display: 'flex',
          //   textDecoration: 'none',
          //   '&:hover': { textDecoration: 'none' },
          //   fontWeight: 'bold',
          //   fontSize: (theme) => `${theme.fontSizes.h7}`,
          //   color: (theme) => `${theme.colors.textPrimary}`,
          //   '&:hover': {
          //     color: (theme) => `${theme.colors.textLinkHoverPrimary}`,
          //   },
          // }} 
          passHref href={`/category/${category.slug}`}>

          {' '}
          {category.name}
        </Link>
      </div>
    ));
  return categories ? list : null;
};

export default Categories;
