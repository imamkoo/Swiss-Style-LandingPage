/** @type {import('next').NextConfig} */
const nextConfig = {
  // penting untuk Firebase Hosting statis
  output: 'export',

  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig