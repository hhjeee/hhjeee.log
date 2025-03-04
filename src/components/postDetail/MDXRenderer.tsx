'use client';

import { Suspense } from 'react';

import { MDXRemote } from 'next-mdx-remote';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import Image from 'next/image';

import type { MDXComponents } from 'mdx/types';

import LoadingSpinner from '@/components/LoadingSpinner';

import ErrorBox from './contentBox/ErrorBox';
import HighlightBox from './contentBox/HighlightBox';

const ImageComponent: MDXComponents = {
  img: ({ src, alt, width = 500, height = 300, ...props }) => {
    return (
      <Image
        src={src as string}
        alt={alt || ''}
        width={Number(width)}
        height={Number(height)}
        style={{ width: '100%', height: 'auto' }}
        sizes="100vw"
        {...props}
      />
    );
  },
};

const CustomComponents: MDXComponents = {
  ImageComponent,
  Error: ErrorBox,
  Highlight: HighlightBox,
};

const MDXRenderer = ({ content }: { content: MDXRemoteSerializeResult }) => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <MDXRemote {...content} components={CustomComponents} />
    </Suspense>
  );
};

export default MDXRenderer;
