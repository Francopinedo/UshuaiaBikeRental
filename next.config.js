/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
 // output: 'export',      
  images: {
    unoptimized: true,   
    domains: [],
  },
  // basePath: '/UshuaiaBikeRental', // <---
}

module.exports = nextConfig