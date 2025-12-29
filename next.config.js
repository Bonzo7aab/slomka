/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,   
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
    ],
  },
  serverExternalPackages: [
    '@react-email/components',
    '@react-email/render',
    '@react-email/tailwind'
  ]
}

module.exports = nextConfig
