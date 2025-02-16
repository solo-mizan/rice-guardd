import { register } from "module";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

const withPWAModule = require("next-pwa")({
  pwa: {
    dest: "public",
    disable: process.env.NODE_ENV === "development",
    register: true,
    skipWaiting: true,
  }
})

module.exports = withPWAModule(nextConfig);

export default nextConfig;
