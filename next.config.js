/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',      // <--- AÑADE ESTO (Genera archivos estáticos)
  images: {
    unoptimized: true,   // <--- AÑADE ESTO (GitHub no soporta el optimizador de Next)
    domains: [],
  },
  // basePath: '/UshuaiaBikeRental', // <--- Descomenta esto si las imágenes no cargan después
}

module.exports = nextConfig