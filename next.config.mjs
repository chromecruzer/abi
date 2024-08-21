/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    VITE_Gmail: process.env.VITE_Gmail,
    VITE_GPWD: process.env.VITE_GPWD,
    VITE_Rceiv: process.env.VITE_Rceiv,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'media.licdn.com' },
      { protocol: 'https', hostname: 'th.bing.com' },
      { protocol: 'https', hostname: 'i.ibb.co' },
    ],
  },
};

export default nextConfig;
