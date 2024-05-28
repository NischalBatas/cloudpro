/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["blogscloudproai-7a4c2b.ingress-erytho.ewp.live"],
  },
  async rewrites() {
    return [
      {
        source: '/newsletter',
        destination: 'https://pwnh3l165d.execute-api.us-east-1.amazonaws.com/Prod/subscribe',
      },
    ];
  },
};

export default nextConfig;
