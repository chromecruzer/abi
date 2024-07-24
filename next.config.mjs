/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    VITE_Gmail: process.env.VITE_Gmail,
    VITE_GPWD: process.env.VITE_GPWD,
    VITE_Rceiv: process.env.VITE_Rceiv,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'media.licdn.com' },
      { protocol: 'https', hostname: 'th.bing.com' },
    ],
  },
};

export default nextConfig;
