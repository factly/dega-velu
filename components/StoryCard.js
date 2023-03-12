
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */

'use client'

import { jsx } from 'theme-ui';
import React from 'react'; // eslint-disable-line no-unused-vars
import Link from 'next/link';
import _ from 'lodash';
import parseDate from '../src/utils/parseDate';

/**
 * TODO: Change the data structure of props
 * TODO: Make images more responsive
 * TODO: Make most of the items optional
 * TODO: Possibly increase padding
 * TODO: Probably change the name of the component to "Card"
 * TODO: Refactor to decrease repetition of code
 */

const StoryCard = ({
  storyData,
  cardStyle = 'basic',
  excerpt = false,
  imageSize = 'w-full h-40'
}) => (
  <>
    {cardStyle === 'basic' && (
      <article
        className={`${cardStyle} flex flex-col leading-tight border-b last-child:border-b-0 p-6
        border-[#edf2f7]`}
      // sx={{
      //   display: 'flex',
      //   flexDirection: 'column',
      //   lineHeight: 'tight',
      //   borderBottomWidth: '1px',
      //   '&:last-child': { borderBottomWidth: 0 },
      //   p: (theme) => `${theme.space.spacing6}`,
      //   borderColor: (theme) => `${theme.colors.borderPrimary}`,
      // }}
      >
        <Link
          // sx={{
          //   width: 'full',
          //   display: 'flex',
          //   textDecoration: 'none',
          //   '&:hover': { textDecoration: 'none' },
          // }}
          passHref href={`/${storyData.slug}`} className="vertical horizontal w-full flex no-underline hover:no-underline"
        >

          <div className={`flex justify-start items-start pr-4 py-2 ${imageSize}`}
          // sx={{
          //   display: 'flex',
          //   justifyContent: 'flex-start',
          //   alignItems: 'flex-start',
          //   pr: (theme) => `${theme.space.spacing5}`,
          //   py: (theme) => `${theme.space.spacing3}`,
          // }}
          >
            {storyData.medium && (
              <img className='h-full w-full object-cover	rounded'
                alt={storyData.medium?.alt_text}
                src={storyData.medium?.url.proxy}
              // sx={{
              //   height: 'full',
              //   width: 'full',
              //   objectFit: 'cover',
              //   borderRadius: 'default',
              // }}
              // onError={addDefaultSrc}
              />
            )}
          </div>
          <div className='w-full flex flex-col'
          // sx={{ width: 'full', display: 'flex', flexDirection: 'column' }}
          >
            <p className='text-[#3B82F6] text-xs px-1'
            // sx={{
            //   color: (theme) => `${theme.colors.textLinkPrimary}`,
            //   fontSize: (theme) => `${theme.fontSizes.h8}`,
            //   px: (theme) => `${theme.space.spacing2}`,
            // }}
            >
              {storyData.categories?.map((category, i, arr) => (
                <span key={i}>
                  {category.name}
                  {arr.length - i > 1 && ', '}
                </span>
              ))}
            </p>
            <div
              id="nav-0"
              className="active font-bold w-full text-xl text-[#2d3748]"
            // sx={{
            //   width: 'full',
            //   fontWeight: 'bold',
            //   fontSize: (theme) => `${theme.fontSizes.h6}`,
            //   color: (theme) => `${theme.colors.textPrimary}`,
            // }}
            >
              {storyData.title}
            </div>
            {excerpt && (
              <p className='text-[#2d3748] text-base pt-2 '
              // sx={{
              //   color: (theme) => `${theme.colors.textPrimary}`,
              //   fontSize: (theme) => `${theme.fontSizes.h7}`,
              //   pt: (theme) => `${theme.space.spacing3}`,
              // }}
              >
                {storyData.excerpt}
              </p>
            )}
            <div className='flex pt-2 mt-auto'
            // sx={{ display: 'flex', mt: 'auto', pt: (theme) => `${theme.space.spacing3}` }}
            >
              <div
                className="vertical horizontal flex flex-col w-full justify-between items-start"
              // sx={{
              //   display: 'flex',
              //   flexDirection: 'column',
              //   width: 'full',
              //   justifyContent: 'space-between',
              //   alignItems: 'flex-start',
              // }}
              >
                <div className='flex flex-row flex-wrap'
                // sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}
                >
                  <p className='text-[#718096] text-xs md:text-base mr-2 normal-case	'
                  // sx={{
                  //   color: (theme) => `${theme.colors.textSecondary}`,
                  //   fontSize: [
                  //     (theme) => `${theme.fontSizes.h8}`,
                  //     null,
                  //     (theme) => `${theme.fontSizes.h7}`,
                  //   ],
                  //   mr: (theme) => `${theme.space.spacing3}`,
                  //   textTransform: 'none',
                  // }}
                  >
                    {storyData.users?.map((user, i, arr) => (
                      <span key={i}>
                        {`${user.first_name} ${user.last_name}`} {arr.length - i > 1 && ','}
                      </span>
                    ))}
                  </p>
                </div>
                <p className='text-[#718096] text-xs md:text-base'
                // sx={{
                //   color: (theme) => `${theme.colors.textSecondary}`,
                //   fontSize: [
                //     (theme) => `${theme.fontSizes.h8}`,
                //     null,
                //     (theme) => `${theme.fontSizes.h7}`,
                //   ],
                // }}
                >
                  {parseDate(storyData.published_date)}
                </p>
              </div>
            </div>
          </div>
        </Link>
      </article>
    )}

    {cardStyle === 'featured' && (
      <article className='bg-[white] rounded-t	rounded-b-none overflow-hidden px-6'
      // sx={{
      //   bg: 'white',
      //   borderTopLeftRadius: 'default',
      //   borderTopRightRadius: 'default',
      //   borderBottomLeftRadius: 'none',
      //   borderBottomRightRadius: 'none',
      //   overflow: 'hidden',
      //   px: (theme) => `${theme.space.spacing6}`,
      // }}
      >
        <Link className='flex flex-wrap no-underline hover:no-underline'
          // sx={{
          //   display: 'flex',
          //   flexWrap: 'wrap',
          //   textDecoration: 'none',
          //   '&:hover': { textDecoration: 'none' },
          // }}
          passHref href={`/${storyData.slug}`}>

          <div className={`flex justify-start items-start py-2 ${imageSize}`}
          // sx={{
          //   display: 'flex',
          //   justifyContent: 'flex-start',
          //   alignItems: 'flex-start',
          //   // pr: (theme) => `${theme.space.spacing5}`,
          //   py: (theme) => `${theme.space.spacing3}`,
          // }}
          >
            {storyData.medium && (
              <img className='w-full h-full object-cover rounded'
                alt={storyData.medium?.alt_text}
                src={storyData.medium?.url.proxy}
              // sx={{
              //   height: 'full',
              //   width: 'full',
              //   objectFit: 'cover',
              //   borderRadius: 'default',
              // }}
              // onError={addDefaultSrc}
              />
            )}
          </div>

          <p className='w-full text-[#718096] text-[0px] md:text-xs pt-2'
          // sx={{
          //   width: 'full',
          //   color: (theme) => `${theme.colors.textSecondary}`,
          //   fontSize: [0, null, (theme) => `${theme.fontSizes.h8}`],
          //   pt: (theme) => `${theme.space.spacing3}`,
          // }}
          >
            {storyData.subtitle}
          </p>
          <h2 className='w-full font-bold text-xl leading-tight text-[#2d3748] '
          // sx={{
          //   width: 'full',
          //   fontWeight: 'bold',
          //   fontSize: (theme) => `${theme.fontSizes.h6}`,
          //   lineHeight: 'tight',
          //   color: (theme) => `${theme.colors.textPrimary}`,
          //   overflowWrap: 'break-word',
          // }}
          >
            {storyData.title}
          </h2>
          <p className='text-xl pt-2 text-[#2d3748]'
          // sx={{
          //   fontSize: (theme) => `${theme.fontSizes.bodyArticle}`,
          //   pt: (theme) => `${theme.space.spacing3}`,
          //   overflowWrap: 'break-word',
          //   color: (theme) => `${theme.colors.textPrimary}`,
          // }}
          >
            {storyData.excerpt}
          </p>
        </Link>
        <div className='hidden mt-auto py-4'
        // sx={{ flex: 'none', mt: 'auto', py: (theme) => `${theme.space.spacing5}` }}
        >
          <div className='flex items-center justify-between'
          // sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
          >
            <div className='flex justify-center items-center'
            // sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
              <p className='text-[0px] md:text.xs mr-2 normal-case	text-[#718096]'
              // sx={{
              //   color: (theme) => `${theme.colors.gray[6]}`,
              //   fontSize: [0, null, (theme) => `${theme.fontSizes.h8}`],
              //   mr: (theme) => `${theme.space.spacing3}`,
              //   textTransform: 'none',
              // }}
              >
                {`${storyData.users[0]?.first_name} ${storyData.users[0]?.last_name}`}
              </p>
            </div>
            <p className='#718096 text-[0px] md:text.xs'
            // sx={{
            //   color: (theme) => `${theme.colors.textSecondary}`,
            //   fontSize: [0, null, (theme) => `${theme.fontSizes.h8}`],
            // }}
            >
              {parseDate(storyData.published_date)}
            </p>
          </div>
        </div>
      </article>
    )}
    {cardStyle === 'vertical' && (
      <article
        className={` ${cardStyle} flex flex-col leading-tight border-b last-child:border-b-0 p-6 border-[#edf2f7]`}
      // sx={{
      //   display: 'flex',
      //   flexDirection: 'column',
      //   lineHeight: 'tight',
      //   borderBottomWidth: '1px',
      //   '&:last-child': { borderBottomWidth: 0 },
      //   p: (theme) => `${theme.space.spacing6}`,
      //   borderColor: (theme) => `${theme.colors.borderPrimary}`,
      // }}
      >
        <Link className='w-full flex flex-col no-underline hover:no-underline'
          // sx={{
          //   width: 'full',
          //   display: 'flex', mn',
          //   textDecoration: 'none',
          //   '&:hover': { textDecoration: 'none' },
          // }}
          passHref href={`/${storyData.slug}`}>
          <div className={`flex justify-start items-start pr-4 py-2 ${imageSize}`}
          // sx={{
          //   display: 'flex',
          //   justifyContent: 'flex-start',
          //   alignItems: 'flex-start',
          //   pr: (theme) => `${theme.space.spacing5}`,
          //   py: (theme) => `${theme.space.spacing3}`,
          // }}
          >
            {storyData.medium && (
              <img className='h-full w-full object-cover rounded'
                alt={storyData.medium?.alt_text}
                src={storyData.medium?.url.proxy}
              // sx={{
              //   height: 'full',
              //   width: 'full',
              //   objectFit: 'cover',
              //   borderRadius: 'default',
              // }}
              // onError={addDefaultSrc}
              />
            )}
          </div>
          <div className='w-full flex flex-col'
          // sx={{ width: 'full', display: 'flex', flexDirection: 'column' }}
          >
            <div
              id="nav-0"
              className=" w-full font-bold text-xl text-[#2d3748]"
            // sx={{
            //   width: 'full',
            //   fontWeight: 'bold',
            //   fontSize: (theme) => `${theme.fontSizes.h6}`,
            //   color: (theme) => `${theme.colors.textPrimary}`,
            // }}
            >
              {storyData.title}
            </div>
            <p className='text-[#2d3748] text-base pt-2'
            // sx={{
            //   color: (theme) => `${theme.colors.textPrimary}`,
            //   fontSize: (theme) => `${theme.fontSizes.h7}`,
            //   pt: (theme) => `${theme.space.spacing3}`,
            // }}
            >
              {storyData.excerpt}
            </p>

            <div className='flex mt-auto pt-2'
            // sx={{ display: 'flex', mt: 'auto', pt: (theme) => `${theme.space.spacing3}` }}
            >
              <div
                className="vertical horizontal flex flex-col w-full justify-between items-start"
              // sx={{
              //   display: 'flex',
              //   flexDirection: 'column',
              //   width: 'full',
              //   justifyContent: 'space-between',
              //   alignItems: 'flex-start',
              // }}
              >
                <div className='flex flex-row flex-wrap'
                // sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}
                >
                  <p className='text-[#718096] text-[0px] md:text-xs mr-2 normal-case	'
                  // sx={{
                  //   color: (theme) => `${theme.colors.textSecondary}`,
                  //   fontSize: [0, null, (theme) => `${theme.fontSizes.h8}`],
                  //   mr: (theme) => `${theme.space.spacing3}`,
                  //   textTransform: 'none',
                  // }}
                  >
                    {`${storyData.users[0]?.first_name} ${storyData.users[0]?.last_name}`}
                  </p>
                </div>
                <p className='text-[#718096] text-[0px] md:text-xs'
                // sx={{
                //   color: (theme) => `${theme.colors.textSecondary}`,
                //   fontSize: [0, null, (theme) => `${theme.fontSizes.h8}`],
                // }}
                >
                  {parseDate(storyData.published_date)}
                </p>
              </div>
            </div>
          </div>
        </Link>
      </article>
    )}
    {cardStyle === 'withoutimage' && <article>card without image</article>}
    {cardStyle === 'card' && (
      <Link className='w-full no-underline transition-all	hover:no-underline hover:scale-105 '
        // sx={{
        //   width: 'full',
        //   textDecoration: 'none',
        //   transition: 'all 0.5s',
        //   '&:hover': { textDecoration: 'none', transform: 'scale(1.04)' },
        // }}
        passHref href={`/${storyData.slug}`}>
        <article className='flex rounded-lg flex-col sm:flex-row m-1 mx-4 sm:4 border'
        // sx={{
        //   display: 'flex',
        //   flexDirection: ['column', 'row'],
        //   borderWidth: '1px',
        //   m: (theme) => `${theme.space.spacing2} ${theme.space.spacing5}`,
        //   borderRadius: 'lg',
        // }}
        >
          <div className='rounded-lg'
            style={{ minWidth: '15rem', maxWidth: '15rem', maxHeight: '15rem' }}
          // sx={{ borderRadius: 'lg' }}
          >
            {storyData.medium && (
              <img className='h-full w-full object-cover rounded'
                alt={storyData.medium?.alt_text}
                src={storyData.medium?.url.proxy}
              // sx={{
              //   height: 'full',
              //   width: 'full',
              //   objectFit: 'cover',
              //   borderRadius: 'default',
              // }}
              //onError={addDefaultSrc}
              />
            )}
          </div>
          <div className='p-6 flex flex-col justify-between'
          // sx={{
          //   p: (theme) => `${theme.space.spacing6}`,
          //   display: 'flex',
          //   flexDirection: 'column',
          //   justifyContent: 'space-between',
          // }}
          >
            <h2 className='pb-2'
            // sx={{ pb: (theme) => `${theme.space.spacing3}` }}
            >{storyData.title}</h2>
            <p className='text-xs'
            // sx={{ fontSize: (theme) => `${theme.fontSizes.h8}` }}
            >
              {_.truncate(storyData.excerpt, {
                length: 150,
                separator: /,?\.* +/,
              })}
            </p>
            <p className='text-xs pt-2 text-[#a0aec0]'
            // sx={{
            //   fontSize: (theme) => `${theme.fontSizes.h8}`,
            //   pt: (theme) => `${theme.space.spacing3}`,
            //   color: (theme) => `${theme.colors.gray[5]}`,
            // }}
            >
              <span>{`${storyData.users[0]?.first_name} ${storyData.users[0]?.last_name}`}</span>
              {' / '}
              <span>{parseDate(storyData.published_date)}</span>
            </p>
          </div>
        </article>
      </Link>
    )}
    {cardStyle === 'iframely' && (
      <div className='flex border border-[rgb(222,222,222)]'
      // sx={{
      //   display: 'flex',
      //   border: '1px solid rgb(222,222,222)',
      // }}
      >
        <div
          className="iframely-card flex flex-col w-full max-w-full"
        // sx={{ display: 'flex', flexDirection: 'column', width: 'full', maxWidth: 'full' }}
        >
          <div className='max-w-full w-full flex overflow-hidden'
          // sx={{ maxWidth: '100%', width: '100%', display: 'flex', overflow: 'hidden' }}
          >
            <div className='overflow-hidden relative w-full pb-[56.24999999%]'
            // sx={{
            //   paddingBottom: '56.24999999%',
            //   overflow: 'hidden',
            //   position: 'relative',
            //   width: '100%',
            // }}
            >
              <div className='absolute w-full h-full'
              //  sx={{ position: 'absolute', width: '100%', height: ' 100%' }}
              >
                <Link className='block w-full h-full absolute no-underline touch-manipulation	z-20	'
                  // sx={{
                  //   zIndex: 20,
                  //   display: 'block',
                  //   width: '100%',
                  //   height: '100%',
                  //   position: 'absolute',
                  //   textDecoration: 'none',
                  //   touchAction: 'manipulation',
                  // }}
                  passHref href={`/${storyData.slug}`}>
                  {storyData.medium && <img className='h-full object-cover'
                    // sx={{ height: '100%', objectFit: 'cover' }}
                    src={storyData.medium?.url.proxy}
                  />}
                </Link>
              </div>
            </div>
          </div>
          <Link className='flex flex-col justify-between p-3 flex-[1_0_auto]'
            // sx={{
            //   p: (theme) => `${theme.space.spacing4}`,
            //   display: 'flex',
            //   flexDirection: 'column',
            //   justifyContent: 'space-between',
            //   flex: '1 0 auto',
            // }}
            passHref href={`/${storyData.slug}`}>
            <h3 className='text-xl'
            // sx={{ fontSize: (theme) => `${theme.fontSizes.h6}` }}
            >{storyData.title}</h3>
            {excerpt && (
              <p className='text-sm'
              // sx={{ fontSize: (theme) => `${theme.fontSizes.bodySmall}` }}
              >
                {_.truncate(storyData.excerpt, {
                  length: 150,
                  separator: /,?\.* +/,
                  omission: '...',
                })}
              </p>
            )}
            <div className='flex items-center text-[#919191] mr-1 text-[0.675rem]'
            // sx={{
            //   display: 'flex',
            //   alignItems: 'center',
            //   span: {
            //     mr: (theme) => `${theme.space.spacing2}`,
            //     fontSize: (theme) => `${theme.fontSizes.bodyExtraSmall}`,
            //     color: '#919191',
            //   },
            // }}
            >
              {storyData.format && (
                <>
                  <span>{storyData.format.name}</span>
                  <span>/</span>
                </>
              )}
              {storyData.users[0]?.first_name && (
                <>
                  <span>{`${storyData.users[0]?.first_name} ${storyData.users[0]?.last_name}`}</span>
                  <span>/</span>
                </>
              )}
              <span>{parseDate(storyData.published_date)}</span>
            </div>
          </Link>
        </div>
      </div>
    )}
    {cardStyle === 'iframely-small' && (
      <div className='flex my-4 border border-[rgb(222,222,222)]'
      // sx={{
      //   display: 'flex',
      //   my: (theme) => `${theme.space.spacing5}`,
      //   border: '1px solid rgb(222,222,222)',
      // }}
      >
        <div
          className="iframely-small flex items-center w-full max-w-full"
        // sx={{ display: 'flex', alignItems: 'center', width: 'full', maxWidth: 'full' }}
        >
          <div className='w-[150px] max-w-[150px] h-[150px]'
          // sx={{ width: '150px', maxWidth: '150px', height: '150px' }}
          >
            <Link className={` block w-[150px] h-[150px] no-underline bg-cover touch-manipulation bg-no-repeat bg-center`}
              style={{
                background: `url('${storyData.medium?.url.proxy}')`
              }}
              // sx={{
              //   display: 'block',
              //   width: '150px',
              //   height: '150px',
              //   background: 'no-repeat center',
              //   backgroundSize: ' cover',
              //   backgroundImage: `url(${storyData.medium?.url.proxy})`,
              //   textDecoration: 'none',
              //   touchAction: 'manipulation',
              // }}
              passHref href={`/${storyData.slug}`}>
            </Link>
          </div>
          <Link className='flex flex-col justify-between p-3'
            // sx={{
            //   p: (theme) => `${theme.space.spacing4}`,
            //   display: 'flex',
            //   flexDirection: 'column',
            //   justifyContent: 'space-between',
            // }}
            passHref href={`/${storyData.slug}`}>
            <h3>{storyData.title}</h3>
            <p className='text-sm '
            // sx={{ fontSize: (theme) => `${theme.fontSizes.bodySmall}` }}
            >
              {_.truncate(storyData.excerpt, {
                length: 150,
                separator: /,?\.* +/,
                omission: '...',
              })}
            </p>
            <div className='flex items-center mr-2 text-xs text-[#919191]'
            // sx={{
            //   display: 'flex',
            //   alignItems: 'center',
            //   span: {
            //     mr: (theme) => `${theme.space.spacing3}`,
            //     fontSize: (theme) => `${theme.fontSizes.h8}`,
            //     color: '#919191',
            //   },
            // }}
            >
              {storyData.format && (
                <>
                  <span>{storyData.format.name}</span>
                  <span>/</span>
                </>
              )}
              {storyData.users[0]?.first_name && (
                <>
                  {' '}
                  <span>{`${storyData.users[0]?.first_name} ${storyData.users[0]?.last_name}`}</span>
                  <span>/</span>
                </>
              )}
              <span>{parseDate(storyData.published_date)}</span>
            </div>
          </Link>
        </div>
      </div>
    )}
  </>
);

export default StoryCard;
