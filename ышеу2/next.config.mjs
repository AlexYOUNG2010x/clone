/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tabai.dev',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'hips.hearstapps.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'imageio.forbes.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.harvard.edu',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.designyourway.net',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
