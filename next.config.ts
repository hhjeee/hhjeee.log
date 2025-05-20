import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ['next-mdx-remote'],

  async redirects() {
    return [
      {
        source: '/%EB%B8%94%EB%A1%9C%EA%B7%B8%EA%B0%9C%EB%B0%9C/:slug',
        destination: '/blog/:slug',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
