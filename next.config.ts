import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/resume", destination: "/#work", permanent: false },
      { source: "/info", destination: "/", permanent: false },
      { source: "/work/reepl", destination: "/work/reepl-onboarding", permanent: true },
      // Shareable entry points for each portfolio view.
      { source: "/code", destination: "/?view=code", permanent: false },
      { source: "/design", destination: "/?view=design", permanent: false },
    ];
  },
};

export default nextConfig;
