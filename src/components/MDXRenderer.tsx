"use client";

import { MDXRemote } from "next-mdx-remote";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

const MDXRenderer = ({ content }: { content: MDXRemoteSerializeResult }) => {
  return <MDXRemote {...content} />;
};

export default MDXRenderer;
