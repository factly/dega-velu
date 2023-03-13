"use client"
import React from 'react'; // eslint-disable-line no-unused-vars
import FormatPageLayout from 'components/FormatPageLayout';
import Head from 'next/head';
import {
  FaEnvelope,
  FaFacebookSquare,
  FaInstagramSquare,
  FaLink,
  FaLinkedin,
  FaTwitterSquare,
} from 'react-icons/fa';
import { notFound } from 'next/navigation';

const getIcon = (name) => {
  switch (name) {
    case 'twitter':
      return <FaTwitterSquare color="#1da1f2" size="1.75rem" />;
    case 'facebook':
      return <FaFacebookSquare color="#3b5998" size="1.75rem" />;
    case 'instagram':
      return <FaInstagramSquare color="#e1306c" size="1.75rem" />;
    case 'linkedin':
      return <FaLinkedin size="1.75rem" color="#0077b5" />;
    case 'email':
      return <FaEnvelope size="1.75rem" color="#172b4d" />;
    default:
      return <FaLink size="1.75rem" />;
  }
};

export default function UserDetailsFormat({ data }) {
  //const { dega } = data;
  if (!data.user) {
    notFound();
  }

  const name = data.user.display_name
    ? `${data.user.display_name}`
    : `${data.user.first_name} ${data.user.last_name}`;

  const header = (item) => {
    console.log(item);
    return (
      <div className='mb-4'
      //  sx={{ mb: (theme) => `${theme.space.spacing5}` }}
      >
        {item.medium && (
          <img className='mx-auto rounded-[50%] w-40 h-40 p-10'
            src={item.medium?.url.proxy}
            alt=""
          // sx={{
          //   borderRadius: '50%',
          //   width: 40,
          //   height: 40,
          //   mx: 'auto',
          //    padding: (theme) => `${theme.space.spacing8}`,
          // }}
          />
        )}
        <h1 className='text-center mb-4 text-[2rem] capitalize'
        // sx={{
        //   textAlign: 'center',
        //    fontSize: (theme) => `${theme.fontSizes.h4}`,
        //    mb: (theme) => `${theme.space.spacing5}`,
        //   textTransform: 'capitalize',
        // }}
        >
          {name}
        </h1>
        {item.description && (
          <p className='text-center pb-4'
          //  sx={{ textAlign: 'center', pb: (theme) => `${theme.space.spacing5}` }}
          >
            {item.description}
          </p>
        )}
        <div className='flex justify-center'
        // sx={{ display: 'flex', justifyContent: 'center' }}
        >
          {item.social_media_urls &&
            Object.keys(item.social_media_urls)?.map((name) => (
              <a className='mr-2'
                key={name}
                title={name}
                href={item.social_media_urls[name]}
                target="_blank"
                rel="noopener noreferrer"
              //  sx={{ mr: (theme) => `${theme.space.spacing3}` }}
              >
                {getIcon(name)}
              </a>
            ))}
          <a href={`mailto:${item.email}`} title="email">
            {getIcon('email')}
          </a>
        </div>
      </div>
    );
  }
  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <FormatPageLayout
        type="author"
        posts={data.posts.nodes}
        formats={data.formats.nodes}
        item={data.user}
        header={header}
        useSlug={false}
      />
    </>
  );
}

