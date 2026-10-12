import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/resume", destination: "/#work", permanent: false },
      { source: "/info", destination: "/", permanent: false },
      { source: "/work/reepl", destination: "/work/reepl-onboarding", permanent: true },
    ];
  },
};

export default nextConfig;
