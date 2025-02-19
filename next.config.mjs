/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // output:"export",
  images: {
    unoptimized: true, // Disable Next.js image optimization
  },
  basePath: "/portfolio", 
  assetPrefix: "/portfolio", 
};

export default nextConfig;
