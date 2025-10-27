import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['images.prismic.io'], // Add this line to allow images from the external domain
},
};

export default nextConfig;
