import type { NextConfig } from "next";

const isGithubPages = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isGithubPages ? '/mahadmunir' : '',
  assetPrefix: isGithubPages ? '/mahadmunir/' : '',
  images: {
    unoptimized: true,
  },
};
//sad

export default nextConfig;
