
"use client"
import React from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';
import Layout from '../components/Layout'
import 'styles/global.css';

export default function MyDocument({
  children,
}) {
  NProgress.configure({ showSpinner: false });
  Router.events.on('routeChangeStart', () => {
    NProgress.start();
  });
  Router.events.on('routeChangeComplete', () => {
    NProgress.done();
  });
  Router.events.on('routeChangeError', () => NProgress.done());

  return (
    <html>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}


