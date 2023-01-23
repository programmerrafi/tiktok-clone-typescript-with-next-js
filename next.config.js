/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },

  reactStrictMode: true,
  images: {
    domains: ["portfolio-mdrafi.vercel.app", "lh3.googleusercontent.com"],
  },
};

module.exports = nextConfig;
