/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
"use client"

import React, { useState, useEffect } from 'react';
import { jsx } from 'theme-ui';
import { FaHome, FaBars } from 'react-icons/fa';
import Link from 'next/link';

export default function NavBar({ logo, menu }) {
  // const mainMenu = menu.nodes.filter((i) => i.slug === 'main')[0];
  const mainMenu = {
    menu: [
      { name: 'Fact Checks', title: 'Fact Checks', url: '/format/fact-check' },
      { name: 'Article', title: 'Articles', url: '/format/article' },
    ],
    id: '1',
    slug: 'main',
    name: 'Main',
  };
  const [showMenu, setShowMenu] = useState(false);
  const [width, setWidth] = useState(0);

  const updateWidth = () => {
    const windowWidth = window.innerWidth;
    setWidth(windowWidth);
  };

  useEffect(() => {
    updateWidth();
    window.addEventListener('resize', updateWidth);
    if (width >= 1024) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
    return () => window.removeEventListener('resize', updateWidth);
  }, [width]);

  const handleClick = () => {
    setShowMenu((prevState) => !prevState);
  };
  return (
    <React.Fragment>
      <div
        className='fixed z-[9998] top-0 left-0 right-0 border-b bg-[#fff]'
      // sx={{
      //   position: 'fixed',
      //   zIndex: '9998',
      //   top: 0,
      //   left: 0,
      //   right: 0,
      //   bg: (theme) => `${theme.colors.bgLight}`,
      //   borderBottomWidth: '1px',
      // }}
      >
        <nav className='sticky flex max-w-[1560px] min-h-[60px] mx-auto flex-wrap lg:flex-wrap justify-between lg:justify-start items-center px-4 py-2'
        // sx={{
        //   position: 'sticky',
        //   display: 'flex',
        //   maxWidth: '1560px',
        //   minHeight: '60px',
        //   mx: 'auto',
        //   flexWrap: ['wrap', null, null, 'wrap'],
        //   alignItems: 'center',
        //   justifyContent: ['space-between', null, null, 'flex-start'],
        //   px: (theme) => `${theme.space.spacing5}`,
        //   py: (theme) => `${theme.space.spacing3}`,

        //   '& a:hover': {
        //     color: (theme) => `${theme.colors.textLinkHoverPrimary}`,
        //   },
        // }}
        >
          <Link
            className='relative lg:absolute lg:top-[50%] lg:left-[50%] transform-none lg:-translate-x-1/2 -translate-y-1/2 z-[999] hover:text-[#ea364a]'
            // sx={{
            //   position: ['relative', null, null, 'absolute'],
            //   transform: ['none', null, null, 'translate(-50%,-50%)'],
            //   top: [null, null, null, '50%'],
            //   left: [null, null, null, '50%'],
            //   zIndex: 999,
            // }}
            passHref href="/">
            <img className='h-8 mx-auto'
              // sx={{ height: 8, mx: [null, null, null, 'auto'] }}
              src="https://images.factly.org/f/dega/health/2021/2/1615562341465_factly-r-logo?h:60"
              alt="factly"
            />
          </Link>
          <button className='lg:hidden overflow-visible'
            type="button"
            // sx={{ display: [null, null, null, 'none'] }}
            onClick={() => handleClick()}
          >
            <FaBars />
          </button>
          <div className={`${showMenu ? 'flex' : 'hidden'} z-[998] relative flex-col lg:flex-row grow items-center basis-full overflow-hidden`}
          // sx={{
          //   display: showMenu ? 'flex' : 'none',
          //   zIndex: 998,
          //   position: 'relative',
          //   flexDirection: ['column', null, null, 'row'],
          //   flexGrow: 1,
          //   alignItems: 'center',
          //   flexBasis: '100%',
          //   overflow: 'hidden',
          // }}
          >
            <ul className='flex items-center flex-col lg:flex-row list-none'
              sx={{
                // display: 'flex',
                // alignItems: 'center',
                // flexDirection: ['column', null, null, 'row'],
                // listStyle: 'none',
              }}
            >
              <li className='hidden lg:block'
              // sx={{ display: ['none', null, null, 'block'] }}
              >
                <Link className='px-2 xl:px-4 block py-2 hover:text-[#ea364a]'
                  // sx={{
                  //   px: [
                  //     (theme) => `${theme.space.spacing3}`,
                  //     null,
                  //     null,
                  //     null,
                  //     (theme) => `${theme.space.spacing5}`,
                  //   ],
                  //   display: 'block',
                  //   py: (theme) => `${theme.space.spacing3}`,
                  // }} 
                  passHref href="/">
                  {' '}
                  <FaHome />
                </Link>
              </li>

              {mainMenu?.menu?.map((menuItem, index) => (
                <li key={menuItem.title}>
                  <Link className='px-2 xl:px-4 block py-2 uppercase font-semibold text-xs focus:outline-none hover:text-[#ea364a]'
                    // sx={{
                    //   px: [
                    //     (theme) => `${theme.space.spacing3}`,
                    //     null,
                    //     null,
                    //     null,
                    //     (theme) => `${theme.space.spacing5}`,
                    //   ],
                    //   display: 'block',
                    //   py: (theme) => `${theme.space.spacing3}`,
                    //   textTransform: 'uppercase',
                    //   fontWeight: 'semibold',
                    //   fontSize: [(theme) => `${theme.fontSizes.h8}`],
                    //   '&:focus': { outline: 'none' },
                    // }}
                    passHref key={`navbar-${index}`} href={menuItem.url} title={menuItem.title}>
                    {' '}
                    {menuItem.name}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className='flex items-center flex-col lg:flex-row list-none lg:ml-auto'
            // sx={{
            //   display: 'flex',
            //   alignItems: 'center',
            //   flexDirection: ['column', null, null, 'row'],
            //   listStyle: 'none',
            //   ml: [null, null, null, 'auto'],
            // }}
            >
              <li>
                <Link className='px-2 xl:px-4 block py-2 uppercase font-semibold text-xs focus:outline-none hover:text-[#ea364a]'
                  // sx={{
                  //   px: [
                  //     (theme) => `${theme.space.spacing3}`,
                  //     null,
                  //     null,
                  //     null,
                  //     (theme) => `${theme.space.spacing5}`,
                  //   ],
                  //   display: 'block',
                  //   py: (theme) => `${theme.space.spacing3}`,
                  //   textTransform: 'uppercase',
                  //   fontWeight: 'semibold',
                  //   fontSize: [(theme) => `${theme.fontSizes.h8}`],
                  //   '&:focus': { outline: 'none' },
                  // }}
                  passHref href="/about">
                  {' '}
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
}
