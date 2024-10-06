/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    forceSwcTransforms: true,
  },
  images: {
    domains: ["localhost", "picsum.photos", "viviency.com" , 'flowbite.s3.amazonaws.com'], 
  },
};

export default nextConfig;
