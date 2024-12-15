/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",  // Allow all hostnames
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
