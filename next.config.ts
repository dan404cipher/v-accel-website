import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  turbopack: {
    root: __dirname,
  },
  // Note: Image optimization requires a server, so unoptimized for static export
  // Consider using a CDN or image optimization service for production
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
        pathname: "/gh/devicons/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  // Optimize bundle size by tree-shaking unused exports
  experimental: {
    optimizePackageImports: ['lucide-react', 'motion'],
  },
  // Compress output
  compress: true,
};

export default nextConfig;
