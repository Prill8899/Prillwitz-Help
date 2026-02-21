/** @type {import("next").NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      // Help center (mantiene el mismo path)
      { source: "/help/:path*", destination: "https://www.chatbase.co/help/:path*" },

      // Static assets
      { source: "/__cb/:path*", destination: "https://www.chatbase.co/__cb/:path*" },

      // Chat API (si la help page lo usa)
      { source: "/api/chat/:path*", destination: "https://www.chatbase.co/api/chat/:path*" },

      // Auth (evita loops)
      { source: "/auth/:path*", destination: "https://www.chatbase.co/auth/:path*" },
    ];
  },
};

export default nextConfig;
