/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    forceSwcTransforms: true,
  },
  images: {
    domains: ["localhost", "picsum.photos"], // Buraya picsum.photos eklendi
  },
};

export default nextConfig;
