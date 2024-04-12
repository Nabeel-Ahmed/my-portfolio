/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // basePath: "/personal-portfolio",
  images: {
    domains: ["s3-eu-west-1.amazonaws.com"],
    unoptimized: true,
  },
};

module.exports = nextConfig;
