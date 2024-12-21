/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["three"],
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    remotePatterns: [{ hostname: "assets.aceternity.com" }],
  },
};

export default nextConfig;
