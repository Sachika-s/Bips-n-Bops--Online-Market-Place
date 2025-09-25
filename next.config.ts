/*
import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
};

export default withPayload(nextConfig);

*/

import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* your other config options here */
  eslint: {
    ignoreDuringBuilds: true, // disables ESLint for builds
  },
  typescript: {
    ignoreBuildErrors: true, // ✅ ignores TypeScript errors during build
  },
};

export default withPayload(nextConfig);

