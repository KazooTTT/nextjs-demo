/*
 * @Author: KazooTTT wangyijin1999@qq.com
 * @Date: 2022-10-29 14:59:04
 * @LastEditors: KazooTTT wangyijin1999@qq.com
 * @LastEditTime: 2022-10-31 23:34:45
 * @FilePath: /nextjs-portal/pages/_app.tsx
 * @Description:
 */
// .pages/_app.tsx
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout, ILayoutProps } from "@/components/layout";

const MyApp = (data: AppProps & ILayoutProps) => {
  const { Component, pageProps, navbarData, footerData } = data;

  return (
    <Layout navbarData={navbarData} footerData={footerData}>
      <Component {...pageProps} />
    </Layout>
  );
};
export default MyApp;
