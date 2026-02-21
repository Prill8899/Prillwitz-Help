/** @type {import("next").NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/__cb/:path*",
        destination: "https://www.chatbase.co/__cb/:path*",
      },
      {
        source: "/api/chat/AC8_WXwytVVhOpedaxdEH/:path*",
        destination: "https://www.chatbase.co/api/chat/AC8_WXwytVVhOpedaxdEH/:path*",
      },
      {
        source: "/:path*",
        destination: "https://www.chatbase.co/help/AC8_WXwytVVhOpedaxdEH",
      },
    ];
  },
};

export default nextConfig;
