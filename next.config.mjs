/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["img.clerk.com", "images.clerk.dev"], // allow Clerk image domains
  },
};

export default nextConfig;