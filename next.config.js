/*
 * @Author: KazooTTT wangyijin1999@qq.com
 * @Date: 2022-10-29 14:59:04
 * @LastEditors: KazooTTT wangyijin1999@qq.com
 * @LastEditTime: 2022-10-29 15:12:06
 * @FilePath: /nextjs-portal/next.config.js
 * @Description:
 */
/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname),
    };
    return config;  
  },
};

module.exports = nextConfig;
