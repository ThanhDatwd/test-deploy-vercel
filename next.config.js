/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    experimental: {
      fontLoaders: [
        { loader: 'next/font/google', options: { subsets: ['latin'] } },
      ],
    },
  },
}

module.exports = nextConfig
