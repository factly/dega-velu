"use client"
import React from 'react'; // eslint-disable-line no-unused-vars
import { FaFacebookSquare, FaTwitterSquare, FaWhatsappSquare } from 'react-icons/fa';
import { jsx } from 'theme-ui';
import { useThemeUI } from 'theme-ui';

/**
 * TODO: Add other social links like pinterest, reddit, tumblr, email
 * TODO: fix uri and title when shared
 * TODO: Possibly add native share by using navigator.share
 * TODO: Button to expand shared sites list
 */

const ShareButtonGroup = ({ data, setRef }) => {
  const { theme } = useThemeUI();
  const { rawColors: colors } = theme;
  const { socialFacebook, socialTwitter, socialWhatsapp } = colors;
  const { h6 } = theme.fontSizes;
  let title = encodeURIComponent(data.title);
  // let url = encodeURIComponent(data.url)
  return (
    <div className='flex items-center justify-start md:justify-end text-xl a:first-of-type-[ml-0]'
      social-icon=""
      ref={setRef}
    >
      <a className='block font-semibold rounded m-1'
        title="Share on Facebook"
        href={`https://www.facebook.com/sharer.php?u=${data.url}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebookSquare color={socialFacebook} fontSize={h6} />
      </a>
      {/* title uri ====> href={`https://twitter.com/share?text=${title}-&url=${data.url}`} */}
      <a className='block font-semibold rounded m-1'
        title="Tweet it"
        href={`https://twitter.com/share?url=${data.url}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitterSquare color={socialTwitter} fontSize={h6} />
      </a>
      {/* title uri ===> href={`https://api.whatsapp.com/send?text=${title}-${data.url}`} */}
      <a className='block font-semibold rounded m-1'
        title="Share on WhatsApp"
        href={`https://api.whatsapp.com/send?text=${data.url}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsappSquare color={socialWhatsapp} fontSize={h6} />
      </a>
    </div>
  );
};

export default ShareButtonGroup;
