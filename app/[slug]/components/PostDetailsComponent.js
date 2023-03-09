"use client"
import React from 'react';
import Link from 'next/link';
import gql from 'graphql-tag';
import { jsx } from 'theme-ui';
import { FaTwitterSquare, FaFacebookSquare, FaWhatsappSquare } from 'react-icons/fa';
import Post from 'components/Post';
import { client } from 'store/client';
import Head from 'next/head';
import parseDate from 'src/utils/parseDate';
import { notFound } from 'next/navigation';

export default function PostDetailsComponent({ data }) {
  const { post, posts } = data;

  if (!post) {
    notFound();
  }
  // const filteredPosts = dega.posts.nodes.filter((post) => post.published_date !== null);
  const filteredPosts = posts.nodes.filter((p) => p.id !== post.id).slice(0, 6);
  //posts.unshift(dega.post);

  //const [postItems, setPostItems] = React.useState(posts.slice(0, 1));
  // const [hasNextPage, setHasNextPage] = React.useState(true);
  const [showSocialIcon, setShowSocialIcon] = React.useState(false);
  const [postActiveIndex, setPostActiveIndex] = React.useState(parseInt(post.id));
  // const [relatedPosts, setRelatedPosts] = React.useState(posts.slice(0, 10));
  // const [hasNextPageRelatedPost, setHasNextPageRelatedPost] = React.useState(true);
  const [observer, setObserver] = React.useState({
    observe: () => { },
  });
  // const handleLoadMore = () => {
  //   if (!hasNextPage) return false;
  //   const nextPageItems = posts.slice(postItems.length, postItems.length + 1);
  //   setPostItems([...postItems, ...nextPageItems]);
  //   setHasNextPage(postItems.length < posts.length);
  // };

  // const handleLoadMoreRelatedPosts = () => {
  //   if (!hasNextPageRelatedPost) return false;
  //   const nextPageItems = posts.slice(relatedPosts.length, relatedPosts.length + 10);
  //   setRelatedPosts([...relatedPosts, ...nextPageItems]);
  //   setHasNextPageRelatedPost(relatedPosts.length < posts.length);
  // };

  const handleShowSocialIcon = (entry) => {
    if (entry.intersectionRatio > 0) {
      setShowSocialIcon(false);
    } else {
      setShowSocialIcon(true);
    }
  };

  const handleSetActiveLink = (entry) => {
    const id = entry.target.getAttribute('slug');
    if (entry.intersectionRatio > 0) {
      setPostActiveIndex(id);
      if (process.browser) {
        //  window.history.pushState('page2', 'Title', `/${id}`);
      }
    }
  };

  const createObserver = () => {
    const o = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target.hasAttribute('social-icon')) {
          handleShowSocialIcon(entry);
        }
        if (entry.target.hasAttribute('post')) {
          handleSetActiveLink(entry);
        }
      });
    });
    setObserver(o);
  };
  React.useEffect(() => {
    createObserver();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // for sharing links
  const title = encodeURIComponent(post.title);
  let url;
  if (process.browser) {
    url = encodeURIComponent(window.location.href);
  }
  return (
    <>
      <Head>
        <title> {post.title} </title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.medium?.url?.proxy} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        {post.schemas &&
          post.schemas?.map((schema, i) => (
            <script key={i} type="application/ld+json">
              {JSON.stringify(schema)}
            </script>
          ))}
      </Head>
      <div
        className='flex flex-row justify-center relative'
      // sx={{
      //   display: 'flex',
      //   flexDirection: 'row',
      //   justifyContent: 'center',
      //   position: 'relative',
      // }}
      >
        <div className='flex flex-column w-full max-w-screen-lg mx-auto p-2 lg:p-10 md:pl-10'
        // sx={{
        //   // display: 'flex',
        //   // flexDirection: 'column',
        //   // width: '100%',
        //   // maxWidth: 1024,
        //   // mx: 'auto',
        //   // p: [
        //   //   (theme) => `${theme.space.spacing3}`,
        //   //   null,
        //   //   null,
        //   //   (theme) => `${theme.space.spacing8}`,
        //   // ],
        //   // pl: (theme) => [null, null, `${theme.space.spacing8}`],
        // }}
        >
          <Post post={post} observer={observer} />
          {/* <InfiniteScroll
            pageStart={0}
            loadMore={handleLoadMore}
            hasMore={hasNextPage}
            loader={
              <div className="loader" key={0}>
                Loading ...
              </div>
            }
          >
            {postItems?.map((item) => (
              <Post key={`details${item.id}`} post={item} observer={observer} />
            ))}
          </InfiniteScroll> */}
          {showSocialIcon && (
            <>
              <div
                className="top-auto hidden md:flex flex-column fixed ml-10 items-center justify-start md:justify-end"
                style={{
                  top: '40vh',
                }}
              // sx={{
              //   display: ['none', null, 'flex'],
              //   flexDirection: 'column',
              //   position: 'fixed',
              //   ml: (theme) => `-${theme.space.spacing8}`,
              //   // left: 0,
              //   alignItems: 'center',
              //   justifyContent: ['flex-start', null, 'flex-end'],
              //   top: '40vh',
              // }}
              >
                <a
                  title="Share on Facebook"
                  href={`https://www.facebook.com/sharer.php?u=${url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='block mx-2 first-of-type:mx-0 my-1 font-semibold rounded'
                // sx={{
                //   display: 'block',
                //   mx: (theme) => `${theme.space.spacing3}`,
                //   '&:first-of-type': { mx: 0 },
                //   my: (theme) => `${theme.space.spacing2}`,
                //   fontWeight: 'semibold',
                //   borderRadius: 'default',
                // }}
                >
                  <FaFacebookSquare
                    className='text-[2rem] text-[#3b5998]'
                  // sx={{ fontSize: (theme) => `${theme.fontSizes.h4}` }}
                  // color="#3b5998"
                  />
                </a>
                <a
                  title="Tweet it"
                  href={`https://twitter.com/share?text=${title}-&url=${url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='block mx-2 first-of-type:mx-0 my-1 font-semibold rounded'
                // sx={{
                //   display: 'block',
                //   mx: (theme) => `${theme.space.spacing3}`,
                //   '&:first-of-type': { mx: 0 },
                //   my: (theme) => `${theme.space.spacing2}`,
                //   fontWeight: 'semibold',
                //   borderRadius: 'default',
                // }}
                >
                  <FaTwitterSquare
                    className='text-[2rem] text-[#1da1f2]'
                  // sx={{ fontSize: (theme) => `${theme.fontSizes.h4}` }}
                  // color="#1da1f2"
                  />
                </a>
                <a
                  title="Share on WhatsApp"
                  href={`https://api.whatsapp.com/send?text=${title}-${url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='block mx-2 first-of-type:mx-0 my-1 font-semibold rounded'
                // sx={{
                //   display: 'block',
                //   mx: (theme) => `${theme.space.spacing3}`,
                //   '&:first-of-type': { mx: 0 },
                //   my: (theme) => `${theme.space.spacing2}`,
                //   fontWeight: 'semibold',
                //   borderRadius: 'default',
                // }}
                >
                  <FaWhatsappSquare
                    className='text-[2rem] text-[#25d366]'
                  // sx={{ fontSize: (theme) => `${theme.fontSizes.h4}` }}
                  // color="#25d366"
                  />
                </a>
              </div>
            </>
          )}
          <div>
            <h4>Recent Posts</h4>
            <div className='flex flex-wrap'
            // sx={{ display: 'flex', flexWrap: 'wrap' }}
            >
              {filteredPosts?.map((p) => (
                <div
                  className='p-6 text-left max-w-[50%] flex-[0_0_50%]'
                  key={p.id}
                // sx={{
                //   flex: [null, null, '0 0 50%'],
                //   maxWidth: [null, null, '50%'],
                //   // p: '1.5rem',
                //   // textAlign: 'left',
                // }}
                >
                  <Link className='flex cursor-pointer'
                    // sx={{ display: 'flex', cursor: 'pointer' }} 
                    href={`/${p.slug}`}>
                    <div className='flex-[0_0_33%]'
                    // sx={{ flex: '0 0 33%' }}
                    >
                      <img src={p?.medium?.url?.proxy} alt="" />
                    </div>
                    <div className='pl-4 flex-[0_0_67%] '
                    // sx={{ flex: '0 0 67%', pl: '1rem' }}
                    >
                      <h5>{p.title}</h5>
                      <p className='text-xs'
                      // sx={{ fontSize: '0.75rem' }}
                      >{parseDate(p.published_date)}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

