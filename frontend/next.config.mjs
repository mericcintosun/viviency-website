/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    forceSwcTransforms: true,
  },
  images: {
    domains: ["localhost", "picsum.photos", "viviency.com"], // viviency.com eklendi
  },
};

export default nextConfig;
