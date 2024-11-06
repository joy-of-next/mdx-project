import type { NextConfig } from "next";
import { withContentCollections } from "@content-collections/next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    useLightningcss: true,
  },
  transpilePackages: ["next-mdx-remote"],
};

export default withContentCollections(nextConfig);
