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
  // sx={{
  //   display: 'flex',
  //   flexDirection: ['column', null, 'row'],
  //   flexWrap: 'wrap',
  //   my: (theme) => `${theme.space.layout2}`,
  //   bg: (theme) => `${theme.colors.bgPrimary}`,
  // }}
  >
    {image && (
      <div className='flex-1 w-full'
      // sx={{ flex: '1 1 0%', width: 'full' }}
      >
        <img className='w-full h-full object-cover'
          src={image.url.proxy}
          alt={image.alt_text}
        // sx={{
        //   width: 'full',
        //   height: 'full',
        //   objectFit: 'cover',
        // }}
        // onError={addDefaultSrc}
        />
      </div>
    )}
    {excerpt && (
      <div className='flex flex-col flex-1 p-4'
      // sx={{
      //   display: 'flex',
      //   flexDirection: 'column',
      //   flex: '1 1 0%',
      //   p: (theme) => `${theme.space.spacing5}`,
      // }}
      >
        <div className='w-full font-bold text-2xl text-[#1a202c] leading-tight	'
        // sx={{
        //   width: 'full',
        //   fontWeight: 'bold',
        //   fontSize: (theme) => `${theme.fontSizes.h5}`,
        //   lineHeight: 'tight',
        //   color: (theme) => `${theme.colors.textDark}`,
        // }}
        >
          Excerpt
        </div>
        <p className='text-[#2d3748] pt-2 text-base'
        // sx={{
        //   color: (theme) => `${theme.colors.textPrimary}`,
        //   fontSize: (theme) => `${theme.fontSizes.h7}`,
        //   pt: (theme) => `${theme.space.spacing3}`,
        // }}
        >
          {excerpt}
        </p>
      </div>
    )}
  </div>
);

export default Excerpt;
