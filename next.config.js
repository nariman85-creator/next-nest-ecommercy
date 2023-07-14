/** @type {import('next').NextConfig} */
const nextConfig = {
  fontLoaders: [
    { loader: "@next/font/google", options: { subsets: ["latin"] } },
  ],
  compiler: {
    styledComponents: true,
  },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "yandex.ru",
  //       port: "",
  //       pathname: "/images/search/**",
  //     },
  //   ],
  // },
};

module.exports = nextConfig;
