/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://vacansee-gate.vercel.app?target=vacansee-au&next=/jr',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
