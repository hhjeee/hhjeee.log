'use client';

import { MDXRemote } from 'next-mdx-remote';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { Suspense } from 'react';
import LoadingSpinner from '../LoadingSpinner';

const MDXRenderer = ({ content }: { content: MDXRemoteSerializeResult }) => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <MDXRemote {...content} />
    </Suspense>
  );
};

export default MDXRenderer;
