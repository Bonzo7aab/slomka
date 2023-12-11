/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['three'],
    images: {
        domains: ['img.youtube.com']
      }
}

module.exports = nextConfig
