import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    // App icon / screenshots served from Apple's CDN.
    remotePatterns: [{ protocol: "https", hostname: "is1-ssl.mzstatic.com" }],
  },
};

export default withNextIntl(nextConfig);
