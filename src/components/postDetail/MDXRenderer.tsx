'use client';

import { MDXRemote } from 'next-mdx-remote';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { Suspense } from 'react';

const MDXRenderer = ({ content }: { content: MDXRemoteSerializeResult }) => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <MDXRemote {...content} />
    </Suspense>
  );
};

export default MDXRenderer;
