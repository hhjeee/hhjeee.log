import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ['next-mdx-remote'],

  async redirects() {
    return [
      {
        source: '/blog/error1',
        destination: '/Blog/error1',
        permanent: true,
      },
      {
        source: '/%EB%B8%94%EB%A1%9C%EA%B7%B8%EA%B0%9C%EB%B0%9C/gfm',
        destination: '/Blog/gfm',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
