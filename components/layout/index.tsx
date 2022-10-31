/*
 * @Author: KazooTTT wangyijin1999@qq.com
 * @Date: 2022-10-31 23:31:54
 * @LastEditors: KazooTTT wangyijin1999@qq.com
 * @LastEditTime: 2022-10-31 23:32:02
 * @FilePath: /nextjs-portal/components/layout/index.tsx
 * @Description:
 */
// ./components/layout/index.tsx
import { FC } from "react";
import { IFooterProps, Footer } from "../footer/index";
import { INavBarProps, NavBar } from "../navbar/index";
import styles from "./styles.module.scss";

export interface ILayoutProps {
  navbarData: INavBarProps;
  footerData: IFooterProps;
}

export const Layout: FC<ILayoutProps & { children: JSX.Element }> = ({
  navbarData,
  footerData,
  children,
}) => {
  return (
    <div className={styles.layout}>
      <NavBar {...navbarData} />
      <main className={styles.main}>{children}</main>
      <Footer {...footerData} />
    </div>
  );
};
