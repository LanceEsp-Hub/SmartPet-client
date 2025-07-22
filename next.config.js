/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["localhost", "smart-pet-backend-production.up.railway.app"],
    unoptimized: true,
  },
}

module.exports = nextConfig
