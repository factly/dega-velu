/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
"use client"
import React, { useEffect } from 'react'; // eslint-disable-line no-unused-vars

const PodcastsPage = () => {
  const unviralImg = '/unviral.jpg';
  const appleLogo = '/podcastBadges/apple.svg';
  const spotifyLogo = '/podcastBadges/spotify.svg';
  const googleLogo = '/podcastBadges/google.svg';
  const amazonLogo = '/podcastBadges/amazon.png';
  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://www.buzzsprout.com/1663999.js?container_id=buzzsprout-large-player-1663999&player=large';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <div className='max-w-[1200] mx-auto text-center px-6'
      // sx={{
      //   maxWidth: 1200,
      //   mx: 'auto',
      //   textAlign: 'center',
      //   px: (theme) => `${theme.space.spacing6}`,
      // }}
      >
        <div className='grid grid-cols-[1fr] md:[1fr 1fr] pt-8 mb-8'
        // sx={{
        //   display: 'grid',
        //   gridTemplateColumns: ['1fr', null, '1fr 1fr'],
        //   pt: (theme) => `${theme.space.spacing7}`,
        //   mb: (theme) => `${theme.space.spacing7}`,
        // }}
        >
          <div>
            <img className='max-w-[150] sm:max-w-[200] md:[250] max-h-[150] sm:max-h-[200] md:max-h-[250] mx-auto w-auto h-full rounded-2xl	shadow-[0px 0px 20px 0px rgba(0,0,0,0.75)] '
              src={unviralImg}
              alt="Un-Viral"
            // sx={{
            //   maxWidth: [150, 200, 250],
            //   maxHeight: [150, 200, 250],
            //   height: '100%',
            //   width: 'auto',
            //   mx: 'auto',
            //   boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.75)',
            //   borderRadius: 4,
            // }}
            />
          </div>
          <div className='mb-6 md:mb-0 self-center'
          // sx={{ alignSelf: 'center', mt: [(theme) => `${theme.space.spacing6}`, null, 0] }}
          >
            <h1 className='text-center text-2xl sm:text-[2rem]'
            // sx={{
            //   textAlign: 'center',
            //   fontSize: [(theme) => `${theme.fontSizes.h5}`, (theme) => `${theme.fontSizes.h4}`],
            // }}
            >
              Un-Viral
            </h1>
            <p className='text-base sm:text-xl'
            // sx={{
            //   fontSize: [(theme) => `${theme.fontSizes.h7}`, (theme) => `${theme.fontSizes.h6}`],
            // }}
            >
              Un-Viral is a podcast from Factly where we tackle that dangerous combination of the
              two kinds of virality—misinformation about health. Tune in to discern the real from
              the fake, and remember to Un-Viral.{' '}
            </p>
            <div className='flex flex-wrap justify-center mt-6'
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                mt: (theme) => `${theme.space.spacing5}`,
                a: {
                  display: 'inline-block',
                  p: (theme) => `${theme.space.spacing3}`,
                },
                img: {
                  display: 'inline-block',
                  maxHeight: 10,
                  transition: '0.3s',
                  '&:hover': {
                    transform: 'scale(1.1)',
                  },
                },
              }}
            >
              <a className='inline-block p-2'
                href="https://podcasts.apple.com/in/podcast/un-viral/id1552026867"
                target="_blank"
                rel="noopener noreferrer"
                title="Listen on Apple Podcasts"
              >
                <img className='in line-block max-h-[10] transition-[0.3s] hover:scale-110'
                  src={appleLogo} alt="Listen on Apple Podcasts" />
              </a>
              <a className='inline-block p-2'
                href="https://open.spotify.com/show/1p5LnkBABZuLV4jsd6LqWo"
                target="_blank"
                rel="noopener noreferrer"
                title="Listen on Spotify Podcasts"
              >
                <img className='in line-block max-h-[10] transition-[0.3s] hover:scale-110'
                  src={spotifyLogo} alt="Listen on Spotify Podcasts" />
              </a>
              <a className='inline-block p-2'
                href="https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5idXp6c3Byb3V0LmNvbS8xNjYzOTk5LnJzcw=="
                target="_blank"
                rel="noopener noreferrer"
                title="Listen on Google Podcasts"
              >
                <img className='in line-block max-h-[10] transition-[0.3s] hover:scale-110'
                  src={googleLogo} alt="Listen on Google Podcasts" />
              </a>
              <a className='inline-block p-2'
                href="https://music.amazon.com/podcasts/dbf5062a-af36-428a-acd1-57f2d37cad2a"
                target="_blank"
                rel="noopener noreferrer"
                title="Listen on Amazon Podcasts"
              >
                <img className='in line-block max-h-[10] transition-[0.3s] hover:scale-110'
                  src={amazonLogo} alt="Listen on Amazon Podcasts" />
              </a>
            </div>
          </div>
        </div>

        <div className='w-full my-6'
        //  sx={{ width: '100%', my: (theme) => `${theme.space.spacing6}` }}
        >
          <div id="buzzsprout-large-player-1663999"></div>
        </div>
      </div>
    </>
  );
};

export default PodcastsPage;
