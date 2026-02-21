/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://www.chatbase.co/help/AC8_WXwytVVhOpedaxdEH',
        permanent: false,
      },
    ]
  },
}

export default nextConfig;
