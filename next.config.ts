/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        // Optional: specify specific pathnames if needed (e.g., pathname: '/photos/**')
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        // Optional: specify specific pathnames if needed
      },
    ],
  },
};

module.exports = nextConfig;
