"use client"

import React, { useState, useEffect } from 'react'; // eslint-disable-line no-unused-vars

import FormatPageLayout from 'components/FormatPageLayout';
import { notFound } from 'next/navigation';
import Head from 'next/head';
import parseTiptapContent from 'src/utils/parseTiptapEditorData';

export default function CategoryDetailsComponent({ data }) {

  if (!data.category) {
    notFound();
  }

  const [readMore, setReadMore] = React.useState(true);
  const [isReadMoreNeeded, setIsReadMoreNeeded] = useState(false);

  useEffect(() => {
    if (process.browser) {
      const el = document.getElementById('category-description');
      setIsReadMoreNeeded(el?.clientHeight < el?.scrollHeight);
    }
  }, []);

  const header = (item) => {
    return (
      <div className='mb-6 text-xl'
      >
        <h1 className='text-center mb-6 text-2xl sm:text-[2rem] capitalize'
        >
          {item.name}
        </h1>
        <div className='px-4 overflow-hidden'
          id="category-description"
          style={{
            maxHeight: (theme) => (readMore ? `calc(${theme.lineHeights.normal}em * 6 )` : '100%'),
          }}
        >
          {process.browser && parseTiptapContent(item.description_html)}
        </div>
        {item.description && isReadMoreNeeded && (
          <button className='px-4 text-xl text-[#3B82F6]'
            type="button"
            onClick={() => setReadMore((prev) => !prev)}
          >
            {readMore ? 'Read more' : 'Read less'}
          </button>
        )}
      </div>
    );
  };

  return (
    <div>

      <FormatPageLayout
        type="category"
        posts={data.posts.nodes}
        formats={data.formats.nodes}
        item={data.category}
        header={header}
      />
    </div>
  );
}

