
import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import { jsx } from 'theme-ui';
import Navbar from './Navbar';

import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      {/* <Seo
        title={`${space.site_title} - ${space.tag_line}`}
        // canonical={space.site_address}
        image={`${space.logo.url?.proxy}?resize:fill:1200:330/enlarge:1/gravity:sm/pd:150:40:150:40`}
        description={space.description !== 'null' ? space.description : space.site_title}
        fbAppId="587617254726291"
        fbPages="1521487944736293"
      >
        {space.fav_icon && <link rel="icon" href={`${space.fav_icon?.url?.proxy}`} />}
      </Seo> */}
      <Navbar />
      <main className='w-full text-xl md:text-2xl text-[#2d3748] leading-normal pt-4 mt-[60px] mx-auto flex flex-col justify-between'
        style={{ maxWidth: '1560px' }}
        sx={{
          width: 'full',
          fontSize: [(theme) => `${theme.fontSizes.h6}`, null, (theme) => `${theme.fontSizes.h5}`],
          color: (theme) => `${theme.colors.textPrimary}`,
          lineHeight: 'normal',
          pt: [(theme) => `${theme.space.spacing5}`, 0, 0],
          mt: '60px',
          minHeight: 'calc(100vh - 60px)',
          mx: 'auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
