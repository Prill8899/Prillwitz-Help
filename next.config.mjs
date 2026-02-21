/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      { source: "/help", destination: "https://chatbase.co/AC8_WXwytVVhOpedaxdEH/help" },
      { source: "/help/:path*", destination: "https://chatbase.co/AC8_WXwytVVhOpedaxdEH/help/:path*" },
      { source: "/__cb/:path*", destination: "https://chatbase.co/__cb/:path*" },
      { source: "/api/chat/AC8_WXwytVVhOpedaxdEH/:path*", destination: "https://chatbase.co/api/chat/AC8_WXwytVVhOpedaxdEH/:path*" },
    ];
  },
};
export default nextConfig;
