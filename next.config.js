/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['doomvault.nyc3.digitaloceanspaces.com'],
  },
}

module.exports = nextConfig
