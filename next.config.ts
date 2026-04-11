import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "www.elevate-bootcamp.cloud",
        pathname: "/storage/**",
      },
      {
        protocol: "https",
        hostname: "www.elevate-bootcamp.cloud",
        pathname: "/storage/**",
      },
    ],
  },
};

export default nextConfig;
