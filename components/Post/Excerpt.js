"use client"
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react'; // eslint-disable-line no-unused-vars
import { jsx } from 'theme-ui';

/**
 * TODO: Remove Image element if it doesn't load
 * TODO: Add Maxwidth in theme ui
 */

const Excerpt = ({ excerpt, image }) => (
  <div className='flex flex-col md:flex-row flex-wrap my-6 bg-[#EDF2F7]'
  >
    {image && (
      <div className='flex-1 w-full'
      >
        <img className='w-full h-full object-cover'
          src={image.url.proxy}
          alt={image.alt_text}
        />
      </div>
    )}
    {excerpt && (
      <div className='flex flex-col flex-1 p-4'
      >
        <div className='w-full font-bold text-2xl text-[#1a202c] leading-tight	'
        >
          Excerpt
        </div>
        <p className='text-[#2d3748] pt-2 text-base'
        >
          {excerpt}
        </p>
      </div>
    )}
  </div>
);

export default Excerpt;
