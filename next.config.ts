import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    useLightningcss: true,
  },
  transpilePackages: ["next-mdx-remote"],
};

export default nextConfig;
