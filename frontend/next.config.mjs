/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        forceSwcTransforms: true,
      },
      images: {
        domains: ["localhost" ], 
      },
};

export default nextConfig;
