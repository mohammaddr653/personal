import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  outputFileTracingRoot: __dirname,  //برای اینکه فایل package-lock.json همین دایرکتوری را در نظر بگیرد
};

export default nextConfig;
