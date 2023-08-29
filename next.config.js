/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['m.media-amazon.com',"firebasestorage.googleapis.com","localhost","brandesignhub.com"],
  },
}

module.exports = nextConfig
