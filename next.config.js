/** @type {import('next').NextConfig} */


const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        pathname: '/ragab0/Ramy-Fitness/raw/main/public/imgs/**',
      },
    ],
  },
}


module.exports = nextConfig;
