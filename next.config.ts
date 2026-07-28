import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "192.168.0.7",
    "172.27.112.1",
  ],
};

export default nextConfig;