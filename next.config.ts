import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: 'export', // Disabled for full-stack deployment
  basePath: '/kukuconnect',
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // @ts-ignore - outputFileTracingIncludes might be missing in types
  outputFileTracingIncludes: {
    '/*': ['./node_modules/.prisma/client/**/*'],
    '/api/**/*': ['./node_modules/.prisma/client/**/*'],
  },
  experimental: {
  },
};

export default nextConfig;
