/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,   
  images: {
    domains: ['img.youtube.com']
  },
  serverExternalPackages: [
    '@react-email/components',
    '@react-email/render',
    '@react-email/tailwind'
  ]
}

module.exports = nextConfig
