import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      { source: "/info", destination: "/about", permanent: true },
      { source: "/work/reepl", destination: "/work/reepl-onboarding", permanent: true },
      { source: "/work/vizzly", destination: "/work/formpilot", permanent: true },
      { source: "/work/ui-blocks", destination: "/work", permanent: true },
    ];
  },
  async headers() {
    return [{
      source: "/:path*",
      headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
      ],
    }];
  },
};

export default nextConfig;
