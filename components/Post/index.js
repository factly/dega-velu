"use client"
import React, { useRef, useEffect, createRef } from 'react'; // eslint-disable-line no-unused-vars
import { jsx } from 'theme-ui';
import PostInfo from './PostInfo';
// import ShareButtonGroup from './ShareButtonGroup';
import FactCheckWidget from './FactCheckWidget';
import Tag from './Tag';
import Excerpt from './Excerpt';
import parseTiptapContent from 'src/utils/parseTiptapEditorData';
/**
 * TODO: URI encoding
 * TODO: borderradius in theme ui
 * TODO: Add backgroudn to embeds if failed like factly.in
 */

const Post = ({ post, observer = () => { } }) => {
  const postSection = useRef(null);
  const headerSocialIcon = createRef();

  useEffect(() => {
    // observer.observe(postSection.current);
    // observer.observe(headerSocialIcon.current);
  }, [observer, postSection, headerSocialIcon]);

  return (
    <>
      {/* <Seo title={post.title} description={post.excerpt} />
      <Helmet>
        {post.schemas?.map((schema, i) => (
          <script key={i} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}
      </Helmet>  */}
      <article
        className='flex flex-col px-6 my-6 text-base first-of-type:mt-0'
        post={post.id}
        ref={postSection}
        slug={post.slug}
      >
        <div className='bg-[#fff] overflow-hidden rounded-t rounded-b-none	'
        >
          <h1 className='font-bold text-3xl md:text-[2.5rem] py-2 leading-tight'
          >
            {post.title}
          </h1>
          <div className='flex flex-col md:flex-row justify-between'
          >
            <PostInfo date={post.published_date} users={post.users} categories={post.categories} />
            {/* <ShareButtonGroup
              setRef={headerSocialIcon}
              data={{
                url: encodeURIComponent(process.browser ? window.location.href : null),
                title: encodeURIComponent(post.title),
              }}
            /> */}
          </div>
        </div>
        <Excerpt excerpt={post.excerpt} image={post.medium} />

        <div className='w-full mx-auto text-base'
        >
          {post.claims && <FactCheckWidget claims={post.claims} />}
          <div className="parsed">
            {process.browser && parseTiptapContent(post.description_html)}
          </div>
          {post.claims &&
            post.claims?.map((claim, i) => (
              <React.Fragment key={i}>
                {post.claims.length > 1 && (
                  <div className='bg-[#EDF2F7] p-4 mt-4 '
                  >
                    <div className='mb-4'
                    >
                      <h4 className='font-bold'
                      >
                        Claim:{' '}
                      </h4>
                      {claim.claim}
                    </div>
                    <div>
                      <h4 className='font-bold'
                      >
                        Fact:
                      </h4>
                      <p dangerouslySetInnerHTML={{ __html: claim.fact }} />
                    </div>
                  </div>
                )}

                <div className="parsed">
                  {process.browser && parseTiptapContent(claim.description_html)}
                </div>
              </React.Fragment>
            ))}
          <div className='bg-[#f7fafc] mt-4'
          >
            {/*post.claims?.map(claim=>{
   return claim.review_sources?.map(review_source=>{
    return <a href={review_source.url} target="_blank" sx={{display:"block",}}>{review_source.description}</a> 
      })
    })
  */}

            {post.claims?.map((claim) =>
              claim.review_sources?.map((review_source, i) => (
                <a className='block'
                  href={review_source.url}
                  target="_blank"
                  // sx={{ display: 'block' }}
                  key={i}
                  rel="noreferrer noopener"
                >
                  {review_source.description}
                </a>
              )),
            )}
          </div>

          <div className='flex flex-wrap mt-6 pb-6 border-b	'
          >
            <div className='flex flex-wrap first-of-type:ml-0'
            >
              {post.tags?.map((tag, i) => (
                <Tag key={i} url={tag.slug} name={tag.name} />
              ))}
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Post;
