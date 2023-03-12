"use client"
import React from 'react'
import {
  FaEnvelope,
  FaFacebookSquare,
  FaInstagramSquare,
  FaLink,
  FaLinkedin,
  FaTwitterSquare,
} from 'react-icons/fa';

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

const Header = ({ item }) => {
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

export default Header