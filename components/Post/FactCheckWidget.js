/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
"use client"
import React, { useEffect, useRef, useState } from 'react'; // eslint-disable-line no-unused-vars
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { jsx } from 'theme-ui';
import parseEditorJsData from '../../src/utils/parseEditorJsData';
/**
 * TODO: Change PLaceholder Img to color
 * TODO: Add resize observer
 * TODO: Add fontsizes to other elements
 * TODO: Disabling the buttons for first and last buttons
 * TODO: Fix the resize issue on canvas for basic widget
 */

function FactCheckWidget({ claims }) {
  const sliderElement = useRef(null);
  const [scrollWidth, setScrollWidth] = useState(0);

  const [disable, setDisable] = useState({ left: false, right: false });
  const CLAIM_RATING = {
    false: `#e53e3e`,
    true: `#38a169`,
    misleading: `#718096`,
    unverified: `#d69e2e`,
    'partly-true': `#8eb307`,
  };
  const handleNextClick = async () => {
    sliderElement.current.scrollLeft += scrollWidth;
  };

  const handlePrevClick = () => {
    sliderElement.current.scrollLeft -= scrollWidth;
  };

  useEffect(() => {
    if (!sliderElement.current) return;

    if (sliderElement.current.childElementCount <= 1) {
      setDisable({ left: true, right: true });
      sliderElement.current.style = { 'overflow-x': 'unset' };
      return;
    }

    const maxScroll = Math.round(
      sliderElement.current.children[1].getBoundingClientRect().x -
      sliderElement.current.firstElementChild.getBoundingClientRect().x,
    );
    setScrollWidth(maxScroll);
  }, []);
  /* 
  useEffect(()=>{
    if(!sliderElement.current) return;
    if(sliderElement.current.firstElementChild.getBoundingClientRect().x-num>=0) {
      setDisable({left:true})
    }
    if(sliderElement.current.lastElementChild.getBoundingClientRect().x-num<=0) {
      setDisable({right:true})
    }
  },[sliderElement.current ]) */

  return (
    <div className='w-full lg:w-[3/4] mx-auto text-base mb-4'
    // sx={{
    //   width: ['full', null, null, '3/4'],
    //   mx: 'auto',
    //   fontSize: (theme) => `${theme.fontSizes.body}`,
    //   mb: (theme) => `${theme.space.spacing5}`,
    // }}
    >


      {claims.length >= 1 && (
        <React.Fragment>
          <div className='flex flex-row justify-between content-center pt-6 pb-2'
          // sx={{
          //   display: 'flex',
          //   flexDirection: 'row',
          //   alignContent: 'center',
          //   justifyContent: 'space-between',
          //   pt: (theme) => `${theme.space.spacing6}`,
          //   pb: (theme) => `${theme.space.spacing3}`,
          // }}
          >
            <button className={`${disable.left ? 'cursor-not-allowed' : 'cursor-pointer'} ${disable.left ? 'opacity[0.5]' : ""} border border-[#edf2f7] rounded text-left text-xl p-2 focus: outline-none`}

              type="button"
              onClick={handlePrevClick}
              href-id="claim-1"
              disabled={disable.left}
            // sx={{
            //   borderWidth: '1px',
            //   borderColor: (theme) => `${theme.colors.borderPrimary}`,
            //   borderRadius: 'default',
            //   textAlign: 'left',
            //   fontSize: (theme) => `${theme.fontSizes.h6}`,
            //   p: (theme) => `${theme.space.spacing3}`,
            //   '&:focus': { outline: 'none' },
            //   cursor: disable.left ? 'not-allowed' : 'pointer',
            //   opacity: disable.left ? 0.5 : null,
            // }}
            >
              <FaChevronLeft className='fill-current	w-4 h-4'
              // sx={{ fill: 'currentColor', width: 4, height: 4 }} 

              />
            </button>
            <h2 className='w-full py-2 text-center uppercase font-bold font-[metropolis]'
            // sx={{
            //   width: 'full',
            //   py: (theme) => `${theme.space.spacing3}`,
            //   textAlign: 'center',
            //   fontFamily: (theme) => `${theme.fonts.metropolis}`,
            //   textTransform: 'uppercase',
            //   fontWeight: 'bold',
            // }}
            >
              List of claims
            </h2>
            <button className={`${disable.right ? 'cursor-not-allowed' : 'cursor-pointer'} ${disable.right ? 'opacity[0.5]' : ""} border border-[#edf2f7] rounded text-left text-xl p-2 focus: outline-none`}

              type="button"
              onClick={handleNextClick}
              href-id="claim-1"
              disabled={disable.right}
            // sx={{
            //   borderWidth: '1px',
            //   borderColor: (theme) => `${theme.colors.borderPrimary}`,
            //   borderRadius: 'default',
            //   textAlign: 'left',
            //   fontSize: (theme) => `${theme.fontSizes.h6}`,
            //   p: (theme) => `${theme.space.spacing3}`,
            //   '&:focus': { outline: 'none' },
            //   cursor: disable.right ? 'not-allowed' : 'pointer',
            //   opacity: disable.right ? 0.5 : null,
            // }}
            >
              <FaChevronRight className='fill-current	w-4 h-4'
              // sx={{ fill: 'currentColor', width: 4, height: 4 }} 

              />
            </button>
          </div>
          <div
            ref={sliderElement}
            className="sliderF flex overflow-x-auto pb-6"
          // sx={{ display: 'flex', overflowX: 'auto', pb: (theme) => `${theme.space.spacing6}` }}
          >
            {claims?.map((claim, i) => (
              <div className='inline-block w-full flex-none snap-start mr-6'
                id={`claim-${i}`}
                key={i}
              // sx={{
              //   display: 'inline-block',
              //   flex: 'none',
              //   width: 'full',
              //   scrollSnapAlign: 'start',
              //   mr: (theme) => `${theme.space.spacing6}`,
              // }}
              >
                <div className='w-full flex flex-col border shadow-lg	'
                // sx={{
                //   width: 'full',
                //   display: 'flex',
                //   flexDirection: 'column',
                //   borderWidth: '1px',
                //   boxShadow: 'lg',
                // }}
                >
                  <div className='flex justify-between items-center'
                  // sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                  >
                    <div className='flex items-baseline p-4'
                    // sx={{
                    //   display: 'flex',
                    //   p: (theme) => `${theme.space.spacing5}`,
                    //   alignItems: 'baseline',
                    // }}
                    >
                      <h2 className='font-bold mr-2'
                      // sx={{ fontWeight: 'bold', mr: (theme) => `${theme.space.spacing3}` }}
                      >
                        Claimant:{' '}
                      </h2>
                      {claim.claimant.name}
                    </div>
                    {/* 
                    // Share button
                    <div
                      sx={{
                        display: 'flex',
                        flex: '1 1 0%',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                      }}
                    > 
                      <a
                        sx={{
                          display: 'block',
                          px: 2,
                          py: 1,
                          fontWeight: 'semibold',
                          borderRadius: 'default',
                          // '&:first-child': { px: 0 },
                          '&:hover': { bg: (theme) => `${theme.colors.gray[8]}` },
                        }}
                        href="/"
                      >
                        <svg
                          sx={{
                            fill: 'currentColor',
                            stroke: 'currentColor',
                            width: 5,
                            height: 5,
                            color: (theme) => `${theme.colors.gray[4]}`,
                          }}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 36 36"
                        >
                          <g transform="translate(-807 -2277)">
                            <ellipse
                              cx="18"
                              cy="18"
                              rx="18"
                              ry="18"
                              transform="translate(807 2277)"
                              stroke="#fff"
                            />
                            <path
                              d="M18,0A18,18,0,1,0,36,18,18,18,0,0,0,18,0ZM16,18a3.158,3.158,0,0,1-.188,1.068l5.024,2.417a3.225,3.225,0,1,1-.789,1.64L14.7,20.552a3.162,3.162,0,1,1,0-5.1l5.349-2.572a3.165,3.165,0,1,1,.788,1.64L15.81,16.932A3.153,3.153,0,0,1,16,18Z"
                              transform="translate(806.999 2277)"
                              fill="#fff"
                            />
                          </g>
                        </svg>
                      </a>
                    </div> */}
                  </div>
                  <div className={`flex flex-col p-4 text-[#fff]`}
                    style={{
                      backgroundColor: CLAIM_RATING[claim.rating.slug]
                    }}
                  // sx={{
                  //   display: 'flex',
                  //   flexDirection: 'column',
                  //   p: (theme) => `${theme.space.spacing5}`,
                  //   color: (theme) => `${theme.colors.textLight}`,
                  //   bg: CLAIM_RATING[claim.rating.slug],
                  // }}
                  >
                    <h2 className='font-bold py-2'
                    // sx={{ fontWeight: 'bold', py: (theme) => `${theme.space.spacing3}` }}
                    >
                      Claim:{' '}
                    </h2>
                    <div className="parsed flex"
                    // sx={{ display: 'flex' }}
                    >
                      {claim.claim}
                      {claim.rating.medium && (
                        <img className='w-1/6 h-full m-2 rounded-tl	rounded-tr	 '
                          src={claim.rating.medium?.url.proxy}
                          alt={claim.rating.medium?.alt_text}
                        //onError={addDefaultSrc}
                        // sx={{
                        //   width: '1/6',
                        //   height: 'full',
                        //   m: (theme) => `${theme.space.spacing3}`,
                        //   borderTopLeftRadius: 'default',
                        //   borderTopRightRadius: 'default',
                        // }}
                        />
                      )}
                    </div>
                  </div>
                  <div className='flex flex-col border-b p-4'
                  // sx={{
                  //   display: 'flex',
                  //   flexDirection: 'column',
                  //   p: (theme) => `${theme.space.spacing5}`,
                  //   borderBottomWidth: '1px',
                  // }}
                  >
                    <h2 className='font-bold'
                    // sx={{ fontWeight: 'bold' }}
                    >Fact: </h2>

                    <div className="parsed">
                      <p dangerouslySetInnerHTML={{ __html: claim.fact }} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

export default FactCheckWidget;
