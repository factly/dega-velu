"use client"

import React, { useState, useEffect } from 'react';

// import Layout from '../components/Layout/index';
import Link from 'next/link';

const menuItems = [
  { title: 'About the Health Fellowship', slug: '#fellowship' },
  {
    title: 'About Factly',
    slug: '#about-factly',
  },
  {
    title: 'Background',
    slug: '#background',
  },

  {
    title: 'Mission',
    slug: '#mission',
  },
  {
    title: 'Vision',
    slug: '#vision',
  },

  {
    title: 'What We Do',
    slug: '#what-we-do',
  },
  {
    title: 'Contact Us',
    slug: '#contacts',
  },
];
const informationTools = [
  {
    name: 'Dega',
    desc: 'Dega is a lightweight, scalable & high performant open-source publishing platform for small and medium scale news media organizations. The platform has various features built-in for fact-checking organizations. Dega supports managing multiple organizations and sites from the same portal. It is developed for modern web features with all the publishing best practices built-in. The tool is written in Go & React.',
  },
  {
    name: 'MandE',
    desc: 'MandE is an open-source application to develop data portals to publish datasets in various formats. It provides features to publish private datasets and has e-commerce features specific to datasets. Datasets will be available for access as APIs and can be integrated with visualization platforms. MandE is written in Go for the backend and React for the frontend.',
  },
  {
    name: 'Kavach',
    desc: 'Kavach is an open-source identity and access management solution. It is a lightweight solution with features to manage organizations, users, permissions and can be configured easily to support applications required multitenancy. Kavach is written in Go, React and is built on ORY stack of services.',
  },
  {
    name: 'Bindu',
    desc: 'Bindu is a modern open-source Data visualization platform built on Vega, Vega-Lite. It provides the ability for analysts to create charts and dashboards from a rich set of chart templates. The access policies can be set at the chart level, providing ability to share it with a set of users or publish it for the general public. The backend for Bindu is written in Go and the frontend in React.',
  },
  {
    name: 'VidCheck',
    desc: 'VidCheck is a web application that makes video fact-checking more standardized for fact-checkers, easy to read and understand for audiences, and scalable for platforms & fact-checkers. The application can be used in cases where claims being fact-checked are part of the video such as political speeches, news content, documentaries, any other type of commentary, manipulated content etc. VidCheck is written in Go & React',
  },
  {
    name: 'Parlens',
    desc: 'Parlens is a tool for searching data that is indexed from Indian parliament datasets.',
  },
];
const Heading = () => { };
const About = () => {
  const [postActiveIndex, setPostActiveIndex] = useState('background');

  const createObserver = () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute('id');
        if (entry.intersectionRatio > 0) {
          setPostActiveIndex(`#${id}`);
        }
      });
    });

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });
  };
  useEffect(() => {
    createObserver();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* <div sx={{my:[12,12,12,24],p:6,mx:'auto',maxWidth:'1280px'}}>
        <h1 sx={{fontWeight:'bold', fontSize:['1.75rem','2.5rem','2.5rem','3.5rem'],textAlign:'center',lineHeight:'tight'}}>
          Factly will transform the public information landscape and spearhead citizen engagement
          with public data to evolve into a reliable and significant resource in the context of
          public information & governance.
        </h1>
      </div> */}
      <div className='flex flex-row justify-between py-8 px-4 xl:px-12 mt-12 md:mt-0'
      >
        <div
          className="sidebar hidden lg:flex sticky border-r w-1/3 lg:w-1/6"
        >
          <div className='block sticky mt-[60px]'
          >
            {menuItems?.map((item, index) => (
              <article
                className='flex flex-col leading-tight py-3 px-6'
                key={index}
              >
                <a className='no-underline hover:opacity-75'
                  href={item.slug}>
                  <div className='w-full flex flex-col'
                  >
                    <div
                      id={`nav-${index}`}
                      className={`w-full font-bold text-base text-[#2d3748] ${postActiveIndex === index && 'active'}`}
                    >
                      {item.title}
                    </div>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>
        <div
          className="aboutPage-sections flex flex-col w-full lg:w-5/6 p-2 md:p-6"
        >
          <section
            className='pl-2 lg:pl-8'
            // sx={{
            //   pl: [
            //     (theme) => `${theme.space.spacing3}`,
            //     null,
            //     null,
            //     (theme) => `${theme.space.spacing7}`,
            //   ],
            // }}
            id="fellowship"
          >
            <div className='mb-0 lg:mb-4'
            // sx={{
            //   mb: [0, null, null, (theme) => `${theme.space.spacing5}`],
            //   // pb: (theme) => `${theme.space.spacing5}`,
            // }}
            >
              <h3
                className="heading text-2xl"
              // sx={{
              //   fontSize: [(theme) => `${theme.fontSizes.h5}`],
              // }}
              >
                About the Health Fellowship
              </h3>
            </div>
            <div className='my-6 text-[#2d3748] text-base'
            // sx={{
            //   my: (theme) => `${theme.space.spacing6}`,
            //   // pb: (theme) => `${theme.space.spacing6}`,
            //   color: (theme) => `${theme.colors.textPrimary}`,
            //   fontSize: (theme) => `${theme.fontSizes.bodyArticleSmall}`,
            // }}
            >
              As part of their fact-checking program, social media giant Facebook has launched a
              Global Health Fellowship to combat Health Misinformation. Factly Media & Research has
              been shortlisted among the 10 fact-checking organizations across the globe to be
              offered this fellowship. The Fellowship announcement comes at a time when the world is
              reeling under the repercussions of misinformation owing to the ongoing COVID-19
              pandemic. During the Fellowship, the selected Fellows will take part in virtual
              training sessions by third-party experts and from CrowdTangle, a social analytics
              tool. On account of being Facebook’s credible Fact-checking partner, Factly aims to
              map the health misinformation landscape in India and accordingly develop methodologies
              and strategies to combat health-related misinformation in the country
            </div>
          </section>
          <section
            className='pl-2 lg:pl-8'
            id="about-factly"
          >
            <div className='mb-0 lg:mb-4'
            >
              <h3
                className="heading text-2xl"
              >
                About Factly
              </h3>
            </div>
            <div className='my-6 text-[#2d3748] text-base'
            >
              Started as an idea in 2014, it was in the mid-2010s that Factly moved into the Data
              journalism space, which was still in its nascent stages. By 2015, Factly had evolved
              from a blog to a company with an aim to transform the public information landscape by
              making data and information meaningful to people. Between 2016-18, Factly launched its
              own website and boosted the publishing of its in-house articles- this combination of
              the data stories along with YouTube videos helped Factly gain a foothold in the news
              media space through increased subscribers to its content. Today, Factly undertakes
              three broad categories of work- content production; tool-building; and consulting &
              training projects.
            </div>
          </section>
          <section className='pl-2 lg:pl-8'
            id="background"
          >
            <div className='mb-0 lg:mb-4'
            >
              <h3
                className="heading text-2xl"
              >
                Background
              </h3>
            </div>
            <div className='text-[#2d3748] text-base my-6'
            >
              In 2005, India legislated one of the best ‘Right to Information’ laws in the world
              which changed the public information landscape and accessibility in the country. It
              was the first step towards transparency and accountability of governance. In 2012,
              India came up with the National Data Sharing and Accessibility Policy (NDSAP),
              popularly known as the ‘Open Data policy’ of the Government of India. In Spite of
              these systems in place, data and information remain in complex and overwhelming
              formats in the country. Some of the data that is meant for the public does not even
              exist in the public domain. Factly was born to create supporting platforms and
              infrastructure to bridge this gap and strengthen democracy through engagement.
            </div>
          </section>
          <section className='pl-2 lg:pl-8'
            id="mission"
          >
            <div className='mb-0 lg:mb-4'
            >
              <h3
                className="heading text-2xl"
              >
                Mission
              </h3>
            </div>
            <div className='my-6 text-[#2d3748] text-base'
            >
              Factly strives to cultivate civic participation and engaging citizens in accessing,
              understanding and using important government data/information at various levels.
            </div>
          </section>
          <section className='pl-2 lg:pl-8'
            id="vision"
          >
            <div className='mb-0 lg:mb-4'
            >
              <h3
                className="heading text-2xl"
              >
                Vision
              </h3>
            </div>
            <div className='text-base text-[#2d3748] my-6'
            >
              Factly will strive to transform the public information landscape in India by improving
              access & understanding of the common public about important government
              data/information and evolve into a reliable and significant resource in the context of
              public information & governance.
            </div>
          </section>
          <section className='pl-2 lg:pl-8'
            id="what-we-do"
          >
            <div className='mb-0 lg:mb-4'
            >
              <h3
                className="heading text-2xl"
              >
                What We Do
              </h3>
            </div>
            <div className='flex flex-wrap text-[#2d3748] my-6 text-base'
            >
              <div className='flex flex-col flex-auto'>
                <h2 className='font-bold my-4 text-xl'
                >
                  Data Journalism/Fact Check
                </h2>
                <p className='py-4'
                >
                  Factly’s written and visual stories layout facts with evidence and help separate
                  the wheat from the chaff in times of hyper-connectivity and constant information
                  bombardment. The content aims to simplify public data & information that might
                  otherwise be in complex forms. The fact-checks debunk viral misinformation and lay
                  bare facts on the claims made by influencers.
                </p>
              </div>
              <div className='flex flex-col'
              >
                <h2 className='font-bold my-4 text-xl'
                >
                  Information Tools
                </h2>
                <p className='py-4'
                >
                  Creating and developing tools that will increase access to public data and
                  information by making it easy, interactive and intuitive. Counting India is
                  Factly’s first tool in its beta version that focuses on accessibility and data
                  visualization of Census-2011 data. Factly is currently working on other tools that
                  are in the development stage.
                </p>
                <div className='grid gap-4 lg:grid-cols-2 justify-around my-4'
                >
                  {informationTools?.map((tool) => (
                    <div className='flex flex-col mx-auto text-center my-6 max-w-[500]'
                      key={tool.name}
                    >
                      <h3 className='text-base mb-4 uppercase'
                      >
                        {tool.name}
                      </h3>
                      <p className='text-base'
                      >
                        {tool.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className='flex flex-col'
              >
                <h2
                  className="heading font-bold my-4 text-2xl"
                >
                  Advocating Open Data
                </h2>
                <p className='py-4'
                >
                  Factly believes that for better public engagement with government data, the supply
                  side also has to be strengthened. Factly actively advocates ‘Open Data’ policy to
                  governments and agencies that house large amounts of public information. Factly
                  collaborates and provides services to governments and institutions to release data
                  to the public domain. Besides these, Factly engages with various stakeholders from
                  across the ‘Open Data’ spectrum to build successful case studies & use cases.
                  Factly also conducts training sessions on accessing, understanding & analysing
                  public data to journalists, public policy enthusiasts, NGOs etc.
                </p>
              </div>
            </div>
          </section>
          <section className='pl-2 lg:pl-8'
            id="contacts"
          >
            <div
              className="mb-0 lg:mb-4 pb-4 border-b"
            >
              <h5
                className="heading text-2xl"
              >
                Contact Us
              </h5>
            </div>
            <div className='my-6'

            >
              <div>
                Email us at{' '}
                <a className='text-base text-[#3B82F6] hover:text-[#ea364a]'
                  href="mailto:hi@factly.in"
                >
                  hi@factly.in
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;
