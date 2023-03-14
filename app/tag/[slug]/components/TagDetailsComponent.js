"use client"

import React from 'react'; // eslint-disable-line no-unused-vars
import { jsx } from 'theme-ui';
import {
  FaEnvelope,
  FaFacebookSquare,
  FaInstagramSquare,
  FaLink,
  FaLinkedin,
  FaTwitterSquare,
} from 'react-icons/fa';
import { client } from 'store/client';
import FormatPageLayout from 'components/FormatPageLayout';
import Head from 'next/head';
import { notFound } from 'next/navigation';

export default async function TagDetailsComponent({ data }) {


  if (!data.tag) {
    notFound();
  }
  const header = (item) => {
    return (
      <div className='mb-6 text-xl'
      >
        <h1 className='text-center capitalize mb-4 text-2xl sm:text-[2rem]'
        >
          {item.name}
        </h1>
      </div>
    );
  };
  return (
    <>
      <Head>
        <title> {data.tag.name} </title>
      </Head>
      <FormatPageLayout
        type="tag"
        posts={data.posts.nodes}
        formats={data.formats.nodes}
        item={data.tag}
        header={header}
      />
    </>
  );
}


