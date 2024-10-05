/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    forceSwcTransforms: true,
  },
  images: {
    domains: ["localhost", "picsum.photos", "viviency.com"], 
  },
};

export default nextConfig;
