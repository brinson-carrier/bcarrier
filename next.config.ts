/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",             // static export
  images: {
    unoptimized: true,
  },
  // remove when running localy 
  // allow when deploying
  
  basePath:  "/bcarrier",
  assetPrefix: "/bcarrier",
  
  "homepage": "https://brinson-carrier.github.io/bcarrier/"
};

module.exports = nextConfig;
