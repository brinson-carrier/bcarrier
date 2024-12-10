import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Required for GitHub Pages
  },
  basePath: "/bcarrier", // Adjust to your GitHub repository name
  assetPrefix: "/bcarrier",
};

export default nextConfig;
