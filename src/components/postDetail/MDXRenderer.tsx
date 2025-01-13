'use client';

import { Suspense } from 'react';

import { MDXRemote } from 'next-mdx-remote';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';

import LoadingSpinner from '@/components/LoadingSpinner';

const MDXRenderer = ({ content }: { content: MDXRemoteSerializeResult }) => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <MDXRemote {...content} />
    </Suspense>
  );
};

export default MDXRenderer;
