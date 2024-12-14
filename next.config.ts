/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",             // static export
  images: {
    unoptimized: true,          // Necessary for static sites (especially for GitHub Pages)
  },
  // remove when running localy 
  // allow when deploying
  
  // basePath:  "/bcarrier",
  // assetPrefix: "/bcarrier",
};

module.exports = nextConfig;
