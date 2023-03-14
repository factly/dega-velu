"use client"
import React from 'react'; // eslint-disable-line no-unused-vars
import { jsx } from 'theme-ui';
import Link from 'next/link';

/**
 * TODO: 1. Add transitions, borderWidth, borderRadius to theme-ui
 */
const Tag = ({ url, name }) => {
  return (
    <Link className='text-center text-[#fff] text-xs border border-[#3b82f6] rounded p-2 m-2 bg-[#3b82f6] transition-[0.3s] hover:text-[#3b82f6] bg-[#fff] '
      href={`/tag/${url}`} passHref>
      {name}
    </Link>
  );
};

export default Tag;
