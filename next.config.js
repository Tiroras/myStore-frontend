/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    serverName: process.env.SERVER_URL,
    appUrl: process.env.APP_URL
  },
  images: {
    domains: ['loremflickr.com', 'www.aptronixndia.com', 'cloudflare-ipfs.com']
  }
};

module.exports = nextConfig;
