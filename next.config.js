/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['img.youtube.com']
    },
    experimental: {
      serverComponentsExternalPackages: [
        '@react-email/components',
        '@react-email/render',
        '@react-email/tailwind'
      ]
    }
}

module.exports = nextConfig
