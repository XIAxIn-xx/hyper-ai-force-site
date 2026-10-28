const nextConfig = {
  images: {
    formats: ["image/webp"],
    minimumCacheTTL: 2592000,
  },
  async headers() {
    return [
      { source: "/images/optimized/:path*", headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }] },
      { source: "/videos/optimized/:path*", headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }] },
    ];
  },
};

export default nextConfig;
