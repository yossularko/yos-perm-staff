import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Menghasilkan .next/standalone berisi server.js + node_modules seperlunya,
  // dipakai oleh runtime stage di Dockerfile.
  output: "standalone",
};

export default nextConfig;
