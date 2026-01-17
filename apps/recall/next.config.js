/** @type {import('next').NextConfig} */
const nextConfig = {
  // For static-only mode (mailto: links), uncomment the next line:
  // output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig

