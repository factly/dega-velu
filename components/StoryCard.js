
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
      >
        <Link
          passHref href={`/${storyData.slug}`} className="vertical horizontal w-full flex no-underline hover:no-underline"
        >

          <div className={`flex justify-start items-start pr-4 py-2 ${imageSize}`}
          >
            {storyData.medium && (
              <img className='h-full w-full object-cover	rounded'
                alt={storyData.medium?.alt_text}
                src={storyData.medium?.url.proxy}
              />
            )}
          </div>
          <div className='w-full flex flex-col'
          >
            <p className='text-[#3B82F6] text-xs px-1'
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
            >
              {storyData.title}
            </div>
            {excerpt && (
              <p className='text-[#2d3748] text-base pt-2'
              >
                {storyData.excerpt}
              </p>
            )}
            <div className='flex pt-2 mt-auto'
            >
              <div
                className="vertical horizontal flex flex-col w-full justify-between items-start"
              >
                <div className='flex flex-row flex-wrap'
                >
                  <p className='text-[#718096] text-xs md:text-base mr-2 normal-case	'
                  >
                    {storyData.users?.map((user, i, arr) => (
                      <span key={i}>
                        {`${user.first_name} ${user.last_name}`} {arr.length - i > 1 && ','}
                      </span>
                    ))}
                  </p>
                </div>
                <p className='text-[#718096] text-xs md:text-base'
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
      >
        <Link className='flex flex-wrap no-underline hover:no-underline'
          passHref href={`/${storyData.slug}`}>

          <div className={`flex justify-start items-start py-2 ${imageSize}`}
          >
            {storyData.medium && (
              <img className='w-full h-full object-cover rounded'
                alt={storyData.medium?.alt_text}
                src={storyData.medium?.url.proxy}
              />
            )}
          </div>

          <p className='w-full text-[#718096] text-[0px] md:text-xs pt-2'
          >
            {storyData.subtitle}
          </p>
          <h2 className='w-full font-bold text-xl leading-tight text-[#2d3748] '
            style={{ overflowWrap: 'break-word' }}
          >
            {storyData.title}
          </h2>
          <p className='text-xl pt-2 text-[#2d3748]'
          >
            {storyData.excerpt}
          </p>
        </Link>
        <div className='hidden mt-auto py-4'
        >
          <div className='flex items-center justify-between'
          >
            <div className='flex justify-center items-center'
            >
              <p className='text-[0px] md:text.xs mr-2 normal-case	text-[#718096]'
              >
                {`${storyData.users[0]?.first_name} ${storyData.users[0]?.last_name}`}
              </p>
            </div>
            <p className='#718096 text-[0px] md:text.xs'
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
      >
        <Link className='w-full flex flex-col no-underline hover:no-underline'
          passHref href={`/${storyData.slug}`}>
          <div className={`flex justify-start items-start pr-4 py-2 ${imageSize}`}
          >
            {storyData.medium && (
              <img className='h-full w-full object-cover rounded'
                alt={storyData.medium?.alt_text}
                src={storyData.medium?.url.proxy}
              />
            )}
          </div>
          <div className='w-full flex flex-col'
          >
            <div
              id="nav-0"
              className=" w-full font-bold text-xl text-[#2d3748]"
            >
              {storyData.title}
            </div>
            <p className='text-[#2d3748] text-base pt-2'
            >
              {storyData.excerpt}
            </p>

            <div className='flex mt-auto pt-2'
            >
              <div
                className="vertical horizontal flex flex-col w-full justify-between items-start"
              >
                <div className='flex flex-row flex-wrap'
                >
                  <p className='text-[#718096] text-[0px] md:text-xs mr-2 normal-case	'
                  >
                    {`${storyData.users[0]?.first_name} ${storyData.users[0]?.last_name}`}
                  </p>
                </div>
                <p className='text-[#718096] text-[0px] md:text-xs'
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
        passHref href={`/${storyData.slug}`}>
        <article className='flex rounded-lg flex-col sm:flex-row m-1 mx-4 sm:4 border'
        >
          <div className='rounded-lg'
            style={{ minWidth: '15rem', maxWidth: '15rem', maxHeight: '15rem' }}
          >
            {storyData.medium && (
              <img className='h-full w-full object-cover rounded'
                alt={storyData.medium?.alt_text}
                src={storyData.medium?.url.proxy}
              />
            )}
          </div>
          <div className='p-6 flex flex-col justify-between'
          >
            <h2 className='pb-2'
            >{storyData.title}</h2>
            <p className='text-xs'
            >
              {_.truncate(storyData.excerpt, {
                length: 150,
                separator: /,?\.* +/,
              })}
            </p>
            <p className='text-xs pt-2 text-[#a0aec0]'
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
      >
        <div
          className="iframely-card flex flex-col w-full max-w-full"
        >
          <div className='max-w-full w-full flex overflow-hidden'
          >
            <div className='overflow-hidden relative w-full pb-[56.24999999%]'
            >
              <div className='absolute w-full h-full'
              >
                <Link className='block w-full h-full absolute no-underline touch-manipulation	z-20	'
                  passHref href={`/${storyData.slug}`}>
                  {storyData.medium && <img className='h-full object-cover'
                    src={storyData.medium?.url.proxy}
                  />}
                </Link>
              </div>
            </div>
          </div>
          <Link className='flex flex-col justify-between p-3 flex-[1_0_auto]'
            passHref href={`/${storyData.slug}`}>
            <h3 className='text-xl'
            >{storyData.title}</h3>
            {excerpt && (
              <p className='text-sm'
              >
                {_.truncate(storyData.excerpt, {
                  length: 150,
                  separator: /,?\.* +/,
                  omission: '...',
                })}
              </p>
            )}
            <div className='flex items-center text-[#919191] mr-1 text-[0.675rem]'
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
      >
        <div
          className="iframely-small flex items-center w-full max-w-full"
        >
          <div className='w-[150px] max-w-[150px] h-[150px]'
          >
            <Link className={` block w-[150px] h-[150px] no-underline bg-cover touch-manipulation bg-no-repeat bg-center`}
              style={{
                background: `url('${storyData.medium?.url.proxy}')`
              }}
              passHref href={`/${storyData.slug}`}>
            </Link>
          </div>
          <Link className='flex flex-col justify-between p-3'
            passHref href={`/${storyData.slug}`}>
            <h3>{storyData.title}</h3>
            <p className='text-sm '
            >
              {_.truncate(storyData.excerpt, {
                length: 150,
                separator: /,?\.* +/,
                omission: '...',
              })}
            </p>
            <div className='flex items-center mr-2 text-xs text-[#919191]'
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
