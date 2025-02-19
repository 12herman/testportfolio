/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // output:"export",
  images: {
    unoptimized: true, // Disable Next.js image optimization
  },
  basePath: "/testportfolio", 
  assetPrefix: "/testportfolio", 
};

export default nextConfig;
