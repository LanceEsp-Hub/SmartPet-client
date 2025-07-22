/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "smart-pet-backend-production.up.railway.app",
      "localhost",
      "example.com",
      "placekitten.com",
      "images.unsplash.com",
      "source.unsplash.com",
      "res.cloudinary.com",
    ],
    unoptimized: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even with ESLint errors
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
