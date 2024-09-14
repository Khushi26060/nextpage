/** @type {import('next').NextConfig} */
const nextConfig = { 
  reactStrictMode: true,
  images: {
    domains: ['api.thecodecafelab.com'], 
  },
};
module.exports = {
  images: {
    domains: ['localhost'],
  },
};


// module.exports = nextConfig;
