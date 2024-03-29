import { useRouter } from 'next/navigation';
import Link from 'next/link';
import React, { Children } from 'react';

const ActiveLink = ({ children, activeClassName, ...props }) => {
  const { asPath } = useRouter();
  // const child = Children.only(children);
  // const childClassName = child.props.className || '';

  // // pages/index.js will be matched via props.href
  // // pages/about.js will be matched via props.href
  // // pages/[slug].js will be matched via props.as
  // const className =
  //   asPath === props.href || asPath === props.as
  //     ? `${childClassName} ${activeClassName}`.trim()
  //     : childClassName;

  return (
    <Link {...props}>
      {children}
    </Link>
  );
};

export default ActiveLink;
