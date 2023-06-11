/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "www.society.at",
      "hydeparkwinterwonderland.com",
      "wembleypark.com",
    ],
  },
};

module.exports = nextConfig;
