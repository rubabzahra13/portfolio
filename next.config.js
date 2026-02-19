/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'app.carepropertyhub.co.uk' },
      { hostname: 'admin.carepropertyhub.co.uk' },
      { hostname: 'main.d3970mma5pzr9g.amplifyapp.com' },
    ],
  },
};

module.exports = nextConfig;
