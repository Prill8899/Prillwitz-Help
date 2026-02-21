/** @type {import("next").NextConfig} */
const nextConfig = {
  async rewrites() {
    const agentId = "AC8_WXwytVVhOpedaxdEH";

    return [
      // Help center
      { source: "/help/:path*", destination: `https://www.chatbase.co/help/${agentId}/:path*` },

      // Static assets
      { source: "/__cb/:path*", destination: "https://www.chatbase.co/__cb/:path*" },

      // Chat API
      { source: `/api/chat/${agentId}/:path*`, destination: `https://www.chatbase.co/api/chat/${agentId}/:path*` },

      // Auth (evita loop de /auth/signin)
      { source: "/auth/:path*", destination: "https://www.chatbase.co/auth/:path*" },
    ];
  },
};

export default nextConfig;
