/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",             // static export
  images: {
    unoptimized: true,          // Necessary for static sites (especially for GitHub Pages)
  },
  basePath: "/bcarrier",
  assetPrefix: "/bcarrier",
};

module.exports = nextConfig;
