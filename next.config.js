/** @type {import('next').NextConfig} */
const nextConfig = {
  fontLoaders: [
    { loader: "@next/font/google", options: { subsets: ["latin"] } },
  ],
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
