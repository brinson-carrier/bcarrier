/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';


const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? 'https://brinson-carrier.github.io/bcarrier' : '',
  assetPrefix: isProd ? 'https://brinson-carrier.github.io/bcarrier' : '',
  
};

module.exports = nextConfig;
