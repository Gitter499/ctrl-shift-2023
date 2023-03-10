/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['pngfolio.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pngfolio.com',
        port: '',
        pathname: '/',
      }
    ],
  },
}

module.exports = nextConfig
