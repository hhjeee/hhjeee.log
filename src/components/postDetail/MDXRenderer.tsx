'use client';

import { Suspense } from 'react';

import { MDXRemote } from 'next-mdx-remote';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import Image from 'next/image';

import type { MDXComponents } from 'mdx/types';

import LoadingSpinner from '@/components/LoadingSpinner';

import ErrorBox from './design/ErrorBox';
import HighlightBox from './design/HighlightBox';
import Highlighter from './design/Highlighter';
import InlineCodeBlock from './design/InlineCodeBlock';
import WavyLine from './design/WavyLine';

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
  Wavy: WavyLine,
  Highlighter: Highlighter,
  code: ({ children, ...props }) => {
    const isCodeBlock = 'data-language' in props;

    if (isCodeBlock) {
      return <code {...props}>{children}</code>;
    }

    return <InlineCodeBlock>{children}</InlineCodeBlock>;
  },
};

const MDXRenderer = ({ content }: { content: MDXRemoteSerializeResult }) => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <MDXRemote {...content} components={CustomComponents} />
    </Suspense>
  );
};

export default MDXRenderer;
