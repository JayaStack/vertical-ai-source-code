/** @type {import('next').NextConfig} */

const nextConfig = {
  devIndicators: false,
  reactStrictMode: false,
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};


export default nextConfig;
