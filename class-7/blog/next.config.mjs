/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            hostname: 'media.wired.com'
          },
        ],
      },
};

export default nextConfig;
