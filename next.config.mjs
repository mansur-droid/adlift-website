/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.adlift.agency' }],
        destination: 'https://adlift.agency/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
