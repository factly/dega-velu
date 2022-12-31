import * as React from 'react';
import { isBrowser } from 'src/utils/isBrowser';
import InnerHTML from 'dangerously-set-html-content';

export const parseTiptapContent = (description) => {
  if (!isBrowser || !description) return null;

  return (
    <>
      <InnerHTML className="ed-embeds" html={description} />
    </>
  );
};

export default parseTiptapContent;
