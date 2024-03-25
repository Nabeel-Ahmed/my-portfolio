/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    domains: ["s3-eu-west-1.amazonaws.com"],
  },
};
  

module.exports = nextConfig
